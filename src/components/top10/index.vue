<template>
  <section class="section">
    <div class="top10-container" :style="{backgroundImage: `url('${backgroundImg}')`}">
      <div class="top10-content">
        <div class="top10">
          <intro-banner v-if="['movie','game'].find(function (kind) {return $route.params.kind == kind})" :payload="payload" :subject="subjects[0]" :user="user"></intro-banner>
          <exhibit-banner v-if="['book','drama','music'].find(function (kind) {return $route.params.kind == kind})" :payload="payload" :subject="subject" :user="user"></exhibit-banner>
          <subjects :subjects="subjects"></subjects>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import introBanner from './intro-banner'
  import exhibitBanner from './exhibit-banner'
  import subjects from './subjects'
  export default {
    props: ['payload', 'subject', 'subjects', 'user'],
    computed: {
      isPhone() {
        return this.$store.state.isPhone;
      },
      backgroundImg() {
        return `/resources?type=image&request=${this.isPhone ? this.payload.mobile_background_img : this.payload.background_img}`;
      }
    },
    components: {
      introBanner,
      exhibitBanner,
      subjects
    }
  }
</script>

<style scoped>
  .top10-container {
    position: relative;
    height: 100%;
    overflow: hidden;
    color: #fff;
    background-color: #000;
    background-size: cover;
    background-position: 50%;
    z-index: 0
  }
  .top10-content {
    width: 100%;
    height: 100%;
    padding: 60px 0 80px;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    z-index: 1
  }
  @media only screen and (max-width:414px) {
    .top10-content {
      padding: 40px 0 50px
    }
  }
  .top10 {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
  }
  .top10 {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
  }
</style>
