<template>
  <div>
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
