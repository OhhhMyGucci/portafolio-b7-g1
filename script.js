let app = document.getElementById('app');
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Carina Mireles')
  .pauseFor(300)
  .deleteAll()
  .typeString('Estudiante de ingeniería')
  .pauseFor(1000)
  .start();



let tituloHabilidades = document.getElementById('tituloHabilidades');
let typewriterTituloHabilidades = new Typewriter(tituloHabilidades, {
  loop: true,
  delay: 75,
});

typewriterTituloHabilidades
  .pauseFor(200)
  .typeString('Habilidades')
  .pauseFor(300)
  .deleteAll()
  .start();


let tituloProyectos = document.getElementById('tituloProyectos');
let typewriterTituloProyectos = new Typewriter(tituloProyectos, {
  loop: true,
  delay: 75,
});

typewriterTituloProyectos
  .pauseFor(250)
  .typeString('Proyectos')
  .pauseFor(400)
  .deleteAll()
  .start();