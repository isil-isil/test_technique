# Test technique - Développeur Web

![header](./header.png)

## Introduction

- Ce test a pour but d’évaluer vos compétences en développement web fullstack (Node.js / React) à travers la mise en place d’une application de gestion d’offres d’emploi.

## Prérequis

- Node.js LTS (v22) — à installer de préférence via [NVM](https://github.com/nvm-sh/nvm)
- Un compte [Github](https://github.com)

## Installation du projet

- Créer un nouveau repository (sur votre compte perso) à partir de ce [template](https://github.com/adam-ubiquid/test_technique)

![template](./template.png)

- Le projet est découpé en deux packages :
  - L’interface utilisateur : `/packages/ui`
  - L’API backend : `/packages/api`

### Étapes :

```bash
# UI
cd /packages/ui
npm install
npm run dev

# API
cd /packages/api
npm install
npm run dev
```

- L’API est disponible sur : [http://localhost:3000](http://localhost:3000)
- L’interface UI est disponible sur : [http://localhost:5173](http://localhost:5173)

## Exercices à réaliser

### Exercice 1 - [BUG] / Problème de connexion au serveur d'API.

- Il semblerait qu'il soit impossible de récuperer les données depuis l'API. A vous de trouver la source du problème et de le corriger.

### Exercice 2 - [BUG] / Tri des annonces par date de création.

- Il semblerait que le trie des annonces par date de création ne fonctionne pas, la liste n'est pas mise à jour. Il faudrait pouvoir trier les annonces par date de création.

### Exercice 3 - [FEATURE] / Implémenter une fonctionnalité de recherche

- Nous aimerions ajouter un champs dans la page "Liste des jobs" qui permette de rechercher une annonce par intitulé, catégorie et type de poste.

### Exercice 4 - [FEATURE] / Implémenter une page de modification d'une annonce

- En cliquant sur une annonce, rediriger l'utilisateur vers une page de modification d'une annonce. L'utilisateur doit pouvoir modifier une annonce spécifique. Il vous faudra implémenter un endpoint au niveau de l'API et l'utiliser depuis l'interface.

## Rendu

Une fois que vous avez fait les exercices, veuillez nous faire parvenir votre repository Github.
Merci pour votre temps et bon courage !
