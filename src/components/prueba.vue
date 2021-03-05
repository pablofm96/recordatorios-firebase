<template lang="html">

  <section class="prueba">
    <h1>prueba Component {{nombre}}</h1>
    <input type="button" value="Login" v-on:click="login">
    <input type="button" value="Logout" v-on:click="logout"> 
    <input type="button" value="Carrito" v-on:click="estado">
  </section>

</template>

<script lang="js">
  import Firebase from '../db'

  export default  {
    name: 'prueba',
    props: [],

    data () {
      return {
        user: {
          loggedIn: false,
          data: {}
        }
      }
    },
    mounted: function() {
      Firebase.auth.onAuthStateChanged( user => {
        if (user) {
          this.user.loggedIn = true;
          this.user.data = user;
        }
        else {
          this.user.loggedIn = false;
          this.user.data = {};
        }
      })
    },

    methods: {
       login() {
         Firebase.login();
       },
       logout() {
         Firebase.logout();
       },

       estado() {
         Firebase.auth.onAuthStateChanged( user =>{
           if (user){
             console.log("Hola");
           }
           else{
             console.log("Adios");
           }
         })
       }  
    },
    computed: {

       nombre(){
         if (this.user.data.displayName){
           return this.user.data.displayName
         }
         return null
       }
      
     }
}


</script>

<style scoped lang="css">
  .prueba {

  }
</style>
