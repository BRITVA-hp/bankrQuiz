<template>
    <div v-show="!stateModalLast" class="features">
        <div class="container">
            <div class="features__text">После консультации вы узнаете:</div>
            <div class="features__items">
                <div class="features__item">
                    <div class="features__item-circle">
                        <img class="features__item-image" src="../../img/features/features-icon-one.png" alt="features-icon-one">
                    </div>
                    <p class="features__item-descr">
                        Банки и коллекторы
                        перестают названивать
                    </p>
                </div>
                <div class="features__item">
                    <div class="features__item-circle">
                        <img class="features__item-image" src="../../img/features/features-icon-two.png" alt="features-icon-two">
                    </div>
                    <p class="features__item-descr">
                        Не нужно закладывать
                        имущество
                    </p>
                </div>
                <div class="features__item">
                    <div class="features__item-circle">
                        <img class="features__item-image" src="../../img/features/features-icon-three.png" alt="features-icon-three">
                    </div>
                    <p class="features__item-descr">
                        Сохраним доход
                    </p>
                </div>
                <div class="features__item">
                    <div class="features__item-circle">
                        <img class="features__item-image" src="../../img/features/features-icon-four.png" alt="features-icon-four">
                    </div>
                    <p class="features__item-descr">
                        Ускоренная в 4 раза
                        процедура
                    </p>
                </div>
                <div class="features__item">
                    <div class="features__item-circle">
                        <img class="features__item-image" src="../../img/features/features-icon-five.png" alt="features-icon-five">
                    </div>
                    <p class="features__item-descr">
                        Никаких черных
                        меток
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!-- ../../features -->
</template>

<script>
export default {
    name: "Feat",
    computed: {
        stateModalLast() {
            return this.$store.getters.stateModalLast
        }
    }
}
</script>

<style scoped>

</style>
