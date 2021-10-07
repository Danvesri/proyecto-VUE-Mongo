<template>

    <div>
        <main class="container my-5">
            <div class="row">
                <section class="col-md-10 mx-auto">
                    <ul class="nav nav-tabs nav-tabsp nav-fill" id="productos" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="todos-tab" data-bs-toggle="tab" data-bs-target="#todos"
                                type="button" role="tab" aria-controls="todos" aria-selected="true">Todos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="materiales-tab" data-bs-toggle="tab" data-bs-target="#materiales"
                                type="button" role="tab" aria-controls="materiales" aria-selected="true">Materiales de
                                construcción</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="electricos-tab" data-bs-toggle="tab" data-bs-target="#electricos"
                                type="button" role="tab" aria-controls="electricos" aria-selected="true">Eléctricos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="maderas-tab" data-bs-toggle="tab" data-bs-target="#maderas"
                                type="button" role="tab" aria-controls="maderas" aria-selected="true">Maderas</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="dropdown-categorias" data-bs-toggle="dropdown"
                                href="#" role="button" aria-expanded="false">Más categorías</a>
                            <ul class="dropdown-menu" aria-labelledby="dropdown-categorias">
                                <li><a class="dropdown-item" href="#">Opción 1</a></li>
                                <li><a class="dropdown-item" href="#">Opción 2</a></li>
                                <li><a class="dropdown-item" href="#">Opción 3</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <form class="d-flex justify-content-end mx-auto">
                                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
                                <!-- <button class="btn btn-outline-success" type="submit">Buscar</button> -->
                            </form>
                        </li>
                    </ul>
                </section>
            </div>
            <div class="tab-content">
                <div class="tab-pane fade show active" id="todos" role="tabpanel" aria-labelledby="todos-tab">
                    <section class="row">
                        <div v-for= "item in productosArray" :key= "item.id" class="col-3 mt-5">
                            <div class="card m-auto shadow" style="width: 200px;">
                                <img v-bind:src= "item.img" class="card-img-top" alt="Imagen producto">
                                <div class="card-body border-top text-start">
                                    <h5 class="card-title color-marca">{{item.nombreProducto}}</h5>
                                    <p class="card-text text-black">
                                        {{item.descripcionProducto}}
                                    </p>
                                    <h5 class="card-title text-black">{{item.precio}}</h5>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="tab-pane fade" id="materiales" role="tabpanel" aria-labelledby="materiales-tab">
                    <section class="row">
                        <div v-for= "item in productosArray" :key= "item.id" class="col-3 mt-5">
                            <div class="card m-auto shadow" style="width: 200px;">
                                <img v-bind:src= "item.img" class="card-img-top" alt="Imagen producto">
                                <div class="card-body border-top text-start">
                                    <h5 class="card-title color-marca">"Segunda" + {{item.nombreProducto}}</h5>
                                    <p class="card-text text-black">
                                        {{item.descripcionProducto}}
                                    </p>
                                    <h5 class="card-title text-black">{{item.precio}}</h5>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="tab-pane fade" id="electricos" role="tabpanel" aria-labelledby="electricos-tab">
                    <section class="row">
                        <div v-for= "item in productosArray" :key= "item.id1" class="col-3 mt-5">
                            <div class="card m-auto shadow" style="width: 200px;">
                                <img v-bind:src="item.img" class="card-img-top" alt="Imagen producto">
                                <div class="card-body border-top text-start">
                                    <h5 class="card-title color-marca">"Tercera " + {{item.nombreProducto}}</h5>
                                    <p class="card-text text-black">
                                        {{item.descripcionProducto}}
                                    </p>
                                    <h5 class="card-title text-black">{{item.precio}}</h5>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="tab-pane fade" id="maderas" role="tabpanel" aria-labelledby="maderas-tab">
                    <section class="row">
                        <div v-for= "item in productosArray" :key= "item.id3" class="col-3 mt-5">
                            <div class="card m-auto shadow" style="width: 200px;">
                                <img v-bind:src="item.img" class="card-img-top" alt="Imagen producto">
                                <div class="card-body border-top text-start">
                                    <h5 class="card-title color-marca">"Cuarta " + {{item.nombreProducto}}</h5>
                                    <p class="card-text text-black">
                                        {{item.descripcionProducto}}
                                    </p>
                                    <h5 class="card-title text-black">{{item.precio}}</h5>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
    data() {
        return {
            productosArray : [
            {
                img: require('../assets/producto.png'),
                nombreProducto:"Taladro percutor",
                descripcionProducto: "Taladro Percutor 1/2 pul 650w 3150RPM 47250GPM",
                precio: "$ 200.000"
            },
            {
                img: require('../assets/producto.png'),
                nombreProducto:"Taladro percutor",
                descripcionProducto: "Taladro Percutor 1/2 pul 650w 3150RPM 47250GPM",
                precio: "$ 200.000"
            },
            {
                img: require('../assets/producto.png'),
                nombreProducto:"Taladro percutor",
                descripcionProducto: "Taladro Percutor 1/2 pul 650w 3150RPM 47250GPM",
                precio: "$ 200.000"
            },
            {
                img: require('../assets/producto.png'),
                nombreProducto:"Taladro percutor",
                descripcionProducto: "Taladro Percutor 1/2 pul 650w 3150RPM 47250GPM",
                precio: "$ 200.000"
            },
            {
                img: require('../assets/producto.png'),
                nombreProducto:"Taladro percutor",
                descripcionProducto: "Taladro Percutor 1/2 pul 650w 3150RPM 47250GPM",
                precio: "$ 200.000"
            }     
            ],
        }
    },
    methods: {

    },
    }
</script>