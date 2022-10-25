<template>
    <main cvlass="main">

        <section>
            <h2 class="section-title">Укажите верный вариант:</h2>

            <div class="container">

                <div
                    v-for="(card, cardIndex) in cards"
                    :key="cardIndex"
                    :class="{'is-invalid' : !answers[cardIndex] && answersFlag}"
                    class="card"
                >
                    <div  class="invalid-feedback invalid-feedback--q" v-if="!answers[cardIndex] && answersFlag">Ответьте на вопрос!</div>

                    <h3 class="title">{{card.question}}</h3>

                    <form class="card__form" action="#">
                        <label
                            v-for="(answer, answerIndex) in card.answers"
                            :key="answerIndex"
                            :class="{ 'card__form--label-checkbox' : card.type === 'checkbox' }"
                            class="card__form--label">
                            <input
                                @change="setAnswer(cardIndex, card.type, card.question, answer, $event.target.checked), calcProgressPercent()"
                                :value="answer"
                                :type="card.type"
                                :name="card.type + (cardIndex + 1)"
                                :class=" card.type === 'checkbox' ? 'card__form--label-check' : 'card__form--label-input'"
                            >
                            <p
                                :class=" card.type === 'checkbox' ? 'card__form--label-text_check' : 'card__form--label-text'"
                            >{{answer}}</p>
                        </label>
                    </form>

                    <div class="card__number">
                        <span>{{cardIndex + 1}}</span>
                    </div>
                </div>

            </div>
        </section>

        <section>
            <h2 class="section-title">Введите Ваши данные</h2>

            <div class="container">
                <div class="d-flex justify-content-around align-items-start flex-wrap">

                    <form @submit.prevent="addOrder" action="#" class="contacts__personal mb-5 mb-lg-0">
                        <div>

                            <div class="main__input-group mb-3">
                                <input
                                    @blur="calcProgressPercent"
                                    v-model="name"
                                    :class="{'is-invalid':($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.minLength)}"
                                    id="modalName"
                                    type="text"
                                    placeholder="Фамилия, имя и отчество"
                                    class="input"
                                >
                                <div  class="invalid-feedback" v-if="($v.name.$dirty && !$v.name.required)">Обязательное поле.</div>
                                <div  class="invalid-feedback" v-else-if="($v.name.$dirty && !$v.name.minLength)">Имя должно быть больше 1 буквы</div>
                            </div>

                            <div class="seclect mb-3">

                                <div :class="{ 'is-active' : selectActive }" class="select">
                                    <div
                                        @click="selectActive = true"
                                        :class="{'is-invalid' : $v.city.$dirty && !$v.city.required}"
                                        class="select__header">
                                        <span class="select__current">{{city}}</span>
                                        <div class="select__icon"><img src="../.././img/contact/click.svg" alt=""></div>

                                        <div  class="invalid-feedback" v-if="($v.city.$dirty && !$v.city.required)">Обязательное поле.</div>
                                    </div>

                                    <div class="select__body">
                                        <div @click="city = city_, selectActive = false, calcProgressPercent()" v-for="city_ in cities" class="select__item">{{city_}}</div>
                                    </div>
                                </div>
                            </div>

                            <div class="main__input-group mb-3">
                                <input
                                    @blur="calcProgressPercent"
                                    v-model="phone"
                                    v-phone
                                    maxlength="16"
                                    :class="{'is-invalid':($v.phone.$dirty && !$v.phone.required) || ($v.phone.$dirty && !$v.phone.isPhone)}"
                                    :disabled="isDisabled"
                                    id="modalTel"
                                    type="tel"
                                    placeholder="Номер телефона"
                                    class="input"
                                >
                                <div  class="invalid-feedback" v-if="($v.phone.$dirty && !$v.phone.required)">Обязательное поле.</div>
                                <div  class="invalid-feedback" v-else-if="($v.phone.$dirty && !$v.phone.isPhone)">Неверный формат номера</div>
                            </div>

                        </div>

                        <button
                            id="mainSend"
                            class="btn mb-2"
                            type="submit"
                        >
                            {{ isDisabled ? 'Отправка...' : 'Рассчитать стоимость и сроки'}}
                        </button>

                        <p class="contacts__personal--description text-center">Нажимая кнопку, вы даёте согласие на
                            обработку персональных данных согласно политике конфиденциальности</p>
                    </form>

                    <div class="contacts__total">
                        <p class="contacts__total--text mb-1">Уже заполнено</p>

                        <div class="d-flex flex-column mb-3">
                            <span class="progress-number mb-2">{{progressPercent}}%</span>
                            <span class="progress-line position-relative">
                                <input
                                    :style="'width: ' + progressPercent + '%'"
                                    class="progress-line-active position-absolute"
                                >
                            </span>
                        </div>

                        <p class="contacts__total--text mb-4">осталось совсем немного, чтобы списать долги</p>

                        <div class="contacts__total--trigger d-flex align-items-start align-items-lg-center mb-4">

                            <label class="switch mt-1 mt-lg-0">
                                <input v-model="bonuses" value="Хочу списать долги с гарантией возврата средств" type="checkbox">
                                <span class="slider round"></span>
                            </label>
                            <p class="ms-3">Хочу списать долги с гарантией возврата средств</p>
                        </div>

                        <div class="contacts__total--trigger d-flex align-items-start align-items-lg-center mb-5">

                            <label class="switch mt-1 mt-lg-0">
                                <input v-model="bonuses" value="Подключить услугу «Антиколлектор» за 2990 рублей бесплатно" type="checkbox">
                                <span class="slider round"></span>
                            </label>
                            <p class="ms-3">Подключить услугу «Антиколлектор» <s>за 2990 рублей</s> бесплатно</p>
                        </div>

                        <div class="d-flex align-items-center justify-content-between justify-content-sm-start">
                            <img class="gos me-0 me-sm-4" src="../.././img/contact/c-logo1.svg" alt="">
                            <img class="pravo" src="../.././img/contact/c-logo2.svg" alt="">
                        </div>

                    </div>

                </div>
            </div>
        </section>

    </main>
