<template>
  <div>
    <div class="column items-center q-pt-md">
      <q-card style="border-radius: 24px; width: 97%; height: 150px;">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" class="full-height">
          <div class="absolute-full row">
            <div>
              <div class="text-h3 text-bold">{{modulo[0].name}}</div>
            </div>
            <div class="column items-end absolute-bottom q-pa-lg">
              <div class="text-h4 text-bold">Título</div>
              <div>incidunt ut labore et dolore magna aliqua.</div>
              <div>Ut enim ad veniam, quis nostrud</div>
            </div>
          </div>
        </q-img>
      </q-card>
    </div>
    <div class="q-px-md">
      <div class="text-subtitle1">Lista de actividades</div>
      <div class="text-secondary">Toca el modulo que te gustaria trabajar</div>
    </div>
    <q-scroll-area horizontal style="height: 300px;">
      <div class="row full-height items-center no-wrap q-px-md q-gutter-md">
        <q-card style="border-radius: 10px; width: 225px; height: 90%;" clickable v-for="(actividad, index) in modulo[0].actividades" :key="index">
          <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" class="full-height">
            <div class="absolute-full">
              <div class="absolute-bottom">
                <div class="text-h5 text-bold text-center q-py-md">{{actividad.name}}</div>
              </div>
            </div>
          </q-img>
        </q-card>
      </div>
    </q-scroll-area>
    <q-dialog v-model="vds" persistent>
      <q-card style="border-radius: 24px; width: 85%;">
        <q-carousel class="q-mx-xl q-mt-lg" v-model="slide" style="border-radius: 24px; height: auto;" infinite>
          <q-carousel-slide v-for="(video, index) in modulo[0].videos.sources" :key="index" :name="index" class="q-pa-none">
            <div>
              <my-video :sources="[video]" :options="modulo[0].videos.options" @input="sigiente()"/>
            </div>
          </q-carousel-slide>
        </q-carousel>

        <q-card-actions align="center">
          <q-btn class="q-pa-sm" color="primary" label="Cerrar" v-close-popup no-caps style="width: 50%; border-radius: 10px;"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import myVideo from 'vue-video'
export default {
  components: {
    myVideo
  },
  data () {
    return {
      id: '',
      modulo: [],
      vds: true,
      slide: 0
    }
  },
  mounted () {
    if (this.$route.params.id) {
      this.id = this.$route.params.id
      this.modulo = JSON.parse(localStorage.getItem('modulos')).filter(v => v.id.toString() === this.id)
      console.log(this.modulo)
    }
  },
  methods: {
    sigiente () {
      this.slide++
    }
  }
}
</script>
