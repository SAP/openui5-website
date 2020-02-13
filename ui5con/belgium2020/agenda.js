var oTracks = {
	"track1": [],
	"track2": []
};
var oTracksStatic = require('./data/tracks.json');
var aSpeakersStatic = require('./data/speakers.json');

var aSpeakersGlobal = [];

var bTracksLoaded = false;
var bSpeakersLoaded = false;

// parameter of URL
var VIEW_PARAMETER = "view";
var TRACKS_VIEW = "tracks";
var SPEAKERS_VIEW = "speakers";

// Dummy session type for breaks
var TOPIC_TYPE_BREAK = "break";

// css classes
var DISPLAY_NONE_CSS = "display_none";
var ACTIVE_BUTTON_CSS = "active";



function extractSessions(oSession, oResult, sType) {
	var sSessionLocation = oSession.location;

	var sSpeakers = "";
	var sKomma = "";

	// if (oSession.title !== "Welcome" && oSession.title !== "Closing Words") {
	for (var i = 0; i < oSession.speakers.length; i++) {
		sSpeakers = sSpeakers + sKomma + oSession.speakers[i].firstName + " " + oSession.speakers[i].lastName;
		sKomma = ", ";
	}
	// }

	var oNewEntry = {
		"title": oSession.title,
		"type": "", //oSession.type,
		"speaker": sSpeakers,
		"startTime": oSession.startTime,
		"endTime": oSession.endTime,
		"duration": _duration(oSession.startTime, oSession.endTime),
		"abstract": oSession.description
	};

	if (sType === "Track" && sSessionLocation.startsWith("demo")) {
		switch (sSessionLocation) {
			case "demo_02":
				oResult.track1.push(oNewEntry);
				break;
			case "demo_03":
				oResult.track2.push(oNewEntry);
				break;
		}

	}

	return oResult;

}

function extractSpeakers(oSession, aResult) {
	for (var i = 0; i < oSession.speakers.length; i++) {
		var sSpeaker = oSession.speakers[i].firstName.trim() + " " + oSession.speakers[i].lastName.trim();
		var oNewEntry = {
			"name": sSpeaker,
			"firstName": oSession.speakers[i].firstName.trim(),
			"lastName": oSession.speakers[i].lastName.trim(),
			"bio": oSession.speakers[i].bio + "",
			"picture": "https://ui5conbelgiumcfp.cfapps.eu10.hana.ondemand.com" + oSession.speakers[i].photoUrl,
			"company": oSession.speakers[i].company + ""
		};
		if (aResult.findIndex(function(element) {
				return element.name === oNewEntry.name;
			}) < 0) // only unique entries
			aResult.push(oNewEntry);
	}
	return aResult;
}


function _insertBreaks(aTracks, sStartTime) {
	var sCurrTime = sStartTime;
	for (i = 0; i < aTracks.length; i++) {
		var iBreak = _duration(sCurrTime, aTracks[i].startTime);
		sCurrTime = aTracks[i].endTime;
		if (iBreak >= 5) {
			aTracks.splice(i, 0, {
				"type": "break",
				"duration": iBreak
			});
			i++;
		}
	}
}

function _insertEveningEvent(aTracks) {
	aTracks.push({
		"title": "Evening Event",
		"speaker": "Everybody @ UI5con",
		"type": "",
		"duration": 60,
		"startTime": "16:40",
		"endTime": "19:00",
		"abstract": "Join us for our cozy evening event happening in the Customer Experience Center to discuss and chill after this exciting day. There’ll be food and drinks and most importantly: loads of fellow devs to get to know!"
	});
}
function _insertGoodbye(aTracks) {
	aTracks.push({
		"title": "Thanks and see you ...",
		"speaker": "Nicolas Goris",
		"type": "",
		"duration": 10,
		"startTime": "16:30",
		"endTime": "16:40",
		"abstract": "Thanks to everybody and see you soon!"
	});
}

