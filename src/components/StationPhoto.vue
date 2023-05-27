<template>
   
   <div class="station-photo">

        <div class="tasks-type-header col-10 offset-1">
            Галерея електрических станций:
        </div>

        <StructureImg/>
        

    </div>
  
</template>
      
<script>
import StructureImg from './StructureImg.vue';

export default {
    name: "StationPhoto",
    components: {
        StructureImg
    },
    data() {
        return {
            cards: [
                { id: 1, path_to_img: require("@/assets/1.png") },
                { id: 2, path_to_img: require("@/assets/2.png") },
                { id: 3, path_to_img: require("@/assets/3.png") },
                { id: 4, path_to_img: require("@/assets/4.png") },
                { id: 5, path_to_img: require("@/assets/5.png") }
            ],
        };
    },
}
</script>
  
<style scoped>

    .tasks-type-header{
        font-weight: 400;
        font-size: 60px;
        line-height: 72px;
        text-align: center;
        padding-top: 50px;
    }
  
  @media (max-width: 1200px) {
    .tasks-type-header {
      font-size: 45px;
    }
  }
  
  @media (max-width: 768px) {
    .tasks-type-header {
      font-size: 35px;
    }
    }

</style>