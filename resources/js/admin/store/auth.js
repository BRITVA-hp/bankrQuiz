import router from '../router'

export default {
    state:{
        user: {
            name: '',
            email: ''
        }

    },
    getters: {
        auth(state) {
            return state.user
        }
    },
    mutations:{
        authorized(state,payload){
            state.user = {name: payload.user.name, email: payload.user.email}
            router.forward()
        },
        logoutApp(state){
            state.user = {name: '', email: ''}
            localStorage.removeItem('token')
        }
    },
      actions: {
          async login({ dispath, commit }, formData){
              try {
                  const response = await axios.post('/api/sanctum/token',formData)
                  localStorage.setItem('token',response.data.token)
                  commit('authorized',response.data)
                  window.location.href = '/admin'
                  //router.push({name:'Home'})
              } catch (e) {
                  throw e;
              }
          },

          async checkAuth({commit}){
              try {
                  if (localStorage.getItem('token')) {
                      const response = await axios.post('/api/check')
                      commit('authorized', response.data)
                  }

              } catch (e) {
                  commit('logoutApp')
                  router.push({name:'login'})
                  throw e;

              }
          },

          logout({commit}){
                commit('logoutApp')
          }
      }
};
