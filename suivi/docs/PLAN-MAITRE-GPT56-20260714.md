# Plan maître GPT-5.6 — Pizza Baladzo

- Généré le : 14/07/2026 à 06:34:44, heure de Paris
- Fuseau : Europe/Paris
- Statut : architecture et décisions complexes figées ; implémentation à exécuter dans des branches privées et isolées
- Nom officiel unique : **Pizza Baladzo**

## 1. But de ce document

Ce document concentre les décisions qui demandent le plus de réflexion afin d’éviter de recommencer l’architecture lorsque les travaux continueront avec un autre modèle ou un autre agent.

Il couvre simultanément :

1. le site client ;
2. le site administration ;
3. le site de présentation ;
4. la plateforme unifiée de démonstrations ;
5. le registre commun des données et chiffres ;
6. le suivi central ;
7. la sécurité, les rôles, les tests et le futur déploiement.

Il ne vaut ni déploiement, ni validation de production, ni autorisation de modifier `main`.

## 2. Règles non négociables

- Aucun changement silencieux de chiffre, de véhicule, de statut juridique ou de donnée personnelle.
- Aucune ancienne graphie ne devient un nom public.
- Aucun secret, mot de passe, token, clé API, donnée bancaire ou client dans GitHub, Vercel, les rapports ou les démonstrations.
- GitHub conserve les versions et les preuves ; Vercel sert aux suivis et prévisualisations ; Hostinger interviendra seulement pour l’hébergement final validé.
- Aucune branche fonctionnelle brute ne doit être rendue publique avant assainissement.
- Aucun paiement, SMS, e-mail, commande, modification de stock ou écriture comptable réelle pendant les lots de prévisualisation.
- L’ancien éditeur visuel est exclu.
- Toute tâche terminée ou bloquée possède une date, une heure, un fuseau et une durée.
- Une fonction visuellement présente n’est pas considérée connectée sans test de bout en bout.
- Aucun 100 % sans preuve, contrôle ChatGPT et validation de Sébastien.

## 3. Architecture cible sans réécriture totale

La stratégie retenue est une **modularisation progressive**, pas une reconstruction complète.

```text
pizza-baladzo-workspace/
├── client/                         # site client existant, progressivement assaini
├── administration/                 # administration existante et futurs modules réels
├── presentation/                   # site banques, investisseurs et partenaires
├── demos/                          # moteur unifié de toutes les démonstrations
├── shared/
│   ├── design-tokens/              # couleurs, espacements, typographie, focus
│   ├── navigation/                 # routes autorisées et retours inter-sites
│   ├── demo-engine/                # bulles, flèches, étapes, Bastien IA
│   ├── reference-data/             # registre maître des chiffres par identifiant
│   ├── schemas/                    # schémas JSON et états autorisés
│   ├── security/                   # règles d’assainissement et listes interdites
│   └── status/                     # badges réel / simulé / à connecter / bloqué
├── previews/                       # copie interactive assainie, jamais les sources brutes
├── tests/                          # scénarios transversaux
└── reports/                        # preuves et clôtures horodatées
```

Les fichiers actuels restent utilisables. Les composants communs sont ajoutés par petites étapes réversibles.

## 4. Topologie des environnements

| Environnement | Rôle | Données | Déploiement |
|---|---|---|---|
| Source locale privée | travail fonctionnel complet | données de travail contrôlées | aucun accès public |
| Branches Git d’audit | preuves assainies | aucune donnée sensible | GitHub public possible |
| Prévisualisations interactives | inspection Chrome des trois sites | données fictives ou assainies | Vercel séparé |
| Suivi central | avancement, tests, preuves | métadonnées uniquement | Vercel |
| Production finale | activité réelle | données réelles protégées | Hostinger ou architecture validée ultérieurement |

## 5. Design system partagé

### 5.1 Identité

- Couleur principale : violet.
- Couleurs secondaires : mauve, rose pâle, crème chaud.
- Mode Jour du client : référence visuelle du site de présentation.
- Mode Nuit : conservé côté client, jamais imposé à la présentation bancaire.
- Police lisible, focus visible, contraste mesuré, animations réduites lorsque `prefers-reduced-motion` est actif.

### 5.2 Présentation

