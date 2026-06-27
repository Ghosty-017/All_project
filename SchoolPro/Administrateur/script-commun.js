



// ==================== DONNÉES CENTRALISÉES ====================
const SchoolData = {
  // Élèves
  students: [
    { id: 1, prenom: 'Marie', nom: 'Jean', email: 'marie.jean@email.com', matricule: '001', classe: '5e Année A', dateNaissance: '12/03/2012', genre: 'Féminin', tuteur: 'Claire Jean', telephone: '+509 3710-0000', emailTuteur: 'claire.jean@email.com', adresse: 'Port-au-Prince, Haïti', statut: 'Actif', paiement: 'Payé' },
    { id: 2, prenom: 'Pierre', nom: 'Dupont', email: 'p.dupont@email.com', matricule: '002', classe: '3e Année B', dateNaissance: '07/08/2013', genre: 'Masculin', tuteur: 'Marc Dupont', telephone: '+509 3720-0001', emailTuteur: 'marc.dupont@email.com', adresse: 'Port-au-Prince, Haïti', statut: 'Actif', paiement: 'Partiel' },
    { id: 3, prenom: 'Sophie', nom: 'Louis', email: 's.louis@email.com', matricule: '003', classe: '4e Année A', dateNaissance: '25/11/2011', genre: 'Féminin', tuteur: 'Jean Louis', telephone: '+509 3730-0002', emailTuteur: 'jean.louis@email.com', adresse: 'Port-au-Prince, Haïti', statut: 'Actif', paiement: 'Impayé' },
    { id: 4, prenom: 'Robert', nom: 'Paul', email: 'r.paul@email.com', matricule: '004', classe: '6e Année', dateNaissance: '18/06/2010', genre: 'Masculin', tuteur: 'Anne Paul', telephone: '+509 3740-0003', emailTuteur: 'anne.paul@email.com', adresse: 'Port-au-Prince, Haïti', statut: 'En attente', paiement: 'En cours' }
  ],
  
  // Enseignants
  teachers: [
    { id: 1, prenom: 'Marie', nom: 'Claudel', email: 'marie.c@schoolpro.ht', matiere: 'Mathématiques', telephone: '+509 3710-1000', dateEmbauche: '2020-09-01', diplome: 'Master Mathématiques', statut: 'Permanent', adresse: 'Port-au-Prince', specialites: 'Algèbre, Géométrie', langues: 'Français, Créole' },
    { id: 2, prenom: 'Jean', nom: 'Dorval', email: 'jean.d@schoolpro.ht', matiere: 'Français', telephone: '+509 3720-1001', dateEmbauche: '2019-09-01', diplome: 'Master Lettres', statut: 'Permanent', adresse: 'Port-au-Prince', specialites: 'Littérature, Grammaire', langues: 'Français, Créole' },
    { id: 3, prenom: 'Sophie', nom: 'Baptiste', email: 'sophie.b@schoolpro.ht', matiere: 'Sciences', telephone: '+509 3730-1002', dateEmbauche: '2021-09-01', diplome: 'Master Sciences', statut: 'Permanent', adresse: 'Port-au-Prince', specialites: 'Biologie, Chimie', langues: 'Français, Créole, Anglais' },
    { id: 4, prenom: 'Louis', nom: 'Michel', email: 'louis.m@schoolpro.ht', matiere: 'Histoire', telephone: '+509 3740-1003', dateEmbauche: '2020-09-01', diplome: 'Master Histoire', statut: 'Contractuel', adresse: 'Port-au-Prince', specialites: 'Histoire moderne', langues: 'Français, Créole' },
    { id: 5, prenom: 'Catherine', nom: 'Paul', email: 'catherine.p@schoolpro.ht', matiere: 'Anglais', telephone: '+509 3750-1004', dateEmbauche: '2022-09-01', diplome: 'Master Anglais', statut: 'Permanent', adresse: 'Port-au-Prince', specialites: 'Linguistique', langues: 'Français, Créole, Anglais' },
    { id: 6, prenom: 'Antoine', nom: 'Dubois', email: 'antoine.d@schoolpro.ht', matiere: 'EPS', telephone: '+509 3760-1005', dateEmbauche: '2021-09-01', diplome: 'Master EPS', statut: 'Contractuel', adresse: 'Port-au-Prince', specialites: 'Sport collectif', langues: 'Français, Créole' }
  ],
  
  // Classes
  classes: [
    { id: 1, name: '1ère Année A', room: 'Salle 101', year: '2024-2025', level: 'Primaire', capacity: 35, schedule: '8h-12h / 13h-16h', teacher: 'Marie Claudel', studentCount: 28, subjects: 'Maths, Français, Sciences', fees: '50,000 Gdes' },
    { id: 2, name: '2e Année A', room: 'Salle 102', year: '2024-2025', level: 'Primaire', capacity: 35, schedule: '8h-12h / 13h-16h', teacher: 'Jean Dorval', studentCount: 32, subjects: 'Maths, Français, Sciences', fees: '50,000 Gdes' },
    { id: 3, name: '3e Année B', room: 'Salle 103', year: '2024-2025', level: 'Primaire', capacity: 35, schedule: '8h-12h / 13h-16h', teacher: 'Sophie Baptiste', studentCount: 25, subjects: 'Maths, Français, Sciences', fees: '50,000 Gdes' },
    { id: 4, name: '4e Année A', room: 'Salle 104', year: '2024-2025', level: 'Primaire', capacity: 35, schedule: '8h-12h / 13h-16h', teacher: 'Louis Michel', studentCount: 35, subjects: 'Maths, Français, Sciences', fees: '50,000 Gdes' },
    { id: 5, name: '5e Année A', room: 'Salle 105', year: '2024-2025', level: 'Primaire', capacity: 35, schedule: '8h-12h / 13h-16h', teacher: 'Catherine Paul', studentCount: 29, subjects: 'Maths, Français, Sciences', fees: '50,000 Gdes' },
    { id: 6, name: '5e Année B', room: 'Salle 106', year: '2024-2025', level: 'Primaire', capacity: 35, schedule: '8h-12h / 13h-16h', teacher: 'Antoine Dubois', studentCount: 30, subjects: 'Maths, Français, Sciences', fees: '50,000 Gdes' },
    { id: 7, name: '6e Année', room: 'Salle 107', year: '2024-2025', level: 'Secondaire', capacity: 35, schedule: '8h-12h / 13h-16h', teacher: 'Marie Claudel', studentCount: 22, subjects: 'Maths, Français, Sciences', fees: '55,000 Gdes' }
  ],
  
  // Matières
  matieres: [
    { id: 1, nom: 'Mathématiques', coefficient: 4, couleur: 'blue', volume: '4h/semaine', professeur: 'Marie Claudel', type: 'Fondamentale', difficulte: 'Moyen', classes: ['1ère Année A', '2e Année A', '3e Année B', '4e Année A', '5e Année A', '6e Année'] },
    { id: 2, nom: 'Français', coefficient: 4, couleur: 'green', volume: '4h/semaine', professeur: 'Jean Dorval', type: 'Fondamentale', difficulte: 'Moyen', classes: ['1ère Année A', '2e Année A', '3e Année B', '4e Année A', '5e Année A', '6e Année'] },
    { id: 3, nom: 'Créole', coefficient: 2, couleur: 'orange', volume: '2h/semaine', professeur: 'Catherine Paul', type: 'Littéraire', difficulte: 'Facile', classes: ['1ère Année A', '2e Année A', '3e Année B', '4e Année A', '5e Année A', '6e Année'] },
    { id: 4, nom: 'Sciences', coefficient: 3, couleur: 'purple', volume: '3h/semaine', professeur: 'Sophie Baptiste', type: 'Scientifique', difficulte: 'Difficile', classes: ['1ère Année A', '2e Année A', '3e Année B', '4e Année A', '5e Année A'] },
    { id: 5, nom: 'Anglais', coefficient: 2, couleur: 'red', volume: '2h/semaine', professeur: 'Catherine Paul', type: 'Littéraire', difficulte: 'Moyen', classes: ['3e Année B', '4e Année A', '5e Année A', '6e Année'] },
    { id: 6, nom: 'Histoire', coefficient: 2, couleur: 'pink', volume: '2h/semaine', professeur: 'Louis Michel', type: 'Littéraire', difficulte: 'Moyen', classes: ['3e Année B', '4e Année A', '5e Année A', '6e Année'] }
  ],
  
  // Notes par élève
  notes: {
    '5e Année A': {
      'Mathematiques': [
        { eleveId: 1, interro1: 82, interro2: 78, examen: 85 },
        { eleveId: 4, interro1: 55, interro2: 60, examen: 58 }
      ],
      'Francais': [
        { eleveId: 1, interro1: 75, interro2: 80, examen: 82 },
        { eleveId: 4, interro1: 65, interro2: 68, examen: 70 }
      ],
      'Sciences': [
        { eleveId: 1, interro1: 88, interro2: 85, examen: 90 },
        { eleveId: 4, interro1: 60, interro2: 62, examen: 65 }
      ]
    },
    '5e Année B': {
      'Mathematiques': [
        { eleveId: 1, interro1: 78, interro2: 82, examen: 80 },
        { eleveId: 2, interro1: 88, interro2: 85, examen: 90 }
      ]
    },
    '4e Année A': {
      'Mathematiques': [
        { eleveId: 1, interro1: 0, interro2: 0, examen: 0 },
        { eleveId: 2, interro1: 0, interro2: 0, examen: 0 }
      ]
    }
  },
  
  // Paiements
  paiements: [
    { id: 1, eleveId: 1, montant: 2500, date: '2025-01-05', statut: 'Payé' },
    { id: 2, eleveId: 2, montant: 1250, date: '2025-01-04', statut: 'Partiel' },
    { id: 3, eleveId: 3, montant: 0, date: null, statut: 'Impayé' }
  ],
  
  // Présences
  presences: {
    '2025-01-05': {
      '5e Année A': { 1: true, 2: false, 3: true }
    }
  },
  
  // Compteurs
  counters: {
    studentId: 5,
    teacherId: 7,
    classId: 8,
    matiereId: 7,
    paiementId: 4
  }
};

