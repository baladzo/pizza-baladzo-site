# Urgence — refonte de la visite guidée et accélération des trois sites

- Projet : **Pizza Baladzo**
- Décision de Sébastien : 14/07/2026
- Fuseau : Europe/Paris
- Statut : **priorité critique**

## Verdict sur la visite actuelle

La visite actuelle est refusée comme expérience finale : voix trop robotisée, présentation froide, manque de bulles, flèches, surbrillance et interaction réelle avec le visiteur.

Elle peut rester une preuve technique, mais ne doit pas être présentée comme visite convaincante pour une banque, un investisseur ou un partenaire.

## Objectif prioritaire

Produire une démonstration vivante, chaleureuse et convaincante avec :

- choix écrit ou vocal au démarrage ;
- voix naturelle de qualité, soumise à validation de Sébastien ;
- bulles contextuelles ;
- flèches et surbrillance des éléments ;
- interactions et choix du visiteur ;
- progression visible ;
- précédent, suivant, pause, reprise, quitter et retour permanent ;
- parcours Présentation → Client → Administration simulée → Présentation ;
- aucun effet réel ;
- aucun chiffre sans source ;
- aucune donnée privée.

## Architecture vocale décidée

### Version rapide et fiable

Les textes de la visite sont prédéfinis. Générer des fichiers audio naturels en amont, puis les lire localement ou dans la preview. Cette solution évite la voix robotisée du navigateur, la latence et une dépendance API à chaque visite.

### Validation vocale

Produire au minimum trois voix candidates et trois extraits :

1. accueil ;
2. transition vers le site client ;
3. transition vers l’administration.

Aucune voix n’est définitive sans écoute et validation de Sébastien.

### Repli obligatoire

Le mode écrit reste complet et utilisable sans audio.

## Design de la visite

- thème Jour lumineux ;
- violet, mauve et rose pâle ;
- panneaux translucides ;
- avatar Bastien IA chaleureux ;
- animation douce, non infantile ;
- masque de mise en avant de l’élément ciblé ;
- flèche SVG recalculée selon la position de la cible ;
- bulles courtes ;
- choix interactifs ;
- affichage des états : fonctionnel, simulation, à connecter, bloqué ;
- accessibilité clavier et lecteur d’écran ;
- respect de `prefers-reduced-motion`.

## Accélération — stratégie

Le projet complet en production reste un chantier long. Pour le démarchage proche, la priorité devient une **version démonstration commerciale convaincante** et un **pitch bancaire solide**, sans attendre les connexions réelles.

### Vague 1 — immédiate

1. moteur de visite attractif ;
2. prévisualisations interactives des trois sites ;
3. thème Jour présentation ;
4. images d’accueil correctement cadrées ;
5. navigation et retour entre les trois sites ;
6. voix naturelle candidate ;
7. pitch 30 secondes et 2 minutes sans chiffres incertains.

### Vague 2

1. profils banque, investisseur, comptable, collectivités et commercial ;
2. registre commun des chiffres ;
3. administration simulée ;
4. pitch 5 minutes et 10 minutes ;
5. questions-réponses banque.

### Vague 3

1. tests complets ;
2. corrections ;
3. validation Sébastien ;
4. préparation du démarchage.

## Règle de cadence

- micro-tâches de 30 à 90 minutes ;
- un commit par micro-tâche ;
- tests et preuve à chaque clôture ;
- aucun long audit sans livrable visible ;
- priorité aux écrans et parcours que Sébastien peut essayer dans Chrome ;
- blocage limité : passer immédiatement à une tâche indépendante.

## Interdictions

Aucun `main`, Hostinger, FTP, `public_html`, DNS, paiement réel, e-mail réel, SMS réel, donnée client réelle ou secret.

## Critère de succès

La visite ne sera acceptée que si Sébastien la juge :

- chaleureuse ;
- claire ;
- naturelle ;
- interactive ;
- agréable à regarder ;
- crédible pour les interlocuteurs de l’entreprise.
