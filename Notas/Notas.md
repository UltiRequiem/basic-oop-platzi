

## Modulo 5. Herencia
### Clase 25 *Aplicando herencia en lenguaje Java y PHP*

Ya sabemos cómo funciona la herencia de manera conceptual, pero aún lo hemos visto expresada en código dependiendo del lenguaje de programación que elijas. Y es que esto varía dependiendo de lo que estés eligiendo:

![src/POO_106](../src/POO_106.png)

- **Java:** Para crear una subclase se usa la palabra reservada extends, esto le indica a la clase hija cual va a ser su clase padre.
  
	![src/POO_107](../src/POO_107.png)
		
- **Python:** Usamos la palabra class seguido del nombre de la clase hija, se la pone entre paréntesis pasamos la clase padre como parámetro.
  
	![src/POO_108](../src/POO_108.png)
		
- **JavaScript:** Ha sido nuestro amigo rebelde durante todo el curso, por lo que no es de extrañar que JavaScript herede de una manera peculiar y es que simplemente toma a la clase hija seguido de la palabra prototype e inmediatamente instancia la clase padre.

	![src/POO_109](../src/POO_109.png)
		
- **PHP:** Esté lenguaje maneja la herencia de manera similar a Java, usando la palabra extends.

**JAVA**

Siguiendo con la clase Car es tiempo de crear los objetos que descienden de esté, para eso creamos cuatro archivos que serán nuestras clases UberX, UberPool, UberBlack y UberVan.

UberX y UberPool

![src/POO_110](../src/POO_110.png)

![src/POO_111](../src/POO_111.png)

- Creamos las clases y usamos extends para señalar que estamos heredando de la clase Car, creamos los atributos propios y después creamos un constructor que reciba cuatros parámetros.
- **super():** sirve para llamar al constructor de la clase padre.

UberBack y UberVan

![src/POO_112](../src/POO_112.png)

![src/POO_113](../src/POO_113.png)

- Importamos el ArrayList y Map de la biblioteca java.util
- **Map:** Es una interfaz que define el conducta general de una estructura que se hace relación de clave/valor.
- Creamos las clases y usamos extends para señalar que estamos heredando de la clase Car, creamos los atributos propios y después creamos un constructor que reciba cuatros parámetros.
- **super():** sirve para llamar al constructor de la clase padre.


**PHP**

Al igual que en Java, también creamos cuatro archivos nuevos que serán nuestras clases.

Tenemos nuestra clase Car:

![src/POO_114](../src/POO_114.png)

Y ahora crearemos una clase UberX:

![src/POO_115](../src/POO_115.png)
	
- **require_once:** Inserta en nuestro programa un código procedente de otro archivo, si el archivo no existe o contiene errores, nuestro programa no funcionará y obtendremos un fatal error.
- **extends:** Indicamos a la clase hija cual va a ser su clase padre.
- Los constructores padres no son llamados implícitamente si la clase hija define un constructor. Para ejecutar un constructor padre, se requiere invocar a **parent::__construct()** desde el constructor hijo. Si el hijo no define un constructor, entonces se puede heredar de la clase madre como un método de clase normal (si no fue declarada como privada).

**Reto 4**

- Termina las clases de PHP en Uber.

### Clase 26 *Solución del reto de herencia en PHP*

En la clase anterior nos quedamos con el reto de terminar la composición de las demás clases que heredan de Car, ahora vamos a ver lo que debimos haber hecho.

UberPool:

![src/POO_116](../src/POO_116.png)

- **require_once:** Inserta en nuestro programa un código procedente de otro archivo, si el archivo no existe o contiene errores, nuestro programa no funcionará y obtendremos un fatal error.
- **extends:** Indicamos a la clase hija cual va a ser su clase padre.
- Los constructores padres no son llamados implícitamente si la clase hija define un constructor. Para ejecutar un constructor padre, se requiere invocar a **parent::__construct()** desde el constructor hijo. Si el hijo no define un constructor, entonces se puede heredar de la clase madre como un método de clase normal (si no fue declarada como privada).

