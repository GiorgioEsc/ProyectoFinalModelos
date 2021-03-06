<!DOCTYPE html>
<!DOCTYPE html>
<html>
<head>
	<title> Travesia Espacial </title>
	<link rel="stylesheet" type="text/css" href="estilo/estilo.css" media="screen" >
	<script defer src="https://use.fontawesome.com/releases/v5.7.2/js/all.js" integrity="sha384-0pzryjIRos8mFBWMzSSZApWtPl/5++eIfzYmTgBBmXYdhvxPc+XcFEk+zJwDgWbP" crossorigin="anonymous"></script>
	<script src="js/prueba.js" language="JavaScript1.2"></script>
	<?php
		include '../php/direccionesPaginas.php';
	?>
</head>
<body>
	
	<div>
		<h1>Travesia Espacial UD</h1>
		<button class="Juego" onclick="empezar();"></button><br>
		<button class="puntaje" id="puntaje" onclick="puntos();"></button><br>
		<button class="control" id="control" onclick="pop();"></button><br>
		<nav class="navegador">
				<ul>
					<li><a href="../<?php echo PAGINA_PRINCIPAL ?>">Página principal</a></li>
					<li><a href="../<?php echo PAGINA_PUNTAJES ?>">Puntajes</a></li>
					<li><a href="../<?php echo PAGINA_CREDITOS ?>">Créditos</a></li>
				</ul>
			</nav>
		<div class="overlay" id="overlay">
			<div class="popup" id="popup">
				<a href="#" id="cerrar" class="cerrar"><i class="fas fa-times"></i></a>
				<h3>Instrucciones:</h3>
				<h4>Teclas de movimiento: up, down, left, right.</h4>
				<h4>Debes esquivar los asteroídes que aparecen,cada movimiento con vida
				son mas puntos para ti</h4>
			</div>
		</div>
	</div>
	<script src="../js/jquery-3.3.1.min.js"></script>
	<script src="../js/EnvioDatos.js"></script>
</body>
</html>