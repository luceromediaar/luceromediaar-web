/* ARCHIVO DE TRABAJOS: acá cargás todo. Cada trabajo es un bloque entre llaves, separado por coma.
   Códigos de categoría válidos:
   fotografia-producto, fotografia-institucional, fotografia-moda, fotografia-corporativo,
   realizacion-redes-sociales, realizacion-coberturas, realizacion-institucional, realizacion-documental,
   streaming-bodas, streaming-eventos, streaming-programas, streaming-conferencias, streaming-webinars
   destacado:true -> aparece en "Trabajos destacados" de la portada (máximo 8).
   Ejemplo (sacale los /* */ para activarlo):
   {id:'nombre-sin-espacios', titulo:'Nombre del trabajo', cliente:'Cliente', destacado:true, ratio:'4/5',
    categorias:['fotografia-producto','realizacion-institucional'],
    imagen:'assets/trabajos/nombre-sin-espacios.jpg',
    video:'https://www.youtube.com/watch?v=XXXXXXXXXXX',   // opcional: YouTube o Vimeo
    brief:'Breve descripción del brief y del resultado.'},
*/
const TRABAJOS=[
];

/* CLIENTES: logos en PNG con fondo transparente, guardados en assets/clientes/. Se muestran en gris.
   Ejemplo (sacale los /* */): {n:'Nombre del cliente', f:'nombre-del-archivo.png'}, */
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
