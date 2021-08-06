<template>
  <div id="app">
<!--     <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>

  </div>
</template>

<script lang="ts">

export default Vue.extend(options:{

  components:{
    Buttons
  },
  computed:{
    helloMessage:{
      get(): string {
        return this.$store.state.user.email;
      }
    }
  }
});

</script>


<style>

</style>
