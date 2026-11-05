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
- **Formulario de captación y contacto directo**:
  - Campos: Nombre, Email, Posición Principal (desplegable), Posición Secundaria (desplegable), Asunto y Mensaje.
  - Validación completa en cliente.
  - Generación de borrador directo hacia `infoepsilontgn@gmail.com` (Gmail Web y clientes nativos).
  - Cero dependencias de proxies o servidores externos que puedan caerse.

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

## Envío de Mensajes de Contacto

Al rellenar el formulario y hacer clic en **"Enviar mensaje"**:
1. Se valida que todos los datos sean correctos.
2. Se prepara de inmediato un correo dirigido a `infoepsilontgn@gmail.com` con el asunto, nombre, posiciones y mensaje estructurados.
3. Se abre automáticamente la ventana de redacción (compatible con Gmail Web en navegador y clientes de escritorio o móviles como Outlook o Apple Mail).
4. El mensaje se envía de forma directa y garantizada sin intermediarios ni demoras.

---

## Despliegue en GitHub Pages

Este proyecto es 100% estático y compatible con GitHub Pages:

1. Sube este repositorio a GitHub.
2. Ve a **Settings** > **Pages** dentro de tu repositorio.
3. En **Source**, selecciona la rama `main` y la carpeta `/ (root)`.
4. Pulsa **Save**. En un par de minutos tu web estará disponible en línea en una URL del tipo `https://tu-usuario.github.io/nombre-repo/`.
