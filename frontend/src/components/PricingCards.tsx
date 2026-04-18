// "use client";
// import { motion } from 'framer-motion';

// const plans = [
//   { name: 'Starter', price: '$49', features: ['AI Chatbot', 'Lead Capture', 'Email Support'] },
//   { name: 'Pro', price: '$99', features: ['Full Automation', 'WhatsApp Alerts', 'Priority Support'], popular: true },
//   { name: 'Elite', price: '$499', features: ['Custom AI Training', 'White-labeling', '24/7 Support'], yearly: true },
// ];

// export default function PricingCards() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
//       {plans.map((plan, i) => (
//         <motion.div 
//           whileHover={{ y: -10 }}
//           key={i} 
//           className={`p-8 rounded-3xl border ${plan.popular ? 'border-blue-500 bg-blue-500/5' : 'border-white/10 bg-zinc-900/50'} backdrop-blur-md relative overflow-hidden`}
//         >
//           {plan.popular && <span className="absolute top-4 right-4 bg-blue-500 text-[10px] px-3 py-1 rounded-full uppercase font-bold">Most Popular</span>}
//           <h3 className="text-xl font-bold">{plan.name}</h3>
//           <div className="text-4xl font-extrabold my-4">{plan.price}<span className="text-sm text-gray-500 font-normal">/mo</span></div>
//           <ul className="space-y-3 mb-8 text-gray-400">
//             {plan.features.map(f => <li key={f}>✓ {f}</li>)}
//           </ul>
//           <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-blue-600' : 'bg-white text-black'}`}>
//             Get Started
//           </button>
//         </motion.div>
//       ))}
//     </div>
//   );
// }


// "use client";
// import { motion } from 'framer-motion';

// const plans = [
//   { name: 'Growth', price: '$99', features: ['AI Chatbot', 'WhatsApp Sync', '1,000 Leads/mo'] },
//   { name: 'Scale', price: '$199', features: ['Full Automation', 'Custom Training', 'Unlimited Leads'], popular: true },
//   { name: 'Enterprise', price: '$499', features: ['White-label App', 'API Access', '24/7 Priority'], yearly: true },
// ];

// const handlePlanSelection = (planName: string) => {
//   const gym = localStorage.getItem('gymName') || 'My Gym';
//   const message = `Hi, I want to activate the ${planName} plan for my gym: ${gym}. Please guide me with the next steps.`;
//   const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`; // Apna number daal yahan
//   window.open(whatsappUrl, '_blank');
// };

// export default function PricingCards() {
//   return (
//     <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//       {plans.map((p, i) => (
//         <div key={i} className={`p-10 glass-card flex flex-col ${p.popular ? 'border-blue-500/50 bg-blue-500/5' : ''}`}>
//           <h3 className="text-xl font-bold mb-2">{p.name}</h3>
//           <div className="text-5xl font-black mb-6">{p.price}<span className="text-sm font-normal text-gray-500">/mo</span></div>
//           <ul className="space-y-4 mb-10 flex-1">
//             {p.features.map(f => <li key={f} className="text-gray-400 flex items-center gap-2"><Check size={16} className="text-blue-500"/> {f}</li>)}
//           </ul>
//         <button onClick={() => handlePlanSelection(p.name)} className={`w-full py-4 rounded-2xl font-black transition-all active:scale-95 ${p.popular ? 'bg-blue-600 shadow-xl shadow-blue-600/30' : 'bg-white text-black'}`}>
//             ACTIVATE NOW
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// function Check({size, className}: {size:number, className:string}) {
//     return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12"></polyline></svg>
// }


"use client";
import { Check } from 'lucide-react';

const plans = [
  { name: 'Starter', price: '$49', features: ['AI Chatbot', 'Lead Capture', 'Email Support'] },
  { name: 'Scale', price: '$149', features: ['WhatsApp Sync', 'Auto-Bookings', 'Full Dashboard'], popular: true },
  { name: 'Elite', price: '$399', features: ['White-label App', 'Custom AI Training', '24/7 Support'] }
];

export default function PricingCards() {
  const handleOrder = (plan: string) => {
    const gym = localStorage.getItem('gymName') || 'My Gym';
    const text = encodeURIComponent(`Hi! I'm interested in the ${plan} plan for my business "${gym}". Can we talk?`);
    window.open(`https://wa.me/91XXXXXXXXXX?text=${text}`, '_blank'); // Apna No. dalo
  };

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((p, i) => (
        <div key={i} className={`p-10 glass-card flex flex-col ${p.popular ? 'border-blue-500 ring-1 ring-blue-500/50' : ''}`}>
          <h3 className="text-xl font-bold mb-1 text-white">{p.name}</h3>
          <div className="text-4xl font-black mb-6 text-white">{p.price}<span className="text-sm font-normal text-gray-500">/mo</span></div>
          <ul className="space-y-4 mb-10 flex-1">
            {p.features.map(f => (
              <li key={f} className="text-gray-400 text-sm flex items-center gap-2">
                <Check size={14} className="text-blue-500" /> {f}
              </li>
            ))}
          </ul>
          <button 
            onClick={() => handleOrder(p.name)}
            className={`w-full py-4 rounded-xl font-black tracking-widest text-xs transition-all ${p.popular ? 'bg-blue-600 text-white' : 'bg-white text-black'}`}
          >
            ORDER NOW
          </button>
        </div>
      ))}
    </div>
  );
}