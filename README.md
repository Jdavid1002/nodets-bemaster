# Actualización de la Documentación

## Configuración del Proyecto
### Estructura de Carpetas
El proyecto sigue una estructura de carpetas organizada para separar lógicamente las distintas partes de la aplicación:

- `node_modules`: Carpeta generada automáticamente por npm para almacenar las dependencias del proyecto.
- `src/services/GithubService.ts`: Archivo que contiene la definición de la interfaz `IRepositorie`, las interfaces `IGetGithubRepositories` y `ISummaryRepositories`, así como la implementación del servicio `getGithubRepositories`.
- `src/services/LogicService.ts`: Archivo que contiene la implementación de una función para generar números enteros impares hasta un número dado.
- `src/services/NomenclatureService.ts`: Archivo que contiene la implementación de una función que calcula el valor sinusoidal de un conjunto de números.
- `src/index.ts`: Archivo principal de la aplicación que configura y ejecuta el servidor Express.
- `.gitignore`: Archivo que especifica qué archivos y carpetas deben ser ignorados por Git durante el control de versiones.
- `.nodemon.json`: Archivo de configuración de nodemon, una herramienta utilizada para reiniciar automáticamente la aplicación cuando se realizan cambios en el código.
- `package-lock.json`: Archivo generado automáticamente por npm para garantizar la consistencia de las versiones de las dependencias instaladas.
- `package.json`: Archivo de configuración de npm que contiene metadatos del proyecto y las dependencias necesarias para ejecutar la aplicación.
- `tsconfig.json`: Archivo de configuración de TypeScript que define las opciones de compilación del proyecto.

## Tecnologías Utilizadas
- **Node.js**: Plataforma de desarrollo backend que permite ejecutar JavaScript en el servidor.
- **Express.js**: Framework web minimalista para Node.js que facilita la creación de aplicaciones web y APIs RESTful.
- **TypeScript**: Superset de JavaScript que agrega tipado estático opcional y otras características al lenguaje.
- **Body-parser**: Middleware utilizado para analizar los cuerpos de las solicitudes HTTP entrantes en Express.
- **Fetch API**: Interfaz moderna para realizar solicitudes HTTP en el navegador y en Node.js.

## Descripción del Proyecto
El proyecto consiste en un backend escrito en TypeScript que utiliza Express.js para crear un servidor web que proporciona una API para obtener repositorios populares de GitHub. Además de las funcionalidades relacionadas con GitHub, se han agregado dos servicios adicionales:

1. **LogicService.ts**: Contiene una función para generar números enteros impares hasta un número dado.
2. **NomenclatureService.ts**: Contiene una función que calcula el valor sinusoidal de un conjunto de números.

El archivo `index.ts` configura y ejecuta el servidor Express, definiendo las rutas de la API y gestionando las solicitudes HTTP entrantes.

El proyecto utiliza el sistema de gestión de paquetes npm para manejar las dependencias y scripts de construcción. Se incluyen archivos de configuración para TypeScript y nodemon para facilitar el desarrollo y la ejecución de la aplicación.

## Ejecución del Proyecto
Para ejecutar el proyecto, siga estos pasos:

1. Asegúrese de tener Node.js y npm instalados en su sistema.
2. Clone el repositorio desde GitHub.
3. Ejecute `npm install` en el directorio raíz del proyecto para instalar las dependencias.
4. Ejecute `npm start` para iniciar el servidor Express.
5. Acceda a [http://localhost:3525](http://localhost:3525) en su navegador para interactuar con la API.
6. El servidor estará en funcionamiento y responderá a las solicitudes HTTP entrantes para obtener repositorios populares de GitHub y ejecutar las funciones definidas en `LogicService.ts` y `NomenclatureService.ts`.
