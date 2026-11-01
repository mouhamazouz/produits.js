
const produits = [
  {
    id: 1,
    nom: "Clavier",
    categorie: "Accessoires",
    prix: 120,
    stock: 5
  },
  {
    id: 2,
    nom: "Souris",
    categorie: "Accessoires",
    prix: 80,
    stock: 8
  },
  {
    id: 3,
    nom: "Ecran",
    categorie: "Informatique",
    prix: 900,
    stock: 0
  },
  {
    id: 4,
    nom: "Casque",
    categorie: "Accessoires",
    prix: 240,
    stock: 3
  }
];

// ETAPE 2 : AFFICHAGE DU CATALOGUE

console.log("\n=================================");
console.log("       CATALOGUE INITIAL");
console.log("=================================");

produits.forEach((produit) => {
  console.log(
    `ID: ${produit.id} | ${produit.nom} | ${produit.prix} MAD | Stock: ${produit.stock}`
  );
});

// ETAPE 3 : RECHERCHE DES PRODUITS DISPONIBLES

const produitsDisponibles = produits.filter((produit) => {
  return produit.stock > 0;
});

console.log("\n=================================");
console.log("       PRODUITS DISPONIBLES");
console.log("=================================");

produitsDisponibles.forEach((produit) => {
  console.log(`${produit.nom} - Stock : ${produit.stock}`);
});

console.log(
  "Nombre de produits disponibles :",
  produitsDisponibles.length
);

// ETAPE 4 : CALCUL DE LA VALEUR TOTALE DU STOCK

const valeurTotale = produits.reduce((total, produit) => {
  return total + produit.prix * produit.stock;
}, 0);

console.log("\n=================================");
console.log("       VALEUR TOTALE DU STOCK");
console.log("=================================");

console.log("Valeur totale :", valeurTotale, "MAD");

// ETAPE 5 : RECHERCHE DU PRODUIT LE MOINS CHER

let produitMoinsCher = null;

if (produitsDisponibles.length > 0) {

  produitMoinsCher = produitsDisponibles.reduce((minimum, produit) => {
    return produit.prix < minimum.prix ? produit : minimum;
  });

  console.log("\n=================================");
  console.log("       PRODUIT LE MOINS CHER");
  console.log("=================================");

  console.log("Nom :", produitMoinsCher.nom);
  console.log("Prix :", produitMoinsCher.prix, "MAD");

} else {

  console.log("\nAucun produit disponible.");

}

// ETAPE 6 : CREATION DU RESUME AVEC MAP()

const resume = produits.map((produit) => {
  return `${produit.nom} - ${produit.prix} MAD - ${produit.stock} unités`;
});

console.log("\n=================================");
console.log("       RESUME DU CATALOGUE");
console.log("=================================");

resume.forEach((ligne) => {
  console.log(ligne);
});

// ETAPE 7 : VALIDATION DES DONNEES

function estValide(produit) {

  return (
    Number.isFinite(produit.prix) &&
    Number.isFinite(produit.stock) &&
    produit.prix >= 0 &&
    produit.stock >= 0
  );

}

console.log("\n=================================");
console.log("       VALIDATION DES DONNEES");
console.log("=================================");

produits.forEach((produit) => {

  const resultat = estValide(produit) ? "Valide" : "Invalide";

  console.log(`${produit.nom} : ${resultat}`);

});

// ETAPE 8 : DESTRUCTURATION

if (produitMoinsCher !== null) {

  const { nom, prix, stock } = produitMoinsCher;

  console.log("\n=================================");
  console.log("       DESTRUCTURATION");
  console.log("=================================");

  console.log("Nom :", nom);
  console.log("Prix :", prix, "MAD");
  console.log("Stock :", stock, "unités");

}

// ETAPE 9 : TEST - TOUS LES STOCKS SONT A ZERO

console.log("\n=================================");
console.log("       TEST STOCK ZERO");
console.log("=================================");

const catalogueZero = produits.map((produit) => ({
  ...produit,
  stock: 0
}));

const disponiblesZero = catalogueZero.filter(
  (produit) => produit.stock > 0
);

if (disponiblesZero.length === 0) {
  console.log("Aucun produit disponible.");
}

// ETAPE 10 : TEST - CATALOGUE VIDE

console.log("\n=================================");
console.log("       TEST CATALOGUE VIDE");
console.log("=================================");

const catalogueVide = [];

const totalVide = catalogueVide.reduce((total, produit) => {
  return total + produit.prix * produit.stock;
}, 0);

console.log("Valeur totale du catalogue vide :", totalVide, "MAD");

// ETAPE 11 : TEST - DONNEES INVALIDES

console.log("\n=================================");
console.log("       TEST DONNEES INVALIDES");
console.log("=================================");

const produitTest = {
  id: 5,
  nom: "Produit test",
  categorie: "Test",
  prix: -10,
  stock: 2
};

console.log(
  produitTest.nom,
  ":",
  estValide(produitTest) ? "Valide" : "Invalide"
);

// ETAPE 12 : AUGMENTATION DU PRIX DE LA SOURIS

console.log("\n=================================");
console.log("       TEST AUGMENTATION PRIX");
console.log("=================================");

const souris = produits.find((produit) => produit.nom === "Souris");

if (souris) {

  const augmentation = 10 * souris.stock;
  const nouvelleValeur = valeurTotale + augmentation;

  console.log("Ancien prix :", souris.prix, "MAD");
  console.log("Nouveau prix :", souris.prix + 10, "MAD");
  console.log("Augmentation du stock :", augmentation, "MAD");
  console.log("Nouvelle valeur totale :", nouvelleValeur, "MAD");

}

// FIN DU PROGRAMME

console.log("\n=================================");
console.log("       FIN DU PROGRAMME");
console.log("=================================");
