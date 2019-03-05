<?php
    require 'conexion.php';
    
    function insert(){
        
        $puntaje = $_REQUEST["puntaje"];
        $jugador = $_REQUEST["jugador"];
        $juego = $_REQUEST["juego"];
        
        $query = "INSERT INTO puntajes
                VALUES (NULL, '$puntaje', '$jugador', '$juego', DATE(NOW()))";
        
        $GLOBALS["conexion"]->query( $query );
    }
    insert();
    $conexion->close();
?>