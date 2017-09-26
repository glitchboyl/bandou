<template>
  <div id="app">
    <div data-reactroot>
      <div class="app-container">
        <fixed-header v-if="widgetInfosLength > 0"></fixed-header>
        <router-view v-if="widgetInfosLength > 0"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import fixedHeader from './components/header';
  export default {
    name: 'app',
    computed: {
      widgetInfosLength() {
        return this.$store.getters[`${this.$route.params.kind}WidgetsLength`];
      }
    },
    components: {
      fixedHeader
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
