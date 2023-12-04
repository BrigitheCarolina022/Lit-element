import { LitElement,html } from "lit-element";
import styleCssn from './my-elementStyle1';
export class MyElement extends LitElement{
    static get styles(){
        return[styleCssn];
    }

    ingresar(event) {
        event.preventDefault();
        window.location.href = "fas.html";
      }
    
    // ejercicio por modulo
    render(){
        return html`
        <html>
        <head>
        <meta charset="UTF-8" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.6.3.js" integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM=" crossorigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/f31778972e.js" crossorigin="anonymous"></script>
        <title>SITS</title>
        </head>
        
        <body>
        <div class="body">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm"></div>
                    <div class="col-sm">
                    <div class="card">
        
                        <div class="card-header bg-danger-1">
                            <div class="text-center">
                                <h3>
                                    <b>PUMAS DC.</b>
                                </h3>
                            </div>
                        </div>
                            <div class="card-body">
                                <br>
        
                                <form action="fas.html">
                                    <div class="input-group ">
                                    <input type="text" class="form-control"  placeholder="Usuario" required="Por favor ingrese su usuario">
                                </div>
                                <br>
                                
                                <div class="input-group ">
                                    <input type="password" class="form-control"  placeholder="Password" required="Por favor ingrese su password" >
                                </div>
                                <br>
                                <br>
                                <br>
                                <form class="text-center" @submit="${this.ingresar}">
                                    <div class="text-center">
                                            <button type="submit" class="btn-danger-1">Ingresar</button> 
                                    </div>
                                    </form>
                                    <br>  
                                    <div class="text-center">
                                        <a class="olvido-con"><b>Olvido su contraseña?</b></a>
                                    </div>  
                                    <br>                                                                            
                                </form>
                            </div>
                    </div>
                    </div>
                    <div class="col-sm"></div>
                </div>
              
        
            </div>
        
            </div>
        </body>
        </html>        
        `;

    }
}
customElements.define('my-element',MyElement);