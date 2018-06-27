<template>
 <div class="main-content" >
    
  <v-content   >

       <!-- <SubNav/> -->
      <v-container   >

          <v-layout row wrap class="panel-container" >
        <v-flex lg4 sm6 >

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
<!-- <li slot="link4"><nuxt-link to="/support/password/other">Other</nuxt-link></li> -->

</Panel>

<Panel :heading="'TELEPHONY'">

<img slot="panel-image"
                  
                  src="~/assets/images/support/telephony.png"
                  alt="Passwords"
                  height="40"
                  width="50"
                >  

<li slot="link1">   <nuxt-link to="/support/telephony/quality">My Telephone</nuxt-link></li>
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

<li slot="link1">   <nuxt-link to="/support/email/myEmail">My Email</nuxt-link></li>
<li slot="link2"><nuxt-link to="/support/email/groups">Email Groups</nuxt-link> </li>

<li slot="link3"><nuxt-link to="/support/email/archiving">Email Archiving</nuxt-link></li>
<li slot="link4"><nuxt-link to="/support/email/other">Other Email Request/Issue</nuxt-link></li>


</Panel>


<Panel :heading="'OFFICE MOVES'">
<img slot="panel-image"
                  
                  src="~/assets/images/support/office.png"
                  alt="Passwords"
                  height="40"
                  width="40"
                >  

<li slot="link1">   <nuxt-link to="/support/office/movingLocation">We're moving to another location</nuxt-link></li>
<li slot="link2">   <nuxt-link to="/support/office/newOffice">New Office Setup</nuxt-link></li>

<li slot="link3">   <nuxt-link to="/support/office/other">Office Moves - Other</nuxt-link></li>


</Panel>


          





 </v-flex>


 <v-flex lg4 sm6>

<Panel :heading="'DESKTOP'">
<img slot="panel-image"
                  
                  src="~/assets/images/support/desktop.png"
                  alt="Passwords"
                  height="40"
                  width="40"
                >  

<li slot="link1">   <nuxt-link to="/support/desktop/problem">I have a problem with my desktop PC</nuxt-link></li>
<li slot="link2">   <nuxt-link to="/support/desktop/install">Request to install software on desktop</nuxt-link></li>

<li slot="link3">   <nuxt-link to="/support/desktop/other">Other desktop request/issue</nuxt-link></li>


</Panel>

<Panel :heading="'LAPTOP'">


    <img slot="panel-image"
                  
                  src="~/assets/images/support/laptop.png"
                  alt="Passwords"
                  height="40"
                  width="40"
                >  

<li slot="link1">   <nuxt-link to="/support/laptop/problem">I have a problem with my laptop</nuxt-link></li>
<li slot="link2">   <nuxt-link to="/support/laptop/install">Request to install software</nuxt-link></li>

<li slot="link3">   <nuxt-link to="/support/laptop/other">Other laptop request/issue</nuxt-link></li>
</Panel>

<Panel :heading="'APPLICATIONS'">
<img slot="panel-image"
                  
                  src="~/assets/images/support/applications.png"
                  alt="Passwords"
                  height="40"
                  width="40"
                >  

<li slot="link1">   <nuxt-link to="/support/applications/iress">Iress (Hermes/Iress/Inet)</nuxt-link></li>
<li slot="link2">   <nuxt-link to="/support/applications/other">Other Applications/Systems</nuxt-link></li>



</Panel>

<Panel :heading="'MEETING ROOMS'">
<img slot="panel-image"
                  
                  src="~/assets/images/support/meeting.png"
                  alt="Meeting"
                  height="40"
                  width="40"
                >  

<li slot="link1">   <nuxt-link to="/support/meeting/video">Video Conferencing</nuxt-link></li>
<li slot="link2">   <nuxt-link to="/support/meeting/telephone">Telephone Conferencing</nuxt-link></li>
<li slot="link3">   <nuxt-link to="/support/meeting/other">Other meeting room request/issue</nuxt-link></li>

  
</Panel>


          





 </v-flex>

 <v-flex lg4 sm6>

   <Panel :heading="'PRINT AND SCANNING'">
<img slot="panel-image"
                  
                  src="~/assets/images/support/print.png"
                  alt="Passwords"
                  height="40"
                  width="40"
                >  

<li slot="link1">   <nuxt-link to="/support/print/printing">My printing</nuxt-link></li>
<li slot="link2">   <nuxt-link to="/support/print/faxing">My faxing</nuxt-link></li>

<li slot="link3">   <nuxt-link to="/support/print/scanning">My scanning</nuxt-link></li>



</Panel>



<Panel :heading="'CONNECTIVITY'">
<img slot="panel-image"
                  
                  src="~/assets/images/support/connectivity.png"
                  alt="Passwords"
                  height="40"
                  width="40"
                >  

<li slot="link1">   <nuxt-link to="/support/connectivity/network">Connecting to the network</nuxt-link></li>
<li slot="link2">   <nuxt-link to="/support/connectivity/internet">Connecting to the internet</nuxt-link></li>

<li slot="link3">   <nuxt-link to="/support/connectivity/vpn">Using VPN</nuxt-link></li>
<li slot="link4">   <nuxt-link to="/support/connectivity/other">Other connectivity request/issue</nuxt-link></li>


</Panel>




<Panel :heading="'OTHER'">
<img slot="panel-image"
                  
                  src="~/assets/images/support/other.png"
                  alt="Passwords"
                  height="40"
                  width="40"
                >  

<li slot="link1">   <nuxt-link to="/support/other/other">My issue/request is not on this page</nuxt-link></li>



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




