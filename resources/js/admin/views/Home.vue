<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button @click="fetch" type="button" class="btn waves-effect waves-light btn-small blue lighten-1">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <div class="row">
      <div class="col s12 m6 l4">
        <div class="card light-blue bill-card">
          <div class="card-content white-text">
            <span class="card-title">Всего заявок сегодня</span>

            <p class="currency-line">
              <span>{{ orders.length }}</span>
            </p>
          </div>
        </div>
      </div>

      <div v-if="orders.length !== 0" class="col s12 m6 l8">
        <div class="card orange darken-3 bill-card">
          <div class="card-content white-text">
            <div class="card-header">
              <span class="card-title">Последние 3 заявки</span>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Имя </th>
                  <th>Телефон</th>
                  <th>Дата</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(order, index) in orders" :key="index">
                    <td v-if="index < 3">{{ order.name}}</td>
                    <td v-if="index < 3">+{{ order.phone }}</td>
                    <td v-if="index < 3">
                        {{ new Date(order.created_at) | date('datetime') }}
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'Home',
    data: () => ({
        orders:'',
    }),
    methods:{
        fetch(){
            axios.get('/api/orders', {
                params:{
                    today: true
                }
            }).then(response => {
                console.log(response.data.length)
                this.orders = response.data
            })
        }
    },
    mounted() {
        this.fetch()
    }
}
</script>
<style scoped>
.btn-journal{
    margin: 0 auto;
}
</style>
