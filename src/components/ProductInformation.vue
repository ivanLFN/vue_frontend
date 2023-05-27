<template>

    <div>
        <div>{{ product.name }}</div>
    </div>
    
</template>
       

<script>
export default {
    name: 'ProductInformation',
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


</style>