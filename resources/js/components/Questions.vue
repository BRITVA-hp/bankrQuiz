<template>
<section>
    <h2 class="section-title">Укажите верный вариант:</h2>

    <div class="container">
        <div class="card">
            <h3 class="title">Какая сумма вашего долга?</h3>

            <form class="card__form" action="">
                <label for="radio" class="card__form--label">
                    <input checked type="radio" name="radio" class="card__form--label-input">
                    <p class="card__form--label-text">0 рублей</p>
                </label>
                <label for="radio" class="card__form--label">
                    <input type="radio" name="radio" class="card__form--label-input">
                    <p class="card__form--label-text">до 300 000 рублей</p>
                </label>
                <label for="radio" class="card__form--label">
                    <input type="radio" name="radio" class="card__form--label-input">
                    <p class="card__form--label-text">300 000 – 500 000 рублей</p>
                </label>
                <label for="radio" class="card__form--label">
                    <input type="radio" name="radio" class="card__form--label-input">
                    <p class="card__form--label-text">500 000 – 1 000 000 рублей</p>
                </label>
                <label for="radio" class="card__form--label">
                    <input type="radio" name="radio" class="card__form--label-input">
                    <p class="card__form--label-text">1 000 000 – 1 500 000 рублей</p>
                </label>
                <label for="radio" class="card__form--label">
                    <input type="radio" name="radio" class="card__form--label-input">
                    <p class="card__form--label-text">более 1 500 000 рублей</p>
                </label>
            </form>

            <div class="card__number">
                <span>1</span>
            </div>
        </div>

        <div class="card">
            <h3 class="title">Сколько времени вы не платите по кредитам?</h3>

            <form class="card__form" action="">
                <label for="check1" class="card__form--label card__form--label-checkbox">
                    <input id="check1" name="checkbox" checked type="checkbox" class="card__form--label-check">
                    <p class="card__form--label-text_check">квартира (единственное жильё)</p>
                </label>
                <label for="check2" class="card__form--label card__form--label-checkbox">
                    <input id="check2" type="checkbox" name="checkbox" class="card__form--label-check">
                    <p class="card__form--label-text_check">земельный участок/загородный дом</p>
                </label>
                <label for="check3" class="card__form--label card__form--label-checkbox">
                    <input id="check3" type="checkbox" name="checkbox" class="card__form--label-check">
                    <p class="card__form--label-text_check">автомобиль</p>
                </label>
                <label for="check4" class="card__form--label card__form--label-checkbox">
                    <input id="check4" type="checkbox" name="checkbox" class="card__form--label-check">
                    <p class="card__form--label-text_check">иное имущество</p>
                </label>
                <label for="check5" class="card__form--label card__form--label-checkbox">
                    <input id="check5" type="checkbox" name="checkbox" class="card__form--label-check">
                    <p class="card__form--label-text_check">нет имущества</p>
                </label>
            </form>

            <div class="card__number">
                <span>2</span>
            </div>
        </div>

        <div class="card">
            <h3 class="title">Сколько времени вы не платите по кредитам?</h3>

            <form class="card__form" action="">
                <label for="radio" class="card__form--label">
                    <input checked type="radio" name="radio" class="card__form--label-input">
                    <p class="card__form--label-text">до 3-х месяцев</p>
                </label>
                <label for="radio" class="card__form--label">
                    <input type="radio" name="radio" class="card__form--label-input">
                    <p class="card__form--label-text">от 3-х до 12-ти месяцев</p>
                </label>
                <label for="radio" class="card__form--label">
                    <input type="radio" name="radio" class="card__form--label-input">
                    <p class="card__form--label-text">больше года</p>
                </label>
                <label for="radio" class="card__form--label">
                    <input type="radio" name="radio" class="card__form--label-input">
                    <p class="card__form--label-text">плачу вовремя</p>
                </label>
            </form>

            <div class="card__number">
                <span>3</span>
            </div>
        </div>

        <div class="card">
            <h3 class="title">Имеется ли у вас действующая ипотека?</h3>

            <form class="card__form" action="">
                <label for="radio" class="card__form--label">
                    <input checked type="radio" name="radio" class="card__form--label-input">
                    <p class="card__form--label-text">Да</p>
                </label>
                <label for="radio" class="card__form--label">
                    <input type="radio" name="radio" class="card__form--label-input">
                    <p class="card__form--label-text">Нет</p>
                </label>
            </form>

            <div class="card__number">
                <span>4</span>
            </div>
        </div>

        <div class="card">
            <h3 class="title">Имеется ли обязательство по выплате алиментов?</h3>

            <form class="card__form" action="">
                <label for="radio" class="card__form--label">
                    <input checked type="radio" name="radio" class="card__form--label-input">
                    <p class="card__form--label-text">Да</p>
                </label>
                <label for="radio" class="card__form--label">
                    <input type="radio" name="radio" class="card__form--label-input">
                    <p class="card__form--label-text">Нет</p>
                </label>
            </form>

            <div class="card__number">
                <span>5</span>
            </div>
        </div>

        <div class="card">
            <h3 class="title">Потребуется ли рассрочка на услуги банкротства?</h3>

            <form class="card__form" action="">
                <label for="radio" class="card__form--label">
                    <input checked type="radio" name="radio" class="card__form--label-input">
                    <p class="card__form--label-text">Да</p>
                </label>
                <label for="radio" class="card__form--label">
                    <input type="radio" name="radio" class="card__form--label-input">
                    <p class="card__form--label-text">Нет</p>
                </label>
            </form>

            <div class="card__number">
                <span>6</span>
            </div>
        </div>

    </div>
</section>
</template>

<script>
export default {
    name: "Questions.vue"
}
</script>

<style scoped>

</style>
