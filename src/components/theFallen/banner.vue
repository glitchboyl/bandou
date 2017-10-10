<template>
  <div class="banner-container">
    <h1>
      <div class="year">{{ payload.title.split('|')[0] }}</div>
      <div class="rip">{{ payload.title.split('|')[1] }}</div>
    </h1>
    <p>{{ payload.description }}</p>
  </div>
</template>

<script>
  export default {
    props: ['payload']
  }
</script>

<style scoped>
  .banner-container {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 45%;
    flex: 1 1 45%;
    text-align: center;
    margin-right: 4rem
  }
  @media only screen and (max-width:1024px) {
    .banner-container {
      margin-right: 2rem
    }
  }
  @media only screen and (max-width:800px) {
    .banner-container {
      margin-right: 0;
      padding: 0 1.5rem 1.5rem
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
  .banner-container h1 {
    display: inline-block;
    position: relative;
    font-weight: 700
  }
  .banner-container p {
    font-size: 1.5rem;
    color: hsla(0, 0%, 100%, .5);
    text-align: left;
    margin-top: 1.5rem
  }
  .year {
    color: hsla(0, 0%, 100%, .2);
    font-size: 13rem;
    line-height: 1
  }
  @media only screen and (max-width:900px) {
    .year {
      font-size: 10rem
    }
  }
  .rip {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    font-size: 2.7rem
  }
</style>
