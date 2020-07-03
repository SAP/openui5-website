(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./data/agenda.json":
/*!**************************!*\
  !*** ./data/agenda.json ***!
  \**************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":158135211671278080,\"title\":\"Using TypeScript and PubSub to scale freestyle UI5 apps\",\"type\":\"online_presentation_short\",\"description\":\"After 3 years working on the same application and 7000+ Person-days spent on it, we had to develop a developer discipline and architecture to be able to scale the application without having just one Controller with 10k+ LOC. By leveraging the TypeScript compiler, we can have higher confidence in our codebase and better error detection. When adding an event-propagation layer on top of the MVC, and limiting the MVC flow of information, we are able to have a better source of truth and better codebase scalability and stability. We went from two controllers with 10k+ LOC to more than 400 Classes, each doing a small part to contribute to the overall usability of the application, all unit tested and isolated.\",\"location\":\"audimax\",\"startTime\":\"09.07.2020 16:45 UTC+0\",\"endTime\":\"09.07.2020 17:05 UTC+0\",\"speakers\":[{\"firstName\":\"Gabriel\",\"lastName\":\"Borges\",\"company\":\"SAP\",\"bio\":\"After 5 years in UI5 development for different SAP organizations, I've learned a thing or two regarding writing UI5 apps. Currently acting as an architect for an Oil & Gas SAP product, I've been dealing with the same codebase for 4 years now. TypeScript enthusiast.\",\"funFact\":\"\",\"url\":null,\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/2d5ebec3787f074ffb7d54a78887c59414617747\",\"twitter\":\"psidium_\",\"linkedin\":\"psidium\",\"github\":\"https://github.com/Psidium\"}],\"presentationLinks\":[]},{\"id\":158202637171131040,\"title\":\"Introducing Test Recorder\",\"type\":\"online_presentation_short\",\"description\":\"High-quality tests are essential for the professional development of high-quality UI5 applications. It's not easy to create a good set of automated tests as it often requires tedious and error-prone tasks that hinder development efficiency. In this session, we’ll present Test Recorder - the latest addition to the support and development tools in the official UI5 distribution. Test Recorder supports two of the popular UI5 tools for creating automated tests - OPA5 and UIVeri5. It aims to increase developer productivity and provide a gradual learning curve for newcomers to testing. With the Test Recorder you get a locator with a couple of easy clicks. We will explain its intended usage and how you can benefit the most from it.\",\"location\":\"audimax\",\"startTime\":\"09.07.2020 15:30 UTC+0\",\"endTime\":\"09.07.2020 15:50 UTC+0\",\"speakers\":[{\"firstName\":\"Maxim\",\"lastName\":\"Naidenov\",\"company\":\"SAP\",\"bio\":\"Being a passionate software engineer, I have contributed to a vast range of software topics. Currently I am driving the development of testing tools and technologies for SAP UI5 toolkit. Being able to contribute to state-of-the-art tools that redefine some of the basic limitations of quality engineering is a real driver for me.\",\"funFact\":\"\",\"url\":null,\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/16bd84623c6b264641d39afccc353e010fe2557f\",\"twitter\":null,\"linkedin\":null,\"github\":null},{\"firstName\":\"Hristo\",\"lastName\":\"Manchev\",\"company\":\"SAP\",\"bio\":\"Software developer\",\"funFact\":\"\",\"url\":null,\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/9b82ad5b9a774ed5a0bc4b52a15e54239452564d\",\"twitter\":null,\"linkedin\":null,\"github\":null}],\"presentationLinks\":[]},{\"id\":158263744442576450,\"title\":\"Mission Apollo: Bring UI5 to the Moon\",\"type\":\"online_presentation_short\",\"description\":\"The UI5 framework is on a mission to the moon using an Apollo rocket! \\n\\nWith this \\\"Online\\\" Lightening Talk we want to show-case how easy it is today, to integrate OSS libraries into UI5 by using the new CLI tooling with the example of using the Apollo GraphQL framework (NPM dependency + Rollup transpiling). Besides the integration of the OSS we also show-case how seamless it can be to use Apollo inside the UI5 programming model. It proofs that with UI5 today modern OSS tools can be integrated and used similar like in other modern frameworks.\",\"location\":\"room_w1\",\"startTime\":\"10.07.2020 11:00 UTC+0\",\"endTime\":\"10.07.2020 11:20 UTC+0\",\"speakers\":[{\"firstName\":\"Damian Lion\",\"lastName\":\"Maring\",\"company\":\"SAP\",\"bio\":\"I'm an Associate Development Architect working on tools for delivering cloud native SaaS applications. Very early on in my development career, I found my passion in front-end technologies. After joining SAP in 2012, I have been looking into the newest UI related technologies and spreading them throughout the company, including UI5, Vue.js, GraphQL, and many more. Together with my team, I build tools to not only improve developer experience, but also to raise quality awareness for the whole solution.\",\"funFact\":\"\",\"url\":\"https://damianmaring.com/\",\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/832a7553871585fa0cfec250f6449cfaa9a2d616\",\"twitter\":\"DamianMaring\",\"linkedin\":null,\"github\":\"https://github.com/DamianLion\"},{\"firstName\":\"Peter\",\"lastName\":\"Muessig\",\"company\":\"SAP\",\"bio\":\"A full-time UI5er! :-)\",\"funFact\":\"\",\"url\":null,\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/a0ee149f7ca30247da0dc69a05255441ec1f75d6\",\"twitter\":\"pmuessig\",\"linkedin\":\"peter-muessig-7b40576\",\"github\":\"https://github.com/petermuessig\"}],\"presentationLinks\":[]},{\"id\":15828047384189284,\"title\":\"Opposites attract - UI5 Components in Angular\",\"type\":\"online_presentation_long\",\"description\":\"We use UI5 and Angular in a client project for different user roles. UI5 for the backoffice and angular as frontend for customers. Not because we couldn't decide on a framework, but because each of them has their strength and weakness. One day our customer described a third client - a mix of features already done in UI5 and angular - so we did it. An angular client reusing UI5 components (not web components) to deliver a unique experience and saving us development time.\\n\\nIn this talk you will learn:\\n- what benefits and drawbacks did we experience using UI5 in comparison to angular\\n- how did we merge the frameworks seamless beyond iframes\\n- what problems are solved using this approach\",\"location\":\"audimax\",\"startTime\":\"09.07.2020 16:00 UTC+0\",\"endTime\":\"09.07.2020 16:40 UTC+0\",\"speakers\":[{\"firstName\":\"Oliver\",\"lastName\":\"Pehnke\",\"company\":\"eXXcellent Solutions GmbH\",\"bio\":\"My passion is to attend conferences to get inspired about people and information technology. My harbor is a swabian company in Ulm where i am crafting \\\"exxcellent solutions\\\" for various clients in the German industry. My toolbox contains what the customer needs, so Java, JavaScript, Angular UI5, ABAP and so much more.\",\"funFact\":\"\",\"url\":\"https://www.exxcellent.de\",\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/803542bc6c5b8f0bf0b1f1b329d9cceb49308ba7\",\"twitter\":\"OLIVERPEHNKE\",\"linkedin\":\"oliver-pehnke-5711718\",\"github\":null}],\"presentationLinks\":[{\"_id\":\"5ee3695fe6c29a003ff6bb79\",\"linkType\":\"Article Hybrid Angular + UI5\",\"url\":\"https://www.exxcellent.de/tech-diary/2020/03/18/Angular-UI5-hybrid%20application/\"},{\"_id\":\"5ee3695fe6c29a003ff6bb7a\",\"linkType\":\"Article Routing in UI5 + Angular\",\"url\":\"https://www.exxcellent.de/tech-diary/2020/04/30/Routing%20in%20UI5-Angular%20hybrids/\"}]},{\"id\":158289913089298720,\"title\":\"Don't worry, be async\",\"type\":\"online_presentation_long\",\"description\":\"With the UI5 Evolution efforts our framework provides an increasing number of asynchronous capabilities. Yet, we still encounter a lot of apps which rely on synchronous behaviour which in most cases is not necessary. With this lecture we want to help you on your journey to a fully asynchronous UI5 application.\\n\\nWe will look at:\\nHow to enable the asynchronicity in your UI5 application\\nHow the UI5-Migration tool can be helpful\\nHow to migrate more complex code manually by using the new async factory APIs, async Routing and more\\nAn optimised build setup with the UI5-Tooling (preloads and self-contained builds)\",\"location\":\"room_w1\",\"startTime\":\"10.07.2020 10:15 UTC+0\",\"endTime\":\"10.07.2020 10:55 UTC+0\",\"speakers\":[{\"firstName\":\"Thorsten\",\"lastName\":\"Hochreuter\",\"company\":\"SAP\",\"bio\":\"I'm a developer in the UI5 Framework team.\",\"funFact\":\"\",\"url\":\"http://www.thodd.net\",\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/060172b240119670633733aba4519a266f399ff1\",\"twitter\":null,\"linkedin\":null,\"github\":\"https://github.com/thodd\"},{\"firstName\":\"Johannes\",\"lastName\":\"Gluch\",\"company\":\"SAP\",\"bio\":\"... from a developer using SAPUI5 to a developer contributing to SAPUI5 ...\",\"funFact\":\"\",\"url\":null,\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/999fd320887f86de3c14db3000eb2a3df6ea6766\",\"twitter\":null,\"linkedin\":null,\"github\":null}],\"presentationLinks\":[]},{\"id\":158307006252017120,\"title\":\"Component based development\",\"type\":\"online_presentation_long\",\"description\":\"When building a large UI5 app, it becomes a matter of time until the code becomes so complex that it becomes very difficult to add changes and fix bugs. Splitting your code in multiple smaller (UI) components is a way of reducing complexity, because when done correctly, it reduces the coupling between the various parts of your app. In this talk, we'll explain the architecture of such an app and show you how you can start 'thinking' in components.\",\"location\":\"room_w1\",\"startTime\":\"10.07.2020 09:00 UTC+0\",\"endTime\":\"10.07.2020 09:40 UTC+0\",\"speakers\":[{\"firstName\":\"Leon\",\"lastName\":\"van Ginneken\",\"company\":\"Alliander\",\"bio\":\"At the largest grid operator in the Netherlands, we create applications for our field workers using UI5 that are fast, user-friendly and maintainable. I care about making these apps even better, sometimes using techniques that are not typically used in UI5. I it is also a joy to work with the developer community we have grown over the years.\",\"funFact\":\"\",\"url\":null,\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/96639fc9a33abe9fd13a64d6aa95bf57f8e6e65e\",\"twitter\":null,\"linkedin\":null,\"github\":null},{\"firstName\":\"Caspár\",\"lastName\":\"van Tergouw\",\"company\":\"Expertum\",\"bio\":\"\\\"Technology presumes there's just one right way to do things and there never is. \\\"\",\"funFact\":\"\",\"url\":null,\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/90a4805532cd78d071f0ba61ab8a0f00957e83c5\",\"twitter\":null,\"linkedin\":\"casparvantergouw\",\"github\":null}],\"presentationLinks\":[]},{\"id\":158307282664073150,\"title\":\"How we develop a state-of-the-art SAP portal using UI5 and more!\",\"type\":\"online_presentation_long\",\"description\":\"Over the past one and a half years we have been on an exciting journey building a new state-of-the-art web portal for SAP. In this session we would like to elaborate on, why we have actively chosen UI5 as our leading UI development technology, how we have set-up a state-of-the-art local development workflow using the new and open-source UI5 Node.js tooling and last but not least how we utilized the latest technology advancements of UI5 Evolution for building a dynamic UI5 web application, that not only uses cutting edge technologies, like CDS, OData V4, LESS, BrowserSync. and many more, but to build a modern web application, starting in no more than 3 seconds, from a clean cache to fully loaded!\\n\\nThis session will feature a comprehensive overview of modern web technologies, like Gulp, LESS, Node.js, CDS, Puppeteer, other SAP technologies like CDS and OData V4, as well as other things we did utilize from UI5 to ease our development workflow!\\n\\nIn some demo / live coding we will show off, how we have used the tooling, in order to facilitate our fast-pace agile development workflow, including a fully local development with mocked data. In the end everything ends up in an Akamai accelerated SAP Cloud Platform Cloud Foundry space, live on the internet!\",\"location\":\"room_w1\",\"startTime\":\"10.07.2020 07:45 UTC+0\",\"endTime\":\"10.07.2020 08:25 UTC+0\",\"speakers\":[{\"firstName\":\"Kristian\",\"lastName\":\"Kraljic\",\"company\":\"SAP\",\"bio\":\"Technical Lead Architect of SAP for Me (https://me.sap.com) and the SAP ONE Support Launchpad (https://launchpad.support.sap.com). Wen't through all UI technology iterations of SAP: ABAP Lists, Dynpros, BSPs, Web Dynpros, (Skipped Silverlight, come on ...) and UI5 since release 1.18 or so! As soon as SAP announced UI5 the suffering came to an end, finally!\\n\\n\\\"You may compare programming to poetry, well-written code is like a piece of creativity that will last forever.\\\"\",\"funFact\":\"\",\"url\":null,\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/5a11a0a538cf4cf5ec78ab17007543fdac73ce49\",\"twitter\":null,\"linkedin\":null,\"github\":null}],\"presentationLinks\":[]},{\"id\":158349943069959800,\"title\":\"UI5 Tooling 2020\",\"type\":\"online_presentation_long\",\"description\":\"We first presented the UI5 Tooling at UI5con 2018. In 2020 we want to recap on the fundamental ideas of the UI5 Tooling, give an update on where we are today and provide you with an outlook on where we are heading.\\n\\nWe will show you how to structure your small and big UI5 projects and how you can enhance the UI5 Tooling functionality using custom tasks and middleware. We will look beyond the CLI and talk about how you can create a deep integration of the UI5 Tooling into your own Node.js projects.\\n\\nWe want to provide the best possible experience for UI5 developers and we count on your feedback. Get involved on GitHub, Twitter and Slack.\",\"location\":\"audimax\",\"startTime\":\"09.07.2020 17:15 UTC+0\",\"endTime\":\"09.07.2020 17:55 UTC+0\",\"speakers\":[{\"firstName\":\"Merlin\",\"lastName\":\"Beutlberger\",\"company\":\"SAP\",\"bio\":\"Striving to provide powerful tools for UI5 developers\",\"funFact\":\"\",\"url\":null,\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/e9fef59bbcaab8c60bcbed2abbe3a952241d8603\",\"twitter\":\"RandomByte\",\"linkedin\":null,\"github\":\"http://github.com/RandomByte\"},{\"firstName\":\"Matthias\",\"lastName\":\"Oßwald\",\"company\":\"SAP\",\"bio\":\"\",\"funFact\":\"\",\"url\":null,\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/9156b69bd36654ad458d7dfef120db539a68f68c\",\"twitter\":\"matthiaso\",\"linkedin\":null,\"github\":\"http://github.com/matz3\"}],\"presentationLinks\":[]},{\"id\":158372216026213100,\"title\":\"On premise SAP Launchpad as a PWA\",\"type\":\"online_presentation_short\",\"description\":\"It is very possible to add a manifest and web worker to the on premise version of the SAP Launchpad, or in other words, turn the launchpad into an installable, offline capable application without using the Fiori client. The most interesting part here is actually the web worker. You can use it to:\\n- Speed up the launchpad by making the libraries offline available\\n- Cache apps and XHR requests, including oData, for offline use\\n\\nIn 20 minutes, I will demonstrate how a web worker can be used to intercept XHR requests, how this can be used in both an offline-first and an online-first scenario to deliver data, how the web worker can be deployed through and maintained through a simple ICF node, and how the caches themselves can be invalidated using simple cache busting methods\\n\\nThis would also work for stand alone / single applications, but it's more interesting when applied to the launchpad itself!\",\"location\":\"room_w1\",\"startTime\":\"10.07.2020 08:30 UTC+0\",\"endTime\":\"10.07.2020 08:50 UTC+0\",\"speakers\":[{\"firstName\":\"Jorg\",\"lastName\":\"Thuijls\",\"company\":\"Thuijls Pty Ltd\",\"bio\":\"I've been a SAP developer by day and a web developer by night since the mid-00's. The last  5 years I've focused on UI5, Fiori and SCP related technologies mostly, and integrating SAP with the world wide web in general. \\n\\nThe first time I wrote an AJAX call in an SAP system was in 2007, when I put jQuery in a BSP.\",\"funFact\":\"\",\"url\":null,\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/f7569da8d6b9186f4d64ff32c526b2f564e9b98c\",\"twitter\":\"_jorgt\",\"linkedin\":\"jorgthuijls\",\"github\":\"https://github.com/jorgt\"}],\"presentationLinks\":[]},{\"id\":158376917734987780,\"title\":\"UI5 Routing with Reusable Components\",\"type\":\"online_presentation_short\",\"description\":\"We would like to show the new features from UI5 routing regarding configuring a Component as a route target besides a View. Once a component target is displayed, its router runs simultaneously with the other existing router(s). Navigations within the loaded component or across different components can be done using the extended API. Furthermore, we would like to show the motivation behind the new features from UI5 routing by using a sample application where we take the reusability of a component to its ultimate.\",\"location\":\"room_w1\",\"startTime\":\"10.07.2020 09:45 UTC+0\",\"endTime\":\"10.07.2020 10:05 UTC+0\",\"speakers\":[{\"firstName\":\"Jiawei\",\"lastName\":\"Cao\",\"company\":\"SAP\",\"bio\":\"I am a UI5 Core developer, photography enthusiast and riding bike to work everyday. I am currently focusing on improving the UI5 code base to make it be easier consumed by applications.\",\"funFact\":\"\",\"url\":null,\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/25d1199f2840160a6e2cbba007169a6f01abb8be\",\"twitter\":\"stopcoder\",\"linkedin\":null,\"github\":\"https://github.com/stopcoder\"},{\"firstName\":\"Florian\",\"lastName\":\"Vogt\",\"company\":\"SAP\",\"bio\":\"I'm a UI5 Core developer, javascript advocate and spare time vegetable farmer. Currently, I'm working on the UI5 Core to raise it to the next level.\",\"funFact\":\"\",\"url\":null,\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/c2e7f9e72499e4765eb2e8b60c6f63eaebefd163\",\"twitter\":\"flovogt2\",\"linkedin\":\"vogt-florian\",\"github\":\"https://github.com/flovogt\"}],\"presentationLinks\":[]},{\"id\":159009994117881380,\"title\":\"Modernize SAP Fiori app development using SAP Fiori tools\",\"type\":\"online_presentation_short\",\"description\":\"Building amazing SAPUI5 apps for your SAP ERP system is faster and easier than ever. Our SAP Fiori tools work with SAP Business Application Studio or Visual Studio Code to let you create powerful apps with minimal coding. Start with SAP Fiori elements floorplans for common scenarios and adapt for your unique business needs.\",\"location\":\"audimax\",\"startTime\":\"09.07.2020 18:00 UTC+0\",\"endTime\":\"09.07.2020 18:20 UTC+0\",\"speakers\":[{\"firstName\":\"Ashley\",\"lastName\":\"Tung\",\"company\":\"SAP\",\"bio\":\"Area Product Owner for SAP Fiori tools\",\"funFact\":\"\",\"url\":null,\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/3e2bcfb84ff0be606cab78da777aebd83634cfce\",\"twitter\":null,\"linkedin\":null,\"github\":null},{\"firstName\":\"Klaus\",\"lastName\":\"Keller\",\"company\":\"SAP\",\"bio\":\"\",\"funFact\":null,\"url\":null,\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/2eca991e90392a614ca27f8631986190dc878fdd\",\"twitter\":null,\"linkedin\":\"https://www.linkedin.com/in/klaus-keller-ba3876141/\",\"github\":null}],\"presentationLinks\":[]},{\"id\":159103746262852580,\"title\":\"wdi5 - cross-platform test framework for hybrid UI5 apps\",\"type\":\"online_presentation_long\",\"description\":\"We had the need to test a hybrid UI5 app on iOS, Android and as an Electron app. Given that there was no tooling/framework available in UI5-verse so far, we created one: \\\"wdi5\\\" (/vdif5/) https://github.com/js-soft/wdi5 - it's a plugin to Webdriver.IO, utilizing UI5's sap.ui.test.RecordReplay API. Intended as a (differently aligned) complement to UIveri5, wdi5 focuses on the capability to run the same tests on both mobile platforms (iOS + Android) and the desktop (Electron) as well as in the browser. Published under a dual license (Apache 2.0 + derived Beerware), it is open-source and ready to be community-driven.\",\"location\":\"audimax\",\"startTime\":\"09.07.2020 14:45 UTC+0\",\"endTime\":\"09.07.2020 15:25 UTC+0\",\"speakers\":[{\"firstName\":\"Dominik\",\"lastName\":\"Feininger\",\"company\":\"j&s-soft GmbH\",\"bio\":\"Implementing unconventional solutions with UI5 to satisfy customer needs. To see the evolution of UI5 in the last 6 years thrills me for the future.\",\"funFact\":\"\",\"url\":\"https://www.xing.com/profile/Dominik_Feininger/\",\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/6d8eaf7e9d3771566ccf7a548737c79a40c224cc\",\"twitter\":\"The_dominiK\",\"linkedin\":null,\"github\":\"https://github.com/dominikfeininger\"},{\"firstName\":\"Volker\",\"lastName\":\"Buzek\",\"company\":\"j&s-soft GmbH\",\"bio\":\"Development Architect in the SAP mobile/web cosmos. Faible for async code, Continuous Integration and Testing.\",\"funFact\":\"\",\"url\":\"https://www.js-soft.com\",\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/d0a5f200bc27f0c411afa54e988380809dc3b676\",\"twitter\":\"vobu\",\"linkedin\":\"volkerbuzek\",\"github\":\"https://github.com/vobu\"}],\"presentationLinks\":[]},{\"id\":15930059272093912,\"title\":\"Opening Keynote - Day Two\",\"type\":\"keynote\",\"description\":\"The UI5con ON AIR 2020 Keynote\",\"location\":\"room_w1\",\"startTime\":\"10.07.2020 07:00 UTC+0\",\"endTime\":\"10.07.2020 07:40 UTC+0\",\"speakers\":[{\"firstName\":\"Stefan\",\"lastName\":\"Beck\",\"company\":\"SAP\",\"bio\":\"I'm Chief Product Owner and with the UI5 team since day 1. Now I'm looking forward to meet you all virtually at UI5con ON AIR!\",\"funFact\":\"\",\"url\":null,\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/45a7f96f54109bfb9b4aca5e0e70bbfa58daa9cf\",\"twitter\":\"StefanBeck3\",\"linkedin\":\"stefan-beck-a9319a82\",\"github\":null},{\"firstName\":\"Peter\",\"lastName\":\"Muessig\",\"company\":\"SAP\",\"bio\":\"A full-time UI5er! :-)\",\"funFact\":\"\",\"url\":null,\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/a0ee149f7ca30247da0dc69a05255441ec1f75d6\",\"twitter\":\"pmuessig\",\"linkedin\":\"peter-muessig-7b40576\",\"github\":\"https://github.com/petermuessig\"}],\"presentationLinks\":[]},{\"id\":159300600738836900,\"title\":\"Opening Keynote - Day One\",\"type\":\"keynote\",\"description\":\"The UI5con ON AIR 2020 Keynote\",\"location\":\"audimax\",\"startTime\":\"09.07.2020 14:00 UTC+0\",\"endTime\":\"09.07.2020 14:40 UTC+0\",\"speakers\":[{\"firstName\":\"Stefan\",\"lastName\":\"Beck\",\"company\":\"SAP\",\"bio\":\"I'm Chief Product Owner and with the UI5 team since day 1. Now I'm looking forward to meet you all virtually at UI5con ON AIR!\",\"funFact\":\"\",\"url\":null,\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/45a7f96f54109bfb9b4aca5e0e70bbfa58daa9cf\",\"twitter\":\"StefanBeck3\",\"linkedin\":\"stefan-beck-a9319a82\",\"github\":null},{\"firstName\":\"Peter\",\"lastName\":\"Muessig\",\"company\":\"SAP\",\"bio\":\"A full-time UI5er! :-)\",\"funFact\":\"\",\"url\":null,\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/a0ee149f7ca30247da0dc69a05255441ec1f75d6\",\"twitter\":\"pmuessig\",\"linkedin\":\"peter-muessig-7b40576\",\"github\":\"https://github.com/petermuessig\"}],\"presentationLinks\":[]},{\"id\":159350574831112320,\"title\":\"Happy Hour & Networking\",\"type\":\"pre_event\",\"description\":\"Join the UI5con crew and attendees from around the world in winding down the first day of UI5con ON AIR. Mix up a cocktail and network with other developers while taking part in interactive activities designed to help you relax and prepare for day two!\\n\\nIf you would like to make a cocktail alongside our hosts, you are welcome to do so! We will be putting a drink together with cranberry juice, grapefruit juice, white rum, and a lime. Those wishing to make a non-alcoholic drink can substitute sparkling water for the rum.\",\"location\":\"audimax\",\"startTime\":\"09.07.2020 18:30 UTC+0\",\"endTime\":\"09.07.2020 19:30 UTC+0\",\"speakers\":[{\"firstName\":\"Conrad\",\"lastName\":\"Bernal\",\"company\":\"SAP\",\"bio\":\"Conrad Bernal is a member of the SAP UX Engineering team. He is responsible for driving the development and production of training materials for SAP Fiori tools, SAP Fiori elements, and SAP Screen Personas.\",\"funFact\":null,\"url\":null,\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/b97f5a3d6cf30f28a5a25d180ab08c2566c330ba\",\"twitter\":null,\"linkedin\":\"https://www.linkedin.com/in/conradjbernal/\",\"github\":null},{\"firstName\":\"Jacky\",\"lastName\":\"Dittkowski\",\"company\":\"SAP\",\"bio\":\"UX Consultant & Design Specialist innovating SAP. Passionate DT Coach. Creative soul. Always eager to find new ways of building up the User Experience Community inside and outside SAP.\",\"funFact\":\"\",\"url\":null,\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/7b0067c1876d663c5a65b81980a623af0de6bd76\",\"twitter\":\"JackyDittkowski\",\"linkedin\":\"jackybusinessrebels\",\"github\":null}],\"presentationLinks\":[]},{\"id\":15937093408794676,\"title\":\"Break\",\"type\":\"break\",\"description\":\"Grab a tea, coffee, or a lemonade. We'll be right back!\",\"location\":\"room_w1\",\"startTime\":\"10.07.2020 08:55 UTC+0\",\"endTime\":\"10.07.2020 09:00 UTC+0\",\"speakers\":[{\"firstName\":\"Margot\",\"lastName\":\"Wollny\",\"company\":\"\",\"bio\":\"\",\"url\":null,\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/50309c6b78586081d6212ef5a175ccb217849f61\",\"twitter\":null,\"linkedin\":null,\"github\":null}],\"presentationLinks\":[]},{\"id\":159370951471738940,\"title\":\"Break\",\"type\":\"break\",\"description\":\"Grab a tea, coffee, or a lemonade. We'll be right back!\",\"location\":\"room_w1\",\"startTime\":\"10.07.2020 10:10 UTC+0\",\"endTime\":\"10.07.2020 10:15 UTC+0\",\"speakers\":[{\"firstName\":\"Margot\",\"lastName\":\"Wollny\",\"company\":\"\",\"bio\":\"\",\"url\":null,\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/50309c6b78586081d6212ef5a175ccb217849f61\",\"twitter\":null,\"linkedin\":null,\"github\":null}],\"presentationLinks\":[]},{\"id\":159370959048764580,\"title\":\"Break\",\"type\":\"break\",\"description\":\"Grab a tea, coffee, or a lemonade. We'll be right back!\",\"location\":\"audimax\",\"startTime\":\"09.07.2020 17:10 UTC+0\",\"endTime\":\"09.07.2020 17:15 UTC+0\",\"speakers\":[{\"firstName\":\"Margot\",\"lastName\":\"Wollny\",\"company\":\"\",\"bio\":\"\",\"url\":null,\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/50309c6b78586081d6212ef5a175ccb217849f61\",\"twitter\":null,\"linkedin\":null,\"github\":null}],\"presentationLinks\":[]},{\"id\":159370962529984670,\"title\":\"Break\",\"type\":\"break\",\"description\":\"Grab a tea, coffee, or a lemonade. We'll be right back!\",\"location\":\"audimax\",\"startTime\":\"09.07.2020 15:55 UTC+0\",\"endTime\":\"09.07.2020 16:00 UTC+0\",\"speakers\":[{\"firstName\":\"Margot\",\"lastName\":\"Wollny\",\"company\":\"\",\"bio\":\"\",\"url\":null,\"photoUrl\":\"https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/50309c6b78586081d6212ef5a175ccb217849f61\",\"twitter\":null,\"linkedin\":null,\"github\":null}],\"presentationLinks\":[]}]");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/agenda/Agenda.module.css":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./src/components/agenda/Agenda.module.css ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".Agenda_Agenda__iAKDw {\n    background-color: #191717;\n    color: #ffffff;\n    font-family: \"72-Light\", Arial\n}\n\n.Agenda_Agenda__iAKDw .Agenda_agenda__title__3EAcS {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        margin-bottom: 40px;\n    }\n\n.Agenda_Agenda__iAKDw .Agenda_agenda__dayToggle__1nVxs {\n        margin-bottom: 40px\n    }\n\n@media (max-width: 767px) {\n\n.Agenda_Agenda__iAKDw .Agenda_agenda__dayToggle__1nVxs {\n            margin-bottom: 20px\n    }\n        }\n\n.Agenda_AgendaItem__2axk_ {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start\n}\n\n.Agenda_AgendaItem__2axk_::after {\n        display: block;\n        content: \" \";\n        position: absolute;\n        width: 1px;\n        left: 95px;\n        top: 35px;\n        bottom: -20px;\n        z-index: 0;\n        background-image: -webkit-gradient(linear, left top, left bottom, color-stop(30%, rgba(255, 255, 255, 0.2)), color-stop(0%, rgba(255, 255, 255, 0)));\n        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 30%, rgba(255, 255, 255, 0) 0%);\n        background-position: left;\n        background-size: 1px 7px;\n        background-repeat: repeat-y\n    }\n\n@media (max-width: 767px) {\n\n.Agenda_AgendaItem__2axk_::after {\n            left: 76px\n    }\n        }\n\n.Agenda_AgendaItem__2axk_:last-of-type::after {\n            display: none;\n        }\n\n.Agenda_AgendaItem__2axk_.Agenda_view_break__3k5_R {\n        margin: 20px 0 30px\n    }\n\n.Agenda_AgendaItem__2axk_.Agenda_view_break__3k5_R::after {\n            bottom: -50px;\n        }\n\n@media (max-width: 767px) {\n\n.Agenda_AgendaItem__2axk_.Agenda_view_break__3k5_R {\n            margin: 10px 0 20px\n    }\n            .Agenda_AgendaItem__2axk_.Agenda_view_break__3k5_R::after {\n                bottom: -40px;\n            }\n        }\n\n.Agenda_AgendaItem__2axk_ .Agenda_agenda__startTime__KWImz {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 0 45px;\n                flex: 0 0 45px;\n        line-height: 64px;\n        font-size: 18px;\n        margin-right: 20px\n    }\n\n@media (max-width: 767px) {\n\n.Agenda_AgendaItem__2axk_ .Agenda_agenda__startTime__KWImz {\n            font-size: 16px;\n            -ms-flex-preferred-size: 40px;\n                flex-basis: 40px;\n            margin-right: 12px;\n            line-height: 48px\n    }\n        }\n\n.Agenda_AgendaItem__2axk_ .Agenda_AgendaAvatars__2PafU {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 0 60px;\n                flex: 0 0 60px;\n        height: 60px;\n        margin-right: 20px;\n        z-index: 1;\n        position: relative\n    }\n\n@media (max-width: 767px) {\n\n.Agenda_AgendaItem__2axk_ .Agenda_AgendaAvatars__2PafU {\n            width: 48px;\n            min-width: 48px;\n            margin-right: 12px\n    }\n        }\n\n.Agenda_AgendaItem__2axk_ .Agenda_AgendaAvatars__2PafU > * {\n            position: absolute;\n            left: 0;\n            top: 0;\n        }\n\n.Agenda_AgendaItem__2axk_ .Agenda_AgendaAvatars__2PafU {\n\n        /* one photo */\n    }\n\n.Agenda_AgendaItem__2axk_ .Agenda_AgendaAvatars__2PafU > :first-child:nth-last-child(1) {\n            width: 60px;\n            height: 60px\n        }\n\n@media (max-width: 767px) {\n\n.Agenda_AgendaItem__2axk_ .Agenda_AgendaAvatars__2PafU > :first-child:nth-last-child(1) {\n                width: 48px;\n                height: 48px\n        }\n            }\n\n.Agenda_AgendaItem__2axk_ .Agenda_AgendaAvatars__2PafU {\n\n        /* two photos */\n    }\n\n.Agenda_AgendaItem__2axk_ .Agenda_AgendaAvatars__2PafU > :first-child:nth-last-child(2),\n        .Agenda_AgendaItem__2axk_ .Agenda_AgendaAvatars__2PafU > :first-child:nth-last-child(2) ~ div {\n            top: 16px;\n            width: 32px;\n            height: 32px\n        }\n\n@media (max-width: 767px) {\n\n.Agenda_AgendaItem__2axk_ .Agenda_AgendaAvatars__2PafU > :first-child:nth-last-child(2),\n        .Agenda_AgendaItem__2axk_ .Agenda_AgendaAvatars__2PafU > :first-child:nth-last-child(2) ~ div {\n                top: 12px;\n                width: 26px;\n                height: 26px\n        }\n            }\n\n.Agenda_AgendaItem__2axk_ .Agenda_AgendaAvatars__2PafU > :first-child:nth-last-child(2) ~ div {\n            left: 28px\n        }\n\n@media (max-width: 767px) {\n\n.Agenda_AgendaItem__2axk_ .Agenda_AgendaAvatars__2PafU > :first-child:nth-last-child(2) ~ div {\n                left: 24px\n        }\n            }\n\n.Agenda_AgendaItem__2axk_ .Agenda_agenda__desctiption__203Fv {\n        margin: 16px 16px 20px 0\n    }\n\n@media (max-width: 767px) {\n\n.Agenda_AgendaItem__2axk_ .Agenda_agenda__desctiption__203Fv {\n            margin-top: 10px\n    }\n        }\n\n.Agenda_AgendaItem__2axk_:hover .Agenda_AgendaAvatars__2PafU img {\n            -webkit-transition: -webkit-box-shadow 0.2s ease-in-out;\n            transition: -webkit-box-shadow 0.2s ease-in-out;\n            transition: box-shadow 0.2s ease-in-out;\n            transition: box-shadow 0.2s ease-in-out, -webkit-box-shadow 0.2s ease-in-out;\n            -webkit-box-shadow: 0 0 30px 0 #ff8100;\n                    box-shadow: 0 0 30px 0 #ff8100;\n        }\n\n.Agenda_AgendaItem__2axk_:hover .Agenda_session__title__3Gnmk.Agenda_clickable__8pU2U .Agenda_session__title_inner__2QFq1 {\n            border-bottom-color: #ff8100;\n            opacity: 1;\n        }\n\n.Agenda_session__v5GxF .Agenda_session__title__3Gnmk {\n        text-align: left;\n        margin-bottom: 10px\n    }\n\n.Agenda_session__v5GxF .Agenda_session__title__3Gnmk .Agenda_session__title_inner__2QFq1 {\n            \n            /* &:hover {\n                border-bottom-color: #ff8100;\n            } */\n        }\n\n.Agenda_session__v5GxF .Agenda_session__title__3Gnmk.Agenda_clickable__8pU2U .Agenda_session__title_inner__2QFq1 {\n                cursor: pointer;\n                opacity: 0.8;\n                font-size: 22px;\n                line-height: 1.36;\n                letter-spacing: normal;\n                border-bottom: 2px solid transparent;\n                -webkit-transition: border-bottom-color 0.2s ease-in-out, opacity 0.2s ease-in-out;\n                transition: border-bottom-color 0.2s ease-in-out, opacity 0.2s ease-in-out;\n                \n            }\n\n.Agenda_session__v5GxF .Agenda_session__title__3Gnmk.Agenda_view_break__3k5_R {\n            margin-bottom: 0\n        }\n\n.Agenda_session__v5GxF .Agenda_session__title__3Gnmk.Agenda_view_break__3k5_R .Agenda_session__title_inner__2QFq1 {\n                font-size: 18px;\n                font-style: italic;\n                opacity: 0.5;\n            }\n\n@media (max-width: 767px) {\n\n.Agenda_session__v5GxF .Agenda_session__title__3Gnmk {\n            font-size: 18px\n    }\n        }\n\n.Agenda_session__v5GxF .Agenda_session__description__x1LYA {\n        opacity: 0.5;\n        font-size: 16px;\n        line-height: 1.38;\n        letter-spacing: normal;\n        text-align: left;\n        margin-bottom: 20px;\n        white-space: pre-wrap\n    }\n\n@media (max-width: 767px) {\n\n.Agenda_session__v5GxF .Agenda_session__description__x1LYA {\n            font-size: 14px;\n            margin-bottom: 10px\n    }\n        }\n\n.Agenda_session__v5GxF .Agenda_session__speakers__2MWYq {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        -webkit-box-pack: start;\n            -ms-flex-pack: start;\n                justify-content: flex-start;\n        -webkit-box-align: start;\n            -ms-flex-align: start;\n                align-items: flex-start;\n        -ms-flex-line-pack: start;\n            align-content: flex-start;\n    }", "",{"version":3,"sources":["/Users/d068547/workspace/ui5con-germany/src/components/agenda/Agenda.module.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,cAAc;IACd;AAgBJ;;AAdI;QACI,oBAAa;QAAb,oBAAa;QAAb,aAAa;QACb,yBAA8B;YAA9B,sBAA8B;gBAA9B,8BAA8B;QAC9B,yBAAmB;YAAnB,sBAAmB;gBAAnB,mBAAmB;QACnB,mBAAmB;IACvB;;AAEA;QACI;IAKJ;;AAHI;;AAHJ;YAIQ;IAER;QADI;;AAIR;IACI,kBAAkB;IAClB,oBAAa;IAAb,oBAAa;IAAb,aAAa;IACb,uBAA2B;QAA3B,oBAA2B;YAA3B,2BAA2B;IAC3B,wBAAuB;QAAvB,qBAAuB;YAAvB;AA6HJ;;AA3HI;QACI,cAAc;QACd,YAAY;QACZ,kBAAkB;QAClB,UAAU;QACV,UAAU;QACV,SAAS;QACT,aAAa;QACb,UAAU;QACV,oJAAqG;QAArG,qGAAqG;QACrG,yBAAyB;QACzB,wBAAwB;QACxB;IAKJ;;AAHI;;AAdJ;YAeQ;IAER;QADI;;AAIA;YACI,aAAa;QACjB;;AAGJ;QACI;IAYJ;;AAVI;YACI,aAAa;QACjB;;AAEA;;AAPJ;YAQQ;IAKR;YAJQ;gBACI,aAAa;YACjB;QACJ;;AAGJ;QACI,mBAAc;YAAd,kBAAc;gBAAd,cAAc;QACd,iBAAiB;QACjB,eAAe;QACf;IAQJ;;AANI;;AANJ;YAOQ,eAAe;YACf,6BAAgB;gBAAhB,gBAAgB;YAChB,kBAAkB;YAClB;IAER;QADI;;AAGJ;QACI,mBAAc;YAAd,kBAAc;gBAAd,cAAc;QACd,YAAY;QACZ,kBAAkB;QAClB,UAAU;QACV;IA4CJ;;AA1CI;;AAPJ;YAQQ,WAAW;YACX,eAAe;YACf;IAuCR;QAtCI;;AAEA;YACI,kBAAkB;YAClB,OAAO;YACP,MAAM;QACV;;AAjBJ;;QAmBI,cAAc;IA8BlB;;AA7BI;YACI,WAAW;YACX;QAMJ;;AAJI;;AAJJ;gBAKQ,WAAW;gBACX;QAER;YADI;;AA3BR;;QA8BI,eAAe;IAmBnB;;AAlBI;;YAEI,SAAS;YACT,WAAW;YACX;QAOJ;;AALI;;AANJ;;gBAOQ,SAAS;gBACT,WAAW;gBACX;QAER;YADI;;AAEJ;YACI;QAIJ;;AAHI;;AAFJ;gBAGQ;QAER;YADI;;AAIR;QACI;IAIJ;;AAHI;;AAFJ;YAGQ;IAER;QADI;;AAIA;YACI,uDAAuC;YAAvC,+CAAuC;YAAvC,uCAAuC;YAAvC,4EAAuC;YACvC,sCAA8B;oBAA9B,8BAA8B;QAClC;;AAEA;YACI,4BAA4B;YAC5B,UAAU;QACd;;AAMJ;QACI,gBAAgB;QAChB;IAkCJ;;AAhCI;;YAEI;;eAEG;QACP;;AAGI;gBACI,eAAe;gBACf,YAAY;gBACZ,eAAe;gBACf,iBAAiB;gBACjB,sBAAsB;gBACtB,oCAAoC;gBACpC,kFAA0E;gBAA1E,0EAA0E;;YAE9E;;AAEJ;YACI;QAOJ;;AALI;gBACI,eAAe;gBACf,kBAAkB;gBAClB,YAAY;YAChB;;AAGJ;;AAjCJ;YAkCQ;IAER;QADI;;AAGJ;QACI,YAAY;QACZ,eAAe;QACf,iBAAiB;QACjB,sBAAsB;QACtB,gBAAgB;QAChB,mBAAmB;QACnB;IAMJ;;AAJI;;AATJ;YAUQ,eAAe;YACf;IAER;QADI;;AAGJ;QACI,oBAAa;QAAb,oBAAa;QAAb,aAAa;QACb,8BAAmB;QAAnB,6BAAmB;YAAnB,uBAAmB;gBAAnB,mBAAmB;QACnB,mBAAe;YAAf,eAAe;QACf,uBAA2B;YAA3B,oBAA2B;gBAA3B,2BAA2B;QAC3B,wBAAuB;YAAvB,qBAAuB;gBAAvB,uBAAuB;QACvB,yBAAyB;YAAzB,yBAAyB;IAC7B","file":"Agenda.module.css","sourcesContent":[".Agenda {\n    background-color: #191717;\n    color: #ffffff;\n    font-family: \"72-Light\", Arial;\n\n    & .agenda__title {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin-bottom: 40px;\n    }\n\n    & .agenda__dayToggle {\n        margin-bottom: 40px;\n\n        @media (max-width: 767px) {\n            margin-bottom: 20px;\n        }\n    }\n}\n\n.AgendaItem {\n    position: relative;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n\n    &::after {\n        display: block;\n        content: \" \";\n        position: absolute;\n        width: 1px;\n        left: 95px;\n        top: 35px;\n        bottom: -20px;\n        z-index: 0;\n        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 30%, rgba(255, 255, 255, 0) 0%);\n        background-position: left;\n        background-size: 1px 7px;\n        background-repeat: repeat-y;\n\n        @media (max-width: 767px) {\n            left: 76px;\n        }\n    }\n\n    &:last-of-type {\n        &::after {\n            display: none;\n        }\n    }\n\n    &.view_break {\n        margin: 20px 0 30px;\n\n        &::after {\n            bottom: -50px;\n        }\n\n        @media (max-width: 767px) {\n            margin: 10px 0 20px;\n            &::after {\n                bottom: -40px;\n            }\n        }\n    }\n\n    & .agenda__startTime {\n        flex: 0 0 45px;\n        line-height: 64px;\n        font-size: 18px;\n        margin-right: 20px;\n\n        @media (max-width: 767px) {\n            font-size: 16px;\n            flex-basis: 40px;\n            margin-right: 12px;\n            line-height: 48px;\n        }\n    }\n\n    & .AgendaAvatars {\n        flex: 0 0 60px;\n        height: 60px;\n        margin-right: 20px;\n        z-index: 1;\n        position: relative;\n\n        @media (max-width: 767px) {\n            width: 48px;\n            min-width: 48px;\n            margin-right: 12px;\n        }\n\n        & > * {\n            position: absolute;\n            left: 0;\n            top: 0;\n        }\n\n        /* one photo */\n        & > :first-child:nth-last-child(1) {\n            width: 60px;\n            height: 60px;\n\n            @media (max-width: 767px) {\n                width: 48px;\n                height: 48px;\n            }\n        }\n\n        /* two photos */\n        & > :first-child:nth-last-child(2),\n        & > :first-child:nth-last-child(2) ~ div {\n            top: 16px;\n            width: 32px;\n            height: 32px;\n\n            @media (max-width: 767px) {\n                top: 12px;\n                width: 26px;\n                height: 26px;\n            }\n        }\n        & > :first-child:nth-last-child(2) ~ div {\n            left: 28px;\n            @media (max-width: 767px) {\n                left: 24px;\n            }\n        }\n    }\n\n    & .agenda__desctiption {\n        margin: 16px 16px 20px 0;\n        @media (max-width: 767px) {\n            margin-top: 10px;\n        }\n    }\n\n    &:hover {\n        & .AgendaAvatars img {\n            transition: box-shadow 0.2s ease-in-out;\n            box-shadow: 0 0 30px 0 #ff8100;\n        }\n\n        & .session__title.clickable .session__title_inner {\n            border-bottom-color: #ff8100;\n            opacity: 1;\n        }\n    }\n}\n\n.session {\n\n    & .session__title {\n        text-align: left;\n        margin-bottom: 10px;\n\n        & .session__title_inner {\n            \n            /* &:hover {\n                border-bottom-color: #ff8100;\n            } */\n        }\n        \n        &.clickable {\n            & .session__title_inner {\n                cursor: pointer;\n                opacity: 0.8;\n                font-size: 22px;\n                line-height: 1.36;\n                letter-spacing: normal;\n                border-bottom: 2px solid transparent;\n                transition: border-bottom-color 0.2s ease-in-out, opacity 0.2s ease-in-out;\n                \n            }\n        }\n        &.view_break {\n            margin-bottom: 0;\n\n            & .session__title_inner {\n                font-size: 18px;\n                font-style: italic;\n                opacity: 0.5;\n            }\n        }\n\n        @media (max-width: 767px) {\n            font-size: 18px;\n        }\n    }\n\n    & .session__description {\n        opacity: 0.5;\n        font-size: 16px;\n        line-height: 1.38;\n        letter-spacing: normal;\n        text-align: left;\n        margin-bottom: 20px;\n        white-space: pre-wrap;\n\n        @media (max-width: 767px) {\n            font-size: 14px;\n            margin-bottom: 10px;\n        }\n    }\n\n    & .session__speakers {\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        justify-content: flex-start;\n        align-items: flex-start;\n        align-content: flex-start;\n    }\n}"]}]);
// Exports
exports.locals = {
	"Agenda": "Agenda_Agenda__iAKDw",
	"agenda__title": "Agenda_agenda__title__3EAcS",
	"agenda__dayToggle": "Agenda_agenda__dayToggle__1nVxs",
	"AgendaItem": "Agenda_AgendaItem__2axk_",
	"view_break": "Agenda_view_break__3k5_R",
	"agenda__startTime": "Agenda_agenda__startTime__KWImz",
	"AgendaAvatars": "Agenda_AgendaAvatars__2PafU",
	"agenda__desctiption": "Agenda_agenda__desctiption__203Fv",
	"session__title": "Agenda_session__title__3Gnmk",
	"clickable": "Agenda_clickable__8pU2U",
	"session__title_inner": "Agenda_session__title_inner__2QFq1",
	"session": "Agenda_session__v5GxF",
	"session__description": "Agenda_session__description__x1LYA",
	"session__speakers": "Agenda_session__speakers__2MWYq"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/agenda/SessionIcon.module.css":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./src/components/agenda/SessionIcon.module.css ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".SessionIcon_SessionIcon__11TxT {\n    width: 60px;\n    height: 60px;\n    background: rgba(48, 47, 47);\n    border-radius: 50%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}", "",{"version":3,"sources":["/Users/d068547/workspace/ui5con-germany/src/components/agenda/SessionIcon.module.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,YAAY;IACZ,4BAA4B;IAC5B,kBAAkB;IAClB,oBAAa;IAAb,oBAAa;IAAb,aAAa;IACb,yBAAmB;QAAnB,sBAAmB;YAAnB,mBAAmB;IACnB,wBAAuB;QAAvB,qBAAuB;YAAvB,uBAAuB;AAC3B","file":"SessionIcon.module.css","sourcesContent":[".SessionIcon {\n    width: 60px;\n    height: 60px;\n    background: rgba(48, 47, 47);\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}"]}]);
// Exports
exports.locals = {
	"SessionIcon": "SessionIcon_SessionIcon__11TxT"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/avatar/styles.module.css":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./src/components/avatar/styles.module.css ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "    \n    .styles_Avatar__1Qwqy > img {\n        -o-object-fit: cover;\n           object-fit: cover;\n        border-radius: 50%;\n        width: 100%;\n    }\n.styles_Avatar__1Qwqy.styles_hasListener__3X4ut > img {\n        cursor: pointer;\n    }", "",{"version":3,"sources":["/Users/d068547/workspace/ui5con-germany/src/components/avatar/styles.module.css"],"names":[],"mappings":";IACI;QACI,oBAAiB;WAAjB,iBAAiB;QACjB,kBAAkB;QAClB,WAAW;IACf;AAEA;QACI,eAAe;IACnB","file":"styles.module.css","sourcesContent":[".Avatar {    \n    & > img {\n        object-fit: cover;\n        border-radius: 50%;\n        width: 100%;\n    }\n\n    &.hasListener > img {\n        cursor: pointer;\n    }\n}"]}]);
// Exports
exports.locals = {
	"Avatar": "styles_Avatar__1Qwqy",
	"hasListener": "styles_hasListener__3X4ut"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/bar/Bar.module.css":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./src/components/bar/Bar.module.css ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".Bar_bar__1FzvS {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 40px;\n    opacity: 1;\n    position: relative;\n    top: 0px\n}\n@media (max-width: 767px) {\n    .Bar_bar__1FzvS {\n        padding: 30px 20px\n}\n    }\n.Bar_bar__1FzvS .Bar_bar__logo__3HU9C {\n        width: 150px;\n        height: 48px;\n    }\n.Bar_bar__1FzvS .Bar_bar__endItems__2dX_G {\n        -ms-flex-item-align: end;\n            align-self: flex-end\n    }\n.Bar_bar__1FzvS .Bar_bar__endItems__2dX_G > a {\n            display: block;\n            height: 22px;\n            opacity: 0.7;\n            font-size: 18px;\n            font-family: \"72-Light\";\n            line-height: 1.15;\n            text-align: left;\n            color: #ffa42c;\n            text-decoration: none;\n            -webkit-transition: opacity 0.2s ease-in-out;\n            transition: opacity 0.2s ease-in-out\n\n        }\n.Bar_bar__1FzvS .Bar_bar__endItems__2dX_G > a:hover {\n                opacity: 1;\n            }\n@media (max-width: 767px) {\n    .Bar_bar__1FzvS .Bar_bar__endItems__2dX_G > a {\n                font-size: 15px\n\n        }\n            }", "",{"version":3,"sources":["/Users/d068547/workspace/ui5con-germany/src/components/bar/Bar.module.css"],"names":[],"mappings":"AAAA;IACI,oBAAa;IAAb,oBAAa;IAAb,aAAa;IACb,yBAA8B;QAA9B,sBAA8B;YAA9B,8BAA8B;IAC9B,aAAa;IACb,UAAU;IACV,kBAAkB;IAClB;AAoCJ;AAlCI;IARJ;QASQ;AAiCR;IAhCI;AAEA;QACI,YAAY;QACZ,YAAY;IAChB;AAEA;QACI,wBAAoB;YAApB;IAuBJ;AArBI;YACI,cAAc;YACd,YAAY;YACZ,YAAY;YACZ,eAAe;YACf,uBAAuB;YACvB,iBAAiB;YACjB,gBAAgB;YAChB,cAAc;YACd,qBAAqB;YACrB,4CAAoC;YAApC;;QAUJ;AARI;gBACI,UAAU;YACd;AAEA;IAhBJ;gBAiBQ;;QAGR;YAFI","file":"Bar.module.css","sourcesContent":[".bar {\n    display: flex;\n    justify-content: space-between;\n    padding: 40px;\n    opacity: 1;\n    position: relative;\n    top: 0px;\n\n    @media (max-width: 767px) {\n        padding: 30px 20px;\n    }\n\n    & .bar__logo {\n        width: 150px;\n        height: 48px;\n    }\n\n    & .bar__endItems {\n        align-self: flex-end;\n\n        & > a {\n            display: block;\n            height: 22px;\n            opacity: 0.7;\n            font-size: 18px;\n            font-family: \"72-Light\";\n            line-height: 1.15;\n            text-align: left;\n            color: #ffa42c;\n            text-decoration: none;\n            transition: opacity 0.2s ease-in-out;\n\n            &:hover {\n                opacity: 1;\n            }\n\n            @media (max-width: 767px) {\n                font-size: 15px;\n            }\n\n        }\n    }\n}"]}]);
// Exports
exports.locals = {
	"bar": "Bar_bar__1FzvS",
	"bar__logo": "Bar_bar__logo__3HU9C",
	"bar__endItems": "Bar_bar__endItems__2dX_G"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/biography/Biography.module.css":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./src/components/biography/Biography.module.css ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".Biography_biography__10RQ6 {\n    width: 100%;\n    padding: 24px;\n    border: solid 1px #1e1e1e;\n    background-color: #141212;\n    margin-bottom: 12px\n}\n\n.Biography_biography__10RQ6:last-of-type {\n        margin: 0;\n    }\n\n.Biography_biography__title__yDux8 {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-bottom: 24px\n}\n\n@media (max-width: 767px) {\n\n.Biography_biography__title__yDux8 {\n        margin-bottom: 12px\n}\n    }\n\n.Biography_biography__network__30Ke3 {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n\n}\n\n.Biography_biography__networkItem__2lFJK {\n    display: block;\n    text-decoration: none;\n    width: 28px;\n    height: 28px;\n    -webkit-transition: opacity 0.2s ease-in-out;\n    transition: opacity 0.2s ease-in-out;\n    background: rgba(255,255,255,.4) 50% 50% no-repeat;\n    padding: 6px;\n    border-radius: 50%;\n    margin-right: 16px\n}\n\n.Biography_biography__networkItem__2lFJK:last-of-type {\n        margin: 0;\n    }\n\n.Biography_biography__networkItem__2lFJK:hover {\n        opacity: 1;\n        background-color: rgba(255, 255, 255,.5);\n    }\n\n.Biography_biography__networkItem__2lFJK:active {\n        opacity: 1;\n        background-color: rgba(255, 255, 255, 1);\n    }\n\n.Biography_biography__networkItem__2lFJK svg {\n        height: 100%;\n        width: 100%;\n        fill: #141212;\n    }\n\n.Biography_biography__content__3o23K {\n    border: solid 1px #1e1e1e;\n    background-color: #141212;\n    padding: 0 124px 0 48px;\n    opacity: 0.5;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.38;\n    letter-spacing: normal;\n    text-align: left;\n    color: #ffffff;\n    white-space: pre-wrap\n}\n\n@media (max-width: 767px) {\n\n.Biography_biography__content__3o23K {\n        padding-right: 0;\n        font-size: 14px\n}\n    }\n\n", "",{"version":3,"sources":["/Users/d068547/workspace/ui5con-germany/src/components/biography/Biography.module.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,aAAa;IACb,yBAAyB;IACzB,yBAAyB;IACzB;AAKJ;;AAHI;QACI,SAAS;IACb;;AAGJ;IACI,oBAAa;IAAb,oBAAa;IAAb,aAAa;IACb,yBAA8B;QAA9B,sBAA8B;YAA9B,8BAA8B;IAC9B,yBAAmB;QAAnB,sBAAmB;YAAnB,mBAAmB;IACnB;AAKJ;;AAHI;;AANJ;QAOQ;AAER;IADI;;AAGJ;IACI,oBAAa;IAAb,oBAAa;IAAb,aAAa;;AAEjB;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,4CAAoC;IAApC,oCAAoC;IACpC,kDAAkD;IAClD,YAAY;IACZ,kBAAkB;IAClB;AAqBJ;;AAnBI;QACI,SAAS;IACb;;AAEA;QACI,UAAU;QACV,wCAAwC;IAC5C;;AAEA;QACI,UAAU;QACV,wCAAwC;IAC5C;;AAEA;QACI,YAAY;QACZ,WAAW;QACX,aAAa;IACjB;;AAGJ;IACI,yBAAyB;IACzB,yBAAyB;IACzB,uBAAuB;IACvB,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,sBAAsB;IACtB,gBAAgB;IAChB,cAAc;IACd;AAMJ;;AAJI;;AAfJ;QAgBQ,gBAAgB;QAChB;AAER;IADI","file":"Biography.module.css","sourcesContent":[".biography {\n    width: 100%;\n    padding: 24px;\n    border: solid 1px #1e1e1e;\n    background-color: #141212;\n    margin-bottom: 12px;\n\n    &:last-of-type {\n        margin: 0;\n    }\n}\n\n.biography__title {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 24px;\n\n    @media (max-width: 767px) {\n        margin-bottom: 12px;\n    }\n}\n\n.biography__network {\n    display: flex;\n\n}\n\n.biography__networkItem {\n    display: block;\n    text-decoration: none;\n    width: 28px;\n    height: 28px;\n    transition: opacity 0.2s ease-in-out;\n    background: rgba(255,255,255,.4) 50% 50% no-repeat;\n    padding: 6px;\n    border-radius: 50%;\n    margin-right: 16px;\n\n    &:last-of-type {\n        margin: 0;\n    }\n\n    &:hover {\n        opacity: 1;\n        background-color: rgba(255, 255, 255,.5);\n    }\n\n    &:active {\n        opacity: 1;\n        background-color: rgba(255, 255, 255, 1);\n    }\n\n    & svg {\n        height: 100%;\n        width: 100%;\n        fill: #141212;\n    }\n}\n\n.biography__content {\n    border: solid 1px #1e1e1e;\n    background-color: #141212;\n    padding: 0 124px 0 48px;\n    opacity: 0.5;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.38;\n    letter-spacing: normal;\n    text-align: left;\n    color: #ffffff;\n    white-space: pre-wrap;\n\n    @media (max-width: 767px) {\n        padding-right: 0;\n        font-size: 14px;\n    }\n}\n\n"]}]);
// Exports
exports.locals = {
	"biography": "Biography_biography__10RQ6",
	"biography__title": "Biography_biography__title__yDux8",
	"biography__network": "Biography_biography__network__30Ke3",
	"biography__networkItem": "Biography_biography__networkItem__2lFJK",
	"biography__content": "Biography_biography__content__3o23K"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/dialog/Dialog.module.css":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./src/components/dialog/Dialog.module.css ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_PURE_IMPORT_0___ = __webpack_require__(/*! ./x.svg */ "./src/components/dialog/x.svg");
var ___CSS_LOADER_URL_IMPORT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_0___);
// Module
exports.push([module.i, ".Dialog_dialog__I8rpO {\n    position: absolute;\n    width: 50vw;\n    min-width: 640px;\n    max-height: 90vh;\n    overflow-y: auto;\n    margin: 0 auto;\n    background-color: #191717;\n    z-index: 100;\n    padding: 44px;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    color: #fff\n}\n\n.Dialog_dialog__I8rpO:focus {\n        outline: none;\n    }\n\n.Dialog_dialog__I8rpO .Dialog_dialog__close__1dipB {\n        position: absolute;\n        text-align: center;\n        top: 0;\n        right: 0;\n        width: 48px;\n        height: 48px;\n        background: url(" + ___CSS_LOADER_URL_IMPORT_0___ + ") 50% 50% no-repeat;\n        -webkit-transition: opacity 0.2s ease-in-out;\n        transition: opacity 0.2s ease-in-out;\n        line-height: 36px;\n        opacity: 0.6\n\n    }\n\n.Dialog_dialog__I8rpO .Dialog_dialog__close__1dipB:hover {\n            cursor: pointer;\n            opacity: 0.8;\n\n        }\n\n.Dialog_dialog__I8rpO .Dialog_dialog__close__1dipB:active {\n            cursor: pointer;\n            opacity: 1;\n        }\n\n@media (max-width: 767px) {\n\n.Dialog_dialog__I8rpO {\n        min-width: 90vw;\n        width: 90vw\n}\n    }\n\n.Dialog_overlay__18yf0 {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    opacity: 0.96;\n    background-color: #000000;\n    z-index: 99;\n}", "",{"version":3,"sources":["/Users/d068547/workspace/ui5con-germany/src/components/dialog/Dialog.module.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,WAAW;IACX,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;IAChB,cAAc;IACd,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,SAAS;IACT,QAAQ;IACR,wCAAgC;YAAhC,gCAAgC;IAChC;AAmCJ;;AAjCI;QACI,aAAa;IACjB;;AAEA;QACI,kBAAkB;QAClB,kBAAkB;QAClB,MAAM;QACN,QAAQ;QACR,WAAW;QACX,YAAY;QACZ,gEAA4C;QAC5C,4CAAoC;QAApC,oCAAoC;QACpC,iBAAiB;QACjB;;IAaJ;;AAXI;YACI,eAAe;YACf,YAAY;;QAEhB;;AAEA;YACI,eAAe;YACf,UAAU;QACd;;AAIJ;;AA5CJ;QA6CQ,eAAe;QACf;AAER;IADI;;AAGJ;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,aAAa;IACb,yBAAyB;IACzB,WAAW;AACf","file":"Dialog.module.css","sourcesContent":[".dialog {\n    position: absolute;\n    width: 50vw;\n    min-width: 640px;\n    max-height: 90vh;\n    overflow-y: auto;\n    margin: 0 auto;\n    background-color: #191717;\n    z-index: 100;\n    padding: 44px;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    color: #fff;\n\n    &:focus {\n        outline: none;\n    }\n\n    & .dialog__close {\n        position: absolute;\n        text-align: center;\n        top: 0;\n        right: 0;\n        width: 48px;\n        height: 48px;\n        background: url('./x.svg') 50% 50% no-repeat;\n        transition: opacity 0.2s ease-in-out;\n        line-height: 36px;\n        opacity: 0.6;\n\n        &:hover {\n            cursor: pointer;\n            opacity: 0.8;\n\n        }\n\n        &:active {\n            cursor: pointer;\n            opacity: 1;\n        }\n\n    }\n\n    @media (max-width: 767px) {\n        min-width: 90vw;\n        width: 90vw;\n    }\n}\n\n.overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    opacity: 0.96;\n    background-color: #000000;\n    z-index: 99;\n}"]}]);
// Exports
exports.locals = {
	"dialog": "Dialog_dialog__I8rpO",
	"dialog__close": "Dialog_dialog__close__1dipB",
	"overlay": "Dialog_overlay__18yf0"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/footer/styles.module.css":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./src/components/footer/styles.module.css ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".styles_Footer__1LPv3 {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    font-size: 0;\n    line-height: 0;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n\n    -ms-flex-wrap: wrap;\n\n        flex-wrap: wrap;\n}\n\n.styles_FooterItem__2t9kZ {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1\n}\n\n@media (max-width: 767px) {\n\n.styles_FooterItem__2t9kZ {\n        min-width: 50%\n}\n    }\n\n.styles_FooterItem__2t9kZ:not(:first-child) a {\n        font-size: 15px;\n        line-height: 45px;\n        color: rgba(0, 0, 0, 0.5);\n        text-decoration: none;\n        display: inline-block;\n        -webkit-transition: color 0.2s ease-in-out;\n        transition: color 0.2s ease-in-out\n    }\n\n.styles_FooterItem__2t9kZ:not(:first-child) a:hover {\n            /* text-decoration: underline; */\n            color: #141212;\n        }\n\n.styles_FooterItem__2t9kZ:nth-child(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center\n    }\n\n@media (max-width: 767px) {\n\n.styles_FooterItem__2t9kZ:nth-child(2) {\n            -webkit-box-pack: end;\n                -ms-flex-pack: end;\n                    justify-content: flex-end\n    }\n        }\n\n.styles_FooterItem__2t9kZ:last-child {\n        text-align: right\n    }\n\n@media (max-width: 767px) {\n\n.styles_FooterItem__2t9kZ:last-child {\n            margin-top: 30px;\n            text-align: center\n    }\n        }\n\n.styles_FooterItem__2t9kZ:last-child > a:first-child {\n            margin-right: 40px;\n        }\n\n.styles_FooterSocialSeparator__3v9pB {\n    display: inline-block;\n    width: 45px;\n    height: 45px;\n    position: relative;\n    line-height: 0;\n    font-size: 0;\n    z-index: -1\n}\n\n@media (max-width: 767px) {\n\n.styles_FooterSocialSeparator__3v9pB {\n        display: none\n}\n    }\n\n.styles_FooterSocialSeparator__3v9pB::after {\n        content: \"\";\n        position: absolute;\n        border-bottom: 1px solid #70707020;\n        width: 64px;\n        height: 64px;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        -webkit-transform-origin: 0 0;\n                transform-origin: 0 0;\n        left: -45px;\n    }\n\n.styles_FooterIcon__3zH-r {\n    position: relative;\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center\n}\n\n.styles_FooterIcon__3zH-r :first-child {\n        position: relative;\n        margin-right: 8px;\n        top: 1px\n    }\n\n@media (max-width: 767px) {\n\n.styles_FooterIcon__3zH-r :first-child {\n            margin-right: 0;\n            top: 0\n    }\n        }\n\n.styles_FooterIcon__3zH-r > svg {\n        -webkit-transition: opacity 0.2s ease-in-out;\n        transition: opacity 0.2s ease-in-out;\n        opacity: 0.5;\n    }\n\n.styles_FooterIcon__3zH-r:hover > svg {\n        opacity: 1;\n    }\n\n@media (max-width: 767px) {\n\n.styles_FooterIcon__3zH-r {\n        width: 45px;\n        height: 45px;\n        font-size: 0 !important;\n        -webkit-box-shadow: 0 2px 8px 0 rgba(20, 18, 18, 0.16);\n                box-shadow: 0 2px 8px 0 rgba(20, 18, 18, 0.16);\n        border-radius: 50%\n}\n\n        .styles_FooterIcon__3zH-r:first-child {\n            margin-right: 20px;\n        }\n    }", "",{"version":3,"sources":["/Users/d068547/workspace/ui5con-germany/src/components/footer/styles.module.css"],"names":[],"mappings":"AAAA;IACI,oBAAa;IAAb,oBAAa;IAAb,aAAa;IACb,WAAW;IACX,YAAY;IACZ,cAAc;IACd,yBAA8B;QAA9B,sBAA8B;YAA9B,8BAA8B;;IAE9B,mBAAe;;QAAf,eAAe;AACnB;;AAEA;IACI,mBAAY;QAAZ,oBAAY;YAAZ;AAyCJ;;AAvCI;;AAHJ;QAIQ;AAsCR;IArCI;;AAEA;QACI,eAAe;QACf,iBAAiB;QACjB,yBAAyB;QACzB,qBAAqB;QACrB,qBAAqB;QACrB,0CAAkC;QAAlC;IAMJ;;AAJI;YACI,gCAAgC;YAChC,cAAc;QAClB;;AAGJ;QACI,oBAAa;QAAb,oBAAa;QAAb,aAAa;QACb,wBAAuB;YAAvB,qBAAuB;gBAAvB;IAKJ;;AAHI;;AAJJ;YAKQ,qBAAyB;gBAAzB,kBAAyB;oBAAzB;IAER;QADI;;AAGJ;QACI;IAUJ;;AARI;;AAHJ;YAIQ,gBAAgB;YAChB;IAMR;QALI;;AAEA;YACI,kBAAkB;QACtB;;AAIR;IACI,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,cAAc;IACd,YAAY;IACZ;AAgBJ;;AAdI;;AATJ;QAUQ;AAaR;IAZI;;AAEA;QACI,WAAW;QACX,kBAAkB;QAClB,kCAAkC;QAClC,WAAW;QACX,YAAY;QACZ,iCAAyB;gBAAzB,yBAAyB;QACzB,6BAAqB;gBAArB,qBAAqB;QACrB,WAAW;IACf;;AAGJ;IACI,kBAAkB;IAClB,+BAAwB;IAAxB,+BAAwB;IAAxB,wBAAwB;IACxB,wBAAuB;QAAvB,qBAAuB;YAAvB,uBAAuB;IACvB,yBAAmB;QAAnB,sBAAmB;YAAnB;AAiCJ;;AA/BI;QACI,kBAAkB;QAClB,iBAAiB;QACjB;IAMJ;;AAJI;;AALJ;YAMQ,eAAe;YACf;IAER;QADI;;AAGJ;QACI,4CAAoC;QAApC,oCAAoC;QACpC,YAAY;IAChB;;AAEA;QACI,UAAU;IACd;;AAEA;;AA1BJ;QA2BQ,WAAW;QACX,YAAY;QACZ,uBAAuB;QACvB,sDAA8C;gBAA9C,8CAA8C;QAC9C;AAMR;;QAJQ;YACI,kBAAkB;QACtB;IACJ","file":"styles.module.css","sourcesContent":[".Footer {\n    display: flex;\n    width: 100%;\n    font-size: 0;\n    line-height: 0;\n    justify-content: space-between;\n\n    flex-wrap: wrap;\n}\n\n.FooterItem {\n    flex-grow: 1;\n\n    @media (max-width: 767px) {\n        min-width: 50%;\n    }\n\n    &:not(:first-child) a {\n        font-size: 15px;\n        line-height: 45px;\n        color: rgba(0, 0, 0, 0.5);\n        text-decoration: none;\n        display: inline-block;\n        transition: color 0.2s ease-in-out;\n\n        &:hover {\n            /* text-decoration: underline; */\n            color: #141212;\n        }\n    }\n\n    &:nth-child(2) {\n        display: flex;\n        justify-content: center;\n\n        @media (max-width: 767px) {\n            justify-content: flex-end;\n        }\n    }\n\n    &:last-child {\n        text-align: right;\n\n        @media (max-width: 767px) {\n            margin-top: 30px;\n            text-align: center;\n        }\n\n        & > a:first-child {\n            margin-right: 40px;\n        }\n    }\n}\n\n.FooterSocialSeparator {\n    display: inline-block;\n    width: 45px;\n    height: 45px;\n    position: relative;\n    line-height: 0;\n    font-size: 0;\n    z-index: -1;\n\n    @media (max-width: 767px) {\n        display: none;\n    }\n\n    &::after {\n        content: \"\";\n        position: absolute;\n        border-bottom: 1px solid #70707020;\n        width: 64px;\n        height: 64px;\n        transform: rotate(-45deg);\n        transform-origin: 0 0;\n        left: -45px;\n    }\n}\n\n.FooterIcon {\n    position: relative;\n    display: flex !important;\n    justify-content: center;\n    align-items: center;\n\n    & :first-child {\n        position: relative;\n        margin-right: 8px;\n        top: 1px;\n\n        @media (max-width: 767px) {\n            margin-right: 0;\n            top: 0;\n        }\n    }\n\n    & > svg {\n        transition: opacity 0.2s ease-in-out;\n        opacity: 0.5;\n    }\n\n    &:hover > svg {\n        opacity: 1;\n    }\n\n    @media (max-width: 767px) {\n        width: 45px;\n        height: 45px;\n        font-size: 0 !important;\n        box-shadow: 0 2px 8px 0 rgba(20, 18, 18, 0.16);\n        border-radius: 50%;\n\n        &:first-child {\n            margin-right: 20px;\n        }\n    }\n}"]}]);
// Exports
exports.locals = {
	"Footer": "styles_Footer__1LPv3",
	"FooterItem": "styles_FooterItem__2t9kZ",
	"FooterSocialSeparator": "styles_FooterSocialSeparator__3v9pB",
	"FooterIcon": "styles_FooterIcon__3zH-r"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/grid/Grid.module.css":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./src/components/grid/Grid.module.css ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "\n.Grid_grid__2avub {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    -ms-flex-line-pack: stretch;\n        align-content: stretch;\n    padding: 5px;\n    width: 100%;\n    height: 100%;\n    background-color: transparent\n\n}\n.Grid_grid__2avub .Grid_grid__item__6be3m.Grid_col-2__Tz-vc {\n            width: 50%;\n        }\n.Grid_grid__2avub .Grid_grid__item__6be3m.Grid_col-3__f0U3K {\n            width: 33%;\n        }\n.Grid_grid__2avub .Grid_grid__item__6be3m.Grid_col-4__1vcer {\n            width: 25%;\n        }\n.Grid_grid__2avub .Grid_grid__item__6be3m.Grid_row-2__3j1iL {\n            width: 50%;\n        }\n.Grid_grid__2avub .Grid_grid__item__6be3m.Grid_row-3__3pjvr {\n            width: 33.3%;\n        }\n.Grid_grid__2avub .Grid_grid__item__6be3m.Grid_row-4__PdM3k {\n            width: 25%;\n        }", "",{"version":3,"sources":["/Users/d068547/workspace/ui5con-germany/src/components/grid/Grid.module.css"],"names":[],"mappings":";AACA;IACI,oBAAa;IAAb,oBAAa;IAAb,aAAa;IACb,mBAAe;QAAf,eAAe;IACf,wBAAuB;QAAvB,qBAAuB;YAAvB,uBAAuB;IACvB,0BAAoB;QAApB,uBAAoB;YAApB,oBAAoB;IACpB,2BAAsB;QAAtB,sBAAsB;IACtB,YAAY;IACZ,WAAW;IACX,YAAY;IACZ;;AA4BJ;AAzBQ;YACI,UAAU;QACd;AAEA;YACI,UAAU;QACd;AAEA;YACI,UAAU;QACd;AAEA;YACI,UAAU;QACd;AAEA;YACI,YAAY;QAChB;AAEA;YACI,UAAU;QACd","file":"Grid.module.css","sourcesContent":["\n.grid {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: stretch;\n    align-content: stretch;\n    padding: 5px;\n    width: 100%;\n    height: 100%;\n    background-color: transparent;\n\n    & .grid__item {\n        &.col-2 {\n            width: 50%;\n        }\n\n        &.col-3 {\n            width: 33%;\n        }\n\n        &.col-4 {\n            width: 25%;\n        }\n\n        &.row-2 {\n            width: 50%;\n        }\n\n        &.row-3 {\n            width: 33.3%;\n        }\n\n        &.row-4 {\n            width: 25%;\n        }\n    }\n\n}"]}]);
// Exports
exports.locals = {
	"grid": "Grid_grid__2avub",
	"grid__item": "Grid_grid__item__6be3m",
	"col-2": "Grid_col-2__Tz-vc",
	"col-3": "Grid_col-3__f0U3K",
	"col-4": "Grid_col-4__1vcer",
	"row-2": "Grid_row-2__3j1iL",
	"row-3": "Grid_row-3__3pjvr",
	"row-4": "Grid_row-4__PdM3k"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/hero/Hero.module.css":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./src/components/hero/Hero.module.css ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".Hero_hero__3jnsq {\n    position: relative;\n    height: 100vh;\n    min-height: 700px;\n    width: 100%;\n    overflow: hidden\n}\n\n@media (max-width: 767px) {\n\n.Hero_hero__3jnsq {\n        height: 70vh\n}\n    }\n\n.Hero_hero__background__1_Seu {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: -1;\n    background: #000\n\n}\n\n.Hero_hero__background__1_Seu:after {\n        content: \"\";\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: rgba(20, 18, 18, .8);\n        border-top: 4px solid #ff5a37;\n        z-index: 10;\n    }\n\n.Hero_hero__sharing__1khVT {\n    position: absolute;\n    right: 24px;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n\n.Hero_hero__content__241sI {\n    max-width: 1240px;\n    margin: 0 auto;\n    padding: 15vh 50px 0 50px\n}\n\n@media (max-width: 1023px) {\n\n.Hero_hero__content__241sI {\n        padding-top: 25vh;\n        padding-left: 30px;\n        padding-right: 30px\n}\n    }\n\n@media (max-width: 767px) {\n\n.Hero_hero__content__241sI {\n        padding-top: 10vh;\n        padding-left: 20px;\n        padding-right: 20px\n}\n    }\n\n.Hero_hero__logo__3HxpX {\n    position: absolute;\n    width: 500px;\n    height: 158px;\n    opacity: 0;\n    left: calc(50% - 250px)\n}\n\n@media (max-width: 767px) {\n\n.Hero_hero__logo__3HxpX {\n        width: 250px;\n        height: 79px;\n        left: calc(50% - 125px)\n}\n    }", "",{"version":3,"sources":["/Users/d068547/workspace/ui5con-germany/src/components/hero/Hero.module.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,aAAa;IACb,iBAAiB;IACjB,WAAW;IACX;AAKJ;;AAHI;;AAPJ;QAQQ;AAER;IADI;;AAGJ;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,WAAW;IACX;;AAeJ;;AAbI;QACI,WAAW;QACX,cAAc;QACd,kBAAkB;QAClB,MAAM;QACN,OAAO;QACP,QAAQ;QACR,SAAS;QACT,sCAAsC;QACtC,6BAA6B;QAC7B,WAAW;IACf;;AAIJ;IACI,kBAAkB;IAClB,WAAW;IACX,QAAQ;IACR,mCAA2B;YAA3B,2BAA2B;AAC/B;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd;AAaJ;;AAXI;;AALJ;QAMQ,iBAAiB;QACjB,kBAAkB;QAClB;AAQR;IAPI;;AAEA;;AAXJ;QAYQ,iBAAiB;QACjB,kBAAkB;QAClB;AAER;IADI;;AAGJ;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,UAAU;IACV;AAOJ;;AALI;;AAPJ;QAQQ,YAAY;QACZ,YAAY;QACZ;AAER;IADI","file":"Hero.module.css","sourcesContent":[".hero {\n    position: relative;\n    height: 100vh;\n    min-height: 700px;\n    width: 100%;\n    overflow: hidden;\n\n    @media (max-width: 767px) {\n        height: 70vh;\n    }\n}\n\n.hero__background {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: -1;\n    background: #000;\n\n    &:after {\n        content: \"\";\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: rgba(20, 18, 18, .8);\n        border-top: 4px solid #ff5a37;\n        z-index: 10;\n    }\n\n}\n\n.hero__sharing {\n    position: absolute;\n    right: 24px;\n    top: 50%;\n    transform: translateY(-50%);\n}\n\n.hero__content {\n    max-width: 1240px;\n    margin: 0 auto;\n    padding: 15vh 50px 0 50px;\n\n    @media (max-width: 1023px) {\n        padding-top: 25vh;\n        padding-left: 30px;\n        padding-right: 30px;\n    }\n\n    @media (max-width: 767px) {\n        padding-top: 10vh;\n        padding-left: 20px;\n        padding-right: 20px;\n    }\n}\n\n.hero__logo {\n    position: absolute;\n    width: 500px;\n    height: 158px;\n    opacity: 0;\n    left: calc(50% - 250px);\n\n    @media (max-width: 767px) {\n        width: 250px;\n        height: 79px;\n        left: calc(50% - 125px);\n    }\n}"]}]);
// Exports
exports.locals = {
	"hero": "Hero_hero__3jnsq",
	"hero__background": "Hero_hero__background__1_Seu",
	"hero__sharing": "Hero_hero__sharing__1khVT",
	"hero__content": "Hero_hero__content__241sI",
	"hero__logo": "Hero_hero__logo__3HxpX"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/iconText/IconText.module.css":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./src/components/iconText/IconText.module.css ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".IconText_iconText__YxjZw {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-family: \"72-Light\", Arial, Sans-Serif\n\n}\n.IconText_iconText__YxjZw.IconText_color_light__13PXF {\n        color: #ffa42c;\n    }\n.IconText_iconText__YxjZw.IconText_size_large__GP4bt{\n        font-size: 30px;\n        line-height: 1.8em\n    }\n@media (max-width: 767px) {\n    .IconText_iconText__YxjZw.IconText_size_large__GP4bt{\n            font-size: 18px\n    }\n        }\n.IconText_iconText__YxjZw.IconText_size_large__GP4bt .IconText_iconText__icon__3szLs {\n            margin-right: 12px;\n        }\n.IconText_iconText__YxjZw .IconText_iconText__icon__3szLs {\n        margin-right: 5px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        width: 24px;\n        height: 24px\n    }\n@media (max-width: 767px) {\n    .IconText_iconText__YxjZw .IconText_iconText__icon__3szLs {\n            width: 18px;\n            height: 18px\n    }\n        }\n.IconText_iconText__YxjZw .IconText_iconText__text__qijd4 {\n        display: inline-block;\n    }", "",{"version":3,"sources":["/Users/d068547/workspace/ui5con-germany/src/components/iconText/IconText.module.css"],"names":[],"mappings":"AAAA;IACI,oBAAa;IAAb,oBAAa;IAAb,aAAa;IACb,yBAAmB;QAAnB,sBAAmB;YAAnB,mBAAmB;IACnB;;AAqCJ;AAlCI;QACI,cAAc;IAClB;AAEA;QACI,eAAe;QACf;IASJ;AAPI;IAJJ;YAKQ;IAMR;QALI;AAEA;YACI,kBAAkB;QACtB;AAIJ;QACI,iBAAiB;QACjB,oBAAa;QAAb,oBAAa;QAAb,aAAa;QACb,WAAW;QACX;IAMJ;AAJI;IANJ;YAOQ,WAAW;YACX;IAER;QADI;AAGJ;QACI,qBAAqB;IACzB","file":"IconText.module.css","sourcesContent":[".iconText {\n    display: flex;\n    align-items: center;\n    font-family: \"72-Light\", Arial, Sans-Serif;\n\n\n    &.color_light {\n        color: #ffa42c;\n    }\n\n    &.size_large{\n        font-size: 30px;\n        line-height: 1.8em;\n\n        @media (max-width: 767px) {\n            font-size: 18px;\n        }\n\n        & .iconText__icon {\n            margin-right: 12px;\n        }\n    }\n\n\n    & .iconText__icon {\n        margin-right: 5px;\n        display: flex;\n        width: 24px;\n        height: 24px;\n\n        @media (max-width: 767px) {\n            width: 18px;\n            height: 18px;\n        }\n    }\n\n    & .iconText__text {\n        display: inline-block;\n    }\n\n}"]}]);
// Exports
exports.locals = {
	"iconText": "IconText_iconText__YxjZw",
	"color_light": "IconText_color_light__13PXF",
	"size_large": "IconText_size_large__GP4bt",
	"iconText__icon": "IconText_iconText__icon__3szLs",
	"iconText__text": "IconText_iconText__text__qijd4"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/logo/styles.module.css":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./src/components/logo/styles.module.css ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".styles_Logo__275_M {\n\n}\n\n@-webkit-keyframes styles_wave__3mt5H {\n    0% {\n    }\n    50% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes styles_wave__3mt5H {\n    0% {\n    }\n    50% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n.styles_Logo__275_M:hover .styles_Wave1__3fVki, .styles_view_animation__2gDa4 .styles_Wave1__3fVki {\n        opacity: 1;\n        -webkit-animation:\n            styles_wave__3mt5H 0.45s ease-out 0.5s,\n            styles_wave__3mt5H 0.45s ease-out 1.4s;\n                animation:\n            styles_wave__3mt5H 0.45s ease-out 0.5s,\n            styles_wave__3mt5H 0.45s ease-out 1.4s;\n    }\n\n.styles_Logo__275_M:hover .styles_Wave2__3Vlgm, .styles_view_animation__2gDa4 .styles_Wave2__3Vlgm {\n        -webkit-animation:\n            styles_wave__3mt5H 0.45s ease-out 0.6s,\n            styles_wave__3mt5H 0.45s ease-out 1.5s;\n                animation:\n            styles_wave__3mt5H 0.45s ease-out 0.6s,\n            styles_wave__3mt5H 0.45s ease-out 1.5s;\n    }\n\n.styles_Logo__275_M:hover .styles_Wave3__3yM5Y, .styles_view_animation__2gDa4 .styles_Wave3__3yM5Y {\n        -webkit-animation:\n            styles_wave__3mt5H 0.45s ease-out 0.7s,\n            styles_wave__3mt5H 0.45s ease-out 1.6s;\n                animation:\n            styles_wave__3mt5H 0.45s ease-out 0.7s,\n            styles_wave__3mt5H 0.45s ease-out 1.6s;\n    }\n", "",{"version":3,"sources":["/Users/d068547/workspace/ui5con-germany/src/components/logo/styles.module.css"],"names":[],"mappings":"AAAA;;AAEA;;AAEA;IACI;IACA;IACA;QACI,UAAU;IACd;IACA;QACI,UAAU;IACd;AACJ;;AATA;IACI;IACA;IACA;QACI,UAAU;IACd;IACA;QACI,UAAU;IACd;AACJ;;AAGI;QACI,UAAU;QACV;;kDAE4B;gBAF5B;;kDAE4B;IAChC;;AAEA;QACI;;kDAE4B;gBAF5B;;kDAE4B;IAChC;;AAEA;QACI;;kDAE4B;gBAF5B;;kDAE4B;IAChC","file":"styles.module.css","sourcesContent":[".Logo {\n\n}\n\n@keyframes wave {\n    0% {\n    }\n    50% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n.Logo:hover, .view_animation {\n    & .Wave1 {\n        opacity: 1;\n        animation:\n            wave 0.45s ease-out 0.5s,\n            wave 0.45s ease-out 1.4s;\n    }\n\n    & .Wave2 {\n        animation:\n            wave 0.45s ease-out 0.6s,\n            wave 0.45s ease-out 1.5s;\n    }\n\n    & .Wave3 {\n        animation:\n            wave 0.45s ease-out 0.7s,\n            wave 0.45s ease-out 1.6s;\n    }\n}\n"]}]);
// Exports
exports.locals = {
	"Logo": "styles_Logo__275_M",
	"Wave1": "styles_Wave1__3fVki",
	"view_animation": "styles_view_animation__2gDa4",
	"wave": "styles_wave__3mt5H",
	"Wave2": "styles_Wave2__3Vlgm",
	"Wave3": "styles_Wave3__3yM5Y"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/section/Section.module.css":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./src/components/section/Section.module.css ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".Section_section__2tYc4 {\n\n    position: relative;\n    width: 100%\n}\n.Section_section__2tYc4 .Section_section__content__3OypM {\n        max-width: 980px;\n        margin: 0 auto;\n        padding: 100px 50px\n    }\n@media (max-width: 1023px) {\n    .Section_section__2tYc4 .Section_section__content__3OypM {\n            padding: 80px 30px\n    }\n        }\n@media (max-width: 767px) {\n    .Section_section__2tYc4 .Section_section__content__3OypM {\n            padding: 60px 20px\n    }\n        }", "",{"version":3,"sources":["/Users/d068547/workspace/ui5con-germany/src/components/section/Section.module.css"],"names":[],"mappings":"AAAA;;IAEI,kBAAkB;IAClB;AAeJ;AAbI;QACI,gBAAgB;QAChB,cAAc;QACd;IASJ;AAPI;IALJ;YAMQ;IAMR;QALI;AAEA;IATJ;YAUQ;IAER;QADI","file":"Section.module.css","sourcesContent":[".section {\n\n    position: relative;\n    width: 100%;\n\n    & .section__content {\n        max-width: 980px;\n        margin: 0 auto;\n        padding: 100px 50px;\n\n        @media (max-width: 1023px) {\n            padding: 80px 30px;\n        }\n\n        @media (max-width: 767px) {\n            padding: 60px 20px;\n        }\n    }\n}"]}]);
// Exports
exports.locals = {
	"section": "Section_section__2tYc4",
	"section__content": "Section_section__content__3OypM"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/sharing/ShareButton.module.css":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./src/components/sharing/ShareButton.module.css ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".ShareButton_sharingButton__22rOo {\n    display: block;\n    text-decoration: none;\n    width: 36px;\n    height: 36px;\n    opacity: 0.7;\n    margin-top: 10px;\n    -webkit-transition: opacity 0.2s ease-in-out;\n    transition: opacity 0.2s ease-in-out;\n    background: rgba(20,18,18,.2) 50% 50% no-repeat;\n    padding: 9px;\n    border-radius: 50%\n}\n.ShareButton_sharingButton__22rOo:hover {\n        opacity: 1;\n        cursor: pointer;\n        background-color: rgba(20, 18, 18,.5);\n    }\n.ShareButton_sharingButton__22rOo:active {\n        opacity: 1;\n        cursor: pointer;\n        background-color: rgba(20, 18, 18, 1);\n    }\n.ShareButton_sharingButton__22rOo svg {\n        height: 100%;\n        width: 100%;\n        fill: #ffa42c;\n    }", "",{"version":3,"sources":["/Users/d068547/workspace/ui5con-germany/src/components/sharing/ShareButton.module.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,4CAAoC;IAApC,oCAAoC;IACpC,+CAA+C;IAC/C,YAAY;IACZ;AAmBJ;AAjBI;QACI,UAAU;QACV,eAAe;QACf,qCAAqC;IACzC;AAEA;QACI,UAAU;QACV,eAAe;QACf,qCAAqC;IACzC;AAEA;QACI,YAAY;QACZ,WAAW;QACX,aAAa;IACjB","file":"ShareButton.module.css","sourcesContent":[".sharingButton {\n    display: block;\n    text-decoration: none;\n    width: 36px;\n    height: 36px;\n    opacity: 0.7;\n    margin-top: 10px;\n    transition: opacity 0.2s ease-in-out;\n    background: rgba(20,18,18,.2) 50% 50% no-repeat;\n    padding: 9px;\n    border-radius: 50%;\n\n    &:hover {\n        opacity: 1;\n        cursor: pointer;\n        background-color: rgba(20, 18, 18,.5);\n    }\n\n    &:active {\n        opacity: 1;\n        cursor: pointer;\n        background-color: rgba(20, 18, 18, 1);\n    }\n\n    & svg {\n        height: 100%;\n        width: 100%;\n        fill: #ffa42c;\n    }\n}"]}]);
// Exports
exports.locals = {
	"sharingButton": "ShareButton_sharingButton__22rOo"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/sharing/Sharing.module.css":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./src/components/sharing/Sharing.module.css ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".Sharing_sharing__34Wq7 {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center\n}\n.Sharing_sharing__34Wq7 .Sharing_sharing__title__13mpe {\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        font-size: 16px;\n        opacity: 0.7;\n        color: #ffa42c;\n    }", "",{"version":3,"sources":["/Users/d068547/workspace/ui5con-germany/src/components/sharing/Sharing.module.css"],"names":[],"mappings":"AAAA;IACI,oBAAa;IAAb,oBAAa;IAAb,aAAa;IACb,4BAAsB;IAAtB,6BAAsB;QAAtB,0BAAsB;YAAtB,sBAAsB;IACtB,yBAAmB;QAAnB,sBAAmB;YAAnB;AAQJ;AANI;QACI,yBAAiB;WAAjB,sBAAiB;YAAjB,qBAAiB;gBAAjB,iBAAiB;QACjB,eAAe;QACf,YAAY;QACZ,cAAc;IAClB","file":"Sharing.module.css","sourcesContent":[".sharing {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    & .sharing__title {\n        user-select: none;\n        font-size: 16px;\n        opacity: 0.7;\n        color: #ffa42c;\n    }\n}"]}]);
// Exports
exports.locals = {
	"sharing": "Sharing_sharing__34Wq7",
	"sharing__title": "Sharing_sharing__title__13mpe"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/speakerCard/SpeakerCard.module.css":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./src/components/speakerCard/SpeakerCard.module.css ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".SpeakerCard_speaker__c-mYF {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    margin-right: 30px\n}\n.SpeakerCard_speaker__c-mYF .SpeakerCard_speaker__content__2LLB3 {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n    }\n.SpeakerCard_speaker__c-mYF .SpeakerCard_speaker__photo__2-42u {\n        width: 24px;\n        height: 24px;\n        -o-object-fit: cover;\n           object-fit: cover;\n        border-radius: 50%;\n        margin-right: 8px;\n    }\n.SpeakerCard_speaker__c-mYF .SpeakerCard_speaker__fullname__1kk-r {\n        font-family: \"72\", Arial;\n        font-size: 14px;\n        font-stretch: normal;\n        font-style: normal;\n        letter-spacing: normal;\n        text-align: left;\n        color: #ffffff;\n    }\n.SpeakerCard_speaker__c-mYF .SpeakerCard_speaker__company__DBGQy {\n        opacity: 0.5;\n        font-size: 10px;\n        font-weight: normal;\n        font-stretch: normal;\n        font-style: normal;\n        line-height: 1.2;\n        letter-spacing: 0.6px;\n        text-align: left;\n        color: #ffffff;\n        text-transform: uppercase;\n    }\n.SpeakerCard_speaker__c-mYF.SpeakerCard_speaker_size_large__1TZz4 .SpeakerCard_speaker__photo__2-42u {\n            width: 40px;\n            height: 40px;\n        }\n.SpeakerCard_speaker__c-mYF.SpeakerCard_speaker_size_large__1TZz4 .SpeakerCard_speaker__fullname__1kk-r {\n            font-size: 22px;\n            line-height: 1.36;\n            letter-spacing: normal;\n        }\n.SpeakerCard_speaker__c-mYF.SpeakerCard_speaker_size_large__1TZz4 .SpeakerCard_speaker__company__DBGQy {\n            font-size: 10px;\n            line-height: 1.2;\n            letter-spacing: 0.6px;\n        }\n@media (max-width: 767px) {\n            .SpeakerCard_speaker__c-mYF.SpeakerCard_speaker_size_large__1TZz4 .SpeakerCard_speaker__photo__2-42u {\n                width: 32px;\n                height: 32px;\n            }\n\n            .SpeakerCard_speaker__c-mYF.SpeakerCard_speaker_size_large__1TZz4 .SpeakerCard_speaker__fullname__1kk-r {\n                font-size: 18px;\n            }\n\n            .SpeakerCard_speaker__c-mYF.SpeakerCard_speaker_size_large__1TZz4 .SpeakerCard_speaker__company__DBGQy {\n                font-size: 8px;\n            }\n        }", "",{"version":3,"sources":["/Users/d068547/workspace/ui5con-germany/src/components/speakerCard/SpeakerCard.module.css"],"names":[],"mappings":"AAAA;IACI,oBAAa;IAAb,oBAAa;IAAb,aAAa;IACb,8BAAmB;IAAnB,6BAAmB;QAAnB,uBAAmB;YAAnB,mBAAmB;IACnB,qBAAiB;QAAjB,iBAAiB;IACjB,uBAA2B;QAA3B,oBAA2B;YAA3B,2BAA2B;IAC3B,wBAAuB;QAAvB,qBAAuB;YAAvB,uBAAuB;IACvB;AAyEJ;AAvEI;QACI,oBAAa;QAAb,oBAAa;QAAb,aAAa;QACb,4BAAsB;QAAtB,6BAAsB;YAAtB,0BAAsB;gBAAtB,sBAAsB;IAC1B;AAEA;QACI,WAAW;QACX,YAAY;QACZ,oBAAiB;WAAjB,iBAAiB;QACjB,kBAAkB;QAClB,iBAAiB;IACrB;AAEA;QACI,wBAAwB;QACxB,eAAe;QACf,oBAAoB;QACpB,kBAAkB;QAClB,sBAAsB;QACtB,gBAAgB;QAChB,cAAc;IAClB;AAEA;QACI,YAAY;QACZ,eAAe;QACf,mBAAmB;QACnB,oBAAoB;QACpB,kBAAkB;QAClB,gBAAgB;QAChB,qBAAqB;QACrB,gBAAgB;QAChB,cAAc;QACd,yBAAyB;IAC7B;AAII;YACI,WAAW;YACX,YAAY;QAChB;AAEA;YACI,eAAe;YACf,iBAAiB;YACjB,sBAAsB;QAC1B;AAEA;YACI,eAAe;YACf,gBAAgB;YAChB,qBAAqB;QACzB;AAEA;YACI;gBACI,WAAW;gBACX,YAAY;YAChB;;YAEA;gBACI,eAAe;YACnB;;YAEA;gBACI,cAAc;YAClB;QACJ","file":"SpeakerCard.module.css","sourcesContent":[".speaker {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: flex-start;\n    margin-right: 30px;\n\n    & .speaker__content {\n        display: flex;\n        flex-direction: column;\n    }\n\n    & .speaker__photo {\n        width: 24px;\n        height: 24px;\n        object-fit: cover;\n        border-radius: 50%;\n        margin-right: 8px;\n    }\n\n    & .speaker__fullname {\n        font-family: \"72\", Arial;\n        font-size: 14px;\n        font-stretch: normal;\n        font-style: normal;\n        letter-spacing: normal;\n        text-align: left;\n        color: #ffffff;\n    }\n\n    & .speaker__company {\n        opacity: 0.5;\n        font-size: 10px;\n        font-weight: normal;\n        font-stretch: normal;\n        font-style: normal;\n        line-height: 1.2;\n        letter-spacing: 0.6px;\n        text-align: left;\n        color: #ffffff;\n        text-transform: uppercase;\n    }\n\n    &.speaker_size_large {\n\n        & .speaker__photo {\n            width: 40px;\n            height: 40px;\n        }\n\n        & .speaker__fullname {\n            font-size: 22px;\n            line-height: 1.36;\n            letter-spacing: normal;\n        }\n\n        & .speaker__company {\n            font-size: 10px;\n            line-height: 1.2;\n            letter-spacing: 0.6px;\n        }\n\n        @media (max-width: 767px) {\n            & .speaker__photo {\n                width: 32px;\n                height: 32px;\n            }\n\n            & .speaker__fullname {\n                font-size: 18px;\n            }\n\n            & .speaker__company {\n                font-size: 8px;\n            }\n        }\n\n    }\n}"]}]);
// Exports
exports.locals = {
	"speaker": "SpeakerCard_speaker__c-mYF",
	"speaker__content": "SpeakerCard_speaker__content__2LLB3",
	"speaker__photo": "SpeakerCard_speaker__photo__2-42u",
	"speaker__fullname": "SpeakerCard_speaker__fullname__1kk-r",
	"speaker__company": "SpeakerCard_speaker__company__DBGQy",
	"speaker_size_large": "SpeakerCard_speaker_size_large__1TZz4"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/sticker/Sticker.module.css":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./src/components/sticker/Sticker.module.css ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".Sticker_sticker__2sC8f {\n    font-size: 0;\n    line-height: 0;\n    position: relative;\n    -webkit-perspective: 800px;\n    width: 100%;\n    height: 100%\n}\n\n.Sticker_sticker__2sC8f img {\n        width: 100%;\n        height: 100%;\n        -o-object-fit: cover;\n           object-fit: cover;\n    }\n\n.Sticker_sticker__container__1fRBj {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n    -webkit-transform-origin: right center;\n            transform-origin: right center;\n    -webkit-transition: trabsform 1s;\n    transition: trabsform 1s\n\n}\n\n.Sticker_sticker__container__1fRBj > img {\n        padding: 5px;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border-radius: 0.25rem;\n        -webkit-backface-visibility: hidden;\n        z-index: 1;\n    }\n\n.Sticker_sticker__front__1_UFb,\n.Sticker_sticker__back__3caJ5 {\n    padding: 5px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 0.25rem;\n    -webkit-backface-visibility: hidden;\n    z-index: 1;\n}\n\n.Sticker_sticker__back__3caJ5 {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n}\n\n.Sticker_sticker__2sC8f.Sticker_view_flipped__1kFEw .Sticker_sticker__container__1fRBj {\n    -webkit-transform: translateX(-100%) rotateY(-180deg);\n            transform: translateX(-100%) rotateY(-180deg);\n}", "",{"version":3,"sources":["/Users/d068547/workspace/ui5con-germany/src/components/sticker/Sticker.module.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,cAAc;IACd,kBAAkB;IAClB,0BAA0B;IAC1B,WAAW;IACX;AAOJ;;AALI;QACI,WAAW;QACX,YAAY;QACZ,oBAAiB;WAAjB,iBAAiB;IACrB;;AAGJ;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAA4B;YAA5B,4BAA4B;IAC5B,sCAA8B;YAA9B,8BAA8B;IAC9B,gCAAwB;IAAxB;;AAcJ;;AAZI;QACI,YAAY;QACZ,kBAAkB;QAClB,MAAM;QACN,OAAO;QACP,WAAW;QACX,YAAY;QACZ,sBAAsB;QACtB,mCAAmC;QACnC,UAAU;IACd;;AAIJ;;IAEI,YAAY;IACZ,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,mCAAmC;IACnC,UAAU;AACd;;AAEA;IACI,kCAA0B;YAA1B,0BAA0B;AAC9B;;AAEA;IACI,qDAA6C;YAA7C,6CAA6C;AACjD","file":"Sticker.module.css","sourcesContent":[".sticker {\n    font-size: 0;\n    line-height: 0;\n    position: relative;\n    -webkit-perspective: 800px;\n    width: 100%;\n    height: 100%;\n\n    & img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n    }\n}\n\n.sticker__container {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    transform-style: preserve-3d;\n    transform-origin: right center;\n    transition: trabsform 1s;\n\n    & > img {\n        padding: 5px;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border-radius: 0.25rem;\n        -webkit-backface-visibility: hidden;\n        z-index: 1;\n    }\n\n}\n\n.sticker__front,\n.sticker__back {\n    padding: 5px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 0.25rem;\n    -webkit-backface-visibility: hidden;\n    z-index: 1;\n}\n\n.sticker__back {\n    transform: rotateY(180deg);\n}\n\n.sticker.view_flipped .sticker__container {\n    transform: translateX(-100%) rotateY(-180deg);\n}"]}]);
// Exports
exports.locals = {
	"sticker": "Sticker_sticker__2sC8f",
	"sticker__container": "Sticker_sticker__container__1fRBj",
	"sticker__front": "Sticker_sticker__front__1_UFb",
	"sticker__back": "Sticker_sticker__back__3caJ5",
	"view_flipped": "Sticker_view_flipped__1kFEw"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/title/Title.module.css":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./src/components/title/Title.module.css ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".Title_title__3tBcT {\n    font-family: \"72-Light\", Arial, Sans-Serif;\n    color: #141212\n}\n.Title_title__3tBcT.Title_size_default__23gZP {\n        font-size: 36px;\n        line-height: 1.15em\n    }\n@media (max-width: 1120px) {\n    .Title_title__3tBcT.Title_size_default__23gZP {\n            font-size: 28px\n    }\n        }\n@media (max-width: 980px) {\n    .Title_title__3tBcT.Title_size_default__23gZP {\n            font-size: 26px\n    }\n        }\n@media (max-width: 767px) {\n    .Title_title__3tBcT.Title_size_default__23gZP {\n            font-size: 24px;\n            line-height: 1.5em\n    }\n        }\n.Title_title__3tBcT.Title_size_medium__3Oa2w {\n        font-size: 60px;\n        line-height: 1.15em\n    }\n@media (max-width: 767px) {\n    .Title_title__3tBcT.Title_size_medium__3Oa2w {\n            font-size: 40px\n    }\n        }\n.Title_title__3tBcT.Title_size_large__1uahL {\n        font-size: 100px;\n        line-height: 130px\n    }\n@media (max-width: 1200px) {\n    .Title_title__3tBcT.Title_size_large__1uahL {\n            font-size: 80px;\n            line-height: 1.2\n    }\n        }\n@media (max-width: 980px) {\n    .Title_title__3tBcT.Title_size_large__1uahL {\n            font-size: 70px;\n            line-height: 1.2\n    }\n        }\n@media (max-width: 767px) {\n    .Title_title__3tBcT.Title_size_large__1uahL {\n            font-size: 50px\n    }\n        }\n.Title_title__3tBcT.Title_color_light__SCG_L {\n        color: #ffa42c;\n    }\n.Title_title__3tBcT.Title_color_white__1NeQi {\n        color: #fff;\n    }\n.Title_title__3tBcT.Title_has_margin__1sP2q {\n        margin-bottom: 25vh\n    }\n@media (max-height: 800px) {\n    .Title_title__3tBcT.Title_has_margin__1sP2q {\n            margin-bottom: 15vh\n    }\n        }\n@media (max-width: 767px) {\n    .Title_title__3tBcT.Title_has_margin__1sP2q {\n            margin-bottom: 10vh\n    }\n        }\n.Title_title__3tBcT .Title_title__link__180OC {\n        cursor: pointer;\n        position: relative;\n        color: #ff5a37\n    }\n.Title_title__3tBcT .Title_title__link__180OC::after {\n            content: '';\n            border-bottom: 1px dashed;\n            position: absolute;\n            left: 6px;\n            right: 6px;\n            bottom: -6px;\n        }\n.Title_title__3tBcT .Title_title__link-container__2UEr4 {\n        position: relative;\n    }", "",{"version":3,"sources":["/Users/d068547/workspace/ui5con-germany/src/components/title/Title.module.css"],"names":[],"mappings":"AAAA;IACI,0CAA0C;IAC1C;AAuFJ;AArFI;QACI,eAAe;QACf;IAcJ;AAZI;IAJJ;YAKQ;IAWR;QAVI;AAEA;IARJ;YASQ;IAOR;QANI;AAEA;IAZJ;YAaQ,eAAe;YACf;IAER;QADI;AAGJ;QACI,eAAe;QACf;IAKJ;AAHI;IAJJ;YAKQ;IAER;QADI;AAGJ;QACI,gBAAgB;QAChB;IAeJ;AAbI;IAJJ;YAKQ,eAAe;YACf;IAWR;QAVI;AAEA;IATJ;YAUQ,eAAe;YACf;IAMR;QALI;AAEA;IAdJ;YAeQ;IAER;QADI;AAGJ;QACI,cAAc;IAClB;AAEA;QACI,WAAW;IACf;AAEA;QACI;IAUJ;AARI;IAHJ;YAIQ;IAOR;QANI;AAGA;IARJ;YASQ;IAER;QADI;AAGJ;QACI,eAAe;QACf,kBAAkB;QAClB;IAUJ;AARI;YACI,WAAW;YACX,yBAAyB;YACzB,kBAAkB;YAClB,SAAS;YACT,UAAU;YACV,YAAY;QAChB;AAGJ;QACI,kBAAkB;IACtB","file":"Title.module.css","sourcesContent":[".title {\n    font-family: \"72-Light\", Arial, Sans-Serif;\n    color: #141212;\n\n    &.size_default {\n        font-size: 36px;\n        line-height: 1.15em;\n\n        @media (max-width: 1120px) {\n            font-size: 28px;\n        }\n\n        @media (max-width: 980px) {\n            font-size: 26px;\n        }\n\n        @media (max-width: 767px) {\n            font-size: 24px;\n            line-height: 1.5em;\n        }\n    }\n\n    &.size_medium {\n        font-size: 60px;\n        line-height: 1.15em;\n\n        @media (max-width: 767px) {\n            font-size: 40px;\n        }\n    }\n\n    &.size_large {\n        font-size: 100px;\n        line-height: 130px;\n\n        @media (max-width: 1200px) {\n            font-size: 80px;\n            line-height: 1.2;\n        }\n\n        @media (max-width: 980px) {\n            font-size: 70px;\n            line-height: 1.2;\n        }\n\n        @media (max-width: 767px) {\n            font-size: 50px;\n        }\n    }\n\n    &.color_light {\n        color: #ffa42c;\n    }\n\n    &.color_white {\n        color: #fff;\n    }\n\n    &.has_margin {\n        margin-bottom: 25vh;\n\n        @media (max-height: 800px) {\n            margin-bottom: 15vh;\n        }\n\n\n        @media (max-width: 767px) {\n            margin-bottom: 10vh;\n        }\n    }\n\n    & .title__link {\n        cursor: pointer;\n        position: relative;\n        color: #ff5a37;\n\n        &::after {\n            content: '';\n            border-bottom: 1px dashed;\n            position: absolute;\n            left: 6px;\n            right: 6px;\n            bottom: -6px;\n        }\n    }\n\n    & .title__link-container {\n        position: relative;\n    }\n}"]}]);
// Exports
exports.locals = {
	"title": "Title_title__3tBcT",
	"size_default": "Title_size_default__23gZP",
	"size_medium": "Title_size_medium__3Oa2w",
	"size_large": "Title_size_large__1uahL",
	"color_light": "Title_color_light__SCG_L",
	"color_white": "Title_color_white__1NeQi",
	"has_margin": "Title_has_margin__1sP2q",
	"title__link": "Title_title__link__180OC",
	"title__link-container": "Title_title__link-container__2UEr4"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/toggleButton/ToggleButton.module.css":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./src/components/toggleButton/ToggleButton.module.css ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".ToggleButton_ToggleButtons__3d5lP {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    background-color: #141212;\n    border-radius: 30px;\n    color: #fff;\n    position: relative;\n    height: 56px\n}\n\n\n@media (max-width: 767px) {\n\n\n.ToggleButton_ToggleButtons__3d5lP {\n        height: 46px\n}\n    }\n\n\n.ToggleButton_Button__3U8oL {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    cursor: pointer;\n    text-decoration: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    white-space: nowrap;\n    font-size: 22px;\n    padding: 0 20px;\n    height: 56px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    border-radius: 30px;\n    opacity: 0.8\n\n}\n\n\n.ToggleButton_Button__3U8oL:hover {\n        opacity: 1;\n    }\n\n\n.ToggleButton_Button__3U8oL.ToggleButton_selected__3-16e {\n        opacity: 1;\n    }\n\n\n.ToggleButton_Button__3U8oL .ToggleButton_subtitle__3-jLr {\n        opacity: 0.5;\n        font-size: 11px;\n        margin-left: 20px;\n        letter-spacing: 1.1px;\n    }\n\n\n@media (max-width: 767px) {\n\n\n.ToggleButton_Button__3U8oL {\n        height: 46px;\n        font-size: 14px;\n        padding: 0 10px\n\n}\n\n        .ToggleButton_Button__3U8oL .ToggleButton_subtitle__3-jLr {\n            font-size: 9px;\n            margin-left: 10px;\n        }\n    }\n\n\n.ToggleButton_Button__3U8oL.ToggleButton_verticalAlign__1S_FY {\n        font-size: 16px;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column\n\n    }\n\n\n.ToggleButton_Button__3U8oL.ToggleButton_verticalAlign__1S_FY .ToggleButton_subtitle__3-jLr {\n            margin: 0 0 2px;\n            line-height: 1.09;\n        }\n\n\n@media (max-width: 767px) {\n\n\n.ToggleButton_Button__3U8oL.ToggleButton_verticalAlign__1S_FY {\n            font-size: 14px\n\n    }\n            \n            .ToggleButton_Button__3U8oL.ToggleButton_verticalAlign__1S_FY .ToggleButton_subtitle__3-jLr {\n            }\n        }\n\n\n.ToggleButton_Selection__3dzdX {\n    border: solid 2px #ff4700;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    width: 50%;\n    border-radius: 30px;\n    -webkit-transition: left 0.2s linear;\n    transition: left 0.2s linear;\n}", "",{"version":3,"sources":["/Users/d068547/workspace/ui5con-germany/src/components/toggleButton/ToggleButton.module.css"],"names":[],"mappings":"AAAA;IACI,2BAAoB;IAApB,2BAAoB;IAApB,oBAAoB;IACpB,0BAAoB;QAApB,uBAAoB;YAApB,oBAAoB;IACpB,yBAAyB;IACzB,mBAAmB;IACnB,WAAW;IACX,kBAAkB;IAClB;AAKJ;;;AAHI;;;AATJ;QAUQ;AAER;IADI;;;AAIJ;IACI,oBAAa;IAAb,oBAAa;IAAb,aAAa;IACb,eAAe;IACf,qBAAqB;IACrB,yBAAiB;OAAjB,sBAAiB;QAAjB,qBAAiB;YAAjB,iBAAiB;IACjB,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,YAAY;IACZ,yBAAmB;QAAnB,sBAAmB;YAAnB,mBAAmB;IACnB,wBAAuB;QAAvB,qBAAuB;YAAvB,uBAAuB;IACvB,mBAAmB;IACnB;;AA8CJ;;;AA5CI;QACI,UAAU;IACd;;;AAEA;QACI,UAAU;IACd;;;AAEA;QACI,YAAY;QACZ,eAAe;QACf,iBAAiB;QACjB,qBAAqB;IACzB;;;AAEA;;;AA7BJ;QA8BQ,YAAY;QACZ,eAAe;QACf;;AA0BR;;QAxBQ;YACI,cAAc;YACd,iBAAiB;QACrB;IACJ;;;AAEA;QACI,eAAe;QACf,4BAAsB;QAAtB,6BAAsB;YAAtB,0BAAsB;gBAAtB;;IAcJ;;;AAZI;YACI,eAAe;YACf,iBAAiB;QACrB;;;AAEA;;;AATJ;YAUQ;;IAMR;;YAJQ;YACA;QACJ;;;AAMR;IACI,yBAAyB;IACzB,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,SAAS;IACT,UAAU;IACV,mBAAmB;IACnB,oCAA4B;IAA5B,4BAA4B;AAChC","file":"ToggleButton.module.css","sourcesContent":[".ToggleButtons {\n    display: inline-flex;\n    align-items: stretch;\n    background-color: #141212;\n    border-radius: 30px;\n    color: #fff;\n    position: relative;\n    height: 56px;\n\n    @media (max-width: 767px) {\n        height: 46px;\n    }\n}\n\n\n.Button {\n    display: flex;\n    cursor: pointer;\n    text-decoration: none;\n    user-select: none;\n    white-space: nowrap;\n    font-size: 22px;\n    padding: 0 20px;\n    height: 56px;\n    align-items: center;\n    justify-content: center;\n    border-radius: 30px;\n    opacity: 0.8;\n\n    &:hover {\n        opacity: 1;\n    }\n\n    &.selected {\n        opacity: 1;\n    }\n\n    & .subtitle {\n        opacity: 0.5;\n        font-size: 11px;\n        margin-left: 20px;\n        letter-spacing: 1.1px;\n    }\n\n    @media (max-width: 767px) {\n        height: 46px;\n        font-size: 14px;\n        padding: 0 10px;\n\n        & .subtitle {\n            font-size: 9px;\n            margin-left: 10px;\n        }\n    }\n\n    &.verticalAlign {\n        font-size: 16px;\n        flex-direction: column;\n\n        & .subtitle {\n            margin: 0 0 2px;\n            line-height: 1.09;\n        }\n\n        @media (max-width: 767px) {\n            font-size: 14px;\n            \n            & .subtitle {\n            }\n        }\n\n    }\n\n}\n\n.Selection {\n    border: solid 2px #ff4700;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    width: 50%;\n    border-radius: 30px;\n    transition: left 0.2s linear;\n}"]}]);
// Exports
exports.locals = {
	"ToggleButtons": "ToggleButton_ToggleButtons__3d5lP",
	"Button": "ToggleButton_Button__3U8oL",
	"selected": "ToggleButton_selected__3-16e",
	"subtitle": "ToggleButton_subtitle__3-jLr",
	"verticalAlign": "ToggleButton_verticalAlign__1S_FY",
	"Selection": "ToggleButton_Selection__3dzdX"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fd068547%2Fworkspace%2Fui5con-germany%2Fsrc%2Fpages%2Findex.js!./":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fd068547%2Fworkspace%2Fui5con-germany%2Fsrc%2Fpages%2Findex.js ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./src/pages/index.js */ "./src/pages/index.js")
      if(true) {
        module.hot.accept(/*! ./src/pages/index.js */ "./src/pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./src/pages/index.js */ "./src/pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.AmpStateContext = React.createContext({});

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1.default.useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [react_1.default.createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1.default.Fragment) {
    return list.concat(react_1.default.Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElements List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1.default.Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return react_1.default.cloneElement(c, {
      key: key
    });
  });
}

var Effect = side_effect_1.default();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head(_ref) {
  var children = _ref.children;
  return react_1.default.createElement(amp_context_1.AmpStateContext.Consumer, null, function (ampState) {
    return react_1.default.createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
      return react_1.default.createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: amp_1.isInAmpMode(ampState)
      }, children);
    });
  });
}

Head.rewind = Effect.rewind;
exports.default = Head;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

exports.default = function () {
  var mountedInstances = new Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return /*#__PURE__*/function (_react_1$Component) {
    _inherits(_class, _react_1$Component);

    var _super = _createSuper(_class);

    _createClass(_class, null, [{
      key: "rewind",
      // Used when server rendering
      value: function rewind() {
        var recordedState = state;
        state = undefined;
        mountedInstances.clear();
        return recordedState;
      }
    }]);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this, props);

      if (isServer) {
        mountedInstances.add(_assertThisInitialized(_this));
        emitChange(_assertThisInitialized(_this));
      }

      return _this;
    }

    _createClass(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        mountedInstances.add(this);
        emitChange(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        emitChange(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        mountedInstances.delete(this);
        emitChange(this);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return _class;
  }(react_1.Component);
};

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-modal/lib/components/Modal.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/components/Modal.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bodyOpenClassName = exports.portalClassName = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ModalPortal = __webpack_require__(/*! ./ModalPortal */ "./node_modules/react-modal/lib/components/ModalPortal.js");

var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

var _ariaAppHider = __webpack_require__(/*! ../helpers/ariaAppHider */ "./node_modules/react-modal/lib/helpers/ariaAppHider.js");

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _safeHTMLElement = __webpack_require__(/*! ../helpers/safeHTMLElement */ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js");

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var portalClassName = exports.portalClassName = "ReactModalPortal";
var bodyOpenClassName = exports.bodyOpenClassName = "ReactModal__Body--open";

var isReact16 = _reactDom2.default.createPortal !== undefined;

var getCreatePortal = function getCreatePortal() {
  return isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;
};

function getParentElement(parentSelector) {
  return parentSelector();
}

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function () {
      !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
      var parent = getParentElement(_this.props.parentSelector);
      if (parent) {
        parent.removeChild(_this.node);
      } else {
        // eslint-disable-next-line no-console
        console.warn('React-Modal: "parentSelector" prop did not returned any DOM ' + "element. Make sure that the parent element is unmounted to " + "avoid any memory leaks.");
      }
    }, _this.portalRef = function (ref) {
      _this.portal = ref;
    }, _this.renderPortal = function (props) {
      var createPortal = getCreatePortal();
      var portal = createPortal(_this, _react2.default.createElement(_ModalPortal2.default, _extends({ defaultStyles: Modal.defaultStyles }, props)), _this.node);
      _this.portalRef(portal);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!_safeHTMLElement.canUseDOM) return;

      if (!isReact16) {
        this.node = document.createElement("div");
      }
      this.node.className = this.props.portalClassName;

      var parent = getParentElement(this.props.parentSelector);
      parent.appendChild(this.node);

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      var prevParent = getParentElement(prevProps.parentSelector);
      var nextParent = getParentElement(this.props.parentSelector);
      return { prevParent: prevParent, nextParent: nextParent };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, _, snapshot) {
      if (!_safeHTMLElement.canUseDOM) return;
      var _props = this.props,
          isOpen = _props.isOpen,
          portalClassName = _props.portalClassName;


      if (prevProps.portalClassName !== portalClassName) {
        this.node.className = portalClassName;
      }

      var prevParent = snapshot.prevParent,
          nextParent = snapshot.nextParent;

      if (nextParent !== prevParent) {
        prevParent.removeChild(this.node);
        nextParent.appendChild(this.node);
      }

      // Stop unnecessary renders if modal is remaining closed
      if (!prevProps.isOpen && !isOpen) return;

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!_safeHTMLElement.canUseDOM || !this.node || !this.portal) return;

      var state = this.portal.state;
      var now = Date.now();
      var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);

      if (closesAt) {
        if (!state.beforeClose) {
          this.portal.closeWithTimeout();
        }

        setTimeout(this.removePortal, closesAt - now);
      } else {
        this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!_safeHTMLElement.canUseDOM || !isReact16) {
        return null;
      }

      if (!this.node && isReact16) {
        this.node = document.createElement("div");
      }

      var createPortal = getCreatePortal();
      return createPortal(_react2.default.createElement(_ModalPortal2.default, _extends({
        ref: this.portalRef,
        defaultStyles: Modal.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function setAppElement(element) {
      ariaAppHider.setElement(element);
    }

    /* eslint-disable react/no-unused-prop-types */

    /* eslint-enable react/no-unused-prop-types */

  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  portalClassName: _propTypes2.default.string,
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  ariaHideApp: _propTypes2.default.bool,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  parentSelector: _propTypes2.default.func,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func
};
Modal.defaultProps = {
  isOpen: false,
  portalClassName: portalClassName,
  bodyOpenClassName: bodyOpenClassName,
  role: "dialog",
  ariaHideApp: true,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: true,
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: true,
  shouldReturnFocusAfterClose: true,
  parentSelector: function parentSelector() {
    return document.body;
  }
};
Modal.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};


(0, _reactLifecyclesCompat.polyfill)(Modal);

exports.default = Modal;

/***/ }),

/***/ "./node_modules/react-modal/lib/components/ModalPortal.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-modal/lib/components/ModalPortal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _focusManager = __webpack_require__(/*! ../helpers/focusManager */ "./node_modules/react-modal/lib/helpers/focusManager.js");

var focusManager = _interopRequireWildcard(_focusManager);

var _scopeTab = __webpack_require__(/*! ../helpers/scopeTab */ "./node_modules/react-modal/lib/helpers/scopeTab.js");

var _scopeTab2 = _interopRequireDefault(_scopeTab);

var _ariaAppHider = __webpack_require__(/*! ../helpers/ariaAppHider */ "./node_modules/react-modal/lib/helpers/ariaAppHider.js");

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _classList = __webpack_require__(/*! ../helpers/classList */ "./node_modules/react-modal/lib/helpers/classList.js");

var classList = _interopRequireWildcard(_classList);

var _safeHTMLElement = __webpack_require__(/*! ../helpers/safeHTMLElement */ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js");

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

var _portalOpenInstances = __webpack_require__(/*! ../helpers/portalOpenInstances */ "./node_modules/react-modal/lib/helpers/portalOpenInstances.js");

var _portalOpenInstances2 = _interopRequireDefault(_portalOpenInstances);

__webpack_require__(/*! ../helpers/bodyTrap */ "./node_modules/react-modal/lib/helpers/bodyTrap.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// so that our CSS is statically analyzable
var CLASS_NAMES = {
  overlay: "ReactModal__Overlay",
  content: "ReactModal__Content"
};

var TAB_KEY = 9;
var ESC_KEY = 27;

var ariaHiddenInstances = 0;

var ModalPortal = function (_Component) {
  _inherits(ModalPortal, _Component);

  function ModalPortal(props) {
    _classCallCheck(this, ModalPortal);

    var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this, props));

    _this.setOverlayRef = function (overlay) {
      _this.overlay = overlay;
      _this.props.overlayRef && _this.props.overlayRef(overlay);
    };

    _this.setContentRef = function (content) {
      _this.content = content;
      _this.props.contentRef && _this.props.contentRef(content);
    };

    _this.afterClose = function () {
      var _this$props = _this.props,
          appElement = _this$props.appElement,
          ariaHideApp = _this$props.ariaHideApp,
          htmlOpenClassName = _this$props.htmlOpenClassName,
          bodyOpenClassName = _this$props.bodyOpenClassName;

      // Remove classes.

      bodyOpenClassName && classList.remove(document.body, bodyOpenClassName);

      htmlOpenClassName && classList.remove(document.getElementsByTagName("html")[0], htmlOpenClassName);

      // Reset aria-hidden attribute if all modals have been removed
      if (ariaHideApp && ariaHiddenInstances > 0) {
        ariaHiddenInstances -= 1;

        if (ariaHiddenInstances === 0) {
          ariaAppHider.show(appElement);
        }
      }

      if (_this.props.shouldFocusAfterRender) {
        if (_this.props.shouldReturnFocusAfterClose) {
          focusManager.returnFocus();
          focusManager.teardownScopedFocus();
        } else {
          focusManager.popWithoutFocus();
        }
      }

      if (_this.props.onAfterClose) {
        _this.props.onAfterClose();
      }

      _portalOpenInstances2.default.deregister(_this);
    };

    _this.open = function () {
      _this.beforeOpen();
      if (_this.state.afterOpen && _this.state.beforeClose) {
        clearTimeout(_this.closeTimer);
        _this.setState({ beforeClose: false });
      } else {
        if (_this.props.shouldFocusAfterRender) {
          focusManager.setupScopedFocus(_this.node);
          focusManager.markForFocusLater();
        }

        _this.setState({ isOpen: true }, function () {
          _this.setState({ afterOpen: true });

          if (_this.props.isOpen && _this.props.onAfterOpen) {
            _this.props.onAfterOpen({
              overlayEl: _this.overlay,
              contentEl: _this.content
            });
          }
        });
      }
    };

    _this.close = function () {
      if (_this.props.closeTimeoutMS > 0) {
        _this.closeWithTimeout();
      } else {
        _this.closeWithoutTimeout();
      }
    };

    _this.focusContent = function () {
      return _this.content && !_this.contentHasFocus() && _this.content.focus();
    };

    _this.closeWithTimeout = function () {
      var closesAt = Date.now() + _this.props.closeTimeoutMS;
      _this.setState({ beforeClose: true, closesAt: closesAt }, function () {
        _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
      });
    };

    _this.closeWithoutTimeout = function () {
      _this.setState({
        beforeClose: false,
        isOpen: false,
        afterOpen: false,
        closesAt: null
      }, _this.afterClose);
    };

    _this.handleKeyDown = function (event) {
      if (event.keyCode === TAB_KEY) {
        (0, _scopeTab2.default)(_this.content, event);
      }

      if (_this.props.shouldCloseOnEsc && event.keyCode === ESC_KEY) {
        event.stopPropagation();
        _this.requestClose(event);
      }
    };

    _this.handleOverlayOnClick = function (event) {
      if (_this.shouldClose === null) {
        _this.shouldClose = true;
      }

      if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
        if (_this.ownerHandlesClose()) {
          _this.requestClose(event);
        } else {
          _this.focusContent();
        }
      }
      _this.shouldClose = null;
    };

    _this.handleContentOnMouseUp = function () {
      _this.shouldClose = false;
    };

    _this.handleOverlayOnMouseDown = function (event) {
      if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
        event.preventDefault();
      }
    };

    _this.handleContentOnClick = function () {
      _this.shouldClose = false;
    };

    _this.handleContentOnMouseDown = function () {
      _this.shouldClose = false;
    };

    _this.requestClose = function (event) {
      return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
    };

    _this.ownerHandlesClose = function () {
      return _this.props.onRequestClose;
    };

    _this.shouldBeClosed = function () {
      return !_this.state.isOpen && !_this.state.beforeClose;
    };

    _this.contentHasFocus = function () {
      return document.activeElement === _this.content || _this.content.contains(document.activeElement);
    };

    _this.buildClassName = function (which, additional) {
      var classNames = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
        base: CLASS_NAMES[which],
        afterOpen: CLASS_NAMES[which] + "--after-open",
        beforeClose: CLASS_NAMES[which] + "--before-close"
      };
      var className = classNames.base;
      if (_this.state.afterOpen) {
        className = className + " " + classNames.afterOpen;
      }
      if (_this.state.beforeClose) {
        className = className + " " + classNames.beforeClose;
      }
      return typeof additional === "string" && additional ? className + " " + additional : className;
    };

    _this.attributesFromObject = function (prefix, items) {
      return Object.keys(items).reduce(function (acc, name) {
        acc[prefix + "-" + name] = items[name];
        return acc;
      }, {});
    };

    _this.state = {
      afterOpen: false,
      beforeClose: false
    };

    _this.shouldClose = null;
    _this.moveFromContentToOverlay = null;
    return _this;
  }

  _createClass(ModalPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this.open();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (true) {
        if (prevProps.bodyOpenClassName !== this.props.bodyOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "bodyOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
        }
        if (prevProps.htmlOpenClassName !== this.props.htmlOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "htmlOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
        }
      }

      if (this.props.isOpen && !prevProps.isOpen) {
        this.open();
      } else if (!this.props.isOpen && prevProps.isOpen) {
        this.close();
      }

      // Focus only needs to be set once when the modal is being opened
      if (this.props.shouldFocusAfterRender && this.state.isOpen && !prevState.isOpen) {
        this.focusContent();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.isOpen) {
        this.afterClose();
      }
      clearTimeout(this.closeTimer);
    }
  }, {
    key: "beforeOpen",
    value: function beforeOpen() {
      var _props = this.props,
          appElement = _props.appElement,
          ariaHideApp = _props.ariaHideApp,
          htmlOpenClassName = _props.htmlOpenClassName,
          bodyOpenClassName = _props.bodyOpenClassName;

      // Add classes.

      bodyOpenClassName && classList.add(document.body, bodyOpenClassName);

      htmlOpenClassName && classList.add(document.getElementsByTagName("html")[0], htmlOpenClassName);

      if (ariaHideApp) {
        ariaHiddenInstances += 1;
        ariaAppHider.hide(appElement);
      }

      _portalOpenInstances2.default.register(this);
    }

    // Don't steal focus from inner elements

  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          id = _props2.id,
          className = _props2.className,
          overlayClassName = _props2.overlayClassName,
          defaultStyles = _props2.defaultStyles;

      var contentStyles = className ? {} : defaultStyles.content;
      var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;

      return this.shouldBeClosed() ? null : _react2.default.createElement(
        "div",
        {
          ref: this.setOverlayRef,
          className: this.buildClassName("overlay", overlayClassName),
          style: _extends({}, overlayStyles, this.props.style.overlay),
          onClick: this.handleOverlayOnClick,
          onMouseDown: this.handleOverlayOnMouseDown
        },
        _react2.default.createElement(
          "div",
          _extends({
            id: id,
            ref: this.setContentRef,
            style: _extends({}, contentStyles, this.props.style.content),
            className: this.buildClassName("content", className),
            tabIndex: "-1",
            onKeyDown: this.handleKeyDown,
            onMouseDown: this.handleContentOnMouseDown,
            onMouseUp: this.handleContentOnMouseUp,
            onClick: this.handleContentOnClick,
            role: this.props.role,
            "aria-label": this.props.contentLabel
          }, this.attributesFromObject("aria", this.props.aria || {}), this.attributesFromObject("data", this.props.data || {}), {
            "data-testid": this.props.testId
          }),
          this.props.children
        )
      );
    }
  }]);

  return ModalPortal;
}(_react.Component);

ModalPortal.defaultProps = {
  style: {
    overlay: {},
    content: {}
  },
  defaultStyles: {}
};
ModalPortal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  defaultStyles: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  ariaHideApp: _propTypes2.default.bool,
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onAfterClose: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  children: _propTypes2.default.node,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func,
  id: _propTypes2.default.string,
  testId: _propTypes2.default.string
};
exports.default = ModalPortal;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/ariaAppHider.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/ariaAppHider.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertNodeList = assertNodeList;
exports.setElement = setElement;
exports.validateElement = validateElement;
exports.hide = hide;
exports.show = show;
exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;
exports.resetForTesting = resetForTesting;

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _safeHTMLElement = __webpack_require__(/*! ./safeHTMLElement */ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var globalElement = null;

function assertNodeList(nodeList, selector) {
  if (!nodeList || !nodeList.length) {
    throw new Error("react-modal: No elements were found for selector " + selector + ".");
  }
}

function setElement(element) {
  var useElement = element;
  if (typeof useElement === "string" && _safeHTMLElement.canUseDOM) {
    var el = document.querySelectorAll(useElement);
    assertNodeList(el, useElement);
    useElement = "length" in el ? el[0] : el;
  }
  globalElement = useElement || globalElement;
  return globalElement;
}

function validateElement(appElement) {
  if (!appElement && !globalElement) {
    (0, _warning2.default)(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));

    return false;
  }

  return true;
}

function hide(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).setAttribute("aria-hidden", "true");
  }
}

function show(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).removeAttribute("aria-hidden");
  }
}

function documentNotReadyOrSSRTesting() {
  globalElement = null;
}

function resetForTesting() {
  globalElement = null;
}

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/bodyTrap.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/bodyTrap.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _portalOpenInstances = __webpack_require__(/*! ./portalOpenInstances */ "./node_modules/react-modal/lib/helpers/portalOpenInstances.js");

var _portalOpenInstances2 = _interopRequireDefault(_portalOpenInstances);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Body focus trap see Issue #742

var before = void 0,
    after = void 0,
    instances = [];

function focusContent() {
  if (instances.length === 0) {
    if (true) {
      // eslint-disable-next-line no-console
      console.warn("React-Modal: Open instances > 0 expected");
    }
    return;
  }
  instances[instances.length - 1].focusContent();
}

function bodyTrap(eventType, openInstances) {
  if (!before || !after) {
    before = document.createElement("div");
    before.setAttribute("data-react-modal-body-trap", "");
    before.style.position = "absolute";
    before.style.opacity = "0";
    before.setAttribute("tabindex", "0");
    before.addEventListener("focus", focusContent);
    after = before.cloneNode();
    after.addEventListener("focus", focusContent);
  }

  instances = openInstances;

  if (instances.length > 0) {
    // Add focus trap
    if (document.body.firstChild !== before) {
      document.body.insertBefore(before, document.body.firstChild);
    }
    if (document.body.lastChild !== after) {
      document.body.appendChild(after);
    }
  } else {
    // Remove focus trap
    if (before.parentElement) {
      before.parentElement.removeChild(before);
    }
    if (after.parentElement) {
      after.parentElement.removeChild(after);
    }
  }
}

_portalOpenInstances2.default.subscribe(bodyTrap);

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/classList.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/classList.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dumpClassLists = dumpClassLists;
var htmlClassList = {};
var docBodyClassList = {};

function dumpClassLists() {
  if (true) {
    var classes = document.getElementsByTagName("html")[0].className;
    var buffer = "Show tracked classes:\n\n";

    buffer += "<html /> (" + classes + "):\n";
    for (var x in htmlClassList) {
      buffer += "  " + x + " " + htmlClassList[x] + "\n";
    }

    classes = document.body.className;

    // eslint-disable-next-line max-len
    buffer += "\n\ndoc.body (" + classes + "):\n";
    for (var _x in docBodyClassList) {
      buffer += "  " + _x + " " + docBodyClassList[_x] + "\n";
    }

    buffer += "\n";

    // eslint-disable-next-line no-console
    console.log(buffer);
  }
}

/**
 * Track the number of reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var incrementReference = function incrementReference(poll, className) {
  if (!poll[className]) {
    poll[className] = 0;
  }
  poll[className] += 1;
  return className;
};

/**
 * Drop the reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var decrementReference = function decrementReference(poll, className) {
  if (poll[className]) {
    poll[className] -= 1;
  }
  return className;
};

/**
 * Track a class and add to the given class list.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be tracked.
 */
var trackClass = function trackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    incrementReference(poll, className);
    classListRef.add(className);
  });
};

/**
 * Untrack a class and remove from the given class list if the reference
 * reaches 0.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be untracked.
 */
var untrackClass = function untrackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    decrementReference(poll, className);
    poll[className] === 0 && classListRef.remove(className);
  });
};

/**
 * Public inferface to add classes to the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var add = exports.add = function add(element, classString) {
  return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/**
 * Public inferface to remove classes from the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var remove = exports.remove = function remove(element, classString) {
  return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/focusManager.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/focusManager.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBlur = handleBlur;
exports.handleFocus = handleFocus;
exports.markForFocusLater = markForFocusLater;
exports.returnFocus = returnFocus;
exports.popWithoutFocus = popWithoutFocus;
exports.setupScopedFocus = setupScopedFocus;
exports.teardownScopedFocus = teardownScopedFocus;

var _tabbable = __webpack_require__(/*! ../helpers/tabbable */ "./node_modules/react-modal/lib/helpers/tabbable.js");

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var focusLaterElements = [];
var modalElement = null;
var needToFocus = false;

function handleBlur() {
  needToFocus = true;
}

function handleFocus() {
  if (needToFocus) {
    needToFocus = false;
    if (!modalElement) {
      return;
    }
    // need to see how jQuery shims document.on('focusin') so we don't need the
    // setTimeout, firefox doesn't support focusin, if it did, we could focus
    // the element outside of a setTimeout. Side-effect of this implementation
    // is that the document.body gets focus, and then we focus our element right
    // after, seems fine.
    setTimeout(function () {
      if (modalElement.contains(document.activeElement)) {
        return;
      }
      var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
      el.focus();
    }, 0);
  }
}

function markForFocusLater() {
  focusLaterElements.push(document.activeElement);
}

/* eslint-disable no-console */
function returnFocus() {
  var toFocus = null;
  try {
    if (focusLaterElements.length !== 0) {
      toFocus = focusLaterElements.pop();
      toFocus.focus();
    }
    return;
  } catch (e) {
    console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
  }
}
/* eslint-enable no-console */

function popWithoutFocus() {
  focusLaterElements.length > 0 && focusLaterElements.pop();
}

function setupScopedFocus(element) {
  modalElement = element;

  if (window.addEventListener) {
    window.addEventListener("blur", handleBlur, false);
    document.addEventListener("focus", handleFocus, true);
  } else {
    window.attachEvent("onBlur", handleBlur);
    document.attachEvent("onFocus", handleFocus);
  }
}

function teardownScopedFocus() {
  modalElement = null;

  if (window.addEventListener) {
    window.removeEventListener("blur", handleBlur);
    document.removeEventListener("focus", handleFocus);
  } else {
    window.detachEvent("onBlur", handleBlur);
    document.detachEvent("onFocus", handleFocus);
  }
}

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/portalOpenInstances.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/portalOpenInstances.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Tracks portals that are open and emits events to subscribers

var PortalOpenInstances = function PortalOpenInstances() {
  var _this = this;

  _classCallCheck(this, PortalOpenInstances);

  this.register = function (openInstance) {
    if (_this.openInstances.indexOf(openInstance) !== -1) {
      if (true) {
        // eslint-disable-next-line no-console
        console.warn("React-Modal: Cannot register modal instance that's already open");
      }
      return;
    }
    _this.openInstances.push(openInstance);
    _this.emit("register");
  };

  this.deregister = function (openInstance) {
    var index = _this.openInstances.indexOf(openInstance);
    if (index === -1) {
      if (true) {
        // eslint-disable-next-line no-console
        console.warn("React-Modal: Unable to deregister " + openInstance + " as " + "it was never registered");
      }
      return;
    }
    _this.openInstances.splice(index, 1);
    _this.emit("deregister");
  };

  this.subscribe = function (callback) {
    _this.subscribers.push(callback);
  };

  this.emit = function (eventType) {
    _this.subscribers.forEach(function (subscriber) {
      return subscriber(eventType,
      // shallow copy to avoid accidental mutation
      _this.openInstances.slice());
    });
  };

  this.openInstances = [];
  this.subscribers = [];
};

var portalOpenInstances = new PortalOpenInstances();

exports.default = portalOpenInstances;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/safeHTMLElement.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canUseDOM = undefined;

var _exenv = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");

var _exenv2 = _interopRequireDefault(_exenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EE = _exenv2.default;

var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};

var canUseDOM = exports.canUseDOM = EE.canUseDOM;

exports.default = SafeHTMLElement;

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/scopeTab.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/scopeTab.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scopeTab;

var _tabbable = __webpack_require__(/*! ./tabbable */ "./node_modules/react-modal/lib/helpers/tabbable.js");

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scopeTab(node, event) {
  var tabbable = (0, _tabbable2.default)(node);

  if (!tabbable.length) {
    // Do nothing, since there are no elements that can receive focus.
    event.preventDefault();
    return;
  }

  var target = void 0;

  var shiftKey = event.shiftKey;
  var head = tabbable[0];
  var tail = tabbable[tabbable.length - 1];

  // proceed with default browser behavior on tab.
  // Focus on last element on shift + tab.
  if (node === document.activeElement) {
    if (!shiftKey) return;
    target = tail;
  }

  if (tail === document.activeElement && !shiftKey) {
    target = head;
  }

  if (head === document.activeElement && shiftKey) {
    target = tail;
  }

  if (target) {
    event.preventDefault();
    target.focus();
    return;
  }

  // Safari radio issue.
  //
  // Safari does not move the focus to the radio button,
  // so we need to force it to really walk through all elements.
  //
  // This is very error prone, since we are trying to guess
  // if it is a safari browser from the first occurence between
  // chrome or safari.
  //
  // The chrome user agent contains the first ocurrence
  // as the 'chrome/version' and later the 'safari/version'.
  var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
  var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;

  // If we are not in safari desktop, let the browser control
  // the focus
  if (!isSafariDesktop) return;

  var x = tabbable.indexOf(document.activeElement);

  if (x > -1) {
    x += shiftKey ? -1 : 1;
  }

  target = tabbable[x];

  // If the tabbable element does not exist,
  // focus head/tail based on shiftKey
  if (typeof target === "undefined") {
    event.preventDefault();
    target = shiftKey ? tail : head;
    target.focus();
    return;
  }

  event.preventDefault();

  target.focus();
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/tabbable.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/tabbable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findTabbableDescendants;
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

var tabbableNode = /input|select|textarea|button|object/;

function hidesContents(element) {
  var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;

  // If the node is empty, this is good enough
  if (zeroSize && !element.innerHTML) return true;

  // Otherwise we need to check some styles
  var style = window.getComputedStyle(element);
  return zeroSize ? style.getPropertyValue("overflow") !== "visible" ||
  // if 'overflow: visible' set, check if there is actually any overflow
  element.scrollWidth <= 0 && element.scrollHeight <= 0 : style.getPropertyValue("display") == "none";
}

function visible(element) {
  var parentElement = element;
  while (parentElement) {
    if (parentElement === document.body) break;
    if (hidesContents(parentElement)) return false;
    parentElement = parentElement.parentNode;
  }
  return true;
}

function focusable(element, isTabIndexNotNaN) {
  var nodeName = element.nodeName.toLowerCase();
  var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
  return res && visible(element);
}

function tabbable(element) {
  var tabIndex = element.getAttribute("tabindex");
  if (tabIndex === null) tabIndex = undefined;
  var isTabIndexNaN = isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
}

function findTabbableDescendants(element) {
  return [].slice.call(element.querySelectorAll("*"), 0).filter(tabbable);
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-modal/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modal = __webpack_require__(/*! ./components/Modal */ "./node_modules/react-modal/lib/components/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Modal2.default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-spring/web.js":
/*!******************************************!*\
  !*** ./node_modules/react-spring/web.js ***!
  \******************************************/
/*! exports provided: apply, config, update, animated, a, interpolate, Globals, useSpring, useTrail, useTransition, useChain, useSprings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animated", function() { return extendedAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extendedAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSpring", function() { return useSpring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTrail", function() { return useTrail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransition", function() { return useTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useChain", function() { return useChain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSprings", function() { return useSprings; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const is = {
  arr: Array.isArray,
  obj: a => Object.prototype.toString.call(a) === '[object Object]',
  fun: a => typeof a === 'function',
  str: a => typeof a === 'string',
  num: a => typeof a === 'number',
  und: a => a === void 0,
  nul: a => a === null,
  set: a => a instanceof Set,
  map: a => a instanceof Map,

  equ(a, b) {
    if (typeof a !== typeof b) return false;
    if (is.str(a) || is.num(a)) return a === b;
    if (is.obj(a) && is.obj(b) && Object.keys(a).length + Object.keys(b).length === 0) return true;
    let i;

    for (i in a) if (!(i in b)) return false;

    for (i in b) if (a[i] !== b[i]) return false;

    return is.und(i) ? a === b : true;
  }

};
function merge(target, lowercase) {
  if (lowercase === void 0) {
    lowercase = true;
  }

  return object => (is.arr(object) ? object : Object.keys(object)).reduce((acc, element) => {
    const key = lowercase ? element[0].toLowerCase() + element.substring(1) : element;
    acc[key] = target(key);
    return acc;
  }, target);
}
function useForceUpdate() {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        f = _useState[1];

  const forceUpdate = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => f(v => !v), []);
  return forceUpdate;
}
function withDefault(value, defaultValue) {
  return is.und(value) || is.nul(value) ? defaultValue : value;
}
function toArray(a) {
  return !is.und(a) ? is.arr(a) ? a : [a] : [];
}
function callProp(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return is.fun(obj) ? obj(...args) : obj;
}

function getForwardProps(props) {
  const to = props.to,
        from = props.from,
        config = props.config,
        onStart = props.onStart,
        onRest = props.onRest,
        onFrame = props.onFrame,
        children = props.children,
        reset = props.reset,
        reverse = props.reverse,
        force = props.force,
        immediate = props.immediate,
        delay = props.delay,
        attach = props.attach,
        destroyed = props.destroyed,
        interpolateTo = props.interpolateTo,
        ref = props.ref,
        lazy = props.lazy,
        forward = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);

  return forward;
}

function interpolateTo(props) {
  const forward = getForwardProps(props);
  if (is.und(forward)) return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    to: forward
  }, props);
  const rest = Object.keys(props).reduce((a, k) => !is.und(forward[k]) ? a : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, a, {
    [k]: props[k]
  }), {});
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    to: forward
  }, rest);
}
function handleRef(ref, forward) {
  if (forward) {
    // If it's a function, assume it's a ref callback
    if (is.fun(forward)) forward(ref);else if (is.obj(forward)) {
      forward.current = ref;
    }
  }

  return ref;
}

class Animated {
  constructor() {
    this.payload = void 0;
    this.children = [];
  }

  getAnimatedValue() {
    return this.getValue();
  }

  getPayload() {
    return this.payload || this;
  }

  attach() {}

  detach() {}

  getChildren() {
    return this.children;
  }

  addChild(child) {
    if (this.children.length === 0) this.attach();
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
    if (this.children.length === 0) this.detach();
  }

}
class AnimatedArray extends Animated {
  constructor() {
    super(...arguments);
    this.payload = [];

    this.attach = () => this.payload.forEach(p => p instanceof Animated && p.addChild(this));

    this.detach = () => this.payload.forEach(p => p instanceof Animated && p.removeChild(this));
  }

}
class AnimatedObject extends Animated {
  constructor() {
    super(...arguments);
    this.payload = {};

    this.attach = () => Object.values(this.payload).forEach(s => s instanceof Animated && s.addChild(this));

    this.detach = () => Object.values(this.payload).forEach(s => s instanceof Animated && s.removeChild(this));
  }

  getValue(animated) {
    if (animated === void 0) {
      animated = false;
    }

    const payload = {};

    for (const key in this.payload) {
      const value = this.payload[key];
      if (animated && !(value instanceof Animated)) continue;
      payload[key] = value instanceof Animated ? value[animated ? 'getAnimatedValue' : 'getValue']() : value;
    }

    return payload;
  }

  getAnimatedValue() {
    return this.getValue(true);
  }

}

let applyAnimatedValues;
function injectApplyAnimatedValues(fn, transform) {
  applyAnimatedValues = {
    fn,
    transform
  };
}
let colorNames;
function injectColorNames(names) {
  colorNames = names;
}
let requestFrame = cb => typeof window !== 'undefined' ? window.requestAnimationFrame(cb) : -1;
let cancelFrame = id => {
  typeof window !== 'undefined' && window.cancelAnimationFrame(id);
};
function injectFrame(raf, caf) {
  requestFrame = raf;
  cancelFrame = caf;
}
let interpolation;
function injectStringInterpolator(fn) {
  interpolation = fn;
}
let now = () => Date.now();
function injectNow(nowFn) {
  now = nowFn;
}
let defaultElement;
function injectDefaultElement(el) {
  defaultElement = el;
}
let animatedApi = node => node.current;
function injectAnimatedApi(fn) {
  animatedApi = fn;
}
let createAnimatedStyle;
function injectCreateAnimatedStyle(factory) {
  createAnimatedStyle = factory;
}
let manualFrameloop;
function injectManualFrameloop(callback) {
  manualFrameloop = callback;
}

var Globals = /*#__PURE__*/Object.freeze({
  get applyAnimatedValues () { return applyAnimatedValues; },
  injectApplyAnimatedValues: injectApplyAnimatedValues,
  get colorNames () { return colorNames; },
  injectColorNames: injectColorNames,
  get requestFrame () { return requestFrame; },
  get cancelFrame () { return cancelFrame; },
  injectFrame: injectFrame,
  get interpolation () { return interpolation; },
  injectStringInterpolator: injectStringInterpolator,
  get now () { return now; },
  injectNow: injectNow,
  get defaultElement () { return defaultElement; },
  injectDefaultElement: injectDefaultElement,
  get animatedApi () { return animatedApi; },
  injectAnimatedApi: injectAnimatedApi,
  get createAnimatedStyle () { return createAnimatedStyle; },
  injectCreateAnimatedStyle: injectCreateAnimatedStyle,
  get manualFrameloop () { return manualFrameloop; },
  injectManualFrameloop: injectManualFrameloop
});

/**
 * Wraps the `style` property with `AnimatedStyle`.
 */

class AnimatedProps extends AnimatedObject {
  constructor(props, callback) {
    super();
    this.update = void 0;
    this.payload = !props.style ? props : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      style: createAnimatedStyle(props.style)
    });
    this.update = callback;
    this.attach();
  }

}

const isFunctionComponent = val => is.fun(val) && !(val.prototype instanceof react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

const createAnimatedComponent = Component => {
  const AnimatedComponent = Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => {
    const forceUpdate = useForceUpdate();
    const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(true);
    const propsAnimated = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
    const node = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
    const attachProps = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(props => {
      const oldPropsAnimated = propsAnimated.current;

      const callback = () => {
        let didUpdate = false;

        if (node.current) {
          didUpdate = applyAnimatedValues.fn(node.current, propsAnimated.current.getAnimatedValue());
        }

        if (!node.current || didUpdate === false) {
          // If no referenced node has been found, or the update target didn't have a
          // native-responder, then forceUpdate the animation ...
          forceUpdate();
        }
      };

      propsAnimated.current = new AnimatedProps(props, callback);
      oldPropsAnimated && oldPropsAnimated.detach();
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => () => {
      mounted.current = false;
      propsAnimated.current && propsAnimated.current.detach();
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(ref, () => animatedApi(node, mounted, forceUpdate));
    attachProps(props);

    const _getValue = propsAnimated.current.getValue(),
          scrollTop = _getValue.scrollTop,
          scrollLeft = _getValue.scrollLeft,
          animatedProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_getValue, ["scrollTop", "scrollLeft"]); // Functions cannot have refs, see:
    // See: https://github.com/react-spring/react-spring/issues/569


    const refFn = isFunctionComponent(Component) ? undefined : childRef => node.current = handleRef(childRef, ref);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, animatedProps, {
      ref: refFn
    }));
  });
  return AnimatedComponent;
};

let active = false;
const controllers = new Set();

const update = () => {
  if (!active) return false;
  let time = now();

  for (let controller of controllers) {
    let isActive = false;

    for (let configIdx = 0; configIdx < controller.configs.length; configIdx++) {
      let config = controller.configs[configIdx];
      let endOfAnimation, lastTime;

      for (let valIdx = 0; valIdx < config.animatedValues.length; valIdx++) {
        let animation = config.animatedValues[valIdx]; // If an animation is done, skip, until all of them conclude

        if (animation.done) continue;
        let from = config.fromValues[valIdx];
        let to = config.toValues[valIdx];
        let position = animation.lastPosition;
        let isAnimated = to instanceof Animated;
        let velocity = Array.isArray(config.initialVelocity) ? config.initialVelocity[valIdx] : config.initialVelocity;
        if (isAnimated) to = to.getValue(); // Conclude animation if it's either immediate, or from-values match end-state

        if (config.immediate) {
          animation.setValue(to);
          animation.done = true;
          continue;
        } // Break animation when string values are involved


        if (typeof from === 'string' || typeof to === 'string') {
          animation.setValue(to);
          animation.done = true;
          continue;
        }

        if (config.duration !== void 0) {
          /** Duration easing */
          position = from + config.easing((time - animation.startTime) / config.duration) * (to - from);
          endOfAnimation = time >= animation.startTime + config.duration;
        } else if (config.decay) {
          /** Decay easing */
          position = from + velocity / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (time - animation.startTime)));
          endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
          if (endOfAnimation) to = position;
        } else {
          /** Spring easing */
          lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
          velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : config.initialVelocity; // If we lost a lot of frames just jump to the end.

          if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

          let numSteps = Math.floor(time - lastTime);

          for (let i = 0; i < numSteps; ++i) {
            let force = -config.tension * (position - to);
            let damping = -config.friction * velocity;
            let acceleration = (force + damping) / config.mass;
            velocity = velocity + acceleration * 1 / 1000;
            position = position + velocity * 1 / 1000;
          } // Conditions for stopping the spring animation


          let isOvershooting = config.clamp && config.tension !== 0 ? from < to ? position > to : position < to : false;
          let isVelocity = Math.abs(velocity) <= config.precision;
          let isDisplacement = config.tension !== 0 ? Math.abs(to - position) <= config.precision : true;
          endOfAnimation = isOvershooting || isVelocity && isDisplacement;
          animation.lastVelocity = velocity;
          animation.lastTime = time;
        } // Trails aren't done until their parents conclude


        if (isAnimated && !config.toValues[valIdx].done) endOfAnimation = false;

        if (endOfAnimation) {
          // Ensure that we end up with a round value
          if (animation.value !== to) position = to;
          animation.done = true;
        } else isActive = true;

        animation.setValue(position);
        animation.lastPosition = position;
      } // Keep track of updated values only when necessary


      if (controller.props.onFrame) controller.values[config.name] = config.interpolation.getValue();
    } // Update callbacks in the end of the frame


    if (controller.props.onFrame) controller.props.onFrame(controller.values); // Either call onEnd or next frame

    if (!isActive) {
      controllers.delete(controller);
      controller.stop(true);
    }
  } // Loop over as long as there are controllers ...


  if (controllers.size) {
    if (manualFrameloop) manualFrameloop();else requestFrame(update);
  } else {
    active = false;
  }

  return active;
};

