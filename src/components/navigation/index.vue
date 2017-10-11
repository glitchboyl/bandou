<template>
  <section class="section">
    <div class="end-page" :style="{backgroundImage: `url('${backgroundImg}')`}">
      <div class="navigation-container">
        <div class="navigation Epilogue">
          <header>
            <h1>FIN</h1>
          </header>
          <p>{{ payload.content }}</p>
          <epilogue></epilogue>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue';
  export default {
    props: ['payload'],
    beforeMount() {
      let self = this;
      let html = `<div class="EpilogueHTML">${self.payload.html.replace(self.payload.html.match(/<style>[\s\S]*<\/style>/)[0],'')}</div>`;
      let [
        movie,book,music,drama,game
      ] = [
        self.payload.html.match(/<a href="https:\/\/movie.douban.com\/annual2016\/\?source=.*_annual" target="_blank">([^<>]+)<\/a>/) == null ? {tag:null,text:null} : {tag:self.payload.html.match(/<a href="https:\/\/movie.douban.com\/annual2016\/\?source=.*_annual" target="_blank">([^<>]+)<\/a>/)[0],text:self.payload.html.match(/<a href="https:\/\/movie.douban.com\/annual2016\/\?source=.*_annual" target="_blank">([^<>]+)<\/a>/)[1]},
        self.payload.html.match(/<a href="https:\/\/book.douban.com\/annual2016\/\?source=.*_annual" target="_blank">([^<>]+)<\/a>/) == null ? {tag:null,text:null} : {tag:self.payload.html.match(/<a href="https:\/\/book.douban.com\/annual2016\/\?source=.*_annual" target="_blank">([^<>]+)<\/a>/)[0],text:self.payload.html.match(/<a href="https:\/\/book.douban.com\/annual2016\/\?source=.*_annual" target="_blank">([^<>]+)<\/a>/)[1]},
        self.payload.html.match(/<a href="https:\/\/music.douban.com\/annual2016\/\?source=.*_annual" target="_blank">([^<>]+)<\/a>/) == null ? {tag:null,text:null} : {tag:self.payload.html.match(/<a href="https:\/\/music.douban.com\/annual2016\/\?source=.*_annual" target="_blank">([^<>]+)<\/a>/)[0],text:self.payload.html.match(/<a href="https:\/\/music.douban.com\/annual2016\/\?source=.*_annual" target="_blank">([^<>]+)<\/a>/)[1]},
        self.payload.html.match(/<a href="https:\/\/www.douban.com\/location\/drama\/annual2016\/\?source=.*_annual" target="_blank">([^<>]+)<\/a>/) == null ? {tag:null,text:null} : {tag:self.payload.html.match(/<a href="https:\/\/www.douban.com\/location\/drama\/annual2016\/\?source=.*_annual" target="_blank">([^<>]+)<\/a>/)[0],text:self.payload.html.match(/<a href="https:\/\/www.douban.com\/location\/drama\/annual2016\/\?source=.*_annual" target="_blank">([^<>]+)<\/a>/)[1]},
        self.payload.html.match(/<a href="https:\/\/www.douban.com\/game\/annual2016\/\?source=.*_annual[\s\S]*?>([^<>]+)<\/a>/) == null ? {tag:null,text:null} : {tag:self.payload.html.match(/<a href="https:\/\/www.douban.com\/game\/annual2016\/\?source=.*_annual[\s\S]*?>([^<>]+)<\/a>/)[0],text:self.payload.html.match(/<a href="https:\/\/www.douban.com\/game\/annual2016\/\?source=.*_annual[\s\S]*?>([^<>]+)<\/a>/)[1]}
      ]
      html = html.replace(movie.tag, `<router-link :to="'/movie/annual2016/0'">${movie.text}</router-link>`);
      html = html.replace(book.tag, `<router-link :to="'/book/annual2016/0'">${book.text}</router-link>`);
      html = html.replace(music.tag, `<router-link :to="'/music/annual2016/0'">${music.text}</router-link>`);
      html = html.replace(drama.tag, `<router-link :to="'/drama/annual2016/0'">${drama.text}</router-link>`);
      html = html.replace(game.tag, `<router-link :to="'/game/annual2016/0'">${game.text}</router-link>`);
      Vue.component('epilogue', {
        template: html
      });
    },
    computed: {
      isPhone(){
        return this.$store.state.isPhone;
      },
      backgroundImg() {
        return `/resources?type=image&request=${this.isPhone ? this.payload.mobile_background_img : this.payload.background_img}`;
      }
    }
  }
</script>

<style>
  .Epilogue {
    padding: 2rem 1.5rem;
  }
  .EpilogueHTML {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    justify-content: space-between;
    max-height: 30em;
  }
  .ExchangeLinks {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 48rem;
  }
  .ExchangeLinks a {
    font-size: 1.5rem;
    width: 13em;
    text-align: center;
  }
  .QRCode {
    width: 20rem;
  }
  #QR {
    position: absolute;
    top: -9999px;
    left: -9999px;
    display: none;
  }
  @media (max-width: 36rem) {
    .Epilogue {
      padding: 0 1.5rem;
    }
    .Epilogue p {
      font-size: 1.2rem;
    }
    .ExchangeLinks {
      width: 100%;
      justify-content: center;
    }
    .ExchangeLinks a {
      font-size: 1.25rem;
    }
    #QR {
      display: initial
    }
  }
  .end-page {
    position: relative;
    height: 100%;
    overflow: hidden;
    color: #fff;
    background-color: #000;
    background-size: cover;
    background-position: 50%;
    z-index: 0
  }
  .navigation-container {
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
    .navigation-container {
      padding: 40px 0 50px
    }
  }
  .navigation-container h1,
  .navigation-container h2,
  .navigation-container h3,
  .navigation-container h4,
  .navigation-container h5 {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility
  }
  .navigation-container h1 {
    font-weight: 400
  }
  .navigation {
    max-width: 1024px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 100%
  }
  @media only screen and (max-width:1024px) {
    .navigation {
      max-width: auto;
      box-sizing: border-box;
      padding: 0 1.5rem
    }
  }
  .navigation>*+* {
    margin-top: 4rem
  }
  @media only screen and (max-width:414px) {
    .navigation>*+* {
      margin-top: 2rem
    }
  }
  .navigation header,
  .navigation p {
    text-align: center
  }
  .navigation h1 {
    font-size: 0;
    padding-bottom: .2rem;
    display: inline-block;
    width: 98px;
    height: 46px;
    background: url(data:image/png;base64,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);
    background-size: cover
  }
  .navigation p {
    font-size: 1.5rem;
    line-height: 1.6;
    white-space: pre-wrap
  }
  .ExchangeLinks {
    max-width: 800px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
  }
  .ExchangeLinks a {
    display: block;
    color: #fff;
    border: 1px solid #fff;
    border-radius: .75rem;
    font-size: 1.5rem;
    padding: .5em 1.2em;
    margin-bottom: 1.5rem;
    -webkit-transition: all .3s;
    transition: all .3s
  }
  .ExchangeLinks a:hover {
    background: #fff;
    color: #494949
  }
</style>
