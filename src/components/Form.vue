<template>
 <div class="bg-white w-full m-4 rounded-lg shadow p-4  text-black  ">
  <label class="block">
   <span class="text-gray-700">Title</span>
   <input v-model="title" class="form-input bg-gray-300 rounded-lg mt-1 block w-full" placeholder="New Title">
  </label>
  <label class="block mt-4">
   <span class="text-gray-700">Content</span>
   <textarea
   v-model="content"
   class="form-textarea mt-1 block w-full bg-gray-300"
   rows="3"
   placeholder="The Content"
   ></textarea>
  </label>
  <div class="button w-full flex justify-center">
   <button
   class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg mt-4 mr-4 flex-grow "
   @click="$router.push('/')"
   >
    Back to Main
   </button>

    <button
    v-if="!edit" 
    class="bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded-lg mt-4 flex-grow"
     @click="add"
    >
     Add
    </button>
      <button
    v-else 
    class="bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded-lg mt-4 flex-grow"
     @click="save"
    >
     Save
    </button>

  </div>

 </div>
</template>
<script>
import { nextTick } from 'process'
import short from 'short-uuid'
export default {
 name:'Form',
 props:{
    edit:{
       type:Boolean,
       default:false
    },
    note:{
       type:Object,
       default: () =>({
          id:'',
          title:'',
          content:''
       })
    }
    
 },
 data(){
  return{
   title:'',
   content:'',
  }
 },
 created(){
    this.assingnValues()
 },
 methods:{
  add(){

     this.$store.dispatch('addNote',{
      id:short.generate(),
      title:this.title,
      content:this.content
     })
     this.$router.push('/')

  },
  save(){
     this.$store.dispatch('removeNote',this.note.id)
     this.$store.dispatch('addNote',{
        id:this.note.id,
        title:this.title,
        content:this.content
     })
    this.$router.push('/')
  },
  async assingnValues(){
     await this.$nextTick
     this.title =this.note.title
    this.content = this.note.content
  }
 },
}
</script>
<style>

</style>
