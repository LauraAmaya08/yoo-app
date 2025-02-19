# Proyecto Yoo! FrontEnd💻

## Descripción
Este proyecto es una red social que permite a los usuarios compartir publicaciones con texto e imágenes, interactuar con ellas a través de "Me gusta", y visualizar el feed de publicaciones con relación a sus seguidos.
Este frontend ofrece una interfaz amigable y responsiva para la experiencia del usuario, donde podrá seguir y compartir con otros usuarios.
Este sistema está diseñado para ser escalable, seguro y eficiente, utilizando tecnologías modernas para garantizar un rendimiento óptimo.

¿Qué esperas para probarlo?

## Tecnologías utilizadas
### Frontend:
- React con Vite
- Tailwind CSS
- Node.js para el manejo de dependencias

## Instalación y Configuración
### Backend:
1. Clonar el repositorio:
   ```sh
   git clone https://github.com/LauraAmaya08/yoo-app
   ```
2. Instalar dependencias necesarias:
   ```sh
   npm install
   ```
3. Iniciar el programa:
   ```sh
   npm run dev
   ```

## Autenticación y Seguridad
- Autenticación basada en JWT/OAuth.
- Hash de contraseñas con bcrypt.
- Middleware para validación de sesiones.

## API Endpoints
| Método | Endpoint | Descripción |
|--------|---------|-------------|
| GET | `/api/v1/usuarios` | Obtiene todos los usuarios |
| POST | `/api/v1/auth/login` | Inicia sesión |
| POST | `/api/v1/auth/register` | Registra un usuario |
| GET | `/api/v1/publicaciones` | Obtiene todas las publicaciones |

_(Más detalles en la documentación de la API)_

## Enlaces
- [Repositorio Backend](https://github.com/LauraAmaya08/Yoo-Api)

## Últimos Hashes de Commits
### Backend:
```
Último commit: 543991a9119d1aa943cdf327e10be0ea50aeab20
```
