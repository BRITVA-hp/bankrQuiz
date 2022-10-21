import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import Vuex from 'vuex'
import router from "./router";
import store from "./store";
import messagePlugin from "./utils/message.plugin";
import dateFilter from "./filters/date.filter";
import "./bootstrap";
import "materialize-css/dist/js/materialize.min";



Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.use(Vuex);
Vue.filter('date', dateFilter);
const app = new Vue({
    router,store,
    render: h => h(App),
}).$mount('#app')
