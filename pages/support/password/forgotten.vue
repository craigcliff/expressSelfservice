<template>

<v-content   >

       <!-- <SubNav/> -->
      <v-container   >

          <v-layout row wrap class="panel-container" >
<v-flex xs6 >
<v-form ref="form" v-model="valid" lazy-validation  >
    <div>
    <v-text-field
      v-model="testUser"
      
      label="Username"
      required
    ></v-text-field>
    <v-text-field
      v-model="subject"
     
      label="Subject"
      required
    ></v-text-field>
     <v-text-field
          v-model="information"

          label="Provide further information about this request, if possible"
          textarea
        ></v-text-field>
    
   
</div >
    <v-btn
      :disabled="!valid"
      @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>

  
</v-flex >
          </v-layout>
             

       <!-- <SubNav/> -->
      </v-container   >

           </v-content   >
    
</template>



<script>
const axios = require("axios");

export default {
  data() {
    return {
      testUser: "",

      valid: true,

      subject: " I have forgotten my network password",
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
          .get("http://localhost:3333/getUser", { withCredentials: true })

          .then(response => {
            temp = response.data.substring(response.data.indexOf("\\") + 1);
            this.testUser = temp;

            console.log(this.testUser);
            console.log("testing Hello");
          })
          .catch(error => {
            console.log(error.response);
          });
      }
    },
    submit() {
      console.log("clicked");
      if (this.$refs.form.validate()) {
        var postData = {
          api: "integration",
          profile: "Sanlam",
          userid: "admin",
          pwd: "admin",
          data: {
            TASKOWNEREMAIL: "CRAIGH",
            TASKTYPE: "143",
            TASKTYPECLASSIFICATION: "3",

            ACTION: "NEW",
            SUBJECT: "TESTING SUBJECT",
            DESC: "TESTING DESC"
          }
        };

        let axiosConfig = {
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
            "Access-Control-Allow-Origin": "*"
          }
        };

        axios
          .post(
            "http://localhost:3333/sendDetails",
           postData,axiosConfig
          )
          .then(res => {
            console.log("RESPONSE RECEIVED: ", res);
          })
          .catch(err => {
            console.log("AXIOS ERROR: ", err);
          });
      }
    },

    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>