// ==================== FONCTIONS DE SYNCHRONISATION ====================

function getStudentById(id) {
  return SchoolData.students.find(s => s.id === id);
}

function getStudentsByClass(className) {
  return SchoolData.students.filter(s => s.classe === className);
}

function getTeacherById(id) {
  return SchoolData.teachers.find(t => t.id === id);
}

function getTeacherByName(name) {
  return SchoolData.teachers.find(t => (t.prenom + ' ' + t.nom) === name);
}

function getClassByName(name) {
  return SchoolData.classes.find(c => c.name === name);
}

function getMatiereByName(name) {
  return SchoolData.matieres.find(m => m.nom === name);
}

function getStudentNotes(eleveId, classe, matiere) {
  const classNotes = SchoolData.notes[classe];
  if (!classNotes) return null;
  const matiereNotes = classNotes[matiere];
  if (!matiereNotes) return null;
  return matiereNotes.find(n => n.eleveId === eleveId);
}

function calculateMoyenne(notes) {
  if (!notes) return 0;
  const sum = (notes.interro1 || 0) + (notes.interro2 || 0) + (notes.examen || 0);
  return Math.round(sum / 3);
}

function getMoyenneByEleve(eleveId, classe) {
  const classNotes = SchoolData.notes[classe];
  if (!classNotes) return 0;
  
  let total = 0;
  let count = 0;
  
  for (const matiere in classNotes) {
    const notes = classNotes[matiere].find(n => n.eleveId === eleveId);
    if (notes) {
      total += (notes.interro1 || 0) + (notes.interro2 || 0) + (notes.examen || 0);
      count += 3;
    }
  }
  
  return count > 0 ? Math.round(total / count) : 0;
}

function getClassStats(className) {
  const students = getStudentsByClass(className);
  const classObj = getClassByName(className);
  return {
    count: students.length,
    capacity: classObj ? classObj.capacity : 0,
    teacher: classObj ? classObj.teacher : 'Non assigné'
  };
}

function getTotalStudents() {
  return SchoolData.students.length;
}

function getTotalTeachers() {
  return SchoolData.teachers.length;
}

function getTotalClasses() {
  return SchoolData.classes.length;
}

function getTotalUnpaid() {
  return SchoolData.students.filter(s => s.paiement === 'Impayé' || s.paiement === 'Partiel').length;
}

function getTotalCollected() {
  return SchoolData.paiements
    .filter(p => p.statut === 'Payé')
    .reduce((sum, p) => sum + p.montant, 0);
}

function getTotalPending() {
  return SchoolData.paiements
    .filter(p => p.statut === 'Impayé' || p.statut === 'Partiel')
    .reduce((sum, p) => sum + (2500 - (p.montant || 0)), 0);
}

// ==================== FONCTIONS D'AJOUT AVEC SYNCHRONISATION ====================

function addStudent(student) {
  const newStudent = {
    id: SchoolData.counters.studentId++,
    ...student,
    statut: student.statut || 'Actif',
    paiement: student.paiement || 'En cours'
  };
  SchoolData.students.push(newStudent);
  
  // Ajouter les notes vides pour cet élève dans toutes les matières de sa classe
  const matieres = SchoolData.matieres.filter(m => 
    m.classes.includes(student.classe)
  );
  
  if (!SchoolData.notes[student.classe]) {
    SchoolData.notes[student.classe] = {};
  }
  
  matieres.forEach(m => {
    if (!SchoolData.notes[student.classe][m.nom]) {
      SchoolData.notes[student.classe][m.nom] = [];
    }
    SchoolData.notes[student.classe][m.nom].push({
      eleveId: newStudent.id,
      interro1: 0,
      interro2: 0,
      examen: 0
    });
  });
  
  // Mettre à jour le compteur de la classe
  const classObj = getClassByName(student.classe);
  if (classObj) {
    classObj.studentCount = getStudentsByClass(student.classe).length;
  }
  
  return newStudent;
}

function addTeacher(teacher) {
  const newTeacher = {
    id: SchoolData.counters.teacherId++,
    ...teacher,
    statut: teacher.statut || 'Permanent'
  };
  SchoolData.teachers.push(newTeacher);
  return newTeacher;
}

function addClass(classData) {
  const newClass = {
    id: SchoolData.counters.classId++,
    ...classData,
    studentCount: 0
  };
  SchoolData.classes.push(newClass);
  return newClass;
}

function addMatiere(matiere) {
  const newMatiere = {
    id: SchoolData.counters.matiereId++,
    ...matiere
  };
  SchoolData.matieres.push(newMatiere);
  
  // Ajouter les notes vides pour cette matière dans toutes les classes
  matiere.classes.forEach(classe => {
    if (!SchoolData.notes[classe]) {
      SchoolData.notes[classe] = {};
    }
    if (!SchoolData.notes[classe][matiere.nom]) {
      SchoolData.notes[classe][matiere.nom] = [];
    }
    const students = getStudentsByClass(classe);
    students.forEach(s => {
      if (!SchoolData.notes[classe][matiere.nom].find(n => n.eleveId === s.id)) {
        SchoolData.notes[classe][matiere.nom].push({
          eleveId: s.id,
          interro1: 0,
          interro2: 0,
          examen: 0
        });
      }
    });
  });
  
  return newMatiere;
}

function addPaiement(eleveId, montant, date) {
  const paiement = {
    id: SchoolData.counters.paiementId++,
    eleveId,
    montant,
    date: date || new Date().toISOString().split('T')[0],
    statut: montant >= 2500 ? 'Payé' : 'Partiel'
  };
  SchoolData.paiements.push(paiement);
  
  // Mettre à jour le statut de paiement de l'élève
  const student = getStudentById(eleveId);
  if (student) {
    const totalPaid = SchoolData.paiements
      .filter(p => p.eleveId === eleveId)
      .reduce((sum, p) => sum + p.montant, 0);
    student.paiement = totalPaid >= 2500 ? 'Payé' : (totalPaid > 0 ? 'Partiel' : 'Impayé');
  }
  
  return paiement;
}

function updateStudentNote(eleveId, classe, matiere, type, value) {
  const classNotes = SchoolData.notes[classe];
  if (!classNotes) return;
  const matiereNotes = classNotes[matiere];
  if (!matiereNotes) return;
  const note = matiereNotes.find(n => n.eleveId === eleveId);
  if (note) {
    note[type] = Math.min(100, Math.max(0, value));
  }
}

function togglePresence(eleveId, classe, date, present) {
  if (!SchoolData.presences[date]) {
    SchoolData.presences[date] = {};
  }
  if (!SchoolData.presences[date][classe]) {
    SchoolData.presences[date][classe] = {};
  }
  SchoolData.presences[date][classe][eleveId] = present;
}

function getAbsenceCount(eleveId) {
  let count = 0;
  for (const date in SchoolData.presences) {
    for (const classe in SchoolData.presences[date]) {
      if (SchoolData.presences[date][classe][eleveId] === false) {
        count++;
      }
    }
  }
  return count;
}

// ==================== TITRES DES PAGES ====================
const titles = {
  dashboard: ['Tableau de bord', 'Vue générale'],
  etudiants: ['Élèves', getTotalStudents() + ' inscrits'],
  enseignants: ['Enseignants', getTotalTeachers() + ' actifs'],
  classes: ['Classes', getTotalClasses() + ' ouvertes'],
  matieres: ['Matières', 'Gestion'],
  notes: ['Saisie des notes', '1er Trimestre'],
  bulletins: ['Bulletins', 'Génération'],
  absences: ['Présences & Absences', 'Appel'],
  finance: ['Finance & Paiements', 'Janvier 2025'],
  parametres: ['Paramètres', 'Configuration']
};

let currentModalAction = null;
let notifCount = 0;

// ==================== CHARGEMENT DES PAGES ====================
async function loadPage(pageId) {
  const container = document.getElementById(`page-${pageId}`);
  if (container && container.children.length === 0) {
    try {
      const response = await fetch(`${pageId}.html`);
      const html = await response.text();
      container.innerHTML = html;
      
      // Initialiser la page après chargement
      if (pageId === 'etudiants') {
        if (typeof resetStudentModalState === 'function') resetStudentModalState();
        if (typeof addStudentRealtimeValidation === 'function') addStudentRealtimeValidation();
        initStudentModalEvents();
        renderStudents();
      } else if (pageId === 'enseignants') {
        if (typeof resetTeacherModalState === 'function') resetTeacherModalState();
        if (typeof addTeacherRealtimeValidation === 'function') addTeacherRealtimeValidation();
        initTeacherModalEvents();
        renderTeachers();
      } else if (pageId === 'classes') {
        renderClasses();
      } else if (pageId === 'matieres') {
        renderMatieres();
      } else if (pageId === 'dashboard') {
        renderDashboard();
      } else if (pageId === 'finance') {
        renderFinance();
      } else if (pageId === 'notes') {
        renderClassesInNotes();
        initNotesPage();
      } else if (pageId === 'absences') {
        renderAbsences();
      }
    } catch (error) {
      console.error(`Erreur chargement ${pageId}:`, error);
      container.innerHTML = `<div style="text-align:center;padding:60px"><i class="fas fa-exclamation-triangle" style="font-size:48px;color:var(--danger);margin-bottom:16px"></i><h2>Erreur de chargement</h2><p>Impossible de charger la page ${pageId}</p></div>`;
    }
  } else if (container) {
    // Re-rendre la page si elle est déjà chargée
    if (pageId === 'etudiants') renderStudents();
    else if (pageId === 'enseignants') renderTeachers();
    else if (pageId === 'classes') renderClasses();
    else if (pageId === 'matieres') renderMatieres();
    else if (pageId === 'dashboard') renderDashboard();
    else if (pageId === 'finance') renderFinance();
    else if (pageId === 'absences') renderAbsences();
    else if (pageId === 'notes') {
      renderClassesInNotes();
      initNotesPage();
    }
  }
}

