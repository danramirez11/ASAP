export const cards = [
  // MÍMICA
  {
    "nombre": "Actuación extrema",
    "grupal": false,
    "categoria": "Mímica",
    "reto": "PLAYER1 elige una palabra y debe representarla mediante gestos, sin emitir sonidos ni señalar objetos. PLAYER2 debe adivinar la palabra antes de que acabe el tiempo.",
    "subcategoria": true,
    "condicion_victoria": "Si PLAYER2 acierta antes de que termine el minuto, gana. Si no, gana PLAYER1."
  },
  {
    "nombre": "Actuación extrema",
    "grupal": false,
    "categoria": "Mímica",
    "reto": "PLAYER2 elige una palabra y debe representarla mediante gestos, sin emitir sonidos ni señalar objetos. PLAYER1 debe adivinar la palabra antes de que acabe el tiempo.",
    "subcategoria": true,
    "condicion_victoria": "Si PLAYER1 acierta antes de que termine el minuto, gana. Si no, gana PLAYER2."
  },
  {
    "nombre": "Mímica en cadena",
    "grupal": true,
    "categoria": "Mímica",
    "reto": "Un jugador de cada equipo elige una palabra en secreto y debe representarla para su equipo sin hablar. Los compañeros intentan adivinar.",
    "subcategoria": true,
    "condicion_victoria": "Gana el equipo que adivine correctamente la palabra primero."
  },
  {
    "nombre": "Mímica en equipo",
    "grupal": true,
    "categoria": "Mímica",
    "reto": "Dos jugadores del mismo equipo deben representar simultáneamente la misma palabra sin hablar, mientras los demás intentan adivinar.",
    "subcategoria": true,
    "condicion_victoria": "Si el equipo acierta antes de que acabe el tiempo, gana."
  },
  // MOLDEO
  {
    "nombre": "Modela y adivina",
    "grupal": false,
    "categoria": "Moldeo",
    "reto": "PLAYER1 moldea una figura con plastilina sin hablar ni hacer señas, mientras PLAYER2 intenta adivinar qué es.",
    "subcategoria": true,
    "condicion_victoria": "Si PLAYER2 acierta antes de que termine el tiempo, gana. Si no, gana PLAYER1."
  },
  {
    "nombre": "Escultura oculta",
    "grupal": false,
    "categoria": "Moldeo",
    "reto": "PLAYER1 y PLAYER2 moldean una figura en secreto durante 30 segundos. Al finalizar, muestran sus esculturas e intentan adivinar la del otro.",
    "subcategoria": true,
    "condicion_victoria": "Gana quien adivine la escultura del otro primero."
  },
  {
    "nombre": "Creación cooperativa",
    "grupal": true,
    "categoria": "Moldeo",
    "reto": "Cada equipo elige un jugador que será el modelador. Este debe moldear una palabra secreta sin hablar, mientras los compañeros intentan adivinar.",
    "subcategoria": true,
    "condicion_victoria": "Gana el equipo que adivine primero la figura correctamente."
  },
  // DIBUJO
  {
    "nombre": "Pictionary exprés",
    "grupal": false,
    "categoria": "Dibujo",
    "reto": "PLAYER1 elige una palabra y la dibuja en un post-it sin escribir letras ni números. PLAYER2 debe adivinar qué representa el dibujo.",
    "subcategoria": true,
    "condicion_victoria": "Si PLAYER2 acierta antes de que termine el tiempo, gana. Si no, gana PLAYER1."
  },
  {
    "nombre": "Dibujo sin ver",
    "grupal": false,
    "categoria": "Dibujo",
    "reto": "PLAYER1 escoge una palabra y debe dibujarla en un post-it con los ojos cerrados. PLAYER2 intenta adivinar qué representa el dibujo.",
    "subcategoria": true,
    "condicion_victoria": "Si PLAYER2 acierta antes de que termine el tiempo, gana. Si no, gana PLAYER1."
  },
  // PALABRAS
  {
    "nombre": "Armando palabras",
    "grupal": false,
    "categoria": "Palabras",
    "reto": "PLAYER1 y PLAYER2 lanzan 3 dados cada uno. Deben formar una palabra con las letras obtenidas.",
    "subcategoria": true,
    "condicion_victoria": "Gana quien forme una palabra primero."
  },
  {
    "nombre": "Batalla de palabras",
    "grupal": true,
    "categoria": "Palabras",
    "reto": "Un jugador de cada equipo lanza 3 dados. Ambos equipos deben formar la mayor cantidad de palabras posibles con esas letras.",
    "subcategoria": true,
    "condicion_victoria": "Gana el equipo que forme más palabras antes de que termine el tiempo."
  }
];

export const subCategories = {
  "Palabras": [
    "Animales",
    "Nombres propios",
    "Países o ciudades",
    "Comida",
    "Cosas de la escuela",
    "Marcas famosas",
    "Partes del cuerpo",
    "Frutas y verduras",
    "Objetos tecnológicos",
    "Colores"
  ],
  "Moldeo": [
    "Comida chatarra",
    "Cosas de la casa",
    "Objetos de la oficina",
    "Animales",
    "Medios de transporte",
    "Personajes de cuentos",
    "Herramientas",
    "Electrodomésticos",
    "Monumentos famosos",
    "Juguetes"
  ],
  "Dibujo": [
    "Personajes de caricaturas clásicas",
    "Objetos de la cocina",
    "Animales",
    "Seres mitológicos",
    "Superhéroes",
    "Accesorios de moda",
    "Emojis",
    "Plantas y árboles",
    "Instrumentos musicales",
    "Símbolos famosos"
  ],
  "Mímica": [
    "Escenas de películas famosas",
    "Profesiones",
    "Deportes",
    "Instrumentos musicales",
    "Emociones",
    "Acciones diarias",
    "Personajes históricos",
    "Tipos de baile",
    "Eventos festivos",
    "Objetos cotidianos"
  ]
};
