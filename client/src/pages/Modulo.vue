<template>
  <div>
    <q-header class="bg-white">
      <div class="column items-center q-pt-md q-px-md">
        <q-card style="border-radius: 24px; width: 100%; height: 200px;">
          <q-img :src="modulo[0].src" class="full-height">
            <div class="absolute-full row">
              <div>
                <div class="text-h2 text-bold q-pa-md">{{modulo[0].name}}</div>
                <div class="col q-pl-md">
                  <q-img src="latam-color.png" style="width: 225px"/>
                </div>
              </div>
              <div class="column items-end absolute-bottom q-pa-lg">
                <div class="text-h3 text-bold">Título</div>
                <div class="text-h5">incidunt ut labore et dolore magna aliqua.</div>
                <div class="text-h5">Ut enim ad veniam, quis nostrud</div>
              </div>
            </div>
          </q-img>
        </q-card>
      </div>
      <div class="q-px-md">
        <div class="text-h5 text-black">Lista de actividades</div>
        <div class="text-h5 text-secondary">Toca el modulo que te gustaria trabajar</div>
      </div>
    </q-header>
    <q-scroll-area horizontal class="window-height absolute-top">
      <div class="row full-height items-center no-wrap q-px-md q-gutter-md" style="padding-top: 275px;">
        <q-card style="border-radius: 10px; width: 350px; height: 90%;" clickable v-for="(actividad, index) in modulo[0].actividades" @click="ejecutarAccion(actividad, modulo[0].id)" :key="index">
          <q-img :src="actividad.src" class="full-height">
            <div class="absolute-full">
              <div class="absolute-bottom">
                <div class="text-h4 text-bold text-center q-py-md">{{actividad.name}}</div>
              </div>
            </div>
          </q-img>
        </q-card>
      </div>
    </q-scroll-area>
    <q-dialog v-model="vds" persistent>
      <q-card style="border-radius: 24px;">
        <q-carousel class="q-mx-xl q-mt-lg" v-model="slide" style="border-radius: 24px; height: auto;" infinite>
          <q-carousel-slide v-for="(video, index) in modulo[0].videos.sources" :key="index" :name="index + 1" class="q-pa-none">
            <div>
              <my-video :sources="video" :options="modulo[0].videos.options"/>
            </div>
          </q-carousel-slide>
        </q-carousel>
        <div class="column items-center q-pt-md">
          <q-rating v-model="slide" size="20px" color="primary" icon="radio_button_unchecked" icon-selected="circle" :max="modulo[0].videos.sources.length" readonly/>
        </div>
        <q-card-actions class="q-pb-lg" align="center">
          <q-btn v-if="slide < modulo[0].videos.sources.length" class="q-pa-sm text-h6" color="primary" label="Siguiente" @click="sigiente()" no-caps style="width: 50%; border-radius: 10px;"/>
          <q-btn v-else class="q-pa-sm text-h6" color="primary" label="Cerrar" v-close-popup no-caps style="width: 50%; border-radius: 10px;"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="verPDF" persistent>
      <q-card style="border-radius: 24px;">
        <pdf
          v-for="i in pagsPDF"
          :key="i"
          :src="pdfName"
          :page="i"
          style="display: inline-block; width: 100%"
        ></pdf>
        <q-card-actions class="q-pb-lg" align="center">
          <q-btn class="q-pa-sm text-h6" color="primary" label="Cerrar" v-close-popup no-caps style="width: 50%; border-radius: 10px;"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import myVideo from 'vue-video'
import pdf from 'vue-pdf'
export default {
  components: {
    myVideo,
    pdf
  },
  data () {
    return {
      id: '',
      modulo: [],
      vds: true,
      verPDF: false,
      pagsPDF: 0,
      pdfName: undefined,
      slide: 1
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
    ejecutarAccion (op, moduloid) {
      if (op.id === 1) {
        this.verVideos()
      }
      if (op.id === 2) {
        this.seePDF(op.pdf)
      }
      if (op.id === 4) {
        this.$router.push('/actividad/' + moduloid + '/' + op.id)
      }
      if (op.id === 5) {
        this.seePDF(op.pdf)
      }
      if (op.id === 6) {
        this.$router.push('/home')
      }
    },
    seePDF (url) {
      const loadingTask = pdf.createLoadingTask(url)
      this.pdfName = loadingTask
      this.pdfName.promise.then(pdf => {
        // console.log(pdf)
        this.pagsPDF = pdf.numPages
        this.verPDF = true
      })
    },
    sigiente () {
      this.slide++
    },
    verVideos () {
      this.slide = 1
      this.vds = !this.vds
    }
  }
}
</script>
