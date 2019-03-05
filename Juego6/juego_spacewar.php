<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>S P A C E W A R</title>
    <link type="text/css" rel="stylesheet" href="css/main.css?14042012">
    <script src="js/videojuego-javascript.js?04042012" type="text/javascript"></script>
    <?php
        include '../php/direccionesPaginas.php';
    ?>
</head>
<body onload="game.init()">
    <div class="contenedor">
        <nav class="navegador">
					<ul>
						<li><a href="../<?php echo PAGINA_PRINCIPAL ?>">Página principal</a></li>
						<li><a href="../<?php echo PAGINA_PUNTAJES ?>">Puntajes</a></li>
						<li><a href="../<?php echo PAGINA_CREDITOS ?>">Créditos</a></li>
					</ul>
		</nav>
        <div class="juego">
            <canvas id="canvas" width="600" height="650">TU NAVEGADOR NO SOPORTA HTML5!</canvas>
        </div>

    </div>
    <script src="../js/jquery-3.3.1.min.js"></script>
    <script src="../js/EnvioDatos.js"></script>
</body>
</html>