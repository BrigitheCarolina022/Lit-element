import { css } from "lit-element";


export default css`
.card{
  box-shadow: 4px 5px 7px 1px rgb(0 0 0 / 60%);
}
.body {
  background-color: #fff;
  background-image: url("img/Recurso1.png");
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0;
  height: 100vh;
}
.olvido-con {
  color: #4C4C4C;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
margin-top: auto;
}
.form-control {
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 0.5px solid #FF0000;
  border-radius: 0px;
}
.btn-danger-1 {
    background-color: #FF0000;
    border-radius: 12px;
    border: 0px;
    height: 40px;
    width: 40%;
    text-transform: uppercase;
    color: white;
  }
  .bg-danger-1 {
    background-color: #FF0000;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #fff;

  }



    



.box-sombra {
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.527);
}
.navbar {
  padding: 0PX;
}
.perfil-menu {
  background-color: #FF0000;
  border-radius: 0px 0px 42px 0px;
  width: 30%;
  height: 80px;
}

.row-user {
  background-color: white;
  width: 86%;
  margin-top: 23px;
  margin-left: 21px;
  border-radius: 33px 0px 37px 33px;
}


.img-style-logo {
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50px;
  margin: -17px;
}
img, svg {
  vertical-align: middle;
}
  .col-sm-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

.margin {
  margin-left: 8px;
  margin-top: 3px;
  font-size: 1rem;
  color: #4C4C4C;
  text-decoration: auto;
  font-weight: bold;
  font-family: 'RobotoBold';
}
label {
  display: inline-block;
}

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}


/* contenido */

.col-sm-3 {
  flex: 0 0 auto;
  width: 25%;
}

dl, ol, ul {
  margin-top: 0;
  margin-bottom: 1rem;
}
.option-menu {
  margin: 12px;
  list-style-type: none;
  border: solid 0.5px #dadada;
  border-radius: 6px;
  background-color: #ffffff;
  padding: 7px;
}
.link-buttom {
  text-decoration: none;
  color: #4C4C4C;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-style: normal;
}
.img-list-link {
  margin-right: 12px;
}

.box-sombra {
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.527);
}

/*contenido principal */
.card-menu {
  border-radius: 12px;
  background-color: #BCBCBC;}


.message {
  margin-top: 200px;

  margin-bottom: 200px;

}
.h5, h5 {
  font-size: 1.25rem;
}
.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: .5rem;
  font-weight: 500;
  line-height: 1.2;
  color: var(--bs-heading-color,inherit);
}


/*div1*/


.col-sm {
  flex: 1 0 0%;
}

.card-body {
  flex: 1 1 auto;
  padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
  color: var(--bs-card-color);
}

.text-center {
  text-align: center ;
}
.text-cat-scret {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.h5, h5 {
  font-size: 1.25rem;
}
.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: .5rem;
  font-weight: 500;
  line-height: 1.2;
  color: var(--bs-heading-color,inherit);
}

hr {
  margin: 1rem 0;
  color: inherit;
  border: 0;
    border-top-width: 0px;
    border-top-style: none;
    border-top-color: currentcolor;
  border-top: var(--bs-border-width) solid;
  opacity: .25;
}
.imagen-cat-secret {
  width: 75px;
  height: 80px;
}
img, svg {
  vertical-align: middle;
}
.btn-pumas-solicitudes-dos {
  background-color: #FF0000;
  border-radius: 12px;
  border: none;
  width: 100% !important;
  text-transform: uppercase;
  color: white;
}
.imagen-cat-secret-tres {
  width: 79px;
  height: 79px;
}
.imagen-cat-secret-dos {
  width: 60px;
  height: 80px;
}
/*listado afiliados */

.card-padding {
  padding: 20px;
}
.btn-new-acta {
  background-color: #FF0000;
  border-radius: 12px;
  border: 0px;
  height: 40px;
  width: 40%;
  text-transform: uppercase;
  color: white;
}

/*listado jugadores*/

@media (min-width: 576px) {
  .col-sm-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
}

.card-padding {
  padding: 20px;
}

/*Nuevo afiliado*/
.input-text {
  border-left: 0px;
  border-right: 0px;
  border-top: 1px;
  border-bottom: solid silver;
  border-radius: 0px;
  margin-bottom: 12px;
}

.title-Actas {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.h3, h3 {
  font-size: calc(1.3rem + .6vw);
}

.title-form-detail-acta {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
/*Lis Reu*/
.btn-new-reu {
  background-color: #FF0000;
  border-radius: 12px;
  border: 0px;
  height: 40px;
  width: 100%;
  text-transform: uppercase;
  color: white;
}
/*img*/
.imagen-icono-presi {
  width: 40px;
  height: 40px;
  margin-left: 17px;
  margin-top: 13px;
}
.imagen-icono-presi-row {
  width: 15px;
  height: 20px;
  margin-left: 10px;
  margin-top: 28px;
}
.btn-pumas-solicitudes {
  background-color: #FF0000;
  border-radius: 12px;
  border: 0px;
  height: 40px;
  width: 100%;
  text-transform: uppercase;
  color: white;
}




`