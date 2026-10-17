import React, { useState, useEffect } from 'react';
import { HotelInfo, FlightInfo } from '../types/travel';
import {
  Clock,
  Plane,
  Hotel,
  PhoneCall,
  Car,
  AlertTriangle,
  ExternalLink,
  MapPin,
  ShieldCheck,
  Fuel,
  Info,
  CalendarDays
} from 'lucide-react';

interface TravelAssistantProps {
  hotels: HotelInfo[];
  flights: FlightInfo[];
}

export const TravelAssistant: React.FC<TravelAssistantProps> = ({
  hotels,
  flights
}) => {
  const [activeTab, setActiveTab] = useState<'countdown' | 'flight' | 'hotel' | 'emergency'>('countdown');

  // Countdown to 2026-10-26 19:30 (Jeju arrival)
  const targetDate = new Date('2026-10-26T19:30:00+09:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false
  });

  useEffect(() => {
    const calcTime = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds, isPast: false });
      }
    };
    calcTime();
    const interval = setInterval(calcTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 pb-28">
      {/* Sub-nav tabs */}
      <div className="flex items-center gap-1.5 p-1 bg-stone-200/70 rounded-2xl mb-6 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveTab('countdown')}
          className={`min-h-[40px] px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
            activeTab === 'countdown'
              ? 'bg-white text-stone-900 shadow-xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Clock className="w-3.5 h-3.5 text-amber-700" />
          <span>倒數計時器</span>
        </button>

        <button
          onClick={() => setActiveTab('flight')}
          className={`min-h-[40px] px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
            activeTab === 'flight'
              ? 'bg-white text-stone-900 shadow-xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Plane className="w-3.5 h-3.5 text-sky-700" />
          <span>航班資訊</span>
        </button>

        <button
          onClick={() => setActiveTab('hotel')}
          className={`min-h-[40px] px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
            activeTab === 'hotel'
              ? 'bg-white text-stone-900 shadow-xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Hotel className="w-3.5 h-3.5 text-indigo-700" />
          <span>住宿清單 (4處)</span>
        </button>

        <button
          onClick={() => setActiveTab('emergency')}
          className={`min-h-[40px] px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
            activeTab === 'emergency'
              ? 'bg-white text-stone-900 shadow-xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <PhoneCall className="w-3.5 h-3.5 text-rose-700" />
          <span>緊急聯絡 & 自駕須知</span>
        </button>
      </div>

      {/* 1. Countdown Tab */}
      {activeTab === 'countdown' && (
        <div className="space-y-6">
          <div className="bg-[#F4F0E8] border border-stone-200 rounded-3xl p-6 sm:p-8 text-center shadow-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/80 text-stone-700 text-xs font-medium font-mono mb-4">
              <CalendarDays className="w-3.5 h-3.5 text-amber-700" />
              TARGET: 2026.10.26 19:30 (KST)
            </span>

            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif mb-2">
              距離濟州島落地倒數
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
              準備好國際駕照、保暖風衣與相機，秋日的漢拏山與蔚藍果凍海在等著你！
            </p>

            <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto mt-6">
              <div className="bg-white rounded-2xl p-3 sm:p-4 border border-stone-200/90 shadow-2xs">
                <div className="text-2xl sm:text-4xl font-extrabold text-stone-900 font-mono tabular-nums">
                  {timeLeft.days}
                </div>
                <div className="text-[10px] sm:text-xs text-stone-500 font-medium mt-1">天 (DAYS)</div>
              </div>

              <div className="bg-white rounded-2xl p-3 sm:p-4 border border-stone-200/90 shadow-2xs">
                <div className="text-2xl sm:text-4xl font-extrabold text-stone-900 font-mono tabular-nums">
                  {timeLeft.hours}
                </div>
                <div className="text-[10px] sm:text-xs text-stone-500 font-medium mt-1">小時 (HRS)</div>
              </div>

              <div className="bg-white rounded-2xl p-3 sm:p-4 border border-stone-200/90 shadow-2xs">
                <div className="text-2xl sm:text-4xl font-extrabold text-stone-900 font-mono tabular-nums">
                  {timeLeft.minutes}
                </div>
                <div className="text-[10px] sm:text-xs text-stone-500 font-medium mt-1">分 (MINS)</div>
              </div>

              <div className="bg-white rounded-2xl p-3 sm:p-4 border border-stone-200/90 shadow-2xs">
                <div className="text-2xl sm:text-4xl font-extrabold text-stone-900 font-mono tabular-nums">
                  {timeLeft.seconds}
                </div>
                <div className="text-[10px] sm:text-xs text-stone-500 font-medium mt-1">秒 (SECS)</div>
              </div>
            </div>
          </div>

          {/* Autumn Driving Highlights Checklist */}
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs">
            <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2 mb-3">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>出發前 5 大必備隨身清單</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
              <li className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-2">
                <span className="font-bold text-amber-700 font-mono">01.</span>
                <span><strong>國際駕照本 + 台灣駕照正本</strong> (兩者皆需攜帶正本)。</span>
              </li>
              <li className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-2">
                <span className="font-bold text-amber-700 font-mono">02.</span>
                <span><strong>護照正本 + 刷卡信用卡</strong> (租車保證金與現場免稅退稅必備)。</span>
              </li>
              <li className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-2">
                <span className="font-bold text-amber-700 font-mono">03.</span>
                <span><strong>Naver Map App 先行下載</strong> (在韓國導航比 Google Maps 更精準)。</span>
              </li>
              <li className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-2">
                <span className="font-bold text-amber-700 font-mono">04.</span>
                <span><strong>Catchtable App 預約貝果</strong> (11/01 早晨預約倫敦貝果博物館)。</span>
              </li>
              <li className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-2">
                <span className="font-bold text-amber-700 font-mono">05.</span>
                <span><strong>韓國轉接頭 (雙圓孔 220V)</strong></span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* 2. Flight Tab */}
      {activeTab === 'flight' && (
        <div className="space-y-4">
          {flights.map((f, idx) => (
            <div
              key={idx}
              className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs"
            >
              <div className="flex items-center justify-between gap-3 border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-0.5 rounded-md text-[11px] font-bold tracking-wider font-mono uppercase ${
                      f.type === 'arrival'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-sky-100 text-sky-800'
                    }`}
                  >
                    {f.type === 'arrival' ? '去程入境' : '回程出境'}
                  </span>
                  <span className="text-sm font-bold text-stone-900 font-mono">
                    {f.flightNo || '班機'}
                  </span>
                </div>
                <span className="text-xs text-stone-500 font-medium">
                  {f.date}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-stone-400 block mb-0.5">航線：</span>
                  <span className="font-bold text-stone-900 text-sm">{f.route}</span>
                </div>
                <div>
                  <span className="text-stone-400 block mb-0.5">重要時間：</span>
                  <span className="font-bold text-amber-800 text-sm font-mono">{f.time}</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-stone-400 block mb-0.5">航站位置：</span>
                  <span className="text-stone-700">{f.terminal}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 bg-stone-50/80 -mx-5 -mb-5 p-4 rounded-b-2xl">
                <span className="text-xs font-semibold text-stone-800 block mb-1.5">
                  通關與報到指南：
                </span>
                <ul className="space-y-1 text-xs text-stone-600 list-disc list-inside">
                  {f.instructions.map((ins, iIdx) => (
                    <li key={iIdx}>{ins}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 3. Hotel Tab */}
      {activeTab === 'hotel' && (
        <div className="space-y-4">
          <div className="p-3 bg-amber-50/70 border border-amber-200/70 rounded-xl text-xs text-amber-900 flex items-center gap-2">
            <Info className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              本次行程共安排 4 間精選住宿：市區首晚便利 ➔ 西歸浦連住3晚免搬行李 ➔ 城山日出峰景觀 ➔ 塔洞海濱近市場2晚！
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {hotels.map((h, idx) => (
              <div
                key={idx}
                className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                        {h.nights}
                      </span>
                      <h3 className="text-base font-bold text-stone-900">
                        {h.name}
                      </h3>
                    </div>
                    {h.koreanName && (
                      <p className="text-xs text-stone-400 mt-0.5">{h.koreanName}</p>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={h.naverMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/90 rounded-lg hover:bg-emerald-100 transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
                      title="以韓國 Naver Map 開啟飯店位置"
                    >
                      <span>Naver 定位導航</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                  <div>
                    <span className="text-stone-400 block">入住期間：</span>
                    <span className="font-semibold text-stone-800">{h.dates}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block">進退房時間：</span>
                    <span className="font-mono text-stone-800 font-medium">{h.checkIn} · {h.checkOut}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block">所在區域：</span>
                    <span className="text-stone-800 font-medium">{h.area}</span>
                  </div>
                </div>

                {/* Hotel Address */}
                {h.address && (
                  <div className="mt-2.5 pt-2.5 border-t border-stone-100 flex items-start gap-1.5 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="text-stone-400">飯店地址：</span>
                      <span className="font-mono text-stone-800 font-medium select-all">{h.address}</span>
                    </div>
                  </div>
                )}

                <div className="mt-3 p-3 bg-stone-50 rounded-xl border border-stone-200/80 text-xs">
                  <div className="flex items-center gap-1.5 text-stone-700 font-semibold mb-1">
                    <Car className="w-3.5 h-3.5 text-stone-500" />
                    <span>停車資訊：</span>
                    <span className="font-normal text-stone-600">{h.parkingInfo}</span>
                  </div>
                  <ul className="mt-1.5 space-y-0.5 text-stone-500 list-disc list-inside">
                    {h.notes.map((n, nIdx) => (
                      <li key={nIdx}>{n}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Emergency & Self-Drive Tab */}
      {activeTab === 'emergency' && (
        <div className="space-y-6">
          {/* Emergency Hotline Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200">
              <span className="text-xs font-bold text-rose-800 flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4 text-rose-600" />
                韓國緊急救援電話
              </span>
              <div className="mt-2.5 space-y-1.5 text-xs text-rose-950">
                <div className="flex justify-between font-mono">
                  <span>警察報案 (Police)：</span>
                  <a href="tel:112" className="font-bold underline text-rose-700 text-sm">112</a>
                </div>
                <div className="flex justify-between font-mono">
                  <span>火警 / 急救救護車：</span>
                  <a href="tel:119" className="font-bold underline text-rose-700 text-sm">119</a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
              <span className="text-xs font-bold text-amber-800 flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4 text-amber-600" />
                韓國觀光公社 24hr 中文翻譯熱線
              </span>
              <div className="mt-2 text-xs text-amber-950 space-y-1">
                <div className="flex justify-between font-mono items-center">
                  <span>免費三方中文翻譯：</span>
                  <a href="tel:1330" className="font-bold underline text-amber-800 text-base">1330</a>
                </div>
                <p className="text-[11px] text-amber-800/90">
                  遇到交通事故、點餐或問路可直接撥打，由真人提供即時中文口譯溝通！
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200">
              <span className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4 text-stone-600" />
                樂天租車 (LOTTE Rent-a-Car)
              </span>
              <div className="mt-2 text-xs text-stone-700 space-y-1">
                <div className="flex justify-between font-mono">
                  <span>客服代表號：</span>
                  <a href="tel:1588-1230" className="font-bold text-stone-900">1588-1230</a>
                </div>
                <p className="text-[11px] text-stone-500">
                  車況異常、爆胎或事故，請立即停放安全處並撥打樂天專線通報。
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
              <span className="text-xs font-bold text-blue-800 flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4 text-blue-600" />
                駐韓國台北代表部 (急難救助)
              </span>
              <div className="mt-2 text-xs text-blue-950 space-y-1">
                <div className="flex justify-between font-mono">
                  <span>代表部代表號：</span>
                  <a href="tel:+82-2-399-2767" className="font-bold text-blue-900">+82-2-399-2767</a>
                </div>
                <div className="flex justify-between font-mono">
                  <span>24hr急難救助專線：</span>
                  <a href="tel:+82-10-9080-2761" className="font-bold text-rose-700">+82-10-9080-2761</a>
                </div>
              </div>
            </div>
          </div>

          {/* South Korea Self-Drive Regulations Guide */}
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs">
            <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2 mb-3">
              <Car className="w-4 h-4 text-stone-700" />
              <span>韓國自駕安全 4 大黃金準則</span>
            </h3>

            <div className="space-y-3 text-xs text-stone-700">
              <div className="p-3 bg-rose-50/60 rounded-xl border border-rose-200/80">
                <div className="font-bold text-rose-900 flex items-center gap-1 mb-1">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                  <span>1. 兒童保護區 (School Zone) 嚴格速限 30 km/h</span>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  路面標註「어린이보호구역」或黃色減速標誌之區域，速限一律為 30 km/h，測速照相密度極高且違規加重處罰，請務必減速行駛！
                </p>
              </div>

              <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200/80">
                <div className="font-bold text-amber-900 flex items-center gap-1 mb-1">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                  <span>2. 紅燈右轉新制規定</span>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  遇到紅燈欲右轉時，<strong>必須完全停止剎停（Speed 0）</strong>，確認前方及右側斑馬線皆無行人通過後，方可緩慢右轉。若路口設有專用「右轉箭頭綠燈」，則必須等右轉綠燈亮起才能右轉。
                </p>
              </div>

              <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-200/80">
                <div className="font-bold text-emerald-900 flex items-center gap-1 mb-1">
                  <Fuel className="w-3.5 h-3.5 text-emerald-600" />
                  <span>3. 加油站辨識：汽油 (휘발유) vs 柴油 (경유)</span>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  本行程預約之現代 KONA 4WD (G) 為汽油車，加油時請務必選擇<strong>黃色油槍「汽油 (휘발유 / Gasoline)」</strong>。切勿誤拿綠色油槍「柴油 (경유 / Diesel)」。
                </p>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <div className="font-bold text-stone-900 mb-1">
                  <span>4. 停車與導航電話號碼輸入</span>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  韓國車載導航系統非常先進，大多只需輸入店家的<strong>電話號碼 (Phone Number)</strong> 即可直接定位。若自駕前往，可直接在導航介面鍵入電話迅速設定。
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
