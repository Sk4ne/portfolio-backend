<template>
  <div id="app ">
    <header class="bg-dark fixed-top">
      <!-- <header style="background-color: #3b3a38;"> -->
      <div class="container">
        <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light"> -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
          <a class="navbar-brand" href="/"><i class="fa-solid fa-code"></i> Web Developer</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item ">
                <a :class="`nav-link ${$route.fullPath === '/' && 'active'}`" href="/#home">Inicio</a>
              </li>
              <li class="nav-item">
                <a :class="`nav-link ${$route.fullPath === '/#aboutMe' && 'active'}`" href="#aboutMe">Sobre mi</a>
              </li>
              <li class="nav-item">
                <a :class="`nav-link ${$route.fullPath === '/#skill' && 'active'}`" href="#skill">Habilidades</a>
              </li>
              <li class="nav-item">
                <a :class="`nav-link ${$route.fullPath === '/#experience' && 'active'}`" href="#experience">Experiencia</a>
              </li>
              <li class="nav-item">
                <a :class="`nav-link ${$route.fullPath === '/#project' && 'active'}`" href="#project">Proyectos</a>
              </li>
              <li class="nav-item">
                <a :class="`nav-link ${$route.fullPath === '/#contact' && 'active'}`" href="#contact">Contacto</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <!-- <router-view /> -->
    <!--! home -->
    <section id="home" class="mb-5 ">
      <div class='container'>
        <div class="row">
          <div class="col-md-12">
            <div class="container-fluid d-flex justify-content-center align-items-center" style="min-height: 95vh;">
              <div class="text-center">
                <h3>Hola, soy</h3>
                <h1 style="font-weight:700;font-size:70px">Neider López</h1>
                <h3 class="mt-4">Desarrollador BackEnd</h3>
              </div>
            </div>
            <!--! ICON DOWN -->
            <div class="d-flex justify-content-center align-items-center">
              <i class="fa-solid fa-chevron-down animate__animated animate__fadeOutDown animate__infinite fa-2x icon"></i>
            </div>
            <!--! </ICON DOWN -->
          </div>
        </div>
      </div>
    </section>
    <!--! </home>  -->
    <!-- ?ABOUT ME -->
    <section id="aboutMe">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="text-center" style="font-weight: 700;font-size: 40px;">Acerca de mi</h1>
          </div>
        </div>
        <!--  -->
        <div class="row">
          <div class="col-md-8">
            <p class="text-center mt-4 ">Mi nombre es Neider Lopez, soy <b>Desarrollador Backend</b> me apasiona
              programar y desarrollar software que permita solucionar problemas del mundo real. Por eso estoy en constante
              aprendizaje para ser cada
              ves más competente en la industria Tech.
            </p>
            <div class="text-center">
              <a href="https://drive.google.com/file/d/1grDRlGJlmWOiyJAVp3enAyw8PuoJgfVH/view?usp=share_link" target="_blank" class="mt-5 btn btn-secondary" download>Descargar CV</a>
            </div>
          </div>
          <div class="col-md-3 mt-4">
            <img :src="img" alt="" class="img-fluid img-thumbnail">
          </div>
        </div>
      </div>
    </section>
    <!-- ? </ABOUT ME -->
    <!-- !SKILLS -->
    <section id="skill" class="mt-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="text-center" style="font-weight: 700;font-size:40px;">Habilidades</h1>
            <hr>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-center font-weight-bold ">Lenguajes & Data Bases</h5>
                <img src="https://res.cloudinary.com/dqhme1rod/image/upload/v1683050243/myimages/gyaiiqbw9fxncv7rpxqq.png"
                  class="mt-4 card-img-top img-fluid" alt="" style="width: 15%;" data-toggle="tooltip"
                  data-placement="top" title="NodeJS">
                <!-- <p>NodeJS</p> -->
                <img src="https://res.cloudinary.com/dqhme1rod/image/upload/v1683050400/myimages/lnhgevdrvtoanqrpimlr.svg"
                  class="mt-4 mx-2 card-img-top img-fluid" alt="" style="width: 15%;" data-toggle="tooltip"
                  data-placement="top" title="TypeScript">
                <!-- <p>TypeScript</p> -->
                <img src="https://res.cloudinary.com/dqhme1rod/image/upload/v1635634908/myimages/llqamf2vdurfuepslvdv.png"
                  class="mt-4 mx-2 card-img-top img-fluid" alt="" style="width: 15%;" data-toggle="tooltip"
                  data-placement="top" title="PHP">
                <img src="https://res.cloudinary.com/dqhme1rod/image/upload/v1683050647/myimages/wzxkvu601grprayg3jhq.svg"
                  class="mt-4 mx-2 card-img-top img-fluid" alt="" style="width: 15%;" data-toggle="tooltip"
                  data-placement="top" title="Handlebars">
                <!-- <p>Handlebars</p> -->
                <img src="https://res.cloudinary.com/dqhme1rod/image/upload/v1683049217/myimages/c61fi8mtdfabsbmvrvwj.png"
                  class="mt-4 mx-2 card-img-top img-fluid" alt="" style="width: 15%;" data-toggle="tooltip"
                  data-placement="top" title="HTML">
                <!-- <p>HTML</p> -->
                <img src="https://res.cloudinary.com/dqhme1rod/image/upload/v1683050161/myimages/ojmcsre803gu8ngxb3ng.png"
                  class="mt-4 mx-2 card-img-top img-fluid" alt="" style="width: 15%;" data-toggle="tooltip"
                  data-placement="top" title="CSS">
                <img src="https://res.cloudinary.com/dqhme1rod/image/upload/v1683053925/myimages/rg8lvrwy5g2pujt7httm.svg"
                  class="mt-4 mx-2 card-img-top img-fluid" alt="" style="width: 15%;" data-toggle="tooltip"
                  data-placement="top" title="MongoDB">
                <img src="https://res.cloudinary.com/dqhme1rod/image/upload/v1683054012/myimages/tieekghjfas4oli9kdtc.svg"
                  class="mt-4 mx-2 card-img-top img-fluid" alt="" style="width: 15%;" data-toggle="tooltip"
                  data-placement="top" title="MySQL">

                <!-- <p>CSS</p> -->
                <!-- </div> -->
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-center font-weight-bold">Librerías & Frameworks</h5>
                <img src="https://res.cloudinary.com/dqhme1rod/image/upload/v1683053784/myimages/vyhpkgzw8b4bu2xhc2wy.svg"
                  class="mt-4 mx-2 card-img-top img-fluid" alt="" style="width: 15%;" data-toggle="tooltip"
                  data-placement="top" title="ExpressJS">
                <img src="https://res.cloudinary.com/dqhme1rod/image/upload/v1683052175/myimages/gubv4vly4tmpehf24vuf.svg"
                  class="mt-4 card-img-top img-fluid" alt="" style="width: 15%;" data-toggle="tooltip"
                  data-placement="top" title="VueJS">
                <img src="https://res.cloudinary.com/dqhme1rod/image/upload/v1683052379/myimages/sfvrxy5xxerhnn7gk5gi.svg"
                  class="mt-4 mx-2 card-img-top img-fluid" alt="" style="width: 15%;" data-toggle="tooltip"
                  data-placement="top" title="BootStrap">
                <img src="https://res.cloudinary.com/dqhme1rod/image/upload/v1683052491/myimages/dbyqzllytu4ztg9lu8s3.png"
                  class="mt-4 mx-2 card-img-top img-fluid" alt="" style="width: 15%;" data-toggle="tooltip"
                  data-placement="top" title="Bootstrap-vue">
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img src="#" class="card-img-top" alt="">
              <div class="card-body">
                <h5 class="card-title text-center font-weight-bold">Herramientas & Plataformas</h5>
                <div class="text-center">
                  <img
                    src="https://res.cloudinary.com/dqhme1rod/image/upload/v1683054133/myimages/dv3teiuoxh5dlwqqlfnp.svg"
                    class="mt-4 mx-2 card-img-top img-fluid" alt="" style="width: 15%;" data-toggle="tooltip"
                    data-placement="top" title="GIT">
                  <img
                    src="https://res.cloudinary.com/dqhme1rod/image/upload/v1683054299/myimages/pegbkclovkwz3fkedymv.png"
                    class="mt-4 mx-2 card-img-top img-fluid" alt="" style="width: 15%;" data-toggle="tooltip"
                    data-placement="top" title="Swagger">
                  <img
                    src="https://res.cloudinary.com/dqhme1rod/image/upload/v1683054474/myimages/nboeucp4pwrf0zaow0fb.svg"
                    class="mt-4 mx-2 card-img-top img-fluid" alt="" style="width: 15%;" data-toggle="tooltip"
                    data-placement="top" title="GitHub">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ! </SKILLS -->
    <!-- ?LEARNING -->
    <section id="learning" class="mb-5 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="text-center" style="font-weight: 700; font-size: 40px;">Tecnologias que estoy aprendiendo</h1>
            <div class="mt-4 card">
              <div class="card-body">
                <!-- <h5 class="card-title text-center font-weight-bold">Librerias & Frameworks</h5> -->
                <div class="text-center">
                  <img
                    src="https://res.cloudinary.com/dqhme1rod/image/upload/v1683054811/myimages/j9ixpexl3wxkf7ucarjo.svg"
                    class="mt-4 mx-2 card-img-top img-fluid" alt="" style="width: 15%;" data-toggle="tooltip"
                    data-placement="top" title="NestJS">
                  <img
                    src="https://res.cloudinary.com/dqhme1rod/image/upload/v1683055312/myimages/vzr3ylwf4jidtqoxhbcr.svg"
                    class="mt-4 mx-2 card-img-top img-fluid" alt="" style="width: 15%;" data-toggle="tooltip"
                    data-placement="top" title="Docker">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--? </LEARNING> -->
    <!--! EXPERIENCE -->
    <section id="experience" class="mt-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="text-center" style="font-weight: 700; font-size: 40px;">Experiencia</h1>
          </div>
        </div>
        <!--  -->
        <div class="row">
          <div class="mt-4 col-md-6">
            <h4 class="text-center font-weight-bold">Sisma Corporation</h4>
            <p class="text-center">Agosto - Noviembre 2022</p>
          </div>
          <div class="mt-4 col-md-6">
            <h4 class="text-center font-weight-bold">DESARROLLADOR FULLSTACK</h4>
            <ul class="mt-4">
              <li>
                Encargado de analizar y dar solución a los problemas reportados por los clientes del software Sisma
                Salud, utilizando tecnologías como <b>T-SQL,PHP,JavaScript y JQuery</b>
              </li>
            </ul>
          </div>
        </div>
        <!--  -->
        <div class="row">
          <div class="mt-4 col-md-6">
            <h4 class="text-center font-weight-bold">Grupo de Investigación AVI Universidad de Córdoba</h4>
            <p class="text-center">Febrero - Julio 2020</p>
          </div>
          <div class="mt-4 col-md-6">
            <h4 class="text-center font-weight-bold">DESARROLLADOR BACKEND</h4>
            <ul class="mt-4">
              <li>
                Participe en la creación de una aplicación web progresiva para la divulgación de contenido
                institucional, académico y cultural en la Universidad de Córdoba
                <!-- <h5 class="text-center font-weight-bold">Tecnologias</h5> -->
                <ul class="mt-4">
                  <li><b>NodeJS</b></li>
                  <li><b>ExpressJs</b></li>
                  <li><b>Vuejs</b></li>
                  <li><b>Bootstrap</b></li>
                  <li><b>MongoDB</b></li>
                  <li><b>CSS</b></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <!--  -->
        <div class="row">
          <div class="mt-4 col-md-6">
            <h4 class="text-center font-weight-bold">Corporación Universitaría Americana</h4>
            <p class="text-center">Marzo - Julio 2021</p>
          </div>
          <div class="mt-4 col-md-6">
            <h4 class="text-center font-weight-bold">DESARROLLADOR FULLSTACK</h4>
            <ul class="mt-4">
              <li>
                Desarrollé la primera versión de un sistema para la gestión y préstamo de equipos de computo en la
                Corporación
                Universitaria Americana
                <ul class="mt-4">
                  <li><b>NodeJS</b></li>
                  <li><b>ExpressJs</b></li>
                  <li><b>Vuejs</b></li>
                  <li><b>Bootstrap</b></li>
                  <li><b>MongoDB</b></li>
                  <li><b>CSS</b></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <!--  -->
        <div class="row">
          <div class="mt-4 col-md-6">
            <h4 class="text-center font-weight-bold">Freelancer</h4>
            <p class="text-center">Noviembre 2023 - Actualidad</p>
          </div>
        </div>
      </div>
    </section>
    <!--! </EXPERIENCE -->
    <!--? PROYECTO -->
    <section id="project" class="mt-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="text-center" style="font-weight: 700; font-size: 40px;">Proyectos Personales</h1>
          </div>
        </div>
        <!--  -->
        <div class="row">
          <div class="col-md-6">
            <div class="card mt-4">
              <img src="https://res.cloudinary.com/dqhme1rod/image/upload/v1683061074/myimages/thx6libpe2yrx5pksxfb.png"
                class="card-img-top img-fluid" alt="#">
              <div class="card-body">
                <h5 class="card-title">Generador de encuestas</h5>
                <p class="card-text">Con esta aplicación web puedes generar preguntas de forma dinamica por medio de
                  preguntas abiertas y de opción multiple con una respuesta.
                </p>
                <div class="row">
                  <div class="col">
                    <p>NodeJS</p>
                  </div>
                  <div class="col">
                    <p>ExpressJs</p>
                  </div>
                  <div class="col">
                    <p>VueJS</p>
                  </div>
                  <div class="col">
                    <a href="https://survey-sk4ne.netlify.app/" target="_blank">
                      <img
                        src="https://res.cloudinary.com/dqhme1rod/image/upload/v1683061609/myimages/fg57bskkxp2tw2y91j4x.svg"
                        data-toggle="tooltip" data-placement="top" title="Demo" alt="" class="img-fluid"
                        style="width:30px">
                    </a>
                  </div>
                  <div class="col">
                    <a href="https://github.com/Sk4ne/survey" target="_blank">
                      <img
                        src="https://res.cloudinary.com/dqhme1rod/image/upload/v1683054474/myimages/nboeucp4pwrf0zaow0fb.svg"
                        alt="" class="img-fluid" style="width:30px" data-toggle="tooltip" data-placement="top"
                        title="BackEnd">
                    </a>
                  </div>
                  <div class="col">
                    <a href="https://github.com/Sk4ne/survey-front" target="_blank">
                      <img
                        src="https://res.cloudinary.com/dqhme1rod/image/upload/v1683054474/myimages/nboeucp4pwrf0zaow0fb.svg"
                        alt="" class="img-fluid" style="width:30px" data-toggle="tooltip" data-placement="top"
                        title="FrontEnd">
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="col-md-6">
            <div class="card mt-4">
              <img src="https://res.cloudinary.com/dqhme1rod/image/upload/v1683065927/myimages/rfinvkw6zovhu3nvtnek.png"
                class="card-img-top img-fluid" alt="#">
              <div class="card-body">
                <h5 class="card-title">Go University</h5>
                <p class="card-text">Esta es una ApiRest de una aplicación web progresiva para la divulgación de
                  contenido institucional, académico y cultural en la Universidad de Córdoba
                </p>
                <div class="row">
                  <div class="col">
                    <p>NodeJS</p>
                  </div>
                  <div class="col">
                    <p>ExpressJs</p>
                  </div>
                  <div class="col">
                    <p>VueJS</p>
                  </div>
                  <div class="col">
                    <a href="https://gitlab.com/Spekth/go_university" target="_blank">
                      <img
                        src="https://res.cloudinary.com/dqhme1rod/image/upload/v1683054474/myimages/nboeucp4pwrf0zaow0fb.svg"
                        data-toggle="tooltip" data-placement="top" title="Repositorio" alt="" class="img-fluid"
                        style="width:30px">
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--? </PROYECTO -->
    <!-- !CONTACT -->
    <section id="contact" class="mt-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <h1 class="text-center font-weight-bold" style="font-weight: bold; font-size: 40px;">Contacto</h1>
            <p class="text-center mt-5 ">
              Estoy buscando nuevas oportunidades para contribuir a la industria y crecer como desarrollador. Si tienes un
              proyecto en el que quieres que participe o si tienes alguna pregunta, házmelo saber.
            </p>
            <p class="text-center font-weight-bold">neider86@protonmail.com</p>
            <div class="text-center mt-5">
              <a href="https://gitlab.com/Spekth/go_university" target="_blank">
                <img src="https://res.cloudinary.com/dqhme1rod/image/upload/v1683066372/myimages/dhpootfgjb5g702mplsp.svg"
                  data-toggle="tooltip" data-placement="top" title="LinkedIn" alt="" class="img-fluid" style="width:30px">
              </a>
            </div>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    </section>
    <br><br><br><br><br><br><br><br><br><br>
    <!--! </CONTACT -->
    <!-- <Footer/> -->
  </div>
</template>
<script>
// import Footer from './components/Footer.vue'
export default {
  components: {
    // Footer
  },
  mounted() {
    this.paintNav();
    
  },
  data() {
    return {
      img: 'https://res.cloudinary.com/dqhme1rod/image/upload/v1683045548/myimages/jhbhnemsfakijyy3rdwf.jpg',
    }
  },
  methods: {
    paintNav() {
      let elementMenu = document.querySelectorAll('.nav-link');
      elementMenu.forEach(link => {
        link.addEventListener('click', function () {
          // Quitar la clase "active" de todos los enlaces del menú
          elementMenu.forEach(link => {
            link.classList.remove('active');
          });
          // Agregar la clase "active" solo al enlace que se hizo clic
          this.classList.add('active');
        });
      });
    }
  }
}
</script>
<style scoped>
section[id] {
  scroll-margin-top: 75px;
}

.active{
  border-bottom: 5px solid gray;
}
.nav-link {
  font-size: 20px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>