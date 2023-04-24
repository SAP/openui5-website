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
    test() {
      return this.inna;
    }
  },
  mounted() {}
});

var main = new Vue({
  el: '#main',
  data() {
    return {
      isExpanded: false,
      isModalVisible: false,
      isCalendarsVisible: false,
      isToggled: false,
      speakers: [],
      shuffledSpeakers: [],
    };
  },
  mounted() {
    // console.log(this.createCalendars());
    axios
    .get('https://ui5con2023.cfapps.eu12.hana.ondemand.com/api/speaker/lineup')
    .then(response => {
      this.speakers = response.data;
      this.shuffledSpeakers = this.shuffleSpeakersArray(this.speakers).slice(0, 5);
    })
  },
  methods: {
    showCalendars() {
      this.isCalendarsVisible = !this.isCalendarsVisible;
      this.isToggled = !this.isToggled;
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

    },
    shuffleSpeakersArray(array) {
      const newArray = [...array]
      const length = newArray.length

      for (let start = 0; start < length; start++) {
        const randomPosition = Math.floor((newArray.length - start) * Math.random());
        const randomItem = newArray.splice(randomPosition, 1);
        newArray.push(...randomItem);
      }

      return newArray;
    }
  },
});

var aboutTheTeam = new Vue({
  el: '#team',
  data() {
    return {
      team: [
        {
          name: 'Eniela Vela',
          city: 'Montreal',
          picture: 'images/team/eniela.jpg',
          linkedin: 'https://ca.linkedin.com/in/eniela-vela-67aba3135',
        },
        {
          name: 'Margot Wollny',
          city: 'Heidelberg',
          picture: 'images/team/margot-wollny.png',
          linkedin: 'https://www.linkedin.com/in/margot-wollny-864ba96',
        },
        {
          name: 'Paige Hetherington',
          city: 'Vancouver',
          picture: 'images/team/paige-hetherington.png',
          linkedin: 'https://www.linkedin.com/in/paige-hetherington/',
        },
        {
          name: 'Inna Atanasova',
          city: 'Montreal',
          picture: 'images/team/Inna.jpg',
          linkedin: 'https://www.linkedin.com/in/inna-atanasova-654933137/',
          github: 'https://github.com/InnaAtanasova',
        },
        {
          name: 'Frederic Berg',
          city: 'Walldorf',
          picture: 'images/team/frederic_berg.jpg',
          linkedin: 'https://www.linkedin.com/in/frederic-berg-2433b388/',
          twitter: 'https://twitter.com/frdrcbrg',
        },
        {
          name: 'Fabian Tempel',
          city: 'Potsdam',
          picture: 'images/team/fabian-tempel.jpg',
          linkedin: 'https://www.linkedin.com/in/fabian-tempel/',
          github: 'https://github.com/trilodge',
          twitter: 'https://www.twitter.com/trilodge',
        },
        {
          name: 'Peter Muessig',
          city: 'Walldorf',
          picture: 'images/team/peter-muessig.jpg',
          linkedin: 'https://www.linkedin.com/in/peter-muessig-7b40576/',
          github: 'https://github.com/petermuessig',
          twitter: 'https://twitter.com/pmuessig',
        },
        {
          name: 'Andreas Kunz',
          city: 'Walldorf',
          picture: 'images/committee/andreas-kunz.jpg',
          linkedin: 'https://www.linkedin.com/in/andreas-kunz-dev',
          github: 'https://github.com/akudev',
          twitter: 'https://twitter.com/aku_dev',
        },
        {
          name: 'Stefan Beck',
          city: 'Walldorf',
          picture: 'images/committee/stefan-beck.jpg',
          linkedin: 'https://linkedin.com/in/stefan-beck-a9319a82',
          twitter: 'https://twitter.com/StefanBeck3',
        },
        {
          name: 'Angelika Kirilin',
          city: 'Walldorf',
          picture: 'images/team/angelika-kirilin.jpg',
          linkedin: 'https://www.linkedin.com/in/angelika-kirilin-96b5b4231/',
        },
        {
          name: 'Dirk Becker',
          city: 'Walldorf',
          picture: 'images/team/dirk-becker.jpg',
        },
        {
          name: 'Nikolay Kolarov',
          city: 'Walldorf',
          picture: 'images/team/nikolay-kolarov.jpg',
          linkedin: 'https://www.linkedin.com/in/nikolay-kolarov-58555671/',
        },
        {
          name: 'Michael Zadikowitsch',
          city: 'Walldorf',
          picture: 'images/team/michael-zadikowitsch.jpg',
          linkedin: 'https://www.linkedin.com/in/michael-zadikowitsch-68b2271b0/',
        },
        {
          name: 'Rainer Liebisch',
          city: 'Walldorf',
          picture: 'images/team/rainer-liebisch.jpg',
        },
        {
          name: 'Dorota Josenhans',
          city: 'Walldorf',
          picture: 'images/team/dorota-josenhans.png',
          linkedin: 'https://www.linkedin.com/in/dorota-josenhans-b5615124/',
        },
        {
          name: 'Dina Glatzel',
          city: 'Walldorf',
          picture: 'images/team/dina-glatzel.jpg',
          linkedin: 'https://www.linkedin.com/in/dinaglatzel/',
        },
        {
          name: 'Alexander Rauh',
          city: 'Walldorf',
          picture: 'images/team/alex-rauh.jpg',
          linkedin: 'https://www.linkedin.com/in/alexander-rauh-899579168/',
        },
      ],
    };
  },
});

var teamHeader = new Vue({
  el: '#teamHeader',
  data() {}
});