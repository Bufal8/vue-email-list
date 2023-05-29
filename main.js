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
            mail1: '',
            mail2: '',
            mail3: '',
            mail4: '',
            mail5: '',
            mail6: '',
            mail7: '',
            mail8: '',
            mail9: '',
            mail10: '',
        }
    },

    // il mounted è un evento che si scatena alla fine del 'montaggio' dell'applicazione, all'interno del quale noi passiamo ciò che l'app deve eseguire alla fine.
    mounted(){
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(
                risposta => {
                    // aggiungo il '.data' perchè all'interno del 'risposta' ci sono diverse informazioni , quelle che mi servono sono dentro il '.data'
                    // const result = risposta.data.response;
                    this.mail1 = risposta.data.response;
            });
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(
                risposta => {
                    // aggiungo il '.data' perchè all'interno del 'risposta' ci sono diverse informazioni , quelle che mi servono sono dentro il '.data'
                    // const result = risposta.data.response;
                    this.mail2 = risposta.data.response;
            });
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(
                risposta => {
                    // aggiungo il '.data' perchè all'interno del 'risposta' ci sono diverse informazioni , quelle che mi servono sono dentro il '.data'
                    // const result = risposta.data.response;
                    this.mail3 = risposta.data.response;
            });
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(
                risposta => {
                    // aggiungo il '.data' perchè all'interno del 'risposta' ci sono diverse informazioni , quelle che mi servono sono dentro il '.data'
                    // const result = risposta.data.response;
                    this.mail4 = risposta.data.response;
            });
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(
                risposta => {
                    // aggiungo il '.data' perchè all'interno del 'risposta' ci sono diverse informazioni , quelle che mi servono sono dentro il '.data'
                    // const result = risposta.data.response;
                    this.mail5 = risposta.data.response;
            });
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(
                risposta => {
                    // aggiungo il '.data' perchè all'interno del 'risposta' ci sono diverse informazioni , quelle che mi servono sono dentro il '.data'
                    // const result = risposta.data.response;
                    this.mail6 = risposta.data.response;
            });
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(
                risposta => {
                    // aggiungo il '.data' perchè all'interno del 'risposta' ci sono diverse informazioni , quelle che mi servono sono dentro il '.data'
                    // const result = risposta.data.response;
                    this.mail7 = risposta.data.response;
            });
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(
                risposta => {
                    // aggiungo il '.data' perchè all'interno del 'risposta' ci sono diverse informazioni , quelle che mi servono sono dentro il '.data'
                    // const result = risposta.data.response;
                    this.mail8 = risposta.data.response;
            });
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(
                risposta => {
                    // aggiungo il '.data' perchè all'interno del 'risposta' ci sono diverse informazioni , quelle che mi servono sono dentro il '.data'
                    // const result = risposta.data.response;
                    this.mail9 = risposta.data.response;
            });
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(
                risposta => {
                    // aggiungo il '.data' perchè all'interno del 'risposta' ci sono diverse informazioni , quelle che mi servono sono dentro il '.data'
                    // const result = risposta.data.response;
                    this.mail10 = risposta.data.response;
            });
    }
}).mount('#app')