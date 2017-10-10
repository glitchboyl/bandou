<template>
  <div class="banner-container" :class="{reverse}">
      <div class="banner">
        <div class="extra-block" :style="{backgroundColor: payload.background_color}"></div>
        <div class="content-container">
          <div class="content" :style="{backgroundColor: payload.background_color}">
            <h1>
              <div>{{ payload.title.split('|')[0] }}</div>
              <div>{{ payload.title.split('|')[1] }}</div>
            </h1>
            <div class="name">
              <h2>{{ people.name }}</h2>
            </div>
          </div>
        </div>
        <div class="extra-block"></div>
      </div>
    </div>
</template>

<script>
  export default {
    props: ['payload', 'people'],
    computed: {
      reverse() {
        return this.payload.left == 'on';
      }
    }
  }
</script>

<style scoped>
  .banner-container {
    margin-top: -2.5rem
  }
  @media only screen and (max-width:414px) {
    .banner-container {
      margin-bottom: -4rem
    }
  }
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
  .banner {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
  }
  .reverse .banner,
  .reverse .banner .content-container {
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse
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
  .banner .content {
    padding: 2rem 3rem 2rem 0
  }
  .reverse .banner .content {
    padding: 2rem 0 2rem 3rem
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
  .content {
    padding: 2rem 3rem 2rem 0
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
  .name {
    max-width: 23em
  }
  @media only screen and (max-width:414px) {
    .name {
      max-width: 15em
    }
  }
  @media only screen and (max-width:375px) {
    .name {
      max-width: 12em
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
