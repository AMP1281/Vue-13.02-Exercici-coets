<template>
  <div>
    <Buttons/>
    <Juego/>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import Buttons from '../components/Buttons.vue';
import Juego from '../components/Juego.vue';

@Component({
  components: {
    Buttons,
    Juego
  },
})
export default class Home extends Vue {}
</script>
