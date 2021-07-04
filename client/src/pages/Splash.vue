<template>
  <div class="full-window column">
    <div class="absolute-center full-width">
      <q-img src="latam-color.png" class="full-height">
      </q-img>
    </div>
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
              src: 'glosario.png',
              pdf: 'Glosario1.pdf'
            },
            {
              id: 3,
              name: 'Casos de estudio',
              src: 'material del apoyo.png',
              titulo: 'Liderazgo y Gestión',
              descriccion: 'A continuación, te presentamos algunos casos, los cuales te ayudaran a fijar el conocimiento. Lee con atención y responde las preguntas que te presentamos.',
              casos: [
                {
                  id: 1,
                  descriccion: '"Lo Arreglamos Todo" es una pequeña empresa de reparación electrónica, Andrés es dueño y Jefe, él es experto en todos lo relacionado a reparaciones de electrodomésticos y artículos del hogar... entre sus tareas administrativas se toma el tiempo para ayudar al encargado de microondas y acompaña los controles de calidad junto a los trabajadores y las trabajadoras de esta área. Sin embargo, quiere dejar de ser el Jefe para convertirse en un Líder y decide influir más de manera positiva en su equipo de trabajo.',
                  pregunta: '¿Cuál o cuáles deberían ser las acciones que tiene que llevar a cabo para convertirse en un Lider?',
                  respuestas: [
                    {
                      name: 'Inscribirse en un curso sobre conocimientos de electrónica y microchips e inscribir con él a todo su equipo de trabajo.',
                      id: 1
                    },
                    {
                      name: 'Hacer una prueba de conocimientos y despedir a aquellos que no alcancen los 70 puntos en esta.',
                      id: 2
                    },
                    {
                      name: 'Organizar reuniones periódicas para motivar a sus trabajadores e informarles sobre incentivos laborales.',
                      id: 3
                    }
                  ],
                  correcto: 3
                },
                {
                  id: 2,
                  descriccion: 'Andrés también sabe que para ser un buen líder debe desarrollar su inteligencia emocional para su propio provecho y el de su equipo de trabajo, con lo cual se ha planteado solucionar el conflicto entre dos trabajadores actuando en base a los componentes del coeficiente emocional de Peter Salovey y John Mayer.',
                  pregunta: 'Para esto, su mejor estrategia será:',
                  respuestas: [
                    {
                      name: 'Conocer sus propias emociones y hacerlas primar sobre las de los demás.',
                      id: 1
                    },
                    {
                      name: 'Despedirlos del equipo de trabajo.',
                      id: 2
                    },
                    {
                      name: 'Estimularlos para que salgan del conflicto y hagan las paces, acercándose de forma oportuna al conflicto y las emociones implicadas en este.',
                      id: 3
                    }
                  ],
                  correcto: 3
                }
              ]
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
                      name: 'Empatía',
                      id: 2
                    },
                    {
                      name: 'Motivación y persistencia',
                      id: 3
                    },
                    {
                      name: 'Autorregulación o control',
                      id: 1
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
                      name: 'Supervisión',
                      id: 3
                    },
                    {
                      name: 'Gestión',
                      id: 1
                    },
                    {
                      name: 'Liderazgo',
                      id: 2
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
              src: 'resumen.png',
              pdf: 'Resumen1.pdf'
            },
            {
              id: 6,
              name: 'Ir al Menu',
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
              name: 'Casos de estudio',
              src: 'material del apoyo.png',
              titulo: 'Liderazgo y Gestión',
              descriccion: 'A continuación, te presentamos algunos casos, los cuales te ayudaran a fijar el conocimiento. Lee con atención y responde las preguntas que te presentamos.',
              casos: [
                {
                  id: 1,
                  descriccion: 'Claudia, que ha tomado muchas responsabilidades en la pequeña empresa de cosméticos de la que forma parte, debe liderar a dos equipos de trabajo que ven áreas distintas: cremas, por un lado, y labiales, por el otro. El equipo de trabajo de las cremas tiene tareas por delante y está obteniendo logros, como hacer publicidad efectiva de los productos, testearlos correctamente y hacer controles de calidad, y las está desarrollando a buen ritmo. Pero aún no alcanza un nivel alto de desarrollo.',
                  pregunta: '¿Cuál es el próximo paso que tiene que llevar a cabo Claudia?',
                  respuestas: [
                    {
                      name: 'Centrarse en las responsabilidades que tiene cada uno y asignarles más objetivos de producción.',
                      id: 1
                    },
                    {
                      name: 'Disolver el equipo de trabajo y mezclarlo con el equipo de trabajo de los labiales.',
                      id: 2
                    },
                    {
                      name: 'Estimular la buena relación entre los miembros del equipo.',
                      id: 3
                    }
                  ],
                  correcto: 3
                },
                {
                  id: 2,
                  descriccion: 'Por otro lado, el equipo dedicado a los labiales recién está llevando a cabo la publicidad de los productos, y no ha testeado ni ha tenido tiempo de realizar los respectivos controles de calidad, por lo cual no han alcanzado el nivel de desarrollo esperado.',
                  pregunta: '¿Qué tiene que hacer Claudia?',
                  respuestas: [
                    {
                      name: 'Dar instrucciones para pasar a las próximas tareas de testeo y controles de calidad, y supervisar.',
                      id: 1
                    },
                    {
                      name: 'Fijar nuevos objetivos, nuevas funciones dentro del equipo y reorganizar las horas de trabajo. ',
                      id: 2
                    },
                    {
                      name: 'Reforzar las relaciones entre los colaboradores del equipo.',
                      id: 3
                    }
                  ],
                  correcto: 1
                }
              ]
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
                      name: 'Liderazgo adaptativo',
                      id: 3
                    },
                    {
                      name: 'Liderazgo situacional',
                      id: 1
                    },
                    {
                      name: 'Liderazgo transaccional',
                      id: 2
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
                      name: 'Consideración individual',
                      id: 2
                    },
                    {
                      name: 'Administración activa por excepción',
                      id: 3
                    },
                    {
                      name: 'Liderazgo adaptativo',
                      id: 1
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
          src: 'bg.jpg',
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
              name: 'Casos de estudio',
              src: 'material del apoyo.png',
              titulo: 'Liderazgo y Gestión',
              descriccion: 'A continuación, te presentamos algunos casos, los cuales te ayudaran a fijar el conocimiento. Lee con atención y responde las preguntas que te presentamos.',
              casos: [
                {
                  id: 1,
                  descriccion: 'Josefina es la dueña líder de un pequeño minimarket de barrio enfocado en panadería y su equipo de trabajo está compuesto por un pastelero y un cajero. Es jueves y para el fin de semana, les han hecho un encargo de veinte tortas desde un centro de eventos que suele ser poco relevante, porque pagan tarde y el trato con el encargado no es muy bueno. Sin embargo, tienen que tener prisa para cumplir con el pedido en el tiempo acordado, pero al mismo tiempo deben cumplir con su producción semanal de siempre, algo que ellos consideran imprescindible.',
                  pregunta: '¿Qué debe decidir Josefina? ',
                  respuestas: [
                    {
                      name: 'Hacer lo más rápido posible los pasteles y ayudar en ello resolviendo dudas y estando en el minimarket. Asignarles más objetivos de producción.',
                      id: 1
                    },
                    {
                      name: 'Delegar el encargo de veinte tortas a un pastelero externo al que recurre para casos como este. ',
                      id: 2
                    },
                    {
                      name: 'Cancelar el pedido.',
                      id: 3
                    }
                  ],
                  correcto: 2
                },
                {
                  id: 2,
                  descriccion: 'La semana siguiente, el minimarket recibe un pedido de cuarenta pasteles para un catering de uno de sus mejores y más responsables clientes. Tienen un día para hacerlos todos.',
                  pregunta: '¿Cuál debería ser la decisión de Josefina? ',
                  respuestas: [
                    {
                      name: 'Hablar con el cliente y recomendarle otros minimarket o pastelerías, cancelando el pedidode calidad, y supervisar. ',
                      id: 1
                    },
                    {
                      name: 'Delegar el pedido al pastelero externo.',
                      id: 2
                    },
                    {
                      name: 'Enfocarse solo en este pedido, ayudando al pastelero.',
                      id: 3
                    }
                  ],
                  correcto: 3
                }
              ]
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
                      name: 'Toma de conciencia',
                      id: 2
                    },
                    {
                      name: 'Observar',
                      id: 3
                    },
                    {
                      name: 'Determinación de objetivos ',
                      id: 1
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
                      name: 'Reforzar',
                      id: 3
                    },
                    {
                      name: 'Admitir',
                      id: 1
                    },
                    {
                      name: 'Investigar',
                      id: 2
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
