import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '@/firebase.js'
import router from "@/router";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listasupermercado: [],
    articulo: { name:'', id:''}
  },
  mutations: {
    setListas(state, payload){
      state.listasupermercado = payload
    },
    setArticulo(state,payload){
        state.articulo = payload
    },
    setEliminarArticulo(state,payload){
        const articulosFiltrados =  state.listasupermercado = state.listasupermercado.filter(item => item.id !== payload)
        state.listasupermercado = articulosFiltrados
    }
  },
  actions: {
    getListas({commit}){
      const listaSupermercado = []
      db.collection('listasupermercado').get()
          .then(res => {
            res.forEach(doc => {
              //console.log(doc.id)
              //console.log(doc.data())
              let producto = doc.data()
              producto.id = doc.id
              listaSupermercado.push(producto)
            })
            commit('setListas', listaSupermercado)
          })
    },
    getArticulo({commit}, idArticulo){
      db.collection('listasupermercado').doc(idArticulo).get()
          .then(doc => {
            console.log(doc.id)
            console.log(doc.data())
              let articulo = doc.data()
              articulo.id = doc.id
              commit('setArticulo', articulo)
          })
    },
      editarArticulo({commit}, articulo){
        db.collection('listasupermercado').doc(articulo.id).update({
            name:articulo.name
        })
            .then(() => {
                console.log('Producto Editado')
                router.push("/")
            })
      },
      agregarArticulo({commit}, nombreArticuloNuevo){
        db.collection('listasupermercado').add({
            name: nombreArticuloNuevo
        })
            .then(doc => {
                console.log(doc.id)
                router.push("/")
            })
      },
      eliminarArticulo({commit, dispatch}, idArticulo){
        db.collection('listasupermercado').doc(idArticulo).delete()
            .then(() => {
                console.log('Producto Eliminado')
               // dispatch('getListas')
                commit('setEliminarArticulo', idArticulo)
            })
      }
  },
  modules: {
  }
})
