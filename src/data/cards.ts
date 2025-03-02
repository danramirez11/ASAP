const Cards = [
    {
      "nombre": "Adivina la Canción",
      "reto": "Tararea 'We Will Rock You' sin usar palabras. Tu equipo debe adivinar la canción.",
      "categoria": "Música",
      "puntos": 100,
      "grupal": true
    },
    {
      "nombre": "Mímica de Animal",
      "reto": "Imita a un pingüino caminando. Tu equipo debe adivinar el animal.",
      "categoria": "Actuación",
      "puntos": 100,
      "grupal": false
    },
    {
      "nombre": "Palabra Larga",
      "reto": "Di una palabra con más de 10 letras en menos de 5 segundos.",
      "categoria": "Lenguaje",
      "puntos": 100,
      "grupal": false
    },
    {
      "nombre": "Calculadora Humana",
      "reto": "Resuelve mentalmente: 18 x 6 - 12.",
      "categoria": "Conocimiento",
      "puntos": 100,
      "grupal": false
    },
    {
      "nombre": "Crea un Refrán",
      "reto": "Inventa un refrán que rime y tenga sentido.",
      "categoria": "Lenguaje",
      "puntos": 100,
      "grupal": false
    },
    {
      "nombre": "Baile Congelado",
      "reto": "Baila al ritmo de una canción y congélate cuando alguien diga 'stop'.",
      "categoria": "Actuación",
      "puntos": 100,
      "grupal": true
    },
    {
      "nombre": "Objeto Secreto",
      "reto": "Describe un paraguas sin decir 'lluvia', 'abrir' o 'cerrar'.",
      "categoria": "Lenguaje",
      "puntos": 100,
      "grupal": false
    },
    {
      "nombre": "Canta sin Vocales",
      "reto": "Canta un fragmento de una canción famosa sin usar vocales.",
      "categoria": "Música",
      "puntos": 100,
      "grupal": false
    },
    {
      "nombre": "Memoria Rápida",
      "reto": "Escucha 5 palabras y repítelas en el mismo orden.",
      "categoria": "Conocimiento",
      "puntos": 100,
      "grupal": false
    },
    {
      "nombre": "Dibujo con la Mano Izquierda",
      "reto": "Si eres diestro, dibuja un perro con la mano izquierda. Si eres zurdo, usa la derecha.",
      "categoria": "Creatividad",
      "puntos": 100,
      "grupal": false
    },
    {
      "nombre": "Cambia una Letra",
      "reto": "Cambia una letra de la palabra 'casa' para formar otra palabra.",
      "categoria": "Lenguaje",
      "puntos": 100,
      "grupal": false
    },
    {
      "nombre": "Sinónimos en Cadena",
      "reto": "Di un sinónimo de 'grande', luego uno de esa palabra, y así por 3 rondas.",
      "categoria": "Lenguaje",
      "puntos": 100,
      "grupal": true
    },
    {
      "nombre": "Dibujo de Ojos Cerrados",
      "reto": "Dibuja una bicicleta sin abrir los ojos.",
      "categoria": "Creatividad",
      "puntos": 100,
      "grupal": false
    },
    {
      "nombre": "Cuenta un Cuento Corto",
      "reto": "Inventa una historia de 3 oraciones usando las palabras 'estrella' y 'gato'.",
      "categoria": "Lenguaje",
      "puntos": 100,
      "grupal": false
    },
    {
      "nombre": "Danza en Silencio",
      "reto": "Baila una coreografía sin música y haz que alguien adivine la canción.",
      "categoria": "Actuación",
      "puntos": 100,
      "grupal": true
    },
    {
      "nombre": "Ordena la Frase",
      "reto": "Ordena esta frase desordenada: 'gusta jugar me acertijos resolver'.",
      "categoria": "Lenguaje",
      "puntos": 100,
      "grupal": false
    },
    {
      "nombre": "Matemáticas Relámpago",
      "reto": "Responde en 3 segundos: ¿Cuánto es 144 dividido por 12?",
      "categoria": "Conocimiento",
      "puntos": 100,
      "grupal": false
    },
    {
      "nombre": "Dibujo por Descripción",
      "reto": "Tu compañero describe un objeto y debes dibujarlo sin saber qué es.",
      "categoria": "Creatividad",
      "puntos": 100,
      "grupal": true
    },
    {
      "nombre": "Reto de Vocales",
      "reto": "Di una oración sin usar la letra 'e'.",
      "categoria": "Lenguaje",
      "puntos": 100,
      "grupal": false
    },
    {
      "nombre": "Canta como un Robot",
      "reto": "Canta cualquier canción imitando la voz de un robot.",
      "categoria": "Música",
      "puntos": 100,
      "grupal": true
    },
    {
      "nombre": "Adivina la Película",
      "reto": "Tu equipo debe adivinar la película que representas en mímica.",
      "categoria": "Actuación",
      "puntos": 100,
      "grupal": true
    },
    {
      "nombre": "Construcción en Equipo",
      "reto": "Usa 10 objetos de la sala para construir una torre en equipo.",
      "categoria": "Creatividad",
      "puntos": 100,
      "grupal": true
    },
    {
      "nombre": "Teléfono Descompuesto",
      "reto": "Empieza con una frase y pásala en secreto. La última persona debe decirla en voz alta.",
      "categoria": "Lenguaje",
      "puntos": 100,
      "grupal": true
    },
    {
      "nombre": "Desafío de Sincronización",
      "reto": "Tu equipo debe dar 5 palmadas al mismo tiempo sin contarlas.",
      "categoria": "Actuación",
      "puntos": 100,
      "grupal": true
    },
    {
      "nombre": "Historia Colectiva",
      "reto": "Cada jugador agrega una frase a una historia sin repetir lo anterior.",
      "categoria": "Lenguaje",
      "puntos": 100,
      "grupal": true
    },
    {
      "nombre": "Dibujo por Turnos",
      "reto": "Cada miembro dibuja una parte de un personaje sin ver el dibujo anterior.",
      "categoria": "Creatividad",
      "puntos": 100,
      "grupal": true
    },
    {
      "nombre": "Pasa el Ritmo",
      "reto": "Golpea la mesa con un ritmo y los demás deben copiarlo exactamente.",
      "categoria": "Música",
      "puntos": 100,
      "grupal": true
    },
    {
      "nombre": "Banda de Sonidos",
      "reto": "Cada jugador imita un sonido de una escena. Al final deben adivinar la película.",
      "categoria": "Música",
      "puntos": 100,
      "grupal": true
    },
    {
      "nombre": "Palabras Encadenadas",
      "reto": "Cada jugador dice una palabra que empiece con la última letra de la palabra anterior.",
      "categoria": "Lenguaje",
      "puntos": 100,
      "grupal": true
    },
    {
          "nombre": "Adivina el Personaje",
          "reto": "Imita a un personaje famoso sin decir su nombre. Tu equipo debe adivinarlo.",
          "categoria": "Actuación",
          "puntos": 100,
          "grupal": true
        },
        {
          "nombre": "Refrán Perdido",
          "reto": "Di un refrán, pero cambia una palabra por otra absurda. El equipo debe corregirlo.",
          "categoria": "Lenguaje",
          "puntos": 100,
          "grupal": true
        },
        {
          "nombre": "Cálculo Mental",
          "reto": "Responde en 5 segundos: ¿Cuánto es 75 + 33 - 18?",
          "categoria": "Conocimiento",
          "puntos": 100,
          "grupal": false
        },
        {
          "nombre": "Encuentra el Objeto",
          "reto": "Busca y trae un objeto rojo en menos de 10 segundos.",
          "categoria": "Creatividad",
          "puntos": 100,
          "grupal": false
        },
        {
          "nombre": "Sombra Chinesca",
          "reto": "Haz una figura con tus manos en la sombra. Tu equipo debe adivinar qué es.",
          "categoria": "Creatividad",
          "puntos": 100,
          "grupal": true
        },
        {
          "nombre": "Palabras Rápidas",
          "reto": "Di 5 palabras que empiecen con 'P' en menos de 5 segundos.",
          "categoria": "Lenguaje",
          "puntos": 100,
          "grupal": false
        },
        {
          "nombre": "Cuento en Relevo",
          "reto": "Cada persona del equipo debe decir una palabra para formar una historia coherente.",
          "categoria": "Lenguaje",
          "puntos": 100,
          "grupal": true
        },
        {
          "nombre": "Encuentra las Diferencias",
          "reto": "Un jugador cambia algo de su apariencia. El equipo debe notar el cambio.",
          "categoria": "Conocimiento",
          "puntos": 100,
          "grupal": true
        },
        {
          "nombre": "Pregunta Trampa",
          "reto": "Responde rápido: ¿Qué pesa más, un kilo de plomo o un kilo de algodón?",
          "categoria": "Conocimiento",
          "puntos": 100,
          "grupal": false
        },
        {
          "nombre": "Crea un Rap",
          "reto": "Improvisa un rap sobre el tema que el equipo elija.",
          "categoria": "Música",
          "puntos": 100,
          "grupal": false
        },
        {
          "nombre": "Orden en el Caos",
          "reto": "Tu equipo debe ordenar alfabéticamente 5 palabras dadas en menos de 20 segundos.",
          "categoria": "Lenguaje",
          "puntos": 100,
          "grupal": true
        },
        {
          "nombre": "Desafío de Posturas",
          "reto": "Mantén el equilibrio en una sola pierna por 10 segundos.",
          "categoria": "Actuación",
          "puntos": 100,
          "grupal": false
        },
        {
          "nombre": "Dibujo en el Aire",
          "reto": "Dibuja una palabra en el aire con el dedo. Tu equipo debe adivinar qué es.",
          "categoria": "Creatividad",
          "puntos": 100,
          "grupal": true
        },
        {
          "nombre": "Sinónimos Express",
          "reto": "Di 3 sinónimos de la palabra 'rápido' en 5 segundos.",
          "categoria": "Lenguaje",
          "puntos": 100,
          "grupal": false
        },
        {
          "nombre": "El Sonido Misterioso",
          "reto": "Reproduce un sonido con la boca. Tu equipo debe adivinar qué representa.",
          "categoria": "Música",
          "puntos": 100,
          "grupal": true
        },
        {
          "nombre": "Actúa una Profesión",
          "reto": "Imita una profesión sin hablar. El equipo debe adivinarla.",
          "categoria": "Actuación",
          "puntos": 100,
          "grupal": true
        },
        {
          "nombre": "Adivina el Sabor",
          "reto": "Cierra los ojos y prueba un ingrediente. Adivina qué es.",
          "categoria": "Conocimiento",
          "puntos": 100,
          "grupal": false
        },
        {
          "nombre": "El Eco Humano",
          "reto": "Di una frase y tu equipo debe repetirla exactamente igual en coro.",
          "categoria": "Actuación",
          "puntos": 100,
          "grupal": true
        },
        {
          "nombre": "Encuentra la Mentira",
          "reto": "Di 2 verdades y una mentira. Tu equipo debe descubrir la mentira.",
          "categoria": "Conocimiento",
          "puntos": 100,
          "grupal": true
        },
        {
          "nombre": "Inventor de Palabras",
          "reto": "Crea una palabra nueva y dale una definición lógica.",
          "categoria": "Lenguaje",
          "puntos": 100,
          "grupal": false
        }
  ]
  
  
    export default Cards