const start = controller => {
  if (!controllers.has(controller)) controllers.add(controller);

  if (!active) {
    active = true;
    if (manualFrameloop) requestFrame(manualFrameloop);else requestFrame(update);
  }
};

const stop = controller => {
  if (controllers.has(controller)) controllers.delete(controller);
};

function createInterpolator(range, output, extrapolate) {
  if (typeof range === 'function') {
    return range;
  }

  if (Array.isArray(range)) {
    return createInterpolator({
      range,
      output: output,
      extrapolate
    });
  }

  if (interpolation && typeof range.output[0] === 'string') {
    return interpolation(range);
  }

  const config = range;
  const outputRange = config.output;
  const inputRange = config.range || [0, 1];
  const extrapolateLeft = config.extrapolateLeft || config.extrapolate || 'extend';
  const extrapolateRight = config.extrapolateRight || config.extrapolate || 'extend';

  const easing = config.easing || (t => t);

  return input => {
    const range = findRange(input, inputRange);
    return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, config.map);
  };
}

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input; // Extrapolate

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax; // Input Range

  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin); // Easing

  result = easing(result); // Output Range

  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) if (inputRange[i] >= input) break;

  return i - 1;
}

class AnimatedInterpolation extends AnimatedArray {
  constructor(parents, range, output, extrapolate) {
    super();
    this.calc = void 0;
    this.payload = parents instanceof AnimatedArray && !(parents instanceof AnimatedInterpolation) ? parents.getPayload() : Array.isArray(parents) ? parents : [parents];
    this.calc = createInterpolator(range, output, extrapolate);
  }

