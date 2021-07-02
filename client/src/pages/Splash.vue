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
          src: 'modulo1.png',
          titulo: '',
          descriccion: '',
          videos: {
            sources: [
              [{
                src: 'video1.mp4',
                type: 'video/mp4'
              }],
              [{
                src: 'video2.mp4',
                type: 'video/mp4'
              }]
            ],
            options: {
              autoplay: true,
              volume: 0.6
            }
          },
          actividades: [
            {
              id: 1,
              name: 'Ver videos',
              src: 'ver video.png'
            },
            {
              id: 2,
              name: 'Glosario',
              src: 'glosario.png'
            },
            {
              id: 3,
              name: 'Material de apoyo',
              src: 'material del apoyo.png'
            },
            {
              id: 4,
              name: 'Realizar examen',
              src: 'realizar examen.png',
              titulo: 'Liderazgo y Gestión',
              hojas: [
                {
                  id: 1,
                  descriccion: 'Asocia los componentes del coeficiente emocional de Peter Salovey y John Mayer con su respectiva definición.',
                  preguntas: [
                    {
                      name: 'Autorregulación o control',
                      id: 1
                    },
                    {
                      name: 'Empatía',
                      id: 2
                    },
                    {
                      name: 'Motivación y persistencia',
                      id: 3
                    }
                  ],
                  respuestas: [
                    {
                      name: 'Es la capacidad de cambiar o frenar emociones.',
                      id: 1
                    },
                    {
                      name: 'Es la capacidad de conocer a otras personas, e intuir la condición emocional de los demás.',
                      id: 2
                    },
                    {
                      name: 'Es la capacidad de estimularse ante situaciones adversas.',
                      id: 3
                    }
                  ],
                  correcto: [1, 2, 3]
                },
                {
                  id: 2,
                  descriccion: 'Asocia los siguientes conceptos con sus respectiva definición.',
                  preguntas: [
                    {
                      name: 'Gestión',
                      id: 1
                    },
                    {
                      name: 'Liderazgo',
                      id: 2
                    },
                    {
                      name: 'Supervisión',
                      id: 3
                    }
                  ],
                  respuestas: [
                    {
                      name: 'Transformar el talento en desempeño, encontrando las fortalezas singulares de cada persona.',
                      id: 1
                    },
                    {
                      name: 'Llevar a otros a un futuro mejor, descubriendo y aprovechando elementos en pos de un futuro común.',
                      id: 2
                    },
                    {
                      name: 'Educar al equipo de trabajo bajo un proceso democrático, participativo y cooperativo.',
                      id: 3
                    }
                  ],
                  correcto: [1, 2, 3]
                }
              ]
            },
            {
              id: 5,
              name: 'Ver resumen',
              src: 'resumen.png'
            }
          ]
        },
        {
          id: 2,
          name: 'Módulo 02',
          src: 'modulo2.png',
          titulo: '',
          descriccion: '',
          videos: {
            sources: [
              [{
                src: '.mp4',
                type: 'video/mp4'
              }],
              [{
                src: '.mp4',
                type: 'video/mp4'
              }]
            ],
            options: {
              autoplay: true,
              volume: 0.1
            }
          },
          actividades: [
            {
              id: 1,
              name: 'Ver videos',
              src: 'ver video.png'
            },
            {
              id: 2,
              name: 'Glosario',
              src: 'glosario.png'
            },
            {
              id: 3,
              name: 'Material de apoyo',
              src: 'material del apoyo.png'
            },
            {
              id: 4,
              name: 'Realizar examen',
              src: 'realizar examen.png',
              titulo: 'Modelos de Liderazgo',
              hojas: [
                {
                  id: 1,
                  descriccion: 'Asocia las modalidades de liderazgo con su respectiva definición.',
                  preguntas: [
                    {
                      name: 'Liderazgo situacional',
                      id: 1
                    },
                    {
                      name: 'Liderazgo transaccional',
                      id: 2
                    },
                    {
                      name: 'Liderazgo adaptativo',
                      id: 3
                    }
                  ],
                  respuestas: [
                    {
                      name: 'Se orienta hacia las tareas o las relaciones con los colaboradores.',
                      id: 1
                    },
                    {
                      name: 'Corresponde al intercambio entre el líder o sus seguidores.',
                      id: 2
                    },
                    {
                      name: 'La movilización de un grupo de manera activa, creando e impactando el ambiente.',
                      id: 3
                    }
                  ],
                  correcto: [1, 2, 3]
                },
                {
                  id: 2,
                  descriccion: 'Asocia las dimensiones de liderazgo de rango completo de Bass y Avolio con sus definiciones correspondientes.',
                  preguntas: [
                    {
                      name: 'Liderazgo adaptativo',
                      id: 1
                    },
                    {
                      name: 'Consideración individual',
                      id: 2
                    },
                    {
                      name: 'Administración activa por excepción',
                      id: 3
                    }
                  ],
                  respuestas: [
                    {
                      name: 'EI líder moviliza a un grupo de manera activa, impactando el ambiente y creando, no solo ajustándose al contexto.',
                      id: 1
                    },
                    {
                      name: 'EI líder toma en cuenta el cuidado, la empatía y el proveer retos y oportunidades para los otros.',
                      id: 2
                    },
                    {
                      name: 'EI líder pone atención a algunos problemas y tiene sistemas de monitoreo con alertas.',
                      id: 3
                    }
                  ],
                  correcto: [1, 2, 3]
                }
              ]
            },
            {
              id: 5,
              name: 'Ver resumen',
              src: 'resumen.png'
            }
          ]
        },
        {
          id: 3,
          name: 'Módulo 03',
          src: 'modulo2.png',
          titulo: '',
          descriccion: '',
          videos: {
            sources: [
              [{
                src: '.mp4',
                type: 'video/mp4'
              }],
              [{
                src: '.mp4',
                type: 'video/mp4'
              }]
            ],
            options: {
              autoplay: true,
              volume: 0.1
            }
          },
          actividades: [
            {
              id: 1,
              name: 'Ver videos',
              src: 'ver video.png'
            },
            {
              id: 2,
              name: 'Glosario',
              src: 'glosario.png'
            },
            {
              id: 3,
              name: 'Material de apoyo',
              src: 'material del apoyo.png'
            },
            {
              id: 4,
              name: 'Realizar examen',
              src: 'realizar examen.png',
              titulo: 'Planificar, Delegar y Coaching',
              hojas: [
                {
                  id: 1,
                  descriccion: 'Asocia y une los pasos en los que aprende un colaborador o colaboradora con su comportamiento respectivo.',
                  preguntas: [
                    {
                      name: 'Determinación de objetivos ',
                      id: 1
                    },
                    {
                      name: 'Toma de conciencia',
                      id: 2
                    },
                    {
                      name: 'Observar',
                      id: 3
                    }
                  ],
                  respuestas: [
                    {
                      name: 'Debe con metas claramente definidas por el coach o la coach.',
                      id: 1
                    },
                    {
                      name: 'Reflexionará sobre las que toma y las consecuencias que crean, apoyado por el coach o la coach.',
                      id: 2
                    },
                    {
                      name: 'Por medio de nuevos puntos de vista, observación de paradigmas, creencias y conductas, construirá los resultados que busca.',
                      id: 3
                    }
                  ],
                  correcto: [1, 2, 3]
                },
                {
                  id: 2,
                  descriccion: 'Asocia cada fase en la forma de manejar un conflicto con su procedimiento.',
                  preguntas: [
                    {
                      name: 'Admitir',
                      id: 1
                    },
                    {
                      name: 'Investigar',
                      id: 2
                    },
                    {
                      name: 'Reforzar',
                      id: 3
                    }
                  ],
                  respuestas: [
                    {
                      name: 'Se entiende el comportamiento del colaborador o y se está dispuesto o dispuesta a lidiar con él.',
                      id: 1
                    },
                    {
                      name: 'Se da la oportunidad al colaborador para que se exprese libremente.',
                      id: 2
                    },
                    {
                      name: 'Se da la oportunidad al colaborador para que se exprese libremente.',
                      id: 3
                    }
                  ],
                  correcto: [1, 2, 3]
                }
              ]
            },
            {
              id: 5,
              name: 'Ver resumen',
              src: 'resumen.png'
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
