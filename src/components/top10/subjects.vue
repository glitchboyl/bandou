<template>
  <div class="subjects-container" data-scroll="limited">
    <ul class="subjects-list"><svg data-def="true"><defs><clipPath id="clipper"><polygon points="22 0, 86 0, 86 122, 0 122, 0 22"></polygon></clipPath></defs></svg>
      <li v-for="(subject,index) in subjects" :key="subject.id">
        <a :href="subject.url" class="subject" target="_blank" :title="subject.title">
          <div class="nth">
            <span>{{ index + 1 < 10 ? '0' + (index + 1) : index + 1 }}</span>
          </div>
          <svg class="cover"><image xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="subject.cover" x="0" y="0" width="100%" height="100%" clip-path="url(#clipper)" preserveAspectRatio="xMidYMid slice"></image></svg>
          <div class="title">
            {{ subject.title.length >= 9 ? subject.title.substr(0,5) + '...' : subject.title }}
            <span class="rating">{{ subject.rating.toFixed(1) }}</span></div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['subjects']
  }
</script>

<style scoped>
  .subjects-container {
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
    .subjects-container {
      display: initial
    }
  }
  @media only screen and (max-width:1024px) {
    .subjects-container {
      box-sizing: border-box;
      overflow: auto;
      -webkit-overflow-scrolling: touch
    }
  }
  .subjects-list {
    white-space: nowrap
  }
  @media only screen and (max-width:1024px) {
    .subjects-list {
      display: inline-block;
      padding: 0 1.5rem
    }
  }
  .subjects-list svg[data-def] {
    position: absolute;
    left: -9999px;
    top: -9999px
  }
  .subjects-list li {
    white-space: normal;
    width: 86px;
    color: #494949;
    display: inline-block;
    vertical-align: top;
    position: relative
  }
  @media only screen and (max-width:414px) {
    .subjects-list li {
      -webkit-transform: scale(.9);
      transform: scale(.9)
    }
  }
  .subjects-list li+li {
    margin-left: 18.2px
  }
  @media only screen and (max-width:414px) {
    .subjects-list li+li {
      margin-left: 15px
    }
  }
  .subjects-list li a {
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
  .cover {
    width: 86px;
    height: 122px
  }
  .subject .title {
    background: rgba(0, 0, 0, .5);
    color: #fff
  }
  .title {
    box-sizing: border-box;
    padding: 5px 8px;
    line-height: 17px;
    width: 86px;
    height: 34px
  }
  .rating {
    color: #f6a623;
    display: inline-block
  }
</style>
