# Addendum prioritaire au plan 5.6 — Pizza Baladzo

- Date : 14/07/2026
- Fuseau : Europe/Paris
- Statut : **prioritaire sur toute instruction antérieure contradictoire**
- Périmètre : site client, administration, présentation, démonstrations, données communes et préparation bancaire

## 1. But

Cet addendum concentre les décisions nouvelles ou clarifiées après la création de `roadmap-5.6.md` et de `SESSION-5.6-STRUCTURATION-MAXIMALE.md`.

Codex doit lire dans cet ordre :

1. `SESSION_STATE.md` ;
2. `suivi/roadmap-5.6.md` ;
3. `suivi/data/roadmap-5.6.json` ;
4. `suivi/prompts/SESSION-5.6-STRUCTURATION-MAXIMALE.md` ;
5. **le présent addendum** ;
6. `suivi/data/addendum-plan-5.6-20260714.json`.

En cas de conflit, le présent addendum prévaut.

## 2. Frontière entre structuration et activation réelle

La phase actuelle doit maximiser :

- architecture ;
- contrats de données ;
- feature flags ;
- navigation ;
- démonstrations ;
- simulations ;
- tests ;
- sécurité ;
- documentation ;
- prévisualisations interactives assainies.

Elle ne doit pas activer artificiellement :

- paiement réel ;
- banque ;
- commande réelle ;
- stock réel ;
- authentification réelle ;
- comptabilité réelle ;
- e-mail ou SMS réel ;
- réseaux sociaux réels ;
- matériel réel ;
- Hostinger ou production.

Ces fonctions doivent recevoir dès maintenant une interface, un contrat, un mock, un feature flag, des tests et une checklist de raccordement, mais rester désactivées.

## 3. Bastien IA : séparation obligatoire de deux usages

### 3.1 Guide des démonstrations

Le guide vocal des démos fournit une **sortie vocale ou écrite**.

- aucun microphone ;
- aucun enregistrement ;
- aucune reconnaissance vocale ;
- transcription toujours visible ;
- lecture, pause, reprise, répétition, volume, couper le son ;
- repli écrit complet ;
- aucune API vocale externe sans lot distinct.

Identifiant recommandé : `BASTIEN-DEMO-GUIDE-001`.

### 3.2 Assistant client futur

La saisie vocale par microphone, si elle est réellement souhaitée, appartient à un lot séparé :

`BASTIEN-CLIENT-MIC-001`

Ce lot exigera :

- consentement explicite ;
- indicateur microphone actif ;
- arrêt immédiat ;
- politique de confidentialité ;
- aucun enregistrement par défaut ;
- contrôle navigateur/appareil ;
- validation distincte de Sébastien.

Le moteur de démonstration ne doit jamais dépendre de ce microphone.

## 4. Plateforme unifiée de toutes les démonstrations

Créer un moteur unique et configurable. Profils obligatoires :

1. client ;
2. banque ;
3. investisseurs ;
4. comptable ;
5. emplacements et collectivités ;
6. démarchage commercial ;
7. fournisseurs et partenaires ;
8. administration et exploitation ;
9. dirigeant Sébastien ;
10. supervision complète, nom initial `Mode Bruno` ;
11. profil personnalisé futur.

Identifiant interne immuable du Mode Bruno :

```text
DEMO_SUPERVISION_COMPLETE
```

Le nom affiché est renommable, mais les droits ne dépendent jamais du nom.

### Parcours de référence

```text
Présentation → Site client → Administration simulée → Retour présentation
```

Chaque profil adapte les étapes, les textes et la visibilité des données sans dupliquer le moteur.

### Commandes communes

- précédent ;
- suivant ;
- pause ;
- reprise ;
- quitter ;
- retour permanent ;
- recommencer ;
- changement vocal/écrit ;
- progression ;
- historique de session.

Aucune étape ne doit être une impasse.

## 5. Prévisualisations interactives des trois sites

La galerie de captures reste une preuve historique. Le besoin réel est un portail cliquable :

```text
/client/
/administration/
/presentation/
```

Chaque preview doit :

- fonctionner dans Google Chrome ;
- permettre les clics sur pages, menus et boutons ;
- utiliser des données fictives ou assainies ;
- neutraliser toutes les actions réelles ;
- afficher un bandeau permanent ;
- permettre le retour au portail ;
- signaler les fonctions `FONCTIONNELLE`, `SIMULATION`, `À CONNECTER` ou `BLOQUÉE` ;
- conserver branche, commit et horodatage.

Les sources fonctionnelles brutes ne doivent pas être poussées dans le dépôt public actuel.

## 6. Registre commun des chiffres

Tous les prix, coûts, marges, bénéfices, investissements, charges et seuils visibles dans une démo doivent provenir du même identifiant.

Statuts :

```text
VALIDE
A_VALIDER
CONTRADICTION
CONFIDENTIEL
NON_APPLICABLE
BROUILLON_LOCAL
```

Règles :

