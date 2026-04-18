"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ChatbotDemo({ gymName }: { gymName: string }) {
  const [messages, setMessages] = useState<string[]>([]);
  const botMsgs = [
    `Hi! Welcome to ${gymName}.`,
    "I can help you book a trial class or check our pricing.",
    "Would you like to book for tomorrow at 10 AM?"
  ];

  useEffect(() => {
    botMsgs.forEach((msg, i) => {
      setTimeout(() => {
        setMessages(prev => [...prev, msg]);
      }, (i + 1) * 2000);
    });
  }, []);

  return (
    <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl">
      <div className="space-y-4">
        {messages.map((m, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="bg-blue-600 text-white p-3 rounded-2xl rounded-tl-none max-w-[80%]"
          >
            {m}
          </motion.div>
        ))}
        <div className="text-gray-500 text-xs animate-pulse">AI is thinking...</div>
      </div>
    </div>
  );
}