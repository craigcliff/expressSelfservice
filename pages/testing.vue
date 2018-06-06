<template>

<v-content>
<v-container  >
  <v-layout  justify-center align-center >
<div>

<!-- <ul>
  <li v-for="msg in messages">{{ msg }}</li>
</ul> -->


<ul>
    <transition-group name="fade" tag="ul" >
  <li v-for="(item, index) in shoppingItems " :key="index">
      <a @click.prevent="testing( item, index)">
   <label> {{ item.name }} </label>
  <label> {{ item.price }} </label></a>
  </li>
  </transition-group>
</ul>


 <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>

<!-- <transition-group name="tweets" >

<ul class="listing">

<li>123w </li>
<li>sadfa</li>
<li>sfddsffdsgfsgf </li>
<li>sdfgfdg </li>

    </ul>

      </transition-group> -->


    </div>
    </v-layout>
   
    </v-container>
   </v-content>
</template>

<script>
export default {

    data() {
  return {
      show: true,
    // messages:  ['hello', 'vue', 'js'],
    shoppingItems: [
      {name: 'apple', price: '10'},
      {name: 'orange', price: '12'},
      {name: 'grape', price: '26'},
      {name: 'pear', price: '14'}
    ]
  }
},

methods: {

    testing(item, index){

      var temp = item;
    //   var temp2 = Array.of(...this.shoppingItems);
    //   console.log(temp2);

    //   temp2.splice(index,1);
    //   console.log(temp2);


  this.shoppingItems.splice(index,1);    
this.shoppingItems.splice(0,-1,item);
  
  








 

    }


}
  
}
</script>






<style scoped>

 .testing-move {
  transition: transform 1s;
}

.listing{
opacity: 1;

}

.listing:hover{
opacity: 0;

}

.fade-enter-active, .fade-leave-active {
  transition: transform 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transition: transform 1s;
}
</style>
