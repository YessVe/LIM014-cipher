const cipher = {
  
  encode: function (clave,mensaje) {

    if (clave==0 || clave=="" || isNaN(clave) || mensaje=="") {
      throw TypeError("El Cosmo necesita una información clara.")
    }

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
            cifCesar= ((numAscii-97 + parseInt(clave))%26+97);
            txtCifrado= String.fromCharCode(cifCesar);
            almacenCifrado = almacenCifrado+txtCifrado;
        } 
   } return almacenCifrado 
  },

  decode: function (clave2,mnsCifrado){

    if (clave2==0 || clave2=="" || isNaN(clave2) || mnsCifrado=="") {
      throw TypeError("El Cosmo necesita una información clara.")
    }

    var almacenDescifrado="";
    for (let i = 0; i < mnsCifrado.length; i++) {
        var numAscii2 = mnsCifrado.charCodeAt(i);
        //mayúscula
        if (numAscii2>=65 && numAscii2<=90) {
          var descifCesar= ((numAscii2-90 - parseInt(clave2))%26+90);
          var txtDescifrado= String.fromCharCode(descifCesar);
          almacenDescifrado = almacenDescifrado+txtDescifrado;
          //si var mensaje está en minúscula, entonces:
        }  else if (numAscii2>=97 && numAscii2<=122) {
          descifCesar= ((numAscii2-122 - parseInt(clave2))%26+122);
          txtDescifrado= String.fromCharCode(descifCesar);
          almacenDescifrado = almacenDescifrado+txtDescifrado;
        } 
    } return almacenDescifrado
  }
};

export default cipher;