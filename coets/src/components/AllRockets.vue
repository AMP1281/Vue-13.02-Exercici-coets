 <template>

 <div class="container">

     <h1>All Rockets</h1>

<ul class="row list-unstyled">

    <li class="col-lg-4 mt-4 d-flex align-items-stretch justify-content-center" 
    v-for="(item, index) in AllCoets" :key="index">

  <div class="RocketDetalles" style="width: 100%">

    <div class="d-flex flex-column justify-content-start align-items-center w-100">

                <b-card class="sombra w-100">

                    <b-card-text class="d-flex flex-column align-items-center w-100 px-5 py-5">

                        <h5 class="mb-4">   {{item.name}}    </h5>
                            <div class="row w-100 py-2">
                                <div class="col-6">
                                    id:
                                </div>
                                <div class="col-6">
                                    {{item.id}}
                                </div>
                            </div>
                            <div class="row w-100 py-2">
                                <div class="col-6">
                                    Code:
                                </div>
                                <div class="col-6">
                                    {{item.codi}}
                                </div>
                            </div>
                            <div class="row w-100 py-2">
                                <div class="col-6">
                                    Boosters max power:
                                </div>

                                <div class="col-6">
                                   
                                    <ul class="row list-unstyled" v-for="a in item.propulsors" :key="a.id">
                                            <li class="row list-unstyled"> {{ a }} </li>
                                    </ul>
                                </div>

                            </div>
                    </b-card-text>
                </b-card>
    </div>
  </div>
</li>
</ul>
</div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import Vuex from 'vuex'

Vue.use(Vuex)

@Component

export default class AllRockets extends Vue {

    $route: any
    coet:any=''

    AllCoets:any[]= this.$store.state.coets;

    AllCoetsPotencia:any[]= this.$store.state.coets.propulsors;

    id=this.$route.params.id

    get getCoet():any {
        return this.$store.getters['getCoets'](this.id);
  }

}

</script>

<style scoped>
.sombra {
    box-shadow: 6px 6px 5px 1px #e7e5e5;
    margin-top: 2rem;
    width: 40%;
}
</style>