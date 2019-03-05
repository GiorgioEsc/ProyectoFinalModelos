<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>zombieLand</title>
    <link type="text/css" rel="stylesheet" media="screen" href="css/style.css">
    <?php
			include '../php/direccionesPaginas.php';
		?>
  </head>
  <body>
    <nav class="navegador">
      <ul>
        <li><a href="../<?php echo PAGINA_PRINCIPAL ?>">Página principal</a></li>
        <li><a href="../<?php echo PAGINA_PUNTAJES ?>">Puntajes</a></li>
        <li><a href="../<?php echo PAGINA_CREDITOS ?>">Créditos</a></li>
      </ul>
    </nav>
    <div id="containerLayers">
        <div class="layer" id="map"></div>
        <canvas class="layer" id="cv" width="1122" height= "860"></canvas>
    </div>

    <script src="../js/jquery-3.3.1.min.js"></script>
    <script src="../js/EnvioDatos.js"></script>
    <script type="text/javascript" src="js/img.js"></script>
    <script type="text/javascript" src="js/Painter.js"></script>
    <script type="text/javascript" src="js/Map.js"></script>
    <script type="text/javascript" src="js/Character.js"></script>
    <script type="text/javascript" src="js/ajax.js"></script>
    <script type="text/javascript" src="js/audios.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
  </body>
</html>
