import React, { useRef, useEffect } from 'react';
import { DaySchedule } from '../types/travel';
import { Plus, CheckCircle2 } from 'lucide-react';

interface DaySelectorProps {
  days: DaySchedule[];
  activeDay: number;
  onSelectDay: (dayNumber: number) => void;
  onOpenAddModal: () => void;
}

export const DaySelector: React.FC<DaySelectorProps> = ({
  days,
  activeDay,
  onSelectDay,
  onOpenAddModal
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the active day button into view
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeBtn = scrollContainerRef.current.querySelector(
        `[data-day="${activeDay}"]`
      ) as HTMLElement | null;
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeDay]);

  return (
    <div className="sticky top-0 z-20 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/90 shadow-2xs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2.5">
        <div className="flex items-center justify-between gap-3">
          {/* Horizontal scrollable Day tabs */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth flex-1 py-0.5"
          >
            {days.map((day) => {
              const isActive = day.dayNumber === activeDay;
              const dayCheckedCount = day.items.filter((i) => i.checked).length;
              const dayTotalCount = day.items.length;
              const isAllCompleted = dayTotalCount > 0 && dayCheckedCount === dayTotalCount;

              return (
                <button
                  key={day.dayNumber}
                  data-day={day.dayNumber}
                  onClick={() => onSelectDay(day.dayNumber)}
                  className={`min-h-[46px] min-w-[76px] px-3 py-1.5 rounded-xl text-left transition-all shrink-0 cursor-pointer flex flex-col justify-between border ${
                    isActive
                      ? 'bg-[#CB6D43] text-white border-[#CB6D43] shadow-sm shadow-[#CB6D43]/20 ring-1 ring-[#CB6D43]'
                      : 'bg-white text-stone-700 border-stone-200/90 hover:bg-[#FAF4EF] hover:border-[#E4C8B8]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`text-[11px] font-semibold tracking-wider font-mono uppercase ${isActive ? 'text-[#FFE4D3]' : 'text-stone-500'}`}>
                      DAY {day.dayNumber}
                    </span>
                    {isAllCompleted && (
                      <CheckCircle2 className={`w-3 h-3 shrink-0 ${isActive ? 'text-white/90' : 'text-emerald-500'}`} />
                    )}
                  </div>
                  <div className="flex items-baseline justify-between gap-1.5 mt-0.5">
                    <span className={`text-xs font-semibold ${isActive ? 'text-white' : 'text-stone-800 font-medium'}`}>
                      {day.date}
                    </span>
                    <span className={`text-[10px] ${isActive ? 'text-[#FFD7BF]' : 'text-stone-400'}`}>
                      ({day.dayOfWeek})
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Add Spot Button */}
          <button
            onClick={onOpenAddModal}
            className="min-h-[42px] px-3 sm:px-3.5 py-1.5 rounded-xl bg-[#CB6D43] hover:bg-[#B95D34] text-white text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs shrink-0 active:scale-95"
            title="新增自訂私房景點或美食"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            <span className="hidden sm:inline">新增行程</span>
          </button>
        </div>
      </div>
    </div>
  );
};
