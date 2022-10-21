<template>
    <transition>

        <div v-show="stateModalThanks" @click="modalThanksOffTarget($event)" class="modal modal--active modal-thanks">
            <div class="modal-thanks__dialog">
                <img @click="modalThanksOff" src="img/modal/close.png" alt="close" class="modal-thanks__close">
                <img src="img/modal/ok.png" alt="ok" class="modal-thanks__img">
                <p class="modal-thanks__title">Заявка отправлена</p>
                <p class="modal-thanks__text">Мы получили вашу заявку. <br> Наш юрист свяжется с вами</p>
            </div>
        </div>
        <!-- ./modal modal-thanks -->


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
