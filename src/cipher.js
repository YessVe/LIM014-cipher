const cipher = {
  
  encode: function (clave,mensaje) {
    var almacenCifrado= "";
    for (let i= 0; i<mensaje.length; i++){
        var numAscii= mensaje.charCodeAt(i);
         //desde la línea 56 a la 65 debe estar en la hoja cipher.js
            //si var mensaje está en mayúscula, entonces
        if (numAscii>=65 && numAscii<=90) {
            var cifCesar= ((numAscii-65 + parseInt(clave))%26+65);
            var txtCifrado= String.fromCharCode(cifCesar);
            almacenCifrado = almacenCifrado+txtCifrado;
            //si var mensaje está en minúscula, entonces
        } else if (numAscii>=97 && numAscii<=122) {
            var cifCesar= ((numAscii-97 + parseInt(clave))%26+97);
            var txtCifrado= String.fromCharCode(cifCesar);
            almacenCifrado = almacenCifrado+txtCifrado;
        } 
   } return almacenCifrado 
  },

  decode: function (clave2,mnsCifrado){
    var almacenDescifrado="";
    for (let i = 0; i < mnsCifrado.length; i++) {
        var numAscii2 = mnsCifrado.charCodeAt(i);
      if (numAscii2>=65 && numAscii2<=90) {                    
        if ((numAscii2 - clave2)<65) {
          var descifCesar= numAscii2-clave2+26;
          var txtDescifrado= String.fromCharCode(descifCesar);
        } else {
          var descifCesar= numAscii2-clave2;
          var txtDescifrado= String.fromCharCode(descifCesar);
        }
          almacenDescifrado=almacenDescifrado+txtDescifrado;
      } else if (numAscii2>=97 && numAscii2<=122) {
          if ((numAscii2-clave2)<97) {
            var descifCesar = numAscii2-clave2+26;
            var txtDescifrado= String.fromCharCode(descifCesar);            
          } else {
            var descifCesar = numAscii2-clave2;
            var txtDescifrado= String.fromCharCode(descifCesar);
          }
          almacenDescifrado=almacenDescifrado+txtDescifrado;
      }
    } return almacenDescifrado
  }
};




export default cipher;