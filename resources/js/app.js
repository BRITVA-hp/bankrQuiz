import Vue from 'vue';
import Vuelidate from 'vuelidate';
import Vuex from 'vuex';
import store from './store';
import VueLazyload from 'vue-lazyload';
import './bootstrap';

// toast
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const options = {
    position: 'bottom-right'
}

Vue.use(VueLazyload,{
    lazyComponent: true
});
Vue.use(Vuelidate);
Vue.use(Vuex);
Vue.use(Toast, options);

Vue.component('main-app', require('./components/Main.vue').default);
Vue.component('modal-app', require('./components/Modal.vue').default);
Vue.component('modal-thanks', require('./components/ModalThanks.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.directive('phone', {
    bind(el) {
        function replaceNumberForInput(value) {
            let val = ''
            const x = value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/)

            if (!x[2] && x[1] !== '') {
                val = (x[1] === '8' || x[1] === '7' ) ? '7' : '7' + x[1]
            } else {
                val = !x[3] ? x[1] + x[2] : x[1] + '(' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '')
            }
            return '+' + val
        }

        function replaceNumberForPaste(value) {
            const r = value.replace(/\D/g, '')
            let val = r

            if (val.charAt(0) === '7' || val.charAt(0) === '8') {
                val =  val.slice(1)
            }
            if (val.charAt(0) !== '7' || val.charAt(0) !== '8') {
                val = '7' + val
            }
            return replaceNumberForInput(val)
        }

        el.oninput = function(e) {
            if (!e.isTrusted) {
                return
            }

            if (this.value.replace(/\D/g, '').length <= 11){
                this.value = replaceNumberForInput(this.value)
            }
        }

        el.onpaste = function() {
            setTimeout(() => {
                const pasteVal = el.value
                this.value = replaceNumberForPaste(pasteVal)
            })
        }

    }
})


const app = new Vue({
    el: '#app',
    store,
    data: () => ({

    }),
    computed:{
        getThanks: function(){
            return this.$store.getters.getThanks
        }
    },
    mounted(){

    },
    created: function(){
        if(!sessionStorage.getItem('urlQueryString'))
            sessionStorage.setItem('urlQueryString', window.location.href);

    }
});

// select();
