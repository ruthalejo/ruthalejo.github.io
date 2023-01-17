//funcion contador de letras
let mensaje = document.getElementById('msg');
let contador = document.getElementById('conter');

// 1es un escuchador que indica al navegador que este atento a la interacción del usuario.
// 2devuelve el valor del atributo especificado en el elemento.
mensaje.addEventListener('input', function(e) {
    const target = e.target;
    const longitudMax = target.getAttribute('maxlength');
    const longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}/${longitudMax}`;
});

// La expresión regular que utilizamos es /^[0-9]+$/ y con ella lo que intentamos saber es si la cadena que intentamos validar contiene solo caracteres exclusivamente numéricos.
// función Encriptar
function encriptar(){
    const z = /^[0-9]+$/; 
    let mensaje = document.getElementById("msg").value;
    let password = document.getElementById("passwd").value;
    msgError = "Ups, ha ocurrido un error, verifica la información";    

if(password.match(z)){
    encryted = btoa(mensaje);
    document.getElementById("msgcifrado").innerHTML = encryted;

}else{
    alert(msgError);
  }
}

// función Desencriptar
function desencriptar(){

    const z = /^[0-9]+$/; 
    let mensaje = document.getElementById("msg").value;
    let password = document.getElementById("passwd").value;
    msgError = "Ups, ha ocurrido un error, verifica la información";

if(password.match(z)){
    var decrypted = atob(mensaje);
    document.getElementById("msgdescifrado").innerHTML = decrypted;
    
}else{
    alert(msgError);
    }
}

//funcion para copiar texto - Copiar texto al portapapeles usando la API Clipboard en JavaScript
//La API del Portapapeles está disponible dentro del objeto navigator.clipboard.
//writeText() utilizado para copiar el texto al portapapeles.
function copyToClickBoard(){
    content = document.getElementById('msgcifrado').innerHTML;

    navigator.clipboard.writeText(content)
        .then(() => {
        console.log("Texto copiado")
    })
        .catch(err => {
        console.log('Algo anda mal', err);
    })
 
}
function copyToClickBoard2(){
    content2 = document.getElementById('msgdescifrado').innerHTML;

    navigator.clipboard.writeText(content2)
        .then(() => {
        console.log("Texto copiado")
    })
        .catch(err => {
        console.log('Algo anda mal', err);
    })
 
}

// función Limpiar datos
function limpiarRellenado() {
    document.getElementById("msg").value = '';

}

// función Reiniciar
function resetGame() {
    document.getElementById("msg").value = '';
    document.getElementById("passwd").value = '';
    document.getElementById("msgcifrado").innerHTML = '';
    document.getElementById("msgdescifrado").innerHTML = '';
}