<template>
<div>
    <form action="formulario" method="POST">
          <div class="contenedor">
              <h1>Iniciar sesión</h1>
              <div class="element">
                  <div class="label"><label for="email">Correo</label></div>
                  <input id="email" type="text" name="email" placeholder="Escribe tu correo"><br/>
              </div>
              <div class="element">
                  <div class="label"><label for="password">Contraseña</label></div>
                  <input id="password" type="password" name="password" placeholder="Escribe tu Contraseña"><br/>
              </div>
              <br/>
              <input class="btn btn-primary" type="submit" value="Iniciar sesión"/>
          </div>
      </form>
    </div>
</template>