<template>
  <div class="people-container" data-scroll="limited">
    <ul class="people-list"><svg data-def="true"><defs><clipPath id="clipper"><polygon points="22 0, 86 0, 86 122, 0 122, 0 22"></polygon></clipPath></defs></svg>
      <li v-for="(person,index) in people" :key="person.id">
        <a :href="person.url" target="_blank" :title="person.name">
          <div class="nth"><span>{{ index + 1 < 10 ? '0' + (index + 1) : index + 1 }}</span></div>
          <svg class="avatar"><image xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="`/resources?type=image&request=${person.avatar}`" x="0" y="0" width="100%" height="100%" clip-path="url(#clipper)" preserveAspectRatio="xMidYMid slice"></image></svg>
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