import React from 'react';
import { NAV_ITEMS } from '../constants';
import { View } from '../types';
import { Menu, X } from 'lucide-react';

interface SidebarProps {
  currentView: View;
  setCurrentView: (view: View) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView, isOpen, setIsOpen }) => {
  return (
    <>
      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-brand-dark text-white rounded-md shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Container */}
      <div className={`
        fixed md:static inset-y-0 left-0 z-40
        transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
        transition-transform duration-300 ease-in-out
        w-64 bg-brand-dark text-white min-h-screen flex flex-col shadow-2xl
      `}>
        <div className="p-6 border-b border-gray-700">
          <h1 className="font-heading font-bold text-2xl text-brand-cyan tracking-wider">LUCENTIQUE</h1>
          <p className="text-xs text-brand-gold tracking-widest mt-1">DIGITAL STRATEGY</p>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentView(item.id as View);
                setIsOpen(false);
              }}
              className={`
                w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200
                ${currentView === item.id 
                  ? 'bg-brand-cyan/20 text-brand-cyan border-r-4 border-brand-cyan' 
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'}
              `}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-gray-700 text-xs text-gray-500">
          <p>© 2025 Lucentique Digital</p>
          <p>Confidential Strategy Doc</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;