function preparePage() {
	_insertGoodbye(oTracks.track1);
	_insertEveningEvent(oTracks.track1);
	_insertEveningEvent(oTracks.track2);

	var sStartTime = "09:00";
	_insertBreaks(oTracks.track1, sStartTime);
	_insertBreaks(oTracks.track2, sStartTime);

	$(document).ready(function() {
		prepareTracks(oTracks, "s_");
		prepareSpeakers(aSpeakersGlobal);

		// if no the view parameter is undefined, show the tracks view by default
		var sViewName = getUrlParameter(VIEW_PARAMETER) || TRACKS_VIEW;
		updatePage(sViewName, window.location.hash);

		// close popup on escape key
		$(document).keyup(function(e) {
			if (e.which === 27) {
				closePopup();
			}
		});
		// close popup on block layer click
		$('#popupBlocklayer').click(closePopup);
		$('#popup').click(closePopup);

		$('#app-download').click(showAppPopup);
	});

	$(window).bind("hashchange", function() {
		var sHash = window.location.hash.split("#")[1];
		if (sHash) {
			var iTop = $(sHash).offset().top;
			$(window).scrollTop(iTop);
		}
	});
}

jQuery.ajax({
	url: "https://ui5conbelgiumcfp.cfapps.eu10.hana.ondemand.com/api/proposal/lineup"
}).done(function(aSessions) {

	aSessions.sort(function(a, b) {
		if (a.startTime.split(":")[0].length === 1) {
			a.startTime = "0" + a.startTime;
		}
		if (b.startTime.split(":")[0].length === 1) {
			b.startTime = "0" + b.startTime;
		}
		if (a.startTime < b.startTime) {
			return -1;
		}
		if (a.startTime > b.startTime) {
			return 1;
		}

		// names must be equal
		return 0;
	});

	for (var i = 0; i < aSessions.length; i++) {
		var oSession = aSessions[i];

		oTracks = extractSessions(oSession, oTracks, "Track");
		aSpeakersGlobal = extractSpeakers(oSession, aSpeakersGlobal);
	}
	preparePage();
}).fail(function() {
	oTracks = oTracksStatic;
	aSpeakersGlobal = aSpeakersStatic;
	preparePage();
});

/*
 * Switch between tracks/booths agenda and speakers views
 */
window.switchAgenda = function(sViewName) {
	window.location.href = addOrReplaceUrlParameter(VIEW_PARAMETER, sViewName)
};

function prepareTracks(oTracks, sIdPrefix) {
	var iTrackId = 0;
	$.each(oTracks, function(sTrackIndex, oTrack) {
		$.each(oTrack, function(sTopicIndex, oTopic) {
			oTopic.id = sIdPrefix + iTrackId++;
		});
	});
}

/*
 * Initializes id properties of each speaker entity
 */
function prepareSpeakers(aSpeakers) {
	var iSpeakerId = 0;
	$.each(aSpeakers, function(sIndex, aSpeaker) {
		aSpeaker.id = "sp_" + iSpeakerId++;
	});
}

/*
 * Updates page layout according to the actual hash.
 * The respective view becomes visible, other - hidden.
 * @param {string} sActiveView The view to be activated
 * @param {string} sHash Hash of the current URL
 */
function updatePage(sActiveView, sHash) {
	updateTracksView(sActiveView);
	updateSpeakersView(sActiveView);
	if (sHash) {
		var iTop = $(sHash).offset().top;
		$(window).scrollTop(iTop);
	}
}

/*
 * Updates visibility of the tracks view, loads its content if necessary.
 */
function updateTracksView(sHash) {
	fillTracksInfo();
	if (sHash == TRACKS_VIEW) {
		$("#tracksSection").show();
		$("#tracks").addClass(ACTIVE_BUTTON_CSS);
	} else {
		$("#tracksSection").hide();
		$("#tracks").removeClass(ACTIVE_BUTTON_CSS);
	}
}

/*
 * Updates visibility of the speakers view, loads its content if necessary.
 */
function updateSpeakersView(sHash) {
	if (sHash == SPEAKERS_VIEW) {
		$("#speakersSection").show();
		$("#speakers").addClass(ACTIVE_BUTTON_CSS);
		fillSpeakersInfo();
	} else {
		$("#speakersSection").hide();
		$("#speakers").removeClass(ACTIVE_BUTTON_CSS);
	}
}

function fillTracksInfo() {
	if (!bTracksLoaded) {
		// setup initial date
		var oInitialDate = new Date();
		oInitialDate.setHours(9);
		oInitialDate.setMinutes(0);
		fillTimeLine("timeLine-tracks", oInitialDate, 19, "Tracks");
		fillTracks(oTracks, oInitialDate, "Tracks");
		bTracksLoaded = true;
	}
}

function fillSpeakersInfo() {
	if (!bSpeakersLoaded) {
		createSpeakersViewContent();
		bSpeakersLoaded = true;
	}
}

