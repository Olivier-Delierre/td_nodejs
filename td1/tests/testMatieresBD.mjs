import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');

import { ScolariteBD } from '../src/ScolariteBD.mjs';
import { Matiere } from '../src/matieresgen.mjs';

let scolariteBD = new ScolariteBD();
let json = fs.readFileSync(process.argv[2], 'utf-8')

scolariteBD.chargeMatieres(JSON.parse(json));
let id = process.argv[3];
let matiere = scolariteBD.matiereId(id);
if (matiere != null) {
    console.log(JSON.stringify(matiere));
} else {
    let matieresGenerator = scolariteBD.matiereNom(id);
    if (matieresGenerator == null) {
        console.log('No matieres found');
    } else {
        console.log(JSON.stringify(Array.from(matieresGenerator)));
    }
}
