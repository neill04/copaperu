// funcion para validar el formulario
function validarFormulario() {
  var dni = document.getElementById("dni").value.trim();
  var apellido = document.getElementById("apellido").value.trim();
  var nombres = document.getElementById("nombres").value.trim();
  var equipo = document.getElementById("equipo").value.trim();
  var categoria = document.getElementById("categoria").value.trim();
  var foto = document.getElementById("foto").value;

  // Verificar que todos los campos estén completos
  if (dni === '' || apellido === '' || nombres === '' || equipo === '' || categoria === '' || foto === '') {
    alert("Por favor, complete todos los campos del formulario.");
    return false;
  }

  // Verificar el formato del DNI
  if (!/^\d{8}$/.test(dni)) {
    alert("El DNI debe contener 8 dígitos numéricos.");
    return false;
  }

  return true;
}