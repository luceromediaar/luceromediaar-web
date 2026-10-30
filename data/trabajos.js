/* ARCHIVO DE TRABAJOS: acá cargás todo. Cada trabajo es un bloque entre llaves, separado por coma.
   Códigos de categoría válidos:
   fotografia-producto, fotografia-institucional, fotografia-moda, fotografia-corporativo,
   realizacion-redes-sociales, realizacion-coberturas, realizacion-institucional, realizacion-documental,
   streaming-bodas, streaming-eventos, streaming-programas, streaming-conferencias, streaming-webinars
   destacado:true -> aparece en "Trabajos destacados" de la portada (máximo 8).
   Ejemplo (copialo dentro de TRABAJOS, separado por coma):
   {id:'nombre-sin-espacios', titulo:'Nombre del trabajo', cliente:'Cliente', destacado:true, ratio:'4/5',
    categorias:['fotografia-producto','realizacion-institucional'],
    imagen:'assets/trabajos/nombre-sin-espacios.jpg',
    video:'https://www.youtube.com/watch?v=XXXXXXXXXXX',   // opcional: YouTube o Vimeo
    brief:'Breve descripción del brief y del resultado.'},
*/
/* imagen = portada (la que se ve en la grilla). imagenes = galería completa de la página del trabajo. */
const TRABAJOS=[
 {id:'anabea-ecommerce', titulo:'Anabea e-commerce', cliente:'Anabea', destacado:true, ratio:'4/5',
  categorias:['fotografia-producto'],
  imagen:'assets/trabajos/anabea/anabea001.jpg',
  imagenes:['assets/trabajos/anabea/anabea001.jpg','assets/trabajos/anabea/anabea002.jpg','assets/trabajos/anabea/anabea003.jpg','assets/trabajos/anabea/anabea004.jpg','assets/trabajos/anabea/anabea005.jpg','assets/trabajos/anabea/anabea006.jpg','assets/trabajos/anabea/anabea007.jpg'],
  brief:'Cada producto de Anabea tenía que verse tal como es. Hicimos fotografía de catálogo para su e-commerce, con la luz controlada para domar los reflejos y mostrar cada pieza nítida, clara y lista para la tienda online.'},
 {id:'bravio-316', titulo:'Bravío 316', cliente:'Bravío', destacado:true, ratio:'4/5',
  categorias:['fotografia-producto'],
  imagen:'assets/trabajos/bravio/bravio001.jpg',
  imagenes:['assets/trabajos/bravio/bravio001.jpg','assets/trabajos/bravio/bravio002.jpg','assets/trabajos/bravio/bravio003.jpg','assets/trabajos/bravio/bravio004.jpg','assets/trabajos/bravio/bravio005.jpg','assets/trabajos/bravio/bravio006.jpg','assets/trabajos/bravio/bravio007.jpg','assets/trabajos/bravio/bravio008.jpg','assets/trabajos/bravio/bravio009.jpg','assets/trabajos/bravio/bravio010.jpg','assets/trabajos/bravio/bravio011.jpg','assets/trabajos/bravio/bravio012.jpg'],
  brief:'Un producto de acero que vive de sus reflejos y de sus detalles. Para Bravío 316 trabajamos la luz para domar los brillos y lograr un catálogo limpio y preciso, sumamos fotografía macro que deja ver la terminación de cada pieza y desarrollamos un arte de marca que une todo en una misma identidad para la web y las redes.'},
 {id:'kiollo', titulo:'Kiollo', destacado:true, ratio:'4/5',
  categorias:['fotografia-institucional'],
  imagen:'assets/trabajos/kiollo/kiollo001.jpg',
  imagenes:['assets/trabajos/kiollo/kiollo001.jpg','assets/trabajos/kiollo/kiollo002.jpg','assets/trabajos/kiollo/kiollo003.jpg','assets/trabajos/kiollo/kiollo004.jpg'],
  brief:'Detrás de cada producto de Kiollo hay un proceso. Entramos a la producción para registrar sus etapas y contarlo en imágenes, pensadas para la web institucional y para mostrar el trabajo que sostiene a la marca.'},
 {id:'sasson-comercial', titulo:'Sasson Comercial', cliente:'Sasson', destacado:true, ratio:'4/5',
  categorias:['fotografia-institucional'],
  imagen:'assets/trabajos/sasson/sasson001.jpg',
  imagenes:['assets/trabajos/sasson/sasson001.jpg','assets/trabajos/sasson/sasson002.jpg','assets/trabajos/sasson/sasson003.jpg','assets/trabajos/sasson/sasson004.jpg','assets/trabajos/sasson/sasson005.jpg','assets/trabajos/sasson/sasson006.jpg','assets/trabajos/sasson/sasson007.jpg','assets/trabajos/sasson/sasson008.jpg'],
  brief:'Sasson renovaba su imagen y la web tenía que acompañar ese cambio. Fotografiamos producto y marca para darle una identidad visual coherente, con imágenes que cuentan quién es hoy la empresa.'}
];

/* CLIENTES: logos en PNG con fondo transparente, guardados en assets/clientes/. Se muestran en gris.
   Ejemplo (copialo dentro de CLIENTES, separado por coma): {n:'Nombre del cliente', f:'nombre-del-archivo.png'} */
const CLIENTES=[
  {n:'Anabea', f:'anabealogo.png'},
  {n:'Aplicaciones Médicas', f:'aplicacionesmedicaslogo.png'},
  {n:'Bravío', f:'bravio.png'},
  {n:'Diagnóstico', f:'diagnostico_logo.png'},
  {n:'Kiollo', f:'kiollologo.png'},
  {n:'La Moladora', f:'lamoladora.png'},
  {n:'SonoScape', f:'Logo-SonoScape_diagXimag.png'},
  {n:'Mindray', f:'mindraylogo.png'},
  {n:'OSIAD Salud', f:'osiadsalud2.png'},
  {n:'Sasson', f:'sassonlogo.png'}
  /* {n:'?', f:'images-1.png'}, */
];
