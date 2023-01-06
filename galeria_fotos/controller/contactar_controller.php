<?php 
session_start();
$mensaje="";
function home(){

}

if(isset($_POST["enviar"])){
$to_email = "alcarazsanchezfrancisco@gmail.com";
$subject = "consulta de ".$_POST["nombre"];
$body = $_POST["contenido"];
$headers = $_POST["correo"];

if (mail($to_email, $subject, $body, $headers)) {
    $mensaje= "Email mandado a $to_email";
}else {
    $mensaje= "Envio de email insatisfactorio";
}
}
require_once("view/contactar_view.php");

?>