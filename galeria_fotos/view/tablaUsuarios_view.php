    <div class="tabla">
        <h1>Datos usuarios</h1>
        <table>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Telefono</th>
                <th>Nacionalidad</th>
            </tr>
            <?php
            foreach ($array_usuarios as $value) {
                if (is_array($value)) {
                    echo "<tr>";
                    foreach ($value as $key => $value2) {
                        echo "<td>" . $value2 . "</td>";
                    }
                    echo '<td><form action="" method="POST">
                        <input type="text" name="borrar_usuario" value="' . $value["nombre"] . '" hidden />
                        <input type="submit" name="eliminar" value="eliminar" />
                        </form></td>';
                }
            }
            ?>
        </table>
    </div>
    </main>