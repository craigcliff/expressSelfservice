<template>
 <div class="main-content" >
    
  <v-content   >

       <!-- <SubNav/> -->
      <v-container   >

          <v-layout row wrap class="panel-container" >
        <v-flex xs4 >

<Panel :heading="'PASSWORDS AND ACCESS'">
<img slot="panel-image"
                  
                  src="~/assets/images/support/passwords.png"
                  alt="Passwords"
                  height="40"
                  width="50"
                >  

<li slot="link1">   <nuxt-link to="/support/password/forgotten">Forgotten my password</nuxt-link></li>
<li slot="link2"><nuxt-link to="/support/password/reset">Reset my password</nuxt-link> </li>
<li slot="link3"><nuxt-link to="/support/password/access">I need access to a folder</nuxt-link> </li>
<li slot="link4"><nuxt-link to="/support/password/other">Other</nuxt-link></li>

</Panel>

<Panel :heading="'TELEPHONY'">

<img slot="panel-image"
                  
                  src="~/assets/images/support/telephony.png"
                  alt="Passwords"
                  height="40"
                  width="50"
                >  

<li slot="link1">   <nuxt-link to="/support/telephony/quality">Poor call quality</nuxt-link></li>
<li slot="link2"><nuxt-link to="/support/telephony/hunting">Telephone hunting groups</nuxt-link> </li>

<li slot="link3"><nuxt-link to="/support/telephony/other">Other</nuxt-link></li>



</Panel>

<Panel :heading="'EMAIL'">
<img slot="panel-image"
                  
                  src="~/assets/images/support/email.gif"
                  alt="Passwords"
                  height="40"
                  width="40"
                >  

<li slot="link1"><Dialog title="Log a call" heading="testing"></Dialog></li>
<li slot="link2"><Dialog title="Ask for help"></Dialog></li>



</Panel>


<Panel :heading="'OFFICE MOVES'">
<img slot="panel-image"
                  
                  src="~/assets/images/support/office.png"
                  alt="Passwords"
                  height="40"
                  width="40"
                >  

<li slot="link1">log a call</li>
<li slot="link2">ask for help </li>


</Panel>


          





 </v-flex>


 <v-flex xs4 >

<Panel :heading="'DESKTOP'">
<img slot="panel-image"
                  
                  src="~/assets/images/support/desktop.png"
                  alt="Passwords"
                  height="40"
                  width="40"
                >  

<li slot="link1">log a call</li>
<li slot="link2">ask for help </li>
<li slot="link3"><Dialog/> </li>


</Panel>

<Panel :heading="'CONNECTIVITY'">
<img slot="panel-image"
                  
                  src="~/assets/images/support/connectivity.png"
                  alt="Passwords"
                  height="40"
                  width="40"
                >  

<li slot="link1">log a call</li>
<li slot="link2">ask for help </li>


</Panel>

<Panel :heading="'APPLICATIONS'">
<img slot="panel-image"
                  
                  src="~/assets/images/support/applications.png"
                  alt="Passwords"
                  height="40"
                  width="40"
                >  

<li slot="link1">log a call</li>
<li slot="link2">ask for help </li>


</Panel>

<Panel :heading="'OTHER'">
<img slot="panel-image"
                  
                  src="~/assets/images/support/other.png"
                  alt="Passwords"
                  height="40"
                  width="40"
                >  

<li slot="link1">log a call</li>
<li slot="link2">ask for help </li>


</Panel>



          





 </v-flex>

 <v-flex xs4>

   <Panel :heading="'PRINT AND SCANNING'">
<img slot="panel-image"
                  
                  src="~/assets/images/support/print.png"
                  alt="Passwords"
                  height="40"
                  width="40"
                >  

<li slot="link1">log a call</li>
<li slot="link2">ask for help </li>



</Panel>
<Panel :heading="'LAPTOP'">


    <img slot="panel-image"
                  
                  src="~/assets/images/support/laptop.png"
                  alt="Passwords"
                  height="40"
                  width="40"
                >  

<li slot="link1">log a call</li>
<li slot="link2">ask for help </li>
</Panel>

<Panel :heading="'MEETING ROOMS'">
<img slot="panel-image"
                  
                  src="~/assets/images/support/meeting.png"
                  alt="Meeting"
                  height="40"
                  width="40"
                >  

<li slot="link1">log a call</li>
<li slot="link2">ask for help </li>
  
</Panel>



   </v-flex>

 
</v-layout>



      </v-container>

     
    </v-content>

    </div>
</template>

<script>

import Panel from '~/components/Panel.vue'
import SubNav from '~/components/SubNav.vue'
import Dialog from '~/components/Dialog.vue'
export default {
    components: {

Panel,
SubNav,
Dialog

    },
  
  data() {

      return{

         isActive: true
          


      }


  }


}
</script>


<style scoped>




.main-content{

height: 100vh;


}

a {
 list-style: none;
 text-decoration: none;
     color: black;
     font-size:15px;
    font-weight: 400;
    display: inline-block;
    width:500px;
    position: relative;
 }

 
 li a:before {
		content: "\00BB \0020";
    padding-left: 18px;
       padding-right: 16px;
 	     } 


 a:hover {

     color: rgb(146, 23, 93)
 }

 .panel-container{
   
   /* background:  rgba(255, 255, 255, 0.2) ;
   border-radius: 20px; */
   padding-left: 40px;
   position: relative;

    

}

 

  @media screen and (min-width: 1384px) {
  
 .panel-container{


padding-left: 0px;


}
  
  }

</style>




