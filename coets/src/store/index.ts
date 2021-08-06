import Vue from 'vue'
import Vuex from 'vuex'
import User from '@/store/modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    User
  },

  state:{
    test:"holaaa desde store",
    coets: [{
      "id":1,
      "name": "Apolo",
      "codi": "32WESSDS",
      "propulsors":[10,30,80],
      },
      {
      "id":2,
      "name":"Endeavour",
      "codi": "LDSFJA32",
      "propulsors":[30, 40, 50, 50, 30, 10],
      }]
  },

  getters:{
    getCoets: (state) => (id:any) => {
      return state.coets.find((coet:any) => coet.id === id)
    },
  }
})

export default store
