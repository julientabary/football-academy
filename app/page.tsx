"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowRight, MapPin, Phone, Mail } from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const images = [
    "/assets/art-du-geste.png",
    "/assets/a9f60cbb-09dc-4d07-b372-02e907f54b37-5b0ca432-f27e-4f38-a6a9-502ca91f7d15.png",
    "/assets/20d87f2e-cecf-4b73-b892-c8d764e27523-8368cfec-c773-4b54-8724-98b4d6a71f6b.png",
    "/assets/e537c6d0-a124-421c-9312-f45f6f2ebd3a-50a6bdca-b084-4409-a75c-c3f24bc4db22.png",
    "/assets/23b20bac-dea0-43c4-b755-8e68ed317f33-7bab2171-5cfe-4e41-b3a8-52d5266454b3.png",
    "/assets/f31286e3-748c-4a1a-8833-f37c637cfaf9-96878d84-d8f5-431a-992b-72d5a4f0e142.png",
  ];

  return (
    <main className="min-h-screen bg-[#FAF9F7] text-stone-800 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-black text-xl tracking-tight">
            ACADEMY
          </Link>
          
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-100 transition-colors"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ 
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none"
        }}
        className="fixed inset-0 bg-[#FAF9F7] z-40 flex flex-col items-center justify-center gap-8"
      >
        <Link href="#programme" onClick={() => setMenuOpen(false)} className="text-4xl font-light hover:text-stone-500 transition-colors">Programme</Link>
        <Link href="#philosophie" onClick={() => setMenuOpen(false)} className="text-4xl font-light hover:text-stone-500 transition-colors">Philosophie</Link>
        <Link href="#galerie" onClick={() => setMenuOpen(false)} className="text-4xl font-light hover:text-stone-500 transition-colors">Galerie</Link>
        <Link href="/reservation" onClick={() => setMenuOpen(false)} className="text-4xl font-light hover:text-stone-500 transition-colors">Contact</Link>
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-6">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <h1 className="bg-text text-center whitespace-nowrap">
            FOOTBALL
          </h1>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto w-full pt-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left side */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-sm uppercase tracking-widest text-stone-500 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  Académie de Football
                </p>
                <h2 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
                  Forger les<br />
                  <span className="text-stone-400">légendes</span><br />
                  de demain.
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-stone-500 max-w-md leading-relaxed"
              >
                Une approche moderne de la formation, alliant excellence technique et épanouissement personnel.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link 
                  href="/reservation"
                  className="inline-flex items-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-full font-medium hover:bg-stone-800 transition-all group"
                >
                  Réserver un essai
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Right side - Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden"
            >
              <Image 
                src={images[0]} 
                alt="Academy Football" 
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>

          {/* Bottom info */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-between items-center text-sm text-stone-400 px-6">
            <span>SCROLL</span>
            <span>© 2024</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="programme" className="py-32 px-6 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-sm uppercase tracking-widest text-stone-500 mb-4">Notre Programme</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Une formation<br />d'excellence
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Technique", desc: "Maîtrise du ballon, passes précises, dribbles efficaces.", num: "01" },
              { title: "Tactique", desc: "Lecture du jeu, positionnement, intelligence collective.", num: "02" },
              { title: "Mental", desc: "Confiance, résilience, esprit de compétition.", num: "03" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl"
              >
                <span className="text-6xl font-bold text-stone-200">{item.num}</span>
                <h3 className="text-2xl font-bold mt-4 mb-3">{item.title}</h3>
                <p className="text-stone-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="relative h-screen">
        <Image 
          src={images[3]} 
          alt="Training" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-5xl md:text-7xl font-bold text-center leading-tight"
          >
            La passion<br />avant tout.
          </motion.h2>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophie" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-3xl overflow-hidden"
            >
              <Image 
                src={images[1]} 
                alt="Philosophy" 
                fill 
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-sm uppercase tracking-widest text-stone-500 flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                Notre Philosophie
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Plus qu'un club,<br />une famille.
              </h2>
              <p className="text-lg text-stone-500 leading-relaxed">
                Nous croyons que le football est bien plus qu'un sport. C'est une école de vie qui forge le caractère, développe l'esprit d'équipe et crée des liens durables.
              </p>
              <p className="text-lg text-stone-500 leading-relaxed">
                Chaque jeune qui rejoint notre académie est accompagné individuellement dans son parcours, tant sur le terrain qu'en dehors.
              </p>
              
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-stone-200">
                <div>
                  <p className="text-4xl font-bold">200+</p>
                  <p className="text-stone-500 text-sm">Jeunes formés</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">15</p>
                  <p className="text-stone-500 text-sm">Années d'expérience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">98%</p>
                  <p className="text-stone-500 text-sm">Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galerie" className="py-32 px-6 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-widest text-stone-400 mb-4">Galerie</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Nos moments
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl overflow-hidden ${i === 0 ? 'col-span-2 row-span-2 h-[400px] md:h-[500px]' : 'h-[200px] md:h-[240px]'}`}
              >
                <Image 
                  src={img} 
                  alt={`Gallery ${i + 1}`} 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Prêt à rejoindre<br />l'aventure ?
            </h2>
            <p className="text-xl text-stone-500 mb-12 max-w-2xl mx-auto">
              Offrez à votre enfant l'opportunité de se dépasser et de vivre sa passion pour le football.
            </p>
            <Link 
              href="/reservation"
              className="inline-flex items-center gap-3 bg-stone-900 text-white px-10 py-5 rounded-full font-medium text-lg hover:bg-stone-800 transition-all group"
            >
              Réserver une séance d'essai
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <h3 className="font-black text-2xl mb-4">ACADEMY</h3>
              <p className="text-stone-500 max-w-md">
                Forger les champions de demain à travers une formation d'excellence et des valeurs fortes.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-3 text-stone-500">
                <p className="flex items-center gap-2"><MapPin size={16} /> Marseille, France</p>
                <p className="flex items-center gap-2"><Phone size={16} /> 06 12 34 56 78</p>
                <p className="flex items-center gap-2"><Mail size={16} /> contact@academy.fr</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Liens</h4>
              <div className="space-y-3 text-stone-500">
                <p><Link href="#programme" className="hover:text-stone-900 transition-colors">Programme</Link></p>
                <p><Link href="#philosophie" className="hover:text-stone-900 transition-colors">Philosophie</Link></p>
                <p><Link href="/reservation" className="hover:text-stone-900 transition-colors">Inscription</Link></p>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-400">
            <p>© 2024 Academy Football. Tous droits réservés.</p>
            <p>Conçu avec passion</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
