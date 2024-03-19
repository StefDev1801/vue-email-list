let { createApp } = Vue
createApp({
    data(){
        return{
          arrayEmail : [],
        }
    },
    methods : {
        callApi(){
            for (let i = 0; i < 10; i++) {
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response)=>{
                        console.log(response.data.response);//will give me a rnd email
                        this.arrayEmail.push(response.data.response)
                        console.log(this.arrayEmail);
                })
                }
        }
    },
    mounted(){
        this.callApi()
    }
}).mount('#app')

console.log('still works');