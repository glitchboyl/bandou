<template>
  <div class="banner-container" :class="{reverse}">
    <div class="banner">
      <div class="extra-block" :style="{backgroundColor: payload.background_color}"></div>
      <div class="content-container">
        <div class="content" :style="{backgroundColor: payload.background_color}">
          <h1>
            <div>{{ payload.title.split('|')[0] }}</div>
            <div>{{ payload.title.split('|')[1] }}</div>
          </h1>
          <div class="name">
            <h2>{{ people.name }}</h2>
          </div>
        </div>
      </div>
      <div class="extra-block"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['payload', 'people'],
    computed: {
      reverse() {
        return this.payload.left == 'on';
      }
    }
  }
</script>
