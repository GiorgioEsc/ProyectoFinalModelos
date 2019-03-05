<!DOCTYPE html>

<html>
    <head>
        <title>TODO supply a title</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link type="text/css" rel="stylesheet" href="Estilos.css">
        <script type="text/javascript" src="Snake.js"></script>
        <?php
			include '../../php/direccionesPaginas.php';
		?>
    </head>
    <body onkeydown="control(event);">
        <nav class="navegador">
					<ul>
						<li><a href="../../<?php echo PAGINA_PRINCIPAL ?>">Página principal</a></li>
						<li><a href="../../<?php echo PAGINA_PUNTAJES ?>">Puntajes</a></li>
						<li><a href="../../<?php echo PAGINA_CREDITOS ?>">Créditos</a></li>
					</ul>
				</nav>
        <DIV ALIGN = center id="contenedor">
            <canvas id="canvas" width="600" height="600"></canvas>
            <canvas id="puntaje" width="50" height="50"></canvas>
        </DIV>
        <script src="../../js/jquery-3.3.1.min.js"></script>
    	<script src="../../js/EnvioDatos.js"></script>
    </body>
</html>
