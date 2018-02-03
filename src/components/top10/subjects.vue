<template>
  <div class="subjects-container" data-scroll="limited">
    <ul class="subjects-list"><svg data-def="true"><defs><clipPath id="clipper"><polygon points="22 0, 86 0, 86 122, 0 122, 0 22"></polygon></clipPath></defs></svg>
      <li v-for="(subject,index) in subjects" :key="subject.id">
        <a :href="subject.url" class="subject" target="_blank" :title="subject.title">
          <div class="nth">
            <span>{{ index + 1 < 10 ? '0' + (index + 1) : index + 1 }}</span>
          </div>
          <svg class="cover"><image xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="`https://images.weserv.nl/?url=${subject.cover.replace(/^http(s)?:\/\//,'')}`" x="0" y="0" width="100%" height="100%" clip-path="url(#clipper)" preserveAspectRatio="xMidYMid slice"></image></svg>
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