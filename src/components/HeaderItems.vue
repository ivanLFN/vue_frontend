<template>
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
            </div>
            
        </div>
    </div>
</template>
       
<script>

    export default {
    name: 'HeaderItems',
        data() {
            return {
                
            };
        }

    }
</script>

   
<style scoped>

.head-link{
    display: inline-flex;
    text-decoration: none;
    color: rgb(0, 0, 0);
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

@media (max-width: 768px) {
    .mob-mode {
        justify-content: center;
        text-align: center;
    }
}
    
</style>