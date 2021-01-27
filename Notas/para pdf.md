

## Modulo 7. Polimorfismo
# Clase 32 *Generando polimorfismo en Java*

Polimorfismo: Muchas formas. Poli = muchas, morfismo = formas. NO es Poliformismo

Es construir métodos con el mismo nombre pero con comportamiento diferente

Estamos llegando casi al punto final de nuestro proyecto y es momento de ver una de las partes más importantes, una pieza fundamental para nuestro proyecto, que es el polimorfismo.

**Polimorfismo**

Viene de «Poli» que significa mucho y «Morfismo» que significa formas, es decir, muchas formas.

***Observación: No es Poliformismo como algunos lo llaman.***

El polimorfismo es la capacidad que tienen los objetos de una clase en ofrecer respuesta distinta e independiente en función de los parámetros (diferentes implementaciones) utilizados durante su invocación. Dicho de otro modo el objeto como entidad puede contener valores de diferentes tipos durante la ejecución del programa.

En JAVA el término polimorfismo también suele definirse como 'Sobrecarga de parámetros', que así de pronto no suena tan divertido pero como veremos más adelante induce a cierta confusión. En realidad suele confundirse con el tipo de poliformismo más común, pero no es del todo exacto usar esta denominación.

Por lo general diremos que existen 3 tipos de polimorfismo:

- **Sobrecarga:** El más conocido y se aplica cuando existen funciones con el mismo nombre en clases que son completamente independientes una de la otra.
- **Paramétrico:** Existen funciones con el mismo nombre pero se usan diferentes parámetros (nombre o tipo). Se selecciona el método dependiendo del tipo de datos que se envíe.
- **Inclusión:** Es cuando se puede llamar a un método sin tener que conocer su tipo, así no se toma en cuenta los detalles de las clases especializadas, utilizando una interfaz común.

Un ejemplo clásico que podemos ver es esta:

![src/POO_145.png](../src/POO_145.png)

En la que tenemos una jerarquía de clases donde nuestra clase padre se llama Forma y sus clases hijas son Circulo y Cuadrado.

Las clases pueden compartir atributos y métodos, como ya hemos aprendido en clases anteriores, pero en este caso particular el Circulo va a dibujar de una forma distinta al Cuadrado. Esto es un comportamiento diferente que tiene el Circulo con respecto al Cuadrado, pero ese método dibujar proviene de la clase padre por lo que puede que se le haya dado un comportamiento por defecto o incluso puede que solo se haya dejado en blanco para que cada quien implemente el comportamiento que así lo desea, esto específicamente es lo que llamamos polimorfismo es donde tenemos un método que se comparte entre clases y cada una de esas clases le da el comportamiento que necesita o que desea.

Ahora vamos a nuestro proyecto y analicemos un momento. Ya hemos encapsulado y validado la variable passenger para que acepte únicamente el valor de 4, y entendemos que el método setPassenger puede variar dependiendo de cada clase. En este caso las clases UberX, UberPool y UberBlack aceptaran cuatro como la cantidad de asientos disponibles, pero con UberVan nos surge la necesidad de validar el dato a seis lugares disponibles, esa es la condición que nos pone Uber para tener un auto de tipo UberVan en la plataforma. Entonces es ahí, en UberVan, donde tenemos un comportamiento diferente.

El comportamiento involucra la asignación del dato, la validación del dato para seis en lugar de cuatro, y aquí ya estamos viendo impregnado el polimorfismo.

Vamos en nuestra clase Car:

![src/POO_146.png](../src/POO_146.png)

Encapsulamos todos nuestros demás datos, además de cambiar el modificador de acceso de Passenger y lo volvemos protected para que pueda ser usada por las subclases.

Después, con un click derecho, seleccionamos Source Action o Acción de Origen:

![src/POO_147.png](../src/POO_147.png)

Y luego elegimos «Generate Getters and Setters»:

![src/POO_148.png](../src/POO_148.png)

Esto nos trae automáticamente todos los getters y setters de todos los atributos que encapsulamos.

Entonces, la validación para que los asientos disponibles sea 4 ya queda heredado para las clases Car, UberX, UberPool y UberBlack, pero en el caso de UberVan es diferentes. Creemos un objeto de tipo UberVan y veamos que sucede.

![src/POO_149.png](../src/POO_149.png)

Por el bien del ejemplo hemos cambiado el constructor de UberVan por uno más sencillo para poder manipular mejos los datos, pero igualmente podemos ver cuando enviamos 6 como la cantidad que debe tener passenger no nos imprime ningún resultando, incluso cuando imprime nuestro objeto UberX, y nos dice que debemos poner 4 pasajero lo cual no es el dato que nosotros queremos que tenga.

Para arreglar esto vamos a la clase UberVan:

![src/POO_150.png](../src/POO_150.png)

**¿Para qué sirve @Override?**

Pues no sirve para nada. El uso de la anotación @Override es opcional.

Para lo único que realmente sirve es a modo de documentación:

- Un método marcado con @Override debería estar sobreescribiendo un método de alguna clase padre.
- Si esto no es así, el compilador de java generará un error

En este caso nosotros estamos trayendo el método setPassenger y usamos el polimorfismo de sobrecarga para cambiar la validación, es decir, sobre escribimos sobre el método para que tenga un nuevo comportamiento. En este caso, nuestra validación pasa de aceptar 4 a aceptar 6.

