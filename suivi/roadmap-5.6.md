# Pizza Baladzo — feuille de route de structuration maximale

> Document de pilotage créé pour figer maintenant les décisions d’architecture et les tâches à forte charge de raisonnement, afin que leur exécution reste reproductible avec Codex ou une version ultérieure du modèle.

## 1. Règles non négociables

- Nom officiel : **Pizza Baladzo**.
- La branche `main`, Hostinger, `public_html`, FTP, les DNS et le domaine officiel restent interdits sans GO explicite distinct.
- Les fichiers fonctionnels ne sont jamais modifiés directement depuis le dépôt public de suivi.
- Les vrais travaux doivent être réalisés dans des worktrees ou branches privées, isolées et réversibles.
- Une micro-tâche = un diagnostic = un commit = des tests = des preuves = un horodatage de fin.
- Aucune tâche n’est déclarée à 100 % sans preuve, non-régression et validation humaine lorsque nécessaire.
- Les actions réelles (paiement, banque, e-mail, SMS, réseaux sociaux, matériel) restent désactivées tant que les comptes, contrats et validations ne sont pas disponibles.

## 2. Architecture cible progressive

L’objectif n’est pas de réécrire brutalement le site. La base HTML/CSS/JavaScript existante est conservée, puis structurée progressivement autour de modules partagés.

```text
pizza-baladzo-canonique-prive/
├── apps/
│   ├── client/
│   ├── admin/
│   └── presentation/
├── packages/
│   ├── config/
│   ├── data-contracts/
│   ├── design-tokens/
│   ├── demo-engine/
│   ├── preview-guard/
│   ├── domain/
│   └── testing/
├── services/
│   └── api/
├── tools/
│   ├── audit/
│   ├── migration/
│   └── release/
├── docs/
├── tests/
└── infra/
```

### Principe de migration

1. Importer la base officielle vérifiée sans modification.
2. Établir les contrats de données et les feature flags.
3. Ajouter les modules partagés autour de l’existant.
4. Extraire progressivement le code dupliqué sans changer le rendu.
5. Activer les fonctions une par une avec tests de non-régression.

## 3. Sources de vérité communes

Les trois sites doivent lire des données centralisées et validées, sans copier manuellement les mêmes chiffres ou coordonnées.

```text
packages/config/
├── public-contact.json
├── public-locations.json
├── feature-flags.json
├── environments.json
└── brand.json

packages/data-contracts/
├── catalog.schema.json
├── orders.schema.json
├── customers.schema.json
├── reviews.schema.json
├── loyalty.schema.json
├── inventory.schema.json
├── finance.schema.json
├── demos.schema.json
└── presentation-metrics.schema.json
```

Chaque donnée sensible possède : `visibility`, `source`, `status`, `validatedBy`, `validatedAt` et `environment`.

## 4. Programme de travail à forte charge de raisonnement