// ==================== RENDU DES CLASSES DANS LA PAGE NOTES ====================

function renderClassesInNotes() {
  const classeList = document.getElementById('classeList');
  if (!classeList) return;
  
  // Vider la liste
  classeList.innerHTML = '';
  
  // Récupérer toutes les classes depuis SchoolData
  const classes = SchoolData.classes;
  
  if (classes.length === 0) {
    classeList.innerHTML = `
      <div style="text-align:center;padding:20px;color:var(--text-muted);">
        <i class="fas fa-door-open" style="font-size:24px;display:block;margin-bottom:8px;"></i>
        <p>Aucune classe créée</p>
      </div>
    `;
    return;
  }
  
  // Créer un élément pour chaque classe
  classes.forEach((c, index) => {
    const students = getStudentsByClass(c.name);
    const studentCount = students.length;
    
    // Déterminer le badge de statut de saisie
    let badgeClass = 'red';
    let badgeText = 'Vide';
    
    // Vérifier si des notes existent pour cette classe
    const classNotes = SchoolData.notes[c.name];
    if (classNotes) {
      let hasNotes = false;
      let allComplete = true;
      
      for (const matiere in classNotes) {
        const notes = classNotes[matiere];
        if (notes && notes.length > 0) {
          hasNotes = true;
          // Vérifier si toutes les notes sont saisies
          const hasEmpty = notes.some(n => n.interro1 === 0 && n.interro2 === 0 && n.examen === 0);
          if (hasEmpty) {
            allComplete = false;
          }
        }
      }
      
      if (hasNotes && allComplete) {
        badgeClass = 'green';
        badgeText = 'Saisi';
      } else if (hasNotes) {
        badgeClass = 'yellow';
        badgeText = 'Partiel';
      }
    }
    
    const item = document.createElement('div');
    item.className = 'classe-item' + (index === 0 ? ' active' : '');
    item.dataset.classe = c.name;
    item.onclick = function() { selectClasse(this, c.name); };
    
    item.innerHTML = `
      <div>
        <div class="classe-name">${c.name}</div>
        <div class="classe-count">${studentCount} élèves</div>
      </div>
      <span class="badge ${badgeClass}">${badgeText}</span>
    `;
    
    classeList.appendChild(item);
  });
  
  // Sélectionner la première classe par défaut si aucune n'est active
  const firstActive = classeList.querySelector('.classe-item.active');
  if (firstActive) {
    const className = firstActive.dataset.classe;
    currentClasse = className;
    const titleEl = document.getElementById('classeTitle');
    if (titleEl) titleEl.innerText = className + ' — Notes par matière';
    loadNotesTable();
  }
}

// Fonction pour rafraîchir la liste des classes
function refreshClassesList() {
  renderClassesInNotes();
  showToast('Liste des classes mise à jour', 'info');
}

// ==================== RENDU DES PAGES ====================

function renderStudents() {
  const tbody = document.querySelector('#elevesTable tbody');
  if (!tbody) return;
  
  tbody.innerHTML = '';
  SchoolData.students.forEach((s, index) => {
    const row = document.createElement('tr');
    const initials = (s.prenom.charAt(0) + s.nom.charAt(0)).toUpperCase();
    const absences = getAbsenceCount(s.id);
    const moyenne = getMoyenneByEleve(s.id, s.classe);
    
    row.innerHTML = `
      <td>${String(index + 1).padStart(3, '0')}</td>
      <td><div class="td-user"><div class="td-avatar a">${initials}</div><div><div class="td-name">${s.prenom} ${s.nom}</div><div class="td-sub">${s.email}</div></div></div></td>
      <td>${s.classe}</td>
      <td>${s.dateNaissance || '—'}</td>
      <td>${s.tuteur}<br><small>${s.telephone}</small></td>
      <td><span class="badge ${s.paiement === 'Payé' ? 'green' : s.paiement === 'Partiel' ? 'yellow' : 'red'}">${s.paiement}</span></td>
      <td><span class="badge ${s.statut === 'Actif' ? 'green' : 'yellow'}">${s.statut}</span></td>
      <td>
        <button class="btn btn-outline view-fiche-btn" style="padding:4px 10px;font-size:11px" onclick="event.stopPropagation();openFicheModal(${s.id})">
          <i class="fas fa-eye"></i>
        </button>
      </td>
    `;
    tbody.appendChild(row);
  });
  
  // Mettre à jour le compteur
  const titleSpan = document.querySelector('#page-title span');
  if (titleSpan) titleSpan.textContent = SchoolData.students.length + ' inscrits';
}

function renderTeachers() {
  const grid = document.querySelector('.teachers-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  SchoolData.teachers.forEach(t => {
    const card = document.createElement('div');
    card.className = 'teacher-card';
    card.onclick = () => showToast(`Fiche ${t.prenom} ${t.nom}`, 'info');
    const initials = (t.prenom.charAt(0) + t.nom.charAt(0)).toUpperCase();
    card.innerHTML = `
      <div class="teacher-avatar">${initials}</div>
      <div class="teacher-info">
        <h4>${t.prenom} ${t.nom}</h4>
        <div class="teacher-subject">${t.matiere}</div>
        <div class="teacher-contact"><i class="far fa-envelope"></i> ${t.email}</div>
      </div>
    `;
    grid.appendChild(card);
  });
  
  // Mettre à jour le compteur
  const titleSpan = document.querySelector('#page-title span');
  if (titleSpan) titleSpan.textContent = SchoolData.teachers.length + ' actifs';
}

function renderClasses() {
  const grid = document.querySelector('.classes-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  SchoolData.classes.forEach(c => {
    const card = document.createElement('div');
    card.className = 'class-card';
    card.onclick = () => showToast(`Détails ${c.name}`, 'info');
    const students = getStudentsByClass(c.name);
    card.innerHTML = `
      <h4>${c.name}</h4>
      <div class="class-stats">
        <span><strong>${students.length}</strong> élèves</span>
        <span><strong>1</strong> prof principal</span>
      </div>
      <span class="badge green">${c.room}</span>
      <div style="margin-top:12px;font-size:12px;color:var(--text-muted)">Professeur : ${c.teacher || 'Non assigné'}</div>
    `;
    grid.appendChild(card);
  });
  
  // Mettre à jour le compteur
  const titleSpan = document.querySelector('#page-title span');
  if (titleSpan) titleSpan.textContent = SchoolData.classes.length + ' ouvertes';
}

function renderMatieres() {
  const list = document.querySelector('.matieres-list');
  if (!list) return;
  
  list.innerHTML = '';
  SchoolData.matieres.forEach(m => {
    const item = document.createElement('div');
    item.className = 'matiere-item';
    item.onclick = () => showToast(`Détails ${m.nom}`, 'info');
    const nbClasses = m.classes.length;
    const teacher = m.professeur || 'Non assigné';
    item.innerHTML = `
      <div>
        <strong>${m.nom}</strong>
        <div style="font-size:12px;color:var(--text-muted);margin-top:4px;">
          Coefficient ${m.coefficient} · Professeur : ${teacher}
        </div>
      </div>
      <span class="badge blue">${nbClasses} classe${nbClasses > 1 ? 's' : ''}</span>
    `;
    list.appendChild(item);
  });
}

function renderDashboard() {
  // Mettre à jour les stats
  const statValues = document.querySelectorAll('.stat-value');
  if (statValues.length >= 4) {
    statValues[0].textContent = getTotalStudents();
    statValues[1].textContent = getTotalTeachers();
    statValues[2].textContent = getTotalClasses();
    statValues[3].textContent = getTotalUnpaid();
  }
  
  // Mettre à jour l'occupation des classes
  const progItems = document.querySelectorAll('.prog-item');
  SchoolData.classes.forEach((c, index) => {
    if (index < progItems.length) {
      const students = getStudentsByClass(c.name);
      const pct = Math.round((students.length / (c.capacity || 35)) * 100);
      const progFill = progItems[index].querySelector('.prog-fill');
      const progVal = progItems[index].querySelector('.prog-val');
      if (progFill) {
        progFill.style.width = Math.min(pct, 100) + '%';
        if (pct > 90) progFill.style.background = 'var(--danger)';
        else if (pct > 75) progFill.style.background = 'var(--emerald)';
        else if (pct > 50) progFill.style.background = 'var(--info)';
        else progFill.style.background = 'var(--gold)';
      }
      if (progVal) progVal.textContent = `${students.length} / ${c.capacity || 35}`;
    }
  });
  
  // Mettre à jour les paiements
  const totalCollected = getTotalCollected();
  const totalPending = getTotalPending();
  const finValues = document.querySelectorAll('.fin-value');
  if (finValues.length >= 2) {
    finValues[0].textContent = totalCollected.toLocaleString() + ' HTG';
    finValues[1].textContent = totalPending.toLocaleString() + ' HTG';
  }
}

