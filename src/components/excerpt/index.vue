<template>
  <section class="section">
    <div class="excerpt-container" :style="{backgroundImage: `url('${backgroundImg}')`}">
      <div class="excerpt">
        <div class="content-container">
          <div class="content">
            <p v-html="content"></p>
            <div>
              <a :href="subject.m_url" target="_blank">—— 《{{ subject.title }}》</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['payload', 'subject'],
    computed: {
      isPhone() {
        return this.$store.state.isPhone;
      },
      backgroundImg() {
        return `/resources?type=image&request=${this.isPhone ? this.payload.mobile_background_img : this.payload.background_img}`;
      },
      content() {
        let self = this;
        let highlights = self.payload.content.match(/\[([^<>]+)\]/);
        if (highlights == null) return self.payload.content
        else {
          return self.payload.content.replace(highlights[0], `<span style="background: ${self.payload.highlights_color}">${highlights[1]}</span>`)
        }
      }
    },
  }
</script>

<style scoped>
  .excerpt-container {
    position: relative;
    height: 100%;
    overflow: hidden;
    color: #fff;
    background-color: #000;
    background-size: cover;
    background-position: 50%;
    z-index: 0
  }
  .excerpt {
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
    .excerpt {
      padding: 40px 0 50px
    }
  }
  .excerpt h1,
  .excerpt h2,
  .excerpt h3,
  .excerpt h4,
  .excerpt h5 {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility
  }
  .excerpt h1 {
    font-weight: 400
  }
  .content-container {
    width: 100%;
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
    align-items: center
  }
  .content {
    font-family: STFangsong, Fangsong, FangSong_GB2312, STSong, serif;
    text-align: justify;
    font-size: 1.5rem;
    color: #555;
    box-sizing: border-box;
    padding: 3rem 2.5rem;
    line-height: 2.6
  }
  .content>div {
    font-size: 1.6rem;
    text-align: right
  }
  .content>div a {
    color: #555
  }
  @media only screen and (max-width:1366px) {
    .content {
      line-height: 2;
      padding: 2rem 1.5rem
    }
  }
  @media only screen and (max-width:1024px) {
    .content {
      line-height: 1.8;
      padding: 1.5rem 1rem
    }
  }
  @media (min-aspect-ratio:45/32) {
    .content {
      width: 31.25vw;
      height: 31.25vw;
      margin-left: -2.08333vw;
      margin-top: 2.77778vw
    }
  }
  @media (max-aspect-ratio:45/32) {
    .content {
      width: 43.94531vh;
      height: 43.94531vh;
      margin-left: -2.92969vh;
      margin-top: 3.90625vh
    }
  }
  @media only screen and (max-width:414px) and (min-aspect-ratio:375/667) {
    .content {
      width: 66vw;
      margin-left: 0;
      margin-top: -24vw
    }
  }
</style>
