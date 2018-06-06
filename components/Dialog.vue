<template>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="500px">
        <a slot="activator" >{{title}}</a>
        <v-card>
          <v-card-title>
            <span class="headline">{{title}}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                
                <v-flex xs12>
                  <v-text-field label="Username" required v-model="testUser"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Subject"  required v-model="title"></v-text-field>
                </v-flex>
                <v-flex xs12 >
                  <v-text-field slot="info" label="Provide further information about this request, if possible" textarea>
  
  
  
  
  
            </v-text-field>
                </v-flex>
                
              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click.native="dialog = false">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
</template>


<script>
const axios = require("axios");
export default {
     props: ['title','heading'],
    data() {
       
        return{
            dialog: false,
             testUser: "",




        }


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
}
</script>


<style  scoped>

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
</style>


