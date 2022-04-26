'use strict';
var app = new Vue({
  el: '#app',
  data() {
    return {
      windowWidth: window.innerWidth,
      isMobile: false,
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
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
      if (window.innerWidth <= 600) {
        this.isMobile = true;
        this.isExpanded = false;
      } else {
        this.isMobile = false;
      }
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
      if (window.innerWidth <= 600) {
        this.isMobile = true;
        this.isExpanded = false;
      } else {
        this.isMobile = false;
      }
    },
    revealCommittee() {
      this.isExpanded = !this.isExpanded;
    },
    expandCommitteeSection() {
      this.isExpanded = !this.isExpanded;
    },
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
        // {
        //   name: 'Arthur Trauter',
        //   city: 'Walldorf',
        //   picture: 'images/team/arthur-trauter.png',
        //   twitter: 'https://twitter.com/ArthurTrauter',
        //   github: 'https://github.com/ArthurTrauter'
        // },
        // {
        //   name: 'Dorota Josenhans',
        //   city: 'Walldorf',
        //   picture: 'images/team/dorota-josenhans.png',
        //   linkedin: 'https://www.linkedin.com/in/dorota-josenhans-b5615124/',
        // },
        // {
        //   name: 'Oliver Müller',
        //   city: 'Walldorf',
        //   picture: 'images/team/oliver-mueller.jpg',
        //   linkedin: 'https://www.linkedin.com/in/oliver-m%C3%BCller-648702a8/',
        // },
        // {
        //   name: 'Alexander Rauh',
        //   city: 'Walldorf',
        //   picture: 'images/team/alex-rauh.jpg',
        //   linkedin: 'https://www.linkedin.com/in/alexander-rauh-899579168/',
        // },
      ],
    };
  },
});

