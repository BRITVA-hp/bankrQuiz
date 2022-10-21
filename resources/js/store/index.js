import Vue from "vue";
import Vuex from "vuex";
import modal from "./modal";
import quiz from "./quiz"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        modal,
        quiz
    }
});
