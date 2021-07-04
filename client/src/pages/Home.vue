<template>
  <div>
    <q-header>
      <div class="full-width row items-center justify-between bg-white q-px-lg" style="height: 100px">
        <div class="col q-pt-lg">
          <q-img src="latam-color.png" style="width: 225px"/>
        </div>
        <q-btn size="30px" outline dense round color="black" icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen"/>
      </div>
    </q-header>

   <!--  <q-drawer side="right" v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-h6 text-grey-8">Lista</q-item-label>
      </q-list>
    </q-drawer>
 -->
    <q-scroll-area horizontal class="window-height absolute-top">
      <div class="row full-height no-wrap q-px-lg q-gutter-md" style="padding-top: 150px;">
        <q-card style="border-radius: 24px; width: 700px; height: 90%;" clickable v-for="(modulo, index) in modulos" :key="index" @click="modulo.id > 1 ? modulos[index - 1].statusCa && modulos[index - 1].statusEx ? $router.push('/modulo/' + modulo.id) : moduloEnable() : $router.push('/modulo/' + modulo.id)">
          <q-img :src="modulo.src" class="full-height">
            <div class="absolute-full row">
              <div class="full-height row items-center">
                <div class="text-h1 text-bold" style="transform: rotate(-90deg); margin-left: -200px">{{modulo.name.toUpperCase()}}</div>
              </div>
              <div class="column items-end absolute-bottom q-pa-lg">
                <div class="text-h2 text-bold">Título</div>
                <div class="text-h6">incidunt ut labore et dolore magna aliqua.</div>
                <div class="text-h6">Ut enim ad veniam, quis nostrud</div>
              </div>
            </div>
          </q-img>
        </q-card>
      </div>
    </q-scroll-area>
    <div class="absolute-bottom-right row q-mr-lg q-mb-xs">
      <div class="text-h6 text-secondary q-mr-xs">Power by</div>
      <div class="text-h6 text-primary">Latam IT Academícela</div>
    </div>
    <q-dialog v-model="info">
      <q-carousel v-model="slide" style="height: auto; border-radius: 24px;" infinite>
        <q-carousel-slide :name="1">
          <div class="text-center text-primary text-h4 text-bold q-pa-md">Bienvenido</div>
          <div class="text-h6 text-center q-pb-lg">Estimado alumno o alumna, te damos la bienvenida al curso “Manejo de Herramientas para un Liderazgo Efectivo”.</div>
          <div class="text-h6 text-center q-pb-lg">Cada uno de los módulos que verás, está compuesto por:</div>
          <div class="text-h6 text-center q-pb-lg">Videos explicativos, textos de Resumen y Glosario de términos, Actividades Interactivas y Casos de Estudio.</div>
          <div class="text-h6 text-center q-pb-lg">Al finalizar cada Módulo, podrás ver una evaluación y una actividad formativa con preguntas que tendrás que resolver para saber cuánto has avanzado en el curso.</div>
          <div class="text-h6 text-center q-pb-lg">Al finalizar este curso adquirirás Habilidades de: Liderazgo a través de herramientas y Técnicas de Planificación, Organización y Gestión del trabajo en Equipo, que te ayudarán a maximizar la eficiencia del trabajo en su empresa.</div>
          <div class="text-center text-primary text-h5 text-bold q-pa-md">Éxito!</div>
          <q-card-actions class="col2 full-width" align="center">
            <q-btn class="q-pa-sm text-h6" color="primary" label="Siguiente" @click="slide++" no-caps style="width: 60%; border-radius: 10px;"/>
          </q-card-actions>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="q-pa-none">
          <div class="text-center text-primary text-h4 text-bold q-pa-lg">¡Recuerda!</div>
          <div class="column items-center justify-center">
            <q-img src="Mano.png" style="width: 400px"/>
          </div>
          <div class="row justify-center">
            <div class="text-h6 text-primary q-pr-xs text-bold">Desliza</div>
            <div class="text-h6">hacia tu izquierda</div>
          </div>
          <div class="text-h6 text-center q-pb-lg">para ver todos los modulos</div>
        </q-carousel-slide>
      </q-carousel>
    </q-dialog>
    <q-dialog v-model="enable" persistent>
      <q-card style="border-radius: 24px;" class="column">
        <div class="col-2 row items-center justify-center text-primary text-h4 text-bold q-pa-lg">Tienes que tener en cuenta</div>
        <div class="column items-center justify-center q-pt-lg">
          <q-img src="precaucio.png" style="width: 200px"/>
        </div>
        <div class="column items-center q-pa-lg">
          <div class="text-h6 text-no-wrap">Para poder ver modulos mas abanzados primero debes</div>
          <div class="text-h6 text-primary q-pr-xs text-bold">completar el modulo anterior</div>
        </div>
        <q-card-actions class="col2 q-pb-lg" align="center">
          <q-btn class="q-pa-sm text-h6" color="primary" label="Cerrar" v-close-popup no-caps style="width: 50%; border-radius: 10px;"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 1,
      info: null,
      modulos: [],
      leftDrawerOpen: false,
      enable: false
    }
  },
  mounted () {
    this.modulos = JSON.parse(localStorage.getItem('modulos'))
    this.info = JSON.parse(localStorage.getItem('infoHome'))
    console.log(this.modulos)
  },
  methods: {
    moduloEnable () {
      this.enable = true
    }
  }
}
</script>
