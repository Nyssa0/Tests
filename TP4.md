# TP4 - Tests d'Intégration avec Supertest et Jest

## Objectifs du TP

Ce TP a pour objectif de créer une API simple avec Express pour gérer une collection de produits, et d'écrire des tests d'intégration pour les opérations CRUD (Create, Read, Update, Delete) en utilisant Supertest et Jest.


On va utilise la bibliothèque mongoose

Mongoose est une bibliothèque JavaScript utilisée avec Node.js pour interagir avec des bases de données MongoDB. Voici quelques-unes de ses fonctionnalités principales :

Modèles de données : Mongoose permet de définir des schémas pour les documents dans MongoDB, ce qui facilite la validation et la structure des données.

CRUD simplifié : Il fournit des méthodes simples pour créer, lire, mettre à jour et supprimer des documents dans la base de données.

Validation des données : Mongoose permet d'ajouter des règles de validation aux champs des documents pour garantir l'intégrité des données.

Middleware : Il supporte les middlewares, ce qui permet d'exécuter du code avant ou après certaines opérations sur les documents.

Population : Mongoose facilite la gestion des relations entre documents grâce à la fonctionnalité de "population", permettant de remplacer les références par les documents correspondants.


## Frameworks Utilisés

- **Express** : Framework pour créer l'API.
- **Mongoose** : ODM pour interagir avec MongoDB.
- **Jest** : Framework de test JavaScript.
- **Supertest** : Outil pour tester les APIs HTTP.

## Structure de Fichiers

Voici la structure des fichiers de votre projet :

tp-integration/
├── index.js # Point d'entrée de l'API Express
├── models/
│ └── Product.js # Modèle Mongoose pour les produits
├── routes/
│ └── products.js # Routes Express pour les produits
├── tests/
│ └── integration/
│ └── products.test.js # Tests d'intégration avec Supertest
└── package.json # Fichier de configuration du projet

bash
Copier le code

## Commandes du TP

### Initialiser le projet

Créez un nouveau répertoire et initialisez votre projet :

```bash
mkdir tp-integration
cd tp-integration
npm init -y
```

Installer les dépendances
Installez les dépendances nécessaires :

```bash
npm install express body-parser mongoose jest supertest --save-dev
```

Exécuter les tests
Pour lancer les tests, utilisez :

```bash
npm test
```



