<template>
  <section class="section">
    <div class="lyric-container" :style="{backgroundImage: `url('${backgroundImg}')`}">
      <div class="lyric">
        <div class="content-container">
          <div class="content">
            <div v-for="(lyric,index) in lyrics" :data-highlight="lyric.highlight" :style="{color: lyric.color}" :key="index">{{ lyric.content }}</div>
          </div>
          <div class="song-title"><a :href="subject.url" target="_blank">{{ subject.title }}</a></div>
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
        return `/resources?type=image&request=${this.isPhone ? this.payload.mobile_background_img : this.payload.background_img}`;
      },
      lyrics() {
        let self = this;
        let lyrics = self.payload.content;
        let highlight = lyrics.match(/\[[\s\S]*\]/)[0].replace('[','').replace(']','');
        if (highlight.search(/\n/) != -1) highlight = highlight.split(/\n/)[1];
        lyrics = lyrics.split(/\n/);
        lyrics.forEach((cv, i) => {
          if (cv.match(highlight) != null) lyrics = [lyrics.slice(0, i), lyrics.slice(i + 1, lyrics.length)];
        })
        lyrics.forEach((c, i) => {
          if (!i) lyrics[i] = lyrics[i].reverse();
          lyrics[i].forEach((cV, j) => {
            lyrics[i][j] = {
              content: cV,
              color: `rgba(255,255,255,${0.65-0.15*(j+1) <= 0 ? 0 : (0.65-0.15*(j+1)).toFixed(2)})`,
              highlight: false
            }
          })
          if (!i) lyrics[i] = lyrics[i].reverse();
        })
        highlight = {
          content: highlight,
          color: 'rgba(255,255,255,0.65)',
          highlight: true
        }
        return [...lyrics[0], highlight, ...lyrics[1]];
      }
    },
  }
</script>