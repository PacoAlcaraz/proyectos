<?php 
require_once("menu_view.php");

?>
<main>
    <div id="galeria">
        <?php 
        if(isset($array_imagenes)){
            echo '<div class="options">';
            foreach ($array_imagenes as $value) {
                if(is_array($value)){
                    ?>
                    <div class="option" style="background-image:url('img/<?php echo $value["nombre_imagen"]?>');
                     background-repeat:no-repeat; background-size:cover">
                    <?php
                    echo '<div class="shadow"></div>
                    <div class="label">
                       <div class="info">
                          <div class="main">'.$value["titulo"].'</div>
                          <div class="sub">'.$value["lugar"].'</div>
                       </div>
                    </div>
                 </div>';
                }
            }
            echo '</div>';
        }
        
        ?>
    </div>
</main>
    