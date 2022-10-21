<template>
    <footer
        :class="{ 'footer--last' : stateModalLast }"
        class="footer">
        <div class="container">
            <a class="footer__policy" href="#" target="_blank">Политика конфиденциальности</a>
            <div class="footer__info">
                ООО центр финансовой защиты “Должник прав” ОГРН: 1167456068735 ИНН/КПП: 7453293238/745301001
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    computed: {
        stateModalLast() {
            return this.$store.getters.stateModalLast
        }
    }
}
</script>

<style scoped>

</style>
