$(".option").click(function(){
    $(".option").removeClass("active");
    $(this).addClass("active");
    
 });

const ENVIAR= document.getElementById("enviar");

function comprobarCampo(regEx, cadena){
    return regEx.test(cadena);
}

if(ENVIAR!=null){
    ENVIAR.addEventListener("click",(e)=>{
        const TELEFONO= document.getElementById("telefono");
        const PASSWD= document.getElementById("passwd");

        let regEx_telefono= /[6-7]{1}\d{8}/;
        let regEx_passwd= /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,}$/;
        
        if(!comprobarCampo(regEx_telefono, TELEFONO.value)){
            e.preventDefault();
            alert("El formato del telefono no es correcto");
            TELEFONO.value="";
        }

        if(!comprobarCampo(regEx_passwd, PASSWD.value)){
            e.preventDefault();
            alert("La contraseña debe contener minusculas, mayusculas y numeros, con un mínimo de 6 carácteres");
            PASSWD.value="";
        }

        
    }) 
}