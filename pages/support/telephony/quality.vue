<template>
  <v-content>
  
  
  
    <!-- <SubNav/> -->
  
    
  
  
  
          <formComponent>
  
  
  
            <v-text-field slot="username" label="Username" required  v-model="username">

  
  
  
            </v-text-field>
  
            <v-text-field slot="subject" label="Subject" required v-model="subject">
            
  
  
  
            </v-text-field>
  
            <v-text-field slot="info-field" label="Phone number affected" >
  
  
  
  
  
            </v-text-field>

             <div slot ="checkb">
           <v-layout  row wrap class="mt-1 mb-4">
               <v-flex xs12 sm4 md4>
              <v-checkbox
            
                label="On an incoming call"
                color="primary"
                value="primary"
                hide-details
              ></v-checkbox>
              <v-checkbox
              
                label="On an outgoing call"
                color="secondary"
                value="secondary"
                hide-details
              ></v-checkbox>
                <v-checkbox
               
                label="Incoming and outgoing"
                color="error"
                value="error"
                hide-details
              ></v-checkbox>
              
            </v-flex>
            <v-flex xs12 sm4 md4>
              <v-checkbox
                
                label="Cell phone call"
                color="success"
                value="success"
                hide-details
              ></v-checkbox>
              <v-checkbox
                
                label="Landline call"
                color="info"
                value="info"
                hide-details
              ></v-checkbox>
                <v-checkbox
              
                label="Cell phone and landline"
                color="error"
                value="error"
                hide-details
              ></v-checkbox>
              
            </v-flex>
            <v-flex xs12 sm4 md4>
              <v-checkbox
                
                label="Cell phone call"
                color="warning"
                value="warning"
                hide-details
              ></v-checkbox>
              <v-checkbox
               
                label="Landline call"
                color="error"
                value="error"
                hide-details
              ></v-checkbox>
               <v-checkbox
                
                label="Cell phone and landline"
                color="error"
                value="error"
                hide-details
              ></v-checkbox>
              
            </v-flex>
            


               </v-layout >
               </div>
  
  
  
  
<v-btn slot="submitBtn"
      :disabled="!valid"
      @click="submit"
    >
      submit
    </v-btn>


  <v-btn slot="clearBtn" @click="clear">clear</v-btn>
          </formComponent>
  
  
  
  
  
       
  
  
  
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
  
        username: "",
  
  
  
        valid: true,
  
  
  
        subject: "Poor call quality",
  
        information: ""
  
      };
  
    },
  
  
  
    mounted() {
  
      this.loadUsername();
  
    },
  
  
  
    methods: {
  
      loadUsername() {
  
        var temp = "";
  
  
  
        {
  
          axios
  
            .get("http://dst00649:3000/status ", {
  
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
  
        
  
      },
  
  
  
      clear() {
  
        this.$refs.form.reset();
  
      }
  
    }
  
  };
</script>
