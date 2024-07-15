# TP Testing en JavaScript

## Instructions Générales

Bienvenue dans ce projet de travaux pratiques (TP) sur les tests unitaires en JavaScript. Voici quelques instructions générales pour bien démarrer :

### Approche TDD (Test-Driven Development)

- **Rédiger les tests avant le code** : Adoptez la méthode TDD (Test-Driven Development) en rédigeant les tests unitaires avant de développer les fonctions. Cette approche permet de mieux définir les attentes et d'assurer une couverture de tests plus complète.

### Structure des TPs

- **Instructions détaillées** : Les instructions spécifiques pour chaque TP sont fournies dans les fichiers respectifs :
  - `TP1.md`
  - `TP2.md`
  - `TP3.md`
  - etc.

### Couverture de Tests

- **Élargir la couverture de tests** : Pour chaque TP, vous devez élargir la couverture de tests existante. Commencez par commenter la couverture de tests la plus large possible, avec un ommentaire sous forme de liste en haut de la page, puis implémentez ces tests dans les fichiers concernés.

Mettez la liste de la couverture de test en haut de la page de test sous forme de commentaire. 
- **Travail collaboratif** : Il est recommandé de travailler en groupe pour essayer de penser à tous les tests possibles. Une discussion en groupe peut aider à identifier des cas de test auxquels vous n'auriez pas pensé seul.

### Soumission

- **Rendre les TPs via GitHub** : Les TPs doivent être soumis via vos liens GitHub. Assurez-vous que votre code est bien organisé et que les instructions pour exécuter les tests sont claires.

### Frameworks de Tests

- **Choix des frameworks** : Lisez les `README.md` spécifiques à chaque TP pour savoir quels types de frameworks de tests vous allez utiliser (par exemple, Mocha, Jasmine, Jest, etc.).

## Bon Courage !

Nous espérons que vous trouverez ces TPs instructifs et que vous apprécierez le processus d'écriture de tests unitaires. Bonne chance à vous !

---

## Exemple de Structure de Fichier README pour un TP

### TP1: Test des Fonctions de Base

**Instructions :**
1. **Définir la couverture de tests** : En commentaire, décrire tous les tests que vous comptez implémenter.
2. **Écrire les tests** : Implémenter les tests définis en utilisant le framework de test spécifié.
3. **Développer les fonctions** : Écrire les fonctions en respectant les tests précédemment définis.

**Fichiers :**
- `tests/tp1.test.js` : Contient les tests unitaires pour TP1.
- `src/tp1.js` : Contient les fonctions à tester.

**Exécution des tests :**
```bash
# Installer les dépendances
npm install

# Exécuter les tests
npm test
