<?php 
session_start();
require_once("model/usuarios_model.php");


function home(){}
$mensaje="";
$usuario= new Usuarios_Model();


if(isset($_SESSION["usuario"])){

    if(isset($_POST["enviar"])){
        $nombre= isset($_POST["nombre"])?$_POST["nombre"]:"";
        $passw= isset($_POST["passwd"])?$_POST["passwd"]:"";
        $telefono= isset($_POST["telefono"])?$_POST["telefono"]:"";
        $nacionalidad= isset($_POST["nacionalidad"])?$_POST["nacionalidad"]:"";
        $mensaje=$usuario->insertar_usuario($nombre,$passw,$telefono,$nacionalidad);
        echo '<script>alert("'.$mensaje.'")</script>'; 
    } 
    if(isset($_POST["eliminar"])){
        $mensaje= $usuario->eliminar_usuario($_POST["borrar_usuario"]);
        echo '<script>alert("'.$mensaje.'")</script>';
    }   
    }else{
        if(isset($_POST["identificar"])){
            $nombre= isset($_POST["nombre"])?$_POST["nombre"]:"";
            $passw= isset($_POST["passwd"])?$_POST["passwd"]:"";
            if($usuario->login($nombre,$passw)){
                $_SESSION["usuario"]= $nombre;  
            }else {
                $mensaje="Usuario o contraseña incorrecto";
            echo '<script>alert("'.$mensaje.'")</script>';
            }
        }
    
}
$array_usuarios= $usuario->get_usuarios();
require_once("view/usuarios_view.php");
    
?>