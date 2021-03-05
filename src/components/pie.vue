<template lang="html">

  <section class="pie">
    <div class="nota">
      <label>Titulo:</label>
      <input type="text" class="form-control" id="nombre"  placeholder="" v-model="titulo">
      <label>Contenido:</label>
      <input type="text" class="form-control" id="nombre"  placeholder="" v-model="contenido">
      <label>Prioridad:</label>
      <input type="text" class="form-control" id="nombre"  placeholder="" v-model="prioridad">
      <button v-on:click="alta">Añadir</button>
    </div>
    <div class="nota" v-for="archivo in datos" 
      v-bind:key="archivo.id">
      {{archivo.titulo}}
      {{archivo.contenido}}
      <button v-on:click="completar(archivo)">Completar</button>
      <div v-if="archivo.completado == true">
        <p>Tarea completada</p>
        <button v-on:click="baja(archivo.id)"> Eliminar</button>
      </div>
    </div>
  </section>

</template>

<script lang="js">
  import { db } from '../db'

  export default  {
    name: 'pie',
    props: [],
    mounted () {

    },

    data () {
      return {
          datos: [],
          titulo: "",
          contenido:"",
          prioridad: 0
      }
    },
    methods: {
        alta: function () {
          db.collection('documentos').add({
            titulo: this.titulo,
            contenido: this.contenido,
            prioridad: this.prioridad,
            completado: false
          })
        },

        completar: function(archivo) {
          if (archivo.completado == false){
            db.collection('documentos').doc(archivo.id).update({
              completado: true
            })
          }else{
             db.collection('documentos').doc(archivo.id).update({
              completado: false
            })
          }
        },

        baja: function(documento){
          db.collection('documentos')
            .doc(documento.id)
            .delete()
        } 
    },
    computed: {

    },
    
    firestore: {
      datos: db.collection('documentos')
    }
}


</script>

<style scoped lang="css">
  .pie {

  }

  .nota{
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>
