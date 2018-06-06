<template>

    
  <v-content   >

    <!-- <SubNav/> -->
      <v-container   >

          <v-layout row wrap >
        <v-flex xs-12>

<h1>REQUESTS </h1>
          





 </v-flex>
</v-layout>



      </v-container>

     
    </v-content>

  
</template>

<script>

import Panel from '~/components/Panel.vue'
 import SubNav from '~/components/SubNav.vue'
export default {
    components: {

Panel,
SubNav

    },
  
  data() {

      return{

         isActive: true
          


      }


  }


}
</script>


<style scoped>






</style>




