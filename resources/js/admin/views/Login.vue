   <template>
       <div class="container">
       <div class="col s4 offset-s4 center-align">
            <form class="card auth-card" @submit.prevent="submitHandler">
            <div class="card-content">
                <a href="https://ldigital.ru" target="_blank"><img class="materialboxed" src="/img/admin/logo/logo.png"></a>
<!--              <span class="card-title">Админ Панель</span>-->
              <div class="input-field">
                <input
                  id="email"
                  type="text"
                  v-model.trim="email"
                  :class="{
                    invalid:
                      ($v.email.$dirty && !$v.email.required) ||
                      ($v.email.$dirty && !$v.email.email)
                  }"
                />
                <label for="email">Email</label>
                <small
                  v-if="!$v.email.required && $v.email.$dirty"
                  class="helper-text invalid"
                  >Обязательное поле</small
                >
                <small
                  v-else-if="$v.email.$dirty && !$v.email.email"
                  class="helper-text invalid"
                  >Введите корректный Email</small
                >
              </div>
              <div class="input-field">
                <input
                  id="password"
                  type="password"
                  v-model.trim="password"
                  :class="{
                    invalid:
                      ($v.password.$dirty && !$v.password.required) ||
                      ($v.password.$dirty && !$v.password.minLengh)
                  }"
                />
                <label for="password">Пароль</label>
                <small
                  v-if="$v.password.$dirty && !$v.password.required"
                  class="helper-text invalid"
                  >Введите пароль</small
                >
                <small v-else-if="!$v.password.minLengh" class="helper-text invalid"
                  >Пароль должен быть не менее
                  {{ $v.password.$params.minLengh.min }} символов. Сейчас он
                  {{ password.length }}</small
                >
              </div>
            </div>
            <div class="card-action">
              <div>
                <button class="btn waves-effect waves-light auth-submit red lighten-1" type="submit">
                  Войти
                  <i class="material-icons right">send</i>
                </button>
              </div>

        <!--      <p class="center">-->
        <!--        Нет аккаунта?-->
        <!--        <router-link to="/register">Зарегистрироваться</router-link>-->
        <!--      </p>-->
            </div>
  </form>
       </div>
       </div>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
// eslint-disable-next-line no-unused-vars
import messages from "../utils/messages.js";

export default {
  name: "login",
  data: () => ({
    email: "",
    password: ""
  }),
  validations: {
    email: { email, required },
    password: { required, minLengh: minLength(6) }
  },
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message]);
    }
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password
      };
      try {
          await this.$store.dispatch("login", formData);
      } catch (e) {}
    }
  },
};
</script>
   <style scoped>
   .auth-card{
       width: 100%;
       margin: 0 auto;
   }
   .auth-card img{
       margin: 0 auto;
       width:4rem;
   }
   </style>
