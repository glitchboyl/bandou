<template>
  <section class="section">
    <div class="excerpt-container" :style="{backgroundImage: `url('${backgroundImg}')`}">
      <div class="excerpt">
        <div class="content-container">
          <div class="content">
            <p v-html="content"></p>
            <div>
              <a :href="subject.m_url" target="_blank">—— 《{{ subject.title }}》</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['payload', 'subject'],
    computed: {
      isPhone() {
        return this.$store.state.isPhone;
      },
      backgroundImg() {
        const backgroundImg = this.isPhone ? this.payload.mobile_background_img : this.payload.background_img;
        return `https://images.weserv.nl/?url=${backgroundImg.replace(/^http(s)?:\/\//,'')}`;
      },
      content() {
        let self = this;
        let highlights = self.payload.content.match(/\[([^<>]+)\]/);
        if (highlights == null) return self.payload.content
        else {
          return self.payload.content.replace(highlights[0], `<span style="background: ${self.payload.highlights_color}">${highlights[1]}</span>`)
        }
      }
    },
  }
</script>