- Fond lumineux avec ciel, soleil, arbres et unité mobile.
- Panneaux violet-rose semi-transparents, pas de succession de grands carrés blancs.
- Le décor reste visible sous les panneaux sans nuire à la lecture.
- Image importante non coupée : `contain` ou recadrage par point focal validé.
- Même univers sur accueil, business plan, marché, budget, juridique, parcours, contact et démonstrations.

### 5.3 Images

Chaque image doit posséder :

- identifiant d’asset ;
- dimensions ;
- point focal ;
- usage autorisé (`hero`, `card`, `print`) ;
- variante ordinateur, tablette, mobile ;
- texte alternatif ;
- statut camion/remorque ;
- validation Sébastien.

Aucun visuel camion ne vaut preuve d’une remorque.

## 6. Navigation inter-sites

### 6.1 Routes fixes

Les retours ne doivent jamais dépendre d’une URL arbitraire fournie dans la barre d’adresse.

```text
Présentation → Client → Administration simulée → Présentation
```

Toutes les destinations sont issues d’une liste blanche centrale.

### 6.2 Bandeau de prévisualisation

Chaque page de preview affiche :

- nom du site ;
- branche ;
- commit ;
- date de génération ;
- retour au portail ;
- état réel de la fonction ;
- mention « aucune action réelle ».

## 7. Moteur unifié de démonstrations

Un seul moteur alimente tous les profils :

- client ;
- banque ;
- investisseurs ;
- comptable ;
- emplacements et collectivités ;
- démarchage commercial ;
- fournisseurs et partenaires ;
- administration et exploitation ;
- dirigeant ;
- supervision complète, nom initial « Mode Bruno ».

Identifiant stable du mode renommable :

```text
DEMO_SUPERVISION_COMPLETE
```

Le nom affiché est une configuration et ne détermine jamais les droits.

### 7.1 Fonctions communes

- choix vocal ou écrit ;
- Bastien IA ;
- transcription toujours visible ;
- bulles, flèches et surbrillance ;
- précédent, suivant, quitter, retour ;
- reprise de session ;
- étapes persistées entre pages via `sessionStorage` ;
- aucune URL externe arbitraire ;
- aucune action métier réelle ;
- état d’une fonction : réel, testé localement, simulation, à connecter, bloqué.

### 7.2 Bastien IA

- voix calme et naturelle, mais aucune validation définitive sans écoute humaine ;
- repli complet en texte ;
- lecture, pause, reprise, répétition, volume, arrêt ;
- arrêt automatique au changement de page ;
- aucun microphone ;
- aucun service vocal externe sans lot et autorisation séparés.

## 8. Registre maître des données et chiffres

Fichier maître privé :

```text
shared/reference-data/master-reference-pizza-baladzo.json
```

Chaque donnée possède :

- `id` stable ;
- libellé ;
- catégorie ;
- valeur ;
- unité ;
- statut ;
- sources ;
- candidats contradictoires ;
- visibilité ;
- sections autorisées ;
- formule ;
- dépendances ;
- date d’effet ;
- date de mise à jour ;
- validateur.

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

- source absente → valeur finale nulle ;
- divergence → `CONTRADICTION`, valeur finale nulle, candidats conservés ;
- aucune marge ou bénéfice recopié si calculable ;
- aucune donnée confidentielle dans les projections client ou présentation publique ;
- un identifiant garde la même définition dans tous les sites.

Projections générées :

```text
generated/client-reference.json
generated/presentation-reference.json
generated/admin-reference.json
generated/demo-banque-reference.json
generated/demo-investisseurs-reference.json
generated/demo-comptable-reference.json
```

## 9. Modèle fonctionnel du site client

### 9.1 Options sûres à activer en prévisualisation

- navigation complète ;
- mode Jour, Nuit et Auto ;
- responsive ;
- menu et catégories ;
- détails produits ;
- personnalisation en simulation ;
- panier local ;
- compte local en simulation ;
- horaires et emplacements assainis ;
- formulaires sans envoi réel ;
- démonstration banque ;
- retour vers présentation ;
- passage vers administration simulée ;
- badges d’état des fonctions ;
- PWA et reprise réseau si déjà structurées ;
- page d’erreur claire ;
- accessibilité clavier et lecteur d’écran.

### 9.2 Fonctions réelles reportées

