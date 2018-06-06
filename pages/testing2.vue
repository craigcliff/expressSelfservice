<template>

<v-content>
<v-container  >
  <v-layout  justify-center align-center >

<div id="app">
  <transition-group name="tweets" >
  <div
    style="flex: 1 0 0"
    class="list-item"
    @click="testing(l,index)" v-for="(l,index) in list" :key="l">
    <div>
      <h1>
        <div class="md-title">
          {{l}}
        </div>
      </h1>
    </div>
    </div>
  </transition-group>
</div>
</v-layout>
   
    </v-container>
   </v-content>
  
</template>



<script>
export default {

    data() {
  	return {
    	list: ['a','b','c','d']
    }
  },

  methods: {

   

      testing(l,index){

             var temp = l;
            
          

console.log(temp);
this.list.splice(index,1);
 this.list.splice(0,-1,temp);




      }


  }

  
  
}
</script>


<style scoped>




.tweets-move {
  transition: transform 1s;
}

</style>
