<template>

<div>

        <div class="Buttons mt-2">

          <div class="container pt-4 border border-secondary rounded py-2 px-4">

            <h2 class="text-danger pb-2">Rockets!</h2>

            <div class="row py-2">
                <button @click="aparecer1:true" class="btn btn-warning col-auto mx-2">Create Rocket 1</button>
                <button @click="aparecer2:true" class="btn btn-warning col-auto mx-2">Create Rocket 2</button>
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

      <div>

          <div class="container">

              <div class="animacion">oooooo</div>

        </div>


      </div>


</div>


</template>

<script lang="ts">

    import { Component, Vue } from 'vue-property-decorator';
/*     import {Route} from 'vue-router'

    interface WithRoute extends Vue{
	    $route: Route
    } */

    @Component
    export default class Buttons extends Vue {

      aparecer1 = false
      aparecer2 = false


    }



</script>


<style scoped>

</style>

<style scoped>

.animacion1{
    background-color: red;
    width: 200px;
    height: 200px;
    animation-name: mianimacion1;
    animation-duration:4s;
    animation-iteration-count: infinite;
    position: relative;
}

@keyframes mianimacion1 {

    0% {left: 0; top: 0px;}
    100% {left: 200vh; top: 0px;}
}

.animacion2{
    background-color: red;
    width: 200px;
    height: 200px;
    animation-name: mianimacion2;
    animation-duration:4s;
    animation-iteration-count: infinite;
    position: relative;
}

@keyframes mianimacion2 {

    0% {left: 0; top: 0px;}
    100% {left: 200vh; top: 0px;}
}

</style>
