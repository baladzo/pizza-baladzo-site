# Suivi de construction Pizza Baladzo

Ce dossier suit la session autonome du 13 juillet 2026. Il est séparé des sites client, admin et présentation.

## Ouverture locale

Les fichiers JSON sont chargés avec `fetch`. Le dossier doit donc être servi par un serveur HTTP local ou déployé comme site statique; l’ouverture directe de `index.html` par `file://` ne suffit pas dans tous les navigateurs.

Depuis la racine de la session :

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File tools\audit\serve-static.ps1 -Root suivi -Port 8765
```

Puis ouvrir `http://127.0.0.1:8765/`.

Pour la prévisualisation combinée :

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File tools\audit\serve-static.ps1 -Root git-session\worktrees\integration -Port 8769
```

Puis ouvrir `http://127.0.0.1:8769/`, `http://127.0.0.1:8769/admin.html` ou `http://127.0.0.1:8769/presentation/`.

## Sources

- Archive principale : `pizza-baladzo-preview-restauration-visuelle-propre-20260626-2318.zip`
- SHA256 vérifié : `530B9BADB9B1C2F587F2F29BF0D8551A1D5EBA9881A8DBC2486E96FD3176FCF6`
- Dépôt principal annoncé : `baladzo/pizza-baladzo-site`
- Dépôt présentation annoncé : `baladzo/presentation-pizza-baladzo`

## Limites actives

- Git local disponible via MinGit 2.55.0.windows.2 vérifié dans `tools/local-git`.
- Dépôt local : `git-session/repository`; aucune branche `main` et aucun remote configuré.
- Worktrees liés : `git-session/worktrees/client`, `admin`, `presentation`, `integration` et `suivi`.
- `gh` reste indisponible; aucun push, pull request ou déploiement distant n’a été effectué.
- La branche `main` distante diverge de l’archive principale validée.
- Aucune modification de `main`, Hostinger, `public_html`, FTP, DNS ou site officiel.
- Aucun secret ni donnée personnelle privée ne doit entrer dans ce dossier public.

## État final de la session

- Progression des tâches de la session autonome du 13 juillet 2026 : 88,3 %
- Client : 90 %
- Admin : 85 %
- Présentation : 90 %
- Micro-commits source : 11
- Cherry-picks d’intégration : 11
- Validation Sébastien : différée
- Rapport complet : `RAPPORT-FINAL-SESSION-AUTONOME.md`
