<?php

require_once "../Conexion.php";
require_once "res/Respuesta.php";

ini_set('display_errors', '0');
ini_set('display_startup_errors', '0');

ini_set('log_errors', 1);
ini_set('error_log', '../log/php_errors.log');

class Producto{

    function insertar($id, $title, $permalink, $thumbnail, $price){
        try{
            $conection = conection();
            $sql = "INSERT INTO productos VALUES ('$id', '$title', '$permalink', '$thumbnail', $price)";
            $respuesta = $conection->query($sql);

            if ($respuesta){
                $msj = "Se pudo insertar correctamente";
                return new Respuesta(true, $msj, $respuesta);
            }else{
                throw new Exception("Error al insertar los datos");
            }
        } catch (Exception $e){
            $msj = $e->getMessage();
            return new Respuesta(false, $msj, []);
        }
        
        
        
    }

    function actualizar($id, $title, $permalink, $thumbnail, $price){
        $sql = "UPDATE productos SET Title = '$title', Permalink = '$permalink', Thumbnail = '$thumbnail', Price = $price WHERE id = '$id'";
        $conection = conection();
        $respuesta = $conection->query($sql);
        
        if ($respuesta){
            $msj = "Se modificó correctamente";
            return new Respuesta(true, $msj, $respuesta);
        }else{
            $msj = "Error al modificar los datos";
            return new Respuesta(false, $msj, $respuesta);
        }
    }

}
?>