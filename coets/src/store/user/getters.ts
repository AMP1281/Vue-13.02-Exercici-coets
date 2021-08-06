import { GetterTree } from "vuex";
import { UserState } from "@/store/user/types";
import { RootState } from "@/store/types";


export const getters:GetterTree<UserState, RootState> = {
    getUserInfo (state):string{
        return 'Username: ${state.username} - Email:${state.email}';
    }
}