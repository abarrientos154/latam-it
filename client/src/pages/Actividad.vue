<template>
  <div>
    <div>
      <div v-if="actividad[0].id === 2"></div>

      <div v-else-if="actividad[0].id === 3" class="window-height column">
        <div class="column items-center q-pt-md q-px-md">
          <q-card style="border-radius: 24px; width: 100%; height: 200px;">
            <q-img :src="actividad[0].src" class="full-height">
              <div class="absolute-full row">
                <div>
                  <div class="text-h2 text-bold q-pa-md">{{modulo[0].name}}</div>
                </div>
                <div class="column items-end absolute-bottom q-pa-lg">
                  <div class="text-h3 text-bold">{{actividad[0].titulo}}</div>
                  <div class="text-h5 text-right" style="width: 700px;">{{actividad[0].hojas[slide - 1].descriccion}}</div>
                </div>
              </div>
            </q-img>
          </q-card>
        </div>
      </div>

      <div v-else-if="actividad[0].id === 4" class="window-height column">
        <div class="column items-center q-pt-md q-px-md">
          <q-card style="border-radius: 24px; width: 100%; height: 200px;">
            <q-img :src="actividad[0].src" class="full-height">
              <div class="absolute-full row">
                <div>
                  <div class="text-h2 text-bold q-pa-md">{{modulo[0].name}}</div>
                </div>
                <div class="column items-end absolute-bottom q-pa-lg">
                  <div class="text-h3 text-bold">{{actividad[0].titulo}}</div>
                  <div class="text-h5 text-right" style="width: 700px;">{{actividad[0].hojas[slide - 1].descriccion}}</div>
                </div>
              </div>
            </q-img>
          </q-card>
        </div>
        <q-carousel class="col" v-model="slide" infinite>
          <q-carousel-slide v-for="(hoja, index) in hojas" :key="index" :name="index + 1">
            <div class="row full-height">
              <div style="min-width: 300px;">
                <draggable class="column items-center" style="height: 100%;" v-model="hoja.preguntas" group="people" @input="selecPre(hoja.preguntas)">
                  <div class="col row items-center full-width" v-for="(element, index) in hoja.preguntas" :key="index">
                    <div class="text-h5 text-white full-width text-bold bg-primary q-pa-md" style="border-radius: 10px;">{{element.name}}</div>
                  </div>
                </draggable>
              </div>
              <div class="col q-pl-lg column items-center">
                <div class="col row items-center full-width" v-for="element in hoja.respuestas" :key="element.id">
                  <div :class="val[element.id - 1] ? 'text-h5 text-white text-bold full-width items-center bg-positive q-pa-md' : val[element.id - 1] === false ? 'text-h5 text-white text-bold full-width items-center bg-negative q-pa-md' : 'text-h5 text-white text-bold full-width items-center bg-primary q-pa-md'" style="border-radius: 10px;">{{element.name}}</div>
                </div>
              </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
        <div class="col2 q-pb-md q-px-md column items-center justify-center">
          <q-btn class="q-pa-sm text-h5 text-bold" color="primary" label="Validar" @click="validarRes()" no-caps style="width: 250px; border-radius: 10px;"/>
        </div>
        <q-dialog v-model="verVal" persistent>
          <q-card v-if="error" style="border-radius: 24px; width: 85%; height: 85%;" class="column">
            <q-img src="Mano.png" class="col"/>
            <q-card-actions class="col2 q-pb-lg" align="center">
              <q-btn class="q-pa-sm text-h6" color="primary" label="Reintentar" @click="$router.go(0)" no-caps style="width: 50%; border-radius: 10px;"/>
            </q-card-actions>
          </q-card>
          <q-card v-else style="border-radius: 24px; width: 85%; height: 85%;" clickable>
            <q-img src="Mano.png" class="full-height"/>
          </q-card>
        </q-dialog>
      </div>

      <div v-else-if="actividad[0].id === 5"></div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable
  },
  data () {
    return {
      modulo_id: '',
      actividad_id: '',
      slide: 1,
      modulo: [],
      actividad: [],
      hojas: [],
      val: [],
      verVal: false,
      error: false,
      valError: [],
      res: [],
      timer: '',
      timer2: '',
      timer3: ''
    }
  },
  mounted () {
    this.getmodulo()
  },
  methods: {
    getmodulo () {
      if (this.$route.params.modulo_id && this.$route.params.id) {
        this.modulo_id = this.$route.params.modulo_id
        this.actividad_id = this.$route.params.id
        this.modulo = JSON.parse(localStorage.getItem('modulos')).filter(v => v.id.toString() === this.modulo_id)
        this.actividad = this.modulo[0].actividades.filter(v => v.id.toString() === this.actividad_id)
        this.hojas = this.actividad[0].hojas
        console.log(this.modulo)
        console.log(this.actividad)
      }
    },
    validarRes () {
      for (var i = 0; i < this.hojas[this.slide - 1].correcto.length; i++) {
        if (this.res[i].id === this.hojas[this.slide - 1].correcto[i]) {
          this.val.push(true)
        } else {
          this.val.push(false)
        }
      }
      console.log(this.val)
      this.timer = setInterval(this.continuar, 3000)
    },
    continuar () {
      this.valError = this.val.filter(v => v === false)
      if (this.slide < this.actividad[0].hojas.length && !this.valError.length) {
        this.verVal = true
        this.error = false
        this.timer2 = setInterval(this.siguiente, 4000)
        clearInterval(this.timer)
      } else if (this.slide < this.actividad[0].hojas.length) {
        this.verVal = true
        this.error = true
        clearInterval(this.timer)
      } else if (this.slide === this.actividad[0].hojas.length) {
        this.verVal = true
        this.error = false
        this.timer3 = setInterval(this.finalizar, 4000)
        clearInterval(this.timer)
      }
    },
    selecPre (pre) {
      this.res = pre
    },
    siguiente () {
      this.slide++
      this.verVal = false
      this.error = false
      this.res = []
      this.val = []
      clearInterval(this.timer2)
    },
    finalizar () {
      this.$router.go(-1)
      clearInterval(this.timer3)
    }
  }
}
</script>
