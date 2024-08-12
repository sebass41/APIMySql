<?php

require_once "../Conexion.php";

class Producto{
    function insertar($id, $title, $permalink, $thumbnail, $price){

        $sql = "INSERT INTO producto VALUES ('$id', '$title', '$permalink', '$thumbnail', $price)";
        $conection = conection();
        $respuesta = $conection->query($sql);
        $productos = $respuesta->fetch_all(MYSQLI_ASSOC);
        return $productos;
    }
}

?>