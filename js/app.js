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
  }


    

    function Cambioestereo(){
            const Cambiocontenido =document.querySelector("#divcentral")
    Cambiocontenido.innerHTML=`<div class="d-flex justify-content-center">



    <table>
      <tr>  

        <td ><div class="card" style="width: 18rem;">
          <img src="" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="./html/oferta/caraca20.html" class="btn btn-primary">Go somewhere</a>
          </div>
        </div></td>
        <td>
          <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </td>
        <td>
          <div class="card" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="./html/oferta/caraca31.html" class="btn btn-primary">Caracteristicas</a>
            </div>
          </div>
        </td>
        
      </tr>

      <tr class="posicion">  

        <td><div class="card" style="width: 18rem;">
          <img src="" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="./html/oferta/caracaire.html" class="btn btn-primary">Caracteristicas</a>
          </div>
        </div></td>
        <td>
          <div class="card" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="./html/oferta/caraccortadora.html" class="btn btn-primary">Caracteristicas</a>
            </div>
          </div>
        </td>
        <td>
          <div class="card" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="./html/oferta/caracpc.html" class="btn btn-primary">Caracteristicas</a>
            </div>
          </div>
        </td>
        
      </tr>
      <tr>  

        <td><div class="card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Caracteristicas</a>
          </div>
        </div></td>
        <td>
          <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Caracteristicas</a>
            </div>
          </div>
        </td>
        <td>
          <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Caracteristicas</a>
            </div>
          </div>
        </td>
        
      </tr>

    </div>`;}



    function Cambioparlantes(){
      const Cambiocontenido =document.querySelector("#divcentral")
Cambiocontenido.innerHTML=`<div class="d-flex justify-content-center">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  
  </div>`;}

  
  function Cambioconsolas(){
    const Cambiocontenido =document.querySelector("#divcentral")
Cambiocontenido.innerHTML=`<div class="d-flex justify-content-center">
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

</div>`;}

function Cambioestufas(){
  const Cambiocontenido =document.querySelector("#divcentral")
Cambiocontenido.innerHTML=`<div class="d-flex justify-content-center">
<div class="card" style="width: 18rem;">
<img class="card-img-top" src="..." alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>

</div>`;}
function Cambioaire(){
  const Cambiocontenido =document.querySelector("#divcentral")
Cambiocontenido.innerHTML=`<div class="d-flex justify-content-center">
<div class="card" style="width: 18rem;">
<img class="card-img-top" src="..." alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>

</div>`;}
function Cambioventiladores(){
  const Cambiocontenido =document.querySelector("#divcentral")
Cambiocontenido.innerHTML=`<div class="d-flex justify-content-center">
<div class="card" style="width: 18rem;">
<img class="card-img-top" src="..." alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>

</div>`;}
function Cambioherramientas(){
  const Cambiocontenido =document.querySelector("#divcentral")
Cambiocontenido.innerHTML=`<div class="d-flex justify-content-center">
<div class="card" style="width: 18rem;">
<img class="card-img-top" src="..." alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>

</div>`;}
function Cambiobordeadora(){
  const Cambiocontenido =document.querySelector("#divcentral")
Cambiocontenido.innerHTML=`<div class="d-flex justify-content-center">
<div class="card" style="width: 18rem;">
<img class="card-img-top" src="..." alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>

</div>`;}
function Cambiodesmalezadora(){
  const Cambiocontenido =document.querySelector("#divcentral")
Cambiocontenido.innerHTML=`<div class="d-flex justify-content-center">
<div class="card" style="width: 18rem;">
<img class="card-img-top" src="..." alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>

</div>`;}

function Cambiooferta(){
  const Cambiocontenido =document.querySelector("#divcentral")
Cambiocontenido.innerHTML=`<table>
<tr>  

  <td ><div class="card" style="width: 18rem;">
    <img src="./img/a20.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="./html/oferta/caraca20.html" class="btn btn-primary">Go somewhere</a>
    </div>
  </div></td>
  <td>
    <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </td>
  <td>
    <div class="card" style="width: 18rem;">
      <img src="./img/a31.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a id="caract" href="./html/oferta/caraca31.html" class="btn btn-primary">Caracteristicas</a>
      </div>
    </div>
  </td>
  
</tr>

<tr class="posicion">  

  <td><div class="card" style="width: 18rem;">
    <img src="./img/aire.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="./html/oferta/caracaire.html" class="btn btn-primary">Caracteristicas</a>
    </div>
  </div></td>
  <td>
    <div class="card" style="width: 18rem;">
      <img src="./img/bordeadora.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="./html/oferta/caraccortadora.html" class="btn btn-primary">Caracteristicas</a>
      </div>
    </div>
  </td>
  <td>
    <div class="card" style="width: 18rem;">
      <img src="./img/cpu.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="./html/oferta/caracpc.html" class="btn btn-primary">Caracteristicas</a>
      </div>
    </div>
  </td>
  
</tr>
<tr>  

  <td><div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Caracteristicas</a>
    </div>
  </div></td>
  <td>
    <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Caracteristicas</a>
      </div>
    </div>
  </td>
  <td>
    <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Caracteristicas</a>
      </div>
    </div>
  </td>
  
</tr>

</div>

</div>`;}

  