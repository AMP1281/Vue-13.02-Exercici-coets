<template>

<div>

        <div class="Buttons mt-2">

          <div class="miBorde container pt-4 border border-secondary border border-warning border border-5 rounded-3 py-2 px-4 bg-light">

            <h1 class="text-danger pb-2 text-center">Rockets!</h1>

            <div class="row py-2">
                <button @click="aparecer1 = !aparecer1" class="btn btn-danger col-auto ml-3 mr-4">Create Rocket 1</button>
                <button @click="aparecer2 = !aparecer2" class="btn btn-danger col-auto mr-2">Create Rocket 2</button>
            </div>

            <div class="row py-2">
                <button @click="animar('idAnimacion1', 'animacion1')" class="btn btn-danger col-auto ml-3 mr-2">Accelerate rocket 1</button>
                <button @click="animar('idAnimacion2', 'animacion2')" class="btn btn-danger col-auto mr-2">Accelerate rocket 2</button>

                <button @click="desAnimar('idAnimacion1','animacion1')" class="btn btn-danger col-auto mr-2">Break rocket 1</button>
                <button @click="desAnimar('idAnimacion2','animacion2')" class="btn btn-danger col-auto mr-2">Break rocket 2</button>
            </div>

            <div class="row py-2">

              <router-link :to="{ name:'About', params:{ id:1 } }" class="col-auto">
                <button class="btn btn-danger"> Print rocket 1</button>
              </router-link>

              <router-link :to="{ name:'About', params:{ id:2 } }" class="col-auto">
                <button class="btn btn-danger col-auto mx-2"> Print rocket 2</button>
              </router-link>

              <router-link :to="{ name:'AllRockets'}" class="col-auto">
                <button class="btn btn-danger"> Print all rockets</button>
              </router-link>

            </div>

          </div>

        </div>

      <div>

          <div class="container">

              <div v-show="aparecer1" class="my-2 pt-3" id="idAnimacion1"><img src="../assets/coheteAGiradoCopia.png"/></div>
              <div v-show="aparecer2" class="my-2" id="idAnimacion2"><img src="../assets/coheteBGirado.png"/></div>

          </div>

      </div>

</div>

</template>

<script lang="ts">

    import { Component, Vue } from 'vue-property-decorator';
    import Vuex from 'vuex'

    Vue.use(Vuex)

    @Component
    export default class Buttons extends Vue {

      aparecer1 = this.$store.state.aparecer1
      aparecer2 = this.$store.state.aparecer2

      animar(a:any, b:any){
        document.getElementById(a).classList.add(b);
      }

      desAnimar(a:any,b:any){
        document.getElementById(a).classList.remove(b);
      }

    }

</script>

<style scoped>

.animacion1{

    animation-name: mianimacion1;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    position: relative;

}

@keyframes mianimacion1 {

    0% {left: 0; top: 0px;}
    100% {left: 200vh; top: 0px;}
}

.animacion2{

    animation-name: mianimacion2;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    position: relative;

}

@keyframes mianimacion2 {

    0% {left: 0; top: 0px;}
    100% {left: 200vh; top: 0px;}
}

html { 
 background-color: rgb(53, 53, 53) !important;
}

.miBorde{
  border-width: 0.6vw !important;
}

</style>
