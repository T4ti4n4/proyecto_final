const claveSustitucion = {
    '?': 'a',
    '[': 'e',
    "\\": 'i',
    '~': 'o',
    '+': 'u',
    '()':' ',
    '^': 'm',
    '`':'c',
    '-': 'h',
    '*':'p',
    '/': 'l',
    '{':'s',
    '$':'r',
    '}':'q',
    '¬':'ó',
    '%':'b',
    ']':'n',
    '=':'t',
    '¡':'d',
    '!':'j',
    '¿':"y",
    ';':'f',
    '__':'z',
    '#':'v'
  };
  function desencriptar(mensaje) {
    let mensajeDesencriptado = '';
  
    for (let i = 0; i < mensaje.length; i++) {
      let caracter = mensaje[i];
      mensajeDesencriptado += claveSustitucion[caracter] || caracter;
    }
  
    return mensajeDesencriptado;
  }
  function contarFrecuencias(mensaje) {
    const frecuencias = {};
    for (const caracter of mensaje) {
      frecuencias[caracter] = (frecuencias[caracter] || 0) + 1;
    }
    return frecuencias;
  }
  
  const mensajeEncriptado = "^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$__~()`~]=\\]+~";
  
  const frecuencias = contarFrecuencias(mensajeEncriptado);
  console.log("Frecuencias de caracteres encriptados:", frecuencias);
  
  const resultado = desencriptar(mensajeEncriptado);
  console.log("Mensaje desencriptado parcial:", resultado);
  
  //Mensaje desencriptado parcial: me()complace()mucho()ver()lo()bien()que()estoy()trabajando()y()cómo()esto()aumenta()mis()poderes()de()atención()y()esfuer__o()continuo