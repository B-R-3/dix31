import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center p-6">
      {/* Titre principal */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Bienvenue dans votre apprentissage Next.js !
      </h1>

      <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-lg">
        Apprenez à installer et configurer Next.js en suivant notre guide étape par étape.
      </p>

      {/* Image illustrative */}
      <div className="relative w-64 h-64 mt-6">
        <Image src="/nextjs.1024x617.png" alt="Next.js Learning" layout="fill" objectFit="contain" />
      </div>

      {/* Bouton vers la page Setup */}
      <Link href="/setup">
        <Button className="mt-6 text-lg px-6 py-3">Commencer l'installation</Button>
      </Link>
    </div>
  );
}
