<template>
  <div class="main-container">
    <component v-for="section in subjects" :todo="section.payload" :is="section.kind_str" :key="section.id"></component>
  </div>
</template>

<script>
  import start_page from '@/components/startPage';
  import top10 from '@/components/top10';
  import dialogue from '@/components/dialogue';
  import the_fallen from '@/components/theFallen';
  import person from '@/components/person';
  import end_page from '@/components/navigation';
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
      end_page
    }
  }
</script>

<style scoped>

</style>
