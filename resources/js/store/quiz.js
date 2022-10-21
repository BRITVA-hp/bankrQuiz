export default {
    state:{
        questionAnswer:[
            {
                type: 'radio',
                question : 'Какая у Вас общая сумма долга по всем Вашим кредитам и задолженностям?',
                answers: [
                    'От 300 000 до 500 000 ₽',
                    'От 500 000 ₽ до 1 000 000 ₽',
                    'От 1 000 000 ₽ и выше'
                ],
            },
            {
                type: 'radio',
                question : 'Какой у Вас примерный ежемесячный платеж по ВСЕМ кредитам?',
                answers: [
                    'Менее 10 000 ₽',
                    'От 10 000 до 30 000 ₽',
                    'От 30 000 до 50 000 ₽',
                    'Более 50 000 ₽'
                ],
            },
            {
                type: 'radio',
                question : 'Есть ли у Вас просрочки хотя бы по одному кредиту?',
                answers: [
                    'Нет',
                    'До 3-х месяцев',
                    'Более 3-х месяцев'
                ],
            },
            {
                type: 'radio',
                question : 'Какой вариант, по Вашему мнению, точно поможет?',
                answers: [
                    'Полное списание кредитов и долгов',
                    'Уменьшение платежей и долгов',
                    'Процедура банкротства'
                ],
            },
            {
                type: 'radio',
                question : 'Вы знакомы с 127-ФЗ, ст. 333 ГК РФ, 227-ФЗ?',
                answers: [
                    'Да, я хотел бы списать кредиты законно',
                    'Что-то слышал, но не знаю деталей',
                    'Нет, а что это за законы?'
                ],
            },
            {
                type: 'radio',
                question : 'Есть ли у Вас автокредит, ипотека или кредит под залог/ поручительство?',
                answers: [
                    'Нет, таких нет',
                    'Да, имеется'
                ],
            },
            {
                type: 'input',
                question : 'Напишите, пожалуйста, свой город',
                placeholder: 'Город'
            }
        ],
        quiz: false,
        data: [],
        step: 0,
        prevNextLastStep: false
    },
    getters: {
        statePrevNextLastStep(state) {
            return state.prevNextLastStep
        },
        stateQuiz(state) {
            return state.quiz
        },
        getQuestions(state){
            return state.questionAnswer
        },
        getStep(state){
            return state.step
        },
        getLastStep(state){
            return state.lastStep
        },
        getDataAnswer(state){
            return state.data
        }
    },
    mutations: {
        prevNextLastStepTrue(state) {
            state.prevNextLastStep = true
        },
        prevNextLastStepFalse(state) {
            state.prevNextLastStep = false
        },
        quizTrue(state) {
          state.quiz = true
        },
        changeStep(state,payload){
            state.step += payload
        },
        set(state,payload){
            state.data[state.step] = payload
            // console.log(state.data)
        },
        closeLastStep(state){
            state.lastStep = false
        },
        clearData(state){
            state.data = []
            state.step = 0
        }
    },
    actions: {
        prevNextLastStepTrue ({state, commit}) {
            commit('prevNextLastStepTrue')
        },
        prevNextLastStepFalse ({state, commit}) {
            commit('prevNextLastStepFalse')
        },
        prevNext({state, commit, dispatch}, value) {
            console.log(state.data)
            if (value <= 0) {
                commit('changeStep', value)
            } else {
                if (!state.data[state.step] || state.data[state.step].answer === '') {
                    alert('Выберите вариант ответа!')
                    return false
                }
                if (state.step === state.questionAnswer.length - 1) {
                    dispatch('modalQuizOff')
                    dispatch('modalLastOn')
                    return false
                }
                commit('changeStep', value)
            }

        },
        setData({commit,state}, value) {
            commit('set', value)
        },
        closeLastStep({commit}){
            commit('closeLastStep')
        },
        clearData({commit}){
            commit('clearData')
        }
    }

};
