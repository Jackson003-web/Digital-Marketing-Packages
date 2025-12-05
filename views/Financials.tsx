import React, { useState } from 'react';
import { BUDGET_SCENARIOS } from '../constants';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { TrendingUp, DollarSign, Users, MousePointer } from 'lucide-react';

const COLORS = ['#00D4E6', '#FFB800', '#004D5C', '#1A1A1A', '#6B7280'];

const Financials: React.FC = () => {
  const [scenario, setScenario] = useState<'conservative' | 'moderate' | 'aggressive'>('moderate');
  const data = BUDGET_SCENARIOS[scenario];

  const pieData = [
    { name: 'Google Ads', value: data.googleAds },
    { name: 'FB/Instagram', value: data.metaAds },
    { name: 'LinkedIn', value: data.linkedinAds },
    { name: 'TikTok', value: data.tiktokAds },
    { name: 'Twitter/X', value: data.twitterAds },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
           <h2 className="text-3xl font-heading font-bold text-gray-900">Budget & Projections</h2>
           <p className="text-gray-500">Weekly Ad Spend: <span className="font-bold text-brand-teal">KSH {data.weeklyAdSpend.toLocaleString()}</span></p>
        </div>
        
        <div className="flex bg-white p-1 rounded-lg border border-gray-200 mt-4 md:mt-0">
          {(['conservative', 'moderate', 'aggressive'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setScenario(s)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                scenario === s 
                  ? 'bg-brand-dark text-white shadow-md' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center space-x-2 text-gray-500 mb-2">
            <DollarSign size={16} />
            <span className="text-xs font-bold uppercase">Proj. Revenue</span>
          </div>
          <p className="text-2xl font-bold text-brand-teal">KSH {data.projectedRevenue.toLocaleString()}</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center space-x-2 text-gray-500 mb-2">
            <TrendingUp size={16} />
            <span className="text-xs font-bold uppercase">ROAS</span>
          </div>
          <p className="text-2xl font-bold text-brand-gold">{data.roas}</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
           <div className="flex items-center space-x-2 text-gray-500 mb-2">
            <MousePointer size={16} />
            <span className="text-xs font-bold uppercase">Leads</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{data.leads}</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
           <div className="flex items-center space-x-2 text-gray-500 mb-2">
            <Users size={16} />
            <span className="text-xs font-bold uppercase">Clients</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{data.clients}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Allocation Chart */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm min-h-[400px]">
          <h3 className="font-heading font-bold text-lg mb-6 text-center">Budget Allocation</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => `KSH ${value.toLocaleString()}`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Comparison Bar */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm min-h-[400px]">
           <h3 className="font-heading font-bold text-lg mb-6 text-center">Cost vs Return</h3>
           <div className="h-80">
             <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[
                  { name: 'Cost', value: data.totalAdSpend },
                  { name: 'Return', value: data.projectedRevenue }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value: number) => `KSH ${value.toLocaleString()}`} />
                  <Bar dataKey="value">
                    {
                      [{name: 'Cost', value: data.totalAdSpend}, {name: 'Return', value: data.projectedRevenue}].map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 0 ? '#1A1A1A' : '#00D4E6'} />
                      ))
                    }
                  </Bar>
                </BarChart>
             </ResponsiveContainer>
           </div>
           <p className="text-center text-sm text-gray-500 mt-4">
             {data.name} scenario projects a <span className="font-bold">{data.roas}</span> return on ad spend.
           </p>
        </div>
      </div>
    </div>
  );
};

export default Financials;