  getValue() {
    return this.calc(...this.payload.map(value => value.getValue()));
  }

  updateConfig(range, output, extrapolate) {
    this.calc = createInterpolator(range, output, extrapolate);
  }

  interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  }

}

const interpolate$1 = (parents, range, output) => parents && new AnimatedInterpolation(parents, range, output);

const config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};

/** API
 *  useChain(references, timeSteps, timeFrame)
 */

function useChain(refs, timeSteps, timeFrame) {
  if (timeFrame === void 0) {
    timeFrame = 1000;
  }

  const previous = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (is.equ(refs, previous.current)) refs.forEach((_ref) => {
      let current = _ref.current;
      return current && current.start();
    });else if (timeSteps) {
      refs.forEach((_ref2, index) => {
        let current = _ref2.current;

        if (current) {
          const ctrls = current.controllers;

          if (ctrls.length) {
            const t = timeFrame * timeSteps[index];
            ctrls.forEach(ctrl => {
              ctrl.queue = ctrl.queue.map(e => Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e, {
                delay: e.delay + t
              }));
              ctrl.start();
            });
          }
        }
      });
    } else refs.reduce((q, _ref3, rI) => {
      let current = _ref3.current;
      return q = q.then(() => current.start());
    }, Promise.resolve());
    previous.current = refs;
  });
}

