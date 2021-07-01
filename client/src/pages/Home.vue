<template>
  <div>
    <q-header>
      <div class="full-width row items-center justify-between bg-white q-px-md" style="height: 60px">
        <div class="text-h6 text-black">Latam it</div>
        <q-btn  outline dense round color="black" icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen"/>
      </div>
    </q-header>

    <q-drawer side="right" v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-grey-8">Essential Links</q-item-label>
      </q-list>
    </q-drawer>

    <q-scroll-area horizontal class="window-height absolute-top q-pt-xl">
      <div class="row full-height no-wrap q-pt-xl q-px-md q-gutter-md">
        <q-card style="border-radius: 24px; width: 500px; height: 90%;" clickable v-for="(modulo, index) in modulos" :key="index" @click="$router.push('/video/' + modulo.id)">
          <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" class="full-height">
            <div class="absolute-full row">
              <div class="full-height row items-center">
                <div class="text-h2 text-bold" style="transform: rotate(-90deg); margin-left: -130px">{{modulo.name.toUpperCase()}}</div>
              </div>
              <div class="column items-end absolute-bottom q-pa-lg">
                <div class="text-h3 text-bold">Título</div>
                <div class="text-caption">incidunt ut labore et dolore magna aliqua.</div>
                <div class="text-caption">Ut enim ad veniam, quis nostrud</div>
              </div>
            </div>
          </q-img>
        </q-card>
      </div>
    </q-scroll-area>
    <div class="absolute-bottom-right row q-mr-lg q-mb-xs">
      <div class="text-secondary q-mr-xs">Power by</div>
      <div class="text-primary">Latam IT Academícela</div>
    </div>
    <q-dialog v-model="info">
      <q-card style="border-radius: 24px; width: 85%; height: 85%;" clickable>
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" class="full-height"/>
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
      leftDrawerOpen: false
    }
  },
  mounted () {
    this.modulos = JSON.parse(localStorage.getItem('modulos'))
    console.log(this.modulos)
  },
  methods: {
  }
}
</script>
