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
                src: 'video1.mp4',
                type: 'video/mp4'
              },
              {
                src: '../../public/yo.mp4',
                type: 'video/mp4'
              }
            ],
            options: {
              autoplay: true,
              volume: 0.6
            }
          },
          actividades: [
            {
              id: 1,
              name: 'Actividad 1',
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
