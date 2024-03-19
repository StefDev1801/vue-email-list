let { createApp } = Vue
createApp({
    data(){
        return{
          arrayEmail : [],
        }
    },
    mounted(){
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response)=>{
            console.log(response);
            console.log(response.data.response);//will give me a rnd email
            this.arrayEmail.push(response.data.response)
        })
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response)=>{
            console.log(response);
            console.log(response.data.response);//will give me a rnd email
            this.arrayEmail.push(response.data.response)

        })
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response)=>{
            console.log(response);
            console.log(response.data.response);//will give me a rnd email
            this.arrayEmail.push(response.data.response)
        })
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response)=>{
            console.log(response);
            console.log(response.data.response);//will give me a rnd email
            this.arrayEmail.push(response.data.response)
            
        })
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response)=>{
            console.log(response);
            console.log(response.data.response);//will give me a rnd email
            this.arrayEmail.push(response.data.response)

        })
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response)=>{
            console.log(response);
            console.log(response.data.response);//will give me a rnd email
            this.arrayEmail.push(response.data.response)

        })
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response)=>{
            console.log(response);
            console.log(response.data.response);//will give me a rnd email
            this.arrayEmail.push(response.data.response)

        })
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response)=>{
            console.log(response);
            console.log(response.data.response);//will give me a rnd email
            this.arrayEmail.push(response.data.response)

        })
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response)=>{
            console.log(response);
            console.log(response.data.response);//will give me a rnd email
            this.arrayEmail.push(response.data.response)

        })
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response)=>{
            console.log(response);
            console.log(response.data.response);//will give me a rnd email
            this.arrayEmail.push(response.data.response)

        })
    }
}).mount('#app')

console.log('still works');