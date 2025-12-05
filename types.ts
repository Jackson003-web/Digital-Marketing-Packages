export type View = 'summary' | 'financials' | 'roadmap' | 'content' | 'tech';

export interface BudgetScenario {
  name: string;
  totalAdSpend: number;
  weeklyAdSpend: number;
  googleAds: number;
  metaAds: number;
  linkedinAds: number;
  tiktokAds: number;
  twitterAds: number;
  projectedRevenue: number;
  leads: number;
  clients: number;
  roas: string;
}

export interface RoadmapPhase {
  phase: string;
  weeks: string;
  theme: string;
  tasks: string[];
  spend: string;
}

export interface Persona {
  name: string;
  title: string;
  painPoints: string[];
  channels: string[];
  hook: string;
}

export interface KpiData {
  label: string;
  value: string;
  target: string;
  trend: 'up' | 'down' | 'neutral';
}