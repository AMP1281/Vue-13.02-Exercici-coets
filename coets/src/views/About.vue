<template>
  <div class="about">
    <h1>This is an about page</h1>

    <RocketDetalles/>

    hola

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RocketDetalles from '../components/RocketDetalles.vue';

@Component({
  components: {
    RocketDetalles,
  },
})
export default class About extends Vue {}
</script>