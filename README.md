# Style-Spam
# Instrucciones para la librería STYLESPAM

## ¿Qué es StyleSpam?
StyleSpam es una libreria muy simple para abrir ventanas de diálogo similares a un alert(), pero estas tienen un diseño agradable y pueden ser personalizadas

## ¿Cómo usar StyleSpam?
Es muy fácil de insertar en un proyecto html, como en cualquier otro, simplemente agréguela con la etiqueta ```<script>``` y el atributo con la url de donde esta ubicado el archivo:
```
<script src="/carpeta/styleSpam.min.js"></script>
```

Otra forma de insertarla es copiar el contenido del archivo directamente y pegarlo en el proyecto dentro de las etiquetas __script__

## Hola Mundo con StyleSpam

El uso de la librería es muy simple, solo hay que usar la funcion `spam()` y dentro escribir el string que se quiera mostrar en la ventana de dialogo
```
spam("Hola Mundo!");
```
Aparecera un letrero de forma animada que dice __Hola Mundo!__

## Instrucciones avanzadas
No solo puedes mostrar contenido en la ventana, también puedes modificar el texto del título de la ventana y el texto del botón, simplemente en ves de usar un string, se utiliza un objeto con los siguientes elementos:
```
spam({
   title: "Esto es una Alerta",
   text: "Hola Mundo!",
   button: "Aceptar"
})
```
Así hemos logrado modificar cada contenido de la ventana.
También StyleSpam te brinda la posibilidad de ejecutar alguna función cuando tocan el botón, puedes hacerlo asignándole una función al elemento `action` de esta forma:
```
spam({
   title: "Esto es una Alerta",
   text: "Hola Mundo!",
   button: "Aceptar",
   action: function(){
      console.log("Se ha tocado el boton")
   }
})
```
## Personalizar el Spam
La funcion spam tiene dos parametros 
`spam(parámetro1, parámetro2);`
el primer parámetro ya lo vimos, que puede ser un string o un objeto,<br> el segundo argumento es opcional, es para los estilos, debe ser un objeto que puede contener los elementos `box, title, text `y` button`

- `box`: es para la ventana
- `title`: es para personalizar el enunciado
- `text`: es para personalizar el contenido
- `button`: para el botón Ok

La sintaxis debe ser como en css, o sea, para las propiedades y valores, ejemplo:
```
spam("Hola Mundo!", {
   box: {
     background: "black", 
     color: "red"
   },
   button: {borderRadius: "5px"}
});
```

El ejemplo anterior mostraría un letrero animado con letras rojas y fondo negro diciendo __Hola Mundo!__
