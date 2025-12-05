import React from 'react';
import { ROADMAP_DATA } from '../constants';
import { CheckCircle2, Clock, Calendar } from 'lucide-react';

const Roadmap: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in pb-10">
      <div className="mb-6">
        <h2 className="text-3xl font-heading font-bold text-gray-900">12-Week Implementation</h2>
        <p className="text-gray-500">From foundation setup to revenue acceleration</p>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
        {ROADMAP_DATA.map((phase, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-brand-cyan text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <Clock size={20} />
            </div>
            
            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-brand-gold text-sm uppercase tracking-wider">{phase.weeks}</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 font-mono">{phase.spend}</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">{phase.phase}</h3>
              <p className="text-brand-teal font-medium text-sm mb-4">{phase.theme}</p>
              
              <ul className="space-y-2">
                {phase.tasks.map((task, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-600">
                    <CheckCircle2 size={16} className="text-brand-cyan mr-2 mt-0.5 shrink-0" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Summary at bottom */}
      <div className="bg-brand-dark text-white rounded-xl p-8 mt-12 flex flex-col md:flex-row items-center justify-between">
         <div className="mb-6 md:mb-0">
            <h4 className="text-xl font-bold font-heading text-brand-gold mb-2">Quarterly Goal</h4>
            <p className="text-gray-400 max-w-md">By Week 12, the moderate model achieves KSH 30,000+ weekly revenue with a 6.5:1 ROAS.</p>
         </div>
         <button className="bg-brand-cyan text-brand-dark px-6 py-3 rounded-lg font-bold hover:bg-white transition-colors">
            View Full Calendar
         </button>
      </div>
    </div>
  );
};

export default Roadmap;