# LinkedIn Clone
Une application de clone de LinkedIn construite en utilisant ReactJs, Redux et Firebase.

## Description
Ce projet est une application de clone de LinkedIn qui permet aux utilisateurs de créer un compte, de se connecter, de publier des publications.

## Fonctionnalités
- Authentification avec Firebase (inscription, connexion, déconnexion)
- Création de publications

## Installation et configuration
1. Clonez le dépôt Git :
   git clone https://github.com/sife22/linkedin-clone.git

2. Accédez au répertoire du projet :
   cd linkedin-clone

3. Installez les dépendances :
   npm install

4. Configurez les variables d'environnement Firebase dans un fichier '.env' à la racine du projet :
   - REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
   - REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
   - REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
   - REACT_APP_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
   - REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
   - REACT_APP_FIREBASE_APP_ID=your-firebase-app-id

5. Démarrez l'application en mode développement :
   npm start

   L'application sera accessible à l'adresse `http://localhost:3000`.

## Déploiement
L'application a été déployée sur Netlify et est accessible à l'adresse : https://linkedin.netlify.app/
