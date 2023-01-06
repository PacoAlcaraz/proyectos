<?php
if (isset($_SESSION["usuario"])) {
?>
    <header>
        <nav>
            <span class="izquierda"><a href="index.php">Home</a></span>
            <ul>
                <li><a href="#">Configuracion</a>
                    <ul>
                        <li><a href="index.php?controlador=usuarios">Usuarios</a></li>
                        <li><a href="index.php?controlador=galeria&action=imagenes">Imagenes</a></li>
                    </ul>
                </li>
                <li><a href="index.php?controlador=galeria&action=desconexion">Desconectar</a></li>
            </ul>
        </nav>
    </header>
<?php
} else {
?>
    <header>
        <nav>
            <span class="izquierda"><a href="index.php">Home</a></span>
            <ul>
                <li><a href="index.php?controlador=contactar">Contacta</a></li>
                <li><a href="index.php?controlador=usuarios">Log in</a></li>
            </ul>
        </nav>
    </header>

<?php
}
?>