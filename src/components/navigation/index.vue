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
        self.payload.html.match(/<a\s*href="https:\/\/movie.douban.com\/annual2016\/\?source=.*_annual" target="_blank">([^<>]+)<\/a>/) == null ? {tag:null,text:null} : {tag:self.payload.html.match(/<a\s*href="https:\/\/movie.douban.com\/annual2016\/\?source=.*_annual" target="_blank">([^<>]+)<\/a>/)[0],text:self.payload.html.match(/<a\s*href="https:\/\/movie.douban.com\/annual2016\/\?source=.*_annual" target="_blank">([^<>]+)<\/a>/)[1]},
        self.payload.html.match(/<a\s*href="https:\/\/book.douban.com\/annual2016\/\?source=.*_annual" target="_blank">([^<>]+)<\/a>/) == null ? {tag:null,text:null} : {tag:self.payload.html.match(/<a\s*href="https:\/\/book.douban.com\/annual2016\/\?source=.*_annual" target="_blank">([^<>]+)<\/a>/)[0],text:self.payload.html.match(/<a\s*href="https:\/\/book.douban.com\/annual2016\/\?source=.*_annual" target="_blank">([^<>]+)<\/a>/)[1]},
        self.payload.html.match(/<a\s*href="https:\/\/music.douban.com\/annual2016\/\?source=.*_annual" target="_blank">([^<>]+)<\/a>/) == null ? {tag:null,text:null} : {tag:self.payload.html.match(/<a\s*href="https:\/\/music.douban.com\/annual2016\/\?source=.*_annual" target="_blank">([^<>]+)<\/a>/)[0],text:self.payload.html.match(/<a\s*href="https:\/\/music.douban.com\/annual2016\/\?source=.*_annual" target="_blank">([^<>]+)<\/a>/)[1]},
        self.payload.html.match(/<a\s*href="https:\/\/www.douban.com\/location\/drama\/annual2016\/\?source=.*_annual" target="_blank">([^<>]+)<\/a>/) == null ? {tag:null,text:null} : {tag:self.payload.html.match(/<a\s*href="https:\/\/www.douban.com\/location\/drama\/annual2016\/\?source=.*_annual" target="_blank">([^<>]+)<\/a>/)[0],text:self.payload.html.match(/<a\s*href="https:\/\/www.douban.com\/location\/drama\/annual2016\/\?source=.*_annual" target="_blank">([^<>]+)<\/a>/)[1]},
        self.payload.html.match(/<a\s*href="https:\/\/www.douban.com\/game\/annual2016\/\?source=.*_annual[\s\S]*?>([^<>]+)<\/a>/) == null ? {tag:null,text:null} : {tag:self.payload.html.match(/<a\s*href="https:\/\/www.douban.com\/game\/annual2016\/\?source=.*_annual[\s\S]*?>([^<>]+)<\/a>/)[0],text:self.payload.html.match(/<a\s*href="https:\/\/www.douban.com\/game\/annual2016\/\?source=.*_annual[\s\S]*?>([^<>]+)<\/a>/)[1]}
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
