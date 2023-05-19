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
          instagram: "https://www.instagram.com/neptunesoftware/",
          package: "diamond"
        }
        ,
        {
          name: "Uniorg",
          logo:  `<svg class="ui5con-sponsor-logo" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 122.03" xml:space="preserve" aria-hidden="true">
                    <path d="M72.94 11.87h30.03V69.9c0 5.76-.9 11.19-2.69 16.3-1.8 5.11-4.61 9.58-8.44 13.41-3.83 3.83-7.85 6.51-12.06 8.07-5.85 2.17-12.87 3.25-21.06 3.25-4.74 0-9.91-.33-15.52-.99-5.6-.66-10.29-1.98-14.05-3.95-3.77-1.97-7.21-4.77-10.33-8.4-3.12-3.63-5.26-7.37-6.41-11.22-1.86-6.2-2.79-11.69-2.79-16.47V11.87h30.03v59.41c0 5.31 1.47 9.46 4.42 12.45 2.95 2.99 7.03 4.48 12.26 4.48 5.18 0 9.25-1.47 12.19-4.42 2.95-2.94 4.42-7.11 4.42-12.51V11.87zM123.11 11.87h28.11l36.68 53.89V11.87h28.37v97.4H187.9l-36.48-53.48v53.48h-28.3v-97.4zM237.46 11.87h30.16v97.4h-30.16v-97.4zM281.35 60.64c0-15.9 4.43-28.28 13.29-37.14s21.2-13.29 37.01-13.29c16.21 0 28.7 4.35 37.47 13.06 8.77 8.7 13.16 20.9 13.16 36.58 0 11.39-1.91 20.72-5.75 28.01s-9.37 12.95-16.61 17.01c-7.24 4.05-16.27 6.08-27.08 6.08-10.99 0-20.08-1.75-27.27-5.25-7.2-3.5-13.04-9.04-17.51-16.61-4.48-7.59-6.71-17.07-6.71-28.45zm30.09.13c0 9.83 1.83 16.9 5.48 21.19 3.66 4.3 8.63 6.45 14.92 6.45 6.47 0 11.47-2.1 15.02-6.31 3.54-4.21 5.31-11.76 5.31-22.66 0-9.17-1.85-15.87-5.55-20.1-3.7-4.23-8.72-6.35-15.05-6.35-6.07 0-10.94 2.15-14.62 6.44-3.67 4.31-5.51 11.42-5.51 21.34zM394.8 109.27v-97.4h50.16c9.3 0 16.41.8 21.33 2.39s8.88 4.55 11.89 8.87c3.01 4.32 4.52 9.58 4.52 15.78 0 5.41-1.15 10.07-3.46 13.99s-5.47 7.1-9.51 9.54c-2.57 1.55-6.09 2.83-10.57 3.85 3.58 1.2 6.2 2.4 7.84 3.59 1.11.8 2.71 2.51 4.81 5.12 2.1 2.62 3.51 4.63 4.22 6.05l14.57 28.23h-34l-16.09-29.77c-2.04-3.85-3.85-6.36-5.45-7.51-2.17-1.51-4.63-2.26-7.38-2.26h-2.66v39.54H394.8zm30.23-57.93h12.69c1.37 0 4.03-.44 7.97-1.33 1.99-.4 3.62-1.42 4.88-3.06 1.26-1.64 1.89-3.52 1.89-5.65 0-3.14-.99-5.56-2.99-7.24-1.99-1.68-5.74-2.52-11.23-2.52h-13.22v19.8zM545.26 73.99V53.73h46.51v41.52c-8.9 6.07-16.78 10.2-23.62 12.39-6.85 2.19-14.96 3.29-24.35 3.29-11.56 0-20.99-1.97-28.27-5.91-7.29-3.94-12.94-9.81-16.94-17.61-4.01-7.8-6.01-16.74-6.01-26.84 0-10.63 2.19-19.88 6.58-27.74 4.38-7.86 10.8-13.83 19.26-17.91 6.6-3.15 15.48-4.72 26.65-4.72 10.76 0 18.82.98 24.15 2.92 5.34 1.95 9.77 4.97 13.29 9.07 3.52 4.1 6.17 9.29 7.94 15.58l-29.03 5.18c-1.2-3.68-3.22-6.49-6.08-8.44-2.86-1.95-6.5-2.92-10.93-2.92-6.6 0-11.86 2.29-15.78 6.87-3.92 4.59-5.88 11.84-5.88 21.76 0 10.54 1.98 18.07 5.95 22.59 3.96 4.52 9.49 6.78 16.57 6.78 3.37 0 6.58-.49 9.64-1.46 3.06-.97 6.55-2.64 10.5-4.98v-9.17h-20.15z" fill="#ffffff"/>
                  </svg>`,
          info: "UNIORG: Consulting with passion.<br> At UNIORG, we are passionate about providing top-notch SAP consulting services that focus on strategy, structure, integration and development. Our innovative solutions are fuelled by our positive energy and commitment to excellence, which ensures you always get the best from us. We take pride in helping our customers achieve sustainable business growth, with a goal of ensuring their success every step of the way.With SAP BTP at your disposal, you can expand existing processes or explore new avenues tailored specifically for your needs - be it cloud-based systems or hybrid ones. At UNIORG we work tirelessly to ensure that all aspects of planning through implementation are taken care off to guarantee maximum benefit for businesses who choose us. Join hands with us today and experience what true passion-driven consultancy feels like!",
          website: "https://www.uniorg.de/",
          linkedin: "https://www.linkedin.com/company/uniorg-group/",
          facebook: "https://www.facebook.com/UNIORGGroup/",
          package: "platinum"
        }
        ,
        {
          name: "j&s-soft GmbH",
          logo:  `<svg class="ui5con-sponsor-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 377.953 119.176" aria-hidden="true">
                    <defs>
                      <clipPath clipPathUnits="userSpaceOnUse" id="a">
                        <path d="M.015 89.37h283.45V0H.015Z"/>
                      </clipPath>
                      <clipPath clipPathUnits="userSpaceOnUse" id="b">
                        <path d="M.015 89.37h283.45V0H.015Z"/>
                      </clipPath>
                    </defs>
                    <path d="M19.125 96.601h2.987l6.53 14.439 5.315-14.439h4.067l5.319 14.439 6.53-14.439h2.986l-7.615 16.735H41.34l-5.348-14.435-5.348 14.435H26.74l-7.615-16.735M53.297 96.601h2.987l6.53 14.439 5.317-14.439h4.065l5.317 14.439 6.532-14.439h2.986l-7.615 16.735h-3.904l-5.35-14.435-5.346 14.435h-3.905l-7.614-16.735M87.47 96.601h2.986l6.53 14.439 5.317-14.439h4.068l5.314 14.439 6.531-14.439h2.985l-7.613 16.735h-3.904l-5.348-14.435-5.348 14.435h-3.905l-7.614-16.735M127.484 113.337h3.674v-4.067h-3.674ZM140.27 89.579h2.825v3.086h-2.824Zm-2.755 27.301c2.198 0 2.756-.36 2.756-2.035V96.604h2.824v18.67c0 2.362-1.576 3.902-4.463 3.902h-1.117v-2.296M148.173 107.561h2.626v.82c0 2.067 1.084 2.92 3.969 2.92h6.04c4.23 0 5.577-.164 5.577-2.658v-.129c0-1.61-.46-2.493-3.838-2.493h-8.696c-3.971 0-5.447-1.281-5.447-4.464v-.985c0-2.723 1.543-4.23 8.497-4.23h4.331c6.368 0 7.253 1.834 7.253 4.198v.883h-2.625v-.16c0-2.562-1.705-2.627-4.792-2.627h-4.92c-4.035 0-4.924.393-4.924 2.297v.624c0 1.376.461 2.166 3.413 2.166h7.451c4.23 0 7.12.426 7.12 4.954v.067c0 4.69-4.333 4.856-7.78 4.856h-5.181c-4.17 0-8.074 0-8.074-5.022v-1.017M173.919 105.952h9.185v-2.623h-9.185zM187.821 107.561h2.628v.82c0 2.067 1.082 2.92 3.968 2.92h6.039c4.23 0 5.576-.164 5.576-2.658v-.129c0-1.61-.46-2.493-3.836-2.493h-8.697c-3.97 0-5.447-1.281-5.447-4.464v-.985c0-2.723 1.543-4.23 8.5-4.23h4.328c6.368 0 7.252 1.834 7.252 4.198v.883h-2.623v-.16c0-2.562-1.706-2.627-4.792-2.627h-4.921c-4.035 0-4.924.393-4.924 2.297v.624c0 1.376.463 2.166 3.416 2.166h7.448c4.23 0 7.12.426 7.12 4.954v.067c0 4.69-4.332 4.856-7.779 4.856h-5.181c-4.17 0-8.075 0-8.075-5.022v-1.017M232.697 103.296c0-3.905-2.297-4.659-5.578-4.659h-5.743c-3.279 0-5.579.754-5.579 4.659v3.346c0 3.905 2.3 4.66 5.579 4.66h5.743c3.281 0 5.578-.755 5.578-4.66zm-19.721-.165c0-5.511 3.905-6.791 9.255-6.791h4.033c5.35 0 9.253 1.28 9.253 6.79v3.676c0 5.515-3.904 6.793-9.253 6.793h-4.033c-5.35 0-9.255-1.278-9.255-6.793v-3.675M242.167 98.9h-3.643v-2.299h3.643v-1.476c0-3.97 2.426-5.546 5.512-5.546h5.281v2.298h-5.052c-2.101 0-2.921 1.182-2.921 2.659v2.065h7.973V98.9h-7.973v14.436h-2.82V98.9M257.973 98.9h-3.677v-2.299h3.677v-3.969h2.82v3.97h11.191V98.9h-11.19v8.332c0 3.119 1.085 4.068 4.169 4.068h.882c3.74 0 4.335-.785 4.335-4.296v-1.248h2.295v1.838c0 3.348-.328 6.006-6.431 6.006h-1.543c-5.281 0-6.528-2.56-6.528-5.283V98.9M279.324 113.337h3.673v-4.067h-3.673zM290.961 103.099c0-6.072 4.268-6.759 8.402-6.759h4.722c5.251 0 7.32 2.132 7.32 5.676v.459h-2.624v-.395c0-2.787-1.84-3.445-4.658-3.445h-5.188c-2.655 0-5.148.394-5.148 4.564v3.508c0 3.742 2.294 4.594 5.706 4.594h4.758c2.625 0 4.824-.787 4.824-3.51v-.558h2.625v.49c0 4.236-2.1 5.877-7.35 5.877h-6.366c-2.528 0-7.023-.69-7.023-6.762v-3.74M335.179 103.296c0-3.905-2.298-4.659-5.579-4.659h-5.741c-3.283 0-5.578.754-5.578 4.659v3.346c0 3.905 2.295 4.66 5.578 4.66h5.741c3.281 0 5.579-.755 5.579-4.66zm-19.723-.165c0-5.511 3.907-6.791 9.256-6.791h4.033c5.35 0 9.255 1.28 9.255 6.79v3.676c0 5.515-3.905 6.793-9.255 6.793h-4.033c-5.35 0-9.256-1.278-9.256-6.793v-3.675M342.745 96.601h2.623v1.971h.068c1.18-1.741 2.788-2.232 5.61-2.232h4.56c2.56 0 4.53 1.016 5.413 3.084 1.05-2.265 3.317-3.084 6.204-3.084h3.41c4.528 0 7.32 1.967 7.32 5.775v11.221h-2.822v-10.893c0-1.936-.854-3.808-5.348-3.808h-2.003c-5.085 0-5.773 2.101-5.773 4.793v9.908h-2.824v-10.137c0-3.25-1.016-4.564-5.514-4.564h-2.821c-3.608 0-5.283 1.51-5.283 4.2v10.501h-2.82V96.601M19.125 80.212h358.828M19.125 81.157h358.828v-1.89H19.125Z" fill="#ffffff"/>
                    <g clip-path="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 119.176)">
                      <path d="M0 28.491h2.295c5.94 0 9.18 3.175 9.18 8.034v38.412H5.67V37.4c0-3.439-1.149-4.183-5.67-4.183Zm5.67 54.545h5.804v6.345H5.67Z" fill="#ffffff"/>
                    </g>
                    <path d="m61.227 65.445 1.534-2.844-6.221-2.956c.128-.688.212-1.377.212-1.992V51.78h-3.917v6.216L29.057 46.668c-1.449-.687-1.492-1.532-1.492-3.336 0-1.804.682-2.92 3.964-2.92h13.846c2.261 0 4.052.81 4.052 3.381v2.067h3.921v-2.3c0-3.797-2.048-6.219-8.015-6.219H30.295c-4.051 0-6.904 1.615-6.904 5.61 0 3.948.553 4.332 3.364 5.985v.077c-6.094 0-7.543 2.494-7.543 7.602 0 6.37 2.263 9.134 11.168 9.134h14.91c4.177 0 8.267-.382 10.187-2.994zm-9.586-4.34c-.469 1.154-2.898 1.575-6.905 1.575H30.464c-6.135 0-7.073-1.995-7.073-5.184v-1.879c0-4.454 3.964-4.834 5.068-4.834h1.278l21.904 10.322M316.544 56.259v2.581h4.476v.637c0 3.366-.996 3.436-4.241 3.436-3.787 0-4.355-.377-4.402-4.1v-4.07c.047-3.435.431-4.052 4.402-4.052 2.964 0 4.241-.022 4.241 2.582h3.383c.118-5.705-3.284-5.489-7.624-5.489-5.49 0-7.804 1.039-7.804 6.959v4.07c0 6.012 2.126 7.011 7.804 7.011 6.325 0 7.646-1.088 7.646-6.347V56.26zm10.323-3.007v12.427h2.981v-7.006c0-2.204.477-3.294 2.89-3.294 1.634 0 2.013.617 2.086 2.178v8.122h2.983v-7.006c0-2.204.47-3.294 2.888-3.294 1.63 0 2.012.617 2.081 2.178v8.122h2.983v-8.402c0-3.052-1.063-4.165-4.284-4.165-1.66 0-3.363.47-3.932 2.196h-.09c-.334-1.795-2.13-2.196-3.694-2.196-1.566 0-3.248.355-3.911 1.936h-.096v-1.796Zm27.724 2.127c2.057 0 2.648.594 2.648 3.722 0 2.819.077 4.455-2.648 4.455-3.058 0-2.984-1.496-2.984-4.455 0-2.653.4-3.722 2.984-3.722m-5.966 10.3h2.982l-.12-1.866h.096c.758 1.632 2.133 2.011 3.884 2.011 4.613 0 4.756-2.91 4.756-6.723 0-3.649-.494-5.989-4.756-5.989-1.516 0-3.104.285-3.743 1.793h-.117v-6.977h-2.982Zm29.327-17.751h-3.404v7.27h-8.263v-7.27h-3.409v17.75h3.41v-7.575h8.262v7.576h3.404V47.928" fill="#ffffff"/>
                    <g clip-path="url(#b)" transform="matrix(1.33333 0 0 -1.33333 0 119.176)">
                      <path d="M47.935 50.296c0-10.329 8.034-10.329 16.609-10.329h10.663c7.088 0 15.998.336 15.998 9.993v.132c0 9.317-5.939 10.196-14.648 10.196H61.234c-6.076 0-7.019 1.617-7.019 4.454v1.282c0 3.913 1.822 4.723 10.125 4.723h10.126c6.342 0 9.854-.134 9.854-5.398v-.338h5.398v1.825c0 4.857-1.822 8.64-14.914 8.64h-8.911c-14.311 0-17.485-3.106-17.485-8.71v-2.024c0-6.55 3.039-9.18 11.208-9.18h17.886c6.951 0 7.899-1.826 7.899-5.131v-.27c0-5.131-2.768-5.467-11.477-5.467h-12.42c-5.939 0-8.168 1.756-8.168 6.006v1.687h-5.401Zm47.253 5.402h18.901v5.399H95.188Zm24.231-5.402c0-10.329 8.031-10.329 16.607-10.329h10.663c7.088 0 15.998.336 15.998 9.993v.132c0 9.317-5.938 10.196-14.648 10.196h-15.322c-6.075 0-7.02 1.617-7.02 4.454v1.282c0 3.913 1.822 4.723 10.126 4.723h10.124c6.347 0 9.856-.134 9.856-5.398v-.338h5.399v1.825c0 4.857-1.82 8.64-14.917 8.64h-8.91c-14.311 0-17.483-3.106-17.483-8.71v-2.024c0-6.55 3.037-9.18 11.205-9.18h17.89c6.95 0 7.896-1.826 7.896-5.131v-.27c0-5.131-2.765-5.467-11.477-5.467h-12.417c-5.943 0-8.169 1.756-8.169 6.006v1.687h-5.401zm47.385 3.646c0-11.343 8.035-13.975 19.038-13.975h8.301c11.007 0 19.038 2.632 19.038 13.975v7.561c0 11.337-8.031 13.973-19.038 13.973h-8.301c-11.003 0-19.038-2.636-19.038-13.973zm40.573.336c0-8.033-4.722-9.584-11.478-9.584h-11.812c-6.751 0-11.475 1.551-11.475 9.584v6.887c0 8.032 4.724 9.582 11.475 9.582h11.812c6.756 0 11.478-1.55 11.478-9.582zm14.446-13.772h5.805v29.702h16.403v4.726h-16.403v4.253c0 3.038 1.686 5.468 6.009 5.468h10.394v4.724h-10.869c-6.342 0-11.339-3.239-11.339-11.407v-3.038h-7.492v-4.726h7.492V40.506" fill="#ffffff"/>
                    </g>
                    <path d="M347.261 25.565h30.691v-6.298h-30.69V8.375h-7.737v10.892h-10.084v6.298h10.084v22.363h7.736" fill="#ffffff"/>
                  </svg>`,
          info: "We at j&s-soft are always interested in the latest technologies. ODataV2, ODataV4, CAP PostgreSQL, Flexible Programming Model for OData V4 - we try out everything. As a young, agile team, we are eager to discover the possibilities of new solutions. As a seasoned company, which is what j&s-soft is with 20 years on the market, we take the freedom to push the tools to their limits. Utilizing technology for thinking ahead is our credo. Our customers benefit from this. We look forward to meeting colleagues at UI5con and reCAP who tick just like us.",
          website: "https://www.js-soft.com/",
          linkedin: "https://de.linkedin.com/company/js-soft",
          twitter: "https://twitter.com/JS_Soft_GmbH",
          facebook: "https://www.facebook.com/jssoftgmbh",
          instagram: "https://www.instagram.com/js_soft_gmbh/",
          package: "gold"
        }
        ,
        {
          name: "Amista",
          logo:  `<svg class="ui5con-sponsor-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148.23 20" aria-hidden="true">
            <path d="M69.35.69h-4v18.6h4V.69zM11.16 7.11l2.29 5.13H9.11l-1.32 3.32h6.95L16.53 20h3.82L13.02 2.47l-1.86 4.64zm30.04 6.15L34.29.69h-3.47v18.6h3.39V7.04l5.34 10.44h3.29l5.37-10.46V19.3h3.39V.69h-3.47L41.2 13.26zM8.01 0 0 20h3.48l7.97-20H8.01zm132.21 0h-3.46l7.98 20h3.48l-8-20zm-44.9 10.57c-.55-.47-1.29-.91-2.22-1.32-.91-.4-2.06-.8-3.4-1.19-.74-.2-1.35-.4-1.82-.6-.46-.2-.83-.41-1.11-.63-.26-.21-.45-.42-.54-.62-.11-.2-.15-.4-.15-.61 0-.53.21-.94.65-1.26.46-.34 1.11-.51 1.92-.51.33 0 .76.04 1.28.12.52.08 1.07.2 1.65.34.56.14 1.14.33 1.72.55.57.22 1.09.48 1.55.76l.28.18 1.61-3.21-.2-.15a9.83 9.83 0 0 0-1.96-1.14c-.69-.29-1.4-.54-2.12-.72-.71-.18-1.41-.31-2.07-.39-.67-.08-1.28-.13-1.82-.13-1.06 0-2.01.14-2.85.44-.85.28-1.56.68-2.14 1.19-.59.51-1.02 1.11-1.32 1.78-.29.67-.44 1.39-.44 2.14 0 .64.09 1.26.29 1.83.2.6.59 1.18 1.16 1.7.57.53 1.35 1.02 2.34 1.48.98.46 2.27.88 3.84 1.27.6.14 1.13.28 1.58.41.42.12.76.27 1.02.44.24.15.42.34.53.55.12.21.18.48.18.8 0 .62-.21 1.11-.63 1.51-.42.4-1.19.6-2.27.6-.96 0-2.05-.18-3.23-.53-1.19-.35-2.42-.91-3.67-1.66l-.27-.16-1.73 3.2.21.15c1.31.95 2.73 1.66 4.21 2.1 1.48.45 2.96.67 4.4.67 1.07 0 2.05-.13 2.92-.4.87-.27 1.62-.66 2.25-1.15a5.3 5.3 0 0 0 1.46-1.86c.34-.73.51-1.56.51-2.48 0-.69-.12-1.34-.35-1.9-.23-.58-.65-1.11-1.21-1.59h-.02zm39.46 1.67 2.29-5.13-1.86-4.64L127.87 20h3.82l1.79-4.44h6.95l-1.32-3.32h-4.34zm-28.69-8.16h6.37V19.6h3.99V4.08h6.28V.4h-16.64v3.68z" fill="#ffffff"/>
          </svg>`,
          info: "Amista is an IT consulting company with an edge. We provide market-leading business solutions by using SAP technology. We are known for our expertise in innovation, customer experience and digital learning. Amista was founded in 2014 in Antwerp. Today, our team consists of over a 100 SAP rebels spread over Belgium, India and Hungary. As a challenger in the Belgian market, our purpose is to help companies innovate and grow. We turn business challenges into opportunities, technology into value and customers into advocates. We aim to maximize the business value of SAP investments. Everything we do is 100% SAP focused. Challenge accepted!",
          website: "https://www.amista.be/",
          linkedin: "https://www.linkedin.com/company/amista/",
          instagram: "https://www.instagram.com/amista_nv/",
          package: "gold"
        }
        ,
        {
          name: "Advades",
          logo:  `<svg  class="ui5con-sponsor-logo"  aria-hidden="true" viewBox="0 0 158 33" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">
                    <path d="M137.32 22.59c0 4.07 3.09 6.35 8.06 6.35 4.36 0 7.91-1.49 7.91-5.63 0-3.41-2.54-4.21-5.63-5.15-2.98-.91-4.46-1.2-4.46-2.47 0-1.05.94-1.56 2.07-1.56 1.52 0 2.29.83 2.29 2.29h5.48c0-3.34-2.47-5.92-7.55-5.92-4.72 0-7.73 1.71-7.73 5.33 0 3.38 2.54 4.14 5.41 5.12 3.3 1.13 4.68 1.27 4.68 2.61 0 1.16-.94 1.63-2.29 1.63-1.63 0-2.79-.73-2.79-2.58l-5.45-.02Zm-11.65-8.17c2.1 0 3.59 1.34 3.59 3.59H122c0-2.35 1.56-3.59 3.67-3.59m3.37 8.53c-.4 1.13-1.31 2-3.23 2-2.83 0-3.81-1.78-3.81-3.88h12.52c.18-1.05.18-1.85.18-2.58 0-4.28-3.52-7.98-9-7.98-6.06 0-9.29 4.1-9.29 9.22 0 5.15 3.3 9.22 9.44 9.22 5.01 0 8.06-2.69 8.64-5.99h-5.45v-.01Zm-21.78-9.47c-.83-1.6-3.08-2.94-5.33-2.94-5.04 0-8.53 3.96-8.53 9.18 0 5.23 3.48 9.18 8.53 9.18 2.25 0 4.5-1.31 5.33-2.9v2.47h5.55V3.06h-5.55v10.42Zm-4.17 10.7c-2.5 0-4.17-2.03-4.17-4.46 0-2.4 1.67-4.46 4.17-4.46 2.51 0 4.17 2.07 4.17 4.46 0 2.43-1.66 4.46-4.17 4.46m-18.87-10.7c-.83-1.6-3.08-2.94-5.34-2.94-5.04 0-8.53 3.96-8.53 9.18 0 5.23 3.48 9.18 8.53 9.18 2.25 0 4.5-1.31 5.34-2.9v2.47h5.55v-17.5h-5.55v2.51Zm-4.18 10.7c-2.5 0-4.17-2.03-4.17-4.46 0-2.4 1.67-4.46 4.17-4.46s4.17 2.07 4.17 4.46c.01 2.43-1.66 4.46-4.17 4.46M49.92 10.97l7.8 17.49h4.43l7.91-17.49h-5.81l-4.28 11-4.25-11h-5.8Zm-8.38 2.51c-.83-1.6-3.08-2.94-5.33-2.94-5.05 0-8.53 3.96-8.53 9.18 0 5.23 3.48 9.18 8.53 9.18 2.25 0 4.5-1.31 5.33-2.9v2.47h5.55V3.06h-5.55v10.42Zm-4.18 10.7c-2.5 0-4.17-2.03-4.17-4.46 0-2.4 1.67-4.46 4.17-4.46 2.51 0 4.17 2.07 4.17 4.46.01 2.43-1.66 4.46-4.17 4.46m-18.83-10.7c-.84-1.6-3.09-2.94-5.34-2.94-5.05 0-8.53 3.96-8.53 9.18 0 5.23 3.48 9.18 8.53 9.18 2.25 0 4.5-1.31 5.34-2.9v2.47h5.55v-17.5h-5.55v2.51Zm-4.17 10.7c-2.5 0-4.17-2.03-4.17-4.46 0-2.4 1.67-4.46 4.17-4.46s4.17 2.07 4.17 4.46c0 2.43-1.67 4.46-4.17 4.46" fill="#ffffff" fill-rule="nonzero"/>
                  </svg>`,
          info: "advades GmbH is a Germany-based consultancy focused on SAP technology with a track record of successfully supporting our customers with UI5 and related topics for over 10 years. Our portfolio includes a broad range of services, from SAP landscape and solution architecture to hands-on implementation of state-of-the-art applications and solutions using SAP technology. For our team of #UXperts, UI5 is not only our daily business but the foundation of most of our work. We are excited to be supporting this event, and we are looking forward to meeting, learning from, and connecting with the UI5 community this summer!",
          website: "https://www.advades.com/",
          linkedin: "https://www.linkedin.com/company/advades-gmbh",
          twitter: "https://twitter.com/advades_gmbh",
          instagram: "https://www.instagram.com/advades_gmbh",
          facebook: "https://www.facebook.com/advades/",
          package: "gold"
        }
        ,
        {
          name: "CONET",
          logo:  `<svg class="ui5con-sponsor-logo" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244.1 141.73">
                    <path fill="#009899" d="M102.36 0h141.73v141.73H102.36z"/>
                    <path d="M38.62 81.05c-1.23-.69-2.74-1.36-4.55-2.01-1.9-.52-3.82-.81-5.77-.86-5.21.05-9.42 1.76-12.63 5.14-3.29 3.38-4.95 8.03-5 13.97.05 6.13 1.83 10.88 5.35 14.26 3.4 3.45 7.59 5.17 12.57 5.17 3.93-.05 7.28-.91 10.03-2.59l2.78 6.36c-1.53.93-3.5 1.74-5.9 2.42a28.6 28.6 0 0 1-7.33 1.11c-8.73-.12-15.56-2.71-20.49-7.78-5.08-5-7.63-11.36-7.68-19.1.05-7.29 2.58-13.45 7.61-18.49 4.98-5.09 11.88-7.68 20.7-7.78 2.66 0 5.13.39 7.4 1.18 2.34.76 4.35 1.69 6.04 2.78l-3.13 6.22Zm32.06 42.97c-7.69-.12-13.71-2.77-18.06-7.96-4.47-5.09-6.73-11.54-6.77-19.35.05-7.38 2.42-13.5 7.12-18.35 4.56-4.9 10.46-7.39 17.7-7.49 7.29.1 13.21 2.59 17.77 7.49 4.58 4.85 6.93 10.97 7.04 18.35-.05 7.81-2.25 14.26-6.62 19.35-4.39 5.18-10.45 7.84-18.17 7.96Zm0-7.31c5.21-.1 8.87-2.2 11-6.32 2.08-3.97 3.12-8.54 3.12-13.68s-1.09-9.25-3.26-12.89c-2.31-3.66-5.93-5.54-10.86-5.64-4.93.1-8.5 1.98-10.72 5.64-2.34 3.64-3.48 7.94-3.44 12.89-.05 5.15 1.02 9.71 3.19 13.68 2.2 4.12 5.85 6.23 10.97 6.32Z" fill="#1d1d1b"/>
                    <path d="M146.17 123.12h-7.22c-9.54-11.54-19.03-23.82-28.48-36.83h-.14v36.83h-8.02V71.76h7.33c9.54 11.45 19 23.66 28.37 36.62h.14V71.76h8.02v51.36Zm40.46-44.48H169.9v14.13h16.38v6.87H169.9v16.6h19.79v6.88h-30.1V71.76h27.05v6.88Zm22.91 44.48V78.64h-15.36v-6.88h41.05v6.88h-15.37v44.48h-10.32Z" fill="#fff"/>
                  </svg>`,
          info: "'Success. Our passion.' CONET has been a reliable and highly competent IT partner for SAP, Infrastructure, Communications, Software and Consulting with the focus on Cyber Security, Cloud, Mobility and Data Intelligence since 1987. CONET ranks among the best medium-sized German IT consulting companies. Customers from the private sector as well as the public sector alike value CONET‘s commitment to quality and success. CONET currently employs more than 1,700 business and IT specialists at 22 locations throughout Germany, Austria and Switzerland as well as in Croatia and Spain.",
          website: "https://www.conet.de",
          linkedin: "https://www.linkedin.com/company/80539/",
          youtube: "https://www.youtube.com/@CONETde",
          instagram: "https://www.instagram.com/conet.group/",
          facebook: "https://www.facebook.com/CONET.Group",
          package: "gold"
        }

      ]
    };
  },
});
