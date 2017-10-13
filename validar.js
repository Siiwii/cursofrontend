function validar() {
   let nombreap = document.getElementById("nombreap").value;
   let mail = document.getElementById("mail").value;
   let domicilio = document.getElementById("domicilio").value;
   let telefono = document.getElementById("telefono").value;
   let ciudad = document.getElementById("ciudad").value;
   let zip = document.getElementById("zip").value;
   let mensaje = document.getElementById("mensaje").value;
   let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; 
   let numverif = /^([0-9])*$/;
    
    if (nombreap == "" || mail == "" || domicilio == "" || telefono == "" || ciudad == "" || zip == "" || emailRegex == "" || mensaje == ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (nombreap.length>30){
        alert("Tu nombre no debe superar los 30 caracteres")
    }
    else if (mail.length>30){
        alert("Tu mail no debe superar los 30 caracteres")
    }
    else if (domicilio.length>30){
        alert("Tu domicilio no debe superar los 30 caracteres")
    }
    else if (telefono.length>12){
        alert("Tu teléfono no debe superar los 12 caracteres")
    }
    else if (ciudad.length>30){
        alert("Tu ciudad no debe superar los 30 caracteres")
    }
    else if (zip.length>6){
        alert("Tu código postal no debe superar los 6 caracteres")
    }
    else if (!emailRegex.test(mail)){
        alert("Tu e-mail es incorrecto. Por favor ingresalo correctamente")
    }
    else if (!numverif.test(telefono)){
        alert("Debes completar el campo del teléfono solo con números")
    }
    else if (!numverif.test(zip)){
        alert("Debes completar el campo del código postal solo con números")
    }
    else if (!document.getElementById("checkbox1").checked{
        alert("Debes aceptar los términos y condiciones del servicio")
    }
    return false;
}