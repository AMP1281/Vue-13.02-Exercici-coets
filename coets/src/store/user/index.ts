import { Module } from "vuex";
import { RootState } from "@/store/types";
import {UserState} from "@/store/user/types";
import {getters} from "@/store/user/getters";
import {mutations} from "@/store/user/mutations";

const state: UserState = {
    username:"aa",
    email:"@",
}

export const user: Module <UserState, RootState> ={
    state,
    getters,
    mutations
}