<template>
    <v-layout row justify-center>

   <!--
Dialog1


    -->
        <v-dialog v-model="dialog" persistent max-width="550px" height= "550">
        <a slot="activator" class="dialogA" >{{subject}}</a>
        <v-card class="rounded-card" color="teal lighten-2">

          <v-btn icon dark @click.native="dialog = false" class="closeBtn">
              <v-icon>close</v-icon>
            </v-btn>
          
          <v-card-title class="title-center">
            <span class="headline1">You are logging a call for</span>
          
          </v-card-title>
         
          
          <v-card-title class="title-center">
           
            <span class="headline2">{{subject}}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                
              
                <v-flex xs12 class="furtherInfo">
                

             <!-- If you have further valuable information to add to this request, please provide it  <a href="http://link">Link here</a>  -->


          <p > If you have further valuable information to add to this request, please provide it <a class="clickHere" @click="openModal3">here.</a>  </p>
           
                </v-flex>
                
              </v-layout>
            </v-container>
         
          </v-card-text>
          <v-card-actions>
            
 
 <a href="#" class="myButton"  @click="submit">SUBMIT</a>
            <!-- <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat :disabled="!valid"
      @click="submit">Submit</v-btn> -->
          </v-card-actions>
        </v-card>
      </v-dialog>

    


<!-- Dialog2 -->
    
  
       <v-dialog v-model="dialog2" max-width="380" class="modal3">

        <v-progress-circular class="progress" v-show="showProgress" indeterminate color="accent"
   :size="100" :width="7" ></v-progress-circular>
        
        <v-card v-show="showInfo" class="modal3">
      
          <v-card-text class="status">Your call has been successfully logged and is on its way to the technical team. </v-card-text>
       
                    <v-spacer></v-spacer>
                    <v-card-text class="status text-xs-center">
            Your reference number is: 
            </v-card-text>
       
<v-card-text class="status text-xs-center ref">{{output}} </v-card-text>
            <v-card-text class="status">Please quote this reference number in all correspondence relating to this call.</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            
            <v-btn color="blue darken-4" flat="flat" @click.native="exitModal">OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>


<!--dialog3 -->

        <v-dialog v-model="dialog3" persistent max-width="550px" height= "550">
        <!-- <a slot="activator" class="dialogA" >{{subject}}</a> -->
        <v-card class="rounded-card" color="teal lighten-2">

          <v-btn icon dark @click.native="dialog3 = false" class="closeBtn">
              <v-icon>close</v-icon>
            </v-btn>
          
          <v-card-title class="title-center">
            <span class="headline1">You are logging a call for</span>
          
          </v-card-title>
         
          
          <v-card-title class="title-center">
           
            <span class="headline2">{{subject}}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                
               
                <v-flex xs12 >
              

             <textarea v-model="information"
             placeholder="Please provide further information in this box and click the SUBMIT button below"
             rows="10"
             >



             </textarea>

          
           
                </v-flex>
                
              </v-layout>
            </v-container>
      
          </v-card-text>
          <v-card-actions>
            
 
 <a href="#" class="myButton"  @click="submit">SUBMIT</a>
          
          </v-card-actions>
        </v-card>
      </v-dialog>







    </v-layout>
</template>


<script>

