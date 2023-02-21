'use strict';
Vue.component("header-section", {
  template:`<div class="ui5con-header-nav">
  <a href="index.html" class="ui5con-header-link" aria-label="Home">
    <span v-html="svgs.logo"></span>
  </a>
  <nav>
    <h2 class="sr-only">Main navigation</h2>
    <a class="sponsoring" href="sponsors.html">Become a Sponsor</a>
    <a aria-current="page" href="about-the-team.html">Meet the Team</a>
    <a href="https://openui5.org/ui5con/" hreflang="en" rel="external">Previous Events</a>
  </nav>
</div>`
});