/**
 * Animated works by building a directed acyclic graph of dependencies
 * transparently when you render your Animated components.
 *
 *               new Animated.Value(0)
 *     .interpolate()        .interpolate()    new Animated.Value(1)
 *         opacity               translateY      scale
 *          style                         transform
 *         View#234                         style
 *                                         View#123
 *
 * A) Top Down phase
 * When an AnimatedValue is updated, we recursively go down through this
 * graph in order to find leaf nodes: the views that we flag as needing
 * an update.
 *
 * B) Bottom Up phase
 * When a view is flagged as needing an update, we recursively go back up
 * in order to build the new value that it needs. The reason why we need
 * this two-phases process is to deal with composite props such as
 * transform which can receive values from multiple parents.
 */
function addAnimatedStyles(node, styles) {
  if ('update' in node) {
    styles.add(node);
  } else {
    node.getChildren().forEach(child => addAnimatedStyles(child, styles));
  }
}

class AnimatedValue extends Animated {
  constructor(_value) {
    var _this;

    super();
    _this = this;
    this.animatedStyles = new Set();
    this.value = void 0;
    this.startPosition = void 0;
    this.lastPosition = void 0;
    this.lastVelocity = void 0;
    this.startTime = void 0;
    this.lastTime = void 0;
    this.done = false;

    this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      _this.value = value;
      if (flush) _this.flush();
    };

