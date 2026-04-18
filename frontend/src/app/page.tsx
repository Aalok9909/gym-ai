// "use client";
// import { motion } from 'framer-motion';
// import DemoForm from '../components/DemoForm';
// import { ArrowRight, Zap, Shield, BarChart3 } from 'lucide-react';

// export default function Home() {
//   return (
//     <main className="min-h-screen relative overflow-hidden">
//       {/* Background Decor */}
//       <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full -z-10" />
//       <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full -z-10" />

//       {/* Hero Section */}
//       <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 inline-block">
//             🚀 The #1 AI Platform for Gym Owners
//           </span>
//           <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
//             Automate Your Gym <br />
//             <span className="text-gradient">Ready in 48 Hours.</span>
//           </h1>
//           <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
//             Stop losing leads to slow replies. Our AI Assistant handles bookings, 
//             customer inquiries, and lead capture 24/7 so you can focus on training.
//           </p>

//           <div className="max-w-lg mx-auto p-2 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm shadow-2xl">
//             <DemoForm />
//           </div>
//         </motion.div>
//       </section>

//       {/* Feature Grid */}
//       <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           {[
//             { icon: <Zap className="text-blue-500" />, title: "Instant AI Replies", desc: "No more missed WhatsApp or Web messages. AI replies in 2 seconds." },
//             { icon: <BarChart3 className="text-purple-500" />, title: "Lead CRM", desc: "Every visitor's name and contact is saved automatically to your dashboard." },
//             { icon: <Shield className="text-green-500" />, title: "Smart Booking", desc: "AI schedules gym tours and trial classes directly into your calendar." }
//           ].map((f, i) => (
//             <div key={i} className="glass-card p-8 hover:bg-white/5 transition-all group">
//               <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                 {f.icon}
//               </div>
//               <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
//               <p className="text-gray-400 leading-relaxed">{f.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }
"use client";
import { motion } from 'framer-motion';
import DemoForm from '@/components/DemoForm';
import { Bot, Zap, BarChart3, Clock } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] -z-10" />

      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-white leading-[0.9]">
            AI THAT SELLS <br /> <span className="text-blue-600">WHILE YOU SLEEP.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            The only AI system built specifically for Gym Owners. 24/7 WhatsApp replies, instant bookings, and total lead automation.
          </p>
          <div className="max-w-md mx-auto glass-card p-1.5 shadow-2xl">
            <DemoForm />
          </div>
        </motion.div>
      </section>

      {/* Feature Section */}
      <section className="py-24 px-6 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {[
          { icon: <Bot />, title: "AI Assistant", desc: "Instant WhatsApp & Web replies." },
          { icon: <Zap />, title: "48h Setup", desc: "Fastest deployment in the market." },
          { icon: <BarChart3 />, title: "Lead CRM", desc: "Never lose a member's contact again." },
          { icon: <Clock />, title: "24/7 Online", desc: "Your gym is always open for business." }
        ].map((f, i) => (
          <div key={i} className="p-8 glass-card hover:border-blue-500/30 transition-all group">
            <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform">{f.icon}</div>
            <h3 className="font-bold text-white mb-2">{f.title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}