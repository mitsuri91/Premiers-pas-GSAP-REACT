
# Premiers pas avec GSAP sur React

## Installation

Pour commencer, fork ce dépôt et installe les dépendances :

```bash
npm install
npm install gsap @gsap/react
```

## Qu'est-ce que GSAP ?

GSAP (GreenSock Animation Platform) est une bibliothèque JavaScript puissante et flexible utilisée pour créer des animations haute performance sur le web. Elle offre une multitude d'outils pour animer les éléments du DOM, SVG, canvas, WebGL et même des animations 3D. GSAP est apprécié pour sa performance, sa simplicité et sa capacité à gérer des animations complexes avec une facilité remarquable.

## useGSAP() Hook 💚

 l'utilisation de GSAP dans des environnements spécifiques comme React peut parfois nécessiter des configurations supplémentaires. C'est là que le hook useGSAP() entre en jeu.

### Qu'est-ce que useGSAP ?

Le hook useGSAP() est un remplacement de useEffect() dans React, qui simplifie l'intégration de GSAP avec React en gérant automatiquement le nettoyage des animations lorsque le composant est démonté.

deux façon de l'utilser :

```javascript

const container = useRef();

useGSAP(
    () => {
        gsap.to('.good', { x: 100 });
    },
    { scope: container }
);

return (
    <div ref={container}>
        <div className="good"></div>
    </div>
);
```

ou cette methode avec des eventListener

```javascript
 const { contextSafe } = useGSAP();
  
  const onEnter = contextSafe(({ event }) => {
    gsap.to(event, { rotation: "+=360" });
  });

    return (
    <div className="app flex-row">
      <div className="box gradient-blue" onClick={onEnter}>
        Click Me
      </div>
    </div>
  );
```

### Méthodes de GSAP

Voici un aperçu des principales méthodes de GSAP utilisées dans ce projet :

**gsap.to()** : Anime un élément de son état actuel à un nouvel état.

```javasript
gsap.to(target, { duration: 1, x: 100 });
```
target : Sélecteur ou référence de l'élément à animer.  
duration : Durée de l'animation en secondes.  
x : Propriété à animer (dans ce cas, la position X).

**gsap.from()** : Anime un élément d'un état initial spécifié à son état actuel.

```javasript
gsap.from(target, { duration: 1, x: -100 });
```

**gsap.fromTo()** : Anime un élément d'un état initial spécifié à un nouvel état spécifié.
```javasript
gsap.fromTo(target, { x: -100 }, { duration: 1, x: 100 });
```

**gsap.set()** : Définit immédiatement les propriétés d'un élément sans animation.
```javasript
gsap.set(target, { x: 100 });
```

Les méthodes de GSAP (gsap.to, gsap.from, gsap.fromTo, gsap.set) prennent deux arguments 

#### La Cible (target)

La cible est le premier argument de ces méthodes. Elle peut être un sélecteur CSS, un élément DOM, une référence à un élément, ou un tableau d'éléments. GSAP utilise cette cible pour identifier quel élément doit être animé.

##### Options Courantes dans l'Objet de Configuration

le second argument est un objet de configuration pour spécifier les propriétés et les valeurs à animer, il peut inclure de nombreuses propriétés.  
Voici quelques-unes des plus courantes :

**duration** : La durée de l'animation en secondes.  
**x, y** : Les positions horizontale et verticale de l'élément.  
**opacity** : La transparence de l'élément (de 0 à 1).  
**rotation** : La rotation de l'élément en degrés.  
**scale** : L'échelle de l'élément.  
**backgroundColor**  : La couleur de fond de l'élément.
**ease** : Le type d'accélération/décélération de l'animation.
**stagger** : Décalage entre le début de chaque animation pour les sélections multiples.
**delay** : Le délai avant le début de l'animation.
**clearProps** : Réinitialise les propriétés CSS spécifiées après l'animation.