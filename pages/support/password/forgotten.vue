<template>
  <v-content>
  
  
  
    <!-- <SubNav/> -->
  
    
  
  
  
          <formComponent>
  
  
  
            <v-text-field slot="username" label="Username" required  v-model="username">

  
  
  
            </v-text-field>
  
            <v-text-field slot="subject" label="Subject" required v-model="subject">
            
  
  
  
            </v-text-field>
  
            <v-text-field slot="info" label="Provide further information about this request, if possible" textarea>
  
  
  
  
  
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
          <v-card-text>{{output}}</v-card-text>
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
  
  
  
    data() {
  
      return {
        showProgress: false,
        showInfo: false,
     
      
        username: "",
  
  
  
        valid: true,
  
  
  
        subject: "Forgotten password",
  
        information: "",
        output: '',
         dialog: false
        
  
      };
  
    },
  
  
  
    mounted() {
  
      this.loadUsername();
  
    },
  
  
  
    methods: {

      exitModal(){

this.dialog = false;
this.showProgress= false;
this.showInfo= false;


      },
  
      loadUsername() {
  
        var temp = "";
  
  
  
        {
  
          axios
  
            .post("https://jsonplaceholder.typicode.com/posts/", {
  
              withCredentials: true
  
            })
  
           
  
            .then(response => {
               
  
              temp = response.data.substring(response.data.indexOf("\\") + 1);
  
              this.username = temp;
              
            

              console.log(this.username);
  
              console.log("testing Hello");
  
            })
  
            .catch(error => {
  
              console.log(error.response);
  
            });
  
        }
  
      },
  
      submit() {
  this.dialog = true;
       this.showProgress= true;
  
          var postData = {
  
          userId: '1456',
    id: '600',
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "TESTING12345"
  
          };
  
  
  
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
  
              "http://jsonplaceholder.typicode.com/posts/",
  
              postData,
  
              axiosConfig
  
            )
  
            .then(res => {
  
              console.log("RESPONSE RECEIVED: ", res);
              
              this.showInfo = true
              this.showProgress= false;
             
              this.output = res.data.title
            })
  
            .catch(err => {
  
              console.log("AXIOS ERROR: ", err);
              this.showProgress= false;
  
            });
  
       
  
      },
  
  
  
      clear() {
  
        this.$refs.form.reset();
  
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

