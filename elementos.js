// CONEXION DE ELEMENTOS CON EL HTML*****************
// SPAN-PARRAFOS-CANVAS
var seccionCanvas=document.getElementById("seccionCanvas")
var lienzo=document.getElementById('pantalla')
var sguerrero=document.getElementById("guerreroJugador");
var sguerreroMaquina=document.getElementById("guerreroMaquina");
var pMensaje1=document.getElementById("mensaje1");
var pMensaje2=document.getElementById("mensaje2");
var pMensaje3=document.getElementById("mensaje3");
var sNombre=document.getElementById("nombre");
var svidaJugador=document.getElementById("vidaJugador");
var svidaMaquina=document.getElementById("vidaMaquina");
// SECCION O DIV
var seccElemento=document.getElementById("seleccionElemento");
var seccGuerrero=document.getElementById("seleccionGuerrero");
var contenedorGuerreros=document.getElementById("contenedorGuerreros")
// BOTONES
var bSeleccionar=document.getElementById("botonSeleccionar");
var bTierra;
var bAgua;
var bFuego;
var bReiniciar=document.getElementById("botonReiniciar");
var contenedorBotones=document.getElementById("contenedorBotones");
var derecha=document.getElementById("derecha");
var arriba=document.getElementById("arriba");
var abajo=document.getElementById("abajo");
var izquierda=document.getElementById("izquierda");
// ACTIVADOR DE BOTONES***************************
bSeleccionar.onclick=seleccionGuerreroJugador;
bReiniciar.onclick=reiniciar;
derecha.onmousedown=moverderecha;
arriba.onmousedown=moverarriba;
abajo.onmousedown=moverabajo;
izquierda.onmousedown=moverizquierda;
derecha.onmouseup=detenerse;
arriba.onmouseup=detenerse;
abajo.onmouseup=detenerse;
izquierda.onmouseup=detenerse;
// ACTIVADOR TECLAS
window.addEventListener("keydown",movimientoteclas)
window.addEventListener("keyup", detenerse)
// INPUT
var iToph;
var iKatara;
var iZuko;
var iAppa;
var iSokka;
var iMomo;
// VARIABLES
var nombre=prompt("Por favor escriba su nombre");
var guerreros=[];
var guerrerosE=[];
var elementos;
var opcionguerreros;
var identificadorMaquina;
var opcionelementos;
var guerrerojugador;
var botones=[];
var ataquesJugador=[];
var ataquesMaquina=[];
var numero;
var elementoM;
var elementosMaquina=[];
var elementosMaquina2=[];
var borrados=[];
var partidas=5;
var empates=0;
var puntosJugador=0;
var puntosMaquina=0;
var referente;
var intervalo;
var anchodelmapa=window.innerWidth-20
var alturabuscada=anchodelmapa*600/800
// INICIADORES************************
sNombre.innerHTML=nombre;
svidaJugador.innerHTML=puntosJugador;
svidaMaquina.innerHTML=puntosMaquina;
bReiniciar.style.display ="none";
seccElemento.style.display="none";
seccionCanvas.style.display="none";
var pincel=lienzo.getContext("2d")
var anchomax=800
var alturamax=600
lienzo.width=anchodelmapa
lienzo.height=alturabuscada

if(anchodelmapa>anchomax){
    anchodelmapa=anchomax-20
}

// CLASES Y CONSTRUCTORES
class Guerrero {
    constructor(nombre,foto,vida,personaje,avatarpic){
       this.nombre=nombre;
       this.foto=foto;
       this.vida=vida;
       this.personaje=personaje;
       this.elementos=[];
       this.ancho=100;
       this.alto=100;
       this.x=aleatorio(0,lienzo.width-this.ancho);
       this.y=aleatorio(0,lienzo.height-this.alto);
       this.velocidadx=0;
       this.velocidady=0;
       
       this.guerreroFoto= new Image();
       this.guerreroFoto.src=avatarpic;
    }
}
var Toph= new Guerrero("Toph","toph2.png",partidas,"personajetoph","toph.png")
Toph.elementos.push(
    {tipo:'🌱', id:'botonTierra'},
    {tipo:'🌱', id:'botonTierra'},
    {tipo:'🔥', id:'botonFuego'},
    {tipo:'🔥', id:'botonFuego'},
    {tipo:'🌊', id:'botonAgua'}) 
var Katara= new Guerrero("Katara","katara2.png",partidas,"personajekatara","katara.png")
Katara.elementos.push(
    {tipo:'🌊', id:'botonAgua'},
    {tipo:'🌊', id:'botonAgua'},
    {tipo:'🌱', id:'botonTierra'},
    {tipo:'🌱', id:'botonTierra'},
    {tipo:'🔥', id:'botonFuego'}) 
