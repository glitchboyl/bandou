<template>
  <div id="app">
    <div data-reactroot>
      <div class="app-container">
        <fixed-header v-if="subjectsLength > 0"></fixed-header>
        <router-view v-if="subjectsLength > 0"></router-view>
        <down-button v-if="subjectsLength > 0"></down-button>
      </div>
    </div>
  </div>
</template>

<script>
  import fixedHeader from './components/header';
  import downButton from './components/common/downButton';
  export default {
    name: 'app',
    computed: {
      subjectsLength() {
        return this.$store.getters[`${this.$route.params.kind}SubjectsLength`];
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
  #app,
  [data-reactroot],
  body,
  html {
    height: 100%;
    overflow: hidden;
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