- commande réelle ;
- paiement ;
- compte client serveur ;
- données clients ;
- notification e-mail/SMS ;
- stock réel ;
- publication sociale.

## 10. Modèle fonctionnel de l’administration

### 10.1 Domaines

- tableau de bord ;
- commandes ;
- préparation ;
- stocks ;
- recettes ;
- fournisseurs ;
- caisse ;
- comptabilité ;
- hygiène et HACCP ;
- incidents ;
- équipements ;
- utilisateurs et rôles ;
- rapports ;
- paramètres ;
- sauvegardes et restauration.

### 10.2 États de commande

```text
BROUILLON
EN_ATTENTE_CONFIRMATION
CONFIRMEE
EN_PREPARATION
PRETE
REMISE
ANNULEE
REMBOURSEMENT_EN_ATTENTE
REMBOURSEE
```

Toute transition doit posséder une règle, un auteur, une date, une preuve et un rollback possible.

### 10.3 Rôles futurs

```text
DIRIGEANT
ADMINISTRATION
PRODUCTION
CAISSE
COMPTABILITE
LECTURE_SEULE
SUPPORT
```

Les démonstrations ne valent pas authentification. La version réelle exigera authentification serveur, MFA, expiration, révocation, journal d’audit et limitation des tentatives.

### 10.4 Comptabilité

Prototype local autorisé :

- consultation de chiffres fictifs ou assainis ;
- seuils de référence ;
- alertes ;
- comparaison ;
- proposition de brouillons en `sessionStorage` ;
- export d’une proposition JSON ;
- aucune écriture réelle.

Version réelle future : accès privé, rôles, chiffrement, audit, sauvegarde et restauration.

## 11. Modèle fonctionnel de la présentation

Pages cibles :

1. accueil ;
2. projet ;
3. parcours de Sébastien ;
4. offre ;
5. marché et zone ;
6. business plan ;
7. budget ;
8. juridique ;
9. vision de développement ;
10. dossier banque et investisseurs ;
11. démonstrations ;
12. contact professionnel.

### 11.1 Contenu verrouillé

- thème Jour clair ;
- page « Mon parcours et mon évolution personnelle » en neuf sections ;
- planning cible : lundi à vendredi midi/soir, samedi soir, samedi midi approvisionnement ;
- ambition à long terme : plusieurs unités mobiles, puis étude d’un réseau sous licence ou franchise ;
- la première unité doit être prouvée avant toute promesse de franchise ;
- camion/remorque reste une décision distincte.

## 12. Pitch bancaire et entraînement

Jalons obligatoires :

- pitch 30 secondes ;
- pitch 2 minutes ;
- pitch 5 minutes ;
- pitch 10 minutes ;
- questions de banque ;
- première simulation ChatGPT banquier ;
- simulation avec objections ;
- répétition finale ;
- fiche d’une page.

Déclenchement seulement après validation du véhicule, besoin initial, apport, prêt, CA, charges et prix.

## 13. Sécurité

### 13.1 Interdictions publiques

- secrets ;
- `.env` ;
- mots de passe ;
- tokens ;
- clés Stripe ;
- IBAN/BIC/RIB ;
- données client ;
- adresse personnelle ;
- numéro privé ;
- chemins Windows ;
- exports comptables réels.

### 13.2 Contrôles

- scan de secrets ;
- scan de données personnelles ;
- liste blanche de routes ;
- rejet des redirections externes ;
- CSP et en-têtes de sécurité adaptés ;
- `noindex` pour les previews ;
- assainissement reproductible ;
- comparaison SHA avant/après ;
- journal des changements.

## 14. Tests transversaux

Chaque lot doit couvrir :

- HTML, CSS, JavaScript ;
- console ;
- réseau ;
- liens ;
- boutons ;
- formulaires ;
- routes ;
- ordinateur, tablette, mobile ;
- clavier ;
- focus ;
- lecteur d’écran ;
- impression ;
- mode sans JavaScript ;
- page inexistante ;
- cache et reprise réseau ;
- sécurité ;
- données visibles selon le profil ;
- aucune action réelle ;
- rollback.

Dimensions minimales : 360×800, 390×844, 430×932, 768×1024, 1024×768, 1440×900, 1920×1080.

## 15. Options à activer maintenant dans les copies locales

