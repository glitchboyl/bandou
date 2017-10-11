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

<style scoped>
  .person-container {
    position: relative;
    height: 100%;
    overflow: hidden;
    color: #fff;
    background-color: #000;
    background-size: cover;
    background-position: 50%;
    z-index: 0
  }
  .person-holder {
    width: 100%;
    height: 100%;
    padding: 60px 0 80px;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    z-index: 1
  }
  @media only screen and (max-width:414px) {
    .person-holder {
      padding: 40px 0 50px
    }
  }
  .person-content {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
  }
  .person .sub-background {
    content: "";
    bottom: 0;
    left: 0;
    right: 0;
    height: 250px;
    position: absolute;
    z-index: -1
  }
  @media only screen and (max-width:414px) {
    .person .sub-background {
      height: 200px
    }
  }
</style>
