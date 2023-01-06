<div class="tabla">
    <h1>Datos Imágenes</h1>
    <table>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Fecha</th>
            <th>Título</th>
            <th>Lugar</th>
        </tr>
        <?php
        foreach ($array_imagenes as $value) {
            if (is_array($value)) {
                echo "<tr>";
                foreach ($value as $key => $value2) {
                    echo "<td>" . $value2 . "</td>";
                }
                echo '<td><form action="" method="POST">
                    <input type="text" name="borrar_imagen" value="' . $value["nombre_imagen"] . '" hidden />
                      <input type="submit" name="eliminar" id="eliminar" value="eliminar" />
                    </form></td>';
            }
        }
        ?>
    </table>
</div>