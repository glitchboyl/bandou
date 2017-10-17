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
          <div class="payload">
            <h2><a :href="subject.url" target="_blank">{{ subject.title }}</a></h2>
            <div class="person-name"></div>
            <div class="person-name" v-if="$route.params.kind != 'drama'">{{ $route.params.kind == 'book' ? subject.writers.join(' / ') : subject.performers.join(' / ') }}</div>
            <div class="appraise">
              <div class="react-rater is-disabled">
                <a v-for="i in 5" :class="{'is-active': i <= parseInt(subject.rating)/2,'is-active-half': i * 2 - parseInt(subject.rating) == 1}" :key="i">★</a>
              </div>
              <span>{{ subject.rating.toFixed(1) }}</span>
              <span>{{ subject.rating_count }} 人评价</span>
            </div>
            <div class="description" v-show="!isPhone">
              {{ payload.description }}<a :href="user.url" target="_blank" v-if="user">{{ user.name }}</a></div>
          </div>
        </div>
        <div class="cover" :class="{music:$route.params.kind == 'music',reverse}">
          <a :href="subject.m_url" target="_blank" :style="{backgroundImage: `url('${coverImg}')`}"></a>
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
      isPhone() {
        return this.$store.state.isPhone;
      },
      reverse() {
        return this.payload.left == 'on';
      },
      coverImg() {
        return `/resources?type=image&request=${this.subject.cover}`;
      }
    }
  }
</script>

<style scoped>
  .content h1 {
    padding-bottom: .8em;
    border-bottom: 1px solid #fff;
    margin-bottom: .8em
  }
  @media (max-height:800px) {
    .content h1 {
      padding-bottom: .5em;
      margin-bottom: .5em
    }
  }
@media only screen and (max-width:414px) {
    .banner-container .content-container .content {
        width: auto!important
    }
}
</style>
