<template>
  <div class="main-container" :style="{transform: `translate3d(0px, ${-100 * $route.params.nth}%, 0px)`}">
    <component v-for="(section,index) in subjects" v-if="section" :payload="section.payload" :subjects="section.subjects" :user="section.user" :is="section.kind_str" :key="section.id"></component>
    <section class="section" v-else></section>
  </div>
</template>

<script>
  import start_page from '@/components/startPage';
  import top10 from '@/components/top10';
  import dialogue from '@/components/dialogue';
  import the_fallen from '@/components/theFallen';
  import person from '@/components/person';
  import end_page from '@/components/navigation';
  import unknown from '@/components/unknown';
  export default {
    name: 'main',
    computed: {
      subjects() {
        return this.$store.state[this.$route.params.kind].subjects;
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
