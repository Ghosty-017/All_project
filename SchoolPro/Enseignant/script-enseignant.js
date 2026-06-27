// ============================================================
// DONNÉES DE L'ENSEIGNANT
// ============================================================
const EnseignantData = {
    profile: {
        id: 1,
        prenom: 'Marie',
        nom: 'Claudel',
        email: 'marie.c@schoolpro.ht',
        telephone: '+509 3710-1000',
        matiere: 'Mathématiques',
        dateEmbauche: '2020-09-01',
        statut: 'Permanent',
        diplome: 'Master Mathématiques',
        adresse: 'Port-au-Prince, Haïti'
    },
    classes: [
        { id: 1, name: '5e Année A', eleves: 28, salle: '101' },
        { id: 2, name: '4e Année A', eleves: 35, salle: '104' },
        { id: 3, name: '3e Année B', eleves: 25, salle: '103' }
    ],
    eleves: [
        { id: 1, prenom: 'Marie', nom: 'Jean', classe: '5e Année A' },
        { id: 2, prenom: 'Pierre', nom: 'Dupont', classe: '3e Année B' },
        { id: 3, prenom: 'Sophie', nom: 'Louis', classe: '4e Année A' },
        { id: 4, prenom: 'Robert', nom: 'Paul', classe: '6e Année' }
    ],
    notes: {
        '5e Année A': {
            'Mathématiques': [
                { eleveId: 1, interro1: 82, interro2: 78, examen: 85 },
                { eleveId: 4, interro1: 55, interro2: 60, examen: 58 }
            ]
        },
        '4e Année A': {
            'Mathématiques': [
                { eleveId: 1, interro1: 0, interro2: 0, examen: 0 },
                { eleveId: 2, interro1: 0, interro2: 0, examen: 0 }
            ]
        }
    },
    presences: {
        '2025-01-05': {
            '5e Année A': { 1: true, 2: false, 3: true }
        }
    },
    schedule: [
        { jour: 'Lundi', cours: 'Mathématiques 5e A', heure: '08:00 - 10:00', salle: '101', classe: '5e Année A' },
        { jour: 'Lundi', cours: 'Mathématiques 4e A', heure: '10:00 - 12:00', salle: '104', classe: '4e Année A' },
        { jour: 'Mardi', cours: 'Mathématiques 3e B', heure: '08:00 - 10:00', salle: '103', classe: '3e Année B' },
        { jour: 'Mercredi', cours: 'Mathématiques 5e A', heure: '08:00 - 10:00', salle: '101', classe: '5e Année A' },
        { jour: 'Jeudi', cours: 'Mathématiques 4e A', heure: '10:00 - 12:00', salle: '104', classe: '4e Année A' },
        { jour: 'Vendredi', cours: 'Mathématiques 3e B', heure: '08:00 - 10:00', salle: '103', classe: '3e Année B' }
    ],
    bulletins: [
        { eleve: 'Marie Jean', classe: '5e Année A', moyenne: 82.5, rang: '3/28', mention: 'Bien', trimestre: 1 },
        { eleve: 'Pierre Dupont', classe: '3e Année B', moyenne: 75.0, rang: '5/25', mention: 'Assez Bien', trimestre: 1 }
    ]
};

// ============================================================
// TITRES DES PAGES
// ============================================================
const titles = {
    dashboard: ['Tableau de bord', 'Bienvenue ' + EnseignantData.profile.prenom + ' !'],
    classes: ['Mes classes', 'Vue d\'ensemble'],
    notes: ['Saisie des notes', 'Entrez les évaluations'],
    appel: ['Faire l\'appel', 'Présences & Absences'],
    bulletins: ['Bulletins', 'Génération des bulletins'],
    emploi: ['Emploi du temps', 'Planning de la semaine'],
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
// FONCTIONS UTILES
// ============================================================
function getElevesByClasse(classe) {
    return EnseignantData.eleves.filter(e => e.classe === classe);
}

function getNotesByClasse(classe) {
    return EnseignantData.notes[classe] || {};
}

function calculateMoyenne(interro1, interro2, examen) {
    return Math.round((interro1 + interro2 + examen) / 3);
}

function getAppreciation(moyenne) {
    if (moyenne >= 90) return { text: 'Très Bien', class: 'green' };
    if (moyenne >= 80) return { text: 'Bien', class: 'green' };
    if (moyenne >= 70) return { text: 'Assez Bien', class: 'green' };
    if (moyenne >= 60) return { text: 'Passable', class: 'yellow' };
    return { text: 'Insuffisant', class: 'red' };
}

function getTotalEleves() {
    return EnseignantData.eleves.length;
}

function getTotalClasses() {
    return EnseignantData.classes.length;
}

function getTotalNotes() {
    let count = 0;
    for (const classe in EnseignantData.notes) {
        for (const matiere in EnseignantData.notes[classe]) {
            count += EnseignantData.notes[classe][matiere].length;
        }
    }
    return count;
}

function getTotalAbsencesNonJustifiees() {
    let count = 0;
    for (const date in EnseignantData.presences) {
        for (const classe in EnseignantData.presences[date]) {
            for (const eleveId in EnseignantData.presences[date][classe]) {
                if (EnseignantData.presences[date][classe][eleveId] === false) {
                    count++;
                }
            }
        }
    }
    return count;
}

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
            // Fallback
            switch(pageId) {
                case 'dashboard': renderDashboard(container); break;
                case 'classes': renderClasses(container); break;
                case 'notes': renderNotes(container); break;
                case 'appel': renderAppel(container); break;
                case 'bulletins': renderBulletins(container); break;
                case 'emploi': renderEmploi(container); break;
                case 'profil': renderProfil(container); break;
                case 'parametres': renderParametres(container); break;
            }
        });
}

