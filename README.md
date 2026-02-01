# Hunterpedia

Hunterpedia es una aplicación web desarrollada con Next.js que muestra información de personajes de Hunter x Hunter utilizando la API pública de Jikan (MyAnimeList).

## Características

- Obtiene información de personajes desde la API de Jikan
- Página dinámica por personaje usando rutas dinámicas (`/characters/[character_id]`)
- Uso de `next/image` para optimización de imágenes
- Estilos con TailwindCSS y variables CSS
- Revalidación de datos con `fetch` en Next.js (App Router)

## Tecnologías utilizadas

- Next.js (App Router)
- React
- TypeScript
- TailwindCSS
- Jikan API

## Requisitos

- Node.js 18 o superior
- npm (o pnpm / yarn)

## Instalación

Clonar el repositorio e instalar dependencias:

```bash
git clone https://github.com/joel12-Sant/Hunterpedia.git
cd hunterpedia
npm install
```

## Ejecución en desarrollo

Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

Abrir en el navegador:

http://localhost:3000

## Construcción para producción

Construir el proyecto:

```bash

npm run build
```

Iniciar en modo producción:

```bash

npm run start
```

## Rutas principales

- `/characters/[character_id]`  
  Muestra la información de un personaje según su ID (Jikan / MyAnimeList).

## Fuente de datos

Los datos son obtenidos desde la API pública de Jikan:

https://api.jikan.moe/v4/characters/{character_id}

## Ejemplo de uso

Ejemplo de URL para acceder a un personaje:

http://localhost:3000/characters/1

## Notas importantes

- La API de Jikan tiene límites de solicitudes (rate limit). Si se hacen muchas peticiones seguidas, puede responder con error temporal.
