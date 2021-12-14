import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: false,
    loading: false,
    urls: []
  },
  mutations: {
    setAuth(state, payload) {
      state.auth = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    },
    setUrls(state, payload) {
      state.urls = payload
    }
  },
  getters: {
    loading(state) {
      return state.loading
    },
    isAuth(state) {
      return state.auth
    },
    getUrls(state) {
      return state.urls
    }
  },
  actions: {
    async controlAuthUser({ commit }, { user_name, password }) {
      commit('setLoading', true)
      const data = new URLSearchParams({
        user_name,
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
        if(response.auth === true) {
          setTimeout(()=>{
            commit('setLoading', false)
            commit('setAuth', true)
          }, 1500)
          

        } else {
          setTimeout(()=>commit('setLoading', false), 1500)
        }
      } catch( err ) {
        console.error(err)
        commit('setLoading', false)
      }
    },
    async loadUrls({ commit }) {
      const config = {
        method: 'get',
        url: 'http://localhost:3000/api/v1/url',
        Headers: {
          'Content-Type': 'application/json',
          'accept': 'json'
        }
      }

      try {
        const urls = await( await axios(config)).data
        commit('setUrls', urls)
      } catch ( err ) {
        console.error(err)
      }
    },
    addUrl({ dispatch, commit }, url)  {
      commit('setLoading', true)
      const data = new URLSearchParams({ url })
      const config = {
        method: 'post',
        url: 'http://localhost:3000/api/v1/url',
        Headers: {
          'Content-Type': 'application/json',
          'accept': 'json'
        },
        data
      }

      try {
        axios(config)
        dispatch('loadUrls')
      } catch (err) {
        console.error(err)
        
      }
      commit('setLoading', false)
    },
    async registerUser({ commit }, { user_name, password}) {
      commit('setLoading', true)
      const data = new URLSearchParams({
        user_name,
        password
      })
      const config = {
        url: 'http://localhost:3000/api/v1/register-user',
        method: 'post',
        Headers: {
          'Content-Type': 'application/json',
          'accept': 'json'
        },
        data
      }

      try {
        await (axios(config))
        commit('setAuth', true)
        return
      } catch( err ) {
        console.error( err )
      }
      commit('setLoading', false)
    }
  },
  modules: {
  }
})
