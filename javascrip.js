
function encriptar(){

    let textoinput = document.getElementById("textoinput").value;
    textoinput=textoinput.toLowerCase();
    let texto_encriptado= textoinput.replaceAll("e","enter");
    texto_encriptado=texto_encriptado.replaceAll("i","imes");
    texto_encriptado=texto_encriptado.replaceAll("a","ai");
    texto_encriptado=texto_encriptado.replaceAll("o","ober");
    texto_encriptado=texto_encriptado.replaceAll("u","ufat");
    
    document.getElementById("foto").style.display="none";
    document.getElementById("texto1").style.display="none";
    document.getElementById("copiar").style.display='block';
    document.getElementById("texto2").innerHTML=texto_encriptado; 
    
}

function desencriptar(){
    let textoinput = document.getElementById("textoinput").value;
    let texto_encriptado= textoinput.replaceAll("enter","e");
    texto_encriptado=texto_encriptado.replaceAll("imes","i");
    texto_encriptado=texto_encriptado.replaceAll("ai","a");
    texto_encriptado=texto_encriptado.replaceAll("ober","o");
    texto_encriptado=texto_encriptado.replaceAll("ufat","u");
    
    document.getElementById("foto").style.display="none";
    document.getElementById("texto1").style.display="none";
    document.getElementById("texto2").innerHTML=texto_encriptado;
}

function copiar(){
    let mensaje_encriptado=document.getElementById("texto2");
    mensaje_encriptado.select();
    document.execCommand("copy");
    document.getElementById("textoinput").value="";
    document.getElementById("textoinput").focus();
}