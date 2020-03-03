import { Matiere } from './matieresgen.mjs';

export class ScolariteBD {
    base;

    constructor() {
        this.base = new Map();
    }

    chargeMatieres(m) {
        for (let i = 0; i < m.length; i++) {
            let matiere = new Matiere(m[i].nombre, m[i].nom);
            this.base.set(matiere.id, matiere);
        }
    }

    ajouteMatieres(m) {

    }

    *matieres() {
        for (let [cle, valeur] of this.base) {
            yield valeur;
        }
    }

    matiereId(id) {
        return this.base.get(id);
    }

    matiereNom(nom) {
        let matieres = [];
        for (let [cle, valeur] of this.base) {
            if (valeur.nom == nom) {
                matieres.push(valeur);
            }
        }

        return matieres;
    }
}