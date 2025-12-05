import React from 'react';
import { KPIS } from '../constants';
import { TrendingUp, Target, Users, BarChart3, ArrowRight } from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

const data = [
  { name: 'W1', revenue: 0, spend: 5000 },
  { name: 'W2', revenue: 0, spend: 5000 },
  { name: 'W3', revenue: 0, spend: 5000 },
  { name: 'W4', revenue: 5000, spend: 15000 },
  { name: 'W5', revenue: 12000, spend: 20000 },
  { name: 'W6', revenue: 18000, spend: 20000 },
  { name: 'W7', revenue: 25000, spend: 25000 },
  { name: 'W8', revenue: 40000, spend: 30000 },
  { name: 'W9', revenue: 65000, spend: 30000 },
  { name: 'W10', revenue: 90000, spend: 35000 },
  { name: 'W11', revenue: 110000, spend: 40000 },
  { name: 'W12', revenue: 131250, spend: 40000 },
];

const ExecutiveSummary: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-3xl font-heading font-bold text-gray-900">Executive Summary</h2>
          <p className="text-gray-500 mt-1">Q1 2025 Strategic Overview</p>
        </div>
        <div className="mt-4 md:mt-0 bg-brand-cyan/10 text-brand-teal px-4 py-2 rounded-full font-bold text-sm">
          Target: KSH 30,000/week by W12
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {KPIS.map((kpi, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <span className="text-gray-500 text-sm font-medium">{kpi.label}</span>
              {idx === 0 ? <TrendingUp size={20} className="text-brand-cyan" /> :
               idx === 1 ? <Users size={20} className="text-brand-gold" /> :
               idx === 2 ? <Target size={20} className="text-brand-teal" /> :
               <BarChart3 size={20} className="text-purple-500" />}
            </div>
            <div className="flex items-baseline space-x-2">
              <h3 className="text-2xl font-bold text-gray-900">{kpi.target}</h3>
              <span className="text-xs text-gray-400">target</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-heading font-bold text-lg mb-6">Projected Revenue vs Spend (Moderate Model)</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00D4E6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#00D4E6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FFB800" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#FFB800" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6B7280'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#6B7280'}} />
                <Tooltip 
                  contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}
                />
                <Area type="monotone" dataKey="revenue" stroke="#00D4E6" fillOpacity={1} fill="url(#colorRevenue)" name="Revenue (KSH)" />
                <Area type="monotone" dataKey="spend" stroke="#FFB800" fillOpacity={1} fill="url(#colorSpend)" name="Ad Spend (KSH)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Priority Channels */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-heading font-bold text-lg mb-4">Core Channels Priority</h3>
          <div className="space-y-4">
            {[
              { name: 'LinkedIn', role: 'B2B Lead Gen', color: 'bg-blue-600' },
              { name: 'Google Ads', role: 'High-intent Capture', color: 'bg-green-500' },
              { name: 'Meta (FB/IG)', role: 'Brand Building', color: 'bg-blue-400' },
              { name: 'Email', role: 'Nurture', color: 'bg-orange-400' },
              { name: 'TikTok', role: 'Emerging Market', color: 'bg-black' }
            ].map((channel, i) => (
              <div key={i} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className={`w-3 h-3 rounded-full ${channel.color} mr-3`}></div>
                <div>
                  <p className="font-bold text-sm text-gray-800">{channel.name}</p>
                  <p className="text-xs text-gray-500">{channel.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100">
             <h4 className="font-bold text-sm text-gray-900 mb-2">Primary Goal</h4>
             <p className="text-sm text-gray-600 leading-relaxed">
               Launch Lucentique Digital as Kenya's premier SME digital marketing partner, achieving KSH 30,000 weekly revenue by Week 12.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummary;