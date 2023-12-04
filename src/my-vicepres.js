import { LitElement,html } from "lit-element";
import styleCssn from './my-elementStyle';

export class myPres extends LitElement{
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
    
    <br>
    <br>
    <br>
    <br>
    
    <div class="container-fluid">
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
    
        <div class="card card-padding box-sombra">
            <div class="container-fluid">
                <br>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="card mb-3 card-presi-row-acti" onclick="Lista()">
                            <div class="row g-0">
                                <div class="col-sm-2">
                                    <img src="img/10.png" alt="" class="imagen-icono-presi">
                                </div>
                                <div class="col-sm-8">
                                    <div class="card-body">
                                        <span class="text-card-presel">Solicitudes</span>
                                        <hr class="hr-title">
                                    </div>
                                </div>
                                <div class="col-sm-2 text-center">
                                    <img src="img/13.png" alt="" class="imagen-icono-presi-row">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card mb-3 card-presi-row-acti" onclick="ListaActas()">
                            <div class="row g-0">
                                <div class="col-sm-2">
                                    <img src="img/10.png" alt="" class="imagen-icono-presi">
                                </div>
                                <div class="col-sm-8">
                                    <div class="card-body">
                                        <span class="text-card-presel">Actas</span>
                                        <hr class="hr-title">
                                    </div>
                                </div>
                                <div class="col-sm-2 text-center">
                                    <img src="img/13.png" alt="" class="imagen-icono-presi-row">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card mb-3 card-presi-row-acti" onclick="pendientes()">
                            <div class="row g-0">
                                <div class="col-sm-2">
                                    <img src="img/12.png" alt="" class="imagen-icono-presi">
                                </div>
                                <div class="col-sm-8">
                                    <div class="card-body">
                                        <span class="text-card-presel">Pendientes</span>
                                        <hr class="hr-title">
                                    </div>
                                </div>
                                <div class="col-sm-2 text-center">
                                    <img src="img/13.png" alt="" class="imagen-icono-presi-row">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <hr>
                    </div>
                </div>
                <br>
                <div class="row" id="Listado" style="display: none;">
                    <div class="col text-center">
                        <div class="row">
                            <div class="col-sm">
    
                            </div>
                            <div class="col-sm">
                                <h3>Solicitudes</h3>
                                <hr style="width: 100%;">
                            </div>
                            <div class="col-sm">
    
                            </div>
                        </div>
    
                        <div class="row">
                            <div class="col-sm" style="text-align: center;">
                                <p>
                                    Por favor seleccione el tipo de solcitud:
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm"></div>
                            <div class="col-sm text-center">
                                <select name="" style="width: 100%;" id="listaSolicitud" class="form-control" onclick="Tipo_Solicitud(this.value)">
                                    <option value="0">Seleccione</option>
                                    <option value="1">Compra</option>
                                    <option value="2">Ingreso</option>
                                    <option value="3">Reunion</option>
                                </select>
                            </div>
                            <div class="col-sm"></div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="col-sm">
                                <div class="card">
                                    <div class="card-body">
                                        <div id="formulario" style="display: none;">
    
    
                                            <form>
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <div class="form-group mb-3">
                                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Elemento a comprar">
                                                        </div>
                                                    </div>
    
                                                    <div class="col-sm-6">
                                                        <div class="form-group mb-3">
                                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Valor de la compra">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <div class="form-group mb-3">
                                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Unidades a comprar">
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <div class="form-group mb-3">
                                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Fecha de la compra">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-9">
                                                        <div class="form-group mb-3">
                                                            <textarea class="form-control" placeholder="Descripción"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-3">
                                                        <button type="submit" class="btn-pumas-solicitudes">
                                                            Generar solicitud
                                                        </button>
                                                    </div>
                                                </div>
    
                                            </form>
    
                                        </div>
                                        <div class="row" id="formulario2" style="display: none;">
    
                                            <form>
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <div class="form-group mb-3">
                                                            <select placeholder="Tipo de ingreso" class="form-control">
                                                                <option value="0">Seleccione el tipo de ingreso
                                                                </option>
                                                                <option value="1">Registro Usuario</option>
                                                                <option value="2">Registro Integrante junta
                                                                </option>
                                                                <option value="3">Registro Jugador</option>
                                                                <option value="4">Registro Coach</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <div class="form-group mb-3">
                                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre del usuario">
                                                        </div>
                                                    </div>
                                                </div>
    
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <div class="form-group mb-3">
                                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Documento del usuario">
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <div class="form-group mb-3">
                                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Teléfono usuario">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <div class="form-group mb-3">
                                                            <input type="date" class="form-control" placeholder="Fecha de ingreso">
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <div class="form-group mb-3">
                                                            <input type="email" class="form-control" placeholder="Email de ingreso">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-8">
                                                        <div class="form-group mb-3">
                                                            <textarea class="form-control" placeholder="Descripción"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <button type="submit" class="btn-pumas-solicitudes">
                                                            Generar solicitud
                                                        </button>
                                                    </div>
                                                </div>
    
                                            </form>
                                        </div>
                                        <div class="row" id="formulario3" style="display: none;">
                                            <form>
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <div class="form-group mb-3">
                                                            <select placeholder="Motivo reuion" class="form-control">
                                                                <option value="0">Seleccione un motivo</option>
                                                                <option value="1">Reunion ordinaria</option>
                                                                <option value="2">Reunion Extra ordinaria
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <div class="form-group mb-3">
                                                            <select placeholder="Asistencia" class="form-control">
                                                                <option value="0">Seleccione asistentes</option>
                                                                <option value="1">Todo el equipo</option>
                                                                <option value="2">Solo junta directiva</option>
                                                                <option value="3">Representante Jugadores
                                                                </option>
                                                                <option value="4">Coachs</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <div class="form-group mb-3">
                                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Medio reunion">
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <div class="form-group mb-3">
                                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Fecha de la reunion">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-8">
                                                        <div class="form-group mb-3">
                                                            <textarea class="form-control" placeholder="Descripción"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <button type="submit" class="btn-pumas-solicitudes">
                                                            Generar solicitud
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <div class="row" id="Actas" style="display: none;">
                    <div class="col text-center">
                        <div class="row">
                            <div class="col-sm">
    
                            </div>
                            <div class="col-sm">
                                <h3>Actas</h3>
                                <hr style="width: 100%;">
                            </div>
                            <div class="col-sm">
    
                            </div>
                        </div>
    
                        <div class="row">
                            <div class="col-sm-6">
                                <p>
                                    Por favor seleccione el año a consultar:
                                </p>
                            </div>
                            <div class="col-sm-6">
                                <p>
                                    Por favor seleccione mes a consultar:
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-1"></div>
                            <div class="col-sm-4 text-center">
                                <select name="" id="listaSolicitud" class="form-control" onclick="Tipo_Solicitud(this.value)">
                                    <option value="0">Seleccione</option>
                                    <option value="2015">2015</option>
                                    <option value="2016">2016</option>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                </select>
                            </div>
                            <div class="col-sm-1"></div>
                            <div class="col-sm-1"></div>
                            <div class="col-sm-4">
                                <select name="" id="listaSolicitud" class="form-control">
                                    <option value="0">Seleccione</option>
                                    <option value="1">Enero</option>
                                    <option value="2">Febrero</option>
                                    <option value="3">Marzo</option>
                                    <option value="4">Abril</option>
                                    <option value="5">Mayo</option>
                                    <option value="6">Junio</option>
                                    <option value="7">Julio</option>
                                    <option value="8">Agosto</option>
                                    <option value="9">Septiembre</option>
                                    <option value="10">Octubre</option>
                                    <option value="11">Noviembre</option>
                                    <option value="12">Diciembre</option>
                                </select>
                            </div>
                            <div class="col-sm-1"></div>
                        </div>
                        <br>
                        <br>
                    </div>
    
                    <div class="row" id="tableActas" style="display: none;">
                        <div class="col">
                            <div class="card" style="border-radius: 20px;">
                                <div class="card-body">
                                    <table class="table table-hover table-bordered" style="border-radius: 20px;">
                                        <thead>
                                            <tr>
                                                <th class="text-center text-white" style="background-color: #BCBCBC;">N° Referencia</th>
                                                <th class="text-center text-white" style="background-color: #BCBCBC;">Titulo</th>
                                                <th class="text-center text-white" style="background-color: #BCBCBC;">Fecha</th>
                                                <th class="text-center text-white" style="background-color: #BCBCBC;">Url detalle</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>02252120</td>
                                                <td>Acta Asistencia Entrenamientos Pumas DC</td>
                                                <td>2023 - 10- 10</td>
                                                <td>
                                                    <a href="#">Acta 0001</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>02252120</td>
                                                <td>Acta Asistencia Entrenamientos Pumas DC</td>
                                                <td>2023 - 10- 10</td>
                                                <td>
                                                    <a href="#">Acta 0002</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>02252120</td>
                                                <td>Acta Asistencia Entrenamientos Pumas DC</td>
                                                <td>2023 - 10- 10</td>
                                                <td>
                                                    <a href="#">Acta 0003</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" id="pendientes" style="display: none;">
                    <div class="col text-center">
                        <div class="row">
                            <div class="col-sm">
    
                            </div>
                            <div class="col-sm">
                                <h3>Pendientes</h3>
                                <hr style="width: 100%;">
                            </div>
                            <div class="col-sm">
    
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="col-sm">
                                <div class="card" style="border-radius: 20px;">
                                    <div class="card-body">
                                        <table class="table table-hover table-bordered" style="border-radius: 20px;">
                                            <thead>
                                                <tr>
                                                    <th class="text-center text-white" style="background-color: #BCBCBC;">N° Pendiente</th>
                                                    <th class="text-center text-white" style="background-color: #BCBCBC;">Descripción</th>
                                                    <th class="text-center text-white" style="background-color: #BCBCBC;">Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        001
                                                    </td>
                                                    <td>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing
                                                        elit. Sint
                                                        doloremque mollitia quis accusantium nesciunt pariatur
                                                        itaque a
                                                        aspernatur placeat adipisci, facere rem consectetur odit
                                                        reprehenderit
                                                        unde, assumenda amet eaque illo?
                                                    </td>
                                                    <td>
                                                        <button class="btn-pumas-solicitudes">Detalle</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    
                </div>
    
            </div>

    </body>
    </html>
    
        `;

    }
}
customElements.define('my-vicepres',myPres);