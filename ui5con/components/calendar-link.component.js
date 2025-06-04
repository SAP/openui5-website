'use strict';
Vue.component("calendar-link", {
  props: ["src", "link", "download", "cal"],
  template:`<li>
  <a class="agenda-slot-linkitem" :href="''+link" :class="{ 'is-calendar' : cal }" target="_blank" :download="download"><img :src="src"><span><slot></slot></span></a>
</li>
`
});