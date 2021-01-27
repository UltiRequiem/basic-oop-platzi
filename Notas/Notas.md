# Clase 13 *Clases en UML y su sintaxis en código*

En esta clase veremos cómo podemos definir las clases para plasmarlas en un diagrama UML. Recordemos que nuestro proceso es: identificar el problema, identificar los objetos, definir las clases y finalmente plasmarlas en un diagrama.

**Clases en UML**

![src/POO_33.png](../src/POO_33.png)

En UML, una clase será representada como un rectángulo con tres zonas:

- **Superior:** Es donde colocaremos el nombre de la clase
- **Intermedio:** Aquí definiremos los atributos
- **Inferior:** Es donde estarán los comportamientos, es decir, los que serán las funcionalidades.

Con esto le daremos a nuestras clases en UML una identidad (nombre de la clase), estados (atributos o propiedades) y operaciones (comportamientos).

Para nuestro ejemplo, imaginemos que tenemos una clase **Person** cuyo atributo o propiedad es **name** y su comportamiento sea **walk()**:

![src/POO_34.png](../src/POO_34.png)

Ya, una vez identificado el objeto Person y puesto en un diagrama UML, nuestro siguiente paso es definirlo en código.

**SINTAXIS EN CÓDIGO**

Nosotros ya habíamos dicho que trabajaremos en cuatro lenguajes: Java, Python, JavaScript y PHP.

![src/POO_35.png](../src/POO_35.png)

- **Java:** Para declarar una clase utilizamos la palabra reservada **class**, seguido del nombre de la clase y finalizamos con llaves.
  
  ![src/POO_36.png](../src/POO_36.png)
		
- **Python:** Aquí usamos la palabra reservada **class**, seguido del nombre de la clase y finalizamos con dos puntos.
  
  ![src/POO_37.png](../src/POO_37.png)
		
- **JavaScript:** Como sabemos este lenguaje se maneja de forma distinta y eso se debe a que todo es a través de prototipos. Sin embargo, utiliza la Programación Orientada a Objetos para analizar problemas y posteriormente poder plasmarlos en código de la mejor forma, por lo tanto al tenerlo en prototipos utilizaremos "funciones especiales" para definir las clases. Usaremos la palabra reservada **function** seguido del nombre de la clase con paréntesis y finalizaremos con llaves.

  ![src/POO_38.png](../src/POO_38.png)
		
- **PHP:** Para declarar una clase nueva es totalmente idéntico a como declaramos en Java.

**DEFINIR ATRIBUTO Y COMPORTAMIENTO**

![src/POO_39.png](../src/POO_39.png)

- **Java:** Para declarar un atributo es necesario poner el tipo de dato seguido del nombre, y para declarar un método ponemos el tipo seguido del nombre con dos paréntesis y finalizamos con llaves.
- 
	![src/POO_40.png](../src/POO_40.png)

- **Python:** Este lenguaje no es estricto en su tipado, por lo que para definir variables es simplemente necesario poner el nombre, en nuestro ejemplo ponemos comillas dobles para que Python infiera que es un string, y para declarar un método utilizamos la palabra reservada def. La forma que usa Python para agrupar declaraciones es mediante indentaciones, por lo que en el intérprete interactivo debes teclear un tabulador o espacio(s) para cada línea indentada.

	![src/POO_41.png](../src/POO_41.png)

- **JavaScript:** Cuando se empieza a programar en un lenguaje como JavaScript, es decir, permisivo hasta no poder más, dar los primeros pasos puede resultar realmente complicado. Para declarar nuestras propiedades se utiliza la palabra reservada this y los métodos son declarados afuera usando la palabra reservada prototype seguido de la función.

	![src/POO_42.png](../src/POO_42.png)

- **PHP:** Siendo también un lenguaje bastante flexible así que para declarar una variable usamos el símbolo $, sin importar el tipo de dato, y para declarar un método es lo mismo que una función.

	![src/POO_43.png](../src/POO_43.png)

### Clase 14 *Modelando nuestros objetos Uber*

Acabamos de aprender como plasmar objetos en diagramas de clase en UML, hagamos esto mismo en nuestro proyecto Uber. Analicemos los objetos y quitemos todos sus atributos.

![src/POO_44.png](../src/POO_44.png)

