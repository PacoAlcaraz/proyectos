function megusta(elemento){
    if(elemento.parentElement.parentElement.style.order=="-1"){
        elemento.parentElement.parentElement.style.order="0" 
    }else  elemento.parentElement.parentElement.style.order="-1";
   
    elemento.classList.toggle("fa-solid");
    elemento.classList.toggle("fa-regular");
}