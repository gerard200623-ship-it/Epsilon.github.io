// =========================================
// MENÚ MÓVIL
// =========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

// =========================================
// PLANTILLA DEL EQUIPO - CARDS INTERACTIVAS
// Estilo cromos deportivos con animación al hacer clic
// =========================================

const jugadores = [
  { numero: 1, nombre: "Jan", posicion: "Portero", rol: "portero", pie: "Diestro", perfil: "Seguridad bajo palos y reflejos" },
  { numero: 4, nombre: "Gálvez", posicion: "Defensa Central", rol: "defensa", pie: "Diestro", perfil: "Contundencia y salida limpia" },
  { numero: 3, nombre: "Defensa", posicion: "Defensa", rol: "defensa", pie: "Zurdo", perfil: "Marcaje y repliegue rápido" },
  { numero: 6, nombre: "Gerard", posicion: "Centrocampista", rol: "medio", pie: "Diestro", perfil: "Visión de juego y distribución" },
  { numero: 8, nombre: "Miguel", posicion: "Centrocampista", rol: "medio", pie: "Diestro", perfil: "Presión alta y llegada al área" },
  { numero: 9, nombre: "Ash", posicion: "Delantero", rol: "delantero", pie: "Diestro", perfil: "Definición y desmarque rápido" },
  { numero: 11, nombre: "Delantero", posicion: "Delantero", rol: "delantero", pie: "Zurdo", perfil: "Velocidad y disparo a puerta" }
];

let jugadorActual = 0;
let isAnimating = false;

const cardsDeck = document.getElementById("cardsDeck");
const cardsPagination = document.getElementById("cardsPagination");
const prevPlayerBtn = document.getElementById("prevPlayer");
const nextPlayerBtn = document.getElementById("nextPlayer");

function createCardHTML(jugador, estadoClase) {
  return `
    <article class="player-card-deck ${estadoClase} pos-${jugador.rol}" data-index="${jugador.originalIndex}">
      <div class="card-inner">
        <!-- Parte superior del cromo -->
        <div class="card-top">
          <div class="card-club-tag">
            <img src="img/logo.png" alt="Épsilon" class="card-mini-logo">
            <span>ÉPSILON FC</span>
          </div>
          <span class="card-role-chip">${jugador.posicion}</span>
        </div>

        <!-- Dorsal gigante con textura deportiva -->
        <div class="card-dorsal-wrap">
          <span class="card-dorsal">${jugador.numero}</span>
        </div>

        <!-- Información del jugador -->
        <div class="card-bottom">
          <h3 class="card-name">${jugador.nombre}</h3>
          <p class="card-desc">${jugador.perfil}</p>
          <div class="card-stats">
            <span>Pie: <strong>${jugador.pie}</strong></span>
            <span>Fútbol 7</span>
          </div>
        </div>

        <!-- Marca de agua decorativa -->
        <div class="card-watermark">ÉPSILON</div>
      </div>
    </article>
  `;
}

function renderCardsDeck(animacion = "") {
  if (!cardsDeck) return;

  const total = jugadores.length;
  const prevIdx = (jugadorActual - 1 + total) % total;
  const currIdx = jugadorActual;
  const nextIdx = (jugadorActual + 1) % total;

  const prevJ = { ...jugadores[prevIdx], originalIndex: prevIdx };
  const currJ = { ...jugadores[currIdx], originalIndex: currIdx };
  const nextJ = { ...jugadores[nextIdx], originalIndex: nextIdx };

  let animClass = "";
  if (animacion === "next") animClass = "anim-shift-right";
  if (animacion === "prev") animClass = "anim-shift-left";

  cardsDeck.className = `cards-deck ${animClass}`;

  cardsDeck.innerHTML = `
    ${createCardHTML(prevJ, "card-preview card-left")}
    ${createCardHTML(currJ, "card-active")}
    ${createCardHTML(nextJ, "card-preview card-right")}
  `;

  // Asignar clic a la carta central para pasar a la derecha
  const activeCard = cardsDeck.querySelector(".card-active");
  if (activeCard) {
    activeCard.addEventListener("click", () => {
      cambiarJugador("next");
    });
  }

  // Clic en la carta derecha para avanzar
  const rightCard = cardsDeck.querySelector(".card-right");
  if (rightCard) {
    rightCard.addEventListener("click", () => {
      cambiarJugador("next");
    });
  }

  // Clic en la carta izquierda para retroceder
  const leftCard = cardsDeck.querySelector(".card-left");
  if (leftCard) {
    leftCard.addEventListener("click", () => {
      cambiarJugador("prev");
    });
  }

  renderPagination();
}

