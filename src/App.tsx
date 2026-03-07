import React from 'react'

export default function App() {
  const whatsappNumber = "22243207257";
  const emailAddress = "rimoraweb@gmail.com";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="font-bold text-xl text-gray-900">RIMORA</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#accueil" className="text-gray-700 hover:text-orange-600 transition">Accueil</a>
            <a href="#services" className="text-gray-700 hover:text-orange-600 transition">Services</a>
            <a href="#apropos" className="text-gray-700 hover:text-orange-600 transition">À propos</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 transition">Contact</a>
          </nav>

          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition flex items-center gap-2">
            <span>WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Créez un site web pour votre restaurant, boutique ou commerce
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Attirez plus de clients en ligne. Un site web simple, professionnel et rapide pour votre entreprise à Nouakchott.
            </p>
            <p className="text-gray-700 mb-8 flex items-center gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span><strong>Pas besoin de connaissances techniques.</strong> Nous gérons tout pour vous, étape par étape.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition text-center">
                Contactez-nous sur WhatsApp
              </a>
              <button className="border-2 border-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition">
                En savoir plus
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-orange-500">100+</div>
                <div className="text-sm text-gray-600">Entreprises aidées</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">2-4</div>
                <div className="text-sm text-gray-600">Semaines pour créer</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">24/7</div>
                <div className="text-sm text-gray-600">Support disponible</div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663317134159/ZKipUChsvLFvsPDX.jpg" alt="Équipe RIMORA" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Pourquoi choisir RIMORA ?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Simple & Rapide', desc: 'Pas de complications. Nous créons votre site en 2-4 semaines.' },
              { title: 'Local & Fiable', desc: 'Nous sommes à Nouakchott et comprenons votre marché.' },
              { title: 'Support Complet', desc: 'Nous vous aidons avant, pendant et après la création.' },
              { title: 'Résultats Mesurables', desc: 'Attirez plus de clients et suivez vos résultats.' },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="font-bold text-lg text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Ce que nous faisons pour vous
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Des solutions simples pour développer votre présence en ligne
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: '🌐',
              title: 'Création de site web',
              desc: 'Un site web professionnel pour votre restaurant, boutique ou commerce. Rapide, beau et facile à gérer.',
              features: ['Design moderne et professionnel', 'Optimisé pour mobile', 'Facile à mettre à jour']
            },
            {
              icon: '📱',
              title: 'Visibilité sur Google & réseaux sociaux',
              desc: 'Soyez visible sur Google Maps, Facebook et Instagram. Attirez des clients qui vous cherchent.',
              features: ['Optimisation Google Business', 'Gestion des réseaux sociaux', 'Plus de clients locaux']
            }
          ].map((service, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.desc}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-500">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 rounded-lg transition">
                Découvrir
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition">
            Voir tous les services →
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Nos clients nous font confiance
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: 'RIMORA a créé notre site en 3 semaines. Maintenant, nous recevons des commandes en ligne !', author: 'Restaurant Local' },
              { quote: 'Grâce à Google Business, nous sommes visibles sur la carte. Beaucoup plus de clients !', author: 'Boutique de Mode' },
              { quote: "L'équipe de RIMORA est très professionnelle et toujours disponible. Recommandé !", author: 'Entreprise de Services' },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-900">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-orange-500 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à développer votre présence en ligne ?
          </h2>
          <p className="text-lg text-orange-100 mb-8">
            Contactez-nous dès aujourd'hui pour une consultation gratuite. Pas d'engagement, juste des conseils adaptés à votre entreprise.
          </p>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold transition">
            Contactez-nous sur WhatsApp
          </a>
          <p className="text-orange-100 mt-6 text-sm">
            Réponse généralement en moins de 1 heure
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-4">RIMORA</h3>
              <p className="text-sm">
                Agence digitale à Nouakchott, Mauritanie. Nous aidons les petites entreprises locales à se moderniser.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Création de site</a></li>
                <li><a href="#" className="hover:text-white transition">Réseaux sociaux</a></li>
                <li><a href="#" className="hover:text-white transition">Google Business</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Entreprise</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">À propos</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Contact</h3>
              <p className="text-sm mb-2">Nouakchott, Mauritanie</p>
              <p className="text-sm mb-2">Email: {emailAddress}</p>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition">WhatsApp</a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2026 RIMORA. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
