<template>
    <HeaderItems></HeaderItems>

    <div class="container">
        
        <div class="row">
            <div class="col-lg-6 mb-3">
                <SendForm></SendForm>
            </div>
            <div class="col-lg-6 mt-lg-0">
                <div class="row justify-content-center align-items-center mt-5">
                        <h3 class="text-center">Задайте вопрос — дадим бесплатную консультацию</h3>
                        <p class="custom-p-style mt-2">+7(495)147-81-00</p>
                        <p class="custom-p-style">info@soh100.ru</p>
                </div>
            </div>
        </div>

    <router-link to="/main" class="position-relative d-block" >
                <img src='../assets/comeback.png' class="mt-3" alt="Logo Image"/>
    </router-link>
    </div>

    <MainFooter></MainFooter>
    
</template>
       

<script>

import HeaderItems from './HeaderItems.vue'
import MainFooter from './MainFooter.vue'
import SendForm from './SendForm.vue'

export default {
    name: 'AllProductInfo',
    components: {
        HeaderItems,
        MainFooter,
        SendForm,
    },
    data() {
        return {

        };
    },
    
};
</script>

    
<style scoped>

.custom-p-style{
    font-size: 1.4rem;
    text-align: center;
}
</style>