| Ordre | Identifiant | Domaine | Résultat attendu | Dépendances | Validation Sébastien |
|---:|---|---|---|---|---|
| 1 | `TRACKER-001` | Suivi | Déploiement automatique GitHub → Vercel réellement prouvé | Authentification Vercel | Non, sauf connexion |
| 2 | `SOURCE-001` | Gouvernance | Dépôt GitHub privé canonique et branches de travail sécurisées | Accès GitHub | Oui pour le nom final |
| 3 | `ARCH-001` | Architecture | Arborescence progressive, conventions, ADR et plan de migration sans réécriture brutale | SOURCE-001 | Non |
| 4 | `DATA-001` | Données | Contrats communs client/admin/présentation et source unique des chiffres | ARCH-001 | Oui pour les chiffres |
| 5 | `FLAGS-001` | Sécurité | Feature flags par environnement : local, preview, préprod, production | ARCH-001 | Non |
| 6 | `PREVIEW-INTERACTIVE-001` | Prévisualisation | Trois sites cliquables et assainis sur Vercel | TRACKER-001, SOURCE-001 | Oui visuellement |
| 7 | `DESIGN-SYSTEM-001` | Design | Tokens Jour/Nuit, typographie, contrastes, espacements et composants partagés | ARCH-001 | Oui visuellement |
| 8 | `CLIENT-CART-001` | Client | Panier fiable, pizzas personnalisées, bases, ingrédients, quantités et persistance | DATA-001 | Oui fonctionnellement |
| 9 | `CLIENT-FORMULAS-001` | Client | Routage des formules et suggestions depuis pizzas, desserts et boissons | CLIENT-CART-001 | Oui métier |
| 10 | `CLIENT-BASTIEN-001` | Client | Choix écrit/vocal, micro, synthèse vocale, couper le son, allergies et consentement | FLAGS-001, DATA-001 | Oui expérience |
| 11 | `CLIENT-MEDIA-001` | Client | Images sans rechargement manuel, préchargement raisonné, cache et fallback | PREVIEW-INTERACTIVE-001 | Non |
| 12 | `CLIENT-DESIGN-JOUR-001` | Client | Hero non coupé, bouton relevé, panneaux translucides, remorque fixe et contrastes corrigés | DESIGN-SYSTEM-001 | Oui visuellement |
| 13 | `CLIENT-CONTACT-001` | Client | Message e-mail naturel, encodage propre et coordonnées publiques validées | DATA-001 | Oui contenu |
| 14 | `CLIENT-REVIEWS-001` | Client/API | Notes, seuil de cinq avis, commentaires par produit, avis personnels et fidélité | BACKEND-001, AUTH-001 | Oui règles |
| 15 | `CLIENT-PWA-001` | Client | Installation, hors-ligne, reprise réseau, cache versionné et mise à jour sûre | CLIENT-MEDIA-001 | Non |
| 16 | `ADMIN-ENCODING-001` | Admin | Encodage UTF-8 réparé sans modifier le sens des contenus | PREVIEW-INTERACTIVE-001 | Oui visuellement |
| 17 | `ADMIN-NAV-001` | Admin | Trois destinations absentes traitées par modules réels ou liens validés | ARCH-001 | Oui conception |
| 18 | `ADMIN-EDITOR-001` | Admin | Ancien éditeur neutralisé puis retiré sans supprimer d’autres fonctions | SOURCE-001 | Oui avant retrait |
| 19 | `AUTH-001` | API/Admin | Comptes, rôles, sessions, confidentialité, récupération et journal d’accès | BACKEND-001 | Oui politique |
| 20 | `ORDERS-001` | API/Admin | États commande, créneaux, préparation, retrait, annulation et reprise | DATA-001, AUTH-001 | Oui métier |
| 21 | `INVENTORY-001` | API/Admin | Stocks, fournisseurs, lots, DLC, alertes et traçabilité hygiène | ORDERS-001 | Oui métier |
| 22 | `FINANCE-001` | Admin/Présentation | Chiffres cohérents, TVA, marges, charges, exports et indicateurs banque | DATA-001 | Oui chiffres |
| 23 | `NOTIFY-001` | API/Admin | Architecture e-mail, SMS et notifications, templates, consentements et reprise | BACKEND-001 | Oui fournisseurs |
| 24 | `PRESENTATION-JOUR-001` | Présentation | Thème Jour lumineux, hero non coupé, fond uniforme et carte remorque | DESIGN-SYSTEM-001 | Oui visuellement |
| 25 | `PRESENTATION-PARCOURS-001` | Présentation | Page personnelle comparée aux neuf sections sources, clavier et impression | PREVIEW-INTERACTIVE-001 | Oui contenu |
| 26 | `PRESENTATION-DATA-001` | Présentation | Données financières et opérationnelles issues de la source commune | DATA-001, FINANCE-001 | Oui chiffres |
| 27 | `DEMO-SUITE-001` | Trois sites | Moteur commun banque, investisseur, comptable, emplacements, commercial, Sébastien et mode A-Z renommable | DATA-001, FLAGS-001, AUTH-001 | Oui chaque profil |
| 28 | `DEMO-NAV-001` | Trois sites | Retour permanent, étapes, pause, reprise, progression et navigation croisée | DEMO-SUITE-001 | Oui expérience |
| 29 | `BACKEND-001` | API | API versionnée, base de données, validation, idempotence, journalisation et environnements | ARCH-001, DATA-001 | Non pour l’architecture |
| 30 | `PAYMENTS-001` | API/Admin | Stripe test, web, Terminal, rapprochement et garde-fous live | BACKEND-001, ORDERS-001 | GO live obligatoire |
| 31 | `EQUIPMENT-001` | Exploitation | Contrats d’intégration tablette, imprimante, écran cuisine, TPE et réseau | ORDERS-001 | Matériel réel requis |
| 32 | `LEGAL-001` | Client/Admin | RGPD, cookies, compte, droits, CGV/commande, confidentialité et allergènes | AUTH-001, DATA-001 | Validation juridique |
| 33 | `SECURITY-001` | Tous | Modèle de menace, secrets, CSP, permissions, sauvegarde, restauration et audit | BACKEND-001 | Non |
| 34 | `QA-001` | Tous | Tests unitaires, intégration, E2E, responsive, accessibilité, performance et sécurité | Toutes fonctions concernées | Non |
| 35 | `HOSTINGER-PREPROD-001` | Infrastructure | Préproduction séparée, déploiement contrôlé et rollback, sans toucher au site officiel | SOURCE-001, QA-001 | GO Hostinger |
| 36 | `RELEASE-001` | Production | Recette complète, critères d’ouverture, rollback et validation finale | Toutes | GO final obligatoire |

