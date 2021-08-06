import { Module } from "vuex";
import { RootState } from "@/store/types";
import { UserState } from "@/store/user/types";
import { getters } from "@/store/user/getters";
import { mutations } from "@/store/user/mutations";

const state: UserState = {

    coets:[{
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
            }],
}

export const user: Module <UserState, RootState> ={
    state,
    getters,
    mutations
}