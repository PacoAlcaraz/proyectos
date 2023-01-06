/* Francisco José Alcaraz Sánchez*/

let devolucionesBiblioteca = new Array();
let prestamosBiblioteca = new Array();

class Libro {
    constructor(titulo, autor, codigo, cantidad, fichero) {
        this.titulo = titulo;
        this.autor = autor;
        this.codigo = codigo;
        this.cantidad = cantidad;
        this.fichero = fichero;
    }
}

class Prestamo {
    constructor(libro, dni, fecha) {
        this.libro = libro;
        this.dni = dni;
        this.fecha = fecha;
        this.sancion = false;
    }
}

const PRESTAR = document.getElementById("prestar");
const DEVOLVER = document.getElementById("devolucion");
const MOSTRAR = document.getElementById("mostrar");
const BUSCAR = document.getElementById("buscar");
const CONTAR = document.getElementById("contar");
const TITULARES = document.getElementById("titulares");
const FRAME = document.getElementById("frame");
const FORMULARIO = document.getElementById("formulario");

var libroAlquiler;

//creación de catalogo y prestamos
let catalogo = new Array();

//creacion de los libros de ejemplo
let libro1 = new Libro("Lejos de Luisiana", "Luz Gabás", "F01", 4, "libro1.jfif");
let libro2 = new Libro("Todo Arde", "Juan Gómez-Jurado", "F02", 3, "libro2.jfif");
let libro3 = new Libro("Después de Diciembre", "Joana Marcus", "F03", 2, "libro3.jfif");
let libro4 = new Libro("Encuentra tu Persona Vitamina", "Marian Rojas", "NF01", 5, "libro4.jfif");
let libro5 = new Libro("El Hombre en Busca de Sentido", "Victor Frankl", "NF02", 3, "libro5.jfif");
let libro6 = new Libro("Persepolis", "Marjane Satrapi", "C01", 1, "libro6.jfif");

//creación de los libros del catálogo
catalogo.push(libro1, libro2, libro3, libro4, libro5, libro6);

//creación de los libros prestados de ejemplo
prestamosBiblioteca.push(
    new Prestamo(libro1, "45468812A", new Date(2022, 9, 25)),
    new Prestamo(libro1, "71584478H", new Date(2022, 8, 05)),
    new Prestamo(libro5, "71222878G", new Date(2022, 8, 20)),
    new Prestamo(libro6, "12588963S", new Date(2022, 10, 21))
);
//creacion de los libros devueltos de ejemplo
devolucionesBiblioteca.push(
    new Prestamo(libro2, "45468812A", new Date(2022, 1, 17)),
    new Prestamo(libro5, "71585447M", new Date(2022, 5, 12)),
    new Prestamo(libro5, "46896587T", new Date(2022, 8, 20)),
    new Prestamo(libro6, "12588963S", new Date(2022, 10, 01))
);
devolucionesBiblioteca[1].sancion = true;
devolucionesBiblioteca[3].sancion = true;

//funciones
function pintarCatalogo(catalogo, elemento, boton) {
    let contenido = "";
    let key = Object.keys(catalogo);

    if (key[0] === "catalogo") {
        catalogo[key].forEach((element) => {
            contenido += `<div class="libro"><img id="${element.codigo}" src="media/${element.fichero}" />`;
            if (boton == "contar") {
                contenido += `<p id="p_msg" class="stock" id="parrafo" style="display: none; text-align: center;"></p></div>`;
            } else {
                contenido += `<p class="stock" id="msg" style="display: none;"> ${element.cantidad} disponible/s</p></div>`;
            }
        });

    } else {
        catalogo[key].forEach((element) => {
            contenido += `<div> <img id="${element.libro.codigo}" src="media/${element.libro.fichero}" /><p id="p_msg" class="stock" style="display: none;"
            ><strong>DNI usuario: </strong>${element.dni}</><br><strong>Alquilado el: </strong>${element.fecha.toLocaleDateString("es-ES")}</span></p></div>`;
        });
    }
    elemento.innerHTML = contenido;
}

