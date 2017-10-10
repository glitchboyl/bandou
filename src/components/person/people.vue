<template>
  <div class="people-container" data-scroll="limited">
    <ul class="people-list"><svg data-def="true"><defs><clipPath id="clipper"><polygon points="22 0, 86 0, 86 122, 0 122, 0 22"></polygon></clipPath></defs></svg>
      <li v-for="(person,index) in people" :key="person.id">
        <a :href="person.url" target="_blank" :title="person.name">
          <div class="nth"><span>{{ index + 1 < 10 ? '0' + (index + 1) : index + 1 }}</span></div>
          <svg class="avatar"><image xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="person.avatar" x="0" y="0" width="100%" height="100%" clip-path="url(#clipper)" preserveAspectRatio="xMidYMid slice"></image></svg>
          <div class="name">{{ person.name }}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['people']
  }
</script>

<style scoped>
  .people-container {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }
  @media only screen and (max-width:414px) {
    .people-container {
      display: initial
    }
  }
  @media only screen and (max-width:1024px) {
    .people-container {
      box-sizing: border-box;
      overflow: auto;
      -webkit-overflow-scrolling: touch
    }
  }
  .people-container {
    margin-bottom: -2.5rem
  }
  @media only screen and (max-width:414px) {
    .people-container {
      margin-bottom: -4rem
    }
  }
  .people-list {
    white-space: nowrap
  }
  @media only screen and (max-width:1024px) {
    .people-list {
      display: inline-block;
      padding: 0 1.5rem
    }
  }
  .people-list svg[data-def] {
    position: absolute;
    left: -9999px;
    top: -9999px
  }
  .people-list li {
    white-space: normal;
    width: 86px;
    color: #494949;
    display: inline-block;
    vertical-align: top;
    position: relative
  }
  @media only screen and (max-width:414px) {
    .people-list li {
      -webkit-transform: scale(.9);
      transform: scale(.9)
    }
  }
  .people-list li+li {
    margin-left: 18.2px
  }
  @media only screen and (max-width:414px) {
    .people-list li+li {
      margin-left: 15px
    }
  }
  .people-list li a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-top: 20px;
    color: #494949
  }
  .nth {
    font-size: 20px;
    position: absolute;
    top: 20px;
    left: 0;
    background: inherit;
    width: 30px;
    height: 30px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-transform: rotate(45deg) translate(-50%, -50%);
    transform: rotate(45deg) translate(-50%, -50%);
    -webkit-transform-origin: top left;
    transform-origin: top left
  }
  .nth span {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    color: #fff
  }
  .nth:after {
    content: "";
    position: absolute;
    top: -7px;
    bottom: -7px;
    right: 0;
    width: 1px;
    background: #fff
  }
  .avatar {
    width: 86px;
    height: 122px
  }
  .name {
    box-sizing: border-box;
    padding: 5px 8px;
    line-height: 17px;
    width: 86px;
    height: 34px
  }
</style>
