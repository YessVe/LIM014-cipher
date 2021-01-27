//asegura que se escriba y defina correctamente en JS
'use strict' 

import cipher from './cipher.js';

//Ver las páginas de HTML
document.getElementById('pag1').style.display = 'block';
document.getElementById('pag2').style.display = 'none';
document.getElementById('pag3').style.display = 'none';
document.getElementById('pag4').style.display = 'none';
document.getElementById('pag5').style.display = 'none';


//Cuando escoge CIFRAR
const btnPage2 = document.getElementById ('changePage2');
btnPage2.addEventListener('click', function () {
        document.getElementById('pag1').style.display = 'none';
        document.getElementById('pag2').style.display = 'block';
        document.getElementById('pag3').style.display = 'none';
        document.getElementById('pag4').style.display = 'none';
        document.getElementById('pag5').style.display = 'none';
    }
)

//Cuando escoge DESCIFRAR
const btnPage4 = document.getElementById ('changePage4');
btnPage4.addEventListener('click', function () {
        document.getElementById('pag1').style.display = 'none';
        document.getElementById('pag2').style.display = 'none';
        document.getElementById('pag3').style.display = 'none';
        document.getElementById('pag4').style.display = 'block';
        document.getElementById('pag5').style.display = 'none';
    }
)

//El botón que CIFRA
const btnCifra= document.getElementById ('botonCifra'); 
btnCifra.addEventListener('click', function() {
    var mensaje= document.getElementById('txtCifrar').value;
    var clave= document.getElementById('numClave').value;
    if (mensaje=="" || clave=="") {
        alert("El Cosmo necesita tu mensaje y clave.");
    } else {
  
       var almacenCifrado= cipher.encode (clave,mensaje);
          
       document.getElementById('txtRspta').value=almacenCifrado;
       document.getElementById('pag1').style.display = 'none';
       document.getElementById('pag2').style.display = 'none';
       document.getElementById('pag3').style.display = 'block';
       document.getElementById('pag4').style.display = 'none';
       document.getElementById('pag5').style.display = 'none'; 
    }
})

//El botón que DESCIFRA
const btnDescifra= document.getElementById('botonDescifra');
btnDescifra.addEventListener('click', function () {
    var mnsCifrado= document.getElementById('txtDescifrar').value;
    var clave2= document.getElementById('numClave2').value;
    if (mnsCifrado==""|| clave2=="") {
        alert("El Cosmo necesita tu mensaje y clave.");
    }else{
        
        var almacenDescifrado = cipher.decode(clave2,mnsCifrado);

        document.getElementById('txtRspta2').value=almacenDescifrado;
        document.getElementById('pag1').style.display = 'none';
        document.getElementById('pag2').style.display = 'none';
        document.getElementById('pag3').style.display = 'none';
        document.getElementById('pag4').style.display = 'none';
        document.getElementById('pag5').style.display = 'block';
    }
})

// Estos son los botones que me llevan a la 1ra pagina
const btnHome1 = document.getElementById('botonHome1');
btnHome1.addEventListener('click', function () {
        divs();
        //agregar la función de limpiar el contenido del txtarea e input
        document.getElementById("txtCifrar").value = "";
        document.getElementById("numClave").value = "";
    }
)
const btnHome2 = document.getElementById('botonHome2');
btnHome2.addEventListener('click', function () {
        divs();  
        //agregar la función de limpiar el contenido del txtarea
        document.getElementById("txtDescifrar").value = "";
        document.getElementById("numClave2").value = "";
    }
) 
function divs(){
        document.getElementById('pag1').style.display = 'block';
        document.getElementById('pag2').style.display = 'none';
        document.getElementById('pag3').style.display = 'none';
        document.getElementById('pag4').style.display = 'none';
        document.getElementById('pag5').style.display = 'none';
}

