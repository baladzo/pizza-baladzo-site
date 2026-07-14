# CODEX — SPRINT URGENT VISITE GUIDÉE ET ACCÉLÉRATION

## Mission

Refondre la visite guidée Pizza Baladzo, actuellement refusée par Sébastien, et accélérer les livrables démonstration et pitch sans compromettre la qualité ni la sécurité.

Commencer par :

`✅ AUCUNE ACTION SÉBASTIEN REQUISE — REFONTE URGENTE DE LA VISITE EN COURS`

## Verdict à respecter

La visite actuelle n’est pas acceptable comme expérience finale : voix robotisée, présentation froide et austère, manque de bulles, flèches, surbrillance et interactions.

Ne pas améliorer marginalement l’interface actuelle. Conserver ses preuves, puis construire une nouvelle version dans une branche isolée.

## Priorité et méthode

- priorité CRITIQUE ;
- travailler par micro-tâches de 30 à 90 minutes ;
- produire rapidement une preview Chrome testable ;
- un diagnostic court, un changement visible, des tests, un commit, un horodatage ;
- ne pas rester bloqué : passer à une tâche indépendante ;
- ne pas modifier `main`, Hostinger ou la production.

## Branche

Créer une branche isolée :

`codex/demo-experience-v2-YYYYMMDD-HHMM`

## 1. Nouveau moteur de visite

Créer un moteur partagé qui fonctionne sur les trois sites et propose :

- choix au départ : vocal ou écrit ;
- bulle Bastien IA avec avatar chaleureux ;
- flèche SVG positionnée vers la cible ;
- halo/spotlight autour de la cible ;
- masque léger du reste de la page ;
- compteur d’étapes ;
- précédent ;
- suivant ;
- pause/reprise ;
- répéter ;
- couper/rétablir le son ;
- quitter ;
- retour permanent vers la présentation ;
- reprise de l’étape entre pages ;
- aucune impasse ;
- repli écrit complet.

La bulle doit être courte, humaine, chaleureuse et non administrative.

## 2. Interaction avec le visiteur

Au démarrage, demander :

1. Quel est votre profil ?
   - banque ;
   - investisseur ;
   - comptable ;
   - collectivité / emplacement ;
   - commercial / partenaire ;
   - Sébastien ;
   - supervision complète.

2. Comment souhaitez-vous être guidé ?
   - vocal ;
   - écrit.

3. Quel niveau de détail ?
   - rapide ;
   - standard ;
   - approfondi.

Adapter les étapes et les explications à ces réponses.

Ajouter des choix contextuels tels que :

- découvrir le concept ;
- voir le parcours client ;
- examiner les chiffres ;
- voir l’administration simulée ;
- comprendre les risques ;
- revenir au sommaire.

## 3. Design attendu

- thème Jour ;
- violet, mauve et rose pâle ;
- panneaux semi-transparents ;
- micro-animations douces ;
- avatar Bastien IA avec états écouter/parler/pause ;
- transitions de 180 à 300 ms ;
- aucune grande boîte grise ou blanche froide ;
- pas d’effet gadget excessif ;
- responsive mobile, tablette et ordinateur ;
- accessibilité clavier ;
- `prefers-reduced-motion`.

## 4. Voix naturelle

La voix navigateur actuelle ne doit plus être la voix principale.

### Solution rapide recommandée

Les textes étant prédéfinis, préparer des fichiers audio en amont et les mettre en cache. Utiliser le navigateur uniquement comme repli.

### Échantillons

Préparer trois extraits avec au moins trois voix candidates :

- accueil ;
- transition client ;
- transition administration.

Si une intégration OpenAI TTS est déjà autorisée et configurée côté serveur ou outil local :

- utiliser `gpt-4o-mini-tts` ;
- tester en priorité `marin`, `cedar`, puis `coral` ;
- instructions de style : français naturel, voix douce, posée, chaleureuse, souriante, débit modéré, pauses courtes, aucune intonation publicitaire ;
- produire des fichiers audio statiques ;
- ne jamais exposer la clé dans le navigateur, le dépôt ou les rapports ;
- afficher que la voix est générée par IA.

