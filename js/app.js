 /*    const carta= document.querySelector(".card-group") /* una ves que funcione esto a dentro remplazo los id para mostrar diferente inbformacion  */
 /*    carta.innerHTML= '<h2>PRODdasdasdCTOS</h2>' */



 window.addEventListener("load",CargaDatos);

 
    function CargaDatos (){
    document.getElementById("estereo").addEventListener("click",Cambioestereo);
    document.getElementById("parlantes").addEventListener("click",Cambioparlantes);
    document.getElementById("consolas").addEventListener("click",Cambioconsolas);
  
    document.getElementById("estufas").addEventListener("click",Cambioestufas);
    document.getElementById("aire").addEventListener("click",Cambioaire);
    document.getElementById("ventiladores").addEventListener("click",Cambioventiladores);
  
    document.getElementById("herramientas").addEventListener("click",Cambioherramientas);
    document.getElementById("bordeadora").addEventListener("click",Cambiobordeadora);
    document.getElementById("desmalezadora").addEventListener("click",Cambiodesmalezadora);
    document.getElementById("oferta").addEventListener("click",Cambiooferta);
    
    document.getElementById("notebooks").addEventListener("click",Cambionotebooks);
    document.getElementById("cpu").addEventListener("click",Cambiocpu);
    document.getElementById("perifericos").addEventListener("click",Cambioperifericos);
  }




  function Cambioperifericos(){
    const Cambiocontenido =document.querySelector("#divcentral")
Cambiocontenido.innerHTML=`<div class="d-flex justify-content-center">
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="./img/gpu1650super.jpg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">PLACA DE VIDEO 1650S</h5>
    <p class="card-text">48000$$</p>
    <a href="#" class="btn btn-primary">Comprar</a>
    <a href="#" class="btn">Caracteristicas</a>
  </div>
</div>

</div>`;}

  function Cambiocpu(){
    const Cambiocontenido =document.querySelector("#divcentral")
Cambiocontenido.innerHTML=`<div class="d-flex justify-content-center">
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="./img/cpuoficina.jpg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Cpu oficina I3</h5>
    <p class="card-text">74000$</p>
    <a href="#" class="btn btn-primary">Comprar</a>
    <a href="#" class="btn">Caracteristicas</a>
  </div>
</div>

</div>`;}
  function Cambionotebooks(){
    const Cambiocontenido =document.querySelector("#divcentral")
Cambiocontenido.innerHTML=`<div class="d-flex justify-content-center">
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="./img/notebook.jpg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">notebook GAMER I7 HP</h5>
    <p class="card-text">19000$</p>
    <a href="#" class="btn btn-primary">Comprar</a>
    <a href="#" class="btn">Caracteristicas</a>
  </div>
</div>

</div>`;}

    function Cambioestereo(){
            const Cambiocontenido =document.querySelector("#divcentral")
    Cambiocontenido.innerHTML=`<div class="d-flex justify-content-center">



    <table>
      <tr>  

        <td ><div class="card" style="width: 18rem;">
          <img class="tamaño" src="./img/estereo1.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Estereo Sony</h5>
            <p class="card-text">16000$</p>
            <a href="..." class="btn btn-primary">Comprar</a>
            <a href="./html/oferta/caraca20.html" class="btn">Caracteristicas</a>
          </div>
        </div></td>
        <td>
          <div class="card" style="width: 18rem;">
            <img class="tamaño" src="./img/estereonoblex.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Noblex</h5>
              <p class="card-text">8900$</p>
              <a href="#" class="btn btn-primary">Comprar</a>
              <a href="#" class="btn">Caracteristicas</a>
              
            </div>
          </div>
        </td>
        <td>
            <div class="card" style="width: 18rem;">
            <img class="tamaño" src="./img/parlantesony2.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">SONY</h5>
              <p class="card-text">11900$</p>
              <a href="#" class="btn btn-primary">Comprar</a>
              <a href="#" class="btn">Caracteristicas</a>
            </div>
          </div>
        </td>
        
      </tr>

     
  </div>`;}
    function Cambioparlantes(){
      const Cambiocontenido =document.querySelector("#divcentral")
Cambiocontenido.innerHTML=`<div class="d-flex justify-content-center">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="./img/parlantesony.jpg" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Parlante sony</h5>
      <p class="card-text">74000$</p>
      <a href="#" class="btn btn-primary">Comprar</a>
      <a href="#" class="btn">Caracteristicas</a>
    </div>
  </div>
  
  </div>`;}  
  function Cambioconsolas(){
    const Cambiocontenido =document.querySelector("#divcentral")
Cambiocontenido.innerHTML=`<div class="d-flex justify-content-center">
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="./img/consola1.jpg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Consola bluethoo</h5>
    <p class="card-text">54900$</p>
    <a href="#" class="btn btn-primary">Comprar</a>
    <a href="#" class="btn">Comprar</a>
  </div>
</div>

</div>`;}

