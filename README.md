# code de base pour TP (et future SAE 301)

- \*\*Nom :Albini
- \*\*Prénom :Julie
- \*\*URL maquette Figma: https://www.figma.com/file/ZABrDpBYDw5WOJZvlEN5O5/Maquette_SAE301_JulieAlbini?node-id=4%3A8
- \*\*URL publique du site : https://tiktakjuliealbini.netlify.app
- \*\*URL projet Supabase : https://ldkbfjzlghclsojupfkk.supabase.co
  - [x] Avez-vous invité abdallah.makhoul@univ-fcomte.fr dans votre 'Organisation' Supabase ?

# Auto-évaluation

## R313 | Dev Back (Abdallah Makhoul : [AC 2404](https://moodle.univ-fcomte.fr/mod/assign/view.php?id=612670) et [AC 2402](https://moodle.univ-fcomte.fr/mod/assign/view.php?id=612669))

Vous avez rendu à la racine du projet :

- [x] Le modèle conceptuel de données (nom : [MCD.png](/MCD.png) ou [MCD.pdf](/MCD.pdf) [^1])
- [x] Et compléter le fichier [bdd.sql](/bdd.sql) détaillant le code pour la création des tables, vues et policies créées
- [x] Avez-vous bien invité abdallah.makhoul@univ-fcomte.fr dans votre 'Organisation' Supabase comme développeur ?

## R312 | Intégrer ([Pierre Pracht : AC 2401](https://moodle.univ-fcomte.fr/mod/assign/view.php?id=612668))

Pour les liens :
[vers des fichiers](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes#relative-links-and-image-paths-in-readme-files) ou page d'un commit sur Github.

Noté sur 40.

- [README](/README.md) bien rempli (0-2-4pts)
  - Ne cochez que ce que vous avez fait.
- Fonctionnalités "avancées" du site (0-2-4pts)
- Intégration du site (0-2-4-6pts)
- Code et Commit (0-2-4-6pts)
- Code HTML spécifiquement sémantique et accessible (0-1-2pts)

- [x] usage de Classes utilitaires (1pt)
      [Création classes utilisataires](https://github.com/MMI-SAE-301/sae-301-2022-Albini-Julie/commit/d9ab8c310fe5dea2d471ccf62ee8cddd1e55f085)

  - lien vers sa définition
  - lien vers son usage
    définition classe titre : [Intégration classe titre](/src/index.css#l18)
    usage classe titre : [usage classe titre](/src//components//Footer.vue#l15), [usage classe titre](/src//components//Footer.vue#l3)

- [x] Composants graphiques (0-1-2pts)
  - liens
    [Intégration Header](https://github.com/MMI-SAE-301/sae-301-2022-Albini-Julie/commit/5204690ee7a40d9ca6159b5bd68a41010e33b2f0)
    [Intégration Footer](https://github.com/MMI-SAE-301/sae-301-2022-Albini-Julie/commit/5091510801319c27824583da8e8344f7811e6f38)
    [Intégration Bouton](https://github.com/MMI-SAE-301/sae-301-2022-Albini-Julie/commit/a909e1f0ef2286356b46be8a7524ae112a6c1893)
    [Modification Bouton](https://github.com/MMI-SAE-301/sae-301-2022-Albini-Julie/commit/d2a5836ed5d40c1d2c81eb565fcd9d4326ceadff)
    [Intégration liste des montres](https://github.com/MMI-SAE-301/sae-301-2022-Albini-Julie/commit/8bb59e594f190358874c9dd0ebf1dac9cb9a2f4d)
- Technique CSS (0-1-2pts)
  - Quelles techniques (Eg. Styles graphiques (répétés) tous ajoutés par CSS et/ou
    config. Tailwind (eg. before/after avec content, background...))
    - ...
  - liens
- Mise en page CSS (0-1-2pts)
  - Quelles techniques (Grilles Flex...)
  - liens
    - flex : [Intégration flex](/src//components//Header.vue#l2)
    - grid : [Intégration grid](./src//pages//Connexion.vue#l47)
  - [x] Mise en page fluide
- [x] Mobile First (0-1-2pts)
  - [x] Plusieurs tailles
    - Lesquelles... sm, lg, md, xl
- [ ] Dark Mode (0-1-2pts)
  - [ ] Simple usage de 'dark:'
  - [ ] Mise en place avec usage de custom property pour les couleurs. Ou usage de DaisyUI AVEC thèmes perso
    - liens
- "tailwin.config.js" (0-1-2pts)
  - [x] usage basique couleurs/fonts
  - [ ] Comporte des données supplémentaires (utilisées !). Eg: "content-xxx", "bg-xxx", "grid-cols-xxx"...
    - liens
- Composants "accessibles" (0-1-2pts)
  - [ ] textes "accessibles" (eg. 'sr-only')
  - [ ] Contenu accessible ET Usage de composants étudié pour accessibilité (Eg. HeadlessUI)

[^1]: Supprimez les mentions inutiles.

Commits :
[Intégration Header](https://github.com/MMI-SAE-301/sae-301-2022-Albini-Julie/commit/5204690ee7a40d9ca6159b5bd68a41010e33b2f0)
[Intégration Footer](https://github.com/MMI-SAE-301/sae-301-2022-Albini-Julie/commit/5091510801319c27824583da8e8344f7811e6f38)
[Intégration page connexion](https://github.com/MMI-SAE-301/sae-301-2022-Albini-Julie/commit/3c3dcc53ae292a1e5999588c2310bebc7d71cdb2)
[Intégration page Accueil](https://github.com/MMI-SAE-301/sae-301-2022-Albini-Julie/commit/09877cb155202555b6d6b3d18c497733c47ba314)
[Intégration liste des montres](https://github.com/MMI-SAE-301/sae-301-2022-Albini-Julie/commit/8bb59e594f190358874c9dd0ebf1dac9cb9a2f4d)
[Intégration page id](https://github.com/MMI-SAE-301/sae-301-2022-Albini-Julie/commit/255ac78eff83267378f7f9da5ee3079b85104c38)
[Création classes utilisataires](https://github.com/MMI-SAE-301/sae-301-2022-Albini-Julie/commit/d9ab8c310fe5dea2d471ccf62ee8cddd1e55f085)
