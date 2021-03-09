<template>
    <div class="app vh-100" :style="{backgroundImage: `url(${state.nasa})`}">
    <header class="container-fluid text-light">
      <div class="row ">
        <div class="col text-center">
          <h1> Welcome to <img alt="Vue logo" src="./assets/logo.png">ue-Nasa</h1>
        </div>
      </div>
    </header>
     <main class="container">
      <div class="row">
        <div class="col">
          <!-- NOTE Search gets defined with prevent to stop reload -->
          <form class="py-2" @submit.prevent="search">
            <!-- NOTE We bind to the state with v-model from our input -->
            <input class="mx-1" type="date"  placeholder="YYYY-MM-DD" v-model="state.query">
            <!-- v-model="state.query" -->
            <button type="submit" class="btn btn-outline-success">Search</button>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <!-- <img :src="state.nasa" alt="" > -->
        </div>
        <div class="col-6">
          <!-- <MovieDetails /> -->
        </div>
      </div>
    </main>
    </div>

</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from './AppState'
import { nasaService } from './Services/NasaService'

export default {
  name: 'App',
  setup () {
    const state = reactive({
      query: '',
      nasa: computed(() => AppState.nasas)
    })
    return {
      state,
      async search () {
        try {
          // NOTE call to service and await the results
          await nasaService.searchNasas(state.query)
          // NOTE due to two way data binding we reset the form by resetting the value of query
          state.query = ''
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
