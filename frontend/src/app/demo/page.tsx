// "use client";
// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import ChatbotDemo from '../../components/ChatbotDemo';
// import PricingCards from '../../components/PricingCards';
// import { CheckCircle2, LayoutDashboard, MessageSquareText } from 'lucide-react';

// export default function DemoPage() {
//   const [gymName, setGymName] = useState('Your Gym');

//   useEffect(() => {
//     const saved = localStorage.getItem('gymName');
//     if (saved) setGymName(saved);
//   }, []);

//   return (
//     <main className="min-h-screen bg-[#050505]">
//       {/* Personalized Header */}
//       <nav className="p-6 border-b border-white/10 flex justify-between items-center sticky top-0 bg-black/80 backdrop-blur-xl z-50">
//         <div className="flex items-center gap-2">
//           <div className="w-8 h-8 bg-blue-600 rounded-lg" />
//           <span className="text-xl font-bold uppercase tracking-widest">{gymName} AI</span>
//         </div>
//         <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-full font-bold transition-all">
//           Activate Full System
//         </button>
//       </nav>

//       {/* Hero Section */}
//       <section className="py-20 px-6 text-center">
//         <motion.h1 
//           initial={{ opacity: 0 }} animate={{ opacity: 1 }}
//           className="text-4xl md:text-6xl font-black mb-6"
//         >
//           See How <span className="text-blue-500">{gymName}</span> <br /> 
//           Scales With Synexis AI
//         </motion.h1>
//         <p className="text-gray-400 max-w-xl mx-auto mb-16">
//           Everything below has been automatically customized for your brand. 
//           Test your AI Agent in real-time.
//         </p>

//         {/* The Simulation */}
//         <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="text-left space-y-8">
//             <h2 className="text-3xl font-bold">What your system includes:</h2>
//             <div className="space-y-4">
//               {[
//                 "Custom WhatsApp Chatbot for " + gymName,
//                 "Dynamic Lead Capture Page",
//                 "Automated Scheduling System",
//                 "Real-time Analytics Dashboard"
//               ].map((item, i) => (
//                 <div key={i} className="flex items-center gap-3 text-gray-300">
//                   <CheckCircle2 className="text-green-500" /> {item}
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           <div className="relative">
//              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[30px] blur opacity-30 animate-pulse"></div>
//              <ChatbotDemo gymName={gymName} />
//           </div>
//         </div>
//       </section>

//       {/* Pricing Table */}
//       <section className="py-24 bg-zinc-950 px-6" id="pricing">
//          <div className="max-w-7xl mx-auto">
//             <div className="text-center mb-16">
//                <h2 className="text-4xl font-bold">Pick Your Growth Plan</h2>
//                <p className="text-gray-500 mt-4">Start your 48-hour setup today.</p>
//             </div>
//             <PricingCards />
//          </div>
//       </section>
//     </main>
//   );
// }
"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatbotDemo from '@/components/ChatbotDemo';
import PricingCards from '@/components/PricingCards';
import { Check, Layout, MessageSquare, Sparkles, TrendingUp, Globe, Smartphone, Monitor, ShieldCheck } from 'lucide-react';

