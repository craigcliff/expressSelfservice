<template>
  <nav >
    <v-toolbar app fixed clipped-left class="hidden-sm-and-down white "
    height="75px"
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
        <v-btn class="nav-item" flat="flat">
          View My Calls
        </v-btn>
        <v-btn class="nav-item" flat="flat">
          Services
        </v-btn>
         <v-btn class="nav-item" flat="flat">
         Contact Us
        </v-btn>
        
        
      </v-toolbar-items>
    </v-toolbar>
    <div class="hidden-md-and-up">
      <v-expansion-panel>
        <v-expansion-panel-content>
          <div slot="header">
            <router-link class="nav-item" to="/">LOGO</router-link>
          </div>
          <v-card>
            <router-link class="nav-item" to="#">
              <v-card-text>View My Calls</v-card-text>
            </router-link>
          </v-card>
          <v-card>
            <router-link class="nav-item" to="#">
              <v-card-text>Services</v-card-text>
            </router-link>
          </v-card>

          <v-card>
            <router-link class="nav-item" to="#">
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

.nav-items{
padding-right: 30px;

}

.nav-item{

  color: rgba(0,117,201);
  font-size: 16px;
  letter-spacing: 0.6px;
}



</style>




