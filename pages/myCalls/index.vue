<template>


<!-- <ul >
  <li v-for="userCall in userCalls">
    {{ userCall.Iss_Irn }}
     {{ userCall.Iss_Subject }}
    
     
     {{userCall.Iss_CallTypeClassification.Ccl_Name}}
        {{userCall.Iss_LogDate }}
  </li>
</ul> -->

    <v-card class="data-table">
      <v-card-title>
      
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      
      <!-- <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field> -->
</v-card-title>

      <v-data-table
      class="blue darken-3"
                v-bind:headers="headers"
                :items="items"
                :search="search"
                v-bind:pagination.sync="pagination"
                
              
               
                >
    <template slot="items" slot-scope="props">
      <!-- <td class = "text-xs-left">{{ props.item.Title }}</td> -->
      
      <!-- <td class="text-xs-left "  >
        <div class = "post-thumbnail" :style="{backgroundImage:'url('+ props.item.Poster + ')'}"> </div>



      </td> -->
      <td class="text-xs-left">{{ props.item.Iss_Irn }}</td>
      <td class="text-xs-left">{{ props.item.Iss_Subject }}</td>
      <td class="text-xs-left">{{ props.item.Iss_CallTypeClassification.Ccl_Name }}</td>
      <td class="text-xs-left">{{ props.item.Iss_LogDate  }}</td>
    
    </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
</v-alert>
  </v-data-table>

  </v-card>
    
   
</template>


<script>
export default {

  layout: 'myCalls',

    data(){
        return {

pagination : {'sortBy': 'DateAdded', 'descending': true, 'rowsPerPage': -1},
  search: '',
  headers: [
        
    
        { text: 'Reference number', value: 'ReferenceNumber',align: 'left' },
        { text: 'Subject', value: 'Subject',align: 'left' },
        { text: 'Classification', value: 'Classification',align: 'left' },
        { text: 'Date Logged', value: 'Date Logged',align: 'left' },
       
      ],
 items: []




        }


    },

    
    
     created () {
    this.$store.dispatch('fetchUser')
  },

    mounted: function(){

        console.log(`usercalls ${this.userCalls[10].Iss_Irn}`);


        const postsArray = []
            for (const key in this.userCalls){
                postsArray.push({ ...this.userCalls[key], id:key})
            }

            console.log(` postArray= ${postsArray[1]}`);

            this.items=postsArray;

//             if (typeof this.userCalls === 'String'){
// console.log("this is an object");

//     } else {

//         console.log('not');
//     }


    },

   computed: {
       user () { // gets updated automatically
      return this.$store.state.user
      
    },
    userCalls () {
      return this.$store.state.userCalls
    }
  }

 
 

}
</script>






<style scoped>

.data-table{

    padding-left:200px;
    padding-top: 80px;
}

</style>
