# CLIENT-PARTNERSHIP-REQUEST-BASTIEN-001 — Demandes mairies, événements, fournisseurs et partenaires

## Décision de Sébastien

Le site client doit proposer un encart clairement visible permettant à des mairies, organisateurs d’événements publics ou privés, fournisseurs, producteurs, partenaires commerciaux ou gestionnaires d’emplacements de transmettre directement une demande afin d’être recontactés rapidement.

Bastien doit faire remonter ces demandes à Sébastien sans qu’elles se perdent.

## Statut

- Priorité : haute commerciale
- Sites concernés : client + administration de preview ; présentation uniquement pour créer un lien vers le formulaire si utile
- Mode autonomie : autorisé
- État maximal sans connexions réelles : `PREVIEW` ou `TEST`
- État maximal sans validation Sébastien : `90 % — TERMINÉE TECHNIQUEMENT, CONNEXIONS ET VALIDATION SÉBASTIEN NÉCESSAIRES`
- Aucun e-mail, SMS, push ou action réelle sans fournisseur configuré et GO séparé

## Objectif fonctionnel

Créer un parcours simple :

```text
Site client
→ encart « Travailler avec Pizza Baladzo »
→ choix du type de demande
→ formulaire adapté
→ confirmation immédiate
→ création d’une demande prioritaire
→ remontée dans l’admin et dans Bastien
→ alerte réelle plus tard via les adaptateurs connectés par Sébastien
```

## Publics à proposer

- Mairie / Collectivité ;
- Organisateur d’événement ;
- Gestionnaire d’emplacement ou parking ;
- Fournisseur / Producteur ;
- Entreprise / Association ;
- Partenaire commercial ;
- Presse / Communication ;
- Autre demande professionnelle.

Les libellés peuvent être regroupés visuellement, mais aucune catégorie ne doit être supprimée sans justification.

## Emplacement et design de l’encart

Prévoir :

- un encart sur l’accueil, sans masquer le hero ni le bouton principal ;
- un accès dans Contact ;
- éventuellement un accès dans Événements et Où nous trouver ;
- un libellé chaleureux, par exemple : `Vous souhaitez travailler avec Pizza Baladzo ?` ;
- un bouton clair : `Faire une demande professionnelle` ;
- un style Jour lumineux, arrondi et cohérent avec les couleurs lilas/rose clair ;
- une version mobile compacte et lisible.

Le texte final doit rester court et naturel. Toute formulation non validée doit être présentée en preview pour validation.

## Données du formulaire

Champs communs minimaux :

- type de demande ;
- nom de l’organisation ;
- prénom et nom du contact ;
- fonction du contact, facultative ;
- e-mail ;
- téléphone, facultatif mais recommandé ;
- méthode de contact préférée ;
- commune ou zone concernée ;
- message ;
- consentement à être recontacté ;
- acceptation de la politique de confidentialité.

Champs conditionnels possibles :

### Événement

- date ou période ;
- lieu ;
- nombre de participants estimé ;
- type d’événement ;
- besoin en restauration ;
- contraintes horaires ou techniques.

### Emplacement / Mairie

- adresse ou zone proposée ;
- jours et horaires envisagés ;
- accès eau/électricité, si connu ;
- règles ou autorisations particulières ;
- personne référente.

### Fournisseur / Producteur

- famille de produits ;
- origine ;
- capacité de livraison ;
- fréquence ;
- zone couverte ;
- certifications éventuelles, facultatives.

Ne pas demander de données sensibles inutiles.

## Sécurité et RGPD

Obligatoire :

- validation côté client et côté serveur futur ;
- honeypot anti-spam ;
- limitation de débit future ;
- aucune clé dans le navigateur ;
- aucun stockage durable dans `localStorage` en production ;
- conservation limitée et documentée ;
- politique de confidentialité ;
- consentement horodaté ;
- suppression ou archivage contrôlé ;
- aucun envoi de pièces jointes dans la première version sans analyse antivirus ;
- aucune donnée publique dans les rapports de preview.

## Remontée dans Bastien

Créer une interface d’adaptation commune :

```text
partnershipLead.created
partnershipLead.priorityChanged
partnershipLead.assigned
partnershipLead.contacted
partnershipLead.closed
```

Bastien doit pouvoir :

- détecter une nouvelle demande ;
- produire un résumé court ;
- indiquer le type, l’organisation, la zone, la date éventuelle et le degré d’urgence ;
- afficher un badge visible dans l’admin ;
- ajouter la demande à une file `À rappeler rapidement` ;
- rappeler à Sébastien les demandes non traitées ;
- proposer une réponse ou une fiche de rappel sans l’envoyer automatiquement ;
- ne jamais inventer des informations manquantes.

## Niveaux d’alerte

- `URGENT` : événement ou échéance proche, mairie ou emplacement avec date limite ;
- `HAUTE` : demande commerciale complète nécessitant un retour rapide ;
- `NORMALE` : proposition fournisseur ou partenariat sans échéance immédiate ;
- `À QUALIFIER` : information insuffisante.

La classification doit rester explicable et modifiable.

## États d’activation

### PREVIEW

- formulaire cliquable ;
- données fictives ;
- file admin fictive ;
- résumé Bastien visible ;
- aucun envoi réel.

### TEST

- endpoint de test ;
- stockage de test ;
- notification vers une destination de test ;
- aucune donnée réelle publique.

### LIVE

Interdit tant que Sébastien n’a pas connecté et validé :

- le backend ;
- la base de données ;
- les e-mails ;
- les SMS ou notifications ;
- la politique RGPD ;
- les destinataires ;
- les procédures de suppression et sauvegarde.

## Comportement sans service externe

Si les services ne sont pas configurés :

- conserver le formulaire en mode PREVIEW avec des données fictives uniquement ;
- afficher clairement que l’envoi réel est désactivé en preview ;
- ne jamais simuler faussement un e-mail ou SMS envoyé ;
- permettre à Codex de tester le parcours complet dans une base locale ou de test isolée.

## Tests obligatoires

- ordinateur, tablette et mobile ;
- clavier et lecteurs d’écran de base ;
- validation des champs ;
- messages d’erreur chaleureux ;
- anti-double-envoi ;
- consentement obligatoire ;
- création de la demande ;
- affichage admin ;
- résumé Bastien ;
- filtre par type et priorité ;
- rappel d’une demande non traitée ;
- aucune notification réelle en PREVIEW ;
- aucune donnée privée dans GitHub public ou Vercel public ;
- absence d’erreur console ;
- horodatage Europe/Paris.

## Livrables

- maquette et formulaire preview ;
- contrat de données ;
- événements métier ;
- vue admin des demandes ;
- carte ou badge Bastien ;
- adaptateurs de notification OFF/PREVIEW/TEST/LIVE ;
- tests ;
- captures ;
- procédure de raccordement futur aux connexions configurées par Sébastien ;
- liste exacte des éléments restant à connecter.
