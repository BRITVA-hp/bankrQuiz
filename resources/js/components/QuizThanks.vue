<template>
    <transition>

        <div v-show="stateModalQuizThanks" class="modal modal--active modal-thanksQ">
            <div class="modal-thanksQ__dialog">
                <img @click="modalQuizThanksOff" src="img/modal/close.png" alt="close" class="modal-thanksQ__close">
                <img src="img/modal/ok.png" alt="ok" class="modal-thanksQ__img">
                <p class="modal-thanksQ__title">Спасибо за ответы</p>
                <p class="modal-thanksQ__text">Ваши ответы приняты в обработку. <br> В ближайшее время с Вами свяжется юрист</p>
            </div>
        </div>
        <!-- ./modal modal-thanksQ -->
    </transition>
</template>

<script>
export default {
    name: "QuizThanks",
    methods: {
        modalQuizThanksOff() {
            this.$store.dispatch('modalQuizThanksOff')
        }
    },
    computed: {
        stateModalQuizThanks() {
            return this.$store.getters.stateModalQuizThanks
        }
    }
}
</script>

<style scoped>
.v-enter-active, .v-leave-active {
    transition: opacity .5s;
}
.v-enter, .v-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
}
</style>