function cambiarJugador(direccion) {
  if (isAnimating) return;
  isAnimating = true;

  const total = jugadores.length;
  if (direccion === "next") {
    jugadorActual = (jugadorActual + 1) % total;
    renderCardsDeck("next");
  } else {
    jugadorActual = (jugadorActual - 1 + total) % total;
    renderCardsDeck("prev");
  }

  setTimeout(() => {
    isAnimating = false;
  }, 450);
}

function renderPagination() {
  if (!cardsPagination) return;
  cardsPagination.innerHTML = "";

  jugadores.forEach((jugador, i) => {
    const dot = document.createElement("button");
    dot.className = `pagination-dot ${i === jugadorActual ? "active" : ""}`;
    dot.setAttribute("aria-label", `Ver a ${jugador.nombre}`);
    dot.innerHTML = `<span>${jugador.numero}</span>`;

    dot.addEventListener("click", () => {
      if (jugadorActual !== i && !isAnimating) {
        const direccion = i > jugadorActual ? "next" : "prev";
        jugadorActual = i;
        cambiarJugador(direccion);
      }
    });

    cardsPagination.appendChild(dot);
  });
}

if (prevPlayerBtn) {
  prevPlayerBtn.addEventListener("click", () => cambiarJugador("prev"));
}
if (nextPlayerBtn) {
  nextPlayerBtn.addEventListener("click", () => cambiarJugador("next"));
}

// Inicializar la plantilla de cartas
renderCardsDeck();

// =========================================
// CALENDARIO CON CELDAS Y DETALLES DE DÍA
// =========================================

// Lista de eventos oficiales del equipo (Añadid aquí nuevos partidos)
const eventosCalendario = [
  {
    fecha: "2026-11-12",
    hora: "20:00",
    titulo: "Entrenamiento Táctico",
    tipo: "Entrenamiento",
    lugar: "Campo municipal de Tarragona",
    descripcion: "Sesión preparatoria de fútbol 7. Posesión, presión alta y finalización."
  },
  {
    fecha: "2026-11-19",
    hora: "21:00",
    titulo: "Épsilon FC vs Rival A",
    tipo: "Amistoso",
    lugar: "Polideportivo Municipal (Tarragona)",
    descripcion: "Partido de preparación de pretemporada antes del arranque de la liga oficial. Convocatoria a las 20:30."
  },
  {
    fecha: "2026-11-26",
    hora: "20:30",
    titulo: "Épsilon FC vs Rival B",
    tipo: "Amistoso",
    lugar: "Campo Altafulla",
    descripcion: "Encuentro preparatorio de rodaje para ensamblar el equipo. Equipación oficial rojinegra."
  },
  {
    fecha: "2026-12-03",
    hora: "20:00",
    titulo: "Entrenamiento Táctico y Balón Parado",
    tipo: "Entrenamiento",
    lugar: "Campo de césped artificial (Tarragona)",
    descripcion: "Estrategia a balón parado, repliegue defensivo y disparos a media distancia."
  },
  {
    fecha: "2026-12-10",
    hora: "21:00",
    titulo: "Épsilon FC vs Costa Daurada",
    tipo: "Amistoso",
    lugar: "Tarragona",
    descripcion: "Partido amistoso preparatorio para llegar al 100% al inicio del campeonato."
  }
];

// Estado actual del calendario (inicia en Noviembre 2026)
let calYear = 2026;
let calMonth = 10; // 0 = Enero, 10 = Noviembre
let fechaSeleccionada = "2026-11-19"; // Día seleccionado por defecto

const calMonthTitle = document.getElementById("calMonthTitle");
const calendarDaysGrid = document.getElementById("calendarDays");
const calendarDetail = document.getElementById("calendarDetail");
const calPrevMonthBtn = document.getElementById("calPrevMonth");
const calNextMonthBtn = document.getElementById("calNextMonth");

const nombresMeses = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

