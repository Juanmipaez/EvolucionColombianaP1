// Datos estáticos dentro del JS, sin usar JSON externo
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('timeSlider');
  const bgImage = document.getElementById('bgImage');
  const insectsContainer = document.getElementById('insects-container');
  const quizContainer = document.getElementById('quiz-container');
  const presentSection = document.getElementById('present-section');
  const tooltip = document.getElementById('tooltip');
  const tooltipTitle = document.getElementById('tooltip-title');
  const tooltipText = document.getElementById('tooltip-text');
  const closeTooltip = document.getElementById('close-tooltip');
  const periodContext = document.getElementById('period-context');

  // Array estático con datos
  const timelineData = [
    {
      index: 0,
      periodo: 'Mioceno',
      contexto: 'Durante el Mioceno, gran parte del territorio colombiano comenzó a tomar la forma que hoy conocemos. La Cordillera de los Andes se elevaba activamente, fragmentando hábitats y generando nuevos nichos ecológicos. En este periodo, Colombia era un territorio de selvas tropicales vastas y húmedas, donde florecieron mamíferos como los megaterios (perezosos gigantes), los toxodontes y diversas especies de roedores y primates. Los insectos también vivieron una gran diversificación, adaptándose a climas húmedos y una vegetación densa. La riqueza de insectos polinizadores como abejas y mariposas permitió la expansión de muchas especies vegetales.',
      background: 'img/fondo_mioceno.png',
      insects: [
        {
          id: 'mi1',
          name: 'Escarabajo Lacustre',
          img: 'img/insecto1.jpg',
          x: 2, // porcentaje (%), 0 a 100
          y: 2,
          descripcion: 'Insecto adaptado a climas cálidos y húmedos hace 15 Ma.'
        },
        {
          id: 'mi2',
          name: 'Mosca de Montaña',
          img: 'img/insecto2.png',
          x: 80,
          y: 60,
          descripcion: 'Diptera ancestro encontrado en sedimentos de alta montaña.'
        }
      ],
      quiz: [
        {
          pregunta: '¿En qué ambiente vivía el Escarabajo Lacustre?',
          opciones: [
            '1) Desiertos áridos',
            '2) Ecosistemas lacustres',
            '3) Bosques lluviosos'
          ],
          respuesta: 1,
          feedback: {
            correcto: '¡Correcto! Vivía en ecosistemas lacustres.',
            incorrecto: 'No. El Escarabajo Lacustre vivía cerca de lagos, no en desiertos.'
          }
        }
      ]
    },
    {
      index: 1,
      periodo: 'Plioceno',
      contexto: 'El Plioceno marcó una transición importante hacia climas más secos en ciertas regiones de Colombia, lo que provocó cambios en la vegetación y, por ende, en la fauna. Los grandes mamíferos comenzaron a adaptarse a sabanas y bosques menos densos. En este período, debido al cierre del Istmo de Panamá, ocurrió el Gran Intercambio Biótico Americano: especies del norte llegaron al sur y viceversa. Así llegaron a Colombia animales como los cánidos y felinos, mientras que desde Sudamérica migraron perezosos y armadillos hacia América del Norte. Los insectos también experimentaron un cambio, con un aumento de especies adaptadas a climas más templados y secos..',
      background: 'img/fondo_plioceno.png',
      insects: [
        {
          id: 'pl1',
          name: 'Avispa de Páramo',
          img: 'img/insecto3.png',
          x: 80,
          y: 60,
          descripcion: 'Himenóptero predecesor de especies actuales de alta montaña.'
        }
      ],
      quiz: [
        {
          pregunta: '¿Qué adaptación tenía la Avispa de Páramo?',
          opciones: [
            '1) Alas para vuelo en altitud',
            '2) Caparazón duro para desiertos',
            '3) Camuflaje en junglas'
          ],
          respuesta: 0,
          feedback: {
            correcto: '¡Bien! Adaptada para volar en altitudes elevadas.',
            incorrecto: 'Incorrecto. Su adaptación era para volar en altitud, no para desiertos.'
          }
        }
      ]
    },
    {
      index: 2,
      periodo: 'Pleistoceno',
      contexto: 'El Pleistoceno fue la era de las glaciaciones, aunque en Colombia, por su cercanía al ecuador, no hubo hielo permanente, sí se experimentaron importantes cambios climáticos que afectaron los ecosistemas. En las zonas altas se formaron páramos, ecosistemas únicos que existen casi exclusivamente en los Andes. La megafauna dominó este tiempo: mastodontes, gliptodontes y tigres dientes de sable convivían con los primeros humanos que llegaron a la región. La diversidad de insectos se mantuvo, adaptándose a nuevas altitudes y climas; algunas especies se especializaron en los ecosistemas de montaña, mientras que otras evolucionaron en los trópicos bajos.',
      background: 'img/fondo_pleistoceno.png',
      insects: [
        {
          id: 'ps1',
          name: 'Díptero Helado',
          img: 'img/insecto4.png',
          x: 6,
          y: 53,
          descripcion: 'Diptera resistente a bajas temperaturas hace 1 Ma.'
        }
      ],
      quiz: [
        {
          pregunta: '¿Cuál era la característica del Díptero Helado?',
          opciones: [
            '1) Resistencia al frío',
            '2) Migración a bajas altitudes',
            '3) Nidificación en bosques'
          ],
          respuesta: 0,
          feedback: {
            correcto: 'Correcto, resistía temperaturas muy bajas.',
            incorrecto: 'No, su característica clave era la resistencia al frío.'
          }
        }
      ]
    },
    {
      index: 3,
      periodo: 'Holoceno',
      contexto: 'El Holoceno representa la era actual, caracterizada por el clima más estable de los últimos millones de años. En Colombia, esto permitió el florecimiento de los bosques tropicales, la selva amazónica, los Andes y sus páramos, y los ecosistemas caribeños y pacíficos. La fauna comenzó a parecerse a la que hoy conocemos, aunque muchas especies de la megafauna se extinguieron. Los insectos mantuvieron una enorme diversidad, con roles clave en la polinización, descomposición y equilibrio ecológico. La intervención humana en los últimos siglos ha modificado muchos hábitats, poniendo en riesgo esta riqueza, pero aún hoy Colombia sigue siendo uno de los países con mayor biodiversidad de insectos y fauna en el planeta.',
      background: 'img/fondo_holoceno.png',
      insects: [
        {
          id: 'ho1',
          name: 'Escarabajo Andino',
          img: 'img/insecto5.png',
          x: 5,
          y: 10,
          descripcion: 'Escarabajo adaptado a los fríos páramos actuales, clave en la descomposición de materia orgánica.'
        },
        {
          id: 'ho2',
          name: 'Mariposa del Páramo',
          img: 'img/insecto6.png',
          x: 80,
          y: 60,
          descripcion: 'Mariposa diurna que poliniza plantas endémicas de los páramos andinos.'
        }
      ],
      quiz: [
        {
          pregunta: '¿Cuál es el rol ecológico del Escarabajo Andino en el Holoceno?',
          opciones: [
            '1) Polinización de orquídeas',
            '2) Descomposición de materia orgánica',
            '3) Depredador de pequeños mamíferos'
          ],
          respuesta: 1,
          feedback: {
            correcto: '¡Correcto! El Escarabajo Andino ayuda a descomponer materia orgánica en el páramo.',
            incorrecto: 'No, su función principal es la descomposición, no la polinización ni la depredación.'
          }
        }
      ]
    }
  ];


  function initialize() {
    slider.max = timelineData.length - 1;
    slider.value = 0;
    updateStage(0);

    slider.addEventListener('input', () => {
      const idx = parseInt(slider.value);
      updateStage(idx);

      if (idx === timelineData.length - 1) {
        presentSection.classList.remove('hidden');
      } else {
        presentSection.classList.add('hidden');
      }
    });

    document.querySelectorAll('#slider-labels span').forEach(label => {
      label.addEventListener('click', () => {
        const idx = parseInt(label.getAttribute('data-index'));
        slider.value = idx;
        updateStage(idx);
      });
    });

    closeTooltip.addEventListener('click', () => {
      tooltip.classList.add('hidden');
    });
  }

  function updateStage(idx) {
    const stage = timelineData.find(d => d.index === idx);
    // Cambiar fondo con transición
    bgImage.style.opacity = 0;
    periodContext.innerText = stage.contexto;
    setTimeout(() => {
      bgImage.src = stage.background;
      bgImage.style.opacity = 1;
    }, 500);

    // Limpiar contenidos anteriores
    insectsContainer.innerHTML = '';
    quizContainer.innerHTML = '';

    // Mostrar insectos si hay
    if (stage.insects.length) {
      stage.insects.forEach(insect => {
        const img = document.createElement('img');
        img.src = insect.img;
        img.alt = insect.name;
        img.classList.add('insect');
        img.style.left = insect.x + '%';
        img.style.top = insect.y + '%';
        img.addEventListener('click', () => {
          showTooltip(insect.name, insect.descripcion);
        });
        insectsContainer.appendChild(img);
      });
    }

    // Generar quiz si existe
    if (stage.quiz.length) {
      const randomIndex = Math.floor(Math.random() * stage.quiz.length);
      const q = stage.quiz[randomIndex];

      const questionEl = document.createElement('div');
      questionEl.classList.add('quiz-question');
      questionEl.innerText = q.pregunta;
      quizContainer.appendChild(questionEl);

      const optionsEl = document.createElement('div');
      optionsEl.classList.add('quiz-options');
      q.opciones.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.addEventListener('click', () => {
          showFeedback(q, i);
        });
        optionsEl.appendChild(btn);
      });
      quizContainer.appendChild(optionsEl);

      const feedbackEl = document.createElement('div');
      feedbackEl.id = 'quiz-feedback';
      feedbackEl.classList.add('quiz-feedback');
      quizContainer.appendChild(feedbackEl);
    }
  }


  function showFeedback(q, selectedIdx) {
    const feedbackEl = document.getElementById('quiz-feedback');
    if (selectedIdx === q.respuesta) {
      feedbackEl.innerText = q.feedback.correcto;
      feedbackEl.style.color = '#2c3e50';
    } else {
      feedbackEl.innerText = q.feedback.incorrecto;
      feedbackEl.style.color = '#a87b5b';
    }
  }

  initialize();
})