<template>

  <div class="about mt-5">

    <div class="container">

    <ButtonAnterior/>
    <AllRockets/>

    </div>

  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

import AllRockets from '../components/AllRockets.vue';
import ButtonAnterior from '../components/ButtonAnterior.vue';

@Component({
  components: {
    AllRockets,
    ButtonAnterior
  },
})

export default class AllRocketsView extends Vue {}
</script>