 <template>

 <div class="container w-100">

    <ul class="row list-unstyled d-flex align-items-stretch justify-content-center align-items-center w-100">

        <li class="col-lg-4 mt-4  d-flex align-items-stretch w-100" 
        v-for="(item, index) in AllCoets" :key="index">

                            <b-card class="w-100 test border border-warning border border-5 rounded-3 px-1 mx-1">

                                <b-card-text class="d-flex flex-column align-items-center">

                                    <h5 class="mb-4 fw-bold">   {{ item.name }}    </h5>

                                        <div class="row w-100 my-2">
                                            <div class="col-6 fw-bold">
                                                id:
                                            </div>
                                            <div class="col-6">
                                                {{ item.id }}
                                            </div>
                                        </div>

                                        <div class="row w-100 py-2">
                                            <div class="col-6 fw-bold">
                                                Code:
                                            </div>
                                            <div class="col-6">
                                                {{ item.codi }}
                                            </div>
                                        </div>
                                        <div class="row w-100 py-2">
                                            <div class="col-6 fw-bold">
                                                Boosters max power:
                                            </div>

                                            <div class="col-6 list-unstyled d-flex-row flex-wrap justify-content-center align-items-center">
                                                <ul class="" v-for="a in item.propulsors" :key="a.id">
                                                    <li class="d-flex"> {{ a }} </li>
                                                </ul>
                                            </div>

                                        </div>

                                </b-card-text>

                            </b-card>
                
            
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

.test{
  border-width: 0.6vw !important;
}

</style>