export default function DemoPage() {
  const [gymName, setGymName] = useState('Your Gym');
  const [view, setView] = useState('desktop');

  useEffect(() => {
    const saved = localStorage.getItem('gymName');
    if (saved) {
      setGymName(saved);
      document.title = `${saved} AI - Managed by Synexis`;
    }
  }, [gymName]);

  return (
    <main className="min-h-screen bg-[#020202] text-white">
      
      {/* --- SYNEXIS BUILDER CONTROL BAR --- */}
      <div className="bg-[#0A0A0A] border-b border-blue-500/20 p-4 sticky top-0 z-[100] flex justify-between items-center px-4 md:px-8 backdrop-blur-md">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-2 px-2 md:px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <ShieldCheck size={14} className="text-blue-500" />
            <span className="text-[8px] md:text-[10px] font-bold text-blue-400 uppercase tracking-[1px] md:tracking-[2px]">Synexis v4.0</span>
          </div>
          <p className="text-[10px] text-gray-500 hidden sm:block italic">Preview: <span className="text-white font-bold">{gymName}</span></p>
        </div>

        {/* View Switcher - Hidden on real mobile devices to avoid confusion */}
        <div className="flex bg-zinc-900 rounded-xl p-1 gap-1 border border-white/5">
          <button onClick={() => setView('desktop')} className={`p-2 rounded-lg transition-all ${view === 'desktop' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}><Monitor size={16}/></button>
          <button onClick={() => setView('mobile')} className={`p-2 rounded-lg transition-all ${view === 'mobile' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}><Smartphone size={16}/></button>
        </div>

        <button 
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-white text-black px-4 md:px-6 py-2 rounded-full font-black text-[10px] md:text-xs hover:bg-blue-500 hover:text-white transition-all active:scale-95"
        >
          CLAIM SITE
        </button>
      </div>

      {/* --- PERSONALIZED WEBSITE CANVAS --- */}
      <section className="py-6 md:py-12 px-2 md:px-4 flex justify-center items-start overflow-x-hidden">
        <motion.div 
          layout
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1, 
            width: view === 'desktop' ? '100%' : '360px',
            borderRadius: view === 'desktop' ? '0px' : '32px',
            height: view === 'desktop' ? 'auto' : '700px'
          }}
          className={`max-w-7xl w-full bg-black border border-white/10 shadow-[0_0_80px_rgba(59,130,246,0.15)] relative flex flex-col ${view === 'mobile' ? 'overflow-y-auto overflow-x-hidden scrollbar-hide' : ''}`}
        >
          {/* MOCK BROWSER HEADER */}
          {view === 'desktop' && (
            <div className="bg-zinc-900/50 p-3 border-b border-white/5 flex gap-2 px-6 sticky top-0 z-10">
               <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
               <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
               <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            </div>
          )}

          {/* PERSONALIZED BRAND NAVBAR */}
          <nav className="p-4 md:p-6 border-b border-white/5 flex justify-between items-center bg-black sticky top-0 z-20">
            <div className={`font-black tracking-tighter italic uppercase ${view === 'mobile' ? 'text-lg' : 'text-2xl'}`}>
              {gymName} <span className="text-blue-600 underline decoration-2 underline-offset-4">AI</span>
            </div>
            {view === 'desktop' && (
              <div className="hidden lg:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-500">
                <a href="#" className="hover:text-white">Memberships</a>
                <a href="#" className="hover:text-white">Schedule</a>
                <a href="#" className="hover:text-white">Coaches</a>
              </div>
            )}
            <button className="border border-white/20 px-4 py-1.5 rounded-md text-[9px] font-bold uppercase">Login</button>
          </nav>

          {/* HERO SECTION */}
          <div className="relative pt-12 pb-12 px-4 md:px-8 text-center overflow-hidden flex-shrink-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-blue-600/5 blur-[80px] -z-10" />
            
            <motion.div initial={{ y: 20 }} animate={{ y: 0 }}>
              <h1 className={`font-black mb-4 leading-none ${view === 'mobile' ? 'text-3xl' : 'text-5xl md:text-7xl'}`}>
                {gymName.split(' ')[0]} <br /> <span className="text-blue-500">REDEFINED.</span>
              </h1>
              <p className={`text-gray-400 max-w-xl mx-auto mb-8 ${view === 'mobile' ? 'text-xs' : 'text-sm md:text-base'}`}>
                Welcome to the digital hub of <b>{gymName}</b>. Our AI ensures your fitness journey never stops.
              </p>

              {/* LIVE BADGE */}
              <div className="flex justify-center mb-8">
                <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                  </span>
                  <span className="text-[8px] md:text-[10px] font-bold text-green-500 uppercase tracking-widest text-nowrap">System Active</span>
                </div>
              </div>

              {/* CHATBOT */}
              <div className="max-w-md mx-auto relative group px-2">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[24px] md:rounded-[30px] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
                <ChatbotDemo gymName={gymName} />
              </div>
            </motion.div>
          </div>

          {/* FEATURE GRID - Fully Responsive */}
          <div className={`grid border-t border-white/5 bg-zinc-950/50 ${view === 'mobile' ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}`}>
            {[
              { t: "Automated Bookings", i: <TrendingUp size={view === 'mobile' ? 16 : 20}/> },
              { t: "24/7 Support", i: <MessageSquare size={view === 'mobile' ? 16 : 20}/> },
              { t: "Smart Dashboard", i: <Layout size={view === 'mobile' ? 16 : 20}/> },
              { t: "Personalized AI", i: <Sparkles size={view === 'mobile' ? 16 : 20}/> }
            ].map((f, i) => (
              <div key={i} className="p-6 border-r border-b border-white/5 flex items-center md:flex-col gap-4 hover:bg-white/[0.02] transition-colors">
                <div className="text-blue-500 flex-shrink-0">{f.i}</div>
                <div className={`font-black uppercase tracking-widest text-white ${view === 'mobile' ? 'text-[9px]' : 'text-[11px] md:text-center'}`}>{f.t} for {gymName}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="py-20 md:py-32 px-4 border-t border-white/5 mt-10">
        <div className="text-center mb-16 px-4">
          <span className="text-blue-500 font-bold text-[10px] md:text-xs uppercase tracking-[3px] md:tracking-[5px]">The Final Step</span>
          <h2 className="text-3xl md:text-5xl font-black mt-4 mb-4 text-white uppercase italic tracking-tighter">Ready to Own This?</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">Deploy this system for {gymName} today. 48-hour delivery guaranteed.</p>
        </div>
        <PricingCards />
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-gray-700 text-[8px] md:text-[10px] font-bold uppercase tracking-[3px]">
        Synexis Labz x {gymName} © 2026
      </footer>
    </main>
  );
}