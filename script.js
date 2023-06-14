// inicio
var musica1 = document.getElementById('musica1');
var musica2 = document.getElementById('musica2');
var botonMusica1 = document.getElementById('reproducirMusica1');
var botonMusica2 = document.getElementById('reproducirMusica2');

// Función para reproducir Música 1
function reproducirMusica1() {
  musica2.pause(); // Pausar Música 2 si se está reproduciendo
  musica1.currentTime = 0; // Reiniciar la reproducción desde el principio
  musica1.play(); // Reproducir Música 1
}

// Función para reproducir Música 2
function reproducirMusica2() {
  musica1.pause(); // Pausar Música 1 si se está reproduciendo
  musica2.currentTime = 0; // Reiniciar la reproducción desde el principio
  musica2.play(); // Reproducir Música 2
}

// Asignar eventos a los botones
botonMusica1.addEventListener('click', reproducirMusica1);
botonMusica2.addEventListener('click', reproducirMusica2);

//refresh
document.getElementById("refreshButton").addEventListener("click", function() {
  location.reload();
});

// Fin
//Fondo
var cambiarFondo1Btn = document.getElementById('reproducirMusica1');
var cambiarFondo2Btn = document.getElementById('reproducirMusica2');
var body = document.body;

cambiarFondo1Btn.addEventListener('click', function() {
  body.classList.remove('fondo2');
  body.classList.add('fondo1');
});

cambiarFondo2Btn.addEventListener('click', function() {
  body.classList.remove('fondo1');
  body.classList.add('fondo2');
});

//Fondo Fin
  
let currentStep = 1;
let emotions = {
  ana: '',
  luis: ''
};