1. portail interactif des trois sites ;
2. bandeau commun de preview ;
3. navigation inter-sites par liste blanche ;
4. retour explicite au portail ;
5. thème Jour de la présentation ;
6. cadrage adaptatif des images ;
7. moteur de démonstration commun ;
8. choix vocal/écrit ;
9. Bastien IA avec repli texte ;
10. profils de démonstration ;
11. Mode Bruno renommable ;
12. persistance d’étape ;
13. fonctions simulées neutralisées ;
14. états visibles des fonctions ;
15. registre commun des données ;
16. projections par profil ;
17. prototype comptable local ;
18. brouillons financiers locaux ;
19. export de propositions ;
20. accessibilité clavier ;
21. impressions propres ;
22. erreurs explicites ;
23. pages 404 locales ;
24. contrôles de cohérence ;
25. horodatage complet ;
26. rapport avant/après ;
27. rollback documenté ;
28. actualisation du suivi central.

## 16. Options qui ne doivent pas être « activées » artificiellement

- Stripe live ;
- TPE réel ;
- banque ;
- envoi réel d’e-mails ou SMS ;
- publication sociale ;
- vraie authentification ;
- vraie comptabilité ;
- vraies commandes ;
- vrais stocks ;
- accès matériel ;
- production Hostinger ;
- franchise présentée comme acquise.

Elles doivent être spécifiées, simulées, testées sans effet réel, puis activées dans des lots distincts.

## 17. Ordre d’exécution recommandé

| Lot | Objet | Dépendance | Effort indicatif |
|---|---|---|---:|
| ARCH-001 | figer routes, design tokens, statuts et schémas | aucune | 6–10 h |
| DATA-001 | registre maître et projections | ARCH-001 | 8–14 h |
| PREVIEW-001 | previews interactives assainies | ARCH-001 | 12–20 h |
| PRESENTATION-001 | thème Jour et navigation | ARCH-001 | 12–18 h |
| DEMO-001 | moteur de visite et Bastien IA | ARCH-001 | 18–30 h |
| DEMO-002 | profils de démonstration | DEMO-001, DATA-001 | 24–40 h |
| CLIENT-001 | fonctions locales et UX | ARCH-001 | 16–28 h |
| ADMIN-001 | simulation structurée et domaines | ARCH-001, DATA-001 | 24–40 h |
| COMPTA-001 | prototype privé local et spécification réelle | DATA-001, ADMIN-001 | 16–24 h |
| QA-001 | tests transversaux et sécurité | tous les lots | 20–36 h |
| BANK-001 | dossier, pitch et simulations | chiffres validés | 12–20 h |
| DEPLOY-001 | préparation Hostinger | validation finale | 12–24 h |

## 18. Définition de terminé

Une tâche n’est terminée que si :

- le périmètre est respecté ;
- les fichiers modifiés sont listés ;
- le diff est lisible ;
- les tests sont exécutés ;
- les échecs et blocages sont déclarés ;
- les captures sont fournies lorsque visuel ;
- les données sensibles sont absentes ;
- le rollback est documenté ;
- `main` est inchangée ;
- la clôture contient début, fin, fuseau et durée ;
- ChatGPT et Sébastien ont leurs statuts distincts.

## 19. Format de clôture

```text
CLÔTURE DE TÂCHE — PIZZA BALADZO
Identifiant :
Section :
Tâche :
Statut :
Date de début :
Heure de début :
Date de fin :
Heure de fin :
Fuseau horaire : Europe/Paris
Horodatage ISO :
Durée réelle :
Branche :
Commit :
Tests réussis :
Tests échoués :
Tests bloqués :
Preuves :
Validation Codex :
Validation ChatGPT : EN ATTENTE
Validation Sébastien : EN ATTENTE
```

## 20. Prochaine mission Codex recommandée

La prochaine mission doit être limitée aux lots `ARCH-001` et `DATA-001`, puis produire les fondations communes avant d’ajouter davantage de fonctions.

Le but n’est pas de multiplier rapidement les boutons, mais d’éviter que dix fonctions utilisent dix routes, dix chiffres et dix règles différentes.

**Priorité absolue : une architecture commune, des identifiants stables, des routes sûres, des états explicites et des preuves reproductibles.**
