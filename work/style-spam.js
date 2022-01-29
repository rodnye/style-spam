/*

 * StyleSpam

 */

"use-strict";
class Spam {
    
    constructor(_styles) {

        //estructuracion de elementos
        var body = document.getElementsByTagName('body')[0];
        var head = document.getElementsByTagName('head')[0];
        var fondo = document.createElement('div');
        
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
         "display: none");
        
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
        
        body.appendChild(fondo);
        head.appendChild(cssAnimation);

        //asignancion propiedades de clases
        this.elements = {
            shadow: fondo
        }
        this.styles = _styles;
        this.active_windows = 0;
    }
    
    //crear elementos de nueva ventana de alerta
    __create_new_window() {
        //elements
        var transparent = document.createElement('div');
        var ventana = document.createElement('div');
        var h1 = document.createElement("h3");
        var texto = document.createElement('p');
        var buttonContainer = document.createElement('div');
        var button1 = document.createElement('button');
        var button2 = document.createElement('button');
        var inputPrompt = document.createElement('input');
        
        
        ///CSS
        transparent.setAttribute("style", 
         "position:fixed;"+
         "background:rgba(0,0,0,0.1);"+
         "width:100vw;"+
         "height:100vh;"+
         "padding: 0;"+
         "margin: 0;"+
         "border: none;"+
         "border-radius: 0;"+
         "justify-content: center;"+
         "align-items:center;"+
         "display: none"
        );
        ///
        ventana.setAttribute("style", 
         "background:#ffffff;"+
         "border-radius:8px;"+
         "width:250px;"+
         "padding:15px;"+
         "margin:auto;"+
         "font-family:sans-serif;" +
         "display:flex;"+
         "flex-direction:column");
        ///
        h1.setAttribute("style", "margin:0;padding:0");
        ///
        inputPrompt.setAttribute("style",
         "padding: 2px;"+
         "margin-bottom: 4px;"+
         "border: none;"+
         "outline: none;"+
         "background:rgba(0,0,0,0);"+
         "border-bottom: solid;"
        ); 
        inputPrompt.setAttribute("placeholder", "...");
        ///
        var style_button = 
           "border:none;"+
           "color:#fff;"+
           "background:#00abff;"+
           "padding:3px 10px;"+
           "font-size:15px;"+
           "margin: 0 1px;"+
           "font-family:sans-serif";
        button1.setAttribute("style", style_button);
        button2.setAttribute("style", style_button);
        ///
        texto.setAttribute("style", "font-size: 15px");
        ///
        buttonContainer.setAttribute("style", 
         "display:flex;"+
         "flex-direction: row;"+
         "justify-content:flex-end"
        );
        ///
        button1.innerText = "OK";
        button2.innerText = "CANCEL";
        h1.innerText = "Spam";
        
        ///
        this.elements.background = transparent;
        this.elements.window = ventana;
        this.elements.title = h1;
        this.elements.text = texto;
        this.elements.button_container = buttonContainer;
        this.elements.input = inputPrompt;
        this.elements.button1 = button1;
        this.elements.button2 = button2;
        
        //estilizar
        var sp = this.elements;
        var estilos = this.styles;
        
        if (typeof estilos === 'object') {
            
            if (estilos.box) {
                for (var elem in estilos.box) {
                    sp.window.style[elem] = estilos.box[elem];
                }
            }
            if (estilos.text) {
                for (var elem in estilos.text) {
                    sp.text.style[elem] = estilos.text[elem];
                }
            }
            if (estilos.button) {
                for (var elem in estilos.button) {
                    sp.button1.style[elem] =  estilos.button[elem];
                    sp.button2.style[elem] =  estilos.button[elem];
                }
            }
            if (estilos.button_ok) {
                for (var elem in estilos.button_ok) {
                    sp.button1.style[elem] =  estilos.button_ok[elem];
                }
            }
            if (estilos.button_cancel) {
                for (var elem in estilos.button_cancel) {
                    sp.button1.style[elem] =  estilos.button_cancel[elem];
                }
            }
            if (estilos.title) {
                for (var elem in estilos.title) {
                    sp.title.style[elem] = estilos.title[elem];
                }
            }
            if (estilos.input) {
                for (var elem in estilos.input) {
                    sp.input.style[elem] = estilos.input[elem];
                }
            }
        }
    }
    
     /////////////////
    //// ALERT() ////
   /////////////////
    alert(str, estilos) {
        this.__create_new_window();
        var sp = this.elements;
        var this_g = this;
        
        //abrir spam alert
        if(this.active_windows===0) {
           sp.shadow.style.webkitAnimation = "open-window-spam 0.5s";
           sp.shadow.style.webkitAnimationFillMode= "both";
           sp.shadow.style.display = "block";
        }
        this.active_windows++;
        
        sp.background.style.webkitAnimation = "open-window-spam 0.5s";
        sp.background.style.webkitAnimationFillMode= "both";
        sp.background.style.display = "flex";
        sp.button1.onclick = clickOK;
        
        //asignar hijos
        sp.button_container.appendChild(sp.button1);
        sp.window.appendChild(sp.title);
        sp.window.appendChild(sp.text);
        sp.window.appendChild(sp.button_container);
        sp.background.appendChild(sp.window);
        sp.shadow.appendChild(sp.background);
        
        //alerta rápida
        if (typeof str == 'string') {
            sp.text.innerText = str;
        } 
        //Contenidos personalizados
        else if (typeof str == 'object') {

            if (str.title)sp.title.innerText = str.title;
            if (str.title === false || str.title === null)sp.title.innerText = "";

            if (str.text)sp.text.innerText = str.text;
            else sp.text.innerText = "";

            if (str.button) sp.button1.innerText = str.button;
            if (str.button_ok) sp.button1.innerText = str.button_ok;
            if (str.button_cancel) sp.button2.innerText = str.button_cancel;

           
            if (str.action) {
                //accion al hacer click
                sp.button1.onclick = function(_e) {
                    clickOK()
                    window.setTimeout(function(){str.action()}, 500);
                }
            }
        }
        
        // Estilos personalizados
        if (typeof estilos === 'object') {
            if (estilos.box) {
                for (var elem in estilos.box) {
                    sp.window.style[elem] = estilos.box[elem];
                }
            }
            if (estilos.text) {
                for (var elem in estilos.text) {
                    sp.text.style[elem] = estilos.text[elem];
                }
            }
            if (estilos.button) {
                for (var elem in estilos.button) {
                    sp.button1.style[elem] =  estilos.button[elem];
                }
            }
            if (estilos.title) {
                for (var elem in estilos.title) {
                    sp.title.style[elem] = estilos.title[elem];
                }
            }
        }
        
        // HACER CLICK EN EL BOTON
        function clickOK(){
          //cerrar spam
          this_g.active_windows--;
          sp.button1.onclick = function(){}
          if(this_g.active_windows===0) {
             sp.shadow.style.webkitAnimation = "close-window-spam 0.5s";
             sp.shadow.style.webkitAnimationFillMode = "both";
          }
          
          sp.background.style.webkitAnimation = "close-window-spam 0.5s";
          sp.background.style.webkitAnimationFillMode= "both";
          //cerrar completamente
          window.setTimeout(function(){
            if(sp.background.parentNode) sp.background.parentNode.removeChild(sp.background);
            else sp.background.setAttribute("style", "display:none");
            if(sp.background.remove) sp.background.remove()
            
            if(this_g.active_windows===0) sp.shadow.style.display = "none";
          }, 500);
        };
    }
    
     ///////////////////
    //// CONFIRM() ////
   ///////////////////
    confirm(str, estilos) {
        this.__create_new_window();
        var sp = this.elements;
        var this_g = this;
        
        //abrir spam alert
        if(this.active_windows===0) {
           sp.shadow.style.webkitAnimation = "open-window-spam 0.5s";
           sp.shadow.style.webkitAnimationFillMode= "both";
           sp.shadow.style.display = "block";
        }
        this.active_windows++;
        
        sp.background.style.webkitAnimation = "open-window-spam 0.5s";
        sp.background.style.webkitAnimationFillMode= "both";
        sp.background.style.display = "flex";
        sp.button1.onclick = clickOK;
        sp.button2.onclick = clickOK;
        
        //asignar hijos
        sp.button_container.appendChild(sp.button2);
        sp.button_container.appendChild(sp.button1);
        sp.window.appendChild(sp.title);
        sp.window.appendChild(sp.text);
        sp.window.appendChild(sp.button_container);
        sp.background.appendChild(sp.window);
        sp.shadow.appendChild(sp.background);
        
        //texto
        if (typeof str == 'string') {
            sp.text.innerText = str;
        } 
        //contenidos personalizados
        else if (typeof str == 'object') {

            if (str.title)sp.title.innerText = str.title;
            if (str.title === false || str.title === null)sp.title.innerText = "";

            if (str.text)sp.text.innerText = str.text;
            else sp.text.innerText = "";

            if (str.button)sp.button1.innerText = str.button;

            //Accion al hacer click
            if (str.action) {
                sp.button1.onclick = function(_e) {
                    clickOK();
                    window.setTimeout(function(){str.action(true)}, 500)
                };
                sp.button2.onclick = function(_e) {
                    clickOK();
                    window.setTimeout(function(){str.action(false)}, 500);
                }
            }
        }
        
        //Estilos personalizados
        if (typeof estilos === 'object') {
            
            if (estilos.box) {
                for (var elem in estilos.box) {
                    sp.window.style[elem] = estilos.box[elem];
                }
            }
            if (estilos.text) {
                for (var elem in estilos.text) {
                    sp.text.style[elem] = estilos.text[elem];
                }
            }
            if (estilos.button) {
                for (var elem in estilos.button) {
                    sp.button1.style[elem] =  estilos.button[elem];
                    sp.button2.style[elem] =  estilos.button[elem];
                }
            }
            if (estilos.button_ok) {
                for (var elem in estilos.button_ok) {
                    sp.button1.style[elem] =  estilos.button_ok[elem];
                }
            }
            if (estilos.button_cancel) {
                for (var elem in estilos.button_cancel) {
                    sp.button1.style[elem] =  estilos.button_cancel[elem];
                }
            }
            if (estilos.title) {
                for (var elem in estilos.title) {
                    sp.title.style[elem] = estilos.title[elem];
                }
            }
        }
        
        //HACER CLICK
        function clickOK(){
          //cerrar spam
          this_g.active_windows--;
          sp.button1.onclick = function(){}
          sp.button2.onclick = function(){}
          
          if(this_g.active_windows===0) {
             sp.shadow.style.webkitAnimation = "close-window-spam 0.5s";
             sp.shadow.style.webkitAnimationFillMode = "both";
          }
          
          sp.background.style.webkitAnimation = "close-window-spam 0.5s";
          sp.background.style.webkitAnimationFillMode= "both";
          //cerrar completamente
          window.setTimeout(function(){
            if(sp.background.parentNode) sp.background.parentNode.removeChild(sp.background);
            else sp.background.setAttribute("style", "display:none");
            if(sp.background.remove) sp.background.remove();
            
            if(this_g.active_windows===0) sp.shadow.style.display = "none";
          }, 500);
        };
    }
    
     //////////////////
    //// PROMPT() ////
   //////////////////
    prompt (str, estilos) {
        this.__create_new_window();
        var sp = this.elements;
        var this_g = this;
        
        //abrir spam alert
        if(this.active_windows===0) {
           sp.shadow.style.webkitAnimation = "open-window-spam 0.5s";
           sp.shadow.style.webkitAnimationFillMode= "both";
           sp.shadow.style.display = "block";
        }
        this.active_windows++;
        
        sp.background.style.webkitAnimation = "open-window-spam 0.5s";
        sp.background.style.webkitAnimationFillMode= "both";
        sp.background.style.display = "flex";
        sp.button1.onclick = clickOK;
        
        //asignar hijos
        sp.button_container.appendChild(sp.button1);
        sp.window.appendChild(sp.title);
        sp.window.appendChild(sp.text);
        sp.window.appendChild(sp.input);
        sp.window.appendChild(sp.button_container);
        sp.background.appendChild(sp.window);
        sp.shadow.appendChild(sp.background);
        
        //Texto
        if (typeof str == 'string') {
            sp.text.innerText = str;
        } 
        //Personalizar contenido
        else if (typeof str == 'object') {

            if (str.title)sp.title.innerText = str.title;
            if (str.title === false || str.title === null)sp.title.innerText = "";

            if (str.text)sp.text.innerText = str.text;
            else sp.text.innerText = "";

            if (str.button)sp.button1.innerText = str.button;
            
            // Accion al hacer click
            if (str.action) {
                sp.button1.onclick = function(_e) {
                    clickOK();
                    window.setTimeout(function(){str.action(sp.input.value===""?null:sp.input.value)}, 500);
                }
            }
        }

        //Estilos personalizados
        if (typeof estilos === 'object') {
            
            if (estilos.box) {
                for (var elem in estilos.box) {
                    sp.window.style[elem] = estilos.box[elem];
                }
            }
            if (estilos.text) {
                for (var elem in estilos.text) {
                    sp.text.style[elem] = estilos.text[elem];
                }
            }
            if (estilos.button) {
                for (var elem in estilos.button) {
                    sp.button1.style[elem] =  estilos.button[elem];
                }
            }
            if (estilos.title) {
                for (var elem in estilos.title) {
                    sp.title.style[elem] = estilos.title[elem];
                }
            }
            if (estilos.input) {
                for (var elem in estilos.input) {
                    sp.input.style[elem] = estilos.input[elem];
                }
            }
        }
        //HACER CLICK
        function clickOK(){
          //cerrar spam
          this_g.active_windows--;
          sp.button1.onclick = function(){};
          
          if(this_g.active_windows===0) {
             sp.shadow.style.webkitAnimation = "close-window-spam 0.5s";
             sp.shadow.style.webkitAnimationFillMode = "both";
          }
          
          sp.background.style.webkitAnimation = "close-window-spam 0.5s";
          sp.background.style.webkitAnimationFillMode= "both";
          //cerrar completamente
          window.setTimeout(function(){
            if(sp.background.parentNode) sp.background.parentNode.removeChild(sp.background);
            else sp.background.setAttribute("style", "display:none");
            if(sp.background.remove) sp.background.remove();
            
            if(this_g.active_windows===0) sp.shadow.style.display = "none";
          }, 500);
        };
    }
}
