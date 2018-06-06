<template>
  <v-navigation-drawer clipped fixed permanent v-model="drawer"  app width="180"  class="drawer-color">
  
  
  
    <div class="drawer-list-con">
  
  
  <DrawerIcon >
  
      
  <nuxt-link slot="panel-link" to="/support" exact>
        
          <img slot="panel-image" src="~/assets/images/support.png" alt="Smiley face" height="75" width="75">
       
             <div slot ="panel-heading" class="panel-heading">Support </div>
        </nuxt-link> 
          
      </DrawerIcon>
  
  
  
  
  
      
  
        <DrawerIcon :heading="'Requests'">
          <nuxt-link slot="panel-link" to="/requests" exact>
  
          <img slot="panel-image" src="~/assets/images/requests.png" alt="Smiley face" height="75" width="75">
  
  
  
   <div slot ="panel-heading" class="panel-heading">Requests</div>
        </nuxt-link>
        </DrawerIcon>
  

  
      
  
        <DrawerIcon :heading="'Forms/Templates'">
  <nuxt-link slot="panel-link" to="/forms" exact>
         
         
          <img slot="panel-image" src="~/assets/images/forms.png" alt="Smiley face" height="75" width="75">
  
   <div slot ="panel-heading" class="panel-heading">Templates</div>
  </nuxt-link>
        </DrawerIcon>
  
      
  
     
  
        <DrawerIcon :heading="'Policies'">
   <nuxt-link slot="panel-link" to="/policies" exact>
  
          <img slot="panel-image" src="~/assets/images/policies.png" alt="Smiley face" height="75" width="75">
  <div slot ="panel-heading" class="panel-heading">Policies</div>
  </nuxt-link>
   </DrawerIcon>
      
  
      
  
        <DrawerIcon :heading="'MAPS'">
  <nuxt-link slot="panel-link" to="/maps" exact>
          <img slot="panel-image" src="~/assets/images/maps2.png" alt="Smiley face" height="75" width="75">
  
  <div slot ="panel-heading" class="panel-heading">Maps</div>
  </nuxt-link>
        </DrawerIcon>
  
      
  
  </div>
  
   
  
  
  
  </v-navigation-drawer>
</template>

<script>
  import DrawerIcon from "~/components/DrawerIcon";
  
  export default {
  
    components: {
  
      DrawerIcon
  
    },
  
  
  
    data() {
  
      return {
  
        drawer: true,
  
        items: [{
  
            title: "support",
  
            icon: "contact_support",
  
            path: "/support"
  
          },
  
          {
  
            title: "requests",
  
            icon: "question_answer",
  
            path: "/requests"
  
          },
  
          {
  
            title: "forms and templates",
  
            icon: "format_list_bulleted",
  
            path: "/forms"
  
          },
  
          {
  
            title: "policies and procedures",
  
            icon: "gavel",
  
            path: "/policies"
  
          },
  
          {
  
            title: "maps",
  
            icon: "map",
  
            path: "/maps"
  
          }
  
        ],
  
  
  
        right: null
  
      };
  
    }
  
  };
</script>

<style scoped>
  .drawer-list-con {

  
    display: flex;
   
   
    
      justify-content: space-between;
  align-items: space-between;
    flex-direction: column;
  
   height: 100%;
  
    width: 100%;
  
  
  }
  
  
  
  @media screen and (min-width: 1384px) {
  
    .drawer-list-con {
  
      display: flex;
  
      align-items: space-between;
  
      justify-content: space-between;
  
      flex-direction: column;
  
      height: 100%;
  
      width: 100%;
  
    }
  
  }
  
  
  
  @supports (display: grid) {
  
    .drawer-list-con {
  
      padding-top: 20px;
  
    }
  
    @media screen and (min-width: 1000px) {
  
      .drawer-list-con {
  
        padding-top: 0px;
  
      }
  
    }
  
  }
  
  
  
 
  
  
  
  a:hover  {
  
    background-color: rgba(255, 255, 255, 0.5);
  
  }
  
   a:hover > .panel-heading{

     color: rgba(145, 101, 126);
   }
  
  a:active {
  
    background-color: rgba(255, 255, 255, 0.9);
  
  }
  
  
  
  a.nuxt-link {
  
    transition: all 1s;
  
  }
  
  
  
  a.nuxt-link-active {
  
    order: -1;
  
    transition: all 1s;
  
  }

 
.panel-heading{
  color: rgba(255, 255, 255, 0.9);
}
  
  
  
  .drawer-color {
  
    background-color: rgba(145, 101, 126, 0.55);
  
  }
</style>


