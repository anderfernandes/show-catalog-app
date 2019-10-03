<template>
  <div class="ui container">
    <br>
    <div class="ui form">
      <div class="four fields">
        <div class="field">
          <label>Show Type</label>
          <sui-dropdown placeholder="Select a show type" search selection :options="show_types" v-model="type" />
        </div>
        <div class="field">
          <label>Show Name</label>
          <input type="text" v-model="name" placeholder="Enter the name of the show" />
        </div>
      </div>
    </div>
    <p class="ui blue message" style="text-align:center">
      <strong>{{ filteredShows.length }}</strong> 
      <span v-if="filteredShows.length == 1"> show</span>
      <span v-else> shows</span>
      found.
    </p>
    <div class="ui active inverted dimmer" v-if="loading">
      <div class="ui text loader">Loading...</div>
    </div>
    <div class="ui link four doubling cards" v-else>
      <div class="card" v-for="show in filteredShows" :key="show.id" @click="$router.push({ name: 'shows', params: { id: show.id, show } })">
        <div class="content">
          <div class="header">{{ show.name }}</div>
          <div class="meta">
            <div class="ui blue label">{{ show.type }}</div>
            <div class="ui basic blue label">{{ show.duration }} minutes</div>
          </div>
        </div>
        <div class="image">
          <img v-if="show.cover[0] == 'h'" class="ui huge image" :src="show.cover" >
          <img v-else class="ui huge image" :src="'https://astral.ctcd.org/storage/' + show.cover" >
        </div>
      </div>
    </div>
    <br>
    <a href="https://astral.anderfernandes.com" target="_blank" class="ui black tiny image label" style="float:right">
      <img src="https://astral.anderfernandes.com/assets/astral-logo-light.png" alt="Astral"> 
      Powered by Astral
    </a>
    <br><br>
  </div>
</template>

<script>

export default {
  data: () => ({
    show_types: [
      { key: 'Any',         text: 'Any',         value: ''            },
      { key: 'Planetarium', text: 'Planetarium', value: 'Planetarium' },
      { key: 'Laser Light', text: 'Laser Light', value: 'Laser Light' },
    ]
  }),
  async mounted() {
    this.loading = true
    await this.$store.dispatch('fetchShows', 'https://astral.ctcd.org/api/shows')
    this.loading = false
  },
  computed: {
    shows() {
      return this.$store.state.shows
    },
    filteredShows() {
      let filteredShows = this.shows
      if (this.type != "")
        filteredShows = filteredShows.filter(s => s.type == this.type)
      if (this.name != "")
        filteredShows = filteredShows.filter(s => s.name.toLowerCase().includes(this.name.toLowerCase()))
      return filteredShows
    },
    loading: {
      set(value) { this.$store.commit('SET_LOADING', value) },
      get() { return this.$store.state.loading }
    },
    name: {
      set(value) { this.$store.commit('SET_NAME', value) },
      get() { return this.$store.state.name }
    },
    type: {
      set(value) { this.$store.commit('SET_TYPE', value) },
      get() { return this.$store.state.type }
    },
  }
}
</script>