function fillTimeLine(sTimeLineId, oInitialDate, iCount, sType) {
	var oDate = oInitialDate;
	var sTemplate = $("#timeline-item-template").html();

	for (var i = 1; i < iCount; i++) {
		var $content = sTemplate.replace("{{value}}", oDate.toTimeString().substring(0, 5));
		$("#" + sTimeLineId).append($content);
		oDate = _addMinutes(oDate, 30);
	}
}

function fillTracks(oTracks, oInitialDate, sSessionType) {
	$.each(oTracks, function(sTrackIndex, oTrack) {
		// init a start date for the track
		var oTopicStartDate = oInitialDate;
		var oTrackElement = $("#" + sTrackIndex);

		$.each(oTrack, function(sTopicIndex, oTopic) {
			var $content = _createTopicContent(oTopic, oTopicStartDate, sSessionType);
			oTrackElement.append($content);
		});
	});
}

function createSpeakersViewContent() {

	var oSortedSpeakersInfo = prepareSpeakersInfo();
	var aLetters = Object.keys((oSortedSpeakersInfo));

	// fill navigation letter panel
	var oNavLettersElement = $("#navigationLetters");
	var oSpeakersSection = $("#speakersSection");
	var sNavLetterTemplate = $("#nav-letter-item-template").html();
	var sSpeakersSectionTemplate = $("#speakers-section-item-template").html();
	var sLetterTemplate = $("#timeline-item-template").html();
	var sSpeakerTemplate = $("#speaker-item-template").html();

	$.each(oSortedSpeakersInfo, function(sLetter, oSpeakers) {
		// add the  letter to navigation panel
		var $content = sNavLetterTemplate.replace(new RegExp("{{letter}}", 'g'), sLetter);
		oNavLettersElement.append($content);

		// create a new speakers section for the letter
		var oSpeakersSectionItem = sSpeakersSectionTemplate.replace(new RegExp("{{letter}}", 'g'), sLetter);
		oSpeakersSection.append(oSpeakersSectionItem);

		// get the letter block element
		var oLetterBlock = $("#letter_" + sLetter);
		var oSpeakersBlock = $("#speakersBlock_" + sLetter);

		var oLetterItem = sLetterTemplate.replace("{{value}}", sLetter);
		oLetterBlock.append(oLetterItem);

		$.each(oSpeakers, function(sTopicIndex, oSpeaker) {
			var aSessions = findSession(oSpeaker.name);
			var oSession = null;
			var oSession2 = null;
			if (aSessions.length > 0) {
				oSession = aSessions[0];
			}
			if (aSessions.length > 1) {
				oSession2 = aSessions[1];
			}
			var sSessionId1 = oSession ? oSession.id : "";
			var sSessionTitle1 = oSession ? oSession.title : "";
			var sSessionId2 = oSession2 ? oSession2.id : "";
			var sSessionTitle2 = oSession2 ? oSession2.title : "";
			var sCompany = oSpeaker.company || "";
			var oSpeakerItem = sSpeakerTemplate
				.replace("{{id}}", oSpeaker.id)
				.replace("{{name}}", oSpeaker.name)
				.replace("{{bio}}", oSpeaker.bio)
				.replace("{{company}}", sCompany)
				.replace(/{{show-company}}/g, sCompany.length > 0 ? "" : DISPLAY_NONE_CSS)
				.replace("{{view1}}", sSessionId1.indexOf("s_") >= 0 ? TRACKS_VIEW : TRACKS_VIEW)
				.replace("{{session_id1}}", sSessionId1)
				.replace("{{session1}}", sSessionTitle1)
				.replace("{{view2}}", sSessionId2.indexOf("s_") >= 0 ? TRACKS_VIEW : TRACKS_VIEW)
				.replace("{{session_id2}}", sSessionId2)
				.replace("{{session2}}", sSessionTitle2)
				.replace("{{show-session1}}", sSessionTitle1.length > 0 ? "" : DISPLAY_NONE_CSS)
				.replace("{{show-session2}}", sSessionTitle2.length > 0 ? "" : DISPLAY_NONE_CSS)
				.replace("{{HH:MM}}", oSpeaker.meetMe)
				.replace("{{show-meet-me}}", oSpeaker.meetMe ? "" : DISPLAY_NONE_CSS)
				.replace("{{picture}}", oSpeaker.picture);
			oSpeakersBlock.append(oSpeakerItem);
		});
	});
}

