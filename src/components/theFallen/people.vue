<template>
  <div class="people-container" data-scroll="limited">
    <ul class="people-list">
      <li v-for="person in fallenList" :key="person.id">
        <a :href="person.url" target="_blank">
          <div class="avatar" :style="{backgroundImage: `url('${typeof person.avatar == 'undefined' ? person.image : person.avatar}')`}"></div>
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
    props: ['payload', 'people'],
    data() {
      let self = this;
      return {
        fallenList: self.people.length > 0 ? self.people : JSON.parse(self.payload.data)
      }
    }
  }
</script>
