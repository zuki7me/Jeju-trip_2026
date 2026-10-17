import React, { useState } from 'react';
import { SpotCategory, ItineraryItem, GuideHighlight } from '../types/travel';
import { X, Plus, Sparkles } from 'lucide-react';

interface AddSpotModalProps {
  isOpen: boolean;
  onClose: () => void;
  dayNumber: number;
  onAddSpot: (dayNumber: number, spot: ItineraryItem) => void;
}

export const AddSpotModal: React.FC<AddSpotModalProps> = ({
  isOpen,
  onClose,
  dayNumber,
  onAddSpot
}) => {
  const [time, setTime] = useState('14:00 - 15:30');
  const [title, setTitle] = useState('');
  const [koreanName, setKoreanName] = useState('');
  const [category, setCategory] = useState<SpotCategory>('spot');
  const [about, setAbout] = useState('');
  const [note, setNote] = useState('');
  const [naverMapUrl, setNaverMapUrl] = useState('');
  const [highlightLabel, setHighlightLabel] = useState('必吃美食');
  const [highlightText, setHighlightText] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    // Build Naver map search URL automatically if not provided
    const finalNaverMapUrl =
      naverMapUrl.trim() ||
      `https://map.naver.com/p/search/${encodeURIComponent((koreanName.trim() || title.trim()) + ' 제주')}`;

    const highlights: GuideHighlight[] = [];
    if (highlightText.trim()) {
      let hlType: GuideHighlight['type'] = 'guide_tip';
      if (highlightLabel.includes('美食') || highlightLabel.includes('菜單')) hlType = 'must_eat';
      else if (highlightLabel.includes('買') || highlightLabel.includes('伴手禮')) hlType = 'must_buy';
      else if (highlightLabel.includes('預約') || highlightLabel.includes('代號')) hlType = 'reservation';
      else if (highlightLabel.includes('星') || highlightLabel.includes('BTS')) hlType = 'star_spot';

      highlights.push({
        label: highlightLabel,
        text: highlightText.trim(),
        type: hlType
      });
    }

    const newItem: ItineraryItem = {
      id: `custom-${Date.now()}`,
      time: time.trim() || '彈性時間',
      title: title.trim(),
      koreanName: koreanName.trim() || undefined,
      category,
      about: about.trim() || '自訂私房行程安排，享受自由探索時光。',
      note: note.trim() || undefined,
      naverMapUrl: finalNaverMapUrl,
      checked: false,
      highlights: highlights.length > 0 ? highlights : undefined,
      drivingTip: '自駕導航依 Naver Map 定位前往，注意路邊停車規則。'
    };

    onAddSpot(dayNumber, newItem);
    onClose();
    // reset form
    setTitle('');
    setKoreanName('');
    setAbout('');
    setNote('');
    setNaverMapUrl('');
    setHighlightText('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs overflow-y-auto">
      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-stone-200 my-8 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-stone-200">
          <div>
            <h3 className="text-lg font-bold text-stone-900">
              新增行程景點至 DAY {dayNumber}
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              自動生成 Naver 導航按鈕與打卡核取方塊
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
          {/* Time & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                時間區間 <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="例如：10:00 - 11:30"
                className="w-full text-xs sm:text-sm px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                分類類型
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as SpotCategory)}
                className="w-full text-xs sm:text-sm px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-400 bg-white"
              >
                <option value="spot">景點探索</option>
                <option value="food">特色美食</option>
                <option value="cafe">海景咖啡</option>
                <option value="shopping">伴手禮/購物</option>
                <option value="nature">自然步道/海灘</option>
                <option value="hotel">住宿入住/退房</option>
                <option value="transport">交通/租車</option>
              </select>
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              景點 / 餐廳名稱 <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="例如：牛島花生冰淇淋 或 涯月邑海岸散步道"
              className="w-full text-xs sm:text-sm px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
          </div>

          {/* Korean Name */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              韓文名稱 (選填，方便韓文車機導航或問路)
            </label>
            <input
              type="text"
              value={koreanName}
              onChange={(e) => setKoreanName(e.target.value)}
              placeholder="例如：우도 땅콩 아이스크림"
              className="w-full text-xs sm:text-sm px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
          </div>

          {/* About / Description */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              行程說明 / 景點介紹 <span className="text-rose-500">*</span>
            </label>
            <textarea
              required
              rows={2}
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              placeholder="說明特色、參觀動線或必看重點..."
              className="w-full text-xs sm:text-sm px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
          </div>

          {/* Note / Memo */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              行程備註 / 重要提醒 (選填)
            </label>
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="例如：需事先線上預約、週二公休、準備現金等"
              className="w-full text-xs sm:text-sm px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
          </div>

          {/* Naver Map URL */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Naver Map 連結 (選填)
            </label>
            <input
              type="url"
              value={naverMapUrl}
              onChange={(e) => setNaverMapUrl(e.target.value)}
              placeholder="例如：https://naver.me/..."
              className="w-full text-xs sm:text-sm px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
          </div>

          {/* Guide Highlights (Optional) */}
          <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200">
            <span className="text-xs font-semibold text-stone-800 flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              攻略標籤 (選填，自動套用導遊亮顯標籤)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <select
                value={highlightLabel}
                onChange={(e) => setHighlightLabel(e.target.value)}
                className="text-xs px-2.5 py-1.5 rounded-lg border border-stone-300 bg-white"
              >
                <option value="必吃美食">必吃美食</option>
                <option value="必點菜單">必點菜單</option>
                <option value="必買伴手禮">必買伴手禮</option>
                <option value="重要預約代號">重要預約代號</option>
                <option value="BTS踩點">BTS/韓流踩點</option>
                <option value="重要提醒">重要提醒</option>
              </select>

              <input
                type="text"
                value={highlightText}
                onChange={(e) => setHighlightText(e.target.value)}
                placeholder="例如：招牌花生冰沙、牛島海帶湯"
                className="sm:col-span-2 text-xs px-2.5 py-1.5 rounded-lg border border-stone-300 bg-white focus:outline-none"
              />
            </div>
          </div>

          {/* Submit Actions */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-stone-200">
            <button
              type="button"
              onClick={onClose}
              className="min-h-[44px] px-4 py-2 text-xs sm:text-sm font-medium text-stone-600 hover:bg-stone-100 rounded-xl transition-colors cursor-pointer"
            >
              取消
            </button>
            <button
              type="submit"
              className="min-h-[44px] px-5 py-2 text-xs sm:text-sm font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-xl transition-colors cursor-pointer shadow-sm flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>確認新增</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
