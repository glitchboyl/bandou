<template>
  <section class="section">
    <div class="dialogue-container" :style="{backgroundImage: `url('${backgroundImg}')`}">
      <div class="dialogue-content">
        <div class="dialogue">
          <div class="lines-container">
            <div class="movie-lines">
              <div class="movie-dialogue">{{ payload.text }}</div>
              <div class="movie-title">
                <a :href="subject.url" target="_blank">《{{ subject.title }}》</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['payload','subject'],
    computed: {
      isPhone(){
        return this.$store.state.isPhone;
      },
      backgroundImg() {
        const backgroundImg = this.isPhone ? this.payload.mobile_background_img : this.payload.background_img;
        return `https://images.weserv.nl/?url=${backgroundImg.replace(/^http(s)?:\/\//,'')}`;
      }
    },
  }
</script>