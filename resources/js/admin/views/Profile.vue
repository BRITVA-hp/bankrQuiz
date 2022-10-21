<template>
  <div>
    <div class="page-title">
      <h3>Профиль</h3>
    </div>
    <form class="form">
        <div class="input-field">
            <input v-model="name" placeholder="Placeholder" id="name" type="text" class="validate">
            <label for="name" class="active">Имя</label>
            <span class="helper-text invalid">name</span>
        </div>
        <div class="input-field">
            <input v-model="email" id="email"  placeholder="Placeholder" type="text" class="validate"  />
            <label for="email" class="active">Email</label>
            <span class="helper-text invalid">Email</span>
        </div>
        <div class="input-field">
            <input v-model="password" id="password" type="password"  />
            <label for="password">Password</label>
            <span class="helper-text invalid">Password</span>
        </div>

      <button class="btn red lighten-1 waves-effect waves-light" type="submit" @click.prevent="setUpdate">
        Обновить
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
    name: "login",
    data: () => ({
        id: '',
        name: '',
        email: '',
        password: ''
    }),
    computed: {
        getName(){
            return this.$store.getters.auth
        }
    },
    methods:{
       async getUser(){
           const response = await axios.post('/api/check')
           this.name =  response.data.user.name
           this.email = response.data.user.email
           this.id = response.data.user.id
        },

        async setUpdate(){
           try {
               const response = await axios.post('/api/profile/update', {
                   id: this.id,
                   name: this.name,
                   email: this.email,
                   password: this.password
               })
               if (response.status === 200){
                   M.toast({html: "Данные успешно обновлены",classes: 'success-toast'})
               }
           }catch (e){
               M.toast({html: e.message})
           }

        }
    },
    mounted() {
        this.getUser()
    }
}
</script>
<style>
  .success-toast{
     background-color: #2d995b;
 }
</style>
