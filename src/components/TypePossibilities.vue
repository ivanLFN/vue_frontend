<template>
  <div class="possibilities-header col-10 offset-1">
    Для кого мы работаем
  </div>
  <div class="container mt-2">
    <div class="d-flex flex-nowrap overflow-auto">
      <div class="card m-4" v-for="item in items" :key="item.id" style="min-width: 25rem;">
        <img :src="item.image" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text">{{ item.description }}</p>
          <button class="btn btn-primary my-btn" @click="selectItem(item.id)">Подробнее...</button>
        </div>
      </div>
    </div>
  </div>

</template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'TypePossibilities',
    data() {
      return {
        items: [],
        selectedItemId: null
      };
    },
  
    async created() {
      try {
        const response = await axios.get('/data/possibilities.json');
        this.items = response.data.items.map(item => ({
          ...item,
          image: require(`@/assets/${item.image}`)
        }));
      } catch (error) {
        console.error(error);
      }
      
    },

    methods: {
      selectItem(itemId) {
        this.selectedItemId = itemId;
        this.$router.push(`/details/${itemId}`); // Переход на страницу с передачей itemId
      }
    },

    
    
  };
  </script>
  
  <style scoped>
  .possibilities-header {
    font-weight: 400;
    font-size: 60px;
    line-height: 72px;
    text-align: center;
  }
  
  @media (max-width: 1200px) {
    .possibilities-header {
      font-size: 45px;
    }
  }
  
  @media (max-width: 768px) {
    .possibilities-header {
      font-size: 35px;
    }
    
  }
  </style>