function initPageData(pageId) {
    switch(pageId) {
        case 'dashboard': initDashboard(); break;
        case 'classes': initClasses(); break;
        case 'notes': initNotes(); break;
        case 'appel': initAppel(); break;
        case 'bulletins': initBulletins(); break;
        case 'emploi': initEmploi(); break;
    }
}

// ============================================================
// DASHBOARD
// ============================================================
function initDashboard() {
    document.getElementById('totalEleves').textContent = getTotalEleves();
    document.getElementById('totalClasses').textContent = getTotalClasses();
    document.getElementById('totalNotes').textContent = getTotalNotes();
    document.getElementById('totalAbsences').textContent = getTotalAbsencesNonJustifiees();
    
    const classesContainer = document.getElementById('dashboardClasses');
    if (classesContainer) {
        classesContainer.innerHTML = EnseignantData.classes.map(c => `
            <div class="class-card-small" onclick="showToast('Détails ${c.name}', 'info')">
                <div>
                    <div class="name">${c.name}</div>
                    <div class="count">${c.eleves} élèves · Salle ${c.salle}</div>
                </div>
                <i class="fas fa-chevron-right" style="color:var(--text-muted);"></i>
            </div>
        `).join('');
    }
    
    const scheduleContainer = document.getElementById('dashboardSchedule');
    if (scheduleContainer) {
        scheduleContainer.innerHTML = EnseignantData.schedule.slice(0, 4).map(c => `
            <div class="activity-item" onclick="showToast('Cours ${c.cours}', 'info')">
                <div class="act-dot green"></div>
                <div>
                    <div class="act-text"><strong>${c.cours}</strong> — Salle ${c.salle}</div>
                    <div class="act-time">${c.jour} ${c.heure}</div>
                </div>
            </div>
        `).join('');
    }
}

