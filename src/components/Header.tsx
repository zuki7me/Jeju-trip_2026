import React, { useState, useEffect } from 'react';
import { Compass, BookOpen, RotateCcw, CloudSun, Clock, Download } from 'lucide-react';

interface HeaderProps {
  onResetItinerary: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onResetItinerary
}) => {
  const [jejuTime, setJejuTime] = useState('');
  const [twTime, setTwTime] = useState('');

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      // Jeju is UTC+9
      const jejuHours = (now.getUTCHours() + 9) % 24;
      const twHours = (now.getUTCHours() + 8) % 24;
      const mins = String(now.getUTCMinutes()).padStart(2, '0');
      setJejuTime(`${String(jejuHours).padStart(2, '0')}:${mins}`);
      setTwTime(`${String(twHours).padStart(2, '0')}:${mins}`);
    };
    updateClocks();
    const timer = setInterval(updateClocks, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative bg-[#F4F0E8] border-b border-stone-200/80 pt-6 pb-5 px-4 sm:px-6 shadow-xs">
      {/* Top decorative subtle texture & label */}
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500 mb-2 font-mono">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-stone-200/70 text-stone-700 font-medium">
              <Compass className="w-3.5 h-3.5 text-stone-600" />
              JEJU AUTUMN SELF-DRIVE
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">8 DAYS / 7 NIGHTS</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-stone-600 bg-stone-200/50 px-2 py-0.5 rounded-md">
              <Clock className="w-3.5 h-3.5 text-stone-500" />
              <span>濟州 {jejuTime || '14:30'}</span>
              <span className="text-stone-400 text-[10px]">(台 {twTime || '13:30'})</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-stone-600">
              <CloudSun className="w-3.5 h-3.5 text-amber-600" />
              <span>18°C 晴時多雲</span>
            </div>
          </div>
        </div>

        {/* Title and main actions */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-1">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 font-serif">
              濟州島自駕秋旅手冊
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              2026.10.26 (一) – 11.02 (一) · 秋楓 ✕ 蜜橘 ✕ 抹茶 ✕ 黑豬肉 ✕ 白帶魚
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0 flex-wrap">
            <a
              href="/jeju_standalone.html"
              download="濟州島自駕秋旅手冊_單檔離線版.html"
              className="min-h-[40px] px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              title="下載成可以直接用電腦瀏覽器點兩下開啟的單一 HTML 檔案"
            >
              <Download className="w-3.5 h-3.5 text-amber-300" />
              <span>下載單檔 HTML (點兩下直接開啟)</span>
            </a>

            <button
              onClick={() => {
                if (window.confirm('確定要將所有行程恢復為原始官方規劃嗎？自訂新增的項目將被重置。')) {
                  onResetItinerary();
                }
              }}
              className="min-h-[40px] px-3 py-1.5 rounded-xl text-xs text-stone-600 hover:text-stone-900 hover:bg-white bg-white/70 border border-stone-200 transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
              title="恢復預設行程資料"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>重置行程</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