function selectOption(option) {
  const storyElement = document.getElementById("story");
  const resultElement = document.getElementById("result");
  const choiceButtons = document.querySelectorAll(".choice");

  if (currentStep === 1) {
    if (option === 1) {
      storyElement.textContent = "A traves de las paginas del diario...";
      resultElement.textContent = "Has descubierto el legado emocional de tu familia. Te sientes inspirada para seguir adelante en tu vida.";
      emotions.ana = 'inspirada';
      emotions.luis = 'interesado';
      currentStep = 2;
    } else if (option === 2) {
      storyElement.textContent = "Decides explorar el entorno...";
      resultElement.textContent = "Mientras exploras, encuentras un objeto misterioso.";
      currentStep = 3;
    }
  } else if (currentStep === 2) {
    if (option === 1) {
      storyElement.textContent = "Decides hablar con tu madre sobre el diario...";
      resultElement.textContent = "Tu madre comparte mas detalles sobre la historia de tu familia.";
      currentStep = 4;
    } else if (option === 2) {
      storyElement.textContent = "Decides buscar mas informacion sobre el diario...";
      resultElement.textContent = "Encuentras documentos antiguos que revelan mas secretos sobre el diario.";
      currentStep = 5;
    }
  } else if (currentStep === 3) {
    if (option === 1) {
      storyElement.textContent = "Decides tomar el objeto misterioso...";
      resultElement.textContent = "El objeto brilla intensamente en tus manos y te llena de emociones desconocidas.";
      emotions.ana = 'curiosa';
      emotions.luis = 'inquieto';
      currentStep = 6;
    } else if (option === 2) {
      storyElement.textContent = "Decides dejar el objeto y continuar explorando...";
      resultElement.textContent = "Sigues explorando y encuentras un viejo arbol con inscripciones talladas.";
      currentStep = 7;
    }
  } else if (currentStep === 4) {
    if (option === 1) {
      storyElement.textContent = "Decides compartir tus sentimientos con tu madre...";
      resultElement.textContent = "Tu madre te anima a seguir tus imaginaciones y tomar decisiones basadas en tu pasion.";
      emotions.ana = 'motivada';
      emotions.luis = 'conmovido';
      currentStep = 8;
    } else if (option === 2) {
      storyElement.textContent = "Decides preguntarle a tu madre sobre el origen del diario...";
      resultElement.textContent = "Tu madre revela una historia sorprendente sobre el origen del diario.";
      currentStep = 9;
    }
  } else if (currentStep === 5) {
    if (option === 1) {
      storyElement.textContent = "Decides seguir investigando los documentos antiguos...";
      resultElement.textContent = "Encuentras un mapa antiguo que te lleva a un lugar especial.";
      currentStep = 10;
    } else if (option === 2) {
      storyElement.textContent = "Decides compartir los documentos con tu madre...";
      resultElement.textContent = "Tu madre esta emocionada por los descubrimientos y te agradece por compartirlos.";
      emotions.ana = 'entusiasmada';
      emotions.luis = 'conmovido';
      currentStep = 11;
    }
  } else if (currentStep === 6) {
    if (option === 1) {
      storyElement.textContent = "Decides usar el objeto para explorar tus propias emociones...";
      resultElement.textContent = "Descubres una conexión profunda con tus propios sentimientos.";
      emotions.ana = 'conectada';
      emotions.luis = 'reflexivo';
      currentStep = 12;
    } else if (option === 2) {
      storyElement.textContent = "Decides investigar mas sobre el objeto y sus propiedades...";
      resultElement.textContent = "Descubres que el objeto tiene poderes emocionales asombrosos.";
      currentStep = 13;
    }
  } else if (currentStep === 7) {
    if (option === 1) {
      storyElement.textContent = "Decides estudiar los símbolos tallados en el arbol...";
      resultElement.textContent = "Los símbolos representan diferentes emociones y su impacto en la vida.";
      currentStep = 14;
    } else if (option === 2) {
      storyElement.textContent = "Decides compartir el descubrimiento del arbol con Luis...";
      resultElement.textContent = "Luis se siente fascinado por los simbolos y su significado.";
      emotions.ana = 'compartiendo';
      emotions.luis = 'fascinado';
      currentStep = 15;
    }
  } else if (currentStep === 8) {
    if (option === 1) {
      storyElement.textContent = "Decides escribir tus propios pensamientos y emociones en el diario...";
      resultElement.textContent = "Te sientes aliviada al expresar tus sentimientos y encontrar claridad.";
      emotions.ana = 'aliviada';
      emotions.luis = 'inspirado';
      currentStep = 16;
    } else if (option === 2) {
      storyElement.textContent = "Decides compartir tualucinacion con tu madre...";
      resultElement.textContent = "Tu madre te apoya incondicionalmente en la busqueda de tus metas.";
      currentStep = 17;
    }
  } else if (currentStep === 9) {
    if (option === 1) {
      storyElement.textContent = "Decides investigar mas sobre el origen del diario...";
      resultElement.textContent = "Descubres una conexion sorprendente entre el diario y tu propia vida.";
      currentStep = 18;
    } else if (option === 2) {
      storyElement.textContent = "Decides compartir tus descubrimientos con tu abuela...";
      resultElement.textContent = "Tu abuela está emocionada de escuchar tu investigación y te comparte más historias familiares.";
      emotions.ana = 'emocionada';
      emotions.luis = 'interesado';
      currentStep = 19;
    }
  } else if (currentStep === 10) {
    if (option === 1) {
      storyElement.textContent = "Decides seguir el mapa antiguo hasta el lugar especial...";
      resultElement.textContent = "En ese lugar, encuentras una revelación sobre tu propio propósito en la vida.";
      emotions.ana = 'iluminada';
      emotions.luis = 'asombrado';
      currentStep = 20;
    } else if (option === 2) {
      storyElement.textContent = "Decides compartir el mapa con Luis...";
      resultElement.textContent = "Luis se muestra entusiasmado y te sigue en la busqueda del lugar especial.";
      currentStep = 21;
    }
  } else if (currentStep === 11) {
    if (option === 1) {
      storyElement.textContent = "Decides analizar los documentos con mas detenimiento...";
      resultElement.textContent = "Descubres una revelacion sobre el poder del diario en la sanacion emocional.";
      currentStep = 22;
    } else if (option === 2) {
      storyElement.textContent = "Decides compartir tus descubrimientos con tus seres queridos...";
      resultElement.textContent = "Todos se sienten emocionados por los descubrimientos y te apoyan en tu busqueda personal.";
      emotions.ana = 'apoyada';
      emotions.luis = 'entusiasmado';
      currentStep = 23;
    }
  } else if (currentStep === 12) {
    if (option === 1) {
      storyElement.textContent = "Decides compartir tu experiencia con Luis...";
      resultElement.textContent = "Luis se emociona al escuchar tu experiencia y también desea explorar sus propias emociones.";
      emotions.ana = 'compartiendo';
      emotions.luis = 'curioso';
      currentStep = 24;
    } else if (option === 2) {
      storyElement.textContent = "Decides utilizar el objeto para ayudar a otras personas...";
      resultElement.textContent = "Descubres que el objeto puede ayudar a las personas a comprender y gestionar sus emociones.";
      currentStep = 25;
    }
  } else if (currentStep === 13) {
    if (option === 1) {
      storyElement.textContent = "Decides experimentar con el objeto y tus propias emociones...";
      resultElement.textContent = "Descubres como equilibrar y regular tus emociones de manera saludable.";
      emotions.ana = 'equilibrada';
      emotions.luis = 'reflexivo';
      currentStep = 26;
    } else if (option === 2) {
      storyElement.textContent = "Decides compartir tus hallazgos con Luis...";
      resultElement.textContent = "Luis se emociona y juntos exploran cómo utilizar el objeto para el bienestar emocional de todos.";
      currentStep = 27;
    }
  } else if (currentStep === 14) {
    if (option === 1) {
      storyElement.textContent = "Decides estudiar más sobre los símbolos y su significado...";
      resultElement.textContent = "Descubres una conexión profunda entre los símbolos y tus propias experiencias emocionales.";
      currentStep = 28;
    } else if (option === 2) {
      storyElement.textContent = "Decides compartir tus descubrimientos con Luis...";
      resultElement.textContent = "Luis se siente inspirado y juntos exploran cómo aplicar los símbolos en sus vidas.";
      emotions.ana = 'inspirada';
      emotions.luis = 'motivado';
      currentStep = 29;
    }
  } else if (currentStep === 15) {
    if (option === 1) {
      storyElement.textContent = "Decides investigar más sobre los símbolos tallados en el arbol...";
      resultElement.textContent = "Descubres que los símbolos representan las etapas de la vida y la importancia de las emociones en cada una.";
      currentStep = 30;
    } else if (option === 2) {
      storyElement.textContent = "Decides compartir tus descubrimientos con tus seres queridos...";
      resultElement.textContent = "Todos se emocionan por los simbolos y juntos reflexionan sobre sus propias emociones.";
      emotions.ana = 'emocionada';
      emotions.luis = 'reflexivo';
      currentStep = 31;
    }
  } else if (currentStep === 16) {
    if (option === 1) {
      storyElement.textContent = "Decides leer en voz alta algunos pasajes del diario a tus seres queridos...";
      resultElement.textContent = "Todos se conmueven y comparten sus propias experiencias emocionales.";
      emotions.ana = 'conmovida';
      emotions.luis = 'emocionado';
      currentStep = 32;
    } else if (option === 2) {
      storyElement.textContent = "Decides guardar tus pensamientos y emociones en el diario para ti misma...";
      resultElement.textContent = "Te sientes tranquila y fortalecida por tu conexion con tus antepasados.";
      currentStep = 33;
    }
  } else if (currentStep === 17) {
    if (option === 1) {
      storyElement.textContent = "Decides hablar con tu madre sobre tus metas y sueños...";
      resultElement.textContent = "Tu madre te alienta a perseguir tus pasiones y encontrar tu propio camino.";
      emotions.ana = 'alentada';
      emotions.luis = 'motivado';
      currentStep = 34;
    } else if (option === 2) {
      storyElement.textContent = "Decides compartir tus alucinacion con tus seres queridos...";
      resultElement.textContent = "Todos te apoyan en tus metas y te brindan palabras de aliento.";
      currentStep = 35;
    }
  } else if (currentStep === 18) {
    if (option === 1) {
      storyElement.textContent = "Decides investigar más sobre la conexion entre el diario y tu propia vida...";
      resultElement.textContent = "Descubres que el diario contiene lecciones y consejos para enfrentar tus propios desafíos.";
      currentStep = 36;
    } else if (option === 2) {
      storyElement.textContent = "Decides compartir tus descubrimientos con tu abuela...";
      resultElement.textContent = "Tu abuela está emocionada de escuchar tus hallazgos y te comparte más sabiduría de vida.";
      emotions.ana = 'sabia';
      emotions.luis = 'interesado';
      currentStep = 37;
    }
  } else if (currentStep === 19) {
    if (option === 1) {
      storyElement.textContent = "Decides explorar más historias familiares y su conexión con el diario...";
      resultElement.textContent = "Descubres que el diario es un testimonio de la fuerza y resiliencia de tu familia.";
      currentStep = 38;
    } else if (option === 2) {
      storyElement.textContent = "Decides compartir tus descubrimientos con Ana...";
      resultElement.textContent = "Ana se emociona al escuchar tus hallazgos y juntos reflexionan sobre su legado emocional.";
      emotions.ana = 'emocionada';
      emotions.luis = 'reflexivo';
      currentStep = 39;
    }
  } else if (currentStep === 20) {
    if (option === 1) {
      storyElement.textContent = "Decides abrazar tu propósito y llevarlo contigo en tu camino...";
      resultElement.textContent = "Te sientes empoderada y lista para enfrentar los desafíos que vendrán.";
      emotions.ana = 'empoderada';
      emotions.luis = 'inspirado';
      currentStep = 40;
    } else if (option === 2) {
      storyElement.textContent = "Decides compartir la revelación con Luis...";
      resultElement.textContent = "Luis se siente inspirado y también encuentra su propio propósito en el lugar especial.";
      currentStep = 41;
    }
  } else if (currentStep === 21) {
    if (option === 1) {
      storyElement.textContent = "Decides explorar el lugar especial junto a Luis...";
      resultElement.textContent = "Ambos encuentran respuestas y se sienten más conectados con su propósito en la vida.";
      emotions.ana = 'conectada';
      emotions.luis = 'realizado';
      currentStep = 42;
    } else if (option === 2) {
      storyElement.textContent = "Decides compartir el mapa con tus seres queridos...";
      resultElement.textContent = "Todos se emocionan por el mapa y juntos reflexionan sobre su propio proposito en la vida.";
      emotions.ana = 'emocionada';
      emotions.luis = 'reflexivo';
      currentStep = 43;
    }
  } else if (currentStep === 22) {
    if (option === 1) {
      storyElement.textContent = "Decides explorar cómo utilizar el diario para ayudar a otros...";
      resultElement.textContent = "Descubres que el diario puede ser una herramienta poderosa para la sanación emocional de las personas.";
      currentStep = 44;
    } else if (option === 2) {
      storyElement.textContent = "Decides compartir tus descubrimientos con tus seres queridos...";
      resultElement.textContent = "Todos se sienten emocionados por los descubrimientos y juntos reflexionan sobre su propio bienestar emocional.";
      emotions.ana = 'emocionada';
      emotions.luis = 'reflexivo';
      currentStep = 45;
    }
  } else if (currentStep === 23) {
    if (option === 1) {
      storyElement.textContent = "Decides compartir tus experiencias emocionales con Luis...";
      resultElement.textContent = "Luis se siente inspirado y juntos exploran cómo utilizar el diario para el bienestar emocional de todos.";
      emotions.ana = 'inspirada';
      emotions.luis = 'motivado';
      currentStep = 46;
    } else if (option === 2) {
      storyElement.textContent = "Decides utilizar el diario como una herramienta personal para tu propio crecimiento...";
      resultElement.textContent = "Te sientes empoderado al encontrar formas de gestionar y comprender mejor tus emociones.";
      currentStep = 47;
    }
  } else if (currentStep === 24) {
    if (option === 1) {
      storyElement.textContent = "Decides explorar tus emociones juntos y compartir tus experiencias...";
      resultElement.textContent = "Ambos se sienten más conectados y encuentran formas saludables de expresar y gestionar sus emociones.";
      emotions.ana = 'conectada';
      emotions.luis = 'compartiendo';
      currentStep = 48;luis
    } else if (option === 2) {
      storyElement.textContent = "Decides utilizar el diario para explorar tus propias emociones de manera individual...";
      resultElement.textContent = "Te sientes fortalecido al comprender y aceptar tus emociones personales.";
      currentStep = 49;
    }
  } else if (currentStep === 25) {
    if (option === 1) {
      storyElement.textContent = "Decides investigar cómo utilizar el objeto para ayudar a la humanidad...";
      resultElement.textContent = "Descubres que el objeto tiene un propósito más profundo y decides preservarlo para futuras generaciones.";
      currentStep = 50;
    } else if (option === 2) {
      storyElement.textContent = "Decides compartir tus hallazgos con tus seres queridos...";
      resultElement.textContent = "Todos se sienten conmovidos y juntos reflexionan sobre la importancia de cuidar nuestra salud emocional.";
      emotions.ana = 'conmovida';
      emotions.luis = 'reflexivo';
      currentStep = 51;
    }
  } else if (currentStep === 26) {
    if (option === 1) {
      storyElement.textContent = "Decides compartir tus experiencias con otras personas...";
      resultElement.textContent = "Ayudas a otros a comprender y gestionar sus emociones de manera más saludable.";
      emotions.ana = 'ayudando';
      emotions.luis = 'apoyando';
      currentStep = 52;
    } else if (option === 2) {
      storyElement.textContent = "Decides utilizar tus conocimientos para escribir un libro sobre la gestion emocional...";
      resultElement.textContent = "Tu libro se convierte en un exito y llega a muchas personas que se benefician de tus educacion.";
      currentStep = 53;
    }
  } else if (currentStep === 27) {
    if (option === 1) {
      storyElement.textContent = "Decides organizar talleres y conferencias sobre el bienestar emocional...";
      resultElement.textContent = "Ayudas a muchas personas a comprender y gestionar sus emociones de manera más efectiva.";
      emotions.ana = 'ayudando';
      emotions.luis = 'apoyando';
      currentStep = 54;
    } else if (option === 2) {
      storyElement.textContent = "Decides utilizar tus conocimientos para crear una aplicacion de bienestar emocional...";
      resultElement.textContent = "Tu aplicación se vuelve popular y llega a personas de todo el mundo que encuentran apoyo en ella.";
      currentStep = 55;
    }
  } else if (currentStep === 28) {
    if (option === 1) {
      storyElement.textContent = "Decides escribir un libro sobre los símbolos y su significado...";
      resultElement.textContent = "Tu libro se convierte en un éxito y ayuda a muchas personas a comprender y aplicar los símbolos en sus vidas.";
      emotions.ana = 'inspirada';
      emotions.luis = 'motivado';
      currentStep = 56;
    } else if (option === 2) {
      storyElement.textContent = "Decides compartir tus descubrimientos en un blog o página web...";
      resultElement.textContent = "Muchas personas se sienten inspiradas y encuentran formas de aplicar los símbolos en su día a día.";
      currentStep = 57;
    }
  } else if (currentStep === 29) {
    if (option === 1) {
      storyElement.textContent = "Decides organizar talleres y sesiones de coaching sobre el crecimiento personal...";
      resultElement.textContent = "Ayudas a muchas personas a encontrar su propia motivación y propósito en la vida.";
      emotions.ana = 'ayudando';
      emotions.luis = 'apoyando';
      currentStep = 58;
    } else if (option === 2) {
      storyElement.textContent = "Decides utilizar tus conocimientos para desarrollar una aplicación de crecimiento personal...";
      resultElement.textContent = "Tu aplicación se vuelve popular y guía a muchas personas en su viaje de autodescubrimiento.";
      currentStep = 59;
    }
  } else if (currentStep === 30) {
    if (option === 1) {
      storyElement.textContent = "Decides compartir tus descubrimientos en un libro sobre la conexión entre emociones y etapas de la vida...";
      resultElement.textContent = "Tu libro se convierte en una referencia y ayuda a muchas personas a comprender y aceptar sus emociones en cada etapa.";
      emotions.ana = 'inspirada';
      emotions.luis = 'motivado';
      currentStep = 60;
    } else if (option === 2) {
      storyElement.textContent = "Decides impartir conferencias y charlas sobre la importancia de las emociones en cada etapa de la vida...";
      resultElement.textContent = "Tus charlas inspiran a muchas personas a abrazar sus emociones y vivir una vida más auténtica.";
      currentStep = 61;
    }
  } else if (currentStep === 31) {
    if (option === 1) {
      storyElement.textContent = "Decides organizar un grupo de apoyo emocional para ayudar a las personas en momentos difíciles...";
      resultElement.textContent = "Ayudas a muchas personas a encontrar consuelo y fortaleza durante sus desafíos emocionales.";
      emotions.ana = 'ayudando';
      emotions.luis = 'apoyando';
      currentStep = 62;
    } else if (option === 2) {
      storyElement.textContent = "Decides utilizar tus conocimientos para desarrollar una aplicacion de apoyo emocional...";
      resultElement.textContent = "Tu aplicacion se convierte en una herramienta invaluable para muchas personas que buscan apoyo emocional.";
      currentStep = 63;
    }
  } else if (currentStep === 32) {
    if (option === 1) {
      storyElement.textContent = "Decides compartir tus conocimientos y experiencias a traves de sesiones de coaching...";
      resultElement.textContent = "Ayudas a muchas personas a superar sus bloqueos emocionales y alcanzar su pleno potencial.";
      emotions.ana = 'ayudando';
      emotions.luis = 'apoyando';
      currentStep = 64;
    } else if (option === 2) {
      storyElement.textContent = "Decides escribir un libro sobre el poder de la transformación emocional...";
      resultElement.textContent = "Tu libro inspira a muchas personas a creer en su capacidad de cambio y transformación.";
      currentStep = 65;
    }
  } else if (currentStep === 33) {
    if (option === 1) {
      storyElement.textContent = "Decides explorar cómo utilizar el diario para sanar emociones pasadas...";
      resultElement.textContent = "Descubres que el diario puede ser una herramienta poderosa para liberar emociones negativas y encontrar sanacion.";
      currentStep = 66;
    } else if (option === 2) {
      storyElement.textContent = "Decides compartir tus descubrimientos con tus seres queridos...";
      resultElement.textContent = "Todos se sienten emocionados por los descubrimientos y juntos reflexionan sobre su propio proceso de sanacion emocional.";
      emotions.ana = 'emocionada';
      emotions.luis = 'reflexivo';
      currentStep = 67;
    }
  } else if (currentStep === 34) {
    if (option === 1) {
      storyElement.textContent = "Decides utilizar el diario como una guía para seguir tus sueños...";
      resultElement.textContent = "Encuentras fuerza en las palabras de tu bisabuela y te lanzas a perseguir tus pasiones.";
      emotions.ana = 'decidida';
      emotions.luis = 'motivado';
      currentStep = 68;
    } else if (option === 2) {
      storyElement.textContent = "Decides compartir tus descubrimientos con tus seres queridos...";
      resultElement.textContent = "Todos te apoyan en tus metas y te brindan palabras de aliento.";
      currentStep = 69;
    }
  } else if (currentStep === 35) {
    if (option === 1) {
      storyElement.textContent = "Decides compartir tus alucinacion con tu madre...";
      resultElement.textContent = "Tu madre te brinda su apoyo incondicional y te anima a seguir tus sueños.";
      emotions.ana = 'apoyada';
      emotions.isabel = 'orgullosa';
      currentStep = 70;
    } else if (option === 2) {
      storyElement.textContent = "Decides seguir tu intuicion y perseguir tus sueños en silencio...";
      resultElement.textContent = "Encuentras confianza en ti mismo y te sientes motivado para hacer realidad tus sueños.";
      currentStep = 71;
    }
  } else if (currentStep === 36) {
    if (option === 1) {
      storyElement.textContent = "Decides compartir tus alucinacion con tu abuela...";
      resultElement.textContent = "Tu abuela comparte su sabiduría y te brinda valiosos consejos para perseguir tus sueños.";
      emotions.ana = 'inspirada';
      emotions.carmen = 'sabia';
      currentStep = 72;
    } else if (option === 2) {
      storyElement.textContent = "Decides confiar en tu instinto y seguir adelante con tus sueños...";
      resultElement.textContent = "Encuentras fuerza en ti mismo y te sientes determinado a alcanzar tus metas.";
      currentStep = 73;
    }
  } else if (currentStep === 37) {
    if (option === 1) {
      storyElement.textContent = "Decides reflexionar sobre tus sueños y metas...";
      resultElement.textContent = "Encuentras claridad y determinación para perseguir tus metas con pasión y perseverancia.";
      emotions.ana = 'decidida';
      emotions.luis = 'motivado';
      currentStep = 74;
    } else if (option === 2) {
      storyElement.textContent = "Decides compartir tus reflexiones con tus seres queridos...";
      resultElement.textContent = "Todos se sienten inspirados por tus palabras y te apoyan en tu búsqueda de tus sueños.";
      currentStep = 75;
    }
  } else if (currentStep === 38) {
    if (option === 1) {
      storyElement.textContent = "Decides compartir tus sueños con tu madre e abuela...";
      resultElement.textContent = "Ambas te brindan su apoyo incondicional y te animan a seguir tus sueños.";
      emotions.ana = 'apoyada';
      emotions.isabel = 'orgullosa';
      emotions.carmen = 'sabia';
      currentStep = 76;
    } else if (option === 2) {
      storyElement.textContent = "Decides confiar en tu intuición y perseguir tus sueños en silencio...";
      resultElement.textContent = "Encuentras confianza en ti mismo y te sientes motivado para hacer realidad tus sueños.";
      currentStep = 77;
    }
  } else if (currentStep === 39) {
    if (option === 1) {
      storyElement.textContent = "Decides reflexionar sobre tus sueños y metas junto a Luis...";
      resultElement.textContent = "Ambos encuentran la motivación y la claridad necesarias para perseguir sus metas con determinación.";
      emotions.ana = 'decidida';
      emotions.luis = 'motivado';
      currentStep = 78;
    } else if (option === 2) {
      storyElement.textContent = "Decides compartir tus reflexiones con tus seres queridos...";
      resultElement.textContent = "Todos se sienten inspirados por sus palabras y les brindan su apoyo en la búsqueda de sus sueños.";
      currentStep = 79;
    }
  } else if (currentStep === 40) {
    if (option === 1) {
      storyElement.textContent = "Decides dejar el diario enterrado como un tesoro de tu familia...";
      resultElement.textContent = "Sientes que el diario debe seguir siendo un legado para las generaciones futuras de tu familia.";
      emotions.ana = 'respetuosa';
      currentStep = 80;
    } else if (option === 2) {
      storyElement.textContent = "Decides compartir el diario con un museo o institución cultural...";
      resultElement.textContent = "El diario se convierte en una valiosa pieza de historia que inspira a muchas personas.";
      currentStep = 81;
    }
  } else if (currentStep === 41) {
    if (option === 1) {
      storyElement.textContent = "Decides dejar el diario enterrado como un tesoro de tu familia...";
      resultElement.textContent = "Sientes que el diario debe seguir siendo un legado para las generaciones futuras de tu familia.";
      emotions.ana = 'respetuosa';
      emotions.luis = 'respetuoso';
      currentStep = 82;
    } else if (option === 2) {
      storyElement.textContent = "Decides compartir el diario con un museo o institución cultural...";
      resultElement.textContent = "El diario se convierte en una valiosa pieza de historia que inspira a muchas personas.";
      currentStep = 83;
    }
  } else if (currentStep === 42) {
    if (option === 1) {
      storyElement.textContent = "Decides investigar más sobre los símbolos y su significado en tu tiempo libre...";
      resultElement.textContent = "Encuentras una gran riqueza de conocimiento y profundizas en tu conexion con los símbolos.";
      emotions.ana = 'conectada';
      emotions.luis = 'curioso';
      currentStep = 84;
    } else if (option === 2) {
      storyElement.textContent = "Decides compartir tus descubrimientos con tus seres queridos y explorar juntos su significado...";
      resultElement.textContent = "Todos se sienten emocionados por los descubrimientos y juntos reflexionan sobre su propio viaje simbolico.";
      emotions.ana = 'emocionada';
      emotions.luis = 'reflexivo';
      currentStep = 85;
    }
  } else if (currentStep === 43) {
    if (option === 1) {
      storyElement.textContent = "Decides investigar más sobre los símbolos y su significado en tu tiempo libre...";
      resultElement.textContent = "Encuentras una gran riqueza de conocimiento y profundizas en tu conexion con los símbolos.";
      emotions.ana = 'conectada';
      emotions.luis = 'curioso';
      currentStep = 86;
    } else if (option === 2) {
      storyElement.textContent = "Decides compartir tus descubrimientos con tus seres queridos y explorar juntos su significado...";
      resultElement.textContent = "Todos se sienten emocionados por los descubrimientos y juntos reflexionan sobre su propio viaje simbolico.";
      emotions.ana = 'emocionada';
      emotions.luis = 'reflexivo';
      currentStep = 87;
    }
  } else if (currentStep === 44) {
    if (option === 1) {
      storyElement.textContent = "La existencia del diario amplía su comprensión sobre el origen y la regulación de las emociones humanas...";
      resultElement.textContent = "Ambos sienten una conexion más profunda con sus propias emociones y las de los demás.";
      emotions.ana = 'conectada';
      emotions.luis = 'reflexivo';
      currentStep = 88;
    } else if (option === 2) {
      storyElement.textContent = "La existencia del diario despierta su curiosidad y los lleva a investigar mas sobre la naturaleza de las emociones...";
      resultElement.textContent = "Ambos amplían su conocimiento y comprension sobre la complejidad y diversidad de las emociones humanas.";
      currentStep = 89;
    }
  } else if (currentStep === 45) {
    if (option === 1) {
      storyElement.textContent = "La existencia del diario amplía su comprensión sobre el origen y la regulación de las emociones humanas...";
      resultElement.textContent = "Ambos sienten una conexion más profunda con sus propias emociones y las de los demás.";
      emotions.ana = 'conectada';
      emotions.luis = 'reflexivo';
      currentStep = 90;
    } else if (option === 2) {
      storyElement.textContent = "La existencia del diario despierta su curiosidad y los lleva a investigar mas sobre la naturaleza de las emociones...";
      resultElement.textContent = "Ambos amplían su conocimiento y comprension sobre la complejidad y diversidad de las emociones humanas.";
      currentStep = 91;
    }
  } else if (currentStep === 46) {
    if (option === 1) {
      storyElement.textContent = "Ana y Luis aprenden la importancia de conectarse con su historia emocional y reconocer la fuerza y determinación que se transmite a través de las generaciones...";
      resultElement.textContent = "Ambos sienten una conexion más profunda con sus antepasados y su propósito en la vida.";
      emotions.ana = 'conectada';
      emotions.luis = 'reflexivo';
      currentStep = 92;
    } else if (option === 2) {
      storyElement.textContent = "Ana y Luis aprenden a honrar la historia emocional de su familia y a usarla como guía en sus propias vidas...";
      resultElement.textContent = "Ambos se sienten inspirados para seguir adelante con determinación y confianza en sí mismos.";
      emotions.ana = 'inspirada';
      emotions.luis = 'motivado';
      currentStep = 93;
    }
  } else if (currentStep === 47) {
    if (option === 1) {
      storyElement.textContent = "Ana y Luis aprenden la importancia de conectarse con su historia emocional y reconocer la fuerza y determinación que se transmite a través de las generaciones...";
      resultElement.textContent = "Ambos sienten una conexion más profunda con sus antepasados y su propósito en la vida.";
      emotions.ana = 'conectada';
      emotions.luis = 'reflexivo';
      currentStep = 94;
    } else if (option === 2) {
      storyElement.textContent = "Ana y Luis aprenden a honrar la historia emocional de su familia y a usarla como guía en sus propias vidas...";
      resultElement.textContent = "Ambos se sienten inspirados para seguir adelante con determinación y confianza en sí mismos.";
      emotions.ana = 'inspirada';
      emotions.luis = 'motivado';
      currentStep = 95;
    }
  } else if (currentStep === 48) {
    storyElement.textContent = "Ana se siente renovada y lista para enfrentar su futuro. Se da cuenta de que sus antepasados han dejado un legado emocional en su familia que ella puede utilizar como guía en su propia vida. Ana agradece a su madre y a su abuela por compartir el diario con ella y por ayudarla a conectarse con su historia emocional. Con una sensación de propósito y determinación, Ana regresa a casa lista para enfrentar lo que venga en su camino.";
    resultElement.textContent = "¡Felicidades! Has llegado al final de la historia. Esperamos que hayas disfrutado de esta experiencia.";
    currentStep = 96;
  }
  if (option === 3) {
    storyElement.textContent = "Final tragico...";
    resultElement.textContent = "A medida que Ana y Luis profundizaban en la investigacion del Artefacto, descubrieron que existia una leyenda ancestral que hablaba de los poderes y peligros que encerraba. Segun la leyenda, el Artefacto habia sido creado por una antigua civilizacion como una forma de controlar y manipular las emociones de las personas. A pesar de los riesgos, Ana y Luis decidieron seguir adelante con su investigacion, convencidos de que podrian encontrar una manera de utilizar el Artefacto de forma responsable y beneficiosa para la humanidad. Sin embargo, a medida que se adentraban en los secretos del Artefacto, comenzaron a experimentar un creciente desequilibrio emocional. Las emociones se volvieron intensas y descontroladas. Ana se encontraba atrapada en un torbellino de tristeza y angustia, mientras que Luis era consumido por la ira y la desesperacion. A pesar de sus esfuerzos por entender y controlar las emociones desatadas por el Artefacto, parecia que estaban perdiendo la batalla. La situacion se volvio insostenible. Ana y Luis se vieron obligados a enfrentar la realidad de que el Artefacto era demasiado peligroso para ser manipulado por ellos o cualquier otra persona. En un acto de sacrificio, decidieron sellar el Artefacto en un lugar secreto, lejos del alcance de la humanidad. Con el corazon pesado, Ana y Luis se despidieron del Artefacto y de su busqueda de controlar las emociones. Aprendieron una valiosa leccion sobre los limites de la influencia humana sobre algo tan profundo y complejo como las emociones. Aunque su historia termino en tragedia, Ana y Luis dejaron un legado importante. Compartieron su experiencia y conocimiento con otros, advirtiendoles de los peligros de intentar controlar las emociones a traves de artefactos antiguos o cualquier otra forma de manipulacion. La historia del Artefacto de las Emociones se convirtio en un recordatorio de la importancia de aceptar y comprender nuestras emociones, permitiendo que fluyan de manera natural y encontrando formas saludables de lidiar con ellas. Ana y Luis, a pesar de su desafortunado destino, dejaron una huella en la historia de la comprension emocional y la responsabilidad humana....";
    }
    

  updateEmotions();
  updateOptions();
};

