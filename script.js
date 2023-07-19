
let palabras=["ARBOL","PERLA","RATON","OVEJA","POETA"]
let numPalabra=Math.floor(Math.random() * 5);
let palabra
let palabraReserva=palabras[numPalabra];
const boton=document.getElementById("guess-button");
const boton2=document.getElementById("boton");
let palabraIngresada=document.getElementById("guess-input");
let vidas=5;
let midiv=document.getElementById("miDiv")
let instrucciones=document.getElementById("instrucciones")
const API="https://random-word-api.herokuapp.com/word?length=5&lang=es&number=5"
fetch(API)
.then(response => response.json())
.then(response => {
    console.log(response)
    palabra=response[0].toUpperCase()
    console.log(palabra);
}) 
.catch (err => palabra= palabraReserva);

function comparar(){
    let grid=document.getElementById("grid")
    let row =document.createElement("div");
    row.className='row';
    let palabra2=palabraIngresada.value.toUpperCase();
    let aviso=document.getElementById("mensaje");
    if (palabra2==palabra){
        aviso=aviso.innerHTML="<h1> Ganaste! 🥳 </h1>";
        boton.style.display="none";
        boton2.style.display="block";
       
    }
    if (palabra2.length>5||palabra2.length<5){
        alert("La palabra debe ser de 5 letras");
        return
    }
 for(let i in palabra){
    let span=document.createElement("span")
    span.className = 'letter';

        if(palabra[i]==palabra2[i]){
           span.textContent=palabra2[i];
           span.style.backgroundColor="green";
        }
       else if(palabra.includes(palabra2[i])){
            
        span.textContent=palabra2[i];
        span.style.backgroundColor="yellow";
               
        }
        else{
            span.textContent=palabra2[i];
            span.style.backgroundColor="grey";
        }
        row.appendChild(span);
       
    }
    grid.appendChild(row);
    vidas--;
    if(vidas==0){
        
        aviso=aviso.innerHTML="<h1> PERDISTE 🥺 la palabra era <br> </h1>" + palabra ;
        boton.style.display="none";
        boton2.style.display="block";

    }
}
boton.addEventListener("click",comparar);
boton2.addEventListener("click",function(){
    location.reload();
})
midiv.addEventListener("mouseover",function(){
    instrucciones.style.display="block"
})
midiv.addEventListener("mouseleave",function(){
    instrucciones.style.display="none"
})