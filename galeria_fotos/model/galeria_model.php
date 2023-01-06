<?php 
class Galeria_model{
    private $db;
    private $imagenes;

    public function __construct(){
        require_once("model/conectar.php");
        $this->db= Conectar::conexion(); //llamar metodo estático de otra clase usamos los ::
        $this->imagenes= array();
    }

    public function get_imagenes(){
        $sql = "SELECT * FROM imagenes";
        $consulta= $this->db->query($sql);
        while($registro= $consulta->fetch_assoc()){
            $this->imagenes[] = $registro;
        }
        return $this->imagenes;
    }

     public function insertar_imagen($nombre,$usuario,$fecha,$titulo, $lugar){
        $sql= "INSERT INTO imagenes (id,nombre_imagen, usuario, fecha, titulo, lugar) values (0,'$nombre','$usuario','$fecha','$titulo','$lugar')";
        
        if($consulta= $this->db->query($sql)){
            $resultado= "La imagen ".$titulo." ha sido guardada";
        }else $resultado= "No se ha podido subir la imagen";
            return $resultado;
    } 

    public function eliminar_imagen($nombre){
        $sql= "DELETE FROM imagenes where nombre_imagen='$nombre'";
        
        if($consulta= $this->db->query($sql)){
            $resultado= "Imagen ".$nombre." ha sido eliminada";
        }else $resultado= "Imagen ".$nombre." no ha podido ser eliminada";
          return $resultado;
          
    }
}

?>