<template>
  <ul class="sidenav app-sidenav" :class="{ open: value }">
    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
    >
      <a href="#" class="waves-effect waves-red pointer">{{ link.title }}</a>
    </router-link>

      <a href="https://ldigital.ru" target="_blank"><img class="materialboxed" src="/img/admin/logo/logo.png"></a>

  </ul>
</template>
<script>
export default {
  props: ["value"],
  data: () => ({
    links: [
      { title: "DashBoard", url: "/admin/", exact: true },
      { title: "Журнал", url: "/admin/journal" },
      //{ title: "Планирование", url: "/admin/planning" },
      //{ title: "Новая запись", url: "/admin/record" },
      //{ title: "Категории", url: "/admin/categories" }
    ]
  })
};
</script>
<style scoped>
.app-sidenav img{
    width: 50px;
    margin: 0 auto;
    padding: 20px 0px;
    cursor:pointer;
}
</style>