function renderCalendar() {
  if (!calendarDaysGrid || !calMonthTitle) return;

  calMonthTitle.textContent = `${nombresMeses[calMonth]} ${calYear}`;
  calendarDaysGrid.innerHTML = "";

  // Primer día del mes (ajustado para que lunes = 0, domingo = 6)
  const primerDiaIndex = (new Date(calYear, calMonth, 1).getDay() + 6) % 7;
  // Días totales del mes actual
  const diasMesActual = new Date(calYear, calMonth + 1, 0).getDate();
  // Días del mes anterior
  const diasMesAnterior = new Date(calYear, calMonth, 0).getDate();

  // Celdas de relleno del mes anterior
  for (let i = primerDiaIndex - 1; i >= 0; i--) {
    const diaNum = diasMesAnterior - i;
    const celda = document.createElement("div");
    celda.className = "cal-day cal-day-inactive";
    celda.innerHTML = `<span class="day-number">${diaNum}</span>`;
    calendarDaysGrid.appendChild(celda);
  }

  // Celdas de los días del mes actual
  for (let d = 1; d <= diasMesActual; d++) {
    const diaPadded = String(d).padStart(2, "0");
    const mesPadded = String(calMonth + 1).padStart(2, "0");
    const fechaString = `${calYear}-${mesPadded}-${diaPadded}`;

    const evento = eventosCalendario.find(ev => ev.fecha === fechaString);

    const celda = document.createElement("div");
    let clases = "cal-day";
    if (fechaString === fechaSeleccionada) clases += " selected";
    if (evento) clases += ` has-event event-${evento.tipo.toLowerCase()}`;

    celda.className = clases;

    let badgeHTML = "";
    if (evento) {
      badgeHTML = `<span class="event-tag">${evento.tipo}</span>`;
    }

    celda.innerHTML = `
      <span class="day-number">${d}</span>
      ${badgeHTML}
    `;

    celda.addEventListener("click", () => {
      fechaSeleccionada = fechaString;
      renderCalendar();
      renderCalendarDetail(fechaString, evento);
    });

    calendarDaysGrid.appendChild(celda);
  }

  // Celdas sobrantes para completar cuadrícula visual de 35 o 42 celdas
  const totalCeldasActuales = primerDiaIndex + diasMesActual;
  const celdasFaltantes = (7 - (totalCeldasActuales % 7)) % 7;
  for (let d = 1; d <= celdasFaltantes; d++) {
    const celda = document.createElement("div");
    celda.className = "cal-day cal-day-inactive";
    celda.innerHTML = `<span class="day-number">${d}</span>`;
    calendarDaysGrid.appendChild(celda);
  }

  // Actualizar panel de detalle
  const eventoActivo = eventosCalendario.find(ev => ev.fecha === fechaSeleccionada);
  renderCalendarDetail(fechaSeleccionada, eventoActivo);
}

function renderCalendarDetail(fechaStr, evento) {
  if (!calendarDetail) return;

  const [y, m, d] = fechaStr.split("-");
  const fechaObj = new Date(Number(y), Number(m) - 1, Number(d));
  const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const nombreDia = diasSemana[fechaObj.getDay()];
  const fechaFormatoBonito = `${nombreDia}, ${d} de ${nombresMeses[Number(m) - 1]} de ${y}`;

  if (evento) {
    calendarDetail.innerHTML = `
      <div class="detail-card has-match">
        <div class="detail-header">
          <span class="detail-date">${fechaFormatoBonito}</span>
          <span class="detail-badge detail-badge-${evento.tipo.toLowerCase()}">${evento.tipo}</span>
        </div>
        <h4 class="detail-title">${evento.titulo}</h4>
        <div class="detail-meta">
          <span class="detail-meta-item">
            <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <strong>${evento.hora}</strong>
          </span>
          <span class="detail-meta-item">
            <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <strong>${evento.lugar}</strong>
          </span>
        </div>
        <p class="detail-desc">${evento.descripcion}</p>
      </div>
    `;
  } else {
    calendarDetail.innerHTML = `
      <div class="detail-card no-match">
        <div class="detail-header">
          <span class="detail-date">${fechaFormatoBonito}</span>
        </div>
        <h4 class="detail-title">Día sin partidos ni entrenamientos</h4>
        <p class="detail-desc">No hay ninguna actividad programada para este día. Consulta las celdas marcadas en rojo para ver los próximos eventos del Épsilon FC.</p>
      </div>
    `;
  }
}

