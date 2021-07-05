<template>
  <div>
    <q-header>
      <div class="full-width row items-center justify-between bg-white q-px-md" style="height: 85px">
        <div class="col q-pt-sm">
          <q-img src="latam-color.png" style="width: 150px"/>
        </div>
        <q-fab color="primary" icon="menu" direction="left">
        <q-fab-action label="Salir" color="primary" @click="logout()" icon="logout" />
        <q-fab-action label="Silenciar" color="primary" @click="mute()" icon="volume_off" />
      </q-fab>
        <!-- <q-btn size="20px" outline dense round color="black" icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen"/> -->
      </div>
    </q-header>

   <!--  <q-drawer side="right" v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-h6 text-grey-8">Lista</q-item-label>
      </q-list>
    </q-drawer>
 -->
    <q-scroll-area horizontal class="window-height absolute-top">
      <div class="row full-height no-wrap q-px-md q-gutter-md" style="padding-top: 110px;">
        <q-card style="border-radius: 20px; width: 450px; height: 85%;" clickable v-for="(modulo, index) in modulos" :key="index" @click="modulo.id > 1 ? modulos[index - 1].statusCa && modulos[index - 1].statusEx ? accion(modulo.id) : moduloEnable() : accion(modulo.id)">
          <q-img :src="modulo.src" class="full-height">
            <div class="absolute-full row">
              <div class="full-height row items-center">
                <div class="text-h2 text-bold" style="transform: rotate(-90deg); margin-left: -125px">{{modulo.name.toUpperCase()}}</div>
              </div>
              <div class="row justify-end absolute-bottom q-pa-md">
                <div class="text-h4 text-bold text-right">{{modulo.title}}</div>
              </div>
            </div>
          </q-img>
        </q-card>
      </div>
    </q-scroll-area>
    <div class="absolute-bottom-right row q-mr-lg q-mb-xs">
      <div class="text-subtitle1 text-secondary q-mr-xs">Power by</div>
      <div class="text-subtitle1 text-primary">Latam IT Academícela</div>
    </div>
    <q-dialog full-width v-model="info">
      <q-carousel v-model="slide" style="height: auto; border-radius: 24px;" infinite>
       <!--  <q-carousel-slide :name="1" class="q-pa-sm">
          <div class="text-center text-primary text-h5 text-bold q-pa-xs">Bienvenido</div>
          <div class="text-subtitle2 text-center">Estimado alumno o alumna, te damos la bienvenida al curso “Manejo de Herramientas para un Liderazgo Efectivo”.</div>
          <div class="text-subtitle2 text-center">Cada uno de los módulos que verás, está compuesto por: Videos explicativos, textos de Resumen y Glosario de términos, Actividades Interactivas y Casos de Estudio.</div>
          <div class="text-subtitle2 text-center">Al finalizar cada Módulo, podrás ver una evaluación y una actividad formativa con preguntas que tendrás que resolver para saber cuánto has avanzado en el curso. Al finalizar este curso adquirirás Habilidades de: Liderazgo a través de herramientas y Técnicas de Planificación, Organización y Gestión del trabajo en Equipo, que te ayudarán a maximizar la eficiencia del trabajo en su empresa.</div>
          <div class="text-center text-primary text-subtitle1 text-bold">Éxito!</div>
          <q-card-actions class="col2 full-width" align="center">
            <q-btn class="q-pa-xs text-subtitle1 text-bold" color="primary" label="Siguiente" @click="slide++" no-caps style="width: 50%; border-radius: 10px;"/>
          </q-card-actions>
        </q-carousel-slide> -->
        <q-carousel-slide :name="2">
          <div class="text-center text-primary text-h5 text-bold q-pa-xs">¡Recuerda!</div>
          <div class="column items-center justify-center">
            <q-img src="Mano.png" style="width: 150px"/>
          </div>
          <div class="row justify-center">
            <div class="text-subtitle1 text-primary q-pr-xs text-bold">Desliza</div>
            <div class="text-subtitle1">hacia tu izquierda</div>
          </div>
          <div class="text-subtitle1 text-center">para ver todos los modulos</div>
        </q-carousel-slide>
      </q-carousel>
    </q-dialog>
    <q-dialog v-model="enable" persistent>
      <q-card style="border-radius: 24px;" class="column no-wrap q-pa-sm">
        <div class="row items-center justify-center text-primary text-h5 text-bold">Tienes que tener en cuenta</div>
        <div class="column items-center justify-center q-pt-md">
          <q-img src="precaucio.png" style="width: 150px"/>
        </div>
        <div class="column items-center q-pa-sm">
          <div class="text-subtitle1 text-no-wrap text-bold">Para poder ver modulos mas abanzados primero debes</div>
          <div class="text-subtitle1 text-primary text-bold">completar el modulo anterior</div>
        </div>
        <q-card-actions align="center">
          <q-btn class="q-pa-xs text-subtitle1 text-bold" color="primary" label="Cerrar" v-close-popup no-caps style="width: 50%; border-radius: 10px;"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 2,
      info: null,
      modulos: [],
      leftDrawerOpen: false,
      enable: false,
      infoo: null
    }
  },
  mounted () {
    this.infoo = new Audio(require('../../public/musicafondo.mp3'))
    // a.loop = true
    console.log('pre')
    this.infoo.play()
    console.log(this.modulos)
    this.modulos = JSON.parse(localStorage.getItem('modulos'))
    this.info = JSON.parse(localStorage.getItem('infoHome'))
    console.log(this.modulos)
  },
  methods: {
    accion (id) {
      this.infoo.pause()
      this.$router.push('/modulo/' + id)
    },
    logout () {
      navigator.app.exitApp()
    },
    mute () {
      this.infoo.pause()
    },
    moduloEnable () {
      this.enable = true
    }
  }
}
</script>
