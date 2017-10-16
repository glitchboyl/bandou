<template>
  <div class="list-container" data-scroll="limited">
    <ul class="events-list">
      <li v-for="(event,index) in events" :key="index">
        <a target="_blank">
          <div class="event-image" :style="{backgroundImage: `url('${event.image}')`}"></div>
        </a>
        <div class="name"><span>{{ event.name }}</span></div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['payload'],
    computed: {
      events() {
        return JSON.parse(this.payload);
      }
    }
  }
</script>
