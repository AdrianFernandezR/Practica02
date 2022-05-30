let notas = [];
let colorTitulo = "black";
let colorTexto = "black";
let tituloAux = 0;
let contentAux = 0;
let arrColor = ["lightgreen", "red", "violet", "yellow", "orange" , "blue","black"];


function cambiarColorTexto() {
    const contenido = document.getElementById("contenido");
    contentAux = (contentAux + 1) % 5;
    colorTexto = arrColor[contentAux];    
    contenido.style.color = colorTexto;    
}


function cambiarColorTitulo() {
    const title = document.getElementById("titulo");
    tituloAux = (tituloAux + 1) % 5;
    colorTitulo = arrColor[tituloAux];    
    title.style.color = colorTitulo;
}

function borrador() {
    document.getElementById("contenido").value = "";
}


function reset() {
    document.getElementById("titulo").value = "";
    document.getElementById("titulo").style.color = "black";
    document.getElementById("contenido").value = "";
    document.getElementById("contenido").style.color = "black";
    tituloAux = 0;
    contentAux = 0;
    colorTitulo = "black";
    colorTexto = "black";
}

function borrar() {
    // quitamos el último elemento
    notas.pop();
    if (notas.length === 0) {
        document.getElementById("top").style.visibility = "hidden";
        return
    }
    let tempNote = notas[notas.length-1];
    guardarAux(tempNote)

}

function guardarAux(newNote) {
    document.getElementById("tituloValor").innerHTML = newNote.title;
    document.getElementById("tituloValor").style.color = newNote.titleColor;
    document.getElementById("contenidoValor").innerHTML = newNote.content;
    document.getElementById("contenidoValor").style.color = newNote.contentColor;
}

function guardar() {
    // recuperamos valores
    let titleValue = document.getElementById("titulo").value;
    let contentValue = document.getElementById("contenido").value;
    // generamos un objeto con los valores 
    let newNote = {
        title: titleValue,
        titleColor: colorTitulo,
        content: contentValue,
        contentColor:colorTexto,
    };
    guardarAux(newNote)
    notas.push(newNote);
    console.log(notas);
    reset();
    document.getElementById("top").style.visibility = "visible";
}
