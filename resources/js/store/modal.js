import noJump from '../scripts/noJump'

export default ({
    state:{
        modalMain: false,
        modalQuiz: false,
        modalLast: false,
        modalThanks: false,
        modalQuizThanks: false
    },
    getters:{
        stateModalMain(state){
            return state.modalMain;
        },
        stateModalQuizThanks(state){
            return state.modalQuizThanks;
        },
        stateModalThanks(state){
            return state.modalThanks;
        },
        stateModalLast(state){
            return state.modalLast;
        },
        stateModalQuiz(state){
            return state.modalQuiz;
        }
    },
    mutations:{
        MODAL_MAIN_ON: (state) => {
            state.modalMain = true;
        },
        MODAL_MAIN_OFF: (state) => {
            state.modalMain = false;
        },
        MODAL_QUIZ_THANKS_ON: (state) => {
            state.modalQuizThanks = true;
        },
        MODAL_QUIZ_THANKS_OFF: (state) => {
            state.modalQuizThanks = false;
        },
        MODAL_THANKS_ON: (state) => {
            state.modalThanks = true;
        },
        MODAL_THANKS_OFF: (state) => {
            state.modalThanks = false;
        },
        MODAL_LAST_ON: (state) => {
            state.modalLast = true;
        },
        MODAL_LAST_OFF: (state) => {
            state.modalLast = false;
        },
        MODAL_QUIZ_ON: (state) => {
            state.modalQuiz = true;
        },
        MODAL_QUIZ_OFF: (state) => {
            state.modalQuiz = false;
        }
    },
    actions:{
        modalMainOn({commit}){
            commit('MODAL_MAIN_ON');
            noJump();
        },
        modalMainOff({commit}){
            commit('MODAL_MAIN_OFF');
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
        },
        modalQuizThanksOn({commit}){
            commit('MODAL_QUIZ_THANKS_ON');
            noJump();
        },
        modalQuizThanksOff({commit}){
            commit('MODAL_QUIZ_THANKS_OFF');
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
        },
        modalThanksOn({commit}){
            commit('MODAL_THANKS_ON');
            noJump();
        },
        modalThanksOff({commit}){
            commit('MODAL_THANKS_OFF');
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
        },
        modalLastOn({commit}){
            commit('MODAL_LAST_ON');
        },
        modalLastOff({commit}){
            commit('MODAL_LAST_OFF');
        },
        modalQuizOn({commit}){
            commit('MODAL_QUIZ_ON');
        },
        modalQuizOff({commit}){
            commit('MODAL_QUIZ_OFF');
        }
    }
});