function renderDashboard(container) {
    container.innerHTML = `
        <div class="stats-grid">
            <div class="stat-card green" onclick="showToast('Vue d\'ensemble', 'info')">
                <div class="stat-icon green"><i class="fas fa-users"></i></div>
                <div class="stat-value">${getTotalEleves()}</div>
                <div class="stat-label">Élèves</div>
                <div class="stat-change up"><i class="fas fa-arrow-up"></i> +5 ce trimestre</div>
            </div>
            <div class="stat-card blue" onclick="showToast('Vos classes', 'info')">
                <div class="stat-icon blue"><i class="fas fa-door-open"></i></div>
                <div class="stat-value">${getTotalClasses()}</div>
                <div class="stat-label">Classes enseignées</div>
                <div class="stat-change up"><i class="fas fa-check"></i> Toutes actives</div>
            </div>
            <div class="stat-card gold" onclick="showToast('Notes saisies', 'info')">
                <div class="stat-icon gold"><i class="fas fa-pen-to-square"></i></div>
                <div class="stat-value">${getTotalNotes()}</div>
                <div class="stat-label">Notes saisies</div>
                <div class="stat-change up"><i class="fas fa-arrow-up"></i> +12 ce mois</div>
            </div>
            <div class="stat-card red" onclick="showToast('Absences', 'info')">
                <div class="stat-icon red"><i class="fas fa-calendar-xmark"></i></div>
                <div class="stat-value">${getTotalAbsencesNonJustifiees()}</div>
                <div class="stat-label">Absences non justifiées</div>
                <div class="stat-change down"><i class="fas fa-arrow-down"></i> -3 vs mois dernier</div>
            </div>
        </div>
        <div class="content-grid">
            <div class="card">
                <div class="card-header">
                    <div class="card-title"><i class="fas fa-door-open" style="margin-right:8px;color:var(--emerald)"></i>Mes classes</div>
                    <button class="card-action" onclick="showPage('classes')">Voir tout →</button>
                </div>
                <div id="dashboardClasses"></div>
            </div>
            <div class="card">
                <div class="card-header">
                    <div class="card-title"><i class="fas fa-bolt" style="margin-right:8px;color:var(--gold)"></i>Activité récente</div>
                </div>
                <div class="activity-list">
                    <div class="activity-item" onclick="showToast('Notes mises à jour', 'success')">
                        <div class="act-dot green"></div>
                        <div>
                            <div class="act-text">Notes de <strong>5e Année A</strong> mises à jour</div>
                            <div class="act-time">Il y a 15 min</div>
                        </div>
                    </div>
                    <div class="activity-item" onclick="showToast('Appel effectué', 'success')">
                        <div class="act-dot blue"></div>
                        <div>
                            <div class="act-text">Appel effectué pour <strong>4e Année A</strong></div>
                            <div class="act-time">Il y a 1h</div>
                        </div>
                    </div>
                    <div class="activity-item" onclick="showToast('Bulletin généré', 'success')">
                        <div class="act-dot gold"></div>
                        <div>
                            <div class="act-text">Bulletin généré pour <strong>3e Année B</strong></div>
                            <div class="act-time">Il y a 2h</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="second-row">
            <div class="card">
                <div class="card-header">
                    <div class="card-title"><i class="fas fa-clock" style="margin-right:8px;color:var(--info)"></i>Emploi du temps</div>
                    <button class="card-action" onclick="showPage('emploi')">Voir tout →</button>
                </div>
                <div class="activity-list" id="dashboardSchedule"></div>
            </div>
            <div class="card">
                <div class="card-header">
                    <div class="card-title"><i class="fas fa-rocket" style="margin-right:8px;color:var(--emerald)"></i>Actions rapides</div>
                </div>
                <div class="quick-actions">
                    <button class="quick-btn" onclick="showPage('notes')"><i class="fas fa-pen"></i> Saisir notes</button>
                    <button class="quick-btn" onclick="showPage('appel')"><i class="fas fa-calendar-check"></i> Faire l'appel</button>
                    <button class="quick-btn" onclick="showPage('bulletins')"><i class="fas fa-file-pdf"></i> Bulletins</button>
                    <button class="quick-btn" onclick="showPage('classes')"><i class="fas fa-door-open"></i> Mes classes</button>
                </div>
            </div>
        </div>
    `;
    initDashboard();
}

// ============================================================
// CLASSES
// ============================================================
function initClasses() {
    const grid = document.getElementById('classesGrid');
    if (!grid) return;
    
    grid.innerHTML = EnseignantData.classes.map(c => `
        <div class="class-card" onclick="showToast('Détails ${c.name}', 'info')">
            <h4>${c.name}</h4>
            <div class="class-stats">
                <span><strong>${c.eleves}</strong> élèves</span>
                <span><strong>Salle ${c.salle}</strong></span>
            </div>
            <span class="badge green">${c.eleves > 25 ? 'Complet' : 'Disponible'}</span>
            <div style="margin-top:12px;font-size:12px;color:var(--text-muted)">Matière : ${EnseignantData.profile.matiere}</div>
        </div>
    `).join('');
    
    document.getElementById('totalElevesClasses').textContent = getTotalEleves();
}

function renderClasses(container) {
    container.innerHTML = `
        <div class="page-header">
            <h2><i class="fas fa-door-open" style="margin-right:10px;color:var(--emerald)"></i>Mes classes</h2>
            <span class="badge blue" style="padding:6px 14px;font-size:13px;">
                <i class="fas fa-users"></i> <span id="totalElevesClasses">0</span> élèves au total
            </span>
        </div>
        <div class="classes-grid" id="classesGrid"></div>
    `;
    initClasses();
}

// ============================================================
// NOTES
// ============================================================
function initNotes() {
    const select = document.getElementById('noteClasse');
    if (select) {
        select.innerHTML = '<option value="">Sélectionnez une classe</option>' +
            EnseignantData.classes.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
    }
    loadNotesTable();
}

