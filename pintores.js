// Pinturas/Artistas

const obras = [
    {
      id: 1,
      title: "Homage to the square - 1964",
      category: "Albers",
      pintor: "Josef Albers",
      img: "./img/albers1.jpg",
      desc: `Nació el 10-03-1888 en Bottrop, Alemania, murió en New Have, EEUU el 25-03-76. Movimiento: Constructivismo, Arte Concreto, Arte Abstracto. Escuela de Bauhaus. Obras: 82. `,
    },
    {
      id: 2,
      title: "La persistencia de la memoria - 1931",
      category: "Dali",
      pintor: "Salvador Dali",
      img: "./img/dali1.jpg",
      desc: `Nació el 11-05-1904 en Figueres, España, murió el 23-01-89 en Figueres, España. Movimiento: Surrealismo, Realismo, Cubismo, Expresionismo Abstracto. Obras de arte: 1178`,
    },

    {
      id: 3,
      title: "El Beso - 1907 - 1908",
      category: "Klimt",
      pintor: "Gustav Klimt",
      img: "./img/klimt1.jpg",
      desc:`Nació el 14-07-1862 en Baumgarten, Austria, murió el 06-02-18, Viena, Autria, Movimiento: Simbolismo, Modernismo. Obras: 161 `,
    },
    {
      id: 4,
      title: "Mona Lisa - 1503",
      category: "Leonardo",
      pintor: "Leonardo da Vinci",
      img: "./img/leonardo1.jpg",
      desc: `Nació el 15-04-1452 en Italia, murió el 02-05-19 en Ambroise, Francia. Movimiento: Alto Renacimiento. Obras: 295 `,
    },
    {
      id: 5,
      title: "La Escuela de Atenas - 1510",
      category: "Rafael",
      pintor: "Rafael Sanzio",
      img: "./img/rafael1.jpg",
      desc: `Nació en 1483, en Urbino, Italia, murió en 1520 en Roma. Movimiento: Alto Renacimiento. Escuela: Umbrian School. Obras: 184. `,
    },
    {
      id: 6,
      title: "Water Lilies - 1917",
      category: "Monet",
      pintor: "Claude Monet",
      img: "./img/monet1.jpg",
      desc: `Nació el 14-11-1840 en Paris, Francia, murió en 05-12-26 en Giverny, Francia. Movimiento: Impresionismo, Realismo. Obras: 1166.`,
    },
    {
      id: 7,
      title: "Portrait of Dora Maar - 1937",
      category: "Picasso",
      pintor: "Pablo Picasso",
      img: "./img/picasso1.jpg",
      desc: `Nació el 25-10-1881 en Málaga, España, murión el 08-04-73 en Mougins, Francia. Movimiento: Cubismo, Poimpresionismo, Neoclasicismo, Surrealismo. Escuela: Ecole de Paris. Obras: 1169`,
    },
    {
      id: 8,
      title: "Las Señoritas de Avignon - 1907",
      category: "Picasso",
      pintor: "Picasso",
      img: "./img/picasso2.jpg",
      desc: `Nació el 25-10-1881 en Málaga, España, murión el 08-04-73 en Mougins, Francia. Movimiento: Cubismo, Poimpresionismo, Neoclasicismo, Surrealismo. Escuela: Ecole de Paris. Obras: 1169`,
    },
    {
      id: 9,
      title: "The Grand Canal, Venice - ",
      category: "John M. W. Turner",
      pintor: "Turner",
      img: "./img/turner1.jpg",
      desc: `Nació el 23-04-1775 en Londres, Inglaterra, murió el 10-12-81 en Londres. Movimiento: Romanticismo. Obras: 561`,
    },
    {
      id: 10,
      title: "La Noche Estrellada - 1889",
      category: "VanGogh",
      pintor: "Vincent Van Gogh",
      img: "./img/van-gogh1.jpg",
      desc: `Nació el 30-03-1853 en Zundert, Países Bajos, murió el 29-07-90 en Auvers-sur-Oise, Francia. Movimiento: Posimpresionismo. 1931.`,
    },
    {
      id: 11,
      title: "Los Girasoles -1888",
      category: "VanGogh",
      pintor: "Vincent Van Gogh",
      img: "./img/van-gogh2.jpg",
      desc: `Nació el 30-03-1853 en Zundert, Países Bajos, murió el 29-07-90 en Auvers-sur-Oise, Francia. Movimiento: Posimpresionismo. 1931.`,
    },
    {
      id: 12,
      title: "The Beautiful Confectioner - 1916",
      category: "Modigliani",
      pintor: "Modigliani",
      img: "./img/modigliani1.jpg",
      desc: `Nació el 12-07-84 en Livorno, Italia, murió el 12-07-20 en París. Movimiento: Expresionismo. Escuela: Ecole de Paris, La Ruche. Obras: 349`,
      },
      {
      id: 13,
      title: "Seated Female Nude - 1916",
      category: "Modigliani",
      pintor: "Modigliani",
      img: "./img/modigliani2.jpg",
      desc: `Nació el 12-07-84 en Livorno, Italia, murió el 12-07-20 en París. Movimiento: Expresionismo. Escuela: Ecole de Paris, La Ruche. Obras: 349`,
      },
      {
      id: 14,
      title: "Crystalline Still Life - 1923",
      category: "Dali",
      pintor: "Salvador Dali",
      img: "./img/dali2.jpg",
      desc: `Nació el 11-05-1904 en Figueres, España, murió el 23-01-89 en Figueres, España. Movimiento: Surrealismo, Realismo, Cubismo, Expresionismo Abstracto. Obras de arte: 1178`,
      },
      {
      id: 15,
      title: "Variant/Adobe: Familiar Front - 1948",
      category: "Albers",
      pintor: "Josef Albers",
      img: "./img/albers2.jpg",
      desc: `Nació el 10-03-1888 en Bottrop, Alemania, murió en New Have, EEUU el 25-03-76. Movimiento: Constructivismo, Arte concreto, Arte Abstracto. Escuela de Bauhaus. Obras: 82. `,
      },

      {
      id: 16,
      title: "Retrato de Adele Bloch-Bauer I - 1907",
      category: "Klimt",
      pintor: "Gustav Klimt",
      img: "./img/klimt2.jpg",
      desc:`Nació el 14-07-1862 en Baumgarten, Austria, murió el 06-02-18, Viena, Autria, Movimiento: Simbolismo, Modernismo. Obras: 161 `,
      },
      {
      id: 17,
      title: "The Virgin of the Rocks - 1503",
      category: "Leonardo",
      pintor: "Leonardo da Vinci",
      img: "./img/leonardo2.jpg",
      desc: `Nació el 15-04-1452 en Italia, murió el 02-05-19, Ambroise, Francis. Movimiento: Alto Renacimiento. Obras: 295 `,
      },
      {
      id: 18,
      title: "Las Gracias -1504",
      category: "Rafael",
      pintor: "Rafael Sanzio",
      img: "./img/rafael2.jpg",
        desc: `Nació en 1483, en Urbino, Italia, murió en 1520 en Roma. Movimiento: Alto Renacimiento. Escuela: Umbrian School. Obras: 184. `,
      },
      {
      id: 19,
      title: "Mujeres en el Jardín - 1866",
      category: "Monet",
      pintor: "Claude Monet",
      img: "./img/monet2.jpg",
      desc: `Nació el 14-11-1840 en Paris, Francia, murió en 05-12-26 en Giverny, Francia. Movimiento: Impresionismo, Realismo. Obras: 1166.`,
      },
      {
      id: 20,
      title: "The Shipwreck - 1805",
      category: "John M. W. Turner",
      pintor: "Turner",
      img: "./img/turner2.jpg",
      desc: `Nació el 23-04-1775 en Londres, Inglaterra, murió el 10-12-81 en Londres. Movimiento: Romanticismo.Obras: 561. `,
      },
               
  ];

  

  