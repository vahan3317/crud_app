<template>
          <div class="bg-gray-800 min-h-screen text-white flex">
            <NavBar />
            <router-view/>
          </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name:'App',
  components:{
    NavBar,
    
}
}
</script>
