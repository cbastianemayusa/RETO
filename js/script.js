
const letras=document.getElementById("letras");
const uno=document.getElementById("uno");  
const dos=document.getElementById("dos");
const tres=document.getElementById("tres");
const cuatro=document.getElementById("cuatro");
const cinco=document.getElementById("cinco");
const seis=document.getElementById("seis");
const siete=document.getElementById("siete");
const ocho=document.getElementById("ocho");
const nueve=document.getElementById("nueve");
const diez=document.getElementById("diez");

//  const tomarletras= () =>{
//     if(document.getElementById("uno","dos","tres"){

            
    
  //  }//
      
        // letras.innerHTML= letras.innerHTML +"A";
   

const boton1 =() =>{
    if(letras.innerHTML==""){
    letras.innerHTML="A";
}else if (letras.innerHTML=="ABCDEFGHIJ"){
    numeros.innerHTML="1";
    
}
}

const boton2 =() =>{
    if (letras.innerHTML== "A"){

        letras.innerHTML=letras.innerHTML + "B";
    }else if (numeros.innerHTML=="1"){
        numeros.innerHTML=numeros.innerHTML+"2";
        
    } 
    else{
        alert ("No Haga Trampa Falta la A")
    }

}

const boton3 =() =>{

    if (letras.innerHTML== "AB"){
        letras.innerHTML=letras.innerHTML + "C";
    }else if (numeros.innerHTML=="12"){
        numeros.innerHTML=numeros.innerHTML+"3";
            
    } 
    else{
        alert ("No Haga Trampa Falta la AyB")
    }
        
}

const boton4 =() =>{

    if (letras.innerHTML== "ABC"){
        letras.innerHTML=letras.innerHTML + "D";
    }else if (numeros.innerHTML=="123"){
        numeros.innerHTML=numeros.innerHTML+"4";            
    }
    else{
        alert ("No Haga Trampa Falta la A,ByC")
    }
    }

const boton5 =() =>{

    if (letras.innerHTML== "ABCD"){
        letras.innerHTML=letras.innerHTML + "E";
    }else if (numeros.innerHTML=="1234"){
        numeros.innerHTML=numeros.innerHTML+"5";
            
    }
    else{
        alert ("No Haga Trampa falta la A,B,C y D")
    }
    }

const boton6 =() =>{

    if (letras.innerHTML== "ABCDE"){
        letras.innerHTML=letras.innerHTML + "F";
    }else if (numeros.innerHTML=="12345"){
        numeros.innerHTML=numeros.innerHTML+"6";
            
    }else{
        alert ("No Haga Trampa Falta la A,B,C,D,E")
    }
    }    


const boton7 =() =>{

    if (letras.innerHTML== "ABCDEF"){
        letras.innerHTML=letras.innerHTML + "G";
    } else if (numeros.innerHTML=="123456"){
        numeros.innerHTML=numeros.innerHTML+"7";
            
    }
    else{
        alert ("No Haga Trampa Falta la A,B,C,D,E,F")
    }
    }  
    
const boton8 =() =>{

    if (letras.innerHTML== "ABCDEFG"){
        letras.innerHTML=letras.innerHTML + "H";
   }else if (numeros.innerHTML=="1234567"){
    numeros.innerHTML=numeros.innerHTML+"8";
        
    }else{
       alert ("No Haga Trampa Falta la A,B,C,D,E,F,G")
    }
    }

const boton9 =() =>{



    if (letras.innerHTML== "ABCDEFGH"){
        letras.innerHTML=letras.innerHTML + "I";
   }else if (numeros.innerHTML=="12345678"){
    numeros.innerHTML=numeros.innerHTML+"9";
        
    }else{
       alert ("No Haga TrampaFalta la A,B,C,D,E,F,G,H")
    }
    }
    

const boton0 =() =>{

    if (letras.innerHTML== "ABCDEFGHI"){
            letras.innerHTML=letras.innerHTML + "J";
    }else if (numeros.innerHTML=="123456789"){
        numeros.innerHTML=numeros.innerHTML+"0";
           
    }
    else{
        alert ("No Haga Trampa Falta la A,B,C,D,E,F,G,H,I")
    }
    }








 uno.onclick = function(){
     boton1();           

}

dos.onclick=function(){
    boton2();
}

tres.onclick=function(){
    boton3();
}


cuatro.onclick=function(){
    boton4();
}

cinco.onclick=function(){
    boton5();
}

seis.onclick=function(){
    boton6();
}

siete.onclick=function(){
    boton7();
}

ocho.onclick=function(){
    boton8();
}

nueve.onclick=function(){
    boton9();
}

diez.onclick=function(){
    boton0();
}

