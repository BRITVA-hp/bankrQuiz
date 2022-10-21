<template>
  <div>
    <div class="page-title">
      <h3>Журнал записей</h3>
    </div>

    <div v-if="orders.length !== 0" class="filter-form">
        <b>Фильтр</b>
        <form>
            <div class="row">
<!--                <div class="input-field col s2">-->
<!--                    <input v-model="name" id="first_name" type="text" class="validate">-->
<!--                    <label for="first_name">Имя</label>-->
<!--                </div>-->
<!--                <div class="input-field col s2">-->
<!--                    <input v-model="phone" id="last_name" type="text">-->
<!--                    <label for="last_name" class="">Телефон</label>-->
<!--                </div>-->
                <div class="input-field col s2">
                        <select v-model="status">
                            <option value="" disabled selected>Выбрать статус</option>
                            <option value="new">Новый</option>
                            <option value="cancel">Отменен</option>
                        </select>
                        <label>Статус</label>
                </div>
                <div class="input-field col s4">
                    <date-picker v-model="dateRange"  format="YYYY-MM-DD" type="date" range placeholder="Select date range"></date-picker>
                </div>
                <p>
                    <label>
                        <input v-model="uniquePhone" @change="!uniquePhone" type="checkbox" />
                        <span>Удалить дубликаты</span>
                    </label>
                </p>
                <div class="input-field col s3">
                    <button class="btn waves-effect waves-light red" type="submit" name="action" @click.prevent="fetch">
                       Применить
                    </button>
                </div>
<!--                <div class="input-field col s3">-->
<!--                    <button type="submit" class="btn waves-effect waves-light btn-small red lighten-1"><i class="material-icons">refresh</i></button>-->
<!--                </div>-->
            </div>
        </form>
    </div>
      <div v-if="isLoad" class="progress red lighten-4">
          <div class="indeterminate red"></div>
      </div>
    <section>
        <h1 v-if="orders.length === 0">Нет заявок</h1>
      <table v-if="orders.length !== 0" class="responsive-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Имя</th>
            <th>Телефон</th>
            <th>Статус</th>
            <th>Дата создания</th>
<!--            <th>Открыть</th>-->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order, index) in orders" :key="index">

            <td>{{ ++index }}</td>
            <td>{{ order.name}}</td>
            <td>{{ order.phone }}</td>
            <td><span class="white-text badge red" :class="{'red': order.status === 'cancel', 'green': order.status === 'new'}">{{ filterStatus(order.status) }}</span></td>
            <td>
                {{ new Date(order.created_at) | date('datetime') }}
            </td>
<!--            <td>-->
<!--              <button class="btn-small btn">-->
<!--                <i class="material-icons">open_in_new</i>-->
<!--              </button>-->
<!--            </td>-->
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>
<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/ru';

export default {
    name: 'Journal',
    components: {
        DatePicker,
    },
    data: ()=> ({
        isLoad: false,
        orders: {},
        name: null,
        phone: null,
        status: null,
        uniquePhone:true,
        dateRange: [],

    }),
    watch: {
        uniquePhone: function (val){
            this.fetch()
        }
    },
    methods:{
        async fetch(){
            this.isLoad = true
           await axios.get('/api/orders',{
               params:{
                   name: this.name,
                   phone: this.phone,
                   status: this.status,
                   date: this.dateRange
               }
           }).then(response => {
                console.log(response.data.length)
                this.orders = this.uniquePhone ? this.uniqueOrders(response.data) : response.data
                this.isLoad = false
            })
        },
        filterStatus(value){
            if (value === 'new')
                return 'Новый'
            if (value === 'cancel')
                return 'Отменен'
        },
        uniqueOrders(array){
            return array.reduce(
                (results, item) => (results.find(i => i.phone === item.phone) ? results : [...results, item]),
                []
            );
        },
        //Второй вариант отсечения дубликатов
        uniqueOrdersDouble() {
            return this.orders.reduce((seed, current) => {
                return Object.assign(seed, {
                    [current.phone]: current
                });
            }, {});
        },
    },
    mounted() {
        const select = document.querySelectorAll('select');
        const selectInstances = M.FormSelect.init(select);

        this.fetch()
    }
}
</script>
<style scoped>
.filter-form{
    padding: 20px 10px;
    background-color: #fafafa;
}
</style>
