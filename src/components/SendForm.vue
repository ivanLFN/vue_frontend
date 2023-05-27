<template>



    <form v-if="!formSubmitted" @submit="submitForm">
        <div class="container mt-3">
            <div>
                <label for="question" class="custom-p-style">Ваш вопрос:</label>
                <textarea id="question" v-model="question" required class="form-control custom-style" placeholder="Чем мы можем помочь?"></textarea>
            </div>
            <div>
                <label for="name" class="custom-p-style mt-3">Имя:</label>
                <input type="text" id="name" v-model="name" required class="form-control custom-style" placeholder="Как к вам обращаться?">
            </div>
            <div>
                <label for="phone" class="custom-p-style mt-3">Телефон:</label>
                <input type="tel" id="phone" v-model="phone" required class="form-control custom-style" placeholder="+7(999)999-99-99">
            </div>
            <div>
                <label for="email" class="custom-p-style mt-3">Email:</label>
                <input type="email" id="email" v-model="email" required class="form-control custom-style" placeholder="Запасной способ связи">
            </div>
            <div>
                <label for="city" class="custom-p-style mt-3">Город:</label>
                <input type="text" id="city" v-model="city" required class="form-control custom-style" placeholder="Для уточнения специфики">
            </div>
            <button type="submit" class="btn btn-primary pt-2 pb-2 mt-4">Отправить</button>

            <div class="personal-data mt-3">
                <p>Нажимая на кнопку, я выражаю <router-link class="" to="/personal_data">согласие на обработку персональных данных</router-link></p>
            </div>
        </div>
        
    </form>

    <div class="d-flex justify-content-center align-items-center" style="height: 70vh;">
        <img src="../assets/error_network.png"/>
        <h5 class="text-center w-80">{{ response_message }}</h5>
    </div>

</template>
  
<script>
import axios from 'axios';

    export default {
        
        data() {
            return {
                question: '',
                name: '',
                phone: '',
                email: '',
                city: '',

                formSubmitted: false, // Добавленное свойство
                response_message: '', // Добавленное свойство
                
            };
        },
        methods: {
            submitForm(event) {
                event.preventDefault();
                const formData = {
                question: this.question,
                name: this.name,
                phone: this.phone,
                email: this.email,
                city: this.city,
                };
                
                axios.post('http://localhost:8000/api/submit-form/', formData)
                    .then(response => {
                        console.log(response.data);
                        if (response.status === 200 && response.data.message === 'Форма успешно отправлена') {
                        this.formSubmitted = true;
                        this.response_message = response.data.message;
                    }})
                    .catch(error => {
                        console.error(error);
                        this.formSubmitted = true;
                        this.response_message = "Упс... Что-то пошло не так"
                });
            },
        },
    };
</script>

<style>

.custom-p-style{
    font-size: 1.2rem;
}

.custom-style{
    font-size: 1.1rem;
}


</style>