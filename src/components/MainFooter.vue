<template>
    <div class="col-12">
        <div class="row footer-style container-fluid pt-5 mt-5">
            <div class="col-12 col-md-3  d-flex flex-column align-items-center">

                <div class="logo-el d-flex justify-content-center align-items-center">
                    <img src='../assets/logo_small.png'/>
                    <div class="text-logo">SOH100</div>
                </div>

                <div class="links wk-el mt-3 mb-3">
                        <a href="https://vk.com/soh100" target="_blank">
                            <img src='../assets/wk_logo.png'>
                        </a>

                        <a href="https://vk.com/soh100" target="_blank">
                            <img src='../assets/instagram_logo.png' >
                        </a>
                </div>

                

                <div class="additional-info mb-5">
                    <div class="additional-text">2023 © Все права защищены</div>
                    <div class="additional-text">ООО “СОХ100"</div>
                    <div class="additional-text">ОГРН 1212400007016</div>
                </div>

            </div>

            <div class="col-12 col-md-3 d-flex flex-column align-items-center">
                <div class="header-footer">Продукты</div>
                <router-link class="item-footer" to="/store">Продажа станций</router-link>
                <a href="#" class="item-footer">Использование станций</a>
            </div>

            <div class="col-12 col-md-3 d-flex flex-column align-items-center">
                <div class="header-footer">Партнерство</div>
                <router-link class="item-footer" to="/partnership">Партнерство</router-link>
                <router-link class="item-footer" to="/form-message">Дистрибьюция и сервис</router-link>
                <router-link class="item-footer" to="/form-message">Станции бесплатно</router-link>
            </div>

            <div class="col-12 col-md-3 d-flex flex-column align-items-center">
                <div class="header-footer">Контакты</div>
                <a href="#" class="item-footer">Телефон:+7 (495) 147-81-00</a>
                <a href="#" class="item-footer">E-mail: info@soh100.ru</a>
            </div>
        </div>
    </div>
</template>
       
<script>

    export default {
    name: 'MainFooter',
        data() {
            return {
                
            };
        }

    }
</script>

   
<style scoped>
.footer-style{
    color: white;
    background-color: #403F3F;
    font-weight: 400;
    font-size: 26px;
}

@media (max-width: 768px) {
    .footer-style {
        display: flex;
        flex-direction: column;
    }
}

.header-footer{
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    margin-bottom: 30px;
}

.item-footer{
    font-weight: 400;
    font-size: 20px;
    text-decoration: none;
    margin-bottom: 20px;
    color: white;
}
.item-footer:hover{
    color: #1ba4a2;
}

.additional-text{
    font-weight: 400;
    font-size: 20px;
}

.text-logo{
    font-weight: 700;
    font-size: 26px;
    margin-left: 10px;
}
    
</style>