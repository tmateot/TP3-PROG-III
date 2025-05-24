function enviar() {
  let nom = document.getElementById("nom").value;
  let ape = document.getElementById("ape").value;
  let edad = parseInt(document.getElementById("edad").value);
  let alt = parseInt(document.getElementById("alt").value);
  let mail = document.getElementById("mail").value;
  let msg = document.getElementById("msg");

  if (nom === "" || ape === "" || mail === "") {
    msg.textContent = "Faltan completar nombre, apellido o correo.";
    msg.style.color = "red";
    return;
  }

  if (edad < 18) {
    msg.textContent = "Debe ser mayor de edad.";
    msg.style.color = "red";
    return;
  }

  if (alt > 230 || alt <= 0) {
    msg.textContent = "Altura no válida.";
    msg.style.color = "red";
    return;
  }

  if (!mail.includes("@")) {
    msg.textContent = "Correo inválido.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Formulario OK. Bienvenido " + nom + " " + ape + ".";
  msg.style.color = "green";
}
