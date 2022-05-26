'use strict';
var header = new Vue({
  el: '#header',
  data() {
    return {
      calendars: [
        {
          link: 'https://www.google.com/calendar/render?action=TEMPLATE&amp;text=UI5con%20ON%20AIR%202022&amp;dates=20220707/20220709&amp;location=Online&amp;details=%3Cbr/%3EJoin%20the%20event:%20%3Ca%20href=%22https://openui5.org/ui5con/germany2022/%22%3Ehttps://openui5.org/ui5con/germany2022/%3C/a%3E&amp;sprop=&amp;sprop=name:',
          text: 'Google'
        },
        {
          link: 'https://outlook.office365.com/owa/?path=/calendar/action/compose&amp;rru=addevent&amp;subject=UI5con%20ON%20AIR%202022&amp;startdt=2022-07-07&amp;enddt=2022-07-09&amp;allday=true&amp;location=Online&amp;body=%3Cbr/%3EJoin%20the%20event:%20%3Ca%20href=%22https://openui5.org/ui5con/germany2022/%22%3Ehttps://openui5.org/ui5con/germany2022/%3C/a%3E',
          text: 'Office 365',
        },
        {
          link: 'data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART;TZID=%22Berlin%22:20220707%0ADTEND;TZID=%22Berlin%22:20220709%0ASUMMARY:UI5con%20ON%20AIR%202022%0ALOCATION:Online%0ADESCRIPTION:Find%20more%20details%20about%20the%20event:%20https://openui5.org/events%5Cn%5Cn%20Join%20the%20event:%20https://openui5.org/ui5con/germany2022/%0AUID:ui5con2022-germany%0AEND:VEVENT%0AEND:VCALENDAR',
          text: 'iCal',
          download: 'UI5con-ON-AIR-2022.ics'
        },
        {
          link: 'data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART;TZID=%22Berlin%22:20220707%0ADTEND;TZID=%22Berlin%22:20220709%0ASUMMARY:UI5con%20ON%20AIR%202022%0ALOCATION:Online%0ADESCRIPTION:Find%20more%20details%20about%20the%20event:%20https://openui5.org/events%5Cn%5Cn%20Join%20the%20event:%20https://openui5.org/ui5con/germany2022/%0AUID:ui5con2022-germany%0AEND:VEVENT%0AEND:VCALENDAR',
          text: 'Outlook',
          download: 'UI5con-ON-AIR-2022.ics'
        }
      ],
      socialLinks: [
        {
          link: "https://twitter.com/intent/tweet?text=UI5Con%20ON%20AIR%202022%20&url=https%3A%2F%2Fopenui5.org%2Fui5con%2Fgermany2022",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 36" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.075 2.87C23.382 1.128 25.483 0 28.375 0c1.778 0 3.395.899 4.465 1.773.38.31.739.655 1.053 1.021l3.771-1.508a2.25 2.25 0 0 1 2.4 3.706l-3.88 3.755c.033.438.066.97.066 1.378 0 5.335-1.176 11.726-4.597 16.857-3.504 5.256-9.263 9.018-17.903 9.018-4.68 0-7.743-.584-9.712-1.24-.986-.33-1.7-.677-2.203-.979a6.061 6.061 0 0 1-.602-.408C.25 32.626.158 31.275.42 30.64A2.25 2.25 0 0 1 2.5 29.251c4.144 0 7.227-.996 9.415-2.148-1.308-.093-2.717-.289-3.9-.703-1.197-.418-3.265-1.487-3.265-3.899A2.25 2.25 0 0 1 7 20.251c.146 0 .597-.078 1.382-.327-1.033-.317-2.07-.71-2.958-1.2-1.137-.625-2.924-1.9-2.924-4.098a2.25 2.25 0 0 1 2.25-2.25c.051 0 .104 0 .16-.002C2.727 10.709.25 8.072.25 4.5a2.25 2.25 0 0 1 4.104-1.274l.005.006c.013.018.044.058.094.118.1.12.277.318.544.571.533.505 1.43 1.232 2.8 1.979C10.24 7.234 14.257 8.669 20.5 8.95V7.876c0-1.439.35-3.373 1.575-5.006Z" fill="currentColor"/>
          </svg>`,
          text: "Share on twitter"
        },
        {
          link: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fopenui5.org%2Fui5con%2Fgermany2022",
          svg: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3Zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6a1 1 0 0 0-1 1v10a1 1 0 1 1-2 0V7a3 3 0 0 1 3-3h1a1 1 0 1 1 0 2h-1Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 10a1 1 0 0 1 1-1h4.5a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" fill="currentColor"/>
          </svg>`,
          text: "Share on facebook"
        },
        {
          link: "https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fopenui5.org%2Fui5con%2Fgermany2022&title=UI5Con ON AIR 2022&summary=UI5con ON AIR in on 7th and 8th July 2022 — an online community event focused on #UI5 development.",
          svg: `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3Zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 7a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1ZM5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM8 7a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 10.778A3.778 3.778 0 0 1 10.778 7 3.222 3.222 0 0 1 14 10.222V13a1 1 0 1 1-2 0v-2.778C12 9.547 11.453 9 10.778 9 9.796 9 9 9.796 9 10.778V13a1 1 0 1 1-2 0v-2.222Z" fill="currentColor"/>
          </svg>`,
          text: "Share on LinkedIn"
        },
        {
          link: "mailto:?subject=UI5con ON AIR in July 2022&body=Mark your calendars: UI5con ON AIR in on 7th and 8th July 2022 — an online community event focused on #UI5 development. https://openui5.org/ui5con/germany2022/",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 36" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M.5 6.75A6.75 6.75 0 0 1 7.25 0h31.5a6.75 6.75 0 0 1 6.75 6.75v22.5A6.75 6.75 0 0 1 38.75 36H7.25A6.75 6.75 0 0 1 .5 29.25V6.75ZM7.25 4.5A2.25 2.25 0 0 0 5 6.75v22.5a2.25 2.25 0 0 0 2.25 2.25h31.5A2.25 2.25 0 0 0 41 29.25V6.75a2.25 2.25 0 0 0-2.25-2.25H7.25Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.092 5.558a2.25 2.25 0 0 1 3.1-.716l15.616 9.76a2.25 2.25 0 0 0 2.384 0l15.615-9.76a2.25 2.25 0 0 1 2.386 3.816l-15.615 9.76a6.75 6.75 0 0 1-7.155 0L3.807 8.657a2.25 2.25 0 0 1-.716-3.1Z" fill="currentColor"/>
          </svg>`,
          text: "Share via mail"
        }
      ]
    };
  },
});

var main = new Vue({
  el: '#main',
  data() {
    return {
      isExpanded: false,
      isModalVisible: false,
      showAnimation: false,
      committee: [
        {
          name: 'Stefania Santimbrean',
          country: 'Romania',
          company: 'BearingPoint',
          picture: 'images/committee/stefania-santimbrean.png',
          twitter: 'https://mobile.twitter.com/ssantimbrean',
          linkedin: 'https://www.linkedin.com/in/stefania-santimbrean/',
          github: 'https://github.com/stefania-santimbrean',
        },
        {
          name: 'Andreas Kunz',
          country: 'Germany',
          company: 'SAP',
          picture: 'images/committee/andreas-kunz.jpg',
          twitter: 'https://twitter.com/aku_dev',
          linkedin: 'https://www.linkedin.com/in/andreas-kunz-dev',
          github: 'https://github.com/akudev',
        },
        {
          name: 'Ethan Jewett',
          country: 'USA',
          company: 'Mindset Consulting LLC',
          picture: 'images/committee/ethan-jewett.jpg',
          twitter: 'https://twitter.com/esjewett',
          linkedin: 'https://www.linkedin.com/in/ethanjewett',
          github: 'https://github.com/esjewett',
        },
        {
          name: 'Stanislava Baltova',
          country: 'Bulgaria',
          company: 'SAP',
          picture: 'images/committee/stanislava-baltova.jpeg',
          twitter: 'https://twitter.com/KostSisi',
          linkedin: 'https://www.linkedin.com/in/stanislava-baltova',
        },
        {
          name: 'Ilja Postnovs',
          country: 'Latvia',
          company: 'Rimi Baltic',
          picture: 'images/committee/ilja-postnovs.jpg',
          linkedin: 'https://www.linkedin.com/in/ilja-postnovs-648b2a134/',
          github: 'https://github.com/iljapostnovs/',
        },
        {
          name: 'Marian Zeis',
          country: 'Germany',
          picture: 'images/committee/marian-zeis.jpg',
          twitter: 'https://twitter.com/mianbsp',
          linkedin: 'https://www.linkedin.com/in/marianzeis',
          github: 'https://github.com/marianfoo',
        },
        {
          name: 'Lea Zimmermann',
          country: 'Germany',
          company: 'j&s-soft GmbH',
          picture: 'images/committee/lea-zimmermann.jpg',
          linkedin: 'https://www.linkedin.com/in/lea-zimmermann/',
        },
        {
          name: 'Peter Spielvogel',
          country: 'USA',
          company: 'SAP',
          picture: 'images/committee/peter-spielvogel.jpg',
          twitter: 'https://twitter.com/peterspielvogel',
          linkedin: 'https://www.linkedin.com/in/peterspielvogel/',
        },
        {
          name: 'Wouter Lemaire',
          country: 'Belgium',
          company: 'LEMTECH BV',
          picture: 'images/committee/wouter-lemaire.jpg',
          twitter: 'https://twitter.com/wouter_lemaire',
          github: 'http://github.com/lemaiwo',
        },
        {
          name: 'Stefan Beck',
          country: 'Germany',
          company: 'SAP',
          picture: 'images/committee/stefan-beck.jpg',
          twitter: 'https://twitter.com/StefanBeck3',
          linkedin: 'https://linkedin.com/in/stefan-beck-a9319a82',
        },
      ],
      speakers: [
        {
          "firstName": "Dobromira",
          "lastName": "Boycheva",
          "proposals": [
              164915282668133660
          ],
          "company": "SAP Labs Bulgaria",
          "bio": "I'm developer in Smart Control V2 team base in Sofia, Bulgaria.",
          "photoUrl": "/api/speaker/photo/45815527324e8492c4765fdcac7fdb1f09cd49eb",
          "topic": "Developing with SAPUI5 smart controls - Time is money"
        },
        {
          "firstName": "Pinaki",
          "lastName": "Patra",
          "proposals": [
              164637386144851000
          ],
          "company": "T-Systems",
          "bio": "Pinaki is s seasoned SAP consultant working in the areas of product development and consulting including technologies like SAP BTP, SAP UI5 and SAP HANA etc. He is fascinated about emerging trends like ML, Sustainabiliy, Industry 4.0 and is helping organizations in their journey towards digitization.",
          "twitterHandle": "@PinakiPatra16",
          "linkedInUrl": "https://www.linkedin.com/in/pinakipatra/",
          "githubUrl":"https://github.com/pinakipatrapro",
          "photoUrl": "/api/speaker/photo/dd5271ad587497cbcb29593492d99ad82eb44af0",
          "topic": "Increase Re-Usability with UI5 Custom Controls  - D&D Dashboard"
        },
        {
          "firstName":"Elena",
          "lastName":"Stoyanova",
          "proposals":[
              164914728056667740
          ],
          "company":"SAP",
          "bio":"Developer and accessibility expert for UI5 Controls and UI5 Web Components.",
          "twitterHandle":"@stoyanova_elly",
          "photoUrl":"/api/speaker/photo/4ae775144155a43facd49341c1fff8299233f6c6",
          "topic": "UI5 Web Components - Version 1.0 is Here!"
        },
        {
          "firstName": "Thiago",
          "lastName": "Sasai",
          "proposals": [
              164806029403264580
          ],
          "company": "Birlasoft",
          "bio": "I believe sharing knowledge open space for learn new things and move you forward. \nI work architecting solution using SAP technologies for projects and big companies, but code is my hobby, so never stopped coding and hope will never do.",
          "twitterHandle": "@tsasai7",
          "linkedInUrl": "https://www.linkedin.com/in/thiago-sasai-90449770",
          "githubUrl":"https://github.com/tsasai7",
          "photoUrl": "/api/speaker/photo/8581bb89c2ea87acf0bf771fe36d50af5d28df7d",
          "topic": "UI5 Web Components using React and Serverless first"
        },
        {
          "firstName":"Volker",
          "lastName":"Buzek",
          "proposals":[
             164951325882559900,
             164952264710166600,
             16464656097605580,
             164927936694398660
          ],
          "company":"J&S-Soft GmbH",
          "bio":"Development Architect working in the SAP web/mobile cosmos, often at the boundary SAP/non-SAP. Focus on UI5, CAP (Node.js) and BTP + Azure, faible for Open Source, Testing and CI/CD. Good in web tech + JS/TS/Node, interested in Deno and AR, really bad on Windows. SAP Mentor, maintainer wdi5 + cds-pg, organizer reCAP conference, co-host ui5-community, DSAG UI5 best practice guide contributor.",
          "twitterHandle":"https://twitter.com/vobu",
          "linkedInUrl":"https://www.linkedin.com/in/volkerbuzek/",
          "githubUrl":"https://github.com/vobu",
          "photoUrl":"/api/speaker/photo/d0a5f200bc27f0c411afa54e988380809dc3b676",
          "topic": "Testing galore: use wdi5 for testing UI5 JS-, TS-, and FE-apps"
       },
      ],
    };
  },
  methods: {
    handleShowHideCommitteeSection() {
      this.isExpanded = !this.isExpanded;
    },
    showSubscribeModal() {
      this.isModalVisible = !this.isModalVisible;
    },
    isViewableNow(isVisible, entry) {
      this.showAnimation = isVisible;
    }
  },
});

var aboutTheTeam = new Vue({
  el: '#team',
  data() {
    return {
      team: [
        {
          name: 'Uliana Caceres',
          city: 'Munich',
          picture: 'images/team/uliana-caceres.png',
          linkedin: 'https://www.linkedin.com/in/ulianaa/',
          github: 'https://github.com/UlianaMunich',
        },
        {
          name: 'Eniela Vela',
          city: 'Montreal',
          picture: 'images/team/eniela.jpg',
          linkedin: 'https://ca.linkedin.com/in/eniela-vela-67aba3135',
        },
        {
          name: 'Victoria Maslova',
          city: 'Vancouver',
          picture: 'images/team/victoria-maslova.jpeg',
          linkedin: 'https://www.linkedin.com/in/victoria-maslova/',
        },
        {
          name: 'Margot Wollny',
          city: 'Heidelberg',
          picture: 'images/team/margot-wollny.png',
          linkedin: 'https://www.linkedin.com/in/margot-wollny-864ba96',
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
          name: 'Sebastian Moreno',
          city: 'Walldorf',
          picture: 'images/team/sebastian-moreno.jpg',
          linkedin: 'https://www.linkedin.com/in/sebastianmorenoagredo/',
        },
        {
          name: 'Arthur Trauter',
          city: 'Walldorf',
          picture: 'images/team/arthur-trauter.png',
          twitter: 'https://twitter.com/ArthurTrauter',
          github: 'https://github.com/ArthurTrauter'
        },
        {
          name: 'Dorota Josenhans',
          city: 'Walldorf',
          picture: 'images/team/dorota-josenhans.png',
          linkedin: 'https://www.linkedin.com/in/dorota-josenhans-b5615124/',
        },
        {
          name: 'Oliver Müller',
          city: 'Walldorf',
          picture: 'images/team/oliver-mueller.jpg',
          linkedin: 'https://www.linkedin.com/in/oliver-m%C3%BCller-648702a8/',
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