Y, las clases UberBlack y UberVan:

![src/POO_117](../src/POO_117.png)

![src/POO_118](../src/POO_118.png)

- En el caso de UberBlack y UberVan existe una ventaja de que PHP no es estrictamente tipado, por lo que, a diferencia de Java en donde tuvimos que escribir toda la composición de la variable, en esta ocasión no es necesario.

Ahora vamos a probar nuestro código:

![src/POO_119](../src/POO_119.png)

- Usando **require_once()** traemos las clases Car, UberX, UberPool y Account.
- El símbolo **$** seguido de un nombre representan a nuestras variables.
  
	- **$uberX, $uberPool:** Son los objetos de tipo UberX y UberPool respectivamente.

- Entre las paréntesis van las variables que aceptan cada clase

	- Primero va license (matricula), seguido del objeto Account que aceptan name (nombre) y document (documento), después va el brand (marca) del vehículo y finalmente el model (modelo).

- La sintaxis para llamar a un método en PHP es: ***$variable -> método().***

***Nota: Todavía no hemos ejemplificado en código la herencia de la clase Driver, pero con lo aprendido a estas alturas serías capaz de hacerlo por ti mismo.***

Finalmente para ejecutar nuestro código damos click derecho en algún lugar del editor y vamos en PHP Server: Serve project para arrancar un servidor.

![src/POO_120](../src/POO_120.png)

Una vez hecho eso nos aparecer un navegador con los datos imprimidos.

![src/POO_121](../src/POO_121.png)

Como vez, todavía no imprimimos los datos de la marca y modelo, pero eso lo estaríamos viendo más adelante.

### Clase 27 *Aplicando herencia en lenguaje Python y JavaScript*

Recuerdas que en Python la herencia se expresa de manera muy similar a un método constructor de otros lenguajes. Apliquemos herencia para nuestra familia Car, para esto crearemos las siguientes clases:

- UberX.py
- UberPool.py
- UberBlack.py
- UberVan.py

![src/POO_122](../src/POO_122.png)

![src/POO_123](../src/POO_123.png)

![src/POO_124](../src/POO_124.png)

![src/POO_125](../src/POO_125.png)

