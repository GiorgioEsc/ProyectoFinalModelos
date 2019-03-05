<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Puntajes</title>
	<link href="estilos2.css" rel="stylesheet" type="text/css">
	<?php
		include 'php/direccionesPaginas.php';
		require 'php/select.php';
		$juegos = array("the kangaroo runner", "llorona", "zombieland", "travesia espacial", "snake",
						 "spacewar", "2048", "circus charlie");
		
		function imprimirPuestos($i){
			$resultado = "";
			$busqueda = select($GLOBALS["juegos"][$i]);

			for($j = 1 ; $j<=3 ; $j++){
				$aux = $busqueda->fetch_object();
				if($aux){
					$resultado .= "<div>$j.$aux->jugador: $aux->puntaje</div>";
				}
				else{
					$resultado .= "<div>$j.</div>";
				}
			}

			return $resultado;
		}
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
				<a href="<?php echo PAGINA_PRINCIPAL ?>">
					<input type="button" class="boton2" value="Home">	
				</a>
			</div>
		</section>
		<section class="contenedorGrid">
			<div class="titulo"> Centro de juegos </div>
			<div class="grid" >
				<div class="a">
				<br>
					The kangaroo Runner
					<?php echo imprimirPuestos(0) ?>
				</div>
			  	<div class="b">
			  	<br>
					La llorona
					<?php echo imprimirPuestos(1) ?>
				</div>
			  	<div class="c">
			  	<br>
				  	ZombieLand
					  <?php echo imprimirPuestos(2) ?>
				</div>
			  	<div class="d">
			  	<br>
					Travesia Espacial	
					<?php echo imprimirPuestos(3) ?>
				</div>
			  	<div class="e">
			  	<br>
					Snake
					<?php echo imprimirPuestos(4) ?>		
				</div>
				<div class="f">
				<br>
					S P A C E W A R
					<?php echo imprimirPuestos(5) ?>
				</div>
			</div>
		</section>
	</section>
</body>
</html>
<?php $conexion->close(); ?>