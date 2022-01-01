/*

 * StyleSpam Beta
 * 30/12/2021
 * Create by Rodny Estrada

 */

"use-strict";
class Spam {

    constructor() {

        //estructuracion de elementos
        var body = document.getElementsByTagName('body')[0];
        var head = document.getElementsByTagName('head')[0];
        var fondo = document.createElement('div');
        var ventana = document.createElement('div');
        var h1 = document.createElement("h3");
        var texto = document.createElement('p');
        var buttonContainer = document.createElement('div');
        var elbutton = document.createElement('button');
        var cssAnimation = document.createElement('style');
        cssAnimation.setAttribute("type", 'text/css');

        //estilos de elementos
        fondo.setAttribute("style", 
         "position:fixed;"+
         "background: rgba(0,0,0,0.5);"+
         "top:0; left:0;"+
         "width:100vw;"+
         "height:100vh;"+
         "padding: 0;"+
         "margin: 0;"+
         "border: none;"+
         "border-radius: 0;"+
         "z-index: 50;" +
         "justify-content: center;"+
         "align-items:center;"+
         
         "display: none");
         
        ventana.setAttribute("style", 
         "background:#fff;"+
         "border-radius:8px;"+
         "width:250px;"+
         "padding:15px;"+
         "margin:auto;"+
         "font-family:sans-serif;" +
         
         "display:flex;"+
         "flex-direction:column");

        h1.setAttribute("style", "margin:0;padding:0");
        elbutton.setAttribute("style", 
         "border:none;"+
         "color:#fff;"+
         "background:#00abff;"+
         "padding:3px 10px;"+
         "font-size:15px;"+
         "font-family:sans-serif");

        h1.innerText = "Spam";
        texto.setAttribute("style", "font-size: 15px");
        buttonContainer.setAttribute("style", 
         "display:flex;"+
         "justify-content:flex-end;");
         
        elbutton.innerText = "OK";

        //animacion para nodo
        cssAnimation.appendChild(
            document.createTextNode(
                '@-webkit-keyframes open-window-spam {'+
                'from {-webkit-transform:scale(1.5);-webkit-filter:opacity(0)}'+
                'to {-webkit-filter:opacity(1)}'+
                '}'
            )
        );
        cssAnimation.appendChild(
            document.createTextNode(
                '@-webkit-keyframes close-window-spam {'+
                'from {-webkit-filter:opacity(1)}'+
                'to {-webkit-transform:scale(1.2);-webkit-filter:opacity(0)}'+
                '}'
            )
        );

        //asignacion de hijos
        ventana.appendChild(h1);
        ventana.appendChild(texto);
        ventana.appendChild(buttonContainer);
        buttonContainer.appendChild(elbutton);
        fondo.appendChild(ventana);
        body.appendChild(fondo);
        head.appendChild(cssAnimation);

        //asignancion propiedades de clases
        this.property = {
            background: fondo,
            window: ventana,
            title: h1,
            content: texto,
            divbutton: buttonContainer,
            button: elbutton,
        }
    }

    alert(str, estilos) {
        var sp = this.property;
        function clickOK(){
            //cerrar spam
          sp.background.style.webkitAnimation = "close-window-spam 0.5s";
          sp.background.style.webkitAnimationFillMode= "both";
          window.setTimeout(function(){
            sp.background.style.display = "none";
          }, 500);
        };
        sp.background.style.webkitAnimation = "open-window-spam 0.5s";
        sp.background.style.webkitAnimationFillMode= "both";
         sp.background.style.display = "flex";
        sp.button.onclick = clickOK;
        if (typeof str == 'string') {
            sp.content.innerText = str;
        } else if (typeof str == 'object') {

            if (str.title)sp.title.innerText = str.title;
            if (str.title === false || str.title === null)sp.title.innerText = "";

            if (str.text)sp.content.innerText = str.text;
            else sp.content.innerText = "";

            if (str.button)sp.button.innerText = str.button;

            if (str.action) {
                sp.button.onclick = function(e) {
                    clickOK();
                    str.action()
                }
            }
        }

        if (typeof estilos === 'object') {
            if (estilos.box) {
                for (var elem in estilos.box) {
                    sp.window.style[elem] = estilos.box[elem];
                }
            }
            if (estilos.text) {
                for (var elem in estilos.text) {
                    sp.content.style[elem] = estilos.text[elem];
                }
            }
            if (estilos.button) {
                for (var elem in estilos.button) {
                    sp.button.style[elem] =  estilos.button[elem];
                }
            }
            if (estilos.title) {
                for (var elem in estilos.title) {
                    sp.title.style[elem] = estilos.title[elem];
                }
            }
        }
    }
}
function spam(str, styles) {
    return new Spam().alert(str, styles);
}
