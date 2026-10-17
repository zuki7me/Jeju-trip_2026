export type SpotCategory = 
  | 'flight'
  | 'transport'
  | 'hotel'
  | 'food'
  | 'cafe'
  | 'spot'
  | 'shopping'
  | 'nature';

export type HighlightBadgeType = 'must_eat' | 'must_buy' | 'reservation' | 'star_spot' | 'guide_tip';

export interface GuideHighlight {
  label: string;
  text: string;
  type: HighlightBadgeType;
}

export interface ItineraryItem {
  id: string;
  time: string;
  title: string;
  category: SpotCategory;
  about: string;
  naverMapUrl?: string;
  naverNavButtons?: Array<{ label: string; url: string }>;
  googleMapUrl?: string;
  note?: string;
  checked: boolean;
  highlights?: GuideHighlight[];
  drivingTip?: string;
  koreanName?: string;
}

export interface DaySchedule {
  dayNumber: number;
  date: string; // e.g. "10/26"
  dayOfWeek: string; // e.g. "一"
  fullDateStr: string; // e.g. "2026.10.26 (一)"
  title: string; // e.g. "抵達濟州市區"
  area: string; // e.g. "濟州市北區"
  summary: string;
  hotelTonight?: {
    name: string;
    koreanName?: string;
    area: string;
    address?: string;
    naverMapUrl?: string;
  };
  items: ItineraryItem[];
}

export interface ExpenseItem {
  id: string;
  title: string;
  amountKrw: number;
  category: 'food' | 'transport' | 'tickets' | 'shopping' | 'stay' | 'other';
  dayNumber?: number;
  createdAt: string;
  note?: string;
  paidBy?: string; // 費用支付者 (例如：公費、我、旅伴)
}

export interface HotelInfo {
  name: string;
  koreanName?: string;
  dates: string;
  nights: string;
  area: string;
  naverMapUrl: string;
  googleMapUrl: string;
  checkIn: string;
  checkOut: string;
  address: string;
  parkingInfo: string;
  notes: string[];
}

export interface FlightInfo {
  type: 'arrival' | 'departure';
  date: string;
  flightNo?: string;
  route: string;
  time: string;
  terminal: string;
  instructions: string[];
}
