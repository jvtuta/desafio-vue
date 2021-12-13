import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: false,
    loading: false
  },
  mutations: {
    setAuth(state, payload) {
      state.auth = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    }
  },
  getters: {
    loading(state) {
      return state.loading
    }
  },
  actions: {
    async controlAuthUser({ commit }, { nome_usuario, password }) {
      commit('setLoading', true)
      const data = new URLSearchParams({
        nome_usuario,
        password
      })
      const config = {
        method: 'post',
        url: 'http://localhost:3000/api/v1/auth',
        Headers: {
          'Content-Type': 'application/json',
          'accept': 'json'
        },
        data
      }
      try {
        const response = await( await axios(config)).data
        console.log(response)
        if(response.auth === true) {
          setTimeout(()=>commit('setLoading', false), 1500)
          
          commit('setAuth', true)
        }
      } catch( err ) {
        commit('setLoading', false)
        console.error(err)
      }
    }
  },
  modules: {
  }
})