if (calPrevMonthBtn) {
  calPrevMonthBtn.addEventListener("click", () => {
    calMonth--;
    if (calMonth < 0) {
      calMonth = 11;
      calYear--;
    }
    renderCalendar();
  });
}

if (calNextMonthBtn) {
  calNextMonthBtn.addEventListener("click", () => {
    calMonth++;
    if (calMonth > 11) {
      calMonth = 0;
      calYear++;
    }
    renderCalendar();
  });
}

// Inicializar el calendario
renderCalendar();

// =========================================
// FORMULARIO DE CONTACTO (AUTOENVÍO SILENCIOSO CON WEB3FORMS HACIA infoepsilontgn@gmail.com)
// =========================================

// Access Key configurada para autoenvío en segundo plano:
const FORMSPREE_ID = ""; 
const WEB3FORMS_KEY = "9a8f1047-034d-4ce2-a923-ecf4b2d70800";

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const submitBtn = document.getElementById("submitBtn");

if (contactForm && formStatus && submitBtn) {
  /**
   * Muestra mensajes de estado de forma segura evitando innerHTML con texto no confiable.
   * @param {"loading"|"success"|"warning"|"error"} tipo - Clase de estilo visual.
   * @param {string} titulo - Encabezado en negrita del aviso.
   * @param {string} [detalle=""] - Explicación secundaria del mensaje.
   */
  function mostrarEstado(tipo, titulo, detalle = "") {
    formStatus.style.display = "block";
    formStatus.className = `form-status-msg status-${tipo}`;
    formStatus.replaceChildren();

    const strongEl = document.createElement("strong");
    strongEl.textContent = titulo;
    formStatus.appendChild(strongEl);

    if (detalle) {
      formStatus.appendChild(document.createElement("br"));
      const smallEl = document.createElement("small");
      smallEl.textContent = detalle;
      formStatus.appendChild(smallEl);
    }
  }

  /**
   * Presenta la opción de envío directo por correo cuando no hay pasarela de autoenvío configurada.
   */
  function mostrarOpcionesEnvioDirecto(urlGmail, urlMailto) {
    formStatus.style.display = "block";
    formStatus.className = "form-status-msg status-warning";
    formStatus.replaceChildren();

    const strongEl = document.createElement("strong");
    strongEl.textContent = "Autoenvío pendiente de activar:";
    formStatus.appendChild(strongEl);

    formStatus.appendChild(document.createElement("br"));

    const smallEl = document.createElement("small");
    smallEl.textContent = "Para enviar automáticamente sin abrir Gmail, introduce un Formspree ID o Web3Forms Key en main.js. Mientras tanto, puedes enviar tu borrador con 1 clic aquí:";
    formStatus.appendChild(smallEl);

    const actionsGroup = document.createElement("div");
    actionsGroup.className = "status-actions-group";

    const btnGmail = document.createElement("a");
    btnGmail.href = urlGmail;
    btnGmail.target = "_blank";
    btnGmail.rel = "noopener noreferrer";
    btnGmail.className = "status-action-btn";
    btnGmail.textContent = "Abrir y enviar en Gmail";
    actionsGroup.appendChild(btnGmail);

    const btnMailto = document.createElement("a");
    btnMailto.href = urlMailto;
    btnMailto.className = "status-action-btn secondary";
    btnMailto.textContent = "Abrir en App de Correo";
    actionsGroup.appendChild(btnMailto);

    formStatus.appendChild(actionsGroup);
  }

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // 1. Obtener los campos del formulario
    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const telefonoInput = document.getElementById("telefono");
    const posPrincipalInput = document.getElementById("posicion_principal");
    const posSecundariaInput = document.getElementById("posicion_secundaria");
    const asuntoInput = document.getElementById("asunto");
    const mensajeInput = document.getElementById("mensaje");

    const nombre = nombreInput.value.trim();
    const email = emailInput.value.trim();
    const telefono = telefonoInput ? telefonoInput.value.trim() : "";
    const posPrincipal = posPrincipalInput.value;
    const posSecundaria = posSecundariaInput.value || "Ninguna";
    const asunto = asuntoInput.value.trim();
    const mensaje = mensajeInput.value.trim();

    // 2. Validación de campos en el cliente con mensajes comprensibles
    if (!nombre) {
      mostrarEstado("error", "Por favor, introduce tu nombre.");
      nombreInput.focus();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      mostrarEstado("error", "Por favor, introduce una dirección de correo válida (ejemplo@dominio.com).");
      emailInput.focus();
      return;
    }

    if (!posPrincipal) {
      mostrarEstado("error", "Por favor, selecciona una posición principal de juego.");
      posPrincipalInput.focus();
      return;
    }

    if (!asunto) {
      mostrarEstado("error", "Por favor, escribe el asunto de tu mensaje.");
      asuntoInput.focus();
      return;
    }

    if (!mensaje) {
      mostrarEstado("error", "Por favor, redacta el contenido de tu mensaje.");
      mensajeInput.focus();
      return;
    }

    // 3. Preparar URLs directas de respaldo
    const asuntoFinal = encodeURIComponent(`Contacto Épsilon FC: ${asunto}`);
    const cuerpoTexto =
      `Hola equipo Épsilon Tarragona,\n\n` +
      `Me pongo en contacto a través de la web oficial:\n\n` +
      `• Nombre: ${nombre}\n` +
      `• Email de contacto: ${email}\n` +
      `• Teléfono: ${telefono || "No indicado"}\n` +
      `• Posición principal: ${posPrincipal}\n` +
      `• Posición secundaria: ${posSecundaria}\n\n` +
      `• Asunto: ${asunto}\n\n` +
      `Mensaje:\n${mensaje}\n\n` +
      `---\nÉpsilon Tarragona - Fútbol 7 amateur`;

    const cuerpoFinal = encodeURIComponent(cuerpoTexto);
    const urlGmail = `https://mail.google.com/mail/?view=cm&fs=1&to=infoepsilontgn@gmail.com&su=${asuntoFinal}&body=${cuerpoFinal}`;
    const urlMailto = `mailto:infoepsilontgn@gmail.com?subject=${asuntoFinal}&body=${cuerpoFinal}`;

    // 4. Si hay configurado un servicio de autoenvío en segundo plano (Formspree o Web3Forms)
    if (FORMSPREE_ID || WEB3FORMS_KEY) {
      submitBtn.disabled = true;
      const textoOriginalBtn = submitBtn.textContent;
      submitBtn.textContent = "Enviando mensaje...";
      mostrarEstado("loading", "Enviando tu mensaje en segundo plano...");

      try {
        let endpoint = "";
        let bodyPayload = {};

        if (FORMSPREE_ID) {
          endpoint = `https://formspree.io/f/${FORMSPREE_ID}`;
          bodyPayload = {
            Nombre: nombre,
            Email: email,
            Teléfono: telefono || "No indicado",
            "Posición Principal": posPrincipal,
            "Posición Secundaria": posSecundaria,
            Asunto: asunto,
            Mensaje: mensaje,
            _replyto: email
          };
        } else if (WEB3FORMS_KEY) {
          endpoint = "https://api.web3forms.com/submit";
          bodyPayload = {
            access_key: WEB3FORMS_KEY,
            subject: `Nuevo contacto web Épsilon FC: ${asunto}`,
            Nombre: nombre,
            Email: email,
            Teléfono: telefono || "No indicado",
            "Posición Principal": posPrincipal,
            "Posición Secundaria": posSecundaria,
            Asunto: asunto,
            Mensaje: mensaje,
            from_name: "Web Épsilon Tarragona"
          };
        }

        const respuesta = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(bodyPayload)
        });

        const resultado = await respuesta.json().catch(() => ({}));

        if (respuesta.ok && (resultado.ok || resultado.success)) {
          mostrarEstado(
            "success",
            "¡Mensaje enviado con éxito!",
            "El equipo del Épsilon Tarragona revisará tu mensaje en infoepsilontgn@gmail.com. Te responderemos pronto."
          );
          contactForm.reset();
          return;
        } else {
          const mensajeError = resultado.message || resultado.error || "El servicio no pudo procesar la solicitud.";
          console.warn("Error en autoenvío:", mensajeError);
          mostrarOpcionesEnvioDirecto(urlGmail, urlMailto);
        }
      } catch (errRed) {
        console.warn("Fallo de red en autoenvío:", errRed);
        mostrarOpcionesEnvioDirecto(urlGmail, urlMailto);
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = textoOriginalBtn;
      }
      return;
    }

    // 5. Si no hay ID de autoenvío configurado todavía, abrimos el borrador en Gmail
    window.open(urlGmail, "_blank");
    mostrarOpcionesEnvioDirecto(urlGmail, urlMailto);
  });
}