function renderFinance() {
  const tbody = document.querySelector('.finance-table tbody');
  if (!tbody) return;
  
  tbody.innerHTML = '';
  SchoolData.students.forEach(s => {
    const totalPaid = SchoolData.paiements
      .filter(p => p.eleveId === s.id)
      .reduce((sum, p) => sum + p.montant, 0);
    const remaining = Math.max(0, 2500 - totalPaid);
    const status = totalPaid >= 2500 ? 'Payé' : (totalPaid > 0 ? 'Partiel' : 'Impayé');
    const statusClass = status === 'Payé' ? 'green' : (status === 'Partiel' ? 'yellow' : 'red');
    
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><div class="td-user"><div class="td-avatar a">${(s.prenom.charAt(0) + s.nom.charAt(0)).toUpperCase()}</div><div class="td-name">${s.prenom} ${s.nom}</div></div></td>
      <td>${s.classe}</td>
      <td>2,500 HTG</td>
      <td class="${status === 'Payé' ? 'green' : status === 'Partiel' ? 'warning' : 'danger'}">${totalPaid.toLocaleString()} HTG</td>
      <td class="${remaining > 0 ? 'danger' : 'green'}">${remaining.toLocaleString()} HTG</td>
      <td><span class="badge ${statusClass}">${status}</span></td>
      <td><button class="btn btn-primary" style="padding:4px 10px" onclick="openPaymentModal(${s.id})"><i class="fas fa-money-bill"></i> Encaisser</button></td>
    `;
    tbody.appendChild(row);
  });
  
  // Mettre à jour les stats
  const statValues = document.querySelectorAll('.stat-card .stat-value');
  if (statValues.length >= 3) {
    statValues[0].textContent = getTotalCollected().toLocaleString();
    statValues[1].textContent = getTotalPending().toLocaleString();
    const rate = Math.round((getTotalCollected() / (getTotalCollected() + getTotalPending())) * 100) || 0;
    statValues[2].textContent = rate + '%';
  }
}

function renderAbsences() {
  const tbody = document.querySelector('#absencesTable tbody');
  if (!tbody) return;
  
  const date = document.querySelector('#absenceDate')?.value || new Date().toISOString().split('T')[0];
  const classe = document.querySelector('#absenceClasse')?.value || '5e Année A';
  
  tbody.innerHTML = '';
  const students = getStudentsByClass(classe);
  students.forEach(s => {
    const present = SchoolData.presences[date]?.[classe]?.[s.id] ?? true;
    const absences = getAbsenceCount(s.id);
    const initials = (s.prenom.charAt(0) + s.nom.charAt(0)).toUpperCase();
    
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><div class="td-user"><div class="td-avatar a">${initials}</div><div class="td-name">${s.prenom} ${s.nom}</div></div></td>
      <td>
        <label style="display:flex;align-items:center;gap:8px">
          <input type="checkbox" class="attendance-check" ${present ? 'checked' : ''} onchange="toggleAttendance(this, ${s.id}, '${classe}')">
          <span class="badge ${present ? 'green' : 'red'}">${present ? 'Présent(e)' : 'Absent(e)'}</span>
        </label>
      </td>
      <td>${present ? '—' : '<input class="filter-input" style="min-width:140px;padding:5px 10px" placeholder="Raison...">'}</td>
      <td>${present ? '—' : '<select class="filter-select" style="padding:5px 10px"><option>Non justifiée</option><option>Justifiée</option></select>'}</td>
      <td><span class="badge ${absences > 3 ? 'red' : absences > 1 ? 'yellow' : 'green'}">${absences} absence${absences > 1 ? 's' : ''}</span></td>
    `;
    tbody.appendChild(row);
  });
}

// ==================== GESTION DES MODALS ====================

function openPaymentModal(eleveId) {
  const student = getStudentById(eleveId);
  if (!student) return;
  
  const modal = document.getElementById('paymentModal');
  if (!modal) return;
  
  document.getElementById('paymentStudentName').textContent = `${student.prenom} ${student.nom}`;
  document.getElementById('paymentStudentClasse').textContent = student.classe;
  document.getElementById('paymentEleveId').value = eleveId;
  document.getElementById('paymentAmount').value = 2500;
  
  modal.classList.add('active');
}

function closePaymentModal() {
  const modal = document.getElementById('paymentModal');
  if (modal) modal.classList.remove('active');
}

function processPayment() {
  const eleveId = parseInt(document.getElementById('paymentEleveId').value);
  const amount = parseInt(document.getElementById('paymentAmount').value);
  const date = document.getElementById('paymentDate').value || new Date().toISOString().split('T')[0];
  
  if (amount <= 0) {
    showToast('Montant invalide', 'error');
    return;
  }
  
  addPaiement(eleveId, amount, date);
  showToast(`Paiement de ${amount.toLocaleString()} HTG enregistré`, 'success');
  closePaymentModal();
  renderFinance();
  renderDashboard();
}

// ==================== IMPRESSION DE LA FICHE ÉLÈVE ====================

let printWindowInstance = null;

function imprimerFiche() {
    // Fermer la fenêtre précédente si elle existe
    if (printWindowInstance && !printWindowInstance.closed) {
        printWindowInstance.close();
        printWindowInstance = null;
    }

    // Récupérer le contenu de la fiche
    const ficheContent = document.querySelector('.fiche-content');
    if (!ficheContent) {
        showToast('Erreur : contenu de la fiche introuvable', 'error');
        return;
    }

    // Récupérer toutes les données de la fiche
    const ficheHTML = ficheContent.outerHTML;
    
    // Fermer le modal avant d'imprimer
    closeFicheModal();

    // Créer une nouvelle fenêtre pour l'impression
    printWindowInstance = window.open('', '_blank', 'width=900,height=700');
    if (!printWindowInstance) {
        showToast('Veuillez autoriser les pop-ups pour imprimer', 'error');
        return;
    }

    // Style complet pour l'impression
    const styles = `
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { 
            font-family: 'Inter', sans-serif; 
            padding: 30px; 
            background: #f0f4f8;
            color: #0f172a;
        }
        .fiche-content {
            max-width: 900px;
            margin: 0 auto;
            background: white;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .fiche-header {
            background: linear-gradient(135deg, #0a1628, #0f2044);
            color: white;
            padding: 35px 30px;
            display: flex;
            align-items: center;
            gap: 25px;
        }
        .fiche-avatar {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            background: linear-gradient(135deg, #10b981, #059669);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 36px;
            font-weight: 700;
            color: white;
            flex-shrink: 0;
            box-shadow: 0 4px 15px rgba(16,185,129,0.3);
        }
        .fiche-titre h2 { 
            font-size: 24px; 
            margin-bottom: 6px; 
            font-weight: 700;
        }
        .fiche-titre p { 
            font-size: 14px; 
            color: rgba(255,255,255,0.7); 
        }
        .fiche-body { padding: 30px; }
        .fiche-section { 
            margin-bottom: 30px; 
            border-bottom: 1px solid #e2e8f0; 
            padding-bottom: 24px; 
        }
        .fiche-section:last-child { 
            border-bottom: none; 
            margin-bottom: 0; 
            padding-bottom: 0; 
        }
        .fiche-section h3 {
            font-size: 17px;
            font-weight: 700;
            color: #0a1628;
            margin-bottom: 18px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .fiche-section h3 i { color: #10b981; font-size: 18px; }
        .fiche-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px 30px;
        }
        .fiche-item {
            display: flex;
            flex-direction: column;
            gap: 3px;
        }
        .fiche-item label {
            font-size: 11px;
            font-weight: 600;
            color: #94a3b8;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .fiche-item span {
            font-size: 15px;
            font-weight: 500;
            color: #1e293b;
        }
        .badge {
            display: inline-block;
            padding: 2px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
        }
        .badge.green { background: #ecfdf5; color: #059669; }
        .badge.yellow { background: #fefce8; color: #ca8a04; }
        .badge.red { background: #fef2f2; color: #dc2626; }
        .fiche-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
            margin-top: 10px;
        }
        .fiche-table th {
            background: #f1f5f9;
            padding: 12px 14px;
            text-align: left;
            font-weight: 600;
            color: #475569;
            border-bottom: 2px solid #e2e8f0;
        }
        .fiche-table td {
            padding: 11px 14px;
            border-bottom: 1px solid #f1f5f9;
        }
        .fiche-table .good { color: #10b981; font-weight: 600; }
        .fiche-table .avg { color: #f59e0b; font-weight: 600; }
        .fiche-table .bad { color: #ef4444; font-weight: 600; }
        .fiche-actions { display: none; }
        .close-modal { display: none; }
        @media print {
            body { padding: 0; background: white; }
            .fiche-content { box-shadow: none; border-radius: 0; }
        }
        @media (max-width: 600px) {
            .fiche-grid { grid-template-columns: 1fr; }
            .fiche-header { flex-direction: column; text-align: center; }
        }
    `;

    printWindowInstance.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Fiche Élève - SchoolPro</title>
            <meta charset="UTF-8">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
            <style>${styles}</style>
        </head>
        <body>
            ${ficheHTML}
        </body>
        </html>
    `);

    printWindowInstance.document.close();

    // Attendre que la page soit chargée puis lancer l'impression
    printWindowInstance.onload = function() {
        setTimeout(function() {
            printWindowInstance.print();
            printWindowInstance.onafterprint = function() {
                printWindowInstance.close();
                printWindowInstance = null;
            };
        }, 800);
    };
}

// ==================== FICHE ÉLÈVE ====================

function openFicheModal(eleveId) {
  const student = getStudentById(eleveId);
  if (!student) return;
  
  // Ajouter l'ID de l'élève dans le dataset du conteneur
  const ficheContent = document.querySelector('.fiche-content');
  if (ficheContent) {
    ficheContent.dataset.eleveId = eleveId;
  }
  
  const avatarEl = document.getElementById('ficheAvatar');
  if (avatarEl) avatarEl.textContent = (student.prenom.charAt(0) + student.nom.charAt(0)).toUpperCase();
  
  document.getElementById('ficheNomComplet').textContent = `${student.prenom} ${student.nom}`;
  document.getElementById('ficheEmail').textContent = student.email;
  document.getElementById('fichePrenom').textContent = student.prenom;
  document.getElementById('ficheNom').textContent = student.nom;
  document.getElementById('ficheDateNaiss').textContent = student.dateNaissance || 'Non renseignée';
  document.getElementById('ficheGenre').textContent = student.genre || 'Non renseigné';
  document.getElementById('ficheMatricule').textContent = student.matricule;
  document.getElementById('ficheClasse').textContent = student.classe;
  document.getElementById('ficheTuteur').textContent = student.tuteur;
  document.getElementById('ficheTelephone').textContent = student.telephone;
  document.getElementById('ficheEmailTuteur').textContent = student.emailTuteur || 'Non renseigné';
  document.getElementById('ficheAdresse').textContent = student.adresse || 'Non renseignée';
  
  const statutSpan = document.getElementById('ficheStatut');
  if (statutSpan) {
    statutSpan.textContent = student.statut;
    statutSpan.className = 'badge ' + (student.statut === 'Actif' ? 'green' : 'yellow');
  }
  
  const paiementSpan = document.getElementById('fichePaiement');
  if (paiementSpan) {
    paiementSpan.textContent = student.paiement;
    paiementSpan.className = 'badge ' + (student.paiement === 'Payé' ? 'green' : student.paiement === 'Partiel' ? 'yellow' : 'red');
  }
  
  const moyenne = getMoyenneByEleve(eleveId, student.classe);
  document.getElementById('ficheMoyenne').textContent = moyenne + '/100';
  document.getElementById('ficheRang').textContent = '3ème';
  
  // Afficher les notes
  const notesList = document.getElementById('ficheNotesList');
  if (notesList) {
    notesList.innerHTML = '';
    const classNotes = SchoolData.notes[student.classe];
    if (classNotes) {
      for (const matiere in classNotes) {
        const note = classNotes[matiere].find(n => n.eleveId === eleveId);
        if (note) {
          const moy = calculateMoyenne(note);
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${matiere}</td>
            <td>${note.interro1}</td>
            <td>${note.interro2}</td>
            <td>${note.examen}</td>
            <td class="${moy >= 75 ? 'good' : moy >= 60 ? 'avg' : 'bad'}">${moy}/100</td>
          `;
          notesList.appendChild(row);
        }
      }
    }
  }
  
  const modal = document.getElementById('ficheModal');
  if (modal) modal.classList.add('active');
}

