<template>
  <button class="down-button" @click.prevent.capture="scroll({deltaY:100})"><div class="icon-down"></div></button>
</template>

<script>
  import scroll from '@/assets/js/scroll';
  export default {
    methods: {
      scroll
    }
  }
</script>