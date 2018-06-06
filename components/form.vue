<template>

<v-container class="main-form">
  
  
  
      <v-layout row wrap class="panel-container">
  
        <v-flex xs6>

<v-form ref="form"  lazy-validation  >
 

       <div>

         <slot  name="username"> </slot>
         <slot  name="subject"> </slot>
          <slot  name="info"> </slot>
           <slot  name="info-field"> </slot>
    
    
            <slot name ="checkb"> </slot>
       
    
   
</div >
      <slot name ="submitBtn"> </slot>
      <slot name ="clearBtn"> </slot>
    
  </v-form>

   </v-flex>
  
      </v-layout>
  
  
  
  
  
      <!-- <SubNav/> -->
  
    </v-container>


</template>


<style scoped>

.main-form{

  margin-top: -20px;

margin-left: 90px;

}

</style>