function closeFicheModal() {
  const modal = document.getElementById('ficheModal');
  if (modal) modal.classList.remove('active');
}

// ==================== PAGE NOTES ====================

let currentClasse = '5e Année A';
let currentMatiere = 'Mathematiques';
let currentTrimestre = 1;

function selectClasse(element, className) {
  document.querySelectorAll('.classe-item').forEach(item => item.classList.remove('active'));
  element.classList.add('active');
  currentClasse = className;
  const titleEl = document.getElementById('classeTitle');
  if (titleEl) titleEl.innerText = currentClasse + ' — Notes par matière';
  loadNotesTable();
  showToast('Classe sélectionnée - ' + className, 'info');
}

function changeMatiere() {
  const matiereSelect = document.getElementById('matiereSelect');
  if (matiereSelect) {
    currentMatiere = matiereSelect.value;
    loadNotesTable();
  }
}

function changeTrimestre() {
  const trimestreSelect = document.getElementById('trimestreSelect');
  if (trimestreSelect) {
    currentTrimestre = parseInt(trimestreSelect.value);
    showToast('Trimestre ' + currentTrimestre + ' sélectionné', 'info');
    loadNotesTable();
  }
}

function loadNotesTable() {
  const tbody = document.getElementById('notesTableBody');
  if (!tbody) return;
  
  if (!currentMatiere) {
    tbody.innerHTML = '<tr><td colspan="5"><div class="empty-state"><i class="fas fa-book-open"></i><h3>Aucune matière sélectionnée</h3><p>Veuillez sélectionner une matière dans le menu déroulant</p></div></td></tr>';
    return;
  }
  
  const students = getStudentsByClass(currentClasse);
  if (students.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5"><div class="empty-state"><i class="fas fa-users"></i><h3>Aucun élève</h3><p>Cette classe ne contient pas encore d\'élèves</p></div></td></tr>';
    return;
  }
  
  let html = '';
  students.forEach(s => {
    const notes = getStudentNotes(s.id, currentClasse, currentMatiere);
    const n1 = notes?.interro1 || 0;
    const n2 = notes?.interro2 || 0;
    const n3 = notes?.examen || 0;
    const moyenne = Math.round((n1 + n2 + n3) / 3);
    const moyenneClass = moyenne >= 75 ? 'good' : (moyenne >= 60 ? 'avg' : 'bad');
    const initials = (s.prenom.charAt(0) + s.nom.charAt(0)).toUpperCase();
    
    html += `
      <tr>
        <td><div class="td-user"><div class="td-avatar">${initials}</div><div class="td-name">${s.prenom} ${s.nom}</div></div></td>
        <td><input class="input-note" type="number" value="${n1}" data-eleve="${s.id}" data-type="interro1" onchange="updateNoteValue(this)"></td>
        <td><input class="input-note" type="number" value="${n2}" data-eleve="${s.id}" data-type="interro2" onchange="updateNoteValue(this)"></td>
        <td><input class="input-note" type="number" value="${n3}" data-eleve="${s.id}" data-type="examen" onchange="updateNoteValue(this)"></td>
        <td class="note-cell ${moyenneClass}">${moyenne}/100</td>
      </tr>
    `;
  });
  
  tbody.innerHTML = html;
}

function updateNoteValue(input) {
  const eleveId = parseInt(input.dataset.eleve);
  const noteType = input.dataset.type;
  const value = parseInt(input.value) || 0;
  
  updateStudentNote(eleveId, currentClasse, currentMatiere, noteType, value);
  
  const row = input.closest('tr');
  const inputs = row.querySelectorAll('.input-note');
  const moyCell = row.querySelector('.note-cell');
  
  if (inputs.length === 3 && moyCell) {
    let sum = 0;
    inputs.forEach(inp => sum += parseInt(inp.value) || 0);
    const moy = Math.round(sum / 3);
    moyCell.innerText = moy + '/100';
    moyCell.className = 'note-cell ' + (moy >= 75 ? 'good' : moy >= 60 ? 'avg' : 'bad');
  }
}

function saveNotes() {
  if (!currentMatiere) {
    showToast('Veuillez sélectionner une matière', 'error');
    return;
  }
  showToast(`Notes enregistrées pour ${currentClasse} - ${currentMatiere} (Trimestre ${currentTrimestre})`, 'success');
}

function initNotesPage() {
  const matiereSelect = document.getElementById('matiereSelect');
  if (matiereSelect) {
    matiereSelect.value = currentMatiere || 'Mathematiques';
  }
  setTimeout(loadNotesTable, 100);
}

// ==================== PRÉSENCES ====================

function toggleAttendance(checkbox, eleveId, classe) {
  const date = document.querySelector('#absenceDate')?.value || new Date().toISOString().split('T')[0];
  togglePresence(eleveId, classe, date, checkbox.checked);
  
  const badge = checkbox.closest('td').querySelector('.badge');
  if (checkbox.checked) {
    badge.className = 'badge green';
    badge.innerText = 'Présent(e)';
    showToast('Présence marquée', 'success');
  } else {
    badge.className = 'badge red';
    badge.innerText = 'Absent(e)';
    showToast('Absence marquée', 'warning');
  }
}

function saveAttendance() {
  showToast('Appel enregistré!', 'success');
}

// ==================== FILTRES ====================

function filterEleves() {
  const search = document.getElementById('searchEleve')?.value.toLowerCase() || '';
  const classe = document.getElementById('classeFilter')?.value || '';
  const rows = document.querySelectorAll('#elevesTable tbody tr');
  rows.forEach(row => {
    const nom = row.querySelector('.td-name')?.innerText.toLowerCase() || '';
    const classeRow = row.cells[2]?.innerText || '';
    row.style.display = (!search || nom.includes(search)) && (!classe || classeRow === classe) ? '' : 'none';
  });
}

// ==================== TOAST ====================

function showToast(msg, type = 'success') {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (toast && toastMsg) {
    toastMsg.innerText = msg;
    toast.className = 'toast ' + type;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
  }
}

function showNotifications() {
  notifCount++;
  showToast(`${notifCount} notification(s) non lue(s)`, 'info');
  const notifDot = document.querySelector('.notif-dot');
  if (notifDot) notifDot.style.display = notifCount > 0 ? 'block' : 'none';
}

// ==================== AFFICHAGE DES PAGES ====================

function showPage(id, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById(`page-${id}`).classList.add('active');
  if (btn) btn.classList.add('active');
  
  const title = titles[id];
  document.getElementById('page-title').innerHTML = title[0] + ' <span>' + title[1] + '</span>';
  window.scrollTo(0, 0);
  loadPage(id);
}

// ==================== GESTION MODAL GÉNÉRIQUE ====================

function openModal(title, action) {
  currentModalAction = action;
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  if (!modal || !modalTitle || !modalBody) return;
  
  modalTitle.innerText = title;
  modalBody.innerHTML = '<input type="text" placeholder="Information...">';
  modal.classList.add('active');
}

function closeModal() {
  const modal = document.getElementById('modal');
  if (modal) modal.classList.remove('active');
}

function confirmModal() {
  showToast(`${currentModalAction} - Opération effectuée avec succès!`, 'success');
  closeModal();
}

// ==================== MODAL ÉLÈVES ====================

let currentStudentStep = 1;
const totalStudentSteps = 3;

function openStudentModal() {
  const modal = document.getElementById('studentModal');
  if (modal) {
    modal.classList.add('active');
    currentStudentStep = 1;
    updateStudentModalSteps();
    clearStudentValidationErrors();
    resetStudentForm();
  }
}

function closeStudentModal() {
  const modal = document.getElementById('studentModal');
  if (modal) modal.classList.remove('active');
}

function clearStudentValidationErrors() {
  document.querySelectorAll('#studentModal input, #studentModal select').forEach(f => {
    f.style.borderColor = '';
    f.style.backgroundColor = '';
  });
}

