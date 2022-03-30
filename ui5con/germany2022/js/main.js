"use strict";
var app = new Vue({
    el: "#app",
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
                github: 'https://github.com/stefania-santimbrean'
            },
            {
                name: 'Andreas Kunz',
                country: 'Germany',
                company: 'SAP',
                picture: 'images/committee/andreas-kunz.jpg',
                twitter: 'https://twitter.com/aku_dev',
                linkedin: 'https://www.linkedin.com/in/andreas-kunz-dev',
                github: 'https://github.com/akudev'
            },
            {
                name: 'Ethan Jewett',
                country: 'USA',
                company: 'Mindset Consulting LLC',
                picture: 'images/committee/ethan-jewett.jpg',
                twitter: 'https://twitter.com/esjewett',
                linkedin: 'https://www.linkedin.com/in/ethanjewett',
                github: 'https://github.com/esjewett'
            },
            {
                name: 'Stanislava Baltova',
                country: 'Bulgaria',
                company: 'SAP',
                picture: 'images/committee/stanislava-baltova.jpeg',
                twitter: 'https://twitter.com/KostSisi',
                linkedin: 'https://www.linkedin.com/in/stanislava-baltova'
            },
            {
                name: 'Ilja Postnovs',
                country: 'Latvia',
                company: 'Rimi Baltic',
                picture: 'images/committee/ilja-postnovs.jpg',
                linkedin: 'https://www.linkedin.com/in/ilja-postnovs-648b2a134/',
                github: 'https://github.com/iljapostnovs/'
            },
            {
                name: 'Marian Zeis',
                country: 'Germany',
                company: 'XL2',
                picture: 'images/committee/marian-zeis.jpg',
                twitter: 'https://twitter.com/mianbsp',
                linkedin: 'https://www.linkedin.com/in/marianzeis',
                github: 'https://github.com/marianfoo'
            },
            {
                name: 'Lea Zimmermann',
                country: 'Germany',
                company: 'j&s-soft GmbH',
                picture: 'images/committee/lea-zimmermann.jpg',
                linkedin: 'https://www.linkedin.com/in/lea-zimmermann/'
            },
            {
                name: 'Peter Spielvogel',
                country: 'USA',
                company: 'SAP',
                picture: 'images/committee/peter-spielvogel.jpg',
                twitter: 'https://twitter.com/peterspielvogel',
                linkedin: 'https://www.linkedin.com/in/peterspielvogel/'
            },
            {
                name: 'Wouter Lemaire',
                country: 'Belgium',
                company: 'LEMTECH BV',
                picture: 'images/committee/wouter-lemaire.jpg',
                twitter: 'https://twitter.com/wouter_lemaire',
                github: 'http://github.com/lemaiwo'
            },
            {
                name: 'Stefan Beck',
                country: 'Germany',
                company: 'SAP',
                picture: 'images/committee/stefan-beck.jpg',
                twitter: 'https://twitter.com/StefanBeck3',
                linkedin: 'https://linkedin.com/in/stefan-beck-a9319a82'
            }
        ]
    };
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
            if(window.innerWidth <= 600) {
                this.isMobile = true;
                this.isExpanded = false;
            } else {
                this.isMobile = false;
            }
        })
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize);
    },
    methods: {
        onResize() {
            this.windowWidth = window.innerWidth;
            if(window.innerWidth <= 600) {
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
        }
    }
});