import formComponent from "~/components/form.vue";
const axios = require("axios");
export default {
     props: ['subject','callType'],
    data() {
       
        return{
        
             testUser: "",
               valid: true,
        nameRules: [
      v => !!v || 'Description is required'
      // v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],






        showProgress: false,
        showInfo: false,
     
      
        username: "",
  
  
  
        valid: true,
  
  
  
        // subject: "",
  
        information: "",
        output: '',
         dialog: false,
         dialog2:false,
         dialog3: false




        }


    },
    components:{

 formComponent

    },

// computed:{
//     dialog:{
//         get(){ return this.$store.getters.dialog; },
//         set( value ){ this.$store.commit("setDialog", value );}
//     }
// },

 computed: {
    user () { // gets updated automatically
      return this.$store.state.user
      
    }
  },
  created () {
    this.$store.dispatch('fetchUser')
  },
  

  mounted(){

   console.log(this.dialog);
    console.log(`form component mounted from Dialog: ${this.$store.state.user}`);
  },

  methods: {

      exitModal(){
this.dialog= false;
this.dialog2 = false;
this.showProgress= false;
this.showInfo= false;
 this.information = '';
this.$router.push({
    path: '/support'
})


      },

      openModal3(){
        this.dialog=false;
        this.dialog3=true;
        console.log(this.dialog3);

      },
  
    
  
      submit() {

        if (this.information == '' && this.subject !='') 
        
        {
          this.dialog = false;
  this.dialog2 = true;
       this.showProgress= true;
      this.information ='no additional information added'

console.log(this.callType);
          var postData = {
  api:"integration",profile:"sanlam",userid:"admin",pwd:"admin", 
  data: 
    {
    TASKTYPE: this.callType,
    TASKTYPECLASSIFICATION:"3",
    TASKOWNEREMAIL: this.$store.state.user,
    ACTIONADUSERNAME: this.$store.state.user,
    
    ASDSubject:this.subject,
    ASDOwnerEmail:this.$store.state.user,
    ACTION:"NEW",
    SUBJECT:this.subject,
    DESC:this.information}
};

console.log(postData);
  
  
  
          let axiosConfig = {
  
            headers: {
  
              "Content-Type": "application/json",
  
              "Cache-Control": "no-cache",
  
              "Access-Control-Allow-Origin": "*",
  
              withCredentials: "true"
  
            }
  
          };
  
  
  
          axios
  
            .post(
  
              "http://srv006604:82/node/express/myapp/sendDetails",
  
              postData,
  
              axiosConfig
  
            )
  
            .then(res => {
                  console.log(`username from form component ${this.$store.state.user}`);
              console.log("RESPONSE RECEIVED: "+ res);
          
              this.showInfo = true
              this.showProgress= false;
             
              this.output = res.data.data.taskref
            })
  
            .catch(err => {
  
              console.log("AXIOS ERROR: ", err);
              this.showProgress= false;
  
            });
  
       
        }

        else{
          this.dialog = false;
          this.dialog3 = false;
  this.dialog2 = true;
       this.showProgress= true;
    

console.log(this.callType);
          var postData = {
  api:"integration",profile:"sanlam",userid:"admin",pwd:"admin", 
  data: 
    {
    TASKTYPE: this.callType,
    TASKTYPECLASSIFICATION:"3",
    TASKOWNEREMAIL: this.$store.state.user,
    ACTIONADUSERNAME: this.$store.state.user,
    
    ASDSubject:this.subject,
    ASDOwnerEmail:this.$store.state.user,
    ACTION:"NEW",
    SUBJECT:this.subject,
    DESC:this.information}
};

console.log(postData);
  
  
  
          let axiosConfig = {
  
            headers: {
  
              "Content-Type": "application/json",
  
              "Cache-Control": "no-cache",
  
              "Access-Control-Allow-Origin": "*",
  
              withCredentials: "true"
  
            }
  
          };
  
  
  
          axios
  
            .post(
  
              "http://srv006604:82/node/express/myapp/sendDetails",
  
              postData,
  
              axiosConfig
  
            )
  
            .then(res => {
                  console.log(`username from form component ${this.$store.state.user}`);
              console.log("RESPONSE RECEIVED: "+ res);
          
              this.showInfo = true
              this.showProgress= false;
             
              this.output = res.data.data.taskref
            })
  
            .catch(err => {
  
              console.log("AXIOS ERROR: ", err);
              this.showProgress= false;
  
            });
  
       
        }
      },
  
  
  
      clear() {
  
        this.information = '';
        this.dialog = false;
        this.dialog2=false;
  
      }
  
    }
  

}
</script>


<style  scoped>

.modal3{
background-color: #b296a5;

}

.clickHere{

  width: 10px;
  font-size: 16px;
color: white;

font-weight: 200;
text-decoration:underline;
text-underline-position: under; 
}

.furtherInfo{

margin-left: 20px;
font-size: 16px;
color: white;
margin-bottom: 10px;
font-weight: 200;
}

.status{

font-size: 16px;
color: white;

font-weight: 200;


}
.ref{

font-size: 22px;
font-weight: 700;
color:#D9D9D9;


}
.closeBtn{
  
  position: absolute;
  right: 5px;
}

.myButton {
	-moz-box-shadow: 2px 1px 10px 0px #444747;
	-webkit-box-shadow: 2px 1px 10px 0px #444747;
	box-shadow: 2px 1px 10px 0px #444747;
	background-color:#b296a5;
	-moz-border-radius:8px;
	-webkit-border-radius:8px;
	border-radius:8px;
	border:1px solid #b296a5;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:16px;
	padding:7px 31px;
	text-decoration:none;
	/* text-shadow:0px 1px 4px #0b296a; */
  width: 100%;
  margin-left: 35px;
  margin-right: 35px;
  margin-top: -30px;
  margin-bottom: 40px;
  text-align: center;
}
.myButton:hover {
	background-color: #a77e94;
  border: none;
}
.myButton:active {
	position:relative;
	top:1px;
}

textarea {
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
   
    border-radius: 4px;
    background-color: #7C838D;
    font-size: 16px;
    resize: none;
    color: white;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #D9D9D9;
    opacity: 1; /* Firefox */
}

.headline1{
color: white;
font-size: 20px;
margin-bottom: -10px;
font-weight: 200;

}

.headline2{

  color: #81516E;
  margin-bottom:-20px;
  font-size: 22px;
  font-weight: 600;
}

.textField{
  
  color: white !important;
  border: none;
  font-size: 20px;
}


 
.dialogA{

  width: 500px;
  padding-left: 130px;
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
.dialogA{
 padding-left: 0px;
  
 }


}

.title-center{

  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
}

.rounded-card{
    border-radius:10px;
}

a {
 list-style: none;
 text-decoration: none;
     color: black;
     font-size:15px;
    font-weight: 400;
    display: inline-block;
    width:230px;
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

 .progress{



 margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;

} 
</style>