function resetStudentForm() {
  ['prenom', 'nom', 'email', 'matricule', 'tuteur', 'tel_tuteur', 'dateNaissance', 'email_tuteur', 'adresse'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  ['classe', 'genre'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const photoPreview = document.getElementById('photoPreview');
  if (photoPreview) photoPreview.innerHTML = '<i class="fas fa-user"></i>';
  const photoInput = document.getElementById('photo');
  if (photoInput) photoInput.value = '';
  currentStudentStep = 1;
  updateStudentModalSteps();
  clearStudentValidationErrors();
}

function updateStudentModalSteps() {
  for (let i = 1; i <= totalStudentSteps; i++) {
    const content = document.getElementById(`step${i}`);
    const indicator = document.getElementById(`step${i}Indicator`);
    if (content && indicator) {
      content.classList.toggle('active', i === currentStudentStep);
      indicator.classList.toggle('active', i === currentStudentStep);
      indicator.classList.toggle('completed', i < currentStudentStep);
    }
  }
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const submitBtn = document.getElementById('submitBtn');
  if (prevBtn) prevBtn.style.display = currentStudentStep === 1 ? 'none' : 'inline-flex';
  if (nextBtn && submitBtn) {
    if (currentStudentStep === totalStudentSteps) {
      nextBtn.style.display = 'none';
      submitBtn.style.display = 'inline-flex';
    } else {
      nextBtn.style.display = 'inline-flex';
      submitBtn.style.display = 'none';
    }
  }
}

function validateStudentStep(step) {
  clearStudentValidationErrors();
  
  if (step === 1) {
    const prenom = document.getElementById('prenom')?.value.trim();
    const nom = document.getElementById('nom')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    
    if (!prenom) { showToast('Le prénom est requis', 'error'); document.getElementById('prenom').style.borderColor = '#ef4444'; return false; }
    if (!nom) { showToast('Le nom est requis', 'error'); document.getElementById('nom').style.borderColor = '#ef4444'; return false; }
    if (!email) { showToast('L\'email est requis', 'error'); document.getElementById('email').style.borderColor = '#ef4444'; return false; }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) { showToast('Email invalide', 'error'); document.getElementById('email').style.borderColor = '#ef4444'; return false; }
  } else if (step === 2) {
    const matricule = document.getElementById('matricule')?.value.trim();
    const classe = document.getElementById('classe')?.value;
    if (!matricule) { showToast('Le matricule est requis', 'error'); document.getElementById('matricule').style.borderColor = '#ef4444'; return false; }
    if (!classe) { showToast('La classe est requise', 'error'); document.getElementById('classe').style.borderColor = '#ef4444'; return false; }
  } else if (step === 3) {
    const tuteur = document.getElementById('tuteur')?.value.trim();
    const telephone = document.getElementById('tel_tuteur')?.value.trim();
    if (!tuteur) { showToast('Le nom du tuteur est requis', 'error'); document.getElementById('tuteur').style.borderColor = '#ef4444'; return false; }
    if (!telephone) { showToast('Le téléphone est requis', 'error'); document.getElementById('tel_tuteur').style.borderColor = '#ef4444'; return false; }
  }
  return true;
}

function nextStep() {
  if (validateStudentStep(currentStudentStep) && currentStudentStep < totalStudentSteps) {
    currentStudentStep++;
    updateStudentModalSteps();
  }
}

function prevStep() {
  if (currentStudentStep > 1) {
    currentStudentStep--;
    updateStudentModalSteps();
  }
}

function previewPhoto(input) {
  const preview = document.getElementById('photoPreview');
  if (preview && input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      preview.innerHTML = `<img src="${e.target.result}" style="width:100%;height:100%;object-fit:cover;">`;
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function submitStudentForm() {
  if (validateStudentStep(3)) {
    const student = {
      prenom: document.getElementById('prenom')?.value,
      nom: document.getElementById('nom')?.value,
      email: document.getElementById('email')?.value,
      matricule: document.getElementById('matricule')?.value,
      classe: document.getElementById('classe')?.value,
      tuteur: document.getElementById('tuteur')?.value,
      telephone: document.getElementById('tel_tuteur')?.value,
      dateNaissance: document.getElementById('dateNaissance')?.value || '',
      genre: document.getElementById('genre')?.value || '',
      emailTuteur: document.getElementById('email_tuteur')?.value || '',
      adresse: document.getElementById('adresse')?.value || '',
      statut: 'Actif',
      paiement: 'En cours'
    };
    
    const newStudent = addStudent(student);
    showToast(`Élève ${student.prenom} ${student.nom} inscrit avec succès!`, 'success');
    closeStudentModal();
    renderStudents();
    renderDashboard();
  }
}

function cancelStudentForm() {
  if (confirm('Annuler l\'inscription ?')) {
    closeStudentModal();
  }
}

function addStudentRealtimeValidation() {
  ['prenom', 'nom', 'email', 'matricule', 'classe', 'tuteur', 'tel_tuteur'].forEach(id => {
    const field = document.getElementById(id);
    if (field) {
      field.addEventListener('input', function() {
        this.style.borderColor = '';
        this.style.backgroundColor = '';
      });
    }
  });
}

function initStudentModalEvents() {
  const modal = document.getElementById('studentModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === this) closeStudentModal();
    });
  }
}

// ==================== MODAL ENSEIGNANTS ====================

let currentTeacherStep = 1;
const totalTeacherSteps = 2;

function openTeacherModal() {
  const modal = document.getElementById('teacherModal');
  if (modal) {
    modal.classList.add('active');
    currentTeacherStep = 1;
    updateTeacherModalSteps();
    clearTeacherValidationErrors();
    resetTeacherForm();
  }
}

function closeTeacherModal() {
  const modal = document.getElementById('teacherModal');
  if (modal) modal.classList.remove('active');
}

function clearTeacherValidationErrors() {
  document.querySelectorAll('#teacherModal input, #teacherModal select').forEach(f => {
    f.style.borderColor = '';
    f.style.backgroundColor = '';
  });
}

function resetTeacherForm() {
  ['teacherPrenom', 'teacherNom', 'teacherEmail', 'teacherTel', 'teacherMatiere', 'teacherDateEmbauche', 'teacherDiplome', 'teacherAdresse', 'teacherSpecialites', 'teacherLangues'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const statutSelect = document.getElementById('teacherStatut');
  if (statutSelect) statutSelect.value = 'Permanent';
  const photoPreview = document.getElementById('teacherPhotoPreview');
  if (photoPreview) photoPreview.innerHTML = '<i class="fas fa-user"></i>';
  const photoInput = document.getElementById('teacherPhoto');
  if (photoInput) photoInput.value = '';
  currentTeacherStep = 1;
  updateTeacherModalSteps();
  clearTeacherValidationErrors();
}

function updateTeacherModalSteps() {
  for (let i = 1; i <= totalTeacherSteps; i++) {
    const content = document.getElementById(`teacherStep${i}`);
    const indicator = document.getElementById(`teacherStep${i}Indicator`);
    if (content && indicator) {
      content.classList.toggle('active', i === currentTeacherStep);
      indicator.classList.toggle('active', i === currentTeacherStep);
      indicator.classList.toggle('completed', i < currentTeacherStep);
    }
  }
  const prevBtn = document.getElementById('teacherPrevBtn');
  const nextBtn = document.getElementById('teacherNextBtn');
  const submitBtn = document.getElementById('teacherSubmitBtn');
  if (prevBtn) prevBtn.style.display = currentTeacherStep === 1 ? 'none' : 'inline-flex';
  if (nextBtn && submitBtn) {
    if (currentTeacherStep === totalTeacherSteps) {
      nextBtn.style.display = 'none';
      submitBtn.style.display = 'inline-flex';
    } else {
      nextBtn.style.display = 'inline-flex';
      submitBtn.style.display = 'none';
    }
  }
}

function validateTeacherStep(step) {
  clearTeacherValidationErrors();
  
  if (step === 1) {
    const prenom = document.getElementById('teacherPrenom')?.value.trim();
    const nom = document.getElementById('teacherNom')?.value.trim();
    const email = document.getElementById('teacherEmail')?.value.trim();
    
    if (!prenom) { showToast('Le prénom est requis', 'error'); document.getElementById('teacherPrenom').style.borderColor = '#ef4444'; return false; }
    if (!nom) { showToast('Le nom est requis', 'error'); document.getElementById('teacherNom').style.borderColor = '#ef4444'; return false; }
    if (!email) { showToast('L\'email est requis', 'error'); document.getElementById('teacherEmail').style.borderColor = '#ef4444'; return false; }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) { showToast('Email invalide', 'error'); document.getElementById('teacherEmail').style.borderColor = '#ef4444'; return false; }
  } else if (step === 2) {
    const matiere = document.getElementById('teacherMatiere')?.value.trim();
    if (!matiere) { showToast('La matière enseignée est requise', 'error'); document.getElementById('teacherMatiere').style.borderColor = '#ef4444'; return false; }
  }
  return true;
}

function teacherNextStep() {
  if (validateTeacherStep(currentTeacherStep) && currentTeacherStep < totalTeacherSteps) {
    currentTeacherStep++;
    updateTeacherModalSteps();
  }
}

function teacherPrevStep() {
  if (currentTeacherStep > 1) {
    currentTeacherStep--;
    updateTeacherModalSteps();
  }
}

function previewTeacherPhoto(input) {
  const preview = document.getElementById('teacherPhotoPreview');
  if (preview && input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      preview.innerHTML = `<img src="${e.target.result}" style="width:100%;height:100%;object-fit:cover;">`;
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function submitTeacherForm() {
  if (validateTeacherStep(2)) {
    const teacher = {
      prenom: document.getElementById('teacherPrenom')?.value,
      nom: document.getElementById('teacherNom')?.value,
      email: document.getElementById('teacherEmail')?.value,
      matiere: document.getElementById('teacherMatiere')?.value,
      telephone: document.getElementById('teacherTel')?.value || '',
      dateEmbauche: document.getElementById('teacherDateEmbauche')?.value || '',
      diplome: document.getElementById('teacherDiplome')?.value || '',
      statut: document.getElementById('teacherStatut')?.value || 'Permanent',
      adresse: document.getElementById('teacherAdresse')?.value || '',
      specialites: document.getElementById('teacherSpecialites')?.value || '',
      langues: document.getElementById('teacherLangues')?.value || ''
    };
    
    addTeacher(teacher);
    showToast(`Enseignant ${teacher.prenom} ${teacher.nom} ajouté avec succès!`, 'success');
    closeTeacherModal();
    renderTeachers();
  }
}

function cancelTeacherForm() {
  if (confirm('Annuler l\'inscription ?')) {
    closeTeacherModal();
  }
}

function addTeacherRealtimeValidation() {
  ['teacherPrenom', 'teacherNom', 'teacherEmail', 'teacherMatiere'].forEach(id => {
    const field = document.getElementById(id);
    if (field) {
      field.addEventListener('input', function() {
        this.style.borderColor = '';
        this.style.backgroundColor = '';
      });
    }
  });
}

function initTeacherModalEvents() {
  const modal = document.getElementById('teacherModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === this) closeTeacherModal();
    });
  }
}

// ==================== MODAL CLASSES ====================

let currentClassStep = 1;
const totalClassSteps = 2;

function openClassModal() {
  const modal = document.getElementById('classModal');
  if (modal) {
    modal.classList.add('active');
    currentClassStep = 1;
    updateClassModalSteps();
    clearClassValidationErrors();
    resetClassForm();
  }
}

function closeClassModal() {
  const modal = document.getElementById('classModal');
  if (modal) modal.classList.remove('active');
}

function clearClassValidationErrors() {
  document.querySelectorAll('#classModal input, #classModal select, #classModal textarea').forEach(f => {
    f.style.borderColor = '';
    f.style.backgroundColor = '';
  });
}

function resetClassForm() {
  ['className', 'classRoom', 'classCapacity', 'classSchedule', 'classStudentCount', 'classSubjects', 'classFees', 'classDescription'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const year = document.getElementById('classYear');
  if (year) year.value = '2024-2025';
  const level = document.getElementById('classLevel');
  if (level) level.value = 'Primaire';
  const teacher = document.getElementById('classTeacher');
  if (teacher) teacher.value = '';
  currentClassStep = 1;
  updateClassModalSteps();
  clearClassValidationErrors();
}

function updateClassModalSteps() {
  for (let i = 1; i <= totalClassSteps; i++) {
    const content = document.getElementById(`classStep${i}`);
    const indicator = document.getElementById(`classStep${i}Indicator`);
    if (content && indicator) {
      content.classList.toggle('active', i === currentClassStep);
      indicator.classList.toggle('active', i === currentClassStep);
      indicator.classList.toggle('completed', i < currentClassStep);
    }
  }
  const prevBtn = document.getElementById('classPrevBtn');
  const nextBtn = document.getElementById('classNextBtn');
  const submitBtn = document.getElementById('classSubmitBtn');
  if (prevBtn) prevBtn.style.display = currentClassStep === 1 ? 'none' : 'inline-flex';
  if (nextBtn && submitBtn) {
    if (currentClassStep === totalClassSteps) {
      nextBtn.style.display = 'none';
      submitBtn.style.display = 'inline-flex';
    } else {
      nextBtn.style.display = 'inline-flex';
      submitBtn.style.display = 'none';
    }
  }
}

function validateClassStep(step) {
  clearClassValidationErrors();
  
  if (step === 1) {
    const className = document.getElementById('className')?.value.trim();
    const classRoom = document.getElementById('classRoom')?.value.trim();
    if (!className) { showToast('Le nom de la classe est requis', 'error'); document.getElementById('className').style.borderColor = '#ef4444'; return false; }
    if (!classRoom) { showToast('La salle est requise', 'error'); document.getElementById('classRoom').style.borderColor = '#ef4444'; return false; }
  }
  return true;
}

function classNextStep() {
  if (validateClassStep(currentClassStep) && currentClassStep < totalClassSteps) {
    currentClassStep++;
    updateClassModalSteps();
  }
}

function classPrevStep() {
  if (currentClassStep > 1) {
    currentClassStep--;
    updateClassModalSteps();
  }
}

function submitClassForm() {
  if (validateClassStep(2)) {
    const newClass = {
      name: document.getElementById('className')?.value,
      room: document.getElementById('classRoom')?.value,
      year: document.getElementById('classYear')?.value,
      level: document.getElementById('classLevel')?.value,
      capacity: parseInt(document.getElementById('classCapacity')?.value) || 35,
      schedule: document.getElementById('classSchedule')?.value || '',
      teacher: document.getElementById('classTeacher')?.value || '',
      studentCount: parseInt(document.getElementById('classStudentCount')?.value) || 0,
      subjects: document.getElementById('classSubjects')?.value || '',
      fees: document.getElementById('classFees')?.value || ''
    };
    
    addClass(newClass);
    showToast(`Classe ${newClass.name} ajoutée avec succès!`, 'success');
    closeClassModal();
    renderClasses();
    renderDashboard();
    renderClassesInNotes();
  }
}

function cancelClassForm() {
  if (confirm('Annuler l\'ajout de classe ?')) {
    closeClassModal();
  }
}

function addClassRealtimeValidation() {
  ['className', 'classRoom'].forEach(id => {
    const field = document.getElementById(id);
    if (field) {
      field.addEventListener('input', function() {
        this.style.borderColor = '';
        this.style.backgroundColor = '';
      });
    }
  });
}

document.getElementById('classModal')?.addEventListener('click', function(e) {
  if (e.target === this) closeClassModal();
});

addClassRealtimeValidation();

// ==================== MODAL MATIERES ====================

let currentMatiereStep = 1;
const totalMatiereSteps = 2;

function openMatiereModal() {
  const modal = document.getElementById('matiereModal');
  if (modal) {
    modal.classList.add('active');
    currentMatiereStep = 1;
    updateMatiereModalSteps();
    clearMatiereValidationErrors();
    resetMatiereForm();
  }
}

function closeMatiereModal() {
  const modal = document.getElementById('matiereModal');
  if (modal) modal.classList.remove('active');
}

function clearMatiereValidationErrors() {
  document.querySelectorAll('#matiereModal input, #matiereModal select, #matiereModal textarea').forEach(f => {
    f.style.borderColor = '';
    f.style.backgroundColor = '';
  });
}

function resetMatiereForm() {
  ['matiereNom', 'matiereCoefficient', 'matiereVolume', 'matiereDescription'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const couleur = document.getElementById('matiereCouleur');
  if (couleur) couleur.value = 'blue';
  const professeur = document.getElementById('matiereProfesseur');
  if (professeur) professeur.value = '';
  const type = document.getElementById('matiereType');
  if (type) type.value = 'Fondamentale';
  const difficulte = document.getElementById('matiereDifficulte');
  if (difficulte) difficulte.value = 'Moyen';
  const classes = document.getElementById('matiereClasses');
  if (classes) {
    for (let i = 0; i < classes.options.length; i++) {
      classes.options[i].selected = false;
    }
  }
  currentMatiereStep = 1;
  updateMatiereModalSteps();
  clearMatiereValidationErrors();
}

function updateMatiereModalSteps() {
  for (let i = 1; i <= totalMatiereSteps; i++) {
    const content = document.getElementById(`matiereStep${i}`);
    const indicator = document.getElementById(`matiereStep${i}Indicator`);
    if (content && indicator) {
      content.classList.toggle('active', i === currentMatiereStep);
      indicator.classList.toggle('active', i === currentMatiereStep);
      indicator.classList.toggle('completed', i < currentMatiereStep);
    }
  }
  const prevBtn = document.getElementById('matierePrevBtn');
  const nextBtn = document.getElementById('matiereNextBtn');
  const submitBtn = document.getElementById('matiereSubmitBtn');
  if (prevBtn) prevBtn.style.display = currentMatiereStep === 1 ? 'none' : 'inline-flex';
  if (nextBtn && submitBtn) {
    if (currentMatiereStep === totalMatiereSteps) {
      nextBtn.style.display = 'none';
      submitBtn.style.display = 'inline-flex';
    } else {
      nextBtn.style.display = 'inline-flex';
      submitBtn.style.display = 'none';
    }
  }
}

function validateMatiereStep(step) {
  clearMatiereValidationErrors();
  
  if (step === 1) {
    const nom = document.getElementById('matiereNom')?.value.trim();
    const coefficient = document.getElementById('matiereCoefficient')?.value.trim();
    if (!nom) { showToast('Le nom de la matière est requis', 'error'); document.getElementById('matiereNom').style.borderColor = '#ef4444'; return false; }
    if (!coefficient) { showToast('Le coefficient est requis', 'error'); document.getElementById('matiereCoefficient').style.borderColor = '#ef4444'; return false; }
  }
  return true;
}

function matiereNextStep() {
  if (validateMatiereStep(currentMatiereStep) && currentMatiereStep < totalMatiereSteps) {
    currentMatiereStep++;
    updateMatiereModalSteps();
  }
}

function matierePrevStep() {
  if (currentMatiereStep > 1) {
    currentMatiereStep--;
    updateMatiereModalSteps();
  }
}

function submitMatiereForm() {
  if (validateMatiereStep(2)) {
    const classesSelect = document.getElementById('matiereClasses');
    const selectedClasses = [];
    for (let i = 0; i < classesSelect.options.length; i++) {
      if (classesSelect.options[i].selected) {
        selectedClasses.push(classesSelect.options[i].value);
      }
    }
    
    const matiere = {
      nom: document.getElementById('matiereNom')?.value,
      coefficient: parseInt(document.getElementById('matiereCoefficient')?.value) || 1,
      couleur: document.getElementById('matiereCouleur')?.value || 'blue',
      volume: document.getElementById('matiereVolume')?.value || '',
      description: document.getElementById('matiereDescription')?.value || '',
      professeur: document.getElementById('matiereProfesseur')?.value || '',
      type: document.getElementById('matiereType')?.value || 'Fondamentale',
      difficulte: document.getElementById('matiereDifficulte')?.value || 'Moyen',
      classes: selectedClasses
    };
    
    addMatiere(matiere);
    showToast(`Matière ${matiere.nom} ajoutée avec succès!`, 'success');
    closeMatiereModal();
    renderMatieres();
  }
}

function cancelMatiereForm() {
  if (confirm('Annuler l\'ajout de matière ?')) {
    closeMatiereModal();
  }
}

function addMatiereRealtimeValidation() {
  ['matiereNom', 'matiereCoefficient'].forEach(id => {
    const field = document.getElementById(id);
    if (field) {
      field.addEventListener('input', function() {
        this.style.borderColor = '';
        this.style.backgroundColor = '';
      });
    }
  });
}

document.getElementById('matiereModal')?.addEventListener('click', function(e) {
  if (e.target === this) closeMatiereModal();
});

addMatiereRealtimeValidation();

// ==================== INITIALISATION ====================

document.addEventListener('DOMContentLoaded', function() {
  const dashboardPage = document.getElementById('page-dashboard');
  if (dashboardPage) {
    if (dashboardPage.children.length === 0) {
      loadPage('dashboard');
    }
    dashboardPage.classList.add('active');
  }
  
  // Initialiser les événements du modal paiement
  document.getElementById('paymentModal')?.addEventListener('click', function(e) {
    if (e.target === this) closePaymentModal();
  });
});

// PAGE PARAMETRE 

// ==================== DONNÉES DES PARAMÈTRES ====================
const SettingsData = {
  schoolName: 'Collège Saint-Louis',
  schoolAddress: 'Port-au-Prince, Haïti',
  schoolYear: '2024-2025',
  schoolDirector: 'Adams Directeur',
  schoolPhone: '+509 3700-0000',
  theme: 'light',
  autoSave: true,
  language: 'fr'
};

// Charger les paramètres sauvegardés
function loadSettings() {
  const saved = localStorage.getItem('schoolProSettings');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      Object.assign(SettingsData, data);
    } catch (e) {}
  }
  
  // Appliquer les paramètres
  document.getElementById('schoolName').textContent = SettingsData.schoolName;
  document.getElementById('schoolAddress').textContent = SettingsData.schoolAddress;
  document.getElementById('schoolYear').textContent = SettingsData.schoolYear;
  document.getElementById('schoolDirector').textContent = SettingsData.schoolDirector;
  document.getElementById('schoolPhone').textContent = SettingsData.schoolPhone;
  document.getElementById('themeSelect').value = SettingsData.theme;
  document.getElementById('autoSave').checked = SettingsData.autoSave;
  document.getElementById('languageSelect').value = SettingsData.language;
  
  // Appliquer le thème
  applyTheme(SettingsData.theme);
}

// Sauvegarder les paramètres
function saveSettings() {
  localStorage.setItem('schoolProSettings', JSON.stringify(SettingsData));
}

// ==================== MODAL DE MODIFICATION ====================
let currentSettingsField = '';

function openSettingsModal(field, title, description) {
  currentSettingsField = field;
  document.getElementById('settingsModalTitle').textContent = title;
  document.getElementById('settingsModalDesc').textContent = description || 'Entrez la nouvelle valeur';
  document.getElementById('settingsModalLabel').textContent = 'Nouvelle valeur';
  document.getElementById('settingsModalInput').value = SettingsData[field] || '';
  document.getElementById('settingsModalField').value = field;
  document.getElementById('settingsModal').classList.add('active');
  setTimeout(() => document.getElementById('settingsModalInput').focus(), 100);
}

function closeSettingsModal() {
  document.getElementById('settingsModal').classList.remove('active');
}

function saveSettingsModal() {
  const field = document.getElementById('settingsModalField').value;
  const value = document.getElementById('settingsModalInput').value.trim();
  
  if (!value) {
    showToast('Veuillez entrer une valeur', 'error');
    return;
  }
  
  SettingsData[field] = value;
  document.getElementById(field).textContent = value;
  saveSettings();
  
  // Mettre à jour l'interface utilisateur
  updateUIWithSettings();
  
  showToast('Paramètre mis à jour avec succès !', 'success');
  closeSettingsModal();
}

// Fermer le modal en cliquant à l'extérieur
document.getElementById('settingsModal')?.addEventListener('click', function(e) {
  if (e.target === this) closeSettingsModal();
});

// ==================== THÈME ====================
function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.style.setProperty('--bg', '#0f172a');
    document.documentElement.style.setProperty('--surface', '#1e293b');
    document.documentElement.style.setProperty('--text-primary', '#f1f5f9');
    document.documentElement.style.setProperty('--text-secondary', '#94a3b8');
    document.documentElement.style.setProperty('--border', '#334155');
    document.documentElement.style.setProperty('--text-muted', '#64748b');
  } else {
    document.documentElement.style.setProperty('--bg', '#f0f4f8');
    document.documentElement.style.setProperty('--surface', '#ffffff');
    document.documentElement.style.setProperty('--text-primary', '#0f172a');
    document.documentElement.style.setProperty('--text-secondary', '#64748b');
    document.documentElement.style.setProperty('--border', '#e2e8f0');
    document.documentElement.style.setProperty('--text-muted', '#94a3b8');
  }
}

