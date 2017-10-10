<template>
  <section class="section">
    <div class="fallen-container">
      <div class="fallen-holder">
        <div class="fallen-content">
          <banner :payload="payload"></banner>
          <people :people="people"></people>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import banner from './banner'
  import people from './people'
  export default {
    props: ['payload', 'people'],
    components: {
      banner,
      people
    }
  }
</script>

<style scoped>
  .fallen-container {
    position: relative;
    height: 100%;
    overflow: hidden;
    color: #fff;
    background-color: #000;
    background-size: cover;
    background-position: 50%;
    z-index: 0
  }
  .fallen-holder {
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
    .fallen-holder {
      padding: 40px 0 50px
    }
  }
  .fallen-content {
    max-width: 1024px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
  }
  @media only screen and (max-width:1024px) {
    .fallen-content {
      margin: 0 1.5rem;
      max-width: 100%
    }
  }
  @media only screen and (max-width:800px) {
    .fallen-content {
      -ms-flex-wrap: wrap;
      flex-wrap: wrap
    }
    .fallen-content>* {
      width: 100%
    }
  }
</style>
