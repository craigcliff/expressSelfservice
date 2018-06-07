<template>
  
     <div class = "sub-heading-container"      >
         <div class="sub-heading-image">
          <img  src="~/assets/images/support/selfservice.png" alt="Smiley face" height="40" width="30">
          </div>
        <div class = "sub-heading-text">
         <h2> QUICK LOG</h2>
         <h3>log your call by selecting the most relevant link below</h3>
         </div>
         
         
         
          </div>
</template>


<style scoped>




.sub-heading-container{

height: 90px;
width: 100%;
background-color:rgba(145,101,126,0.8);
display: flex;


}

.sub-heading-text{
   
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 90px;
    justify-content: center;
    line-height: 18px;
    color: white;
    padding-left: 15px;



}

 

  .sub-heading-image{


   padding-left: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 90px;
    justify-content: center;
    
    color: white;



}

 @media screen and (min-width: 1384px) {
  
 .sub-heading-image{


padding-left: 130px;


}
  
  }


@media screen and (max-width: 960px) {
  
 .sub-heading-container{


padding-top:-75px;


}
  
  }

  
</style>




