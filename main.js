let root = document.querySelector("#root");


let div_formulario = document.createElement("div");
div_formulario.className = "div-formularios";

//Lista de textos 
let formularios = [
    {nombre:"Login", link:"componentes/login/login.html"},
    {nombre:"De Contacto", link:"#"},
    {nombre:"De Registro", link:"#"},
    {nombre:"De Búsqueda", link:"#"},
    {nombre:"De Pedido Compras", link:"#"},
    {nombre:"De Comentarios Reseñas", link:"#"},
];


formularios.forEach(itemLista=>{


    let div_item = document.createElement("a");
    div_item.className = "item";
    div_item.href = itemLista.link;
    div_item.innerText = itemLista.nombre;


    div_formulario.appendChild(div_item);
});

root.appendChild(div_formulario);