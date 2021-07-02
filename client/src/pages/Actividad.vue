<template>
  <div>
    <div>
      <div v-if="actividad[0].id === 2"></div>

      <div v-else-if="actividad[0].id === 3"></div>

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
          <q-carousel-slide v-for="(hoja, index) in actividad[0].hojas" :key="index" :name="index + 1">
            <div class="row full-height">
              <div class="col-3" style="min-width: 300px;">
                <draggable class="column items-center" style="height: 100%;" v-model="hoja.respuestas" group="people">
                  <div class="col row items-center" v-for="element in hoja.respuestas" :key="element.id">
                    <div class="text-h5 text-white text-bold text-center bg-primary q-pa-md ellipsis" style="width: 300px; border-radius: 10px;">
                      {{element.name}}
                      <q-tooltip class="bg-secondary" :offset="[10, -50]">
                        <div class="text-h6" style="width: 250px">{{element.name}}</div>
                      </q-tooltip>
                    </div>
                  </div>
                </draggable>
              </div>
              <div class="col q-px-lg column items-center no-wrap" style="min-width: 500px;">
                <div class="col row items-center full-width" v-for="element in hoja.preguntas" :key="element.id">
                  <div class="text-h5 text-white text-bold full-width text-center row justify-between items-center bg-primary q-pa-xs">
                    <div class="bg-white" style="height: 75px; width: 300px;">
                      <draggable class="column items-center text-black" style="height: 100%; width: 100%;" v-model="respuestas[element.id]" group="people">{{'Arrastra aqui'}}</draggable>
                    </div>
                    <div class="q-pr-lg">{{element.name}}</div>
                  </div>
                </div>
              </div>
              <div class="row items-end justify-center">
                <q-btn class="q-pa-sm text-h6" color="primary" label="Validar" @click="validarRes()" no-caps style="width: 250px; border-radius: 10px;"/>
              </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
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
      respuestas: []
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
        console.log(this.modulo)
        console.log(this.actividad)
      }
    },
    validarRes () {
      console.log(this.respuestas)
    }
  }
}
</script>
