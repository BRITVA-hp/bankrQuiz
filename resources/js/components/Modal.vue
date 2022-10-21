<template>

    <transition>
        <div @click="modalMainOffTarget($event)" v-show="stateModalMain" class="modal modal--active modal-main">
            <form @submit.prevent="addOrder" action="#" class="modal-main__dialog">
                <img @click="modalMainOff" src="img/modal/close.png" alt="close" class="modal-main__close">
                <h3 class="modal-main__title">Обратный звонок</h3>
                <p class="modal-main__subtitle">Для сотрудничества с нами оставьте свои данные.</p>

                <div class="modal-main__input-group">
                    <input
                        v-model="name"
                        :class="{'is-invalid':($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.minLength)}"
                        id="modalName"
                        type="text"
                        placeholder="Имя"
                        class="modal-main__input"
                    >
                    <div  class="invalid-feedback" v-if="($v.name.$dirty && !$v.name.required)">Обязательное поле.</div>
                    <div  class="invalid-feedback" v-else-if="($v.name.$dirty && !$v.name.minLength)">Имя должно быть больше 1 буквы</div>
                </div>

                <div class="modal-main__input-group">
                    <input
                        v-model="phone"
                        v-phone
                        maxlength="16"
                        :class="{'is-invalid':($v.phone.$dirty && !$v.phone.required) || ($v.phone.$dirty && !$v.phone.isPhone)}"
                        :disabled="isDisabled"
                        id="modalTel"
                        type="tel"
                        placeholder="+7 (___) ___ - __ - __"
                        class="modal-main__input"
                    >
                    <div  class="invalid-feedback" v-if="($v.phone.$dirty && !$v.phone.required)">Обязательное поле.</div>
                    <div  class="invalid-feedback" v-else-if="($v.phone.$dirty && !$v.phone.isPhone)">Неверный формат номера</div>
                </div>

                <button
                    id="modalSend"
                    class="button modal-main__button"
                    type="submit"
                >
                    {{ isDisabled ? 'Отправка...' : 'Отправить'}}
                </button>

                <div class="modal-main__text-small">
                    Нажимая на кнопку, вы даете согласие на обработку
                    персональных данных
                </div>
            </form>
        </div>
        <!-- ./modal modal-main -->
    </transition>
</template>

<script>
import {minLength, required} from "vuelidate/lib/validators";

export default {
    name: "LastStep",
    data:() => ({
        phone: '',
        name: '',
        isDisabled: false,
        counters: null,
    }),
    computed:{
        stateModalMain() {
            return this.$store.getters.stateModalMain
        }
    },
    methods:{
        modalMainOff() {
            this.$store.dispatch('modalMainOff')
        },
        modalMainOffTarget(e) {
            if (e.target.classList.contains('modal')) {
                this.$store.dispatch('modalMainOff')
            }
        },
        clearData() {
            this.name = ''
            this.phone = ''
        },
        addOrder(){
            if (this.$v.$invalid) {
                this.$v.$touch()
                return
            }
            this.isDisabled = true
            axios.post('/api/order',{
                name: this.name,
                phone: this.phone.replace(/\D/g, ""),
                host: window.location.host,
                referrer: document.referrer,
                url_query_string: sessionStorage.getItem('urlQueryString'),
            })
                .then( response => {
                    console.log(response)
                    this.clearData()
                    this.$v.$reset()
                    this.isDisabled = false
                    if(response.status === 200) {
                        this.$store.dispatch('modalMainOff')
                        setTimeout( () => this.$store.dispatch('modalThanksOn')  , 500)
                        if (this.counters.ym) ym(this.counters.ym,'reachGoal','order')
                        if (this.counters.fbq) fbq('track', 'Contact')
                        if (this.counters.google) gtag('event', 'conversion', {'send_to': this.counters.google })
                    }
                })
                .catch( error => {
                    this.isDisabled = false
                    console.log(error.message)
                })
        }
    },
    validations: {
        name: { required , minLength: minLength(2)},
        phone: {
            required,
            isPhone: (phone)=> {
                const phoneRe = /^(8|7)[\d]{10}$/;
                if (phone){
                    const digits = phone.replace(/\D/g, "");
                    return phoneRe.test(digits)
                }
                return false
            }
        }
    },
    created() {
        axios.get('/api/counters').then(response => {
            this.counters = response.data
        }).catch( error => {
            console.log(error.message)
        })
    }
}
</script>

<style scoped>
.modal-main__input-group {
    position: relative;
}
.is-invalid{
    border:1px solid #dc3545;
    color: #dc3545;
}
.invalid-feedback{
    position:absolute;
    top: 0px;
    left: 2px;
    width: 100%;
    color: #dc3545;
    text-align: left;
    font-size: 14px;
}
.quiz-last-wrap {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0, 0.5);
    display: flex;
    justify-content: center;
    overflow: auto;
    z-index: 1;
    padding: 40px 20px;
}
.v-enter-active, .v-leave-active {
    transition: opacity .5s;
}
.v-enter, .v-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
}
</style>
