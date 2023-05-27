<template>
   
    <HeaderItems title="My Component Title" content="My component content" />
    
    
    <div class="container mt-5">
        <div class="col-lg-12 mt-lg-0 border rounded-3">
            <div class="row mt-2 p-3">
                    <h3>Задайте вопрос — дадим бесплатную консультацию</h3>
                    <p class="custom-p-style mt-2">+7(495)147-81-00</p>
                    <p style="font-size: 1.4rem;">
                        ООО "СОХ100"
                        <br>Юридический адрес: 660030 Красноярск, ул. Марковского 7
                        <br>ИНН: xxx
                        <br>Адрес электронной почты: info@soh100.ru
                    </p>
                    <router-link class="btn btn-primary col-10 col-md-8 col-lg-2 mt-3" to="/form-message">Есть вопрос</router-link>
            </div>

            
        </div>

        <router-link to="/main">
            <img src='../assets/comeback.png' class="align-items-center justify-content-center mt-3 mb-3" alt="Logo Image"/>
        </router-link>
    </div>


    <MainFooter/>

   
 </template>
       
 <script>
import HeaderItems from './HeaderItems.vue'
import MainFooter from './MainFooter.vue'

 
 
 export default {
     name: "ContactsPage",
     components: {
        HeaderItems,
        MainFooter

     },
     data() {
         return {
             
         };
     },
 }
 </script>
   
 <style scoped>
.custom-p-style{
    font-size: 1.4rem;
}

 </style>

