var nombre;

var envioDatos = true;
const ID_JUEGO = 4;

function ingresarNombre(txt){
    let aux = prompt(txt, "nombre");

    if(aux == null || aux == ""){
        ingresarNombre("nombre invalido, introduzca otro.")
    }
    else{
        nombre = aux;
    } 
}

function empezar() {
	location.href="fondo.php";
}
function salir(){
	location.href="juego_travesia_espacial.php";
}

var x=280;
var y=420;
var t=-10;
var jugando=true;

var imgm = new Image();
imgm.src = "imagenes/meteoro.png";

var imgn = new Image();
imgn.src = "imagenes/nave.png";

var xm=Math.floor(Math.random() * (575 - 0 + 1)) + 0;
var ym=50;

var xm2=Math.floor(Math.random() * (575 - 0 + 1)) + 0;
var ym2=50;

var xm3=Math.floor(Math.random() * (575 - 0 + 1)) + 0;
var ym3=50;

var xm4=Math.floor(Math.random() * (575 - 0 + 1)) + 0;
var ym4=50;



function nave(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.font= "20px Arial ";
	ctx.fillStyle = 'yellow';
	var img = new Image();
	img.src = "imagenes/nave.png";
	img.onload = function(){
		ctx.clearRect(0,0,640,480);
		ctx.drawImage(img, x, y);
		ctx.drawImage(imgm, xm, ym);
		ctx.fillText("Puntaje: ",380,50);
		ctx.font = "25px Times New Roman ";
		ctx.fillStyle = 'yellow';
		t=t+10;
		ctx.fillText(t,490,50);
		if(colision1()==true){
			boom(x,y,t);
		}
		if (t>1000) {
			cambioesc1();
			ctx.drawImage(imgm, xm2, ym2);
			if(colision2()==true){
				boom(x,y,t);
			}
			if(t>2500){
				cambioesc2();
				ctx.drawImage(imgm, xm3, ym3);
				if(colision3()==true){
					boom(x,y,t);
				}
				ctx.drawImage(imgm, xm4, ym4);
				if(colision4()==true){
					boom(x,y,t);
				}
			}
		}

	}

}
function boom(x,y,t){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.font= "40px Arial ";
	ctx.fillStyle = 'red';
	var img = new Image();
	img.src = "imagenes/explosion.png";
	img.onload = function(){
		ctx.clearRect(0,0,640,480);
		ctx.drawImage(img,x, y);
		ctx.fillText("GAME OVER ",50,200);
		ctx.font = "30px Times New Roman ";
		ctx.fillStyle = 'yellow';
		ctx.fillText("Puntuacion :"+t,300,200);
	}
	jugando=false;
}

function pop(){
var abrirPopup = document.getElementById('control'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	cerrarpop = document.getElementById('cerrar');

abrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');	
}); 
cerrarpop.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

}

function colision1(){
	var distancia=Math.sqrt( Math.pow( (xm-x), 2)+Math.pow( (ym-y),2));
	if(distancia>imgn.width){
		return false;
	}else{
		return true;	
	}
}
function colision2(){
	var distancia=Math.sqrt( Math.pow( (xm2-x), 2)+Math.pow( (ym2-y),2));
	if(distancia>imgn.width){
		return false;
	}else{
		return true;	
	}
}
function colision3(){
	var distancia=Math.sqrt( Math.pow( (xm3-x), 2)+Math.pow( (ym3-y),2));
	if(distancia>imgn.width-32){
		return false;
	}else{

		return true;	
	}
}
function colision4(){
	var distancia=Math.sqrt( Math.pow( (xm4-x), 2)+Math.pow( (ym4-y),2));
	if(distancia>imgn.width){
		return false;
	}else{
		return true;	
	}
}

function cambioesc1(){
  document.getElementById("canvas").style.background = "url('fondo2.png') no-repeat ";
}
function cambioesc2(){
	document.getElementById("canvas").style.background = "url('fondo3.png') no-repeat";
}
function cambio(event){
	if (jugando==false) {
		if(envioDatos){
			envioDatos = false;
			if(nombre!=""){
				sendAJAX(URL,toJson(t, nombre, ID_JUEGO));
			}
		}
	}else{
		if(event.keyCode=='39'){//si la tecla presionada es direccional derecho
			x=x+5;//mueve la nave 5 pixeles a la derecha
			ym=ym+5;
			ym2=ym2+15;
			ym3=ym3+20;
			ym4=ym4+25;
			if (x>575) {
				x=x-5;
			} 
			if(ym>420){
				ym=50;
				xm=Math.floor(Math.random() * (575 - 0 + 1)) + 0;
			}
			if(ym2>420){
				ym2=50;
				xm2=Math.floor(Math.random() * (575 - 0 + 1)) + 0;
			}
			if(ym3>420){
				ym3=50;
				xm3=Math.floor(Math.random() * (575 - 0 + 1)) + 0;
			}
			if(ym4>420){
				ym4=50;
				xm4=Math.floor(Math.random() * (575 - 0 + 1)) + 0;
			}
			nave();
		}

		if(event.keyCode=='37'){//si la tecla presionada es direccional izquierdo
			x=x-5;//mueve la nave 5 pixeles a la izquierda
			ym=ym+5;
			ym2=ym2+15;
			ym3=ym3+20;
			ym4=ym4+25;
			if (x<0) {
				x=x+5;
			} 
			if(ym>420){
				ym=50;
				xm=Math.floor(Math.random() * (575 - 0 + 1)) + 0;
			}
			if(ym2>420){
				ym2=50;
				xm2=Math.floor(Math.random() * (575 - 0 + 1)) + 0;
			}
			if(ym3>420){
				ym3=50;
				xm3=Math.floor(Math.random() * (575 - 0 + 1)) + 0;
			}
			if(ym4>420){
				ym4=50;
				xm4=Math.floor(Math.random() * (575 - 0 + 1)) + 0;
			}
			nave();
		}

		if(event.keyCode=='38'){//si la tecla presionada es direccional arriba
			y=y-5;//sube la nave
			ym=ym+5;
			ym2=ym2+15;
			ym3=ym3+20;
			ym4=ym4+25;
			if (y<50) {
				y=y+5;
			}
			if(ym>420){
				ym=50;
				xm=Math.floor(Math.random() * (575 - 0 + 1)) + 0;
			}
			if(ym2>420){
				ym2=50;
				xm2=Math.floor(Math.random() * (575 - 0 + 1)) + 0;
			}
			if(ym3>420){
				ym3=50;
				xm3=Math.floor(Math.random() * (575 - 0 + 1)) + 0;
			}
			if(ym4>420){
				ym4=50;
				xm4=Math.floor(Math.random() * (575 - 0 + 1)) + 0;
			}
			nave();
		}

		if(event.keyCode=='40'){// si la tecla presionada es direccional abajo
			y=y+5;//baja la nave
			ym=ym+5;
			ym2=ym2+15;
			ym3=ym3+20;
			ym4=ym4+25;
			if (y>=420) {
				y=y-5;
			}
			if(ym>420){
				ym=50;
				xm=Math.floor(Math.random() * (575 - 0 + 1)) + 0;
			}
			if(ym2>420){
				ym2=50;
				xm2=Math.floor(Math.random() * (575 - 0 + 1)) + 0;
			}
			if(ym3>420){
				ym3=50;
				xm3=Math.floor(Math.random() * (575 - 0 + 1)) + 0;
			}
			if(ym4>420){
				ym4=50;
				xm4=Math.floor(Math.random() * (575 - 0 + 1)) + 0;
			}
			nave();
		}
	}
}