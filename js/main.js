
function translate() {
  var title = document.getElementById("form-signin-heading");
  var email = document.getElementById("inputEmail");
  var password = document.getElementById("inputPassword");
  var remember = document.getElementsByTagName("span")[0];
  var button = document.getElementsByClassName("btn")[0];

  title.innerHTML = "Por favor inicia sesiòn";
  email.placeholder = "Correo Eletrònico";
  password.placeholder = "Contraseña";
  remember.innerHTML ="Recuerdame";
  button.innerHTML = "Iniciar Sesiòn";
}
translate();

function imprimir(){
  var email = document.getElementById("inputEmail").value;
  var password = document.getElementById("inputPassword").value;
  var conteiner = document.getElementById("conteiner");

  if(email != "" && password != ""){

    var contenido = "<h2>Datos del Formulario</h2>" +
    "El correo electrònico ingresado es:<br>" + email +
    "<br>La contraseña ingresada es:<br>" + password;
    conteiner.innerHTML = contenido;

  }

}
