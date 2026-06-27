// ============================================================
// DONNÉES DE L'ÉLÈVE
// ============================================================
const StudentData = {
    profile: {
        id: 1,
        prenom: 'Marie',
        nom: 'Jean',
        email: 'marie.jean@email.com',
        matricule: '001',
        classe: '5e Année A',
        dateNaissance: '12/03/2012',
        genre: 'Féminin',
        tuteur: 'Claire Jean',
        telephone: '+509 3710-0000',
        emailTuteur: 'claire.jean@email.com',
        adresse: 'Port-au-Prince, Haïti',
        statut: 'Actif',
        paiement: 'Payé'
    },
    notes: [
        { matiere: 'Mathématiques', interro1: 82, interro2: 78, examen: 85, coeff: 4 },
        { matiere: 'Français', interro1: 75, interro2: 80, examen: 82, coeff: 4 },
        { matiere: 'Sciences', interro1: 88, interro2: 85, examen: 90, coeff: 3 },
        { matiere: 'Anglais', interro1: 85, interro2: 82, examen: 88, coeff: 2 },
        { matiere: 'Histoire', interro1: 78, interro2: 80, examen: 82, coeff: 2 },
        { matiere: 'Créole', interro1: 90, interro2: 92, examen: 95, coeff: 2 }
    ],
    schedule: [
        { jour: 'Lundi', cours: 'Mathématiques', heure: '08:00 - 10:00', salle: '101', prof: 'Marie Claudel' },
        { jour: 'Lundi', cours: 'Français', heure: '10:00 - 12:00', salle: '102', prof: 'Jean Dorval' },
        { jour: 'Mardi', cours: 'Sciences', heure: '08:00 - 10:00', salle: '103', prof: 'Sophie Baptiste' },
        { jour: 'Mardi', cours: 'Anglais', heure: '10:00 - 12:00', salle: '104', prof: 'Catherine Paul' },
        { jour: 'Mercredi', cours: 'Mathématiques', heure: '08:00 - 10:00', salle: '101', prof: 'Marie Claudel' },
        { jour: 'Mercredi', cours: 'Histoire', heure: '10:00 - 12:00', salle: '105', prof: 'Louis Michel' },
        { jour: 'Jeudi', cours: 'Français', heure: '08:00 - 10:00', salle: '102', prof: 'Jean Dorval' },
        { jour: 'Jeudi', cours: 'Sciences', heure: '10:00 - 12:00', salle: '103', prof: 'Sophie Baptiste' },
        { jour: 'Vendredi', cours: 'Créole', heure: '08:00 - 10:00', salle: '106', prof: 'Catherine Paul' },
        { jour: 'Vendredi', cours: 'Anglais', heure: '10:00 - 12:00', salle: '104', prof: 'Catherine Paul' }
    ],
    professeurs: [
        { nom: 'Marie Claudel', matiere: 'Mathématiques', email: 'marie.c@schoolpro.ht', telephone: '+509 3710-1000' },
        { nom: 'Jean Dorval', matiere: 'Français', email: 'jean.d@schoolpro.ht', telephone: '+509 3720-1001' },
        { nom: 'Sophie Baptiste', matiere: 'Sciences', email: 'sophie.b@schoolpro.ht', telephone: '+509 3730-1002' },
        { nom: 'Catherine Paul', matiere: 'Anglais / Créole', email: 'catherine.p@schoolpro.ht', telephone: '+509 3750-1004' },
        { nom: 'Louis Michel', matiere: 'Histoire', email: 'louis.m@schoolpro.ht', telephone: '+509 3740-1003' }
    ],
    presences: {
        '2026-01-06': 'present',
        '2026-01-07': 'absent',
        '2026-01-08': 'present',
        '2026-01-09': 'present',
        '2026-01-10': 'absent',
        '2026-01-13': 'present',
        '2026-01-14': 'present',
        '2026-01-15': 'absent',
        '2026-01-16': 'present',
        '2026-01-17': 'present',
        '2026-01-20': 'present',
        '2026-01-21': 'present',
        '2026-01-22': 'absent',
        '2026-01-23': 'present',
        '2026-01-24': 'present'
    },
    bulletins: [
        { trimestre: '1er Trimestre', annee: '2024-2025', moyenne: 82.5, rang: '3/28', mention: 'Bien', statut: 'disponible' },
        { trimestre: '2e Trimestre', annee: '2024-2025', moyenne: null, rang: '-', mention: 'En cours', statut: 'encours' },
        { trimestre: '3e Trimestre', annee: '2024-2025', moyenne: null, rang: '-', mention: 'À venir', statut: 'avenir' }
    ]
};

// ============================================================
// DONNÉES DES LIVRES (BIBLIOTHÈQUE)
// ============================================================
const BibliothequeData = {
    livres: [
        {
            id: 1,
            titre: 'Mathématiques 5e Année',
            auteur: 'Marie Claudel',
            categorie: 'mathematiques',
            description: 'Manuel complet de mathématiques pour la 5e année avec exercices corrigés.',
            pdfUrl: 'livres/maths_5e.pdf',
            couverture: 'green',
            statut: 'disponible',
            dateAjout: '2026-01-15'
        },
        {
            id: 2,
            titre: 'Français - Grammaire & Conjugaison',
            auteur: 'Jean Dorval',
            categorie: 'francais',
            description: 'Guide complet de grammaire française et conjugaison pour les élèves de 5e.',
            pdfUrl: 'livres/francais_grammaire.pdf',
            couverture: 'blue',
            statut: 'disponible',
            dateAjout: '2026-01-20'
        },
        {
            id: 3,
            titre: 'Sciences de la Nature',
            auteur: 'Sophie Baptiste',
            categorie: 'sciences',
            description: 'Exploration des sciences naturelles avec expériences et observations.',
            pdfUrl: 'livres/sciences_nature.pdf',
            couverture: 'gold',
            statut: 'disponible',
            dateAjout: '2026-02-01'
        },
        {
            id: 4,
            titre: 'English for Beginners',
            auteur: 'Catherine Paul',
            categorie: 'anglais',
            description: 'Méthode d\'anglais pour débutants avec exercices et dialogues.',
            pdfUrl: 'livres/english_beginners.pdf',
            couverture: 'red',
            statut: 'emprunte',
            dateAjout: '2026-02-10'
        },
        {
            id: 5,
            titre: 'Histoire d\'Haïti',
            auteur: 'Louis Michel',
            categorie: 'histoire',
            description: 'Histoire complète d\'Haïti des origines à nos jours.',
            pdfUrl: 'livres/histoire_haiti.pdf',
            couverture: 'purple',
            statut: 'disponible',
            dateAjout: '2026-02-15'
        },
        {
            id: 6,
            titre: 'Créole - Langue et Culture',
            auteur: 'Catherine Paul',
            categorie: 'creole',
            description: 'Apprentissage du créole haïtien avec exercices et culture.',
            pdfUrl: 'livres/creole_culture.pdf',
            couverture: 'teal',
            statut: 'disponible',
            dateAjout: '2026-03-01'
        },
        {
            id: 7,
            titre: 'Mathématiques - Exercices Avancés',
            auteur: 'Marie Claudel',
            categorie: 'mathematiques',
            description: 'Exercices avancés de mathématiques pour les élèves en difficulté.',
            pdfUrl: 'livres/maths_avance.pdf',
            couverture: 'green',
            statut: 'disponible',
            dateAjout: '2026-03-10'
        },
        {
            id: 8,
            titre: 'Français - Dictées et Rédaction',
            auteur: 'Jean Dorval',
            categorie: 'francais',
            description: '50 dictées et sujets de rédaction pour améliorer son français.',
            pdfUrl: 'livres/francais_dictées.pdf',
            couverture: 'blue',
            statut: 'disponible',
            dateAjout: '2026-03-15'
        },
        {
            id: 9,
            titre: 'Sciences - Physique et Chimie',
            auteur: 'Sophie Baptiste',
            categorie: 'sciences',
            description: 'Initiation à la physique et la chimie pour les collégiens.',
            pdfUrl: 'livres/sciences_physique.pdf',
            couverture: 'gold',
            statut: 'disponible',
            dateAjout: '2026-04-01'
        },
        {
            id: 10,
            titre: 'English Grammar in Practice',
            auteur: 'Catherine Paul',
            categorie: 'anglais',
            description: 'Exercices pratiques de grammaire anglaise niveau collège.',
            pdfUrl: 'livres/english_grammar.pdf',
            couverture: 'red',
            statut: 'disponible',
            dateAjout: '2026-04-10'
        },
        {
            id: 11,
            titre: 'Histoire - Grandes Figures',
            auteur: 'Louis Michel',
            categorie: 'histoire',
            description: 'Portraits des grandes figures historiques d\'Haïti et du monde.',
            pdfUrl: 'livres/histoire_figures.pdf',
            couverture: 'purple',
            statut: 'emprunte',
            dateAjout: '2026-04-15'
        },
        {
            id: 12,
            titre: 'Créole - Contes et Légendes',
            auteur: 'Catherine Paul',
            categorie: 'creole',
            description: 'Recueil de contes et légendes haïtiennes en créole.',
            pdfUrl: 'livres/creole_contes.pdf',
            couverture: 'teal',
            statut: 'disponible',
            dateAjout: '2026-05-01'
        },
        {
            id: 13,
            titre: 'Mathématiques - Géométrie',
            auteur: 'Marie Claudel',
            categorie: 'mathematiques',
            description: 'Cours complet de géométrie pour la 5e année.',
            pdfUrl: 'livres/maths_geometrie.pdf',
            couverture: 'green',
            statut: 'disponible',
            dateAjout: '2026-05-10'
        },
        {
            id: 14,
            titre: 'Français - Littérature',
            auteur: 'Jean Dorval',
            categorie: 'francais',
            description: 'Anthologie de textes littéraires pour le collège.',
            pdfUrl: 'livres/francais_litterature.pdf',
            couverture: 'blue',
            statut: 'disponible',
            dateAjout: '2026-05-15'
        },
        {
            id: 15,
            titre: 'Sciences - Biologie',
            auteur: 'Sophie Baptiste',
            categorie: 'sciences',
            description: 'Introduction à la biologie et à l\'anatomie.',
            pdfUrl: 'livres/sciences_biologie.pdf',
            couverture: 'gold',
            statut: 'disponible',
            dateAjout: '2026-06-01'
        }
    ]
};