function loadNotesTable() {
    const classe = document.getElementById('noteClasse').value;
    const trimestre = document.getElementById('noteTrimestre').value;
    const tbody = document.getElementById('notesTableBody');
    if (!tbody) return;
    
    if (!classe) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align:center;padding:40px;color:var(--text-muted);">
                    <i class="fas fa-hand-pointer" style="font-size:32px;display:block;margin-bottom:8px;"></i>
                    Sélectionnez une classe pour saisir les notes
                </td>
            </tr>
        `;
        return;
    }
    
    const eleves = getElevesByClasse(classe);
    const notes = getNotesByClasse(classe)['Mathématiques'] || [];
    
    if (eleves.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align:center;padding:40px;color:var(--text-muted);">
                    <i class="fas fa-users" style="font-size:32px;display:block;margin-bottom:8px;"></i>
                    Aucun élève dans cette classe
                </td>
            </tr>
        `;
        return;
    }
    
    tbody.innerHTML = eleves.map(e => {
        const note = notes.find(n => n.eleveId === e.id) || { interro1: 0, interro2: 0, examen: 0 };
        const moy = calculateMoyenne(note.interro1, note.interro2, note.examen);
        const moyClass = moy >= 75 ? 'good' : moy >= 60 ? 'avg' : 'bad';
        return `
            <tr>
                <td><div class="td-user"><div class="td-avatar a">${(e.prenom.charAt(0) + e.nom.charAt(0)).toUpperCase()}</div><div class="td-name">${e.prenom} ${e.nom}</div></div></td>
                <td><input class="input-note" type="number" value="${note.interro1}" data-eleve="${e.id}" data-type="interro1" onchange="updateNote(this)"></td>
                <td><input class="input-note" type="number" value="${note.interro2}" data-eleve="${e.id}" data-type="interro2" onchange="updateNote(this)"></td>
                <td><input class="input-note" type="number" value="${note.examen}" data-eleve="${e.id}" data-type="examen" onchange="updateNote(this)"></td>
                <td class="note-cell ${moyClass}">${moy}/100</td>
            </tr>
        `;
    }).join('');
}

function updateNote(input) {
    const eleveId = parseInt(input.dataset.eleve);
    const type = input.dataset.type;
    const value = parseInt(input.value) || 0;
    const classe = document.getElementById('noteClasse').value;
    
    if (!EnseignantData.notes[classe]) EnseignantData.notes[classe] = {};
    if (!EnseignantData.notes[classe]['Mathématiques']) EnseignantData.notes[classe]['Mathématiques'] = [];
    
    let note = EnseignantData.notes[classe]['Mathématiques'].find(n => n.eleveId === eleveId);
    if (!note) {
        note = { eleveId, interro1: 0, interro2: 0, examen: 0 };
        EnseignantData.notes[classe]['Mathématiques'].push(note);
    }
    note[type] = Math.min(100, Math.max(0, value));
    
    // Mettre à jour la moyenne
    const row = input.closest('tr');
    const inputs = row.querySelectorAll('.input-note');
    const moyCell = row.querySelector('.note-cell');
    if (inputs.length === 3 && moyCell) {
        const sum = Array.from(inputs).reduce((acc, inp) => acc + (parseInt(inp.value) || 0), 0);
        const moy = Math.round(sum / 3);
        moyCell.innerText = moy + '/100';
        moyCell.className = 'note-cell ' + (moy >= 75 ? 'good' : moy >= 60 ? 'avg' : 'bad');
    }
}

function saveNotes() {
    showToast('Notes enregistrées avec succès !', 'success');
}

function renderNotes(container) {
    container.innerHTML = `
        <div class="page-header">
            <h2><i class="fas fa-pen-to-square" style="margin-right:10px;color:var(--emerald)"></i>Saisie des notes</h2>
            <div style="display:flex;gap:10px;flex-wrap:wrap;">
                <select class="filter-select" id="noteClasse" onchange="loadNotesTable()">
                    <option value="">Sélectionnez une classe</option>
                </select>
                <select class="filter-select" id="noteTrimestre" onchange="loadNotesTable()">
                    <option value="1">1er Trimestre</option>
                    <option value="2">2e Trimestre</option>
                    <option value="3">3e Trimestre</option>
                </select>
                <button class="btn btn-primary" onclick="saveNotes()"><i class="fas fa-save"></i> Enregistrer</button>
            </div>
        </div>
        <div class="card">
            <div class="table-wrap">
                <table id="notesTable">
                    <thead>
                        <tr>
                            <th>Élève</th>
                            <th>Interro 1</th>
                            <th>Interro 2</th>
                            <th>Examen</th>
                            <th>Moyenne</th>
                        </tr>
                    </thead>
                    <tbody id="notesTableBody"></tbody>
                </table>
            </div>
        </div>
    `;
    initNotes();
}

// ============================================================
// APPEL
// ============================================================
function initAppel() {
    const select = document.getElementById('appelClasse');
    if (select) {
        select.innerHTML = '<option value="">Sélectionnez une classe</option>' +
            EnseignantData.classes.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
    }
    loadAppel();
}

