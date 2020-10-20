<template>
  <div>
<h1 class="text-center mb-3">Lista del Supermercado</h1>
    <router-link to="/agregar" class="btn btn-success btn-block">
      Agregar
    </router-link>

  <ul class="list-group mt-5">
    <li class="list-group-item"
        v-for="(item,index) in listasupermercado" :key="index" >
      {{item.name}} - {{item.id}}
<div class="float-right">
  <router-link :to="{name: 'Editar', params: {id: item.id}}">
    <button class="btn btn-warning btn-sm mr-2">Editar</button>
  </router-link>
  <button class="btn btn-danger btn-sm"
          @click.prevent="eliminarArticulo(item.id)">Eliminar</button>
</div>


    </li>
  </ul>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
name: "Inicio",
  created(){
  this.getListas()
  },
  methods:{
  ...mapActions(['getListas', 'eliminarArticulo'])
  },
  computed:{
  ...mapState(['listasupermercado'])
  }
}
</script>

<style scoped>

</style>