function findSession(sSpeakerName, aIgnoreIndex) {
	var aResult = [];
	var oSession = null;
	var sSearchName = sSpeakerName.toUpperCase();

	$.each(oTracks, function(sTrackIndex, oTrack) {
		$.each(oTrack, function(sTopicIndex, oTopic) {
			if (oTopic.type != TOPIC_TYPE_BREAK && oTopic.speaker.toUpperCase().indexOf(sSearchName) >= 0) {
				oSession = oTopic;
				// break the internal loop
				return false;
			}
		});
		if (oSession) {
			aResult.push(oSession);
			oSession = null;
		}

	});

	return aResult;
}

// Sort speakers alphabetically by surname.
function prepareSpeakersInfo() {
	aSpeakersGlobal = $(aSpeakersGlobal).sort(function(oSpeaker1, oSpeaker2) {
		var sComp1FirstName = oSpeaker1.firstName.toUpperCase();
		var sComp2FirstName = oSpeaker2.firstName.toUpperCase();
		var sComp1LastName = oSpeaker1.lastName.toUpperCase();
		var sComp2LastName = oSpeaker2.lastName.toUpperCase();
		// Compare the surnames first, than names
		return sComp1LastName.localeCompare(sComp2LastName) || sComp1FirstName.localeCompare(sComp2FirstName);
	});

	var oSortedSpeakersInfo = {};
	$.each(aSpeakersGlobal, function(oIndex, oSpeaker) {

		// Classify a speaker simply by the first letter of a surname
		var sLetter = oSpeaker.lastName.trim().toUpperCase().substring(0, 1);
		if (!oSortedSpeakersInfo[sLetter]) {
			oSortedSpeakersInfo[sLetter] = [];
		}
		oSortedSpeakersInfo[sLetter].push(oSpeaker);
	});

	return oSortedSpeakersInfo;
}

/*
 * Generates a topic content
 * @param {object} oTopic Object contains topic description
 * @param {date} oDate (in) Beginning of the topic section
 * @param {date} oDate (out) End of the topic section (== beginning of the next session)
 */
function _createTopicContent(oTopic, oStartDate, sSessionType) {
	var sTemplate, sTitle, sTime, sType = oTopic.type,
		iDuration = oTopic.duration;

	if (sSessionType === "Tracks") {
		if (sType === "break") {
			sTitle = oTopic.title || "";
			sTemplate = $("#break-item-template").html();
		} else {
			if (oTopic.abstract && oTopic.abstract.length > 0) {
				sTemplate = (iDuration == 20) ? $("#track-item-template-20").html() : $("#track-item-template").html()
			} else {
				sTemplate = (iDuration == 20) ? $("#track-item-no-details-template-20").html() : $("#track-item-no-details-template").html()
			}

			sTitle = oTopic.title;
			sTemplate = sTemplate
				.replace("{{trackId}}", oTopic.speaker + "@@||@@" + oTopic.title)
				.replace("{{id}}", oTopic.id)
				.replace("{{type}}", oTopic.type);
			if (oTopic.duration > 10) {
				sTemplate = sTemplate
					.replace("{{speaker}}", oTopic.speaker);
			} else {
        sTemplate = sTemplate
					.replace("{{speaker}}", "");
      }
		}
	}

	var oEndDate = _addMinutes(oStartDate, iDuration);
	sTime = _getTimeSpanAsString(oStartDate, oEndDate);
	sTime = oTopic.startTime + "-" + oTopic.endTime;
	oStartDate = oEndDate;

	sTemplate = sTemplate
		.replace("{{duration}}", iDuration)
		.replace("{{title}}", sTitle)
		.replace("{{time}}", sTime);

	return sTemplate;
}

/*
 * Returns value of the specified URL parameter.
 */
function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		sURLVariables = sPageURL.split('&'),
		sParameterName, i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
};

/*
 * Updates value of the specified URL parameter.
 */
function addOrReplaceUrlParameter(sParam, sNewData) {
	var sStringToAdd = sParam + "=" + sNewData;

	if (window.location.search == "") return window.location.href + "?" + sStringToAdd;

	if (window.location.search.indexOf(sStringToAdd) >= 0) {
		return window.location.href;
	}

	// Currently only one parameter - view - is used,
	// so it is not necessary to take care of given parameters, just rewrite it.
	var sUrl = window.location.href.split("?")[0] + "?" + sStringToAdd;
	return sUrl;
}

