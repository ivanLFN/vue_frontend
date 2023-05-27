<template>

    <div class="card mb-4" :style="cardStyle">
        <!-- <img :src="requireImage(product.image)" class="card-img-top" :alt="product.name"/> -->
        <img :src="requireImage(product.images[0])" class="card-img-top" :alt="product.name"/>
        
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">Мощность: {{ product.power }}</p>
            <p class="card-text"><strong>Цена: {{ formattedPrice }}</strong></p>

            <div class="row">
                <!-- <router-link class="btn btn-primary col-5 offset-1" to="/productDetails">Подробнее</router-link> -->
                <!-- <a href="#" class="btn btn-primary col-5 offset-1" @click="showDetails">Подробнее</a> -->
                <router-link class="btn btn-primary col-5 offset-1" :to="{ name: 'productDetails', params: { productId: product.id } }">Подробнее</router-link>
                <!-- <a href="#" class="btn btn-primary col-4 offset-1">Заказать</a> -->
                <router-link class="btn btn-primary col-4 offset-1" to="/form-message">Заказать</router-link>
                
            </div>
                
        </div>

    </div>
    
</template>
       

<script>
export default {
    name: 'ProductCard',
    props: {
            product: {
                type: Object,
                required: true
            }
        },
    methods: {
        requireImage(image) {
            return require(`@/assets/${image}`);
        },
        // requireImage(image) {
        //     if (Array.isArray(image) && image.length > 0) {
        //         return image.map(img => require(`@/assets/${img}`));
        //     } else {
        //         return ''; // Или другое значение по умолчанию, если массив пустой или не является массивом
        //     }
        // },
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
        
    },
    computed: {
        formattedPrice() {
            return this.formatPrice(this.product.price);
        },
        cardStyle() {
        return {
            width: window.innerWidth >= 768 && window.innerWidth <= 1200 ? '15rem' : '20rem'
        };
        }
    }
};
</script>

   
<style scoped>


/* 768-1200 */
</style>