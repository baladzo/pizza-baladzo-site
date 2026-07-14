# SESSION CODEX — STRUCTURATION MAXIMALE PIZZA BALADZO

## Autorisation et objectif

Sébastien donne son GO pour avancer immédiatement sur toutes les tâches **déjà définies** qui demandent beaucoup de raisonnement, de structuration et de conception, afin de rendre leur exécution reproductible plus tard.

Cette autorisation couvre :

- la structuration du code dans des branches/worktrees privés ;
- la création de contrats de données, feature flags, tests, documentation et modules partagés ;
- l’activation locale ou en preview des fonctions déjà explicitement demandées ;
- les micro-corrections et fonctions qui ne déclenchent aucune action réelle ;
- la mise à jour du tableau de suivi.

Elle ne couvre pas :

- `main` ;
- Hostinger, `public_html`, FTP, DNS ou le domaine officiel ;
- Stripe live, paiement réel, e-mail réel, SMS réel, réseaux sociaux réels ou matériel réel ;
- l’invention de prix, chiffres, coordonnées, règles métier ou contenus non validés ;
- la publication d’une donnée privée ou d’un secret.

Commencer exactement par :

`✅ AUCUNE ACTION SÉBASTIEN REQUISE — SESSION DE STRUCTURATION MAXIMALE EN COURS`

## 1. Reprise obligatoire

Avant tout travail :

1. relire `SESSION_STATE.md` ;
2. relire `suivi/roadmap-5.6.md` ;
3. relire `suivi/data/roadmap-5.6.json` ;
4. vérifier les worktrees, branches et HEAD ;
5. vérifier `git status` partout ;
6. ne pas recommencer une tâche déjà terminée ;
7. ne pas modifier une branche contenant un état cassé ;
8. créer un checkpoint de reprise clair.

Si `TRACKER-001` est encore bloqué par une authentification externe, ne pas rester inactif : poursuivre les tâches locales sûres et indépendantes, puis revenir à `TRACKER-001` dès que possible.

## 2. Organisation en agents et worktrees

Utiliser jusqu’à cinq agents si disponible :

- **AGENT FONDATIONS** : architecture, données, feature flags, sécurité de preview.
- **AGENT CLIENT** : panier, formules, Bastien, médias et qualité client.
- **AGENT ADMIN** : encodage, navigation, modules et architecture métier.
- **AGENT PRÉSENTATION** : thème Jour, parcours, données et navigation.
- **AGENT DÉMOS/QA** : moteur de démonstration, tests, preuves et suivi.

Chaque agent possède :

- sa branche privée dédiée ;
- son worktree ;
- ses commits ;
- son rapport ;
- son horodatage ;
- aucun accès à `main`.

Si les agents parallèles ne sont pas disponibles, travailler par rotations sans mélanger les worktrees.

## 3. Règle de micro-tâche

Une micro-tâche doit respecter :

1. diagnostic ;
2. critères d’acceptation ;
3. fichiers ciblés ;
4. modification minimale ;
5. `git diff --check` ;
6. tests ;
7. preuves ;
8. commit isolé ;
9. mise à jour du suivi ;
10. date et heure de fin Europe/Paris.

Une tâche nécessitant une validation visuelle ou métier de Sébastien s’arrête à 90 % maximum.

## 4. Ordre de priorité de la session

### Vague A — Fondations à forte valeur

Exécuter d’abord ce qui rend toutes les autres tâches plus sûres :

1. terminer ou checkpoint proprement `TRACKER-001` ;
2. préparer/créer le dépôt privé canonique si l’accès le permet ;
3. créer les ADR d’architecture progressive ;
4. créer les contrats de données communs ;
5. créer les feature flags par environnement ;
6. créer les tokens de design Jour/Nuit ;
7. créer le garde-fou de preview empêchant toute action réelle ;
8. créer les suites de tests de base.

Ne pas migrer brutalement les fichiers monolithiques. Ajouter les fondations autour de l’existant, puis extraire progressivement.

### Vague B — Site client, fonctions prioritaires déjà demandées

Activer dans une branche privée, avec tests complets :

#### B1. Panier et pizzas personnalisées

