'use strict';
var sponsorsHeader = new Vue({
  el: '#sponsorsHeader',
  data() {
    return {
      
    };
  },
});

var sponsors = new Vue({
  el: '#sponsors',
  data() {
    return {
      sponsors: [
        {
          package: 'Slots available',
          diamond: '1',
          platinum: '2',
          gold: '8',
          silver: 'unlimited'
        },
        {
          package: 'Price (exclusive of VAT)',
          diamond: '10,000 €',
          platinum: '5,000 €',
          gold: '2,500 €',
          silver: '1,500 €'
        },
        {
          package: 'Conference Attendee Tickets',
          diamond: '6',
          platinum: '4',
          gold: '2',
          silver: '1'
        },
        {
          package: 'Logo on conference website (maintained 1 year)',
          diamond: '✓',
          platinum: '✓',
          gold: '✓',
          silver: '✓'
        },
        {
          package: 'Company logo, link and description on Sponsor Page (description provided by sponsor, approved my UI5con team)',
          diamond: '✓',
          platinum: '✓',
          gold: '✓',
          silver: '✓'
        },
        {
          package: 'Recognition in welcome/closing announcements',
          diamond: '✓',
          platinum: '✓',
          gold: '✓',
          silver: '✓'
        },
        {
          package: 'Sponsor callout in pre-conference attendee email',
          diamond: '✓',
          platinum: '✓',
          gold: '✓',
          silver: '✓'
        },
        {
          package: 'Sponsor callout in post-conference attendee email',
          diamond: '✓',
          platinum: '✓',
          gold: '✓',
          silver: '✓'
        },
        {
          package: 'Social Media Promotion of Sponsorship (Sponsor can provide custom content, must be approved by UI5con team)',
          diamond: '2 (custom text)',
          platinum: '1 (custom text)',
          gold: '2 (shared post)',
          silver: '-'
        },
        {
          package: 'Logo on Sponsor Poster in conference center',
          diamond: '✓',
          platinum: '✓',
          gold: '✓',
          silver: '-'
        },
        {
          package: 'Give aways (items allowed, must be approved by UI5con team)',
          diamond: 'up to 5',
          platinum: 'up to 3',
          gold: 'up to 2',
          silver: '-'
        },
        {
          package: 'Full static slide between talks on rotation with others (in AUDIMAX) (provided by sponsor)',
          diamond: '✓',
          platinum: '✓',
          gold: 'shared',
          silver: '-'
        },
        {
          package: 'Logo at the end of speaker speech video recording',
          diamond: '✓',
          platinum: '✓',
          gold: '-',
          silver: '-'
        },
        {
          package: 'Convention center branding opportunities (contact for details)',
          diamond: '✓',
          platinum: '✓',
          gold: '-',
          silver: '-'
        },
        {
          package: 'Exhibition stand (contact for details)',
          diamond: '✓',
          platinum: '✓',
          gold: '-',
          silver: '-'
        }
      ],
    };
  },
});
