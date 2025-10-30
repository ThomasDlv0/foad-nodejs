# Node JS , Express , MongoDB

Pour cette **FOAD** je vous propose de créer une **api** qui renvoie des **users** sous forme de **json**.

## Git,github

Vous devez créer un nouveau dépot sur github avec votre solution.

## Users API

En vous inspirant de ce qu'on a fait et en faisant vos recherches dans les documentations vous devez créer une **api** :

Cette **api** devra renvoyer les éléments suivants :

- prénom
- nom
- email
- âge
- adresse , dans l'adresse vous devrez avoir :
    - rue
    - ville
    - pays
- avatar (une image)

## Stack utilisé

Rien n'est imposé sur le choix des noms(containers,base de donnée,...),ports,etc ...

- docker
- docker compose
- node js
- express
- mongodb

## Aller plus loin ...

Pour ceux qui veulent en faire plus :

- Utliser [https://www.npmjs.com/package/@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker) pour insérer des fausses données dans votre base de donnée
- Séparer votre application en  **client / serveur**:
  - Créer un dossier **serveur** qui contiendra votre code pour le **serveur** et la **base de donnée** , cela va correspondre à votre **backend**
  - Créer un dossier **client** ou vous allez faire du **front** , avec une page **html** et du **javascript** qui ira chercher votre **json** envoyé par votre **back** pour créer des **cards** de vos **users**.


Bon code à vous.
