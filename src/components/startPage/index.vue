<template>
  <section class="section">
    <div class="start-page">
      <div class="content-container">
        <div class="content">
          <div class="video-background">
            <video loop="" autoplay=""><source :src="video" type="video/mp4"></video>
          </div>
          <h1 style="margin-top: -10px;"><img :src="titleImg"></h1>
          <div class="desc-container">
            <div>{{ payload.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['payload'],
    computed: {
      isPhone() {
        return this.$store.state.isPhone;
      },
      video() {
        const {kind} = this.$route.params;
        return require(`@/assets/images/${kind}.${this.isPhone ? 'jpg' : 'mp4'}`);
      },
      titleImg() {
        const titleImg = this.isPhone ? this.payload.mobile_title_img : this.payload.title_img;
        return `https://images.weserv.nl/?url=${titleImg.replace(/^http(s)?:\/\//,'')}`;
      }
    }
  }
</script>