## 5. Fonctions à activer en priorité dans les copies privées

### Site client

- Panier et pizzas personnalisées entièrement fiables.
- Formules reliées et suggestions contextuelles.
- Bastien écrit/vocal avec son désactivable.
- Chargement d’images robuste.
- Mode Jour corrigé sans casser Nuit/Auto.
- Contrastes allergènes, encarts et typographie.
- Avis, notes, commentaires et fidélité avec séparation des données personnelles.
- PWA et fonctionnement dégradé hors ligne.

Les demandes détaillées proviennent des retours de Sébastien sur le panier, les photos, les formules, Bastien, les avis, la fidélité, les e-mails et la lisibilité.

### Site admin

- Encodage propre.
- Navigation complète.
- Rôles et permissions.
- Commandes, créneaux, préparation et stocks.
- Comptabilité, marges et exports.
- Notifications et journalisation.
- Modes de démonstration configurables.
- Sécurité, sauvegarde et restauration.

### Site de présentation

- Thème Jour clair et professionnel.
- Images d’accueil non coupées.
- Petite carte remorque sous l’introduction.
- Retour permanent depuis les démonstrations.
- Page parcours validée contre la source.
- Chiffres synchronisés avec les données communes.
- Pages imprimables et accessibles.
- Démonstrations adaptées à chaque destinataire.

## 6. Moteur commun de démonstration

Les profils sont des configurations, pas des copies de code :

```json
{
  "internalId": "demo-full-az",
  "displayName": "Mode Bruno",
  "renamable": true,
  "realActionsAllowed": false,
  "visibility": "full-simulated",
  "steps": [],
  "resetOnExit": true
}
```

Profils obligatoires :

- Démo Sébastien.
- Banque.
- Investisseur.
- Comptable.
- Emplacements / mairies / partenaires terrain.
- Commercial / entreprises / associations / événements.
- Mode complet A-Z renommable.
- Profil personnalisé futur.

Toutes les démos utilisent des données fictives, un bandeau visible, un retour permanent, des boutons précédent/suivant/pause/quitter et aucune action réelle.

## 7. Règles de progression

- 0 % : non commencé.
- 25 % : diagnostic et critères d’acceptation complets.
- 50 % : code terminé dans une branche privée.
- 75 % : tests techniques réussis.
- 90 % : non-régression et preuves disponibles.
- 100 % : validation humaine et réelle obtenue lorsque nécessaire.

La progression d’une session ne doit jamais être confondue avec la préparation opérationnelle globale.

## 8. Estimation de charge réconciliée

Estimation initiale, à recalculer après les audits détaillés :

- Architecture, données, sécurité et gouvernance : **70 à 110 h**.
- Client : **120 à 180 h**.
- Admin : **170 à 260 h**.
- Présentation et démonstrations : **90 à 150 h**.
- Backend et intégrations : **160 à 260 h**.
- Tests, juridique, préproduction et ouverture : **100 à 170 h**.

Total technique indicatif : **710 à 1 130 heures**.

Ce total inclut la construction complète vers le vrai objectif de production, mais exclut les délais calendaires imposés par la banque, Stripe, les fournisseurs, le matériel, les réseaux sociaux et les validations juridiques.

## 9. Exécution immédiate recommandée

1. Finir `TRACKER-001`.
2. Créer le dépôt privé canonique.
3. Publier les trois previews interactives assainies.
4. Figer les contrats de données, feature flags et tokens de design.
5. Lancer en parallèle les lots client, admin, présentation et moteur de démo dans des worktrees privés.
6. Mettre à jour le tableau après chaque micro-tâche avec date et heure Europe/Paris.

## 10. État de ce document

- Ce document structure les décisions à forte charge de raisonnement.
- Il n’autorise aucune publication sur le domaine officiel.
- Il ne remplace pas les validations de Sébastien.
- Il doit rester lisible par Codex, ChatGPT et tout futur intervenant.