<template>
    <div id="app">
        <component :is="layout">
            <router-view />
        </component>
    </div>
</template>
<script>
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
export default {
    computed: {
        // eslint-disable-next-line vue/return-in-computed-property
        layout() {
            return (this.$route.meta.layout || "auth") + "-layout";
        }
    },
    components: {
        AuthLayout,
        MainLayout
    },
    created() {
        this.$store.dispatch('checkAuth')
    }
};
</script>
<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";
</style>
