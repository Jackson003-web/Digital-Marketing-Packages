import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ExecutiveSummary from './views/ExecutiveSummary';
import Financials from './views/Financials';
import Roadmap from './views/Roadmap';
import Content from './views/Content';
import TechStack from './views/TechStack';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('summary');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case 'summary': return <ExecutiveSummary />;
      case 'financials': return <Financials />;
      case 'roadmap': return <Roadmap />;
      case 'content': return <Content />;
      case 'tech': return <TechStack />;
      default: return <ExecutiveSummary />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans text-brand-gray">
      <Sidebar 
        currentView={currentView} 
        setCurrentView={setCurrentView}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      
      <main className="flex-1 p-4 md:p-8 lg:p-12 transition-all duration-300 w-full overflow-x-hidden">
        {/* Header specifically for mobile spacing */}
        <div className="h-12 md:h-0"></div> 
        
        <div className="max-w-7xl mx-auto">
          {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;