    this.value = _value;
    this.startPosition = _value;
    this.lastPosition = _value;
  }

  flush() {
    if (this.animatedStyles.size === 0) {
      addAnimatedStyles(this, this.animatedStyles);
    }

    this.animatedStyles.forEach(animatedStyle => animatedStyle.update());
  }

  clearStyles() {
    this.animatedStyles.clear();
  }

  getValue() {
    return this.value;
  }

  interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  }

}

class AnimatedValueArray extends AnimatedArray {
  constructor(values) {
    super();
    this.payload = values.map(n => new AnimatedValue(n));
  }

  setValue(value, flush) {
    if (flush === void 0) {
      flush = true;
    }

    if (Array.isArray(value)) {
      if (value.length === this.payload.length) {
        value.forEach((v, i) => this.payload[i].setValue(v, flush));
      }
    } else {
      this.payload.forEach(p => p.setValue(value, flush));
    }
  }

  getValue() {
    return this.payload.map(v => v.getValue());
  }

  interpolate(range, output) {
    return new AnimatedInterpolation(this, range, output);
  }

}

let G = 0;

class Controller {
  constructor() {
    this.id = void 0;
    this.idle = true;
    this.hasChanged = false;
    this.guid = 0;
    this.local = 0;
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.listeners = [];
    this.queue = [];
    this.localQueue = void 0;

    this.getValues = () => this.interpolations;

    this.id = G++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */


  update(args) {
    //this._id = n + this.id
    if (!args) return this; // Extract delay and the to-prop from props

    const _ref = interpolateTo(args),
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          to = _ref.to,
          props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["delay", "to"]);

    if (is.arr(to) || is.fun(to)) {
      // If config is either a function or an array queue it up as is
      this.queue.push(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        delay,
        to
      }));
    } else if (to) {
      // Otherwise go through each key since it could be delayed individually
      let ops = {};
      Object.entries(to).forEach((_ref2) => {
        let k = _ref2[0],
            v = _ref2[1];

        // Fetch delay and create an entry, consisting of the to-props, the delay, and basic props
        const entry = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          to: {
            [k]: v
          },
          delay: callProp(delay, k)
        }, props);

        const previous = ops[entry.delay] && ops[entry.delay].to;
        ops[entry.delay] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ops[entry.delay], entry, {
          to: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, previous, entry.to)
        });
      });
      this.queue = Object.values(ops);
    } // Sort queue, so that async calls go last


    this.queue = this.queue.sort((a, b) => a.delay - b.delay); // Diff the reduced props immediately (they'll contain the from-prop and some config)

    this.diff(props);
    return this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */


  start(onEnd) {
    // If a queue is present we must excecute it
    if (this.queue.length) {
      this.idle = false; // Updates can interrupt trailing queues, in that case we just merge values

      if (this.localQueue) {
        this.localQueue.forEach((_ref3) => {
          let _ref3$from = _ref3.from,
              from = _ref3$from === void 0 ? {} : _ref3$from,
              _ref3$to = _ref3.to,
              to = _ref3$to === void 0 ? {} : _ref3$to;
          if (is.obj(from)) this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, from, this.merged);
          if (is.obj(to)) this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.merged, to);
        });
      } // The guid helps us tracking frames, a new queue over an old one means an override
      // We discard async calls in that caseÍ


      const local = this.local = ++this.guid;
      const queue = this.localQueue = this.queue;
      this.queue = []; // Go through each entry and execute it

      queue.forEach((_ref4, index) => {
        let delay = _ref4.delay,
            props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4, ["delay"]);

        const cb = finished => {
          if (index === queue.length - 1 && local === this.guid && finished) {
            this.idle = true;
            if (this.props.onRest) this.props.onRest(this.merged);
          }

          if (onEnd) onEnd();
        }; // Entries can be delayed, ansyc or immediate


        let async = is.arr(props.to) || is.fun(props.to);

        if (delay) {
          setTimeout(() => {
            if (local === this.guid) {
              if (async) this.runAsync(props, cb);else this.diff(props).start(cb);
            }
          }, delay);
        } else if (async) this.runAsync(props, cb);else this.diff(props).start(cb);
      });
    } // Otherwise we kick of the frameloop
    else {
        if (is.fun(onEnd)) this.listeners.push(onEnd);
        if (this.props.onStart) this.props.onStart();
        start(this);
      }

    return this;
  }

  stop(finished) {
    this.listeners.forEach(onEnd => onEnd(finished));
    this.listeners = [];
    return this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */


  pause(finished) {
    this.stop(true);
    if (finished) stop(this);
    return this;
  }

  runAsync(_ref5, onEnd) {
    var _this = this;

    let delay = _ref5.delay,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref5, ["delay"]);

    const local = this.local; // If "to" is either a function or an array it will be processed async, therefor "to" should be empty right now
    // If the view relies on certain values "from" has to be present

    let queue = Promise.resolve(undefined);

    if (is.arr(props.to)) {
      for (let i = 0; i < props.to.length; i++) {
        const index = i;

        const fresh = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, interpolateTo(props.to[index]));

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        queue = queue.then(() => {
          //this.stop()
          if (local === this.guid) return new Promise(r => this.diff(fresh).start(r));
        });
      }
    } else if (is.fun(props.to)) {
      let index = 0;
      let last;
      queue = queue.then(() => props.to( // next(props)
      p => {
        const fresh = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, interpolateTo(p));

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        index++; //this.stop()

        if (local === this.guid) return last = new Promise(r => this.diff(fresh).start(r));
        return;
      }, // cancel()
      function (finished) {
        if (finished === void 0) {
          finished = true;
        }

        return _this.stop(finished);
      }).then(() => last));
    }

    queue.then(onEnd);
  }

  diff(props) {
    this.props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, props);
    let _this$props = this.props,
        _this$props$from = _this$props.from,
        from = _this$props$from === void 0 ? {} : _this$props$from,
        _this$props$to = _this$props.to,
        to = _this$props$to === void 0 ? {} : _this$props$to,
        _this$props$config = _this$props.config,
        config = _this$props$config === void 0 ? {} : _this$props$config,
        reverse = _this$props.reverse,
        attach = _this$props.attach,
        reset = _this$props.reset,
        immediate = _this$props.immediate; // Reverse values when requested

    if (reverse) {
      var _ref6 = [to, from];
      from = _ref6[0];
      to = _ref6[1];
    } // This will collect all props that were ever set, reset merged props when necessary


    this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, from, this.merged, to);
    this.hasChanged = false; // Attachment handling, trailed springs can "attach" themselves to a previous spring

    let target = attach && attach(this); // Reduces input { name: value } pairs into animated values

    this.animations = Object.entries(this.merged).reduce((acc, _ref7) => {
      let name = _ref7[0],
          value = _ref7[1];
      // Issue cached entries, except on reset
      let entry = acc[name] || {}; // Figure out what the value is supposed to be

      const isNumber = is.num(value);
      const isString = is.str(value) && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
      const isArray = is.arr(value);
      const isInterpolation = !isNumber && !isArray && !isString;
      let fromValue = !is.und(from[name]) ? from[name] : value;
      let toValue = isNumber || isArray ? value : isString ? value : 1;
      let toConfig = callProp(config, name);
      if (target) toValue = target.animations[name].parent;
      let parent = entry.parent,
          interpolation$$1 = entry.interpolation,
          toValues = toArray(target ? toValue.getPayload() : toValue),
          animatedValues;
      let newValue = value;
      if (isInterpolation) newValue = interpolation({
        range: [0, 1],
        output: [value, value]
      })(1);
      let currentValue = interpolation$$1 && interpolation$$1.getValue(); // Change detection flags

      const isFirst = is.und(parent);
      const isActive = !isFirst && entry.animatedValues.some(v => !v.done);
      const currentValueDiffersFromGoal = !is.equ(newValue, currentValue);
      const hasNewGoal = !is.equ(newValue, entry.previous);
      const hasNewConfig = !is.equ(toConfig, entry.config); // Change animation props when props indicate a new goal (new value differs from previous one)
      // and current values differ from it. Config changes trigger a new update as well (though probably shouldn't?)

      if (reset || hasNewGoal && currentValueDiffersFromGoal || hasNewConfig) {
        // Convert regular values into animated values, ALWAYS re-use if possible
        if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue(fromValue);else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedValueArray(fromValue);else if (isInterpolation) {
          let prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);
          prev = prev !== void 0 && !reset ? prev : fromValue;

          if (entry.parent) {
            parent = entry.parent;
            parent.setValue(0, false);
          } else parent = new AnimatedValue(0);

          const range = {
            output: [prev, value]
          };

          if (entry.interpolation) {
            interpolation$$1 = entry.interpolation;
            entry.interpolation.updateConfig(range);
          } else interpolation$$1 = parent.interpolate(range);
        }
        toValues = toArray(target ? toValue.getPayload() : toValue);
        animatedValues = toArray(parent.getPayload());
        if (reset && !isInterpolation) parent.setValue(fromValue, false);
        this.hasChanged = true; // Reset animated values

        animatedValues.forEach(value => {
          value.startPosition = value.value;
          value.lastPosition = value.value;
          value.lastVelocity = isActive ? value.lastVelocity : undefined;
          value.lastTime = isActive ? value.lastTime : undefined;
          value.startTime = now();
          value.done = false;
          value.animatedStyles.clear();
        }); // Set immediate values

        if (callProp(immediate, name)) {
          parent.setValue(isInterpolation ? toValue : value, false);
        }

        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc, {
          [name]: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, entry, {
            name,
            parent,
            interpolation: interpolation$$1,
            animatedValues,
            toValues,
            previous: newValue,
            config: toConfig,
            fromValues: toArray(parent.getValue()),
            immediate: callProp(immediate, name),
            initialVelocity: withDefault(toConfig.velocity, 0),
            clamp: withDefault(toConfig.clamp, false),
            precision: withDefault(toConfig.precision, 0.01),
            tension: withDefault(toConfig.tension, 170),
            friction: withDefault(toConfig.friction, 26),
            mass: withDefault(toConfig.mass, 1),
            duration: toConfig.duration,
            easing: withDefault(toConfig.easing, t => t),
            decay: toConfig.decay
          })
        });
      } else {
        if (!currentValueDiffersFromGoal) {
          // So ... the current target value (newValue) appears to be different from the previous value,
          // which normally constitutes an update, but the actual value (currentValue) matches the target!
          // In order to resolve this without causing an animation update we silently flag the animation as done,
          // which it technically is. Interpolations also needs a config update with their target set to 1.
          if (isInterpolation) {
            parent.setValue(1, false);
            interpolation$$1.updateConfig({
              output: [newValue, newValue]
            });
          }

          parent.done = true;
          this.hasChanged = true;
          return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc, {
            [name]: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc[name], {
              previous: newValue
            })
          });
        }

        return acc;
      }
    }, this.animations);

    if (this.hasChanged) {
      // Make animations available to frameloop
      this.configs = Object.values(this.animations);
      this.values = {};
      this.interpolations = {};

      for (let key in this.animations) {
        this.interpolations[key] = this.animations[key].interpolation;
        this.values[key] = this.animations[key].interpolation.getValue();
      }
    }

    return this;
  }

  destroy() {
    this.stop();
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.local = 0;
  }

}

