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
      <q-card style="border-radius: 24px;">
        <div class="text-center text-primary text-h4 text-bold q-pa-lg">¡Recuerda!</div>
        <div class="column items-center justify-center">
          <q-img src="Mano.png" style="width: 400px"/>
        </div>
        <div class="row justify-center">
          <div class="text-h6 text-primary q-pr-xs text-bold">Desliza</div>
          <div class="text-h6">hacia tu izquierda</div>
        </div>
        <div class="text-h6 text-center q-pb-lg">para ver todos los modulos</div>
      </q-card>
    </q-dialog>
    <q-dialog v-model="enable" persistent>
      <q-card style="border-radius: 24px; width: 85%; height: 85%;" clickable>
        <q-img src="Mano.png" class="full-height">
          <div class="absolute-full row items-center">
            <div class="text-h4 text-primary text-center">Para acceder a este modulo nesecita haber completado el anterior</div>
          </div>
        </q-img>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: true,
      modulos: [],
      leftDrawerOpen: false,
      enable: false
    }
  },
  mounted () {
    this.modulos = JSON.parse(localStorage.getItem('modulos'))
    console.log(this.modulos)
  },
  methods: {
    moduloEnable () {
      this.enable = true
      this.info = true
    }
  }
}
</script>
