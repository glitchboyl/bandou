<template>
  <div class="banner-container">
    <div class="banner-holder banner" :class="{reverse}">
      <div class="extra-block" :style="{backgroundColor: payload.background_color}"></div>
      <div class="content-container">
        <div class="content" :style="{backgroundColor: payload.background_color}">
          <h1>
            <div>{{ payload.title.split('|')[0] }}</div>
            <div>{{ payload.title.split('|')[1] }}</div>
          </h1>
        </div>
      </div>
      <div class="extra-block"></div>
    </div>
    <div class="banner-holder banner" :class="{reverse}">
      <div class="extra-block" style="background-color: rgba(0, 0, 0, 0.5);"></div>
      <div class="content-container">
        <div class="content" style="background-color: rgba(0, 0, 0, 0.5);">
          <div class="payload">
            <h2><a :href="subject.url" target="_blank">{{ subject.title }}</a></h2>
            <div class="orig-title" v-if="subject.orig_title">{{ subject.orig_title }}</div>
            <div class="appraise">
              <div class="react-rater is-disabled">
                <a v-for="i in 5" :class="{'is-active': i <= parseInt(subject.rating)/2,'is-active-half': i * 2 - parseInt(subject.rating) == 1}" :key="i">★</a>
              </div>
              <span>{{ subject.rating.toFixed(1) }}</span>
              <span>{{ subject.rating_count }} 人评价</span>
            </div>
            <div class="description">
              {{ payload.description }}<a :href="user.url" target="_blank" v-if="user">{{ user.name }}</a></div>
          </div>
        </div>
      </div>
      <div class="extra-block"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['payload', 'subject', 'user'],
    computed: {
      reverse() {
        return this.payload.left == 'on';
      }
    }
  }
</script>