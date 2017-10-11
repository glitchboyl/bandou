<template>
  <div id="app" v-cloak>
    <div data-reactroot>
      <div class="app-container">
        <fixed-header v-if="subjectsLength > 0"></fixed-header>
        <router-view v-if="subjectsLength > 0" :style="{transform: `translate3d(0px, ${Y}%, 0px)`}"></router-view>
        <down-button v-if="subjectsLength > 0"></down-button>
      </div>
    </div>
  </div>
</template>

<script>
  import TWEEN from '@tweenjs/tween.js';
  import fixedHeader from './components/header';
  import downButton from './components/common/downButton';
  export default {
    name: 'app',
    computed: {
      subjectsLength() {
        return this.$store.getters[`${this.$route.params.kind}SubjectsLength`];
      },
      Y() {
        return this.$store.state.Y;
      }
    },
    components: {
      fixedHeader,
      downButton
    }
  }
</script>

<style>
  @import './assets/style/common.css';
  [v-cloak] {
    display: none;
  }
  #app,
  [data-reactroot],
  body,
  html {
    height: 100%;
    overflow: hidden;
  }
  body {
    background-color: #000000;
  }
  .app-container {
    overflow: hidden;
    position: relative;
  }
  .app-container,
  .main-container,
  .section {
    height: 100%;
  }
</style>
