"use client";
import { useEffect, useState } from 'react';
import { Users, Calendar, Activity } from 'lucide-react';

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    // API call placeholder
    const fetchLeads = async () => {
       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/leads/all`);
       const data = await res.json();
       setLeads(data);
    }
    fetchLeads();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Synexis Admin Dashboard</h1>
            <p className="text-gray-500">Managing all gym automation leads.</p>
          </div>
          <div className="flex gap-4">
             <div className="glass-card px-6 py-3 flex items-center gap-3">
                <Users className="text-blue-500" /> 
                <span>{leads.length} Total Leads</span>
             </div>
          </div>
        </header>

        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-white/5 text-gray-400 text-sm uppercase">
                <tr>
                  <th className="p-6">Gym Name</th>
                  <th className="p-6">Owner</th>
                  <th className="p-6">Contact Info</th>
                  <th className="p-6">Status</th>
                  <th className="p-6">Date Captured</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {leads.map((lead: any, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="p-6 font-bold">{lead.gymName}</td>
                    <td className="p-6 text-gray-300">{lead.ownerName}</td>
                    <td className="p-6">
                      <div className="text-sm">{lead.email}</div>
                      <div className="text-xs text-gray-500">{lead.phone}</div>
                    </td>
                    <td className="p-6">
                       <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-xs font-bold uppercase tracking-wider">Active Lead</span>
                    </td>
                    <td className="p-6 text-gray-500 text-sm">{new Date(lead.date).toDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}