import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

  state:{

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
      }],

      aparecer1: false,
      aparecer2: false,

      arrayPropulsors:[]

  },

  //Calcular la potencia màxima
  


  getters:{

    //Coet per id
    getCoets: (state) => (id:any) => {
      return state.coets.find((coet:any) => coet.id === id)
    },

    //Array de propulsors
    getPropulsors(state){
       return state.coets.map((coets) => coets.propulsors)
    },

    PotenciaMàxima: (state) => {
      const propulsorsTest = state.coets.propulsors
      return propulsorsTest.reduce((accumulator:any, currentValue:any) => {
        return accumulator + currentValue;
      }, 0);
    },


  },

})

export default store
