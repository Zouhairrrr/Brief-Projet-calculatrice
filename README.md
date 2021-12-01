<!-- @format -->

# Brief-Projet-calculatrice

## Objectifs d'apprentissage :

- Nommer les huit types de données en JavaScript.
- Intégrer une variable/expression String.
- Identifier les expressions et les opérateurs.
- Définir les fonctions et les méthodes.
- Nommez les trois opérateurs logiques.
- Comprendre ce que sont les opérateurs de comparaison.
- Comprendre ce que sont les conditionnels.
- Manipulation DOM.
- la gestion des événements .

## **Livrables**

Répertoire GitHub

# Cahier des charges projet Calculatrice**(Version FR)**

1. Votre calculatrice va contenir des fonctions pour tous les opérateurs mathématiques de base que l'on trouve généralement sur les calculatrices simples. Commencez donc par créer des fonctions pour les éléments suivants et testez-les dans la console de votre navigateur.
   1. additionner
   2. soustraire
   3. multiplier
   4. diviser
2. Créez une nouvelle fonction `operate` qui prend un opérateur et 2 nombres, puis appelle une des fonctions ci-dessus sur les nombres.
3. Créez une calculatrice HTML de base avec des boutons pour chaque chiffre, chacune des fonctions ci-dessus et une touche "Egual =".
   1. Il devrait également y avoir un affichage pour la calculatrice, allez-y et remplissez-le avec quelques nombres fictifs pour que vous puissiez obtenir un aspect correct.
   2. Ajoutez un bouton "clear".
4. Créez les fonctions qui remplissent l'affichage lorsque vous cliquez sur les boutons numériques... vous devez stocker la "valeur d'affichage" dans une variable quelque part pour l'utiliser à l'étape suivante.
5. Faites fonctionner la calculatrice ! Vous devrez stocker le premier nombre qui est entré dans la calculatrice lorsqu'un utilisateur appuie sur un opérateur, et aussi enregistrer l'opération qui a été choisie et ensuite `operate()` sur eux lorsque l'utilisateur appuie sur la touche "=".
   1. Vous devriez déjà avoir le code qui peut remplir l'affichage, donc une fois que `operate()` a été appelé, mettez à jour l'affichage avec la 'solution' de l'opération.
   2. C'est la partie la plus difficile du projet. Vous devez trouver comment stocker toutes les valeurs et appeler la fonction operate avec elles. Ne vous sentez pas mal si cela vous prend du temps pour comprendre la logique.
6. Les bogues : faites attention et corrigez ces bogues s'ils apparaissent dans votre code :
   1. Les utilisateurs devraient pouvoir enchaîner plusieurs opérations et obtenir la bonne réponse, chaque paire de nombres étant évaluée à la fois. Par exemple, `12 + 7 - 5 * 3 =` devrait donner `42`. \*\*Votre calculatrice ne doit pas évaluer plus d'une seule paire de chiffres à la fois. Si vous entrez un nombre, puis un opérateur et un autre nombre, ce calcul doit être affiché si votre prochaine entrée est un opérateur. Le résultat du calcul doit être utilisé comme premier nombre dans votre nouveau calcul.
   2. Vous devez arrondir les réponses avec de longues décimales afin qu'elles ne débordent pas de l'écran.
   3. Si vous appuyez sur `=` avant d'entrer tous les chiffres ou un opérateur, vous risquez de rencontrer des problèmes !
   4. Appuyez sur "clear" pour effacer toutes les données existantes. Assurez-vous que l'utilisateur repart vraiment de zéro après avoir appuyé sur "clear".
   5. Affichez un message d'erreur sarcastique si l'utilisateur essaie de diviser par 0... ne le laissez pas planter votre calculatrice !
7. BONUS : Les utilisateurs peuvent obtenir des nombres à virgule flottante s'ils font les calculs nécessaires pour en obtenir, mais ils ne peuvent pas encore les taper. Ajoutez un bouton `.` et laissez les utilisateurs entrer des décimales ! Assurez-vous cependant de ne pas les laisser en taper plus d'un : `12.3.56.5`. Il est difficile de faire des maths avec ces nombres. (désactivez le bouton décimal s'il y en a déjà un dans l'affichage)
8. BONUS : Faites en sorte que ce soit joli ! Cela peut être un bon projet de portfolio... mais pas si c'est MAUVAIS. Faites au moins en sorte que les opérations soient d'une couleur différente de celle des boutons du clavier.
9. BONUS : Ajoutez un bouton "backspace", pour que l'utilisateur puisse annuler s'il clique sur le mauvais numéro.

# **Project specifications (Version EN)**

Here are some use cases (abilities your project needs to have):

1. Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.
   1. add
   2. subtract
   3. multiply
   4. divide
2. Create a new function `operate` that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
3. Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.
   1. There should also be a display for the calculator, go ahead and fill it with some dummy numbers so you can get it looking right.
   2. Add a “clear” button.
4. Create the functions that populate the display when you click the number buttons… you should be storing the ‘display value’ in a variable somewhere for use in the next step.
5. Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then `operate()` on them when the user presses the “=” key.
   1. You should already have the code that can populate the display, so once `operate()` has been called, update the display with the ‘solution’ to the operation.
   2. This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.
6. Gotchas: watch out for and fix these bugs if they show up in your code:
   1. Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, `12 + 7 - 5 * 3 =` should yield `42`. **Your calculator should not evaluate more than a single pair of numbers at a time. If you enter a number then an operator and another number that calculation should be displayed if your next input is an operator. The result of the calculation should be used as the first number in your new calculation.**
   2. You should round answers with long decimals so that they don’t overflow the screen.
   3. Pressing `=` before entering all of the numbers or an operator could cause problems!
   4. Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”
   5. Display a snarky error message if the user tries to divide by 0… don’t let it crash your calculator!
7. BONUS: Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a `.` button and let users input decimals! Make sure you don’t let them type more than one though: `12.3.56.5`. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)
8. BONUS: Make it look nice! This can be a good portfolio project… but not if it’s UGLY. At least make the operations a different color from the keypad buttons.
9. BONUS: Add a “backspace” button, so the user can undo if they click the wrong number.

Les questions JAVASCRIPT


Qu’est-ce que JavaScript?

Quels sont les types de données natifs existants en Javascript
Quels sont les avantages de JavaScript?
Comment définir une fonction en JavaScript?
Quelle est la différence entre == et === ?
Qu’est-ce qu’une “closure” et comment/pourquoi en utiliser une ?
Pourquoi JavaScript est un langage multi-paradigme ?
Quelle est la différence entre l’héritage classique et l’héritage prototypique ?
Quelle est la différence entre les variables non déclarées et non définies ?
Qu'est-ce que le « mode strict » de JavaScript ?
Qu'est-ce que le levage "hoisting" JavaScript ?
Qu'est-ce que la délégation d'événement?
Qu'est-ce que le DOM et BOM ?
Expliquez comment fonctionne this en Javascript?
Quelle est la différence entre une variable null, undefined et non déclarée ?
Quelle est l’utilisation typique d’une fonction anonyme ?
Différence entre: function Person() {}, var person = Person() et var person = new Person() ?
Quelle est la différence entre un “attribut” et une “propriété” ?
Qu’est-ce que "use strict";? Quels sont les avantages et désavantages de son utilisation ?
Quelles sont les différences entre les variables crées en utilisant let, var ou const ?
 