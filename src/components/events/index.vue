<template>
  <section class="section">
    <div class="events-container">
      <div class="events-content">
        <div class="events">
          <banner :payload="payload"></banner>
          <events :payload="payload.data"></events>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import banner from './banner';
  import events from './events'
  export default {
    props: ['payload'],
    components: {
      banner,
      events
    }
  }
</script>
