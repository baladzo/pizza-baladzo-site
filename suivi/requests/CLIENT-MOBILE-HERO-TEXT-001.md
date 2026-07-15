# CLIENT-MOBILE-HERO-TEXT-001 — Texte de l’accueil client coupé sur téléphone

## Décision de Sébastien

Sur téléphone, l’image d’accueil du site client est jugée correcte, mais le texte associé à cette image n’est visible qu’en partie. Le texte ne doit plus être coupé, tronqué, masqué par le bouton ou sortir de l’écran.

## Statut

- Priorité : critique visuelle mobile
- Site : client uniquement
- Mode : Jour prioritaire ; Nuit et Auto à protéger contre toute régression
- Mode autonomie : autorisé
- État maximal sans validation humaine : `90 % — TERMINÉE TECHNIQUEMENT, VALIDATION VISUELLE SÉBASTIEN NÉCESSAIRE`
- Production, Hostinger et `main` : interdits

## Objectif exact

Conserver l’image d’accueil mobile actuellement appréciée par Sébastien et corriger uniquement l’affichage du texte afin qu’il soit entièrement lisible sur téléphone.

## Diagnostic obligatoire avant modification

Déterminer si le texte coupé est :

1. intégré directement dans le fichier image ;
2. superposé en HTML/CSS ;
3. dupliqué entre l’image et le CSS ;
4. masqué par `background-size: cover`, `object-fit: cover`, `overflow: hidden`, une hauteur fixe, un mauvais `background-position`, un bouton ou une media query.

Ne pas modifier le fichier image original tant que la cause exacte n’est pas prouvée.

## Périmètre autorisé

- styles responsive du hero mobile ;
- dimension et position du conteneur ;
- `background-size`, `background-position`, `object-fit`, `object-position` ou équivalent ;
- taille de police, largeur maximale et interligne du texte superposé ;
- retours à la ligne contrôlés ;
- position du bouton « Voir le menu » pour éviter tout recouvrement ;
- variante d’image mobile uniquement si elle est produite depuis la source validée sans altérer l’original.

## Interdictions

- ne pas changer le texte ;
- ne pas changer le logo ;
- ne pas modifier le menu, les votes, le panier, Compte ou Bastien ;
- ne pas assombrir l’image ;
- ne pas dégrader le rendu ordinateur ;
- ne pas créer un hero inutilement très haut ;
- ne pas masquer une partie de la remorque jugée correcte sur mobile.

## Critères d’acceptation

Tester au minimum :

- 320 × 568 ;
- 360 × 800 ;
- 375 × 812 ;
- 390 × 844 ;
- 412 × 915 ;
- 768 × 1024 ;
- 1440 × 900 pour la non-régression ordinateur.

Pour chaque format :

- 100 % du texte visible ;
- aucun mot tronqué ;
- aucun chevauchement avec « Voir le menu » ;
- aucun débordement horizontal ;
- image toujours jugée entière et attractive ;
- premier écran lisible sans zoom ;
- mode Jour clair ;
- Nuit et Auto non régressés.

## Preuves obligatoires

- captures AVANT et APRÈS sur tous les formats ;
- indication de la cause exacte ;
- sélecteurs modifiés ;
- diff ;
- tests responsive ;
- horodatage de fin Europe/Paris.
