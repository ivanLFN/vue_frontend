<template>
   
    <div class="head-element">
      <div class="col-12">
        <HeadElement title="My Component Title" content="My component content" />
      </div>
    </div>


    <div class="type-possibilities mt-5">
      <div class="col-12">
        <TypePossibilities/>
      </div>
    </div>

    <div class="station-photo">
      <div class="col-12">
        <StationPhoto/>
      </div>
    </div>
  
  <MainFooter/>

   
 </template>
       
 <script>
import HeadElement from './HeadElement.vue'
import StationPhoto from './StationPhoto.vue'
import MainFooter from './MainFooter.vue'
import TypePossibilities from './TypePossibilities.vue'

 
 
 export default {
     name: "MainPage",
     components: {
        HeadElement,
        StationPhoto,
        MainFooter,
        TypePossibilities

     },
     data() {
         return {
             
         };
     },
 }
 </script>
   
 <style scoped>

 </style>