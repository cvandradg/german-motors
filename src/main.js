import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

// import VueTextareaAutosize from "vue-textarea-autosize";

import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBbIuFsIsXYydJQ77E7bXFEXpJmDb7oQP0",
  authDomain: "vue-calendario-63cbb.firebaseapp.com",
  projectId: "vue-calendario-63cbb",
  storageBucket: "vue-calendario-63cbb.appspot.com",
  messagingSenderId: "217919261806",
  appId: "1:217919261806:web:8bdbaf49e0542f55486a7f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
