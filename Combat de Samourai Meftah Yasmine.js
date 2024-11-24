// Classe Samourai pour représenter un combattant
class Samourai {
    constructor(nom, ptDeVie, attack, precision) {
        this.nom = nom; // Nom du combattant
        this.ptDeVie = ptDeVie; // Points de vie
        this.attack = attack; // Puissance d'attaque
        this.precision = precision; // Précision de l'attaque (entre 0 et 1)
    }

    // Vérifier si l'attaque est réussie en fonction de la précision
    verifierPrecision() {
        return Math.random() < this.precision;
    }

    // Méthode pour attaquer un adversaire
    attaquer(adversaire) {
        if (this.verifierPrecision()) {
            // Si l'attaque réussit, on réduit les points de vie de l'adversaire
            adversaire.ptDeVie -= this.attack;
            console.log(
                `${this.nom} attaque ${adversaire.nom} avec la technique du Akatsuki no Tsurugi(Lame de la Lune Rouge) et inflige ${this.attack} points de dégâts !`
            );
            console.log(
                `Il reste ${adversaire.ptDeVie} points de vie à ${adversaire.nom}.`
            );
        } else {
            console.log(`${this.nom} a raté son attaque contre ${adversaire.nom} !`);
        }
    }
}

// Initialisation des deux combattants
let tendoKairi = new Samourai("Tendo Kairi", 80, 10, 0.7);
let nakamotoYuta = new Samourai("Nakamoto Yuta", 80, 12, 0.6);

// Boucle pour le combat
while (tendoKairi.ptDeVie > 0 && nakamotoYuta.ptDeVie > 0) {
    // Tendo Kairi attaque Nakamoto Yuta
    tendoKairi.attaquer(nakamotoYuta);

    // Vérifier si Nakamoto Yuta est vaincu
    if (nakamotoYuta.ptDeVie <= 0) {
        console.log(`${nakamotoYuta.nom} est vaincu ! ${tendoKairi.nom} remporte la victoire !`);
        break;
    }

    // Nakamoto Yuta attaque Tendo Kairi
    nakamotoYuta.attaquer(tendoKairi);

    // Vérifier si Tendo Kairi est vaincu
    if (tendoKairi.ptDeVie <= 0) {
        console.log(`${tendoKairi.nom} est vaincu ! ${nakamotoYuta.nom} remporte la victoire !`);
        break;
    }

    console.log(
        `État actuel : ${tendoKairi.nom} (${tendoKairi.ptDeVie} PV), ${nakamotoYuta.nom} (${nakamotoYuta.ptDeVie} PV)`
    );
}
