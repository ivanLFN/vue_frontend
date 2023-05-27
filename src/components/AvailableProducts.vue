<template>

    <HeaderItems></HeaderItems>


    <div class="container">

        <div class="row justify-content-center">
            <div class="col-md-4 d-flex justify-content-center" v-for="product in products" :key="product.id">
            <ProductCard
                :product="product"
                class="mx-auto"
                @showDetails="selectProduct(product.id)"
            />
            </div>
        </div>
        <router-link to="/main">
            <img src='../assets/comeback.png' class="align-items-center justify-content-center mt-3 mb-3" alt="Logo Image"/>
        </router-link>
    </div>

        
    
    <MainFooter></MainFooter>
    
</template>

       
<script>
    import HeaderItems from './HeaderItems.vue'
    import MainFooter from './MainFooter.vue'
    import ProductCard from './ProductCard.vue'

    import axios from 'axios';
    

    export default {
    name: 'AvailableProducts',
        components: {
            HeaderItems,
            MainFooter,
            ProductCard
        },
        data() {
            return {
                products: [],
                selectedProductId: null
            };
        },

        methods: {
            selectProduct(productId) {
            this.selectedProductId = productId;
            }
        },

        async created() {
            try {
                // const response = await axios.get('/data/products.json');
                const response = await axios.get(`${process.env.BASE_URL}data/products.json`);
                this.products = response.data.items;

            } catch (error) {
                console.error(error);
            }
        }

    }
</script>

   
<style scoped>


</style>