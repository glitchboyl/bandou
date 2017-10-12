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
            <div class="description">
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
  .banner-container {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-line-pack: center;
    align-content: center
  }
  .banner-container>* {
    width: 100%
  }
  .banner-holder {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
  }
  .banner.reverse,
  .banner.reverse .content-container {
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse
  }
  .banner .content {
    padding: 2rem 3rem 2rem 0
  }
  .banner.reverse .content {
    padding: 2rem 0 2rem 3rem
  }
  @media only screen and (max-width:1024px) {
    .banner .content {
      padding: 2rem 3rem 2.5rem
    }
  }
  @media only screen and (max-width:414px) {
    .banner .content {
      padding: 1.5rem
    }
  }
  .banner .cover.reverse {
    left: 0;
    right: auto
  }
  @media only screen and (max-width:1024px) {
    .banner .cover {
      margin-left: 1.5rem;
      margin-right: 0
    }
  }
  .extra-block {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
  }
  .content-container {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 1024px;
    flex: 0 1 1024px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    width: 100%
  }
  @media only screen and (max-width:1024px) {
    .content {
      padding: 2rem 3rem 2.5rem
    }
  }
  @media only screen and (max-width:414px) {
    .content {
      padding: 1.5rem
    }
  }
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
  .content h1 {
    font-size: 3rem
  }
  .content h2 {
    font-weight: 700;
    font-size: 2.26rem
  }
  @media (max-height:800px) {
    .content h1 {
      font-size: 2.5rem
    }
    .content h2 {
      font-size: 1.88rem
    }
  }
  @media (max-height:700px) {
    .content h1 {
      font-size: 2rem
    }
    .content h2 {
      font-size: 1.7rem
    }
  }
  @media only screen and (max-width:414px) {
    .content h1 {
      font-size: 1.8rem
    }
    .content h2 {
      font-size: 1.6rem
    }
  }
  .description {
    color: hsla(0, 0%, 100%, .6);
    margin-top: 2rem;
    font-size: 1.1rem;
    line-height: 1.7
  }
  @media (max-height:800px) {
    .description {
      margin-top: 1rem
    }
  }
  @media (max-height:700px) {
    .description {
      font-size: 1rem
    }
  }
  .description>a:before {
    content: "\2014\2014";
    padding: 0 .5em
  }
  .cover {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    left: auto;
    right: 0;
    width: 13rem;
    padding: 10px;
    border: 1px solid #fff
  }
  @media only screen and (max-width:414px) {
    .cover {
      width: 10rem
    }
  }
  @media only screen and (max-width:1024px) {
    .cover {
      margin-left: 0;
      margin-right: 1.5rem
    }
  }
  .cover a {
    display: block;
    background-size: cover;
    background-position: 50%;
    width: 100%;
    overflow: hidden
  }
  .cover a:before {
    content: "";
    float: left;
    margin-top: 157.06%
  }
  .music {
    width: 18rem
  }
  @media only screen and (max-width:414px) {
    .music {
      width: 10rem
    }
  }
  .music a:before {
    margin-top: 100%
  }
  .person-name,
  .appraise {
    font-size: 1.4rem;
    margin-top: 1.5rem
  }
  @media (max-height:800px) {
    .person-name,
    .appraise {
      font-size: 1.2rem;
      margin-top: 1rem
    }
  }
  @media (max-height:700px) {
    .person-name,
    .appraise {
      font-size: 1rem;
      margin-top: .5rem
    }
  }
  @media only screen and (max-width:414px) {
    .person-name,
    .appraise {
      font-size: 1rem;
      margin-top: 1rem
    }
  }
  .appraise {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    white-space: nowrap
  }
  .appraise>span {
    margin-right: 1rem
  }
  ._2EkFn0RsWLpdQ8azg5vQ6N:last-child,
  ._2EkFn0RsWLpdQ8azg5vQ6N>span {
    margin-left: 0
  }
  .payload {
    max-width: 23em
  }
  @media only screen and (max-width:414px) {
    .payload {
      max-width: 15em
    }
  }
  @media only screen and (max-width:375px) {
    .payload {
      max-width: 12em
    }
  }
  .react-rater {
    font-size: 1.6rem;
    line-height: 1;
    margin-right: .5rem
  }
  @media (max-height:700px) {
    .react-rater {
      font-size: 1.1rem
    }
  }
  @media only screen and (max-width:414px) {
    .react-rater {
      font-size: 1.2rem
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility
  }
  h1 {
    font-weight: 400
  }
</style>
