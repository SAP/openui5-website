'use strict';
Vue.component("nav-section-mobile", {
  data: function () {
    return {
      currentPage: '',
      hamburgerMenuVisible: false,
    }
  },
  methods: {
    isActive: function(name) {
      return this.currentPage.includes(name);
    },
    toggleHamburgerMenu() {
        this.hamburgerMenuVisible = !this.hamburgerMenuVisible
    }
  },
  mounted() {
    this.currentPage = window.location.href;
  },
  template:`<div class="ui5con-mobile-nav">
    <div class="ui5con-mobile-nav-container">
        <a href="index.html" aria-label="Home">
            <span class="sr-only">Link to Home Page</span>

            <svg fill="none" xmlns="http://www.w3.org/2000/svg" class="ui5con-logo" viewBox="0 0 199 48" aria-hidden="true">
                <path
                    d="M.002 28.957V.324h10.361v28.459a12.968 12.968 0 0 0 2.108 7.856 7.886 7.886 0 0 0 3.02 2.108c1.16.456 2.412.63 3.654.511a7.558 7.558 0 0 0 3.575-.51 7.514 7.514 0 0 0 2.922-2.108 12.359 12.359 0 0 0 2.108-7.857V.323h10.186v28.634a28.356 28.356 0 0 1-1.054 7.682 15.693 15.693 0 0 1-3.512 5.937 13.255 13.255 0 0 1-5.971 3.666 25.111 25.111 0 0 1-8.43 1.222 25.11 25.11 0 0 1-8.43-1.222 14.659 14.659 0 0 1-5.825-3.68 14.542 14.542 0 0 1-3.483-5.922 22.854 22.854 0 0 1-1.23-7.683Zm47.066 17.809V.324h10.187v46.442H47.068Zm16.684-5.238 5.27-6.634a21.243 21.243 0 0 0 5.268 3.491 16.095 16.095 0 0 0 6.322 1.397c3.161 0 5.444-.698 6.85-2.27a8.472 8.472 0 0 0 2.107-5.936 8.371 8.371 0 0 0-2.108-6.11 7.467 7.467 0 0 0-2.728-1.803 7.504 7.504 0 0 0-3.243-.467 10.358 10.358 0 0 0-4.566 1.047 12.28 12.28 0 0 0-4.04 3.318l-6.673-2.096L68.143.498h28.45l-.526 7.508H76.046l-.878 10.476a15.19 15.19 0 0 1 3.512-2.095 18.734 18.734 0 0 1 5.971-.873 16.54 16.54 0 0 1 6.499 1.222 12.948 12.948 0 0 1 4.812 3.22 12.848 12.848 0 0 1 2.915 4.986 15.628 15.628 0 0 1 .878 6.285 18.846 18.846 0 0 1-1.23 6.81 15.887 15.887 0 0 1-3.688 5.237 19.795 19.795 0 0 1-5.795 3.492 23.234 23.234 0 0 1-7.727 1.222 25.14 25.14 0 0 1-10.01-1.746 36.669 36.669 0 0 1-7.553-4.714Z"
                    fill="#F16A36" />
                <path
                    d="M103.972 31.051a18.681 18.681 0 0 1 1.229-7.333 14.39 14.39 0 0 1 3.337-5.063 18.787 18.787 0 0 1 4.566-2.968 13.926 13.926 0 0 1 5.269-.873 13.14 13.14 0 0 1 4.566.698c1.257.47 2.44 1.117 3.512 1.921.96.8 1.79 1.741 2.459 2.794a20.038 20.038 0 0 1 1.756 3.317l-4.391 1.746a10.082 10.082 0 0 0-3.161-4.54 7.562 7.562 0 0 0-4.917-1.571 7.063 7.063 0 0 0-3.337.698 11.504 11.504 0 0 0-2.986 2.096 12.57 12.57 0 0 0-2.107 3.666 19.434 19.434 0 0 0-.878 5.587 14.444 14.444 0 0 0 2.459 8.904 8.63 8.63 0 0 0 2.902 2.28 8.686 8.686 0 0 0 3.596.863 8.2 8.2 0 0 0 4.917-1.397 12.65 12.65 0 0 0 3.512-4.888l4.215 1.571a19.475 19.475 0 0 1-2.107 3.666 10.666 10.666 0 0 1-2.81 2.794 14.066 14.066 0 0 1-3.512 1.92 13.126 13.126 0 0 1-4.567.699c-1.808.003-3.6-.353-5.268-1.048a11.268 11.268 0 0 1-4.391-3.142 13.73 13.73 0 0 1-3.161-5.064 51.227 51.227 0 0 1-.702-7.333Zm31.436 0a19.89 19.89 0 0 1 1.229-7.158 13.743 13.743 0 0 1 3.161-5.063 14.055 14.055 0 0 1 4.742-3.143 15.132 15.132 0 0 1 11.064 0 14.055 14.055 0 0 1 4.742 3.143 13.717 13.717 0 0 1 3.161 5.063 19.891 19.891 0 0 1 1.23 7.158 19.891 19.891 0 0 1-1.23 7.159 13.717 13.717 0 0 1-3.161 5.063 14.055 14.055 0 0 1-4.742 3.143 15.132 15.132 0 0 1-11.064 0 14.055 14.055 0 0 1-4.742-3.143 13.743 13.743 0 0 1-3.161-5.063 21.61 21.61 0 0 1-1.229-7.159Zm5.268 0c0 1.586.177 3.167.527 4.715a11.06 11.06 0 0 0 1.757 3.84 8.757 8.757 0 0 0 2.985 2.62 7.06 7.06 0 0 0 4.215.872 10.428 10.428 0 0 0 4.039-.873 6.785 6.785 0 0 0 2.986-2.444 15.79 15.79 0 0 0 1.932-3.841c.418-1.598.653-3.238.702-4.889a19.606 19.606 0 0 0-.527-4.54 15.25 15.25 0 0 0-1.756-3.84 8.767 8.767 0 0 0-2.985-2.62 6.831 6.831 0 0 0-4.215-.872 10.435 10.435 0 0 0-4.04.873 6.788 6.788 0 0 0-2.985 2.444 14.927 14.927 0 0 0-1.932 3.667 15.405 15.405 0 0 0-.703 4.888Zm31.437 15.714V15.512h5.093v4.715a11.955 11.955 0 0 1 2.283-1.921 15.039 15.039 0 0 1 2.81-1.746 22.332 22.332 0 0 1 3.161-1.222 13.17 13.17 0 0 1 3.688-.524 10.12 10.12 0 0 1 7.025 2.444 9.638 9.638 0 0 1 2.459 6.984v22.523h-5.093V25.29a7.2 7.2 0 0 0-1.405-4.714 5.546 5.546 0 0 0-4.391-1.397 10.712 10.712 0 0 0-5.269 1.397 26.456 26.456 0 0 0-4.917 3.666v22.523h-5.444Z"
                    fill="#F79B36" />
            </svg>
        </a>

        <button class="ui5con-mobile-nav-btn" @click="toggleHamburgerMenu()" v-bind:class="{ open: hamburgerMenuVisible }">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>

    <ul class="ui5con-mobile-nav-menu" v-if="hamburgerMenuVisible">
        <li>
            <a href="speakerinfo.html" :class="{ active: isActive('speakerinfo') }" :aria-current="isActive('speakerinfo')">Speakers</a>
        </li>
        <li>
            <a href="location.html" :class="{ active: isActive('location') }" :aria-current="isActive('location')">Participants</a>
        </li>
        <li>
            <a href="sponsors.html" :class="{ active: isActive('sponsors') }" :aria-current="isActive('sponsors')">Sponsors</a>
        </li>
        <li>
            <a href="about.html" :class="{ active: isActive('about') }" :aria-current="isActive('about')">About</a>
        </li>
        <li>
            <a href="faq.html" :class="{ active: isActive('faq') }" :aria-current="isActive('faq')">FAQ</a>
        </li>
        <li>
            <a href="archive.html" :class="{ active: isActive('archive') }" :aria-current="isActive('archive')">Archive</a>
        </li>
    </ul>
  </div>
  `
});