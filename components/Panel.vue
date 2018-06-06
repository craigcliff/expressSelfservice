<template>
    <div class="panel">
          
          <div class="panel-header" @click="toggleActive">
              <div class = "request-icon"><slot  name="panel-image"> </slot></div>
              <div class = "request-symbol" v-bind:class="{'request-symbol-open': isActive}"></div>
              <div class = "request-text ">{{heading}}</div>
              
 

          </div>
          <div class="panel-content" v-bind:class="{'panel-content-none': isActive}">
 <ul>
<slot  name="link1"> </slot>
              <slot name="link2"> </slot>
               <slot name="link3"> </slot>
               <slot  name="link4"> </slot>
              <slot name="link5"> </slot>
               <slot name="link6"> </slot>
 
</ul>
</div>
</div>



</template>

<script>
export default {
  
  data() {

      return{

         isActive: true
          


      }
    
      


  },

  props: ['heading'],

  methods: {

      toggleActive(){
          this.isActive = !this.isActive;


      }


  }


}
</script>




<style scoped>

.panel{
    width: 340px;
    margin-bottom: 30px;
}
.panel-header {
  display: flex;
  height: 50px;
  width: 340px;
}
.panel-content{
    padding-top: 15px;
    
    color: #757575;
    font-size:15px;
    font-weight: 400;
}

.request-icon {
    width: 70px;
     display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    
}


.request-text {
    letter-spacing: 0.6px;
  font-size: 15px;
  display: flex;
  align-items: flex-end;
  padding-left: 20px;
   width: 230px;
   color: #1976D2;
   font-weight: 700;
}

.request-symbol {
  display: flex;
  align-items: flex-end;

}
.request-symbol:after{
    
     color: rgb(146, 23, 93);
  content: '-';

}

.request-symbol-open:after{
     color: #757575;
  content: '+';

}


.panel-content{

 display: block;
    
    -webkit-animation: slide-down .6s ease-out;
    -moz-animation: slide-down .6s ease-out;

    transition: all .6s;
  
/* box-shadow: 
  inset 0 4px 2px -2px rgba(145,101,126,0.3); */

  box-shadow: 0px 15px 10px -15px rgba(145,101,126,0.3);
    width: 300px;
    padding-left: 20px;

}



.panel-content-none{
   display: none;
    opacity: 0;

    transition: all .6s;


}


@-webkit-keyframes slide-down {
      0% { opacity: 0; -webkit-transform: translateY(-10%); }   
    100% { opacity: 1; -webkit-transform: translateY(0); }
}
@-moz-keyframes slide-down {
      0% { opacity: 0; -moz-transform: translateY(-10%); }   
    100% { opacity: 1; -moz-transform: translateY(0); }
}


@-webkit-keyframes slide-up {
      0% { opacity: 1; -webkit-transform: translateY(-10%); }   
    100% { opacity: 0; -webkit-transform: translateY(0); }
}
@-moz-keyframes slide-up {
      0% { opacity: 1; -moz-transform: translateY(-10%); }   
    100% { opacity: 0; -moz-transform: translateY(0); }
}




ul {
 list-style: none;
 margin-left: 0;
 padding-left:60px;
 text-indent: -1em;
 }




 li {
     padding-bottom:10px;
 }
</style>

