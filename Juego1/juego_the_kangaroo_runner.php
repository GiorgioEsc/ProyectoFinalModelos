<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Dinosauiro</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link type="text/css" rel="stylesheet" href="estilos.css">
    <?php
        include '../php/direccionesPaginas.php';
    ?>
</head>
<body onload="inicializa();">
        <div class="barraNavegacion">
            <nav class="navegador">
                <ul>
                    <li><a href="../<?php echo PAGINA_PRINCIPAL ?>">Página principal</a></li>
                    <li><a href="../<?php echo PAGINA_PUNTAJES ?>">Puntajes</a></li>
                    <li><a href="../<?php echo PAGINA_CREDITOS ?>">Créditos</a></li>
                </ul>
            </nav>
        </div>
        <canvas id="canvas" width="700" height="300" style="border:3px solid #000000;" class="centerH">
        </canvas>
    <script src="../js/jquery-3.3.1.min.js"></script>
    <script src="../js/EnvioDatos.js"></script>
    <script src="juego.js"></script>
    <body background="img/fondo.jpg"></body>
</body>
</html>