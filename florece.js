
const input = document.querySelector('#input');
input.addEventListener('click',busqueda);
//no funciona 
//selecciono todos los botones 
const boton0 = document.querySelector('#boton0');
const boton1 = document.querySelector('#boton1');
const boton2 = document.querySelector('#boton2');
const boton3 = document.querySelector('#boton3');
const boton4 = document.querySelector('#boton4');
const boton5 = document.querySelector('#boton5');
//seleccionar los parrafos  
const p0=document.querySelector('#p0');
const p1=document.querySelector('#p1');
const p2=document.querySelector('#p2')
const p3=document.querySelector('#p3')
const p4=document.querySelector('#p4')
const p5=document.querySelector('#p5')

boton0.addEventListener('click',mostrarOcultar);
boton1.addEventListener('click',mostrarOcultar1);
boton2.addEventListener('click',mostrarOcultar2);
boton3.addEventListener('click',mostrarOcultar3);
boton4.addEventListener('click',mostrarOcultar4);
boton5.addEventListener('click',mostrarOcultar5);




//hacer una clase para hace r que el parrafo no sea visible a la hora de  presoinarlo 
function mostrarOcultar(){
     if (p0.classList.contains('contenido-adicional')) {
         p0.classList = ''
         console.log(p0.classList);
        }
        else{
         p0.classList.add('contenido-adicional')   
         
     }
}
function mostrarOcultar1(){
    if (p1.classList.contains('contenido-adicional')) {
        p1.classList = ''
        console.log(p1.classList);
       }
       else{
        p1.classList.add('contenido-adicional')   
        
    }
}
function mostrarOcultar2(){
    if (p2.classList.contains('contenido-adicional')) {
        p2.classList = ''
        console.log(p2.classList);
       }
       else{
        p2.classList.add('contenido-adicional')   
        
    }
}
function mostrarOcultar3(){
    if (p3.classList.contains('contenido-adicional')) {
        p3.classList = ''
        console.log(p3.classList);
       }
       else{
        p3.classList.add('contenido-adicional')   
        
    }
}
function mostrarOcultar4(){
    if (p4.classList.contains('contenido-adicional')) {
        p4.classList = ''
        console.log(p4.classList);
       }
       else{
        p4.classList.add('contenido-adicional')   
        
    }
}
function mostrarOcultar5(){
    if (p5.classList.contains('contenido-adicional')) {
        p5.classList = ''
        console.log(p5.classList);
       }
       else{
        p5.classList.add('contenido-adicional')   
        
    }
}

function busqueda(){
    if (input.value == "Search") {
        input.value=null;
    }
}

