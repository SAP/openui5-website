'use strict';
Vue.component("footer-section", {
  template:`<footer role="contentinfo" class="ui5con-footer">
<ul class="ui5con-share">
  <li>
    <a href="https://twitter.com/intent/tweet?text=UI5Con%20Germany%202023%20&url=https%3A%2F%2Fopenui5.org%2Fui5con%2Fgermany2023" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 36" aria-hidden="true">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.075 2.87C23.382 1.128 25.483 0 28.375 0c1.778 0 3.395.899 4.465 1.773.38.31.739.655 1.053 1.021l3.771-1.508a2.25 2.25 0 0 1 2.4 3.706l-3.88 3.755c.033.438.066.97.066 1.378 0 5.335-1.176 11.726-4.597 16.857-3.504 5.256-9.263 9.018-17.903 9.018-4.68 0-7.743-.584-9.712-1.24-.986-.33-1.7-.677-2.203-.979a6.061 6.061 0 0 1-.602-.408C.25 32.626.158 31.275.42 30.64A2.25 2.25 0 0 1 2.5 29.251c4.144 0 7.227-.996 9.415-2.148-1.308-.093-2.717-.289-3.9-.703-1.197-.418-3.265-1.487-3.265-3.899A2.25 2.25 0 0 1 7 20.251c.146 0 .597-.078 1.382-.327-1.033-.317-2.07-.71-2.958-1.2-1.137-.625-2.924-1.9-2.924-4.098a2.25 2.25 0 0 1 2.25-2.25c.051 0 .104 0 .16-.002C2.727 10.709.25 8.072.25 4.5a2.25 2.25 0 0 1 4.104-1.274l.005.006c.013.018.044.058.094.118.1.12.277.318.544.571.533.505 1.43 1.232 2.8 1.979C10.24 7.234 14.257 8.669 20.5 8.95V7.876c0-1.439.35-3.373 1.575-5.006Z" fill="currentColor"/>
      </svg>
    </a>
  </li>
  <li>
    <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fopenui5.org%2Fui5con%2Fgermany2023" target="_blank" rel="noopener noreferrer">
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3Zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3Z" fill="currentColor"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6a1 1 0 0 0-1 1v10a1 1 0 1 1-2 0V7a3 3 0 0 1 3-3h1a1 1 0 1 1 0 2h-1Z" fill="currentColor"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7 10a1 1 0 0 1 1-1h4.5a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" fill="currentColor"/>
        </svg>
    </a>
  </li>
  <li>
    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fopenui5.org%2Fui5con%2Fgermany2023&title=UI5Con Germany 2023&summary=UI5con Germany in on July 6th 2023 — a community event focused on #UI5 development" target="_blank" rel="noopener noreferrer">
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" aria-hidden="true">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3Zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3Z" fill="currentColor"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5 7a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1ZM5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM8 7a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Z" fill="currentColor"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7 10.778A3.778 3.778 0 0 1 10.778 7 3.222 3.222 0 0 1 14 10.222V13a1 1 0 1 1-2 0v-2.778C12 9.547 11.453 9 10.778 9 9.796 9 9 9.796 9 10.778V13a1 1 0 1 1-2 0v-2.222Z" fill="currentColor"/>
    </svg>
    </a>
  </li>
  <li>
    <a href="mailto:?subject=UI5con in July 2023&body=Mark your calendars: UI5con Germany in on July 6th 2023 — a community event focused on #UI5 development. https://openui5.org/ui5con/germany2023/" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 36" aria-hidden="true">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M.5 6.75A6.75 6.75 0 0 1 7.25 0h31.5a6.75 6.75 0 0 1 6.75 6.75v22.5A6.75 6.75 0 0 1 38.75 36H7.25A6.75 6.75 0 0 1 .5 29.25V6.75ZM7.25 4.5A2.25 2.25 0 0 0 5 6.75v22.5a2.25 2.25 0 0 0 2.25 2.25h31.5A2.25 2.25 0 0 0 41 29.25V6.75a2.25 2.25 0 0 0-2.25-2.25H7.25Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.092 5.558a2.25 2.25 0 0 1 3.1-.716l15.616 9.76a2.25 2.25 0 0 0 2.384 0l15.615-9.76a2.25 2.25 0 0 1 2.386 3.816l-15.615 9.76a6.75 6.75 0 0 1-7.155 0L3.807 8.657a2.25 2.25 0 0 1-.716-3.1Z" fill="currentColor"/>
      </svg>
    </a>
  </li>
</ul>

<div class="ui5con-footer-container-wrapper">
  <div class="ui5con-footer-container links">
    <div class="ui5con-social-links-container">
      <social-link link="https://twitter.com/ui5con" header="stay updated"></social-link>
      <social-link link="https://www.youtube.com/c/openui5videos/playlists" header="see past events"></social-link>
      <social-link link="mailto:openui5@sap.com?subject=[UI5con 2023] Question" header="reach out to us"></social-link>
    </div>

    <div class="ui5con-social-links-container">
      <social-link link="https://www.sap.com/about/legal/impressum.html" header="legal disclaimer"></social-link>
      <social-link link="https://www.sap.com/about/legal/privacy.html" header="privacy"></social-link>
      <social-link link="codeofconduct.html" header="code of conduct"></social-link>
    </div>
  </div>

  <div class="ui5con-footer-container logo">
    <svg class="ui5con-sap-logo" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 743.367 368.439">
      <defs></defs>
      <path d="M0 367.887h375.32L743.367 0H0v367.887"></path>
      <path fill="#fff" fill-rule="evenodd" d="M440.783 69.143l-72.736-.014v174.015L304.039 69.129h-62.554l-55.28 145.531c-5.818-36.66-43.641-49.33-74.19-58.815-18.912-6.371-40.733-15.74-39.278-25.981 0-8.496 10.183-16.293 32.004-15.13 14.547.742 27.64 1.95 53.825 14.431L184.75 84.84c-24.73-11.987-56.735-19.566-82.92-19.595-32.004 0-58.19 10.066-74.191 26.752-10.183 11.609-17.457 26.345-17.457 42.682 0 22.475 8.729 38.42 24.73 51.12 16.003 10.691 33.46 17.66 50.916 22.766 20.366 6.299 36.368 11.754 36.368 23.45 0 4.32-1.454 8.248-4.364 11.405-5.819 5.222-13.092 7.2-24.73 7.448-20.366.378-34.914-2.866-59.644-17.311l-23.276 44.878c24.73 13.908 53.825 22.083 82.92 22.083l4.364-.029c24.73-.465 46.551-7.812 62.553-21.166 1.455-.786 1.455-1.513 2.91-2.24l-7.274 19.536h66.918l10.183-33.866c11.638 3.899 24.73 6.168 39.278 6.168 14.547 0 26.185-2.196 37.823-5.891l11.637 33.59h107.65v-70.25h24.73c56.735 0 90.194-29.109 90.194-77.93 0-54.348-32.004-79.297-103.286-79.297zm-168.748 148.98c-8.729 0-16.003-1.514-23.276-4.161l23.276-73.202 23.275 73.434c-7.273 2.503-14.547 3.928-23.275 3.928zm173.112-42.1h-16.002v-59.02h16.002c21.821 0 39.278 7.144 39.278 29.212 0 22.694-17.457 29.807-39.278 29.807"></path>
    </svg>
    <p class="ui5con-footer-copyright">Copyright 2023, SAP SE</p>
  </div>

</div>


</footer>
  `
});
