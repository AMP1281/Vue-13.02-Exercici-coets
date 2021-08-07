 <template>

  <div class="container">

      <div v-show="mostrar" class="animacion"></div>

      {{ myField }}

  </div>

</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import { myEventBus, MyEventBusEvents } from './EventBusTest.vue';
import Vuex from 'vuex'

Vue.use(Vuex)

import {Route} from 'vue-router'

interface WithRoute extends Vue{
	$route: Route
}


@Component
export default class Juego extends Vue {


      myField= 'Not Fired Event Yet'
    
    created() {
      myEventBus.$on(MyEventBusEvents.MyTestEvent, (text: string) =>
        this.eventFired(text)
      );
    }
    
      eventFired(text: string) {
       this.myField = text;
      }


}

</script>

<style scoped>

.animacion{
    background-color: red;
    width: 200px;
    height: 200px;
    animation-name: mianimacion;
    animation-duration:4s;
    animation-iteration-count: infinite;
    position: relative;
}

@keyframes mianimacion {

    0% {left: 0; top: 0px;}
    100% {left: 200vh; top: 0px;}
}

</style>