class Etudiant {
    nom;
    prenom;
    matieres;

    constructor(nom, prenom, matieres) {
        this.nom = nom;
        this.prenom = prenom;
        this.matieres = matieres;
    }
}

let etudiants = [];

export function etudiantAPartirNomPrenom(nom, prenom, id) {
    for (let etudiant of etudiants) {
        if (etudiant.nom === nom && etudiant.prenom === prenom) {
            
        }
    }
}

export function EtudiantAPartirNom(nom, id) {

}