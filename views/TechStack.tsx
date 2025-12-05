import React from 'react';
import { TECH_STACK } from '../constants';
import { CheckSquare, AlertCircle, Laptop, Settings } from 'lucide-react';

const TechStack: React.FC = () => {
  const totalCost = TECH_STACK.reduce((acc, item) => acc + item.cost, 0);

  return (
    <div className="space-y-6 animate-fade-in">
       <div>
        <h2 className="text-3xl font-heading font-bold text-gray-900">Tech Stack & Operations</h2>
        <p className="text-gray-500">Tools, Setup & Checklist</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Budget Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
             <h3 className="font-bold text-gray-900 flex items-center"><Settings className="mr-2 w-5 h-5"/> Monthly Tool Budget</h3>
             <span className="text-brand-teal font-bold text-xl">KSH {totalCost.toLocaleString()}</span>
          </div>
          <div className="p-0">
             <table className="w-full text-sm">
               <thead className="bg-white text-gray-500 border-b border-gray-100">
                 <tr>
                   <th className="px-6 py-3 text-left font-medium">Tool</th>
                   <th className="px-6 py-3 text-left font-medium">Category</th>
                   <th className="px-6 py-3 text-right font-medium">Cost (KSH)</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-50">
                 {TECH_STACK.map((tool, i) => (
                   <tr key={i} className="hover:bg-gray-50">
                     <td className="px-6 py-4 font-medium text-gray-900">{tool.name}</td>
                     <td className="px-6 py-4 text-gray-500"><span className="px-2 py-1 bg-gray-100 rounded text-xs">{tool.category}</span></td>
                     <td className="px-6 py-4 text-right text-gray-700">{tool.cost.toLocaleString()}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
          </div>
        </div>

        {/* Priority Checklist */}
        <div className="bg-brand-dark text-white rounded-xl shadow-lg p-6">
          <h3 className="font-heading font-bold text-xl text-brand-cyan mb-6 flex items-center">
            <Laptop className="mr-2"/> Setup Priorities
          </h3>

          <div className="space-y-6">
            <div className="relative pl-8 border-l border-gray-700">
               <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-brand-gold"></div>
               <h4 className="font-bold text-lg mb-1">Priority 1: First 7 Days</h4>
               <ul className="space-y-2 text-sm text-gray-300">
                 <li className="flex items-center"><CheckSquare size={14} className="mr-2 text-brand-cyan"/> Domain (Lucentique.co.ke)</li>
                 <li className="flex items-center"><CheckSquare size={14} className="mr-2 text-brand-cyan"/> Google Workspace Setup</li>
                 <li className="flex items-center"><CheckSquare size={14} className="mr-2 text-brand-cyan"/> Website Launch (WP + Elementor)</li>
               </ul>
            </div>

            <div className="relative pl-8 border-l border-gray-700">
               <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-brand-teal"></div>
               <h4 className="font-bold text-lg mb-1">Priority 2: Days 8-14</h4>
               <ul className="space-y-2 text-sm text-gray-300">
                 <li className="flex items-center"><CheckSquare size={14} className="mr-2 text-brand-cyan"/> HubSpot CRM Config</li>
                 <li className="flex items-center"><CheckSquare size={14} className="mr-2 text-brand-cyan"/> Google Analytics 4 & GTM</li>
                 <li className="flex items-center"><CheckSquare size={14} className="mr-2 text-brand-cyan"/> Facebook Pixel Installation</li>
               </ul>
            </div>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg flex items-start">
              <AlertCircle className="text-brand-gold w-5 h-5 mr-3 shrink-0 mt-0.5" />
              <p className="text-xs text-gray-400">
                <strong className="text-white block mb-1">Risk Mitigation</strong>
                Keep a 60-day cash reserve. Invoice 50% upfront. Ensure all tools are integrated before paid traffic starts in Week 4.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;