var Appa= new Guerrero("Appa","appa2.png",partidas,"personajeappa","appa.png")
Appa.elementos.push(
    {tipo:'🌱', id:'botonTierra'},
    {tipo:'🌱', id:'botonTierra'},
    {tipo:'🔥', id:'botonFuego'},
    {tipo:'🔥', id:'botonFuego'},
    {tipo:'🌊', id:'botonAgua'}) 
var Sokka= new Guerrero("Sokka","sokka2.png",partidas,"personajesokka","sokka.png")
Sokka.elementos.push(
    {tipo:'🌊', id:'botonAgua'},
    {tipo:'🌊', id:'botonAgua'},
    {tipo:'🌱', id:'botonTierra'},
    {tipo:'🌱', id:'botonTierra'},
    {tipo:'🔥', id:'botonFuego'}) 
var Zuko= new Guerrero("Zuko","zuko2.png",partidas,"personajezuko","zuko.png")
Zuko.elementos.push(
    {tipo:'🔥', id:'botonFuego'},
    {tipo:'🔥', id:'botonFuego'},
    {tipo:'🌊', id:'botonAgua'},
    {tipo:'🌊', id:'botonAgua'},
    {tipo:'🌱', id:'botonTierra'}) 
var Momo= new Guerrero("Momo","momo2.png",partidas,"personajemomo","momo.png")
Momo.elementos.push(
    {tipo:'🔥', id:'botonFuego'},
    {tipo:'🔥', id:'botonFuego'},
    {tipo:'🌊', id:'botonAgua'},
    {tipo:'🌊', id:'botonAgua'},
    {tipo:'🌱', id:'botonTierra'}) 
guerreros.push(Toph,Katara,Appa,Sokka,Zuko,Momo);
// ******************************************************** GUERREROS ENEMIGOS**************************
var TophE= new Guerrero("Toph","toph2.png",partidas,"personajetoph","toph1.png")
TophE.elementos.push(
    {tipo:'🌱', id:'botonTierra'},
    {tipo:'🌱', id:'botonTierra'},
    {tipo:'🔥', id:'botonFuego'},
    {tipo:'🔥', id:'botonFuego'},
    {tipo:'🌊', id:'botonAgua'}) 
var KataraE= new Guerrero("Katara","katara2.png",partidas,"personajekatara","katara1.png")
KataraE.elementos.push(
    {tipo:'🌊', id:'botonAgua'},
    {tipo:'🌊', id:'botonAgua'},
    {tipo:'🌱', id:'botonTierra'},
    {tipo:'🌱', id:'botonTierra'},
    {tipo:'🔥', id:'botonFuego'}) 
var AppaE= new Guerrero("Appa","appa2.png",partidas,"personajeappa","appa1.png")
AppaE.elementos.push(
    {tipo:'🌱', id:'botonTierra'},
    {tipo:'🌱', id:'botonTierra'},
    {tipo:'🔥', id:'botonFuego'},
    {tipo:'🔥', id:'botonFuego'},
    {tipo:'🌊', id:'botonAgua'}) 
var SokkaE= new Guerrero("Sokka","sokka2.png",partidas,"personajesokka","sokka1.png")
SokkaE.elementos.push(
    {tipo:'🌊', id:'botonAgua'},
    {tipo:'🌊', id:'botonAgua'},
    {tipo:'🌱', id:'botonTierra'},
    {tipo:'🌱', id:'botonTierra'},
    {tipo:'🔥', id:'botonFuego'}) 
var ZukoE= new Guerrero("Zuko","zuko2.png",partidas,"personajezuko","zuko1.png")
ZukoE.elementos.push(
    {tipo:'🔥', id:'botonFuego'},
    {tipo:'🔥', id:'botonFuego'},
    {tipo:'🌊', id:'botonAgua'},
    {tipo:'🌊', id:'botonAgua'},
    {tipo:'🌱', id:'botonTierra'}) 
var MomoE= new Guerrero("Momo","momo2.png",partidas,"personajemomo","momo1.png")
MomoE.elementos.push(
    {tipo:'🔥', id:'botonFuego'},
    {tipo:'🔥', id:'botonFuego'},
    {tipo:'🌊', id:'botonAgua'},
    {tipo:'🌊', id:'botonAgua'},
    {tipo:'🌱', id:'botonTierra'}) 
guerrerosE.push(TophE,KataraE,AppaE,SokkaE,ZukoE,MomoE);

