import Vuex from 'vuex'
const axios = require("axios");

const createStore = () => {
  return new Vuex.Store({
    state: {
      navState: false,
      user: '',
      userCalls: {},
      // dialog: true
    },

    getters: {

      callsArray: state => {
        return Object.values(this.$store.state.userCalls);


      }


    },


    mutations: {
      navStateTrue(state) {
        state.navState = true;
      },
      navStateFalse(state) {
        state.navState = false;
      },
      setUser(state, user) {
        // example of modifying before storing
        state.user = String(user)
      },
      setUserCalls(state, userCalls) {
        // example of modifying before storing
        state.userCalls = Object(userCalls)
      },

      // toggleDialog: (state) => {
      //   return state.dialog = !state.dialog;
      // },
      // dialogTrue(state) {
      //   state.dialog = true;
      // },
      // dialogFalse(state) {
      //   state.dialog = false;
      // },
      // setDialog(state, payload) {
      //   state.dialog = payload;
      // }
    },
    actions: {








      // nuxtServerInit({ commit }) {
      //   return axios.get("http://srv006604:82/node/express/myapp/status", {
      //     "Content-Type": "application/json",

      //     "Cache-Control": "no-cache",

      //     "Access-Control-Allow-Origin": "*",

      //     withCredentials: true

      //   })
      //     .then(response => {



      //       var tempUser = response.data.replace(/MUD\\/g, "");
      //       console.log(tempUser);



      //       let axiosConfig = {

      //         headers: {

      //           "Content-Type": "application/json",

      //           "Cache-Control": "no-cache",

      //           "Access-Control-Allow-Origin": "*",

      //           withCredentials: "true"

      //         }

      //       };

           


      //       commit('setUser', tempUser)
            
      //       // console.log('Hello ' + this.username);




      //     })

      //     .catch(error => {

      //       console.log(error.response);

      //     });
      // },


      

      fetchUser(store) {

        axios.get("http://srv006604:82/node/express/myapp/status", {
          "Content-Type": "application/json",

          "Cache-Control": "no-cache",

          "Access-Control-Allow-Origin": "*",

          withCredentials: true

        })



          .then(response => {



            var tempUser = response.data.replace(/MUD\\/g, "");
            console.log(tempUser);



            let axiosConfig = {

              headers: {

                "Content-Type": "application/json",

                "Cache-Control": "no-cache",

                "Access-Control-Allow-Origin": "*",

                withCredentials: "true"

              }

            };


            var postData = {
              "api": "sql",
              "profile": "default profile",
              "userid": "admin",
              "pwd": "admin",
              "query": "mbv1UsersOpenCalls",
              "arg1": tempUser

            };

            axios

              .post(

                "http://srv006604:82/node/express/myapp/sendDetails",

                postData,

                axiosConfig

              )

              .then(res => {
                console.log(`username from form component ${store.state.user}`);
                console.log("RESPONSE for calls logged: " + res.data.data.result);

                const postsArray = []
                for (const key in res.data.data.result) {
                  postsArray.push({ ...res.data.data.result[key], id: key })
                }

                console.log(` postArray= ${postsArray[1]}`);




                store.commit('setUserCalls', res.data.data.result)
                console.log(`RESPONSE :  ${store.state.userCalls[1].Iss_Irn}`);
                return store.state.userCalls;


              })

              .catch(err => {

                console.log("AXIOS ERROR: ", err);


              });


            store.commit('setUser', tempUser)
            return store.state.user;
            // console.log('Hello ' + this.username);




          })

          .catch(error => {

            console.log(error.response);

          });




      }

    }
  })
}


export default createStore