- **User**
  
  - **Id:** El identificador. Es bastante útil cuando manejamos una base de datos.
  - **Name**
  - **Document:** Es el documento que dependiendo del país puede ser numérico o alfanumérico. En este caso puede ser la CI, la CURP o el RFC.
  - **Email**
  - **Password**

- **Driver**
  
  - **Id**
  - **Name**
  - **Document**
  - **Email**
  - **Password**

- **Route:** Como sabemos que se compone de un punto A y un punto B, sabemos que las ubicaciones tienen una latitud y una longitud.
	
	- **Id**
	- **Start [2]:** Representa el punto A y será un arreglo que contenga tanto la latitud como la longitud.
	- **End [2]:** Representa el punto B y será un arreglo que contenga tanto la latitud como la longitud.

- **UberX**
  
	- **Id**
	- **License:** Será la placa del vehículo
	- **Driver:** El conductor designado del vehículo
	- **Passengers:** La cantidad de pasajeros
	- **Brand:** Marca del vehículo
	- **Model:** Modelo de vehículo

- **UberPool**
  
	- **Id**
	- **License**
	- **Driver**
	- **Passengers**
	- **Brand**
	- **Model**

- **UberBlack**
	
	- **Id**
	- **License**
	- **Driver**
	- **Passengers**
	- **typeCarAccepted [ ]:** Existe un catálogo de vehículos únicamente aceptados por Uber y se componen de la marca, modelo y año.
	- **seatsMaterial [ ]:** Los Uber Black necesitan tener interior con materiales de piel o vinilo.

- **UberVan**
	
	- **Id**
	- **License**
	- **Driver**
	- **Passengers**
	- **typeCarAccepted [ ]**
	- **seatsMaterial [ ]**

