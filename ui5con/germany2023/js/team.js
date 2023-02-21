'use strict';
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