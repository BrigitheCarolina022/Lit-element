import { LitElement,html } from "lit-element";
import styleCssn from './my-elementStyle';

export class mySecre extends LitElement{
    static get styles(){
        return[styleCssn];
    }
    render(){
        return html`
        <html lang="en">
        <head>
        <meta charset="UTF-8">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.3.js" integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM=" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/f31778972e.js" crossorigin="anonymous"></script>
    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <title>SITS</title>
    </head>
    <body >
        <nav class="navbar bg-light fixed-top box-sombra" style="">
    
    <div class="perfil-menu">
        <div class="row row-user">
            <div class="col-sm-1">
                <img src="img/logo2.png" alt="" class="img-style-logo">
            </div>
            <div class="col-sm-11">
                <div class="nav text-left">
                    <label class="margin" id="username">Admin Admin</label>
                </div>
            </div>
        </div>
    </div>
    
    
    <button class="navbar-toggler text-white" type="button" style="background-color: white;
    color: white;
    margin: 12px;" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon text-white" style="color: white;"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel"> Menu</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item option-menu">
                    <i class="fa-solid fa-chart-simple margin-icono size-icon"></i>
                    <span class="text-list-font">Perfil</span>
                </li>
                <li class="nav-item option-menu">
                    <i class="fa-solid fa-chart-simple margin-icono size-icon"></i>
                    <span class="text-list-font">Contactenos</span>
                </li>
                <li class="nav-item option-menu">
                    <i class="fa-solid fa-chart-simple margin-icono size-icon"></i>
                    <span class="text-list-font">Salir</span>
                </li>
            </ul>
    
        </div>
    
    </div>
    </nav>
    
    
    <div class="container-fluid" style="margin-top: 100px;">
    <div class="row">
        <div class="col-sm-3">
            <div class="espaci">
            <div class="card box-sombra card-menu">
<ul style="padding-left: 1px;">
<li class="option-menu">
    <a href="fas.html" class="link-buttom">
        <img src="img/3.png" alt="" class="img-list-link">
        <span class="text-list-font">Inicio</span>
    </a>
</li>
<li class="option-menu">
    <a href="pres.html" class="link-buttom">
        <img src="img/3.png" alt="" class="img-list-link">
        <span class="text-list-font">Presidencia</span>
    </a>
</li>
<li class="option-menu">
    <a href="vicepres.html" class="link-buttom">
        <img src="img/3.png" alt="" class="img-list-link">
        <span class="text-list-font">Vice Presidencia</span>
    </a>
</li>
<li class="option-menu">
    <a href="secre.html" class="link-buttom">
        <img src="img/3.png" alt="" class="img-list-link">
        <span class="text-list-font">Secretaria</span>
    </a>
</li>
<li class="option-menu">
    <a href="teso.html" class="link-buttom">
        <img src="img/3.png" alt="" class="img-list-link">
        <span class="text-list-font">Tesoreria</span>
    </a>
</li>
<li class="option-menu">
    <a href="Revi.html" class="link-buttom">
        <img src="img/3.png" alt="" class="img-list-link">
        <span class="text-list-font">Revisoria Fiscal</span>
    </a>
</li>
<li class="option-menu">
    <a href="liAfi.html" class="link-buttom">
        <img src="img/3.png" alt="" class="img-list-link">
        <span class="text-list-font">Lista afiliados</span>
    </a>
</li>
<li class="option-menu">
    <a href="liJuga.html" class="link-buttom">
        <img src="img/3.png" alt="" class="img-list-link">
        <span class="text-list-font">Lista de Jugadores</span>
    </a>
</li>
<li class="option-menu">
    <a href="listacoac.html" class="link-buttom">
        <img src="img/3.png" alt="" class="img-list-link">
        <span class="text-list-font">Lista de Coach's</span>
    </a>
</li>
<li class="option-menu">
    <a href="listamater.html" class="link-buttom">
        <img src="img/3.png" alt="" class="img-list-link">
        <span class="text-list-font">Lista Material</span>
    </a>
</li>
<li class="option-menu">
    <img src="img/3.png" alt="" class="img-list-link">
    <span class="text-list-font">Lista Asistencia</span>
</li>
<li class="option-menu">
    <img src="img/3.png" alt="" class="img-list-link">
    <span class="text-list-font">Cronograma</span>
</li>
<li class="option-menu">
    <img src="img/3.png" alt="" class="img-list-link">
    <span class="text-list-font">Varios</span>
</li>
</ul>
</div>                
</div>
</div>


    <div class="col-sm-9">
    <div class="espaci">

    <div class="row">
        <div class="col-sm">
            <div class="card box-sombra" style="width: 70%;margin-left: 30px;">
                <div class="card-body">
                    <div class="text-center">
                        <div class="row">
                            <div class="col-sm">

                            </div>
                            <div class="col-sm">
                                <h5 class="text-cat-scret">Actas</h5>
                                <hr style="width: 100%;">
                            </div>
                            <div class="col-sm">

                            </div>
                        </div>
                        <img src="img/4.png" class="imagen-cat-secret">
                    </div>
                    <br>
                    <div class="text-center">
                        <form action="lisAc.html">
                            <button type="submit" class="btn-pumas-solicitudes-dos">Gestionar</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
        <div class="col-sm">
            <div class="card box-sombra" style="width: 70%;margin-left: 30px;">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm">

                        </div>
                        <div class="col-sm">
                            <h5 class="text-cat-scret">Certificaciones</h5>
                            <hr style="width: 100%;">
                        </div>
                        <div class="col-sm">

                        </div>
                    </div>
                    <div class="text-center">
                        <img src="img/5.png" class="imagen-cat-secret-dos">
                    </div>
                    <br>
                    <div class="text-center">
                        <form action="ListaCer.html">
                            <button type="submit" class="btn-pumas-solicitudes-dos">Gestionar</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm">
            <div class="card box-sombra" style="width: 70%;margin-left: 30px;">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm">

                        </div>
                        <div class="col-sm">
                            <h5 class="text-cat-scret">Reuniones</h5>
                            <hr style="width: 100%;">
                        </div>
                        <div class="col-sm">

                        </div>
                    </div>
                    <div class="text-center">
                        <img src="img/6.png" class="imagen-cat-secret-tres">
                    </div>
                    <br>
                    <form action="ListaReu.html">
                        <button type="submit" class="btn-pumas-solicitudes-dos">Gestionar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>

    <br>
    <div class="row">
        <div class="col-sm">
            <div class="card box-sombra" style="width: 70%;margin-left: 30px;">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm">

                        </div>
                        <div class="col-sm">
                            <h5 class="text-cat-scret">Asistencia</h5>
                            <hr style="width: 100%;">
                        </div>
                        <div class="col-sm">

                        </div>
                    </div>
                    <div class="text-center">
                        <img src="img/7.png" class="imagen-cat-secret-tres">
                    </div>
                    <br>
                    <div class="text-center">
                        <form action="ListAsis.html">
                            <button type="submit" class="btn-pumas-solicitudes-dos">Gestionar</button>
                        </form>


                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm">
            <div class="card box-sombra" style="width: 70%;margin-left: 30px;">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm">

                        </div>
                        <div class="col-sm">
                            <h5 class="text-cat-scret">Comunicación</h5>
                            <hr style="width: 100%;">
                        </div>
                        <div class="col-sm">

                        </div>
                    </div>
                    <div class="text-center">
                        <img src="img/8.png" class="imagen-cat-secret-tres">
                    </div>
                    <br>
                    <div class="text-center">
                        <form action="listComu.html">
                            <button type="submit" class="btn-pumas-solicitudes-dos">Gestionar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm">
            <div class="card box-sombra" style="width: 70%;margin-left: 30px;">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm">

                        </div>
                        <div class="col-sm">
                            <h5 class="text-cat-scret">Cuentas</h5>
                            <hr style="width: 100%;">
                        </div>
                        <div class="col-sm">

                        </div>
                    </div>
                    <div class="text-center">
                        <img src="img/8.png" class="imagen-cat-secret-tres">
                    </div>
                    <br>
                    <div class="text-center">
                        <button disabled="" class="btn-pumas-solicitudes-dos">Gestionar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>
</div>

                </div>
    
            </div>
    </body>
    </html>
    

        `;

    }
}
customElements.define('my-secre',mySecre);