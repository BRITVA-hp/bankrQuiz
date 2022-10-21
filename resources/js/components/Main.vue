<template>
    <section v-show="!stateModalLast && !stateModalQuiz" class="promo">
        <div class="container">
            <div class="promo__inner">
                <img class="promo__image" src="../../img/promo/promo-image.png" alt="promo-image">
                <div class="promo__content">
                    <div class="promo__inner-logo-mobile">
                        <img class="promo__content-logo-mobile" src="../../img/promo/promo-one-mobile.png" alt="promo-one-mobile">
                        <img class="promo__content-logo-mobile" src="../../img/promo/promo-two-mobile.png" alt="promo-two-mobile">
                    </div>
                    <div class="promo__content-block">
                        <div class="promo__block-text">
                            Федеральная программа
                            <span class="promo__block-text promo__block-text--color">"Всероссийская амнистия".</span>
                            Законное списание долгов
                        </div>
                        <div class="promo__block-starting">
                            от 300 000 ₽
                        </div>
                    </div>
                    <h2 class="promo__content-title">
                        <span class="promo__content-title promo__content-title--color">Узнайте,</span>
                        КАК СПИСАТЬ ДОЛГИ САМОМУ-БЕСПЛАТНО БЕЗ БАНКРОТСТВА!
                    </h2>
                    <div class="promo__content-subtitle">Банки не хотят, чтобы вы это знали!</div>
                    <img class="promo__image-mobile" src="../../img/promo/promo-image-mobile.png" alt="promo-image-mobile">
                    <button @click="quiz" class="button promo__content-button">ОПРОС</button>
                    <div class="promo__content-logo-inner">
                        <img class="promo__content-logo" src="../../img/promo/promo-logo-one.png" alt="promo-logo-one">
                        <img class="promo__content-logo" src="../../img/promo/promo-logo-two.png" alt="promo-logo-two">
                    </div>
                </div>
                <div class="promo__block">
                    <div class="promo__block-text">
                        Федеральная программа
                        <span class="promo__block-text promo__block-text--color">"Всероссийская амнистия".</span>
                        Законное списание долгов
                    </div>
                    <div class="promo__block-starting">
                        от 300 000 ₽
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ../../promo -->
</template>

<script>
import fadeInSmooth from '../scripts/fadeInSmooth'

export default {
    name: "Main.vue",
    computed: {
        stateModalQuiz() {
            return this.$store.getters.stateModalQuiz
        },
        stateModalLast() {
            return this.$store.getters.stateModalLast
        }
    },
    methods: {
        quiz() {
            fadeInSmooth(document.querySelector('.quiz'))
            this.$store.dispatch('modalQuizOn')
        }
    }
}
</script>

<style scoped>

</style>
