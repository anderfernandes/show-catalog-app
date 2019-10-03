<template>
  <div class="ui container">
    <router-link to="/" class="ui button">
      <i class="chevron left icon"></i>
      Back
    </router-link>
    <div class="ui unstackable items">
      <div class="item">
        <div class="ui rounded medium image">
          <img :src="show.cover">
        </div>
        <div class="content">
          <div class="ui huge header">{{ show.name }}</div>
          <div class="meta">
            <div class="ui blue label">{{ show.type }}</div>
            <div class="ui basic blue label">{{ show.duration }} minutes</div>
          </div>
          <div class="description" v-html="description"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import marked from 'marked'

  export default {
    props: ['show'],
    computed: {
      description() {
        return marked(this.show.description)
      }
    },
  }
</script>