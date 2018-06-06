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
  
  
  
        subject: "Other password/folder requests",
  
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