function pintar_Array(array, elemento, valor) {
    let contenido = "";
    if (valor == true) {
        array.forEach(element => {
            contenido += `<div class="libro"><img id="${element.codigo}" src="media/${element.libro.fichero}"/><p id="p_msg" class="stock" style="display: none;"><strong>Código: </strong>${element.libro.codigo} <br/><strong>DNI: </strong>${element.dni} <br/>`;

            let dia = element.fecha.getDate();
            let mes = (element.fecha.getMonth() + 1);
            let anyo = element.fecha.getFullYear();

            contenido += `<strong>Fecha: </strong>${dia}/${mes}/${anyo}<br/></p></div>`;
        });

    } else if (valor == false) {
        array.forEach(element => {
            contenido += `<div class="libro"><img id="${element.codigo}" src="media/${element.libro.fichero}"/><p id="p_msg" class="stock" style="display: none;"><strong>Código: </strong>${element.libro.codigo} <br/><strong>DNI: </strong>${element.dni} <br/>`;

            let dia = element.fecha.getDate();
            let mes = (element.fecha.getMonth() + 1);
            let anyo = element.fecha.getFullYear();

            contenido += `<strong>Fecha: </strong>${dia}/${mes}/${anyo}<br/>`;

            if (element.sancion == true) {
                contenido += `Con sanción asociada.`;
            } else if (element.sancion == false) {
                contenido += `Sin sanción asociada.`;
            }
            contenido += `</p></div>`;
        });
    }
    elemento.innerHTML = contenido;
}

function pintarFormulario(destino, libro) {
    let contenido = `<div id="formulario"><form id="form"><label for="dni"><strong>D.N.I </strong></label><input type="text" id="dni" name="dni">
    <label for="titulo"><strong>Título </strong></label><input type="text" id="titulo" name="titulo" value="${libro.titulo}" readonly>
    <input type="button" class="button" id="alquilar" value="alquilar"></form></div>`;
    destino.innerHTML = contenido;
}

function buscarLibroCatalogo(codigo) {
    let libro = "";
    catalogo.forEach((element) => {
        if (element.codigo == codigo) {
            libro = element;
        }
    });
    return libro;
}

function buscarPrestamo(lista, codigo) {
    let indice = lista.findIndex(element => {
        return element.libro.codigo == codigo;
    });
    return indice;
}

function crearAlquiler(libro) {
    let dni = document.getElementById("dni").value;
    let expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

    if (expresion_regular_dni.test(dni)) {
        prestamosBiblioteca.push(new Prestamo(libro, dni, new Date()));
        return true;
    } else {
        document.getElementById("dni").innerText = "";
        return false;
    }
}

function reseteo_campos() {
    TITULARES.innerHTML = "";
    FRAME.innerHTML = "";
    FORMULARIO.innerHTML = "";
}

function comprobarSancion(fecha) {
    const cinco_dias = ((24 * 3600) * 5) * 1000;
    return (new Date().getTime() - fecha.getTime()) > cinco_dias;
}

function buscarCoincidencias(id) {
    let coincidencias = 0;
    devolucionesBiblioteca.forEach(element => {
        if (id == element.libro.codigo) {
            coincidencias++;
        }
    });
    return coincidencias;
}

function recoger_dnis() {
    let dnis = new Array();
    let prestamos_devoluciones = prestamosBiblioteca.concat(devolucionesBiblioteca);

    prestamos_devoluciones.forEach(element => {
        dnis.push(element.dni);
    });

    dnis = dnis.filter((item, index) => {
        return dnis.indexOf(item) === index;
    });
    return dnis;
};


function cargar_dnises(arrayDNI) {
    let select = document.getElementById("dnis");
    for (value in arrayDNI) {
        let option = document.createElement("option");
        option.text = arrayDNI[value];
        select.add(option);
    }
}

