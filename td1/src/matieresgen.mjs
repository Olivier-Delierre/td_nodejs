export class Matiere {
    static numberOfMatieres = 0;
    id;
    nom;

    constructor(nombre, nom) {
        this.id = "id" + Matiere.numberOfMatieres++;
        this.nom = nom + nombre
    }
}

export function *matieresGenerees(nom, debut, fin) {
    for (let i = debut; i < fin; i++) {
        yield new Matiere(i, nom);
    }
}