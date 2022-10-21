<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <div class="header__logo">
                    АМНИСИТИЯ <span class="header__logo header__logo--color">РФ</span>
                </div>
                <button @click="modalMainOn"     class="header__button button--effect">Бесплатная консультация</button>
                <button @click="modalMainOn" class="header__button-mobile">
                    <img class="header__button-mobile-icon" src="../../img/header/header-button-mobile.png" alt="header-button-mobile">
                </button>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    methods: {
        modalMainOn() {
            this.$store.dispatch('modalMainOn')
        }
    }
}
</script>

<style scoped>

</style>