function loadAppel() {
    const classe = document.getElementById('appelClasse').value;
    const date = document.getElementById('appelDate').value;
    const tbody = document.getElementById('appelTableBody');
    if (!tbody) return;
    
    if (!classe) {
        tbody.innerHTML = `
            <tr>
                <td colspan="4" style="text-align:center;padding:40px;color:var(--text-muted);">
                    <i class="fas fa-hand-pointer" style="font-size:32px;display:block;margin-bottom:8px;"></i>
                    Sélectionnez une classe pour faire l'appel
                </td>
            </tr>
        `;
        return;
    }
    
    const eleves = getElevesByClasse(classe);
    if (eleves.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="4" style="text-align:center;padding:40px;color:var(--text-muted);">
                    <i class="fas fa-users" style="font-size:32px;display:block;margin-bottom:8px;"></i>
                    Aucun élève dans cette classe
                </td>
            </tr>
        `;
        return;
    }
    
    if (!EnseignantData.presences[date]) EnseignantData.presences[date] = {};
    if (!EnseignantData.presences[date][classe]) EnseignantData.presences[date][classe] = {};
    
    tbody.innerHTML = eleves.map(e => {
        const present = EnseignantData.presences[date][classe][e.id] ?? true;
        return `
            <tr>
                <td><div class="td-user"><div class="td-avatar a">${(e.prenom.charAt(0) + e.nom.charAt(0)).toUpperCase()}</div><div class="td-name">${e.prenom} ${e.nom}</div></div></td>
                <td>
                    <label style="display:flex;align-items:center;gap:8px">
                        <input type="checkbox" class="attendance-check" ${present ? 'checked' : ''} onchange="togglePresence(this, ${e.id}, '${classe}', '${date}')">
                        <span class="badge ${present ? 'green' : 'red'}">${present ? 'Présent(e)' : 'Absent(e)'}</span>
                    </label>
                </td>
                <td>${present ? '—' : '<input class="filter-input" style="min-width:140px;padding:5px 10px" placeholder="Raison...">'}</td>
                <td>${present ? '—' : '<select class="filter-select" style="padding:5px 10px"><option>Non justifiée</option><option>Justifiée</option></select>'}</td>
            </tr>
        `;
    }).join('');
}

function togglePresence(checkbox, eleveId, classe, date) {
    EnseignantData.presences[date][classe][eleveId] = checkbox.checked;
    const badge = checkbox.closest('td').querySelector('.badge');
    if (checkbox.checked) {
        badge.className = 'badge green';
        badge.innerText = 'Présent(e)';
    } else {
        badge.className = 'badge red';
        badge.innerText = 'Absent(e)';
    }
}

function saveAppel() {
    showToast('Appel enregistré avec succès !', 'success');
}

function renderAppel(container) {
    container.innerHTML = `
        <div class="page-header">
            <h2><i class="fas fa-calendar-check" style="margin-right:10px;color:var(--emerald)"></i>Faire l'appel</h2>
            <div style="display:flex;gap:10px;flex-wrap:wrap;">
                <select class="filter-select" id="appelClasse" onchange="loadAppel()">
                    <option value="">Sélectionnez une classe</option>
                </select>
                <input type="date" class="filter-select" id="appelDate" value="2025-01-05" onchange="loadAppel()">
                <button class="btn btn-primary" onclick="saveAppel()"><i class="fas fa-save"></i> Enregistrer</button>
            </div>
        </div>
        <div class="card">
            <div class="table-wrap">
                <table>
                    <thead>
                        <tr>
                            <th>Élève</th>
                            <th>Présence</th>
                            <th>Motif (si absent)</th>
                            <th>Justifiée</th>
                        </tr>
                    </thead>
                    <tbody id="appelTableBody"></tbody>
                </table>
            </div>
        </div>
    `;
    initAppel();
}

// ============================================================
// BULLETINS
// ============================================================
function initBulletins() {
    const select = document.getElementById('bulletinClasse');
    if (select) {
        select.innerHTML = '<option value="">Toutes les classes</option>' +
            EnseignantData.classes.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
    }
    loadBulletins();
}

function loadBulletins() {
    const classe = document.getElementById('bulletinClasse').value;
    const trimestre = document.getElementById('bulletinTrimestre').value;
    const container = document.getElementById('bulletinsContainer');
    if (!container) return;
    
    let bulletins = EnseignantData.bulletins;
    if (classe) bulletins = bulletins.filter(b => b.classe === classe);
    if (trimestre) bulletins = bulletins.filter(b => b.trimestre === parseInt(trimestre));
    
    if (bulletins.length === 0) {
        container.innerHTML = `
            <div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-muted);">
                <i class="fas fa-file-lines" style="font-size:48px;display:block;margin-bottom:8px;"></i>
                Aucun bulletin trouvé pour ces critères
            </div>
        `;
        return;
    }
    
    container.innerHTML = bulletins.map(b => `
        <div class="bulletin-card" onclick="showToast('Bulletin de ${b.eleve}', 'info')">
            <div class="header">
                <div>
                    <div class="eleve">${b.eleve}</div>
                    <div style="font-size:12px;color:var(--text-muted);">${b.classe} · Trimestre ${b.trimestre}</div>
                </div>
                <span class="badge green">Disponible</span>
            </div>
            <div class="stat">
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
            <button class="btn btn-primary" style="width:100%;justify-content:center;" onclick="event.stopPropagation();showToast('Bulletin PDF généré', 'success')">
                <i class="fas fa-file-pdf"></i> Générer PDF
            </button>
        </div>
    `).join('');
}

function genererBulletins() {
    showToast('Génération des bulletins en cours...', 'success');
}

function renderBulletins(container) {
    container.innerHTML = `
        <div class="page-header">
            <h2><i class="fas fa-file-lines" style="margin-right:10px;color:var(--emerald)"></i>Bulletins</h2>
            <div style="display:flex;gap:10px;flex-wrap:wrap;">
                <select class="filter-select" id="bulletinClasse" onchange="loadBulletins()">
                    <option value="">Sélectionnez une classe</option>
                </select>
                <select class="filter-select" id="bulletinTrimestre" onchange="loadBulletins()">
                    <option value="1">1er Trimestre</option>
                    <option value="2">2e Trimestre</option>
                    <option value="3">3e Trimestre</option>
                </select>
                <button class="btn btn-primary" onclick="genererBulletins()"><i class="fas fa-file-pdf"></i> Générer PDF</button>
            </div>
        </div>
        <div id="bulletinsContainer" style="display:grid;grid-template-columns:1fr 1fr;gap:20px;"></div>
    `;
    initBulletins();
}

// ============================================================
// EMPLOI DU TEMPS
// ============================================================
function initEmploi() {
    const now = new Date();
    document.getElementById('semaineDate').textContent = now.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    
    const jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
    const grid = document.getElementById('emploiGrid');
    if (!grid) return;
    
    grid.innerHTML = jours.map(jour => `
        <div class="schedule-day">
            <div class="day-title">${jour}</div>
            ${EnseignantData.schedule.filter(c => c.jour === jour).map(c => `
                <div class="schedule-course" onclick="showToast('${c.cours}', 'info')">
                    <div class="course-name">${c.cours}</div>
                    <div class="course-time">${c.heure}</div>
                    <div class="course-room">Salle ${c.salle} · ${c.classe}</div>
                </div>
            `).join('') || `
                <div style="text-align:center;padding:20px;color:var(--text-muted);font-size:12px;">
                    <i class="fas fa-sun" style="font-size:20px;display:block;margin-bottom:6px;"></i>
                    Pas de cours
                </div>
            `}
        </div>
    `).join('');
}

function renderEmploi(container) {
    container.innerHTML = `
        <div class="page-header">
            <h2><i class="fas fa-clock" style="margin-right:10px;color:var(--emerald)"></i>Mon emploi du temps</h2>
            <button class="btn btn-outline" onclick="showToast('Emploi du temps exporté', 'success')"><i class="fas fa-download"></i> Exporter</button>
        </div>
        <div class="card">
            <div class="card-header">
                <div class="card-title"><i class="fas fa-calendar-week" style="margin-right:8px;color:var(--gold)"></i>Semaine du <span id="semaineDate"></span></div>
            </div>
            <div class="schedule-grid" id="emploiGrid"></div>
        </div>
    `;
    initEmploi();
}

// ============================================================
// PROFIL
// ============================================================
function renderProfil(container) {
    const p = EnseignantData.profile;
    container.innerHTML = `
        <div class="page-header">
            <h2><i class="fas fa-user" style="margin-right:10px;color:var(--emerald)"></i>Mon profil</h2>
            <button class="btn btn-primary" onclick="showUserProfile()"><i class="fas fa-edit"></i> Modifier</button>
        </div>
        <div class="card" style="max-width:800px;margin:0 auto;">
            <div style="display:flex;align-items:center;gap:24px;padding:24px;">
                <div style="width:100px;height:100px;border-radius:50%;background:linear-gradient(135deg,var(--emerald-dim),var(--emerald));display:flex;align-items:center;justify-content:center;font-size:40px;font-weight:700;color:white;flex-shrink:0;" id="profilAvatar">MC</div>
                <div>
                    <h2 style="font-size:24px;font-weight:700;" id="profilName">${p.prenom} ${p.nom}</h2>
                    <p style="color:var(--text-secondary);"><i class="fas fa-envelope"></i> ${p.email}</p>
                    <p style="color:var(--text-secondary);"><i class="fas fa-book"></i> ${p.matiere}</p>
                    <div style="display:flex;gap:8px;margin-top:8px;">
                        <span class="badge green"><i class="fas fa-circle"></i> Actif</span>
                        <span class="badge blue"><i class="fas fa-calendar"></i> Enseignant</span>
                    </div>
                </div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;padding:0 24px 24px;">
                <div style="background:#f8fafc;border-radius:12px;padding:16px;">
                    <h4 style="font-size:14px;font-weight:700;margin-bottom:12px;color:var(--text-primary);">
                        <i class="fas fa-user" style="color:var(--emerald);"></i> Informations personnelles
                    </h4>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
                        <div><label style="font-size:10px;color:var(--text-muted);text-transform:uppercase;font-weight:600;">Prénom</label><div style="font-weight:500;" id="pPrenom">${p.prenom}</div></div>
                        <div><label style="font-size:10px;color:var(--text-muted);text-transform:uppercase;font-weight:600;">Nom</label><div style="font-weight:500;" id="pNom">${p.nom}</div></div>
                        <div><label style="font-size:10px;color:var(--text-muted);text-transform:uppercase;font-weight:600;">Téléphone</label><div style="font-weight:500;" id="pTelephone">${p.telephone}</div></div>
                        <div><label style="font-size:10px;color:var(--text-muted);text-transform:uppercase;font-weight:600;">Email</label><div style="font-weight:500;" id="pEmail">${p.email}</div></div>
                    </div>
                </div>
                <div style="background:#f8fafc;border-radius:12px;padding:16px;">
                    <h4 style="font-size:14px;font-weight:700;margin-bottom:12px;color:var(--text-primary);">
                        <i class="fas fa-briefcase" style="color:var(--emerald);"></i> Informations professionnelles
                    </h4>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
                        <div><label style="font-size:10px;color:var(--text-muted);text-transform:uppercase;font-weight:600;">Matière</label><div style="font-weight:500;" id="pMatiere">${p.matiere}</div></div>
                        <div><label style="font-size:10px;color:var(--text-muted);text-transform:uppercase;font-weight:600;">Date d'embauche</label><div style="font-weight:500;" id="pDateEmbauche">${p.dateEmbauche}</div></div>
                        <div><label style="font-size:10px;color:var(--text-muted);text-transform:uppercase;font-weight:600;">Statut</label><div style="font-weight:500;" id="pStatut">${p.statut}</div></div>
                        <div><label style="font-size:10px;color:var(--text-muted);text-transform:uppercase;font-weight:600;">Diplôme</label><div style="font-weight:500;" id="pDiplome">${p.diplome}</div></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ============================================================
// PARAMÈTRES
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
            </div>
        </div>
    `;
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
// MODALS (reprise des fonctions de l'admin)
// ============================================================
function openSearch() {
    const modal = document.getElementById('searchModal');
    if (modal) modal.classList.add('active');
    setTimeout(() => {
        const input = document.getElementById('searchInput');
        if (input) input.focus();
    }, 100);
}

function closeSearch() {
    const modal = document.getElementById('searchModal');
    if (modal) modal.classList.remove('active');
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
    
    const q = query.toLowerCase();
    let found = [];
    
    EnseignantData.eleves.forEach(e => {
        const name = (e.prenom + ' ' + e.nom).toLowerCase();
        if (name.includes(q) || e.classe.toLowerCase().includes(q)) {
            found.push({ type: 'Élève', name: e.prenom + ' ' + e.nom, detail: e.classe, icon: 'fa-user-graduate', color: 'var(--emerald)' });
        }
    });
    
    EnseignantData.classes.forEach(c => {
        if (c.name.toLowerCase().includes(q)) {
            found.push({ type: 'Classe', name: c.name, detail: c.eleves + ' élèves', icon: 'fa-door-open', color: 'var(--gold)' });
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
        let html = '<div style="font-size:12px;color:var(--text-muted);margin-bottom:12px;">' + found.length + ' résultat(s) trouvé(s)</div>';
        found.forEach(item => {
            html += `
                <div style="display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:8px;cursor:pointer;transition:all 0.2s;margin-bottom:4px;"
                     onmouseover="this.style.background='#f8fafc'"
                     onmouseout="this.style.background='transparent'"
                     onclick="showToast('${item.type} : ${item.name}', 'info')">
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

function openHelpModal() {
    const modal = document.getElementById('helpModal');
    if (modal) modal.classList.add('active');
}

function closeHelpModal() {
    const modal = document.getElementById('helpModal');
    if (modal) modal.classList.remove('active');
}

function openYearModal() {
    const modal = document.getElementById('yearModal');
    if (modal) modal.classList.add('active');
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
    let settings = JSON.parse(localStorage.getItem('teacherSettings') || '{}');
    settings.schoolYear = year;
    localStorage.setItem('teacherSettings', JSON.stringify(settings));
    showToast('Année scolaire changée pour ' + year, 'success');
    closeYearModal();
}

function openProfileModal() {
    const modal = document.getElementById('profileModal');
    if (!modal) return;
    const p = EnseignantData.profile;
    document.getElementById('profileAvatar').textContent = (p.prenom.charAt(0) + p.nom.charAt(0)).toUpperCase();
    document.getElementById('profileName').textContent = p.prenom + ' ' + p.nom;
    document.getElementById('profilePrenom').value = p.prenom;
    document.getElementById('profileNom').value = p.nom;
    document.getElementById('profileEmail').value = p.email;
    document.getElementById('profilePhone').value = p.telephone;
    document.getElementById('profileMatiere').value = p.matiere;
    document.getElementById('profileDateEmbauche').value = p.dateEmbauche;
    modal.classList.add('active');
}

function closeProfileModal() {
    const modal = document.getElementById('profileModal');
    if (modal) modal.classList.remove('active');
}

function saveProfile() {
    const prenom = document.getElementById('profilePrenom').value.trim();
    const nom = document.getElementById('profileNom').value.trim();
    const email = document.getElementById('profileEmail').value.trim();
    const telephone = document.getElementById('profilePhone').value.trim();
    const matiere = document.getElementById('profileMatiere').value.trim();
    const dateEmbauche = document.getElementById('profileDateEmbauche').value;
    
    if (!prenom || !nom) {
        showToast('Le prénom et le nom sont requis', 'error');
        return;
    }
    
    EnseignantData.profile.prenom = prenom;
    EnseignantData.profile.nom = nom;
    EnseignantData.profile.email = email;
    EnseignantData.profile.telephone = telephone;
    EnseignantData.profile.matiere = matiere;
    EnseignantData.profile.dateEmbauche = dateEmbauche;
    
    document.getElementById('sidebarAvatar').textContent = (prenom.charAt(0) + nom.charAt(0)).toUpperCase();
    document.getElementById('sidebarName').textContent = prenom + ' ' + nom;
    document.getElementById('footerAvatar').textContent = (prenom.charAt(0) + nom.charAt(0)).toUpperCase();
    document.getElementById('footerName').textContent = prenom + ' ' + nom;
    
    showToast('Profil mis à jour avec succès !', 'success');
    closeProfileModal();
}

function showNotifications() {
    notifCount++;
    const dot = document.querySelector('.notif-dot');
    if (dot) dot.style.display = 'block';
    showToast(notifCount + ' notification(s) non lue(s)', 'info');
}

function showToast(msg, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMsg');
    if (toast && toastMsg) {
        toastMsg.innerText = msg;
        toast.className = 'toast ' + type;
        toast.classList.add('show');
        if (toastTimeout) clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => toast.classList.remove('show'), 3000);
    }
}

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
// INITIALISATION
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sidebarAvatar').textContent =
        (EnseignantData.profile.prenom.charAt(0) + EnseignantData.profile.nom.charAt(0)).toUpperCase();
    document.getElementById('sidebarName').textContent =
        EnseignantData.profile.prenom + ' ' + EnseignantData.profile.nom;
    document.getElementById('sidebarMatiere').textContent = EnseignantData.profile.matiere;
    document.getElementById('footerAvatar').textContent =
        (EnseignantData.profile.prenom.charAt(0) + EnseignantData.profile.nom.charAt(0)).toUpperCase();
    document.getElementById('footerName').textContent =
        EnseignantData.profile.prenom + ' ' + EnseignantData.profile.nom;
    document.getElementById('classesBadge').textContent = EnseignantData.classes.length;
    
    showPage('dashboard');
});

// ============================================================
// EXPOSER LES FONCTIONS
// ============================================================
window.showPage = showPage;
window.showToast = showToast;
window.showNotifications = showNotifications;
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
window.toggleTheme = toggleTheme;
window.loadNotesTable = loadNotesTable;
window.updateNote = updateNote;
window.saveNotes = saveNotes;
window.loadAppel = loadAppel;
window.togglePresence = togglePresence;
window.saveAppel = saveAppel;
window.loadBulletins = loadBulletins;
window.genererBulletins = genererBulletins;
window.showUserProfile = showUserProfile;
window.logout = logout;