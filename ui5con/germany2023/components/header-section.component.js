'use strict';
Vue.component("header-section", {
  data: function () {
    return {
      currentPage: ''
    }
  },
  methods: {
    isActive: function(name) {
      return this.currentPage.includes(name);
    }
  },
  mounted() {
    this.currentPage = window.location.href;
  },
  template:`<nav class="ui5con-header-nav" aria-label="Main navigation">
  <ul>
    <li class="ui5con-header-nav-item">
      <a href="index.html" class="ui5con-header-link" aria-label="Home" :aria-current="isActive('index')">
        <span class="sr-only">Link to Home Page</span>
        <span v-html="svgs.logo"></span>
      </a>
    </li>
    <li><a :class="{ active: isActive('sponsors') }" href="sponsors.html" :aria-current="isActive('sponsors')">
      <span v-html="svgs.star" class="ui5con-header-icon" v-if="!isActive('sponsors')"></span>become a sponsor</a>
    </li>
    <li><a href="about-the-team.html" :class="{ active: isActive('team') }" :aria-current="isActive('team')">meet the team</a></li>
    <li><a href="https://openui5.org/ui5con/" hreflang="en" rel="external">previous events</a></li>
  </ul>
</nav>`
});