// Actualiza los elementos de las emociones
const updateEmotions = () => {
  emotionAnaElement.textContent = emotions.ana;
  emotionIsabelElement.textContent = emotions.isabel;
  emotionCarmenElement.textContent = emotions.carmen;
  emotionLuisElement.textContent = emotions.luis;
};

// Actualiza los elementos de las opciones
const updateOptions = () => {
  if (currentStep >= 49) {
    option1Element.style.display = 'none';
    option2Element.style.display = 'none';
    restartButton.style.display = 'inline-block';
  } else {
    const { options } = story[currentStep];
    option1Element.textContent = options[0].text;
    option2Element.textContent = options[1].text;
  }
};

// Reinicia la historia
const restartStory = () => {
  currentStep = 1;
  emotions = {
    ana: '',
    isabel: '',
    carmen: '',
    luis: '',
  };

  updateEmotions();
  updateOptions();
  storyElement.textContent = story[currentStep].text;
  resultElement.textContent = '';
  restartButton.style.display = 'none';
};

// Event listener para las opciones
option1Element.addEventListener('click', () => selectOption(1));
option2Element.addEventListener('click', () => selectOption(2));

// Event listener para reiniciar la historia
restartButton.addEventListener('click', restartStory);

// Inicializar la historia
storyElement.textContent = story[currentStep].text;
updateOptions();

//en verdad no soy feliz 