También podemos usarlo en UberX:

![src/POO_151.png](../src/POO_151.png)

En el caso de UberX nosotros traemos al método printDataCar y, aparte de decirle con **super.printDataCar()** que nos imprima lo normal (licencia, nombre y documento), también hacemos que nos imprima la marca y el modelo del vehículo.

Ahora, sí ejecutamos el código, podemos ver cómo nos imprime perfectamente tanto los datos del UberX como del UberVan:

![src/POO_152.png](../src/POO_152.png)

## Modulo 8. Cierre del curso
# Clase 33 *El Diagrama UML de Uber*

Este es el diagrama que finalmente obtuvimos, aquí solo faltaría añadirle los atributos que posee cada clase.

![src/POO_53.png](../src/POO_53.png)

Recopilemos todo lo que hemos aprendido para explicar los últimos detalles.

En primer lugar notarás que tenemos 3 tipos de flechas:

**Asociación**

![src/POO_16.png](../src/POO_16.png)

Como su nombre lo dice, notarás que cada vez que esté referenciada este tipo de flecha significará que ese elemento contiene al otro en su definición. Si recuerdas la clase Car, este contenía una instancia de Driver. La flecha apuntará hacia la dependencia.

![src/POO_153.png](../src/POO_153.png)

**Herencia**

![src/POO_18.png](../src/POO_18.png)

Siempre que veamos este tipo de flecha se estará expresando la herencia.

En nuestro diagrama tuvimos al menos tres familias conviviendo. La dirección de la flecha irá desde el hijo hasta el padre.

**Familia Car**

![src/POO_154.png](../src/POO_154.png)

**Familia Account**

![src/POO_155.png](../src/POO_155.png)

**Familia Payment**

![src/POO_132.png](../src/POO_132.png)

**Composición**

![src/POO_22.png](../src/POO_22.png)

Pasemos a una de nuestras piezas claves, pues notarás en el centro del diagrama la clase Trip que está vinculada a User, Car, Route y Payment. La composición va a significar una asociación entre estas clases con la diferencia de que para que esta clase pueda vivir forzosamente necesita a las demás. Es decir que estas clases son obligatorias para que la clase Trip pueda existir, esta dependencia obligatoria podríamos expresarla en el método constructor de la clase Trip, pues para que un objeto pueda ser creado dependerá de que los demás existan.

![src/POO_156.png](../src/POO_156.png)

Esta clase Trip poseerá la lógica más fuerte del negocio aquí será donde se concentrarán la mayor cantidad de clases.

Esto es todo nuestro diagrama de clases, que quedó totalmente expresado en nuestro proyecto.

# Clase 34 *Conclusiones*

Has llegado al final del curso de Programación Orientado a Objetos y fue un placer para todos ir en esta travesía de aprendizaje donde aprendimos primeramente a analizar un problema y no cualquier problema, sino que fue un problema de la vida real. Con nuestro proyecto Uber pudimos aprender el análisis que luego convertimos en gráficas y finalmente en un diagrama UML que nos permitió llevarlo directamente a la fase de programación. Y no solo fue un único lenguaje de programación, estuvimos aprendiendo cuatro lenguajes: Java, Python, PHP y JavaScript.

No olvides los pilares de la Programación Orientado a Objetos :

- Encapsulamiento
- Abstracción
- Herencia
- Polimorfismo

Y por supuesto no olvides las clases, los objetos y todo lo que hemos aprendido aquí.

# Clase 35 *Bonus: Qué es la Programación Orientada Objetos*

Imaginemos que tenemos un videojuego de fútbol en el cual debemos representar a los jugadores de cada equipo, con la Programación Orientada a Objetos podemos hacer una abstracción de todo esto.

La **abstracción** es cuando nosotros separamos los datos de un objeto para entonces generar un molde y ese molde se llama clase. La **clase** se compone de dos cosas: atributos y métodos. Los **atributos** son todas las características que corresponden al jugador, mientras que los **métodos** son todas las acciones que podrá hacer el jugador. Por ejemplo, los atributos de nuestro jugador pueden ser el nombre y apellido, y uno de los métodos podría ser la de correr.

A partir de clases podemos crear objetos. El **objeto** es la base de la Programación Orientada a Objetos y son las instancias de las clases, es decir, las clases son el molde de los objetos. Con las clases podemos crear tantos jugadores como queramos. Cada jugador tendrá características e incluso acciones diferentes, por ejemplo, podemos tener jugadores con diferentes colores de camisetas, shorts distintos o también puede que corran a velocidades diferentes.

Además, con la Programación Orientada a Objetos  podemos usar otro concepto importante que es la herencia. La **herencia** nos ayudara a crear nuevas clases a partir de otras. Es probable que en nuestro videojuego debamos crear la clase arbitro, la clase jugador y la clase portero, estas clases pueden tener características que sean muy similares entre sí.

También tenemos otro concepto importante que es el **encapsulamiento** que puede significar esconder algo. En nuestro videojuego podría ser que a nuestros jugadores quisiéramos esconderle la velocidad a la cual corren, es decir, hacerlo invisible a los demás jugadores.

Por ultimo tenemos el **polimorfismo** que significa muchas formas y también es una base importante. Nuestro entrenador podría asignarle un mensaje a cada uno de nuestros jugadores y cada uno ira al campo a ejecutar lo que interpreto de ese mensaje.
