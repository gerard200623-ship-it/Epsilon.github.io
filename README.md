# Épsilon Tarragona — Web Oficial del Club

Sitio web oficial del club de fútbol 7 amateur **Épsilon Tarragona** (Épsilon FC).

🌐 **Web en línea:** [https://epsilontgn.vercel.app](https://epsilontgn.vercel.app)

---

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
  - Campos: Nombre, Email, Teléfono, Posición Principal (desplegable), Posición Secundaria (desplegable), Asunto y Mensaje.
  - Validación completa en cliente.
  - Autoenvío en segundo plano mediante **Web3Forms API** hacia `infoepsilontgn@gmail.com`.
  - Sin aperturas de ventanas externas ni redirecciones.

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

## Despliegue y Hosting

La web está alojada y desplegada globalmente a través de **Vercel** con sincronización continua desde GitHub:
* **URL de producción:** [https://epsilontgn.vercel.app](https://epsilontgn.vercel.app)
* Cada cambio o commit subido a la rama `main` de GitHub se despliega automáticamente en cuestión de segundos.
