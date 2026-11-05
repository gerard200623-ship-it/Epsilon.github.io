<?php
// Permitir peticiones CORS y responder en formato JSON UTF-8
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Responder de inmediato a peticiones preflight OPTIONS
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

// =========================================
// ENVÍO DEL FORMULARIO DE CONTACTO
// =========================================
// Este script procesa el formulario si la web se aloja
// en un servidor con intérprete PHP y servicio SMTP configurado.

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Limpieza y saneamiento de entradas
    $nombre              = htmlspecialchars(trim($_POST["nombre"] ?? ""));
    $email               = filter_var(trim($_POST["email"] ?? ""), FILTER_SANITIZE_EMAIL);
    $telefono            = htmlspecialchars(trim($_POST["telefono"] ?? "No indicado"));
    $asunto              = htmlspecialchars(trim($_POST["asunto"] ?? ""));
    $posicion_principal  = htmlspecialchars(trim($_POST["posicion_principal"] ?? "No especificada"));
    $posicion_secundaria = htmlspecialchars(trim($_POST["posicion_secundaria"] ?? "Ninguna"));
    $mensaje             = htmlspecialchars(trim($_POST["mensaje"] ?? ""));

    // Validación de campos obligatorios
    if ($nombre === "" || $email === "" || $asunto === "" || $mensaje === "") {
        http_response_code(400);
        echo json_encode([
            "success" => false,
            "message" => "Por favor, completa todos los campos requeridos."
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

    // Validación de formato de correo
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode([
            "success" => false,
            "message" => "La dirección de correo electrónico no tiene un formato válido."
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

    // Destinatario oficial del club
    $destinatario = "infoepsilontgn@gmail.com";

    // Asunto del correo a recibir
    $asuntoEmail = "Nuevo mensaje web Épsilon: " . $asunto;

    // Cuerpo estructurado del correo
    $cuerpo = "Has recibido un nuevo mensaje desde el formulario web de Épsilon Tarragona:\n\n";
    $cuerpo .= "Nombre: " . $nombre . "\n";
    $cuerpo .= "Email de contacto: " . $email . "\n";
    $cuerpo .= "Teléfono: " . $telefono . "\n";
    $cuerpo .= "Asunto: " . $asunto . "\n";
    $cuerpo .= "Posición principal: " . $posicion_principal . "\n";
    $cuerpo .= "Posición secundaria: " . $posicion_secundaria . "\n\n";
    $cuerpo .= "Mensaje:\n" . $mensaje . "\n\n";
    $cuerpo .= "---\nEnviado desde el formulario oficial de Épsilon FC";

    // Cabeceras MIME para respetar SPF/DMARC y permitir responder directamente al remitente
    $serverHost = $_SERVER["SERVER_NAME"] ?? "epsilonfc.com";
    $remitente  = "no-reply@" . $serverHost;

    $cabeceras   = [];
    $cabeceras[] = "MIME-Version: 1.0";
    $cabeceras[] = "Content-Type: text/plain; charset=UTF-8";
    $cabeceras[] = "From: Épsilon FC <" . $remitente . ">";
    $cabeceras[] = "Reply-To: " . $email;
    $cabeceras[] = "X-Mailer: PHP/" . phpversion();

    $headersString = implode("\r\n", $cabeceras) . "\r\n";

    // Intento de envío mediante la función nativa mail()
    // Nota: Requiere que el servidor de hosting tenga activo y configurado un agente de transporte (sendmail/postfix/SMTP)
    $enviado = @mail($destinatario, $asuntoEmail, $cuerpo, $headersString);

    if ($enviado) {
        http_response_code(200);
        echo json_encode([
            "success" => true,
            "message" => "Mensaje aceptado correctamente por el servidor de correo."
        ], JSON_UNESCAPED_UNICODE);
        exit;
    } else {
        http_response_code(500);
        echo json_encode([
            "success" => false,
            "message" => "El servidor de hosting no pudo entregar el correo (mail no configurado). Escríbenos directamente a infoepsilontgn@gmail.com."
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

} else {
    // Si se accede directamente por GET u otro método no permitido
    http_response_code(405);
    echo json_encode([
        "success" => false,
        "message" => "Método no permitido. Utiliza el formulario de contacto."
    ], JSON_UNESCAPED_UNICODE);
    exit;
}
?>
