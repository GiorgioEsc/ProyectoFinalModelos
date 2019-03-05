<?php
    require 'conexion.php';

    function select($juego){
        $query = "SELECT puntajes.jugador, puntajes.puntaje
                FROM puntajes
                JOIN juegos
                ON puntajes.juego = juegos.id
                WHERE juegos.nombre = \"$juego\"
                ORDER BY puntajes.puntaje DESC LIMIT 3;";

        return $GLOBALS["conexion"]->query( $query );
    }
?>