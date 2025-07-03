# Configuration de Narcotrafiquant

## 🚀 Configuration Rapide

### 1. Base de données PostgreSQL (Neon DB)

1. Créez un compte sur [Neon](https://neon.tech/)
2. Créez une nouvelle base de données
3. Copiez l'URL de connexion et remplacez dans `.env`:
   ```
   DATABASE_URL="postgresql://username:password@host.neon.tech/database?sslmode=require"
   ```

### 2. Configuration Better Auth

Générez une clé secrète sécurisée et remplacez dans `.env`:
```
BETTER_AUTH_SECRET="votre-clé-secrète-très-longue-et-aléatoire"
```

### 3. OAuth Providers

#### Google OAuth
1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Créez un nouveau projet ou sélectionnez-en un existant
3. Activez l'API Google+ 
4. Créez des identifiants OAuth 2.0
5. Ajoutez les URLs de redirection:
   - `http://localhost:3000/api/auth/callback/google` (développement)
   - `https://votre-domaine.com/api/auth/callback/google` (production)
6. Copiez les clés dans `.env`:
   ```
   GOOGLE_CLIENT_ID="votre-client-id"
   GOOGLE_CLIENT_SECRET="votre-client-secret"
   ```

#### GitHub OAuth
1. Allez dans Settings > Developer settings > OAuth Apps sur GitHub
2. Créez une nouvelle OAuth App
3. Authorization callback URL: 
   - `http://localhost:3000/api/auth/callback/github` (développement)
   - `https://votre-domaine.com/api/auth/callback/github` (production)
4. Copiez les clés dans `.env`:
   ```
   GITHUB_CLIENT_ID="votre-client-id"
   GITHUB_CLIENT_SECRET="votre-client-secret"
   ```

### 4. Initialisation de la base de données

Une fois les variables d'environnement configurées, exécutez:

```bash
# Créer les tables dans la base de données
npx prisma migrate deploy

# Ou pour créer une nouvelle migration
npx prisma migrate dev --name init

# Générer le client Prisma
npx prisma generate
```

### 5. Lancer l'application

```bash
pnpm dev
```

L'application sera accessible sur http://localhost:3000

## 📝 Fonctionnalités Implémentées

- ✅ Page d'accueil moderne avec support dark/light mode
- ✅ Authentification avec email/password
- ✅ OAuth avec Google et GitHub
- ✅ Page de connexion/inscription
- ✅ Page de conditions du jeu (18+)
- ✅ Gestion des sessions utilisateur
- ✅ Interface responsive avec Shadcn/UI

## 🎮 Structure du Projet

- `/src/app/page.tsx` - Page d'accueil
- `/src/app/login/page.tsx` - Page de connexion/inscription
- `/src/app/conditions/page.tsx` - Conditions du jeu
- `/src/lib/auth.ts` - Configuration Better Auth (serveur)
- `/src/lib/auth-client.ts` - Client Better Auth
- `/src/app/api/auth/[...all]/route.ts` - Route handler pour l'authentification

## ⚠️ Important

- Ce jeu est destiné à un public adulte (18+)
- Assurez-vous de configurer correctement les variables d'environnement avant le déploiement
- N'oubliez pas d'ajouter `.env` à votre `.gitignore`