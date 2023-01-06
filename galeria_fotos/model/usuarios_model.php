<?php
class Usuarios_model
{
    private $db; // se almacena la conexión
    private $datos; // se almacenan los registros recuperados de la BBDD

    public function __construct()
    {
        require_once("model/conectar.php");
        $this->db = Conectar::conexion(); //llamar metodo estático de otra clase usamos los ::
        $this->datos = array();
    }

    public function get_usuarios()
    {
        $sql = "SELECT id, nombre, telefono, nacionalidad FROM usuarios";
        $consulta = $this->db->query($sql);
        while ($registro = $consulta->fetch_assoc()) {
            $this->datos[] = $registro;
        }
        return $this->datos;
    }

    public function login($user, $passw)
    {
        $sql = "SELECT * FROM usuarios where nombre= '$user' AND passwd='$passw'";
        if ($consulta = $this->db->query($sql)) {
            return ($consulta->num_rows > 0);
        }
    }

    public function insertar_usuario($nombre, $passw, $telefono, $nacionalidad){
        $sql= "INSERT INTO usuarios (id,nombre, passwd, telefono, nacionalidad) values (0,'$nombre','$passw','$telefono','$nacionalidad')";
        
        if($consulta= $this->db->query($sql)){
            $resultado= "Usuario".$nombre." ha sido creado";
        }else $resultado= "Usuario".$nombre." no ha podido ser creado";
          return $resultado;
    }
    public function eliminar_usuario($nombre){
        $sql= "DELETE FROM usuarios where nombre='$nombre'";
        
        if($consulta= $this->db->query($sql)){
            $resultado= "Usuario".$nombre." ha sido eliminado";
        }else $resultado= "Usuario".$nombre." no ha podido ser eliminado";
          return $resultado;
    }
}

?>