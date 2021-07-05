<template>
  <div>
    <div>
      <div v-if="actividad[0].id === 3" class="window-height column q-pa-md">
        <div class="column items-center">
          <q-card style="border-radius: 15px; width: 100%; height: 150px;">
            <q-img :src="actividad[0].src" class="full-height">
              <div class="absolute-full row">
                <div class="q-pa-xs">
                  <div class="text-h3 text-bold q-mb-sm">{{modulo[0].name}}</div>
                  <div class="col">
                    <q-img src="esquinas.png" style="width: 50px"/>
                  </div>
                </div>
                <div class="column items-end absolute-bottom q-pa-md">
                  <div class="text-h4 text-bold">{{actividad[0].titulo}}</div>
                </div>
              </div>
            </q-img>
          </q-card>
        </div>
        <q-carousel class="col" v-model="slide" infinite>
          <q-carousel-slide v-for="(hoja, index) in hojas" :key="index" :name="index + 1" class="q-px-none">
            <div class="row full-height">
              <div class="col column justify-center" style="min-width: 300px;">
                <div class="row items-center full-width q-mb-md">
                  <div class="text-subtitle1 text-white full-width text-bold bg-primary q-pa-sm" style="border-radius: 10px;">{{hoja.pregunta}}</div>
                </div>
                <div class="row items-center full-width">
                  <div class="text-subtitle1 text-white full-width text-bold bg-primary q-pa-sm" style="border-radius: 10px;">
                    <q-scroll-area style="height: 150px">
                      {{hoja.descriccion}}
                    </q-scroll-area>
                  </div>
                </div>
              </div>
              <div class="col q-pl-lg column items-center">
                <div class="col row items-center full-width" v-for="element in hoja.respuestas" :key="element.id">
                  <q-radio size="50px" :color="element.id === hoja.correcto &&  submit ? 'positive' : submit ? 'negative' : 'primary'" class="text-subtitle1 text-primary text-bold full-width items-center" v-model="res" :val="element" :label="element.name"/>
                </div>
              </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
        <div class="col2 column items-center justify-center">
          <q-btn class="q-pa-xs text-subtitle1 text-bold" color="primary" label="Validar" @click="validarRes()" no-caps style="width: 250px; border-radius: 10px;"/>
        </div>
      </div>

      <div v-else-if="actividad[0].id === 4" class="window-height column q-pa-md">
        <div class="column items-center">
          <q-card style="border-radius: 15px; width: 100%; height: 150px;">
            <q-img :src="actividad[0].src" class="full-height">
              <div class="absolute-full row">
                <div class="q-pa-xs">
                  <div class="text-h3 text-bold q-mb-sm">{{modulo[0].name}}</div>
                  <div class="col">
                    <q-img src="esquinas.png" style="width: 50px"/>
                  </div>
                </div>
                <div class="column items-end absolute-bottom q-pa-md">
                  <div class="text-h4 text-bold">{{actividad[0].titulo}}</div>
                </div>
              </div>
            </q-img>
          </q-card>
        </div>
        <q-carousel class="col" v-model="slide" infinite>
          <q-carousel-slide v-for="(hoja, index) in hojas" :key="index" :name="index + 1" class="q-px-none">
            <div class="row full-height">
              <div style="min-width: 300px;">
                <draggable class="column items-center" style="height: 100%;" v-model="hoja.preguntas" group="people" @input="selecPre(hoja.preguntas)">
                  <div class="col row items-center full-width" v-for="(element, index) in hoja.preguntas" :key="index" style="max-width: 400px;">
                    <div class="text-subtitle1 text-white full-width text-bold bg-primary q-pa-sm" style="border-radius: 10px;">{{element.name}}</div>
                  </div>
                </draggable>
              </div>
              <div class="col q-pl-lg column items-center">
                <div class="col row items-center full-width" v-for="element in hoja.respuestas" :key="element.id">
                  <div :class="val[element.id - 1] ? 'text-subtitle1 text-white text-bold full-width items-center bg-positive q-pa-sm' : val[element.id - 1] === false ? 'text-subtitle1 text-white text-bold full-width items-center bg-negative q-pa-sm' : 'text-subtitle1 text-white text-bold full-width items-center bg-primary q-pa-sm'" style="border-radius: 10px;">{{element.name}}</div>
                </div>
              </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
        <div class="col2 column items-center justify-center">
          <q-btn class="q-pa-xs text-subtitle1 text-bold" color="primary" label="Validar" @click="validarRes()" no-caps style="width: 250px; border-radius: 10px;"/>
        </div>
      </div>
      <q-dialog v-model="verVal" persistent>
        <q-card v-if="error" style="border-radius: 24px;" class="column q-pa-md">
          <div class="col-2 row items-center justify-center text-primary text-h6 text-bold q-mb-sm">Vuelve a intentarlo</div>
          <div class="column items-center justify-center q-mb-sm">
            <q-img src="tryagain.png" style="width: 150px"/>
          </div>
          <div class="column items-center">
            <div class="text-subtitle1 text-no-wrap">Recuerda que tienes que tener todas las alternativas</div>
            <div class="row">
              <div class="text-subtitle1 text-primary q-pr-xs text-bold">correctas</div>
              <div class="text-subtitle1">{{slide === hojas.length ? 'para poder completar el examen' : 'para pasar a las sigientes preguntas.'}}</div>
            </div>
          </div>
          <q-card-actions align="center">
            <q-btn class="q-pa-xs text-subtitle1 text-bold" color="primary" label="Reintentar" @click="reintentar()" no-caps style="width: 50%; border-radius: 10px;"/>
          </q-card-actions>
        </q-card>
        <q-card v-else style="border-radius: 24px;" class="q-pa-md">
          <div class="text-center text-primary text-h6 text-bold q-mb-sm">Respondiste con exito</div>
          <div class="column items-center justify-center q-mb-sm">
            <q-img src="completo.png" style="width: 300px"/>
          </div>
          <div class="text-center text-subtitle1 text-bold">{{slide === hojas.length ? 'Felicidades haz completado el examen con éxito' : 'Te estamos redirecionando a la siguientes preguntas.'}}</div>
        </q-card>
      </q-dialog>
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
      modulos: [],
      actividad: [],
      hojas: [],
      val: [],
      verVal: false,
      error: false,
      submit: false,
      valError: [],
      res: null,
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
        if (this.actividad[0].id === 3) {
          this.hojas = this.actividad[0].casos
        } else if (this.actividad[0].id === 4) {
          this.hojas = this.actividad[0].hojas
          this.res = this.hojas[this.slide - 1].preguntas
        }
      }
    },
    validarRes () {
      this.submit = true
      if (this.actividad[0].id === 3) {
        this.timer = setInterval(this.continuar, 2500)
      } else if (this.actividad[0].id === 4) {
        for (let i = 0; i < this.hojas[this.slide - 1].correcto.length; i++) {
          if (this.res[i].id === this.hojas[this.slide - 1].correcto[i]) {
            this.val.push(true)
          } else {
            this.val.push(false)
          }
        }
        this.timer = setInterval(this.continuar, 2500)
      }
    },
    continuar () {
      if (this.actividad[0].id === 3) {
        if (this.res != null) {
          if (this.res.id === this.hojas[this.slide - 1].correcto) {
            this.correcto()
            if (this.slide < this.hojas.length) {
              this.timer2 = setInterval(this.siguiente, 3000)
            } else {
              this.timer3 = setInterval(this.finalizar, 3000)
            }
            clearInterval(this.timer)
          } else {
            this.incorrecto()
          }
        } else {
          this.incorrecto()
        }
      } else if (this.actividad[0].id === 4) {
        this.valError = this.val.filter(v => v === false)
        if (!this.valError.length) {
          this.correcto()
          if (this.slide < this.hojas.length) {
            this.timer2 = setInterval(this.siguiente, 3000)
          } else {
            this.timer3 = setInterval(this.finalizar, 3000)
          }
          clearInterval(this.timer)
        } else {
          this.incorrecto()
        }
      }
    },
    selecPre (pre) {
      this.res = pre
    },
    siguiente () {
      this.slide++
      this.submit = false
      this.verVal = false
      this.error = false
      this.res = []
      this.val = []
      clearInterval(this.timer2)
      this.getmodulo()
    },
    reintentar () {
      this.submit = false
      this.verVal = false
      this.error = false
      this.res = null
      this.val = []
      this.getmodulo()
    },
    finalizar () {
      this.modulos = JSON.parse(localStorage.getItem('modulos'))
      if (this.actividad[0].id === 3) {
        this.modulos[this.modulo[0].id - 1].statusCa = true
      } else if (this.actividad[0].id === 4) {
        this.modulos[this.modulo[0].id - 1].statusEx = true
      }
      localStorage.setItem('modulos', JSON.stringify(this.modulos))
      this.$router.go(-1)
      clearInterval(this.timer3)
    },
    incorrecto () {
      this.verVal = true
      this.error = true
      clearInterval(this.timer)
    },
    correcto () {
      this.verVal = true
      this.error = false
    }
  }
}
</script>
