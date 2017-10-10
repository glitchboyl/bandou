<template>
  <div class="people-container" data-scroll="limited">
    <ul class="people-list">
      <li v-for="person in people" :key="person.id">
        <a :href="person.url" target="_blank">
          <div class="avatar" :style="{backgroundImage: `url('${person.avatar}')`}"></div>
        </a>
        <div class="name">
          <span>{{ person.name }}</span>
          <span>{{ person.name_en }}</span>
        </div>
        <div class="description">
          {{ person.profession }} {{ person.age }}
        </div>
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
    -webkit-box-flex: 1;
    -ms-flex: 1 1 45%;
    flex: 1 1 45%;
    text-align: center;
    margin-right: 4rem
  }
  @media only screen and (max-width:1024px) {
    .people-container {
      margin-right: 2rem
    }
  }
  @media only screen and (max-width:800px) {
    .people-container {
      margin-right: 0;
      padding: 0 1.5rem 1.5rem
    }
  }
  .people-container {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 55%;
    flex: 1 1 55%
  }
  @media only screen and (max-width:800px) {
    .people-container {
      overflow: auto;
      -webkit-overflow-scrolling: touch
    }
  }
  @media only screen and (max-width:800px) {
    .people-container>ul {
      display: inline-block;
      white-space: nowrap;
      margin-right: 1.5rem
    }
    .people-container>ul>li {
      display: inline-block;
      vertical-align: top
    }
  }
  .people-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
  }
  @media only screen and (max-width:800px) {
    .people-list {
      -ms-flex-wrap: initial;
      flex-wrap: nowrap
    }
  }
  .people-list li {
    width: 33.33%;
    font-size: 1.1rem;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #fff
  }
  .people-list li:nth-child(n+4) {
    margin-top: 1.5rem
  }
  @media (max-height:650px) {
    .people-list li:nth-child(n+4) {
      margin-top: .5rem
    }
  }
  @media only screen and (max-width:800px) {
    .people-list li:nth-child(n+4) {
      margin-top: 0
    }
  }
  @media only screen and (max-width:800px) {
    .people-list li {
      width: auto;
      margin-right: 1rem
    }
  }
  .people-list li>a {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }
  .people-list li .avatar {
    width: 9rem
  }
  @media only screen and (max-width:1366px) {
    .people-list li .avatar {
      width: 7.2rem
    }
  }
  @media (max-height:650px) {
    .people-list li .avatar {
      width: 6.5rem
    }
  }
  .avatar {
    overflow: hidden;
    border-radius: 2px;
    background-position: 50%;
    background-size: cover;
    background-color: #d3d3d3
  }
  .avatar:before {
    content: "";
    float: left;
    margin-top: 123%
  }
  .name {
    margin-top: .6rem
  }
  .name span {
    display: block;
    white-space: nowrap;
    line-height: 1.36
  }
  @media only screen and (max-width:800px) {
    .name span {
      white-space: normal;
      width: 7.2rem
    }
  }
  .description {
    width: 100%;
    font-size: .95rem
  }
</style>
