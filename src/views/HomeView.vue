<template>
  <div  class="flex flex-wrap justify-center pt-8">
        <Card v-for="note in notes" :key="note.id" :note ="note" />
     
  </div>
</template>
<script>
import Card from "@/components/Card.vue";
export default {
  name:'App',
    components: { Card },
    computed:{
      notes(){
        return this.$store.getters.getNotes
      }
    }
}
</script>
<style>

</style>
