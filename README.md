# Instrucciones para la librería STYLESPAM

## ¿Qué es StyleSpam?
StyleSpam es una librería como reemplazo a las ventanas de dialogo (alert, confirm, prompt).
Nos da la posibilidad de personalizarlos y animarlos a nuestro gusto.

## ¿Cómo usar StyleSpam?
Es muy fácil de insertar en un proyecto html, como en cualquier otro, simplemente agréguela con la etiqueta ```<script>``` y el atributo con la url de donde esta ubicado el archivo:
```
<script src="/carpeta/stylespam.min.js"></script>
```

## Hola Mundo con StyleSpam

El uso de la librería es muy simple. Nos proporciona una clase llamada `Spam` con la cual crearemos las alertas.
```
var spam = new Spam();
```
Una ves hecho esto, podremos llamar cuantas veces queramos a las ventanas.
```
var spam = new Spam();
spam.alert("Hello World!");
```
Aparecera un letrero de forma animada que dice __Hello World!__

## Crear Alerts
Como se mostró anteriormente, se utiliza el método `alert()` de la clase para crear las alertas.
```
var spam = new Spam();
spam.alert("Hello World!!");
spam.alert("This is a example!!");
```
Pero no solo eso, StyleSpam nos da la posibilidad de editar cada elemento del alert:
En el primer parámetro del alert, podemos introducir un objeto. Ejemplo:

```
spam.alert({
    title: "Hi, I`m the title",
    text: "Hello Word!!",
    button: "Clickme!"
})
```
Así hemos logrado modificar cada contenido de la ventana.
También StyleSpam te brinda la posibilidad de ejecutar alguna función cuando tocan el botón, puedes hacerlo asignándole una función al elemento `action` de esta forma:
```
spam.alert({
    title: "Hi, I`m the title",
    text: "Hello Word!!",
    button: "Clickme!",
    action: function(){
        console.log("The button has been clicked")
    }
})
```
| Argumento | Tipo     | Descripción                                                   |
|:-----------:|:----------:|:---------------------------------------------------------------|
|  `title`  |  string  | El texto del título, si ingresas null, se eliminará el título 
|   `text`  |  string  | El texto del cuerpo                                           |
|  `button` |  string  | El texto del botón OK                                         |
|  `action` | function | Callback que se ejecutará al hacer click en el botón          |

## Crear Confirms
La nueva función Confirms es similar a un alert, con la diferencia que esta tiene dos botones (aceptar y cancelar).
```
spam.confirm({
    title: "Hi, I`m the title",
    text: "Hello Word!!",
    button_ok: "ok!",
    button_cancel: "cancel:("
})
```
En el callback `action` se lanzará como parámetro true o false en dependencia si se dió click en aceptar o cancelar
```
spam.confirm({
    title: "Hi, I`m the title",
    text: "Hello Word!!",
    button_ok: "ok!",
    button_cancel: "cancel:(",
    action: function(select){
        console.log(select); //<= true or false
    }
})
```
| Argumento | Tipo     | Descripción                                                   |
|:-----------:|:----------:|:---------------------------------------------------------------|
|  `title`  |  string o null  | El texto del título, si ingresas null, se eliminará el título |
|   `text`  |  string  | El texto del cuerpo                                           |
|  `button_ok` |  string  | El texto del botón OK                                         |
|  `button_cancel` |  string  | El texto del botón CANCEL                                         |
|  `action` | function | Callback que se ejecutará al hacer click en el botón, obtendrá `true` o `false` según la elección del usuario         |


## Crear Prompt
Es similar a un alert pero con la gran diferencia de que este posee un cuadro de texto donde el usuario puede escribir

```
spam.prompt({
    title: "Hi, I`m the title",
    text: "Hello Word!!",
    button: "Clickme!",
})
```
Aparecera un letrero diciendo _Hello World!!_ con un input en donde se podrá escribir.
En el callback `action`, se le asignará como parámetro el texto introducido en el input.
```
spam.prompt({
    title: "Hi, I`m the title",
    text: "Hello Word!!",
    button: "Clickme!",
    action: function(value){
        console.log(value) //<= text of user
    }
})
```
*Nota*: Si el usuario dejó vació el texto, el parámetro que se le asignará es `null`

| Argumento | Tipo     | Descripción                                                   |
|:-----------:|:----------:|:---------------------------------------------------------------|
|  `title`  |  string  | El texto del título, si ingresas null, se eliminará el título |
|   `text`  |  string  | El texto del cuerpo                                           |
|  `button` |  string  | El texto del botón OK                                         |
|  `action` | function | Callback que se ejecutará al hacer click en el botón, obtendrá el contenido del texto ingresado por el usuario          |



## Personalizar el Spam
El `constructor` de la clase `Spam` se le puede asignar como argumento un objeto con los estilos de los alerts:
```
var spam = new Spam({
    box: {},
    title: {},
    text: {},
    button: {}
})
```
- `box`: es para la ventana
- `title`: es para personalizar el enunciado
- `text`: es para personalizar el contenido
- `button`: para el botón Ok

La sintaxis debe ser como en css, o sea, para las propiedades y valores, ejemplo:
```
var sp = new Spam({
   box: {
     background: "black", 
     color: "red"
   },
   button: {
     borderRadius: "5px",
     paddingTop: "3px"
   }
});

sp.alert("Hello World!!")
```

El ejemplo anterior mostraría un letrero animado con letras rojas y fondo negro diciendo __Hello World!!__

Para los estilos también puedes usar:
- `input`: para aplicar estilos al cuadro de texto en los prompts
- `button_ok`: para aplicar estilos específicamente al botón OK (en los confirms)
- `button_cancel`: para aplicar estilos específicamente al botón CANCEL (en los confirms)
