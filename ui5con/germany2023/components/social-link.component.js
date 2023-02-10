'use strict';
Vue.component("social-link", {
  props: ["link", "header"],
  template:`
  <a :href="link" class="ui5con-social-link" target="_blank" rel="noopener noreferrer" hreflang="en">
    {{header}}
  </a>
`
});
