# Pizza Baladzo Site

Base de site statique professionnelle pour Pizza Baladzo, avec un design noir et violet, une navigation simple et des pages faciles à modifier.

## Pages incluses

- `index.html` : page d’accueil avec présentation, bouton de commande et mise en avant des pizzas.
- `menu.html` : carte des pizzas, à-côtés et prix.
- `horaires-emplacements.html` : horaires, adresse et informations de livraison.
- `contact.html` : coordonnées et formulaire de commande/contact.

## Modifier le site

- Les textes et les prix se modifient directement dans les fichiers `.html`.
- Les couleurs principales sont définies en haut de `styles.css` dans le bloc `:root`.
- Les liens de commande, téléphone et courriel utilisent actuellement des valeurs de démonstration à remplacer.

## Prévisualiser localement

Ouvrez `index.html` dans un navigateur, ou lancez un petit serveur local :

```bash
python3 -m http.server 8000
```

Puis ouvrez <http://localhost:8000>.
