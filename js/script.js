/* 
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina 
all'interno di una lista.
Bonus
Far comparire gli indirizzi email 
solamente quando sono stati tutti generati.
*/


const { createApp } = Vue

createApp({
    data() {
        return{
            emails: [],
            apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
            numEmails: 10,
        }
    },
    methods:{

        getRandomEmail(){
            for (let i = 0; i < this.numEmails; i++){
                axios.get(this.apiUrl)
                .then( (response) => {
                    this.emails.push(response.data.response);
                });
                     
            }
                
            
            
        }

    },
    mounted(){
        this.getRandomEmail();
    }
}).mount('#app');
