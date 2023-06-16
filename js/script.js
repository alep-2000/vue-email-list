"use strict"

const { createApp } = Vue;

createApp ({
    data(){
        return{
            arrayEmail: []
        }
    }, 
    created() {
        // CICLO FOR
        for(let i=0; i<10; i++){
            // API
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                // PUSHO LE MAIL NELL'ARRAY
            this.arrayEmail.push(result.data.response)
            })
        }
    }  
}).mount('#app');