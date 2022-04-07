# Clase 6 _Diagramas de Modelado_

Es momento de comenzar a aprender que opciones tenemos para plasmar nuestros
análisis, es decir, generar los gráficos que serán los intermediaros entre
nuestra observación del problema y la diagramación.

Algunos diagramas de modelado son: OMT y UML

**OMT**

Técnica de Modelado de Objetos (en inglés, Object Modeling Techniques) es un
enfoque de modelado de objetos para el modelado y diseño de software. Fue
desarrollado alrededor de 1991 como un método para desarrollar sistemas
orientados a objetos y para soportar la programación orientada a objetos. OMT
describe el modelo de objeto o la estructura estática del sistema.

OMT fue desarrollado como un enfoque para el desarrollo de software. Los
propósitos de modelar son:

- Probar entidades físicas antes de construirlas (simulación).
- Comunicación con los clientes.
- Visualización (presentación alternativa de información.
- Reducción de la complejidad.

OMT ha propuesto tres tipos principales de modelos:

- **Modelo de objetos:** El modelo de objetos representa los fenómenos estáticos
  y más estables en el dominio modelado. Los conceptos principales son clases y
  asociaciones con atributos y operaciones. La agregación y la generalización
  (con herencia múltiple) son relaciones predefinidas.
- **Modelo dinámico:** El modelo dinámico representa una vista de estado /
  transición en el modelo. Los conceptos principales son estados, transiciones
  entre estados y eventos para desencadenar transiciones. Las acciones se pueden
  modelar como ocurriendo dentro de los estados. La generalización y la
  agregación (concurrencia) son relaciones predefinidas.
- **Modelo funcional:** El modelo funcional maneja la perspectiva de proceso del
  modelo, que corresponde aproximadamente a los diagramas de flujo de datos. Los
  conceptos principales son proceso, almacén de datos, flujo de datos y actores.

OMT es un predecesor del Lenguaje de Modelado Unificado (UML).

Muchos elementos de modelado OMT son comunes a UML. Modelo funcional en OMT: En
resumen, un modelo funcional en OMT define la función de todos los procesos
internos en un modelo con la ayuda de "Diagramas de flujo de datos (DFD)".
Detalla cómo se realizan los procesos de forma independiente.

**UML**

Este es el modelado al que debemos tener como un aliado porque nos permitirá
tener de forma visual lo que está plasmado en el código, además cuando el
proyecto pase a otras manos o a otro equipo de trabajo esto es lo primero que
nos pedirán: el diagrama UML.

Lenguaje de Modelado Unificado (en inglés, Unified Modeling Language) es un
lenguaje de modelado de desarrollo de propósito general en el campo de la
ingeniería de software que está destinado a proporcionar una forma estándar de
visualizar el diseño de un sistema.

El UML está compuesto por diversos elementos gráficos que se combinan para
conformar diagramas. Debido a que el UML es un lenguaje, cuenta con reglas para
combinar tales elementos.

La finalidad de los diagramas es presentar diversas perspectivas de un sistema,
a las cuales se les conoce como modelo. Recordemos que un modelo es una
representación simplificada de la realidad; el modelo UML describe lo que
supuestamente hará un sistema, pero no dice cómo implementar dicho sistema.

A continuación se describirán los diagramas más comunes del UML y los conceptos
que representan:

- Diagrama de Clases
- Diagrama de Objetos
- Diagrama de Casos de Uso
- Diagrama de Estados
- Diagrama de Secuencias
- Diagrama de Actividades
- Diagrama de Colaboraciones
- Diagrama de Componentes
- Diagrama de Distribución
- Otras características:
  - Paquetes
  - Notas
  - Estereotipos
