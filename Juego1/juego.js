var nombre;
var imgKanguro, imgNube, imgPiedras, imgSuelo;
var ancho = 700;
var alto = 300;
var canvas,ctx;
var suelo=220;
var kanguro = {y:220, vy:0, gravedad:2, salto:28, vymax:9, saltando: false };
var nivel= {velocidad: 9, marcador: 0, muerto:false};
var piedras= {x: ancho+100, y:suelo};
var nube= {x:400, y: 100,velocidad:1};
var nube2= {x:200, y: 100,velocidad:1};
var envioDatos = true;

const ID_JUEGO = 1;

document.addEventListener("keydown",function(evento){
    if(evento.keyCode==32){
        if (nivel.muerto==false){
            if(!kanguro.saltando){
            saltar();
            }
         }
        else{
            nivel.velocidad=9;
            nube.velocidad=1;
            nube2.velocidad=1;
            
            piedras.x= ancho+100;
            nube.x = ancho+100;
            nube2.x= ancho+300;
            nivel.marcador=0;
            nivel.muerto=false;
            envioDatos = true;
        }
    }
});

function cargaImagenes(){
    imgKanguro= new Image ();
    imgNube= new Image ();
    imgNube2= new Image ();
    imgPiedras= new Image ();
    imgSuelo= new Image ();

    imgKanguro.src = 'img/canguro.png'
    imgNube.src = 'img/nube.png';
    imgNube2.src = 'img/nube2.png';
    imgPiedras.src = 'img/cactus.png'
    imgSuelo.src = 'img/suelo.png'
}

function inicializa(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    ingresarNombre("Ingrese su nombre");
    cargaImagenes();
}

function ingresarNombre(txt){
    let aux = prompt(txt, "nombre");

    if(aux == null || aux == ""){
        ingresarNombre("nombre invalido, introduzca otro.")
    }
    else{
        nombre = aux;
    } 
}

function borraCanvas(){
    canvas.width=ancho;
    canvas.height=alto;
}

function dibujaKanguro(){
    ctx.drawImage(imgKanguro,0,0,485,485,100,kanguro.y,80,80)
}

function dibujaPiedras(){
    ctx.drawImage(imgPiedras,0,0,517,517,piedras.x, piedras.y,38,75);
}

function logicaPiedras(){
    if (piedras.x <- 100){
        piedras.x = ancho+100;
    }
    else{
        piedras.x -= nivel.velocidad;
    }
}

function dibujaSuelo(){
    ctx.drawImage(imgSuelo,0,0,960,480,0, 30, 690,300 );
}

function dibujaNube(){
    ctx.drawImage(imgNube,0,0,485,485,nube.x, nube.y, 82,31 );
}

function logicaNube(){
    if (nube.x <- 100){
        nube.x = ancho+100;
    }
    else{
        nube.x -= nube.velocidad;
    }
}

function dibujaNube2(){
    ctx.drawImage(imgNube2,0,0,517,517,nube2.x, nube2.y, 82,31 );
}
function logicaNube2(){
    if (nube2.x <- 100){
        nube2.x = ancho+100;
    }
    else{
        nube2.x -= nube2.velocidad;
    }
}

function saltar(){
    kanguro.saltando=true;
    kanguro.vy = kanguro.salto;
}

function gravedad(){
    if(kanguro.saltando==true){
        if (kanguro.y-kanguro.vy-kanguro.gravedad > suelo){
            kanguro.saltando=false;
            kanguro.vy=0;
            kanguro.y=suelo;
        }
        else{
            kanguro.vy -= kanguro.gravedad;
            kanguro.y -= kanguro.vy;
        }
    }
}

function colision(){
    if (piedras.x >=100 && piedras.x<=180){
        if(kanguro.y >= suelo-55){
            nivel.muerto= true;
            nivel.velocidad=0;
            nube.velocidad=0;
            nube2.velocidad=0;

        }
    }
}

function puntuacion(){
    ctx.font = "30px impact";
    ctx.fillStyle = '#000000';
    ctx.fillText(nivel.marcador, 600, 50);

    if(nivel.muerto==true){
        ctx.font="60px impact";
        ctx.fillStyle = ('red');
        ctx.fillText('GAME OVER', 240,150);
    }
    else{
        nivel.marcador++;
    }
}

//Bucle Principal 
var FPS = 60;
setInterval(function(){ //cada cuanto se debe ejecutar una funcion en un intervalo de tiempo.
    principal();
    if(envioDatos && nivel.muerto==true){
        envioDatos = false;
        if(nombre!=""){
            sendAJAX(URL,toJson(nivel.marcador, nombre, ID_JUEGO));
        }
    }
}, 1000/FPS);


//Esta es la funcion donde el juego va actualizar todo.
function principal (){
    borraCanvas();
    gravedad();
    colision();
    logicaPiedras();
    logicaNube();
    logicaNube2();
    dibujaSuelo();
    dibujaPiedras();
    dibujaNube();
    dibujaNube2();
    dibujaKanguro();
    puntuacion();
}