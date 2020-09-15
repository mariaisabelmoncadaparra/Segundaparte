'use strict';
import React from 'react';
import './card.css';
function imagenes() {
    return (

        <div class="row row-cols-1 row-cols-md-3 row-cols-md-2 ">
            <div class="col mb-4">
                <div class="card h-100 ">
                    <img height="100px"width="15px" src="https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/04/pizzapepperoni0.jpg" class="card-img-top" alt="..." display="inline"background-color = "red" />
                    <div class="card-body" />
                    <h5 class="card-title">Producto</h5>
                    <a href="" class="btn btn-dark text-white">Comprar</a>
                </div>
            </div>


            <div class="col mb-4">
                <div class="card h-100 ">
                    <img height="100px" width="15px" src="https://cocina-casera.com/wp-content/uploads/2016/11/hamburguesa-queso-receta.jpg" class="card-img-top" alt="..." display="inline" background-color = "red"/>
                    <div class="card-body" />
                    <h5 class="card-title">Producto</h5>
                    <a href="" text-align="center" class="btn btn-dark text-white center">Comprar</a>
                </div>
            </div>

            <div class="col mb-4 center">
                <div class="card h-100 center">
                    <img height="100px" width="15px" src="https://www.cucinare.tv/wp-content/uploads/2020/01/Malteadas1.jpg" class="card-img-top" alt="..." display="inline" img-align="center"background-color = "red" />
                    <div class="card-body" />
                    <h5 class="card-title">Producto</h5>
                    <a href="" class="btn btn-dark text-white">Comprar</a>

                </div>
            </div>
        </div>

















    )
}

export default imagenes;
