<template>
  <section class="section">
    <div class="dialogue-container" :style="{backgroundImage: `url('${backgroundImg}')`}">
      <div class="dialogue-content">
        <div class="dialogue">
          <div class="excerpt-container">
            <div class="movie-excerpt">
              <div class="movie-dialogue">{{ payload.text }}</div>
              <div class="movie-title">
                <a :href="subject.url" target="_blank">《{{ subject.title }}》</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['payload','subject'],
    computed: {
      backgroundImg() {
        return `/resources?type=image&request=${this.payload.background_img}`;
      }
    },
  }
</script>

<style scoped>
  .dialogue-container {
    position: relative;
    height: 100%;
    overflow: hidden;
    color: #fff;
    background-color: #000;
    background-size: cover;
    background-position: 50%;
    z-index: 0
  }
  .dialogue-content {
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
    .dialogue-content {
      padding: 40px 0 50px
    }
  }
  .dialogue-content h1,
  .dialogue-content h2,
  .dialogue-content h3,
  .dialogue-content h4,
  .dialogue-content h5 {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility
  }
  .dialogue-content h1 {
    font-weight: 400
  }
  .dialogue {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 100%;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    position: relative;
    bottom: -80px
  }
  .excerpt-container {
    color: #000;
    background: #fff;
    padding-bottom: 80px;
    padding-top: 3rem;
    width: 100%
  }
  @media only screen and (max-width:414px) {
    .excerpt-container {
      padding-top: 2.5rem
    }
  }
  .movie-excerpt {
    max-width: 1024px;
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    font-family: STFangsong, Fangsong, FangSong_GB2312, STSong, serif
  }
  .movie-excerpt>* {
    width: 100%
  }
  @media only screen and (max-width:1024px) {
    .movie-excerpt {
      padding: 0 1.5rem
    }
  }
  .movie-dialogue {
    font-size: calc(2rem + 3 * (100vw - 414px) / 952);
    text-align: center;
    line-height: 1.5
  }
  @media only screen and (max-width:414px) {
    .movie-dialogue {
      text-align: left
    }
  }
  .movie-title {
    text-align: right;
    font-size: calc(1.3rem + 2.7 * (100vw - 414px) / 952);
    margin-top: 1.5rem
  }
  .movie-title:before {
    content: "\2014\2014"
  }
</style>
