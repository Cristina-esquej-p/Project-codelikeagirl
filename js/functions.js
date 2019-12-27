var time = new Date();
var color;
var myElement;
if (time==12){ 
    color = 'red';
}
else if(time==13) {
    color = 'blue';
}
else {
    color ='yellow';
}
myElement=document.getElementById('timecolor');
myElement.style.backgroundColor = color;


<div>

        
<li>iphone 8</li>
<li><img src="img/iphone 8.png"width="20%"></li>
<li>iphone 8 Plus</li>
<li><img src="img/iphone 8 plus.png"width="15%"></li>

<li>iphone XR</li>
<a href="https://www.apple.com/es/shop/buy-iphone/iphone-xr/pantalla-de-6,1%E2%80%B3-64gb-azul">enlace a iphone X azul</a>
<li>iphone 11</li>
<a href="https://www.apple.com/es/shop/buy-iphone/iphone-11">enlace a iphone 11 verde</a>
<li>iphone 11 PRO</li> 
<a href="https://www.apple.com/es/shop/buy-iphone/iphone-11-pro">enlace a iphone 11 PRO rosa</a>       
</ul>
</div>

<div class="container">
        <div class="row">
            
        </div>
        
          <div class="card" style="width: 18rem;">
            <img src="img/iphone 8.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">iPhone 8</h5>
              <p class="card-text">Retina HD
                Pantalla panorámica LCD Multi‑Touch de 4,7 pulgadas (en diagonal) con tecnología IPS
                Resolución de 1.334 por 750 píxeles a 326 p/p
                Contraste de 1.400:1 (típico)</p>
              <a href="https://www.apple.com/es/shop/buy-iphone/iphone-8" class="btn btn-primary">Buy</a>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="img/iphone 8 plus.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">iPhone 8 Plus</h5>
                  <p class="card-text">Retina HD
                    Pantalla panorámica LCD Multi‑Touch de 5,5 pulgadas (en diagonal) con tecnología IPS
                    Resolución de 1.920 por 1.080 píxeles a 401 p/p
                    Contraste de 1.300:1 (típico)</p>
                  <a href="https://www.apple.com/es/shop/buy-iphone/iphone-8" class="btn btn-primary">Buy</a>
                </div>
              </div>
              <div class="card" style="width: 18rem;">
                <img src="img/iphone-xr.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">iPhone XR</h5>
                  <p class="card-text">Liquid Retina HD
                    Pantalla LCD Multi-Touch de 6,1 pulgadas (en diagonal) con tecnología IPS
                    Resolución de 1.792 por 828 píxeles a 326 p/p
                    Contraste de 1.400:1 (típico)
                    Pantalla True Tone
                    Gama cromática amplia (P3)
                    Respuesta háptica
                    Brillo máximo de 625 nits (típico)</p>
                  <a href="https://www.apple.com/es/shop/buy-iphone/iphone-xr/pantalla-de-6,1%E2%80%B3-128gb-rojo" class="btn btn-primary">Buy</a>
                </div>
              </div>
              <div class="card" style="width: 18rem;">
                <img src="img/iphone11-.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">iPhone 11</h5>
                  <p class="card-text">Liquid Retina HD
                    Pantalla LCD Multi-Touch de 6,1 pulgadas (en diagonal) con tecnología IPS
                    Resolución de 1.792 por 828 píxeles a 326 p/p
                    Contraste de 1.400:1 (típico)
                    Pantalla True Tone
                    Gama cromática amplia (P3)
                    Respuesta háptica
                    Brillo máximo de 625 nits (típico)
                    Cubierta oleófuga antihuellas</p>
                  <a href="https://www.apple.com/es/shop/buy-iphone/iphone-11" class="btn btn-primary">Buy</a>
                </div>
              </div>
              <div class="card" style="width: 18rem;">
                <img src="img/iphone-11-pro-gold-select-2019_GEO_EMEA.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">iPhone 11 PRO</h5>
                  <p class="card-text">uper Retina XDR
                      Pantalla OLED Multi‑Touch de 5,8 pulgadas (en diagonal)
                      Pantalla HDR
                      Resolución de 2.436 por 1.125 píxeles a 458 p/p
                      Contraste de 2.000.000:1 (típico)</p>
                  <a href="https://www.apple.com/es/shop/buy-iphone/iphone-11-pro" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card" style="width: 18rem;">
                <img src="img/apple-iphone-11-pro-max-.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">iPhone 11 PRO max</h5>
                  <p class="card-text">Super Retina XDR
                      Pantalla OLED Multi‑Touch de 6,5 pulgadas (en diagonal)
                      Pantalla HDR
                      Resolución de 2.688 por 1.242 píxeles a 458 p/p
                      Contraste de 2.000.000:1 (típico)</p>
                  <a href="https://www.apple.com/es/shop/buy-iphone/iphone-11-pro" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
          
              </div>
          </div>
    </div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse navbar-light "style="background-color: #e3f2fd;" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>