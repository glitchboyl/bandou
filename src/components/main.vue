<template>
  <transition name="fade">
    <div class="main-container" :style="{transform: `translate3d(0px, ${Y}%, 0px)`}" @wheel.prevent="scroll($event)">
      <component v-for="(section,index) in subjects" v-if="section" :payload="section.payload" :subjects="section.subjects" :user="section.user" :is="section.kind_str" :key="section.id"></component>
      <section class="section" v-else></section>
    </div>
  </transition>
</template>

<script>
  import TWEEN from '@tweenjs/tween.js';
  import start_page from '@/components/startPage';
  import top10 from '@/components/top10';
  import dialogue from '@/components/dialogue';
  import the_fallen from '@/components/theFallen';
  import person from '@/components/person';
  import end_page from '@/components/navigation';
  import unknown from '@/components/unknown';
  export default {
    name: 'main',
    data() {
      return {
        resolve: true,
        Y: -100 * this.$route.params.nth
      }
    },
    computed: {
      subjects() {
        return this.$store.state[this.$route.params.kind].subjects;
      }
    },
    methods: {
      scroll(e) {
        let self = this;
        if (self.resolve) {
          self.resolve = false;
          let [oldY, newY] = [parseInt(self.Y), parseInt(self.Y)];
          if (e.deltaY == 100)
            newY -= 100;
          else if (e.deltaY == -100)
            newY += 100;
          if (Math.abs(newY / -100) <= self.$store.getters[`${self.$route.params.kind}WidgetsLength`]) {
            function animate() {
              if (TWEEN.update()) {
                requestAnimationFrame(animate);
              }
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
                  self.$router.push(`/${self.$route.params.kind}/annual2016/${Math.abs(newY / -100)}`);
                }
              })
              .start();
            animate();
          } else {
            self.resolve = true;
          }
        }
      }
    },
    components: {
      start_page,
      top10,
      dialogue,
      the_fallen,
      person,
      end_page,
      unknown
    }
  }
</script>

<style scoped>
  .main-container {
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
  }
</style>
