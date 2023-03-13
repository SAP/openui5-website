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
      packages: [
        {
          package: 'Slots available',
          diamond: '1',
          platinum: '<del>2</del> <ins>1</ins>',
          gold: '<del>8</del> <ins>5</ins>',
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
          package: 'Company logo, link and description on Sponsor Page (description provided by sponsor, approved by UI5con team)',
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
      sponsors: [
        {
          name: "Neptune Software",
          logo: `<svg class="ui5con-sponsor-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 318.18 60.69" aria-hidden="true">
                  <circle cx="32.71" cy="33.94" r="21.27" fill="#ffffff" />
                  <path d="M88.07 41.89a1.6 1.6 0 0 1-.13.67 1.33 1.33 0 0 1-.35.49 1.31 1.31 0 0 1-.52.28 2.08 2.08 0 0 1-.6.09h-1.82a4 4 0 0 1-1-.11 2.08 2.08 0 0 1-.77-.42 3.8 3.8 0 0 1-.67-.81 14.17 14.17 0 0 1-.73-1.32l-5.21-9.81c-.3-.58-.61-1.21-.92-1.89s-.6-1.33-.84-2c0 .78.08 1.56.1 2.33s0 1.57 0 2.4v11a.52.52 0 0 1-.09.29.73.73 0 0 1-.3.22 2.47 2.47 0 0 1-.6.13 9 9 0 0 1-1.9 0 2.28 2.28 0 0 1-.58-.13.63.63 0 0 1-.29-.22.51.51 0 0 1-.08-.29v-18.9a1.46 1.46 0 0 1 .44-1.15 1.67 1.67 0 0 1 1.1-.38h2.29a4.27 4.27 0 0 1 1 .11 2.12 2.12 0 0 1 .76.35 2.53 2.53 0 0 1 .62.67 7.3 7.3 0 0 1 .6 1.07l4.09 7.68.71 1.37c.23.45.46.9.67 1.35l.64 1.33.6 1.3c0-.76 0-1.55-.07-2.37s0-1.61 0-2.36V23a.53.53 0 0 1 .09-.3.86.86 0 0 1 .33-.22 2 2 0 0 1 .6-.14 8.5 8.5 0 0 1 1 0 8.08 8.08 0 0 1 .92 0 1.82 1.82 0 0 1 .58.14.65.65 0 0 1 .28.22.61.61 0 0 1 .08.3ZM101.95 34a4.26 4.26 0 0 0-.69-2.71 2.67 2.67 0 0 0-2.28-1 3.06 3.06 0 0 0-1.36.29 2.81 2.81 0 0 0-.95.79 3.58 3.58 0 0 0-.59 1.17 6 6 0 0 0-.23 1.44Zm4 1.17a1.59 1.59 0 0 1-.33 1.1 1.21 1.21 0 0 1-.92.36h-8.81a5.84 5.84 0 0 0 .22 1.68 3.13 3.13 0 0 0 .7 1.28 2.91 2.91 0 0 0 1.23.81 5.35 5.35 0 0 0 1.81.27 10.45 10.45 0 0 0 1.88-.15 12.56 12.56 0 0 0 1.4-.34c.4-.13.73-.24 1-.34a1.7 1.7 0 0 1 .63-.16.45.45 0 0 1 .24.06.41.41 0 0 1 .16.2 1.1 1.1 0 0 1 .09.42 6.19 6.19 0 0 1 0 .67v.61a4 4 0 0 1 0 .43.81.81 0 0 1-.1.3.89.89 0 0 1-.17.24 2.1 2.1 0 0 1-.65.34 10.2 10.2 0 0 1-1.2.38c-.49.12-1 .23-1.67.32a14.24 14.24 0 0 1-2 .14 10.51 10.51 0 0 1-3.38-.49 5.78 5.78 0 0 1-2.42-1.48 6.13 6.13 0 0 1-1.46-2.5 11.7 11.7 0 0 1-.48-3.54 11.07 11.07 0 0 1 .51-3.48 7.19 7.19 0 0 1 1.46-2.64 6.27 6.27 0 0 1 2.3-1.71 8.14 8.14 0 0 1 3.09-.56 8 8 0 0 1 3.1.53 5.68 5.68 0 0 1 2.15 1.52 6 6 0 0 1 1.22 2.25 9.78 9.78 0 0 1 .39 2.83ZM118.76 35.67a11.36 11.36 0 0 0-.14-1.78 5.31 5.31 0 0 0-.47-1.52 2.79 2.79 0 0 0-.88-1.06 2.18 2.18 0 0 0-1.35-.4 2.84 2.84 0 0 0-.81.12 3 3 0 0 0-.81.4 5.7 5.7 0 0 0-.85.71 11.1 11.1 0 0 0-.92 1.09v4.78a9.4 9.4 0 0 0 1.64 1.68 2.61 2.61 0 0 0 1.62.59 2.23 2.23 0 0 0 1.35-.4 3.1 3.1 0 0 0 .92-1.07 5.51 5.51 0 0 0 .53-1.48 8.58 8.58 0 0 0 .17-1.66m4.25-.29a13.73 13.73 0 0 1-.41 3.48 7.85 7.85 0 0 1-1.21 2.64 5.34 5.34 0 0 1-2 1.68 6.06 6.06 0 0 1-2.71.58 5.23 5.23 0 0 1-1.16-.12 4.88 4.88 0 0 1-1-.37 6.73 6.73 0 0 1-1-.63 10.87 10.87 0 0 1-1-.88v6.83a.53.53 0 0 1-.1.29.86.86 0 0 1-.33.22 3.34 3.34 0 0 1-.63.14 12.27 12.27 0 0 1-2 0 3 3 0 0 1-.62-.14.73.73 0 0 1-.33-.22.46.46 0 0 1-.1-.29V28.34a.44.44 0 0 1 .08-.28.64.64 0 0 1 .28-.21 2.75 2.75 0 0 1 .54-.12h1.65a2.59 2.59 0 0 1 .54.12.64.64 0 0 1 .28.21.44.44 0 0 1 .08.28v1.71a14.26 14.26 0 0 1 1.28-1.1 7.45 7.45 0 0 1 1.24-.83 5.69 5.69 0 0 1 1.3-.49 6.05 6.05 0 0 1 1.44-.16 5.46 5.46 0 0 1 2.71.62 5.08 5.08 0 0 1 1.82 1.72 7.36 7.36 0 0 1 1 2.53 13.81 13.81 0 0 1 .33 3.09M134.84 41.4a5.06 5.06 0 0 1-.09 1.1 1.19 1.19 0 0 1-.23.54 1.33 1.33 0 0 1-.43.27 3.31 3.31 0 0 1-.67.21 6.35 6.35 0 0 1-.82.14 6.85 6.85 0 0 1-.91.05 6.38 6.38 0 0 1-2.11-.31 3.44 3.44 0 0 1-1.47-1 3.83 3.83 0 0 1-.86-1.61 8.3 8.3 0 0 1-.28-2.31V31.1h-1.73a.52.52 0 0 1-.48-.38 3.74 3.74 0 0 1-.16-1.27v-.8a2.13 2.13 0 0 1 .12-.51.67.67 0 0 1 .21-.27.51.51 0 0 1 .28-.08h1.72v-3.23a.53.53 0 0 1 .09-.3.73.73 0 0 1 .33-.22 2.6 2.6 0 0 1 .63-.12 8.7 8.7 0 0 1 1 0 9.09 9.09 0 0 1 1 0 2.61 2.61 0 0 1 .62.12.79.79 0 0 1 .33.22.54.54 0 0 1 .1.3v3.23h3.14a.55.55 0 0 1 .29.08.58.58 0 0 1 .2.27 2.13 2.13 0 0 1 .12.51 6.07 6.07 0 0 1 0 .8 3.5 3.5 0 0 1-.16 1.27c-.11.26-.27.38-.47.38h-3.16v6.85a3.37 3.37 0 0 0 .37 1.78 1.43 1.43 0 0 0 1.33.59 3.3 3.3 0 0 0 .58 0 3.9 3.9 0 0 0 .47-.13l.34-.13a.61.61 0 0 1 .25-.06.35.35 0 0 1 .19.06.38.38 0 0 1 .13.22c0 .12.06.27.09.47a5 5 0 0 1 0 .74M151.66 42.83a.55.55 0 0 1-.08.29.6.6 0 0 1-.29.2 1.66 1.66 0 0 1-.53.12 6.64 6.64 0 0 1-.84 0 6.85 6.85 0 0 1-.87 0 1.66 1.66 0 0 1-.53-.12.58.58 0 0 1-.27-.2.55.55 0 0 1-.08-.29v-1.67a9.16 9.16 0 0 1-2.44 2 5.55 5.55 0 0 1-2.58.65 5.66 5.66 0 0 1-2.5-.49 4.23 4.23 0 0 1-1.64-1.37 5.34 5.34 0 0 1-.9-2 12.58 12.58 0 0 1-.26-2.77v-8.84a.45.45 0 0 1 .09-.28.61.61 0 0 1 .32-.2 2.76 2.76 0 0 1 .63-.13h2a2.66 2.66 0 0 1 .62.13.64.64 0 0 1 .33.2.4.4 0 0 1 .1.28v8.19a7.64 7.64 0 0 0 .15 1.74 2.92 2.92 0 0 0 .44 1 2.07 2.07 0 0 0 .8.68 2.38 2.38 0 0 0 1.07.23 2.66 2.66 0 0 0 1.57-.57 9.18 9.18 0 0 0 1.63-1.66v-9.61a.45.45 0 0 1 .09-.28.65.65 0 0 1 .32-.2 2.76 2.76 0 0 1 .63-.13h2a2.66 2.66 0 0 1 .62.13.65.65 0 0 1 .32.2.45.45 0 0 1 .1.28ZM169.72 42.83a.43.43 0 0 1-.1.29.65.65 0 0 1-.32.2 2.2 2.2 0 0 1-.63.12 9 9 0 0 1-1 0 9.41 9.41 0 0 1-1 0 2.19 2.19 0 0 1-.62-.12.65.65 0 0 1-.32-.2.43.43 0 0 1-.1-.29v-8.27a6.53 6.53 0 0 0-.16-1.65 3.24 3.24 0 0 0-.44-1 2 2 0 0 0-.76-.67 2.29 2.29 0 0 0-1.08-.24 2.71 2.71 0 0 0-1.57.57 8.34 8.34 0 0 0-1.65 1.66v9.63a.48.48 0 0 1-.1.29.74.74 0 0 1-.33.2 2.35 2.35 0 0 1-.63.12 12.27 12.27 0 0 1-2 0 2.19 2.19 0 0 1-.62-.12.73.73 0 0 1-.34-.2.48.48 0 0 1-.09-.29V28.34a.44.44 0 0 1 .08-.28.55.55 0 0 1 .29-.2 2.14 2.14 0 0 1 .54-.13h1.7a1.86 1.86 0 0 1 .53.13.55.55 0 0 1 .26.2.44.44 0 0 1 .08.28v1.68a9.19 9.19 0 0 1 2.45-1.95 5.44 5.44 0 0 1 2.59-.65 5.82 5.82 0 0 1 2.49.48 4.48 4.48 0 0 1 1.64 1.33 5.64 5.64 0 0 1 .9 2 11.71 11.71 0 0 1 .27 2.7ZM183.33 34a4.26 4.26 0 0 0-.69-2.71 2.7 2.7 0 0 0-2.28-1 3 3 0 0 0-1.36.29 3 3 0 0 0-1 .79 3.56 3.56 0 0 0-.58 1.17 6 6 0 0 0-.24 1.44Zm4 1.17a1.59 1.59 0 0 1-.33 1.1 1.17 1.17 0 0 1-.91.36h-8.82a6.21 6.21 0 0 0 .22 1.68 3.25 3.25 0 0 0 .7 1.28 3 3 0 0 0 1.23.81 5.43 5.43 0 0 0 1.81.27 10.57 10.57 0 0 0 1.89-.15 13.13 13.13 0 0 0 1.4-.34l1-.34a1.7 1.7 0 0 1 .63-.16.49.49 0 0 1 .25.06.47.47 0 0 1 .16.2 1.67 1.67 0 0 1 .09.42 6.54 6.54 0 0 1 0 .67v.61a4 4 0 0 1-.05.43.81.81 0 0 1-.1.3 1.18 1.18 0 0 1-.17.24 2.06 2.06 0 0 1-.58.31 9.63 9.63 0 0 1-1.2.38 16.65 16.65 0 0 1-1.67.32 14.2 14.2 0 0 1-2 .14 10.43 10.43 0 0 1-3.38-.49 5.88 5.88 0 0 1-2.43-1.48 6.12 6.12 0 0 1-1.45-2.5 11.7 11.7 0 0 1-.48-3.54 11.38 11.38 0 0 1 .5-3.48 7.49 7.49 0 0 1 1.46-2.64 6.35 6.35 0 0 1 2.23-1.68 8.22 8.22 0 0 1 3.09-.56 8.06 8.06 0 0 1 3.11.53 5.68 5.68 0 0 1 2.12 1.49 6 6 0 0 1 1.22 2.25 10.14 10.14 0 0 1 .38 2.83ZM211.06 37.08a6.5 6.5 0 0 1-.61 2.91 6 6 0 0 1-1.68 2.09 7.16 7.16 0 0 1-2.44 1.26 11.21 11.21 0 0 1-5 .24 11.56 11.56 0 0 1-1.65-.43 7.11 7.11 0 0 1-1.19-.53 3.3 3.3 0 0 1-.69-.48 1.25 1.25 0 0 1-.3-.61 5.6 5.6 0 0 1-.09-1.15v-.84a2.3 2.3 0 0 1 .11-.56.62.62 0 0 1 .19-.3.48.48 0 0 1 .29-.09 1.36 1.36 0 0 1 .64.27 11.14 11.14 0 0 0 1.06.6 10.33 10.33 0 0 0 1.55.59 7.31 7.31 0 0 0 2.09.27 5 5 0 0 0 1.39-.19 3.05 3.05 0 0 0 1-.53 2.35 2.35 0 0 0 .66-.84 2.73 2.73 0 0 0 .22-1.12 2 2 0 0 0-.39-1.23 3.73 3.73 0 0 0-1-.91 9.91 9.91 0 0 0-1.42-.75l-1.64-.74a15.23 15.23 0 0 1-1.64-.88 6.75 6.75 0 0 1-1.41-1.18 5.68 5.68 0 0 1-1-1.63 6.66 6.66 0 0 1 .17-4.92 5.42 5.42 0 0 1 1.51-1.9 6.48 6.48 0 0 1 2.24-1.13 9.73 9.73 0 0 1 2.73-.37 10.56 10.56 0 0 1 1.49.11 10.72 10.72 0 0 1 1.4.31 7.92 7.92 0 0 1 1.15.44 2.55 2.55 0 0 1 .67.41 1.45 1.45 0 0 1 .22.27 1.54 1.54 0 0 1 .09.3 2.85 2.85 0 0 1 .06.47v1.51a3.15 3.15 0 0 1-.08.53.64.64 0 0 1-.16.31.39.39 0 0 1-.29.1 1.37 1.37 0 0 1-.56-.23c-.26-.15-.58-.31-1-.49a9.77 9.77 0 0 0-1.31-.49 5.71 5.71 0 0 0-1.64-.22 4 4 0 0 0-1.22.17 2.41 2.41 0 0 0-.87.47 1.85 1.85 0 0 0-.52.72 2.48 2.48 0 0 0-.17.9 2 2 0 0 0 .38 1.21 4 4 0 0 0 1 .91 12.35 12.35 0 0 0 1.46.75c.54.23 1.09.48 1.65.74a16.54 16.54 0 0 1 1.66.88 6.62 6.62 0 0 1 1.44 1.19 5.58 5.58 0 0 1 1 1.62 5.72 5.72 0 0 1 .39 2.2M224.65 35.6a11 11 0 0 0-.17-2 4.87 4.87 0 0 0-.58-1.57 2.91 2.91 0 0 0-1.08-1 3.44 3.44 0 0 0-1.69-.37 3.58 3.58 0 0 0-1.59.33 2.79 2.79 0 0 0-1.12 1 4.6 4.6 0 0 0-.66 1.54 8.56 8.56 0 0 0-.22 2.06 10.08 10.08 0 0 0 .18 2 4.87 4.87 0 0 0 .58 1.57 2.68 2.68 0 0 0 1.08 1 3.54 3.54 0 0 0 1.68.36 3.64 3.64 0 0 0 1.61-.33 2.88 2.88 0 0 0 1.12-1 4.59 4.59 0 0 0 .65-1.54 9.13 9.13 0 0 0 .21-2.06m4.2-.16a11.22 11.22 0 0 1-.48 3.38 7.14 7.14 0 0 1-1.48 2.63 6.56 6.56 0 0 1-2.48 1.71 9.34 9.34 0 0 1-3.49.6 9.47 9.47 0 0 1-3.36-.54 5.92 5.92 0 0 1-2.37-1.56 6.47 6.47 0 0 1-1.4-2.51 11.91 11.91 0 0 1-.45-3.42 11 11 0 0 1 .49-3.38 7.2 7.2 0 0 1 1.5-2.63 6.59 6.59 0 0 1 2.47-1.69 9.25 9.25 0 0 1 3.48-.6 9.8 9.8 0 0 1 3.38.52 6 6 0 0 1 2.36 1.55 6.7 6.7 0 0 1 1.39 2.52 11.93 11.93 0 0 1 .45 3.43M240.94 22.82a7.48 7.48 0 0 1 0 .75 1.36 1.36 0 0 1-.1.44.45.45 0 0 1-.14.21.3.3 0 0 1-.18.06.61.61 0 0 1-.25-.06l-.34-.12-.48-.12a3.13 3.13 0 0 0-.65-.06 2 2 0 0 0-.76.14 1.22 1.22 0 0 0-.52.44 2 2 0 0 0-.31.78 5.64 5.64 0 0 0-.1 1.18v1.33h2.65a.5.5 0 0 1 .26.08.59.59 0 0 1 .21.27 2.13 2.13 0 0 1 .12.51 6.07 6.07 0 0 1 0 .8 3.5 3.5 0 0 1-.16 1.27c-.11.26-.27.38-.47.38h-2.65v11.73a.43.43 0 0 1-.1.29.65.65 0 0 1-.32.2 2.2 2.2 0 0 1-.63.12 9.33 9.33 0 0 1-1 0 9 9 0 0 1-1 0 2.35 2.35 0 0 1-.64-.12.61.61 0 0 1-.32-.2.48.48 0 0 1-.09-.29V31.1h-1.82a.49.49 0 0 1-.46-.38 3.5 3.5 0 0 1-.16-1.27v-.8a2.13 2.13 0 0 1 .12-.51.57.57 0 0 1 .19-.27.55.55 0 0 1 .29-.08h1.8v-1.22a10.5 10.5 0 0 1 .4-2.62 4.66 4.66 0 0 1 .92-1.85 3.74 3.74 0 0 1 1.59-1.12 6.48 6.48 0 0 1 2.28-.37 6.61 6.61 0 0 1 1.2.11 5.74 5.74 0 0 1 .89.22 1.42 1.42 0 0 1 .44.23.91.91 0 0 1 .19.31 2.83 2.83 0 0 1 .1.52v.79M252.23 41.4a5.06 5.06 0 0 1-.09 1.1 1.31 1.31 0 0 1-.23.54 1.45 1.45 0 0 1-.43.27 3.31 3.31 0 0 1-.67.21 6.23 6.23 0 0 1-.83.14 6.7 6.7 0 0 1-.9.05 6.38 6.38 0 0 1-2.11-.31 3.44 3.44 0 0 1-1.47-1 3.83 3.83 0 0 1-.86-1.61 8.3 8.3 0 0 1-.28-2.31V31.1h-1.74c-.2 0-.36-.12-.47-.38a3.5 3.5 0 0 1-.16-1.27 6.07 6.07 0 0 1 0-.8 2.13 2.13 0 0 1 .12-.51.59.59 0 0 1 .21-.27.51.51 0 0 1 .28-.08h1.73v-3.23a.53.53 0 0 1 .09-.3.75.75 0 0 1 .32-.22 2.81 2.81 0 0 1 .64-.12 8.7 8.7 0 0 1 1 0 9.09 9.09 0 0 1 1 0 2.61 2.61 0 0 1 .62.12.86.86 0 0 1 .33.22.53.53 0 0 1 .09.3v3.23h3.15a.49.49 0 0 1 .28.08.59.59 0 0 1 .21.27 2.13 2.13 0 0 1 .12.51 6.07 6.07 0 0 1 0 .8 3.5 3.5 0 0 1-.16 1.27c-.11.26-.27.38-.47.38h-3.12v6.85a3.36 3.36 0 0 0 .38 1.78 1.43 1.43 0 0 0 1.33.59 3.39 3.39 0 0 0 .58 0 3.71 3.71 0 0 0 .46-.13l.35-.13a.61.61 0 0 1 .25-.06.32.32 0 0 1 .18.06.34.34 0 0 1 .14.22c0 .12.06.27.09.47a5 5 0 0 1 0 .74M277.47 28.31a2.69 2.69 0 0 1-.05.44q0 .26-.18.75l-3.86 13.11a1.64 1.64 0 0 1-.21.44.79.79 0 0 1-.4.27 2.62 2.62 0 0 1-.76.13h-2.59a3.3 3.3 0 0 1-.79-.13.86.86 0 0 1-.41-.27 1.32 1.32 0 0 1-.2-.43l-2.43-8.81v-.14.14l-2.26 8.8a1.19 1.19 0 0 1-.18.44.73.73 0 0 1-.42.27 2.93 2.93 0 0 1-.79.13H259.33a3.2 3.2 0 0 1-.77-.13 1 1 0 0 1-.42-.27 1.13 1.13 0 0 1-.19-.43l-3.83-13.11a6.22 6.22 0 0 1-.19-.74 2.74 2.74 0 0 1 0-.45.45.45 0 0 1 .09-.28.59.59 0 0 1 .32-.2 3.62 3.62 0 0 1 .64-.11h2.05a2.6 2.6 0 0 1 .63.12.61.61 0 0 1 .32.22 1.26 1.26 0 0 1 .14.33l2.87 10.64v.2-.2l2.7-10.64a.84.84 0 0 1 .15-.33.7.7 0 0 1 .32-.22 2.33 2.33 0 0 1 .59-.12h2a3 3 0 0 1 .59.12.66.66 0 0 1 .31.19.86.86 0 0 1 .13.29l2.89 10.72.05.18v-.2l2.76-10.64a.82.82 0 0 1 .13-.33.69.69 0 0 1 .33-.22 2.51 2.51 0 0 1 .61-.12h2a3.25 3.25 0 0 1 .6.11.57.57 0 0 1 .3.2.51.51 0 0 1 .08.28M287.22 36.68h-1.56a9.06 9.06 0 0 0-1.69.14 3.37 3.37 0 0 0-1.13.44 1.83 1.83 0 0 0-.65.71 2.18 2.18 0 0 0-.2 1 1.81 1.81 0 0 0 .58 1.43 2.27 2.27 0 0 0 1.6.52 3 3 0 0 0 1.58-.44 6.65 6.65 0 0 0 1.47-1.28Zm4 6.2a.43.43 0 0 1-.17.36 1.11 1.11 0 0 1-.51.19 8.39 8.39 0 0 1-1 0 8.49 8.49 0 0 1-1.06 0 .9.9 0 0 1-.47-.19.47.47 0 0 1-.14-.36v-1.15a6.54 6.54 0 0 1-2 1.49 5.87 5.87 0 0 1-2.54.54 7.15 7.15 0 0 1-2.12-.3 4.86 4.86 0 0 1-1.67-.89 4.1 4.1 0 0 1-1.09-1.47 5 5 0 0 1-.39-2.05 4.61 4.61 0 0 1 .49-2.2 4.14 4.14 0 0 1 1.48-1.55 7.67 7.67 0 0 1 2.44-.9 17.93 17.93 0 0 1 3.39-.29h1.42v-.88a4.68 4.68 0 0 0-.14-1.19 1.94 1.94 0 0 0-.46-.85 1.87 1.87 0 0 0-.84-.51 4.46 4.46 0 0 0-1.31-.16 6.7 6.7 0 0 0-1.82.23 10.55 10.55 0 0 0-1.42.5c-.41.18-.76.35-1 .5a1.43 1.43 0 0 1-.68.23.51.51 0 0 1-.31-.11.92.92 0 0 1-.23-.33 2.56 2.56 0 0 1-.14-.52 4.61 4.61 0 0 1-.05-.68 2.89 2.89 0 0 1 .09-.8 1.15 1.15 0 0 1 .3-.52 3.14 3.14 0 0 1 .8-.52 9 9 0 0 1 1.26-.55 12.24 12.24 0 0 1 1.66-.4 11.3 11.3 0 0 1 1.86-.15 11.11 11.11 0 0 1 2.91.33 4.87 4.87 0 0 1 2 1 4 4 0 0 1 1.14 1.78 8.28 8.28 0 0 1 .36 2.58ZM303.63 29.69v1a2.36 2.36 0 0 1-.1.58.57.57 0 0 1-.17.3.46.46 0 0 1-.27.08.88.88 0 0 1-.29-.06l-.36-.12c-.14 0-.29-.09-.45-.12a2.2 2.2 0 0 0-.53-.06 1.89 1.89 0 0 0-.69.14 2.71 2.71 0 0 0-.7.43 4.36 4.36 0 0 0-.76.78 11.91 11.91 0 0 0-.86 1.2v9a.48.48 0 0 1-.09.29.73.73 0 0 1-.34.2 2.19 2.19 0 0 1-.62.12 12.27 12.27 0 0 1-2 0 2.35 2.35 0 0 1-.63-.12.74.74 0 0 1-.33-.2.48.48 0 0 1-.1-.29v-14.5a.45.45 0 0 1 .09-.28.62.62 0 0 1 .29-.21 2.75 2.75 0 0 1 .54-.12h1.7a2.47 2.47 0 0 1 .53.12.63.63 0 0 1 .26.21.44.44 0 0 1 .08.28v1.81a11.37 11.37 0 0 1 1.07-1.34 5.75 5.75 0 0 1 1-.84 3 3 0 0 1 .91-.43 3.9 3.9 0 0 1 1.36-.1 4.88 4.88 0 0 1 .51.08 3.52 3.52 0 0 1 .45.13.85.85 0 0 1 .29.16.38.38 0 0 1 .12.17 1.25 1.25 0 0 1 .08.27 4.35 4.35 0 0 1 .05.51v.93M314.22 34a4.26 4.26 0 0 0-.69-2.71 2.67 2.67 0 0 0-2.28-1 3 3 0 0 0-1.35.29 2.76 2.76 0 0 0-1 .79 3.56 3.56 0 0 0-.58 1.17 5.56 5.56 0 0 0-.24 1.44Zm4 1.17a1.59 1.59 0 0 1-.33 1.1 1.19 1.19 0 0 1-.92.36h-8.81a5.84 5.84 0 0 0 .22 1.68 3.25 3.25 0 0 0 .7 1.28 3 3 0 0 0 1.23.81 5.39 5.39 0 0 0 1.81.27 10.45 10.45 0 0 0 1.88-.15 13.37 13.37 0 0 0 1.41-.34l1-.34a1.7 1.7 0 0 1 .63-.16.43.43 0 0 1 .24.06.49.49 0 0 1 .17.2 1.67 1.67 0 0 1 .09.42v.67a5.54 5.54 0 0 1 0 .61 4.23 4.23 0 0 1 0 .43 1.5 1.5 0 0 1-.1.3 1.18 1.18 0 0 1-.17.24 2.23 2.23 0 0 1-.58.31 9.63 9.63 0 0 1-1.2.38c-.49.12-1 .23-1.67.32a14.2 14.2 0 0 1-2 .14 10.54 10.54 0 0 1-3.39-.49 5.85 5.85 0 0 1-2.42-1.48 6 6 0 0 1-1.45-2.5 11.7 11.7 0 0 1-.48-3.54 11.08 11.08 0 0 1 .5-3.48 7.34 7.34 0 0 1 1.46-2.64 6.35 6.35 0 0 1 2.22-1.68 8.14 8.14 0 0 1 3.09-.56 8.06 8.06 0 0 1 3.11.53 5.76 5.76 0 0 1 2.12 1.49 6 6 0 0 1 1.21 2.25 9.78 9.78 0 0 1 .39 2.83Z" fill="#ffffff" />
                  <path d="M38.09 43.31a12.19 12.19 0 1 1 12.17-12.19 12.2 12.2 0 0 1-12.17 12.19M30.33 0a30.35 30.35 0 1 0 30.29 30.35A30.33 30.33 0 0 0 30.33 0" fill="#f4b223"/>
                  <path d="M38.09 21.07a10.05 10.05 0 1 0 10 10.05 10 10 0 0 0-10-10.05" fill="#f4b223" />
                </svg>`,
          info: "Neptune Software is a rapid application development platform vendor with more than 730 enterprise customers and over 4 million licensed end users globally that empowers IT departments to deliver tangible business outcomes. Neptune Software offers with its Neptune DXP, a leading low-code, SAP-centric, enterprise app development platform to digitize and optimize business processes and user interfaces – at scale and with ease. Neptune DXP provides a fast and cost-effective way to industrialize the development of custom applications - saving companies time and money on development, integration, and operations.",
          website: "https://www.neptune-software.com",
          twitter: "https://twitter.com/neptsoft",
          linkedin: "https://www.linkedin.com/company/neptune-software/",
          package: "diamond"
        }
        // ,
        // {
        //   name: "Uniorg",
        //   logo:  `<svg class="ui5con-sponsor-logo" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 122.03" xml:space="preserve" aria-hidden="true">
        //             <path d="M72.94 11.87h30.03V69.9c0 5.76-.9 11.19-2.69 16.3-1.8 5.11-4.61 9.58-8.44 13.41-3.83 3.83-7.85 6.51-12.06 8.07-5.85 2.17-12.87 3.25-21.06 3.25-4.74 0-9.91-.33-15.52-.99-5.6-.66-10.29-1.98-14.05-3.95-3.77-1.97-7.21-4.77-10.33-8.4-3.12-3.63-5.26-7.37-6.41-11.22-1.86-6.2-2.79-11.69-2.79-16.47V11.87h30.03v59.41c0 5.31 1.47 9.46 4.42 12.45 2.95 2.99 7.03 4.48 12.26 4.48 5.18 0 9.25-1.47 12.19-4.42 2.95-2.94 4.42-7.11 4.42-12.51V11.87zM123.11 11.87h28.11l36.68 53.89V11.87h28.37v97.4H187.9l-36.48-53.48v53.48h-28.3v-97.4zM237.46 11.87h30.16v97.4h-30.16v-97.4zM281.35 60.64c0-15.9 4.43-28.28 13.29-37.14s21.2-13.29 37.01-13.29c16.21 0 28.7 4.35 37.47 13.06 8.77 8.7 13.16 20.9 13.16 36.58 0 11.39-1.91 20.72-5.75 28.01s-9.37 12.95-16.61 17.01c-7.24 4.05-16.27 6.08-27.08 6.08-10.99 0-20.08-1.75-27.27-5.25-7.2-3.5-13.04-9.04-17.51-16.61-4.48-7.59-6.71-17.07-6.71-28.45zm30.09.13c0 9.83 1.83 16.9 5.48 21.19 3.66 4.3 8.63 6.45 14.92 6.45 6.47 0 11.47-2.1 15.02-6.31 3.54-4.21 5.31-11.76 5.31-22.66 0-9.17-1.85-15.87-5.55-20.1-3.7-4.23-8.72-6.35-15.05-6.35-6.07 0-10.94 2.15-14.62 6.44-3.67 4.31-5.51 11.42-5.51 21.34zM394.8 109.27v-97.4h50.16c9.3 0 16.41.8 21.33 2.39s8.88 4.55 11.89 8.87c3.01 4.32 4.52 9.58 4.52 15.78 0 5.41-1.15 10.07-3.46 13.99s-5.47 7.1-9.51 9.54c-2.57 1.55-6.09 2.83-10.57 3.85 3.58 1.2 6.2 2.4 7.84 3.59 1.11.8 2.71 2.51 4.81 5.12 2.1 2.62 3.51 4.63 4.22 6.05l14.57 28.23h-34l-16.09-29.77c-2.04-3.85-3.85-6.36-5.45-7.51-2.17-1.51-4.63-2.26-7.38-2.26h-2.66v39.54H394.8zm30.23-57.93h12.69c1.37 0 4.03-.44 7.97-1.33 1.99-.4 3.62-1.42 4.88-3.06 1.26-1.64 1.89-3.52 1.89-5.65 0-3.14-.99-5.56-2.99-7.24-1.99-1.68-5.74-2.52-11.23-2.52h-13.22v19.8zM545.26 73.99V53.73h46.51v41.52c-8.9 6.07-16.78 10.2-23.62 12.39-6.85 2.19-14.96 3.29-24.35 3.29-11.56 0-20.99-1.97-28.27-5.91-7.29-3.94-12.94-9.81-16.94-17.61-4.01-7.8-6.01-16.74-6.01-26.84 0-10.63 2.19-19.88 6.58-27.74 4.38-7.86 10.8-13.83 19.26-17.91 6.6-3.15 15.48-4.72 26.65-4.72 10.76 0 18.82.98 24.15 2.92 5.34 1.95 9.77 4.97 13.29 9.07 3.52 4.1 6.17 9.29 7.94 15.58l-29.03 5.18c-1.2-3.68-3.22-6.49-6.08-8.44-2.86-1.95-6.5-2.92-10.93-2.92-6.6 0-11.86 2.29-15.78 6.87-3.92 4.59-5.88 11.84-5.88 21.76 0 10.54 1.98 18.07 5.95 22.59 3.96 4.52 9.49 6.78 16.57 6.78 3.37 0 6.58-.49 9.64-1.46 3.06-.97 6.55-2.64 10.5-4.98v-9.17h-20.15z" fill="#ffffff"/>
        //           </svg>`,
        //   info: "TBA",
        //   website: "https://www.uniorg.de/",
        //   linkedin: "https://www.linkedin.com/company/uniorg-group/",
        //   package: "platinum"
        // }
        ,
        {
          name: "Amista",
          logo:  `<svg class="ui5con-sponsor-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148.23 20" aria-hidden="true">
            <path d="M69.35.69h-4v18.6h4V.69zM11.16 7.11l2.29 5.13H9.11l-1.32 3.32h6.95L16.53 20h3.82L13.02 2.47l-1.86 4.64zm30.04 6.15L34.29.69h-3.47v18.6h3.39V7.04l5.34 10.44h3.29l5.37-10.46V19.3h3.39V.69h-3.47L41.2 13.26zM8.01 0 0 20h3.48l7.97-20H8.01zm132.21 0h-3.46l7.98 20h3.48l-8-20zm-44.9 10.57c-.55-.47-1.29-.91-2.22-1.32-.91-.4-2.06-.8-3.4-1.19-.74-.2-1.35-.4-1.82-.6-.46-.2-.83-.41-1.11-.63-.26-.21-.45-.42-.54-.62-.11-.2-.15-.4-.15-.61 0-.53.21-.94.65-1.26.46-.34 1.11-.51 1.92-.51.33 0 .76.04 1.28.12.52.08 1.07.2 1.65.34.56.14 1.14.33 1.72.55.57.22 1.09.48 1.55.76l.28.18 1.61-3.21-.2-.15a9.83 9.83 0 0 0-1.96-1.14c-.69-.29-1.4-.54-2.12-.72-.71-.18-1.41-.31-2.07-.39-.67-.08-1.28-.13-1.82-.13-1.06 0-2.01.14-2.85.44-.85.28-1.56.68-2.14 1.19-.59.51-1.02 1.11-1.32 1.78-.29.67-.44 1.39-.44 2.14 0 .64.09 1.26.29 1.83.2.6.59 1.18 1.16 1.7.57.53 1.35 1.02 2.34 1.48.98.46 2.27.88 3.84 1.27.6.14 1.13.28 1.58.41.42.12.76.27 1.02.44.24.15.42.34.53.55.12.21.18.48.18.8 0 .62-.21 1.11-.63 1.51-.42.4-1.19.6-2.27.6-.96 0-2.05-.18-3.23-.53-1.19-.35-2.42-.91-3.67-1.66l-.27-.16-1.73 3.2.21.15c1.31.95 2.73 1.66 4.21 2.1 1.48.45 2.96.67 4.4.67 1.07 0 2.05-.13 2.92-.4.87-.27 1.62-.66 2.25-1.15a5.3 5.3 0 0 0 1.46-1.86c.34-.73.51-1.56.51-2.48 0-.69-.12-1.34-.35-1.9-.23-.58-.65-1.11-1.21-1.59h-.02zm39.46 1.67 2.29-5.13-1.86-4.64L127.87 20h3.82l1.79-4.44h6.95l-1.32-3.32h-4.34zm-28.69-8.16h6.37V19.6h3.99V4.08h6.28V.4h-16.64v3.68z" fill="#ffffff"/>
          </svg>`,
          info: "Amista is an IT consulting company with an edge. We provide market-leading business solutions by using SAP technology. We are known for our expertise in innovation, customer experience and digital learning. Amista was founded in 2014 in Antwerp. Today, our team consists of over a 100 SAP rebels spread over Belgium, India and Hungary. As a challenger in the Belgian market, our purpose is to help companies innovate and grow. We turn business challenges into opportunities, technology into value and customers into advocates. We aim to maximize the business value of SAP investments. Everything we do is 100% SAP focused. Challenge accepted!",
          website: "https://www.amista.be/",
          linkedin: "https://www.linkedin.com/company/amista/",
          package: "gold"
        }

      ]
    };
  },
});
