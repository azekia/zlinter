// const hola = require('./hola.mjs'); <<< require forbidden
console.log('hola mundo');
if (new Date().getTime() > 0) {
  let a = 25;
  console.log(a);
  a = 'pepe';
  console.log(`esto se ejecuta ${a}`);
}