function changeTheme(theme) {
  SettingsData.theme = theme;
  applyTheme(theme);
  saveSettings();
  showToast(`Thème ${theme === 'dark' ? 'sombre' : theme === 'light' ? 'clair' : 'système'} activé`, 'info');
}

// ==================== LANGUE ====================
function changeLanguage(lang) {
  SettingsData.language = lang;
  saveSettings();
  const langNames = { fr: 'Français', en: 'English', ht: 'Kreyòl' };
  showToast(`Langue changée en ${langNames[lang] || lang}`, 'info');
}

// ==================== SAUVEGARDE AUTOMATIQUE ====================
function toggleAutoSave(enabled) {
  SettingsData.autoSave = enabled;
  saveSettings();
  showToast(`Sauvegarde automatique ${enabled ? 'activée' : 'désactivée'}`, 'info');
}

// ==================== SAUVEGARDE DES DONNÉES ====================
function saveAllData() {
  // Sauvegarder les données de l'école
  saveSettings();
  
  // Sauvegarder les données élèves/classes/enseignants
  try {
    localStorage.setItem('schoolProData', JSON.stringify(SchoolData));
    showToast('Toutes les données ont été sauvegardées avec succès !', 'success');
  } catch (e) {
    showToast('Erreur lors de la sauvegarde', 'error');
  }
}

