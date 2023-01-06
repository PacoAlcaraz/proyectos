<?php 
class Conectar{
    public static function conexion(){
        try{
            $conexion = new mysqli("127.0.0.1:33065","root","","practica");
        }catch(Exception $e){
            die('Error:'.$e->getMessage());
        }
        return $conexion;
    }
}
?>