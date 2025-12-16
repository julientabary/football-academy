"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, CheckCircle, Loader2 } from "lucide-react";
import Link from "next/link";

export default function ReservationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/julien.tabary@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nom: formData.get("nom"),
          prenom: formData.get("prenom"),
          age: formData.get("age"),
          sexe: formData.get("sexe"),
          telephone: formData.get("telephone"),
          email: formData.get("email"),
          _subject: "🎯 Nouvelle demande de séance d'essai - Academy Football",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF9F7] text-stone-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 py-5 bg-[#FAF9F7]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-black text-xl tracking-tight">
            ACADEMY
          </Link>
          <Link 
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors"
          >
            <ArrowLeft size={16} />
            Retour
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
                <CheckCircle size={80} className="mx-auto text-green-600 mb-6" />
              </motion.div>
              <h1 className="text-4xl font-bold mb-4">Demande envoyée !</h1>
              <p className="text-xl text-stone-500 mb-8">
                Merci pour votre intérêt. Notre équipe vous recontactera dans les plus brefs délais pour organiser votre séance d'essai.
              </p>
              <Link
                href="/"
                className="inline-block bg-stone-900 text-white px-8 py-4 rounded-full font-medium hover:bg-stone-800 transition-all"
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
                <p className="text-sm uppercase tracking-widest text-stone-500 mb-4 flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  Inscription
                </p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                  Réserver une<br />séance d'essai
                </h1>
                <p className="text-lg text-stone-500">
                  Remplissez le formulaire et rejoignez l'aventure.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nom et Prénom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-600 mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      name="nom"
                      required
                      className="w-full bg-white border border-stone-200 rounded-2xl px-5 py-4 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-all"
                      placeholder="Dupont"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-600 mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      required
                      className="w-full bg-white border border-stone-200 rounded-2xl px-5 py-4 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-all"
                      placeholder="Lucas"
                    />
                  </div>
                </div>

                {/* Âge et Sexe */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-600 mb-2">
                      Âge
                    </label>
                    <input
                      type="number"
                      name="age"
                      required
                      min="4"
                      max="18"
                      className="w-full bg-white border border-stone-200 rounded-2xl px-5 py-4 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-all"
                      placeholder="12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-600 mb-2">
                      Sexe
                    </label>
                    <select
                      name="sexe"
                      required
                      defaultValue=""
                      className="w-full bg-white border border-stone-200 rounded-2xl px-5 py-4 text-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Choisir</option>
                      <option value="Masculin">Masculin</option>
                      <option value="Féminin">Féminin</option>
                    </select>
                  </div>
                </div>

                {/* Téléphone */}
                <div>
                  <label className="block text-sm font-medium text-stone-600 mb-2">
                    Numéro de téléphone
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    required
                    className="w-full bg-white border border-stone-200 rounded-2xl px-5 py-4 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-all"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-stone-600 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-white border border-stone-200 rounded-2xl px-5 py-4 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-all"
                    placeholder="parent@email.com"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-stone-900 text-white py-5 rounded-full font-medium text-lg hover:bg-stone-800 transition-all hover:scale-[1.01] mt-4 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    "Envoyer ma demande"
                  )}
                </button>

                <p className="text-center text-stone-400 text-sm mt-6">
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
