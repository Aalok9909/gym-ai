// "use client";
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function DemoForm() {
//   const [gymName, setGymName] = useState('');
//   const router = useRouter();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     localStorage.setItem('gymName', gymName);
//     router.push('/demo');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
//       <input 
//         type="text" 
//         placeholder="Enter Gym Name..." 
//         className="p-4 rounded-lg bg-white/10 border border-white/20 text-white outline-none focus:border-blue-500"
//         onChange={(e) => setGymName(e.target.value)}
//         required 
//       />
//       <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all">
//         Get My AI Demo
//       </button>
//     </form>
//   );
// }

"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DemoForm() {
  const [name, setName] = useState('');
  const router = useRouter();

  const startDemo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    
    // Save to localStorage so demo page can read it
    localStorage.setItem('gymName', name);
    
    // REDIRECT LOGIC
    router.push('/demo');
  };

  return (
    <form onSubmit={startDemo} className="flex flex-col gap-4">
      <input 
        type="text"
        placeholder="Enter Your Shop/Gym Name"
        className="p-4 rounded-2xl bg-zinc-900 border border-white/10 text-white focus:border-blue-500 outline-none transition-all"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button className="bg-blue-600 hover:bg-blue-700 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-600/20 transition-all active:scale-95">
        Generate My AI System →
      </button>
    </form>
  );
}