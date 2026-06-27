<?php
// =========================================================================
// 1. LE MOTEUR BACKEND PHP
// =========================================================================
session_start();

$erreur = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email']);
    $password = $_POST['password'];
    $role_choisi = isset($_POST['role_selected']) ? trim($_POST['role_selected']) : '';

    // Configuration de la connexion à SQL Server
    $serverName = "DESKTOP-KPI0OFQ\\SQLEXPRESS";
    $database = "Schoolpro";
    $uid = ""; // Utilisateur SQL Server (ex: sa)
    $pwd = ""; // Mot de passe SQL Server

    try {
        $bdd = new PDO("sqlsrv:server=$serverName;Database=$database", $uid, $pwd);
        $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Recherche de l'utilisateur par email
        $sql = "SELECT ID_Utilisateur, ID_Ecole, Nom, Prenom, Mot_de_passe_Hache, Role_Utilisateur
                FROM Utilisateurs WHERE Email = ?";
        $stmt = $bdd->prepare($sql);
        $stmt->execute([$email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && $password === $user['Mot_de_passe_Hache']) {
            $role_bdd = trim($user['Role_Utilisateur']);
            $role_valide = false;

            // Vérification intelligente des rôles
            if ($role_choisi === 'Administrateur' && ($role_bdd === 'Administrateur' || $role_bdd === 'Directeur' || $role_bdd === 'Super_Admin')) {
                $role_valide = true;
            } elseif ($role_choisi === 'Enseignant' && ($role_bdd === 'Enseignant' || $role_bdd === 'Professeur')) {
                $role_valide = true;
            } elseif (($role_choisi === 'Élève' || $role_choisi === 'Eleve') && ($role_bdd === 'Eleve' || $role_bdd === 'Élève')) {
                $role_valide = true;
            }

            if ($role_valide) {
                // Enregistrement en session
                $_SESSION['id_user'] = $user['ID_Utilisateur'];
                $_SESSION['id_ecole'] = $user['ID_Ecole'];
                $_SESSION['nom'] = $user['Nom'];
                $_SESSION['prenom'] = $user['Prenom'];
                $_SESSION['role'] = $role_bdd;

                // ==========================================================
                // REDIRECTION DIRECTE (sans vérification file_exists)
                // ==========================================================
                if ($role_bdd === 'Super_Admin' || $role_bdd === 'Administrateur' || $role_bdd === 'Directeur') {
                    header('Location: Administrateur/index.html');
                    exit();
                } elseif ($role_bdd === 'Professeur' || $role_bdd === 'Enseignant') {
                    header('Location: Enseignant/index.html');
                    exit();
                } elseif ($role_bdd === 'Eleve' || $role_bdd === 'Élève') {
                    header('Location: Etudiant/index.html');
                    exit();
                } else {
                    $erreur = "Rôle non reconnu.";
                }
            } else {
                $erreur = "Le rôle sélectionné ne correspond pas à ce compte.";
            }
        } else {
            $erreur = "Adresse e-mail ou mot de passe incorrect.";
        }
    } catch (Exception $e) {
        $erreur = "Erreur de connexion au système : " . $e->getMessage();
    }
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SchoolPro — Connexion</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --green-main: #1D9E75;
      --green-dark: #0F6E56;
      --green-light: #E1F5EE;
      --green-muted: #9FE1CB;
      --navy: #0F2040;
      --navy-card: #1D3560;
      --text-dark: #1a1a1a;
      --text-mid: #555;
      --text-light: #888;
      --border: #e0e0e0;
      --bg: #f5f6f8;
      --white: #ffffff;
      --radius: 10px;
      --radius-sm: 7px;
    }

    body {
      font-family: 'Inter', sans-serif;
      background: var(--bg);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
    }

    .erreur-box {
      background-color: #fee2e2;
      border: 1px solid #fca5a5;
      color: #991b1b;
      padding: 12px;
      border-radius: var(--radius-sm);
      font-size: 13px;
      margin-bottom: 1.25rem;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .login-card {
      display: flex;
      width: 100%;
      max-width: 860px;
      min-height: 580px;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 8px 40px rgba(0,0,0,0.12);
    }

    .panel-left {
      width: 42%;
      background: var(--navy);
      padding: 2.5rem 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .brand-logo {
      width: 42px; height: 42px;
      background: var(--green-main);
      border-radius: 10px;
      display: flex; align-items: center; justify-content: center;
      font-weight: 600; font-size: 15px; color: #fff;
      flex-shrink: 0;
      letter-spacing: 0.02em;
    }

    .brand-text .name { color: #fff; font-size: 18px; font-weight: 600; }
    .brand-text .tagline { color: var(--green-muted); font-size: 12px; margin-top: 2px; }

    .hero { padding: 0.5rem 0; }

    .hero-eyebrow {
      color: var(--green-main);
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 12px;
    }

    .hero h2 {
      color: #fff;
      font-size: 21px;
      font-weight: 600;
      line-height: 1.4;
      margin-bottom: 14px;
    }

    .hero p {
      color: #8aabbf;
      font-size: 13px;
      line-height: 1.65;
    }

    .feature-chips { display: flex; flex-direction: column; gap: 10px; margin-top: 1.5rem; }

    .chip {
      display: flex; align-items: center; gap: 12px;
      background: rgba(255,255,255,0.06);
      border: 0.5px solid rgba(255,255,255,0.1);
      border-radius: var(--radius-sm);
      padding: 11px 14px;
    }

    .chip i { font-size: 20px; color: var(--green-muted); flex-shrink: 0; }

    .chip-content .label { color: #fff; font-size: 13px; font-weight: 500; }
    .chip-content .sub { color: #8aabbf; font-size: 11px; margin-top: 2px; }

    .year-badge {
      display: inline-flex; align-items: center; gap: 7px;
      background: var(--navy-card);
      border-radius: 20px;
      padding: 7px 16px;
      font-size: 12px; color: var(--green-muted); font-weight: 500;
      letter-spacing: 0.02em;
    }

    .year-badge i { font-size: 15px; }

    .panel-right {
      flex: 1;
      background: var(--white);
      padding: 2.5rem 2.25rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .form-header { margin-bottom: 1.75rem; }
    .form-header h1 { font-size: 22px; font-weight: 600; color: var(--text-dark); margin-bottom: 6px; }
    .form-header p { font-size: 14px; color: var(--text-light); }

    .role-selector { display: flex; gap: 8px; margin-bottom: 1.75rem; }

    .role-btn {
      flex: 1;
      padding: 10px 6px;
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      background: #fafafa;
      font-size: 12px; font-weight: 500;
      color: var(--text-mid);
      cursor: pointer;
      text-align: center;
      transition: all 0.15s ease;
      display: flex; flex-direction: column; align-items: center; gap: 5px;
      font-family: 'Inter', sans-serif;
    }

    .role-btn i { font-size: 20px; }

    .role-btn:hover {
      border-color: var(--green-main);
      color: var(--green-dark);
      background: #f0faf6;
    }

    .role-btn.active {
      border-color: var(--green-main);
      background: #E1F5EE;
      color: var(--green-dark);
    }

    .form-group { margin-bottom: 1.1rem; }

    .form-label {
      display: block;
      font-size: 13px;
      font-weight: 500;
      color: var(--text-mid);
      margin-bottom: 6px;
    }

    .input-wrap { position: relative; }

    .input-wrap .icon-left {
      position: absolute; left: 11px; top: 50%; transform: translateY(-50%);
      font-size: 16px; color: #bbb; pointer-events: none;
    }

    .form-input {
      width: 100%;
      padding: 10px 14px 10px 38px;
      font-size: 14px;
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      background: #fafafa;
      color: var(--text-dark);
      outline: none;
      font-family: 'Inter', sans-serif;
      transition: border-color 0.15s, box-shadow 0.15s;
    }

    .form-input:focus {
      border-color: var(--green-main);
      box-shadow: 0 0 0 3px rgba(29,158,117,0.12);
      background: #fff;
    }

    .form-input::placeholder { color: #c0c0c0; }

    .pw-toggle {
      position: absolute; right: 11px; top: 50%; transform: translateY(-50%);
      background: none; border: none; cursor: pointer; padding: 0;
      color: #bbb; font-size: 17px; line-height: 1;
    }

    .pw-toggle:hover { color: var(--text-mid); }

    .form-meta {
      display: flex; justify-content: space-between; align-items: center;
      margin: 0.25rem 0 1.5rem;
    }

    .checkbox-wrap {
      display: flex; align-items: center; gap: 7px;
      font-size: 13px; color: var(--text-mid); cursor: pointer;
    }

    .checkbox-wrap input[type="checkbox"] {
      accent-color: var(--green-main);
      width: 15px; height: 15px; cursor: pointer;
    }

    .forgot-link {
      font-size: 13px; color: var(--green-main);
      text-decoration: none; font-weight: 500;
    }

    .forgot-link:hover { text-decoration: underline; }

    .btn-submit {
      width: 100%;
      padding: 11px;
      background: var(--green-main);
      color: #fff;
      border: none;
      border-radius: var(--radius-sm);
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      font-family: 'Inter', sans-serif;
      transition: background 0.15s, transform 0.1s;
      display: flex; align-items: center; justify-content: center; gap: 8px;
      letter-spacing: 0.01em;
    }

    .btn-submit:hover { background: var(--green-dark); }
    .btn-submit:active { transform: scale(0.99); }
    .btn-submit i { font-size: 18px; }

    .form-footer {
      text-align: center;
      font-size: 12px;
      color: var(--text-light);
      margin-top: 1.5rem;
    }

    .form-footer a { color: var(--green-main); text-decoration: none; font-weight: 500; }
    .form-footer a:hover { text-decoration: underline; }

    @media (max-width: 640px) {
      .login-card { flex-direction: column; }
      .panel-left { width: 100%; padding: 2rem 1.5rem; }
      .feature-chips { display: none; }
      .panel-right { padding: 2rem 1.5rem; }
    }
  </style>
</head>
<body>

  <div class="login-card">

    <div class="panel-left">
      <div class="brand">
        <div class="brand-logo">SP</div>
        <div class="brand-text">
          <div class="name">SchoolPro</div>
          <div class="tagline">Système scolaire</div>
        </div>
      </div>

      <div class="hero">
        <p class="hero-eyebrow">Bienvenue</p>
        <h2>Gérez votre établissement en toute simplicité</h2>
        <p>Accédez aux classes, notes, élèves et paiements depuis un seul tableau de bord.</p>

        <div class="feature-chips">
          <div class="chip">
            <i class="ti ti-users"></i>
            <div class="chip-content">
              <div class="label">Élèves &amp; Enseignants</div>
              <div class="sub">Suivi des inscriptions en temps réel</div>
            </div>
          </div>
          <div class="chip">
            <i class="ti ti-report"></i>
            <div class="chip-content">
              <div class="label">Bulletins &amp; Notes</div>
              <div class="sub">Saisie et génération automatisée</div>
            </div>
          </div>
          <div class="chip">
            <i class="ti ti-coin"></i>
            <div class="chip-content">
              <div class="label">Paiements scolaires</div>
              <div class="sub">Suivi des frais et relances</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="year-badge">
          <i class="ti ti-calendar"></i>
          Année scolaire 2026 — 2027
        </div>
      </div>
    </div>

    <div class="panel-right">
      <div class="form-header">
        <h1>Connexion</h1>
        <p>Sélectionnez votre rôle et entrez vos identifiants</p>
      </div>

      <?php if (!empty($erreur)): ?>
        <div class="erreur-box">
          <i class="ti ti-alert-circle"></i>
          <?php echo htmlspecialchars($erreur); ?>
        </div>
      <?php endif; ?>

      <div class="role-selector" role="group" aria-label="Sélectionner un rôle">
        <button class="role-btn active" onclick="selectRole(this, 'Administrateur')" type="button">
          <i class="ti ti-shield-check"></i>
          Administrateur
        </button>
        <button class="role-btn" onclick="selectRole(this, 'Enseignant')" type="button">
          <i class="ti ti-chalkboard"></i>
          Enseignant
        </button>
        <button class="role-btn" onclick="selectRole(this, 'Élève')" type="button">
          <i class="ti ti-school"></i>
          Élève
        </button>
      </div>

      <form id="loginForm" action="login.php" method="POST">
        
        <input type="hidden" name="role_selected" id="role_selected" value="Administrateur">

        <div class="form-group">
          <label class="form-label" for="email">Adresse e-mail</label>
          <div class="input-wrap">
            <i class="ti ti-mail icon-left"></i>
            <input
              class="form-input"
              id="email"
              name="email"
              type="email"
              placeholder="nom@etablissement.ht"
              autocomplete="email"
              required
            />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="password">Mot de passe</label>
          <div class="input-wrap">
            <i class="ti ti-lock icon-left"></i>
            <input
              class="form-input"
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              autocomplete="current-password"
              required
            />
            <button class="pw-toggle" type="button" onclick="togglePassword()" aria-label="Afficher/Masquer le mot de passe">
              <i class="ti ti-eye" id="eye-icon"></i>
            </button>
          </div>
        </div>

        <div class="form-meta">
          <label class="checkbox-wrap">
            <input type="checkbox" name="remember" />
            Se souvenir de moi
          </label>
          <a class="forgot-link" href="#">Mot de passe oublié ?</a>
        </div>

        <button class="btn-submit" type="submit">
          <i class="ti ti-login"></i>
          Se connecter
        </button>

      </form>

      <p class="form-footer">
        Problème d'accès ? Contactez votre <a href="#">administrateur</a>.
      </p>
    </div>

  </div>

  <script>
    function selectRole(btn, roleName) {
      document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('role_selected').value = roleName;
    }

    function togglePassword() {
      const input = document.getElementById('password');
      const icon = document.getElementById('eye-icon');
      if (input.type === 'password') {
        input.type = 'text';
        icon.className = 'ti ti-eye-off';
      } else {
        input.type = 'password';
        icon.className = 'ti ti-eye';
      }
    }
  </script>

</body>
</html>