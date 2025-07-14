document.getElementById('form-registro').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita el envío si hay errores

  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const provincia = document.getElementById('provincia').value.trim();
  const localidad = document.getElementById('localidad').value.trim();

  let errores = [];

  // Validación de nombre y apellido
  if (!/^[A-Za-zÁÉÍÓÚÑñáéíóú\s]{2,}$/.test(nombre)) {
    errores.push("Nombre y apellido deben tener solo letras y al menos 2 caracteres.");
  }

  // Validación de email
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    errores.push("El correo electrónico no es válido.");
  }

  // Validación de teléfono
  if (!/^\d{6,15}$/.test(telefono)) {
    errores.push("El teléfono debe tener entre 6 y 15 dígitos numéricos.");
  }

  // Validación de provincia y localidad
  if (provincia.length < 2) {
    errores.push("Provincia obligatoria.");
  }
  if (localidad.length < 2) {
    errores.push("Localidad obligatoria.");
  }

  // Mostrar errores o enviar
  const contenedorErrores = document.getElementById('errores');
  if (errores.length > 0) {
    contenedorErrores.innerHTML = errores.map(e => `<p>${e}</p>`).join('');
  } else {
    contenedorErrores.innerHTML = '';
    alert("Formulario enviado con éxito 🎉");
    this.reset();
  }
});