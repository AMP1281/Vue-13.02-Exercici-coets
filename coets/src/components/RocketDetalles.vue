 <template>

  <div class="RocketDetalles">

    <div class="d-flex flex-column justify-content-start align-items-center">

                <b-card class="sombra">
                    <b-card-text class="d-flex flex-column align-items-center">
                        <h5 class="mb-4">   {{arrayDetalles.name}}    </h5>
                            <div class="row w-100 py-2">
                                <div class="col-6">
                                    id:
                                </div>
                                <div class="col-6">
                                    {{arrayDetalles.id}}
                                </div>
                            </div>
                            <div class="row w-100 py-2">
                                <div class="col-6">
                                    Code:
                                </div>
                                <div class="col-6">
                                    {{arrayDetalles.codi}}
                                </div>
                            </div>
                            <div class="row w-100 py-2">
                                <div class="col-6">
                                    Maximum power:
                                </div>
                                <div class="col-6">
                                    {{sumaPropulsors}}
                                </div>
                            </div>
                            <div class="row w-100 py-2">
                                <div class="col-6">
                                    Boosters max power:
                                </div>
                                <div class="col-6">
                                    <ul class="row list-unstyled">
                                        <li class="col-md-3 d-flex align-items-stretch justify-content-center" 
                                            v-for="item in arrayDetalles.propulsors" :key="item.id">
                                            <p>{{ item}}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                    </b-card-text>
                </b-card>

          
 
             
         


    </div>
    {{arrayPropulsors}}
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import Vuex from 'vuex'

Vue.use(Vuex)

import {Route} from 'vue-router'

interface WithRoute extends Vue{
	$route: Route
}


@Component
export default class User extends Vue {



    $route: any
    coet: any=''
    arrayPropulsors: any[]=[]
    sumaPropulsors: number;
    id=this.$route.params.id

    arrayDetalles:any[]= this.$store.getters['getCoets'](this.id)

    mounted(){
        this.arrayPropulsors = this.arrayDetalles.propulsors
        this.sumaPropulsors = this.arrayPropulsors.reduce((accumulator:any, currentValue:any) => {
        return accumulator + currentValue;
      }, 0);
    }

    

}

</script>

<style scoped>
.sombra {
    box-shadow: 6px 6px 5px 1px #e7e5e5;
    margin-top: 2rem;
    width: 40%;
}

html { 
 background: url(../assets/pexels-jakub-novacek-924824.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

</style>