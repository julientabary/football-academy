"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { TrialModal } from "@/components/ui/modal";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Star, Trophy, Users } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    "/assets/07d06c85-4dca-46b4-b23f-8acd3817dd90-9c13f3a5-dc21-40ac-83e1-1ceee62c2f52.png",
    "/assets/a9f60cbb-09dc-4d07-b372-02e907f54b37-5b0ca432-f27e-4f38-a6a9-502ca91f7d15.png",
    "/assets/20d87f2e-cecf-4b73-b892-c8d764e27523-8368cfec-c773-4b54-8724-98b4d6a71f6b.png",
    "/assets/e537c6d0-a124-421c-9312-f45f6f2ebd3a-50a6bdca-b084-4409-a75c-c3f24bc4db22.png",
    "/assets/23b20bac-dea0-43c4-b755-8e68ed317f33-7bab2171-5cfe-4e41-b3a8-52d5266454b3.png",
    "/assets/f31286e3-748c-4a1a-8833-f37c637cfaf9-96878d84-d8f5-431a-992b-72d5a4f0e142.png",
    "/assets/1a73812d-e72d-4cb8-88c4-385850b670aa-7d5d6736-1e7c-4a55-aeaa-86832369300a.png",
    "/assets/f4227e2b-1fef-47e8-9cae-d680dd580162-a7066d61-9664-4537-8e4a-c34da45fbe73.png",
    "/assets/33017b79-6638-4ff8-ab99-369834a3fca5-b4d77c3d-39a6-462a-b7fd-0a7aad07f2af.png",
  ];

  const gridItems = [
    {
      title: "L'Art du Geste",
      description: "La technique pure au service du beau jeu.",
      header: (
        <div className="relative w-full h-full">
           <Image src={images[0]} alt="Technique" fill className="object-cover transition-transform duration-500 hover:scale-105" />
           <div className="absolute inset-0 bg-black/20" />
        </div>
      ),
      className: "md:col-span-2",
      icon: <Star className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Esprit d'Équipe",
      description: "Grandir ensemble, gagner ensemble.",
      header: (
        <div className="relative w-full h-full">
           <Image src={images[5]} alt="Team" fill className="object-cover transition-transform duration-500 hover:scale-105" />
           <div className="absolute inset-0 bg-black/20" />
        </div>
      ),
      className: "md:col-span-1",
      icon: <Users className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Passion Brute",
      description: "Le football dans son état le plus pur.",
      header: (
        <div className="relative w-full h-full">
           <Image src={images[2]} alt="Passion" fill className="object-cover transition-transform duration-500 hover:scale-105" />
           <div className="absolute inset-0 bg-black/20" />
        </div>
      ),
      className: "md:col-span-1",
      icon: <Trophy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Formation d'Élite",
      description: "Des coachs dédiés à votre progression.",
      header: (
        <div className="relative w-full h-full">
           <Image src={images[3]} alt="Training" fill className="object-cover transition-transform duration-500 hover:scale-105" />
           <div className="absolute inset-0 bg-black/20" />
        </div>
      ),
      className: "md:col-span-2",
      icon: <ArrowRight className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-white/20">
      {/* Modal */}
      <TrialModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-zinc-950/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter">ACADEMY.</div>
          <div className="flex gap-6 text-sm font-medium text-zinc-400">
            <a href="#" className="hover:text-white transition-colors">Philosophie</a>
            <a href="#" className="hover:text-white transition-colors">Programme</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors"
          >
            Rejoindre
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
              FORGER LES <br />
              <span className="text-zinc-500">LÉGENDES</span> DE DEMAIN.
            </h1>
            <p className="text-xl text-zinc-400 max-w-lg leading-relaxed">
              Une approche moderne de la formation. Nous allions l'exigence technique à l'épanouissement personnel pour créer les champions de demain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Gallery */}
      <section className="px-6 py-10">
        <BentoGrid className="max-w-7xl mx-auto">
          {gridItems.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.className}
            />
          ))}
          
          {/* Extra generic items for the remaining images */}
          <BentoGridItem
             className="md:col-span-1"
             title="Culture Street"
             description="L'authenticité avant tout."
             header={
                <div className="relative w-full h-full">
                    <Image src={images[4]} alt="Street" fill className="object-cover transition-transform duration-500 hover:scale-105" />
                </div>
             }
          />
           <BentoGridItem
             className="md:col-span-2"
             title="Focus Mental"
             description="La victoire se joue dans la tête."
             header={
                <div className="relative w-full h-full">
                    <Image src={images[1]} alt="Mental" fill className="object-cover transition-transform duration-500 hover:scale-105" />
                </div>
             }
          />
        </BentoGrid>
      </section>

      {/* Stats / Philosophy */}
      <section className="py-24 border-t border-white/5 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
            <div>
                <h3 className="text-2xl font-bold mb-4">Excellence</h3>
                <p className="text-zinc-400">Des standards élevés pour repousser les limites de chaque joueur, techniquement et physiquement.</p>
            </div>
            <div>
                <h3 className="text-2xl font-bold mb-4">Communauté</h3>
                <p className="text-zinc-400">Plus qu'une équipe, un collectif soudé par la passion du jeu et le respect mutuel.</p>
            </div>
            <div>
                <h3 className="text-2xl font-bold mb-4">Avenir</h3>
                <p className="text-zinc-400">Un accompagnement scolaire et sportif pour préparer l'athlète complet.</p>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center">
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-2xl mx-auto"
        >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Prêt à entrer sur le terrain ?</h2>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-zinc-950 px-8 py-4 rounded-full text-lg font-bold hover:bg-zinc-200 transition-all hover:scale-105"
            >
                Réserver une séance d'essai
            </button>
        </motion.div>
      </section>

      <footer className="border-t border-white/5 py-12 px-6 text-center text-zinc-600 text-sm">
        <p>&copy; 2024 Academy Football. Tous droits réservés.</p>
      </footer>
    </main>
  );
}
