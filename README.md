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
- **Formulario de captación con autoenvío silencioso**:
  - Campos: Nombre, Email, Posición Principal (desplegable), Posición Secundaria (desplegable), Asunto y Mensaje.
  - Validación completa en cliente.
  - Envío automático en segundo plano mediante **Web3Forms API** hacia `infoepsilontgn@gmail.com`.
  - Sin aperturas de ventanas ni redirecciones externas.

---

## Estructura del Proyecto

```text
├── index.html       # Estructura semántica HTML5
├── style.css        # Estilos, variables CSS y animaciones
├── main.js          # Lógica interactiva (carrusel, calendario, validación y autoenvío)
├── enviar.php       # Backend alternativo en PHP con respuesta JSON (opcional para hosting con PHP)
├── img/
│   ├── logo.png     # Escudo oficial con fondo transparente
│   └── logo.jpg     # Escudo original
└── README.md        # Documentación del proyecto
```

---

## Formulario de Contacto

El formulario envía automáticamente los mensajes en segundo plano hacia `infoepsilontgn@gmail.com` a través de Web3Forms:
* Al pulsar **"Enviar mensaje"**, el botón se desactiva temporalmente y se procesa la solicitud mediante AJAX.
* Tras completarse con éxito, se muestra el aviso de confirmación en verde y se reinicia el formulario.
* No abre ventanas emergentes ni aplicaciones externas de correo.

---

## Despliegue en GitHub Pages

Este proyecto es 100% estático y compatible con GitHub Pages:

1. Repositorio en GitHub: `https://github.com/gerard200623-ship-it/epsilon.github.io`
2. Ve a **Settings** > **Pages** dentro de tu repositorio (`https://github.com/gerard200623-ship-it/epsilon.github.io/settings/pages`).
3. En **Source**, selecciona la rama `main` y la carpeta `/ (root)`.
4. Pulsa **Save**. En un par de minutos tu web estará disponible en línea en:  
   `https://gerard200623-ship-it.github.io/epsilon.github.io/`
