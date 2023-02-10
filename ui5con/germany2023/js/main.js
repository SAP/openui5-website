'use strict';

var header = new Vue({
  el: '#header',
  data() {
    return {
      isCalendarsVisible: false,
    };
  },
  methods: {
    showCalendars() {
      this.isCalendarsVisible = !this.isCalendarsVisible;
    },
    hideCalendars() {
      this.isCalendarsVisible = false;
    },
  },
  mounted() {

  }
});

var main = new Vue({
  el: '#main',
  data() {
    return {
      isExpanded: false,
      isModalVisible: false,
      isCalendarsVisible: false,
    };
  },
  mounted() {
    // console.log(this.createCalendars());
  },
  methods: {
    showCalendars() {
      this.isCalendarsVisible = !this.isCalendarsVisible;
    },
    hideCalendars() {
      this.isCalendarsVisible = false;
    },
    showSubscribeModal() {
      this.isModalVisible = !this.isModalVisible;
    },
    createCalendars() {

      let newStartTime = "2023-07-06T00:00:00.000";
      let newEndTime = "2023-07-07T00:00:00.000";

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

      let description = "Dear friend, \n\nWe are excited to announce that UI5con 2023 is taking place on July 06, 2023.\n\nThis year’s conference will be an in-person event, taking place in St. Leon-Rot/Germany.\nThis is the most important event of the year for developers working with UI5. Interesting keynotes and sessions held by the UI5 product team as well as ambassadors from the UI5 community will shed light on a variety of UI5 topics. On top of this, you will meet friends you didn't see for a while, get to know new people from the community and enjoy a great party in the evening event.\n\nPlease save the following details:\nDate: 06/07/2023\nLocation: SAP SE (ROT03), SAP-Allee 27, 68789 St. Leon-Rot (Germany)\n\nNote that seats are limited, and registration is needed to be able to take part in this event! The registration process will open End of April. For more details as the conference approaches, please visit our Conference Page https://openui5.org/ui5con/germany2023/ \n\nWe are looking forward seeing you there!\nYour UI5con Orga Team"

      let descriptionGoogle = `Dear friend, <br><br>We are excited to announce that UI5con 2023 is taking place on July 06, 2023.<br><br>This year’s conference will be an in-person event, taking place in St. Leon-Rot/Germany.<br><br>This is the most important event of the year for developers working with UI5. Interesting keynotes and sessions held by the UI5 product team as well as ambassadors from the UI5 community will shed light on a variety of UI5 topics. On top of this, you will meet friends you didn't see for a while, get to know new people from the community and enjoy a great party in the evening event.<br><br>Please save the following details:<br>Date: 06/07/2023<br>Location: SAP SE (ROT03), SAP-Allee 27, 68789 St. Leon-Rot (Germany)<br><br>Note that seats are limited, and registration is needed to be able to take part in this event! The registration process will open End of April. For more details as the conference approaches, please visit our <a href="https://openui5.org/ui5con/germany2023/" target="_blank">Conference Page</a>  <br><br>We are looking forward seeing you there!<br>Your UI5con Orga Team`


      let cal = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'BEGIN:VEVENT',
        'DTSTART:' + calendarStartDate,
        'DTEND:' + calendarEndDate,
        'SUMMARY:' + 'UI5con 2023',
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
              '&text=' + 'UI5con 2023',
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
              '&subject=' + 'UI5con 2023',
              '&startdt=' + officeStartDate,
              '&enddt=' + officeEndDate,
              '&location=' + 'SAP SE (ROT03), SAP-Allee 27, 68789 St. Leon-Rot (Germany)',
              '&body=' + removeForbiddenCharachters(descriptionGoogle)
            ].join('')),
            ics: encodeURI('data:text/calendar;charset=utf8,' + cal)
          }
        ]
      }

    }
  },
});
