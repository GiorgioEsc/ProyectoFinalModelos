document.addEventListener("keydown",function(evento){
		if (evento.keyCode==32) {
			console.log("salta");
		
		if (nivel.muerto==false) {
					saltar();
		} else {
			nivel.muerto=false;
			nivel.vel=9.2;
			nivel.puntuacion=0;
			monoCafe.posX=ancho+aleatorio(100,1000);
		}	
		}
		});

var cuerda=280;
var ancho=900;
var alto=480;
var canv,ctx, imgCharlie, imgMonoCafe, imgFondo;
var charlie = {posY:cuerda,velY:0,grav:1,salto:18,saltando:false};
var nivel = {vel:9.2, puntuacion:0, muerto:false};
var monoCafe ={posX:ancho+50, posY:cuerda+40}
var fondo = {posX:0, posY:0}

//Bucle principal
var fps=40;
setInterval(function(){
	jugar();
},1000/fps);

function iniciar(){
	canv = document.getElementById("pantalla");
	ctx = canv.getContext("2d");
	cargarImagenes();
}

function cargarImagenes(){
	imgCharlie = new Image();
	imgMonoCafe=new Image();
	imgFondo=new Image();
	imgCharlie.src = "Imagenes/charlie.gif";
	imgMonoCafe.src = "Imagenes/monoCafe.gif";
	imgFondo.src = "Imagenes/background.gif";
}

function dibujaFondo(){
	ctx.drawImage(imgFondo,fondo.posX,0,900,480,0,0,900,480)
}

function dibujarCharlie(){
	ctx.drawImage(imgCharlie,0,0,35,35,100,charlie.posY,90,90);
}

function dibujaMonoCafe(){
	ctx.drawImage(imgMonoCafe,0,0,16,16,monoCafe.posX,monoCafe.posY,40,40);
}

function limpiarPantalla(){
	canv.width = ancho;
	canv.height = alto;
}

function moverMonoCafe(){
	if(monoCafe.posX < -50){
		monoCafe.posX = ancho+aleatorio(100,1000);
		nivel.puntuacion++;
	}else{
		monoCafe.posX -= nivel.vel;
	}
}

function moverFondo(){
	if(fondo.posX > 900){
		fondo.posX = 0;
	}else{
		fondo.posX += nivel.vel/3;
	}
}

function colision(){
	if(monoCafe.posX >=100 && monoCafe.posX<=190){
		if(charlie.posY>= cuerda-40){
			nivel.muerto=true;
			nivel.vel=0;
		}
	}

}

function subirDificultad(){
	if (nivel.puntuacion==3){
		nivel.vel+=0.2;
	}
	if (nivel.puntuacion==8){
		nivel.vel+=0.3;
	}
	if (nivel.puntuacion==14){
		nivel.vel+=0.4;
	}
	if (nivel.puntuacion==18){
		nivel.vel+=0.5;
	}
}

function jugar(){
	console.log("Principal");
	limpiarPantalla();
	gravedad();
	colision();
	dibujaFondo();
	moverFondo();
	moverMonoCafe();
	dibujaMonoCafe();
	dibujarCharlie();
	puntuar();
	subirDificultad();
}

function saltar(){
	if(charlie.saltando==false){
	charlie.saltando=true;
	charlie.velY=charlie.salto;
	}

}

function aleatorio(minimo,maximo){
  return Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);
}

function gravedad(){
	if (charlie.saltando==true) {
		if (charlie.posY-charlie.velY-charlie.grav>cuerda) {
			charlie.saltando=false;
			charlie.velY=0;
			charlie.posY=cuerda;
		} else {
			charlie.velY -= charlie.grav;
			charlie.posY -= charlie.velY;
		}
	}
}

function puntuar(){
	ctx.font= "32px tahoma";
	ctx.fillStyle = "#ffffff";
	ctx.fillText("Score: "+nivel.puntuacion,720,450);
	if (nivel.muerto==true){
		ctx.font = "6opx Impact"
		ctx.fillText("GAME OVER",240,150);
		ctx.fillText("Pulsa espacio para reiniciar",470,150);
	}
}
