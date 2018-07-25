<template>
  <v-app >
     
    <div class ="bg-image">
      
   <Drawer/>
     <Navigation/>
     <!-- <v-content>
     <SubNav class="sub"> </SubNav>
     </v-content> -->
     
  <nuxt />
    
    </div>
      
     
    
    
  </v-app >
</template>

<script>

import Navigation from '~/components/Navigation.vue'
import SubNav from '~/components/SubNav.vue'
import Drawer from '~/components/Drawer.vue'
import menuComponent from '~/components/menuComponent.vue'


  export default {

    components:{
      Navigation,
      Drawer,
      SubNav,
      menuComponent


    },
    data() {
      return {
        
      items: [
        { title: 'support', icon: 'contact_support', path:'/support' },
        { title: 'requests', icon: 'question_answer', path:'/requests' },
        { title: 'forms and templates', icon: 'format_list_bulleted', path:'/forms' },
         { title: 'policies and procedures', icon: 'gavel', path:'/policies' },
        { title: 'maps', icon: 'map', path:'/maps' }
      ]
      
     
      }
    }
  }
</script>


<style scoped>
.bg-image{

/* background: url(~/assets/images/bg.jpeg) ; */

   height: 100%;

background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); 

  background-repeat: no-repeat;
    background-size: cover;
    width: 100%;

}




@media screen and (max-width: 960px) {
  
    .sub{

margin-top:-48px;

}
  
  }

  @media screen and (max-width: 500px) {
  
    .sub{

margin-top:-55px;

}
  
  }
</style>
