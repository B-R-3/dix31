"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CopyIcon } from "@radix-ui/react-icons";

// Composant bouton "Copier"
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Button onClick={handleCopy} className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white text-xs px-3 py-1 rounded">
      {copied ? "Copié !" : <CopyIcon />}
    </Button>
  );
}

// Étapes d'installation
const setupSteps = [
  {
    title: "📌 Pré-requis",
    description: "Installez ces outils sur votre PC :",
    content: (
      <ul className="pl-0 space-y-1">
        <li>
          <a href="https://code.visualstudio.com/" target="_blank" className="text-blue-600 hover:underline">Visual Studio Code (VSC)</a>
        </li>
        <li>
          <a href="https://nodejs.org/fr" target="_blank" className="text-blue-600 hover:underline">Node.js</a> (Vérification : <code>node -v</code>)
        </li>
        <li>
          <a href="https://git-scm.com/downloads/win" target="_blank" className="text-blue-600 hover:underline">Git</a> (Windows uniquement, Vérification : <code>git -v</code>)
        </li>
      </ul>
    ),
  },
  {
    title: "🚀 Configurer Git",
    description: "Définir votre nom et email globalement.",
    content: (
      <>
        <div className="flex items-center">
          <code className="bg-gray-200 dark:bg-gray-800 p-2 rounded-md text-sm flex-1">git config --global user.name "VotreNom"</code>
          <CopyButton text='git config --global user.name "VotreNom"' />
        </div>
        <div className="flex items-center mt-2">
          <code className="bg-gray-200 dark:bg-gray-800 p-2 rounded-md text-sm flex-1">git config --global user.email "VotreEmail@exemple.com"</code>
          <CopyButton text='git config --global user.email "VotreEmail@exemple.com"' />
        </div>
      </>
    ),




  },
  {
    title: "🔑 Générer une clé SSH",
    description: "Sécuriser votre connexion avec GitHub.",
    content: (
      <>
        <div className="flex items-center">
          <code className="bg-gray-200 dark:bg-gray-800 p-2 rounded-md text-sm flex-1">ssh-keygen -t ed25519 -C "VotreEmail@exemple.com"</code>
          <CopyButton text='ssh-keygen -t ed25519 -C "VotreEmail@exemple.com"' />
        </div>
      </>
    ),
  },
  {
    title: "📥 Cloner un projet",
    description: "Récupérer un projet Next.js depuis GitHub.",
    content: (
      <div className="flex items-center">
        <code className="bg-gray-200 dark:bg-gray-800 p-2 rounded-md text-sm flex-1">git clone https://github.com/koala819/StarterPack.git</code>
        <CopyButton text="git clone https://github.com/koala819/StarterPack.git" />
      </div>
    ),
  },
  {
    title: "❌ Supprimer le dépôt original",
    description: "Dissocier votre projet du dépôt d'origine.",
    content: (
      <div className="flex items-center">
        <code className="bg-gray-200 dark:bg-gray-800 p-2 rounded-md text-sm flex-1">git remote remove origin</code>
        <CopyButton text="git remote remove origin" />
      </div>
    ),
  },
  {
    title: "🔗 Lier un nouveau dépôt",
    description: "Associer votre projet à votre propre dépôt GitHub.",
    content: (
      <div className="flex items-center">
        <code className="bg-gray-200 dark:bg-gray-800 p-2 rounded-md text-sm flex-1">git remote add origin URL_DE_VOTRE_DEPOT</code>
        <CopyButton text="git remote add origin URL_DE_VOTRE_DEPOT" />
      </div>
    ),
  },
  {
    title: "🚀 Publier le projet",
    description: "Envoyer votre code sur GitHub.",
    content: (
      <>
        <div className="flex items-center">
          <code className="bg-gray-200 dark:bg-gray-800 p-2 rounded-md text-sm flex-1">git add .</code>
          <CopyButton text="git add ." />
        </div>
        <div className="flex items-center mt-2">
          <code className="bg-gray-200 dark:bg-gray-800 p-2 rounded-md text-sm flex-1">git commit -m "Initial commit"</code>
          <CopyButton text='git commit -m "Initial commit"' />
        </div>
        <div className="flex items-center mt-2">
          <code className="bg-gray-200 dark:bg-gray-800 p-2 rounded-md text-sm flex-1">git push -u origin main</code>
          <CopyButton text="git push -u origin main" />
        </div>
      </>
    ),
  },
];

export default function SetupPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-center p-6">
      {/* Titre principal */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Installation & Configuration de Next.js</h1>
      <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-xl">
        Suivez ces étapes pour bien configurer votre environnement de développement.
      </p>

      {/* Liste des étapes */}
      <div className="mt-8 w-full max-w-3xl space-y-6">
        {setupSteps.map(({ title, description, content }, index) => (
          <Card key={index} className="shadow-lg border dark:border-gray-700">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <p className="text-gray-500 text-sm">{description}</p>
            </CardHeader>
            <CardContent>{content}</CardContent>
          </Card>
        ))}
      </div>

      {/* Bouton retour accueil */}
      <Link href="/">
        <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white">Retour à l'accueil</Button>
      </Link>
    </div>
  );
}
