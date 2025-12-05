import { BudgetScenario, RoadmapPhase, Persona, KpiData } from './types';
import { LayoutDashboard, DollarSign, Map, Users, Wrench } from 'lucide-react';

export const NAV_ITEMS = [
  { id: 'summary', label: 'Executive Summary', icon: LayoutDashboard },
  { id: 'financials', label: 'Budget & Revenue', icon: DollarSign },
  { id: 'roadmap', label: '12-Week Roadmap', icon: Map },
  { id: 'content', label: 'Content & Personas', icon: Users },
  { id: 'tech', label: 'Tech Stack & Ops', icon: Wrench },
];

export const KPIS: KpiData[] = [
  { label: 'Weekly Revenue Target (W12)', value: 'KSH 0', target: 'KSH 30,000', trend: 'up' },
  { label: 'Client Acquisition', value: '0', target: '3 Enterprise', trend: 'up' },
  { label: 'ROAS Target', value: '0.0', target: '3.5:1', trend: 'up' },
  { label: 'Brand Reach (Monthly)', value: '0', target: '50,000', trend: 'up' },
];

export const BUDGET_SCENARIOS: Record<string, BudgetScenario> = {
  conservative: {
    name: 'Conservative',
    totalAdSpend: 120000,
    weeklyAdSpend: 10000,
    googleAds: 36000,
    metaAds: 30000,
    linkedinAds: 24000,
    tiktokAds: 18000,
    twitterAds: 12000,
    projectedRevenue: 20000,
    leads: 8,
    clients: 0.8,
    roas: '2.0:1',
  },
  moderate: {
    name: 'Moderate',
    totalAdSpend: 240000,
    weeklyAdSpend: 20000,
    googleAds: 96000,
    metaAds: 60000,
    linkedinAds: 48000,
    tiktokAds: 24000,
    twitterAds: 12000,
    projectedRevenue: 131250,
    leads: 25,
    clients: 3.75,
    roas: '6.5:1',
  },
  aggressive: {
    name: 'Aggressive',
    totalAdSpend: 480000,
    weeklyAdSpend: 40000,
    googleAds: 192000,
    metaAds: 120000,
    linkedinAds: 96000,
    tiktokAds: 48000,
    twitterAds: 24000,
    projectedRevenue: 720000,
    leads: 80,
    clients: 16,
    roas: '18:1',
  },
};

export const ROADMAP_DATA: RoadmapPhase[] = [
  {
    phase: 'Foundation Phase',
    weeks: 'Weeks 1-3',
    theme: 'Setup Sprint & Launch Prep',
    tasks: [
      'Email & Domain Setup',
      'Website Launch',
      'CRM Installation',
      'Pixel Installation',
      'Soft Launch Campaigns',
    ],
    spend: 'KSH 5,000',
  },
  {
    phase: 'Launch Phase',
    weeks: 'Weeks 4-6',
    theme: 'Market Entry & Optimization',
    tasks: [
      'Campaign Launch (All Channels)',
      'Cold Outreach Start',
      'Webinar Announcement',
      'Data Analysis & Adjustments',
    ],
    spend: 'KSH 55,000 Total',
  },
  {
    phase: 'Scale Phase',
    weeks: 'Weeks 7-9',
    theme: 'Authority & Conversion',
    tasks: [
      'Thought Leadership Content',
      'Retargeting Campaigns',
      'Sales Funnel Optimization',
      'Intensive Outreach',
    ],
    spend: 'KSH 85,000 Total',
  },
  {
    phase: 'Accelerate Phase',
    weeks: 'Weeks 10-12',
    theme: 'Maximum Impact & Revenue',
    tasks: [
      'Scale Winning Campaigns',
      'Flash Offers & Upsells',
      'Client Onboarding',
      'Q2 Planning',
    ],
    spend: 'KSH 115,000 Total',
  },
];

export const PERSONAS: Persona[] = [
  {
    name: 'Digital David',
    title: 'Tech-Savvy SME Owner',
    painPoints: ['Scaling organic reach', 'High CAC', 'Conversion optimization'],
    channels: ['LinkedIn', 'Twitter', 'Email'],
    hook: 'Scale your digital revenue 3X without increasing headcount',
  },
  {
    name: 'Retail Rose',
    title: 'Traditional Business Owner',
    painPoints: ['Lost customers to online', 'No online presence', 'Low foot traffic'],
    channels: ['Facebook', 'Instagram', 'WhatsApp'],
    hook: 'Turn your shop into a 24/7 selling machine',
  },
  {
    name: 'Corporate Catherine',
    title: 'Marketing Manager',
    painPoints: ['Pressure for ROI', 'Limited budget', 'Lack of specialized skills'],
    channels: ['LinkedIn', 'Email', 'Publications'],
    hook: 'Proven frameworks that make you look like a marketing genius',
  },
];

export const TECH_STACK = [
  { name: 'Hostinger Business', cost: 2500, category: 'Hosting' },
  { name: 'Brevo (Sendinblue)', cost: 3000, category: 'Email' },
  { name: 'HubSpot Starter', cost: 5400, category: 'CRM' },
  { name: 'Canva Pro', cost: 1500, category: 'Design' },
  { name: 'Google Analytics', cost: 0, category: 'Analytics' },
  { name: 'Ubersuggest', cost: 3500, category: 'SEO' },
];