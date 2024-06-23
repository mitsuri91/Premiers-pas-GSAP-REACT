# Exercice 1 Crée ta première animation ! 

### Objectif :
Dans le composant Exercice1,
Anime nos deux Roger , l'un doit être animer a chaque changement d'état et l'autre avec un handleClick 

### Instructions :

1. **Initialisation :**
   - Utilisez l'exemple de base fourni comme point de départ, interdit de changer les className.
   - Importez `gsap`, `useGSAP`.

2. **Configuration de GSAP :**
   - Utilisez `useRef` pour créer deux références : `roger1` et `roger2`, utilise les pour bien référencer la première `<figure>` avec `roger1` et la deuxième avec `roger2`

3. **Animation de roger1 :**
   - roger1 est l'animation qui va jouer a chaque changement d'état de `rogerCount` et/ou rechargement de la page, nous allons donc coder toute notre animation dans le hook `useGSAP` qui devra se trouver dans ton composant.

   ```javascript  
    useGSAP(() => {

            // ton animation

    }, [/*ton state a écouter*/], { scope: /*la ref a surveiller*/ });
    ```

   - Vérifie que l'animation se déclenche correctement uniquement sur la première figure.

4. **Animation de roger2 :**
   - roger2 est l'animation qui va jouer uniquement au click , nous allons donc coder toute notre animation dans un handler associé a un contextSafe
    nous déstructurons useGsap pour utiliser directement `contextSafe` comme une fonction pour créer des animations ou des gestionnaires d'événements qui respectent le scope défini par `roger2`.

   ```javascript  
    const { contextSafe } = useGSAP({ scope: /* la ref a surveiller*/ });

    const handleClick = contextSafe(() => {
       // ton animation 
    });

    ```

    - Rattache le handler sur le `button` de roger2

   - Vérifie que l'animation se déclenche correctement uniquement sur la deuxième figure.

