<template>

  <div class="about mt-5">
    
    <div class="container">
      
    <ButtonAnterior/>
    <RocketDetalles/>


    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RocketDetalles from '../components/RocketDetalles.vue';
import ButtonAnterior from '../components/ButtonAnterior.vue';

@Component({
  components: {
    RocketDetalles,
    ButtonAnterior
  },
})
export default class About extends Vue {}
</script>

<style scoped>

</style>