function Cambioestufas(){
  const Cambiocontenido =document.querySelector("#divcentral")
Cambiocontenido.innerHTML=`<div class="d-flex justify-content-center">
<div class="card" style="width: 18rem;">
<img class="card-img-top" src="./img/estufa1.png" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Estufa hogar</h5>
  <p class="card-text">2500$</p>
  <a href="#" class="btn btn-primary">Comprar</a>
  <a href="#" class="btn">Comprar</a>
</div>
</div>
</div>

</div>`;}
function Cambioaire(){
  const Cambiocontenido =document.querySelector("#divcentral")
Cambiocontenido.innerHTML=`<div class="d-flex justify-content-center">
<div class="card" style="width: 18rem;">
<img class="card-img-top" src="./img/aire2.jpg" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Aire acondicionado</h5>
  <p class="card-text">49999$</p>
  <a href="#" class="btn btn-primary">Comprar</a>
  <a href="#" class="btn">caracteristicas</a>

</div>
</div>

</div>`;}
function Cambioventiladores(){
  const Cambiocontenido =document.querySelector("#divcentral")
Cambiocontenido.innerHTML=`<div class="d-flex justify-content-center">
<div class="card" style="width: 18rem;">
<img class="card-img-top" src="./img/ventilador1.jpg" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">ventilador de piso</h5>
  <p class="card-text">29000$</p>
  <a href="#" class="btn btn-primary">Comprar</a>
  <a href="#" class="btn">Caracteristicas</a>
</div>
</div>

</div>`;}
function Cambioherramientas(){
  const Cambiocontenido =document.querySelector("#divcentral")
Cambiocontenido.innerHTML=`<div class="d-flex justify-content-center">
<div class="card" style="width: 18rem;">
<img class="card-img-top" src="./img/herramientas1.jpg" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Herramientas</h5>
  <p class="card-text">8900$</p>
  <a href="#" class="btn btn-primary">Comprar</a>
  <a href="#" class="btn">Comprar</a>
</div>
</div>

</div>`;}
function Cambiobordeadora(){
  const Cambiocontenido =document.querySelector("#divcentral")
Cambiocontenido.innerHTML=`<div class="d-flex justify-content-center">
<div class="card" style="width: 18rem;">
<img class="card-img-top" src="./img/bordeadora2.jpg" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">bordeadora chica</h5>
  <p class="card-text">7500$</p>
  <a href="#" class="btn btn-primary">Comprar</a>
  <a href="#" class="btn ">Caracteristicas</a>
</div>
</div>

</div>`;}
function Cambiodesmalezadora(){
  const Cambiocontenido =document.querySelector("#divcentral")
Cambiocontenido.innerHTML=`<div class="d-flex justify-content-center">
<div class="card" style="width: 18rem;">
<img class="card-img-top" src="./img/bordeadora1.jpg" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Desmalezadora grande</h5>
  <p class="card-text">14500$</p>
  <a href="#" class="btn btn-primary">Comprar</a>
  <a href="#" class="btn">Caracteristicas</a>
</div>
</div>

</div>`;}

function Cambiooferta(){
  const Cambiocontenido =document.querySelector("#divcentral")
Cambiocontenido.innerHTML=`<table>
<tr>  

  <td ><div class="card" style="width: 18rem;">
    <img class="tamaño" src="./img/a20.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">A20</h5>
      <p class="card-text">25000$</p>
      <a href="" class="btn btn-primary">Comprar</a>
      <a href="./html/oferta/caraca20.html" class="btn">Caracteristicas</a>
    </div>
  </div></td>
  <td>
    <div class="card" style="width: 18rem;">
      <img class="tamaño" src="./img/j7.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Samsung j7</h5>
        <p class="card-text">15000$</p>
        <a href="#" class="btn btn-primary">Comprar</a>
        <a href="#" class="btn">Caracteristicas</a>
      </div>
    </div>
  </td>
  <td>
    <div class="card" style="width: 18rem;">
      <img class="tamaño" src="./img/a31.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Samsung A31</h5>
        <p class="card-text">33000$</p>
        <a href="" class="btn btn-primary">Comprar</a>
        <a href="./html/oferta/caraca31.html" class="btn">Caracteristicas</a>
      </div>
    </div>
  </td>
  
</tr>

<tr>  

  <td><div class="card" style="width: 18rem;">
    <img class="tamaño" src="./img/aire.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Aire acondicionado Inverter</h5>
      <p class="card-text">59000$</p>
      <a href="" class="btn btn-primary">Comprar</a>
      <a href="./html/oferta/caracaire.html" class="btn">Caracteristicas</a>
    </div>
  </div></td>
  <td>
    <div class="card" style="width: 18rem;">
      <img class="tamaño" src="./img/cpu.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">CPU GAMER</h5>
        <p class="card-text">149000$</p>
        <a href="" class="btn btn-primary">Comprar</a>
        <a href="./html/oferta/caraccortadora.html" class="btn">Caracteristicas</a>
      </div>
      </div>
    </div>
  </td>
  <td>
    <div class="card" style="width: 18rem;">
      <img class="tamaño" src="./img/bordeadora.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Bordeadora hogareña</h5>
        <p class="card-text">15000$</p>
        <a href="" class="btn btn-primary">Comprar</a>
        <a href="./html/oferta/caraccortadora.html" class="btn">Caracteristicas</a>
      </div>
      </div>
    </div>
  </td>
 
  
</tr>
<tr>  

  <td><div class="card" style="width: 18rem;">
    <img class="tamaño" src="./img/play4.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Play 4</h5>
      <p class="card-text">81000$</p>
      <a href="#" class="btn btn-primary">Comprar</a>
      <a href="#" class="btn">Caracteristicas</a>
    </div>
  </div></td>
  <td>
    <div class="card" style="width: 18rem;">
    <img class="tamaño" src="./img/xboxx.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">XBOX X PLUS</h5>
      <p class="card-text">76000$</p>
      <a href="#" class="btn btn-primary">Comprar</a>
      <a href="#" class="btn">Caracteristicas</a>
      </div>
    </div>
  </td>
  <td>
    <div class="card" style="width: 18rem;">
    <img class="tamaño" src="./img/iphone6.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Iphone6</h5>
      <p class="card-text">71999$</p>
      <a href="#" class="btn btn-primary">Comprar</a>
      <a href="#" class="btn">Caracteristicas</a>
      </div>
    </div>
  </td>
  
</tr>

</div>

</div>`;}


