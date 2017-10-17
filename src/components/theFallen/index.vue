<template>
  <section class="section">
    <div class="fallen-container">
      <div class="fallen-holder">
        <div class="fallen-content">
          <banner :payload="payload"></banner>
          <people :payload="payload" :people="people"></people>
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