/** Date & time functions **/
function _addMinutes(date, minutes) {
	return new Date(date.getTime() + minutes * 60000);
}

function _getTimeSpanAsString(oDateStart, oDateEnd) {
	return oDateStart.toTimeString().substring(0, 5) + " - " + oDateEnd.toTimeString().substring(0, 5);
}

function _duration(sTime1, sTime2) {
	var aParts1 = sTime1.split(":");
	var iTime1 = Math.round(parseInt(aParts1[0], 10) * 60 + parseInt(aParts1[1], 10));
	var aParts2 = sTime2.split(":");
	var iTime2 = Math.round(parseInt(aParts2[0], 10) * 60 + parseInt(aParts2[1], 10));

	return iTime2 - iTime1;
}

/** popup functions **/
$ = jQuery;

/*
 * Shows popup with session details
 * @param {sId} sId Track ID, expected format: "Speaker_Name@@||@@Track_Name"
 */
window.showPopup = function(sId) {
	var aSegments = sId.split("@@||@@");
	var aSpeakers = aSegments[0].split(",");
	var oDetailTopic = null;
	//var oDate = oInitialDate;
	var aSpeakersInfo = [];
	// var oAllTracks = Object.assign(oTracks, oBooths);
	var oAllTracks = oTracks;
	var sSpeakerName = aSegments[0].trim().toUpperCase();

	// find speaker info
	for (var i = 0; i < aSpeakers.length; i++) {
		aSpeakersInfo[i] = null;
		$.each(aSpeakersGlobal, function(sIndex, oSpeakerItem) {
			if (oSpeakerItem.name.trim().toUpperCase() == aSpeakers[i].trim().toUpperCase()) {
				aSpeakersInfo[i] = oSpeakerItem;
				return false;
			}
		});
	}

	// find session info
	$.each(oAllTracks, function(sTrackIndex, aTopics) {
		if (!oDetailTopic) {
			//oDate = oInitialDate;
		} else {
			return;
		}
		for (var i = 0; i < aTopics.length; i++) {
			var oTopic = aTopics[i];
			if (oTopic.speaker === aSegments[0] && oTopic.title === aSegments[1]) {
				oDetailTopic = oTopic;
				return;
			}
			//oDate = _addMinutes(oDate, oTopic.duration);
		}
	});

	if (!oDetailTopic) {
		return;
	}

	//var oEndDate = _addMinutes(oDate, oDetailTopic.duration);
	//var sTime = _getTimeSpanAsString(oDate, oEndDate);
	var sTime = oDetailTopic.startTime + " - " + oDetailTopic.endTime;

	var sTemplate = $("#session-detail-template").html();

	// prepare speakers fragment
	var sSpeakerLinkTemplate = "<a href=\"agenda.html?view=speakers#{{speaker_id}}\">{{speaker}}</a>";
	var sSpeakersHtml = aSpeakers.map(function(sSpeaker, index) {
		if (aSpeakersInfo[index] != null) {
			return sSpeakerLinkTemplate
				.replace("{{speaker_id}}", aSpeakersInfo[index].id)
				.replace("{{speaker}}", sSpeaker);
		} else {
			return sSpeaker;
		}
	}).join("<br/>");

	sTemplate = sTemplate.replace("{{title}}", oDetailTopic.title)
		.replace("{{abstract}}", oDetailTopic.abstract)
		.replace("{{speakers}}", sSpeakersHtml)
		.replace("{{type}}", oDetailTopic.type)
		.replace("{{time}}", sTime);

	openPopup(sTemplate);
};

// shows information about Event App.
window.showAppPopup = function() {
	var sHtml = $("#eventapp-detail-popup").html();
	openPopup(sHtml);
};

function openPopup(sContent) {
	$('#popupBlocklayer').fadeIn('slow');

	var $popup = $('#popup');
	$popup.html(sContent);
	$('#popup').removeClass("b-popup__hidden");

	//center popup
	var popupHeight = $popup.height();
	$popup.css({
		position: 'fixed',
		top: $(window).height() / 2 - popupHeight / 2,
		left: $(window).width() / 2 - Math.min(800, $(window).width()) / 2,
	});
}

window.closePopup = function() {
	$('#popup').addClass("b-popup__hidden");
	$('#popupBlocklayer').fadeOut('slow');
};
