<?php

require_once "../Conexion.php";

class Producto{

    function insertar($id, $title, $permalink, $thumbnail, $price){
        $sql = "INSERT INTO productos VALUES ('$id', '$title', '$permalink', '$thumbnail', $price)";
        $conection = conection();
        $respuesta = $conection->query($sql);
        return $respuesta;
    }
}

?>