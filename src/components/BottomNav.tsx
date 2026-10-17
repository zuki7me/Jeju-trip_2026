import React from 'react';
import { Calendar, Wallet, LifeBuoy } from 'lucide-react';

export type MainTabType = 'itinerary' | 'expense' | 'assistant';

interface BottomNavProps {
  currentTab: MainTabType;
  onSelectTab: (tab: MainTabType) => void;
  checkedCount: number;
  totalSpotsCount: number;
  totalExpensesCount: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentTab,
  onSelectTab,
  checkedCount,
  totalSpotsCount,
  totalExpensesCount
}) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200/90 shadow-lg">
      <div className="max-w-md mx-auto grid grid-cols-3 items-center h-16 px-4">
        {/* Itinerary Tab */}
        <button
          onClick={() => onSelectTab('itinerary')}
          className={`min-h-[44px] flex flex-col items-center justify-center transition-colors cursor-pointer relative ${
            currentTab === 'itinerary'
              ? 'text-stone-900 font-bold'
              : 'text-stone-400 hover:text-stone-600'
          }`}
          aria-label="行程檢視"
        >
          <div className="relative">
            <Calendar className={`w-5 h-5 ${currentTab === 'itinerary' ? 'stroke-[2.5]' : ''}`} />
            {totalSpotsCount > 0 && (
              <span className="absolute -top-1 -right-3 text-[9px] font-mono px-1 py-0.2 rounded-full bg-stone-100 border border-stone-300 text-stone-700">
                {checkedCount}/{totalSpotsCount}
              </span>
            )}
          </div>
          <span className="text-[11px] mt-1 tracking-tight">行程手冊</span>
          {currentTab === 'itinerary' && (
            <span className="w-1 h-1 bg-stone-900 rounded-full mt-0.5" />
          )}
        </button>

        {/* Expense Tab */}
        <button
          onClick={() => onSelectTab('expense')}
          className={`min-h-[44px] flex flex-col items-center justify-center transition-colors cursor-pointer relative ${
            currentTab === 'expense'
              ? 'text-stone-900 font-bold'
              : 'text-stone-400 hover:text-stone-600'
          }`}
          aria-label="旅費記帳"
        >
          <div className="relative">
            <Wallet className={`w-5 h-5 ${currentTab === 'expense' ? 'stroke-[2.5]' : ''}`} />
            {totalExpensesCount > 0 && (
              <span className="absolute -top-1 -right-2 text-[9px] font-mono px-1 py-0.2 rounded-full bg-amber-100 border border-amber-300 text-amber-900">
                {totalExpensesCount}
              </span>
            )}
          </div>
          <span className="text-[11px] mt-1 tracking-tight">旅費記帳</span>
          {currentTab === 'expense' && (
            <span className="w-1 h-1 bg-stone-900 rounded-full mt-0.5" />
          )}
        </button>

        {/* Assistant Tab */}
        <button
          onClick={() => onSelectTab('assistant')}
          className={`min-h-[44px] flex flex-col items-center justify-center transition-colors cursor-pointer relative ${
            currentTab === 'assistant'
              ? 'text-stone-900 font-bold'
              : 'text-stone-400 hover:text-stone-600'
          }`}
          aria-label="旅遊小幫手"
        >
          <div className="relative">
            <LifeBuoy className={`w-5 h-5 ${currentTab === 'assistant' ? 'stroke-[2.5]' : ''}`} />
          </div>
          <span className="text-[11px] mt-1 tracking-tight">小幫手</span>
          {currentTab === 'assistant' && (
            <span className="w-1 h-1 bg-stone-900 rounded-full mt-0.5" />
          )}
        </button>
      </div>
    </nav>
  );
};
