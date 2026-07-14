# CLIENT-CATEGORY-CARDS-COLOR-001 — Encarts de catégories du site client

## Décision de Sébastien

Les encarts gris présents dans les catégories du site client, associés à une écriture gris foncé, sont refusés : ils sont peu lisibles, peu attrayants et ne correspondent pas à l’identité Jour de Pizza Baladzo.

Cette demande confirme notamment les retours déjà formulés sur les pages Desserts, Formules et Notre histoire, et s’applique à tous les encarts de catégories utilisant le même traitement gris.

## Statut

- Priorité : haute
- Site : client uniquement
- Mode autonomie : autorisé
- État d’activation maximal sans Sébastien : `PREVIEW`
- Progression maximale sans validation visuelle : `90 %`
- Action réelle ou production : interdite

## Objectif

Remplacer le traitement visuel gris des encarts de catégories par une apparence claire, chaleureuse, lisible et cohérente avec le mode Jour Pizza Baladzo, sans toucher aux contenus, aux fonctions, aux prix, au panier, aux votes, à Bastien, aux formulaires ou à la structure des pages.

## Périmètre exact

Identifier tous les sélecteurs et composants réellement responsables des encarts gris de catégories dans le site client, notamment :

- les introductions ou résumés de catégories ;
- les encarts de la page Desserts ;
- les encarts de la page Formules ;
- l’encadrement de la page Notre histoire ;
- tout autre encart utilisant le même fond gris et le même texte gris foncé.

Ne pas modifier les encarts allergènes dans cette tâche s’ils utilisent un composant différent. Les allergènes possèdent une tâche séparée.

## Direction visuelle à tester

Créer dans la copie ou le worktree client trois variantes réversibles, sans dupliquer le HTML :

### Variante A — Lilas clair recommandée

- fond : lilas très clair légèrement transparent ;
- texte : violet foncé ;
- bordure : violet moyen doux ;
- ombre légère ;
- remorque encore perceptible derrière lorsque le fond de page la montre.

Valeurs de départ possibles, à valider par contraste :

```css
--category-panel-bg: rgba(244, 234, 255, 0.92);
--category-panel-text: #3a1b52;
--category-panel-border: #b887d8;
```

### Variante B — Rose poudré

- fond : rose pâle chaleureux légèrement transparent ;
- texte : prune foncé ;
- bordure : rose-violet doux.

Valeurs de départ possibles :

```css
--category-panel-bg: rgba(255, 235, 246, 0.93);
--category-panel-text: #4b1f3f;
--category-panel-border: #d69abc;
```

### Variante C — Blanc chaud violet

- fond : blanc chaud légèrement violet ;
- texte : violet foncé ;
- bordure violette plus visible ;
- rendu plus sobre pour les textes longs.

Valeurs de départ possibles :

```css
--category-panel-bg: rgba(255, 250, 253, 0.94);
--category-panel-text: #352041;
--category-panel-border: #9e6cbc;
```

## Choix autonome autorisé

Codex doit produire les trois variantes sur une copie ou à l’aide de variables CSS, les comparer, puis retenir comme candidate de preview celle qui :

1. offre le meilleur contraste ;
2. reste cohérente avec le mode Jour ;
3. laisse légèrement apparaître l’ambiance de la remorque ;
4. ne ressemble ni à un bloc gris ni à un panneau froid ;
5. reste lisible sur ordinateur, tablette et mobile.

Le choix technique retenu ne vaut pas validation définitive de Sébastien.

## Contraintes d’accessibilité

- contraste minimal texte normal : `4.5:1` ;
- contraste minimal texte large : `3:1` ;
- aucun texte gris foncé sur gris ;
- aucun texte blanc sur fond clair ;
- focus clavier toujours visible ;
- liens et boutons distinguables du texte courant ;
- ne pas réduire la taille de police pour faire rentrer le contenu.

## Méthode obligatoire

1. Relire la baseline et le dernier worktree client propre.
2. Identifier les sélecteurs exacts et les pages concernées.
3. Produire des captures AVANT.
4. Centraliser les couleurs dans des variables CSS ou un composant partagé.
5. Ne modifier que les styles nécessaires.
6. Produire les trois variantes sans dupliquer le contenu.
7. Tester les contrastes.
8. Tester le mode Jour sur toutes les catégories concernées.
9. Vérifier que Nuit et Auto ne régressent pas.
10. Vérifier que les fonctions, liens et boutons restent inchangés.
11. Produire les captures APRÈS des trois variantes.
12. Retenir une candidate de preview et conserver les deux autres comme propositions réversibles.
13. Mettre à jour le tableau de suivi.
14. Horodater chaque fin de micro-tâche en Europe/Paris.

## Tests obligatoires

- 1440 × 900 ;
- 1024 × 768 ;
- 768 × 1024 ;
- 390 × 844 ;
- toutes les catégories utilisant le traitement gris ;
- modes Jour, Nuit et Auto ;
- contraste automatique et contrôle visuel ;
- absence de débordement horizontal ;
- absence de texte coupé ;
- aucune nouvelle erreur console ;
- aucune nouvelle 404 ;
- comparaison avant/après ;
- confirmation qu’aucune fonction métier n’a changé.

## Livrables

- inventaire des pages et sélecteurs concernés ;
- captures avant ;
- captures Variante A ;
- captures Variante B ;
- captures Variante C ;
- rapport de contraste ;
- diff exact ;
- commit isolé ;
- candidate recommandée ;
- fichiers modifiés ;
- tests et résultats ;
- horodatage de fin.

## Validation

Statut maximal avant contrôle de Sébastien :

`90 % — TERMINÉE TECHNIQUEMENT, VALIDATION VISUELLE SÉBASTIEN NÉCESSAIRE`

## Interdictions

- ne pas modifier `main` ;
- ne pas modifier Hostinger, `public_html`, FTP, DNS ou le domaine officiel ;
- ne pas modifier les contenus ou les fonctions ;
- ne pas toucher aux prix, produits, votes, panier, Compte ou Bastien ;
- ne pas généraliser aveuglément le style aux composants non concernés ;
- ne pas déclarer la couleur définitivement validée sans Sébastien.