// ============================================================
// VARIABLES BIBLIOTHÈQUE
// ============================================================
let livresFiltres = [];
let pageActuelle = 1;
const livresParPage = 8;
let categorieActive = 'all';
let rechercheActive = '';

// ============================================================
// FONCTIONS UTILES
// ============================================================
function calculateMoyenne(notes) {
    let total = 0;
    let coeffTotal = 0;
    notes.forEach(n => {
        const moy = (n.interro1 + n.interro2 + n.examen) / 3;
        total += moy * n.coeff;
        coeffTotal += n.coeff;
    });
    return coeffTotal > 0 ? Math.round(total / coeffTotal) : 0;
}

function getAppreciation(moyenne) {
    if (moyenne >= 90) return { text: 'Très Bien', class: 'green' };
    if (moyenne >= 80) return { text: 'Bien', class: 'green' };
    if (moyenne >= 70) return { text: 'Assez Bien', class: 'green' };
    if (moyenne >= 60) return { text: 'Passable', class: 'yellow' };
    return { text: 'Insuffisant', class: 'red' };
}

function getTotalAbsences() {
    let count = 0;
    for (const date in StudentData.presences) {
        if (StudentData.presences[date] === 'absent') count++;
    }
    return count;
}

function getTauxPresence() {
    const total = Object.keys(StudentData.presences).length;
    const presents = Object.values(StudentData.presences).filter(v => v === 'present').length;
    return total > 0 ? Math.round((presents / total) * 100) : 0;
}

function getCategorieLabel(categorie) {
    const labels = {
        'mathematiques': 'Maths',
        'francais': 'Français',
        'sciences': 'Sciences',
        'anglais': 'Anglais',
        'histoire': 'Histoire',
        'creole': 'Créole'
    };
    return labels[categorie] || categorie;
}

// ============================================================
// TITRES DES PAGES
// ============================================================
const titles = {
    dashboard: ['Tableau de bord', 'Bienvenue ' + StudentData.profile.prenom + ' !'],
    notes: ['Mes notes', 'Relevé de notes'],
    bulletins: ['Mes bulletins', 'Consultez vos résultats'],
    emploi: ['Mon emploi du temps', 'Planning de la semaine'],
    presences: ['Mes présences', 'Suivi des absences'],
    professeurs: ['Mes professeurs', 'Équipe pédagogique'],
    bibliotheque: ['Bibliothèque', 'Consultez et téléchargez vos livres PDF'],
    profil: ['Mon profil', 'Informations personnelles'],
    parametres: ['Paramètres', 'Configuration']
};

// ============================================================
// VARIABLES GLOBALES
// ============================================================
let currentPage = 'dashboard';
let notifCount = 0;
let toastTimeout = null;

// ============================================================
// CHARGEMENT DES PAGES
// ============================================================
function loadPage(pageId) {
    const container = document.getElementById(`page-${pageId}`);
    if (!container) return;
    
    container.innerHTML = '';
    
    fetch(`page-${pageId}.html`)
        .then(response => response.text())
        .then(html => {
            container.innerHTML = html;
            initPageData(pageId);
        })
        .catch(() => {
            // Fallback si les fichiers ne sont pas trouvés
            switch(pageId) {
                case 'dashboard': renderDashboard(container); break;
                case 'notes': renderNotes(container); break;
                case 'bulletins': renderBulletins(container); break;
                case 'emploi': renderEmploi(container); break;
                case 'presences': renderPresences(container); break;
                case 'professeurs': renderProfesseurs(container); break;
                case 'bibliotheque': renderBibliotheque(container); break;
                case 'profil': renderProfil(container); break;
                case 'parametres': renderParametres(container); break;
            }
        });
}

// ============================================================
// INITIALISATION DES DONNÉES DES PAGES
// ============================================================
function initPageData(pageId) {
    switch(pageId) {
        case 'dashboard': initDashboard(); break;
        case 'notes': initNotes(); break;
        case 'presences': initPresences(); break;
        case 'emploi': initEmploi(); break;
        case 'bibliotheque': initBibliotheque(); break;
    }
}

// ============================================================
// DASHBOARD - Initialisation
// ============================================================
function initDashboard() {
    const moyenne = calculateMoyenne(StudentData.notes);
    const totalAbsences = getTotalAbsences();
    const tauxPresence = getTauxPresence();
    
    const statMoyenne = document.getElementById('statMoyenne');
    const statMatieres = document.getElementById('statMatieres');
    const statClasse = document.getElementById('statClasse');
    const statAbsences = document.getElementById('statAbsences');
    const statTaux = document.getElementById('statTauxPresence');
    
    if (statMoyenne) statMoyenne.textContent = moyenne;
    if (statMatieres) statMatieres.textContent = StudentData.notes.length;
    if (statClasse) statClasse.textContent = StudentData.profile.classe;
    if (statAbsences) statAbsences.textContent = totalAbsences;
    
    if (statTaux) {
        if (tauxPresence > 80) {
            statTaux.className = 'stat-change up';
            statTaux.innerHTML = `<i class="fas fa-arrow-up"></i> ${tauxPresence}% de présence`;
        } else {
            statTaux.className = 'stat-change down';
            statTaux.innerHTML = `<i class="fas fa-arrow-down"></i> ${tauxPresence}% de présence`;
        }
    }
    
    const notesTable = document.getElementById('dashboardNotesTable');
    if (notesTable) {
        notesTable.innerHTML = StudentData.notes.map(n => {
            const moy = Math.round((n.interro1 + n.interro2 + n.examen) / 3);
            const app = getAppreciation(moy);
            const moyClass = moy >= 75 ? 'good' : moy >= 60 ? 'avg' : 'bad';
            return `
                <tr onclick="showToast('Détails ${n.matiere}', 'info')">
                    <td><strong>${n.matiere}</strong></td>
                    <td>${n.interro1}</td>
                    <td>${n.interro2}</td>
                    <td>${n.examen}</td>
                    <td class="note-cell ${moyClass}">${moy}/100</td>
                    <td><span class="badge ${app.class}">${app.text}</span></td>
                </tr>
            `;
        }).join('');
    }
    
    const scheduleList = document.getElementById('dashboardSchedule');
    if (scheduleList) {
        scheduleList.innerHTML = StudentData.schedule.slice(0, 5).map(c => `
            <div class="activity-item" onclick="showToast('Cours de ${c.cours}', 'info')">
                <div class="act-dot green"></div>
                <div>
                    <div class="act-text"><strong>${c.cours}</strong> — Salle ${c.salle}</div>
                    <div class="act-time">${c.jour} ${c.heure} · Prof. ${c.prof}</div>
                </div>
            </div>
        `).join('');
    }
    
    const teachersList = document.getElementById('dashboardTeachers');
    if (teachersList) {
        teachersList.innerHTML = StudentData.professeurs.slice(0, 4).map(p => `
            <div class="teacher-card" onclick="showToast('Prof. ${p.nom}', 'info')">
                <div class="avatar">${p.nom.split(' ').map(w => w[0]).join('')}</div>
                <div class="info">
                    <h4>${p.nom}</h4>
                    <div class="subject">${p.matiere}</div>
                </div>
            </div>
        `).join('');
    }
    
    const bulletinsList = document.getElementById('dashboardBulletins');
    if (bulletinsList) {
        bulletinsList.innerHTML = StudentData.bulletins.filter(b => b.statut === 'disponible').map(b => `
            <div class="bulletin-item">
                <div class="header">
                    <div>
                        <div class="trimestre">${b.trimestre}</div>
                        <div class="title">Bulletin ${b.annee}</div>
                    </div>
                    <span class="badge green">Disponible</span>
                </div>
                <div class="stats">
                    <div class="stat-box">
                        <div class="label">Moyenne</div>
                        <div class="value green">${b.moyenne}</div>
                    </div>
                    <div class="stat-box">
                        <div class="label">Rang</div>
                        <div class="value gold">${b.rang}</div>
                    </div>
                    <div class="stat-box">
                        <div class="label">Mention</div>
                        <div class="value green">${b.mention}</div>
                    </div>
                </div>
                <button class="btn btn-primary" style="width:100%;justify-content:center;" onclick="event.stopPropagation();showToast('Bulletin consulté', 'success')">
                    <i class="fas fa-eye"></i> Voir le bulletin
                </button>
            </div>
        `).join('') + StudentData.bulletins.filter(b => b.statut !== 'disponible').map(b => `
            <div class="bulletin-item" style="opacity:0.6;">
                <div class="header">
                    <div>
                        <div class="trimestre">${b.trimestre}</div>
                        <div class="title">Bulletin ${b.annee}</div>
                    </div>
                    <span class="badge ${b.statut === 'encours' ? 'yellow' : 'blue'}">${b.statut === 'encours' ? 'En cours' : 'À venir'}</span>
                </div>
                <div style="text-align:center;padding:8px;color:var(--text-muted);font-size:13px;">
                    <i class="fas fa-clock"></i> ${b.statut === 'encours' ? 'En cours de saisie' : 'Non disponible'}
                </div>
            </div>
        `).join('');
    }
}

