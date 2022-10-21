<template>
  <nav class="navbar red lighten-1 ">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('click-navbar')">
          <i class="material-icons white-text">dehaze</i>
        </a>
        <span class="white-text">{{ date | date("datetime") }}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger white-text"
            href="#"
            data-target="dropdown"
            ref="dropdown"
          >
            {{ getName }}
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <router-link class="black-text" to="/admin/profile">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data: () => ({
    date: new Date(),
    interval: null,
    dropdown: null,
      name : null,
  }),
    computed:{
      getName(){
         // console.log(this.$store.getters.auth)
          return this.$store.getters.auth.name
      }
    },
  methods: {
    logout() {
      // console.log("logout");
      // localStorage.removeItem('token')
        this.$store.dispatch("logout");
      this.$router.push("/admin/login?message=logout");
    }
  },
  mounted() {
    (this.interval = setInterval(() => {
      this.date = new Date();
    }, 1000)),
      (this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
        constrainWidth: false
      }));
  },
  beforeDestroy() {
    clearInterval(this.interval);
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy();
    }
  },
    // async created(){
    //     try {
    //         const response = await axios.post('/api/check')
    //         this.name = response.data.user.name
    //     }catch (e) {
    //         console.log(e.message)
    //         if (e.message === 'Request failed with status code 401'){
    //             _.debounce(this.$router.push("/admin/login"),2000)
    //
    //         }
    //     }
    // }
};
</script>