- aucune source claire → `value = null`, statut `A_VALIDER` ;
- divergence → `value = null`, statut `CONTRADICTION`, candidats et sources conservés ;
- aucune valeur copiée en dur dans plusieurs sites ;
- aucune donnée confidentielle dans la projection client ou présentation publique ;
- la comptabilité simulée peut voir les données autorisées, mais jamais une donnée réelle brute ;
- les prix réels du client ne changent pas automatiquement.

Texte obligatoire :

```text
CONTRADICTION CHIFFRE — VALIDATION SÉBASTIEN NÉCESSAIRE
```

## 7. Comptabilité privée

Le lot actuel crée :

- un prototype local ;
- des données fictives ;
- une matrice de visibilité ;
- des brouillons en `sessionStorage` ;
- un export de proposition JSON ;
- une spécification complète de la future version réelle.

La future version réelle exigera :

- authentification serveur ;
- MFA ;
- rôles `DIRIGEANT` et `COMPTABILITE` ;
- expiration et révocation de session ;
- journal d’audit ;
- chiffrement ;
- sauvegarde et restauration ;
- séparation lecture/écriture ;
- historique des valeurs ;
- validation avant diffusion.

Un simple paramètre URL, masquage CSS ou JavaScript ne constitue pas un accès privé.

## 8. Direction visuelle du site de présentation

Le site présentation adopte l’univers du mode Jour du site client :

- ciel lumineux ;
- soleil ;
- arbres ;
- oiseaux décoratifs ;
- unité mobile visible ;
- violet, mauve et rose pâle ;
- panneaux semi-transparents ;
- très peu de blanc pur ;
- aucune succession austère de grands blocs blancs.

Le décor doit rester visible sous le texte, sans réduire la lisibilité.

Les images doivent posséder un point focal et des variantes responsive. Un camion ne vaut pas preuve d’une remorque.

## 9. Vision de développement

Formulation stratégique :

1. réussir et stabiliser la première unité mobile ;
2. standardiser les méthodes ;
3. envisager plusieurs unités mobiles ;
4. étudier ensuite un réseau sous licence ou en franchise.

Ne jamais présenter la franchise comme existante ou garantie.

Le terme provisoire reste `unité mobile Pizza Baladzo` tant que camion/remorque n’est pas tranché.

## 10. Organisation hebdomadaire cible

- lundi à vendredi : midi et soir ;
- samedi midi : approvisionnement, préparation, stock et entretien ;
- samedi soir : service ;
- dimanche : sans service dans l’organisation cible.

Total : **onze services commerciaux par semaine**.

Cette organisation reste une cible à valider par des essais réels.

## 11. Pitch bancaire et simulation

Ajouter les tâches :

- `BANQUE-PITCH-001` ;
- `BANQUE-QUESTIONS-001` ;
- `BANQUE-SIMULATION-001` ;
- `BANQUE-SIMULATION-002` ;
- `BANQUE-REPETITION-FINALE-001`.

Déclenchement après validation du véhicule, du besoin, de l’apport, du prêt, du CA, des charges et des prix.

Livrables : pitch 30 secondes, 2 minutes, 5 minutes, 10 minutes, objections et fiche d’une page.

## 12. Ordre prioritaire des tâches à forte réflexion

1. `TRACKER-001` — finaliser la preuve GitHub → Vercel ;
2. `SOURCE-001` — dépôt privé canonique ;
3. `ARCH-001` — architecture progressive et ADR ;
4. `DATA-001` — contrats et registre des données ;
5. `FLAGS-001` — feature flags ;
6. `DESIGN-SYSTEM-001` — design partagé ;
7. `PREVIEW-INTERACTIVE-001` — trois previews cliquables ;
8. `DEMO-SUITE-001` — moteur de démonstration ;
9. `DEMO-PROFILES-001` — tous les profils ;
10. `BACKEND-001` — architecture API et états, sans production ;
11. `AUTH-001` — modèle de rôles et sécurité ;
12. `FINANCE-001` — modèle financier commun ;
13. `SECURITY-001` — modèle de menace et reprise ;
14. `QA-001` — stratégie complète de tests.

Les corrections purement cosmétiques ou mécaniques peuvent être exécutées plus tard si elles sont déjà entièrement spécifiées.

## 13. Critères de validation

Aucun lot ne peut atteindre 100 % si :

- une action réelle est accessible ;
- une route externe arbitraire est acceptée ;
- une donnée privée est visible ;
- un chiffre n’a pas de source ;
- une contradiction est masquée ;
- une preview ouvre seulement des images ;
- le mode écrit ne fonctionne pas ;
- la voix n’a pas de repli texte ;
- une page n’a pas de sortie ;
- un test critique échoue ;
- la clôture n’est pas horodatée ;
- ChatGPT ou Sébastien n’a pas validé lorsque nécessaire.

## 14. Fin de tâche

Chaque tâche, y compris bloquée, enregistre :

- début ;
- dernière mise à jour ;
- fin ou fin de tentative ;
- fuseau `Europe/Paris` ;
- durée réelle ;
- branche ;
- commit ;
- tests ;
- preuves ;
- décision Codex ;
- décision ChatGPT ;
- décision Sébastien.