// ============================================================
// NOTES - Initialisation
// ============================================================
function initNotes() {
    const moyenne = calculateMoyenne(StudentData.notes);
    
    const moyenneGenerale = document.getElementById('moyenneGenerale');
    const moyenneGeneraleCard = document.getElementById('moyenneGeneraleCard');
    const appreciationGenerale = document.getElementById('appreciationGenerale');
    
    if (moyenneGenerale) moyenneGenerale.textContent = moyenne;
    if (moyenneGeneraleCard) moyenneGeneraleCard.textContent = moyenne + '/100';
    if (appreciationGenerale) appreciationGenerale.textContent = getAppreciation(moyenne).text;
    
    const notesMoy = StudentData.notes.map(n => ({
        ...n,
        moy: Math.round((n.interro1 + n.interro2 + n.examen) / 3)
    }));
    
    const meilleure = notesMoy.reduce((best, n) => n.moy > best.moy ? n : best);
    const plusFaible = notesMoy.reduce((worst, n) => n.moy < worst.moy ? n : worst);
    
    const meilleureNote = document.getElementById('meilleureNote');
    const meilleureNoteMatiere = document.getElementById('meilleureNoteMatiere');
    const plusFaibleNote = document.getElementById('plusFaibleNote');
    const plusFaibleNoteMatiere = document.getElementById('plusFaibleNoteMatiere');
    
    if (meilleureNote) meilleureNote.textContent = meilleure.moy + '/100';
    if (meilleureNoteMatiere) meilleureNoteMatiere.textContent = meilleure.matiere;
    if (plusFaibleNote) plusFaibleNote.textContent = plusFaible.moy + '/100';
    if (plusFaibleNoteMatiere) plusFaibleNoteMatiere.textContent = plusFaible.matiere;
    
    const notesTable = document.getElementById('notesTableBody');
    if (notesTable) {
        notesTable.innerHTML = StudentData.notes.map(n => {
            const moy = Math.round((n.interro1 + n.interro2 + n.examen) / 3);
            const app = getAppreciation(moy);
            const moyClass = moy >= 75 ? 'good' : moy >= 60 ? 'avg' : 'bad';
            return `
                <tr data-matiere="${n.matiere}" onclick="showToast('Détails ${n.matiere}', 'info')">
                    <td><strong>${n.matiere}</strong></td>
                    <td>${n.coeff}</td>
                    <td>${n.interro1}</td>
                    <td>${n.interro2}</td>
                    <td>${n.examen}</td>
                    <td class="note-cell ${moyClass}">${moy}/100</td>
                    <td><span class="badge ${app.class}">${app.text}</span></td>
                </tr>
            `;
        }).join('');
    }
}

// ============================================================
// PRESENCES - Initialisation
// ============================================================
function initPresences() {
    const totalAbsences = getTotalAbsences();
    const tauxPresence = getTauxPresence();
    const dates = Object.keys(StudentData.presences).sort();
    
    const elements = {
        tauxPresence: document.getElementById('tauxPresence'),
        totalAbsences: document.getElementById('totalAbsences'),
        tauxPresenceBar: document.getElementById('tauxPresenceBar'),
        presenceBar: document.getElementById('presenceBar'),
        totalJours: document.getElementById('totalJours'),
        totalPresents: document.getElementById('totalPresents'),
        totalAbsents: document.getElementById('totalAbsents'),
        tauxPresenceStat: document.getElementById('tauxPresenceStat'),
        presenceList: document.getElementById('presenceList')
    };
    
    if (elements.tauxPresence) elements.tauxPresence.textContent = tauxPresence;
    if (elements.totalAbsences) elements.totalAbsences.textContent = totalAbsences;
    if (elements.tauxPresenceBar) elements.tauxPresenceBar.textContent = tauxPresence + '%';
    if (elements.presenceBar) elements.presenceBar.style.width = tauxPresence + '%';
    if (elements.totalJours) elements.totalJours.textContent = dates.length;
    if (elements.totalPresents) elements.totalPresents.textContent = dates.filter(d => StudentData.presences[d] === 'present').length;
    if (elements.totalAbsents) elements.totalAbsents.textContent = totalAbsences;
    if (elements.tauxPresenceStat) elements.tauxPresenceStat.textContent = tauxPresence + '%';
    
    if (elements.presenceList) {
        elements.presenceList.innerHTML = dates.map(date => {
            const status = StudentData.presences[date];
            const statusText = status === 'present' ? 'Présent(e)' : 'Absent(e)';
            const statusClass = status === 'present' ? 'green' : 'red';
            const day = new Date(date + 'T00:00:00').toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'short' });
            return `
                <div class="presence-item" data-status="${status}" onclick="showToast('${day} : ${statusText}', 'info')">
                    <span style="font-weight:500;">${day}</span>
                    <span class="badge ${statusClass}"><i class="fas ${status === 'present' ? 'fa-check' : 'fa-times'}"></i> ${statusText}</span>
                </div>
            `;
        }).join('');
    }
}

// ============================================================
// EMPLOI - Initialisation
// ============================================================
function initEmploi() {
    const now = new Date();
    const semaineDate = document.getElementById('semaineDate');
    if (semaineDate) {
        semaineDate.textContent = now.toLocaleDateString('fr-FR', { 
            weekday: 'long', 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
        });
    }
}

// ============================================================
// BIBLIOTHÈQUE - Initialisation
// ============================================================
function initBibliotheque() {
    livresFiltres = [...BibliothequeData.livres];
    pageActuelle = 1;
    categorieActive = 'all';
    rechercheActive = '';
    
    // Mettre à jour le compteur
    const totalLivres = document.getElementById('totalLivres');
    if (totalLivres) totalLivres.textContent = BibliothequeData.livres.length;
    
    // Réinitialiser les filtres actifs
    document.querySelectorAll('#filterAll, #filterMaths, #filterFrancais, #filterSciences, #filterAnglais').forEach(btn => {
        if (btn) {
            btn.className = 'btn btn-outline';
            btn.style.padding = '6px 12px';
            btn.style.fontSize = '12px';
        }
    });
    const filterAll = document.getElementById('filterAll');
    if (filterAll) {
        filterAll.className = 'btn btn-primary';
        filterAll.style.padding = '6px 12px';
        filterAll.style.fontSize = '12px';
    }
    
    const searchInput = document.getElementById('searchLivre');
    if (searchInput) searchInput.value = '';
    
    const categorieSelect = document.getElementById('categorieFilter');
    if (categorieSelect) categorieSelect.value = 'all';
    
    afficherLivres();
}

