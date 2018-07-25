<template>
    <v-layout row justify-center>

       <!-- <v-btn
      color="primary"
      dark
      @click.stop="dialog = true"
    >
      Open Dialog
    </v-btn> -->
      <v-dialog v-model="dialog" persistent max-width="500px">
        <a slot="activator" class="dialogA" >{{subject}}</a>
        <v-card class="rounded-card">
          <v-card-title class="title-center">
            <span class="headline">{{subject}}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                
                <!-- <v-flex xs12>
                  <v-text-field label="Username" required v-model="testUser"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Subject"  required v-model="title"></v-text-field>
                </v-flex> -->
                <v-flex xs12 >
                  <v-text-field  background-color="red" outline=false label="Please provide further information in this box and click the SUBMIT button below" v-model="information" solo textarea>
  
  
  
  
  
            </v-text-field>
           
                </v-flex>
                
              </v-layout>
            </v-container>
            <!-- <small>*indicates required field</small> -->
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat :disabled="!valid"
      @click="submit">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
       <v-dialog v-model="dialog2" max-width="290">

        <v-progress-circular class="progress" v-show="showProgress" indeterminate color="accent"
   :size="100" :width="7" ></v-progress-circular>
        
        <v-card v-show="showInfo">
          <v-card-title class="headline">Success</v-card-title>
          <v-card-text>Your request has been submitted.  
            Your reference number is: {{output}}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            
            <v-btn color="blue darken-4" flat="flat" @click.native="exitModal">OK</v-btn>
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
         dialog2:false




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
  
    
  
      submit() {

        if (this.information != '' && this.subject !='') {
          this.dialog = false;
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

.textField{
  border: none;
  color: blue;
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


