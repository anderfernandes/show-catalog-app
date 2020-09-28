import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true,
    shows: [],
    announcements: [],
    name: '',
    type: '',
  },
  mutations: {
    SET_SHOWS(state, shows) {
      Object.assign(state, { shows })
    },
    SET_LOADING(state, loading) {
      Object.assign(state, { loading })
    },
    SET_NAME(state, name) {
      Object.assign(state, { name })
    },
    SET_TYPE(state, type) {
      Object.assign(state, { type })
    },
    SET_ANNOUNCEMENTS(state, announcements) {
      Object.assign(state, { announcements })
    }
  },
  actions: {
    async fetchShows({ commit }, payload) {
      try {
        const response = await axios.get(payload)
        // Filtering unwanted shows: Classic Movies and Inactive
        const filteredShows = response.data.data
          .filter(s => s.type != "Classic Movies")
          .filter(s => s.active != "0")
        commit('SET_SHOWS', filteredShows)
      } catch(error) {
        alert(`Error in fetchShows: ${error.message}`)
      }
    }
  },
})
