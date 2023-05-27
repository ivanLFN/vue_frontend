<template>
    <HeaderItems></HeaderItems>

    <div class="container">
    
        <TypePossibilities></TypePossibilities>

        <router-link to="/main" class="position-relative d-block" >
            <img src='../assets/comeback.png' class="mt-5" alt="Logo Image"/>
        </router-link>

    </div>

    <MainFooter></MainFooter>
    
</template>
       

<script>

import HeaderItems from './HeaderItems.vue'
import MainFooter from './MainFooter.vue'
import TypePossibilities from './TypePossibilities.vue'

export default {
    name: 'PartnershipPage',
    components: {
        HeaderItems,
        MainFooter,
        TypePossibilities
    },
    data() {
        return {

        };
    },
    
};
</script>

    
<style scoped>


</style>