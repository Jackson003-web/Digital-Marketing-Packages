import React from 'react';
import { PERSONAS } from '../constants';
import { User, MessageSquare, Target, Instagram, Linkedin, Facebook } from 'lucide-react';

const Content: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
       <div>
        <h2 className="text-3xl font-heading font-bold text-gray-900">Content Strategy</h2>
        <p className="text-gray-500">Buyer Personas & Posting Schedule</p>
      </div>

      {/* Personas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {PERSONAS.map((persona, idx) => (
          <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full">
            <div className={`h-2 w-full ${idx === 0 ? 'bg-brand-cyan' : idx === 1 ? 'bg-brand-gold' : 'bg-brand-teal'}`}></div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gray-100 rounded-full">
                   <User size={24} className="text-gray-700" />
                </div>
                <div>
                   <h3 className="font-bold text-lg text-gray-900">{persona.name}</h3>
                   <p className="text-xs text-gray-500 uppercase">{persona.title}</p>
                </div>
              </div>
              
              <div className="space-y-4 flex-1">
                <div>
                   <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">Pain Points</h4>
                   <ul className="space-y-1">
                     {persona.painPoints.map((pt, i) => (
                       <li key={i} className="text-sm text-gray-600 flex items-start">
                         <span className="mr-2 text-red-400">•</span> {pt}
                       </li>
                     ))}
                   </ul>
                </div>

                <div>
                   <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">Message Hook</h4>
                   <p className="text-sm italic text-gray-800 bg-gray-50 p-3 rounded-lg border-l-2 border-brand-gold">
                     "{persona.hook}"
                   </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {persona.channels.map((ch, i) => (
                    <span key={i} className="text-xs font-bold px-2 py-1 bg-gray-100 text-gray-600 rounded">
                      {ch}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Posting Schedule */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-heading font-bold text-xl mb-6 flex items-center">
          <CalendarIcon className="mr-2 text-brand-teal" /> Weekly Posting Mix
        </h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-700 uppercase font-bold text-xs">
              <tr>
                <th className="px-4 py-3 rounded-tl-lg">Platform</th>
                <th className="px-4 py-3">Posts/Week</th>
                <th className="px-4 py-3">Best Times (EAT)</th>
                <th className="px-4 py-3 rounded-tr-lg">Content Focus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-4 font-bold flex items-center"><Linkedin size={16} className="mr-2 text-blue-700"/> LinkedIn</td>
                <td className="px-4 py-4">10-15</td>
                <td className="px-4 py-4">Mon-Fri: 7AM, 12PM, 5PM</td>
                <td className="px-4 py-4 text-gray-600">Educational (40%), Case Studies (30%)</td>
              </tr>
              <tr>
                <td className="px-4 py-4 font-bold flex items-center"><Facebook size={16} className="mr-2 text-blue-600"/> Facebook</td>
                <td className="px-4 py-4">7-14</td>
                <td className="px-4 py-4">Daily: 8AM, 1PM, 7PM</td>
                <td className="px-4 py-4 text-gray-600">Video (30%), Carousel (30%)</td>
              </tr>
              <tr>
                 <td className="px-4 py-4 font-bold flex items-center"><Instagram size={16} className="mr-2 text-pink-600"/> Instagram</td>
                <td className="px-4 py-4">14-21</td>
                <td className="px-4 py-4">Daily: 6AM, 12PM, 6PM</td>
                <td className="px-4 py-4 text-gray-600">Reels (40%), Stories (30%)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Helper for icon
const CalendarIcon = ({className}:{className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
)

export default Content;