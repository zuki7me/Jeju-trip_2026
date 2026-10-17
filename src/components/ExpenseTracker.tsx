import React, { useState } from 'react';
import { ExpenseItem } from '../types/travel';
import {
  Wallet,
  Plus,
  Trash2,
  TrendingUp,
  Utensils,
  Car,
  Ticket,
  ShoppingBag,
  Hotel,
  HelpCircle,
  ArrowRightLeft,
  Calendar,
  User,
  Users
} from 'lucide-react';

interface ExpenseTrackerProps {
  expenses: ExpenseItem[];
  onAddExpense: (expense: ExpenseItem) => void;
  onDeleteExpense: (id: string) => void;
  activeDay: number;
}

export const ExpenseTracker: React.FC<ExpenseTrackerProps> = ({
  expenses,
  onAddExpense,
  onDeleteExpense,
  activeDay
}) => {
  // Exchange rate: 1 KRW ≈ 0.024 TWD (or 1 TWD ≈ 41.6 KRW)
  const [exchangeRate, setExchangeRate] = useState<number>(0.024);
  const [showRateModal, setShowRateModal] = useState(false);

  // Form states
  const [title, setTitle] = useState('');
  const [amountStr, setAmountStr] = useState('');
  const [category, setCategory] = useState<ExpenseItem['category']>('food');
  const [dayNumber, setDayNumber] = useState<number>(activeDay);
  const [paidBy, setPaidBy] = useState<string>('公費');
  const [note, setNote] = useState('');

  // Filter state
  const [selectedPayerFilter, setSelectedPayerFilter] = useState<string>('all');

  // Currency quick converter input
  const [calcKrw, setCalcKrw] = useState<string>('50000');

  const totalKrw = expenses.reduce((sum, item) => sum + item.amountKrw, 0);
  const totalTwd = Math.round(totalKrw * exchangeRate);

  // Collect distinct payers from existing expenses for suggestions & summary
  const existingPayers = Array.from(
    new Set(expenses.map((e) => e.paidBy?.trim()).filter(Boolean) as string[])
  );
  const payerSuggestions = Array.from(
    new Set(['公費', '蔡小豬', '兔子凌', ...existingPayers])
  );

  // Breakdown by payer
  const payerBreakdown = expenses.reduce<Record<string, number>>((acc, item) => {
    const p = item.paidBy?.trim() || '未註明';
    acc[p] = (acc[p] || 0) + item.amountKrw;
    return acc;
  }, {});

  const filteredExpenses = selectedPayerFilter === 'all'
    ? expenses
    : expenses.filter((e) => (e.paidBy?.trim() || '未註明') === selectedPayerFilter);

  const getCategoryMeta = (cat: ExpenseItem['category']) => {
    switch (cat) {
      case 'food':
        return { label: '餐飲美食', icon: <Utensils className="w-3.5 h-3.5 text-orange-600" />, color: 'bg-orange-50 border-orange-200 text-orange-800' };
      case 'transport':
        return { label: '交通加油', icon: <Car className="w-3.5 h-3.5 text-emerald-600" />, color: 'bg-emerald-50 border-emerald-200 text-emerald-800' };
      case 'tickets':
        return { label: '門票體驗', icon: <Ticket className="w-3.5 h-3.5 text-blue-600" />, color: 'bg-blue-50 border-blue-200 text-blue-800' };
      case 'shopping':
        return { label: '伴手購物', icon: <ShoppingBag className="w-3.5 h-3.5 text-rose-600" />, color: 'bg-rose-50 border-rose-200 text-rose-800' };
      case 'stay':
        return { label: '住宿費用', icon: <Hotel className="w-3.5 h-3.5 text-indigo-600" />, color: 'bg-indigo-50 border-indigo-200 text-indigo-800' };
      default:
        return { label: '其他雜支', icon: <HelpCircle className="w-3.5 h-3.5 text-stone-600" />, color: 'bg-stone-50 border-stone-200 text-stone-800' };
    }
  };

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseInt(amountStr.replace(/,/g, ''), 10);
    if (!title.trim() || isNaN(amount) || amount <= 0) return;

    const newExpense: ExpenseItem = {
      id: `exp-${Date.now()}`,
      title: title.trim(),
      amountKrw: amount,
      category,
      paidBy: paidBy.trim() || undefined,
      dayNumber,
      createdAt: new Date().toLocaleString('zh-TW', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }),
      note: note.trim() || undefined
    };

    onAddExpense(newExpense);
    setTitle('');
    setAmountStr('');
    setNote('');
    // Keep current paidBy as user is likely recording successive items for the same payer
  };

  const addQuickAmount = (val: number) => {
    const current = parseInt(amountStr.replace(/,/g, ''), 10) || 0;
    setAmountStr(String(current + val));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 pb-28">
      {/* Title & Exchange Rate Card */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {/* Total Summary */}
        <div className="sm:col-span-2 bg-[#F4F0E8] border border-stone-200/90 rounded-2xl p-5 shadow-2xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-stone-600 text-xs font-semibold">
              <Wallet className="w-4 h-4 text-stone-700" />
              <span>旅費累計總支出</span>
            </div>
            <button
              onClick={() => setShowRateModal(!showRateModal)}
              className="text-[11px] text-stone-600 hover:text-stone-900 bg-white/80 border border-stone-300 px-2 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1"
            >
              <ArrowRightLeft className="w-3 h-3 text-stone-500" />
              <span>匯率：1 韓元 ≈ {exchangeRate} 台幣</span>
            </button>
          </div>

          <div className="mt-3 flex flex-wrap items-baseline gap-3">
            <span className="text-3xl sm:text-4xl font-extrabold text-stone-950 font-mono tabular-nums tracking-tight">
              ₩{totalKrw.toLocaleString()}
            </span>
            <span className="text-base sm:text-lg font-medium text-stone-600 font-mono">
              ≈ NT${totalTwd.toLocaleString()}
            </span>
          </div>

          {/* Payer Breakdown in Summary */}
          {expenses.length > 0 && Object.keys(payerBreakdown).length > 0 && (
            <div className="mt-3.5 pt-3 border-t border-stone-200/80">
              <div className="text-[11px] font-semibold text-stone-600 mb-1.5 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-stone-600" />
                <span>付款人支出小計：</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {Object.entries(payerBreakdown).map(([name, sum]) => (
                  <div
                    key={name}
                    className="inline-flex items-center gap-1.5 text-xs bg-white/95 border border-stone-200 px-2.5 py-1 rounded-lg text-stone-800 font-mono shadow-2xs"
                  >
                    <span className="font-semibold text-stone-900 flex items-center gap-1">
                      <User className="w-3 h-3 text-amber-700" />
                      {name}
                    </span>
                    <span className="text-amber-800 font-bold">₩{sum.toLocaleString()}</span>
                    <span className="text-[10px] text-stone-400 font-normal">
                      (NT${Math.round(sum * exchangeRate).toLocaleString()})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {showRateModal && (
            <div className="mt-4 pt-3 border-t border-stone-200/80 flex items-center gap-3">
              <span className="text-xs text-stone-600">自訂匯率：</span>
              <input
                type="number"
                step="0.001"
                min="0.01"
                max="0.05"
                value={exchangeRate}
                onChange={(e) => setExchangeRate(parseFloat(e.target.value) || 0.024)}
                className="w-24 text-xs px-2 py-1 rounded border border-stone-300 bg-white text-stone-800"
              />
              <span className="text-[11px] text-stone-500">(預設值 0.024，約 1 TWD = 41.6 KRW)</span>
            </div>
          )}
        </div>

        {/* Currency Quick Calculator */}
        <div className="bg-white border border-stone-200/90 rounded-2xl p-4 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-semibold text-stone-700 mb-2">
              <span className="flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-amber-600" />
                即時貨幣快速換算
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-1">
                <span className="text-xs font-mono text-stone-500 w-10">KRW:</span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={calcKrw}
                  onChange={(e) => setCalcKrw(e.target.value.replace(/[^0-9]/g, ''))}
                  className="flex-1 text-xs px-2 py-1 border border-stone-300 rounded-md font-mono"
                  placeholder="輸入韓幣金額"
                />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs font-mono text-stone-500 w-10">TWD:</span>
                <div className="flex-1 text-xs px-2 py-1 bg-stone-50 border border-stone-200 rounded-md font-mono font-bold text-stone-900">
                  NT$ {Math.round((parseInt(calcKrw, 10) || 0) * exchangeRate).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-stone-400 mt-2">
            韓國購物免稅門檻為單筆 ₩15,000 以上。
          </p>
        </div>
      </div>

      {/* Add Expense Form */}
      <div className="bg-white border border-stone-200 rounded-2xl p-5 mb-6 shadow-xs">
        <h3 className="text-sm font-bold text-stone-900 flex items-center gap-1.5 mb-3">
          <Plus className="w-4 h-4 text-stone-700" />
          <span>快速記上一筆</span>
        </h3>

        <form onSubmit={handleAddExpense} className="space-y-3.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                項目名稱 <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="例如：黑豬肉晚餐、伴手禮"
                className="w-full text-xs px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-400"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-stone-600 mb-1 flex items-center justify-between">
                <span>
                  金額 (韓元 KRW) <span className="text-rose-500">*</span>
                </span>
                {parseInt(amountStr.replace(/,/g, ''), 10) > 0 && (
                  <span className="text-[10px] text-stone-500 font-mono">
                    ≈ NT${Math.round(parseInt(amountStr.replace(/,/g, ''), 10) * exchangeRate).toLocaleString()}
                  </span>
                )}
              </label>
              <input
                type="text"
                inputMode="numeric"
                required
                value={amountStr}
                onChange={(e) => {
                  const val = e.target.value.replace(/[^0-9,]/g, '');
                  setAmountStr(val);
                }}
                placeholder="例如：45000 或 45,000"
                className="w-full text-xs px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-400 font-mono"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                分類
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as ExpenseItem['category'])}
                className="w-full text-xs px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-400 bg-white"
              >
                <option value="food">餐飲美食</option>
                <option value="transport">交通加油</option>
                <option value="tickets">門票體驗</option>
                <option value="shopping">伴手購物</option>
                <option value="stay">住宿飯店</option>
                <option value="other">其他雜支</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-stone-600 mb-1 flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <User className="w-3 h-3 text-stone-500" />
                  誰支付的 / 付款人
                </span>
                <span className="text-[10px] text-stone-400 font-normal">可輸入或點選</span>
              </label>
              <input
                type="text"
                value={paidBy}
                onChange={(e) => setPaidBy(e.target.value)}
                placeholder="例如：公費、蔡小豬、兔子凌"
                className="w-full text-xs px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-400 bg-white"
              />
              <div className="flex items-center gap-1 mt-1.5 flex-wrap">
                {payerSuggestions.slice(0, 5).map((p) => (
                  <button
                    type="button"
                    key={p}
                    onClick={() => setPaidBy(p)}
                    className={`text-[10px] px-2 py-0.5 rounded-md border transition-colors cursor-pointer ${
                      paidBy === p
                        ? 'bg-amber-100 text-amber-900 border-amber-300 font-semibold'
                        : 'bg-stone-50 hover:bg-stone-100 text-stone-600 border-stone-200'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick amount increment pills */}
          <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
            <span className="text-[11px] text-stone-500 mr-1">快捷加額：</span>
            {[5000, 10000, 30000, 50000, 100000].map((val) => (
              <button
                type="button"
                key={val}
                onClick={() => addQuickAmount(val)}
                className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
              >
                +₩{val.toLocaleString()}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div className="sm:col-span-2">
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="備註說明（例如：刷信用卡/付現金/已含退稅）"
                className="w-full text-xs px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-400"
              />
            </div>

            <div className="flex items-center gap-2">
              <select
                value={dayNumber}
                onChange={(e) => setDayNumber(parseInt(e.target.value, 10))}
                className="flex-1 text-xs px-2.5 py-2 rounded-xl border border-stone-300 bg-white font-mono"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((d) => (
                  <option key={d} value={d}>
                    DAY {d}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="min-h-[38px] px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-semibold hover:bg-stone-800 transition-colors cursor-pointer shrink-0"
              >
                儲存記帳
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Expense History List */}
      <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-stone-100 mb-3 gap-2">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-stone-900">
              消費明細記錄 ({filteredExpenses.length}{selectedPayerFilter !== 'all' ? ` / 共 ${expenses.length}` : ''} 筆)
            </h3>
            <span className="text-[11px] text-stone-400 font-mono hidden sm:inline">
              · 即時儲存於 LocalStorage
            </span>
          </div>

          {/* Filter by payer if there are distinct payers */}
          {existingPayers.length > 1 && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              <span className="text-[11px] text-stone-500 shrink-0">篩選付款人：</span>
              <button
                type="button"
                onClick={() => setSelectedPayerFilter('all')}
                className={`text-[10px] px-2 py-0.5 rounded-md border transition-colors cursor-pointer shrink-0 ${
                  selectedPayerFilter === 'all'
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                }`}
              >
                全部
              </button>
              {existingPayers.map((p) => (
                <button
                  type="button"
                  key={p}
                  onClick={() => setSelectedPayerFilter(p)}
                  className={`text-[10px] px-2 py-0.5 rounded-md border transition-colors cursor-pointer shrink-0 ${
                    selectedPayerFilter === p
                      ? 'bg-amber-700 text-white border-amber-700'
                      : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          )}
        </div>

        {filteredExpenses.length === 0 ? (
          <div className="py-12 text-center text-stone-400 text-xs">
            {expenses.length === 0
              ? '目前尚無記帳資料，在上方表單新增一筆吧！'
              : `目前沒有「${selectedPayerFilter}」的記帳明細。`}
          </div>
        ) : (
          <div className="divide-y divide-stone-100">
            {filteredExpenses.map((item) => {
              const meta = getCategoryMeta(item.category);
              const approxTwd = Math.round(item.amountKrw * exchangeRate);

              return (
                <div
                  key={item.id}
                  className="py-3 flex items-center justify-between gap-3 hover:bg-stone-50/70 px-2 rounded-xl transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center shrink-0">
                      {meta.icon}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                        <span className="text-xs sm:text-sm font-semibold text-stone-900 truncate">
                          {item.title}
                        </span>
                        {item.dayNumber && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-stone-200/70 text-stone-700 shrink-0">
                            DAY {item.dayNumber}
                          </span>
                        )}
                        <span className={`text-[10px] px-1.5 py-0.5 rounded border shrink-0 ${meta.color}`}>
                          {meta.label}
                        </span>
                        {item.paidBy && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-50 border border-amber-200/80 text-amber-800 font-medium inline-flex items-center gap-0.5 shrink-0">
                            <User className="w-2.5 h-2.5 text-amber-700" />
                            {item.paidBy} 支付
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-stone-400 mt-0.5 font-mono flex-wrap">
                        <span>{item.createdAt}</span>
                        {item.note && (
                          <>
                            <span>·</span>
                            <span className="text-stone-500 truncate max-w-xs">{item.note}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="text-right">
                      <div className="text-xs sm:text-sm font-bold text-stone-900 font-mono">
                        ₩{item.amountKrw.toLocaleString()}
                      </div>
                      <div className="text-[10px] text-stone-500 font-mono">
                        ≈ NT${approxTwd.toLocaleString()}
                      </div>
                    </div>

                    <button
                      onClick={() => onDeleteExpense(item.id)}
                      className="p-1 text-stone-300 hover:text-rose-600 rounded-md transition-colors cursor-pointer"
                      title="刪除記帳"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

