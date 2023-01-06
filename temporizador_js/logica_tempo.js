/*Francisco Alcaraz Sanchez */

var crono_ventana;
var count = 0;

//funciones
//función que añade 1 cero si el número tiene menos de un dígito
function pad(num) {
    return ("0" + num).slice(-2);
}

//función que recibe el tiempo que se recoge de los inputs en segundos y descuenta
function crono_funcion(time) {
    //funcion que recoge los milisegundos y les da formato para mostrar el contador
    function msToTime(segundos) {
        var secs = segundos % 60;
        segundos = (segundos - secs) / 60;
        var mins = segundos % 60;
        var hrs = (segundos - mins) / 60;

        if (secs == 00 && mins == 00 && hrs == 00) {
            crono_ventana.clearInterval(intervalo);
            crono_ventana.document.body.style.background = '#f8fa90';
            crono_ventana.setTimeout(function () { crono_ventana.close() }, 5000);
            boton.value = "Comenzar";
            document.getElementById("horas").value = 00;
            document.getElementById("minutos").value = 00;
            document.getElementById("segundos").value = 00;

            return crono_ventana.document.getElementById("header").innerText = "TIME OUT!!! (holi MA)";
        }

        return pad(hrs) + ':' + pad(mins) + ':' + pad(secs);

    }

    //una vez hecha la conversión se imprime en el header 
    crono_ventana.document.getElementById("header").innerText = msToTime(time - count);
    count++;
}

var intervalo;
//evento que hace la iteración de la función crono cuando se hace clic en el boton comenzar
let boton = document.getElementById("comenzar");
// let campos= document.getElementById("campos");

boton.addEventListener("click", () => {

    if (boton.value == "Comenzar") {
        boton.value = "Cancelar";
        let horas = document.getElementById("horas");
        let minutos = document.getElementById("minutos");
        let segundos = document.getElementById("segundos");
        let time = (horas.value * 3600) + (minutos.value * 60) + segundos.value * 1;
        let y = parseInt((window.screen.height / 2) - (100));
        let x = parseInt((window.screen.width / 2) - (200));

        crono_ventana = window.open("", "_blank", `width=400, height=200, top=${y}, left=${x}`);
        crono_ventana.document.write('<h1 id="header" style="text-align: center"></h1>');

        intervalo = crono_ventana.setInterval(crono_funcion, 1000, time);

    } else if (boton.value == "Cancelar") {
        boton.value = "Comenzar";
        crono_ventana.clearInterval(intervalo);
        crono_ventana.close();
        document.getElementById("horas").value = 00;
        document.getElementById("minutos").value = 00;
        document.getElementById("segundos").value = 00;3
        time = 0;
        count = 0;
    }
});








