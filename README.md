 # React Music App

Aplicación en React hecha como ejercicio para los modulos React I, II, III y Estilos con React.

El objetivo es poder lograr un sistema básico simulando la gestión de música.

***
# Entrega 1: Estructura básica 
### Objetivo:
- **Comprender el uso de componentes de clase** para lograr refactorizarlos según necesario a futuro entendiendo la lógica de como funciona el sistema deprecado en primer lugar.
- **Armar una base sólida** para poder seguir extendiendo el proyecto en cada módulo.

### Componentes principales: 
**Header.js:** Encabezado con título de la aplicación a desarrollar.

**Song.js:** Base que recibe props para generar los componentes de canción (título, artista, duración).
> Los datos de Song.js para esta entrega van a ser mayormente ficticios.

**App.js:** Componente raíz que importa Header y Song. Muestra al menos tres canciones utilizando instancias de Song.

### Notas:
El CSS va a ser reemplazado a futuro por estilos de React, así que es muy básico y hecho con SASS para conveniencia.

***
# Entrega 2: Refactorización

### Objetivo:

### Refactorización
Refactorizar los componentes previos de clase a funcionales (Header y Song)

### Nuevas funcionalidades

**SearchResults.js:** Recibe un array de canciones ficticias como prop, itera usando map y renderiza cada canción utilizando Song.js. Cada canción tiene una key única.

**Library.js:** Recibe un array de canciones ficticias como prop, itera usando map y renderiza las canciones en la biblioteca.

**Botones para agregar canciones a biblioteca:** A cada canción de SearchResults se le agrega un botón "Agregar a mi biblioteca", este botón añade la canción al estado de Library.js. Con useState actualiza dinámicamente el estado de la biblioteca.

## Manejo de estado en App
Integrar los hooks como forma de manejo de los estados de la app:
**SearchResults.js:** Los resultados de búsqueda.

**Library.js:** La biblioteca (inicialmente vacía)

## Integración de los componentes nuevos
Revisar si la lista de resultados de búsqueda suma correctamente canciones a la biblioteca.

## Estilizar elementos nuevos
Estilizar SearchResults.js, Library.js y los botones nuevos.

***
# Entrega 3: Integración de API
A desarrollar.

***
# Entrega 4: Estilos con React
A desarrollar.