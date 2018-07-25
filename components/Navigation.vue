<template>
  <nav >
    <v-toolbar app fixed clipped-left class="hidden-sm-and-down white  "
    
    >
   
      <v-toolbar-title class="logo" to="/">
     
       
       <img
                  
                  src="~/assets/images/logo/logo.png"
                  alt="logo"
                  height="65" width="160"
                > 
       
       
     
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="nav-items ">
        <v-btn flat="flat" to="/" exact="exact" >
         <v-icon medium>home</v-icon>
        </v-btn>
        
        <nuxt-link class="nav-item" to="/myCalls" exact="exact"> <v-btn class="nav-item" flat="flat">
          View My Calls
        </v-btn> </nuxt-link>
        <v-btn class="nav-item" flat="flat">
          Services
        </v-btn>
         <v-btn class="nav-item" flat="flat">
         Contact Us
        </v-btn>
        
        
      </v-toolbar-items>
    </v-toolbar>
    <div class="hidden-md-and-up nav-mobile">
      <v-expansion-panel>
        <v-expansion-panel-content>
          <div slot="header">
            
             
             <v-toolbar-title class="logo" to="/">
      
       
       <img
                  
                  src="~/assets/images/logo/logo.png"
                  alt="logo"
                  height="35" width="80"
                > 
       
       
     
      </v-toolbar-title>
          </div>
          <v-card class="mob-nav-items" >
            <router-link class="mob-nav-item" to="/">
              <v-card-text>Home</v-card-text>
            </router-link>
          </v-card>
          <v-card class="mob-nav-items" >
            <router-link class="mob-nav-item" to="#">
              <v-card-text>View My Calls</v-card-text>
            </router-link>
          </v-card>
          <v-card class="mob-nav-items" >
            <router-link class="mob-nav-item" to="#">
              <v-card-text>Services</v-card-text>
            </router-link>
          </v-card>

          <v-card  class="mob-nav-items">
            <router-link class="mob-nav-item"  to="#">
              <v-card-text>Contact Us</v-card-text>
            </router-link>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
  </nav>
</template>


<style scoped>

.logo{
  padding-left: 30px;
}

@media screen and (max-width: 1160px) {
  .logo {
     padding-left: 0px;
  }
}

.nav-items{
padding-right: 30px;

}

.nav-item{

  color: rgba(0,117,201);
  font-size: 16px;
  letter-spacing: 0.6px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-mobile{

  z-index:20000;
}

.mob-nav-items{


}

.mob-nav-item{

color: rgba(0,117,201);
  font-size: 16px;
  letter-spacing: 0.6px;
  text-decoration: none;

}

.mob-nav-items{
padding-left: 20px;



}



</style>




