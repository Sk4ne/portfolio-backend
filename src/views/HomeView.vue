<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <!-- centrar todo el contenido -->
          <!-- <div class="container-fluid d-flex justify-content-center align-items-center">
            <div class="text-center">
              <h3 class="text-center">Hola, soy</h3>
              <h1 class="text-center mt-2" style="font-size:70px">Neider Lopez</h1>
              <h3 class="text-center mt-4">Desarrollador BackEnd</h3>
            </div>
          </div> -->
          <!-- </centrar todo el contenido -->
          <div class="container-fluid d-flex justify-content-center align-items-center" style="min-height: 85vh;">
            <div class="text-center">
              <h3>Hola, soy</h3>
              <h1 style="font-weight:700;font-size:70px">Neider Lopez</h1>
              <h3 class="mt-4">Desarrollador BackEnd</h3>
            </div>
          </div>
          <!-- test -->
          <router-link :to="{hash:'#seccion1'}">IR A SOBRE MI</router-link>
          <!-- test -->
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <i class="fa-solid fa-chevron-down animate__animated animate__fadeOutDown animate__infinite fa-2x icon"></i>
      </div>
      <!-- animate__fadeInDown -->
      <!-- ROW 2 -->
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <div class="row">
        <div class="col-md-12" id="seccion1">
          <!-- <AboutView /> -->
          <h1 class="text-center">Sobre MI</h1>
          <hr>
        </div>
      </div>
      <br><br><br><br><br>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import AboutView from './AboutView.vue';
export default {
  // name: 'HomeView',
  components: {
    // AboutView
  }
}
</script>

<style scoped>
/* h1,h2,h3{
    color:white
  } */
</style>