function pintarLibrosDNI(dni) {
    let contenido = "";
    prestamosBiblioteca.forEach(element => {
        if (element.dni == dni) {
            contenido += `<div> <img id="${element.libro.codigo}" src="media/${element.libro.fichero}" /><p id="p_msg" class="stock">
            ${element.fecha.toLocaleDateString("es-ES")}<br />Libro no devuelto</p></div>`;
        }
    });
    devolucionesBiblioteca.forEach(element => {
        if (element.dni == dni) {
            contenido += `<div> <img id="${element.libro.codigo}" src="media/${element.libro.fichero}" /><p id="p_msg" class="stock">
            ${element.fecha.toLocaleDateString("es-ES")}<br />Libro devuelto</p></div>`;
        }
    });
    return contenido;
}


function reseteo_campos() {
    TITULARES.innerHTML = "";
    FRAME.innerHTML = "";
    FORMULARIO.innerHTML = "";
}

//lógica del boton 1 (PRESTAR LIBRO)
PRESTAR.addEventListener("click", () => {
    reseteo_campos();
    TITULARES.innerHTML = "<h1>Ejemplares para alquilar: </h1>";

    pintarCatalogo({ catalogo }, FRAME, "prestar");

    let imagenes = document.getElementsByTagName("img");
    let lista = Array.from(imagenes);

    lista.forEach((element) => {
        element.addEventListener("mouseover", (event) => {
            event.target.style.opacity = "0.6";
            event.target.nextElementSibling.style.display = "block";
        });
        element.addEventListener("mouseout", (event) => {
            event.target.style.opacity = "1";
            event.target.nextElementSibling.style.display = "none";
        });
        element.addEventListener("click", (event) => {
            FORMULARIO.style.display = "block";
            libroAlquiler = buscarLibroCatalogo(event.target.id).cantidad > 0 ? buscarLibroCatalogo(event.target.id) : "";
            if (libroAlquiler != "") {
                pintarFormulario(FORMULARIO, libroAlquiler);
                document.getElementById("alquilar").addEventListener("click", () => {
                    let creado;
                    creado = crearAlquiler(libroAlquiler);
                    console.log(creado);
                    if (!creado) {
                        reseteo_campos();
                        FRAME.innerHTML = `<h1>"${libroAlquiler.titulo}" no se ha podido alquilar, dni incorrecto.</h1>`;
                    } else {
                        libroAlquiler.cantidad -= 1;
                        FORMULARIO.style.display = "none";
                        FRAME.innerHTML = `<h1>"${libroAlquiler.titulo}" ha sido alquilado con éxito.</h1>`;
                    }
                });
            } else alert("No hay unidades disponibles");
        });
    });
});

//lógica del botón 2 (DEVOLVER LIBRO)
DEVOLVER.addEventListener("click", () => {
    reseteo_campos();

    TITULARES.innerHTML = "<h1>Ejemplares disponibles para Devolución: </h1>";

    pintarCatalogo({ prestamosBiblioteca }, FRAME, "devolver");

    let imagenes = document.getElementsByTagName("img");
    let lista = Array.from(imagenes);
    lista.forEach((element) => {
        element.addEventListener("mouseover", (event) => {
            event.target.style.opacity = "0.6";
            event.target.nextElementSibling.style.display = "block";
        });
        element.addEventListener("mouseout", (event) => {
            event.target.style.opacity = "1";
            event.target.nextElementSibling.style.display = "none";
        });
        element.addEventListener("click", (event) => {
            let indice_prestamo = buscarPrestamo(prestamosBiblioteca, event.target.id);
            let libro_devuelto = prestamosBiblioteca.splice(indice_prestamo, 1);
            libro_devuelto[0].libro.sancion = comprobarSancion(libro_devuelto[0].fecha);
            let libroCatalogo = buscarLibroCatalogo(libro_devuelto[0].libro.codigo);
            libroCatalogo.cantidad++;
            devolucionesBiblioteca.push(libro_devuelto[0]);
            reseteo_campos();
            FRAME.innerHTML = `<h1>"${libroCatalogo.titulo}" ha sido devuelto con éxito.</h1>`;
            FORMULARIO.style.display = "none";
        })
    });
});

