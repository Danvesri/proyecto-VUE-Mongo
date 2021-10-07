<template>
    <div class="d-flex w-100 h-100 mx-auto flex-column">
        <header class="mb-auto">
            <nav class="navbar navbar-expand-lg navbar-dark bg-black">
                <div class="container">
                    <router-link to="/" class="navbar-brand">
                        <img src="../src/assets/logo.png" alt="" width="141" height="40" class="d-inline-block align-text-top" />
                    </router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                        <div class="d-flex">
                            <ul id="nav" class="navbar-nav nav-masthead me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <router-link to="/" class="nav-link" active-class="" aria-current="page">Inicio</router-link>
                                    <!-- <a class="nav-link active color-marca" aria-current="page"
                                        href="/html/index.html">Inicio</a> -->
                                </li>
                                <li class="nav-item">
                                    <router-link to="/nosotros" class="nav-link" active-class="active">Nosotros</router-link>
                                    <!-- <a class="nav-link" href="nosotros.html">Nosotros</a> -->
                                </li>
                                <li class="nav-item">
                                    <router-link to="/productos" class="nav-link" active-class="active">Productos</router-link>
                                    <!-- <a class="nav-link" href="productos.html">Productos</a> -->
                                </li>
                                <li class="nav-item">
                                    <router-link to="/articulos" class="nav-link" active-class="active">Artículos</router-link>
                                    <!-- <a class="nav-link" href="articulos.html">Artículos</a> -->
                                </li>
                                <li class="nav-item">
                                    <router-link to="/contacto" class="nav-link" active-class="active">Contacto</router-link>
                                    <!-- <a class="nav-link" href="">Contacto</a> -->
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <router-view></router-view>

        <footer class="footer mt-auto text-white bg-black p-3">
                <div class="container-fluid">
                    <div class="d-lg-flex justify-content-lg-center">
                        <div class=" ">
                            {{año}}
                            &copy;  Carvajal Materiales | Todos los derechos reservados.
                        </div>
                        <div class="mx-4">
                            <a class="text-white" href="https://www.facebook.com/Carvajalmateriales" target="_blank"><i class="fab fa-facebook"></i></a>
                            <a class="text-white" href="https://www.instagram.com/carvajalmateriales/" target="_blank"><i class="fab fa-instagram"></i></a>
                            <a class="text-white" href="https://api.whatsapp.com/send?phone=%2B573003659340&fbclid=IwAR1Fs2TmR-vYJG0c8c1zhm4XzCFEJjWr2zbsaMjivUyG2SCrSoFVYx49qwA" target="_blank"><i class="fab fa-whatsapp"></i></a>
                        </div>
                        <div class="">
                            <a class="text-white text-decoration-none" href="login.vue">Administrador</a>
                        </div>
                    </div>
                </div>
        </footer>
    </div>
</template>

<style>
    
    #nav a.router-link-exact-active {
        color: #f6821f;
    }
</style>

<script>
    export default {
        name: 'App',
        data(){
            return {
                año: new Date().getFullYear()
            }
        }
    }
</script>