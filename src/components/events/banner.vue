<template>
  <div class="banner-container">
    <h1>
      <div>{{ payload.title.split('|')[0] }}</div>
      <div>{{ payload.title.split('|')[1] }}</div>
    </h1>
    <p>{{ payload.description }}</p>
  </div>
</template>

<script>
  export default {
    props: ['payload']
  }
</script>