/** API
 * const props = useSprings(number, [{ ... }, { ... }, ...])
 * const [props, set] = useSprings(number, (i, controller) => ({ ... }))
 */

const useSprings = (length, props) => {
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  const ctrl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  const isFn = is.fun(props); // The controller maintains the animation values, starts and stops animations

  const _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => {
    // Remove old controllers
    if (ctrl.current) {
      ctrl.current.map(c => c.destroy());
      ctrl.current = undefined;
    }

    let ref;
    return [new Array(length).fill().map((_, i) => {
      const ctrl = new Controller();
      const newProps = isFn ? callProp(props, i, ctrl) : props[i];
      if (i === 0) ref = newProps.ref;
      ctrl.update(newProps);
      if (!ref) ctrl.start();
      return ctrl;
    }), ref];
  }, [length]),
        controllers = _useMemo[0],
        ref = _useMemo[1];

  ctrl.current = controllers; // The hooks reference api gets defined here ...

  const api = Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(ref, () => ({
    start: () => Promise.all(ctrl.current.map(c => new Promise(r => c.start(r)))),
    stop: finished => ctrl.current.forEach(c => c.stop(finished)),

    get controllers() {
      return ctrl.current;
    }

  })); // This function updates the controllers

  const updateCtrl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => updateProps => ctrl.current.map((c, i) => {
    c.update(isFn ? callProp(updateProps, i, c) : updateProps[i]);
    if (!ref) c.start();
  }), [length]); // Update controller if props aren't functional

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (mounted.current) {
      if (!isFn) updateCtrl(props);
    } else if (!ref) ctrl.current.forEach(c => c.start());
  }); // Update mounted flag and destroy controller on unmount

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => (mounted.current = true, () => ctrl.current.forEach(c => c.destroy())), []); // Return animated props, or, anim-props + the update-setter above

  const propValues = ctrl.current.map(c => c.getValues());
  return isFn ? [propValues, updateCtrl, finished => ctrl.current.forEach(c => c.pause(finished))] : propValues;
};

/** API
 * const props = useSpring({ ... })
 * const [props, set] = useSpring(() => ({ ... }))
 */

const useSpring = props => {
  const isFn = is.fun(props);

  const _useSprings = useSprings(1, isFn ? props : [props]),
        result = _useSprings[0],
        set = _useSprings[1],
        pause = _useSprings[2];

  return isFn ? [result[0], set, pause] : result;
};

/** API
 * const trails = useTrail(number, { ... })
 * const [trails, set] = useTrail(number, () => ({ ... }))
 */

const useTrail = (length, props) => {
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  const isFn = is.fun(props);
  const updateProps = callProp(props);
  const instances = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  const _useSprings = useSprings(length, (i, ctrl) => {
    if (i === 0) instances.current = [];
    instances.current.push(ctrl);
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, updateProps, {
      config: callProp(updateProps.config, i),
      attach: i > 0 && (() => instances.current[i - 1])
    });
  }),
        result = _useSprings[0],
        set = _useSprings[1],
        pause = _useSprings[2]; // Set up function to update controller


  const updateCtrl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => props => set((i, ctrl) => {
    const last = props.reverse ? i === 0 : length - 1 === i;
    const attachIdx = props.reverse ? i + 1 : i - 1;
    const attachController = instances.current[attachIdx];
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      config: callProp(props.config || updateProps.config, i),
      attach: attachController && (() => attachController)
    });
  }), [length, updateProps.reverse]); // Update controller if props aren't functional

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => void (mounted.current && !isFn && updateCtrl(props))); // Update mounted flag and destroy controller on unmount

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => void (mounted.current = true), []);
  return isFn ? [result, updateCtrl, pause] : result;
};

/** API
 * const transitions = useTransition(items, itemKeys, { ... })
 * const [transitions, update] = useTransition(items, itemKeys, () => ({ ... }))
 */

let guid = 0;
const ENTER = 'enter';
const LEAVE = 'leave';
const UPDATE = 'update';

const mapKeys = (items, keys) => (typeof keys === 'function' ? items.map(keys) : toArray(keys)).map(String);

const get = props => {
  let items = props.items,
      _props$keys = props.keys,
      keys = _props$keys === void 0 ? item => item : _props$keys,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["items", "keys"]);

  items = toArray(items !== void 0 ? items : null);
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    items,
    keys: mapKeys(items, keys)
  }, rest);
};

function useTransition(input, keyTransform, config) {
  const props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    items: input,
    keys: keyTransform || (i => i)
  }, config);

  const _get = get(props),
        _get$lazy = _get.lazy,
        lazy = _get$lazy === void 0 ? false : _get$lazy,
        _get$unique = _get.unique,
        _get$reset = _get.reset,
        reset = _get$reset === void 0 ? false : _get$reset,
        enter = _get.enter,
        leave = _get.leave,
        update = _get.update,
        onDestroyed = _get.onDestroyed,
        keys = _get.keys,
        items = _get.items,
        onFrame = _get.onFrame,
        _onRest = _get.onRest,
        onStart = _get.onStart,
        ref = _get.ref,
        extra = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_get, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]);

  const forceUpdate = useForceUpdate();
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  const state = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])({
    mounted: false,
    first: true,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!props.ref,
    instances: !mounted.current && new Map(),
    forceUpdate
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(props.ref, () => ({
    start: () => Promise.all(Array.from(state.current.instances).map((_ref) => {
      let c = _ref[1];
      return new Promise(r => c.start(r));
    })),
    stop: finished => Array.from(state.current.instances).forEach((_ref2) => {
      let c = _ref2[1];
      return c.stop(finished);
    }),

    get controllers() {
      return Array.from(state.current.instances).map((_ref3) => {
        let c = _ref3[1];
        return c;
      });
    }

  })); // Update state

  state.current = diffItems(state.current, props);

  if (state.current.changed) {
    // Update state
    state.current.transitions.forEach(transition => {
      const slot = transition.slot,
            from = transition.from,
            to = transition.to,
            config = transition.config,
            trail = transition.trail,
            key = transition.key,
            item = transition.item;
      if (!state.current.instances.has(key)) state.current.instances.set(key, new Controller()); // update the map object

      const ctrl = state.current.instances.get(key);

      const newProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, extra, {
        to,
        from,
        config,
        ref,
        onRest: values => {
          if (state.current.mounted) {
            if (transition.destroyed) {
              // If no ref is given delete destroyed items immediately
              if (!ref && !lazy) cleanUp(state, key);
              if (onDestroyed) onDestroyed(item);
            } // A transition comes to rest once all its springs conclude


            const curInstances = Array.from(state.current.instances);
            const active = curInstances.some((_ref4) => {
              let c = _ref4[1];
              return !c.idle;
            });
            if (!active && (ref || lazy) && state.current.deleted.length > 0) cleanUp(state);
            if (_onRest) _onRest(item, slot, values);
          }
        },
        onStart: onStart && (() => onStart(item, slot)),
        onFrame: onFrame && (values => onFrame(item, slot, values)),
        delay: trail,
        reset: reset && slot === ENTER // Update controller

      });

      ctrl.update(newProps);
      if (!state.current.paused) ctrl.start();
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    state.current.mounted = mounted.current = true;
    return () => {
      state.current.mounted = mounted.current = false;
      Array.from(state.current.instances).map((_ref5) => {
        let c = _ref5[1];
        return c.destroy();
      });
      state.current.instances.clear();
    };
  }, []);
  return state.current.transitions.map((_ref6) => {
    let item = _ref6.item,
        slot = _ref6.slot,
        key = _ref6.key;
    return {
      item,
      key,
      state: slot,
      props: state.current.instances.get(key).getValues()
    };
  });
}

function cleanUp(state, filterKey) {
  const deleted = state.current.deleted;

  for (let _ref7 of deleted) {
    let key = _ref7.key;

    const filter = t => t.key !== key;

    if (is.und(filterKey) || filterKey === key) {
      state.current.instances.delete(key);
      state.current.transitions = state.current.transitions.filter(filter);
      state.current.deleted = state.current.deleted.filter(filter);
    }
  }

  state.current.forceUpdate();
}

function diffItems(_ref8, props) {
  let first = _ref8.first,
      prevProps = _ref8.prevProps,
      state = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref8, ["first", "prevProps"]);

  let _get2 = get(props),
      items = _get2.items,
      keys = _get2.keys,
      initial = _get2.initial,
      from = _get2.from,
      enter = _get2.enter,
      leave = _get2.leave,
      update = _get2.update,
      _get2$trail = _get2.trail,
      trail = _get2$trail === void 0 ? 0 : _get2$trail,
      unique = _get2.unique,
      config = _get2.config,
      _get2$order = _get2.order,
      order = _get2$order === void 0 ? [ENTER, LEAVE, UPDATE] : _get2$order;

  let _get3 = get(prevProps),
      _keys = _get3.keys,
      _items = _get3.items;

  let current = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.current);

  let deleted = [...state.deleted]; // Compare next keys with current keys

  let currentKeys = Object.keys(current);
  let currentSet = new Set(currentKeys);
  let nextSet = new Set(keys);
  let added = keys.filter(item => !currentSet.has(item));
  let removed = state.transitions.filter(item => !item.destroyed && !nextSet.has(item.originalKey)).map(i => i.originalKey);
  let updated = keys.filter(item => currentSet.has(item));
  let delay = -trail;

  while (order.length) {
    const changeType = order.shift();

    switch (changeType) {
      case ENTER:
        {
          added.forEach((key, index) => {
            // In unique mode, remove fading out transitions if their key comes in again
            if (unique && deleted.find(d => d.originalKey === key)) deleted = deleted.filter(t => t.originalKey !== key);
            const keyIndex = keys.indexOf(key);
            const item = items[keyIndex];
            const slot = first && initial !== void 0 ? 'initial' : ENTER;
            current[key] = {
              slot,
              originalKey: key,
              key: unique ? String(key) : guid++,
              item,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              from: callProp(first ? initial !== void 0 ? initial || {} : from : from, item),
              to: callProp(enter, item)
            };
          });
          break;
        }

      case LEAVE:
        {
          removed.forEach(key => {
            const keyIndex = _keys.indexOf(key);

            const item = _items[keyIndex];
            const slot = LEAVE;
            deleted.unshift(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, current[key], {
              slot,
              destroyed: true,
              left: _keys[Math.max(0, keyIndex - 1)],
              right: _keys[Math.min(_keys.length, keyIndex + 1)],
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(leave, item)
            }));
            delete current[key];
          });
          break;
        }

      case UPDATE:
        {
          updated.forEach(key => {
            const keyIndex = keys.indexOf(key);
            const item = items[keyIndex];
            const slot = UPDATE;
            current[key] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, current[key], {
              item,
              slot,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(update, item)
            });
          });
          break;
        }
    }
  }

  let out = keys.map(key => current[key]); // This tries to restore order for deleted items by finding their last known siblings
  // only using the left sibling to keep order placement consistent for all deleted items

  deleted.forEach((_ref9) => {
    let left = _ref9.left,
        right = _ref9.right,
        item = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref9, ["left", "right"]);

    let pos; // Was it the element on the left, if yes, move there ...

    if ((pos = out.findIndex(t => t.originalKey === left)) !== -1) pos += 1; // And if nothing else helps, move it to the start ¯\_(ツ)_/¯

    pos = Math.max(0, pos);
    out = [...out.slice(0, pos), item, ...out.slice(pos)];
  });
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
    changed: added.length || removed.length || updated.length,
    first: first && added.length === 0,
    transitions: out,
    current,
    deleted,
    prevProps: props
  });
}

class AnimatedStyle extends AnimatedObject {
  constructor(style) {
    if (style === void 0) {
      style = {};
    }

    super();

    if (style.transform && !(style.transform instanceof Animated)) {
      style = applyAnimatedValues.transform(style);
    }

    this.payload = style;
  }

}

// http://www.w3.org/TR/css3-color/#svg-color
const colors = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

// const INTEGER = '[-+]?\\d+';
const NUMBER = '[-+]?\\d*\\.?\\d+';
const PERCENTAGE = NUMBER + '%';

function call() {
  for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
    parts[_key] = arguments[_key];
  }

  return '\\(\\s*(' + parts.join(')\\s*,\\s*(') + ')\\s*\\)';
}

const rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
const rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
const hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
const hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
const hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex6 = /^#([0-9a-fA-F]{6})$/;
const hex8 = /^#([0-9a-fA-F]{8})$/;

/*
https://github.com/react-community/normalize-css-color

BSD 3-Clause License

Copyright (c) 2016, React Community
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function normalizeColor(color) {
  let match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  } // Ordered based on occurrences on Facebook codebase


  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
  if (colors.hasOwnProperty(color)) return colors[color];

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    0x000000ff) >>> // a
    0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    'ff', // a
    16) >>> 0;
  } // https://drafts.csswg.org/css-color-4/#hex-notation


  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    match[4] + match[4], // a
    16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | 0x000000ff) >>> // a
    0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | parse1(match[4])) >>> // a
    0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  const num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  const int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  let r = (int32Color & 0xff000000) >>> 24;
  let g = (int32Color & 0x00ff0000) >>> 16;
  let b = (int32Color & 0x0000ff00) >>> 8;
  let a = (int32Color & 0x000000ff) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
} // Problem: https://github.com/animatedjs/animated/pull/102
// Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


const stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Covers rgb, rgba, hsl, hsla
// Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e

const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi; // Covers color names (transparent, blue, etc.)

const colorNamesRegex = new RegExp(`(${Object.keys(colors).join('|')})`, 'g');
/**
 * Supports string shapes by extracting numbers so new values can be computed,
 * and recombines those values into new strings of the same shape.  Supports
 * things like:
 *
 *   rgba(123, 42, 99, 0.36)           // colors
 *   -45deg                            // values with units
 *   0 2px 2px 0px rgba(0, 0, 0, 0.12) // box shadows
 */