guerreros.forEach((guerrero)=>{
    opcionguerreros=` <label for=${guerrero.nombre}>
    <div class=${guerrero.personaje} >
    <input type="radio" name="guerreros" id=${guerrero.nombre}>
    <p class="nombrespj">${guerrero.nombre}</p>
    </div>
    </label>`
    contenedorGuerreros.innerHTML+=opcionguerreros;
iToph=document.getElementById("Toph")
iKatara=document.getElementById("Katara")
iZuko=document.getElementById("Zuko")
iAppa=document.getElementById("Appa")
iSokka=document.getElementById("Sokka")
iMomo=document.getElementById("Momo")
})

// FUNCIONES ************************

function seleccionGuerreroJugador(){
    
    seccElemento.style.display="none";
   
    if(iToph.checked){
        sguerrero.innerHTML=iToph.id;
        guerrerojugador=iToph.id;
    }else if (iKatara.checked){
        sguerrero.innerHTML=iKatara.id;
        guerrerojugador=iKatara.id;
    } else if (iZuko.checked){
        sguerrero.innerHTML=iZuko.id;
        guerrerojugador=iZuko.id;
    }else if (iAppa.checked){
        sguerrero.innerHTML=iAppa.id;
        guerrerojugador=iAppa.id;
    } else if (iSokka.checked){
        sguerrero.innerHTML=iSokka.id;
        guerrerojugador=iSokka.id;
    }else if (iMomo.checked){
        sguerrero.innerHTML=iMomo.id;
        guerrerojugador=iMomo.id;
    }else{
        alert('Porfavor selecciona un Guerrero');
    }
    cargarmapa()
    extraerElementos();
    seccGuerrero.style.display="none";
}

// FUNCIONES SIN MODIFICACION NECESARIA
function cargarmapa(){
    for (i=0; i<guerreros.length;i++){
        if (guerrerojugador==guerreros[i].nombre){
            referente=i;
            break;
        }
    }
    seccionCanvas.style.display="flex";
    intervalo=setInterval(disenoMapa,50);   
}

function extraerElementos(){
    for (i=0; i<guerreros.length;i++){
        if (guerrerojugador==guerreros[i].nombre){
            elementos=guerreros[i].elementos;
        }
    }
    mostrarElementos();
}
    function mostrarElementos(){
        elementos.forEach((elemento)=>{
        opcionelementos=`<button id=${elemento.id} class="botonAtaque">${elemento.tipo}</button>`
        contenedorBotones.innerHTML+=opcionelementos;   
     })
        bTierra=document.getElementById("botonTierra");
        bAgua=document.getElementById("botonAgua");
        bFuego=document.getElementById("botonFuego");
        botones=document.querySelectorAll(".botonAtaque")
}