</template>

<script>
import {minLength, required} from "vuelidate/lib/validators";

export default {
    name: "Questions.vue",
    data() {
        return {
            cards: [
                {
                    type: 'radio',
                    question: 'Какая сумма вашего долга?',
                    answers: [
                        '0 рублей',
                        'до 300 000 рублей',
                        '300 000 – 500 000 рублей',
                        '500 000 – 1 000 000 рублей',
                        '1 000 000 – 1 500 000 рублей',
                        'более 1 500 000 рублей'
                    ]
                },
                {
                    type: 'checkbox',
                    question: 'Какое имущество у вас имеется?',
                    answers: [
                        'квартира (единственное жильё)',
                        'земельный участок/загородный дом',
                        'автомобиль',
                        'иное имущество',
                        'нет имущества'
                    ]
                },
                {
                    type: 'radio',
                    question: 'Сколько времени вы не платите по кредитам?',
                    answers: [
                        'до 3-х месяцев',
                        'от 3-х до 12-ти месяцев',
                        'больше года',
                        'плачу вовремя'
                    ]
                },
                {
                    type: 'radio',
                    question: 'Имеется ли у вас действующая ипотека?',
                    answers: [
                        'Да',
                        'Нет'
                    ]
                },
                {
                    type: 'radio',
                    question: 'Имеется ли обязательство по выплате алиментов?',
                    answers: [
                        'Да',
                        'Нет'
                    ]
                },
                {
                    type: 'radio',
                    question: 'Потребуется ли рассрочка на услуги банкротства?',
                    answers: [
                        'Да',
                        'Нет'
                    ]
                }
            ],
            answers: [],
            city: 'Выбрать город:',
            phone: '',
            name: '',
            isDisabled: false,
            cities: [
                'Москва',
                'Питер',
                'Краснодар',
                'Волгоград',
                'Московская область'
            ],
            selectActive: false,
            progressPercent: 0,
            answersFlag: false,
            bonuses: []
        }
    },
    methods: {
        checkAnswers() {
            let count = 0
            this.answers.forEach(el => {
                if (el) {
                    count++
                }
            })
            if(count < this.cards.length) {
                return false
            }
            return true
        },
        calcProgressPercent() {
            let count = 0
            this.answers.forEach(el => {
                if (el) {
                    count++
                }
            })
            const validateParams = Object.keys(this.$v.$params)
            validateParams.forEach(el => {
                if (!this.$v[el].$invalid) {
                    count++
                }
            })
            this.progressPercent = Math.round((count * 100)/(this.cards.length + validateParams.length))
        },
        clearData() {
            this.name = ''
            this.phone = ''
            this.city = 'Выбрать город:'
            this.answers = []
            this.progressPercent = 0
            this.answersFlag = false
            this.bonuses = []
        },
        setAnswer(index, cardType, cardQuestion, answer, checked) {
            if (!this.answers[index]) {
                this.answers[index] = {
                    question: cardQuestion,
                    answer: cardType === 'checkbox' ? [] : ''
                }
            }
            if (cardType === 'checkbox') {
                const indexEl = this.answers[index].answer.findIndex(el => el === answer)
                checked ? this.answers[index].answer.push(answer) : this.answers[index].answer.splice(indexEl,1)
                if (this.answers[index].answer.length === 0) {
                    this.answers[index] = null
                }
            }
            if (cardType === 'radio') {
                this.answers[index].answer = answer
            }
        },
        addOrder(){
            if (this.$v.$invalid) {
                this.$v.$touch()
            }
            if (!this.checkAnswers()) {
                this.answersFlag = true
            }
            if (!this.checkAnswers() || this.$v.$invalid) {
                this.$toast("Заполните все поля!", {
                    type: 'error'
                });
                return
            }
            this.isDisabled = true
            const bonuses = []

            axios.post('/api/order',{
                name: this.name,
                phone: this.phone.replace(/\D/g, ""),
                city: this.city,
                answers: this.answers,
                bonuses: this.bonuses,
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
        },
        city: {
            required: (city) => {
                if (city !== 'Выбрать город:') {
                    return true
                }
                return false
            }
        }
    }
}
</script>

<style scoped>
.main__input-group {
    position: relative;
}
.is-invalid{
    border:1px solid #dc3545;
    /*color: #dc3545;*/
}
.invalid-feedback{
    position:absolute;
    top: -5px;
    left: 2px;
    width: 100%;
    color: #dc3545;
    text-align: left;
    font-size: 14px;
    display: block;
}
.invalid-feedback--q {
    text-align: center;
    top: 10px;
}

@media screen and (max-width: 575px ) {
    .invalid-feedback--q {
        top: -5px;
    }
}
</style>
