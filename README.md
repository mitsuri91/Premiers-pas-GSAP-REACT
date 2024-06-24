
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

Le hook useGSAP() est un remplacement de useEffect() dans React (uniquement pour les animations gsap), qui simplifie l'intégration de GSAP avec React en gérant automatiquement le nettoyage des animations lorsque le composant est démonté.

deux façon de l'utilser :

```javascript
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const MyComponent = () => {

const container = useRef();

    useGSAP(
        () => {
                gsap.to('.target', { x: 100 });
        },[],//Le tableaux est vide , l'animation se joue a chaque rechargement de la page , ajoute un state dans le tableau si tu veux que l'animation joue a chaque changement d'etat.
        { scope: container }
    );

    return (
        <div ref={container}>
            <div className="target">Click Me</div>
        </div>
    );
};    
```

ou cette methode avec un handler 

```javascript
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const MyComponent = () => {
    const container = useRef();

    const { contextSafe } = useGSAP({ scope: container });
  
    const handleClick = contextSafe(() => {
        gsap.to(".target", { rotation: "+=360" }); 
    });

    return (
        <div ref={container}>
            <button onClick={handleClick} className="target"></button>
        </div>
    );
};
```

## Méthodes de GSAP

Voici un aperçu des principales méthodes de GSAP utilisées dans ce projet :

**gsap.to()** : Anime un élément de son état actuel à un nouvel état.

```javasript
gsap.to(target, { duration: 1, x: 100 });
```

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

Les méthodes de GSAP (gsap.to, gsap.from, gsap.fromTo, gsap.set) prennent deux arguments :

### La Cible (target)

La cible est le premier argument de ces méthodes. Elle peut être un sélecteur CSS, un élément DOM, une référence à un élément, ou un tableau d'éléments. GSAP utilise cette cible pour identifier quel élément doit être animé.

### L'Objet de Configuration

le second argument est un objet de configuration pour spécifier les propriétés et les valeurs à animer, il peut inclure de nombreuses propriétés (souvent identique à celle du css).  
Les propriétés sont écrites en "camelCase", exemple background-color devient backgroundColor, leurs valeurs est de type string si ce n'est pas uniquement un chiffre.

Voici quelques-unes des plus courantes :

**duration** : 1, La durée de l'animation en secondes.  
**x, y** : 100, Les positions horizontale et verticale de l'élément.  
**opacity** : 0.5, La transparence de l'élément (de 0 à 1).  
**rotation** : 360, La rotation de l'élément en degrés.  
**scale** : 2, L'échelle de l'élément.  
**backgroundColor** : "vert", La couleur de fond de l'élément.  
**delay** : 3, Le délai avant le début de l'animation.  


le plus facile pour apprendre c'est de pratiquer ! Alors lance toi et regarde le fichier Exercices.md



## Remerciements à l'Auteur des Images

Je tiens à remercier chaleureusement l'auteur des images utilisées dans ce projet.

- Les images sont fournies par [cookie_pom_illustration](https://www.instagram.com/cookie_pom_Illustration/).
- Ces images sont utilisées avec la permission de l'auteur et ne sont pas libres de droit.

Merci à l'auteur pour sa générosité et son autorisation d'utilisation de ses magnifiques images.