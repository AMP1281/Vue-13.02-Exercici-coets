<template>
  <div class="mt-5">
    <Buttons/>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import Buttons from '../components/Buttons.vue';

@Component({
  components: {
    Buttons,
  },
})
export default class Home extends Vue {}
</script>

<style>
html { 
 background-color: rgb(53, 53, 53) !important;
}
</style>
