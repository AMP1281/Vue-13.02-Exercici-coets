<template>

  <div class="Buttons mt-2">

    <div class="container pt-4 border border-secondary rounded py-2 px-4">

      <h2 class="text-danger pb-2">Rockets!</h2>

      <div class="row py-2">
          <button @click="aparecer1" class="btn btn-warning col-auto mx-2">Create Rocket 1</button>
          <button @click="aparecer2" class="btn btn-warning col-auto mx-2">Create Rocket 2</button>
      </div>

      <div class="row py-2">
          <button class="btn btn-warning col-auto mx-2">Accelerate rocket 1</button>
          <button class="btn btn-warning col-auto mx-2">Accelerate rocket 2</button>

          <button class="btn btn-warning col-auto mx-2">Break rocket 1</button>
          <button class="btn btn-warning col-auto mx-2">Break rocket 2</button>
      </div>

      <div class="row py-2">
        <router-link :to="{ name:'About', params:{ id:1 } }" class="col-auto">
          <button class="btn btn-warning"> Print rocket 1</button>
        </router-link>
        <router-link :to="{ name:'About', params:{ id:2 } }" class="col-auto">
          <button class="btn btn-warning col-auto mx-2"> Print rocket 2</button>
        </router-link>
        <router-link :to="{ name:'AllRockets'}" class="col-auto">
          <button class="btn btn-warning"> Print all rockets</button>
        </router-link>

      </div>



  </div>
  </div>
</template>

<script lang="ts">

    import { Component, Vue } from 'vue-property-decorator';
    import { myEventBus, MyEventBusEvents } from './EventBusTest.vue';

    @Component
    export default class Buttons extends Vue {


      //methods
      emitEventBusEvent() {
        myEventBus.$emit(MyEventBusEvents.MyTestEvent, 'Hello World 1!');
      }
    

    }



</script>


<style scoped>

</style>
