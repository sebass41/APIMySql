<?php

$funcion;

switch($funcion){
    case "guardar":
        guardar();
        break;
}

function guardar(){
    $id = $_POST['id'];
    $title = $_POST['title'];
    $permalink = $_POST['link'];
    $thumbnail = $_POST['img'];
    $price = $_POST['price'];

    $producto = (new Producto())->insertar($id, $title, $permalink, $thumbnail, $price);
    echo json_encode($producto);
}

?>