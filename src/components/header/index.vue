<template>
  <header class="fixed-header">
    <div class="left-part">
      <a :href="payload.url">
        <img :src="payload.icon">
        <span>豆瓣</span>
      </a>
      <span class="subtitle">{{ payload.sub_title }}</span>
      <div class="share-container">
        <div class="share-to">
          <span>分享给朋友</span>
          <div class="share-board">
            <ul>
              <li class="icon-douban" @click="share_to('douban',share_data.douban)">分享到豆瓣</li>
              <li class="icon-weibo" @click="share_to('sina',share_data.sina)">分享到微博</li>
              <li class="icon-wechat">扫码分享到微信</li>
            </ul>
            <div class="qr-code"><img :src="qrImg"></div>
          </div>
        </div>
      </div>
      <span class="page-view">共 {{ pv }} 人访问</span>
    </div>
    <div class="right-part">
      <div class="background-music" v-if="background_musics" @mouseover="showName(false)" @mouseout="showName(true)" @click="toggleMusic">
        <img class="icon-music" :src="icon_music">
        <span class="music-title">{{ isPlaying ? (isShowed ? background_musics.name : '关闭背景音乐') : '播放背景音乐'}}</span>
        <audio :src="background_musics.url" autoplay loop style="display: none;" ref="audio"></audio>
      </div>
      <aside class="doulist" v-click-outside="close">
        <button :class="{isOpened}" @click="toggleList"><div class="icon-doulist">目录</div></button>
        <nav data-scroll="free" v-show="isOpened">
          <ul>
            <li :class="{'isActived':$route.params.nth==index,'icon-indicator':$route.params.nth==index}" v-for="(subject,index) in widget_infos" v-if="subject.title != '留言板'" :key="subject.id"><a>{{ subject.title }}</a></li>
          </ul>
        </nav>
      </aside>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'header',
    data() {
      return {
        isPlaying: true,
        isShowed: true,
        isOpened: false
      }
    },
    computed: {
      pv() {
        return this.$store.state[this.$route.params.kind].pv.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
      },
      payload() {
        return this.$store.state[this.$route.params.kind].payload;
      },
      share_data() {
        return JSON.parse(this.payload.share_data);
      },
      qrImg() {
        return `/resources?type=image&request=${this.payload.qr_img}`;
      },
      background_musics() {
        return JSON.parse(this.payload.background_musics)[0] || null;
      },
      icon_music() {
        return this.isPlaying ? (this.isShowed ? 'data:image/gif;base64,R0lGODlhHAAcAPABAP///wAAACH5BAkeAAEAIf8LTkVUU0NBUEUyLjADAQAAACH/C0ltYWdlTWFnaWNrDWdhbW1hPTAuNDU0NTUALAAAAAAcABwAAAJPjI+py+0BIngUyvrkxE3zfn2LJypkiZyooaah0x6x+SazXbsRdd/6RttlcjJiEIgTwowWZVKD/DGgzB41WnT+rNosdFq9grss8ShMXqkZBQAh+QQJHgABACH/C0ltYWdlTWFnaWNrDWdhbW1hPTAuNDU0NTUALAAAAAAcABwAAAJGjI+py+0PDZggPlptw3rTznCgIo5IaUrYZ67s6E5pnMHxfLe57eL9gjrtEsEDLfQiDoUy4NKYZK6QTdJTVVX+rFlp6qspAAAh+QQJHgABACH/C0ltYWdlTWFnaWNrDWdhbW1hPTAuNDU0NTUALAAAAAAcABwAAAJQjI+py+1vgAQQTlrdzXrytn1LKCZkeZxooKbe00ZvJzGxOeM1nCO333PtaBjFT1jUXZLAofIGXTqbTGR0ag3KsNulTcuSVrtfaXkc5q7WjAIAOw==' :
            'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABGdBTUEAALGPC/xhBQAAAftJREFUSA29ljFOwzAUhglzuQBMFVL3VqyoCwdg6NR7VGLtxF06VFyALgzdYG0PUCYEEt2QUPj+1m5cYydOiHjSX9vP/3t/7SR+zk4SLM/zPrRbcA0uwDmQvYINeAIPWZa90DY3hEZgBVJN3FFtRYK6YJmqEuAptpskDHEI3sBfTTmGpaIigC/gm3wzMAY90DFQXz7NxeLCogRoG0Mrm+O/LP2nTIoDQs9bOX9vL07/mX3jm1QJ2Xm49yBmS8vbtbD0NvrWlpjNW7y9ePytmB/9o5IBsaGVveN/tEqmXdnV9b0JPfzKZ6ZgeDGxgXIA/0XqK2gKXJuVLOgwRUBUzJLg6O11bSrBheuhP7YBsRZOpZhilcvLvZBz7Tl7MSGTJEnMcPWduraW4Nb10O/EBJlLFjOCOiBc2yYLElVLzAieuWr0P5O2tIlYbEtPmVA9c+3KHUiM8Z3ro/8Bbqh/z57fHx7lYnIjQRVP11Rod/ZHMeU45NpnRIukwQ+/6TaaxMob/vBFYNI/2vwxlFzH1cAmrGrhqsq4tj/ajGDo8HbJdcUmbrDpF4e3EV0GSHI1EVNpc+24PBnBWAHWqV95mIsD/G2UaLgAG9EhBP+EV5B87V4xJCgj8RCErhq4a5lyhO8ze6niF+L/XRML2d1qW78IZ65ArM+KW7vq/wAYdECWtmmIzAAAAABJRU5ErkJggg==') :
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAYCAYAAADpnJ2CAAAABGdBTUEAALGPC/xhBQAAAF1JREFUSA3tlcEKACAIQzX8/1+ujrLLEMXTPDWyiU8kt2LcH/mJ/8ianQ9LmL5XwWmiJqTjSGPcEQxxbzVDANSXQtpnCA7rSAP3pPq/QQNUrneognQm1QQhrRKj+Q9prwww1XTWTQAAAABJRU5ErkJggg==';
      },
      widget_infos() {
        return this.$store.state[this.$route.params.kind].widget_infos;
      }
    },
    watch: {
      isPlaying() {
        let self = this;
        let audio = self.$refs.audio;
        return self.isPlaying ? audio.play() : audio.pause();
      }
    },
    methods: {
      share_to(s, data) {
        switch (s) {
          case 'douban':
            window.open(`https://www.douban.com/share/service?href=${encodeURIComponent(data.url)}&name=${encodeURIComponent(data.title)}&text=${encodeURIComponent(data.content)}&comment=${encodeURIComponent(data.comment)}&image=${encodeURIComponent(data.img)}`, '', 'width=500,height=415,toolbar=no,menubar=no,scrollbars=no,resizable=no');
            break;
          case 'sina':
            window.open(`http://service.weibo.com/share/share.php?appkey=3015934887&url=${encodeURIComponent(data.url)}&title=${encodeURIComponent(data.title)}&pic=${encodeURIComponent(data.img)}`, '', 'width=500,height=415,toolbar=no,menubar=no,scrollbars=no,resizable=no');
            break;
        }
      },
      showName(s) {
        this.isShowed = s;
      },
      toggleMusic() {
        this.isPlaying = !this.isPlaying;
      },
      toggleList() {
        this.isOpened = !this.isOpened;
      },
      close() {
        this.isOpened = false;
      }
    }
  }
