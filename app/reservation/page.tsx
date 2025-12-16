"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    age: "",
    sexe: "",
    telephone: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pourrez ajouter l'envoi vers un backend ou un service comme Formspree
    console.log("Données du formulaire:", formData);
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-zinc-950/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tighter hover:text-zinc-300 transition-colors">
            ACADEMY.
          </Link>
          <Link 
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Retour à l'accueil
          </Link>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-xl mx-auto">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <CheckCircle size={80} className="mx-auto text-green-500 mb-6" />
              </motion.div>
              <h1 className="text-4xl font-bold mb-4">Demande envoyée !</h1>
              <p className="text-xl text-zinc-400 mb-8">
                Merci pour votre intérêt. Notre équipe vous recontactera dans les plus brefs délais pour organiser votre séance d'essai.
              </p>
              <Link
                href="/"
                className="inline-block bg-white text-zinc-950 px-8 py-4 rounded-full font-bold hover:bg-zinc-200 transition-all"
              >
                Retour à l'accueil
              </Link>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                  Réserver une séance d'essai
                </h1>
                <p className="text-xl text-zinc-400">
                  Remplissez le formulaire ci-dessous et rejoignez l'aventure Academy.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nom et Prénom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all"
                      placeholder="Dupont"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all"
                      placeholder="Lucas"
                    />
                  </div>
                </div>

                {/* Âge et Sexe */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">
                      Âge
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      required
                      min="4"
                      max="18"
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all"
                      placeholder="12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">
                      Sexe
                    </label>
                    <select
                      name="sexe"
                      value={formData.sexe}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Choisir</option>
                      <option value="masculin">Masculin</option>
                      <option value="feminin">Féminin</option>
                    </select>
                  </div>
                </div>

                {/* Téléphone */}
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">
                    Numéro de téléphone
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all"
                    placeholder="parent@email.com"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-white text-zinc-950 py-5 rounded-full font-bold text-lg hover:bg-zinc-200 transition-all hover:scale-[1.02] mt-4"
                >
                  Envoyer ma demande
                </button>

                <p className="text-center text-zinc-600 text-sm mt-6">
                  En soumettant ce formulaire, vous acceptez d'être recontacté par notre équipe.
                </p>
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}
