'use strict';
Vue.component("speaker", {
  props: ["member", "animation", "index"],
  template:`
  <li class="ui5con-committee-list-item" :class="{ 'visible animated slideInRight': animation && index % 2 === 0, 'visible animated slideInLeft': animation && index % 2 !== 0, 'invisible': !animation }">
  <figure class="ui5con-committee-member">
    <img :src="'https://ui5con2022.cfapps.eu10.hana.ondemand.com'+member.photoUrl" :alt="'Portrait of ' +member.firstName + ' ' + member.lastName">
  </figure>
  <article class="ui5con-committee-list__teaser animated zoomIn">
    <header>
      <ul class="ui5con-committee-socials">
        <li v-if="member.twitterHandle">
          <a :href="'https://twitter.com/'+member.twitterHandle" :aria-label="'Twitter Profile of '+member.firstName + ' ' + member.lastName" rel="nofollow" target="_blank" class="ui5con-committee-socials-item" v-html="svgs.twitter">
          </a>
        </li>
        <li v-if="member.githubUrl">
          <a :href="member.githubUrl" :aria-label="'Github Profile of ' + member.firstName + ' ' + member.lastName" rel="nofollow" target="_blank" class="ui5con-committee-socials-item" v-html="svgs.github">
          </a>
        </li>
        <li v-if="member.linkedInUrl">
          <a :href="member.linkedInUrl" :aria-label="'LinkedIn Profile of ' + member.firstName + member.lastName" rel="nofollow" target="_blank" class="ui5con-committee-socials-item"  v-html="svgs.linkedin">
          </a>
        </li>
      </ul>
      <h3 class="ui5con-committee-name">{{member.firstName}} {{member.lastName}}</h3>
      <p class="ui5con-committee-country">{{member.company}}</p>
    </header>
    <p><span  class="ui5con-committee-country">Topic: </span>{{member.topic}}</p>
    <p>{{member.bio}}</p>
  </article>
</li>
`
});
