<template>
    <HeaderItems></HeaderItems>

    

    <div class="container">

        <div v-if="product" class="border rounded-3">
            <div class="row" style="width: 100%;">
                <div class="col-4 offest-1 mob-mode" >
                    <div class="active-img" style="position: relative;">
                    <img :src="require_img(active_img)" :alt="product.name" class="rounded-3" style="max-width: 100%; max-height: 100%; object-fit: contain;" />
                    
                    <div class="row col-12 align-items-end position-absolute justify-content-center mb-3" style="bottom: 0;">
                        <div v-for="image in product.images" :key="image" @mouseover="change_active_image(image)" class="offset-1 col-2 no-active-img">
                            &nbsp;
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-7 m-4 mob-mode">
                <div class="row detalis-info">
                    
                    <h1>{{ product.name }}</h1>
                    <h2 class="custom-h2-style">{{ formatPrice(product.price) }}</h2>
                    <p class="custom-p-style">Монтаж: <strong>{{ product.installation }}</strong></p>
                    <p class="custom-p-style">Количество портов: <strong>{{ product.sockets_count }}</strong></p>
                    <p class="custom-p-style">Порт: <strong>{{ product.socket_type }}</strong></p>
                    <p class="custom-p-style">Мощность: <strong>{{ product.power }}</strong></p>
                    <p class="custom-p-style">Удалённое управление: <strong>{{ product.remote_control }}</strong></p>
                    <p class="custom-p-style">{{ product.description }}</p>
                        
                    <div class="row">
                        <div class="col-md-3">
                            <router-link to="/form-message">
                                <a href="#" class="btn btn-primary d-flex w-100 pt-2 pb-2 justify-content-center">Заказать</a>
                            </router-link>
                            
                        </div>

                        <div class="col-md-4 mb-2">
                            <router-link to="/form-message">
                                <a href="#" class="btn btn-primary d-flex w-100 pt-2 pb-2 justify-content-center">Уточнить детали</a>
                            </router-link>
                        </div>  
                        
                    </div>
                    

                </div>
            </div>
            </div>
        </div>
        <div v-else style="height: 35vh;">
            <h1 class="row justify-content-center">Товар не найден</h1>
        </div>

        <router-link to="/store" class="position-relative d-block" >
            <img src='../assets/comeback.png' class="mb-3 mt-3" alt="Logo Image"/>
        </router-link>
    </div>




        

    <MainFooter></MainFooter>
    
</template>
       

<script>

import HeaderItems from './HeaderItems.vue'
import MainFooter from './MainFooter.vue'
import axios from 'axios';

export default {
    name: 'AllProductInfo',
    components: {
        HeaderItems,
        MainFooter,
    },
    data() {
        return {
            product: null,
            active_img: null
        };
    },
    created() {
        const productId = this.$route.params.productId;
        this.getProductDetails(productId);
    },
    methods: {
        async getProductDetails(productId) {
            try {
                // Загрузка информации о продукте по его productId
                const response = await axios.get(`${process.env.BASE_URL}data/products.json`);
                const products = response.data.items;
                console.log(products); // Отладочный вывод
                // this.product = products.find(product => product.id === productId);
                this.product = products.find(product => product.id === parseInt(productId));

                if (this.product && this.product.images.length > 0) {
                    this.active_img = this.product.images[0];
                }

            } catch (error) {
                console.error(error);
            }
        },

        require_img(image) {
            return require(`@/assets/${image}`);
        },

        change_active_image(image) {
            this.active_img = image;
        },
        formatPrice(price) {
            if (!parseInt(price)) return '';
            const priceString = (price / 100).toFixed(2);
            const priceArray = priceString.split('').reverse();
            let index = 3;
            while (priceArray.length > index + 3) {
                priceArray.splice(index + 3, 0, ',');
                index += 4;
            }
            return 'от ₽' + priceArray.reverse().join('');
        }
    }
};
</script>

    
<style scoped>

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