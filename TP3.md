# TP3 - Tests de Boîte Noire et Boîte Blanche avec Jest

## Objectifs du TP

Ce TP a pour objectif d'explorer les concepts avancés de tests en JavaScript, notamment :

- Réaliser des tests de Boîte Noire sans connaître l'implémentation interne des composants.
- Effectuer des tests de Boîte Blanche en se concentrant sur la logique interne des fonctions.
- Mettre en place des tests de Régression pour garantir le bon fonctionnement des fonctionnalités critiques après des modifications.

## Framework Utilisé

- **Jest** : Framework de test JavaScript utilisé pour effectuer les tests unitaires et d'intégration.

## Structure de Fichiers

Voici la structure des fichiers de votre projet :

tp-black-white-box/
├── components/
│ ├── orderService.js # Composant pour le service de gestion des commandes
│ └── otherComponent.js # Autre composant pour les tests de boîte blanche
├── tests/
│ ├── blackBox.test.js # Tests de boîte noire
│ ├── whiteBox.test.js # Tests de boîte blanche
│ └── regression.test.js # Tests de régression
└── package.json # Fichier de configuration du projet

bash
Copier le code

## Commandes du TP

### Initialiser le projet

Créez un nouveau répertoire et initialisez votre projet :

```bash
mkdir tp-black-white-box
cd tp-black-white-box
npm init -y
```

Installer les dépendances
Installez Jest :

```bash
npm install jest --save-dev
```

Scripts dans package.json
Ajoutez le script suivant pour exécuter les tests :

```json
"scripts": {
    "test": "jest"
}
```

Exécuter les tests
Pour lancer les tests, exécutez :

```bash
npm test
```