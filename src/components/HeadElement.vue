<template>
    
    <div class="head-element">
    
        <div class="container">

            <div class="col-12">
                <div class="row mob-mode pt-4 pb-4">

                    <div class="col-1 mr-2 d-flex align-items-center justify-content-center">
                        <router-link class="col-3 head-link" to="/main">
                            <img src='../assets/logo.png' class="align-items-center justify-content-center" alt="Logo Image"/>
                        </router-link>
                        
                    </div>

                    <div class="row btn-items col-7 d-flex align-items-center justify-content-center">
                        <router-link class="col-3 head-link" to="/store">Продукты</router-link>
                        <router-link class="head-link col-4" to="/partnership">Партнерство</router-link>
                        <router-link class="head-link col-3" to="/contacts">Контакты</router-link>
                        
                    </div>

                    <div class="col-3 d-flex ml-auto">
                        
                        <a href="http://my.soh100.ru/profile" class="col-4 offset-2 button-login" target="_blank">
                            <span class="button-content">
                                <MenuIcon>Войти</MenuIcon>
                            </span>
                        </a>

                        <a href="http://my.soh100.ru/profile" class="col-4 offset-2 button-reg" target="_blank">
                            <span class="button-content">
                                <PersonAddIcon>Регистрация</PersonAddIcon>
                            </span>
                        </a>

                    </div>
                </div>
                
            </div>


                
        </div>

        <div class="pt-5 mt-3 d-flex flex-column align-items-center">
            <h1 class="col-5 mb-4 header-down-up">Safety of Health</h1>
            <h1 class="header-down-middle mb-4">Федеральная сеть зарядных станций для электромобилей</h1>
            <h2 class="col-9 header-down-down mb-5">Производим и устанавливаем для Вас зарядные станции для электромобилей.  
                Использование может быть личным или коммерческим.
            </h2>

            <a href="http://my.soh100.ru/map" class="col-10 col-md-8 col-lg-3 button-stations mt-3 text-decoration-none" target="_blank">
                К зарядным станциям
            </a>
        </div>
        
    </div>
    

</template>
  
<script>
import MenuIcon from 'vue-material-design-icons/Login.vue';
import PersonAddIcon from 'vue-material-design-icons/AccountPlus.vue';


    export default {
        components: {
            MenuIcon,
            PersonAddIcon,
        },
        name: 'HeadElement',
        props: {
        title: String,
        content: String
        }
    }
</script>

  
<style scoped>
.button-login,
    .button-reg {
    display: flex;
    align-items: center;
    justify-content: center;
    }

    .button-content {
    display: flex;
    align-items: center;
    }

    @media (max-width: 767px) {
        .button-login {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            border: none;
            background: none;
            font-size: 0;
        }

        .login-icon {
            display: flex;
            align-items: center;
        }

        .button-reg {
            display: none;
        }
    }

    @media (max-width: 768px) {
        .mob-mode {
            justify-content: center;
            text-align: center;
        }
    }

    @media (max-width: 767px) {
        h2 {
            display: none;
        }
    }


    .button-stations{
        font-weight: 510;
        font-size: 1.5rem;
        line-height: 28px;
        color: #FFFFFF;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 20px 12px;
        background: #1FC4C2;
        border-radius: 18px;
        border: none;
        transition: background-color 0.5s ease-out;

    }

    .button-stations:hover {
        background: #1ba4a2;
    }

    .header-down-down{
        font-weight: 274;
        text-align: center;
        color: #FFFFFF;
    }



    .header-down-middle{
        font-weight: 400;
        text-align: center;
        color: #FFFFFF;
    }
    .header-down-up{
        font-weight: 700;
        font-size: 450%;
        text-align: center;
        color: #FFFFFF;
    }

    .head-element {
    background-image: url('../assets/headImage.jpg');
    background-color: rgba(3, 3, 3, 0.603);
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
    }
    


    h2 {
    color: blue;
    }

    .head-link{
        display: inline-flex;
        text-decoration: none;
        color: rgb(255, 255, 255);
        font-weight: 400;
        font-size: 2vw;
        transition: color 0.5s ease-out;
    }

    .head-link:hover {
        color: #1FC4C2;
    }

    @media (max-width: 768px) {
        .head-link {
            justify-content: center;
            text-align: center;
            width: 200px;
            font-size: 25px;
        }
    }

    .header-style{
        height: 20vh;
    }

    .button-login {
        height: 80%;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        background-color: #FFFFFF;
        border: 4px solid #073232;
        border-radius: 18px;
        transition: background-color 0.5s ease-out;
    }

    .button-login:hover {
        background-color: #1FC4C2;
    }

    .button-reg {
        height: 80%;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        color: #FFFFFF;
        background: #094443;
        border: 3px solid #1FC4C2;
        border-radius: 18px;
        transition: background-color 0.5s ease-out;
    }

    .button-reg:hover {
        background-color: #073130;
    }
</style>