Si quieres saber más de los requerimientos de autos puedes ingresar en [Requisitos de autos](https://www.uber.com/mx/es/drive/mexico-city/vehicle-requirements/ "Requisitos de autos").

Ahora analizaremos los últimos objetos que nos quedan:

![src/POO_45.png](../src/POO_45.png)

- **Card**
	
	- **Id**
	- **Number:** Es el número de la tarjeta.
	- **CVV:** El número escondido por detrás.
	- **Date:** Es la fecha de vencimiento.

- **PayPal**
	
	- **Id**
	- **Email:** El correo asociado a la cuenta.

- **Cash**
  
	- **Id**
	- Cash no necesitara nada más que el identificador del tipo de pago ya que en este caso no tenemos registro de este tipo.

Con esto ya tenemos analizado todos nuestros objetos, pero hay algo de redundancia en el diagrama. En la siguiente clase veremos cómo podemos solucionarlo con la herencia.

### Clase 15 *¿Qué es la herencia?*

En la clase anterior notamos que nuestro ejemplo tenía atributos repetidos y no solo fue uno, sino que fueron varios. Muchas clases entre sí tenían atributos que estaban siendo redundantes entre ellas, pues esto estaba violando una de las leyes del código.

«**Don't repeat yourself**» es una filosofía que promueve la reducción de la duplicación en la programación. Siempre nos inculcara que no tengamos líneas de códigos duplicadas y, en este caso, todavía no hemos hecho código estamos a un paso de hacerlo, pero si lo llevamos así como esta estaríamos violando esta filosofía. Por lo tanto, toda pieza de información no debería ser duplicada debido a que la duplicación incrementa la dificultad en los cambios y su evolución.

Si nosotros dejamos esto así como esta, se nos va a dificultar que en el futuro podamos ejecutar cambios e incluso involucrar un objeto o un elemento más en el proyecto, hará que el código sea más difícil de leer y entender, y hace un mantenimiento se nos va a complicar bastante. Por lo tanto no debemos tener líneas duplicadas en la medida posible.

**¿Qué debemos hacer?**

Haremos uso de uno de los principios de la programación orientada a objetos, la reutilización de código. La herencia es una de las piezas claves a la hora de reutilizar líneas de código a más no poder.

**Herencia**

La herencia es un pilar importante dentro de la programación orientada a objetos y nos permitirá crear nuevas clases a partir de otras.

Podemos definir la herencia como la capacidad de crear clases que adquieren de manera automática los miembros (atributos y métodos) de otras clases que ya existen, pudiendo al mismo tiempo añadir atributos y métodos propios.

Lo que haremos es que, una vez detectemos elementos duplicados, ejecutaremos una abstracción de tal manera que podamos generar una clase que sea la más general y, entonces, esa clase general nos permitirá crear nuevas clases. Tendremos una jerarquía, una estructura de padre e hijo, y es que un padre puede tener tantos hijos como sea necesario. Es común encontrar que un padre solo tenga un único hijo, pero, como en nuestro ejemplo, un padre puede tener bastantes hijos a través de la abstracción.

![src/POO_46.png](../src/POO_46.png)

- **Clase Padre:** También llamada Super Clase, será la clase cuyas características se heredan.
- **Clase Hijas:** Llamada también Sub Clase. Son las clases que heredan de Clase Padre, puede agregar sus propios campos y métodos, además de los campos y métodos de la superclase.

**EJEMPLO**

Para ejercitarnos y poder identificar herencias tenemos el siguiente ejemplo:

![src/POO_47.png](../src/POO_47.png)

En donde tenemos tres clases (Futbolista, Entrenador y Masajista), si analizamos estas clases podemos ver que comparten cuatro atributos y además tienen en común dos métodos.

En programación orientada a objetos, cuando detectamos que hay elementos repetidos, esto nos indica que debemos hacer algo. Algo no está bien y que seguramente, si lo dejamos así, nos traerá problemas a futuro. Una vez detectada una relación de estos elementos, podemos generar una abstracción de eso y entonces crear una clase que tengan todos estos elementos en común.

![src/POO_48.png](../src/POO_48.png)

En este caso creamos **SeleccionFutbol** que será la superclase y de ella se estarán heredando: **Futbolista**, **Entrenador** y **Masajista**. Cuando ellos heredan, esto significa que automáticamente todos los atributos y métodos que tenemos ahí serán heredados a las subclases y no tenemos que estarlo escribiendo en código, simplemente aplicando la herencia automáticamente van aparecer en cada clase.

Esta es una forma de analizar herencia, hay otra forma y es partiendo de los elementos en común. En general podemos tener elementos que no tengan ningún atributo en común, pero la lógica del negocio nos va a decir que esto debe considerarse como una clase más general, deben agruparse en una clase más general aunque y esa se puede llamar una clase padre.

### Clase 16 *Aplicando Herencia a nuestro proyecto Uber*

Aplicaremos lo aprendido en la clase anterior y eso es detectar todos los atributos que son redundantes en nuestro proyecto Uber.

Tenemos plasmado nuestro proyecto en forma de diagrama de clase:

![src/POO_49.png](../src/POO_49.png)

Y ahora vamos a detectar la redundancia entre estos elementos para aplicar la herencia.

**USER – DRIVE**

Comencemos por las clases User y Drive que tienen todos sus atributos en común. Si sacamos esos elementos comunes podemos crear la clase Account, que poseerá la jerarquía principal y se convertirá en la Super Clase o Clase Padre, mientras que User y Driver se heredaran de Account convirtiéndose en Sub Clases o Clases Hijas.

Para ejemplificar la herencia usamos flechas vacías que apuntan hacia la Clase Padre.

![src/POO_50.png](../src/POO_50.png)

**CARD – PAYPAL – CASH**

En el caso de las clases Card, PayPal y Cash no tenemos ningún elemento en común, sin embargo, todos son del mismo tipo así aplicaremos la otra forma de herencia: según la lógica de negocios.

![src/POO_51.png](../src/POO_51.png)

**UBERX – UBERPOOL – UBERBLACK – UBERVAN**

En el caso de los automóviles, las cuatros clases Uber tienen cuatro atributos en común que formaran parte de la Super Clase, sin embargo, todavía existen elementos comunes entre UberX y UberPool, y UberBlack y UberVan así que podemos hacer uso nuevamente de la herencia para otra Sub Clase.

![src/POO_52.png](../src/POO_52.png)

**Modelo Simplificado**

Así es como estaría quedando nuestro sistema Uber.

![src/POO_53.png](../src/POO_53.png)

### Clase 17 *Reto 2: analicemos un problema*

Imagina que nuestro sistema de adopciones creció y ahora ofrece adoptar pericos, loros, gatos y hámsteres.

Genera un nuevo análisis, aplica herencia para abstraer mejor el problema y lograr modularidad en el software.

Comparte tus resultados en la sección de discusiones.

## Modulo 4. Clases, Objetos y Método Constructor
### Clase 18 *Definiendo clases en Java y Python*

Ahora que está listo nuestro modelo podemos comenzar con la etapa de programación de nuestro proyecto. Como vimos, todo el módulo anterior se basó en el análisis de los objetos; analizar y obtener los objetos, abstraerlos para convertirlos en clases y finalmente ejecutar un análisis de herencia para tener una mejor versión de nuestros objetos.

**Visual Studio Code**

![src/POO_54.png](../src/POO_54.png)

Primeramente estaremos creando cuatro carpetas llamadas Java, Python, JavaScript y PHP en donde iremos depositando los documentos para sus correspondientes lenguajes.

Siguiendo nuestro diagrama de herencia que hicimos del proyecto estaremos creando cuatro archivos para las clases principales: Account, Car, Payment y Router. Además de un archivo **Main** que será donde generaremos el punto de entrada al programa, todo lo que queremos que funcione y sea visto debemos declararlo en este documento.

**JAVA**

- **Main:** Lo que debes saber en primer lugar es que el método main() es el punto de entrada de la aplicación, es decir, es el punto en el que comienza la ejecución de esta. Es por ello que ha de ser public (accesible desde fuera de la clase) y static (se puede ejecutar sin una instancia de la clase).

	![src/POO_55.png](../src/POO_55.png)
		
- **Account:** Es la super clase de la que se derivaran las clases Drive y User.
  
  ![src/POO_56.png](../src/POO_56.png)

  - Para declarar variables en Java ponemos primero el tipo de dato que estará manejando nuestro usuario y posteriormente el nombre.

- **Car:** Es la super clase de la que se derivaran las clases UberX, UberPool, UberBlack y UberVan.
	
	![src/POO_57.png](../src/POO_57.png)	
	
	- Momentáneamente estaremos declarando 'drive' de tipo string, aunque sabemos que es del tipo Drive.

- **Payment:** Es la super clase de la que se derivaran las clases Card, PayPal y Cash.
	
	![src/POO_58.png](../src/POO_58.png)

- **Router:** Es la clase que contendrá las ubicaciones de nuestros puntos A y B.
	
	![src/POO_59.png](../src/POO_59.png)

	- Una opción muy conveniente cuando usamos una clase o interfaz de otro paquete, es el uso de la palabra clave import. Si usamos **import**, no es necesario escribir el nombre completo de la clase con el paquete incluido. Es suficiente con el nombre de la clase.
	- En este caso, nosotros usaremos **ArrayList** que pertenece a la biblioteca java.util. Por tanto, para emplearla en nuestras clases o programas escribiremos como código en cabecera ***import java.util.ArrayList*** (o de forma más genérica import java.util.*).
	- **ArrayList:** Es una clase que permite almacenar datos en memoria de forma similar a los Arrays, con la ventaja de que el número de elementos que almacena, lo hace de forma dinámica, es decir, que no es necesario declarar su tamaño como pasa con los Arrays.

**PYTHON**

- **Main:** Este main, básicamente, comprueba si un módulo *.py se está importando a nuestro código y establece, de ser así (y de ahí el condicional if) que sea el módulo actual el principal, el que asume el papel de main(), aquél que deberá ejecutarse primero, mientras que el módulo importado se ejecutará a continuación.

	![src/POO_60.png](../src/POO_60.png)

- **Account:** Como podemos ver, somos capaces de declarar el tipo de dato que queremos que sean de esta forma.
	
	![src/POO_61.png](../src/POO_61.png)

	- Para declarar variables en Python, en cambio, va primero el nombre y después podemos asignarle el tipo de datos.

- **Card**
	
	![src/POO_62.png](../src/POO_62.png)

- **Payment**
	
	![src/POO_63.png](../src/POO_63.png)

- **Router**
	
	![src/POO_64.png](../src/POO_64.png)

	- Las variables de tipo arrays en Python se declaran poniendo corchetes vacíos.

### Clase 19 *Definiendo Clases en JavaScript*

Si estás interesado en aprender JavaScript desde ahora debes saber que el concepto de clases no existía como tal hasta el nuevo estándar ECMAScript 6. El reto de encontrar sistemas construidos con este estándar es alto por esa razón te explicaré cuál fue por mucho tiempo su equivalente.

Los Prototipos fue la forma de crear clases en JavaScript y las representaremos partiendo de la declaración de una función.

Creemos nuestras clases:

- Account
- Car
- Payment
- Route

Para esto crearemos el siguiente sistema de archivos dentro de la carpeta JS de nuestro proyecto:

- Account.js
- Car.js
- Payment.js
- Route.js
- index.js

El archivo index.js será el lugar equivalente al punto de entrada de la aplicación donde estaremos declarando nuestros objetos basado en las clases. Para esta clase lo dejaremos en blanco.

Ahora veamos el código archivo por archivo:

**Account.js**

![src/POO_65.png](../src/POO_65.png)

**Car.js**

![src/POO_66.png](../src/POO_66.png)

**Payment.js**

![src/POO_67.png](../src/POO_67.png)

**Route.js**

![src/POO_68.png](../src/POO_68.png)

[Aquí](https://github.com/anncode1/Curso-POO-Platzi/tree/f5725787165b36cae579f94e428068039b554b0b/JS "Aquí") podemos ver el código del proyecto.

En este código notarás el uso de la palabra reservada this. Normalmente cuando usamos la sintaxis punto siempre lo haremos a partir de un objeto instanciado, en este caso con this, se hace una simulación al objeto en cuestión, a pesar de que en ese momento visualmente sigue siendo una clase.

![src/POO_68.png](../src/POO_68.png)

Digamos que se adelanta un poco al momento de ejecución y visualiza al objeto con sus atributos, más adelante verás la forma en que podemos asignar datos a un atributo del objeto en otros lenguajes y verás que es exactamente la misma sintaxis.

Si intentáramos poner this en el momento de ejecución nos traería un listado de todos los componentes de la clase que en este caso son solo estos tres: id, init y end.

This hace referencia al objeto instanciado. Para comprender del todo esta última frase mira la siguiente clase donde hablamos de objetos.

**Reto**

- En la carpeta de nuestro proyecto PHP declara estas mismas clases: Puedes utilizar esta [clase](https://platzi.com/clases/1338-php/12929-programacion-orientada-a-objetos1172/ "clase") de apoyo.
- Inténtalo y compártenos tus resultados, compáralos con tus compañeros.

### Clase 20 *Objetos, método constructor y su sintaxis en código*

Los objetos nos ayudan a crear instancia de una clase, el objeto es el resultado de lo que modelamos, de los parámetros declarados y usaremos los objetos para que nuestras clases cobren vida.

Los métodos constructores dan un estado inicial al objeto y podemos añadirle algunos datos al objeto mediante estos métodos. Los atributos o elementos que pasemos a través del constructor serán los datos mínimos que necesita el objeto para que pueda vivir.

Lo anteriormente hecho solo fueron clases, no pudimos nada en pantalla más que unos mensajes que decían "hola mundo", pero sin poder hacer verdaderamente nada. Para poder utilizar los elementos declarados dentro de esas clases empezaremos a trabajar con los objetos.

Recordemos que los objetos nos ayudaran a crear instancias de una clase, es decir, es el resultado de lo que moldeamos, de los parámetros declarados y usaremos los objetos para que nuestras clases cobren vida.

**Declarar objetos**

![src/POO_69](../src/POO_69.png)

- **Java:** Al momento de crear objetos en Java, debemos tener claras dos cosas indispensables, la primera es el nombre de la clase para la cual vamos a crear el objeto y segundo el constructor que dicha clase posee, es decir, si el constructor recibe o no parámetros. Para crear objetos en Java, el lenguaje nos proporciona el comando new, con este comando le decimos a Java que vamos a crear un nuevo objeto de una clase en específico y le enviamos los parámetros (en caso de ser necesario) según el constructor.
	
	![src/POO_70](../src/POO_70.png)
		
- **Python:** Haciendo valer su fama como un lenguaje flexible, para declarar un objeto es bastante sencillo ya que solo necesita el nombre del objeto y la clase a la que hara instancia.
	
	![src/POO_71](../src/POO_71.png)
		
- **JavaScript:** Al igual que con muchas cosas en JavaScript, la creación de un objeto a menudo comienza con la definición e iniciación de una variable. También hacemos uso del comando new para crear un nuevo objeto de una clase específica.
	
	![src/POO_72](../src/POO_72.png)
		
- **PHP:** Para crear una instancia de una clase, se debe emplear la palabra reservada new. Un objeto se creará siempre a menos que el objeto tenga un constructor que arroje una excepción en caso de error. Las clases deberían ser definidas antes de la instanciación (y en algunos casos esto es un requerimiento).
		
	![src/POO_73](../src/POO_73.png)

**Método constructor**

Un constructor es un método especial de una clase que se llama automáticamente siempre que se declara un objeto de esa clase. Su función es inicializar el objeto y sirve para asegurarnos que los objetos siempre contengan valores válidos.

Para nosotros, las paréntesis representaran los métodos.

![src/POO_74](../src/POO_74.png)

- **Java:** En el lenguaje Java, si para una clase no se define ningún método constructor se crea uno automáticamente por defecto. El constructor por defecto es un constructor sin parámetros que no hace nada. Los atributos del objeto son iniciados con los valores predeterminados por el sistema.
	
	![src/POO_75](../src/POO_75.png)
	
- **Python:** En Python, el método constructor siempre se llama __init__ (dos subrayados antes y después de init).
	
	![src/POO_76](../src/POO_76.png)
			
- **JavaScript:** En JavaScript, la función sirve como el constructor del objeto, por lo tanto, no hay necesidad de definir explícitamente un método constructor. Cada acción declarada en la clase es ejecutada en el momento de la creación de la instancia.
	
	![src/POO_77](../src/POO_77.png)

- **PHP:** Debemos definir un método llamado __construct (es decir utilizamos dos caracteres de subrayado y la palabra construct). El constructor debe ser un método público (public function).
	
	![src/POO_78](../src/POO_78.png)
	
***NOTA: No te preocupes por entender this, no te compliques, lo estaremos viendo más adelante.***

**Pasar datos por parámetros**

Dependiendo del tipo de dato que enviemos a la función, podemos diferenciar dos comportamientos: Paso por valor (se crea una copia local de la variable dentro de la función) y Paso por referencia (se maneja directamente la variable, los cambios realizados dentro de la función le afectarán también fuera).

![src/POO_79](../src/POO_79.png)

- Java
	
	![src/POO_80](../src/POO_80.png)
		
- Python
	
	![src/POO_81](../src/POO_81.png)
		
- JavaScript
	
	![src/POO_82](../src/POO_82.png)
		
- PHP
	
	![src/POO_83](../src/POO_83.png)

Como es visible en todos los casos, para enviar un valor es únicamente necesario ponerlos dentro de los paréntesis. Como en este caso estamos enviando un cadena de caracteres o string, ponemos comillas dobles, algo que no es necesario cuando enviamos como valor un número.

### Clase 21 *Objetos. Dando vida a nuestras clases en Java y Python*

Ya aprendimos la forma de crear objetos y sabemos la sintaxis básica en los cuatros lenguajes que vamos estudiando, ya es hora de ver como declarar esos objetos en Java y Python.

Recordemos que anteriormente dejamos nuestras clases listas. Por el momento, y por el bien de la práctica, usaremos la clase Car ya que es la que más sentido se nos hace.

**JAVA**

Primeramente, para crear objetos en el lenguaje Java, debemos ir a nuestra clase Main que recordemos tiene actualmente esto:

![src/POO_84](../src/POO_84.png)

Debemos recordar que para crear un objeto se sigue esta sintaxis: el tipo de la clase, nombre del objeto, igualamos (=), usamos la palabra reservada new y terminamos con el método constructor que trae por defecto las clases de Java.

En nuestro caso quedaría así:

![src/POO_85](../src/POO_85.png)

- **Car:** Sería la clase que estaríamos usando.
- **car, car2:** Son el nombre de los objetos.
- **new:** Palabra reservada para la creación de objetos.
- **Car():** Es como llamamos al método constructor.
- **Operador punto (.):** Nos permite acceder a los distintos atributos de la clase. Cuando tenemos un objeto de un tipo determinado y queremos acceder a uno de sus atributos solo tenemos que poner el identificar asociado al objeto seguido por un punto y por el identificador que hace referencia a un miembro concreto de la clase a la que pertenece el objeto.
  
	- **car.lincense():** Accedemos al atributo license en el que guardamos la licencia que tiene el vehículo.
	- **car.driver ():** Accedemos al atributo driver en el que guardamos el valor del nombre que tiene nuestro conductor.
	- **car.passenger():** Accedemos al atributo passenger en el que guardamos la cantidad de pasajeros que podrá llevar ese vehículo.

- **System.out.println():** En Java hay algunos objetos que existen por defecto (en cualquier entorno de desarrollo). Uno de ellos es el objeto denominado System.out. Este objeto dispone de un método llamado println que nos permite imprimir algo por pantalla en una ventana de consola.
	
Para no tener que estar declarando System.out.println() cada vez que deseamos imprimir el valor de nuestro objeto, podemos crear un método en la clase Car:

![src/POO_86](../src/POO_86.png)
	
- Debajo de los atributos escribimos el método: primero el tipo y después el nombre, como no recibirá nada no necesita parámetros.
- La palabra void indica que el método printDataCar no retorna ningún valor, solamente imprimirá en pantalla la licencia y el conductor.

Finalmente, en nuestra clase Main cambiamos los System.out.println() por ***car.printDataCar()*** y ***car2.printDataCar().***

De esta forma, con los objetos, estamos accediendo a los atributos y a los objetos. Reutilizamos código para imprimir datos de los objetos.

**PYTHON**

Para crear objetos dentro de Python es necesario importar la clase de la que estaremos usando los elementos eso se hace escribiendo al principio de toda la clase Main:

![src/POO_87](../src/POO_87.png)

- Donde car es el nombre del archivo y Car es el nombre de la clase.

Como en Python no es necesario escribir el tipo de clase y tampoco la palabra reservada new, simplemente creamos los objetos directo:

![src/POO_88](../src/POO_88.png)

En general permanece bastante similar al Java, excepto por algunos cambios obvios:

- **car, car2:** Son el nombre de los objetos.
- **Car():** Es como llamamos al método constructor.
- **Operador punto:** Nos permite acceder a los distintos atributos de la clase.

El cambio está en la forma de imprimir un objeto, no necesitamos crear un método especial para poder hacerlo, sino que simplemente usamos vars dentro de un print y le pasamos el objeto como parámetro:

- **print:** Es lo que nos permite mostrar texto en pantalla.
- **vars:** Toma como máximo un parámetro y devuelve los atributos del objeto. En este caso lo imprime en formato JSON, pero si queremos otro formato ya podemos ponerle un método. Sin embargo, en este caso, para fines demostrativos, nos funciona super bien.

### Clase 22 *Declarando un Método Constructor en Java y JavaScript*

En la clase anterior vimos como declarar el método constructor en el caso de Java y Python, hoy vamos a ponerlo en acción para el caso particular de JavaScript y Java.

**JAVA**

Primeramente lo veremos en el caso de Java para entenderlo mejor, porque en JavaScript es bastante peculiar.

Lo que haremos es ir a la clase Car en donde crearemos nuestro método constructor:

![src/POO_89](../src/POO_89.png)

- **public:** Indica que es un método accesible a través de una instancia del objeto.
- **Car():** Es el nombre que tendrá nuestro método.
	- Dentro de las paréntesis van  los parámetros obligatorios para crear un objeto de tipo Car. En este caso, lo mínimo necesario es license y drive.
- Dentro del constructor ponemos this., y esto no es más que una buena práctica porque se acostumbra mucho que los parámetros tengan el mismo nombre que las propiedades.

	- **this.license:** Hace referencia al license, la variable global de la clase.
	- **license:** Hace referencia al parámetro license, la variable local que existen únicamente dentro del método.

-  Ahora en nuestro método printDataCar si lo dejamos tal cual no imprimirá lo que estamos queriendo, por eso debemos cambiarlo y poner **driver.name**.

Hasta ahora también hemos estado manejando driver como un string, pero sabemos que en realidad es de tipo Account, así que debemos ir a la clase Account para crear su método constructor:
	
![src/POO_90](../src/POO_90.png)

Ya hecho una vez todo esto y ejecutamos nuestro programa nos indicara un error, porque no hemos realizado los demás cambios. Cuando sobrescribimos el método automáticamente el método vacío que teníamos se pierde, así que para pasar los datos debemos hacerlo dentro de las paréntesis:

![src/POO_91](../src/POO_91.png)

- Como podemos ver, siendo nuestro driver del tipo Account debemos declararlo para que se cree un objeto.

Con esto tenemos los datos mínimos necesarios para que un vehículo exista dentro de nuestra aplicación Uber.

**JAVASCRIPT**

Primero debemos crear un archivo HTML llamado index que funcionara como nuestro Main, esto es porque JavaScript necesita un navegador que nos permita visualizar todo.

En nuestro archivo index.html tendremos lo siguiente:

![src/POO_92](../src/POO_92.png)

Es un esqueleto básico del HTML, lo importante está dentro del body donde tenemos tres scripts que nos permitirá incluir o llamar nuestro código de tipo JavaScript. Es importante ponerlos en ese orden porque de lo contrario no nos funcionara, esto es porque JavaScript empieza a compilar y renderizar desde el principio a medida que va leyendo línea por línea.

Ahora vamos a nuestra clase Car:

![src/POO_93](../src/POO_93.png)

- Como podemos ver, no es necesitamos colocar el tipo de dato que tendrán los parámetros. Además los atributos que creamos ya son tomados como parte del método constructor y simplemente debemos igualar.
- Es en la creación del método **printDataCar** donde esta lo interesante. Sabemos que JavaScript toma los métodos como funciones especiales y son declarados fuera.
- Para imprimir nuestro resultado usamos el comando **console.log** que imprime en la consola.
- Una forma de concatenar string es la interpolación de cadenas y utilizan las comillas invertidas o backticks para delimitar sus contenidos. Las partes variables se denominan placeholders y utilizan la sintaxis ${ } para diferenciarse del resto de la cadena.
	
Ahora vamos a nuestra clase Account para pasar el nombre y el documento:

![src/POO_94](../src/POO_94.png)

¿Recuerdas a index.js? Hasta el momento ha permanecido vacío, pero lo usaremos para poner ahí todas las llamadas de nuestra clases y posteriormente mostrarlas. Entonces, vamos a index.js:
	
![src/POO_95](../src/POO_95.png)

- Declaramos un objeto **car** al que pasaremos los datos de la matrícula y del conductor.
- Incluso podemos usar el operador punto para acceder a la cantidad de pasajeros y usar nuestro método printDataCar.

Finalmente, para ver nuestros resultados, debemos abrir nuestro archivo HTML en un navegador. En el navegador damos click derecho, inspeccionar y vamos a consola, y ahí esta imprimido en pantalla nuestra clase de hoy.

### Clase 23 *JavaScript orientado a objetos, lo más nuevo*

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

### Clase 24 *Declarando un Método Constructor en Python*

En Python encontrarás un concepto denominado Métodos Mágicos, estos métodos son llamados automáticamente y estrictamente bajo ciertas reglas. El método constructor en Python forma parte de esta familia de métodos y como aprendimos en la clase anterior lo declaramos usando __init__, aunque si nos ponemos estrictos este método no construye el objeto en sí. El encargado de hacer esto es __new__ y el método __init__ se encargará de personalizar la instanciación de la clase, esto significa que lo que esté dentro de __init__ será lo primero que se ejecute cuando se cree un objeto de esta clase.

Para nuestro proyecto tenemos la necesidad de que algunas variables se inicialicen obligatoriamente cuando ocurra la instanciación. Así que declaremos el método __init__ en las clases de nuestro proyecto con las propiedades obligatorias.

Para la clase Account quedaría algo así, notarás que usamos la palabra clave self, esta es muy parecida a lo que venimos trabajando a otros lenguajes con this. Y como su nombre lo dice hace referencia a los datos que componen la clase, en este caso self.name está llamando al atributo name que se encuentra en la línea 3 de la clase y, le está asignando el dato que se pasa en el método __init__ de la línea 8.

![src/POO_102](../src/POO_102.png)

Ahora veamos la clase Car:

![src/POO_103](../src/POO_103.png)

Lo que notarás de diferente es que cambiamos el tipo de dato de driver, ahora es de tipo Account y como ves está solicitando los dos datos obligatorios para instanciar un objeto de este tipo. Esto lo verás más en acción en el próximo fragmento de código del archivo main.py. Además, mucho ojo, en la primera línea observamos que es importante importar la clase para poderla usar.

Nuestro archivo main.py ahora se verá así:

![src/POO_104](../src/POO_104.png)

Observa que estamos importando las dos clases que usaremos y las estamos instanciando en los métodos constructores.

Los resultados serán los siguientes:

![src/POO_105](../src/POO_105.png)

El código de este ejemplo lo encuentras en este [enlace](https://www.wireshark.org/(https://github.com/anncode1/Curso-POO-Platzi/tree/3.2.ConstructorPython) "enlace").

**Reto 3**

- Ahora que ya viste cómo creamos un método constructor en Python, mira esta [clase](https://platzi.com/clases/1338-php/12930-constructor-y-metodos/ "clase") y hazlo también para PHP. Compártenos tus resultados en la sección de discusiones.

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
