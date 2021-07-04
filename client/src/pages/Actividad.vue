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
                  <div class="col q-pl-md">
                    <q-img src="latam-color.png" style="width: 225px"/>
                  </div>
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
                  <div class="col q-pl-md">
                    <q-img src="latam-color.png" style="width: 225px"/>
                  </div>
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
                  <div class="col row items-center full-width" v-for="(element, index) in hoja.preguntas" :key="index" style="max-width: 400px;">
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
          <q-card v-if="error" style="border-radius: 24px;" class="column">
            <div class="col-2 row items-center justify-center text-primary text-h4 text-bold q-pa-lg">Vuelve a intentarlo</div>
            <div class="column items-center justify-center q-pt-lg">
              <q-img src="tryagain.png" style="width: 200px"/>
            </div>
            <div class="column items-center q-pa-lg">
              <div class="text-h6 text-no-wrap">Recuerda que tienes que tener todas las alternativas</div>
              <div class="row">
                <div class="text-h6 text-primary q-pr-xs text-bold">correctas</div>
                <div class="text-h6">{{slide === actividad[0].hojas.length ? 'para poder completar el examen' : 'para pasar a las sigientes preguntas.'}}</div>
              </div>
            </div>
            <q-card-actions class="col2 q-pb-lg" align="center">
              <q-btn class="q-pa-sm text-h6" color="primary" label="Reintentar" @click="reintentar()" no-caps style="width: 50%; border-radius: 10px;"/>
            </q-card-actions>
          </q-card>
          <q-card v-else style="border-radius: 24px;" clickable>
            <div class="text-center text-primary text-h4 text-bold q-pa-lg">Respondiste con exito</div>
            <div class="column items-center justify-center q-pt-lg">
              <q-img src="completo.png" style="width: 400px"/>
            </div>
            <div class="text-center text-h6 q-px-lg q-pt-lg q-pb-xl">{{slide === actividad[0].hojas.length ? 'Felicidades haz completado el examen con éxito' : 'Te estamos redirecionando a la siguiente pregunta.'}}</div>
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
        if (this.actividad[0].id === 4) {
          this.hojas = this.actividad[0].hojas
          this.res = this.hojas[this.slide - 1].preguntas
        }
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
      this.timer = setInterval(this.continuar, 2500)
    },
    continuar () {
      this.valError = this.val.filter(v => v === false)
      if (this.slide < this.actividad[0].hojas.length && !this.valError.length) {
        this.verVal = true
        this.error = false
        this.timer2 = setInterval(this.siguiente, 3000)
        clearInterval(this.timer)
      } else if (this.slide === this.actividad[0].hojas.length && !this.valError.length) {
        this.verVal = true
        this.error = false
        this.timer3 = setInterval(this.finalizar, 3000)
        clearInterval(this.timer)
      } else if (this.slide < this.actividad[0].hojas.length) {
        this.verVal = true
        this.error = true
        clearInterval(this.timer)
      } else if (this.slide === this.actividad[0].hojas.length) {
        this.verVal = true
        this.error = true
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
      this.getmodulo()
    },
    reintentar () {
      this.verVal = false
      this.error = false
      this.res = []
      this.val = []
      this.getmodulo()
    },
    finalizar () {
      this.$router.go(-1)
      clearInterval(this.timer3)
    }
  }
}
</script>
