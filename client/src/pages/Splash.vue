<template>
  <q-avatar square class="window-width window-height">
    <q-img src="intro.gif" class="full-height"/>
  </q-avatar>
</template>

<script>
export default {
  data () {
    return {
      form: {},
      timer: '',
      info: true,
      modulos: [
        {
          id: 1,
          name: 'Módulo 01',
          src: 'modulo1.png',
          title: 'Liderazgo y Gestión',
          descriccion: '',
          statusCa: false,
          statusEx: false,
          infoEx: true,
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
            },
            visto: true
          },
          actividades: [
            {
              id: 1,
              name: 'Ver videos',
              src: 'ver video.png',
              visto: true
            },
            {
              id: 2,
              name: 'Glosario',
              src: 'glosario.png',
              pdf: 'Glosario1.pdf',
              visto: false
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
              ],
              visto: false
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
              ],
              visto: false
            },
            {
              id: 5,
              name: 'Ver resumen',
              src: 'resumen.png',
              pdf: 'Resumen1.pdf',
              visto: false
            },
            {
              id: 6,
              name: 'Ir al Menu',
              src: 'Volver al inicio.png'
            }
          ]
        },
        {
          id: 2,
          name: 'Módulo 02',
          src: 'modulo2.png',
          title: 'Modelos de Liderazgo',
          descriccion: '',
          statusCa: false,
          statusEx: false,
          videos: {
            sources: [
              [{
                src: 'video3.mp4',
                type: 'video/mp4'
              }],
              [{
                src: 'video4.mp4',
                type: 'video/mp4'
              }],
              [{
                src: 'video5.mp4',
                type: 'video/mp4'
              }]
            ],
            options: {
              autoplay: true,
              volume: 0.6
            },
            visto: true
          },
          actividades: [
            {
              id: 1,
              name: 'Ver videos',
              src: 'ver video.png',
              visto: true
            },
            {
              id: 2,
              name: 'Glosario',
              src: 'glosario.png',
              pdf: 'Glosario2.pdf',
              visto: false
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
              ],
              visto: false
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
              ],
              visto: false
            },
            {
              id: 5,
              name: 'Ver resumen',
              src: 'resumen.png',
              pdf: 'Resumen2.pdf',
              visto: false
            },
            {
              id: 6,
              name: 'Ir al Menu',
              src: 'Volver al inicio.png'
            }
          ]
        },
        {
          id: 3,
          name: 'Módulo 03',
          src: 'bg.jpg',
          title: 'Planificar, Delegar y Coaching',
          descriccion: '',
          statusCa: false,
          statusEx: false,
          videos: {
            sources: [
              [{
                src: 'video6.mp4',
                type: 'video/mp4'
              }],
              [{
                src: 'video7.mp4',
                type: 'video/mp4'
              }]
            ],
            options: {
              autoplay: true,
              volume: 0.6
            },
            visto: true
          },
          actividades: [
            {
              id: 1,
              name: 'Ver videos',
              src: 'ver video.png',
              visto: true
            },
            {
              id: 2,
              name: 'Glosario',
              src: 'glosario.png',
              pdf: 'Glosario3.pdf',
              visto: false
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
              ],
              visto: false
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
              ],
              visto: false
            },
            {
              id: 5,
              name: 'Ver resumen',
              src: 'resumen.png',
              pdf: 'Resumen3.pdf',
              visto: false
            },
            {
              id: 6,
              name: 'Ir al Menu',
              src: 'Volver al inicio.png'
            }
          ]
        }
      ],
      modulos2: [
        {
          id: 1,
          name: 'Módulo 01',
          src: 'modulo1.png',
          title: 'Grupo versus Equipo',
          descriccion: '',
          statusCa: false,
          statusEx: false,
          infoEx: true,
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
            },
            visto: true
          },
          actividades: [
            {
              id: 1,
              name: 'Ver videos',
              src: 'ver video.png',
              visto: true
            },
            {
              id: 2,
              name: 'Glosario',
              src: 'glosario.png',
              pdf: 'Glosario1.pdf',
              visto: false
            },
            {
              id: 3,
              name: 'Casos de estudio',
              src: 'material del apoyo.png',
              titulo: 'Grupo versus Equipo',
              descriccion: 'A continuación, te presentamos algunos casos, los cuales te ayudaran a fijar el conocimiento. Lee con atención y responde las preguntas que te presentamos.',
              casos: [
                {
                  id: 1,
                  descriccion: 'En el Torneo de Artes Marciales "Summer", que se llega a cabo todos los años en la ciudad de Santiago, existen diferentes modalidades, entre ellas: Fomas con armas, Peleas individuales, Peleas por Equipo y combates tradicionales. En el torneo pasado la escuela Rioshi le dio una sorpresa a toda la comunidad marcial, pues a pesar de que sus peleadores no eran los más poderosos en los combates individuales, lograron quedarse con el primer lugar de la categoría por equipos, ganándole la final a la escuela OVK de la cual salieron todos los campeones de las modalidades individuales.',
                  pregunta: '¿Qué deberá hacer el entrenador de la escuela OVK, después de esta derrotar? ',
                  respuestas: [
                    {
                      name: 'Entrenar más duro.',
                      id: 1
                    },
                    {
                      name: 'Promover las relaciones interpersonales dentro del grupo y así se conozcan mejor.',
                      id: 2
                    },
                    {
                      name: 'No participar de nuevo en la categoría por equipos.',
                      id: 3
                    }
                  ],
                  correcto: 2
                },
                {
                  id: 2,
                  descriccion: 'En el Torneo de Artes Marciales "Summer", que se llega a cabo todos los años en la ciudad de Santiago, existen diferentes modalidades, entre ellas: Fomas con armas, Peleas individuales, Peleas por Equipo y combates tradicionales. En el torneo pasado la escuela Rioshi le dio una sorpresa a toda la comunidad marcial, pues a pesar de que sus peleadores no eran los más poderosos en los combates individuales, lograron quedarse con el primer lugar de la categoría por equipos, ganándole la final a la escuela OVK de la cual salieron todos los campeones de las modalidades individuales.',
                  pregunta: '¿Por qué la escuela Rioshi quedo campeona de la categoría de equipos?',
                  respuestas: [
                    {
                      name: 'La escuela OVK, estaba cansada por los combates anteriores.',
                      id: 1
                    },
                    {
                      name: 'Los integrantes de equipo Rioshi, entrenando juntos todas las semanas.',
                      id: 2
                    },
                    {
                      name: 'La escuela OVK dejo que Rioshi ganara.',
                      id: 3
                    }
                  ],
                  correcto: 2
                }
              ],
              visto: false
            },
            {
              id: 4,
              name: 'Realizar examen',
              src: 'realizar examen.png',
              titulo: 'Grupo versus Equipo',
              hojas: [
                {
                  id: 1,
                  descriccion: 'Asocia los siguientes conceptos con sus respectivas definiciones.',
                  preguntas: [
                    {
                      name: 'Principio de Aristóteles',
                      id: 2
                    },
                    {
                      name: 'Organización exitosa',
                      id: 3
                    },
                    {
                      name: 'Equipo de trabajo',
                      id: 1
                    }
                  ],
                  respuestas: [
                    {
                      name: 'Grupo de personas altamente comunicativas altamente cualificadas con un propósito y objetivo en común.',
                      id: 1
                    },
                    {
                      name: 'Hace referencia a que el todo es más que la suma de sus partes.',
                      id: 2
                    },
                    {
                      name: 'Personal alineado y comprometido, además de planificado y coordinado.',
                      id: 3
                    }
                  ],
                  correcto: [1, 2, 3]
                },
                {
                  id: 2,
                  descriccion: 'Asocia los siguientes conceptos con sus respectivas definiciones.',
                  preguntas: [
                    {
                      name: 'Objetivos de cada equipo',
                      id: 3
                    },
                    {
                      name: 'Problemas empresariales',
                      id: 1
                    },
                    {
                      name: 'Roles de trabajo',
                      id: 2
                    }
                  ],
                  respuestas: [
                    {
                      name: 'En su mayoría se originan a partir de una mala comunicación.',
                      id: 1
                    },
                    {
                      name: 'Cada integrante del equipo debe cumplirlo sin perder la noción de equipo.',
                      id: 2
                    },
                    {
                      name: 'Deben ser exactos, específicos, medibles, cuantificables, retadores.',
                      id: 3
                    }
                  ],
                  correcto: [1, 2, 3]
                }
              ],
              visto: false
            },
            {
              id: 5,
              name: 'Ver resumen',
              src: 'resumen.png',
              pdf: 'Resumen1.pdf',
              visto: false
            },
            {
              id: 6,
              name: 'Ir al Menu',
              src: 'Volver al inicio.png'
            }
          ]
        },
        {
          id: 2,
          name: 'Módulo 02',
          src: 'modulo2.png',
          title: 'Equipos Efectivos en las Organizaciones de trabajo',
          descriccion: '',
          statusCa: false,
          statusEx: false,
          videos: {
            sources: [
              [{
                src: 'video3.mp4',
                type: 'video/mp4'
              }]
            ],
            options: {
              autoplay: true,
              volume: 0.6
            },
            visto: true
          },
          actividades: [
            {
              id: 1,
              name: 'Ver videos',
              src: 'ver video.png',
              visto: true
            },
            {
              id: 2,
              name: 'Glosario',
              src: 'glosario.png',
              pdf: 'Glosario2.pdf',
              visto: false
            },
            {
              id: 3,
              name: 'Casos de estudio',
              src: 'material del apoyo.png',
              titulo: 'Equipos Efectivos en las Organizaciones de trabajo',
              descriccion: 'A continuación, te presentamos algunos casos, los cuales te ayudaran a fijar el conocimiento. Lee con atención y responde las preguntas que te presentamos.',
              casos: [
                {
                  id: 1,
                  descriccion: 'Este es el caso de Monserrat y Aylin, las dos ingresaron como ejecutivas de ventas en una agencia de viajes "Vente". Monserrat ingreso los primeros días de diciembre en cambio Aylin ingreso el 15 del mismo mes, con dos semanas de diferencia, Aylin tiene una amplia experiencia en el área de ventas, mientras que para Monserrat este es su segundo empleo, pero durante las dos primeras semanas de diciembre Monserrat recibió una instrucción donde conoció la misión, visión y valores de la empresa, adicionalmente paso un fin de semana en el Hotel "Mirador del Condor" (uno de los principales socios de "Vente"), por otra parte Aylin ingreso en temporada peak y solo recibió una formación escueta, la cual debería de haber sido suficiente debido a su amplia experiencia. A mediados de enero Monserrat ya alcanzo sus metas comerciales, mientras que Aylin no ha podido vender más de dos Packs.',
                  pregunta: '¿Cuál de las siguientes opciones puede ser la razón de la mala gestión de Aylin?',
                  respuestas: [
                    {
                      name: 'Monserrat tuvo suerte de principiante.',
                      id: 1
                    },
                    {
                      name: 'La base de datos de posibles clientes, que manejaba Aylin no eran de perfiles viajeros.',
                      id: 2
                    },
                    {
                      name: 'La instrucción de Monserrat genero un sentido de pertenencia en ella.',
                      id: 3
                    }
                  ],
                  correcto: 3
                },
                {
                  id: 2,
                  descriccion: 'Este es el caso de Monserrat y Aylin, las dos ingresaron como ejecutivas de ventas en una agencia de viajes "Vente". Monserrat ingreso los primeros días de diciembre en cambio Aylin ingreso el 15 del mismo mes, con dos semanas de diferencia, Aylin tiene una amplia experiencia en el área de ventas, mientras que para Monserrat este es su segundo empleo, pero durante las dos primeras semanas de diciembre Monserrat recibió una instrucción donde conoció la misión, visión y valores de la empresa, adicionalmente paso un fin de semana en el Hotel "Mirador del Condor" (uno de los principales socios de "Vente"), por otra parte Aylin ingreso en temporada peak y solo recibió una formación escueta, la cual debería de haber sido suficiente debido a su amplia experiencia. A mediados de enero Monserrat ya alcanzo sus metas comerciales, mientras que Aylin no ha podido vender más de dos Packs.',
                  pregunta: '¿Qué debería hacer la Gerencia con el caso de Aylin?',
                  respuestas: [
                    {
                      name: 'Despedirla y contratar a otra persona. ',
                      id: 1
                    },
                    {
                      name: 'Darle una instrucción al igual que la recibió Monserrat.',
                      id: 2
                    },
                    {
                      name: 'Ponerla bajo la supervisión de Monserrat.',
                      id: 3
                    }
                  ],
                  correcto: 2
                }
              ],
              visto: false
            },
            {
              id: 4,
              name: 'Realizar examen',
              src: 'realizar examen.png',
              titulo: 'Equipos Efectivos en las Organizaciones de trabajo',
              hojas: [
                {
                  id: 1,
                  descriccion: 'Asocia los siguientes conceptos con sus respectivas definiciones.',
                  preguntas: [
                    {
                      name: 'Visión',
                      id: 2
                    },
                    {
                      name: 'Misión',
                      id: 3
                    },
                    {
                      name: 'Valores',
                      id: 1
                    }
                  ],
                  respuestas: [
                    {
                      name: 'Define el conjunto de principios, creencias, reglas que regulan la gestión de la organización. Constituyen la filosofía institucional y el soporte de la cultura organizacional.',
                      id: 1
                    },
                    {
                      name: 'Declaración para guiar, y alertar a la organización en su conjunto para alcanzar el estado deseado por la organización.',
                      id: 2
                    },
                    {
                      name: 'Define el negocio al que se dedica la organización, las necesidades que cubre con sus productos y servicios, el mercado en el cual se desarrolla la empresa y la imagen pública de la empresa u organización.',
                      id: 3
                    }
                  ],
                  correcto: [1, 2, 3]
                },
                {
                  id: 2,
                  descriccion: 'Asocia los siguientes conceptos con sus respectivas definiciones.',
                  preguntas: [
                    {
                      name: 'Comunicación',
                      id: 3
                    },
                    {
                      name: 'Confianza',
                      id: 1
                    },
                    {
                      name: 'Coordinación',
                      id: 2
                    }
                  ],
                  respuestas: [
                    {
                      name: 'Cuando el respeto y los afectos prevalecen en un equipo, los miembros serán más sensibles con la necesidad de sus colegas, lo que significará que estarán más dispuestos a ayudarlos.',
                      id: 1
                    },
                    {
                      name: 'Permite abordar los problemas de manera eficiente, sin desperdiciar tiempo realizando tareas innecesarias que produzcan retrasos, errores, frustración y pérdidas materiales y económicas.',
                      id: 2
                    },
                    {
                      name: 'Es un componente que permite transmitir los mensajes de buena manera, sin dejar dudas al respecto, evitando que se produzcan fallas, interferencias, rumores, retrasos o incomprensión entre los integrantes del equipo.',
                      id: 3
                    }
                  ],
                  correcto: [1, 2, 3]
                }
              ],
              visto: false
            },
            {
              id: 5,
              name: 'Ver resumen',
              src: 'resumen.png',
              pdf: 'Resumen2.pdf',
              visto: false
            },
            {
              id: 6,
              name: 'Ir al Menu',
              src: 'Volver al inicio.png'
            }
          ]
        },
        {
          id: 3,
          name: 'Módulo 03',
          src: 'bg.jpg',
          title: 'Fase de incomodidad',
          descriccion: '',
          statusCa: false,
          statusEx: false,
          videos: {
            sources: [
              [{
                src: 'video4.mp4',
                type: 'video/mp4'
              }]
            ],
            options: {
              autoplay: true,
              volume: 0.6
            },
            visto: true
          },
          actividades: [
            {
              id: 1,
              name: 'Ver videos',
              src: 'ver video.png',
              visto: true
            },
            {
              id: 2,
              name: 'Glosario',
              src: 'glosario.png',
              pdf: 'Glosario3.pdf',
              visto: false
            },
            {
              id: 3,
              name: 'Casos de estudio',
              src: 'material del apoyo.png',
              titulo: 'Fase de incomodidad',
              descriccion: 'A continuación, te presentamos algunos casos, los cuales te ayudaran a fijar el conocimiento. Lee con atención y responde las preguntas que te presentamos',
              casos: [
                {
                  id: 1,
                  descriccion: 'En el almacén de Ripley del Mail Vivo del Paseo Estado, se vienen dando situaciones incomodas cada vez que es necesario reponer la tienda, ya que un grupo de empleados se niega a trabajar en el área de electrodomésticos alegando que ese trabajo es más complicado por diferentes razones y que debería hacerse con más personas. El encargado del almacén es Roberto que tienes más de 10 años en la tienda, Roberto no presta atención a las solicitudes de los reponedores lo que ha provocado que, en dos ocasiones, la tienda no pueda ser abierta al público a la hora estipulada.',
                  pregunta: '¿Qué está pasando en este Grupo de Trabajo? ',
                  respuestas: [
                    {
                      name: 'Hace falta más personal.',
                      id: 1
                    },
                    {
                      name: 'No tienen una comunicación efectiva.',
                      id: 2
                    },
                    {
                      name: 'El personal no quiere trabajar.',
                      id: 3
                    }
                  ],
                  correcto: 2
                },
                {
                  id: 2,
                  descriccion: 'En el almacén de Ripley del Mail Vivo del Paseo Estado, se vienen dando situaciones incomodas cada vez que es necesario reponer la tienda, ya que un grupo de empleados se niega a trabajar en el área de electrodomésticos alegando que ese trabajo es más complicado por diferentes razones y que debería hacerse con más personas. El encargado del almacén es Roberto que tienes más de 10 años en la tienda, Roberto no presta atención a las solicitudes de los reponedores lo que ha provocado que, en dos ocasiones, la tienda no pueda ser abierta al público a la hora estipulada.',
                  pregunta: '¿Qué debería hacer el encargado de almacén? ',
                  respuestas: [
                    {
                      name: 'Generar un laboral agradable.',
                      id: 1
                    },
                    {
                      name: 'Solicitar más reponedores.',
                      id: 2
                    },
                    {
                      name: 'Abandonar empresa.',
                      id: 3
                    }
                  ],
                  correcto: 1
                }
              ],
              visto: false
            },
            {
              id: 4,
              name: 'Realizar examen',
              src: 'realizar examen.png',
              titulo: 'Fase de incomodidad',
              hojas: [
                {
                  id: 1,
                  descriccion: 'Asocia los siguientes conceptos con sus respectivas definiciones. ',
                  preguntas: [
                    {
                      name: '¿Cómo podremos fomentar el desarrollo individual?',
                      id: 2
                    },
                    {
                      name: '¿Qué hacer si tenemos un mal clima laboral?',
                      id: 3
                    },
                    {
                      name: '¿Qué hacer cuando la crítica es inadecuada? ',
                      id: 1
                    }
                  ],
                  respuestas: [
                    {
                      name: 'Fomentar las evaluaciones imparciales.',
                      id: 1
                    },
                    {
                      name: 'Capacitación continua a todos los miembros de nuestra organización.',
                      id: 2
                    },
                    {
                      name: 'Fomentar espacios donde los trabajadores puedan expresarse con franqueza.',
                      id: 3
                    }
                  ],
                  correcto: [1, 2, 3]
                }
              ],
              visto: false
            },
            {
              id: 5,
              name: 'Ver resumen',
              src: 'resumen.png',
              pdf: 'Resumen3.pdf',
              visto: false
            },
            {
              id: 6,
              name: 'Ir al Menu',
              src: 'Volver al inicio.png'
            }
          ]
        }
      ]
    }
  },
  mounted () {
    const existe = JSON.parse(localStorage.getItem('modulos'))
    console.log(existe)
    if (!existe) {
      localStorage.setItem('modulos', JSON.stringify(this.modulos))
      localStorage.setItem('infoHome', JSON.stringify(this.info))
    }
  },
  methods: {
    ejecutar () {
      this.$router.push('/inicio')
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  created () {
    this.info = new Audio(require('../../public/DEMO.mp3'))
    // a.loop = true
    console.log('pre')
    this.info.play()
    this.timer = setInterval(this.ejecutar, 6000)
  },
  cancelAutoUpdate () { clearInterval(this.timer) }
}
</script>
