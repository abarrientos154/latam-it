<template>
  <div class="window-height window-width column bg-primary">
    <div class="absolute-center full-width text-center text-bold text-white text-h1">Latam It...</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {},
      timer: '',
      modulos: [
        {
          id: 1,
          name: 'Módulo 01',
          titulo: '',
          descriccion: '',
          videos: {
            sources: [
              {
                src: '',
                type: 'video/mp4'
              },
              {
                src: '',
                type: 'video/mp4'
              }
            ],
            options: {
              autoplay: true,
              volume: 0.1
            }
          },
          actividades: [
            {
              id: 1,
              name: 'Ver videos'
            },
            {
              id: 2,
              name: 'Glosario'
            },
            {
              id: 3,
              name: 'Material de apoyo'
            },
            {
              id: 4,
              name: 'Realizar examen',
              preguntas: [
                {
                  name: 'Primera',
                  id: 1
                },
                {
                  name: 'Segunda',
                  id: 2
                },
                {
                  name: 'Tercera',
                  id: 3
                }
              ],
              respuestas: [
                {
                  name: 'R_Primera',
                  id: 1
                },
                {
                  name: 'R_Segunda',
                  id: 2
                },
                {
                  name: 'R_Tercera',
                  id: 3
                }
              ],
              correcto: [2, 3, 1]
            },
            {
              id: 5,
              name: 'Ver resumen'
            }
          ]
        }
      ]
    }
  },
  mounted () {
    localStorage.setItem('modulos', JSON.stringify(this.modulos))
  },
  methods: {
    ejecutar () {
      this.$router.push('/home')
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  created () {
    this.timer = setInterval(this.ejecutar, 4000)
  },
  cancelAutoUpdate () { clearInterval(this.timer) }
}
</script>
