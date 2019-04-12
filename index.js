import Vue from "vue";
// import "babel-polyfill";
import "./component/component";
import store from "./store";
import scss1 from "./common.scss";
import scss2 from "./global_variable.scss";
import scss3 from "./style.scss";
import scss4 from "./responsive.scss";
import js from "./basic.js";

import { kor } from "./lang/kor";
import { en } from "./lang/en";

const messages = {
  en,
  kor
};
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "en", // set locale
  messages // set locale messages
});

new Vue({
  i18n,
  el: "#wrap",
  data: {
    boxContent: "",
    lang: {},
    hello: "SDFSDF"
  },
  methods: {
    alert: function(event) {
      console.log("clicked!");
      alert("clicked");
      store.commit("increment");
    },
    updateLang: function(lang) {
      i18n.locale = lang;
    }
  },
  created: function() {
    console.log("created!");
  }
});

window.addEventListener("load", async function() {
  console.log("loaded!");
});
