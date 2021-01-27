# Clase 23 *JavaScript orientado a objetos, lo más nuevo*

A partir de las nuevas especificaciones del ECMAScript 6 ya podemos declarar una clase con la palabra reservada class, aunque es importante aclarar que estos no dejan de ser prototipos, sino todo lo contrario.

Además tendremos una palabra clave para definir un constructor, y dentro de este estarán las propiedades de nuestra clase definidas listas para inicializarse.

Transcribamos el código JavaScript que generamos en la clase anterior a este nuevo estándar.

La clase Car quedaría así:

![src/POO_96](../src/POO_96.png)

Si quisiéramos declarar un método, en esta nueva sintaxis dejaremos de utilizar la palabra clave function.

Ahora veamos a la clase Account:

![src/POO_97](../src/POO_97.png)

Y para finalizar aquí puedes ver las clases Route y Payment:

![src/POO_98](../src/POO_98.png)

![src/POO_99](../src/POO_99.png)

Notarás que para instanciar un objeto seguiremos usando la palabra clave new.

![src/POO_100](../src/POO_100.png)

Y los resultados serán los mismos:

![src/POO_101](../src/POO_101.png)