Si aucune clé n’est déjà disponible :

- ne demander aucun secret dans le chat ;
- terminer le moteur, les textes et le mode écrit ;
- conserver la voix navigateur seulement sous le libellé `VOIX DE SECOURS` ;
- classer la voix naturelle `BLOQUÉE — GÉNÉRATION AUDIO NON CONFIGURÉE`.

Aucune voix n’est validée sans écoute de Sébastien.

## 5. Parcours prioritaire

Créer d’abord un parcours convaincant et complet :

Présentation → Site client → Administration simulée → Retour présentation.

Étapes minimales :

1. accueil et objectif ;
2. concept Pizza Baladzo ;
3. parcours et crédibilité de Sébastien ;
4. offre client ;
5. menu et personnalisation ;
6. panier et commande simulée ;
7. horaires et emplacements ;
8. administration simulée ;
9. commandes et préparation ;
10. stocks et hygiène ;
11. chiffres autorisés et source commune ;
12. fonctions à connecter ;
13. risques et protections ;
14. conclusion et retour présentation.

## 6. Neutralisation des actions réelles

Dans la visite :

- aucun paiement ;
- aucune commande réelle ;
- aucun e-mail ;
- aucun SMS ;
- aucune modification de stock ;
- aucune écriture comptable ;
- aucune publication ;
- aucune donnée client réelle.

Tout clic sensible affiche une simulation claire.

## 7. Accélération des trois sites

En parallèle, livrer les éléments visibles et nécessaires au démarchage :

### Présentation

- thème Jour chaleureux ;
- hero non coupé ;
- fond remorque/unité mobile ;
- blocs translucides ;
- navigation et retour complets ;
- page parcours ;
- vision plusieurs unités/franchise ;
- organisation de onze services ;
- impression propre.

### Client

- hero non coupé ;
- navigation ;
- menu ;
- panier local ;
- personnalisation ;
- modes Jour/Nuit/Auto ;
- interactions démontrables ;
- fonctions non connectées expliquées.

### Administration

- navigation en simulation ;
- modules existants ;
- données fictives ;
- trois destinations absentes avec écran explicatif ;
- aucune fonction réelle.

## 8. Pitch immédiat

Créer en parallèle :

- pitch 30 secondes sans chiffre incertain ;
- pitch 2 minutes sans chiffre incertain ;
- fiche de 15 questions probables de banque ;
- réponses prudentes ;
- champs à compléter lorsque les chiffres seront validés.

Ne pas attendre le prévisionnel final pour produire cette première version.

## 9. Tests

Tester :

- parcours complet ;
- toutes les étapes ;
- flèches ;
- bulles ;
- repositionnement au scroll et resize ;
- cible absente ;
- reprise d’étape ;
- vocal ;
- écrit ;
- repli sans audio ;
- pause/reprise ;
- volume ;
- quitter ;
- retour ;
- mobile ;
- tablette ;
- ordinateur ;
- clavier ;
- lecteur d’écran ;
- console ;
- réseau ;
- absence d’action réelle ;
- absence de donnée privée ;
- absence de secret.

## 10. Livrables visibles rapidement

Dans les premières heures, fournir :

1. storyboard de 14 étapes ;
2. maquette du nouveau panneau Bastien IA ;
3. preview interactive texte ;
4. trois échantillons vocaux ou blocage documenté ;
5. captures mobile/tablette/ordinateur ;
6. pitch 30 secondes ;
7. pitch 2 minutes.

## 11. Clôture

Après chaque micro-tâche :

- branche ;
- commit ;
- fichiers ;
- tests ;
- preuves ;
- début ;
- fin Europe/Paris ;
- durée ;
- prochaine action.

Ne pas déclarer la visite à 100 % sans validation visuelle et vocale de Sébastien.
