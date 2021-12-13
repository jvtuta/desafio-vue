<template>
  <div id="app">
    
      <nav-bar brand="Desafio vue" class="navbar"/>
    
    <router-view>

    </router-view>
  </div>
</template>

<script>
import NavBar from "@/components/base/Navbar.vue"
export default {
  components: {NavBar}
}
</script>

<style>

.navbar {
  margin-bottom: 20px;
}
</style>