- taille ;
- base ;
- ingrédients ;
- prix ;
- ligne panier ;
- quantité ;
- modification ;
- suppression ;
- persistance ;
- contrôle allergènes ;
- aucune modification de produit ou prix sans source validée.

#### B2. Formules

- chaque bouton « Choisir cette formule » ouvre le bon configurateur ;
- suggestion de formule depuis pizzas, desserts et boissons ;
- aucune insertion automatique sans accord du client ;
- règles de compatibilité centralisées.

#### B3. Bastien

- choix initial : écrit / vocal ;
- saisie micro ;
- réponse écrite ;
- réponse vocale ;
- bouton couper/rétablir le son ;
- micro non désactivé arbitrairement ;
- demande allergies/intolérances avant conseil alimentaire ;
- confirmation avant ajout au panier ;
- aucune validation finale de commande par Bastien ;
- fallback écrit si l’API vocale navigateur n’est pas disponible.

#### B4. Médias et PWA

- supprimer le besoin de recharger la page pour voir les photos ;
- préchargement raisonné ;
- fallback d’image ;
- cache versionné ;
- service worker sans contenu obsolète ;
- reprise réseau ;
- tests sur six viewports.

#### B5. Corrections client sûres

- relever légèrement « Voir le menu » ;
- corriger le message `mailto` et l’orthographe Pizza Baladzo ;
- contraste des allergènes ;
- supprimer/recolorer les encarts gris ;
- préparer trois propositions typographiques sans appliquer globalement sans validation ;
- panneaux Menu légèrement translucides avec remorque fixe, uniquement en proposition/preview si le rendu est subjectif.

#### B6. Avis et fidélité — architecture et mode preview

- modèle de données ;
- message premier avis ;
- moyenne publique à partir de cinq notes ;
- commentaires par produit ;
- espace personnel limité aux avis/notes/points du client connecté ;
- données fictives en preview ;
- aucune prétention de confidentialité réelle sans backend/authentification.

### Vague C — Site admin

#### C1. Encodage

- réparer les séquences d’encodage par lots contrôlés ;
- conserver le sens des textes ;
- captures avant/après ;
- test de navigation complet après chaque lot.

#### C2. Destinations absentes

Pour :

- `bastien-ia-voix-test.html` ;
- `controle-securite-technique.html` ;
- `bastien-ia-mail-test.html`.

Rechercher d’abord les fonctions équivalentes. Ne pas inventer de faux outil. Préparer des modules réels en preview uniquement lorsque le comportement attendu est entièrement défini. Sinon produire la décision à soumettre à Sébastien.

#### C3. Ancien éditeur

- ne jamais l’utiliser ;
- cartographier tous les points d’entrée ;
- écrire le plan de neutralisation ;
- ajouter des tests garantissant qu’il n’est pas chargé ;
- ne pas le supprimer définitivement sans validation explicite.

#### C4. Architecture métier

Préparer et, lorsque possible, implémenter en mode local/preview :

- comptes et rôles ;
- commandes et créneaux ;
- préparation et retrait ;
- stocks et fournisseurs ;
- lots, DLC et hygiène ;
- comptabilité, marges et exports ;
- notifications ;
- journal d’audit ;
- sauvegarde/restauration.

Toutes les données sont fictives tant que le backend réel n’est pas raccordé.

### Vague D — Site de présentation

#### D1. Thème Jour

Dans une branche privée :

- proposition claire et lumineuse cohérente avec le client Jour ;
- hero entier non coupé ;
- grande image uniquement en haut ;
- fond uniforme légèrement voilé sous l’introduction ;
- petite carte remorque détourée ;
- textes foncés lisibles ;
- tableaux et cartes clairs ;
- aucune publication officielle.

#### D2. Parcours personnel

Comparer la page aux neuf sections sources :

- présentation personnelle ;
- travail et rigueur ;
- restauration ;
- indépendance ;
- qualités ;
- cohérence ;
- motivation ;
- vision ;
- conclusion banque/investisseur.

Contrôler également :

- aucun fait inventé ;
- mobile ;
- clavier ;
- impression/PDF ;
- navigation ;
- données privées.

#### D3. Cohérence des chiffres

- inventorier tous les chiffres client/admin/présentation ;
- attribuer source, statut et visibilité ;
- ne modifier aucune valeur non validée ;
- préparer la source commune.

