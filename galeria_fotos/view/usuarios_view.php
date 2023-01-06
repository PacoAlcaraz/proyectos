<?php

require_once("menu_view.php");

if (isset($_SESSION["usuario"])) {

    require_once("formularioUsuarios_view.php");
    if (isset($array_usuarios)) {
        require_once("tablaUsuarios_view.php");
    }
} else {
?>
    <main>
        <div>
            <form action="" method="post">
                <fieldset class="formularioUser">
                    <legend>Log in</legend>
                    <label class="inp" for="nombre">
                        <input placeholder="" id="nombre" name="nombre" type="text">
                        <span class="lbl">Nombre</span>
                        <span class="focus-bg"></span>
                    </label>
                    <label class="inp" for="passwd">
                        <input placeholder="" id="passwd" name="passwd" type="password">
                        <span class="lbl">Contraseña</span>
                        <span class="focus-bg"></span>
                    </label>
                    <input class="boton" type="submit" value="Enviar" name="identificar">
                </fieldset>
            </form>
        </div>
    </main>
<?php
}

?>