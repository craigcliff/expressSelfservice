<template>
  <div class="drawer-icon">
  
  
  
    
  

  
    
        <!-- > -->
        <slot name="panel-link">
         
          <slot name="panel-image" class="panel-image" >   </slot>  
        

           <div class="drawer-heading">
          <slot name="panel-heading" class="drawer-heading" >   </slot>  
          </div>

       
             </slot>
           


         
        
  
  
  
       <!-- <slot name ="panel-heading" class="list-item-heading"> -->
  <!-- </slot> -->
  
  
        
  
          
  
        <!-- </slot> -->
  
  
  
     
  
    
  
  
  
  </div>
</template>


<script>
  export default {
  
   
  
  };
</script>


<style scoped>
  .drawer-icon {
  
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
       flex-direction: center;
    align-items:center;
    
   
  
  }
.drawer-image{
  margin-top:40px;
  width: 100%;
  height: 100%;
  display: flex;


}

  a {

    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;

     text-decoration: none;
  
    color: rgba(255, 255, 255, 0.9);
    
        letter-spacing: 0.6px;
    
   
  height: 100%;
    width: 100%;
  }

  .panel-heading{
    color: white;
  }
  
  
 
  

  
  
  
  
</style>