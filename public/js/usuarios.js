const url = "http://localhost:3000/api/v1/usuarios";

$().ready(() => {
    cargatabla();
});
var cargatabla = () => {
    var html = "";
    $.get(url, (usuarios) => {
        $.each(usuarios, (index, val) => {
            html += "<tr>" + "<td>" + (
                index + 1
            ) + "</td>" + "<td>" + val.nombre + "</td>" + "<td>" + val.usuario + "</td>" + "<td>" + val.email + "</td>" + "<td>" + "<button class='btn btn-success'>Editar</button>" + "<button class='btn btn-danger'>Eliminar</button>" + "</td>" + "</tr>";
        });
        $('#cuerpoUsuarios').html(html);
    });
}

var guardaryEditar = () => {
    var nombre = document.getElementById('nombre').value;
    var usuario = document.getElementById('usuario').value;
    var email = $('#email').val();
    var password = $('#password').val();
    var tipoEnvio = "POST";
    var UsuarioDTO = {
        nombre: nombre,
        usuario: usuario,
        email: email,
        password: password
    }
    $.ajax({
        url:url,
        type:tipoEnvio,
        data:JSON.stringify(UsuarioDTO),
        processData:false,
        cache:false,
        headers:{
            "Content-Type":"application/json"
        },
        success:(IUsuario)=>{
            if(IUsuario){
                alert('Se guardo con exito');
                cargatabla();
                limpiaCajas();
            }else{
                console.log(IUsuario);
                alert('error al guardar');
                limpiaCajas();
            }
        }
    });
}


var limpiaCajas = () =>{
    $('#nombre').val('');
    document.getElementById('usuario').value='';
    $('#email').val('');
    $('#password').val('');
    $('#ModalUsuarios').modal('hide');
}