const createStringInterpolator = config => {
  // Replace colors with rgba
  const outputRange = config.output.map(rangeValue => rangeValue.replace(colorRegex, colorToRgba)).map(rangeValue => rangeValue.replace(colorNamesRegex, colorToRgba));
  const outputRanges = outputRange[0].match(stringShapeRegex).map(() => []);
  outputRange.forEach(value => {
    value.match(stringShapeRegex).forEach((number, i) => outputRanges[i].push(+number));
  });
  const interpolations = outputRange[0].match(stringShapeRegex).map((_value, i) => createInterpolator(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, config, {
    output: outputRanges[i]
  })));
  return input => {
    let i = 0;
    return outputRange[0] // 'rgba(0, 100, 200, 0)'
    // ->
    // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
    .replace(stringShapeRegex, () => interpolations[i++](input)) // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
    // round the opacity (4th column).
    .replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`);
  };
};

let isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

const prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);

const prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach(prefix => acc[prefixKey(prefix, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);

function dangerousStyleValue(name, value, isCustomProperty) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

  return ('' + value).trim();
}

const attributeCache = {};
injectCreateAnimatedStyle(style => new AnimatedStyle(style));
injectDefaultElement('div');
injectStringInterpolator(createStringInterpolator);
injectColorNames(colors);
injectApplyAnimatedValues((instance, props) => {
  if (instance.nodeType && instance.setAttribute !== undefined) {
    const style = props.style,
          children = props.children,
          scrollTop = props.scrollTop,
          scrollLeft = props.scrollLeft,
          attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["style", "children", "scrollTop", "scrollLeft"]);

    const filter = instance.nodeName === 'filter' || instance.parentNode && instance.parentNode.nodeName === 'filter';
    if (scrollTop !== void 0) instance.scrollTop = scrollTop;
    if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft; // Set textContent, if children is an animatable value

    if (children !== void 0) instance.textContent = children; // Set styles ...

    for (let styleName in style) {
      if (!style.hasOwnProperty(styleName)) continue;
      var isCustomProperty = styleName.indexOf('--') === 0;
      var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
      if (styleName === 'float') styleName = 'cssFloat';
      if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
    } // Set attributes ...


    for (let name in attributes) {
      // Attributes are written in dash case
      const dashCase = filter ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, n => '-' + n.toLowerCase()));
      if (typeof instance.getAttribute(dashCase) !== 'undefined') instance.setAttribute(dashCase, attributes[name]);
    }

    return;
  } else return false;
}, style => style);

const domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
// Extend animated with all the available THREE elements
const apply = merge(createAnimatedComponent, false);
const extendedAnimated = apply(domElements);




/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./src/components/agenda/Agenda.module.css":
/*!*************************************************!*\
  !*** ./src/components/agenda/Agenda.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Agenda.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/agenda/Agenda.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Agenda.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/agenda/Agenda.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Agenda.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/agenda/Agenda.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/agenda/Session.js":
/*!******************************************!*\
  !*** ./src/components/agenda/Session.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _speakerCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../speakerCard */ "./src/components/speakerCard/index.js");
/* harmony import */ var _biography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../biography */ "./src/components/biography/index.js");
/* harmony import */ var _Agenda_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Agenda.module.css */ "./src/components/agenda/Agenda.module.css");
/* harmony import */ var _Agenda_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Agenda_module_css__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "/Users/d068547/workspace/ui5con-germany/src/components/agenda/Session.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var rExpr = /^(.{150}[^\s]*).*/;

var Session = function Session(_ref) {
  var session = _ref.session,
      _ref$full = _ref.full,
      full = _ref$full === void 0 ? true : _ref$full,
      onClick = _ref.onClick;
  return __jsx("div", {
    className: _Agenda_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.session,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Agenda_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.session__title, session.type !== 'break' ? _Agenda_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.clickable : null, session.type === 'break' ? _Agenda_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.view_break : null),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: _Agenda_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.session__title_inner,
    onClick: onClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, session.title)), session.type !== "break" ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _Agenda_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.session__description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, !full && session.description.length > 200 ? "".concat(session.description.replace(/(\r\n|\n|\r)/gm, "").replace(rExpr, "$1").replace(/[.,]*$/, ''), "...") : session.description), __jsx("div", {
    className: _Agenda_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.session__speakers,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }, session.speakers.map(function (speaker, index) {
    return full ? __jsx(_biography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      speaker: speaker,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 78
      }
    }) : __jsx(_speakerCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      speaker: speaker,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 124
      }
    });
  }))) : null);
};

Session.propTypes = {
  session: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  full: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Session);

/***/ }),

/***/ "./src/components/agenda/SessionIcon.js":
/*!**********************************************!*\
  !*** ./src/components/agenda/SessionIcon.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SessionIcon_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SessionIcon.module.css */ "./src/components/agenda/SessionIcon.module.css");
/* harmony import */ var _SessionIcon_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SessionIcon_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon */ "./src/components/icon/index.js");
var _jsxFileName = "/Users/d068547/workspace/ui5con-germany/src/components/agenda/SessionIcon.js",
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var types = {
  break: __jsx(_icon__WEBPACK_IMPORTED_MODULE_2__["CupIcon"], {
    style: {
      marginLeft: '2px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 12
    }
  }),
  pre_event: __jsx(_icon__WEBPACK_IMPORTED_MODULE_2__["CocktailIcon"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 16
    }
  })
};
console.log(_icon__WEBPACK_IMPORTED_MODULE_2__["CupIcon"]);

var SessionIcon = function SessionIcon(_ref) {
  var type = _ref.type;
  return __jsx("div", {
    className: _SessionIcon_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.SessionIcon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, types[type]);
};

/* harmony default export */ __webpack_exports__["default"] = (SessionIcon);

/***/ }),

/***/ "./src/components/agenda/SessionIcon.module.css":
/*!******************************************************!*\
  !*** ./src/components/agenda/SessionIcon.module.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./SessionIcon.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/agenda/SessionIcon.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./SessionIcon.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/agenda/SessionIcon.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./SessionIcon.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/agenda/SessionIcon.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/agenda/index.js":
/*!****************************************!*\
  !*** ./src/components/agenda/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Agenda_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Agenda.module.css */ "./src/components/agenda/Agenda.module.css");
/* harmony import */ var _Agenda_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Agenda_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialog */ "./src/components/dialog/index.js");
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../section */ "./src/components/section/index.js");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../title */ "./src/components/title/index.js");
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../avatar */ "./src/components/avatar/index.js");
/* harmony import */ var _toggleButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../toggleButton */ "./src/components/toggleButton/index.js");
/* harmony import */ var _Session__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Session */ "./src/components/agenda/Session.js");
/* harmony import */ var _SessionIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SessionIcon */ "./src/components/agenda/SessionIcon.js");


var _this = undefined,
    _jsxFileName = "/Users/d068547/workspace/ui5con-germany/src/components/agenda/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var AgendaJSON = __webpack_require__(/*! ../../../data/agenda.json */ "./data/agenda.json").map(function (s) {
  var startTime = new Date(s.startTime.replace(/(\d{2}).(\d{2}).(\d{4})/, "$2/$1/$3"));
  var endTime = new Date(s.endTime.replace(/(\d{2}).(\d{2}).(\d{4})/, "$2/$1/$3"));
  s.startTime = startTime;
  s.endTime = endTime;
  return s;
}).sort(function (s1, s2) {
  return s1.startTime - s2.startTime;
});

var venueTimeFormatter = new Intl.DateTimeFormat(undefined, {
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
  timeZone: "Europe/Berlin"
});
var userTimeFormatter = new Intl.DateTimeFormat(undefined, {
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23"
});

var fnGetSession = function fnGetSession(bUserTime, selectedDate) {
  return AgendaJSON.filter(function (s) {
    var relatedDate = bUserTime ? s.startTime.getDate() : s.startTime.getUTCDate();
    return relatedDate === selectedDate;
  }).sort(function (s1, s2) {
    return s1.startTime - s2.startTime;
  });
};

var getDateButtonState = function getDateButtonState(bUserTime, selectedKey) {
  var firstSessionTime = AgendaJSON[0].startTime;
  var lastSessionTime = AgendaJSON[AgendaJSON.length - 1].startTime;

  if (bUserTime && firstSessionTime.getDate() === lastSessionTime.getDate()) {
    return {
      selectedKey: firstSessionTime.getDate(),
      buttons: [{
        key: firstSessionTime.getDate(),
        title: "Day 1",
        subtitle: "JUL ".concat(firstSessionTime.getDate())
      }]
    };
  } else {
    return {
      selectedKey: selectedKey !== undefined ? selectedKey : Date.now() > (bUserTime ? new Date(2020, 6, 10) : Date.UTC(2020, 6, 10, 2)) ? 10 : 9,
      buttons: [{
        key: 9,
        title: "Day 1",
        subtitle: "JUL 9"
      }, {
        key: 10,
        title: "Day 2",
        subtitle: "JUL 10"
      }]
    };
  }
};

var Agenda = function Agenda() {
  var userOffest = new Date().getTimezoneOffset() / -60;
  var timeButtons = [{
    key: "venueTime",
    title: "Venue time",
    subtitle: "(UTC+2)"
  }, {
    key: "userTime",
    title: "Your time",
    subtitle: "(UTC".concat(userOffest < 0 ? "" : "+").concat(userOffest, ")")
  }];
  var timeSettings = "userTime";
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (localStorage && localStorage.getItem && localStorage.getItem("userSelection")) {
      fnUpdateSelectedTime(localStorage.getItem("userSelection"), true);
    }
  }, []);
  var bUserTime = timeSettings === "userTime";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(timeSettings),
      selectedTime = _useState[0],
      setSelectedTime = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(getDateButtonState(bUserTime)),
      dateButton = _useState2[0],
      setDateButton = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(fnGetSession(bUserTime, dateButton.selectedKey)),
      sessions = _useState3[0],
      setSessions = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      selectedSession = _useState4[0],
      setSelectedSession = _useState4[1];

  var fnUpdateSelectedTime = function fnUpdateSelectedTime(key, bResetDate) {
    if (localStorage && localStorage.setItem) {
      localStorage.setItem("userSelection", key);
    }

    setSelectedTime(key);
    var newDateButtonState = getDateButtonState(key === "userTime", bResetDate ? undefined : dateButton.selectedKey);
    setDateButton(newDateButtonState);
    setSessions(fnGetSession(key === "userTime", newDateButtonState.selectedKey));
  };

  var fnUpdateSelectedDay = function fnUpdateSelectedDay(key) {
    setDateButton(_objectSpread({}, dateButton, {
      selectedKey: key
    }));
    setSessions(fnGetSession(selectedTime === "userTime", key));
  };

  return __jsx(_section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cssClass: _Agenda_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.Agenda,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "agenda",
    className: _Agenda_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.agenda__title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, __jsx(_title__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "white",
    size: "medium",
    text: "Agenda",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }), __jsx(_toggleButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    buttons: timeButtons,
    selectedKey: selectedTime,
    onClick: fnUpdateSelectedTime,
    verticalAlign: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _Agenda_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.agenda__dayToggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, __jsx(_toggleButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    buttons: dateButton.buttons,
    selectedKey: dateButton.selectedKey,
    onClick: fnUpdateSelectedDay,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  })), sessions.map(function (session, index) {
    return __jsx("div", {
      key: index,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Agenda_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.AgendaItem, session.type === 'break' ? _Agenda_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.view_break : null),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _Agenda_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.agenda__startTime,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 21
      }
    }, selectedTime === "venueTime" ? venueTimeFormatter.format(session.startTime) : userTimeFormatter.format(session.startTime)), __jsx("div", {
      className: _Agenda_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.AgendaAvatars,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 21
      }
    }, session.type === 'break' || session.type === 'pre_event' ? __jsx(_SessionIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
      type: session.type,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 37
      }
    }) : session.speakers.map(function (speaker, speakerIndex) {
      return __jsx(_avatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onClick: function onClick() {
          return setSelectedSession(session);
        },
        key: speakerIndex,
        src: speaker.photoUrl,
        alt: "".concat(speaker.firstName, " ").concat(speaker.lastName),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 41
        }
      });
    })), __jsx("div", {
      className: _Agenda_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.agenda__desctiption,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 21
      }
    }, __jsx(_Session__WEBPACK_IMPORTED_MODULE_9__["default"], {
      session: session,
      full: false,
      onClick: session.type !== 'break' ? function () {
        return setSelectedSession(session);
      } : null,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 25
      }
    })));
  }), selectedSession ? __jsx(_dialog__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isOpen: true,
    onClose: function onClose() {
      return setSelectedSession(null);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 21
    }
  }, __jsx(_Session__WEBPACK_IMPORTED_MODULE_9__["default"], {
    session: selectedSession,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 25
    }
  })) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Agenda);

/***/ }),

/***/ "./src/components/avatar/index.js":
/*!****************************************!*\
  !*** ./src/components/avatar/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.css */ "./src/components/avatar/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/Users/d068547/workspace/ui5con-germany/src/components/avatar/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Avatar = function Avatar(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      size = _ref.size,
      onClick = _ref.onClick;
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.Avatar, onClick ? _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.hasListener : null),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: src,
    alt: alt,
    onClick: onClick,
    style: {
      width: size,
      height: size
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }));
};

Avatar.defaultProps = {
  onClick: null
};
Avatar.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Avatar);

/***/ }),

/***/ "./src/components/avatar/styles.module.css":
/*!*************************************************!*\
  !*** ./src/components/avatar/styles.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/avatar/styles.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/avatar/styles.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/avatar/styles.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/bar/Bar.module.css":
/*!*******************************************!*\
  !*** ./src/components/bar/Bar.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Bar.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/bar/Bar.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Bar.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/bar/Bar.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Bar.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/bar/Bar.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/bar/index.js":
/*!*************************************!*\
  !*** ./src/components/bar/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Bar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bar.module.css */ "./src/components/bar/Bar.module.css");
/* harmony import */ var _Bar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Bar_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon */ "./src/components/icon/index.js");
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logo */ "./src/components/logo/index.js");
/* harmony import */ var _iconText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../iconText */ "./src/components/iconText/index.js");
var _this = undefined,
    _jsxFileName = "/Users/d068547/workspace/ui5con-germany/src/components/bar/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 //todo add icon text

var Bar = function Bar(_ref) {
  var _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  return __jsx("div", {
    className: _Bar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.bar,
    id: "bar",
    style: style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _Bar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.bar__logo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _Bar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.bar__endItems,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/ui5con/",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(_iconText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    icon: __jsx(_icon__WEBPACK_IMPORTED_MODULE_2__["GlobusIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 33
      }
    }),
    text: "Other locations",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Bar);

/***/ }),

/***/ "./src/components/biography/Biography.module.css":
/*!*******************************************************!*\
  !*** ./src/components/biography/Biography.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Biography.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/biography/Biography.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Biography.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/biography/Biography.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Biography.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/biography/Biography.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/biography/index.js":
/*!*******************************************!*\
  !*** ./src/components/biography/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _speakerCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../speakerCard */ "./src/components/speakerCard/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon */ "./src/components/icon/index.js");
/* harmony import */ var _Biography_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Biography.module.css */ "./src/components/biography/Biography.module.css");
/* harmony import */ var _Biography_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Biography_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "/Users/d068547/workspace/ui5con-germany/src/components/biography/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Biography = function Biography(_ref) {
  var speaker = _ref.speaker;
  return __jsx("div", {
    className: _Biography_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.biography,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _Biography_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.biography__title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _Biography_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.biography__speaker,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx(_speakerCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    speaker: speaker,
    showPhoto: true,
    isLargeSize: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _Biography_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.biography__network,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, speaker.twitter && speaker.twitter !== "null" ? __jsx("a", {
    className: _Biography_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.biography__networkItem,
    target: "_blank",
    href: speaker.twitter.startsWith("http") ? speaker.twitter : "https://twitter.com/".concat(speaker.twitter),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, __jsx(_icon__WEBPACK_IMPORTED_MODULE_3__["TwitterIcon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), speaker.linkedin && speaker.linkedin !== "null" ? __jsx("a", {
    className: _Biography_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.biography__networkItem,
    target: "_blank",
    href: speaker.linkedin.startsWith("http") ? speaker.linkedin : "https://www.linkedin.com/in/".concat(speaker.linkedin),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, __jsx(_icon__WEBPACK_IMPORTED_MODULE_3__["LinkedinIcon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null),  false ? undefined : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null))), __jsx("div", {
    className: _Biography_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.biography__content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, speaker.bio));
}; // {
//     "firstName": "Gabriel",
//     "lastName": "Borges",
//     "company": "SAP",
//     "bio": "After 5 years in UI5 development for different SAP organizations, I've learned a thing or two regarding writing UI5 apps. Currently acting as an architect for an Oil &amp; Gas SAP product, I've been dealing with the same codebase for 4 years now. TypeScript enthusiast.",
//     "funFact": null,
//     "photoUrl": "https://ui5congermany2020.cfapps.eu10.hana.ondemand.com/api/speaker/photo/2d5ebec3787f074ffb7d54a78887c59414617747",
//     "twitter": "psidium_",
//     "linkedin": "psidium",
//     "github": "Psidium"
//   }


Biography.propTypes = {
  speaker: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Biography);

/***/ }),

/***/ "./src/components/dialog/Dialog.module.css":
/*!*************************************************!*\
  !*** ./src/components/dialog/Dialog.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Dialog.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/dialog/Dialog.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Dialog.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/dialog/Dialog.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Dialog.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/dialog/Dialog.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/dialog/index.js":
/*!****************************************!*\
  !*** ./src/components/dialog/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Dialog_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dialog.module.css */ "./src/components/dialog/Dialog.module.css");
/* harmony import */ var _Dialog_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Dialog_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/Users/d068547/workspace/ui5con-germany/src/components/dialog/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


react_modal__WEBPACK_IMPORTED_MODULE_1___default.a.setAppElement('body');

var Dialog = function Dialog(_ref) {
  var isOpen = _ref.isOpen,
      children = _ref.children,
      onClose = _ref.onClose;

  var fnHandleClose = function fnHandleClose() {
    document.body.style.overflow = "auto";
    onClose();
  };

  return __jsx(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    isOpen: isOpen,
    onAfterOpen: function onAfterOpen() {
      return document.body.style.overflow = "hidden";
    },
    onRequestClose: fnHandleClose,
    className: _Dialog_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dialog,
    overlayClassName: _Dialog_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.overlay,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, children, __jsx("div", {
    className: _Dialog_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.dialog__close,
    onClick: fnHandleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Dialog);

/***/ }),

/***/ "./src/components/dialog/x.svg":
/*!*************************************!*\
  !*** ./src/components/dialog/x.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/x.d6b984a26c3e2b21d3466f2dcaea7af5.svg";

/***/ }),

/***/ "./src/components/footer/index.js":
/*!****************************************!*\
  !*** ./src/components/footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sap_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sap.svg */ "./src/components/footer/sap.svg");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.css */ "./src/components/footer/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon */ "./src/components/icon/index.js");
var _this = undefined,
    _jsxFileName = "/Users/d068547/workspace/ui5con-germany/src/components/footer/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Footer = function Footer() {
  return __jsx("div", {
    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.Footer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.FooterItem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://www.sap.com/",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx(_sap_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    alt: "SAP",
    width: "92",
    height: "45",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 64
    }
  }))), __jsx("div", {
    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.FooterItem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://twitter.com/ui5con",
    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.FooterIcon,
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx(_icon__WEBPACK_IMPORTED_MODULE_4__["TwitterIcon"], {
    width: "18px",
    height: "18px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }), "Twitter"), __jsx("div", {
    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.FooterSocialSeparator,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }), __jsx("a", {
    href: "https://www.youtube.com/watch?v=lPETbnuL9hs&list=PLHUs_FUbq4dUEwRA9tA8w0cOF0UaDKaKM",
    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.FooterIcon,
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx(_icon__WEBPACK_IMPORTED_MODULE_4__["YouTubeIcon"], {
    width: "18px",
    height: "18px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }), "YouTube")), __jsx("div", {
    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.FooterItem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://www.sap.com/about/legal/impressum.html",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, "Legal Disclosure"), __jsx("a", {
    href: "https://www.sap.com/about/legal/privacy.html",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, "Privacy")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/footer/sap.svg":
/*!***************************************!*\
  !*** ./src/components/footer/sap.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("linearGradient", {
  id: "sap_svg__a",
  gradientUnits: "objectBoundingBox",
  x1: 0.5,
  x2: 0.5,
  y2: 1
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", {
  offset: 0,
  stopColor: "#00aeef"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", {
  offset: 0.212,
  stopColor: "#0097dc"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", {
  offset: 0.519,
  stopColor: "#007cc5"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", {
  offset: 0.792,
  stopColor: "#006cb8"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("stop", {
  offset: 1,
  stopColor: "#0066b3"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M0 45h45.974L90.966 0H0z",
  fill: "url(#sap_svg__a)",
  fillRule: "evenodd"
});

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M53.984 9H45l.03 21.13-7.823-21.137H29.45l-6.678 17.653c-.71-4.492-5.354-6.042-9.008-7.2-2.413-.775-4.974-1.915-4.948-3.175.02-1.034 1.37-1.993 4.053-1.85a14.653 14.653 0 016.553 1.77l3.11-5.42A24.188 24.188 0 0012.39 8.37h-.02c-3.813 0-6.988 1.235-8.956 3.27a7.547 7.547 0 00-2.142 5.223 7.015 7.015 0 003.073 6.253 20.942 20.942 0 006.09 2.784c2.485.77 4.515 1.44 4.49 2.866a2.112 2.112 0 01-.59 1.4 3.937 3.937 0 01-2.885.906 12.37 12.37 0 01-7.413-2.116L1.27 34.444A19.229 19.229 0 0011.05 37l.812-.006a12.2 12.2 0 007.718-2.44c.116-.093.22-.187.328-.282l-.34 1.752 7.58-.024 1.36-3.482a14.873 14.873 0 004.782.758 15.03 15.03 0 004.667-.716l.948 3.44 13.6.013.033-7.938h2.894c6.995 0 11.13-3.56 11.13-9.53C66.56 11.9 62.54 9 53.984 9zM33.29 27.062a8.128 8.128 0 01-2.868-.5l2.836-8.962h.055l2.79 8.98a8.4 8.4 0 01-2.814.477zm21.22-5.145h-1.974V14.7h1.975c2.63 0 4.73.876 4.73 3.562 0 2.78-2.1 3.655-4.73 3.655",
  fill: "#fff",
  fillRule: "evenodd"
});

var _ref4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M0 0h92v45H0z",
  fill: "none"
});

function SvgSap(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    height: 45,
    width: 92
  }, props), _ref, _ref2, _ref3, _ref4);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgSap);

/***/ }),

/***/ "./src/components/footer/styles.module.css":
/*!*************************************************!*\
  !*** ./src/components/footer/styles.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/footer/styles.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/footer/styles.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/footer/styles.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/grid/Grid.module.css":
/*!*********************************************!*\
  !*** ./src/components/grid/Grid.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Grid.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/grid/Grid.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Grid.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/grid/Grid.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Grid.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/grid/Grid.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/grid/index.js":
/*!**************************************!*\
  !*** ./src/components/grid/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sticker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sticker */ "./src/components/sticker/index.js");
/* harmony import */ var _Grid_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Grid.module.css */ "./src/components/grid/Grid.module.css");
/* harmony import */ var _Grid_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Grid_module_css__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "/Users/d068547/workspace/ui5con-germany/src/components/grid/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Grid = function Grid(_ref) {
  var _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([0, 0]),
      grid = _useState[0],
      setGrid = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      dispayedItems = _useState2[0],
      setDisplayedItems = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Array.from(Array(26), function (_, i) {
    return i + 1;
  })),
      cachedItems = _useState3[0],
      setCachedItems = _useState3[1]; //resize listener


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var queries = ['(max-width: 767px)', '(max-width: 1023px)'];
    var relatedGrid = [[2, 3], [3, 4]];
    var mediaQueryLists = queries.map(function (q) {
      return window.matchMedia(q);
    });

    var getValue = function getValue() {
      var index = mediaQueryLists.findIndex(function (mql) {
        return mql.matches;
      });
      return typeof relatedGrid[index] !== 'undefined' ? relatedGrid[index] : [4, 4];
    };

    var handler = function handler() {
      return setGrid(getValue());
    };

    mediaQueryLists.forEach(function (mql) {
      return mql.addListener(handler);
    });
    handler();
    return function () {
      mediaQueryLists.forEach(function (mql) {
        return mql.removeListener(handler);
      });
    };
  }, []); //handle resize

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var gridSize = grid[0] * grid[1];

    if (dispayedItems.length > gridSize) {
      var removedItems = dispayedItems.splice(gridSize);
      setCachedItems(cachedItems.concat(removedItems));
      setDisplayedItems(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(dispayedItems));
      setGrid(grid);
    } else if (dispayedItems.length < gridSize) {
      var addedItems = cachedItems.splice(0, gridSize - dispayedItems.length);
      setCachedItems(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(cachedItems));
      setDisplayedItems(dispayedItems.concat(addedItems));
      setGrid(grid);
    }
  }); //rotation

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var interval = setInterval(function () {
      if (dispayedItems.length !== grid[0] * grid[1]) {
        return;
      }

      var index = Math.floor(Math.random() * dispayedItems.length);
      var relacedItem = dispayedItems[index];
      dispayedItems[index] = cachedItems.splice(0, 1)[0];
      cachedItems.push(relacedItem);
      setDisplayedItems(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(dispayedItems));
      setCachedItems(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(cachedItems));
    }, 5000);
    return function () {
      clearInterval(interval);
    };
  });
  return __jsx("div", {
    className: _Grid_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.grid,
    style: style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, dispayedItems.map(function (item, index) {
    return __jsx("div", {
      key: index,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_Grid_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.grid__item, _Grid_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["col-".concat(grid[1])], _Grid_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["row-".concat(grid[0])]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }
    }, __jsx(_sticker__WEBPACK_IMPORTED_MODULE_4__["default"], {
      frontImageUrl: "./hero/".concat(item, ".jpg"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 21
      }
    }));
  }));
};

Grid.propTypes = {
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ }),

/***/ "./src/components/hero/Hero.module.css":
/*!*********************************************!*\
  !*** ./src/components/hero/Hero.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Hero.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/hero/Hero.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Hero.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/hero/Hero.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Hero.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/hero/Hero.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/hero/index.js":
/*!**************************************!*\
  !*** ./src/components/hero/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Hero_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hero.module.css */ "./src/components/hero/Hero.module.css");
/* harmony import */ var _Hero_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Hero_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bar */ "./src/components/bar/index.js");
/* harmony import */ var _sharing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sharing */ "./src/components/sharing/index.js");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../title */ "./src/components/title/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icon */ "./src/components/icon/index.js");
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../logo */ "./src/components/logo/index.js");
/* harmony import */ var _iconText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../iconText */ "./src/components/iconText/index.js");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../grid */ "./src/components/grid/index.js");



var _this = undefined,
    _jsxFileName = "/Users/d068547/workspace/ui5con-germany/src/components/hero/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var Hero = function Hero() {
  var logoRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["useSpring"])({
    from: {
      opacity: 0,
      top: "calc(70% - 60px)",
      filter: "blur(20px)"
    },
    to: function to(next, cancel) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function to$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(next({
                opacity: 1,
                top: "calc(45% - 60px)"
              }));

            case 2:
              _context.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(next({
                config: {
                  duration: 1000
                }
              }));

            case 4:
              _context.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(next({
                opacity: 0,
                top: "calc(25% - 60px)",
                filter: "blur(1px)",
                config: {
                  duration: 300
                }
              }));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    },
    ref: logoRef
  }),
      opacity = _useSpring.opacity,
      top = _useSpring.top,
      filter = _useSpring.filter;

  var headerRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var headerAnimation = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["useSpring"])({
    from: {
      opacity: 0,
      top: "30px"
    },
    to: {
      opacity: 1,
      top: "0"
    },
    config: {
      duration: 200
    },
    ref: headerRef
  });
  var content = [__jsx(_title__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "light",
    text: "Community conference around the UI5 framework",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx(_title__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "light",
    size: "large",
    hasMargin: true,
    text: "Join us from home in July",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx(_iconText__WEBPACK_IMPORTED_MODULE_10__["default"], {
    icon: __jsx(_icon__WEBPACK_IMPORTED_MODULE_8__["PinIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 25
      }
    }),
    text: "Global online event",
    size: "large",
    color: "light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), __jsx(_iconText__WEBPACK_IMPORTED_MODULE_10__["default"], {
    icon: __jsx(_icon__WEBPACK_IMPORTED_MODULE_8__["CalendarIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 25
      }
    }),
    text: "July 9, 2020 / 16:00 \u2013 20:30 CEST",
    size: "large",
    color: "light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), __jsx(_iconText__WEBPACK_IMPORTED_MODULE_10__["default"], {
    text: "July 10, 2020 / 09:00 \u2013 13:30 CEST",
    size: "large",
    color: "light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  })];
  var contentRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var trails = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["useTrail"])(content.length, {
    from: {
      opacity: 0,
      top: "30px"
    },
    to: {
      opacity: 1,
      top: "0px"
    },
    config: {
      duration: 400
    },
    ref: contentRef
  });
  var sharingRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var sharingAnimation = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["useSpring"])({
    from: {
      opacity: 0,
      right: "0px"
    },
    to: {
      opacity: 1,
      right: "24px"
    },
    ref: sharingRef
  });
  Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["useChain"])([logoRef, headerRef, contentRef, sharingRef]);
  var AnimatedHeader = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"])(_bar__WEBPACK_IMPORTED_MODULE_5__["default"]);
  var AnimatedGrid = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"])(_grid__WEBPACK_IMPORTED_MODULE_11__["default"]);
  var AnimatedSharing = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"])(_sharing__WEBPACK_IMPORTED_MODULE_6__["default"]);
  return __jsx("div", {
    className: _Hero_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.hero,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _Hero_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.hero__background,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx(AnimatedGrid, {
    style: {
      filter: filter
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  })), __jsx(AnimatedHeader, {
    style: headerAnimation,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }), __jsx(AnimatedSharing, {
    title: "Share",
    className: _Hero_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.hero__sharing,
    style: sharingAnimation,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _Hero_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.hero__content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, trails.map(function (animation, i) {
    return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
      key: i,
      style: _objectSpread({}, animation, {
        position: "relative"
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }
    }, content[i]);
  })), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
    className: _Hero_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.hero__logo,
    width: "500px",
    height: "158px",
    style: {
      opacity: opacity,
      top: top
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx(_logo__WEBPACK_IMPORTED_MODULE_9__["default"], {
    animate: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./src/components/icon/images/calendar.svg":
/*!*************************************************!*\
  !*** ./src/components/icon/images/calendar.svg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M70.1 6.7c2.6-.1 4.7 1.9 4.8 4.4v63.1c.1 2.6-1.9 4.7-4.5 4.8H12.2c-1.3 0-2.5-.5-3.4-1.4s-1.5-2.2-1.4-3.5V11.5c0-1.3.5-2.6 1.4-3.5s2.1-1.4 3.4-1.4h9.6V1.8h4.8v4.8h28.9V1.8h4.8v4.8l9.8.1zm0 14.4H12.2v53H70l.1-53zM21.9 40.4c-2.6-.1-4.6-2.3-4.4-4.8.1-2.6 2.3-4.6 4.8-4.4 2.6.1 4.6 2.3 4.4 4.8 0 1.2-.5 2.3-1.4 3.1-.9.9-2.2 1.3-3.4 1.3zm0 19.3c-2.6-.1-4.6-2.3-4.4-4.8.1-2.6 2.3-4.6 4.8-4.4 2.6.1 4.6 2.3 4.4 4.8 0 1.2-.5 2.3-1.4 3.1-.9.8-2.2 1.3-3.4 1.3zm0-43.4h4.8v-4.8h-4.8v4.8zm19.2 24.1c-2.6-.1-4.6-2.3-4.4-4.8.1-2.6 2.3-4.6 4.8-4.4s4.6 2.3 4.4 4.8c0 1.2-.5 2.3-1.4 3.1-.8.9-2.1 1.3-3.4 1.3zm0 19.3c-2.6-.1-4.6-2.3-4.4-4.8.1-2.6 2.3-4.6 4.8-4.4s4.6 2.3 4.4 4.8c0 1.2-.5 2.3-1.4 3.1-.8.8-2.1 1.3-3.4 1.3zm14.5-43.4h4.8v-4.8h-4.8v4.8zm4.8 24.1c-2.6-.1-4.6-2.3-4.4-4.8.1-2.6 2.3-4.6 4.8-4.4 2.6.1 4.6 2.3 4.4 4.8 0 1.2-.5 2.3-1.4 3.1-.8.9-2.1 1.3-3.4 1.3zm0 19.3c-2.6-.1-4.6-2.3-4.4-4.8.1-2.6 2.3-4.6 4.8-4.4 2.6.1 4.6 2.3 4.4 4.8 0 1.2-.5 2.3-1.4 3.1-.8.8-2.1 1.3-3.4 1.3z",
  fill: "#ffa42c"
});

function SvgCalendar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    viewBox: "0 0 80 80"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgCalendar);

/***/ }),

/***/ "./src/components/icon/images/cocktail.svg":
/*!*************************************************!*\
  !*** ./src/components/icon/images/cocktail.svg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M9.409 5.416l-.047-.373A5.784 5.784 0 003.61.001H.002v2.167h3.5a3.727 3.727 0 013.707 3.25H3.273a28.093 28.093 0 012.182 10.878v1.576a2.722 2.722 0 002.731 2.712h1.631v2.788a1 1 0 01-1.008 1H7.363a.815.815 0 00-.818.812.815.815 0 00.818.812h7.086a.817.817 0 00.819-.813.817.817 0 00-.819-.814h-1.447a1 1 0 01-1-1v-2.794h1.64a2.719 2.719 0 002.728-2.707v-1.579a28.093 28.093 0 012.182-10.878z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M19.89.161a5.444 5.444 0 00-6.522 3.657h5.178a1.636 1.636 0 011.51 2.265 26.865 26.865 0 00-1.489 4.824 5.457 5.457 0 005.352-6.46A5.45 5.45 0 0019.89.161z"
}));

function SvgCocktail(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    height: 26,
    width: 24.009
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgCocktail);

/***/ }),

/***/ "./src/components/icon/images/cup.svg":
/*!********************************************!*\
  !*** ./src/components/icon/images/cup.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M0 .748v14.159a3.733 3.733 0 003.733 3.728h11.865a2.986 2.986 0 002.986-2.986.748.748 0 01.747-.747h1.939a2.733 2.733 0 002.731-2.731V5.458a2.734 2.734 0 00-2.731-2.73h-1.939a.747.747 0 01-.747-.746V.742a.747.747 0 00-.746-.747H.747A.748.748 0 000 .748zm21.27 4.17a.555.555 0 01.546.546v6.713a.553.553 0 01-.546.546h-1.938a.747.747 0 01-.747-.746V5.669a.747.747 0 01.746-.747z",
  fill: "#fff"
});

function SvgCup(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    height: 18.64,
    width: 24.001
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgCup);

/***/ }),

/***/ "./src/components/icon/images/email.svg":
/*!**********************************************!*\
  !*** ./src/components/icon/images/email.svg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  fill: "#ffa42c"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M1.426.744L7.91 5.88a1.649 1.649 0 001.093.317 1.653 1.653 0 001.093-.317l6.48-5.136c.518-.41.4-.744-.258-.744H1.682c-.656 0-.777.335-.256.744z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M17.044 2.099L9.958 7.478a1.715 1.715 0 01-1.917 0L.956 2.099C.43 1.699 0 1.914 0 2.574V11.4a1.2 1.2 0 001.2 1.2h15.6a1.2 1.2 0 001.2-1.2V2.574c.001-.66-.43-.874-.956-.475z"
}));

function SvgEmail(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    viewBox: "0 0 18 12.6"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgEmail);

/***/ }),

/***/ "./src/components/icon/images/facebook.svg":
/*!*************************************************!*\
  !*** ./src/components/icon/images/facebook.svg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M6 6h3v3H6v7H3V9H0V6h3V4.745a5.669 5.669 0 011.118-3.512A3.6 3.6 0 016.9 0H9v3H6.9a.9.9 0 00-.9.9z",
  fill: "#ffa42c"
});

function SvgFacebook(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    viewBox: "0 0 9 16"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgFacebook);

/***/ }),

/***/ "./src/components/icon/images/globus.svg":
/*!***********************************************!*\
  !*** ./src/components/icon/images/globus.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "#ffa42c",
  d: "M9 1.1c1.2 0 2.4.2 3.5.7s2 1.1 2.9 1.9 1.5 1.8 1.9 2.9.7 2.3.7 3.5-.2 2.4-.7 3.5-1.1 2-1.9 2.9-1.8 1.5-2.9 1.9-2.3.7-3.5.7-2.4-.2-3.5-.7-2.1-1.1-2.9-1.9-1.4-1.8-1.9-2.9c-.5-1.1-.7-2.2-.7-3.5s.2-2.4.7-3.5 1.1-2.1 1.9-2.9 1.8-1.4 2.9-1.9c1.1-.4 2.3-.7 3.5-.7zM9 18c1.1 0 2.1-.2 3.1-.6s1.8-1 2.5-1.7 1.3-1.6 1.7-2.5.6-2 .6-3.1-.2-2.1-.6-3-1-1.8-1.7-2.5-1.6-1.3-2.5-1.7-2-.6-3.1-.6-2.1.2-3.1.6-1.8 1-2.5 1.7-1.3 1.5-1.7 2.5-.6 2-.6 3.1.2 2.1.6 3.1 1 1.8 1.7 2.5c.7.6 1.6 1.2 2.5 1.6s2 .6 3.1.6zm.3-7.3l.7.6v1.3l-1.7 1.6-.1.2-.2 1v.6l-.1.1h-.2L7 14.6c-.1-.3-.1-.6-.2-.9s-.1-.7-.2-1.2l-1-.9.9-1.1-.3-.5c-.6 0-1.1-.2-1.5-.6l-.3-.2-.2-.3.4.7-.3.1-.5-1 .1-.9-.2-.7-.6-.4-.2-.4c0-.1.1-.3.3-.6l.7-.7c.3-.2.5-.4.8-.6s.5-.3.6-.3c.2 0 .4.1.7.2s.5.2.7.2v.1c0 .1 0 .2.1.2l-.6 1.4.7.1.6-.6 1 .1.2.5-.6.6v.4h.3l.2-.3.6-.4v.3l.3.5-.4.3.2.2h-.5l.2.4-.8.4.1.6H8l-.1-.6h-.8l-.1.2-.3-.1-.4.5.4.4v.5l.3.3zm.5-6.1c.3-.3.5-.5.8-.7l.9-.6c.3.3.6.5.8.6-.1.1-.2.1-.3.2l-.4.4-.6 1-.3.2c-.1 0-.3-.1-.3-.3s-.1-.3-.1-.3c-.2 0-.3 0-.4.1h-.6c.1-.2.3-.4.5-.6zm5.7 3.9c.3.1.5.4.5.8s.1.7.1 1c0 .9-.2 1.7-.5 2.4s-.7 1.4-1 2.1c-.1 0-.1-.1-.1-.2 0-.2 0-.5.1-.9s.1-.8.1-1.2v-.3l-.1-.3-.5-.9-1.3-.3-.4-.7.2-1.2c.2 0 .4-.1.6-.1s.5-.1.9-.3c0 0 .1.1.2.1h1.2zm-2-3.3l-.4.1.1-.6h.4l.1.3zm1.7 1.3c0 .1.1.2.1.3s.1.2.1.4l-.3.3-.5-.1-.2.6-.7-.3.4-.6h.9v-.4zm-1.1-.2L14 6l.1-.2.2.3zm.5-.4l-.2-.3.1-.3.7.7-.3.3h-.4l.3-.3zm.7 2.1h.3v.3z"
});

function SvgGlobus(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    viewBox: "0 0 18 20"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgGlobus);

/***/ }),

/***/ "./src/components/icon/images/linkedin.svg":
/*!*************************************************!*\
  !*** ./src/components/icon/images/linkedin.svg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M14.4 17.036V9.964a1.873 1.873 0 00-1.8-1.414 2.741 2.741 0 00-2.507 1.061v7.425H6.461V5.818h3.6v1.639a4 4 0 013.6-2.121c2.218.161 3.889 1.511 4.243 4.468H18v7.232zM2.154 4.371a2.186 2.186 0 112.154-2.186 2.161 2.161 0 01-2.154 2.186zm1.8 12.664h-3.6V5.818h3.6z"
});

function SvgLinkedin(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    viewBox: "0 0 18 17.036"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgLinkedin);

/***/ }),

/***/ "./src/components/icon/images/pin.svg":
/*!********************************************!*\
  !*** ./src/components/icon/images/pin.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M42.9 2.2c3.6.3 7.1 1.3 10.3 3 3.1 1.6 6 3.8 8.4 6.4 2.4 2.6 4.3 5.7 5.6 9 1.3 3.4 2 7.1 2 10.7-.1 1.9-.5 3.7-1.2 5.4-.9 2.4-2 4.8-3.3 7.1-1.4 2.5-2.9 5.2-4.6 7.9-1.7 2.7-3.5 5.5-5.3 8.2-4.3 6.3-9.1 13-14.5 20.1-5.6-7-10.5-13.7-14.8-20-1.8-2.6-3.6-5.3-5.4-8.1s-3.4-5.5-4.7-8.1c-1.2-2.3-2.4-4.7-3.4-7.2-.8-1.7-1.2-3.5-1.3-5.4 0-3.9.7-7.8 2.3-11.5 3-7 8.5-12.6 15.5-15.5C32.1 2.8 35.9 2 39.9 2h1.6c.5 0 1 .1 1.4.2zm-2.7 69.7c3-4.1 6-8.3 8.9-12.6s5.5-8.2 7.7-11.9 4-7 5.4-9.8 2.1-5 2.1-6.4c0-3.1-.6-6.1-1.7-8.9-1.1-2.7-2.6-5.3-4.6-7.5-1.9-2.2-4.3-4-6.9-5.4-2.7-1.4-5.6-2.3-8.7-2.6h-2.7c-3.2 0-6.4.6-9.4 1.9-2.8 1.3-5.4 3.1-7.6 5.3s-4 4.9-5.3 7.8c-1.3 3-1.9 6.2-1.9 9.4 0 1.5.8 3.8 2.3 6.9 1.8 3.5 3.7 6.9 5.9 10.2 2.4 3.8 5 7.7 7.9 11.9 2.9 4.2 5.7 8.1 8.6 11.7zm-.3-55.3c8.1 0 14.6 6.6 14.6 14.7 0 3.9-1.5 7.6-4.3 10.3-5.7 5.7-15 5.7-20.7 0s-5.7-15 0-20.7c2.7-2.8 6.5-4.4 10.4-4.3zm0 24.4c2.6.1 5.1-1 6.9-2.9 3.8-3.8 3.8-10 0-13.8s-10-3.8-13.8 0-3.8 10 .1 13.8c1.8 1.9 4.2 2.9 6.8 2.9z",
  fill: "#ffa42c"
});

function SvgPin(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    viewBox: "0 0 80 80"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgPin);

/***/ }),

/***/ "./src/components/icon/images/twitter.svg":
/*!************************************************!*\
  !*** ./src/components/icon/images/twitter.svg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M18 1.732a7.348 7.348 0 01-2.121.581A3.7 3.7 0 0017.503.274a7.392 7.392 0 01-2.345.9 3.7 3.7 0 00-6.292 3.368A10.485 10.485 0 011.253.674a3.7 3.7 0 001.143 4.932 3.682 3.682 0 01-1.67-.462v.047a3.7 3.7 0 002.96 3.621 3.713 3.713 0 01-.973.129 3.659 3.659 0 01-.695-.066 3.7 3.7 0 003.45 2.565 7.452 7.452 0 01-5.467 1.529 10.5 10.5 0 0016.168-8.848q0-.24-.01-.478A7.479 7.479 0 0018 1.732z"
});

function SvgTwitter(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    viewBox: "0 0 18 14.628"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgTwitter);

/***/ }),

/***/ "./src/components/icon/images/youtube.svg":
/*!************************************************!*\
  !*** ./src/components/icon/images/youtube.svg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M17.82 2.914a4.328 4.328 0 00-.715-1.907 2.483 2.483 0 00-1.8-.812c-2.519-.2-6.3-.2-6.3-.2h-.008s-3.778 0-6.3.2a2.484 2.484 0 00-1.8.812 4.336 4.336 0 00-.715 1.907 30.935 30.935 0 00-.18 3.107v1.456a30.923 30.923 0 00.18 3.108 4.319 4.319 0 00.715 1.905 2.943 2.943 0 001.985.821c1.44.147 6.12.193 6.12.193s3.782-.007 6.3-.2a2.494 2.494 0 001.8-.814 4.327 4.327 0 00.715-1.905 30.933 30.933 0 00.18-3.108V6.022a30.933 30.933 0 00-.177-3.108zM6.752 10.128V3.376l5.627 3.376z"
});

function SvgYoutube(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    viewBox: "0 0 18 13.504"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgYoutube);

/***/ }),

/***/ "./src/components/icon/index.js":
/*!**************************************!*\
  !*** ./src/components/icon/index.js ***!
  \**************************************/
/*! exports provided: CalendarIcon, EmailIcon, FacebookIcon, GlobusIcon, LinkedinIcon, PinIcon, TwitterIcon, YouTubeIcon, CupIcon, CocktailIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_calendar_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/calendar.svg */ "./src/components/icon/images/calendar.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarIcon", function() { return _images_calendar_svg__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _images_email_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/email.svg */ "./src/components/icon/images/email.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmailIcon", function() { return _images_email_svg__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _images_facebook_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/facebook.svg */ "./src/components/icon/images/facebook.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FacebookIcon", function() { return _images_facebook_svg__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _images_globus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/globus.svg */ "./src/components/icon/images/globus.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobusIcon", function() { return _images_globus_svg__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _images_linkedin_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/linkedin.svg */ "./src/components/icon/images/linkedin.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedinIcon", function() { return _images_linkedin_svg__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _images_pin_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/pin.svg */ "./src/components/icon/images/pin.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PinIcon", function() { return _images_pin_svg__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _images_twitter_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/twitter.svg */ "./src/components/icon/images/twitter.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TwitterIcon", function() { return _images_twitter_svg__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _images_youtube_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/youtube.svg */ "./src/components/icon/images/youtube.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YouTubeIcon", function() { return _images_youtube_svg__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _images_cup_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/cup.svg */ "./src/components/icon/images/cup.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CupIcon", function() { return _images_cup_svg__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _images_cocktail_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/cocktail.svg */ "./src/components/icon/images/cocktail.svg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CocktailIcon", function() { return _images_cocktail_svg__WEBPACK_IMPORTED_MODULE_9__["default"]; });












/***/ }),

/***/ "./src/components/iconText/IconText.module.css":
/*!*****************************************************!*\
  !*** ./src/components/iconText/IconText.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./IconText.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/iconText/IconText.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./IconText.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/iconText/IconText.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./IconText.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/iconText/IconText.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/iconText/index.js":
/*!******************************************!*\
  !*** ./src/components/iconText/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _IconText_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IconText.module.css */ "./src/components/iconText/IconText.module.css");
/* harmony import */ var _IconText_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_IconText_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/Users/d068547/workspace/ui5con-germany/src/components/iconText/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var IconText = function IconText(_ref) {
  var icon = _ref.icon,
      text = _ref.text,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "default" : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "default" : _ref$color;
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_IconText_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconText, _IconText_module_css__WEBPACK_IMPORTED_MODULE_3___default.a["color_".concat(color)], _IconText_module_css__WEBPACK_IMPORTED_MODULE_3___default.a["size_".concat(size)]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: _IconText_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconText__icon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, icon ? react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(icon, {
    width: "100%",
    height: "100%"
  }) : null), __jsx("span", {
    className: _IconText_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconText__text,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, text));
};

IconText.propTypes = {
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['default', 'large']),
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['default', 'light'])
};
/* harmony default export */ __webpack_exports__["default"] = (IconText);

/***/ }),

/***/ "./src/components/logo/index.js":
/*!**************************************!*\
  !*** ./src/components/logo/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.css */ "./src/components/logo/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/Users/d068547/workspace/ui5con-germany/src/components/logo/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Logo = function Logo(_ref) {
  var animate = _ref.animate;
  return __jsx("svg", {
    viewBox: "0 0 120 38",
    xmlns: "http://www.w3.org/2000/svg",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.Logo, animate ? _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.view_animation : null),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("g", {
    fill: "#f16a36",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "m0 27.3v-16.4h5.9v16.3a7.46 7.46 0 0 0 1.2 4.5 4.49 4.49 0 0 0 3.8 1.5 4.28 4.28 0 0 0 3.7-1.5 7.11 7.11 0 0 0 1.2-4.5v-16.3h5.8v16.4a16.33 16.33 0 0 1 -.6 4.4 9 9 0 0 1 -2 3.4 7.54 7.54 0 0 1 -3.4 2.1 14.22 14.22 0 0 1 -4.8.7 14.22 14.22 0 0 1 -4.8-.7 8.34 8.34 0 0 1 -5.3-5.5 13.16 13.16 0 0 1 -.7-4.4z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "m26.8 37.5v-26.6h5.8v26.6z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "m36.3 34.5 3-3.8a12.09 12.09 0 0 0 3 2 9.12 9.12 0 0 0 3.6.8c1.8 0 3.1-.4 3.9-1.3a4.87 4.87 0 0 0 1.2-3.4 4.82 4.82 0 0 0 -1.2-3.5 4.25 4.25 0 0 0 -3.4-1.3 5.87 5.87 0 0 0 -2.6.6 7 7 0 0 0 -2.3 1.9l-3.8-1.2 1.1-14.3h16.2l-.3 4.3h-11.4l-.5 6a8.64 8.64 0 0 1 2-1.2 10.61 10.61 0 0 1 3.4-.5 9.37 9.37 0 0 1 3.7.7 7.37 7.37 0 0 1 4.4 4.7 9 9 0 0 1 .5 3.6 10.85 10.85 0 0 1 -.7 3.9 9.1 9.1 0 0 1 -2.1 3 11.26 11.26 0 0 1 -3.3 2 13.16 13.16 0 0 1 -4.4.7 14.24 14.24 0 0 1 -5.7-1 20.86 20.86 0 0 1 -4.3-2.7z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  })), __jsx("g", {
    fill: "#f79b36",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "m59.2 28.5a10.76 10.76 0 0 1 .7-4.2 8.25 8.25 0 0 1 1.9-2.9 10.7 10.7 0 0 1 2.6-1.7 7.89 7.89 0 0 1 3-.5 7.44 7.44 0 0 1 2.6.4 8 8 0 0 1 2 1.1 6.89 6.89 0 0 1 1.4 1.6 11.48 11.48 0 0 1 1 1.9l-2.5 1a5.78 5.78 0 0 0 -1.8-2.6 4.29 4.29 0 0 0 -2.8-.9 4 4 0 0 0 -1.9.4 6.54 6.54 0 0 0 -1.7 1.2 7.2 7.2 0 0 0 -1.2 2.1 11.19 11.19 0 0 0 -.5 3.2 8.31 8.31 0 0 0 1.4 5.1 4.92 4.92 0 0 0 3.7 1.8 4.65 4.65 0 0 0 2.8-.8 7.25 7.25 0 0 0 2-2.8l2.4.9a11.18 11.18 0 0 1 -1.2 2.1 6.09 6.09 0 0 1 -1.6 1.6 8 8 0 0 1 -2 1.1 7.44 7.44 0 0 1 -2.6.4 7.73 7.73 0 0 1 -3-.6 6.42 6.42 0 0 1 -2.5-1.8 7.87 7.87 0 0 1 -1.8-2.9 29.56 29.56 0 0 1 -.4-4.2z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "m77.1 28.5a11.45 11.45 0 0 1 .7-4.1 7.87 7.87 0 0 1 1.8-2.9 8 8 0 0 1 2.7-1.8 8.57 8.57 0 0 1 6.3 0 8 8 0 0 1 2.7 1.8 7.87 7.87 0 0 1 1.8 2.9 11.45 11.45 0 0 1 .7 4.1 11.45 11.45 0 0 1 -.7 4.1 7.87 7.87 0 0 1 -1.8 2.9 8 8 0 0 1 -2.7 1.8 8.57 8.57 0 0 1 -6.3 0 8 8 0 0 1 -2.7-1.8 7.87 7.87 0 0 1 -1.8-2.9 12.44 12.44 0 0 1 -.7-4.1zm3 0a12.28 12.28 0 0 0 .3 2.7 6.36 6.36 0 0 0 1 2.2 5 5 0 0 0 1.7 1.5 4 4 0 0 0 2.4.5 5.91 5.91 0 0 0 2.3-.5 3.87 3.87 0 0 0 1.7-1.4 9.06 9.06 0 0 0 1.1-2.2 12.61 12.61 0 0 0 .4-2.8 11.33 11.33 0 0 0 -.3-2.6 8.75 8.75 0 0 0 -1-2.2 5 5 0 0 0 -1.7-1.5 3.87 3.87 0 0 0 -2.4-.5 5.91 5.91 0 0 0 -2.3.5 3.87 3.87 0 0 0 -1.7 1.4 8.58 8.58 0 0 0 -1.1 2.1 8.87 8.87 0 0 0 -.4 2.8z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "m98 37.5v-17.9h2.9v2.7a6.83 6.83 0 0 1 1.3-1.1 8.57 8.57 0 0 1 1.6-1 12.66 12.66 0 0 1 1.8-.7 7.46 7.46 0 0 1 2.1-.3 5.74 5.74 0 0 1 4 1.4 5.54 5.54 0 0 1 1.4 4v12.9h-2.9v-12.3a4.14 4.14 0 0 0 -.8-2.7 3.14 3.14 0 0 0 -2.5-.8 6.07 6.07 0 0 0 -3 .8 15.06 15.06 0 0 0 -2.8 2.1v12.9z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  })), __jsx("g", {
    fill: "#fff",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "m81 14.1a3.25 3.25 0 0 1 -1.1-1.2 3.4 3.4 0 0 1 -.4-1.8 4 4 0 0 1 .4-1.8 2.56 2.56 0 0 1 1.1-1.2 3.82 3.82 0 0 1 3.3 0 3.25 3.25 0 0 1 1.1 1.2 4.25 4.25 0 0 1 0 3.6 2.56 2.56 0 0 1 -1.1 1.2 3 3 0 0 1 -1.6.4 2.44 2.44 0 0 1 -1.7-.4zm2.8-.7a1.54 1.54 0 0 0 .7-.9 2.18 2.18 0 0 0 .2-1.4 2.79 2.79 0 0 0 -.3-1.3 1.8 1.8 0 0 0 -.8-.9 2 2 0 0 0 -1.1-.3 2.63 2.63 0 0 0 -1.2.3 1.54 1.54 0 0 0 -.7.9 3.09 3.09 0 0 0 -.3 1.3 2.79 2.79 0 0 0 .3 1.3 1.8 1.8 0 0 0 .8.9 2 2 0 0 0 1.1.3 1.47 1.47 0 0 0 1.3-.2z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "m87.5 7.9h1l3.3 5.6v-5.6h.8v6.6h-1.1l-3.3-5.5v5.6h-.8z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "m101.3 12.7h-2.9l-.6 1.8h-.9l2.5-6.6h1l2.4 6.6h-.9zm-.3-.8-.8-2.2a1.42 1.42 0 0 1 -.2-.6 1.07 1.07 0 0 1 -.1-.4 1.69 1.69 0 0 1 -.2.5 1.42 1.42 0 0 0 -.2.6l-.8 2.2h2.3z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "m104.3 7.9h.9v6.6h-.9z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "m107.4 7.9h2.5a5.68 5.68 0 0 1 1.3.2 1.81 1.81 0 0 1 .8.7 2 2 0 0 1 .3 1 1.86 1.86 0 0 1 -.2.8 1.84 1.84 0 0 1 -.5.7 3.64 3.64 0 0 1 -.9.4l1.9 2.7h-1l-1.7-2.6h-1.5v2.6h-.9v-6.5zm2.5 3.1a1.09 1.09 0 0 0 .8-.2 1 1 0 0 0 .5-.4 1.42 1.42 0 0 0 .2-.6.91.91 0 0 0 -.4-.8 2 2 0 0 0 -1.1-.3h-1.5v2.3z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), __jsx("path", {
    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.Wave1,
    d: "m113.8 8.5a3.84 3.84 0 0 0 -.9-1.5 3 3 0 0 0 -1.6-.8.47.47 0 0 1 -.5-.44v-.16c0-.3.3-.4.5-.4a4.43 4.43 0 0 1 2.2 1 3.76 3.76 0 0 1 1.2 2 .5.5 0 0 1 -.3.6c-.2.2-.5 0-.6-.3.1.1.1 0 0 0z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }), __jsx("path", {
    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.Wave2,
    d: "m116.5 7.9a5.7 5.7 0 0 0 -1.7-2.8 5 5 0 0 0 -3-1.4.47.47 0 0 1 -.5-.44v-.06c0-.3.3-.4.5-.4a7.05 7.05 0 0 1 3.6 1.7 6.55 6.55 0 0 1 2 3.4.5.5 0 0 1 -.3.6c-.3-.2-.6-.3-.6-.6z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }), __jsx("path", {
    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.Wave3,
    d: "m119.1 7.2a8.13 8.13 0 0 0 -2.6-4.2 9 9 0 0 0 -4.4-2.1.47.47 0 0 1 -.5-.44v-.06c0-.3.3-.4.5-.4a9.55 9.55 0 0 1 7.8 7 .5.5 0 0 1 -.3.6c-.2.1-.5-.1-.5-.4z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  })));
};

Logo.defaultProps = {
  animate: false
};
Logo.propTypes = {
  animate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./src/components/logo/styles.module.css":
/*!***********************************************!*\
  !*** ./src/components/logo/styles.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/logo/styles.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/logo/styles.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/logo/styles.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/section/Section.module.css":
/*!***************************************************!*\
  !*** ./src/components/section/Section.module.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Section.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/section/Section.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Section.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/section/Section.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Section.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/section/Section.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/section/index.js":
/*!*****************************************!*\
  !*** ./src/components/section/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Section_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Section.module.css */ "./src/components/section/Section.module.css");
/* harmony import */ var _Section_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Section_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/Users/d068547/workspace/ui5con-germany/src/components/section/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Section = function Section(_ref) {
  var children = _ref.children,
      _ref$cssClass = _ref.cssClass,
      cssClass = _ref$cssClass === void 0 ? "" : _ref$cssClass;
  return __jsx("div", {
    className: "".concat(_Section_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.section, " ").concat(cssClass),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _Section_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.section__content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, children));
};

Section.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  cssClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./src/components/sharing/ShareButton.js":
/*!***********************************************!*\
  !*** ./src/components/sharing/ShareButton.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icon */ "./src/components/icon/index.js");
/* harmony import */ var _ShareButton_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShareButton.module.css */ "./src/components/sharing/ShareButton.module.css");
/* harmony import */ var _ShareButton_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ShareButton_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/Users/d068547/workspace/ui5con-germany/src/components/sharing/ShareButton.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var url = "https://openui5.org/ui5con/germany2020/?v3";
var oShareConfigurations = {
  facebook: {
    shareUrl: 'https://www.facebook.com/sharer/sharer.php',
    icon: _icon__WEBPACK_IMPORTED_MODULE_1__["FacebookIcon"],
    params: {
      u: url
    }
  },
  linkedin: {
    shareUrl: 'https://www.linkedin.com/shareArticle',
    icon: _icon__WEBPACK_IMPORTED_MODULE_1__["LinkedinIcon"],
    params: {
      url: url,
      mini: true
    }
  },
  twitter: {
    shareUrl: 'https://twitter.com/intent/tweet/',
    icon: _icon__WEBPACK_IMPORTED_MODULE_1__["TwitterIcon"],
    params: {
      url: url
    }
  },
  email: {
    shareUrl: 'mailto:',
    icon: _icon__WEBPACK_IMPORTED_MODULE_1__["EmailIcon"],
    params: {
      subject: "UI5con@SAP coming in June 2020",
      body: "Mark your calendars: UI5con@SAP 2020 is on June 19 in St. Leon-Rot, Germany — a daylong community event focused on UI5 development. https://openui5.org/ui5con/germany2020/"
    }
  }
};

var getShareUrl = function getShareUrl(oConfig) {
  var oParams = oConfig.params || {},
      aQueryParams = Object.keys(oParams).map(function (sParam) {
    return sParam + "=" + encodeURIComponent(oParams[sParam]);
  });
  return oConfig.shareUrl + "?" + aQueryParams.join("&");
};

var SharingButton = function SharingButton(_ref) {
  var type = _ref.type;

  var openShare = function openShare() {
    var oShareConfiguration = oShareConfigurations[type];

    if (!oShareConfiguration) {
      return;
    }

    var sShareUrl = getShareUrl(oShareConfiguration),
        popWidth = 600,
        popHeight = 480,
        left = window.innerWidth / 2 - popWidth / 2 + window.screenX,
        top = window.innerHeight / 2 - popHeight / 2 + window.screenY,
        popParams = "scrollbars=no, width=".concat(popWidth, ", height=").concat(popHeight, ", top=").concat(top, ", left=").concat(left),
        newWindow = window.open(sShareUrl, '', popParams);

    if (window.focus) {
      newWindow.focus();
    }
  };

  if (type === "email") {
    return __jsx("a", {
      href: getShareUrl(oShareConfigurations.email),
      className: _ShareButton_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sharingButton,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 16
      }
    }, oShareConfigurations[type].icon());
  }

  return __jsx("div", {
    className: _ShareButton_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sharingButton,
    onClick: openShare,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 12
    }
  }, oShareConfigurations[type].icon());
};

/* harmony default export */ __webpack_exports__["default"] = (SharingButton);

/***/ }),

/***/ "./src/components/sharing/ShareButton.module.css":
/*!*******************************************************!*\
  !*** ./src/components/sharing/ShareButton.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./ShareButton.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/sharing/ShareButton.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./ShareButton.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/sharing/ShareButton.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./ShareButton.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/sharing/ShareButton.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/sharing/Sharing.module.css":
/*!***************************************************!*\
  !*** ./src/components/sharing/Sharing.module.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Sharing.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/sharing/Sharing.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Sharing.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/sharing/Sharing.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Sharing.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/sharing/Sharing.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/sharing/index.js":
/*!*****************************************!*\
  !*** ./src/components/sharing/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Sharing_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sharing.module.css */ "./src/components/sharing/Sharing.module.css");
/* harmony import */ var _Sharing_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Sharing_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShareButton */ "./src/components/sharing/ShareButton.js");
var _this = undefined,
    _jsxFileName = "/Users/d068547/workspace/ui5con-germany/src/components/sharing/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var defaultItems = ["twitter", "linkedin", "facebook", "email"];

var SharingSection = function SharingSection(_ref) {
  var title = _ref.title,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? defaultItems : _ref$items,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  return __jsx("div", {
    className: "".concat(_Sharing_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sharing, " ").concat(className),
    style: style,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _Sharing_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sharing__title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, title), items.map(function (type, index) {
    return __jsx(_ShareButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      type: type,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 37
      }
    });
  }));
};

SharingSection.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (SharingSection);

/***/ }),

/***/ "./src/components/speakerCard/SpeakerCard.module.css":
/*!***********************************************************!*\
  !*** ./src/components/speakerCard/SpeakerCard.module.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./SpeakerCard.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/speakerCard/SpeakerCard.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./SpeakerCard.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/speakerCard/SpeakerCard.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./SpeakerCard.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/speakerCard/SpeakerCard.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/speakerCard/index.js":
/*!*********************************************!*\
  !*** ./src/components/speakerCard/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SpeakerCard_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpeakerCard.module.css */ "./src/components/speakerCard/SpeakerCard.module.css");
/* harmony import */ var _SpeakerCard_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SpeakerCard_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/Users/d068547/workspace/ui5con-germany/src/components/speakerCard/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var SpeakerCard = function SpeakerCard(_ref) {
  var speaker = _ref.speaker,
      _ref$showPhoto = _ref.showPhoto,
      showPhoto = _ref$showPhoto === void 0 ? false : _ref$showPhoto,
      _ref$isLargeSize = _ref.isLargeSize,
      isLargeSize = _ref$isLargeSize === void 0 ? false : _ref$isLargeSize;
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_SpeakerCard_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.speaker, isLargeSize ? _SpeakerCard_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.speaker_size_large : ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, showPhoto && __jsx("img", {
    className: _SpeakerCard_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.speaker__photo,
    src: speaker.photoUrl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 23
    }
  }), __jsx("div", {
    className: _SpeakerCard_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.speaker__content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _SpeakerCard_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.speaker__fullname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, "".concat(speaker.firstName, " ").concat(speaker.lastName)), __jsx("div", {
    className: _SpeakerCard_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.speaker__company,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, speaker.company)));
};

SpeakerCard.propTypes = {
  speaker: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  showPhoto: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isLargeSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (SpeakerCard);

/***/ }),

/***/ "./src/components/sticker/Sticker.module.css":
/*!***************************************************!*\
  !*** ./src/components/sticker/Sticker.module.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Sticker.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/sticker/Sticker.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Sticker.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/sticker/Sticker.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Sticker.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/sticker/Sticker.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/sticker/index.js":
/*!*****************************************!*\
  !*** ./src/components/sticker/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _Sticker_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sticker.module.css */ "./src/components/sticker/Sticker.module.css");
/* harmony import */ var _Sticker_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Sticker_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "/Users/d068547/workspace/ui5con-germany/src/components/sticker/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Sticker = function Sticker(_ref) {
  var frontImageUrl = _ref.frontImageUrl,
      backImageUrl = _ref.backImageUrl;
  var transitions = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["useTransition"])(frontImageUrl, null, {
    initial: {
      transform: "translateX(0%) rotateY(0deg)"
    },
    from: {
      transform: "translateX(0%) rotateY(180deg)"
    },
    enter: {
      transform: "translateX(0%)  rotateY(0deg)"
    },
    leave: {
      transform: "translateX(0%) rotateY(-180deg)"
    },
    config: {
      duration: 1000
    }
  });
  return __jsx("div", {
    className: _Sticker_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.sticker,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _Sticker_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.sticker__container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, transitions.map(function (_ref2) {
    var item = _ref2.item,
        key = _ref2.key,
        props = _ref2.props;
    return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].img, {
      src: item,
      style: props,
      key: key,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    });
  }))); // return (
  //     <div className={styles.sticker}>
  //         <div className={styles.sticker__container}>
  //             <div className={styles.sticker__front}>
  //                 {frontImageUrl && <img loading="lazy" src={frontImageUrl}/>}
  //             </div>
  //             <div className={styles.sticker__back}>
  //                 {<img loading="lazy" src="/hero/10.jpg"/>}
  //             </div>
  //         </div>
  //     </div>
  // )
};

Sticker.propTypes = {
  frontImageUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  backImageUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Sticker);

/***/ }),

/***/ "./src/components/title/Title.module.css":
/*!***********************************************!*\
  !*** ./src/components/title/Title.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Title.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/title/Title.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Title.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/title/Title.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./Title.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/title/Title.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/title/index.js":
/*!***************************************!*\
  !*** ./src/components/title/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Title_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Title.module.css */ "./src/components/title/Title.module.css");
/* harmony import */ var _Title_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Title_module_css__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "/Users/d068547/workspace/ui5con-germany/src/components/title/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Title = function Title(_ref) {
  var text = _ref.text,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "default" : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "default" : _ref$color,
      _ref$hasMargin = _ref.hasMargin,
      hasMargin = _ref$hasMargin === void 0 ? false : _ref$hasMargin;
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_Title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.has_margin, hasMargin), _Title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["color_".concat(color)], _Title_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["size_".concat(size)]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, text);
};

Title.propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["default", "medium", "large"]),
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["default", "light", "white"]),
  hasMargin: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./src/components/toggleButton/ToggleButton.module.css":
/*!*************************************************************!*\
  !*** ./src/components/toggleButton/ToggleButton.module.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./ToggleButton.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/toggleButton/ToggleButton.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./ToggleButton.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/toggleButton/ToggleButton.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./ToggleButton.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./src/components/toggleButton/ToggleButton.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/toggleButton/index.js":
/*!**********************************************!*\
  !*** ./src/components/toggleButton/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ToggleButton_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ToggleButton.module.css */ "./src/components/toggleButton/ToggleButton.module.css");
/* harmony import */ var _ToggleButton_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ToggleButton_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/Users/d068547/workspace/ui5con-germany/src/components/toggleButton/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var ToggleButton = function ToggleButton(_ref) {
  var buttons = _ref.buttons,
      selectedKey = _ref.selectedKey,
      _ref$verticalAlign = _ref.verticalAlign,
      verticalAlign = _ref$verticalAlign === void 0 ? false : _ref$verticalAlign,
      _onClick = _ref.onClick;
  var selectedButtonIndex = buttons.findIndex(function (button) {
    return button.key === selectedKey;
  });
  return __jsx("div", {
    className: _ToggleButton_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.ToggleButtons,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, buttons.map(function (button) {
    return __jsx("div", {
      key: button.key,
      onClick: function onClick() {
        return _onClick(button.key);
      },
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_ToggleButton_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.Button, button.key === selectedKey ? _ToggleButton_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.selected : null, verticalAlign ? _ToggleButton_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.verticalAlign : null),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }
    }, button.title, button.subtitle ? __jsx("div", {
      className: _ToggleButton_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.subtitle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 31
      }
    }, button.subtitle) : null);
  }), __jsx("div", {
    className: _ToggleButton_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.Selection,
    style: {
      left: "".concat(selectedButtonIndex * 50, "%")
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }));
};

ToggleButton.propTypes = {
  buttons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  selectedKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  verticalAlign: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (ToggleButton);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hero */ "./src/components/hero/index.js");
/* harmony import */ var _components_agenda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/agenda */ "./src/components/agenda/index.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer/index.js");
var _jsxFileName = "/Users/d068547/workspace/ui5con-germany/src/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }), __jsx("meta", {
    property: "og:title",
    content: "UI5con ON AIR 2020",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }), __jsx("meta", {
    property: "og:description",
    content: "Mark your calendars: UI5con ON AIR in on 9th and 10th July 2020 \u2014 an online community event focused on #UI5 development.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "https://openui5.org/ui5con/germany2020/share.png?5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "twitter:title",
    content: "UI5con ON AIR 2020 in July 2020",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "twitter:description",
    content: "Mark your calendars: UI5con ON AIR in on 9th and 10th July 2020 \u2014 an online community event focused on #UI5 development.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "twitter:image",
    content: "https://openui5.org/ui5con/onair2020/share.png?5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }), __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, "UI5con ON AIR 2020")), __jsx("div", {
    id: "root",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }
  }, __jsx(_components_hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "section mod_notes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "section__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "iconText color_white type_vertical",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "iconText__icon type_location",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 8
    }
  }), __jsx("div", {
    className: "iconText__text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 8
    }
  }, "Global online event \u2013 completely ", __jsx("nobr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 73
    }
  }, "browser-based"))), __jsx("div", {
    className: "iconText color_white type_vertical mod_people",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "iconText__icon type_people",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 8
    }
  }), __jsx("div", {
    className: "iconText__text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 8
    }
  }, "Open to all \u2013 ", __jsx("nobr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 54
    }
  }, "no registration is needed"))), __jsx("div", {
    className: "iconText color_white type_vertical",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "iconText__icon type_play",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 8
    }
  }), __jsx("div", {
    className: "iconText__text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 8
    }
  }, "Real-time live", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 54
    }
  }), "sessions")), __jsx("div", {
    className: "iconText color_white type_vertical",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "iconText__icon type_twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 8
    }
  }), __jsx("div", {
    className: "iconText__text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 8
    }
  }, "Follow this page or our Twitter (", __jsx("a", {
    href: "https://twitter.com/ui5con",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 73
    }
  }, "@ui5con"), ") for updates")), __jsx("div", {
    className: "iconText color_white type_vertical",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "iconText__icon type_email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 8
    }
  }), __jsx("div", {
    className: "iconText__text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 8
    }
  }, "Question about speaking at UI5con ON AIR? ", __jsx("nobr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 82
    }
  }, __jsx("a", {
    href: "mailto:openui5@sap.com?subject=[UI5con ON AIR] Question",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 88
    }
  }, "Send us an email")))))), __jsx(_components_agenda__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "section mod_copyright",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "section__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 6
    }
  }, __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  })))));
}

/***/ }),

/***/ 1:
/*!*****************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fd068547%2Fworkspace%2Fui5con-germany%2Fsrc%2Fpages%2Findex.js ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fd068547%2Fworkspace%2Fui5con-germany%2Fsrc%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fd068547%2Fworkspace%2Fui5con-germany%2Fsrc%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map