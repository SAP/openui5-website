'use strict';
Vue.component("header-section", {
  template:`<nav class="ui5con-header-nav" aria-label="Main navigation">
  <ul>
    <li class="ui5con-header-nav-item">
      <a href="index.html" class="ui5con-header-link" aria-label="Home">
        <span class="sr-only">Link to Home Page</span>
        <span v-html="svgs.logo"></span>
      </a>
    </li>
    <li><a class="sponsoring" href="sponsors.html">become a sponsor</a></li>
    <li><a href="about-the-team.html">meet the team</a></li>
    <li><a href="https://openui5.org/ui5con/" hreflang="en" rel="external">previous events</a></li>
  </ul>
</nav>`
});
