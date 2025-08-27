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
    };
  },
  mounted() {},
  methods: {}
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
    speakers: [],
    filter: "all",
    activeSpeakers: null,
    lineup: [],
    proposalLineup: [],
    formattedLineup: [],
    formattedSpeakers: [],
    expertCornerLineup: {},
    expertCornerLineupUnsorted: [],
   }
  },
  mounted() {
    Promise.all([
      axios.get('https://ui5con.cfapps.eu12.hana.ondemand.com/api/speaker/lineup'),
      axios.get('https://ui5con.cfapps.eu12.hana.ondemand.com/api/proposal/lineup')
    ])
    .then(([speakersResponse, lineupResponse]) => {
      this.speakers = speakersResponse.data;
      this.lineup = lineupResponse;
      this.formattedLineup = this.formatLineup();

      this.formattedSpeakers = this.formatSpeakers(this.formattedLineup, this.speakers);
      this.groupExpertCornerTopics();
    })

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
    formatTwitterLink(handle) {
      if (!handle.startsWith('https:')) {
        return "https://twitter.com/" + handle;
      }
    },
    formatLinkedInLink(handle) {
      if (!handle.startsWith('https:')) {
        return "https://www.linkedin.com/in/" + handle;
      }
    },
    formatMastodonLink(handle) {
      if(!handle.startsWith('https:')) {
        if (handle.includes('@saptodon.org')) {
          return 'https://saptodon.org/' + handle.replace('@saptodon.org', '');
        }

        return 'https://saptodon.org/' + handle;
      }
    },
    formatBlueskyLink(handle) {
      if(!handle.startsWith('https:')) {
        return 'https://bsky.app/profile/' + handle.replace('@', '');
      }
    },
    shuffleSpeakersArray(array) {
      const newArray = [...array]
      const filteredArray = newArray.filter((el) => el.hasPhoto);
      const length = filteredArray.length

      for (let start = 0; start < length; start++) {
        const randomPosition = Math.floor((filteredArray.length - start) * Math.random());
        const randomItem = filteredArray.splice(randomPosition, 1);
        filteredArray.push(...randomItem);
      }

      return filteredArray;
    },
    formatAndShuffleSpeakersArray(array) {
      const formattedArray = this.formatSpeakersArray(array);
      return this.shuffleSpeakersArray(formattedArray);
    },
    formatSpeakersArray(array) {
      const newArray = [...array]
      const formattedArray = newArray.map(speaker => {
        const fullName = speaker.firstName + ' ' + speaker.lastName;

        if(speaker.twitterHandle) {
          speaker.twitterHandle = this.formatTwitterLink(speaker.twitterHandle);
        }

        if(speaker.linkedInUrl) {
          speaker.linkedInUrl = this.formatLinkedInLink(speaker.linkedInUrl);
        }

        if(speaker.mastodonHandle) {
          speaker.mastodonHandle = this.formatMastodonLink(speaker.mastodonHandle);
        }

        if(speaker.blueskyHandle) {
          speaker.blueskyHandle = this.formatBlueskyLink(speaker.blueskyHandle);
        }

        return {
          ...speaker,
          fullName: fullName,
          showMore: false
        }
      });

      return formattedArray;
    },
    onFilterChange($event) {
      this.filter = $event.target.value;
      this.formattedLineup = this.formatLineup();
    },
    formatLineup() {
      const tempLineUp = this.lineup.data.map((session) => {
        session.speakers.map((speaker) => {
          if(speaker.twitterHandle) {
            speaker.twitterHandle = this.formatTwitterLink(speaker.twitterHandle);
          }

          if(speaker.linkedInUrl) {
            speaker.linkedInUrl = this.formatLinkedInLink(speaker.linkedInUrl);
          }

          if(speaker.mastodonHandle) {
            speaker.mastodonHandle = this.formatMastodonLink(speaker.mastodonHandle);
          }

          if(speaker.blueskyHandle) {
            speaker.blueskyHandle = this.formatBlueskyLink(speaker.blueskyHandle);
          }
        });

        let start = session.startTime;
        let end = session.endTime;

        let tempStart = start.substring(0, start.indexOf(":"));
        let tempEnd = end.substring(0, end.indexOf(":"));

        if (tempStart.length == 1 && !tempStart.startsWith("0")) {
          start = "0" + start;
        }

        if (tempEnd.length == 1 && !tempEnd.startsWith("0")) {
          end = "0" + end;
        }

        let newStartTime = "2025-07-08T" + start + ":00.000+02:00";
        let newEndTime = "2025-07-08T" + end + ":00.000+02:00";

        return {
          ...session,
          startTime: newStartTime,
          endTime: newEndTime
        };
      });

      const sortedScheduleTemp = tempLineUp.sort((a, b) =>
        luxon.DateTime.fromISO(a.startTime) -
        luxon.DateTime.fromISO(b.startTime)
      );

      this.expertCornerLineupUnsorted = sortedScheduleTemp.filter(
        (schedule) => schedule.type.includes("expert")
      );

      const sortedSchedule = sortedScheduleTemp.filter(
        (schedule) => !schedule.type.includes("expert")
      );

      if (this.filter === "all") {
        return sortedSchedule;
      } else if (this.filter === "talks") {
        return sortedSchedule.filter((schedule) =>
          schedule.type.includes("presentation")
        );
      } else if (this.filter === "workshops") {
        return sortedSchedule.filter((schedule) =>
          schedule.type.includes("hands")
        );
      } else if (this.filter === "audimax") {
        return sortedSchedule.filter((schedule) =>
          schedule.location.toLowerCase() === "audimax"
        );
      } else if (this.filter === "w1") {
        return sortedSchedule.filter((schedule) =>
          schedule.location.toLowerCase().includes("w1")
        );
      } else if (this.filter === "w3") {
        return sortedSchedule.filter((schedule) =>
          schedule.location.toLowerCase().includes("w3")
        );
      } else if (this.filter === "beginner") {
        return sortedSchedule.filter((schedule) =>
          schedule.proficiencyLevel === "beginner"
        );
      } else if (this.filter === "intermediate") {
        return sortedSchedule.filter((schedule) =>
          schedule.proficiencyLevel === "intermediate"
        );
      } else if (this.filter === "advanced") {
        return sortedSchedule.filter((schedule) =>
          schedule.proficiencyLevel === "advanced"
        );
      } else {
        return sortedSchedule;
      }
    },
    formatSpeakers(talks, speakers) {
      const talkIdToRoomMap = new Map(
        talks.map(talk => [talk.id, talk.location])
      );

      speakers.forEach(speaker => {
        speaker.proposals.forEach(proposal => {
          const location = talkIdToRoomMap.get(proposal.id);
          if (location) {
            proposal.location = location;
          } else {
            proposal.location = 'Audimax';
          }
        });
      });

      return speakers;
    },
    groupExpertCornerTopics() {
      this.expertCornerLineupUnsorted.forEach((corner) => {
        const timeSlot = corner.startTime;
        if (!this.expertCornerLineup[timeSlot]) {
          this.expertCornerLineup[timeSlot] = [];
        }
        this.expertCornerLineup[timeSlot].push(corner);
      });
    },
    formatProficiencyLevel(value) {
      if (!value) return '';
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    formatLocationTitle(value) {
      if (!value) return '';

      if (value) {
        if (value.toLowerCase().includes("audimax")) {
          return "Yellow";
        } else if (value.toLowerCase().includes("w1") || value.toLowerCase().includes("w2")) {
          return "Blue";
        } else if (value.toLowerCase().includes("w3")) {
          return "Orange"
        } else if (value.toLowerCase().includes("expert")) {
          return "EXP"
        } else if (value.toLowerCase().includes("canteen")) {
          return "Canteen"
        } else {
          return value;
        }
      }
    },
    decodeBioHtml(value) {
      if (!value) return '';
      const txt = document.createElement('textarea');
      txt.innerHTML = value;

      let decoded = txt.value;

      // Replace "&amp;" or "&" with " and "
      decoded = decoded.replace(/&amp;|&/g, ' and ');

      // Replace \n or /n with <br> for HTML rendering
      decoded = decoded.replace(/\\n|\/n|\n/g, '<br>');

      return decoded;
    },
  },
  filters: {
    formatLocation: function (value) {
      if (value) {
        if (value.toLowerCase().includes("audimax")) {
          return "Y";
        } else if (value.toLowerCase().includes("w1") || value.toLowerCase().includes("w2")) {
          return "B";
        } else if (value.toLowerCase().includes("w3")) {
          return "O"
        } else if (value.toLowerCase().includes("expert")) {
          return "EXP"
        } else if (value.toLowerCase().includes("canteen")) {
          return "CA"
        } else {
          return value;
        }
      }
    },
    formatLevel: function (value) {
      if (!value) return '';
      return value.charAt(0).toUpperCase();
    },
    trimTime: function (value) {
      let time = value.substring(value.indexOf("T") + 1);
      let timeSplit = time.split(":");
      let hour = timeSplit[0].startsWith("0")
        ? timeSplit[0].replace(/^0+/, "")
        : timeSplit[0];
      return hour + ":" + timeSplit[1];
    },
    trimExpertText: function (value) {
      return value.replace(/^Expert Corner: /, '');
    },
    convertTime: function (value, eventTime) {
      if (eventTime === "local") {
        return luxon.DateTime.fromISO(value)
          .toLocal()
          .toISO({ suppressMilliseconds: true });
      }
      return value;
    },
    decodeHtml: function(value) {
      if (!value) return '';
      const txt = document.createElement('textarea');
      txt.innerHTML = value;
      return txt.value;
    }
  }
});

var footer = new Vue({
  el: '#footer',
  data() {
    return {
    };
  },
});
