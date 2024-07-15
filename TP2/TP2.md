# TP2 - Gestion de Bibliothèque 

## Objectifs du TP

Ce TP a pour objectif de créer une API simple utilisant Express pour gérer une collection de livres. Vous apprendrez à :

- Développer une API RESTful avec les opérations CRUD (Create, Read, Update, Delete).
- Écrire des tests d'intégration pour l'API avec Jest et Supertest.
- Renforcer vos compétences en JavaScript et en développement d'API.

## Frameworks Utilisés

- **Express** : Framework minimaliste pour créer des applications web et des APIs en Node.js.
- **Jest** : Framework de test JavaScript pour effectuer des tests unitaires et d'intégration.
- **Supertest** : Bibliothèque pour tester les APIs HTTP avec des assertions intégrées.

## Structure de Fichiers

Voici la structure des fichiers de votre projet :

gestion-bibliotheque/
│
├─ api/
│ ├─ books.js
│ ├─ index.js
│
├─ tests/
│ ├─ books.test.js
│
├─ package.json
└─ package-lock.json

bash
Copier le code

## Commandes du TP

### Initialiser le projet

Créez un nouveau dossier et initialisez votre projet :

```bash
mkdir gestion-bibliotheque
cd gestion-bibliotheque
npm init -y
Installer les dépendances
Installez les bibliothèques nécessaires :
```

```bash
npm install express supertest jest --save-dev
```

Scripts dans package.json
Ajoutez les scripts suivants pour faciliter l'exécution et les tests dans votre package.json :

```json
"scripts": {
    "start": "node api/index.js",
    "test": "jest"
}
```
Lancer l'application
Pour démarrer l'application, utilisez :

```bash
npm start
```
Exécuter les tests
Pour lancer les tests, exécutez :

```bash
npm test
```