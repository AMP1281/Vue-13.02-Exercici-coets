import { GetterTree } from "vuex";
import { UserState } from "@/store/user/types";
import { RootState } from "@/store/types";


export const getters:GetterTree<UserState, RootState> = {
    getUserInfo (state):string{
        return 'Username: ${state.username} - Email:${state.email}';
    },

    getRocket: (state:any) => (id:number) => {
        return state.coets.find((coet:any) => coet.id === id)
    },


}