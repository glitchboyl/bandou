<template>
  <section class="section">
    <div class="person-container" :style="{backgroundImage: `url('${backgroundImg}')`}">
      <div class="person-holder">
        <div class="person-content person">
          <div class="sub-background" :style="{backgroundColor: payload.sub_background_color}"></div>
          <banner :payload="payload" :people="people[0]"></banner>
          <people :people="people"></people>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import banner from './banner'
  import people from './people'
  export default {
    props: ['payload', 'people'],
    computed: {
      isPhone(){
        return this.$store.state.isPhone;
      },
      backgroundImg() {
        return `/resources?type=image&request=${this.isPhone ? this.payload.mobile_background_img : this.payload.background_img}`;
      }
    },
    components: {
      banner,
      people
    }
  }
</script>