// ==================== EXPORTATION DES DONNÉES ====================
function exportData() {
  const data = {
    settings: SettingsData,
    schoolData: SchoolData,
    exportedAt: new Date().toISOString(),
    version: '2.0.0'
  };
  
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `schoolpro_export_${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Données exportées avec succès !', 'success');
}

// ==================== IMPORTATION DES DONNÉES ====================
function importData() {
  document.getElementById('importModal').classList.add('active');
}

function closeImportModal() {
  document.getElementById('importModal').classList.remove('active');
  document.getElementById('importFileInput').value = '';
}

function processImport() {
  const fileInput = document.getElementById('importFileInput');
  if (!fileInput.files || fileInput.files.length === 0) {
    showToast('Veuillez sélectionner un fichier', 'error');
    return;
  }
  
  const file = fileInput.files[0];
  const reader = new FileReader();
  
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      
      if (data.settings) {
        Object.assign(SettingsData, data.settings);
        loadSettings();
      }
      
      if (data.schoolData) {
        Object.assign(SchoolData, data.schoolData);
        showToast('Données importées avec succès ! Rafraîchissez la page pour voir les changements.', 'success');
      }
      
      closeImportModal();
      // Recharger les pages pour afficher les nouvelles données
      location.reload();
    } catch (err) {
      showToast('Erreur : fichier JSON invalide', 'error');
    }
  };
  
  reader.readAsText(file);
}

// Fermer le modal d'import en cliquant à l'extérieur
document.getElementById('importModal')?.addEventListener('click', function(e) {
  if (e.target === this) closeImportModal();
});

// ==================== NOTIFICATIONS ====================
function testNotification() {
  if ('Notification' in window) {
    if (Notification.permission === 'granted') {
      new Notification('SchoolPro - Notification', {
        body: 'Ceci est une notification de test !',
        icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🏫</text></svg>'
      });
      showToast('Notification envoyée !', 'success');
    } else if (Notification.permission === 'default') {
      Notification.requestPermission().then(function(permission) {
        if (permission === 'granted') {
          testNotification();
        } else {
          showToast('Notifications non autorisées', 'error');
        }
      });
    } else {
      showToast('Notifications non autorisées', 'error');
    }
  } else {
    showToast('Les notifications ne sont pas supportées sur ce navigateur', 'info');
  }
}

// ==================== À PROPOS ====================
function showAbout() {
  // Mettre à jour les statistiques
  document.getElementById('aboutStudents').textContent = getTotalStudents();
  document.getElementById('aboutTeachers').textContent = getTotalTeachers();
  document.getElementById('aboutClasses').textContent = getTotalClasses();
  document.getElementById('aboutModal').classList.add('active');
}

function closeAboutModal() {
  document.getElementById('aboutModal').classList.remove('active');
}

// Fermer le modal à propos en cliquant à l'extérieur
document.getElementById('aboutModal')?.addEventListener('click', function(e) {
  if (e.target === this) closeAboutModal();
});

// ==================== MISE À JOUR DE L'UI ====================
function updateUIWithSettings() {
  // Mettre à jour le nom de l'école dans la sidebar
  const schoolBadge = document.querySelector('.school-badge p:last-child');
  if (schoolBadge) {
    schoolBadge.textContent = SettingsData.schoolName;
  }
  
  // Mettre à jour le nom du directeur dans le footer de la sidebar
  const userName = document.querySelector('.user-name');
  if (userName) {
    userName.textContent = SettingsData.schoolDirector;
  }
}

// ==================== INITIALISATION ====================
document.addEventListener('DOMContentLoaded', function() {
  loadSettings();
  updateUIWithSettings();
  
  // Demander la permission pour les notifications
  if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
  }
});

// Sauvegarder automatiquement quand les données changent
function autoSaveData() {
  if (SettingsData.autoSave) {
    try {
      localStorage.setItem('schoolProData', JSON.stringify(SchoolData));
    } catch (e) {}
  }
}

// Sauvegarder toutes les 5 minutes si autoSave est activé
setInterval(autoSaveData, 300000);


