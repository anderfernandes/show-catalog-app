<template>
  <div class="ui container">
    <br />
    <router-link to="/" class="ui button">
      <i class="chevron left icon"></i>
      Back
    </router-link>
    <div class="ui unstackable items">
      <div class="item">
        <div class="ui rounded medium image">
          <img :src="show.cover" />
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
    <div class="ui basic segment" v-if="show.trailer_url">
      <div class="ui horizontal divider header">
        <i class="film icon"></i>
        Trailer
      </div>
      <sui-embed :placeholder="show.cover" :source="show.trailer_provider" :id="show.trailer_id" />
    </div>
    <br />
    <a
      href="https://astral.anderfernandes.com"
      target="_blank"
      class="ui black tiny image label"
      style="float:right"
    >
      <img src="https://astral.anderfernandes.com/assets/astral-logo-light.png" alt="Astral" />
      Powered by Astral
    </a>
    <br />
    <br />
  </div>
</template>

<script>
import marked from "marked";

export default {
  props: ["show"],
  computed: {
    description() {
      return marked(this.show.description);
    }
  }
};
</script>

<style>
.ui.embed > .placeholder {
  width: inherit !important;
  transform: translate(-50%, -50%) !important;
  left: 50%;
  top: 50%;
}
.ui.embed {
  background: #000 !important;
}
</style>