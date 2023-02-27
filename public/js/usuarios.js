const url = "http://localhost:3000/api/v1/usuarios";

$().ready(
    ()=>{
        var html="";
        $.get(url,(usuarios)=>{
            $.each(usuarios,(index, val)=>{
                html +="<tr>" + 
                "<td>" + (index+1) + "</td>" + 
                "<td>" + val.nombre + "</td>" + 
                "<td>" + val.usuario + "</td>" + 
                "<td>" + val.email + "</td>" + 
                "<td>"+
                "<button class='btn btn-success'>Editar</button>"+
                "<button class='btn btn-danger'>Eliminar</button>"+
                "</td>"+
                "</tr>"; 
            });
            $('#cuerpoUsuarios').html(html);
        });
       
    }
);