function aleatorio (min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function seleccionGuerreroMaquina(enemigo){
    elementosMaquina=enemigo.elementos;
    sguerreroMaquina.innerHTML=enemigo.nombre;
    ataquesmaquina();
    secuenciaBotones();
}
function ataquesmaquina(){
    while(elementosMaquina.length>0){
        numero=aleatorio(0,elementosMaquina.length-1);
        elementoM=elementosMaquina[numero].tipo;
        elementosMaquina2.push(elementoM);
        borrados= elementosMaquina.splice(numero,1);
    }
}

function secuenciaBotones(){
    
    botones.forEach((boton)=>{
        boton.addEventListener('click',(e) =>{
            if(e.target.textContent=="🌱"){
                ataquesJugador.push("🌱")
                boton.style.background="#ff0000"
                boton.disabled=true
            }else if (e.target.textContent=="🌊"){
                ataquesJugador.push("🌊")
                boton.style.background="#ff0000"
                boton.disabled=true
            }else {
                ataquesJugador.push("🔥")
                boton.style.background="#ff0000"
                boton.disabled=true
            }
            verificacion();
        })
    })    
}
function verificacion(){
    if (ataquesJugador.length==partidas){
        combate();
    }
}

function combate(){
   for(var j=0;j<ataquesJugador.length;j++){
    if(elementosMaquina2[j]==ataquesJugador[j]){
        empates++;
        crearMensajeJugador(ataquesJugador[j]+" 🟨");
        crearMensajeMaquina(elementosMaquina2[j]+" 🟨")
        comprobacion();
    }else if ((ataquesJugador[j]=="🔥" && elementosMaquina2[j]=="🌱" )||(ataquesJugador[j]=="🌊" && elementosMaquina2[j]=="🔥" )||(ataquesJugador[j]=="🌱" && elementosMaquina2[j]=="🌊" )){
        puntosJugador++;
        crearMensajeJugador(ataquesJugador[j]+" ✅");
        crearMensajeMaquina(elementosMaquina2[j]+" ❌" )
        comprobacion();
    }else if ((elementosMaquina2[j]=="🔥" && ataquesJugador[j]=="🌱" )||(elementosMaquina2[j]=="🌊" && ataquesJugador[j]=="🔥" )||(elementosMaquina2[j]=="🌱" && ataquesJugador[j]=="🌊" )){
        puntosMaquina++;
        crearMensajeJugador(ataquesJugador[j]+" ❌");
        crearMensajeMaquina(elementosMaquina2[j]+" ✅" )
        comprobacion();
    }
   }
}

function comprobacion(){
    if((puntosMaquina+puntosJugador+empates)==partidas){
        svidaJugador.innerHTML=puntosJugador;
        svidaMaquina.innerHTML=puntosMaquina;
        bReiniciar.style.display ="block";
        if(puntosJugador>puntosMaquina){
            alert("Felicitaciones, el jugador "+nombre + " ha ganado🥳🎉🎊 ");
            pMensaje3.innerHTML= nombre + " ha ganado🥳🎉🎊";
        }else if(puntosJugador==puntosMaquina){
            alert("Ambos contrincantes han EMPATADO");
            pMensaje3.innerHTML="Han EMPATADO";
        } else if (puntosJugador<puntosMaquina) {
            alert("Lo sentimos, la maquina ha ganado en esta ocasion 😞😩😵‍💫");
            pMensaje3.innerHTML="La maquina ha ganado 😞😩😵‍💫";
    }
}
}
 function crearMensajeJugador(mensaje){
    let parrafoJugador=document.createElement("p");
    pMensaje1.appendChild(parrafoJugador);
    parrafoJugador.innerHTML=mensaje;
 }
 function crearMensajeMaquina(mensaje){
    let parrafoMaquina=document.createElement("p");
    pMensaje2.appendChild(parrafoMaquina);
    parrafoMaquina.innerHTML=mensaje;
 }
 
function reiniciar(){
    location.reload();
}

function disenoMapa(){
    pincel.clearRect(0,0,lienzo.width,lienzo.height)
    guerreros[referente].x=guerreros[referente].x+guerreros[referente].velocidadx;
    guerreros[referente].y=guerreros[referente].y+guerreros[referente].velocidady;
    mapa= new Image()
    mapa.src="mapa.jpg",
    pincel.drawImage(
        mapa,
        0,
        0,
        lienzo.width,
        lienzo.height
   )
        pincel.drawImage(
           guerreros[referente].guerreroFoto,
           guerreros[referente].x,
           guerreros[referente].y,
           guerreros[referente].ancho,
           guerreros[referente].alto
        ) 
        for(i=0;i<guerrerosE.length;i++){
        pincel.drawImage(
            guerrerosE[i].guerreroFoto,
            guerrerosE[i].x,
            guerrerosE[i].y,
            guerrerosE[i].ancho,
            guerrerosE[i].alto
        ) }

        if (guerreros[referente].velocidadx !== 0 || guerreros[referente].velocidady !== 0){
            for(k=0;k<guerrerosE.length;k++){
            revisarColision(guerrerosE[k]);
        }
        }
    }

    function moverderecha(){
        guerreros[referente].velocidadx=5;
    }
    function moverizquierda(){
        guerreros[referente].velocidadx=-5;
    }
    function moverarriba(){
        guerreros[referente].velocidady=-5;
    }
    function moverabajo(){
        guerreros[referente].velocidady=5;
    }
    function detenerse(){
        guerreros[referente].velocidadx=0;
        guerreros[referente].velocidady=0;
    }
   
    function movimientoteclas(event){
        switch (event.key) {
            case "ArrowDown":
                moverabajo()
            break;
            case "ArrowUp":
                moverarriba()
            break;
            case "ArrowRight":
                moverderecha()
            break;
            case "ArrowLeft":
                moverizquierda()
            break;
            default:
                break;
        }
    }

    function revisarColision(enemigo){
        const arribaguerreroE= enemigo.y
        const abajoguerreroE= enemigo.y + enemigo.alto
        const derechaguerreroE= enemigo.x + enemigo.ancho
        const izquierdaguerreroE= enemigo.x

        const arribaguerrero= guerreros[referente].y
        const abajoguerrero= guerreros[referente].y + guerreros[referente].alto
        const derechaguerrero= guerreros[referente].x + guerreros[referente].ancho
        const izquierdaguerrero= guerreros[referente].x


        if (abajoguerrero < arribaguerreroE ||
           arribaguerrero >   abajoguerreroE ||
           derechaguerrero <  izquierdaguerreroE ||
           izquierdaguerrero > derechaguerreroE){
            return;
        }
        detenerse()
        clearInterval(intervalo)
        console.log("colision")
        seccElemento.style.display="flex";
        seccionCanvas.style.display="none";
        seleccionGuerreroMaquina(enemigo)
        alert("Hubo colision con "+ enemigo.nombre)
      
    }