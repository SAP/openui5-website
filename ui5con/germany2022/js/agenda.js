'use strict';
var agenda = new Vue({
  el: '#agenda',
  data() {
    return {
      activeTab:  'talks-tab',
      agendaDay: 'day1',
      eventTime: 'event',
      localTime: new Date().toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1],
      lineup: [
        {
            "id": 164637386144851000,
            "title": "Increase Re-Usability with UI5 Custom Controls  - D&amp;D Dashboard",
            "type": "handson",
            "description": "Increase Re-Usability with UI5 Custom Controls  - D&amp;D Dashboard\nI this session I will showcase the benifits of using UI5 Custom Controls including integration of 3rd party library and how we can build them as a highly re-usable control and maintain accross organization.  In the Hands on demo , I will showcase how we can build a custom drag &amp; drop dashboard using  ui5 cusom controls and consume in multiple projects.\nResources : \nSAP BTP Trial, VS Code",
            "location": "FRI2",
            "startTime": "13:20",
            "endTime": "15:20",
            "speakers": [
                {
                    "firstName": "Pinaki",
                    "lastName": "Patra",
                    "company": "T-Systems",
                    "bio": "Pinaki is s seasoned SAP consultant working in the areas of product development and consulting including technologies like SAP BTP, SAPUI5 and SAP HANA etc. He is fascinated about emerging trends like ML, Sustainability, Industry 4.0 and is helping organizations in their journey towards digitization.",
                    "twitterHandle": "@pinakisap",
                    "linkedInUrl": "https://www.linkedin.com/in/pinakipatra/",
                    "githubUrl": "https://github.com/pinakipatrapro",
                    "photoUrl": "/api/speaker/photo/dd5271ad587497cbcb29593492d99ad82eb44af0"
                }
            ],
            "presentationLinks": []
        },
        {
            "id": 16464656097605580,
            "title": "testing galore: use wdi5 for testing UI5 JS-, TS-, and FE-apps",
            "type": "handson",
            "description": "Let‘s explore the capabilities of wdi5 hands-on, both from a DevX perspective and in a CI/CD environment setup.\n\nWe‘ll equip \n- a freestyle UI5 app written in JS\n- a UI5 app in TypeScript (incl UI5 web components)\n- a Fiori Elements app\nfrom scratch with wdi5 tests.\n\nWe‘ll practice debugging tests and morphing into TDD mode.\n\nAdditionally, the tests will be enhanced to run:\n- in a docker environment \n- on a cloud testing service (browserstack/saucelabs)\n- multiremote (think different users in different browsers).\n\nParticipants need to have Node.js 16 + VS Code installed and a grasp on git.\nApp sources will all be provided.",
            "location": "THU2",
            "startTime": "14:40",
            "endTime": "16:40",
            "speakers": [
                {
                    "firstName": "Volker",
                    "lastName": "Buzek",
                    "company": "J&amp;S-Soft GmbH",
                    "bio": "Development Architect working in the SAP web/mobile cosmos, often at the boundary SAP/non-SAP. Focus on UI5, CAP (Node.js) and BTP + Azure, faible for Open Source, Testing and CI/CD. Good in web tech + JS/TS/Node, interested in Deno and AR, really bad on Windows. SAP Mentor, maintainer wdi5 + cds-pg, organizer reCAP conference, co-host ui5-community, DSAG UI5 best practice guide contributor.",
                    "twitterHandle": "https://twitter.com/vobu",
                    "linkedInUrl": "https://www.linkedin.com/in/volkerbuzek/",
                    "githubUrl": "https://github.com/vobu",
                    "photoUrl": "/api/speaker/photo/d0a5f200bc27f0c411afa54e988380809dc3b676"
                }
            ],
            "presentationLinks": []
        },
        {
            "id": 164806029403264580,
            "title": "UI5 Web Components using React and Serverless first",
            "type": "presentation_short",
            "description": "Live coding of a React web application using UI5 Web Components for React only, including react-router and CRUD forms using Shell, Analytical Table, Dialog and Form components.\nBonus: I can demonstrate the usage of user authentication flow (register, verification, sign-in and sign-off) provided by Amazon Cognito as well. ",
            "location": "THU",
            "startTime": "17:20",
            "endTime": "17:40",
            "speakers": [
                {
                    "firstName": "Thiago",
                    "lastName": "Sasai",
                    "company": "",
                    "bio": "I believe sharing knowledge open space for learn new things and move you forward. \nI work architecting solution using SAP technologies for projects and big companies, but code is my hobby, so never stopped coding and hope will never do.",
                    "twitterHandle": "@tsasai7",
                    "linkedInUrl": "thiago-sasai-90449770",
                    "githubUrl": "https://github.com/tsasai7",
                    "photoUrl": "/api/speaker/photo/8581bb89c2ea87acf0bf771fe36d50af5d28df7d"
                }
            ],
            "presentationLinks": []
        },
        {
            "id": 164914728056667740,
            "title": "UI5 Web Components - Version 1.0 is Here!",
            "type": "presentation_long",
            "description": "Hello, there! We would like to share cool insights from the UI5 Web Components project, from basics to more advanced topics.\n\nWe will share:\n- the latest development with highlight on the 1.0 official stable release\n- many new components and themes\n- dedicated section for Accessibility of WebComponents, or the way to provide full-fledge Accessibility support in UI5 Web Components\n- our future plans\n\nNote: The session is suitable for application and component developers, with or without experience in UI5 Web Components.",
            "location": "THU",
            "startTime": "15:35",
            "endTime": "16:15",
            "speakers": [
                {
                    "firstName": "Ilhan",
                    "lastName": "Myumyun",
                    "company": "SAP",
                    "bio": "Ilhan is an enthusiastic software engineer, who worked his way up at SAP from an intern 7 years ago to a Product Owner of UI5 Web Components. He is part of the project since the very beginning, and also one of the main contributors. Ilhan is a strong Open Source supporter, passionate about technology, science, history and sport.",
                    "twitterHandle": "@ilhanorhan007",
                    "githubUrl": "https://github.com/SAP/ui5-webcomponents",
                    "photoUrl": "/api/speaker/photo/f8bf8432135b305b102082dd1f1fadda2c089db4"
                },
                {
                    "firstName": "Elena",
                    "lastName": "Stoyanova",
                    "company": "SAP",
                    "bio": "Developer and accessibility expert for UI5 Controls and UI5 Web Components.",
                    "twitterHandle": "@stoyanova_elly",
                    "photoUrl": "/api/speaker/photo/4ae775144155a43facd49341c1fff8299233f6c6"
                }
            ],
            "presentationLinks": []
        },
        {
            "id": 164915282668133660,
            "title": "Developing with SAPUI5 smart controls - Time is money",
            "type": "presentation_short",
            "description": "SAPUI5 smart controls are OData protocol driven controls. This means that their behavior and visuals will depend on OData EDM data type and provided annotations by the backend. Applications cut their development time when using smart controls by reducing the necessary code on processing the user interactions. This way application can focus on the development of the business logic. Especially when handling currencies, unit of measure, date and time data there can be many pitfalls where applications might fail to deliver expected user experience. This is even more obvious when having fleet of applications, to provide necessary alignment across the board. \n \nWe want to show all the latest advancements for some of the OData V2 smart controls like, smart filter bar, smart field and value help. Specifically, what coding and configurations are needed when using date and time fields, when someone needs date/time semantics for single dates like today, tomorrow or ranges like next week, next quarter, etc.  We’ll showcase, how currency and unit of measure can have customized definition by the backend using annotation. So that proper validation, scale and precision can be achieved on the UI side. Along these you’ll see number of other highlights that improve accessibility and user experience in general.\n",
            "location": "THU",
            "startTime": "15:10",
            "endTime": "15:30",
            "speakers": [
                {
                    "firstName": "Dobromira",
                    "lastName": "Boycheva",
                    "company": "SAP Labs Bulgaria",
                    "bio": "I'm developer in Smart Control V2 team base in Sofia, Bulgaria.",
                    "photoUrl": "/api/speaker/photo/45815527324e8492c4765fdcac7fdb1f09cd49eb"
                },
                {
                    "firstName": "Evdokia",
                    "lastName": "Yordanova",
                    "company": "SAP Labs Bulgaria",
                    "bio": "Working as UI5 developer. Passionate about accessibility.",
                    "photoUrl": "/api/speaker/photo/27f79ad2bbaf4472ff27025f1ece7655d1e4082f"
                }
            ],
            "presentationLinks": []
        },
        {
            "id": 164918861955226080,
            "title": "Unleash the power of SAP Fiori elements for SAPUI5 freestyle apps",
            "type": "presentation_long",
            "description": "Many of you have been using smart controls when creating UI5 apps - either in an extension to an SAP Fiori elements apps or within your SAPUI5 freestyle apps. For OData V4 based apps, we now offer an evolution of the smart controls: the SAP Fiori elements building blocks. Learn about how you can leverage the SAP Fiori elements framework in your SAPUI5 freestyle apps based on a real-life productive implementation by our partner UNIORG. ",
            "location": "FRI",
            "startTime": "11:05",
            "endTime": "11:45",
            "speakers": [
                {
                    "firstName": "Marcel",
                    "lastName": "Waechter",
                    "company": "SAP SE",
                    "bio": "Co-Inventor of Fiori elements and Co-Lead-Architect of Fiori elements floorplans for OData v4. Joined SAP 1999, worked nearly 10 years for mass data conversions (like the Euro introduction) and system harmonisations. Moved from the depth of the database to the UI and implemented one of the first productised SAP UI5 applications (Transports &amp; Logistics). After few years being a member of the central S/4 architecture team focusing on UI I developed and implemented together with 3 other colleagues the idea of Fiori elements (Smart Templates) and joined the newly formed UX Engineering group.",
                    "photoUrl": "/api/speaker/photo/e251b05b74307023c9c25a9bbb5e71cb481bd532"
                },
                {
                    "firstName": "Holger",
                    "lastName": "Schaefer",
                    "company": "UNIORG Group",
                    "bio": "Chief Technology Innovation Officer for the UNIORG Group",
                    "twitterHandle": "@hschaefer123",
                    "linkedInUrl": "holger-schaefer-483ba73",
                    "photoUrl": "/api/speaker/photo/f5a43b7e1bf2b638d04ee762c91ca479d8d92d75"
                }
            ],
            "presentationLinks": []
        },
        {
            "id": 164927936694398660,
            "title": "My experience with TypeScript in UI5",
            "type": "presentation_long",
            "description": "Since SAP announced to support TypeScript in UI5, I tried to use this in every new project where possible. In this session, I would like to share my experience with TypeScript in UI5, the challenges I faced and some tips &amp; tricks. On top of that, I want to inspire you with the approach I used to combine TypeScript in an efficient way with UI5. Starting from the project setup and afterwards some more technical details. It will help you to understand the added value on how it can improve your code quality.",
            "location": "FRI",
            "startTime": "13:40",
            "endTime": "14:20",
            "speakers": [
                {
                    "firstName": "Wouter",
                    "lastName": "Lemaire",
                    "company": "LemTech BV",
                    "bio": "Independent SAP solution architect, developer &amp; consultant who loves to make beautiful UI5 apps with some technical challenges and push UI5 to it limits ;)",
                    "twitterHandle": "https://twitter.com/wouter_lemaire",
                    "linkedInUrl": "https://www.linkedin.com/in/wouterlemaire/",
                    "githubUrl": "https://github.com/lemaiwo",
                    "photoUrl": "/api/speaker/photo/d2bd2b0c262e83366102609025c858d1523427ac"
                },
                {
                    "firstName": "Volker",
                    "lastName": "Buzek",
                    "company": "J&amp;S-Soft GmbH",
                    "bio": "Development Architect working in the SAP web/mobile cosmos, often at the boundary SAP/non-SAP. Focus on UI5, CAP (Node.js) and BTP + Azure, faible for Open Source, Testing and CI/CD. Good in web tech + JS/TS/Node, interested in Deno and AR, really bad on Windows. SAP Mentor, maintainer wdi5 + cds-pg, organizer reCAP conference, co-host ui5-community, DSAG UI5 best practice guide contributor.",
                    "twitterHandle": "https://twitter.com/vobu",
                    "linkedInUrl": "https://www.linkedin.com/in/volkerbuzek/",
                    "githubUrl": "https://github.com/vobu",
                    "photoUrl": "/api/speaker/photo/d0a5f200bc27f0c411afa54e988380809dc3b676"
                },
                {
                    "firstName": "Peter",
                    "lastName": "Muessig",
                    "company": "SAP",
                    "bio": "One of the obstetricians of UI5 continuously working on the evolution of the Framework, the Controls, and the Tooling as well as UI5 Web Components and being an active member of the awesome UI5 community!",
                    "twitterHandle": "https://twitter.com/pmuessig",
                    "linkedInUrl": "https://www.linkedin.com/in/peter-muessig-7b40576/",
                    "githubUrl": "https://github.com/petermuessig",
                    "photoUrl": "/api/speaker/photo/a0ee149f7ca30247da0dc69a05255441ec1f75d6"
                }
            ],
            "presentationLinks": []
        },
        {
            "id": 164941623468939870,
            "title": "Sort out your UI5 tooling extensions in a flash",
            "type": "presentation_short",
            "description": "Tired of always adding the same tooling extensions to your projects?\nThis session will show you how to use a newly created yeoman generator to implement UI5 tooling extensions like middlewares and tasks. This is mean to speed up your initial setup and be able to quickly get cracking on the fun bits.",
            "location": "FRI",
            "startTime": "14:30",
            "endTime": "14:50",
            "speakers": [
                {
                    "firstName": "Jakob",
                    "lastName": "Kjaer",
                    "company": "SAP",
                    "bio": "Full time nerd and developer in disguise. I've been on the UI5 wagon since the very beginning and it's been my mission to make sap easier to use for the end users since 2012.",
                    "twitterHandle": "Uxkjaer",
                    "photoUrl": "/api/speaker/photo/5da13b5f2af388eee51f75e9b78c936cc0eb7c65"
                }
            ],
            "presentationLinks": []
        },
        {
            "id": 164942842628543580,
            "title": "P13nify Everything - Personalization for Any Control",
            "type": "handson",
            "description": "We would like to show you how you can add personalization to almost every control. If you have a custom control that you would like to enhance with filtering, sorting, or other options this workshop is for you. We are going to lead you through the enablement of a custom control using the assets provided by UI5 according to the latest UX Guidelines. You should be able to apply your knowledge afterwards in your own application or control development. (Prerequisites: Intermediate UI5 knowledge)",
            "location": "THU2",
            "startTime": "17:00",
            "endTime": "19:00",
            "speakers": [
                {
                    "firstName": "Benedikt",
                    "lastName": "Schölch",
                    "company": "SAP SE",
                    "bio": "Product Owner @ UI5 with focus on metadata driven controls.",
                    "twitterHandle": "@bendkt",
                    "linkedInUrl": "benedikt-schoelch",
                    "photoUrl": "/api/speaker/photo/808b97d4bafb450bffa0c01fa2bb8225260c704e"
                },
                {
                    "firstName": "Martin",
                    "lastName": "Häuser",
                    "company": "SAP SE",
                    "bio": "",
                    "photoUrl": "/api/speaker/photo/c895bb97a2617bb369ad5015d870b1b8b5542bb0"
                }
            ],
            "presentationLinks": []
        },
        {
            "id": 164943484406666020,
            "title": "UI5 Community – Best of UI5",
            "type": "presentation_short",
            "description": "\"Best of UI5\" has been started as the new entry page for the ui5-community GitHub organization. Its purpose is to lookup any kind of UI5 projects, be it applications, libraries, custom controls, tooling extensions, middlewares, tasks, Easy UI5 generators, … Everyone will be able to register his/her projects at Best of UI5. The projects will be ranked by various information and filterable by important criteria.  This should help to find the best suited reuse project for your development needs! Join us to learn more about Best of UI5, how to contribute your projects and the benefits of the ui5-community GitHub organization. Let’s tackle it and help to shape the development experience of the UI5 community! ",
            "location": "THU",
            "startTime": "18:35",
            "endTime": "18:55",
            "speakers": [
                {
                    "firstName": "Marian",
                    "lastName": "Zeis",
                    "company": "",
                    "bio": "SAP Full Stack Developer with Special interest in UI5 and the whole Fiori Ecosystem",
                    "twitterHandle": "@mianbsp",
                    "linkedInUrl": "https://www.linkedin.com/in/marianzeis",
                    "githubUrl": "https://github.com/marianfoo",
                    "photoUrl": "/api/speaker/photo/d954e915a17cd61944687e7154366efc5fc80447"
                },
                {
                    "firstName": "Peter",
                    "lastName": "Muessig",
                    "company": "SAP",
                    "bio": "One of the obstetricians of UI5 continuously working on the evolution of the Framework, the Controls, and the Tooling as well as UI5 Web Components and being an active member of the awesome UI5 community!",
                    "twitterHandle": "https://twitter.com/pmuessig",
                    "linkedInUrl": "https://www.linkedin.com/in/peter-muessig-7b40576/",
                    "githubUrl": "https://github.com/petermuessig",
                    "photoUrl": "/api/speaker/photo/a0ee149f7ca30247da0dc69a05255441ec1f75d6"
                }
            ],
            "presentationLinks": []
        },
        {
            "id": 164951325882559900,
            "title": "Panel Discussion: UI5 Community – Contributor Experiences",
            "type": "presentation_short",
            "description": "The ui5-community GitHub organization evolved to a central place to develop and share UI5 projects. It has become a great place to find ideas, to pick-up and continue ideas and finally make them available for the whole UI5 community. Starting with the UI5 Ecosystem Showcase mono repository hosting several tooling extensions it now hosts more and more individual projects for different purposes: applications, libraries, custom controls, tooling extensions, middlewares, tasks, Easy UI5 generators, … Many developers contributed over the last year and during the panel discussion the moderators will interview some of the very active contributors to the ui5-community GitHub organization to share their experiences.",
            "location": "FRI",
            "startTime": "14:55",
            "endTime": "15:15",
            "speakers": [
                {
                    "firstName": "Volker",
                    "lastName": "Buzek",
                    "company": "J&amp;S-Soft GmbH",
                    "bio": "Development Architect working in the SAP web/mobile cosmos, often at the boundary SAP/non-SAP. Focus on UI5, CAP (Node.js) and BTP + Azure, faible for Open Source, Testing and CI/CD. Good in web tech + JS/TS/Node, interested in Deno and AR, really bad on Windows. SAP Mentor, maintainer wdi5 + cds-pg, organizer reCAP conference, co-host ui5-community, DSAG UI5 best practice guide contributor.",
                    "twitterHandle": "https://twitter.com/vobu",
                    "linkedInUrl": "https://www.linkedin.com/in/volkerbuzek/",
                    "githubUrl": "https://github.com/vobu",
                    "photoUrl": "/api/speaker/photo/d0a5f200bc27f0c411afa54e988380809dc3b676"
                },
                {
                    "firstName": "Peter",
                    "lastName": "Muessig",
                    "company": "SAP",
                    "bio": "One of the obstetricians of UI5 continuously working on the evolution of the Framework, the Controls, and the Tooling as well as UI5 Web Components and being an active member of the awesome UI5 community!",
                    "twitterHandle": "https://twitter.com/pmuessig",
                    "linkedInUrl": "https://www.linkedin.com/in/peter-muessig-7b40576/",
                    "githubUrl": "https://github.com/petermuessig",
                    "photoUrl": "/api/speaker/photo/a0ee149f7ca30247da0dc69a05255441ec1f75d6"
                }
            ],
            "presentationLinks": []
        },
        {
            "id": 164951663099330660,
            "title": "Learn App Development in UI5 and TypeScript",
            "type": "handson",
            "description": "This workshop walks through a comprehensive tutorial to introduce developers to UI5 application development in TypeScript. It includes creating a basic application from the TypeScript template using the \"easy-UI5\" generator, TypeScript coding in regular UI controllers, as well as advanced topics like custom control development and using third-party libraries.",
            "location": "FRI2",
            "startTime": "10:40",
            "endTime": "12:40",
            "speakers": [
                {
                    "firstName": "Andreas",
                    "lastName": "Kunz",
                    "company": "SAP",
                    "bio": "Now a lead architect and doing a little bit of everything, Andreas has been in UI5 development since its creation in late 2008 in various roles, developing dozens of controls in the early years, working on core concepts, creating the sap.m library, giving conference presentations and video lectures. \nHe also was one of the drivers behind open-sourcing UI5 as \"OpenUI5\" and is happy to help the community grow and prosper.",
                    "twitterHandle": "@aku_dev",
                    "linkedInUrl": "andreas-kunz-dev",
                    "githubUrl": "https://github.com/akudev",
                    "photoUrl": "/api/speaker/photo/84e5cca74c6e57ba2ed2b537de588fd3dcce4197"
                },
                {
                    "firstName": "Peter",
                    "lastName": "Muessig",
                    "company": "SAP",
                    "bio": "One of the obstetricians of UI5 continuously working on the evolution of the Framework, the Controls, and the Tooling as well as UI5 Web Components and being an active member of the awesome UI5 community!",
                    "twitterHandle": "https://twitter.com/pmuessig",
                    "linkedInUrl": "https://www.linkedin.com/in/peter-muessig-7b40576/",
                    "githubUrl": "https://github.com/petermuessig",
                    "photoUrl": "/api/speaker/photo/a0ee149f7ca30247da0dc69a05255441ec1f75d6"
                }
            ],
            "presentationLinks": []
        },
        {
            "id": 164968182628573250,
            "title": "Boost your UI5 skills for creating accessible apps",
            "type": "presentation_short",
            "description": "Visit the session to find out the best places in UI5 Demo Kit and documentation to upgrade your accessibility skills. We will explore the latest news around accessibility in UI5 and share some new tips and tricks.",
            "location": "FRI",
            "startTime": "12:20",
            "endTime": "12:40",
            "speakers": [
                {
                    "firstName": "Dobrin",
                    "lastName": "Dimchev",
                    "company": "SAP Labs Bulgaria",
                    "bio": "JavaScript Developer and Accessibility Expert ",
                    "photoUrl": "/api/speaker/photo/b46c414da2bdc9dc51704f57c1dfce7acaca95a8"
                }
            ],
            "presentationLinks": []
        },
        {
            "id": 164968224453644220,
            "title": "Uncovering the hidden gem -  UI5 developer tools",
            "type": "presentation_short",
            "description": "Although not talked about much, OpenUI5 offers one of the best debugging tools out of the box for a UI framework. In this session, we revisit and provide a comprehensive guide to this hidden gem.\nIn this lighting talk, you will be learning how to use the combination of \"UI5 diagnosis tool\", \"UI5 inspector\", browser developer tools effectively to upgrade your developer experience.",
            "location": "THU",
            "startTime": "14:40",
            "endTime": "15:00",
            "speakers": [
                {
                    "firstName": "Nitish",
                    "lastName": "Mehta",
                    "company": "INTEGRTR",
                    "bio": "A travelling techie on a constant journey to explore the world outside and within !\nCoFounder @ INTEGRTR | Ex-SAP | Working with UI5 since 2012",
                    "twitterHandle": "@nitish_mehta",
                    "linkedInUrl": "nitishmehta08",
                    "githubUrl": "https://github.com/nitish-mehta",
                    "otherSocialMedia": "https://instagram.com/nitishmehta08",
                    "photoUrl": "/api/speaker/photo/cfebc4b69a4af360fcd04dba103056e9d8ec526d"
                },
                {
                    "firstName": "Vivek",
                    "lastName": "Gowda",
                    "company": "INTEGRTR",
                    "bio": "JavaScript developer who works on SAP stuff | Exploring modern UI solutions for SAP customers &amp; users | Developer at INTEGRTR",
                    "twitterHandle": "@TheVivekGowda",
                    "linkedInUrl": "TheVivekGowda",
                    "photoUrl": "/api/speaker/photo/24c3ed15f67dd1b54b82d43249a6ad9db3dbd475"
                }
            ],
            "presentationLinks": []
        },
        {
            "id": 16496955268509600,
            "title": "Component reuse and \"micro-frontend\" concepts in a SPA - a report",
            "type": "presentation_short",
            "description": "In the last few years we have seen significant improvements for component-reuse in UI5 since its emergence.\nComponents from our recent development projects feature different modes of operation, varying places of use and configurable output designs.\nHowever, there are points to consider, wrong turns to come back from and tales of (un)expected behaviour to tell.\n\nIn this talk, we'd like to share our experiences, refinements and pitfalls in (re)using components in a UI5 SPA.",
            "location": "THU",
            "startTime": "16:55",
            "endTime": "17:15",
            "speakers": [
                {
                    "firstName": "Andreas",
                    "lastName": "Pflugrad",
                    "company": "eXXcellent solutions GmbH",
                    "bio": "My day-to-day business is designing and developing freestyle UI5 apps that satisfy the needs of our customers in various industry and public sectors.\nBut every so often I pick up my other business passion: acting as an inhouse speaker for eXXcellent solutions or as a public trainer for SAP where I will cast my UI5-knowledge upon unsuspecting colleagues and course participants alike.",
                    "photoUrl": "/api/speaker/photo/a26f451502fe9dbbec7d1b85a79103c0f98116d2"
                }
            ],
            "presentationLinks": []
        }
      ],
      formattedLineup: []
    };
  },
  computed: {
    displayedSchedule: function() {
      if (this.agendaDay === 'day1') {
        if (this.activeTab ===  'talks-tab') {
          return this.filerSortLineup("THU");
        } 
        return this.filerSortLineup("THU2");
      } else {
        if (this.activeTab ===  'talks-tab') {
          return this.filerSortLineup("FRI");
        } 
        return this.filerSortLineup("FRI2");
      }
    }
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
    this.formattedLineup = this.formatLineup();
  },
  methods:  {
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
    },
    formatLineup() {
      return this.lineup.map(session => {
        let start = session.startTime;
        let end = session.endTime;

        if (session.location === "THU" || session.location === "THU2") {
          return {
            ...session, 
            startTime: "2022-07-07T" + start + ":00.000+02:00", 
            endTime: "2022-07-07T" + end + ":00.000+02:00",
            readMoreActivated: false
          }
        }
        return {
          ...session, 
          startTime: "2022-07-08T" + start + ":00.000+02:00", 
          endTime: "2022-07-08T" + end + ":00.000+02:00",
          readMoreActivated: false
        }
      });
    },
    filerSortLineup(day) {
      const filteredSchedule = this.formattedLineup.filter(schedule => schedule.location === day);
      const sortedSchedule = filteredSchedule.sort((a, b) => (luxon.DateTime.fromISO(a.startTime) > luxon.DateTime.fromISO(b.startTime)) ? 1 : -1)

      return sortedSchedule;
    }
  }
});
