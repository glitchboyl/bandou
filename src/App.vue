<template>
  <div id="app" v-cloak>
    <div data-reactroot>
      <div class="app-container">
        <fixed-header v-if="subjectsLength > 0"></fixed-header>
        <router-view v-if="subjectsLength > 0" :style="{transform: `translate3d(0px, ${Y}%, 0px)`}" :scroll="scroll"></router-view>
        <down-button v-if="subjectsLength > 0 && parseInt($route.params.nth) + 1 < widgetsLength" :scroll="scroll"></down-button>
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
    data() {
      let self = this;
      return {
        resolve: true,
        Y: 0
      }
    },
    computed: {
      subjectsLength() {
        return this.$store.getters[`${this.$route.params.kind}SubjectsLength`];
      },
      widgetsLength() {
        return this.$store.getters[`${this.$route.params.kind}WidgetsLength`];
      }
    },
    watch: {
      '$route' (to, from) {
        this.Y = -100 * parseInt(to.params.nth);
      }
    },
    methods: {
      scroll(e) {
        let self = this;
        if (self.resolve) {
          self.resolve = false;
          let {
            kind,
            nth
          } = self.$route.params;
          let [oldY, newY] = [parseInt(self.Y), parseInt(self.Y)];
          if (e.deltaY == 100) {
            if (parseInt(nth) + 1 == self.subjectsLength) {
              self.resolve = true;
              return;
            }
            newY -= 100;
          } else if (e.deltaY == -100) {
            if (parseInt(nth) == 0) {
              self.resolve = true;
              return;
            }
            newY += 100;
          }
          if (Math.abs(newY / -100) < self.widgetsLength) {
            function animate() {
              if (TWEEN.update())
                requestAnimationFrame(animate);
            }
            new TWEEN.Tween({
                tweeningNumber: oldY
              })
              .easing(TWEEN.Easing.Quadratic.Out)
              .to({
                tweeningNumber: newY
              }, 600)
              .onUpdate(that => {
                self.Y = that.tweeningNumber.toFixed(2);
                if (self.Y == newY) {
                  self.resolve = true;
                  self.$router.push(`/${kind}/annual2016/${Math.abs(newY / -100)}`);
                }
              })
              .start();
            animate();
          } else
            self.resolve = true;
        }
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
