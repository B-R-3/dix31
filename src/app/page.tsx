import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Section Hero */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Guide d'Installation Next.js
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Un guide complet et professionnel pour configurer votre environnement de développement Next.js
          </p>
        </section>

        {/* Section Caractéristiques */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">Installation Simple</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Suivez nos instructions étape par étape pour une configuration sans souci
              </p>
            </CardContent>
          </Card>

          

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">Configuration Git</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Apprenez à configurer Git et à gérer votre projet efficacement
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">Bonnes Pratiques</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Découvrez les meilleures pratiques pour un projet Next.js robuste
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Section CTA */}
        <section className="text-center">
          <div className="relative w-64 h-64 mx-auto mb-8">
            <Image 
              src="/nextjs.1024x617.png" 
              alt="Next.js Logo" 
              layout="fill" 
              objectFit="contain"
              className="opacity-90"
            />
          </div>
          <Link href="/setup">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
              Commencer l'installation
            </Button>
          </Link>
        </section>
      </div>
    </main>
  );
}
