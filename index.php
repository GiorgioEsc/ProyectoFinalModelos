<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Centro de juegos</title>
	<link href="estilos.css" rel="stylesheet" type="text/css">
	<?php
		include 'php/direccionesPaginas.php';
	?>
</head>

<body>
<section class="macroGrid">
	<section class="menuOtros">
	<br><br><br><br><br><br><br><br>
		<div class="creditos">
			<a href="<?php echo PAGINA_CREDITOS ?>">
				<input type="button" class="boton2" value="Creditos">	
			</a>
		</div>
		<div class="puntaje">
			<a href="<?php echo PAGINA_PUNTAJES ?>">
				<input type="button" class="boton2" value="Puntajes">	
			</a>
		</div>
	</section>
	<section class="contenedorGrid">
		<div class="titulo"> Centro de juegos </div>
		<div class="grid" >
		  <div class="a">
				<a href="Juego1/juego_the_kangaroo_runner.php">
					<input type="button" class="boton" value="Jugar">	
				</a>
			</div>
		  <div class="b">
				<a href="Juego2/juego_llorona.php">
					<input type="button"  class="boton" value="Jugar">	
				</a>
			</div>
		  <div class="c">
				<a href="Juego3/juego_zombieland.php">
					<input type="button"  class="boton" value="Jugar">	
				</a>
			</div>
		  <div class="d">
				<a href="Juego4/juego_travesia_espacial.php">
					<input type="button"  class="boton" value="Jugar">	
				</a>	
			</div>
		  <div class="e">
				<a href="Juego5/public_html/juego_snake.php">
					<input type="button"  class="boton" value="Jugar">	
				</a>	
			</div>
			<div class="f">
				<a href="Juego6/juego_spacewar.php">
					<input type="button"  class="boton" value="Jugar">	
				</a>		
			</div>
		</div>
	</section>
</section>
</body>
</html>
