import React, { useState } from 'react';
import { ItineraryItem } from '../types/travel';
import {
  Clock,
  Trash2,
  Navigation,
  Utensils,
  Coffee,
  ShoppingBag,
  Car,
  Hotel,
  Compass,
  TreePine,
  Plane,
  AlertCircle,
  Check
} from 'lucide-react';

interface ItineraryCardProps {
  item: ItineraryItem;
  onToggleCheck: (id: string) => void;
  onDeleteItem: (id: string) => void;
}

export const ItineraryCard: React.FC<ItineraryCardProps> = ({
  item,
  onToggleCheck,
  onDeleteItem
}) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Category Icon helper
  const getCategoryIcon = () => {
    switch (item.category) {
      case 'food':
        return <Utensils className="w-4 h-4 text-orange-600" />;
      case 'cafe':
        return <Coffee className="w-4 h-4 text-amber-600" />;
      case 'shopping':
        return <ShoppingBag className="w-4 h-4 text-rose-600" />;
      case 'hotel':
        return <Hotel className="w-4 h-4 text-indigo-600" />;
      case 'transport':
        return <Car className="w-4 h-4 text-emerald-600" />;
      case 'nature':
        return <TreePine className="w-4 h-4 text-emerald-700" />;
      case 'flight':
        return <Plane className="w-4 h-4 text-sky-600" />;
      case 'spot':
      default:
        return <Compass className="w-4 h-4 text-stone-600" />;
    }
  };

  const getCategoryLabel = () => {
    switch (item.category) {
      case 'food': return '美食料理';
      case 'cafe': return '海景咖啡';
      case 'shopping': return '文創購物';
      case 'hotel': return '住宿飯店';
      case 'transport': return '自駕交通';
      case 'nature': return '自然風光';
      case 'flight': return '航班航程';
      case 'spot': default: return '觀光景點';
    }
  };

  const handleDelete = () => {
    onDeleteItem(item.id);
    setShowDeleteConfirm(false);
  };

  return (
    <div
      className={`group relative rounded-2xl border transition-all duration-200 ${
        item.checked
          ? 'bg-stone-50/90 border-stone-200 shadow-2xs'
          : 'bg-white border-stone-200/90 hover:border-stone-300 hover:shadow-xs'
      }`}
    >
      <div className="p-4 sm:p-5">
        {/* Top bar: Time, Category, and Action Buttons */}
        <div className="flex items-center justify-between gap-3 mb-2.5">
          {/* Time & Category */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-stone-700 bg-stone-100 px-2 py-0.5 rounded-md">
              <Clock className="w-3.5 h-3.5 text-stone-500" />
              {item.time}
            </span>

            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-stone-500">
              {getCategoryIcon()}
              <span>{getCategoryLabel()}</span>
            </span>
          </div>

          {/* Delete & Check-in / Visited Button */}
          <div className="flex items-center gap-2">
            {/* Delete button */}
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="p-1.5 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
              title="刪除此筆行程"
              aria-label="刪除"
            >
              <Trash2 className="w-4 h-4" />
            </button>

            {/* Check-in / Visited Button */}
            <button
              onClick={() => onToggleCheck(item.id)}
              className={`min-h-[32px] px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all duration-150 cursor-pointer select-none active:scale-95 ${
                item.checked
                  ? 'bg-emerald-600 text-white border border-emerald-600 hover:bg-emerald-700 shadow-2xs'
                  : 'bg-stone-50 hover:bg-emerald-50 text-stone-600 hover:text-emerald-700 border border-stone-300 hover:border-emerald-400'
              }`}
              title={item.checked ? '已標記為已造訪（點擊取消）' : '點擊打卡標記為已造訪'}
              aria-label={item.checked ? '已造訪' : '打卡'}
            >
              <Check className={`w-3.5 h-3.5 stroke-[2.5] ${item.checked ? 'text-white' : 'text-stone-400'}`} />
              <span>{item.checked ? '已造訪' : '打卡'}</span>
            </button>
          </div>
        </div>

        {/* Spot Title & Navigation Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2.5 mt-1">
          <div>
            <h3
              className={`text-base sm:text-lg font-bold text-stone-900 leading-snug ${
                item.checked ? 'line-through text-stone-500' : ''
              }`}
            >
              {item.title}
            </h3>
            {item.koreanName && (
              <p className="text-xs text-stone-400 font-normal mt-0.5">
                {item.koreanName}
              </p>
            )}
          </div>

          {/* Naver Navigation Action Button(s) */}
          <div className="shrink-0 self-start sm:self-auto mt-1 sm:mt-0 flex items-center gap-1.5 flex-wrap">
            {item.naverNavButtons && item.naverNavButtons.length > 0 ? (
              item.naverNavButtons.map((btn, bIdx) => (
                <a
                  key={bIdx}
                  href={btn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[36px] px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200/80 text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
                  title={`以 Naver Map 開啟「${btn.label}」`}
                >
                  <Navigation className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600/20" />
                  <span>{btn.label} 導航</span>
                </a>
              ))
            ) : (
              <a
                href={item.naverMapUrl || `https://map.naver.com/p/search/${encodeURIComponent((item.koreanName || item.title) + ' 제주')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[36px] px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200/80 text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
                title="以韓國最準確的 Naver Map 開啟導航"
              >
                <Navigation className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600/20" />
                <span>Naver 導航</span>
              </a>
            )}
          </div>
        </div>

        {/* About description */}
        <p className={`text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed ${item.checked ? 'text-stone-400' : ''}`}>
          {item.about}
        </p>

        {/* Note / Memo if present in original PDF */}
        {item.note && (
          <div className="mt-2.5 p-2.5 rounded-lg bg-amber-50/70 border border-amber-200/60 text-xs text-amber-900 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <span className="font-semibold">行程備註：</span>
              <span>{item.note}</span>
            </div>
          </div>
        )}

        {/* Driving / Parking Tip */}
        {item.drivingTip && (
          <div className="mt-2 text-xs text-stone-500 flex items-center gap-1.5">
            <Car className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span>自駕停車：{item.drivingTip}</span>
          </div>
        )}

        {/* Guide Highlights (Always or enhanced with Guide Mode) */}
        {item.highlights && item.highlights.length > 0 && (
          <div className="mt-3 pt-2.5 border-t border-stone-100 flex flex-wrap gap-1.5">
            {item.highlights.map((hl, idx) => {
              let badgeStyle = 'bg-stone-100 text-stone-700 border-stone-200';
              if (hl.type === 'must_eat') {
                badgeStyle = 'bg-orange-50 text-orange-800 border-orange-200/90 font-medium';
              } else if (hl.type === 'must_buy') {
                badgeStyle = 'bg-rose-50 text-rose-800 border-rose-200/90 font-medium';
              } else if (hl.type === 'reservation') {
                badgeStyle = 'bg-amber-100/80 text-amber-900 border-amber-300 font-semibold';
              } else if (hl.type === 'star_spot') {
                badgeStyle = 'bg-purple-50 text-purple-800 border-purple-200/90 font-medium';
              }

              return (
                <div
                  key={idx}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs border ${badgeStyle}`}
                >
                  <span className="font-semibold">【{hl.label}】</span>
                  <span>{hl.text}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-sm w-full p-5 shadow-xl border border-stone-200 animate-in fade-in zoom-in-95 duration-150">
            <h4 className="text-base font-bold text-stone-900">確認刪除景點？</h4>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              您即將從行程中移除「<span className="font-semibold text-stone-800">{item.title}</span>」。此動作可於日後隨時手動重新加入，或點擊頂部恢復預設。
            </p>
            <div className="flex items-center justify-end gap-2.5 mt-5">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="min-h-[40px] px-3.5 py-1.5 text-xs font-medium text-stone-600 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
              >
                取消
              </button>
              <button
                onClick={handleDelete}
                className="min-h-[40px] px-4 py-1.5 text-xs font-medium text-white bg-rose-600 hover:bg-rose-700 rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                確認刪除
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
