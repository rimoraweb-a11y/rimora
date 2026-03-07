import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Home, LayoutGrid, FileText, Settings, 
  MessageCircle, Users, BarChart3, Clock, 
  ChevronRight, CheckCircle2, Star, Menu, X,
  Globe, Smartphone, Search, Instagram, Facebook
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Constantes ---
const WHATSAPP_NUM = "22243207257";
const EMAIL = "rimoraweb@gmail.com";

// --- Composants Réutilisables ---
const Button = ({ children, className = "", variant = "primary", ...props }: any) => {
  const variants = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-200",
    secondary: "bg-white border-2 border-orange-100 text-gray-900 hover:bg-orange-50",
    outline: "border-2 border-white text-white hover:bg-white/10",
    whatsapp: "bg-green-500 hover:bg-green-600 text-white flex items-center gap-2"
  };
  return (
    <button 
      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 active:scale-95 ${variants[variant as keyof typeof variants]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }: any) => (
  <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

// --- Layout ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Accueil', path: '/', icon: Home },
    { name: 'Services', path: '/#services', icon: Globe },
    { name: 'Blog', path: '/blog', icon: FileText },
    { name: 'Dashboard', path: '/dashboard', icon: LayoutGrid },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform">
            <span className="text-white font-bold text-xl italic">R</span>
          </div>
          <span className="font-extrabold text-2xl tracking-tighter text-gray-900">RIMORA</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}
            >
              {link.name}
            </Link>
          ))}
          <a href={`https://wa.me/${WHATSAPP_NUM}`} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" className="py-2 px-4 rounded-lg">
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </Button>
          </a>
          <Link to="/admin">
            <Button variant="secondary" className="py-2 px-4 rounded-lg border-none bg-gray-100 hover:bg-gray-200">Admin</Button>
          </Link>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 px-4 py-6 flex flex-col gap-4"
          >
            {links.map((link) => (
              <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-lg font-medium text-gray-700">
                <link.icon size={20} className="text-orange-500" />
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Pages ---
const HomePage = () => (
  <div className="overflow-hidden">
    {/* Hero */}
    <section className="relative pt-12 pb-24 md:pt-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 font-semibold text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Agence Digitale à Nouakchott
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-[1.1] mb-8">
            Propulsez votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">commerce</span> en ligne
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Restaurants, boutiques ou services locaux : nous créons votre site web professionnel en 2 semaines. Sans complications, 100% géré.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={`https://wa.me/${WHATSAPP_NUM}`} target="_blank" rel="noopener noreferrer">
              <Button className="px-8 py-4 text-lg">Démarrer mon projet</Button>
            </a>
            <Button variant="secondary" className="px-8 py-4 text-lg">Voir nos réalisations</Button>
          </div>
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Client" />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 font-medium">
              <span className="text-gray-900 font-bold">100+</span> clients satisfaits en Mauritanie
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-orange-300 rounded-full blur-3xl opacity-30"></div>
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663317134159/ZKipUChsvLFvsPDX.jpg" 
            alt="Rimora Team" 
            className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
          />
        </motion.div>
      </div>
    </section>

    {/* Services */}
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
        <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mb-6"></div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Tout ce dont vous avez besoin pour réussir sur le web local.</p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        {[
          { icon: Globe, title: 'Sites Web', desc: 'Sites vitrines, boutiques en ligne et menus QR code pour restaurants.' },
          { icon: Search, title: 'Google Business', desc: 'Soyez premier sur Google Maps quand les clients cherchent à proximité.' },
          { icon: Smartphone, title: 'Réseaux Sociaux', desc: 'Gestion de vos pages Facebook et Instagram pour attirer du monde.' },
        ].map((s, i) => (
          <Card key={i} className="text-center">
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <s.icon size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">{s.title}</h3>
            <p className="text-gray-600 mb-6">{s.desc}</p>
            <Link to="/#contact" className="text-orange-600 font-bold flex items-center justify-center gap-2 group">
              En savoir plus <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Card>
        ))}
      </div>
    </section>
  </div>
);

const BlogPage = () => (
  <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-end mb-12">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Le Blog Rimora</h1>
        <p className="text-xl text-gray-600">Conseils et actualités pour booster votre business.</p>
      </div>
      <div className="hidden md:block">
        <div className="flex bg-gray-100 p-1 rounded-xl">
          <button className="px-4 py-2 bg-white shadow-sm rounded-lg font-medium">Tout</button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-900 font-medium">Conseils</button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-900 font-medium">Success Story</button>
        </div>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[1, 2, 3].map(i => (
        <Card key={i} className="p-0 overflow-hidden group">
          <div className="h-48 bg-gray-200 overflow-hidden">
            <img 
              src={`https://picsum.photos/seed/${i+10}/600/400`} 
              alt="Article" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-semibold uppercase tracking-wider">
              <span className="text-orange-600">Conseils</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Clock size={12} /> 5 min lecture</span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors">
              Comment booster les ventes de votre restaurant à Nouakchott
            </h3>
            <p className="text-gray-600 text-sm mb-6 line-clamp-2">
              Découvrez les 5 stratégies digitales incontournables pour attirer plus de clients locaux cette année...
            </p>
            <Link to="/blog" className="font-bold text-gray-900 flex items-center gap-2 group/link">
              Lire l'article <ChevronRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

const DashboardPage = () => (
  <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row justify-between gap-6 mb-12">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Tableau de Bord</h1>
        <p className="text-gray-600">Aperçu en temps réel de votre présence digitale.</p>
      </div>
      <div className="flex gap-4">
        <Button variant="secondary" className="flex items-center gap-2 py-2">
          <BarChart3 size={18} /> Télécharger Rapport
        </Button>
        <Button className="flex items-center gap-2 py-2">Mettre à jour</Button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
      {[
        { label: 'Visites Totales', value: '1,284', icon: Users, color: 'blue' },
        { label: 'Articles Publiés', value: '12', icon: FileText, color: 'orange' },
        { label: 'Projets Actifs', value: '4', icon: CheckCircle2, color: 'green' },
        { label: 'Taux de Conversion', value: '3.2%', icon: BarChart3, color: 'purple' },
      ].map((stat, i) => (
        <Card key={i} className="flex items-center gap-6">
          <div className={`w-12 h-12 rounded-xl bg-${stat.color}-100 text-${stat.color}-600 flex items-center justify-center`}>
            <stat.icon size={24} />
          </div>
          <div>
            <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
          </div>
        </Card>
      ))}
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
          <Clock size={20} className="text-orange-500" /> Activité Récente
        </h3>
        <div className="space-y-6">
          {[1,2,3].map(i => (
            <div key={i} className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                <CheckCircle2 size={18} className="text-green-500" />
              </div>
              <div>
                <div className="text-sm font-bold">Nouvel article publié</div>
                <div className="text-xs text-gray-500">Il y a 2 heures • Blog</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
          <Users size={20} className="text-orange-500" /> Trafic par Canal
        </h3>
        <div className="space-y-4">
          {[
            { name: 'Google Search', val: 65 },
            { name: 'Facebook', val: 45 },
            { name: 'Direct', val: 30 },
            { name: 'Instagram', val: 20 },
          ].map((c, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-2 font-medium">
                <span>{c.name}</span>
                <span className="text-gray-500">{c.val}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 rounded-full" style={{ width: `${c.val}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  </div>
);

const AdminPage = () => (
  <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl font-bold text-gray-900 mb-8">Administration</h1>
    <Card>
      <h3 className="text-xl font-bold mb-8">Publier un nouvel article</h3>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Titre de l'article</label>
          <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition" placeholder="Ex: Les secrets du SEO en Mauritanie" />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Catégorie</label>
          <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition">
            <option>Conseils Business</option>
            <option>Actualités</option>
            <option>Success Stories</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Contenu</label>
          <textarea rows={6} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition" placeholder="Écrivez votre article ici..."></textarea>
        </div>
        <div className="flex gap-4">
          <Button className="flex-1">Publier l'article</Button>
          <Button variant="secondary">Enregistrer Brouillon</Button>
        </div>
      </div>
    </Card>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-950 text-gray-400 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl italic">R</span>
            </div>
            <span className="font-extrabold text-2xl tracking-tighter text-white">RIMORA</span>
          </Link>
          <p className="text-lg max-w-md leading-relaxed">
            L'agence digitale qui transforme les commerces de Nouakchott en leaders du web. Simple, local et efficace.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Liens Rapides</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="hover:text-orange-500 transition">Accueil</Link></li>
            <li><Link to="/blog" className="hover:text-orange-500 transition">Blog</Link></li>
            <li><Link to="/dashboard" className="hover:text-orange-500 transition">Dashboard</Link></li>
            <li><Link to="/admin" className="hover:text-orange-500 transition">Admin</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3"><MessageCircle size={18} className="text-orange-500" /> {WHATSAPP_NUM}</li>
            <li className="flex items-center gap-3"><Globe size={18} className="text-orange-500" /> Nouakchott, Mauritanie</li>
            <li className="flex items-center gap-3"><FileText size={18} className="text-orange-500" /> {EMAIL}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        <p>© 2026 RIMORA. Tous droits réservés.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition">Mentions Légales</a>
          <a href="#" className="hover:text-white transition">Confidentialité</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- App ---
export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-orange-100 selection:text-orange-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating WhatsApp CTA */}
        <a 
          href={`https://wa.me/${WHATSAPP_NUM}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </Router>
  );
}
