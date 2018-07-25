<template>
  <v-content>
  
  
  
    <!-- <SubNav/> -->
  
    
  
  
  
          <formComponent  v-model="valid" lazy-validation>
  
  
  
            <v-text-field slot="username" label="Username" required  v-model="username"
            
            >

  
  
  
            </v-text-field>
  
            <v-text-field slot="subject" label="Subject" required v-model="subject">
            
  
  
  
            </v-text-field>
  
            <v-text-field slot="info" label="Provide further information about this request, if possible" textarea v-model="information"
            :rules="nameRules"
            
            >
  
  
  
  
  
            </v-text-field>
  
  
  
<v-btn slot="submitBtn"
      :disabled="!valid"
      @click="submit"
    >
      submit
    </v-btn>


  <v-btn slot="clearBtn" @click="clear">clear</v-btn>
          </formComponent>
  
  
  
  
 

   
   
    

      <v-dialog v-model="dialog" max-width="290">

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

  
  
  
  </v-content>
</template>



<script>
  const axios = require("axios");
  
  import formComponent from "~/components/form.vue";
  
  
  
  export default {
  
    components: {
  
      formComponent
  
    },

    props: ['subject','callType'],
  
  
  
    data() {
  
      return {
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
         dialog: false
        
  
      };
  
    },

     computed: {
    user () { // gets updated automatically
      return this.$store.state.user
      
    }
  },
  created () {
    this.$store.dispatch('fetchUser')
  },
  

  mounted(){

 
    console.log(`form component mounted: ${this.$store.state.user}`);
  },
  
  
  
    // mounted() {
  
    //   this.loadUsername();
  
    // },
  
  
  
    methods: {

      exitModal(){

this.dialog = false;
this.showProgress= false;
this.showInfo= false;
this.$router.push({
    path: '/support'
})


      },
  
      // loadUsername() {
  
      //   var temp = "";
  
  
  
      //   {
  
      //     axios.get("http://srv006604:82/node/express/myapp/status", {
      //        "Content-Type": "application/json",
  
      //         "Cache-Control": "no-cache",
  
      //         "Access-Control-Allow-Origin": "*",
  
      //         withCredentials: true
  
      //       })
  
           
  
      //       .then(response => {
               
  
            
      //         var temp = response.data.replace(/MUD\\/g, "");
      //         console.log(temp);
  
      //         this.username = temp;
              
            

      //         console.log('Hello ' + this.username);
  
        
  
      //       })
  
      //       .catch(error => {
  
      //         console.log(error.response);
  
      //       });
  
      //   }
  
      // },
  
      submit() {

        if (this.information != '' && this.subject !='') {
  this.dialog = true;
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
  
      }
  
    }
  
  };
</script>

<style scoped>


/* .alert{

border-radius: 10px;
height: 150px;
width: 200px;
 margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;

}

*/

.progress{



 margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;

} 


</style>

