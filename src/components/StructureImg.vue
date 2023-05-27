<template>
    <div class="col-12" style="padding-top: 30px;">
        <div class="container">

            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div v-if="selectedImage" class="big-image-container my-img">
                        <div class="image-overlay">
                            <img :src="selectedImage.src" alt="Big Image" class="img-fluid rounded" />
                            <div class="image-overlay-content">
                                {{ selectedImageDesc }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-lg-10 offset-1">
                    <div class="small-images-container overflow-auto">
                        <div class="d-flex flex-nowrap">
                            <div v-for="image in images" :key="image.id" class="card border-1 rounded  m-2 mt-3" style="flex: 0 0 auto; width: 200px;" @click="selectImage(image)">
                                <img :src="image.src" 
                                    alt="Small Image" 
                                    class="card-img-top img-fluid rounded" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
       
<script>
    import axios from 'axios';

    export default {
    name: 'StructureImg',
        data() {
            return {
                selectedImage: null,
                images: []
            };
        },

        
        async created() {
            try {
                const response = await axios.get('/data/photos.json');
                this.images  = response.data.items.map(item => ({
                    ...item,
                    src: require(`@/assets/${item.src}`)
                }));

                if (this.images.length > 0) {
                    this.selectedImage = this.images[0];
                }
            } catch (error) {
                console.error(error);
            }
        },
        computed: {
            selectedImageDesc() {
                return this.selectedImage ? this.selectedImage.desc : '';
            }
        },
        methods: {
            selectImage(image) {
                this.selectedImage = image;
            }

        }
    }
</script>

   
<style scoped>
    
    .my-img{
        border-radius: 10px;
        border: 1px solid #d2d2d2;
        padding: 10px;
        position: relative;
    }

    .image-overlay {
        position: relative;
    }

    .image-overlay:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.619);
    opacity: 0;
    transition: opacity 0.3s ease;
    }

    .image-overlay:hover:before {
        opacity: 1;
    }

    .image-overlay-content {
    position: absolute;
    top: 10%;
    left: 10%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: bold;
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

    .image-overlay:hover .image-overlay-content {
        opacity: 1;
    }
</style>