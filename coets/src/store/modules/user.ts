
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

@Module({ namespaced: true, name: 'test' })

class User extends VuexModule {

  public coets: any[]= [{
    "id":1,
    "codi": "32WESSDS",
    "propulsors":{
                    "potencia1":10,
                    "potencia2":30,
                    "potencia3":80,
                }
    },
    {
    "id":2,
    "codi": "LDSFJA32",
    "propulsors":{
                    "potencia1":30,
                    "potencia2":40,
                    "potencia3":50,
                    "potencia4":50,
                    "potencia5":30,
            "potencia6":10,
                }
    }]



}
export default User