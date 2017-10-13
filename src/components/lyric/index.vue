<template>
  <section class="section">
    <div class="lynic-container" :style="{backgroundImage: `url('${backgroundImg}')`}">
      <div class="lynic">
        <div class="content-container">
          <div class="content">
            <div v-for="(lyric,index) in lyrics" :data-highlight="lyric.highlight" :style="{color: lyric.color}" :key="index">{{ lyric.content }}</div>
          </div>
          <div class="song-title"><a :href="subject.url" target="_blank">{{ subject.title }}</a></div>
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
      lyrics() {
        let self = this;
        let lyrics = self.payload.content;
        let highlight = lyrics.match(/\[[\s\S]*\]/)[0];
        if (highlight.search(/\n/) != -1) highlight = highlight.split(/\n/)[1];
        lyrics = lyrics.split(/\n/);
        lyrics.forEach((cv, i) => {
          if (cv == highlight)
            lyrics = [lyrics.slice(0, i), lyrics.slice(i + 1, lyrics.length)]
        })
        lyrics.forEach((c, i) => {
          if (!i) lyrics[i] = lyrics[i].reverse();
          lyrics[i].forEach((cV, j) => {
            lyrics[i][j] = {
              content: cV.replace('[', ''),
              color: `rgba(255,255,255,${0.65-0.15*(j+1) <= 0 ? 0 : (0.65-0.15*(j+1)).toFixed(2)})`,
              highlight: false
            }
          })
          if (!i) lyrics[i] = lyrics[i].reverse();
        })
        highlight = {
          content: highlight.match(/[^\[].*[^\]]/)[0],
          color: 'rgba(255,255,255,0.65)',
          highlight: true
        }
        return [...lyrics[0], highlight, ...lyrics[1]];
      }
    },
  }
</script>

<style scoped>
  .lynic-container {
    position: relative;
    height: 100%;
    overflow: hidden;
    color: #fff;
    background-color: #000;
    background-size: cover;
    background-position: 50%;
    z-index: 0
  }
  .lynic {
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
    .lynic {
      padding: 40px 0 50px
    }
  }
  .lynic h1,
  .lynic h2,
  .lynic h3,
  .lynic h4,
  .lynic h5 {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility
  }
  .lynic h1 {
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
    align-items: center;
    -ms-flex-line-pack: center;
    align-content: center
  }
  @media only screen and (max-width:414px) {
    .content-container {
      margin: 0 1.5rem
    }
  }
  .content-container>* {
    width: 100%
  }
  .content {
    line-height: 1.8;
    font-size: 2rem;
    text-align: center
  }
  @media only screen and (max-width:414px) {
    .content {
      font-size: 1.5rem
    }
  }
  .content [data-highlight=true] {
    color: #fff!important;
    font-size: 2.6rem;
    font-weight: 700;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility
  }
  @media only screen and (max-width:414px) {
    .content [data-highlight=true] {
      font-size: 2rem
    }
  }
  .song-title {
    width: 60%;
    max-width: 800px;
    margin-top: 1rem;
    color: hsla(0, 0%, 100%, .5);
    font-size: 2rem;
    text-align: right
  }
  @media only screen and (max-width:414px) {
    .song-title {
      width: 100%;
      font-size: 1.5rem
    }
  }
  .song-title:before {
    content: "\2014\2014   "
  }
</style>
