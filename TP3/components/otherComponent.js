// components/otherComponent.js

function edgeCaseFunction(input) {
    if (input === null) {
        throw new Error('Invalid input');
    }
    if (input === 0) {
        return 'Zero';
    }
    return 'Non-zero'; // Par défaut, retourner quelque chose pour les autres valeurs
}

function pathFunction(flag) {
    if (flag === true) {
        return 'Path is true'; // Une chaîne non vide est évaluée comme vraie
    }
    return 'Path is false'; // Pour les autres cas, retourner quelque chose de différent
}

module.exports = {
    edgeCaseFunction,
    pathFunction,
};
