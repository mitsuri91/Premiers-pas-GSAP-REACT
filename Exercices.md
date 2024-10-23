# Exercice 1 Crée ta première animation ! 

### Objectif :
Dans le composant Exercice1,
Anime nos deux Roger , l'un doit être animer a chaque changement d'état et l'autre avec un handleClick 

### Instructions :

1. **Initialisation :**
   - Utilisez l'exemple de base fourni comme point de départ, interdit de changer les className.
   - Importe `gsap`et `useGSAP`.

2. **Configuration de GSAP :**
   - Utilisez `useRef` pour créer deux références : `roger1` et `roger2`, utilise les pour bien référencer la première `<figure>` avec `roger1` et la deuxième avec `roger2`

3. **Animation de roger1 :**
   - roger1 est l'animation qui va jouer a chaque changement d'état de `rogerCount` et/ou au rechargement de la page, nous allons donc coder toute notre animation dans le hook `useGSAP` qui devra se trouver dans ton composant.

   ```javascript  
    useGSAP(() => {

            // ton animation

    }, [/*ton state a écouter*/]);
    ```

   - Vérifie que l'animation se déclenche correctement et uniquement sur la première figure.

4. **Animation de roger2 :**
   - roger2 est l'animation qui va jouer uniquement au click , nous allons donc coder toute notre animation dans un handler associé a un contextSafe.  
    nous déstructurons useGsap pour utiliser directement `contextSafe` comme une fonction pour créer des animations ou des gestionnaires d'événements qui respectent le scope défini par `roger2`.

   ```javascript  
    const { contextSafe } = useGSAP({ scope: /* la ref a surveiller*/ });

    const handleClick = contextSafe(() => {
       // ton animation 
    });

    ```

    - Rattache le handler sur le `button` de roger2

   - Vérifie que l'animation se déclenche correctement uniquement sur la deuxième figure.

Voici la version corrigée des instructions pour l'exercice :

# Exercice 2 : Stagger & Easing

### Objectif :
Dans le composant `Exercice2`, tu vas utiliser le `stagger` pour animer ces cubes. La propriété `stagger` va ajouter un délai entre chaque élément à animer, tu dois donc faire en sorte de cibler tous les éléments.

On va donc encore utiliser la magie de `useRef` !

### Instructions :

1. **Initialisation :**
   - Utilise l'exemple de base fourni comme point de départ, il est interdit de changer les `className`.
   - Importe `gsap` et `useGSAP`.

2. **Configuration de GSAP :**
   - Utilise `useRef` pour créer une référence sur le parent des éléments à animer.

3. **Animation des cubes :**
   - L'animation ne sera pas dans un handler, ce sera l'occasion de te montrer le mouvement perpétuel !

    ```javascript  
    useGSAP(() => {
        // ton animation
    }, [/*tableau vide, rien à écouter*/], { scope: /*la ref à surveiller*/ });
    ```

   - Commence ton animation avec la méthode d'animation de ton choix (`to`, `from`, `fromTo`).
   - Avec la ref que tu as créée, tu peux cibler tous ses enfants avec cette commande dans l'argument cible : `nomDeTaRef.current.children`.
   - Dans l'objet de ton animation, ajoute une propriété `repeat: -1`, cela rendra ton animation infinie.
   - Le `stagger` entre en jeu, utilise `stagger: 0.1` comme propriété, il se jouera 0.1 seconde entre chaque animation. Tu peux également mettre le `stagger` sous forme d'objet, pour accéder à davantage d'options !

    Exemple :

    ```javascript
    stagger: {
        each: 0.1, // l'animation jouera toutes les 0.1 secondes
        from: 'center' // l'animation démarre à partir du centre, essaie ("start", "center", "edges", "random", ou "end")
    }
    ```

   Une dernière propriété à te faire découvrir, c'est le `ease`. C'est pour donner de la force et de la forme à ton animation.

   Il y a de nombreuses possibilités de easing et je te laisse les découvrir et les visualiser sur [la doc - GSAP](https://gsap.com/resources/getting-started/Easing).


# Exercice 3 :Timeline ! 
### Objectif :
Dans le composant `Exercice3`, tu vas utiliser la  méthode `timeline()` pour animer ce cube pour qu'il s'arrête a chaque position prédéfini.

La timeline dans GSAP est un outil puissant pour créer et gérer des séquences d'animations complexes, vous pouvez enchaîner plusieurs animations de manière séquentielle. Chaque animation commence dès que la précédente se termine.

### Instructions :

1. **Initialisation :**
   - Utilise l'exemple de base fourni comme point de départ.
   - Importe `gsap` et `useGSAP`.

2. **Animation du cube grâce a la timeline() :**
    
    pour initialiser la timeline , insère une constante `tl` qui a pour valeur `gsap.timeline()` dans ton hook GSAP
    Il te reste plus qu'a faire tes animations en utilisant `tl.` a la place de `gsap.` suivit de la méthode choisit (to,from,fromTo), a noter qu'il n'est pas nécessaire de répéter `tl`

    par default chaque animation jouera a la fin de la précédente et dans l'ordre chronologique de la lecture du code 

    ```javascript  
    useGSAP(() => {
        const tl = gsap.timeline()

        tl.to{/*".target"*/,{ /*animation*/}}
        .to{/*".target"*/,{ /*animation*/}}
        .to{/*".target"*/,{ /*animation*/}}

        // ton animation
    }, [/*tableau vide, rien à écouter*/], { scope: /*la ref à surveiller*/ });
    ```



