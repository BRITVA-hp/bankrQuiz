<template>

    <section v-show="stateModalQuiz" class="quiz">
        <div ref="quiz" class="container">
            <div class="quiz__logo-inner">
                <img class="quiz__logo quiz__logo--one" src="../../img/quiz/quiz-logo-one.png" alt="quiz-logo-one">
                <img class="quiz__logo quiz__logo--two" src="../../img/quiz/quiz-logo-two.png" alt="quiz-logo-two">
            </div>
            <h2 class="quiz__title">{{questions[step].question}}</h2>
            <div class="quiz__box">

                <div v-for="(answer,index) in questions[step].answers" :key="index" class="quiz__input-group">
                    <label class="quiz__label">
                        <input
                            :value="answer"
                            @change="setAnswer"
                            v-model="dataAnswer"
                            type="radio"
                            name="quiz"
                            class="quiz__radio"
                        >
                        <p class="quiz__label__text"><span>{{ answer }}</span></p>
                    </label>
                </div>

                <div v-show="questions[step].type === 'input'" class="quiz__input-group">
                    <input
                        v-model="dataAnswer"
                        class="input quiz__input" type="text" placeholder="Ваш город">
                    <div  class="invalid-feedback" v-if="($v.dataAnswer.$dirty && !$v.dataAnswer.required)">Обязательное поле.</div>
                </div>

            </div>
            <div class="quiz__button-group">
                <button v-if="step === 0" class="button button--back quiz__button">Назад</button>
                <button v-if="step > 0" @click.prevent="prevNext(-1)" class="button button--back quiz__button">Назад</button>
                <button v-if="step !== questions.length " @click.prevent="prevNext(1)" class="button quiz__button">Далее</button>
            </div>
        </div>

    </section>
    <!-- ./quiz -->

</template>

<script>

import {minLength, required, numeric} from "vuelidate/lib/validators";
import fadeInSmooth from '../scripts/fadeInSmooth'

export default {
    name: "Quiz",
    data: () => ({
        city: '',
        dataAnswer: '',
        dataAnswerArr: [],
        myShow: true
    }),
    computed:{
        statePrevNextLastStep() {
            return this.$store.getters.statePrevNextLastStep
        },
        stateModalQuiz() {
          return this.$store.getters.stateModalQuiz
        },
        questions(){
            return this.$store.getters.getQuestions
        },
        step(){
            return this.$store.getters.getStep
        },
        lastStep(){
            return this.$store.getters.getLastStep
        },
        getDataAnswer(){
            if (this.$store.getters.getDataAnswer[this.step])
                return this.$store.getters.getDataAnswer[this.step].answer
            return false
        }
    },
    methods:{
        modalQuizOff() {
            this.$store.dispatch('modalQuizOff')
        },
        numeric() {
            return  this.questions[this.step].numeric
        },
        typeCheckbox() {
            return this.questions[this.step].type === 'checkbox'
        },
        typeRadio() {
            return this.questions[this.step].type === 'radio'
        },
        typeInput() {
            return this.questions[this.step].type === 'input'
        },
        prevNext(val){
            if(this.typeCheckbox()) {
                const object = {
                    question: this.questions[this.step].question,
                    answer: this.dataAnswerArr.join()
                }
                this.$store.dispatch('setData',object)
            }
            if(this.typeInput()) {
                if (this.$v.$invalid) {
                    this.$v.$touch()
                    return
                }
                this.$v.$reset()
                const object = {
                    question: this.questions[this.step].question,
                    answer: this.dataAnswer
                }
                this.$store.dispatch('setData',object)
            }
            this.$store.dispatch('prevNext',val)
            this.dataAnswer = ''
            this.dataAnswerArr = []
            if (this.getDataAnswer && this.questions[this.step].type !== 'checkbox') {
                this.dataAnswer = this.getDataAnswer
            } else if (this.getDataAnswer && this.questions[this.step].type === 'checkbox') {
                this.dataAnswerArr = this.getDataAnswer.split(',')
            }
            if (!this.lastStep) {
                fadeInSmooth(this.$refs.quiz)
            } else {
                this.city = ''
                this.cityFlag = false
            }
        },
        setAnswer(){
            const object = {
                question: this.questions[this.step].question,
                answer: this.dataAnswer
            }

            this.$store.dispatch('setData',object)
            this.myShow = false
            setTimeout(()=> {
                this.myShow = true
                this.prevNext(1)
            },500)
        }
    },
    validations: {
        dataAnswer: {
            required,
            minLength: minLength(2),
            numeric: function (dataAnswer) {
                if (this.numeric()) {
                    const notDigits = /\D/
                    if (notDigits.test(dataAnswer)) {
                        return false
                    }
                }
                return true
            }
        }
    },
    created() {
        if(this.$store.getters.statePrevNextLastStep) {
            this.dataAnswer = this.$store.getters.getDataAnswer[this.step].answer
        }
    }
}
</script>

<style scoped>
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
.quiz__input-group {
    position: relative;
}
.quiz-wrap {
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
