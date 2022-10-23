<template>
<section>
    <h2 class="section-title">Введите Ваши данные</h2>

    <div class="container">
        <div class="d-flex justify-content-around align-items-start flex-wrap">

            <div class="contacts__personal mb-5 mb-lg-0">
                <form action="">
                    <input type="text" placeholder="Фамилия, имя и отчество" class="input mb-3">

                    <div class="seclect mb-3">
                        <select class="select__main" name="" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>

                        <div class="select">
                            <div class="select__header">
                                <span class="select__current">Выбрать город:</span>
                                <div class="select__icon"><img src="../.././img/contact/click.svg" alt=""></div>
                            </div>

                            <div class="select__body">
                                <div class="select__item">Москва</div>
                                <div class="select__item">Питер</div>
                                <div class="select__item">Краснодар</div>
                                <div class="select__item">Волгоград</div>
                                <div class="select__item">Московская область</div>
                            </div>
                        </div>
                    </div>

                    <input type="text" placeholder="Номер телефона" class="input mb-3">

                </form>

                <button class="btn mb-2">Рассчитать стоимость и сроки</button>
                <p class="contacts__personal--description text-center">Нажимая кнопку, вы даёте согласие на
                    обработку персональных данных согласно политике конфиденциальности</p>
            </div>

            <div class="contacts__total">
                <p class="contacts__total--text mb-1">Уже заполнено</p>

                <div class="d-flex flex-column mb-3">
                    <span class="progress-number mb-2">76%</span>
                    <span class="progress-line position-relative"><input
                        class="progress-line-active position-absolute" checked></span>
                </div>

                <p class="contacts__total--text mb-4">осталось совсем немного, чтобы списать долги</p>

                <div class="contacts__total--trigger d-flex align-items-start align-items-lg-center mb-4">

                    <label class="switch mt-1 mt-lg-0">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                    <p class="ms-3">Хочу списать долги с гарантией возврата средств</p>
                </div>

                <div class="contacts__total--trigger d-flex align-items-start align-items-lg-center mb-5">

                    <label class="switch mt-1 mt-lg-0">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                    <p class="ms-3">Подключить услугу «Антиколлектор» <s>за 2990 рублей</s> бесплатно</p>
                </div>

                <div class="d-flex align-items-center justify-content-between justify-content-sm-start">
                    <img class="gos me-0 me-sm-4" src="../.././img/contact/c-logo1.svg" alt="">
                    <img class="pravo" src="../.././img/contact/c-logo2.svg" alt="">
                </div>

            </div>

        </div>
    </div>
</section>
</template>

<script>
export default {
    name: "Contacts.vue"
}
</script>

<style scoped>

</style>
