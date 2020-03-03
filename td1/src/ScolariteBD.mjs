import { Matiere } from './matieresgen.mjs';

export class ScolariteBD {
    baseMatieres;

    constructor() {
        this.baseMatieres = new Map();
    }

    chargeMatieres(m) {
        for (let i = 0; i < m.length; i++) {
            let matiere = new Matiere(m[i].nombre, m[i].nom);
            this.baseMatieres.set(matiere.id, matiere);
        }
    }

    ajouteMatieres(m) {
        this.baseMatieres.set(m.id, m);
    }

    *matieres() {
        for (let [cle, valeur] of this.baseMatieres) {
            yield valeur;
        }
    }

    matiereId(id) {
        return this.baseMatieres.get(id);
    }

    matiereNom(nom) {
        let matieres = [];
        for (let [cle, valeur] of this.baseMatieres) {
            if (valeur.nom == nom) {
                matieres.push(valeur);
            }
        }

        return matieres;
    }
}