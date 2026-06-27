<?php
// =========================================================================
// 2. DÉCONNEXION (logout.php)
// =========================================================================

// Démarrer la session pour pouvoir la détruire
session_start();

// Vider toutes les variables de session
$_SESSION = array();

// Détruire la session
session_destroy();

// Supprimer le cookie de session (si présent)
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(
        session_name(),
        '',
        time() - 42000,
        $params["path"],
        $params["domain"],
        $params["secure"],
        $params["httponly"]
    );
}

// Éviter la mise en cache de la page de redirection
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

// Rediriger vers la page de connexion
header('Location: login.php');
exit();
?>