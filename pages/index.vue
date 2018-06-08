<template>
<v-container fluid fill-height bg-image>
  <v-layout column>
<v-layout column wrap   >

  <v-flex xs12 >

  <img class="portal-image"
                  
                  src="~/assets/images/support/portal.png"
                  alt=""
                  height="150"
                  width="300"
                >   
 </v-flex>

</v-layout>

 

 
  
 

   <v-layout justify-space-around   > 
    <v-flex xs2>  
    
     <router-link to="/support">  <ServiceCard class="sc1"
     :subject="'Support'"> 
       
       <img slot="hp-image"
                  
                  src="~/assets/images/support.png"
                  alt=""
                >   
<h5 slot="link1">Use QUICK LOG to log your issue</h5>


       
       
       </ServiceCard></router-link>

       </v-flex>


<v-flex xs2> 

    <nuxt-link to="/requests">    <ServiceCard class="sc2"
      :subject="'requests'">

      <img slot="hp-image"
                  
                  src="~/assets/images/requests.png"
                  alt=""
                >   

      <h5 slot="link1">Ask for CHANGES or ACCESS and more.</h5>
      
     
      
       </ServiceCard></nuxt-link>

</v-flex>

<v-flex xs2> 

     <nuxt-link to="/forms">  <ServiceCard class="sc3"
      :subject="'Forms/Templates'">

        
       <img slot="hp-image"
                  
                  src="~/assets/images/forms.png"
                  alt=""
                > 
      <h5 slot="link1">Find IT forms and Templates here.</h5>
      
      
       </ServiceCard></nuxt-link>
</v-flex>

<v-flex xs2> 
    <nuxt-link to="/policies">   <ServiceCard class="sc4"
      :subject="'Policies/Procedures'"
       >
      
        <img slot="hp-image"
                  
                  src="~/assets/images/policies.png"
                  alt=""
                > 
                <h5 slot="link1">Find IT Policies here.</h5>
      
      </ServiceCard></nuxt-link>

</v-flex>
<v-flex xs2> 
    <nuxt-link to="/maps">    <ServiceCard class="sc5"
      :subject="'Maps'">
       
       <img slot="hp-image"
                  
                  src="~/assets/images/maps2.png"
                  alt=""
                > 
        <h5 slot="link1">SI IT Microsoft Productivity Training and Help.</h5>

      
       </ServiceCard></nuxt-link>

     </v-flex>  
      </v-layout>
 
 </v-layout>
    </v-container>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import ServiceCard from '~/components/ServiceCard.vue'
// import TimelineMax from "gsap/TimelineMax";
import { TweenMax,BezierPlugin } from "gsap";

export default {
   layout: 'support',
  components: {
    Logo,
    VuetifyLogo,
    ServiceCard
  },

  data() {

    return {

      tl: new TimelineMax({
        paused: false,
        reversed: false,
        repeat: 0,
        repeatDelay: 1
      }),


    }

  },

  mounted(){

    this.animateEntrance();
  },

  methods: {

animateEntrance: function() {
      var spd = 1;
      this.tl
      .fromTo(".portal-image", 0.9, { scale:0 , autoAlpha:0, ease: Linear.easeNone }, {scale:1, autoAlpha:1})
      //  .to(".portal-image", spd, { left:300,ease:Back.easeIn, ease:Bounce.easeOut})
      .staggerTo(".sc1, .sc2, .sc3, .sc4, .sc5", 1, {
          opacity:1
          
        },0.4);
      // this.tl.to(".bg-home", spd, { scale: 1, x: 0 });
      // this.tl.to(".bg-home", spd, { scale: 1.6, x: +400 });
    
    }


  }
}
</script>


<style  scoped>

.bg-image{

background: url(~/assets/images/bg.jpeg) ;
   background-repeat: no-repeat;
    background-size: cover;

}

.sc1, .sc2, .sc3, .sc4, .sc5{
  opacity: 0;
}



a{text-decoration:none;
  color: rgba(255, 255, 255, 0.9);

}


.text-faded {
  color: rgba(255, 255, 255, 0.9);
}



.portal-image{

  margin-top: 120px;
  margin-left:10px;
  opacity: 0;
}

h5 {
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
  font-weight: 400;

}


</style>



