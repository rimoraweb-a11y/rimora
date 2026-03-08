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
          <span className="font-extrabold text-2xl tracking-tighter text-gray-900 uppercase">RIMORA</span>
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
            Agence Digitale de Confiance à Nouakchott
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-[1.1] mb-8">
            Propulsez votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">commerce</span> en ligne
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Restaurants, boutiques ou services locaux : nous créons votre site web professionnel en 2 semaines. Sans complications, 100% géré localement.
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
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services Experts</h2>
        <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full mb-6"></div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Tout ce dont vous avez besoin pour dominer le web local en Mauritanie.</p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        {[
          { icon: Globe, title: 'Sites Web Vitrines', desc: 'Sites élégants, rapides et optimisés pour les restaurants et boutiques de Nouakchott.' },
          { icon: Search, title: 'SEO Local & Maps', desc: 'Soyez le premier sur Google Maps quand les clients cherchent un service à proximité.' },
          { icon: Smartphone, title: 'Stratégie Sociale', desc: 'Gestion de vos pages Facebook et Instagram pour transformer les likes en clients.' },
        ].map((s, i) => (
          <Card key={i} className="text-center">
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <s.icon size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">{s.title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{s.desc}</p>
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
    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Conseils pour les Commerçants Mauritaniens</h1>
        <p className="text-xl text-gray-600 leading-relaxed">Apprenez à digitaliser votre business avec nos guides pratiques adaptés au marché local.</p>
      </div>
      <div className="hidden md:block">
        <div className="flex bg-gray-100 p-1 rounded-xl">
          <button className="px-4 py-2 bg-white shadow-sm rounded-lg font-medium">Tout</button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-900 font-medium">Conseils</button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-900 font-medium">Digitalisation</button>
        </div>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Article Principal - Le Guide de Digitalisation */}
      <Card className="p-0 overflow-hidden group border-orange-200 border-2">
        <div className="h-48 bg-gray-200 overflow-hidden relative">
          <img 
            src="https://picsum.photos/seed/mauritania/600/400" 
            alt="Commerce Nouakchott" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            Indispensable
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-semibold uppercase tracking-wider">
            <span className="text-orange-600">Stratégie Locale</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Clock size={12} /> 7 min lecture</span>
          </div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors">
            Pourquoi votre commerce à Nouakchott perd des clients sans site web en 2026
          </h3>
          <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
            Dans une ville qui bouge comme Nouakchott, WhatsApp ne suffit plus. Découvrez comment un site web professionnel peut multiplier vos ventes par 3 en rassurant vos clients et en étant visible sur Google Maps 24h/24.
          </p>
          <Link to="/blog" className="font-bold text-gray-900 flex items-center gap-2 group/link">
            Lire le guide complet <ChevronRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Card>

      {/* Autres Articles */}
      {[
        { id: 2, title: "Top 5 des restaurants qui cartonnent grâce au Menu QR Code", cat: "Success Story" },
        { id: 3, title: "Comment gérer ses commandes WhatsApp sans devenir fou", cat: "Outils" }
      ].map(post => (
        <Card key={post.id} className="p-0 overflow-hidden group">
          <div className="h-48 bg-gray-200 overflow-hidden">
            <img 
              src={`https://picsum.photos/seed/${post.id+20}/600/400`} 
              alt="Article" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-semibold uppercase tracking-wider">
              <span className="text-orange-600">{post.cat}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Clock size={12} /> 4 min lecture</span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm mb-6 line-clamp-2">
              Découvrez les meilleures pratiques adaptées à la réalité du marché mauritanien...
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
        <h1 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">Tableau de Bord Stratégique</h1>
        <p className="text-gray-600 text-lg">Aperçu en temps réel de votre impact digital sur le marché local.</p>
      </div>
      <div className="flex gap-4">
        <Button variant="secondary" className="flex items-center gap-2 py-2">
          <BarChart3 size={18} /> Télécharger Rapport
        </Button>
        <Button className="flex items-center gap-2 py-2 shadow-orange-100">Mettre à jour</Button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
      {[
        { label: 'Visites Totales', value: '2,482', icon: Users, color: 'blue' },
        { label: 'Articles Publiés', value: '15', icon: FileText, color: 'orange' },
        { label: 'Clients Nouakchott', value: '18', icon: CheckCircle2, color: 'green' },
        { label: 'Demandes de Devis', value: '42', icon: MessageCircle, color: 'purple' },
      ].map((stat, i) => (
        <Card key={i} className="flex items-center gap-6">
          <div className={`w-12 h-12 rounded-xl bg-${stat.color}-100 text-${stat.color}-600 flex items-center justify-center`}>
            <stat.icon size={24} />
          </div>
          <div>
            <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            <div className="text-2xl font-black text-gray-900">{stat.value}</div>
          </div>
        </Card>
      ))}
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
          <Clock size={20} className="text-orange-500" /> Activité de Prospection
        </h3>
        <div className="space-y-6">
          {[
            { msg: "Nouveau prospect : Restaurant à Tevragh Zeina", time: "10 min", icon: MessageCircle, col: "green" },
            { msg: "Article publié : Digitalisation Nouakchott", time: "2h", icon: FileText, col: "blue" },
            { msg: "Mise à jour SEO Maps terminée", time: "5h", icon: Search, col: "orange" }
          ].map((act, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className={`w-10 h-10 rounded-full bg-${act.col}-100 flex items-center justify-center shrink-0`}>
                <act.icon size={18} className={`text-${act.col}-600`} />
              </div>
              <div>
                <div className="text-sm font-bold">{act.msg}</div>
                <div className="text-xs text-gray-500">Il y a {act.time} • Rimora Engine</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-gray-900">
          <Users size={20} className="text-orange-500" /> Sources de Clients
        </h3>
        <div className="space-y-4">
          {[
            { name: 'Recherche Google (SEO Local)', val: 72 },
            { name: 'WhatsApp Direct', val: 58 },
            { name: 'Facebook Ads Mauritanie', val: 35 },
            { name: 'Instagram / Influenceurs', val: 25 },
          ].map((c, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-2 font-medium">
                <span className="text-gray-700">{c.name}</span>
                <span className="text-gray-900 font-bold">{c.val}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" style={{ width: `${c.val}%` }}></div>
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
    <div className="mb-12">
      <h1 className="text-4xl font-black text-gray-900 mb-2">Centre de Contrôle</h1>
      <p className="text-gray-600">Gérez vos contenus et votre prospection en un seul endroit.</p>
    </div>
    
    <div className="grid gap-8">
      <Card>
        <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
          <FileText className="text-orange-500" /> Publier sur le Blog
        </h3>
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Titre de l'article</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition" placeholder="Ex: Les secrets du SEO en Mauritanie" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Catégorie</label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition">
                <option>Conseils Business</option>
                <option>Digitalisation Nouakchott</option>
                <option>Success Stories</option>
                <option>Actualités Rimora</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Contenu de l'article (Markdown supporté)</label>
            <textarea rows={8} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition font-mono text-sm" placeholder="Écrivez votre article ici..."></textarea>
          </div>
          <div className="flex gap-4 pt-4 border-t border-gray-100">
            <Button className="flex-1 shadow-orange-200">Publier l'article maintenant</Button>
            <Button variant="secondary">Aperçu</Button>
          </div>
        </div>
      </Card>

      <Card className="bg-orange-50 border-orange-200">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-orange-900">
          <MessageCircle className="text-orange-600" /> Rappel de Prospection
        </h3>
        <p className="text-orange-800 mb-6">Avez-vous contacté vos 10 prospects aujourd'hui ? Utilisez vos scripts WhatsApp pour maximiser vos chances.</p>
        <Link to="/#contact">
          <Button className="w-full bg-orange-600 hover:bg-orange-700">Accéder aux scripts WhatsApp</Button>
        </Link>
      </Card>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-950 text-gray-400 py-24 border-t border-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl italic">R</span>
            </div>
            <span className="font-extrabold text-2xl tracking-tighter text-white">RIMORA</span>
          </Link>
          <p className="text-xl max-w-md leading-relaxed mb-8">
            L'agence digitale qui transforme les commerces de Nouakchott en leaders du web. Simple, local et 100% efficace.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all"><Instagram size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all"><Facebook size={20} /></a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-5">
            <li><Link to="/" className="hover:text-orange-500 transition-colors">Accueil</Link></li>
            <li><Link to="/blog" className="hover:text-orange-500 transition-colors">Blog Stratégique</Link></li>
            <li><Link to="/dashboard" className="hover:text-orange-500 transition-colors">Dashboard</Link></li>
            <li><Link to="/admin" className="hover:text-orange-500 transition-colors">Admin</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest">Contact Direct</h4>
          <ul className="space-y-5">
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center group-hover:bg-orange-500/20 group-hover:text-orange-500 transition-all">
                <MessageCircle size={20} />
              </div>
              <span className="font-medium">+222 {WHATSAPP_NUM}</span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center group-hover:bg-orange-500/20 group-hover:text-orange-500 transition-all">
                <FileText size={20} />
              </div>
              <span className="font-medium">{EMAIL}</span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center group-hover:bg-orange-500/20 group-hover:text-orange-500 transition-all">
                <Globe size={20} />
              </div>
              <span className="font-medium">Nouakchott, Mauritanie</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-900 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-sm uppercase tracking-widest font-bold">
        <p>© 2026 RIMORA. Tous droits réservés.</p>
        <div className="flex gap-10">
          <a href="#" className="hover:text-orange-500 transition-colors">Mentions Légales</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Confidentialité</a>
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
          className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center gap-3 pr-6"
        >
          <div className="relative">
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <MessageCircle size={28} />
          </div>
          <span className="font-bold text-sm">Discutons de votre projet</span>
        </a>
      </div>
    </Router>
  );
}
