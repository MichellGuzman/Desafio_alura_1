function encriptar() {
    let texto = document.getElementById('ingresoTexto').value.toLowerCase().trim();
    let textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    document.getElementById('salidaTexto').value = (textoEncriptado);
    if(textoEncriptado != ""){
        document.getElementById('botonCopiar').style.display = 'block';
        document.getElementById('textoMensajeSinTextoSalida').style.display = 'none';
    } else{
        document.getElementById('botonCopiar').style.display = 'none';
        document.getElementById('textoMensajeSinTextoSalida').style.display = 'block';
    }
    
}

function desencriptar() {
    let texto = document.getElementById('ingresoTexto').value.toLowerCase().trim();
    let textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('salidaTexto').value = (textoDesencriptado);
    if(textoDesencriptado != ""){
        document.getElementById('botonCopiar').style.display = 'block';
        document.getElementById('textoMensajeSinTextoSalida').style.display = 'none';
    } else{
        document.getElementById('botonCopiar').style.display = 'none';
        document.getElementById('textoMensajeSinTextoSalida').style.display = 'block';
    }
}

function copiar() {
    let textoSalida = document.getElementById('salidaTexto');
    textoSalida.select();
    document.execCommand('copy');
}