//BOTÓN 3
MOSTRAR.addEventListener("click", () => {
    reseteo_campos();

    TITULARES.innerHTML = '<h1>Seleccione la opción deseada:</h1>';
    FRAME.innerHTML = '<div><img id="prestamos" src="media/libros_prestados.jpg" alt="prestamo libro" title="PRESTAMOS" class="img_eleccion" style="cursor:help"><p class="msg" style="display: none; color: red;"><strong>Ver libros prestados</strong></p></div>';
    FRAME.innerHTML += '<div><img id="devoluciones" src="media/libros_devueltos.jpg" alt="devolucion libros" title="DEVOLUCIONES" class="img_eleccion" style="cursor:help"><p class="msg" style="display: none; color:red;"><strong>Ver libros Devueltos</strong></p></div>';

    let imagenes = document.getElementsByTagName("img");
    let lista = Array.from(imagenes);

    lista.forEach(element => {
        element.addEventListener("mouseover", (event) => {
            event.target.style.opacity = "0.6";
            event.target.nextElementSibling.style.display = "block";
        });
        element.addEventListener("mouseout", (event) => {
            event.target.style.opacity = "1";
            event.target.nextElementSibling.style.display = "none";
        });

        //CLICK imágenes prestamo-devolucion
        element.addEventListener("click", (event) => {

            if (event.target.id == "prestamos") { //ver PRESTAMOS
                reseteo_campos();

                TITULARES.innerHTML = '<h1>Ejemplares "Prestados": </h1>';

                pintar_Array(prestamosBiblioteca, FRAME, true);

                let imagenes = document.getElementsByTagName("img");
                let lista = Array.from(imagenes);

                lista.forEach(element => {
                    element.addEventListener("mouseover", (event) => {
                        event.target.style.opacity = "0.6";
                        event.target.nextElementSibling.style.display = "block";
                    });
                    element.addEventListener("mouseout", (event) => {
                        event.target.style.opacity = "1";
                        event.target.nextElementSibling.style.display = "none";
                    });
                });
            } else if (event.target.id == "devoluciones") { //VER DEVOLUCIONES
                reseteo_campos();

                TITULARES.innerHTML = '<h1>Ejemplares "Devueltos": </h1>';
                pintar_Array(devolucionesBiblioteca, FRAME, false);
                let imagenes = document.getElementsByTagName("img");
                let lista = Array.from(imagenes);

                lista.forEach(element => {
                    element.addEventListener("mouseover", (event) => {
                        event.target.style.opacity = "0.6";
                        event.target.nextElementSibling.style.display = "block";
                    });
                    element.addEventListener("mouseout", (event) => {
                        event.target.style.opacity = "1";
                        event.target.nextElementSibling.style.display = "none";
                    });
                });
            }
        });
    });

});

//---------------------------------------------------------------------------------------------------
//BOTÓN 4


BUSCAR.addEventListener("click", () => {
    reseteo_campos();

    TITULARES.innerHTML = '<h1>Mostrar préstamos por usuario:</h1>';
    FRAME.innerHTML = '<div><form><select name="dnis" id="dnis"><option>--- seleccione un DNI ---</option></select></form></div>';
    const SELECT = document.getElementById("dnis");

    let dnises = recoger_dnis()
    console.log(dnises);
    cargar_dnises(dnises);

    SELECT.addEventListener("change", () => {
        FRAME.innerHTML = pintarLibrosDNI(SELECT.value);
    })
});



//---------------------------------------------------------------------------------------------------
//lógica del BOTÓN 5

CONTAR.addEventListener("click", () => {
    reseteo_campos();

    TITULARES.innerHTML = '<h1>Ejemplares "prestados y devueltos": </h1>';

    pintarCatalogo({ catalogo }, FRAME, "contar");

    let imagenes = document.getElementsByTagName("img");
    let lista = Array.from(imagenes);
    lista.forEach(element => {
        element.addEventListener("mouseover", (event) => {
            console.log(event);
            event.target.style.opacity = "0.6";
            event.target.nextElementSibling.style.display = "block";
            let coincidencias = buscarCoincidencias(event.target.id);
            event.target.nextElementSibling.innerText = `Devoluciones realizadas: ${coincidencias}`;
        });
        element.addEventListener("mouseout", (event) => {
            event.target.style.opacity = "1";
            FORMULARIO.innerHTML = "";
            event.target.nextElementSibling.style.display = "none";
        });
    });
});

