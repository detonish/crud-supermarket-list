<template>
<div class="mt-3">

  {{articulo.id}} - {{articulo.name}}
  <h1 class="mt-3">Editar</h1>
  <form
      class="form-inline"
      @submit.prevent="editarArticulo(articulo)">
    <div class="input-group mb-2 mr-sm-2">
      <div class="input-group-prepend">
        <div class="input-group-text mt-3">Nombre</div>
      </div>
      <input type="text" class="form-control mt-3" v-model="articulo.name">
    </div>
    <button type="submit" class="btn btn-primary mb-2 mt-3">Editar!</button>
  </form>
</div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
name: "Editar",
  data() {
  return {
    id: this.$route.params.id
  }
  },
  created(){
  this.getArticulo(this.id)
  },
  methods:{
  ...mapActions(['getArticulo', 'editarArticulo'])
  },
  computed: {
  ...mapState(['articulo'])
  }
}
</script>

<style scoped>

</style>
