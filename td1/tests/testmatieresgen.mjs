import { matieresGenerees } from '../src/matieresgen.mjs';

function afficheJSONMatieresGenerees(nom, debut, fin) {
    let matieres = Array.from(matieresGenerees(nom, debut, fin));
    console.log(JSON.stringify(matieres));
}

afficheJSONMatieresGenerees(process.argv[2], process.argv[3], process.argv[4]);