### Vague E — Suite globale de démonstrations

Créer un moteur commun, pas plusieurs systèmes indépendants.

Profils obligatoires :

- Démo Sébastien ;
- Banque ;
- Investisseur ;
- Comptable ;
- Emplacements/mairies/partenaires terrain ;
- Commercial/entreprises/associations/événements ;
- Mode complet A-Z renommable ;
- profil personnalisé futur.

Fonctions communes :

- bandeau « données fictives » ;
- bulles et flèches ;
- précédent/suivant ;
- pause/reprise ;
- progression ;
- retour au sommaire ;
- retour permanent à la présentation ;
- sortie et remise à zéro ;
- passage présentation → client → admin → présentation ;
- aucune action réelle ;
- nom affiché du mode A-Z modifiable sans changer son identifiant interne.

Commencer par le moteur et les contrats, puis configurer les profils. Ne dupliquer ni HTML ni logique entre profils.

## 5. Fonctions interdites pendant cette session

- paiement réel ;
- Stripe live ;
- e-mail réel ;
- SMS réel ;
- publication sociale réelle ;
- commande réelle ;
- stock réel ;
- TPE/imprimante/tablette réels ;
- Hostinger ;
- `public_html` ;
- FTP ;
- DNS ;
- site officiel ;
- merge vers `main`.

Pour chaque fonction externe, préparer :

- interface ;
- contrat ;
- mock ;
- feature flag ;
- tests ;
- checklist de raccordement réel.

## 6. Tests obligatoires

Pour chaque site :

- 1536×1024 ;
- 1440×900 ;
- 1024×768 ;
- 768×1024 ;
- 390×844 ;
- 360×800 ;
- console ;
- 404 ;
- images ;
- débordement horizontal ;
- clavier ;
- données privées ;
- actions réelles bloquées ;
- non-régression des fonctions protégées.

Pour le client, vérifier Jour/Nuit/Auto.

Pour les démos, tester chaque profil et chaque retour entre sites.

## 7. Gestion de la mémoire et des plantages

- ne pas recopier les anciens rapports dans le contexte ;
- lire seulement les fichiers nécessaires ;
- limiter les captures ouvertes simultanément ;
- checkpoint toutes les 30 minutes ;
- mettre à jour `SESSION_STATE.md` ;
- après un plantage, reprendre au dernier commit propre ;
- ne jamais recommencer toute la session.

## 8. Mise à jour du tableau

Après chaque micro-tâche :

- mettre à jour `suivi/data/roadmap-5.6.json` ;
- mettre à jour la section correspondante ;
- enregistrer progression, statut, branche, commit, tests, preuves, temps passé et temps restant ;
- enregistrer `startedAt`, `completedAt`, `completedBy`, `durationMinutes` et `timezone` ;
- ne jamais modifier les pourcentages globaux sans formule et justification.

## 9. Fin de session

Ne pas commencer une nouvelle grosse modification dans les 30 dernières minutes disponibles.

Fournir :

- branches et HEAD ;
- commits par site ;
- fonctions activées ;
- fonctions simulées ;
- tâches structurées mais non codées ;
- tests réussis/échoués/bloqués ;
- captures ;
- risques ;
- validations Sébastien ;
- heures restantes révisées ;
- checkpoint exact de reprise.

Commencer le bilan par :

`✅ SESSION 5.6 TERMINÉE — STRUCTURATION ET FONCTIONS PRÊTES À CONTRÔLER`

uniquement si tous les worktrees sont propres et toutes les preuves sont disponibles.

Sinon :

`❌ SESSION 5.6 ARRÊTÉE PROPREMENT — ÉLÉMENTS À REPRENDRE DOCUMENTÉS`

## 10. Horodatage obligatoire

À la fin de chaque tâche, sous-tâche, blocage, restauration, commit ou déploiement, enregistrer :

- identifiant ;
- intitulé ;
- statut ;
- date et heure de début ;
- date et heure de fin ;
- fuseau `Europe/Paris` ;
- durée ;
- agent ;
- branche ;
- commit ;
- preuve ;
- prochaine action.

Une réponse sans horodatage individuel est incomplète et non validable.