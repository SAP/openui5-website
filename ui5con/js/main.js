'use strict';

var nav = new Vue({
  el: '#nav',
  data() {
    return {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
  computed: {
    showMobileNav: function () {
      if (this.windowWidth < 780) {
        return true;
      } else {
        return false;
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.windowHeight = window.innerHeight
      this.windowWidth = window.innerWidth
    },
  }
});

var header = new Vue({
  el: '#header',
  data() {
    return {
      isCalendarsVisible: false,
    };
  },
  mounted() {
    // console.log(this.createCalendars());
  },
  methods: {
    toggleCalendars() {
      this.isCalendarsVisible = !this.isCalendarsVisible;
    },
    createCalendars() {

      let newStartTime = "2025-07-08T00:00:00.000";
      let newEndTime = "2025-07-09T00:00:00.000";

      let calendarStartDate = new Date(newStartTime).toISOString().replace(/-|:|\.\d+/g, '');
      let calendarEndDate = new Date(newEndTime).toISOString().replace(/-|:|\.\d+/g, '');

      let officeStartDate = new Date(newStartTime).toISOString();
      let officeEndDate = new Date(newEndTime).toISOString();

      const forbiddenCharacters = new RegExp('#', 'g')
        const removeForbiddenCharachters = (text) => {
            if (typeof text === 'string') {
              let formattedText = text.replace(/(&amp;|&)/g, " and ");
              return formattedText.replace(forbiddenCharacters, '');
            }
            return ''
        }

        const removeForbiddenCharachtersOutlook = (text) => {
          if (typeof text === 'string') {
            let formattedText = text.replace(/(?:\r\n|\r|\n)/g, "\\n");
            return formattedText.replace(forbiddenCharacters, '');
          }
          return ''
      }



      let description = "Join us for UI5con 2025, the community event organized by the developers of the OpenUI5 framework. This event brings together the UI5 community to meet, learn from each other, and have fun. The event will take place on July 8, 2025, in SAP-Allee 27, St.Leon-Rot, Germany. For those unable to attend in person, parts of the event will be live-streamed on the UI5 YouTube channel, allowing everyone to participate and engage with the community. \n\nEvent Details: \nDate: July 8, 2025 \nLocation: SAP-Allee 27, St.Leon-Rot \nLive Stream: https://www.youtube.com/user/openui5videos \nWebsite: https://openui5.org/ui5con/germany2025/\n\nImportant Dates:\nCall for Content: January 23, 2025 - March 10, 2025\nRegistration for Onsite Attendees: Opens on April 10, 2025\nEarly Bird Ticket Application: Ends March 10, 2025\n\nVisit our event page at https://openui5.org/ui5con for more information and stay tuned for updates. If you have any further questions, please don't hesitate to contact us at openui5@sap.com.\n\nWe look forward to seeing you at UI5con 2025!"

      let descriptionOffice = `Join us for UI5con 2025, the community event organized by the developers of the OpenUI5 framework. This event brings together the UI5 community to meet, learn from each other, and have fun. The event will take place on July 8, 2025, in SAP-Allee 27, St.Leon-Rot, Germany. For those unable to attend in person, parts of the event will be live-streamed on the UI5 YouTube channel, allowing everyone to participate and engage with the community. <br><br> Event Details: <br> Date: July 8, 2025 <br> Location: SAP-Allee 27, St.Leon-Rot <br> Live Stream: https://www.youtube.com/user/openui5videos <br> Website: https://openui5.org/ui5con/germany2025/ <br><br> Important Dates: <br> Call for Content: January 23, 2025 - March 10, 2025 <br> Registration for Onsite Attendees: Opens on April 10, 2025 <br> Early Bird Ticket Application: Ends March 10, 2025 <br><br> Visit our event page at https://openui5.org/ui5con for more information and stay tuned for updates. If you have any further questions, please don't hesitate to contact us at openui5@sap.com.<br><br> We look forward to seeing you at UI5con 2025!`

      let descriptionGoogle = `<br>Join us for UI5con 2025, the community event organized by the developers of the OpenUI5 framework. This event brings together the UI5 community to meet, learn from each other, and have fun. The event will take place on July 8, 2025, in SAP-Allee 27, St.Leon-Rot, Germany. For those unable to attend in person, parts of the event will be live-streamed on the UI5 YouTube channel, allowing everyone to participate and engage with the community. <br><br>Event Details: <br>Date: July 8, 2025 <br>Location: SAP-Allee 27, St.Leon-Rot <br>Live Stream: <a href="https://www.youtube.com/user/openui5videos" target="_blank">https://www.youtube.com/user/openui5videos</a> <br>Website: <a href="https://openui5.org/ui5con/germany2025/" target="_blank">https://openui5.org/ui5con/germany2025/</a><br><br>Important Dates:<br>Call for Content: January 23, 2025 - March 10, 2025<br>Registration for Onsite Attendees: Opens on April 10, 2025<br>Early Bird Ticket Application: Ends March 10, 2025<br><br>Visit our event page at <a href="https://openui5.org/ui5con" target="_blank">https://openui5.org/ui5con</a> for more information and stay tuned for updates. If you have any further questions, please don't hesitate to contact us at <a href="mailto:openui5@sap.com">openui5@sap.com</a>.<br><br>We look forward to seeing you at UI5con 2025!`

      let cal = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'BEGIN:VEVENT',
        'DTSTART:' + calendarStartDate,
        'DTEND:' + calendarEndDate,
        'SUMMARY:' + 'Save the Date: UI5con 2025',
        'LOCATION:' + 'SAP SE (ROT03), SAP-Allee 27, 68789 St. Leon-Rot (Germany)',
        'DESCRIPTION:' + removeForbiddenCharachtersOutlook(description),
        'UID:' + '1',
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\n');

      return {
        calendars: [
          {
            google: encodeURI([
              'https://www.google.com/calendar/render',
              '?action=TEMPLATE',
              '&text=' + 'Save the Date: UI5con 2025',
              '&dates=' + calendarStartDate ,
              '/' + calendarEndDate,
              '&location='+'SAP SE (ROT03), SAP-Allee 27, 68789 St. Leon-Rot (Germany)',
              '&details=' + removeForbiddenCharachters(descriptionGoogle),
              '&sprop=&sprop=name:'
            ].join('')),
            office365: encodeURI([
              'https://outlook.office365.com/owa/',
              '?path=/calendar/action/compose',
              '&rru=addevent',
              '&subject=' + 'Save the Date: UI5con 2025',
              '&startdt=' + officeStartDate,
              '&enddt=' + officeEndDate,
              '&location=' + 'SAP SE (ROT03), SAP-Allee 27, 68789 St. Leon-Rot (Germany)',
              '&body=' + removeForbiddenCharachters(descriptionOffice)
            ].join('')),
            ics: encodeURI('data:text/calendar;charset=utf8,' + cal)
          }
        ]
      }
    },
  }
});

var main = new Vue({
  el: '#main',
  data() {
   return {
    team: [
      {
        name: 'Margot Wollny',
        location: 'Project Lead',
        image: 'images/team/margot-wollny.png'
      },
      {
        name: 'Fabian Tempel',
        location: 'Co-Lead, Website',
        image: 'images/team/fabian-tempel.jpg'
      },
      {
        name: 'Teresa Vogelbacher',
        location: 'Event Management',
        image: 'images/team/teresa-vogelbacher.jpg'
      },
      {
        name: 'Inna Atanasova',
        location: 'Website',
        image: 'images/team/Inna.jpg'
      },
      {
        name: 'Jennifer Klar',
        location: 'Communications, Facility',
        image: 'images/team/jennifer-klar.jpg'
      },
      {
        name: 'Benedikt Schoelch',
        location: 'Sponsorship',
        image: 'images/team/benedikt-schoelch.jpg'
      },
      {
        name: 'Judith Schneider',
        location: 'Design',
        image: 'images/team/judith-schneider.jpg'
      },
      {
        name: 'Jacky Dittkowski',
        location: 'Design, Facility',
        image: 'images/team/jacky.jpg'
      },
      {
        name: 'Andreas Kunz',
        location: 'Program',
        image: 'images/team/andreas-kunz.jpg'
      },
      {
        name: 'Felix Schubert',
        location: 'Program, Facility',
        image: 'images/team/felix-schubert.jpg'
      },
      {
        name: 'Daniel Nowak',
        location: 'Program, Facility',
        image: 'images/team/daniel-nowak.jpg'
      },
      {
        name: 'Dorota Josenhans',
        location: 'Facility',
        image: 'images/team/dorota-josenhans.png'
      },
      {
        name: 'Angelika Kirilin',
        location: 'Facility',
        image: 'images/team/angelika-kirilin.jpg'
      },
      {
        name: 'Jan Mummenthaler',
        location: 'Facility',
        image: 'images/team/jan-mummenthaler.webp'
      },
      {
        name: 'Katja Zoch',
        location: 'Facility',
        image: 'images/team/katja-zoch.jpg'
      },
      {
        name: 'Dina Glatzel',
        location: 'Facility',
        image: 'images/team/dina-glatzel.jpg'
      },
      {
        name: 'Nikolay Kolarov',
        location: 'Tech Setup',
        image: 'images/team/nikolay-kolarov.jpg'
      },
      {
        name: 'Arthur Trauter',
        location: 'Tech Setup',
        image: 'images/team/arthur-trauter.jpg'
      },
      {
        name: 'Alexander Rauh',
        location: 'Tech Setup',
        image: 'images/team/alex-rauh.jpg'
      },
      {
        name: 'Tillman Swinke',
        location: 'Tech Setup',
        image: 'images/team/tillman-swinke.jpg'
      },
      {
        name: 'Michael Zadikowitsch',
        location: 'Tech Setup',
        image: 'images/team/michael-zadikowitsch.jpg'
      },
    ],
    committee: [
      {
        name: "Klaudia Laag",
        role: "UNIORG",
        image: "images/committee/klaudia-laag.jpg",
      },
      {
        name: "Marco Beier",
        role: "Accenture",
        image: "images/committee/marco-beier.jpg",
      },
      {
        name: "Catrin Kupfer",
        role: "DZ Bank AG",
        image: "images/committee/catrin-kupfer.jpg",
      },
      {
        name: "Stefan Beck",
        role: "SAP",
        image: "images/committee/stefan-beck.jpg",
      },
      {
        name: "Simon Coen",
        role: "js-soft AG",
        image: "images/committee/simon-coen.jpg",
      },
      {
        name: "Stanislava Baltova",
        role: "SAP",
        image: "images/committee/stanislava-baltova.jpg",
      },
      {
        name: "Alisdair Templeton",
        role: "",
        image: "images/committee/alisdair-templeton.jpg",
      },
      {
        name: "Ilia Klopkov",
        role: "SAP",
        image: "images/committee/ilia-klopkov.jpg",
      },
      {
        name: "Jacek Woźniczak",
        role: "Nabisoft",
        image: "images/committee/jacek-woźniczak.jpg",
      },
    ],
    activeSpeakers: null,
    lastFocussedElementID: '',
   }
  },
  methods: {
    openSpeakerInfoModal(speakers, id) {
      this.activeSpeakers = speakers;
      this.$refs.agenda.ariaHidden = true;
      this.$refs.speakerModal.ariaHidden = false;
      this.$refs.speakerModal.style.display = "flex";
      this.lastFocussedElementID = id;

      setTimeout(() => {
        this.$refs.speakerModal.focus();
      }, 0);
    },
    closeSpeakerInfoModal() {
      this.activeSpeakers = null;
      this.$refs.agenda.ariaHidden = false;
      this.$refs.speakerModal.ariaHidden = true;
      this.$refs.speakerModal.style.display = "none";

      for (const key in this.$refs) {
        if (
          key.startsWith("twitter") ||
          key.startsWith("github") ||
          key.startsWith("linkedin") ||
          key.startsWith("mastodon") ||
          key.startsWith("bluesky")
        ) {
          delete this.$refs[key];
        }
      }
      document.getElementById(this.lastFocussedElementID).focus();
    },
    focusTrapModal($event) {
      let focussableElements = [];
      focussableElements.push(this.$refs.close);

      for (const key in this.$refs) {
        if (
          key.startsWith("twitter") ||
          key.startsWith("github") ||
          key.startsWith("linkedin") ||
          key.startsWith("mastodon") ||
          key.startsWith("bluesky")
        ) {
          const element = this.$refs[key];
          if (Array.isArray(element)) {
            focussableElements.push(element[0]);
          } else {
            focussableElements.push(element);
          }
        }
      }

      const filteredFocussableElements = focussableElements.filter(
        (el) => el !== undefined
      );
      const activeElementIndex = filteredFocussableElements.indexOf(
        $event.target
      );

      if (activeElementIndex != filteredFocussableElements.length - 1) {
        if ($event.shiftKey) {
          if (activeElementIndex === 0) {
            filteredFocussableElements[
              filteredFocussableElements.length - 1
            ].focus();
          } else {
            filteredFocussableElements[activeElementIndex - 1].focus();
          }
        } else {
          filteredFocussableElements[activeElementIndex + 1].focus();
        }
      } else {
        if ($event.shiftKey) {
          filteredFocussableElements[activeElementIndex - 1].focus();
        } else {
          filteredFocussableElements[0].focus();
        }
      }
    },
  },
  filters: {
    formatLocation: function (value) {
      if (value) {
        if (value.includes("audimax")) {
          return "A";
        } else if (value.includes("w1") || value.includes("w2")) {
          return "WS1/2";
        } else if (value.includes("w3")) {
          return "WS3"
        } else if (value.includes("expert")) {
          return "EC"
        } else if (value.includes("canteen")) {
          return "CA"
        } else {
          return value;
        }
      }
    },
    formatLevel: function (value) {
      if (value) {
          return "E";
      }
    },
  }
});

var footer = new Vue({
  el: '#footer',
  data() {
    return {
    };
  },
});
