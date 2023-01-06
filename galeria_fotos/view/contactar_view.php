<?php
require_once("menu_view.php");
?>

<main>
    <div>
        <form action="" method="post">
            <fieldset class="formularioUser">
                <legend>Envia email</legend>
                <label class="inp" for="nombre">
                    <input placeholder="" id="nombre" name="nombre" type="text">
                    <span class="lbl">Nombre</span>
                    <span class="focus-bg"></span>
                </label>
                <label class="inp" for="correo">
                    <input placeholder="" id="correo" name="correo" type="text">
                    <span class="lbl">Correo</span>
                    <span class="focus-bg"></span>
                </label>
                <textarea name="contenido" id="contenido" cols="80" rows="10" placeholder="Escriba aqui..."></textarea>
                <span class="lbl">Texto Email</span>
                <span class="focus-bg"></span>
                <input class="boton" type="submit" value="Enviar" name="enviar">
            </fieldset>
        </form>
        <p><?php echo $mensaje; ?></p>
    </div>
</main>