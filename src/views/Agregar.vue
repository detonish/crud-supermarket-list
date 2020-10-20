<template>
<div>
  <h1>Agregar producto a la lista</h1>
  <form class="form-inline"
      @submit.prevent="agregarArticulo(name)">
  <!--  <input type="text" v-model="name"> -->
  <!--  <button type="submit" to="/">Agregar</button> -->
    <div class="input-group mb-2 mr-sm-2">
      <div class="input-group-prepend">
        <div class="input-group-text">Nombre</div>
      </div>
      <input type="text" class="form-control" v-model="name">
    </div>
    <button type="submit" class="btn btn-primary mb-2">Agregar!</button>
  </form>
  {{name}}
</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
name: "Agregar",
  data() {
  return {
    name: ''
    }
  },
  methods: {
  ...mapActions(['agregarArticulo'])
  }
}
</script>

<style scoped>

</style>
