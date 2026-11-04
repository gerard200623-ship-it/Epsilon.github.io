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
- **Formulario de captación y contacto**:
  - Campos: Nombre, Email, Posición Principal (desplegable), Posición Secundaria (desplegable), Asunto y Mensaje.
  - Validación completa en cliente.
  - Integración mediante el servicio seguro **FormSubmit** hacia `infoepsilontgn@gmail.com`.
  - Protección antispam mediante campo honeypot (`_honey`) y sanitización con `textContent`.
  - Bloqueo de doble clic durante el envío y conservación de datos en caso de fallo de red.

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

## Activación del Formulario de Contacto (FormSubmit)

Para que los mensajes enviados a través del formulario lleguen a `infoepsilontgn@gmail.com`, FormSubmit requiere una activación única:

1. **Primer envío**: Rellena el formulario de la web y pulsa en **"Enviar mensaje"**.
2. **Revisar Gmail**: Accede a `infoepsilontgn@gmail.com` y revisa la bandeja de entrada y la carpeta de **Spam / Correo no deseado**.
3. **Activar**: Abre el correo enviado por *FormSubmit* y haz clic en el botón **"Activate Form"**.
4. ¡Listo! A partir de ese momento, todas las solicitudes y mensajes llegarán directamente a la bandeja de entrada.

---

## Despliegue en GitHub Pages

Este proyecto es 100% estático y compatible con GitHub Pages:

1. Sube este repositorio a GitHub.
2. Ve a **Settings** > **Pages** dentro de tu repositorio.
3. En **Source**, selecciona la rama `main` (o `master`) y la carpeta `/ (root)`.
4. Pulsa **Save**. En un par de minutos tu web estará disponible en línea en una URL del tipo `https://tu-usuario.github.io/nombre-repo/`.
