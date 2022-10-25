<template>
    <transition>

        <div v-if="stateModalThanks" @click="modalThanksOffTarget($event)" class="thanks position-fixed d-flex align-items-center flex-column justify-content-center text-center">
            <img @click="modalThanksOff" class="position-absolute" src="../../img/modal/closed.svg" alt="">
            <h3 class="thanks__title mb-4">Заявка отправлена</h3>
            <p class="thanks__text">Мы получили вашу заявку. <br>
                Наш менеджер свяжится с вами.</p>
        </div>

    </transition>
</template>

<script>
export default {
    name: "ModalThanks",
    methods: {
        modalThanksOff() {
            this.$store.dispatch('modalThanksOff')
        },
        modalThanksOffTarget(e) {
            if (e.target.classList.contains('modal-thanks')) {
                this.$store.dispatch('modalThanksOff')
            }
        }
    },
    computed: {
        stateModalThanks() {
            return this.$store.getters.stateModalThanks
        }
    }
}
</script>

<style scoped>
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
.quiz-last {
    min-height: 740px;
}
.v-enter-active, .v-leave-active {
    transition: opacity .5s;
}
.v-enter, .v-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
}
</style>
