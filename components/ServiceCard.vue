<template>
  <div class="circle-tile ">
        <div class="circle-tile-heading ">
             <v-avatar
                slot="activator"
                size="112px"
              >

              <slot  name="hp-image"> </slot>
                             
              </v-avatar>
            
            
            
            
            </div>
        <div class="circle-tile-content dark-blue-transparent">
          <div class="circle-tile-description text-faded"> {{subject}}</div>
          <div class="circle-tile-list text-faded ">
              <ul
             
              
              >
              <slot  name="link1"> </slot>
              <slot name="link2"> </slot>
               <slot name="link3"> </slot>
                 <!-- <li><slot name="link1"> </slot></li>
<li><slot name="link2"> </slot></li>
<li><slot name="link3"> </slot></li> -->
                    </ul>
              
          </div>
          
        </div> 

       
      </div>
</template>

<script>
export default {
  props: ["subject", "listItem1", "listItem2", "listItem3"],
  data() {
    return {
      
    };
  }
};
</script>



<style scoped>
.circle-tile {
  margin-bottom: 15px;
  text-align: center;
  background-color: transparent;
   max-width: 220px;
}
.circle-tile-heading {
  /* border: 4.5px solid rgba(255, 255, 255, 0.3); */
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content:center;
  
  height: 120px;
  margin: 0 auto -40px;
  position: relative;
  transition: all 0.3s ease-in-out 0s; 
 

/* width: 120px;  */

}
.circle-tile-heading .fa {
  line-height: 80px;
}
.circle-tile-content {
  font-size: 18px;
  padding-top: 50px;
  /* width: 170px; */
  letter-spacing: 0.6px;
  height: 180px;
  border-radius: 15px;
}
.circle-tile-list {
  font-size: 16px;
letter-spacing: 0.6px;
  line-height: 1.2;
  padding-top: 10px;
  text-align: center;
}

ul {
  text-decoration: none;
  list-style-type: none;
  display: inline-block;
  text-align: left;
}

li {
  margin-top: 5px;
}



.circle-tile-description {
  text-transform: uppercase;
}





.dark-blue-transparent {
  
  background-color: rgba(81, 3, 47, 0.6);
}



.text-faded {
  color: rgba(255, 255, 255, 0.9);
}



 .circle-tile-content:hover  {
  
    background-color: rgba(81, 3, 47, 0.9);
  
  }
  


   .circle-tile-content:hover > .circle-tile-list .circle-tile-description{
color: red;

   }

</style>

