<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  <draggable v-model="myArray">
    <transition-group>
        <div v-for="element in myArray" :key="element.id">
            {{element.name}}
        </div>
    </transition-group>
  </draggable>
  <draggable v-model="myArray2">
    <transition-group>
        <div v-for="element in myArray2" :key="element.id">
            {{element.name}}
        </div>
    </transition-group>
  </draggable>
  </q-page>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'PageIndex',
  components: {
    draggable
  },
  data () {
    return {
      myArray: [
        {
          id: 1,
          name: 'nombre1'
        },
        {
          id: 2,
          name: 'nombre2'
        },
        {
          id: 3,
          name: 'nombre3'
        },
        {
          id: 4,
          name: 'nombre4'
        },
        {
          id: 5,
          name: 'nombre5'
        }
      ],
      myArray2: [
        {
          id: 1,
          name: 'fruta'
        },
        {
          id: 2,
          name: 'pera'
        },
        {
          id: 3,
          name: 'arroz'
        },
        {
          id: 4,
          name: 'otro'
        },
        {
          id: 5,
          name: 'no'
        }
      ],
      data: {
        modulo1: {
          actividad1: {
            preguntas: [
              {
                name: 'primera',
                id: 1
              },
              {
                name: 'segunda',
                id: 2
              },
              {
                name: 'tercera',
                id: 3
              }
            ],
            respuestas: [
              {
                name: 'rprimera',
                id: 1
              },
              {
                name: 'rsegunda',
                id: 2
              },
              {
                name: 'rtercera',
                id: 3
              }
            ],
            correcto: [2, 3, 1]
          }
        }
      }
    }
  }
}
</script>
