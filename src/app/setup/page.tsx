"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CopyIcon, CheckIcon } from "@radix-ui/react-icons";

// Composant bouton "Copier" amélioré
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Button 
      onClick={handleCopy} 
      className="ml-2 bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white text-sm px-3 py-1.5 rounded-md transition-colors"
      variant="outline"
    >
      {copied ? (
        <span className="flex items-center">
          <CheckIcon className="mr-1 h-4 w-4" />
          Copié
        </span>
      ) : (
        <span className="flex items-center">
          <CopyIcon className="mr-1 h-4 w-4" />
          Copier
        </span>
      )}
    </Button>
  );
}

// Étapes d'installation améliorées
const setupSteps = [
  {
    title: "Pré-requis",
    description: "Installez ces outils essentiels sur votre machine :",
    content: (
      <ul className="space-y-3">
        <li className="flex items-center space-x-2">
          <CheckIcon className="h-5 w-5 text-green-500" />
          <div>
            <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
              Visual Studio Code
            </a>
            <p className="text-sm text-gray-500">Éditeur de code recommandé</p>
          </div>
        </li>
        <li className="flex items-center space-x-2">
          <CheckIcon className="h-5 w-5 text-green-500" />
          <div>
            <a href="https://nodejs.org/fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
              Node.js
            </a>
            <p className="text-sm text-gray-500">Vérifiez l'installation : <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">node -v</code></p>
          </div>
        </li>
        <li className="flex items-center space-x-2">
          <CheckIcon className="h-5 w-5 text-green-500" />
          <div>
            <a href="https://git-scm.com/downloads/win" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
              Git
            </a>
            <p className="text-sm text-gray-500">Vérifiez l'installation : <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">git -v</code></p>
          </div>
        </li>
      </ul>
    ),
  },
  {
    title: "Configuration Git",
    description: "Configurez votre identité Git pour vos contributions",
    content: (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <code className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md text-sm flex-1 font-mono">
            git config --global user.name "VotreNom"
          </code>
          <CopyButton text='git config --global user.name "VotreNom"' />
        </div>
        <div className="flex items-center space-x-2">
          <code className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md text-sm flex-1 font-mono">
            git config --global user.email "VotreEmail@exemple.com"
          </code>
          <CopyButton text='git config --global user.email "VotreEmail@exemple.com"' />
        </div>
      </div>
    ),
  },
  {
    title: "Sécurité SSH",
    description: "Générez une clé SSH pour une connexion sécurisée à GitHub",
    content: (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <code className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md text-sm flex-1 font-mono">
            ssh-keygen -t ed25519 -C "VotreEmail@exemple.com"
          </code>
          <CopyButton text='ssh-keygen -t ed25519 -C "VotreEmail@exemple.com"' />
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Appuyez sur Entrée pour accepter l'emplacement par défaut et créez une phrase secrète si vous le souhaitez
        </p>
      </div>
    ),
  },
  {
    title: "Initialisation du Projet",
    description: "Clonez et configurez votre projet Next.js",
    content: (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <code className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md text-sm flex-1 font-mono">
            git clone https://github.com/koala819/StarterPack.git
          </code>
          <CopyButton text="git clone https://github.com/koala819/StarterPack.git" />
        </div>
        <div className="flex items-center space-x-2">
          <code className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md text-sm flex-1 font-mono">
            git remote remove origin
          </code>
          <CopyButton text="git remote remove origin" />
        </div>
      </div>
    ),
  },
  {
    title: "Configuration du Dépôt",
    description: "Lie votre projet à votre dépôt GitHub personnel",
    content: (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <code className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md text-sm flex-1 font-mono">
            git remote add origin URL_DE_VOTRE_DEPOT
          </code>
          <CopyButton text="git remote add origin URL_DE_VOTRE_DEPOT" />
        </div>
      </div>
    ),
  },
  {
    title: "Publication",
    description: "Publiez votre code sur GitHub",
    content: (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <code className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md text-sm flex-1 font-mono">
            git add .
          </code>
          <CopyButton text="git add ." />
        </div>
        <div className="flex items-center space-x-2">
          <code className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md text-sm flex-1 font-mono">
            git commit -m "Initial commit"
          </code>
          <CopyButton text='git commit -m "Initial commit"' />
        </div>
        <div className="flex items-center space-x-2">
          <code className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md text-sm flex-1 font-mono">
            git push -u origin main
          </code>
          <CopyButton text="git push -u origin main" />
        </div>
      </div>
    ),
  },
];

