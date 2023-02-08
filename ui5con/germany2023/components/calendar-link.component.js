'use strict';
Vue.component("calendar-link", {
  props: ["src", "link", "download"],
  template:`<li>
  <a :href="link" class="ui5con-calendars-link" target="_blank" :download="download"><img :src="src"><span><slot></slot></span></a>
</li>
`
});