// ============================================================
// AFFICHER LES LIVRES
// ============================================================
function afficherLivres() {
    const grid = document.getElementById('livresGrid');
    if (!grid) return;
    
    // Appliquer les filtres
    let livresAffiches = [...BibliothequeData.livres];
    
    // Filtre par catégorie
    if (categorieActive !== 'all') {
        livresAffiches = livresAffiches.filter(l => l.categorie === categorieActive);
    }
    
    // Filtre par recherche
    if (rechercheActive.trim() !== '') {
        const search = rechercheActive.toLowerCase().trim();
        livresAffiches = livresAffiches.filter(l => 
            l.titre.toLowerCase().includes(search) || 
            l.auteur.toLowerCase().includes(search) ||
            l.description.toLowerCase().includes(search)
        );
    }
    
    livresFiltres = livresAffiches;
    
    // Pagination
    const totalPages = Math.ceil(livresFiltres.length / livresParPage);
    if (pageActuelle > totalPages) pageActuelle = totalPages || 1;
    const start = (pageActuelle - 1) * livresParPage;
    const end = start + livresParPage;
    const livresPage = livresFiltres.slice(start, end);
    
    // Mettre à jour la pagination
    const pageCourante = document.getElementById('pageCourante');
    const totalPagesEl = document.getElementById('totalPages');
    const prevPage = document.getElementById('prevPage');
    const nextPage = document.getElementById('nextPage');
    
    if (pageCourante) pageCourante.textContent = pageActuelle;
    if (totalPagesEl) totalPagesEl.textContent = totalPages || 1;
    if (prevPage) prevPage.disabled = pageActuelle <= 1;
    if (nextPage) nextPage.disabled = pageActuelle >= totalPages;
    
    if (livresPage.length === 0) {
        grid.innerHTML = `
            <div style="grid-column:1/-1;text-align:center;padding:60px 20px;background:var(--surface);border-radius:16px;border:1px solid var(--border);">
                <i class="fas fa-book-open" style="font-size:48px;color:var(--text-muted);"></i>
                <h3 style="margin-top:16px;font-weight:600;">Aucun livre trouvé</h3>
                <p style="color:var(--text-muted);font-size:14px;">Essayez de modifier votre recherche ou vos filtres</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = livresPage.map(livre => `
        <div class="livre-card" data-id="${livre.id}" data-categorie="${livre.categorie}">
            <div class="livre-cover ${livre.couverture}" onclick="ouvrirPdf(${livre.id})">
                <i class="fas fa-book"></i>
                <span class="pdf-badge">PDF</span>
                <span class="categorie-tag">${getCategorieLabel(livre.categorie)}</span>
            </div>
            <div class="livre-titre">${livre.titre}</div>
            <div class="livre-auteur"><i class="fas fa-user-edit" style="font-size:10px;"></i> ${livre.auteur}</div>
            <span class="livre-statut ${livre.statut}">${livre.statut === 'disponible' ? '📖 Disponible' : '🔒 Emprunté'}</span>
            <div class="livre-actions">
                <button class="btn btn-primary" onclick="ouvrirPdf(${livre.id})" style="font-size:11px;padding:4px 8px;">
                    <i class="fas fa-eye"></i> Lire
                </button>
                <button class="btn btn-outline" onclick="telechargerPdf(${livre.id})" style="font-size:11px;padding:4px 8px;">
                    <i class="fas fa-download"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// ============================================================
// FONCTIONS DE FILTRAGE BIBLIOTHÈQUE
// ============================================================
function filterLivres(categorie) {
    categorieActive = categorie;
    pageActuelle = 1;
    
    // Mettre à jour les boutons
    document.querySelectorAll('#filterAll, #filterMaths, #filterFrancais, #filterSciences, #filterAnglais').forEach(btn => {
        if (btn) {
            btn.className = 'btn btn-outline';
            btn.style.padding = '6px 12px';
            btn.style.fontSize = '12px';
        }
    });
    
    const btnMap = {
        'all': 'filterAll',
        'mathematiques': 'filterMaths',
        'francais': 'filterFrancais',
        'sciences': 'filterSciences',
        'anglais': 'filterAnglais'
    };
    
    const activeBtn = document.getElementById(btnMap[categorie]);
    if (activeBtn) {
        activeBtn.className = 'btn btn-primary';
        activeBtn.style.padding = '6px 12px';
        activeBtn.style.fontSize = '12px';
    }
    
    const categorieSelect = document.getElementById('categorieFilter');
    if (categorieSelect) categorieSelect.value = categorie;
    
    afficherLivres();
}

function filterLivresByCategorie(value) {
    filterLivres(value);
}

function searchLivres(value) {
    rechercheActive = value;
    pageActuelle = 1;
    afficherLivres();
}

function changePage(direction) {
    const totalPages = Math.ceil(livresFiltres.length / livresParPage);
    if (direction === 'prev' && pageActuelle > 1) {
        pageActuelle--;
    } else if (direction === 'next' && pageActuelle < totalPages) {
        pageActuelle++;
    }
    afficherLivres();
}

// ============================================================
// OUVERTURE ET TÉLÉCHARGEMENT DES PDF
// ============================================================
function ouvrirPdf(id) {
    const livre = BibliothequeData.livres.find(l => l.id === id);
    if (!livre) {
        showToast('Livre non trouvé', 'error');
        return;
    }
    
    // Mettre à jour le modal
    document.getElementById('pdfModalTitle').textContent = livre.titre;
    document.getElementById('pdfModalAuthor').textContent = 'Par ' + livre.auteur + ' · ' + getCategorieLabel(livre.categorie);
    
    // Afficher le placeholder
    const placeholder = document.getElementById('pdfPlaceholder');
    const iframeContainer = document.getElementById('pdfIframeContainer');
    const iframe = document.getElementById('pdfIframe');
    
    if (placeholder) placeholder.style.display = 'flex';
    if (iframeContainer) iframeContainer.style.display = 'none';
    
    // Simuler l'ouverture d'un PDF
    showToast('📄 Ouverture de "' + livre.titre + '"', 'info');
    
    // Pour un vrai PDF, décommentez ceci :
    // if (iframe) iframe.src = livre.pdfUrl;
    // if (placeholder) placeholder.style.display = 'none';
    // if (iframeContainer) iframeContainer.style.display = 'block';
    
    // Ouvrir le modal
    document.getElementById('pdfModal').classList.add('active');
}

function telechargerPdf(id) {
    const livre = BibliothequeData.livres.find(l => l.id === id);
    if (!livre) {
        showToast('Livre non trouvé', 'error');
        return;
    }
    
    showToast('📥 Téléchargement de "' + livre.titre + '" en cours...', 'success');
    
    // Dans la réalité, on ferait :
    // const link = document.createElement('a');
    // link.href = livre.pdfUrl;
    // link.download = livre.titre + '.pdf';
    // link.click();
}

function closePdfModal() {
    document.getElementById('pdfModal').classList.remove('active');
    const iframe = document.getElementById('pdfIframe');
    if (iframe) iframe.src = '';
}

// ============================================================
// RENDU DU DASHBOARD (FALLBACK)
// ============================================================
function renderDashboard(container) {
    const moyenne = calculateMoyenne(StudentData.notes);
    const totalAbsences = getTotalAbsences();
    const tauxPresence = getTauxPresence();

    container.innerHTML = `
        <div class="stats-grid">
            <div class="stat-card green" onclick="showToast('Votre moyenne générale', 'info')">
                <div class="stat-icon green"><i class="fas fa-graduation-cap"></i></div>
                <div class="stat-value">${moyenne}</div>
                <div class="stat-label">Moyenne générale</div>
                <div class="stat-change up"><i class="fas fa-arrow-up"></i> +2.5%</div>
            </div>
            <div class="stat-card blue" onclick="showToast('Vos matières', 'info')">
                <div class="stat-icon blue"><i class="fas fa-book"></i></div>
                <div class="stat-value">${StudentData.notes.length}</div>
                <div class="stat-label">Matières suivies</div>
                <div class="stat-change up"><i class="fas fa-check"></i> Toutes validées</div>
            </div>
            <div class="stat-card gold" onclick="showToast('Votre classe', 'info')">
                <div class="stat-icon gold"><i class="fas fa-door-open"></i></div>
                <div class="stat-value">${StudentData.profile.classe}</div>
                <div class="stat-label">Classe</div>
                <div class="stat-change up"><i class="fas fa-users"></i> 28 élèves</div>
            </div>
            <div class="stat-card red" onclick="showToast('Vos absences', 'info')">
                <div class="stat-icon red"><i class="fas fa-calendar-xmark"></i></div>
                <div class="stat-value">${totalAbsences}</div>
                <div class="stat-label">Absences</div>
                <div class="stat-change ${tauxPresence > 80 ? 'up' : 'down'}">
                    <i class="fas fa-${tauxPresence > 80 ? 'arrow-up' : 'arrow-down'}"></i>
                    ${tauxPresence}% de présence
                </div>
            </div>
        </div>

        <div class="content-grid">
            <div class="card">
                <div class="card-header">
                    <div class="card-title"><i class="fas fa-chart-simple" style="margin-right:8px;color:var(--emerald)"></i>Mes notes par matière</div>
                    <button class="card-action" onclick="showPage('notes')">Voir tout →</button>
                </div>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Matière</th>
                                <th>Interro 1</th>
                                <th>Interro 2</th>
                                <th>Examen</th>
                                <th>Moyenne</th>
                                <th>Appréciation</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${StudentData.notes.map(n => {
                                const moy = Math.round((n.interro1 + n.interro2 + n.examen) / 3);
                                const app = getAppreciation(moy);
                                const moyClass = moy >= 75 ? 'good' : moy >= 60 ? 'avg' : 'bad';
                                return `
                                    <tr onclick="showToast('Détails ${n.matiere}', 'info')">
                                        <td><strong>${n.matiere}</strong></td>
                                        <td>${n.interro1}</td>
                                        <td>${n.interro2}</td>
                                        <td>${n.examen}</td>
                                        <td class="note-cell ${moyClass}">${moy}/100</td>
                                        <td><span class="badge ${app.class}">${app.text}</span></td>
                                    </tr>
                                `;
                            }).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <div class="card-title"><i class="fas fa-clock" style="margin-right:8px;color:var(--gold)"></i>Mon emploi du temps</div>
                    <button class="card-action" onclick="showPage('emploi')">Voir tout →</button>
                </div>
                <div class="activity-list">
                    ${StudentData.schedule.slice(0, 5).map(c => `
                        <div class="activity-item" onclick="showToast('Cours de ${c.cours}', 'info')">
                            <div class="act-dot green"></div>
                            <div>
                                <div class="act-text"><strong>${c.cours}</strong> — Salle ${c.salle}</div>
                                <div class="act-time">${c.jour} ${c.heure} · Prof. ${c.prof}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>

        <div class="second-row">
            <div class="card">
                <div class="card-header">
                    <div class="card-title"><i class="fas fa-chalkboard-user" style="margin-right:8px;color:var(--info)"></i>Mes professeurs</div>
                    <button class="card-action" onclick="showPage('professeurs')">Voir tout →</button>
                </div>
                <div style="padding:12px 16px;">
                    ${StudentData.professeurs.slice(0, 4).map(p => `
                        <div class="teacher-card" onclick="showToast('Prof. ${p.nom}', 'info')">
                            <div class="avatar">${p.nom.split(' ').map(w => w[0]).join('')}</div>
                            <div class="info">
                                <h4>${p.nom}</h4>
                                <div class="subject">${p.matiere}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <div class="card-title"><i class="fas fa-file-lines" style="margin-right:8px;color:var(--emerald)"></i>Mes bulletins</div>
                    <button class="card-action" onclick="showPage('bulletins')">Voir tout →</button>
                </div>
                <div class="bulletin-preview">
                    ${StudentData.bulletins.filter(b => b.statut === 'disponible').map(b => `
                        <div class="bulletin-item">
                            <div class="header">
                                <div>
                                    <div class="trimestre">${b.trimestre}</div>
                                    <div class="title">Bulletin ${b.annee}</div>
                                </div>
                                <span class="badge green">Disponible</span>
                            </div>
                            <div class="stats">
                                <div class="stat-box">
                                    <div class="label">Moyenne</div>
                                    <div class="value green">${b.moyenne}</div>
                                </div>
                                <div class="stat-box">
                                    <div class="label">Rang</div>
                                    <div class="value gold">${b.rang}</div>
                                </div>
                                <div class="stat-box">
                                    <div class="label">Mention</div>
                                    <div class="value green">${b.mention}</div>
                                </div>
                            </div>
                            <button class="btn btn-primary" style="width:100%;justify-content:center;" onclick="event.stopPropagation();showToast('Bulletin consulté', 'success')">
                                <i class="fas fa-eye"></i> Voir le bulletin
                            </button>
                        </div>
                    `).join('')}
                    ${StudentData.bulletins.filter(b => b.statut !== 'disponible').map(b => `
                        <div class="bulletin-item" style="opacity:0.6;">
                            <div class="header">
                                <div>
                                    <div class="trimestre">${b.trimestre}</div>
                                    <div class="title">Bulletin ${b.annee}</div>
                                </div>
                                <span class="badge ${b.statut === 'encours' ? 'yellow' : 'blue'}">${b.statut === 'encours' ? 'En cours' : 'À venir'}</span>
                            </div>
                            <div style="text-align:center;padding:8px;color:var(--text-muted);font-size:13px;">
                                <i class="fas fa-clock"></i> ${b.statut === 'encours' ? 'En cours de saisie' : 'Non disponible'}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// ============================================================
// RENDU DES NOTES (FALLBACK)
// ============================================================
function renderNotes(container) {
    const moyenne = calculateMoyenne(StudentData.notes);
    
    container.innerHTML = `
        <div class="page-header">
            <h2><i class="fas fa-graduation-cap" style="margin-right:10px;color:var(--emerald)"></i>Mes notes</h2>
            <div style="display:flex;gap:10px;align-items:center;">
                <span class="badge green" style="padding:6px 14px;font-size:13px;">
                    <i class="fas fa-calculator"></i> Moyenne générale : ${moyenne}/100
                </span>
                <select class="filter-select" onchange="filterNotes(this.value)">
                    <option value="all">Toutes les matières</option>
                    ${StudentData.notes.map(n => `<option value="${n.matiere}">${n.matiere}</option>`).join('')}
                </select>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <div class="card-title"><i class="fas fa-chart-simple" style="margin-right:8px;color:var(--emerald)"></i>Relevé de notes</div>
                <button class="card-action" onclick="showToast('Export PDF', 'success')"><i class="fas fa-download"></i> Exporter PDF</button>
            </div>
            <div class="table-wrap">
                <table>
                    <thead>
                        <tr>
                            <th>Matière</th>
                            <th>Coeff.</th>
                            <th>Interro 1</th>
                            <th>Interro 2</th>
                            <th>Examen</th>
                            <th>Moyenne</th>
                            <th>Appréciation</th>
                        </tr>
                    </thead>
                    <tbody id="notesTableBody">
                        ${StudentData.notes.map(n => {
                            const moy = Math.round((n.interro1 + n.interro2 + n.examen) / 3);
                            const app = getAppreciation(moy);
                            const moyClass = moy >= 75 ? 'good' : moy >= 60 ? 'avg' : 'bad';
                            return `
                                <tr data-matiere="${n.matiere}" onclick="showToast('Détails ${n.matiere}', 'info')">
                                    <td><strong>${n.matiere}</strong></td>
                                    <td>${n.coeff}</td>
                                    <td>${n.interro1}</td>
                                    <td>${n.interro2}</td>
                                    <td>${n.examen}</td>
                                    <td class="note-cell ${moyClass}">${moy}/100</td>
                                    <td><span class="badge ${app.class}">${app.text}</span></td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        </div>

        <div style="margin-top:20px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;">
            <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px;text-align:center;">
                <div style="font-size:11px;color:var(--text-muted);text-transform:uppercase;font-weight:600;">Meilleure note</div>
                <div style="font-size:24px;font-weight:700;color:var(--emerald);">
                    ${Math.max(...StudentData.notes.map(n => Math.round((n.interro1 + n.interro2 + n.examen) / 3)))}/100
                </div>
                <div style="font-size:12px;color:var(--text-secondary);">
                    ${StudentData.notes.reduce((best, n) => {
                        const moy = Math.round((n.interro1 + n.interro2 + n.examen) / 3);
                        return moy > best.moy ? { moy, matiere: n.matiere } : best;
                    }, { moy: 0, matiere: '' }).matiere}
                </div>
            </div>
            <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px;text-align:center;">
                <div style="font-size:11px;color:var(--text-muted);text-transform:uppercase;font-weight:600;">Plus faible note</div>
                <div style="font-size:24px;font-weight:700;color:var(--danger);">
                    ${Math.min(...StudentData.notes.map(n => Math.round((n.interro1 + n.interro2 + n.examen) / 3)))}/100
                </div>
                <div style="font-size:12px;color:var(--text-secondary);">
                    ${StudentData.notes.reduce((worst, n) => {
                        const moy = Math.round((n.interro1 + n.interro2 + n.examen) / 3);
                        return moy < worst.moy ? { moy, matiere: n.matiere } : worst;
                    }, { moy: 100, matiere: '' }).matiere}
                </div>
            </div>
            <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px;text-align:center;">
                <div style="font-size:11px;color:var(--text-muted);text-transform:uppercase;font-weight:600;">Moyenne générale</div>
                <div style="font-size:24px;font-weight:700;color:var(--gold);">${moyenne}/100</div>
                <div style="font-size:12px;color:var(--text-secondary);">${getAppreciation(moyenne).text}</div>
            </div>
        </div>
    `;
}

// ============================================================
// RENDU DES BULLETINS (FALLBACK)
// ============================================================
function renderBulletins(container) {
    container.innerHTML = `
        <div class="page-header">
            <h2><i class="fas fa-file-lines" style="margin-right:10px;color:var(--emerald)"></i>Mes bulletins</h2>
            <div>
                <button class="btn btn-outline" onclick="showToast('Historique des bulletins', 'info')"><i class="fas fa-history"></i> Historique</button>
            </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;">
            ${StudentData.bulletins.map(b => `
                <div class="bulletin-item" style="background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:20px;cursor:pointer;" onclick="showToast('Bulletin ${b.trimestre}', 'info')">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
                        <div>
                            <div style="font-size:11px;color:var(--text-muted);text-transform:uppercase;font-weight:600;">${b.trimestre}</div>
                            <div style="font-weight:700;font-size:18px;">Bulletin ${b.annee}</div>
                        </div>
                        <span class="badge ${b.statut === 'disponible' ? 'green' : b.statut === 'encours' ? 'yellow' : 'blue'}">
                            ${b.statut === 'disponible' ? 'Disponible' : b.statut === 'encours' ? 'En cours' : 'À venir'}
                        </span>
                    </div>
                    ${b.moyenne ? `
                        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:12px 0;">
                            <div style="text-align:center;padding:10px;background:#f8fafc;border-radius:8px;">
                                <div style="font-size:10px;color:var(--text-muted);">Moyenne</div>
                                <div style="font-weight:700;font-size:20px;color:var(--emerald);">${b.moyenne}</div>
                            </div>
                            <div style="text-align:center;padding:10px;background:#f8fafc;border-radius:8px;">
                                <div style="font-size:10px;color:var(--text-muted);">Rang</div>
                                <div style="font-weight:700;font-size:20px;color:var(--gold);">${b.rang}</div>
                            </div>
                            <div style="text-align:center;padding:10px;background:#f8fafc;border-radius:8px;">
                                <div style="font-size:10px;color:var(--text-muted);">Mention</div>
                                <div style="font-weight:700;font-size:20px;color:var(--emerald);">${b.mention}</div>
                            </div>
                        </div>
                    ` : `
                        <div style="text-align:center;padding:20px;color:var(--text-muted);">
                            <i class="fas fa-clock" style="font-size:24px;display:block;margin-bottom:8px;"></i>
                            <p>${b.statut === 'encours' ? 'En cours de saisie...' : 'Pas encore disponible'}</p>
                        </div>
                    `}
                    ${b.statut === 'disponible' ? `
                        <button class="btn btn-primary" style="width:100%;justify-content:center;" onclick="event.stopPropagation();showToast('Ouverture du bulletin', 'success')">
                            <i class="fas fa-eye"></i> Consulter
                        </button>
                    ` : `
                        <button class="btn btn-outline" style="width:100%;justify-content:center;opacity:0.5;cursor:not-allowed;" disabled>
                            <i class="fas fa-lock"></i> Non disponible
                        </button>
                    `}
                </div>
            `).join('')}
        </div>
    `;
}

// ============================================================
// RENDU DE L'EMPLOI DU TEMPS (FALLBACK)
// ============================================================
function renderEmploi(container) {
    const jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];

    container.innerHTML = `
        <div class="page-header">
            <h2><i class="fas fa-clock" style="margin-right:10px;color:var(--emerald)"></i>Mon emploi du temps</h2>
            <div>
                <button class="btn btn-outline" onclick="showToast('Emploi du temps exporté', 'success')"><i class="fas fa-download"></i> Exporter</button>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <div class="card-title"><i class="fas fa-calendar-week" style="margin-right:8px;color:var(--gold)"></i>Semaine du ${new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</div>
            </div>
            <div class="schedule-grid">
                ${jours.map(jour => `
                    <div class="schedule-day">
                        <div class="day-title">${jour}</div>
                        ${StudentData.schedule.filter(c => c.jour === jour).map(c => `
                            <div class="schedule-course" onclick="showToast('Cours de ${c.cours}', 'info')">
                                <div class="course-name">${c.cours}</div>
                                <div class="course-time">${c.heure}</div>
                                <div class="course-room">Salle ${c.salle} · ${c.prof}</div>
                            </div>
                        `).join('') || `
                            <div style="text-align:center;padding:20px;color:var(--text-muted);font-size:12px;">
                                <i class="fas fa-sun" style="font-size:20px;display:block;margin-bottom:6px;"></i>
                                Pas de cours
                            </div>
                        `}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// ============================================================
// RENDU DES PRÉSENCES (FALLBACK)
// ============================================================
function renderPresences(container) {
    const totalAbsences = getTotalAbsences();
    const tauxPresence = getTauxPresence();
    const dates = Object.keys(StudentData.presences).sort();

    container.innerHTML = `
        <div class="page-header">
            <h2><i class="fas fa-calendar-check" style="margin-right:10px;color:var(--emerald)"></i>Mes présences</h2>
            <div style="display:flex;gap:10px;align-items:center;">
                <span class="badge green" style="padding:6px 14px;font-size:13px;">
                    <i class="fas fa-check-circle"></i> ${tauxPresence}% de présence
                </span>
                <span class="badge red" style="padding:6px 14px;font-size:13px;">
                    <i class="fas fa-times-circle"></i> ${totalAbsences} absence${totalAbsences > 1 ? 's' : ''}
                </span>
            </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:24px;">
            <div class="card">
                <div class="card-header">
                    <div class="card-title"><i class="fas fa-chart-pie" style="margin-right:8px;color:var(--emerald)"></i>Statistiques</div>
                </div>
                <div style="padding:20px;">
                    <div style="margin-bottom:16px;">
                        <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px;">
                            <span>Présences</span>
                            <span><strong>${tauxPresence}%</strong></span>
                        </div>
                        <div style="height:8px;background:#f1f5f9;border-radius:10px;overflow:hidden;">
                            <div style="height:100%;width:${tauxPresence}%;background:var(--emerald);border-radius:10px;transition:width 0.5s;"></div>
                        </div>
                    </div>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
                        <div style="background:#f8fafc;border-radius:10px;padding:12px;text-align:center;">
                            <div style="font-size:11px;color:var(--text-muted);">Total jours</div>
                            <div style="font-weight:700;font-size:22px;">${dates.length}</div>
                        </div>
                        <div style="background:#f8fafc;border-radius:10px;padding:12px;text-align:center;">
                            <div style="font-size:11px;color:var(--text-muted);">Présents</div>
                            <div style="font-weight:700;font-size:22px;color:var(--emerald);">${dates.filter(d => StudentData.presences[d] === 'present').length}</div>
                        </div>
                        <div style="background:#f8fafc;border-radius:10px;padding:12px;text-align:center;">
                            <div style="font-size:11px;color:var(--text-muted);">Absents</div>
                            <div style="font-weight:700;font-size:22px;color:var(--danger);">${totalAbsences}</div>
                        </div>
                        <div style="background:#f8fafc;border-radius:10px;padding:12px;text-align:center;">
                            <div style="font-size:11px;color:var(--text-muted);">Taux présence</div>
                            <div style="font-weight:700;font-size:22px;color:var(--gold);">${tauxPresence}%</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <div class="card-title"><i class="fas fa-list" style="margin-right:8px;color:var(--info)"></i>Historique</div>
                    <select class="filter-select" style="padding:4px 8px;font-size:12px;" onchange="filterPresences(this.value)">
                        <option value="all">Tous</option>
                        <option value="present">Présents</option>
                        <option value="absent">Absents</option>
                    </select>
                </div>
                <div style="padding:12px 16px;max-height:300px;overflow-y:auto;">
                    ${dates.map(date => {
                        const status = StudentData.presences[date];
                        const statusText = status === 'present' ? 'Présent(e)' : 'Absent(e)';
                        const statusClass = status === 'present' ? 'green' : 'red';
                        const day = new Date(date + 'T00:00:00').toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'short' });
                        return `
                            <div class="presence-item" data-status="${status}" onclick="showToast('${day} : ${statusText}', 'info')">
                                <span style="font-weight:500;">${day}</span>
                                <span class="badge ${statusClass}"><i class="fas ${status === 'present' ? 'fa-check' : 'fa-times'}"></i> ${statusText}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </div>
    `;
}

// ============================================================
// RENDU DES PROFESSEURS (FALLBACK)
// ============================================================
function renderProfesseurs(container) {
    container.innerHTML = `
        <div class="page-header">
            <h2><i class="fas fa-chalkboard-user" style="margin-right:10px;color:var(--emerald)"></i>Mes professeurs</h2>
            <div>
                <span class="badge blue" style="padding:6px 14px;font-size:13px;">
                    <i class="fas fa-users"></i> ${StudentData.professeurs.length} professeurs
                </span>
            </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
            ${StudentData.professeurs.map(p => `
                <div class="card" style="cursor:pointer;" onclick="showToast('Prof. ${p.nom}', 'info')">
                    <div style="display:flex;align-items:center;gap:16px;padding:20px;">
                        <div style="width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,var(--navy-2),var(--navy-3));display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:white;flex-shrink:0;">
                            ${p.nom.split(' ').map(w => w[0]).join('')}
                        </div>
                        <div>
                            <h3 style="font-size:16px;font-weight:700;">${p.nom}</h3>
                            <div style="color:var(--emerald);font-weight:600;font-size:13px;">${p.matiere}</div>
                            <div style="display:flex;gap:12px;margin-top:6px;font-size:12px;color:var(--text-muted);">
                                <span><i class="fas fa-envelope"></i> ${p.email}</span>
                                <span><i class="fas fa-phone"></i> ${p.telephone}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// ============================================================
// RENDU DE LA BIBLIOTHÈQUE (FALLBACK)
// ============================================================
function renderBibliotheque(container) {
    container.innerHTML = `
        <div class="page-header">
            <h2><i class="fas fa-book" style="margin-right:10px;color:var(--emerald)"></i>Bibliothèque</h2>
            <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
                <span class="badge blue" style="padding:6px 14px;font-size:13px;">
                    <i class="fas fa-file-pdf"></i> <span id="totalLivres">${BibliothequeData.livres.length}</span> livres disponibles
                </span>
                <div style="display:flex;gap:6px;flex-wrap:wrap;">
                    <button class="btn btn-primary" onclick="filterLivres('all')" style="padding:6px 12px;font-size:12px;" id="filterAll">Tous</button>
                    <button class="btn btn-outline" onclick="filterLivres('mathematiques')" style="padding:6px 12px;font-size:12px;" id="filterMaths">Maths</button>
                    <button class="btn btn-outline" onclick="filterLivres('francais')" style="padding:6px 12px;font-size:12px;" id="filterFrancais">Français</button>
                    <button class="btn btn-outline" onclick="filterLivres('sciences')" style="padding:6px 12px;font-size:12px;" id="filterSciences">Sciences</button>
                    <button class="btn btn-outline" onclick="filterLivres('anglais')" style="padding:6px 12px;font-size:12px;" id="filterAnglais">Anglais</button>
                </div>
            </div>
        </div>

        <div style="margin-bottom:24px;">
            <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;">
                <div style="flex:1;min-width:200px;position:relative;">
                    <i class="fas fa-search" style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--text-muted);"></i>
                    <input type="text" id="searchLivre" placeholder="Rechercher un livre..." oninput="searchLivres(this.value)" style="width:100%;padding:10px 14px 10px 40px;border:1px solid var(--border);border-radius:10px;font-family:'Inter',sans-serif;font-size:14px;background:var(--surface);color:var(--text-primary);">
                </div>
                <select class="filter-select" id="categorieFilter" onchange="filterLivresByCategorie(this.value)">
                    <option value="all">Toutes les catégories</option>
                    <option value="mathematiques">Mathématiques</option>
                    <option value="francais">Français</option>
                    <option value="sciences">Sciences</option>
                    <option value="anglais">Anglais</option>
                    <option value="histoire">Histoire</option>
                    <option value="creole">Créole</option>
                </select>
                <button class="btn btn-primary" onclick="showToast('Bibliothèque mise à jour', 'success')">
                    <i class="fas fa-sync"></i> Actualiser
                </button>
            </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:20px;" id="livresGrid">
        </div>

        <div style="display:flex;justify-content:center;gap:8px;margin-top:24px;" id="pagination">
            <button class="btn btn-outline" onclick="changePage('prev')" style="padding:6px 14px;" id="prevPage">
                <i class="fas fa-chevron-left"></i>
            </button>
            <span style="display:flex;align-items:center;gap:6px;">
                <span id="pageCourante">1</span>
                <span style="color:var(--text-muted);">/</span>
                <span id="totalPages">1</span>
            </span>
            <button class="btn btn-outline" onclick="changePage('next')" style="padding:6px 14px;" id="nextPage">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    `;
    initBibliotheque();
}

// ============================================================
// RENDU DU PROFIL (FALLBACK)
// ============================================================
function renderProfil(container) {
    const p = StudentData.profile;
    const moyenne = calculateMoyenne(StudentData.notes);
    const totalAbsences = getTotalAbsences();
    const initials = (p.prenom.charAt(0) + p.nom.charAt(0)).toUpperCase();

    container.innerHTML = `
        <div class="page-header">
            <h2><i class="fas fa-user" style="margin-right:10px;color:var(--emerald)"></i>Mon profil</h2>
            <button class="btn btn-primary" onclick="showToast('Profil modifié', 'success')"><i class="fas fa-edit"></i> Modifier</button>
        </div>

        <div class="card" style="max-width:800px;margin:0 auto;">
            <div style="display:flex;align-items:center;gap:24px;padding:24px;">
                <div style="width:100px;height:100px;border-radius:50%;background:linear-gradient(135deg,var(--emerald-dim),var(--emerald));display:flex;align-items:center;justify-content:center;font-size:40px;font-weight:700;color:white;flex-shrink:0;">
                    ${initials}
                </div>
                <div>
                    <h2 style="font-size:24px;font-weight:700;">${p.prenom} ${p.nom}</h2>
                    <p style="color:var(--text-secondary);"><i class="fas fa-envelope"></i> ${p.email}</p>
                    <p style="color:var(--text-secondary);"><i class="fas fa-id-card"></i> Matricule : ${p.matricule}</p>
                    <div style="display:flex;gap:8px;margin-top:8px;">
                        <span class="badge green"><i class="fas fa-circle"></i> ${p.statut}</span>
                        <span class="badge ${p.paiement === 'Payé' ? 'green' : 'red'}"><i class="fas fa-${p.paiement === 'Payé' ? 'check' : 'times'}"></i> ${p.paiement}</span>
                    </div>
                </div>
            </div>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;padding:0 24px 24px;">
                <div style="background:#f8fafc;border-radius:12px;padding:16px;">
                    <h4 style="font-size:14px;font-weight:700;margin-bottom:12px;color:var(--text-primary);">
                        <i class="fas fa-user" style="color:var(--emerald);"></i> Informations personnelles
                    </h4>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
                        <div><label style="font-size:10px;color:var(--text-muted);text-transform:uppercase;font-weight:600;">Prénom</label><div style="font-weight:500;">${p.prenom}</div></div>
                        <div><label style="font-size:10px;color:var(--text-muted);text-transform:uppercase;font-weight:600;">Nom</label><div style="font-weight:500;">${p.nom}</div></div>
                        <div><label style="font-size:10px;color:var(--text-muted);text-transform:uppercase;font-weight:600;">Date naissance</label><div style="font-weight:500;">${p.dateNaissance}</div></div>
                        <div><label style="font-size:10px;color:var(--text-muted);text-transform:uppercase;font-weight:600;">Genre</label><div style="font-weight:500;">${p.genre}</div></div>
                        <div style="grid-column:span 2;"><label style="font-size:10px;color:var(--text-muted);text-transform:uppercase;font-weight:600;">Adresse</label><div style="font-weight:500;">${p.adresse}</div></div>
                    </div>
                </div>
                <div style="background:#f8fafc;border-radius:12px;padding:16px;">
                    <h4 style="font-size:14px;font-weight:700;margin-bottom:12px;color:var(--text-primary);">
                        <i class="fas fa-address-book" style="color:var(--emerald);"></i> Contact tuteur
                    </h4>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
                        <div style="grid-column:span 2;"><label style="font-size:10px;color:var(--text-muted);text-transform:uppercase;font-weight:600;">Nom du tuteur</label><div style="font-weight:500;">${p.tuteur}</div></div>
                        <div><label style="font-size:10px;color:var(--text-muted);text-transform:uppercase;font-weight:600;">Téléphone</label><div style="font-weight:500;">${p.telephone}</div></div>
                        <div><label style="font-size:10px;color:var(--text-muted);text-transform:uppercase;font-weight:600;">Email</label><div style="font-weight:500;">${p.emailTuteur}</div></div>
                    </div>
                </div>
            </div>

            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;padding:0 24px 24px;">
                <div style="background:#f8fafc;border-radius:10px;padding:12px;text-align:center;">
                    <div style="font-size:10px;color:var(--text-muted);text-transform:uppercase;">Classe</div>
                    <div style="font-weight:700;font-size:16px;">${p.classe}</div>
                </div>
                <div style="background:#f8fafc;border-radius:10px;padding:12px;text-align:center;">
                    <div style="font-size:10px;color:var(--text-muted);text-transform:uppercase;">Moyenne</div>
                    <div style="font-weight:700;font-size:16px;color:var(--emerald);">${moyenne}/100</div>
                </div>
                <div style="background:#f8fafc;border-radius:10px;padding:12px;text-align:center;">
                    <div style="font-size:10px;color:var(--text-muted);text-transform:uppercase;">Rang</div>
                    <div style="font-weight:700;font-size:16px;color:var(--gold);">3ème</div>
                </div>
                <div style="background:#f8fafc;border-radius:10px;padding:12px;text-align:center;">
                    <div style="font-size:10px;color:var(--text-muted);text-transform:uppercase;">Absences</div>
                    <div style="font-weight:700;font-size:16px;color:var(--danger);">${totalAbsences}</div>
                </div>
            </div>
        </div>
    `;
}

// ============================================================
// RENDU DES PARAMÈTRES (FALLBACK)
// ============================================================
function renderParametres(container) {
    container.innerHTML = `
        <div class="page-header">
            <h2><i class="fas fa-sliders" style="margin-right:10px;color:var(--emerald)"></i>Paramètres</h2>
        </div>

        <div class="settings-card">
            <div class="settings-section">
                <h3>Préférences</h3>
                <div class="settings-row">
                    <div class="settings-label">Notifications</div>
                    <div class="settings-value">
                        <label class="toggle-switch">
                            <input type="checkbox" checked onchange="showToast('Notifications ' + (this.checked ? 'activées' : 'désactivées'), 'info')">
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
                <div class="settings-row">
                    <div class="settings-label">Mode sombre</div>
                    <div class="settings-value">
                        <label class="toggle-switch">
                            <input type="checkbox" onchange="toggleTheme(this.checked)">
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
                <div class="settings-row">
                    <div class="settings-label">Langue</div>
                    <div class="settings-value">
                        <select class="filter-select" onchange="showToast('Langue changée', 'info')">
                            <option value="fr">Français</option>
                            <option value="en">English</option>
                            <option value="ht">Kreyòl</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="settings-section">
                <h3>Sécurité</h3>
                <div class="settings-row">
                    <div class="settings-label">Changer le mot de passe</div>
                    <div class="settings-value">
                        <button class="btn btn-outline" onclick="showToast('Ouvrir le formulaire', 'info')"><i class="fas fa-key"></i> Modifier</button>
                    </div>
                </div>
                <div class="settings-row">
                    <div class="settings-label">Double authentification</div>
                    <div class="settings-value">
                        <label class="toggle-switch">
                            <input type="checkbox" onchange="showToast('Double authentification ' + (this.checked ? 'activée' : 'désactivée'), 'info')">
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="settings-section">
                <h3>Actions</h3>
                <div class="settings-row">
                    <div class="settings-label">Exporter mes données</div>
                    <div class="settings-value">
                        <button class="btn btn-outline" onclick="showToast('Données exportées', 'success')"><i class="fas fa-file-export"></i> Exporter</button>
                    </div>
                </div>
                <div class="settings-row">
                    <div class="settings-label">Supprimer mon compte</div>
                    <div class="settings-value">
                        <button class="btn btn-outline" style="color:var(--danger);border-color:var(--danger);" onclick="if(confirm('Voulez-vous vraiment supprimer votre compte ?')) showToast('Compte supprimé', 'error')">
                            <i class="fas fa-trash"></i> Supprimer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ============================================================
// FILTRES
// ============================================================
function filterNotes(value) {
    const rows = document.querySelectorAll('#notesTableBody tr');
    rows.forEach(row => {
        const matiere = row.dataset.matiere;
        row.style.display = (value === 'all' || matiere === value) ? '' : 'none';
    });
}

function filterPresences(value) {
    const items = document.querySelectorAll('.presence-item');
    items.forEach(item => {
        const status = item.dataset.status;
        item.style.display = (value === 'all' || status === value) ? '' : 'none';
    });
}

// ============================================================
// NAVIGATION
// ============================================================
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById(`page-${pageId}`);
    if (page) page.classList.add('active');

    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const navItem = document.querySelector(`.nav-item[data-page="${pageId}"]`);
    if (navItem) navItem.classList.add('active');

    const title = titles[pageId];
    if (title) {
        document.getElementById('page-title').innerHTML = title[0] + ' <span>' + title[1] + '</span>';
    }

    currentPage = pageId;
    loadPage(pageId);
}

// ============================================================
// TOAST
// ============================================================
function showToast(msg, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMsg');
    if (toast && toastMsg) {
        toastMsg.innerText = msg;
        toast.className = 'toast ' + type;
        toast.classList.add('show');
        if (toastTimeout) clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// ============================================================
// NOTIFICATIONS, AIDE, RECHERCHE
// ============================================================
function showNotifications() {
    notifCount++;
    const notifDot = document.querySelector('.notif-dot');
    if (notifDot) notifDot.style.display = 'block';
    showToast(`${notifCount} notification(s) non lue(s)`, 'info');
}

function showHelp() {
    showToast('Aide disponible dans la documentation', 'info');
}

function openSearch() {
    showToast('Recherche - À venir', 'info');
}

// ============================================================
// THÈME
// ============================================================
function toggleTheme(enabled) {
    if (enabled) {
        document.documentElement.style.setProperty('--bg', '#0f172a');
        document.documentElement.style.setProperty('--surface', '#1e293b');
        document.documentElement.style.setProperty('--text-primary', '#f1f5f9');
        document.documentElement.style.setProperty('--text-secondary', '#94a3b8');
        document.documentElement.style.setProperty('--border', '#334155');
        document.documentElement.style.setProperty('--text-muted', '#64748b');
        showToast('Mode sombre activé', 'info');
    } else {
        document.documentElement.style.setProperty('--bg', '#f0f4f8');
        document.documentElement.style.setProperty('--surface', '#ffffff');
        document.documentElement.style.setProperty('--text-primary', '#0f172a');
        document.documentElement.style.setProperty('--text-secondary', '#64748b');
        document.documentElement.style.setProperty('--border', '#e2e8f0');
        document.documentElement.style.setProperty('--text-muted', '#94a3b8');
        showToast('Mode clair activé', 'info');
    }
}

// ============================================================
// FERMETURE DU MODAL PDF AVEC ESCAPE
// ============================================================
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePdfModal();
        document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
    }
});

// ============================================================
// INITIALISATION
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sidebarAvatar').textContent =
        (StudentData.profile.prenom.charAt(0) + StudentData.profile.nom.charAt(0)).toUpperCase();
    document.getElementById('sidebarName').textContent =
        StudentData.profile.prenom + ' ' + StudentData.profile.nom;
    document.getElementById('sidebarClasse').textContent = StudentData.profile.classe;

    document.getElementById('notesBadge').textContent = StudentData.notes.length;
    document.getElementById('bulletinsBadge').textContent =
        StudentData.bulletins.filter(b => b.statut === 'disponible').length;
    document.getElementById('presencesBadge').textContent = getTotalAbsences() + ' abs.';
    document.getElementById('bibliothequeBadge').textContent = BibliothequeData.livres.length;

    showPage('dashboard');
});

// ============================================================
// EXPOSER LES FONCTIONS GLOBALEMENT
// ============================================================
window.showPage = showPage;
window.showToast = showToast;
window.showNotifications = showNotifications;
window.showHelp = showHelp;
window.openSearch = openSearch;
window.toggleTheme = toggleTheme;
window.filterNotes = filterNotes;
window.filterPresences = filterPresences;
window.filterLivres = filterLivres;
window.filterLivresByCategorie = filterLivresByCategorie;
window.searchLivres = searchLivres;
window.changePage = changePage;
window.ouvrirPdf = ouvrirPdf;
window.telechargerPdf = telechargerPdf;
window.closePdfModal = closePdfModal;

// ============================================================
// GESTION DES MODALS
// ============================================================

// --- MODAL RECHERCHE ---
function openSearch() {
    const modal = document.getElementById('searchModal');
    if (!modal) return;
    modal.classList.add('active');
    // Focus sur l'input après l'ouverture
    setTimeout(() => {
        const input = document.getElementById('searchInput');
        if (input) input.focus();
    }, 100);
}

function closeSearch() {
    const modal = document.getElementById('searchModal');
    if (modal) modal.classList.remove('active');
    // Réinitialiser la recherche
    const input = document.getElementById('searchInput');
    if (input) input.value = '';
    const results = document.getElementById('searchResults');
    if (results) {
        results.innerHTML = `
            <div style="text-align:center;padding:20px;color:var(--text-muted);">
                <i class="fas fa-search" style="font-size:32px;display:block;margin-bottom:8px;color:#cbd5e1;"></i>
                <p>Commencez à taper pour voir les résultats</p>
            </div>
        `;
    }
}

function performSearch(query) {
    const results = document.getElementById('searchResults');
    if (!results) return;

    if (!query || query.length < 2) {
        results.innerHTML = `
            <div style="text-align:center;padding:20px;color:var(--text-muted);">
                <i class="fas fa-search" style="font-size:32px;display:block;margin-bottom:8px;color:#cbd5e1;"></i>
                <p>Continuez à taper pour affiner les résultats</p>
            </div>
        `;
        return;
    }

    const q = query.toLowerCase().trim();
    let found = [];

    // Recherche dans les matières (cours)
    StudentData.notes.forEach(n => {
        if (n.matiere.toLowerCase().includes(q)) {
            found.push({
                type: 'Matière',
                name: n.matiere,
                detail: `Moyenne : ${Math.round((n.interro1 + n.interro2 + n.examen) / 3)}/100`,
                icon: 'fa-graduation-cap',
                color: 'var(--emerald)'
            });
        }
    });

    // Recherche dans les professeurs
    StudentData.professeurs.forEach(p => {
        const fullName = p.nom.toLowerCase();
        if (fullName.includes(q) || p.matiere.toLowerCase().includes(q)) {
            found.push({
                type: 'Professeur',
                name: p.nom,
                detail: p.matiere,
                icon: 'fa-chalkboard-user',
                color: 'var(--info)'
            });
        }
    });

    // Recherche dans l'emploi du temps
    StudentData.schedule.forEach(c => {
        if (c.cours.toLowerCase().includes(q) || c.prof.toLowerCase().includes(q)) {
            found.push({
                type: 'Cours',
                name: c.cours,
                detail: `${c.jour} ${c.heure} · Salle ${c.salle}`,
                icon: 'fa-clock',
                color: 'var(--gold)'
            });
        }
    });

    // Recherche dans la bibliothèque
    BibliothequeData.livres.forEach(l => {
        if (l.titre.toLowerCase().includes(q) || l.auteur.toLowerCase().includes(q)) {
            found.push({
                type: 'Livre',
                name: l.titre,
                detail: `Par ${l.auteur}`,
                icon: 'fa-book',
                color: 'var(--purple)',
                action: () => ouvrirPdf(l.id)
            });
        }
    });

    if (found.length === 0) {
        results.innerHTML = `
            <div style="text-align:center;padding:20px;color:var(--text-muted);">
                <i class="fas fa-times-circle" style="font-size:32px;display:block;margin-bottom:8px;color:#cbd5e1;"></i>
                <p>Aucun résultat trouvé pour "<strong>${query}</strong>"</p>
            </div>
        `;
    } else {
        let html = `<div style="font-size:12px;color:var(--text-muted);margin-bottom:12px;">${found.length} résultat(s) trouvé(s)</div>`;
        found.forEach(item => {
            html += `
                <div style="display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:8px;cursor:pointer;transition:all 0.2s;margin-bottom:4px;"
                     onmouseover="this.style.background='#f8fafc'"
                     onmouseout="this.style.background='transparent'"
                     onclick="${item.action ? `(${item.action.toString()})()` : `showToast('${item.type} : ${item.name}', 'info')`}">
                    <div style="width:32px;height:32px;border-radius:50%;background:${item.color}15;display:flex;align-items:center;justify-content:center;color:${item.color};">
                        <i class="fas ${item.icon}"></i>
                    </div>
                    <div>
                        <div style="font-weight:600;font-size:13px;">${item.name}</div>
                        <div style="font-size:11px;color:var(--text-muted);">${item.type} · ${item.detail}</div>
                    </div>
                </div>
            `;
        });
        results.innerHTML = html;
    }
}

// --- MODAL AIDE ---
function openHelpModal() {
    const modal = document.getElementById('helpModal');
    if (modal) modal.classList.add('active');
}

function closeHelpModal() {
    const modal = document.getElementById('helpModal');
    if (modal) modal.classList.remove('active');
}

// --- MODAL ANNÉE ---
function openYearModal() {
    const modal = document.getElementById('yearModal');
    if (modal) {
        // Mettre à jour le select avec l'année actuelle
        const chip = document.querySelector('.year-chip');
        const currentYear = chip ? chip.textContent.trim() : '2024 — 2025';
        const select = document.getElementById('yearSelect');
        if (select) {
            for (let i = 0; i < select.options.length; i++) {
                if (select.options[i].value === currentYear) {
                    select.selectedIndex = i;
                    break;
                }
            }
        }
        modal.classList.add('active');
    }
}

function closeYearModal() {
    const modal = document.getElementById('yearModal');
    if (modal) modal.classList.remove('active');
}

function saveYear() {
    const select = document.getElementById('yearSelect');
    const year = select.value;
    const chip = document.querySelector('.year-chip');
    if (chip) chip.textContent = year;

    // Sauvegarder dans les paramètres (localStorage)
    let settings = JSON.parse(localStorage.getItem('studentSettings') || '{}');
    settings.schoolYear = year;
    localStorage.setItem('studentSettings', JSON.stringify(settings));

    showToast(`Année scolaire changée pour ${year}`, 'success');
    closeYearModal();
}

// --- MODAL PROFIL ---
function openProfileModal() {
    const modal = document.getElementById('profileModal');
    if (!modal) return;

    // Remplir les données du profil
    const p = StudentData.profile;
    document.getElementById('profileAvatar').textContent = (p.prenom.charAt(0) + p.nom.charAt(0)).toUpperCase();
    document.getElementById('profileName').textContent = p.prenom + ' ' + p.nom;
    document.getElementById('profilePrenom').value = p.prenom;
    document.getElementById('profileNom').value = p.nom;
    document.getElementById('profileEmail').value = p.email;
    document.getElementById('profilePhone').value = p.telephone;

    // Date au format YYYY-MM-DD pour l'input date
    const dateParts = p.dateNaissance.split('/');
    if (dateParts.length === 3) {
        document.getElementById('profileDate').value = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    }

    const genreSelect = document.getElementById('profileGenre');
    if (genreSelect) {
        for (let i = 0; i < genreSelect.options.length; i++) {
            if (genreSelect.options[i].value === p.genre) {
                genreSelect.selectedIndex = i;
                break;
            }
        }
    }

    modal.classList.add('active');
}

function closeProfileModal() {
    const modal = document.getElementById('profileModal');
    if (modal) modal.classList.remove('active');
}

function saveProfile() {
    // Récupérer les valeurs
    const prenom = document.getElementById('profilePrenom').value.trim();
    const nom = document.getElementById('profileNom').value.trim();
    const email = document.getElementById('profileEmail').value.trim();
    const telephone = document.getElementById('profilePhone').value.trim();
    const dateNaissance = document.getElementById('profileDate').value;
    const genre = document.getElementById('profileGenre').value;

    // Valider
    if (!prenom || !nom) {
        showToast('Le prénom et le nom sont requis', 'error');
        return;
    }

    // Mettre à jour les données
    StudentData.profile.prenom = prenom;
    StudentData.profile.nom = nom;
    StudentData.profile.email = email;
    StudentData.profile.telephone = telephone;
    StudentData.profile.genre = genre;
    if (dateNaissance) {
        const parts = dateNaissance.split('-');
        StudentData.profile.dateNaissance = `${parts[2]}/${parts[1]}/${parts[0]}`;
    }

    // Mettre à jour l'interface
    document.getElementById('sidebarAvatar').textContent = (prenom.charAt(0) + nom.charAt(0)).toUpperCase();
    document.getElementById('sidebarName').textContent = prenom + ' ' + nom;
    document.getElementById('profileAvatar').textContent = (prenom.charAt(0) + nom.charAt(0)).toUpperCase();
    document.getElementById('profileName').textContent = prenom + ' ' + nom;

    // Sauvegarder dans localStorage
    let settings = JSON.parse(localStorage.getItem('studentSettings') || '{}');
    settings.profile = StudentData.profile;
    localStorage.setItem('studentSettings', JSON.stringify(settings));

    showToast('Profil mis à jour avec succès !', 'success');
    closeProfileModal();
}

// ============================================================
// FERMETURE DES MODALS PAR CLIC EXTÉRIEUR
// ============================================================
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// ============================================================
// RACCOURCI CLAVIER POUR LA RECHERCHE
// ============================================================
document.addEventListener('keydown', function(e) {
    // Ctrl+K ou Cmd+K pour ouvrir la recherche
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
    }
    // Escape pour fermer les modals (déjà géré)
});

// ============================================================
// CHARGEMENT DES PARAMÈTRES SAUVEGARDÉS
// ============================================================
function loadStudentSettings() {
    const saved = localStorage.getItem('studentSettings');
    if (saved) {
        try {
            const settings = JSON.parse(saved);
            if (settings.schoolYear) {
                const chip = document.querySelector('.year-chip');
                if (chip) chip.textContent = settings.schoolYear;
            }
            if (settings.profile) {
                // Mettre à jour les données du profil
                Object.assign(StudentData.profile, settings.profile);
                // Mettre à jour l'interface
                document.getElementById('sidebarAvatar').textContent =
                    (StudentData.profile.prenom.charAt(0) + StudentData.profile.nom.charAt(0)).toUpperCase();
                document.getElementById('sidebarName').textContent =
                    StudentData.profile.prenom + ' ' + StudentData.profile.nom;
                document.getElementById('sidebarClasse').textContent = StudentData.profile.classe;
            }
        } catch (e) {}
    }
}

// ============================================================
// SURCHARGE DE L'INITIALISATION POUR CHARGER LES PARAMÈTRES
// ============================================================
const originalDOMContentLoaded = document.addEventListener('DOMContentLoaded', function() {
    // Charger les paramètres avant l'initialisation
    loadStudentSettings();
    // Appeler l'initialisation originale (déjà définie plus haut)
    // Nous devons nous assurer que notre code ne s'exécute pas deux fois
});

// Pour éviter les doublons, on va remplacer l'initialisation existante
// En supprimant l'ancien listener et en ajoutant le nouveau
// (En pratique, on peut simplement ajouter notre code après l'initialisation existante)

// On ajoute notre code d'initialisation supplémentaire
document.addEventListener('DOMContentLoaded', function() {
    // Déjà exécuté, on ne fait rien de plus
});

function logout() {
  if (confirm('Voulez-vous vraiment vous déconnecter ?')) {
    // Redirection vers logout.php à la racine (remonte d'un niveau)
    window.location.href = '../logout.php';
  }
}



// ============================================================
// EXPOSER LES NOUVELLES FONCTIONS GLOBALEMENT
// ============================================================
window.openSearch = openSearch;
window.closeSearch = closeSearch;
window.performSearch = performSearch;
window.openHelpModal = openHelpModal;
window.closeHelpModal = closeHelpModal;
window.openYearModal = openYearModal;
window.closeYearModal = closeYearModal;
window.saveYear = saveYear;
window.openProfileModal = openProfileModal;
window.closeProfileModal = closeProfileModal;
window.saveProfile = saveProfile;
window.loadStudentSettings = loadStudentSettings;
window.logout = logout;