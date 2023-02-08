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
    }
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
      showCalBlockers: false,
      socialLinks: [
        {
          link: "https://twitter.com/intent/tweet?text=UI5Con%20Germany%202023%20&url=https%3A%2F%2Fopenui5.org%2Fui5con%2Fgermany2023",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 36" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.075 2.87C23.382 1.128 25.483 0 28.375 0c1.778 0 3.395.899 4.465 1.773.38.31.739.655 1.053 1.021l3.771-1.508a2.25 2.25 0 0 1 2.4 3.706l-3.88 3.755c.033.438.066.97.066 1.378 0 5.335-1.176 11.726-4.597 16.857-3.504 5.256-9.263 9.018-17.903 9.018-4.68 0-7.743-.584-9.712-1.24-.986-.33-1.7-.677-2.203-.979a6.061 6.061 0 0 1-.602-.408C.25 32.626.158 31.275.42 30.64A2.25 2.25 0 0 1 2.5 29.251c4.144 0 7.227-.996 9.415-2.148-1.308-.093-2.717-.289-3.9-.703-1.197-.418-3.265-1.487-3.265-3.899A2.25 2.25 0 0 1 7 20.251c.146 0 .597-.078 1.382-.327-1.033-.317-2.07-.71-2.958-1.2-1.137-.625-2.924-1.9-2.924-4.098a2.25 2.25 0 0 1 2.25-2.25c.051 0 .104 0 .16-.002C2.727 10.709.25 8.072.25 4.5a2.25 2.25 0 0 1 4.104-1.274l.005.006c.013.018.044.058.094.118.1.12.277.318.544.571.533.505 1.43 1.232 2.8 1.979C10.24 7.234 14.257 8.669 20.5 8.95V7.876c0-1.439.35-3.373 1.575-5.006Z" fill="currentColor"/>
          </svg>`,
          text: "Share on twitter"
        },
        {
          link: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fopenui5.org%2Fui5con%2Fgermany2023",
          svg: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3Zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6a1 1 0 0 0-1 1v10a1 1 0 1 1-2 0V7a3 3 0 0 1 3-3h1a1 1 0 1 1 0 2h-1Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 10a1 1 0 0 1 1-1h4.5a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" fill="currentColor"/>
          </svg>`,
          text: "Share on facebook"
        },
        {
          link: "https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fopenui5.org%2Fui5con%2Fgermany2023&title=UI5Con Germany 2023&summary=UI5con Germany in on July 6th 2023 — a community event focused on #UI5 development.",
          svg: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3Zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 7a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1ZM5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM8 7a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 10.778A3.778 3.778 0 0 1 10.778 7 3.222 3.222 0 0 1 14 10.222V13a1 1 0 1 1-2 0v-2.778C12 9.547 11.453 9 10.778 9 9.796 9 9 9.796 9 10.778V13a1 1 0 1 1-2 0v-2.222Z" fill="currentColor"/>
          </svg>`,
          text: "Share on LinkedIn"
        },
        {
          link: "mailto:?subject=UI5con in July 2023&body=Mark your calendars: UI5con Germany in on July 6th 2023 — a community event focused on #UI5 development. https://openui5.org/ui5con/germany2023/",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 36" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M.5 6.75A6.75 6.75 0 0 1 7.25 0h31.5a6.75 6.75 0 0 1 6.75 6.75v22.5A6.75 6.75 0 0 1 38.75 36H7.25A6.75 6.75 0 0 1 .5 29.25V6.75ZM7.25 4.5A2.25 2.25 0 0 0 5 6.75v22.5a2.25 2.25 0 0 0 2.25 2.25h31.5A2.25 2.25 0 0 0 41 29.25V6.75a2.25 2.25 0 0 0-2.25-2.25H7.25Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.092 5.558a2.25 2.25 0 0 1 3.1-.716l15.616 9.76a2.25 2.25 0 0 0 2.384 0l15.615-9.76a2.25 2.25 0 0 1 2.386 3.816l-15.615 9.76a6.75 6.75 0 0 1-7.155 0L3.807 8.657a2.25 2.25 0 0 1-.716-3.1Z" fill="currentColor"/>
          </svg>`,
          text: "Share via mail"
        }
      ]
    };
  },
  mounted() {
    // console.log(this.createCalendars());
  },
  methods: {
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
