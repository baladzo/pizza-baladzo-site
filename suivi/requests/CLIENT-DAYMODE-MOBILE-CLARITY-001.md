# CLIENT-DAYMODE-MOBILE-CLARITY-001 — Clarté du mode Jour sur téléphone

## Décision de Sébastien

Sur téléphone, l’ensemble des menus, images, panneaux et textes du mode Jour est beaucoup trop sombre. Le rendu mobile doit être aussi clair, lumineux et agréable que le rendu ordinateur du site client.

Cette demande s’ajoute aux corrections déjà prévues concernant les encarts gris, les panneaux légèrement transparents et la lisibilité des allergènes.

## Statut

- Priorité : haute
- Site : client uniquement
- Cible : mode Jour mobile et tablette
- Mode autonomie : autorisé
- État maximal sans Sébastien : `90 % — TERMINÉE TECHNIQUEMENT, VALIDATION VISUELLE SÉBASTIEN NÉCESSAIRE`
- Nuit et Auto : à préserver strictement
- Production, Hostinger et `main` : interdits

## Objectif exact

Aligner la luminosité et la clarté du mode Jour mobile sur le niveau observé sur ordinateur, sans inventer une nouvelle charte graphique et sans rendre les textes illisibles.

## Audit obligatoire

Identifier toutes les règles mobiles qui assombrissent le mode Jour, notamment :

- overlays ou calques sombres ;
- opacité excessive ;
- filtres `brightness`, `contrast`, `saturate` ou équivalents ;
- arrière-plans violets ou gris trop foncés ;
- variables Jour remplacées dans les media queries ;
- panneaux opaques masquant la remorque ;
- images sous-exposées ;
- textes gris foncé sur fond sombre ;
- héritage accidentel de couleurs du mode Nuit.

## Direction visuelle obligatoire

Le mode Jour mobile doit utiliser :

- fonds lilas très clairs, roses pâles ou blancs chauds teintés ;
- textes violet foncé ou anthracite ;
- images lumineuses, sans filtre sombre inutile ;
- panneaux légèrement transparents lorsque la remorque doit rester perceptible ;
- accents violets plus soutenus uniquement pour les titres, bordures et boutons ;
- aucune grande zone noire ou anthracite dominante ;
- aucun texte blanc sur fond clair ;
- aucun texte gris foncé sur fond gris ou violet sombre.

## Centralisation recommandée

Créer ou utiliser des variables partagées du type :

```css
--day-page-bg;
--day-panel-bg;
--day-panel-text;
--day-panel-border;
--day-overlay-opacity;
--day-image-brightness;
--day-heading-color;
--day-muted-text;
```

Ne pas dupliquer les mêmes couleurs dans chaque page.

## Pages à contrôler

Au minimum :

- Accueil ;
- Menu ;
- Pizzas classiques ;
- Pizzas personnalisables ;
- Desserts ;
- Boissons ;
- Formules ;
- À propos / Notre histoire ;
- Avis ;
- Contact ;
- Événements ;
- Où nous trouver ;
- Panier ;
- Compte ;
- pages de vote.

## Tests obligatoires

Formats :

- 320 × 568 ;
- 360 × 800 ;
- 390 × 844 ;
- 412 × 915 ;
- 768 × 1024 ;
- 1440 × 900 comme référence ordinateur.

Contrôler :

- contraste texte normal ≥ 4.5:1 ;
- contraste texte large ≥ 3:1 ;
- images visibles sans voile sombre excessif ;
- menus lisibles en plein jour ;
- aucun débordement horizontal ;
- boutons et liens distinguables ;
- Jour réellement clair ;
- Nuit inchangée ;
- Auto inchangé ;
- aucune fonctionnalité métier modifiée.

## Livrables

- tableau des règles responsables de l’assombrissement ;
- captures AVANT/APRÈS de toutes les pages représentatives ;
- mesures de contraste ;
- diff limité aux styles ;
- candidate de preview ;
- horodatage de chaque micro-tâche.
