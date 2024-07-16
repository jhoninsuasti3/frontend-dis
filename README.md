# Mi Aplicación de Gestión de Propiedades

Esta es una aplicación web desarrollada en React para gestionar propiedades inmobiliarias.

# frontend-dis

(vite) + ReactJS + Typescript + Tailwind + Lucid icons + ESLint  + AWS + Sentry + aplicación web de gestión de propiedades inmobiliarias. La aplicación permitirá a los usuarios (agentes inmobiliarios) crear, leer, actualizar y eliminar registros de propiedades.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu entorno de desarrollo:

- Node.js y npm: [Descargar Node.js](https://nodejs.org/)
- Git: [Descargar Git](https://git-scm.com/)

## Instalación

1. **Clonar el Repositorio**

   ```bash
   git clone https://tu-repositorio.git
   cd my-react-app
   ```

Instalar Dependencias

Para instalar las dependencias listadas en dependencies.txt, ejecuta el siguiente comando:
   ```bash
   npm install --save $(awk '{print $1}' < dependencies.txt)
   ```

Ejecutar la Aplicación:

Para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando:
   ```bash
   npm run dev
   ```