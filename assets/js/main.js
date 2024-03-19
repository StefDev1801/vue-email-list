let { createApp } = Vue
createApp({
     data(){
         return{

         }
     },
     mounted(){
         console.log('test');
     }
}).mount('#app')

console.log('still works');