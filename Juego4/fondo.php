<!DOCTYPE html>
<html>
<head>
	<title> Travesia Espacial </title>
	<link rel="stylesheet" type="text/css" href="estilo/fondo.css" media="screen" >
	<script src="js/prueba.js" language="JavaScript1.2"></script>
	<script>
		ingresarNombre("Ingrese su nombre");
	</script>
</head>
<body onkeydown="cambio(event);" onload="nave();">
	<section>
			<canvas id="canvas" width="640" height="480" >
				
			</canvas>		
	</section>
	<section>
		<button class="Salir" onclick="salir();">Regresar al menu</button><br>
	</section>
	<script src="../js/jquery-3.3.1.min.js"></script>
	<script src="../js/EnvioDatos.js"></script>
</body>
</html>