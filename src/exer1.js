/* Conectar archivo javascript al html de destino
* Imprimir Hello Javascript! en nuestra ventana del navegador
* * definir el contenedor o espacio que va a ocupar el mensaje Hello JS
* * acceder al contenedor desde javascript
* * crear el mensaje
* * insertar en el contenedor
* * imprimirlo en pantalla
*/
function WriteHelloJavascritInScreen(){
    let divTitle = document.getElementById("title");
    console.log(divTitle);
    let message = `<h1>Hello JavaScript </h1>`;
    divTitle.innerHTML = message;
}
function SumarNumeros(){

}
WriteHelloJavascritInScreen();