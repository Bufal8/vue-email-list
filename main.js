/*
Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus:
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const {createApp} = Vue;

createApp({
    data(){
        return{
            email : [],
        }
    },
    mounted(){
        // Ciclo per 10 volte il richiamo dell'API e pusho ogni volta il risultato nell'array vuoto
       for(let i = 1; i <= 10; i++){
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(
                risposta => {
                    this.email.push(risposta.data.response);
                }
            );
        }
    }
}).mount('#app')