El código completo puedes verlo [aquí](https://github.com/anncode1/Curso-POO-Platzi/tree/2cbdf9db470a98323328f8a21bf6a9de941d008e/Python "aquí")

**JavaScript**

En clases anteriores te expliqué cómo ejecutar herencia en estándares anteriores al ECMAScript 6. Uno de los beneficios de utilizar este nuevo estándar que ejecutar herencia es tan simple como utilizar la palabra reservada extends.

![src/POO_126](../src/POO_126.png)

![src/POO_127](../src/POO_127.png)

![src/POO_128](../src/POO_128.png)

![src/POO_129](../src/POO_129.png)

Ahora para utilizar una de las clases y crear un objeto, por ejemplo de UberX, no olvides declarar la clase en el archivo index.html.

![src/POO_130](../src/POO_130.png)

Nuestro ejemplo se verá así:

![src/POO_131](../src/POO_131.png)

El código completo puedes verlo [aquí]( https://github.com/anncode1/Curso-POO-Platzi/tree/9251101bdc2722ed13f9d93cb432ba8e9aba17b4/JS "aquí")

### Clase 28 *Otros tipos de Herencia*

A partir de ahora las clases que estén siendo heredades las llamaremos familias.

Acabamos de aplicar herencia a la familia Car. Ahora apliquémosla a la familia Payment.

En clases anteriores te mencioné que otro punto de partida que puedes tomar para aplicar herencia es del hecho de que hay clases que lógicamente deberían estar en una familia, como es el caso de Payment.

Repasemos el diagrama de Payment

![src/POO_132](../src/POO_132.png)

Notarás que a nivel de código parece inservible pero cuando estemos en el caso de uso Pagar un Viaje, probablemente en ese momento no sabremos cuál es el método de pago, y necesitemos ingresar un dato lo suficientemente genérico que conceptualmente nos dé la información que necesitamos, en este caso que es un Payment. Este es un tipo de Polimorfismo y uno de los principios SOLID del software que obedece a la Inyección de Dependencias. Lo veremos más adelante a detalle.

Ahora nos faltará crear las clases y aplicar su herencia.

### Clase 29 *Reto 4*

Nos queda la Jerarquía Account pendiente.

Tomando como referencia nuestros diagramas. Plásmala en tu lenguaje de programación favorito.

Compártenos tus resultados.

![src/POO_133](../src/POO_133.png)

## Modulo 6. Encapsulamiento
### Clase 30 *Encapsulamiento*

Ya casi estamos terminando nuestro proyecto y estamos dando los últimos detalles que claro no son menos importantes porque aquí estaremos viendo las restricciones que tendrá cada clase.

Recordemos nuestra clase Car ahora añadiremos para imprimir la cantidad de pasajeros:

![src/POO_134](../src/POO_134.png)

Mientras que la archivo Main definimos una variable de tipo UberX:

![src/POO_135](../src/POO_135.png)

***RECUERDA: UberX hereda de Car, por lo que tiene todos sus métodos y atributos.***

**¿Qué pasa si ejecutamos el programa?**

Pues no imprimirá la licencia, el nombre del conductor y la cantidad de pasajeros que puede llevar. ¿Y si cambiamos passenger de 4 a 3? Pues nada extraños, nos seguirá  imprimiendo todo perfectamente.

Pero si lo meditamos un poco, las reglas de Uber dicen que los vehículo de categoría UberX  deben tener al menos cuatro pasajeros sin contar al conductor, es decir, aceptan cinco personas dentro pero cuatro lugares deben quedar disponible para ese vehículo. Entonces, si colocamos que passenger sea igual a tres generara una inconsistencia en nuestros datos. Una inconsistencia que podemos prevenir al hacer que nadie pueda alterar ese parámetro.

Y precisamente de eso trata nuestra clase de hoy: no alterar un parámetro, que nadie más tenga acceso, y la única forma que tenemos en Java (y en la programación orientada a objetos) será escondiendo ese parámetro, dejarlo invisible o al menos invalidado para los demás implementando la encapsulación.

**Encapsulamiento**

Este concepto consiste en la ocultación del estado o de los datos miembro de un objeto, de forma que sólo es posible modificar los mismos  mediante los métodos definidos para dicho objeto. Es decir, limitamos el acceso a las variables de nuestras clases.

Y es justamente eso lo que nosotros deseamos hacer, esconder el atributo passenger para que no pueda ser alterado o que al menos no le pongan datos que ni siquiera tengan que ver con la lógica de nuestro negocio.

**¿Como se encapsulan los datos?**

Cuando realizamos un abstracción en una clase para luego instanciarla y crear un objeto no se necesita conocer a fondo la implementación solo se necesita poder instanciar esa clase tampoco necesita conocer todas las propiedades de un objeto o acceder a ellas de forma directa, por  ello podemos crear diferentes métodos y forzar a utilizar métodos definidos para modificar estas propiedades.

Para realizar el proceso anterior se necesita conocer los modificadores de acceso. Los modificadores de acceso permiten dar un nivel de seguridad mayor a nuestras aplicaciones restringiendo el acceso a diferentes atributos, métodos, constructores asegurándonos que el usuario deba seguir una "ruta" especificada por nosotros para acceder a la información.

Es muy posible que nuestras aplicaciones vayan a ser usadas por otros programadores o usuarios con cierto nivel de experiencia; haciendo uso de los modificadores de acceso podremos asegurarnos de que un valor no será modificado incorrectamente por parte de otro programador o usuario. Generalmente el acceso a los atributos se consigue por medio de los métodos get y set, pues es estrictamente necesario que los atributos de una clase sean privados.

Teniendo en cuenta la siguiente imagen:

![src/POO_136](../src/POO_136.png)

- El recuadro verde hace referencia al modificador de acceso público (**public**). Es el más permisivo de todos, esto quiere decir que si el componente de una clase es public, tendremos acceso a él desde cualquier clase o instancia sin importar el paquete o procedencia de ésta.
- El recuadro azul hace referencia al modificador de acceso protegido (**protected**). Nos permite acceso a los componentes con dicho modificador desde la misma clase, clases del mismo paquete y clases que hereden de ella (incluso en diferentes paquetes).
- El recuadro amarillo hace referencia al modificador de acceso por defecto (**default**). Java nos da la opción de no usar un modificador de acceso y al no hacerlo, el elemento tendrá un acceso conocido como default, acceso por defecto, que permite que tanto la propia clase como las clases del mismo paquete accedan a dichos componentes (de aquí la importancia de declararle siempre un paquete a nuestras clases).
- El recuadro rojo hace referencia al modificador de acceso privado (**private**). Es el más restrictivo de todos, básicamente cualquier elemento de una clase que sea privado puede ser accedido únicamente por la misma clase por nada más. Es decir, si por ejemplo, un atributo es privado solo puede ser accedido por lo métodos o constructores de la misma clase. Ninguna otra clase sin importar la relación que tengan podrá tener acceso a ellos.

### Clase 31 *Encapsulando atributos en Java*

Ahora que ya entendimos sobre encapsulamiento y cuáles son los datos a encapsular vamos a hacerlo en nuestras clases.

Estamos en nuestro proyecto y quedamos que passenger sea validado, el hecho de que tuviera 3 lugares disponibles no es algo que va con la regla de nuestro negocio. Para eso vamos a arreglar esto poniendo un modificador de acceso en la clase Car. ¿Por qué la clase Car? Porque ahí precisamente es donde se encuentra nuestro atributo passenger y actualmente se ve así:

![src/POO_137](../src/POO_137.png)

El atributo passenger no tiene ningún modificador, es decir, su acceso es default. Podemos escribir ***public Integer passenger;*** para que sea de acceso público, pero nosotros queremos esconderlo y que sea accesible únicamente para la clase, por lo que su modificador será private.

Entonces quedara de este modo:

![src/POO_138](../src/POO_138.png)

Pero si lo ejecutamos nos saldrá error:

![src/POO_139](../src/POO_139.png)

Y eso se a que el atributo passenger ya no se encuentra visible para la clase Main, pero si continua siendo visible para la clase Car. Por eso, si nosotros queremos, podemos imprimir passenger desde el constructor de la siguiente forma:

![src/POO_140](../src/POO_140.png)


![src/POO_141](../src/POO_141.png)


Los que hicimos fue en la clase Car, dentro del constructor, darle al atributo passenger un valor de 3 (asientos disponibles) y debajo imprimimos en pantalla. Mientras que en la clase Main simplemente eliminamos o comentamos nuestro acceso al atributo passenger. Si esto lo ejecutamos podemos ver cómo nos corre perfectamente, sin embargo, si lo intentamos correr directamente a través de Main nos dará error porque el atributo passenger es privado y solo visible dentro de su clase.

Ahora vamos a darle un poco de forma y sentido. ¿Por qué lo dejamos accesible dentro de la clase? Porque necesitamos validarlo, lo que nosotros deseamos es que cuando alguien quiera ingresar los datos sobre la cantidad de asientos disponibles definitivamente debe ser de cuatro para los de tipo UberX.

Por eso, y para acceder a los datos privados, usaremos métodos especiales.

Los métodos get y set, son simples métodos que usamos en las clases para mostrar (get) o modificar (set) el valor de un atributo. El nombre del método siempre será get o set y a continuación el nombre del atributo, su modificador siempre es public ya que queremos mostrar o modificar desde fuera la clase.

Agregando los métodos get y set a nuestro programa quedaría así:

![src/POO_142](../src/POO_142.png)

![src/POO_143](../src/POO_143.png)

Creamos los métodos getPassenger y setPassenger.

- **getPassenger:** Retorna nuestro atributo passenger.
- **setPassenger:** Asigna el valor similar a como lo hicimos dentro del constructor.

Con esos dos métodos creados, en la clase Main podemos acceder a setPassenger y por parámetro enviar el valor para passenger. Y si este código lo ejecutamos nos seguirá corriendo perfectamente. Podríamos pensar que es exactamente lo mismo solo que cambiamos la variable por un método, pero no es así. Ahora seremos capaces de validar los valores enviados a passenger para que no permitir que ningún otro valor diferente a cuatro sea agregado o incluso enviar un parámetro vacío.

![src/POO_144](../src/POO_144.png)

Dentro del método setPassenger validamos para que el valor del atributo passenger siempre sea cuatro, en caso de que se ingrese otro, entonces nos marcara error. Con esto ya todos los futuros conductores estarán obligados a poner cuatro asientos disponibles para que les funcione la aplicación.

Incluso podríamos validar los datos dentro de printDataCar para que todos atributo sean diferente a null, es decir, que siempre tengan un valor.

## Modulo 7. Polimorfismo
### Clase 32 *Generando polimorfismo en Java*

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
### Clase 33 *El Diagrama UML de Uber*

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

### Clase 34 *Conclusiones*

Has llegado al final del curso de Programación Orientado a Objetos y fue un placer para todos ir en esta travesía de aprendizaje donde aprendimos primeramente a analizar un problema y no cualquier problema, sino que fue un problema de la vida real. Con nuestro proyecto Uber pudimos aprender el análisis que luego convertimos en gráficas y finalmente en un diagrama UML que nos permitió llevarlo directamente a la fase de programación. Y no solo fue un único lenguaje de programación, estuvimos aprendiendo cuatro lenguajes: Java, Python, PHP y JavaScript.

No olvides los pilares de la Programación Orientado a Objetos :

- Encapsulamiento
- Abstracción
- Herencia
- Polimorfismo

Y por supuesto no olvides las clases, los objetos y todo lo que hemos aprendido aquí.

### Clase 35 *Bonus: Qué es la Programación Orientada Objetos*

Imaginemos que tenemos un videojuego de fútbol en el cual debemos representar a los jugadores de cada equipo, con la Programación Orientada a Objetos podemos hacer una abstracción de todo esto.

La **abstracción** es cuando nosotros separamos los datos de un objeto para entonces generar un molde y ese molde se llama clase. La **clase** se compone de dos cosas: atributos y métodos. Los **atributos** son todas las características que corresponden al jugador, mientras que los **métodos** son todas las acciones que podrá hacer el jugador. Por ejemplo, los atributos de nuestro jugador pueden ser el nombre y apellido, y uno de los métodos podría ser la de correr.

A partir de clases podemos crear objetos. El **objeto** es la base de la Programación Orientada a Objetos y son las instancias de las clases, es decir, las clases son el molde de los objetos. Con las clases podemos crear tantos jugadores como queramos. Cada jugador tendrá características e incluso acciones diferentes, por ejemplo, podemos tener jugadores con diferentes colores de camisetas, shorts distintos o también puede que corran a velocidades diferentes.

Además, con la Programación Orientada a Objetos  podemos usar otro concepto importante que es la herencia. La **herencia** nos ayudara a crear nuevas clases a partir de otras. Es probable que en nuestro videojuego debamos crear la clase arbitro, la clase jugador y la clase portero, estas clases pueden tener características que sean muy similares entre sí.

También tenemos otro concepto importante que es el **encapsulamiento** que puede significar esconder algo. En nuestro videojuego podría ser que a nuestros jugadores quisiéramos esconderle la velocidad a la cual corren, es decir, hacerlo invisible a los demás jugadores.

Por ultimo tenemos el **polimorfismo** que significa muchas formas y también es una base importante. Nuestro entrenador podría asignarle un mensaje a cada uno de nuestros jugadores y cada uno ira al campo a ejecutar lo que interpreto de ese mensaje.
