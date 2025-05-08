'use strict';

var monitor = new Vue({
  el: '#monitor',
  data() {
   return {

    activeSpeakers: null,
    lastFocussedElementID: '',
    speakers: [],
    filter: "all",
    activeSpeakers: null,
    lineup: [],
    proposalLineup: [],
    formattedLineup: [],
    formattedSpeakers: [],
   }
  },
  mounted() {
    axios
    .get('https://ui5con.cfapps.eu12.hana.ondemand.com/api/proposal/lineup')
    .then(response => {
      this.lineup = response.data;
      console.log("this.lineup", this.lineup);


      this.formattedLineup = this.formatLineup();

      // console.log("this.formattedLineup", this.formattedLineup);
    }); 
  },
  methods: {
    formatLineup() {
      const tempLineUp = this.lineup.map((session) => {
       
        let start = '9:00';
        let end = '10:00';

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


        let timeNow = new Date().toISOString();
        let sessionTimeStart = new Date(newStartTime).toISOString();
        let sessionTimeEnd = new Date(newEndTime).toISOString();
        let sessionLiveStatus = false;

        if (timeNow > sessionTimeStart && timeNow < sessionTimeEnd) {
          sessionLiveStatus = true;
        }

        let location = 'Audimax';

        if (session.type.includes('presentation')) {
          location = 'W1/W2'
        } else if (session.type.includes('hands')) {
          location = 'W32'
        } else {
          location = 'Audimax';
        }

        return {
          ...session,
          startTime: newStartTime,
          endTime: newEndTime,
          isLive: sessionLiveStatus,
          location: location
        };
      });

      const sortedScheduleTemp = tempLineUp.sort((a, b) =>
        luxon.DateTime.fromISO(a.startTime) -
        luxon.DateTime.fromISO(b.startTime)
      );

      return sortedScheduleTemp;
    }
  },
  filters: {
    formatLocation: function (value) {
      if (value) {
        if (value.toLowerCase().includes("audimax")) {
          return "Audimax";
        } else if (value.toLowerCase().includes("w1") || value.toLowerCase().includes("w2")) {
          return "Room WS1/2";
        } else if (value.toLowerCase().includes("w3")) {
          return "Room WS3"
        } else if (value.toLowerCase().includes("expert")) {
          return "Expert Corner"
        } else if (value.toLowerCase().includes("canteen")) {
          return "Canteen"
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
    convertTime: function (value, eventTime) {
      if (eventTime === "local") {
        return luxon.DateTime.fromISO(value)
          .toLocal()
          .toISO({ suppressMilliseconds: true });
      }
      return value;
    },
    decodeHtml: function(value) {
      return new DOMParser().parseFromString(value, 'text/html').body.textContent;
    }
  }
});
