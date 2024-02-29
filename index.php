<?php
// verificar si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // obtener los datos del formulario
  $dni = $_POST['dni'];
  $apellido = $_POST['apellido'];
  $nombres = $_POST['nombres'];
  $equipo = $_POST['equipo'];
  $categoria = $_POST['categoria'];
}