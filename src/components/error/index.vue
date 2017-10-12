<template>
  <section class="section">
    <div class="error">
      加载失败了，刷新试试。<br> "Hello IT, have you tried turning it off and on again?"
    </div>
  </section>
</template>

<script>
  export default {}
</script>

<style scoped>
  .error {
    height: 100%;
    background: #000;
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 1.2rem;
    line-height: 2;
    padding: 0 1.5rem
  }
</style>
