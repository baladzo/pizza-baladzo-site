# MODE AUTONOMIE — TROIS SITES PIZZA BALADZO

## Commande d’ouverture obligatoire

Commencer exactement par :

`✅ MODE AUTONOMIE ACTIVÉ — CLIENT, ADMIN ET PRÉSENTATION TRAVAILLENT SANS INTERROMPRE SÉBASTIEN`

## 1. Décision de Sébastien

Sébastien se consacre désormais exclusivement aux connexions extérieures : appareils, réseaux sociaux, e-mails, SMS, comptes, services et matériels.

Pendant ce temps, les trois chantiers suivants doivent avancer en autonomie avec toutes les consignes déjà enregistrées depuis deux jours :

1. site client ;
2. site admin ;
3. site de présentation et pitch.

Le mode autonomie reste actif jusqu’à ce que Sébastien écrive explicitement :

`FIN DU MODE AUTONOMIE — JE SUIS DISPONIBLE POUR LES VALIDATIONS`

La durée peut couvrir plusieurs sessions Codex successives et un ou deux jours calendaires. À chaque interruption technique, enregistrer l’état et reprendre au dernier point propre sans demander à Sébastien de répéter les consignes.

## 2. Règle de non-dérangement

Ne pas demander de validation à Sébastien pendant le mode autonomie.

Toute question non urgente doit être enregistrée dans :

- `suivi/data/validations-sebastien.json` ;
- `suivi/AUTONOMY_STATE.md` ;
- le JSON de la section concernée.

Puis poursuivre immédiatement une autre tâche sûre.

Interrompre Sébastien uniquement dans l’un des cas suivants :

- secret ou donnée privée détecté avant publication ;
- risque immédiat de perte de données ;
- branche `main`, production, Hostinger, `public_html`, FTP ou DNS touché accidentellement ;
- corruption Git ou impossibilité de restaurer un worktree propre ;
- achat, contrat, authentification ou action réelle indispensable qui bloque absolument tous les chantiers ;
- incident de sécurité critique.

Ne pas interrompre Sébastien pour :

- un choix de couleur ;
- un choix de police ;
- une formulation ;
- une variante de mise en page ;
- une fonctionnalité pouvant rester en `PREVIEW` ;
- une tâche bloquée alors qu’une autre tâche sûre est disponible.

## 3. Fichiers de reprise obligatoires

Avant toute écriture, lire dans cet ordre :

1. `suivi/SESSION_STATE.md` ;
2. `suivi/roadmap-5.6.md` ;
3. `suivi/data/roadmap-5.6.json` ;
4. `suivi/prompts/SESSION-5.6-STRUCTURATION-MAXIMALE.md` ;
5. le présent fichier ;
6. les JSON client, admin, présentation, global et validations.

Vérifier ensuite :

- tous les worktrees ;
- toutes les branches ;
- les HEAD ;
- `git status` partout ;
- les tâches déjà terminées ;
- les commits déjà testés ;
- les preuves déjà produites.

Ne jamais recommencer une tâche terminée.

## 4. Invariants absolus

- Nom officiel : **Pizza Baladzo**.
- Ne jamais utiliser une ancienne orthographe de la marque.
- Ne jamais utiliser, réparer ou relancer l’ancien éditeur.
- Ne jamais modifier directement `main`.
- Ne jamais fusionner vers `main`.
- Ne jamais utiliser `git push --force`.
- Ne jamais toucher à Hostinger, `public_html`, FTP, FileZilla, DNS ou au domaine officiel.
- Ne jamais activer Stripe live, paiement réel, e-mail réel, SMS réel, réseau social réel ou matériel réel.
- Ne jamais publier une donnée privée, une clé, un token ou un secret.
- Ne jamais inventer un prix, un chiffre financier, une coordonnée, une règle métier ou un contenu non validé.
- Une micro-tâche = un diagnostic = un petit diff = un commit = des tests = des preuves = un horodatage.
- Toute tâche visuelle doit produire des captures avant/après.
- Toute tâche échouée doit être restaurée avant de poursuivre.

## 5. États d’activation

Toutes les fonctions doivent utiliser l’un de ces états :

- `OFF` : non disponible ;
- `PREVIEW` : utilisable avec données fictives et actions réelles bloquées ;
- `TEST` : raccordée à un environnement technique de test ;
- `LIVE` : réelle, validée et autorisée en production.

Pendant le mode autonomie, activer un maximum de fonctions déjà demandées en `PREVIEW` ou `TEST`.

Ne jamais passer une fonction à `LIVE`.

## 6. Organisation des agents

Utiliser jusqu’à cinq agents ou cinq rotations de worktrees :

### Agent 1 — Site client

Travaille uniquement dans le worktree client.

### Agent 2 — Site admin

Travaille uniquement dans le worktree admin.

### Agent 3 — Présentation et pitch

Travaille uniquement dans le worktree présentation.

