<template>

    <div>

        <button class="mt-4 btn btn-danger" @click="anterior()"> Enrere </button>

    </div>

</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import Vuex from 'vuex'

Vue.use(Vuex)

import {Route} from 'vue-router'

interface WithRoute extends Vue{
	$route: Route
}

@Component

export default class ButtonAnterior extends Vue {

        anterior(){this.$router.go(-1)}

}

</script>