</script>

<style scoped>
  .fixed-header {
    position: absolute;
    max-width: 1024px;
    width: 100%;
    top: 8px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: 1;
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
  }
  @media only screen and (max-width:1024px) {
    .fixed-header {
      padding: 0 1.5rem;
      box-sizing: border-box
    }
  }
  .left-part,
  .left-part a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
  }
  .left-part a {
    color: #fff
  }
  .left-part a img {
    width: 15px;
    height: 15px;
    margin-right: .5rem;
    vertical-align: middle
  }
  .subtitle {
    margin-left: .5rem
  }
  .share-container {
    margin-left: .5rem;
    padding-left: .5rem;
    border-left: 1px solid #fff
  }
  .share-to {
    position: relative
  }
  .share-to>span {
    cursor: pointer
  }
  .share-to:hover .share-board {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
  }
  .share-board {
    position: absolute;
    top: 100%;
    left: 0;
    box-sizing: border-box;
    padding: 20px;
    color: #fff;
    display: none
  }
  @media only screen and (max-width:414px) {
    .share-board {
      left: 2.5em;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%)
    }
  }
  .share-board:after {
    content: "";
    position: absolute;
    top: 5px;
    left: 0;
    width: 100%;
    height: 100%;
    background: #222;
    border-radius: 4px;
    z-index: -1
  }
  .share-board>* {
    margin-top: 5px
  }
  .share-board li {
    cursor: pointer;
    white-space: nowrap
  }
  .share-board li+li {
    margin-top: 20px
  }
  .share-board li:last-child {
    cursor: default
  }
  .qr-code {
    padding-left: 20px;
    border-left: 1px solid #333;
    margin-left: 20px;
    width: 90px
  }
  .qr-code img {
    width: 100%;
    height: 90px
  }
  .page-view {
    margin-left: .5rem
  }
  .right-part {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
  }
  .background-music {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 20px;
    cursor: pointer
  }
  .icon-music {
    display: inline-block;
    margin-right: 6px;
    height: 12px
  }
  .music-title {
    font-size: 12px
  }
  .doulist {
    position: relative;
    display: inline-block
  }
  .doulist button {
    background: transparent;
    color: #fff;
    border: 1px solid;
    padding: .5rem 1.2rem
  }
  @media only screen and (max-width:320px) {
    .doulist button {
      padding: .5rem .6rem
    }
  }
  .doulist .isOpened {
    background: rgba(0, 0, 0, .9);
    border-color: transparent
  }
  .doulist nav {
    position: absolute;
    right: 0;
    background: rgba(0, 0, 0, .9);
    padding: 1.8rem 2rem 1.8rem 2.5rem;
    line-height: 1;
    white-space: nowrap;
    max-height: 70vh;
    overflow: auto;
    -webkit-overflow-scrolling: touch
  }
  .doulist li+li {
    margin-top: 1rem
  }
  .doulist a {
    color: hsla(0, 0%, 100%, .54);
    -webkit-transition: color .3s;
    transition: color .3s
  }
  .doulist .isActived a,
  .doulist a:hover {
    color: #fff
  }
  .doulist {
    position: relative;
    display: inline-block
  }
  .doulist button {
    background: transparent;
    color: #fff;
    border: 1px solid;
    padding: .5rem 1.2rem
  }
  @media only screen and (max-width:320px) {
    .doulist button {
      padding: .5rem .6rem
    }
  }
  .doulist .isOpened {
    background: rgba(0, 0, 0, .9);
    border-color: transparent
  }
  .doulist nav {
    position: absolute;
    right: 0;
    background: rgba(0, 0, 0, .9);
    padding: 1.8rem 2rem 1.8rem 2.5rem;
    line-height: 1;
    white-space: nowrap;
    max-height: 70vh;
    overflow: auto;
    -webkit-overflow-scrolling: touch
  }
  .doulist li+li {
    margin-top: 1rem
  }
  .doulist a {
    color: hsla(0, 0%, 100%, .54);
    -webkit-transition: color .3s;
    transition: color .3s
  }
  .doulist .isActived a,
  .doulist a:hover {
    color: #fff
  }
</style>
