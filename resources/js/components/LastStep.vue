<template>

    <transition>

<!--        <form v-show="stateModalLast" @submit.prevent="addOrder" action="#" class="container quiz__container">-->
<!--            <h3 class="section__title section__title-line quiz__title">Предварительно одобрен</h3>-->
<!--            <p class="quiz__subtitle">Мы работаем с самыми крупными банками России, вероятность одобрения кредита с нашей помощью составляет 99%!</p>-->
<!--            <div class="quiz__box">-->
<!--                <p class="quiz__text">кредит по ставке <br> <span>4% годовых</span></p>-->
<!--                <p class="quiz__question">Успей получить кредит сейчас!</p>-->

<!--                <div class="quiz__wrap">-->

<!--                    <div class="input-group quiz__input-group">-->
<!--                        <label for="quizName" class="label quiz__label">Ваше имя</label>-->
<!--                        <input-->
<!--                            v-model="name"-->
<!--                            :class="{'is-invalid':($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.minLength)}"-->
<!--                            id="quizName"-->
<!--                            type="text"-->
<!--                            placeholder="ИМЯ"-->
<!--                            class="input quiz__input"-->
<!--                        >-->
<!--                        <div  class="invalid-feedback" v-if="($v.name.$dirty && !$v.name.required)">Обязательное поле.</div>-->
<!--                        <div  class="invalid-feedback" v-else-if="($v.name.$dirty && !$v.name.minLength)">Имя должно быть больше 1 буквы</div>-->
<!--                    </div>-->

<!--                    <div class="input-group quiz__input-group">-->
<!--                        <label for="quizPhone" class="label quiz__label">Ваш телефон</label>-->
<!--                        <input-->
<!--                            v-model="phone"-->
<!--                            v-phone-->
<!--                            maxlength="16"-->
<!--                            :class="{'is-invalid':($v.phone.$dirty && !$v.phone.required) || ($v.phone.$dirty && !$v.phone.isPhone)}"-->
<!--                            :disabled="isDisabled"-->
<!--                            id="quizPhone"-->
<!--                            type="tel"-->
<!--                            placeholder="+7 (___) ___-__-__"-->
<!--                            class="input quiz__input"-->
<!--                        >-->
<!--                        <div  class="invalid-feedback" v-if="($v.phone.$dirty && !$v.phone.required)">Обязательное поле.</div>-->
<!--                        <div  class="invalid-feedback" v-else-if="($v.phone.$dirty && !$v.phone.isPhone)">Неверный формат номера</div>-->
<!--                    </div>-->

<!--                </div>-->

<!--            </div>-->

<!--            <div class="quiz__buttons">-->

<!--                <button-->
<!--                    id="quiz-send"-->
<!--                    class="button quiz__button quiz__button&#45;&#45;last"-->
<!--                    type="submit"-->
<!--                >-->
<!--                    {{ isDisabled ? 'Отправка...' : 'Оставить заявку'}}-->
<!--                </button>-->
<!--            </div>-->

<!--        </form>-->

        <section v-show="stateModalLast" class="last">

            <div class="container">
                <img class="last__image" src="../../img/last/last-image.png" alt="last-image.png">

                <div class="last__box">
                    <div class="last__box-logo">
                        <img class="last__logo last__logo--one" src="../../img/last/last-logo-one.png" alt="last-logo-one">
                        <img class="last__logo last__logo--two" src="../../img/last/last-logo-two.png" alt="last-logo-two">
                    </div>
                    <h3 class="last__title">Мы можем помочь Вам списать
                        все кредиты и долги полностью!
                        Остался всего один шаг и Вам больше
                        не нужно будет платить банкам.
                    </h3>
                    <form @submit.prevent="addOrder" action="#" class="last__form">

                        <div class="last__input-group">
                            <input
                                v-model="name"
                                :class="{'is-invalid':($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.minLength)}"
                                id="quizName"
                                type="text"
                                placeholder="Имя"
                                class="last__input"
                            >
                            <div  class="invalid-feedback" v-if="($v.name.$dirty && !$v.name.required)">Обязательное поле.</div>
                            <div  class="invalid-feedback" v-else-if="($v.name.$dirty && !$v.name.minLength)">Имя должно быть больше 1 буквы</div>
                        </div>

                        <div class="last__input-group">
                            <input
                                v-model="phone"
                                v-phone
                                maxlength="16"
                                :class="{'is-invalid':($v.phone.$dirty && !$v.phone.required) || ($v.phone.$dirty && !$v.phone.isPhone)}"
                                :disabled="isDisabled"
                                id="quizPhone"
                                type="tel"
                                placeholder="+7 (___) ___ - __ - __"
                                class="last__input"
                            >
                            <div  class="invalid-feedback" v-if="($v.phone.$dirty && !$v.phone.required)">Обязательное поле.</div>
                            <div  class="invalid-feedback" v-else-if="($v.phone.$dirty && !$v.phone.isPhone)">Неверный формат номера</div>
                        </div>

                        <div class="last__button-inner">
                            <button @click.prevent="toQuiz" class="button last__button button--back">Назад</button>
                            <button
                                id="quiz-send"
                                class="button last__button"
                                type="submit"
                            >
                                {{ isDisabled ? 'Отправка...' : 'Отправить'}}
                            </button>
                        </div>
                    </form>
                </div>

            </div>

        </section>
        <!-- /.section last -->

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
        questions(){
            return this.$store.getters.getQuestions
        },
        getData(){
            return this.$store.getters.getDataAnswer
        },
        stateModalLast(){
            return this.$store.getters.stateModalLast
        }
    },
    methods:{
        toQuiz() {
          this.$store.dispatch('modalLastOff')
          this.$store.dispatch('modalQuizOn')
            this.$parent.$refs.quizApp.dataAnswer = this.$store.getters.getDataAnswer[this.$store.getters.getDataAnswer.length - 1].answer
            console.log(this.$store.getters.getDataAnswer[this.$store.getters.getDataAnswer.length - 1].answer)
        },
        modalLastOff() {
            this.$store.dispatch('modalLastOff')
        },
        prevNext(val){
            this.$store.dispatch('closeLastStep')
            this.$store.commit('quizTrue')
            this.$store.dispatch('prevNextLastStepTrue')
            this.$store.dispatch('prevNext',val)
        },
        clearData() {
            this.name = '';
            this.phone = '';
        },
        addOrder(){
            if (this.$v.$invalid) {
                this.$v.$touch()
                return
            }
            this.isDisabled = true
            axios.post('/api/order-quiz',{
                name: this.name,
                phone: this.phone.replace(/\D/g, ""),
                data: this.getData,
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
                        this.$store.dispatch('clearData')
                        this.$store.dispatch('prevNextLastStepFalse')
                        this.$store.dispatch('modalLastOff')
                        setTimeout(() => this.$store.dispatch('modalQuizThanksOn'), 500)
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
.last__input-group {
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
.quiz__inputs {
    width: 100%;
    max-width: 420px;
}
</style>
