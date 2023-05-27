<template>
    <HeaderItems></HeaderItems>

    

    <div class="container">
        <!-- class="border rounded-3"  -->

        <div v-if="item">
            
            

            <div class="row justify-content-center align-items-center">
                <div class="col-10 col-sm-4">

                    <h1>{{ item.header_text_main }}</h1>

                    <p class="mt-3" style="font-size: 1.2rem;">{{ item.header_text }}</p>

                    <router-link to="/form-message">
                        <a href="#" class="btn btn-primary pt-2 pb-2 mt-3 justify-content-center">Нужна консультация</a>
                    </router-link>

                </div>
                <div class="col-4">
                    <img :src="require_img(item.header_img)" :alt="item.title" class="header-img" />
                </div>
            </div>
            
            <div class="text-center align-items-center text-custom">
                <h1>{{ item.header_body }}</h1>
            </div>
                
            <div class="col-10 mx-auto">
                <div class="mt-5">
                    <ul class="nav nav-tabs">
                        <li v-for="(segment, key) in item.segmets_of_work" class="nav-item" :key="segment.id" style="font-size: 1.2rem;">
                            <a class="nav-link" :class="{ active: activeTab === key }" @click="changeTab(key)">{{ segment.title }}</a>
                        </li>
                    </ul>
                </div>

                <div class="tab-content">
                    <div v-for="(segment, key) in item.segmets_of_work" :key="segment.id" class="tab-pane" :class="{ active: activeTab === key }">

                        <div class="row">
                            <div class="col-12 col-md-5 mt-3">
                                <img :src="require_img(segment.image)" :alt="segment.title" class="w-100 border rounded-3" />
                            </div>

                            <div class="col-12 col-md-7">
                                <div class="d-flex flex-column align-items-start">
                                <p class="mt-3" style="font-size: 1.2rem;">{{ segment.about }}</p>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            

        </div>
        <div v-else style="height: 35vh;">
            <h1 class="row justify-content-center">Страница не найдена!</h1>
        </div>

        <router-link to="/partnership">
            <img src='../assets/comeback.png' class="align-items-center justify-content-center mt-3 mb-3" alt="Logo Image"/>
        </router-link>
    </div>




        

    <MainFooter></MainFooter>
    
</template>
       

<script>

import HeaderItems from './HeaderItems.vue'
import MainFooter from './MainFooter.vue'
import axios from 'axios';

export default {
    name: 'TypePossibilitiesAll',
    components: {
        HeaderItems,
        MainFooter
    },
    data() {
        return {
            item: null,
            activeTab: '1'
        };
    },
    created() {
        const itemId = this.$route.params.itemId;
        this.getProductDetails(itemId);
    },
    methods: {
        async getProductDetails(itemId) {
            try {
                // Загрузка информации о продукте по его itemId
                const response = await axios.get(`${process.env.BASE_URL}data/possibilities.json`);
                const items = response.data.items;
                console.log(items); // Отладочный вывод
                // this.product = items.find(product => product.id === productId);
                this.item = items.find(item => item.id === parseInt(itemId));

            } catch (error) {
                console.error(error);
            }
        },

        require_img(image) {
            return require(`@/assets/${image}`);
        },

        changeTab(tab) {
            this.activeTab = tab;
        }
    }
};
</script>

    
<style scoped>



    @media (max-width: 767px) {
        .text-custom {
            margin-top: 50px;
        }
    }

    @media (max-width: 767px) {
        .header-img {
            display: none;
        }
    }

    @media (max-width: 767px) {
        .mob-mode {
            width: 100%;
        }
    }
    .no-active-img{
        background-color: rgb(255, 255, 255);
        border: 1px solid #212529;
        border-radius: 10px;
    }

    .custom-h2-style {
        font-weight: normal;
        font-size: 1.5rem; /* Измените значение размера шрифта по вашему выбору */
    }

    .custom-p-style{
        font-size: 1.2rem; /* Измените значение размера шрифта по вашему выбору */
    }

    .custom-button {
        background-color: #8f8484;
        border-color: #514e4e;
        color: #ffffff;
    }
    .custom-button:hover {
        background-color: #676161;
    }

</style>