// Structure des dossiers Next.js
const folderStructure = [
  {
    title: "Dossier `app/`",
    description: "Le cœur de votre application",
    content: (
      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
        <li className="flex items-start space-x-2">
          <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-medium">page.tsx</span>
            <p className="text-sm text-gray-500">C'est votre page d'accueil. Chaque fichier page.tsx crée une nouvelle page sur votre site.</p>
          </div>
        </li>
        <li className="flex items-start space-x-2">
          <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-medium">layout.tsx</span>
            <p className="text-sm text-gray-500">Définit la structure commune à toutes vos pages (en-tête, menu, pied de page...).</p>
          </div>
        </li>
        <li className="flex items-start space-x-2">
          <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-medium">loading.tsx</span>
            <p className="text-sm text-gray-500">Affiche un écran de chargement pendant que votre page se charge.</p>
          </div>
        </li>
      </ul>
    ),
  },
  {
    title: "Dossier `components/`",
    description: "Vos éléments réutilisables",
    content: (
      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
        <li className="flex items-start space-x-2">
          <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-medium">ui/</span>
            <p className="text-sm text-gray-500">Contient vos composants d'interface (boutons, cartes, formulaires...).</p>
          </div>
        </li>
        <li className="flex items-start space-x-2">
          <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-medium">layout/</span>
            <p className="text-sm text-gray-500">Composants de mise en page (en-tête, menu, pied de page...).</p>
          </div>
        </li>
      </ul>
    ),
  },
  {
    title: "Dossier `public/`",
    description: "Vos ressources statiques",
    content: (
      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
        <li className="flex items-start space-x-2">
          <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-medium">images/</span>
            <p className="text-sm text-gray-500">Stockez vos images, icônes et autres médias.</p>
          </div>
        </li>
        <li className="flex items-start space-x-2">
          <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-medium">fonts/</span>
            <p className="text-sm text-gray-500">Pour vos polices personnalisées.</p>
          </div>
        </li>
      </ul>
    ),
  },
  {
    title: "Fichiers de Configuration",
    description: "Configuration de votre projet",
    content: (
      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
        <li className="flex items-start space-x-2">
          <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-medium">package.json</span>
            <p className="text-sm text-gray-500">Liste vos dépendances et scripts du projet.</p>
          </div>
        </li>
        <li className="flex items-start space-x-2">
          <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-medium">next.config.js</span>
            <p className="text-sm text-gray-500">Configure les paramètres de Next.js.</p>
          </div>
        </li>
        <li className="flex items-start space-x-2">
          <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-medium">tailwind.config.js</span>
            <p className="text-sm text-gray-500">Configure Tailwind CSS pour le style.</p>
          </div>
        </li>
      </ul>
    ),
  },
];

// Bonnes pratiques et astuces
const bestPractices = [
  {
    title: "Débuter avec Next.js",
    description: "Les bases pour bien commencer",
    content: (
      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
        <li className="flex items-start space-x-2">
          <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-medium">Commencez par la page d'accueil</span>
            <p className="text-sm text-gray-500">Modifiez d'abord le fichier app/page.tsx pour comprendre comment fonctionne le routage.</p>
          </div>
        </li>
        <li className="flex items-start space-x-2">
          <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-medium">Utilisez les composants</span>
            <p className="text-sm text-gray-500">Créez des composants réutilisables dans le dossier components/ pour éviter la répétition de code.</p>
          </div>
        </li>
        <li className="flex items-start space-x-2">
          <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-medium">Organisez vos fichiers</span>
            <p className="text-sm text-gray-500">Gardez une structure claire en regroupant les fichiers par fonction.</p>
          </div>
        </li>
      </ul>
    ),
  },
  {
    title: "Astuces Pratiques",
    description: "Conseils pour faciliter votre développement",
    content: (
      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
        <li className="flex items-start space-x-2">
          <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-medium">Utilisez le Hot Reload</span>
            <p className="text-sm text-gray-500">Les modifications sont visibles instantanément dans le navigateur.</p>
          </div>
        </li>
        <li className="flex items-start space-x-2">
          <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-medium">Inspectez votre code</span>
            <p className="text-sm text-gray-500">Utilisez les outils de développement du navigateur pour déboguer.</p>
          </div>
        </li>
        <li className="flex items-start space-x-2">
          <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-medium">Documentez votre code</span>
            <p className="text-sm text-gray-500">Ajoutez des commentaires pour expliquer les parties complexes.</p>
          </div>
        </li>
      </ul>
    ),
  },
  {
    title: "Ressources Utiles",
    description: "Où trouver de l'aide et des informations",
    content: (
      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
        <li className="flex items-start space-x-2">
          <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-medium">Documentation officielle</span>
            <p className="text-sm text-gray-500">Consultez nextjs.org/docs pour des guides détaillés.</p>
          </div>
        </li>
        <li className="flex items-start space-x-2">
          <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-medium">Communauté</span>
            <p className="text-sm text-gray-500">Rejoignez le Discord Next.js pour échanger avec d'autres développeurs.</p>
          </div>
        </li>
        <li className="flex items-start space-x-2">
          <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-medium">GitHub</span>
            <p className="text-sm text-gray-500">Explorez les projets open source pour apprendre des exemples concrets.</p>
          </div>
        </li>
      </ul>
    ),
  },
];

export default function SetupPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Configuration de l'Environnement
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Suivez ces étapes pour configurer votre environnement de développement Next.js
          </p>
        </div>

        {/* Liste des étapes */}
        <div className="max-w-3xl mx-auto space-y-8">
          {setupSteps.map(({ title, description, content }, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    {index + 1}
                  </span>
                  {title}
                </CardTitle>
                <p className="text-gray-500">{description}</p>
              </CardHeader>
              <CardContent className="pt-4">
                {content}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section Structure des Dossiers */}
        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Structure d'un Projet Next.js
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-8">
            Comprenez l'organisation des dossiers et fichiers dans votre projet
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {folderStructure.map(({ title, description, content }, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{title}</CardTitle>
                  <p className="text-gray-500">{description}</p>
                </CardHeader>
                <CardContent>
                  {content}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Section Bonnes Pratiques */}
        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Guide du Débutant
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {bestPractices.map(({ title, description, content }, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{title}</CardTitle>
                  <p className="text-gray-500">{description}</p>
                </CardHeader>
                <CardContent>
                  {content}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bouton retour */}
        <div className="text-center mt-12">
          <Link href="/">
            <Button className="bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
