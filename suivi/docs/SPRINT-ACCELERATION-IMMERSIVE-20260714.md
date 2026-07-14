# Sprint accélération immersive — Pizza Baladzo

- Date de décision : 14/07/2026 à 10:51:25, heure de Paris
- Fuseau : Europe/Paris
- Priorité : **P0 — URGENTE**
- Statut de la visite actuelle : **REJETÉE PAR SÉBASTIEN**
- Périmètre : présentation, site client, administration simulée, moteur de démonstration et préparation du pitch

## 1. Motifs du rejet

La visite actuelle ne répond pas au niveau d’expérience attendu :

- voix trop robotisée ;
- absence ou faiblesse des bulles, flèches et surbrillances ;
- interaction insuffisante avec le visiteur ;
- rendu froid, plat et austère ;
- manque d’animation et de mise en scène ;
- parcours peu engageant ;
- progression globale jugée trop lente au regard de l’échéance de démarchage.

Aucune partie de la visite actuelle ne doit être présentée comme validée visuellement ou vocalement.

## 2. Décision de conception

Ne pas polir marginalement l’ancienne visite. Remplacer son expérience visible par un moteur immersif commun aux trois sites :

```text
Présentation → Site client → Administration simulée → Retour présentation
```

Le moteur doit fournir :

- un guide visuel vivant ;
- une bulle élégante et lisible ;
- une flèche réellement attachée à l’élément expliqué ;
- un halo ou projecteur autour de la cible ;
- des transitions douces ;
- une progression visible ;
- des choix proposés au visiteur ;
- précédent, suivant, pause, reprendre, quitter et retour permanent ;
- un texte toujours visible ;
- un comportement adapté au mobile, à la tablette et à l’ordinateur.

## 3. Voix de Bastien IA

La synthèse vocale native du navigateur ne doit plus être la voix finale par défaut lorsqu’elle paraît robotisée.

Architecture obligatoire :

1. **Audio pré-généré et approuvé** (`preRecorded`) — solution prioritaire pour les parcours importants ;
2. **TTS serveur sous feature flag** (`serverTts`) — futur raccordement, jamais avec une clé exposée dans le navigateur ;
3. **Voix navigateur** (`browserTts`) — secours et tests uniquement, clairement étiquetée ;
4. **Mode écrit** — toujours disponible et pleinement fonctionnel.

Tant qu’aucune voix douce et naturelle n’est approuvée par Sébastien :

```text
VOIX BASTIEN IA — NON VALIDÉE
MODE ÉCRIT IMMERSIF — PRIORITAIRE
```

Trois échantillons courts devront être préparés : accueil, passage vers le site client et passage vers l’administration. Sébastien choisira ou refusera la voix. Aucun microphone, enregistrement ou service externe ne doit être activé silencieusement.

## 4. Direction visuelle

Le moteur de visite et la présentation doivent reprendre l’univers Jour Pizza Baladzo :

- violet, mauve et rose pâle ;
- fonds lumineux et non austères ;
- panneaux semi-transparents ;
- formes arrondies mais non excessivement carrées ;
- ombres douces ;
- micro-animations utiles ;
- indicateur de progression ;
- illustration de Bastien IA cohérente ;
- pas de grands blocs blancs opaques ;
- pas de voix ou animation lancée sans consentement.

## 5. Interaction attendue

Chaque étape doit contenir au moins une interaction pertinente :

- choisir une direction ;
- ouvrir un élément ;
- répondre à une question courte ;
- comparer deux options ;
- afficher une information complémentaire ;
- passer à la page suivante ;
- revenir en arrière sans perdre la progression.

La visite ne doit jamais devenir un simple diaporama automatique.

## 6. Stratégie d’accélération

Deux voies sont séparées.

### Voie rapide — démarchage et crédibilité

Priorité immédiate :

1. présentation lumineuse et attractive ;
2. prévisualisations interactives des trois sites ;
3. visite Banque et Investisseur immersive ;
4. navigation sans impasse ;
5. pitch bancaire initial ;
6. simulation d’entretien ;
7. preuves et captures propres.

Charge indicative concentrée : **32 à 48 heures effectives**, soit environ **3 à 5 jours de travail focalisé**, hors attente d’une voix externe, de chiffres validés et de décisions humaines.

### Voie profonde — production réelle

Backend, authentification réelle, paiements, matériel, comptabilité réelle, SMS, e-mails, réseaux sociaux et Hostinger continuent ensuite dans leurs lots dédiés. Ils ne doivent pas bloquer la démonstration de démarchage.

## 7. Vagues de travail

### Vague 1 — 4 h

- audit de la visite actuelle ;
- inventaire des défauts ;
- storyboard complet ;
- textes des étapes ;
- design de la bulle, flèche, halo et commandes ;
- critères d’acceptation.

### Vague 2 — 8 h

- nouveau moteur commun ;
- positionnement intelligent de la bulle ;
- flèches ;
- surbrillance ;
- navigation clavier ;
- persistance de session ;
- mode écrit complet ;
- architecture audio à trois fournisseurs.

### Vague 3 — 8 h

- thème Jour de la présentation ;
- hero non coupé ;
- panneaux translucides ;
- intégration du parcours Banque et Investisseur ;
- retour permanent vers la présentation.

### Vague 4 — 8 h

- parcours client ;
- administration simulée ;
- neutralisation des actions réelles ;
- états Fonctionnel / Simulation / À connecter / Bloqué ;
- navigation croisée entre les trois sites.

### Vague 5 — 6 h

- pitch 30 secondes, 2 minutes et 5 minutes ;
- questions probables ;
- première simulation de banquier ;
- fiche d’objections.

### Vague 6 — 6 h

- tests Chrome ;
- mobile, tablette, ordinateur ;
- accessibilité ;
- console ;
- captures ;
- correction des régressions ;
- soumission à Sébastien.

## 8. Critères bloquants

La nouvelle visite reste non validée si :

- la voix paraît robotisée et est activée par défaut ;
- le mode écrit n’est pas complet ;
- une étape n’a ni bulle ni cible ;
- la flèche ne pointe pas précisément la cible ;
- le visiteur ne peut pas interagir ;
- l’interface reste froide ou austère ;
- une page est une impasse ;
- l’étape est perdue lors d’un changement de page ;
- une action réelle est accessible ;
- une donnée privée apparaît ;
- un chiffre sans source est affiché comme définitif ;
- une erreur console critique subsiste ;
- les formats mobile, tablette et ordinateur ne sont pas testés ;
- Sébastien n’a pas approuvé visuellement la visite et la voix.

## 9. Pitch accéléré

Le pitch doit être préparé en parallèle, sans attendre la fin de tout le backend.

Dès maintenant :

- structure narrative ;
- présentation du porteur ;
- problème local ;
- solution Pizza Baladzo ;
- organisation hebdomadaire ;
- forces ;
- risques ;
- ambition de plusieurs unités et franchise à long terme ;
- liste des chiffres encore à valider.

Les montants définitifs restent absents tant qu’ils ne sont pas réconciliés.

## 10. Règle d’exécution

Une micro-tâche = un objectif, un diff, un commit, des tests, des preuves, un rollback et une clôture horodatée Europe/Paris.

Aucun merge vers `main`, aucun Hostinger, aucun paiement réel, aucun e-mail/SMS réel et aucune donnée privée ne sont autorisés dans ce sprint.