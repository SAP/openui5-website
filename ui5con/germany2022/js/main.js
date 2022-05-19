'use strict';
var app = new Vue({
  el: '#app',
  data() {
    return {
      isExpanded: false,
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
          company: 'XL2',
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
    };
  },
  methods: {
    handleShowHideCommitteeSection() {
      this.isExpanded = !this.isExpanded;
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

var agenda = new Vue({
  el: '#agenda',
  data() {
    return {
      activeTab:  'talks-tab',
      agendaDay: 'day1',
      eventTime: 'event',
      localTime: new Date().toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1],
      schedule: [
        {
          time: '2022-07-07T09:00:00.000+02:00',
          events: [
            {
              start: '2022-07-07T09:00:00.000+02:00',
              end: '2022-07-07T09:25:00.000+02:00',
              type: 'talk',
              title: 'Descriptive Session Title Goes Here',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nunc quis ipsum lobortis convallis. Vivamus magna nisle, tristique eu dictum rhoncus, fringilla sit amet justo. Lis ultricies massa. Nullam ultrices pulvinar turpis nec.',
              speakers: [
                {
                  name: 'FirstName LastName',
                  company: 'Company',
                  image: './images/committee/andreas-kunz.jpg'
                },
                {
                  name: 'FirstName LastName',
                  company: 'Company',
                  image: './images/committee/andreas-kunz.jpg'
                }
              ],
              links: [
                {
                  name: 'Slides',
                  link: '/',
                  active: true
                },
                {
                  name: 'Slides',
                  link: '/',
                  active: false
                },
                {
                  name: 'Slides',
                  link: '/',
                  active: false
                }
              ],
              readMoreActivated: false
            },
            {
              start: '2022-07-07T09:25:00.000+02:00',
              end: '2022-07-07T09:50:00.000+02:00',
              type: 'talk',
              title: 'Descriptive Session Title Goes Here',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nunc quis ipsum lobortis convallis. Vivamus magna nisle, tristique eu dictum rhoncus, fringilla sit amet justo. Lis ultricies massa. Nullam ultrices pulvinar turpis nec.',
              speakers: [
                {
                  name: 'FirstName LastName',
                  company: 'Company',
                  image: './images/committee/andreas-kunz.jpg'
                },
                {
                  name: 'FirstName LastName',
                  company: 'Company',
                  image: './images/committee/andreas-kunz.jpg'
                },
                {
                  name: 'FirstName LastName',
                  company: 'Company',
                  image: './images/committee/andreas-kunz.jpg'
                }
              ],
              links: [
                {
                  name: 'Slides',
                  link: '/',
                  active: true
                },
                {
                  name: 'Slides',
                  link: '/',
                  active: false
                }
              ],
              readMoreActivated: false
            },
            {
              start: '2022-07-07T09:50:00.000+02:00',
              end: '2022-07-07T10:00:00.000+02:00',
              type: 'talk',
              title: 'Descriptive Session Title Goes Here',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nunc quis ipsum lobortis convallis. Vivamus magna nisle, tristique eu dictum rhoncus, fringilla sit amet justo. Lis ultricies massa. Nullam ultrices pulvinar turpis nec.',
              speakers: [
                {
                  name: 'FirstName LastName',
                  company: 'Company',
                  image: './images/committee/andreas-kunz.jpg'
                },
                {
                  name: 'FirstName LastName',
                  company: 'Company',
                  image: './images/committee/andreas-kunz.jpg'
                },
                {
                  name: 'FirstName LastName',
                  company: 'Company',
                  image: './images/committee/andreas-kunz.jpg'
                }
              ],
              links: [
                {
                  name: 'Slides',
                  link: '/',
                  active: true
                },
                {
                  name: 'Slides',
                  link: '/',
                  active: false
                }
              ],
              readMoreActivated: false
            }
          ]
        },
        {
          time: '2022-07-07T10:00:00.000+02:00',
          events: [
            {
              start: '2022-07-07T10:00:00.000+02:00',
              end: '2022-07-07T10:30:00.000+02:00',
              type: 'talk',
              title: 'Descriptive Session Title Goes Here',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nunc quis ipsum lobortis convallis. Vivamus magna nisle, tristique eu dictum rhoncus, fringilla sit amet justo. Lis ultricies massa. Nullam ultrices pulvinar turpis nec.',
              speakers: [
                {
                  name: 'FirstName LastName',
                  company: 'Company',
                  image: './images/committee/andreas-kunz.jpg'
                },
                {
                  name: 'FirstName LastName',
                  company: 'Company',
                  image: './images/committee/andreas-kunz.jpg'
                }
              ],
              links: [
                {
                  name: 'Slides',
                  link: '/',
                  active: true
                },
                {
                  name: 'Slides',
                  link: '/',
                  active: false
                },
                {
                  name: 'Slides',
                  link: '/',
                  active: false
                }
              ],
              readMoreActivated: false
            },
            {
              start: '2022-07-07T10:30:00.000+02:00',
              end: '2022-07-07T11:00:00.000+02:00',
              type: 'talk',
              title: 'Descriptive Session Title Goes Here',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nunc quis ipsum lobortis convallis. Vivamus magna nisle, tristique eu dictum rhoncus, fringilla sit amet justo. Lis ultricies massa. Nullam ultrices pulvinar turpis nec.',
              speakers: [
                {
                  name: 'FirstName LastName',
                  company: 'Company',
                  image: './images/committee/andreas-kunz.jpg'
                },
                {
                  name: 'FirstName LastName',
                  company: 'Company',
                  image: './images/committee/andreas-kunz.jpg'
                },
                {
                  name: 'FirstName LastName',
                  company: 'Company',
                  image: './images/committee/andreas-kunz.jpg'
                }
              ],
              links: [
                {
                  name: 'Slides',
                  link: '/',
                  active: true
                },
                {
                  name: 'Slides',
                  link: '/',
                  active: false
                }
              ],
              readMoreActivated: false
            }
          ]
        },
        {
          time: '2022-07-07T11:00:00.000+02:00',
          events: [
            {
              start: '2022-07-07T11:15:00.000+02:00',
              end: '2022-07-07T14:00:00.000+02:00',
              type: 'break',
              title: 'Break Time +  Meet the Experts',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices lobortis purus, ac venenatis est. Vivamus facilisis felis sit amet suscipit suscipit. Pellentesque vel magna a augue eleifend lobortis eget non orci.Fusce ut pellentesque leo. Cras nec laoreet augue, non aliquam velit. Phasellus consectetur non diam a bibendum. Integer non libero sit amet purus semper egestas quis quis tellus. Nulla viverra at dui nec semper. Suspendisse velit elit, ultrices at elit aliquam, fringilla ultrices nunc. Donec pulvinar sem at nisl lobortis, eget hendrerit augue viverra. Proin maximus fringilla sem id pretium. Etiam vel volutpat diam. Nam sed tempor turpis, at molestie turpis.Aliquam ac egestas lacus. Maecenas finibus, nulla at aliquam lobortis, mi enim congue ex, sit amet maximus ante nunc sit amet enim. Donec posuere, nisl id porta mattis, lorem nulla laoreet erat, ac varius mi diam vel augue. Integer non libero sit amet purus semper egestas quis quis tellus. Nulla viverra at dui nec semper. Suspendisse velit elit, ultrices at elit aliquam, fringilla ultrices nunc. Donec pulvinar sem at nisl lobortis, eget hendrerit augue viverra. Proin maximus fringilla sem id pretium. Etiam vel volutpat diam. Nam sed tempor turpis, at molestie turpis.Aliquam ac egestas lacus. Maecenas finibus, nulla at aliquam lobortis, mi enim congue ex, sit amet maximus ante nunc sit amet enim. Donec posuere, nisl id porta mattis, lorem nulla laoreet erat, ac varius mi diam vel augue.',
              speakers: [
                {
                  name: 'Open UI5 Team',
                  company: 'SAP',
                  image: './images/committee/andreas-kunz.jpg'
                }
              ],
              links: [
                {
                  name: 'Link',
                  link: '/',
                  active: true
                }
              ],
              readMoreActivated: false
            }
          ]
        },
      ],
    };
  },
  filters: {
    minutes: function(value) {
      let time = value.substring(value.indexOf('T') + 1);
      return time.split(':')[1];
    },
    hours: function(value) {
      let time = value.substring(value.indexOf('T') + 1);
      return time.split(':')[0].replace(/^0+/, '');
    },
    trimTime: function(value) {
      let time = value.substring(value.indexOf('T') + 1);
      let timeSplit = time.split(':');
      return timeSplit[0] + ':' + timeSplit[1];
    },
    convertTime: function(value, eventTime) {
      if(eventTime === 'local') {
       return luxon.DateTime.fromISO(value).toLocal().toISO({ suppressMilliseconds:true });
      }
      return value;
    }
  },
  mounted() {
    this.focusToggleDay();
  },
  methods:  {
    isActivated(description) {
      return description.length > 50;
    },
    focusToggleDay() {
      this.$refs.toggleDay.focus();
    },
    focusTabs() {
      document.getElementById('talks').focus();
    },
    focusToggleTimezone() {
      document.getElementById('timezone1').focus();
    },
    handleArrowKeys(e) {
      if(e.keyCode === 37 || e.keyCode === 39) {
        if(this.activeTab ===  'talks-tab') {
          this.activeTab = 'workshops-tab';
          document.getElementById('workshops').focus();
        } else if(this.activeTab === 'workshops-tab') {
          this.activeTab =  'talks-tab';
          document.getElementById('talks').focus();
        }
      }
    },
    isActive (tab) {
      return this.activeTab === tab;
    },
    setActive (tab) {
      this.activeTab = tab;
    },
    onDayChange($event) {
      this.agendaDay = $event.target.value;
    },
    onTimeChange($event) {
      this.eventTime = $event.target.value;
    },
    getLocalTimeZone() {
      return luxon.DateTime.now().toFormat('Z');
    }
  }
});


var newsletter = new Vue({
  el: '#newsletter-subscription',
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showSubscribeModal() {
      this.isModalVisible = !this.isModalVisible;
    }
  },
});

var speakers = new Vue({
  el: '#speakers',
  data() {
    return {
      showAnimation: false,
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
    isViewableNow(isVisible, entry) {
        this.showAnimation = isVisible;
    }
  }
});

