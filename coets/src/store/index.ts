import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from "@/store/types";
import { user } from "@/store/user";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    helloMessage:"Hello",
    // coets:[{
    //       "id":1,
    //       "codi": "32WESSDS",
    //       "imatge":"AAA",
    //       "propulsors":{
    //                     "potencia1":10,
    //                     "potencia2":30,
    //                     "potencia3":80,
    //                   }
    //       },
    //       {
    //       "id":2,
    //       "codi": "LDSFJA32",
    //       "imatge":"AA",
    //       "propulsors":{
    //                     "potencia1":30,
    //                     "potencia2":40,
    //                     "potencia3":50,
    //                     "potencia4":50,
    //                     "potencia5":30,
    //                     "potencia6":10,
    //                   }
    //       }],

  },

  //  getters:{
  //   getRocket: (state:any) => (id:any) => {
  //     return state.coets.find((coet:any) => coet.id === id)
  //   },

  //   PotenciaMaxima: (state:any)=> {
  //     return state.coets.propulsors.reduce((acc:any, item:any) => acc + item, 0.0),
  //     console.log(PotenciaMaxima)
  //   } 
  // },
  modules:{
    user,
  }
}

export default new Vuex.Store<RootState>(store);
