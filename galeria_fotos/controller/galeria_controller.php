<?php 
session_start();
require_once("model/galeria_model.php");


function home(){
    
    $galeria= new Galeria_model();
    $array_imagenes= $galeria->get_imagenes();
    require_once("view/galeria_view.php");
}

function imagenes(){
    $galeria= new Galeria_model();
    

    if(isset($_POST["subir"])){
       
       if(isset($_FILES["archivo"])){ 
           
            $titulo= isset($_POST["titulo"])? $_POST["titulo"]:"";
            $lugar= isset($_POST["lugar"])? $_POST["lugar"]:"";
            $nombreArchivo= isset($_FILES["archivo"]["name"])?$_FILES["archivo"]["name"]:"";
            $fecha= date("Y-m-d");
            $usuario= isset($_SESSION["usuario"])?$_SESSION["usuario"]:"";
            $origen= $_FILES["archivo"]["tmp_name"];
            $destino= "img/".$_FILES["archivo"]["name"];
            $extensionesValidas= Array("jpg", "jpeg");

            $extension= pathinfo($nombreArchivo)['extension'];

            if(in_array($extension, $extensionesValidas)){
                if(@move_uploaded_file($origen, $destino)){
                    $mensaje=$galeria->insertar_imagen($nombreArchivo,$usuario,$fecha,$titulo,$lugar);
                    echo '<script>alert("'.$mensaje.'")</script>'; 
                }else echo '<script>alert("Error al subir el archivo")</script>';
            }else echo '<script>alert("El tipo del archivo tiene que ser jpg o jpeg")</script>';
        }
    }
    if((isset($_POST["eliminar"]))){
        $mensaje= $galeria->eliminar_imagen($_POST["borrar_imagen"]);
        echo '<script>alert("'.$mensaje.'")</script>';
    }

    $array_imagenes= $galeria->get_imagenes();
    require_once("view/imagenes_view.php");
}

function desconexion(){
    unset($_SESSION["usuario"]); 
    session_destroy();
    header("Location: index.php");
}

?>