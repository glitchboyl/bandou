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

<style scoped>
  .down-button {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background: transparent;
    border: 1px solid #fff;
    position: absolute;
    bottom: 1.5rem;
    right: 2rem;
    mix-blend-mode: difference;
    z-index: 3
  }
  .down-button div {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: .5em
  }
  @media only screen and (max-width:414px) {
    .down-button {
      height: 2rem;
      border: 0;
      left: 50%;
      right: auto;
      bottom: 1rem;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%)
    }
  }
</style>
