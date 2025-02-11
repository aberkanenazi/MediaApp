# MediaApp

MediaApp est une application web moderne développée avec [Vite.js](https://vitejs.dev/) et intégrée à [Appwrite](https://appwrite.io/). Inspirée par Instagram, cette application permet aux utilisateurs de :

- Partager des posts contenant une image, une description et des tags.
- Visualiser un fil d'actualité regroupant les posts des autres utilisateurs.
- Rechercher des posts par mots-clés ou tags.
- Interagir avec les posts (liker, ajouter aux favoris).
- Gérer leur profil (connexion, inscription, modification des informations personnelles).

## Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Pré-requis](#pré-requis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
- [Licence](#licence)
- [Contact](#contact)

## Fonctionnalités

- **Fil d'actualité (Feed)** : Consultez les posts récents de tous les utilisateurs.
- **Recherche** : Trouvez des posts par mots-clés ou tags.
- **Interactions** : Likez vos posts préférés et ajoutez-les aux favoris.
- **Gestion de Profil** : Accédez à votre profil, modifiez vos informations et consultez vos posts.
- **Création de Posts** : Publiez de nouveaux posts en ajoutant une image, une description et des tags.
- **Authentification** : Inscription, connexion et modification du profil pour une expérience personnalisée.

## Pré-requis

Avant de commencer, assure-toi d'avoir installé :

- [Node.js](https://nodejs.org/) (version 14 ou supérieure recommandée)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

De plus, il est nécessaire d'avoir une instance d'Appwrite pour la gestion du backend et des données.

## Installation

1. **Cloner le dépôt**

   Ouvre un terminal et exécute :

   ```bash
   git clone https://github.com/aberkanenazi/MediaApp.git
   ```

2. **Accéder au répertoire du projet**

   ```bash
   cd MediaApp
   ```

3. **Installer les dépendances**

   Avec npm :

   ```bash
   npm install
   ```

   Ou avec Yarn :

   ```bash
   yarn install
   ```

## Configuration

Avant de lancer l'application, configure les variables d'environnement nécessaires à la connexion avec Appwrite. Crée un fichier `.env` à la racine du projet et ajoute-y :

```env
VITE_APPWRITE_ENDPOINT=https://votre-instance-appwrite.com/v1
VITE_APPWRITE_PROJECT=VotreIDProjet
VITE_APPWRITE_STORAGE_ID='xxxxxxxx'
VITE_APPWRITE_DATABASE_ID='xxxxxxxx'
VITE_APPWRITE_USER_COLLECTION_ID='xxxxxxx'
VITE_APPWRITE_POST_COLLECTION_ID='xxxxxxx'
VITE_APPWRITE_SAVES_COLLECTION_ID='xxxxxxx'
```

Assure-toi que ces valeurs correspondent bien à ta configuration Appwrite.

## Utilisation

Pour démarrer l'application en mode développement, exécute :

Avec npm :

```bash
npm run dev
```

Avec Yarn :

```bash
yarn dev
```

L'application sera accessible via [http://localhost:3000](http://localhost:3000) (ou le port configuré).

## Licence

Ce projet est sous licence MIT. Consulte le fichier [LICENSE](LICENSE) pour plus de détails.

## Contact

Pour toute question ou suggestion, n'hésite pas à me contacter via GitHub :

- [aberkanenazi](https://github.com/aberkanenazi)
