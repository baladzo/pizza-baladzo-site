# État du mode autonomie — Pizza Baladzo

## Statut

- Mode : `AUTONOMIE-3-SITES-24-48H`
- État : **ACTIF**
- Activation : 14/07/2026 à 16:28:32 Europe/Paris
- Activé par : Sébastien
- Consigne principale : les trois sites avancent sans interrompre Sébastien pendant qu’il configure les connexions extérieures.
- Phrase d’arrêt : `FIN DU MODE AUTONOMIE — JE SUIS DISPONIBLE POUR LES VALIDATIONS`

## Source d’instructions

- Prompt maître : `suivi/prompts/MODE-AUTONOMIE-3-SITES-24-48H.md`
- Configuration : `suivi/data/autonomy-mode.json`
- Reprise générale : `suivi/SESSION_STATE.md`
- Roadmap : `suivi/roadmap-5.6.md`
- Backlog : `suivi/data/roadmap-5.6.json`

## Règle de non-dérangement

Toutes les questions non urgentes sont différées dans `suivi/data/validations-sebastien.json`.

Seuls un incident critique, un secret, un risque de perte de données, une corruption non restaurable ou une atteinte à `main`/production peuvent interrompre Sébastien.

## Checkpoints

Ajouter ici un checkpoint toutes les 30 minutes avec :

- date et heure Europe/Paris ;
- agent ;
- branche et HEAD ;
- tâche en cours ;
- dernier commit ;
- tests réussis et échoués ;
- blocages différés ;
- prochaine action ;
- état propre du worktree.

## Premier checkpoint

- Date : 14/07/2026 à 16:28:32 Europe/Paris
- Statut : mode autonomie initialisé
- Site client : prêt à reprendre les tâches sûres prioritaires
- Site admin : prêt à reprendre les tâches sûres prioritaires
- Présentation/pitch : prêt à reprendre les tâches sûres prioritaires
- Démonstrations : cahier des charges de refonte disponible
- Connexions réelles : réservées à Sébastien
- `main` : protégée
- Hostinger/production : protégés
- Prochaine action : exécuter le prompt maître dans Codex et répartir les agents/worktrees