### Agent 4 — Démonstrations, navigation croisée et previews

Travaille dans une branche d’intégration dédiée sans toucher aux sources des trois agents.

### Agent 5 — Tests, sécurité, suivi et non-régression

Teste, documente, met à jour le tableau et refuse tout état cassé.

Si les agents parallèles ne sont pas disponibles, alterner les cinq pistes sans mélanger leurs modifications dans un même commit.

## 7. Priorités du site client

Conserver sans refonte arbitraire : Menu, votes, À propos, Bastien, navigation, Compte, Panier, pages existantes et modes Jour/Nuit/Auto.

Ordre autonome recommandé :

1. réparer l’ajout au panier des pizzas personnalisées, bases et ingrédients ;
2. réparer les boutons `Choisir cette formule` ;
3. proposer les formules depuis pizzas, desserts et boissons sans ajout automatique ;
4. corriger le chargement des images qui oblige à actualiser ;
5. corriger le message `mailto` : vrais sauts de ligne, ton naturel, orthographe Pizza Baladzo ;
6. relever légèrement `Voir le menu` sans modifier le reste de l’accueil ;
7. corriger le contraste des allergènes ;
8. remplacer les encarts gris illisibles par des variantes rose pâle ou violet pâle déjà compatibles avec la charte ;
9. rendre les panneaux Menu légèrement transparents avec la remorque fixe derrière, sans rendre le texte illisible ;
10. structurer Bastien écrit/vocal avec choix initial, micro, son coupable, texte toujours disponible et aucune validation finale de commande ;
11. préparer avis, notes, seuil de cinq avis, commentaires produits et fidélité personnelle en `PREVIEW` avec données fictives ;
12. préparer PWA, cache, hors-ligne et reprise réseau ;
13. produire les variantes typographiques demandées sans en appliquer une définitivement.

Pour toute décision esthétique non tranchée, produire deux ou trois variantes dans la preview, les nommer clairement, les enregistrer pour validation différée et poursuivre.

## 8. Priorités du site admin

Ordre autonome recommandé :

1. corriger l’encodage UTF-8 dans une intervention isolée et réversible ;
2. inventorier et traiter en `PREVIEW` les trois destinations absentes sans inventer une fonction réelle ;
3. neutraliser l’ancien éditeur dans la preview uniquement après sauvegarde et tests ;
4. structurer comptes, rôles, sessions et permissions fictives ;
5. structurer commandes, créneaux, préparation, retrait et statuts ;
6. structurer stocks, fournisseurs, lots et DLC fictifs ;
7. structurer comptabilité, TVA, marges, charges et exports fictifs ;
8. structurer notifications simulées ;
9. structurer journal d’audit, sauvegarde et restauration ;
10. intégrer la configuration des profils de démonstration ;
11. bloquer explicitement toute action réelle ;
12. tester ordinateur, tablette, mobile, clavier, console et liens.

Ne jamais afficher de vrai identifiant de production dans une preview publique.

## 9. Priorités de la présentation et du pitch

Ordre autonome recommandé :

1. créer une proposition Jour claire et lumineuse ;
2. afficher l’image principale entière sans coupe importante ;
3. limiter la grande image au haut de page ;
4. créer un fond uniforme, lisible et légèrement voilé sous le hero ;
5. placer la remorque dans une petite carte bien détourée sous le texte principal ;
6. ajouter un retour permanent depuis les démonstrations ;
7. vérifier la page `Mon parcours et mon évolution personnelle` contre les neuf sections sources ;
8. préparer navigation clavier et impression/PDF ;
9. corriger le mobile et toute navigation horizontale non souhaitée ;
10. centraliser les chiffres avec leur source et leur statut de validation ;
11. créer les pitchs express, rendez-vous et complet ;
12. créer les variantes Banque, Investisseur, Comptable, Mairie/Emplacement et Commercial.

Tout chiffre non validé doit afficher :

`INFORMATION À VALIDER PAR SÉBASTIEN`

## 10. Visite guidée et démonstrations

La visite actuelle est refusée et ne doit pas être conservée comme version finale.

Exigences obligatoires :

- voix robotisée désactivée par défaut ;
- choix `Voix douce + texte`, `Texte uniquement`, `Mode discret` ;
- micro-bulles très arrondies, de 24 à 32 px ;
- maximum deux phrases par bulle ;
- textes courts, naturels et non scolaires ;
- bulles positionnées en haut, en bas, à gauche, à droite ou au centre selon la cible ;
- vraies flèches SVG courbes avec pointe ;
- libellés courts : `Cliquez ici`, `Regardez ici`, `Continuez par ici` ;
- halo doux autour de la cible ;
- page toujours visible et pas d’overlay noir opaque ;
- progression déclenchée par clic, saisie, modale, route ou choix réel ;
- pause, reprise, réécoute, passer, retour, sommaire et quitter ;
- conservation de la session entre présentation, client et admin ;
- retour permanent vers la présentation.

