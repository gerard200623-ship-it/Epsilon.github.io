# Épsilon Tarragona — Web Oficial del Club

Sitio web oficial del club de fútbol 7 amateur **Épsilon Tarragona** (Épsilon FC).

## Características principales

- **Identidad visual moderna**: Paleta sobria y deportiva en tonos rojo (`#e50914`, `#ff2a38`), negro carbón (`#0a0a0d`, `#121216`) y tipografía *Montserrat*.
- **Escudo oficial**: Emblema con fondo transparente optimizado para alta definición.
- **Sección 'Sobre Nosotros'**: Historia del club, filosofía de juego, valores y aviso de preparación para la próxima temporada/competición oficial.
- **Plantilla interactiva (Carrusel de Cartas 3D)**: Tarjetas interactivas con cambio fluido a la derecha al hacer clic y navegación por flechas:
  - Jan (Portero)
  - Gálvez (Defensa central)
  - Defensa (Defensa)
  - Gerard (Centrocampista)
  - Miguel (Centrocampista)
  - Ash (Delantero)
  - Delantero (Delantero)
- **Calendario dinámico de competición**: Rejilla mensual completa con selector de mes, días de la semana y estados de partidos/entrenamientos.
- **Formulario de captación y contacto multicanal**:
  - Campos: Nombre, Email, Posición Principal (desplegable), Posición Secundaria (desplegable), Asunto y Mensaje.
  - Validación completa en cliente.
  - Envío web mediante **ShipMyForm** hacia `infoepsilontgn@gmail.com`.
  - Opción de apertura directa en Gmail / cliente de correo con los datos precompletados.
  - Protección antispam mediante campo honeypot (`_gotcha`) y sanitización segura.

---

## Estructura del Proyecto

```text
├── index.html       # Estructura semántica HTML5
├── style.css        # Estilos, variables CSS y animaciones
├── main.js          # Lógica interactiva (carrusel, calendario, validación y envío)
├── enviar.php       # Backend alternativo en PHP con respuesta JSON (opcional para hosting con PHP)
├── img/
│   ├── logo.png     # Escudo oficial con fondo transparente
│   └── logo.jpg     # Escudo original
└── README.md        # Documentación del proyecto
```

---

## Formulario de Contacto (ShipMyForm + Correo Directo)

Para garantizar que los mensajes lleguen siempre a `infoepsilontgn@gmail.com` sin caídas:

1. **Envío desde la web (ShipMyForm)**:
   - Al enviar el formulario por primera vez, el servicio remite un correo de confirmación a `infoepsilontgn@gmail.com`.
   - Revisa la bandeja de entrada y la carpeta de **Spam / Correo no deseado** y pulsa en el enlace de activación.
   - A partir de ese momento, todos los mensajes llegarán directamente a tu correo.

2. **Opción directa (Gmail / Correo)**:
   - Los usuarios también disponen de un botón secundario que abre automáticamente su aplicación de correo (Gmail, Outlook, etc.) con los datos del formulario ya redactados y dirigidos a `infoepsilontgn@gmail.com`.

---

## Despliegue en GitHub Pages

Este proyecto es 100% estático y compatible con GitHub Pages:

1. Sube este repositorio a GitHub.
2. Ve a **Settings** > **Pages** dentro de tu repositorio.
3. En **Source**, selecciona la rama `main` y la carpeta `/ (root)`.
4. Pulsa **Save**. En un par de minutos tu web estará disponible en línea en una URL del tipo `https://tu-usuario.github.io/nombre-repo/`.
