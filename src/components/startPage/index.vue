<template>
  <section class="section">
    <div class="section-container">
      <div class="content-container">
        <div class="content">
          <div class="video-background">
            <video loop="" autoplay=""><source :src="video" type="video/mp4"></video>
          </div>
          <h1 style="margin-top: -10px;"><img :src="payload.title_img"></h1>
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
    data() {
      let self = this;
      return {
        video: `/resources?request=${self.payload.video}`
      }
    }
  }
</script>

<style scoped>
  .content {
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-line-pack: center;
    align-content: center;
  }
  .content:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .6);
    z-index: 1;
  }
  .content h1 {
    position: relative;
    z-index: 1;
    font-size: 3.7rem;
  }
  @media only screen and (max-width:414px) {
    .content h1 {
      font-size: 2.8rem;
    }
  }
  .content h1 img {
    height: 45vh;
    max-height: 32rem;
  }
  .video-background {
    z-index: 0;
  }
  .video-background,
  .video-background video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .video-background video {
    z-index: 1;
  }
  @media (min-aspect-ratio:16/9) {
    .video-background video {
      height: 300%;
      top: -100%;
    }
  }
  @media (max-aspect-ratio:16/9) {
    .video-background video {
      width: 300%;
      left: -100%;
    }
  }
  .desc-container {
    width: 100%;
    color: hsla(0, 0%, 100%, .8);
    position: relative;
    text-align: center;
    z-index: 1;
  }
  @media only screen and (max-width:414px) {
    .desc-container {
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
  .desc-container div {
    max-width: 800px;
    padding: 3rem;
    margin: 0 auto;
    opacity: .75;
  }
  ._2-WjEScnw9mtd2zbn87PBe {
    position: absolute;
    top: 34px;
    left: 2rem;
    margin-left: 15px;
    z-index: 1;
  }
  .section-container {
    position: relative;
    height: 100%;
    overflow: hidden;
    color: #fff;
    background-color: #000;
    background-size: cover;
    background-position: 50%;
    z-index: 0;
  }
  .content-container {
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
    z-index: 1;
  }
  @media only screen and (max-width:414px) {
    .content-container {
      padding: 40px 0 50px;
    }
  }
  .content-container h1,
  .content-container h2,
  .content-container h3,
  .content-container h4,
  .content-container h5 {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility;
  }
  .content-container h1 {
    font-weight: 400;
  }
</style>