Le même moteur doit couvrir :

- Démo Sébastien ;
- Banque ;
- Investisseur ;
- Comptable ;
- Mairie/Emplacement ;
- Commercial ;
- mode complet A-Z renommable ;
- futurs profils personnalisés.

Aucune voix ne peut être déclarée naturelle uniquement parce qu’elle produit du son. Si aucune voix suffisamment douce n’est disponible, utiliser le mode texte par défaut et marquer la voix naturelle à connecter.

## 11. Typographie

Préparer des essais non destructifs pour :

- Alex Brush ;
- Dancing Script ;
- Halo ;
- Braxton ;
- Savoye ;
- Lavanderia ;
- Cylburn ;
- Bleakerst ;
- Roicamonta ;
- Brayden ;
- plusieurs mixes.

Tester :

- titres seulement ;
- titres et boutons ;
- tout le site comme comparaison extrême.

Préserver une police très lisible pour paragraphes, formulaires, tableaux, prix, chiffres et données administratives.

Ne choisir aucune police définitive sans Sébastien.

## 12. Previews interactives

Créer ou maintenir trois previews Vercel séparées et assainies :

- client ;
- admin ;
- présentation.

Elles doivent être cliquables dans Chrome, noindex, sans donnée privée, avec actions réelles bloquées et navigation croisée.

Le tableau de suivi doit fournir les trois URL, leur SHA, leur date de déploiement et leur état.

Ne pas attendre Sébastien pour corriger une erreur de preview purement technique et sûre.

## 13. Connexions extérieures réservées à Sébastien

Pendant le mode autonomie, ne pas demander à Sébastien de configurer :

- réseaux sociaux ;
- comptes e-mail ;
- SMS ;
- tablette ;
- imprimante ;
- écran cuisine ;
- TPE ;
- banque ;
- Stripe live ;
- matériel ;
- Hostinger production.

Les agents peuvent uniquement préparer :

- interfaces ;
- adaptateurs ;
- mocks ;
- feature flags ;
- tests ;
- documentation ;
- écrans de configuration ;
- validations préalables.

Toutes les valeurs réelles restent absentes ou masquées.

## 14. Cadence et checkpoints

- Créer un checkpoint toutes les 30 minutes.
- Mettre à jour `suivi/AUTONOMY_STATE.md` après chaque checkpoint.
- Mettre à jour les JSON de suivi après chaque commit testé.
- Ne pas envoyer de message intermédiaire à Sébastien.
- Continuer jusqu’à épuisement des tâches sûres ou jusqu’à la fin de la session.
- En cas d’interruption, reprendre automatiquement au prochain lancement depuis `AUTONOMY_STATE.md`.
- Ne commencer aucune modification risquée dans les 30 dernières minutes d’une session.
- Terminer alors les tests, restaurer tout essai incomplet et produire un état propre.

## 15. Validation et pourcentages

Une tâche peut atteindre :

- 25 % après diagnostic ;
- 50 % après modification ;
- 75 % après tests ;
- 90 % après preuves et non-régression ;
- 100 % uniquement après toutes les validations obligatoires.

Pendant l’absence de Sébastien, toute tâche nécessitant son jugement doit rester à :

`90 % — TERMINÉE TECHNIQUEMENT, VALIDATION SÉBASTIEN NÉCESSAIRE`

Ne jamais confondre progression de session, maturité, validation technique, validation Sébastien et préparation opérationnelle réelle.

## 16. Horodatage obligatoire

À la fin de chaque tâche, sous-tâche, audit, commit, test, déploiement, blocage ou restauration, enregistrer :

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
- fichiers modifiés ;
- preuves ;
- prochaine action.

Une tâche sans date et heure de fin est incomplète.

## 17. Rapport consolidé différé

Ne pas envoyer de nombreux rapports à Sébastien.

Préparer un seul rapport consolidé lorsque :

- Sébastien désactive le mode autonomie ;
- toutes les tâches sûres sont épuisées ;
- ou un incident critique exige son intervention.

Le rapport final doit contenir :

- tâches terminées ;
- tâches à 90 % en attente de validation ;
- tâches bloquées ;
- commits ;
- previews ;
- captures ;
- tests ;
- erreurs ;
- pourcentages réels ;
- heures restantes ;
- questions regroupées par priorité ;
- confirmation de protection de `main`, Hostinger et production.

## 18. État final attendu

À chaque fin de session, confirmer :

- tous les worktrees sont propres ou documentés ;
- aucun essai cassé n’est conservé ;
- `main` est inchangée ;
- Hostinger et le site officiel sont inchangés ;
- aucune action réelle n’a été exécutée ;
- aucun secret n’a été publié ;
- le tableau de suivi reflète l’état réel ;
- `AUTONOMY_STATE.md` permet une reprise immédiate.
