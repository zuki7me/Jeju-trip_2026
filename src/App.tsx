import React, { useState, useEffect } from 'react';
import { DaySchedule, ExpenseItem, ItineraryItem } from './types/travel';
import {
  INITIAL_ITINERARY,
  INITIAL_HOTELS,
  FLIGHT_INFOS,
  INITIAL_EXPENSES
} from './data/defaultItinerary';
import { Header } from './components/Header';
import { DaySelector } from './components/DaySelector';
import { ItineraryCard } from './components/ItineraryCard';
import { AddSpotModal } from './components/AddSpotModal';
import { ExpenseTracker } from './components/ExpenseTracker';
import { TravelAssistant } from './components/TravelAssistant';
import { BottomNav, MainTabType } from './components/BottomNav';
import {
  Compass,
  Plus,
  Sparkles,
  MapPin,
  Calendar,
  Layers,
  ChevronRight,
  Route,
  Hotel,
  Navigation
} from 'lucide-react';

const ITINERARY_STORAGE_KEY = 'jeju_itinerary_data_v13';
const EXPENSES_STORAGE_KEY = 'jeju_expenses_data_v2';
const ACTIVE_DAY_STORAGE_KEY = 'jeju_active_day_v2';

export default function App() {
  // Itinerary state with LocalStorage persistence
  const [itinerary, setItinerary] = useState<DaySchedule[]>(() => {
    try {
      const saved = localStorage.getItem(ITINERARY_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to load itinerary from localStorage', e);
    }
    return INITIAL_ITINERARY;
  });

  // Expense state with LocalStorage persistence
  const [expenses, setExpenses] = useState<ExpenseItem[]>(() => {
    try {
      const saved = localStorage.getItem(EXPENSES_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed.map((item: ExpenseItem) => {
            if (item.paidBy === '我') return { ...item, paidBy: '蔡小豬' };
            if (item.paidBy === '旅伴') return { ...item, paidBy: '兔子凌' };
            return item;
          });
        }
      }
    } catch (e) {
      console.error('Failed to load expenses from localStorage', e);
    }
    return INITIAL_EXPENSES;
  });

  // Active day (Day 1 - 8)
  const [activeDay, setActiveDay] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(ACTIVE_DAY_STORAGE_KEY);
      if (saved) {
        const num = parseInt(saved, 10);
        if (num >= 1 && num <= 8) return num;
      }
    } catch (e) {
      // ignore
    }
    return 1;
  });

  // Main active tab in bottom widget bar ('itinerary' | 'expense' | 'assistant')
  const [currentTab, setCurrentTab] = useState<MainTabType>('itinerary');

  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

  // Sync itinerary to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(ITINERARY_STORAGE_KEY, JSON.stringify(itinerary));
    } catch (e) {
      console.error('Failed to save itinerary to localStorage', e);
    }
  }, [itinerary]);

  // Sync expenses to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(EXPENSES_STORAGE_KEY, JSON.stringify(expenses));
    } catch (e) {
      console.error('Failed to save expenses to localStorage', e);
    }
  }, [expenses]);

  // Sync active day
  useEffect(() => {
    try {
      localStorage.setItem(ACTIVE_DAY_STORAGE_KEY, String(activeDay));
    } catch (e) {
      console.error('Failed to save activeDay to localStorage', e);
    }
  }, [activeDay]);

  // Handle toggling check on an item
  const handleToggleCheck = (itemId: string) => {
    setItinerary((prev) =>
      prev.map((day) => ({
        ...day,
        items: day.items.map((item) =>
          item.id === itemId ? { ...item, checked: !item.checked } : item
        )
      }))
    );
  };

  // Handle deleting an item
  const handleDeleteItem = (itemId: string) => {
    setItinerary((prev) =>
      prev.map((day) => ({
        ...day,
        items: day.items.filter((item) => item.id !== itemId)
      }))
    );
  };

  // Handle adding an item
  const handleAddSpot = (dayNumber: number, newSpot: ItineraryItem) => {
    setItinerary((prev) =>
      prev.map((day) => {
        if (day.dayNumber === dayNumber) {
          return {
            ...day,
            items: [...day.items, newSpot]
          };
        }
        return day;
      })
    );
  };

  // Handle resetting itinerary to initial data
  const handleResetItinerary = () => {
    setItinerary(INITIAL_ITINERARY);
    localStorage.removeItem(ITINERARY_STORAGE_KEY);
  };

  // Expense handlers
  const handleAddExpense = (newExpense: ExpenseItem) => {
    setExpenses((prev) => [newExpense, ...prev]);
  };

  const handleDeleteExpense = (id: string) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  // Current day data
  const currentDayData = itinerary.find((d) => d.dayNumber === activeDay) || itinerary[0];
  const dayTotalCount = currentDayData.items.length;
  const dayCheckedCount = currentDayData.items.filter((i) => i.checked).length;
  const dayProgressPercent = dayTotalCount > 0 ? Math.round((dayCheckedCount / dayTotalCount) * 100) : 0;

  // Calculate overall progress across entire trip
  const allTripItems = itinerary.flatMap((d) => d.items);
  const totalCheckedCount = allTripItems.filter((i) => i.checked).length;
  const totalItemsCount = allTripItems.length;

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-800 font-sans flex flex-col selection:bg-amber-100 selection:text-amber-900">
      {/* Top Header */}
      <Header
        onResetItinerary={handleResetItinerary}
      />

      {/* Main Tab 1: ITINERARY */}
      {currentTab === 'itinerary' && (
        <main className="flex-1 pb-28">
          {/* Day Navigation Tabs */}
          <DaySelector
            days={itinerary}
            activeDay={activeDay}
            onSelectDay={(dayNum) => {
              setActiveDay(dayNum);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenAddModal={() => setIsAddModalOpen(true)}
          />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-5">
            {/* Day Header Banner with summary & Tonight's Hotel */}
            <div className="bg-white border border-stone-200/90 rounded-2xl p-4 sm:p-5 mb-5 shadow-2xs">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-stone-500">
                    <Route className="w-3.5 h-3.5 text-stone-600" />
                    <span>{currentDayData.fullDateStr}</span>
                    <span>·</span>
                    <span className="text-[#CB6D43] font-bold">DAY {currentDayData.dayNumber}</span>
                  </div>

                  <span className="text-xs text-stone-600 bg-stone-100 px-2 py-0.5 rounded-md font-medium">
                    {currentDayData.area}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                    {currentDayData.title}
                  </h2>

                  {/* Daily Progress */}
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-24 sm:w-28 h-2 bg-stone-100 border border-stone-200/80 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-600 transition-all duration-300 ease-out rounded-full"
                        style={{ width: `${dayProgressPercent}%` }}
                      />
                    </div>
                    <span className="text-xs font-mono font-medium text-stone-600 tabular-nums">
                      {dayCheckedCount}/{dayTotalCount} ({dayProgressPercent}%)
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {currentDayData.summary}
                </p>
              </div>

              {/* Tonight Hotel Badge */}
              {currentDayData.hotelTonight && (
                <div className="mt-3.5 pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 bg-[#FAF7F2] -mx-4 -mb-4 sm:-mx-5 sm:-mb-5 px-4 py-3 rounded-b-2xl">
                  <div className="flex items-center gap-2.5 text-xs text-stone-700">
                    <div className="w-7 h-7 rounded-lg bg-white border border-stone-200/80 flex items-center justify-center shrink-0 shadow-2xs">
                      <Hotel className="w-4 h-4 text-[#CB6D43]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[10px] font-bold uppercase tracking-wider font-mono px-1.5 py-0.5 rounded bg-[#F2DFD5] text-[#8C3F1E]">
                          {currentDayData.dayNumber === 8 ? '返程狀態' : '今晚住宿'}
                        </span>
                        <span className="font-bold text-stone-900 text-xs sm:text-sm">
                          {currentDayData.hotelTonight.name}
                        </span>
                      </div>
                      <div className="text-[11px] text-stone-500 font-normal mt-0.5 flex flex-wrap items-center gap-x-1.5">
                        {currentDayData.hotelTonight.koreanName && (
                          <span>{currentDayData.hotelTonight.koreanName} · </span>
                        )}
                        <span>{currentDayData.hotelTonight.area}</span>
                        {currentDayData.hotelTonight.address && (
                          <>
                            <span className="text-stone-300">|</span>
                            <span className="font-mono text-stone-600 select-all">{currentDayData.hotelTonight.address}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {currentDayData.hotelTonight.naverMapUrl && (
                    <a
                      href={currentDayData.hotelTonight.naverMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="self-start sm:self-auto px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/90 rounded-lg transition-colors flex items-center gap-1.5 shrink-0 shadow-2xs cursor-pointer"
                      title="以 Naver Map 開啟飯店位置"
                    >
                      <Navigation className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600/20" />
                      <span>{currentDayData.dayNumber === 8 ? '機場導航' : '飯店導航'}</span>
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Itinerary List */}
            {currentDayData.items.length === 0 ? (
              <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center my-6">
                <Compass className="w-8 h-8 text-stone-300 mx-auto mb-2" />
                <h4 className="text-sm font-bold text-stone-700">本日尚無行程項目</h4>
                <p className="text-xs text-stone-400 mt-1">
                  點擊下方按鈕可新增自訂私房景點或美食。
                </p>
                <button
                  onClick={() => setIsAddModalOpen(true)}
                  className="mt-4 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#CB6D43] hover:bg-[#B95D34] transition-colors cursor-pointer"
                >
                  新增行程景點
                </button>
              </div>
            ) : (
              <div className="space-y-3.5">
                {currentDayData.items.map((item) => (
                  <ItineraryCard
                    key={item.id}
                    item={item}
                    onToggleCheck={handleToggleCheck}
                    onDeleteItem={handleDeleteItem}
                  />
                ))}
              </div>
            )}

            {/* Bottom Add Spot Button */}
            <div className="mt-8 text-center">
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="w-full sm:w-auto min-h-[46px] px-6 py-2.5 rounded-2xl border-2 border-dashed border-stone-300 hover:border-stone-400 text-stone-600 hover:text-stone-900 text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2 mx-auto cursor-pointer bg-white/50 hover:bg-white"
              >
                <Plus className="w-4 h-4" />
                <span>在 DAY {currentDayData.dayNumber} 加入自訂私房景點 / 美食</span>
              </button>
            </div>
          </div>
        </main>
      )}

      {/* Main Tab 2: EXPENSES */}
      {currentTab === 'expense' && (
        <main className="flex-1">
          <ExpenseTracker
            expenses={expenses}
            onAddExpense={handleAddExpense}
            onDeleteExpense={handleDeleteExpense}
            activeDay={activeDay}
          />
        </main>
      )}

      {/* Main Tab 3: ASSISTANT */}
      {currentTab === 'assistant' && (
        <main className="flex-1">
          <TravelAssistant
            hotels={INITIAL_HOTELS}
            flights={FLIGHT_INFOS}
          />
        </main>
      )}

      {/* Add Spot Modal */}
      <AddSpotModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        dayNumber={activeDay}
        onAddSpot={handleAddSpot}
      />

      {/* Fixed Bottom Navigation Dock */}
      <BottomNav
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        checkedCount={totalCheckedCount}
        totalSpotsCount={totalItemsCount}
        totalExpensesCount={expenses.length}
      />
    </div>
  );
}
