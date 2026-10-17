import { DaySchedule, HotelInfo, FlightInfo } from '../types/travel';

export const INITIAL_HOTELS: HotelInfo[] = [
  {
    name: '濟州紅樹林酒店 (Mangrove Jeju City)',
    koreanName: '맹그로브 제주시티',
    dates: '10/26 (一) 入住 - 10/27 (二) 退房',
    nights: '1 晚',
    area: '濟州市區 (近機場)',
    naverMapUrl: 'https://naver.me/5N15pPHt',
    googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Mangrove+Jeju+City',
    checkIn: '15:00 入住',
    checkOut: '11:00 退房',
    address: '제주도 제주시 탑동로 5',
    parkingInfo: '飯店附設住客停車場，晚間抵達可先停靠門口卸行李。',
    notes: [
      '周邊有 GS25 / CU 超商，適合採買夜宵及隔日早餐飲料。',
      '距離樂天租車機場營業處車程約 10-15 分鐘，交通極為方便。'
    ]
  },
  {
    name: '西歸浦大酒店 Hotel the Grang Seogwipo',
    koreanName: '호텔 더 그랑 서귀포',
    dates: '10/27 (二) 入住 - 10/30 (五) 退房',
    nights: '3 晚',
    area: '西歸浦市區',
    naverMapUrl: 'https://naver.me/xbA5dA2R',
    googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel+the+Grang+Seogwipo',
    checkIn: '15:00 入住',
    checkOut: '11:00 退房',
    address: '제주특별자치도 서귀포시 중정로 16',
    parkingInfo: '飯店提供免費停車場，地下與戶外平面皆有車位。',
    notes: [
      '連住 3 晚免搬行李，以西歸浦為中心暢遊南部與西南景點。',
      '近每日偶來市場、李仲燮街與西歸浦黑豬肉美食街。'
    ]
  },
  {
    name: '濟州城山貝斯特酒店 The Best Jeju Seongsan',
    koreanName: '더 베스트 제주 성산',
    dates: '10/30 (五) 入住 - 10/31 (六) 退房',
    nights: '1 晚',
    area: '城山東部',
    naverMapUrl: 'https://naver.me/GpCT7wya',
    googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=The+Best+Jeju+Seongsan+Hotel',
    checkIn: '15:00 入住',
    checkOut: '11:00 退房',
    address: '제주 서귀포시 성산읍 동류암로 26',
    parkingInfo: '飯店設有專用停車場，進出方便。',
    notes: [
      '緊鄰世界自然遺產「城山日出峰」，日出景觀絕佳。',
      '隔日前往 Aqua Planet 水族館僅需開車 10-15 分鐘。'
    ]
  },
  {
    name: '濟州島惠斯勒飯店 Hotel Whistlelark Jeju (又稱「口哨雲雀酒店濟州」)',
    koreanName: '호텔 휘슬락 제주',
    dates: '10/31 (六) 入住 - 11/02 (一) 退房',
    nights: '2 晚',
    area: '濟州市塔洞海邊',
    naverMapUrl: 'https://naver.me/IGJyTQ0O',
    googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel+Whistlelark+Jeju',
    checkIn: '15:00 入住',
    checkOut: '11:00 退房',
    address: '제주 제주시 서부두2길 26',
    parkingInfo: '飯店提供室內機械與平面停車位（大車休旅建議停平面）。',
    notes: [
      '緊鄰塔洞海邊廣場，步行 10 分鐘即可到達東門市場與七星路商圈。',
      '周邊有麥當勞、BHC炸雞與 Emart 大型超市，最後兩晚購物天堂！'
    ]
  }
];

export const FLIGHT_INFOS: FlightInfo[] = [
  {
    type: 'arrival',
    date: '10/26 (一)',
    flightNo: '台灣虎航 IT 670',
    route: '高雄 (KHH) → 濟州國際機場 (CJU)',
    time: '16:00 起飛 → 19:30 抵達',
    terminal: '濟州國際機場 國際航廈 (1F 入境大廳)',
    instructions: [
      '下機後依指標通過檢疫 (Q-Code 或黃色紙本申報表) 與入境審查。',
      '領取行李後，1 樓大廳有便利商店、ATM 與 WOWPASS 換匯機台。',
      '出航廈 5 號出口搭乘排班計程車（短程至市區濟州紅樹林酒店車資約 7,000~10,000 韓元）。'
    ]
  },
  {
    type: 'departure',
    date: '11/02 (一)',
    flightNo: '台灣虎航 IT 671',
    route: '濟州國際機場 (CJU) → 高雄 (KHH)',
    time: '20:20 起飛 → 22:00 抵達高雄 (17:00 抵達機場報到退稅)',
    terminal: '濟州國際機場 國際線出發大廳 (3F)',
    instructions: [
      '請於 17:00 左右抵達機場，先至 3F 海關退稅櫃台/退稅機台掃描退稅單。',
      '起飛前 2.5~2 小時開櫃辦理登機手續並托運行李。',
      '過安檢與證照查驗後，候機室內有免稅店與退稅現金領取櫃檯。'
    ]
  }
];

export const INITIAL_ITINERARY: DaySchedule[] = [
  {
    dayNumber: 1,
    date: '10/26',
    dayOfWeek: '一',
    fullDateStr: '2026.10.26 (週一)',
    title: '抵達濟州島 · 入住市區',
    area: '濟州市北區',
    summary: '搭乘虎航 IT 670 抵達濟州國際機場，搭乘計程車前往「濟州紅樹林酒店 (Mangrove Jeju City)」入住，超商採買養精蓄銳。',
    hotelTonight: {
      name: '濟州紅樹林酒店 (Mangrove Jeju City)',
      koreanName: '맹그로브 제주시티',
      area: '濟州市區 (近機場)',
      address: '제주도 제주시 탑동로 5',
      naverMapUrl: 'https://naver.me/5N15pPHt'
    },
    items: [
      {
        id: 'd1-1',
        time: '19:30 - 20:30',
        title: '濟州國際機場 (入境)',
        koreanName: '제주국제공항 입국 (IT 670)',
        category: 'flight',
        about: '抵達濟州島！ Welcome Jeju～ 下機通過檢疫查驗與提領行李。',
        naverMapUrl: 'https://naver.me/52TM1l2n',
        checked: false,
        highlights: [
          { label: '航班資訊', text: '台灣虎航 IT 670：高雄 16:00 → 濟州 19:30', type: 'reservation' },
          { label: '通關流程', text: '出發前72小時內上網填寫電子入境卡、SeS自動通關', type: 'guide_tip' }
        ]
      },
      {
        id: 'd1-2',
        time: '20:30 - 20:50',
        title: '濟州國際機場 → 濟州紅樹林酒店',
        koreanName: '제주국제공항 → 맹그로브 제주시티',
        category: 'hotel',
        about: '搭計程車前往濟州市區飯店入住（濟州紅樹林酒店 Mangrove Jeju City，地址：제주도 제주시 탑동로 5）。建議於飯店周邊超商簡單採買宵夜與隔日早餐，養精蓄銳。',
        naverMapUrl: 'https://naver.me/5N15pPHt',
        note: '夜間搭乘計程車非常方便，車程約 10-15 分鐘。',
        checked: false,
        highlights: [
          { label: '重要須知', text: '出機場 5 號出口過馬路即為排班計程車站點', type: 'guide_tip' },
          { label: '宵夜採買', text: '飯店旁 GS25 採買香蕉牛奶、延世大學生乳包、洋芋片', type: 'must_eat' }
        ],
        drivingTip: '第一晚尚未取車，輕鬆搭乘計程車直達飯店門口（車資約 7,000~10,000 韓元）。'
      }
    ]
  },
  {
    dayNumber: 2,
    date: '10/27',
    dayOfWeek: '二',
    fullDateStr: '2026.10.27 (週二)',
    title: '西海岸打卡 · 文創與黑豬肉',
    area: '西海岸 · 涯月 · 翰林 · 西歸浦',
    summary: '樂天取車開啟自駕之旅！漫步紅白馬燈塔、品嚐現烤鰻魚、走訪人氣UMU布丁與果凍海，南下西歸浦品嚐炭火黑豬肉。',
    hotelTonight: {
      name: '西歸浦大酒店 Hotel the Grang Seogwipo',
      koreanName: '호텔 더 그랑 서귀포',
      area: '西歸浦市區',
      address: '제주특별자치도 서귀포시 중정로 16',
      naverMapUrl: 'https://naver.me/xbA5dA2R'
    },
    items: [
      {
        id: 'd2-1',
        time: '08:30 - 10:00',
        title: '樂天租車 (LOTTE rent a car)',
        koreanName: '롯데렌터카 제주오토하우스',
        category: 'transport',
        about: '從飯店出發辦理取車手續，確認車況（約抓 1.5 小時辦理）。',
        naverMapUrl: 'https://naver.me/5oE5y0S5',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Lotte+Rent-a-Car+Jeju+Auto+House',
        note: '已預訂車輛KONA 4WD (G) 5P',
        checked: false,
        highlights: [
          { label: '重要預約', text: '預訂車輛：現代 KONA 4WD (汽油 G) 5人座', type: 'reservation' },
          { label: '取車必備', text: '國際駕照本、台灣駕照正本、護照、刷卡信用卡', type: 'guide_tip' }
        ],
        drivingTip: '檢查車身刮痕並錄影存證，確認車內導航語言（支援英文/電話番號輸入）。'
      },
      {
        id: 'd2-2',
        time: '10:15 - 11:30',
        title: '梨湖木筏海邊 & 藥局',
        koreanName: '이호테우해수욕장 & BIG SAVE 약국',
        category: 'spot',
        about: '必拍超可愛巨大紅白馬燈塔，順步至 BIG SAVE 藥局採買常備藥品。',
        naverMapUrl: 'https://naver.me/FxFtVyc6',
        naverNavButtons: [
          { label: '燈塔', url: 'https://naver.me/FxFtVyc6' },
          { label: '藥局', url: 'https://naver.me/5K69fz2I' }
        ],
        checked: false,
        highlights: [
          { label: '必拍亮點', text: '紅白雙色特洛伊木馬防波堤燈塔（紅白各一隻）', type: 'guide_tip' },
          { label: '藥局指南', text: '可採買討論度高的PDRN商品、肌肉痠痛藥', type: 'must_buy' }
        ],
        drivingTip: '木馬防波堤旁有專用免費停車場，海風強勁注意隨身帽子。'
      },
      {
        id: 'd2-3',
        time: '12:00 - 13:30',
        title: '午餐：川鰻魚',
        koreanName: '천장어 (풍천장어)',
        category: 'food',
        about: '終於可以吃到期待已久的烤！鰻！魚！',
        naverMapUrl: 'https://naver.me/xZVp72OI',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Jeoncheoneo+eel+Jeju',
        note: '肉質肥美厚實，炭火直烤外脆內嫩。',
        checked: false,
        highlights: [
          { label: '必吃美食', text: '原味現烤淡水白鰻魚（炭火香氣酥香無土味）', type: 'must_eat' },
          { label: '必點菜單', text: '鹽烤鰻魚配生薑絲、紫蘇葉、特調甜鹹鰻魚醬', type: 'must_eat' }
        ],
        drivingTip: '附設專屬停車位，自駕抵達可直接停入店前空地。'
      },
      {
        id: 'd2-4',
        time: '14:00 - 14:45',
        title: 'mumu jeju 文創商店',
        koreanName: '무무제주',
        category: 'shopping',
        about: '充滿濟州在地插畫風格（橘子、漢拏山等）的可愛文創選物店。',
        naverMapUrl: 'https://naver.me/5z52v8Ic',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=mumu+jeju',
        note: '小巧精緻的文創小店，充滿溫暖手繪筆觸。',
        checked: false,
        highlights: [
          { label: '必買伴手禮', text: '濟州漢拏山小熊貼紙、橘子刺繡零錢包、手繪明信片', type: 'must_buy' }
        ],
        drivingTip: '路邊臨停或周邊鄉間巷道寬敞處停車，注意不阻礙當地居民會車。'
      },
      {
        id: 'd2-5',
        time: '15:00 - 15:45',
        title: 'UMU & Garcon jeju',
        koreanName: '우무 (UMU) & 갸르송 제주',
        category: 'shopping',
        about: '購買超人氣的海女石花菜布丁及布丁周邊(網友推薦布丁肥皂)，順逛隔壁Garcon jeju 挖寶。',
        naverMapUrl: 'https://naver.me/FK5vaTT8',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=UMU+Jeju',
        note: '布丁不含人工凝固劑，需於購買後 10-20 分鐘內享用完畢或冰鎮。',
        checked: false,
        highlights: [
          { label: '必吃美食', text: '原味卡士達布丁、抹茶布丁、濟州巧克力布丁', type: 'must_eat' },
          { label: '必買伴手禮', text: '極簡文青風布丁造型天然保濕肥皂 (Umu Soap)', type: 'must_buy' }
        ],
        drivingTip: '店外拍照極為可愛，一次僅容納一組客人入內挑選。'
      },
      {
        id: 'd2-6',
        time: '16:00 - 16:45',
        title: '挾才海灘',
        koreanName: '협재해수욕장',
        category: 'nature',
        about: '可在白沙灘散步看海，遠眺蔚藍海水(果凍海)與飛揚島。',
        naverMapUrl: 'https://naver.me/5XJIlPtO',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Hyeopjae+Beach+Jeju',
        note: '濟州西海岸代表性沙灘，退潮時海水呈現清透薄荷綠。',
        checked: false,
        highlights: [
          { label: '必看絕景', text: '天然細白貝殼沙灘 + 遠眺神祕海上「飛揚島」', type: 'guide_tip' }
        ],
        drivingTip: '海灘設有大型免費公有停車場，備有公廁與洗沙設施。'
      },
      {
        id: 'd2-7',
        time: '17:00 - 18:00',
        title: '西海岸特色咖啡廳',
        koreanName: '서해안 해변 오션뷰 카페',
        category: 'cafe',
        about: '挑選一間海景咖啡廳坐下來，欣賞濟州西海岸迷人的夕陽。',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Aewol+Ocean+View+Cafe+Jeju',
        note: '推薦鄰近海景席位，落日時分橙金霞光倒映海面絕美。',
        checked: false,
        highlights: [
          { label: '必點菜單', text: '濟州漢拏峰柑橘氣泡美式、海鹽焦糖拿鐵', type: 'must_eat' },
          { label: '推薦時刻', text: '日落時間約 17:30~17:50，金色暮光浪漫無比', type: 'guide_tip' }
        ],
        drivingTip: '西海岸沿線車速請保持慢行，享受浪漫沿海公路自駕。'
      },
      {
        id: 'd2-8',
        time: '19:00 - 20:30',
        title: '晚餐：炭烤黑豬肉',
        koreanName: '서귀포 흑돼지 참숯구이',
        category: 'food',
        about: '抵達西歸浦辦理入住後，可至飯店附近挑選一間人氣烤黑豬肉餐廳，大啖炭火現烤多汁黑豬肉。',
        naverMapUrl: 'https://naver.me/xbA5dA2R',
        note: '今晚起連住西歸浦大酒店 3 晚，省去每日打包整理的繁瑣！',
        checked: false,
        highlights: [
          { label: '必吃美食', text: '西歸浦正宗炭火黑豬肉五花肉與梅花肉', type: 'must_eat' },
          { label: '必點菜單', text: '厚切黑豬肉蘸熱滾滾濟州特製鯷魚醬 (Meljot) + 泡菜大醬湯', type: 'must_eat' }
        ],
        drivingTip: '車輛可先停放飯店停車場，步行至周邊黑豬肉街喝酒免擔心酒駕。'
      }
    ]
  },
  {
    dayNumber: 3,
    date: '10/28',
    dayOfWeek: '三',
    fullDateStr: '2026.10.28 (週三)',
    title: '最美公路1100 · 烤白帶魚與藝文',
    area: '漢拏山 · 中文觀光區 · 安德',
    summary: '沿濟州最美1100景觀公路登高賞秋芒秋楓，午餐享用超霸氣整條無骨白帶魚，探訪安藤忠雄清水模本態博物館與粉紅亂子草。',
    hotelTonight: {
      name: '西歸浦大酒店 Hotel the Grang Seogwipo',
      koreanName: '호텔 더 그랑 서귀포 (連住第 2 晚)',
      area: '西歸浦市區',
      address: '제주특별자치도 서귀포시 중정로 16',
      naverMapUrl: 'https://naver.me/xbA5dA2R'
    },
    items: [
      {
        id: 'd3-1',
        time: '08:30 - 09:15',
        title: '飯店出發 → 1100道路',
        koreanName: '1100도로 드라이브 코스',
        category: 'transport',
        about: '沿著景觀公路開車上山。',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=1100+Road+Hallasan+Jeju',
        note: '穿越漢拏山國家公園的高山景觀公路。',
        checked: false,
        highlights: [
          { label: '自駕體驗', text: '貫穿漢拏山脊樑的綠色隧道，海拔漸升雲霧繚繞', type: 'guide_tip' }
        ],
        drivingTip: '山路彎道多且偶有山霧，請降速慢行、開大燈，遵守標線勿超車。'
      },
      {
        id: 'd3-2',
        time: '09:15 - 10:45',
        title: '1100高地 休憩所',
        koreanName: '1100고지 휴게소 & 습지탐방로',
        category: 'nature',
        about: '濟州最美公路！走平緩生態木棧道，輕鬆漫步欣賞絕美秋楓。',
        naverMapUrl: 'https://naver.me/FV7YUbjQ',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=1100+Altitude+Rest+Area+Jeju',
        note: '木棧道平緩好走，繞一圈約 20-30 分鐘，老少咸宜。',
        checked: false,
        highlights: [
          { label: '必看絕景', text: '拉姆薩爾濕地木棧步道、漢拏山秋芒秋楓、白鹿雕像', type: 'guide_tip' }
        ],
        drivingTip: '休憩所對面有停車場，高地氣溫比平地低 5-8 度，請備防風外套。'
      },
      {
        id: 'd3-3',
        time: '11:30 - 13:00',
        title: '午餐：春心之家 本店',
        koreanName: '춘심이네 본점',
        category: 'food',
        about: '濟州島當地特色料理，超巨大「烤無骨白帶魚」，店員會協助去骨。',
        naverMapUrl: 'https://naver.me/5BcjS2c2',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Chunsimine+Jeju',
        note: '濟州島極具代表性的整尾長條烤白帶魚餐廳，排隊名店建議準時抵達。',
        checked: false,
        highlights: [
          { label: '必吃美食', text: '整條特大無骨烤銀白帶魚 (통갈치구이)', type: 'must_eat' },
          { label: '特色服務', text: '專業店員桌邊用湯匙精準挑除魚刺骨頭，大口爽快吃肉', type: 'guide_tip' }
        ],
        drivingTip: '備有大型專屬停車場，門口有抽號碼牌機台。'
      },
      {
        id: 'd3-4',
        time: '13:00 - 14:00',
        title: 'Terarosa Coffee 中文店',
        koreanName: '테라로사 중문점',
        category: 'cafe',
        about: '從春心之家開車約 5-8 分鐘即可抵達！紅磚綠意設計空間，順路品嚐手沖咖啡與現烤糕點。',
        naverMapUrl: 'https://naver.me/Fk73nWOB',
        note: '韓國頂級精品咖啡代表品牌，紅磚建築與大面植栽充滿人文氣息。',
        checked: false,
        highlights: [
          { label: '必點菜單', text: '衣索比亞單品手沖咖啡、現烤檸檬磅蛋糕、法式可麗露', type: 'must_eat' }
        ],
        drivingTip: '從春心之家開車約 5-8 分鐘，Terarosa 附設專用免費停車場，開車前往輕鬆便利。'
      },
      {
        id: 'd3-5',
        time: '14:15 - 15:45',
        title: '本態博物館',
        koreanName: '본태박물관 (Bonte Museum)',
        category: 'spot',
        about: '傳統工藝與現代藝術結合的清水模建築，RM 曾拜訪。',
        naverMapUrl: 'https://naver.me/5CW7vFCY',
        note: '安藤忠雄操刀建築設計，典藏草間彌生「無限鏡室」與傳統韓國刺繡工藝。門票價格（現場票價）：成人票 ₩35,000 韓元。',
        checked: false,
        highlights: [
          { label: '門票資訊', text: '現場票價：成人票 ₩35,000 韓元（可先於線上平台購票比價）', type: 'reservation' },
          { label: '明星足跡', text: 'BTS 隊長 RM (金南俊) 親自朝聖認證景點', type: 'star_spot' },
          { label: '必看展覽', text: '草間彌生《無限鏡屋：靈魂之光》、安藤忠雄水庭園', type: 'guide_tip' }
        ],
        drivingTip: '山丘間清水模園區，設有寬敞遊客停車場。'
      },
      {
        id: 'd3-6',
        time: '16:00 - 17:30',
        title: '山茶花之丘 (Camellia Hill)',
        koreanName: '카멜리아힐',
        category: 'nature',
        about: '欣賞秋季限定的夢幻粉紅亂子草與波斯菊。',
        naverMapUrl: 'https://naver.me/GFB10Aam',
        note: '門票約 12,000 韓元，園區內各大拍照裝置精心設計。',
        checked: false,
        highlights: [
          { label: '門票資訊', text: '門票 12,000 韓元 / 人（可現場購票或事先購票）', type: 'reservation' },
          { label: '秋季限定', text: '整片夢幻粉紅亂子草花海 (Pink Muhly) 與秋日波斯菊', type: 'guide_tip' }
        ],
        drivingTip: '停車場腹地極大，秋季下午光線柔和最適合人像寫真。'
      },
      {
        id: 'd3-7',
        time: '18:00 - 18:45',
        title: 'UNIQLO 西歸浦店',
        koreanName: '유니클로 서귀포점',
        category: 'shopping',
        about: '回市區順路買濟州島限定款式上衣。',
        naverMapUrl: 'https://naver.me/GG7Q3SG1',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Uniqlo+Seogwipo',
        note: '獨棟大型門市，購物體驗舒適好逛。',
        checked: false,
        highlights: [
          { label: '必買伴手禮', text: 'UTme! 濟州限定海女、石頭爺爺、橘子圖騰印花 T-shirt', type: 'must_buy' },
          { label: '退稅服務', text: '消費滿額可現場出示護照辦理即時免稅退稅', type: 'guide_tip' }
        ],
        drivingTip: '門市前設有顧客專用免費露天停車位。'
      },
      {
        id: 'd3-8',
        time: '19:00 - 20:00',
        title: '晚餐：姊妹麵條 或 偶來市場',
        koreanName: '자매국수 or 서귀포 매일올레시장',
        category: 'food',
        about: '暖胃不辣的白煮豬肉大骨湯麵，或走訪市場品嚐熟食小吃。',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Seogwipo+Olle+Market',
        note: '偶來市場充滿熱情市井活力，美食多樣化。',
        checked: false,
        highlights: [
          { label: '必吃美食', text: '濃白大骨湯麵 (Gogi-guksu)、濟州黑豬肉菜肉餃子', type: 'must_eat' },
          { label: '市場小吃', text: '偶來市場：現炸黑豬肉肉餅卷、橘子麻糬 (Omegi-tteok)', type: 'must_eat' }
        ],
        drivingTip: '偶來市場有立體收費停車場，夜間遊客較多建議提早入場。'
      }
    ]
  },
  {
    dayNumber: 4,
    date: '10/29',
    dayOfWeek: '四',
    fullDateStr: '2026.10.29 (週四)',
    title: '柑橘採摘 · 綠茶茶園與神話世界',
    area: '安德 · 山房山 · 神話世界',
    summary: '睡飽不趕行程的療癒早晨！體驗親手採摘濟州名產柑橘，午餐品嚐濃醇翡翠鮑魚粥，探訪防彈少年團愛店與O\'sulloc抹茶綠茶園。',
    hotelTonight: {
      name: '西歸浦大酒店 Hotel the Grang Seogwipo',
      koreanName: '호텔 더 그랑 서귀포 (連住第 3 晚)',
      area: '西歸浦市區',
      address: '제주특별자치도 서귀포시 중정로 16',
      naverMapUrl: 'https://naver.me/xbA5dA2R'
    },
    items: [
      {
        id: 'd4-1',
        time: '09:30 - 09:45',
        title: '飯店出發 → 柑橘園',
        koreanName: '호텔 출발 → 감귤체험농장',
        category: 'transport',
        about: '享受睡飽不趕行程的早晨，車程約 15 分鐘。',
        note: '不疾不徐的度假節奏。',
        checked: false,
        highlights: [
          { label: '早晨節奏', text: '睡到自然醒，飯店享用輕食後悠哉出發', type: 'guide_tip' }
        ],
        drivingTip: '鄉間道路平緩，沿途可見整片黃澄澄橘子果園。'
      },
      {
        id: 'd4-2',
        time: '09:45 - 11:45',
        title: '濟州愛人柑橘園',
        koreanName: '어린왕자감귤밭 (또는 애인감귤농장)',
        category: 'spot',
        about: '體驗採摘橘子與手作果醬，鄉村風造景精緻好拍。',
        naverMapUrl: 'https://naver.me/F3TXb6kY',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Jeju+Tangerine+Farm+Experience',
        note: '可先預約製作橘子果醬',
        checked: false,
        highlights: [
          { label: '重要預約', text: '手作橘子果醬體驗可事先預約確認場次', type: 'reservation' },
          { label: '體驗亮點', text: '戴斗笠提竹籃親採新鮮柑橘，現摘現吃甜美多汁', type: 'must_eat' }
        ],
        drivingTip: '園區設有泥地停車區，穿著好走耐髒的平底鞋。'
      },
      {
        id: 'd4-3',
        time: '12:15 - 13:30',
        title: '午餐：山房山周邊鮑魚粥',
        koreanName: '산방산 전복죽 맛집 (사계전복)',
        category: 'food',
        about: '溫和暖胃的翡翠色新鮮鮑魚粥，濃郁鮮甜。',
        naverMapUrl: 'https://naver.me/FlZ1HHxF',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Sanbangsan+Abalone+Porridge+Jeju',
        note: '正宗濟州鮑魚粥是以新鮮鮑魚內臟熬煮，呈現天然翠綠色，營養滿分。',
        checked: false,
        highlights: [
          { label: '必吃美食', text: '翡翠色濃醇手熬鮑魚粥 (전복죽)', type: 'must_eat' },
          { label: '必點菜單', text: '石鍋烤牛油鮑魚 (전복버터구이)、現烤鯖魚配菜', type: 'must_eat' }
        ],
        drivingTip: '山房山雄偉岩壁就在眼前，景觀視野極佳。'
      },
      {
        id: 'd4-4',
        time: '13:45 - 15:15',
        title: '짜이다방 咖啡',
        koreanName: '짜이다방 (작고느린 짜이집)',
        category: 'cafe',
        about: '山房山與沙溪海邊旁的波希米亞風慢步調茶館，BTS 忙內 LINE (Jimin、V、柾國) 曾於綜藝AYS探訪！',
        naverMapUrl: 'https://map.naver.com/p/search/%EC%A7%9C%EC%9D%B4%EB%8B%A4%EB%B0%A9',
        note: '充滿異國情調的手作木屋小茶館，以濃醇道地的印度香料熱奶茶 (Chai) 與手沖咖啡聞名。',
        checked: false,
        highlights: [
          { label: '明星足跡', text: 'BTS 忙內 LINE (Jimin、V、柾國) 曾於綜藝AYS探訪打卡點', type: 'star_spot' },
          { label: '必點招牌', text: '經典印度香料茶 (Chai / 짜이)、手作優格乳酪拉西 (Lassi)、手沖咖啡', type: 'must_eat' }
        ],
        drivingTip: '地址：西歸浦市安德面沙溪南路239。鄰近沙溪海岸與山房山，周邊有停車位；週一、週二固定公休請留意。'
      },
      {
        id: 'd4-5',
        time: '15:45 - 17:15',
        title: 'O\'sulloc 綠茶博物館',
        koreanName: '오설록 티 뮤지엄 & 이니스프리 제주하우스',
        category: 'spot',
        about: '午後光線柔和拍茶園最美，順逛 Innisfree 並享用抹茶甜點。',
        naverMapUrl: 'https://naver.me/5uIYATBA',
        note: '韓國最著名的綠茶品牌發源地，大片茶田與玻璃溫室建築相映成趣。',
        checked: false,
        highlights: [
          { label: '必吃美食', text: '特濃抹茶霜淇淋、綠茶生乳卷 (Green Tea Roll Cake)', type: 'must_eat' },
          { label: '必買伴手禮', text: 'Innisfree 濟州限定火山泥潔顏慕斯、濟州柑橘茶葉禮盒', type: 'must_buy' }
        ],
        drivingTip: '設有多座大型免費停車場，穿過馬路可拍無邊際綠茶梯田。'
      },
      {
        id: 'd4-6',
        time: '17:30 - 19:30',
        title: '晚餐：혜원燒肉店（濟州神話世界總店）',
        koreanName: '혜원 신화월드 본점',
        category: 'food',
        about: '開車約 10 分鐘即達。BTS 忙內 LINE (Jimin、V、柾國) 於節目AYS有來光顧品嚐的精緻燒肉名店。',
        naverMapUrl: 'https://naver.me/xq3adZkx',
        note: '神話世界複合渡假村內的精緻高端韓牛與黑豬肉炭火燒肉名店。',
        checked: false,
        highlights: [
          { label: '明星足跡', text: 'BTS 忙內 LINE (Jimin、V、柾國) 於節目AYS有來光顧品嚐的精緻燒肉名店', type: 'star_spot' },
          { label: '必吃美食', text: '頂級韓牛炭火燒肉、精緻韓定食九折板配菜', type: 'must_eat' }
        ],
        drivingTip: '神話世界腹地廣大，依指標停放渡假村地下或戶外訪客停車區。'
      },
      {
        id: 'd4-7',
        time: '20:15',
        title: '返回西歸浦大酒店',
        koreanName: '호텔 더 그랑 서귀포 귀가 (明日換宿)',
        category: 'hotel',
        about: '結束充實順暢的一天，返回西歸浦大酒店休息。明天（Day 5）即將退房換住下一間飯店，請記得今晚先整理打包行李！',
        note: '西歸浦大酒店連住 3 晚的最後一晚！明天將退房前往東部城山換飯店，請今晚提前整理大件行李與採購戰利品。',
        checked: false,
        highlights: [
          { label: '換宿提醒', text: '⚠️ 明天（Day 5）退房前往東部換住新飯店，今晚請務必提前整理打包好行李！', type: 'reservation' },
          { label: '晚間放鬆', text: '西歸浦最後一晚，可至周邊超商買冰棒或「白鹿潭艾爾啤酒」放鬆犒賞自己', type: 'guide_tip' }
        ],
        drivingTip: '夜間自駕留意道路標線與反光柱，安全返回飯店。'
      }
    ]
  },
  {
    dayNumber: 5,
    date: '10/30',
    dayOfWeek: '五',
    fullDateStr: '2026.10.30 (週五)',
    title: '正房落海瀑布 · 史努比庭園與城山日出',
    area: '西歸浦 → 東部城山',
    summary: '退房展開東部探險！造訪全亞洲唯一直瀉入海的正房瀑布，朝聖超萌史努比庭園Jimin拍照點，登上壯闊城山日出峰，晚餐享用泰泰與朴敘俊愛店「길흑돼지참숯구이 烤肉」。',
    hotelTonight: {
      name: '濟州城山貝斯特酒店 The Best Jeju Seongsan',
      koreanName: '더 베스트 제주 성산',
      area: '城山東部 (近日出峰)',
      address: '제주 서귀포시 성산읍 동류암로 26',
      naverMapUrl: 'https://naver.me/GpCT7wya'
    },
    items: [
      {
        id: 'd5-1',
        time: '08:30 - 08:40',
        title: '退房 → 正房瀑布',
        koreanName: '체크아웃 → 정방폭포',
        category: 'transport',
        about: '開車約 10 分鐘即可抵達。',
        note: '自駕短程快速轉移。',
        checked: false,
        highlights: [
          { label: '行程備註', text: '辦妥西歸浦大酒店退房手續，行李上車出發', type: 'guide_tip' }
        ],
        drivingTip: '市區短程行駛，注意路口速限 50 km/h。'
      },
      {
        id: 'd5-2',
        time: '08:40 - 09:40',
        title: '正房瀑布',
        koreanName: '정방폭포',
        category: 'nature',
        about: '亞洲唯一直接落海瀑布，早晨光線好且避開團客。',
        naverMapUrl: 'https://naver.me/xGIPjBcK',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Jeongbang+Waterfall+Jeju',
        note: '黑色玄武岩垂直峭壁傾瀉而下，水氣氤氳壯觀雄奇。',
        checked: false,
        highlights: [
          { label: '必看絕景', text: '亞洲唯一從懸崖直接垂直墜入大海的壯觀瀑布', type: 'guide_tip' },
          { label: '在地特色', text: '瀑布旁常有海女現場切新鮮海鞘、章魚海鮮盤配真露燒酒', type: 'must_eat' }
        ],
        drivingTip: '設有專用停車場，下階梯為玄武岩石灘，請穿著防滑鞋款。'
      },
      {
        id: 'd5-3',
        time: '10:30 - 12:30',
        title: '史努比庭園 (Snoopy Garden)',
        koreanName: '스누피가든',
        category: 'spot',
        about: '超大型戶外自然園區，可尋找 Jimin 同款認證拍照點。',
        naverMapUrl: 'https://naver.me/502MzmiO',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Snoopy+Garden+Jeju',
        note: '結合濟州原生態森林與花生漫畫史努比故事的療癒庭園。',
        checked: false,
        highlights: [
          { label: '明星足跡', text: 'BTS Jimin (朴智旻) 親臨拍照打卡認證同款湖邊長椅', type: 'star_spot' },
          { label: '必買伴手禮', text: '濟州石頭爺爺史努比限定玩偶、刺繡帆布袋、徽章', type: 'must_buy' }
        ],
        drivingTip: '園區停車場非常寬廣，室內展館與戶外探險步道需抓 2 小時漫步。'
      },
      {
        id: 'd5-4',
        time: '13:00 - 14:30',
        title: '午餐：明珍鮑魚',
        koreanName: '명진전복',
        category: 'food',
        about: '鮑魚石鍋飯，米飯與鮑魚悶烤香氣濃郁。',
        naverMapUrl: 'https://naver.me/5ssTSURt',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Myeongjin+Jeonbok+Jeju',
        note: '或是不要拉那麼遠吃飯（若當日客滿或想省時，可於城山周邊享用）。',
        checked: false,
        highlights: [
          { label: '必吃美食', text: '鮑魚石鍋飯 (전복솥밥) 切片鋪滿，淋熱水做鍋巴湯', type: 'must_eat' },
          { label: '必點菜單', text: '烤鮑魚佐現煎鯖魚，焦香酥脆', type: 'must_eat' }
        ],
        drivingTip: '面海第一排店面，設有專屬臨海停車場。'
      },
      {
        id: 'd5-5',
        time: '15:00 - 17:00',
        title: '城山日出峰',
        koreanName: '성산일출봉',
        category: 'nature',
        about: '世界自然遺產，走平緩步道欣賞壯麗火山口與海景。',
        naverMapUrl: 'https://naver.me/xa5Rn5U3',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Seongsan+Ilchulbong+Jeju',
        note: 'UNESCO 世界自然遺產，登頂步道全程鋪設石階木棧約 25 分鐘。',
        checked: false,
        highlights: [
          { label: '世界遺產', text: '直徑 600 公尺碗狀巨型火山噴火口，俯瞰海天一色', type: 'guide_tip' },
          { label: '免費路線', text: '若不想登頂，左側海邊步道免費開放且可遠眺海女表演', type: 'guide_tip' }
        ],
        drivingTip: '日出峰下有超大公有停車場，停妥後跟隨指標前往售票處。'
      },
      {
        id: 'd5-6',
        time: '17:15 - 17:45',
        title: '濟州城山貝斯特酒店 (入住)',
        koreanName: '더 베스트 제주 성산 (체크인)',
        category: 'hotel',
        about: '就在城山日出峰旁，辦理入住濟州城山貝斯特酒店（The Best Jeju Seongsan，地址：제주 서귀포시 성산읍 동류암로 26）、卸下行李稍作休息。',
        naverMapUrl: 'https://naver.me/GpCT7wya',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=The+Best+Jeju+Seongsan+Hotel',
        note: '位置絕佳，下樓即是城山商圈，車程至各景點都在 5-10 分鐘內。',
        checked: false,
        highlights: [
          { label: '入住叮嚀', text: '辦理 Check-in，房間稍作洗漱歇息準備晚餐', type: 'guide_tip' }
        ],
        drivingTip: '飯店附設住客地下/平面停車場。'
      },
      {
        id: 'd5-7',
        time: '18:00 - 20:00',
        title: '晚餐：길흑돼지참숯구이 烤肉',
        koreanName: '제주길흑돼지참숯구이',
        category: 'food',
        about: '泰泰與朴敘俊的愛店！真炭火燒烤厚實多汁，必朝聖。',
        naverMapUrl: 'https://naver.me/xcnBvBuZ',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=길흑돼지참숯구이+제주',
        note: '韓國頂級演藝圈好友 Wooga Family（BTS V金泰亨與朴敘俊）認證必訪燒肉！',
        checked: false,
        highlights: [
          { label: '明星愛店', text: '防彈少年團 V (金泰亨) & 朴敘俊私廚口袋愛店！', type: 'star_spot' },
          { label: '必吃美食', text: '純真炭火厚切黑豬五花肉、酥脆外皮爆汁肉質', type: 'must_eat' },
          { label: '必點菜單', text: '黑豬肉炒飯 (볶음밥)、特製生拌蔥絲', type: 'must_eat' }
        ],
        drivingTip: '距飯店約 4.5 公里（開車車程約 8～10 分鐘，沿海邊環海長城路前往），餐廳設有專用停車位，自駕前往停車便利。'
      }
    ]
  },
  {
    dayNumber: 6,
    date: '10/31',
    dayOfWeek: '六',
    fullDateStr: '2026.10.31 (週六)',
    title: '巨型水族館 · 地景咖啡與東門夜市',
    area: '城山 → 濟州市區塔洞',
    summary: '退房探訪亞洲最大級 Aqua Planet 海洋水族館，享用水族館美食或城山海鮮料理，午後探訪絕美秋芒海景咖啡廳，傍晚開車返回濟州市區入住塔洞，徒步掃蕩東門市場！',
    hotelTonight: {
      name: '濟州島惠斯勒飯店 Hotel Whistlelark Jeju',
      koreanName: '호텔 휘슬락 제주 (口哨雲雀酒店濟州)',
      area: '濟州市塔洞海邊',
      address: '제주 제주시 서부두2길 26',
      naverMapUrl: 'https://naver.me/IGJyTQ0O'
    },
    items: [
      {
        id: 'd6-1',
        time: '08:30 - 08:45',
        title: '退房 → 水族館',
        koreanName: '체크아웃 → 아쿠아플라넷 제주',
        category: 'transport',
        about: '開車約 15 分鐘。',
        note: '出發前往水族館。',
        checked: false,
        highlights: [
          { label: '行程備註', text: '退房完成，沿著東部海岸道路開往涉地可支方向', type: 'guide_tip' }
        ],
        drivingTip: '早晨沿海能見度高，路況順暢。'
      },
      {
        id: 'd6-2',
        time: '08:45 - 11:30',
        title: 'Aqua Planet Jeju 水族館',
        koreanName: '아쿠아플라넷 제주',
        category: 'spot',
        about: '亞洲規模最大之一，巨大主水槽與海洋劇場（先確認表演時間）。',
        naverMapUrl: 'https://naver.me/xiquOGa4',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Aqua+Planet+Jeju',
        note: '亞洲代表性巨型水族館，擁有長 23 公尺超大觀景窗與海底隧道。',
        checked: false,
        highlights: [
          { label: '重要須知', text: '入場先確認「海洋劇場表演」與「濟州傳統海女潛水秀」時間表', type: 'reservation' },
          { label: '必看絕景', text: '「濟州之海」巨幅主水槽，魔鬼魚與鯊魚悠游壯觀震撼', type: 'guide_tip' }
        ],
        drivingTip: '設有廣大停車場，臨近「涉地可支」白色燈塔。'
      },
      {
        id: 'd6-3',
        time: '11:45 - 13:00',
        title: '午餐：水族館美食街 或 城山區附近餐廳',
        koreanName: '아쿠아플라넷 푸드코트 / 성산 인근 식당',
        category: 'food',
        about: '水族館館內美食街提供韓式及多樣化簡餐。或是館外城山區有在地海鮮與海女料理餐廳。',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Aqua+Planet+Jeju+Food+Court+Seongsan+Restaurant',
        note: '水族館館內美食街提供韓式料理、炸豬排、冷麵等豐富簡餐選擇；或是至館外城山區品嚐在地海鮮與海女料理餐廳。',
        checked: false,
        highlights: [
          { label: '行程備註', text: '水族館館內美食街提供韓式及多樣化簡餐；或是館外城山區有在地海鮮與海女料理餐廳', type: 'guide_tip' },
          { label: '美食推薦', text: '水族館內用餐便捷省時；城山區可嚐海女現撈海鮮料理、鮑魚粥或海鮮砂鍋', type: 'must_eat' }
        ],
        drivingTip: '於水族館內用餐可直接停留在館內停車場；若至城山區餐廳，車程約 5～10 分鐘，餐廳周邊多有停車位。'
      },
      {
        id: 'd6-4',
        time: '13:15 - 14:45',
        title: 'Orrrn 咖啡廳',
        koreanName: '오른 (Orrrn Cafe)',
        category: 'cafe',
        about: '充滿地景藝術美感的咖啡廳，透過大片落地窗欣賞海景與秋芒。',
        naverMapUrl: 'https://naver.me/GJTilq26',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Orrrn+Cafe+Jeju',
        note: '濟州島建築大獎美學咖啡館，秋季窗外銀白秋芒隨海風搖曳。',
        checked: false,
        highlights: [
          { label: '建築美學', text: '清水模幾何斜面地景設計，全幅無死角蔚藍海景落地窗', type: 'guide_tip' },
          { label: '必點菜單', text: 'Orrrn 特調奶油拿鐵、當日現烤牛角可頌麵包', type: 'must_eat' }
        ],
        drivingTip: '附設專屬景觀停車位，午後陽光灑落拍照極美。'
      },
      {
        id: 'd6-5',
        time: '14:45 - 15:45',
        title: '車程往濟州市區',
        koreanName: '성산 → 제주시 탑동 (이동)',
        category: 'transport',
        about: '沿著公路跨區，一路開往濟州市區的飯店。',
        note: '由濟州東部城山跨區開回北部濟州市區，車程約 1 小時。',
        checked: false,
        highlights: [
          { label: '自駕路線', text: '走繁榮路 (Beonyeong-ro) 或 1132 沿海環島國道，一路順暢', type: 'guide_tip' }
        ],
        drivingTip: '定速巡航駕駛，注意濟州區間測速照相（請維持在速限 70-80 km/h 內）。'
      },
      {
        id: 'd6-6',
        time: '15:45 - 16:15',
        title: '濟州島惠斯勒飯店 Hotel Whistlelark Jeju (入住)',
        koreanName: '호텔 휘슬락 제주 (입실)',
        category: 'hotel',
        about: '抵達塔洞海邊的飯店（濟州島惠斯勒飯店，又稱「口哨雲雀酒店濟州」，地址：제주 제주시 서부두2길 26）。先辦理入住並停妥車輛，將行李安頓好，稍微休息一下。',
        naverMapUrl: 'https://naver.me/IGJyTQ0O',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel+Whistlelark+Jeju',
        note: '連續入住最後兩晚，飯店下樓就是塔洞海邊防波堤散步道。',
        checked: false,
        highlights: [
          { label: '飯店優勢', text: '直通塔洞海邊廣場，步行即可掃街東門市場與七星路', type: 'guide_tip' }
        ],
        drivingTip: '飯店備有機械式與平面停車場，停好後今晚完全不需再開車！'
      },
      {
        id: 'd6-7',
        time: '16:15 - 18:15',
        title: '東門市場 (第一回合)',
        koreanName: '동문재래시장 (1차 탐방)',
        category: 'shopping',
        about: '從飯店「步行」前往市場，毫無負擔地採買石頭爺爺周邊、橘子果乾等在地伴手禮，買完直接提回飯店。',
        naverMapUrl: 'https://naver.me/xeAfYFPG',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Dongmun+Traditional+Market+Jeju',
        note: '步行約 10-12 分鐘，買完伴手禮直接拎回房間放，輕鬆無比。',
        checked: false,
        highlights: [
          { label: '必買伴手禮', text: '石頭爺爺香氛蠟燭、橘子巧克力薄片、純天然濟州柑橘乾', type: 'must_buy' },
          { label: '市場攻略', text: '夜市攤位 8 號出口下午 6 點熱鬧開市，火焰秀超嗨', type: 'guide_tip' }
        ],
        drivingTip: '由飯店步行來回即可，完全避開市場周邊塞車與找停車位惡夢。'
      },
      {
        id: 'd6-8',
        time: '18:30 - 20:00',
        title: '晚餐：BHC / 橋村炸雞',
        koreanName: 'BHC치킨 or 교촌치킨 (탑동점)',
        category: 'food',
        about: '可現場吃，也可外帶回飯店悠閒享用。',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=BHC+Chicken+Tapdong+Jeju',
        note: '塔洞周邊即有 BHC 與橋村門市，外帶回飯店邊看電視邊啃炸雞最過癮！',
        checked: false,
        highlights: [
          { label: '必吃美食', text: 'BHC 起司炸雞 (뿌링클 Bburingkle) 沾優格起司醬', type: 'must_eat' },
          { label: '必吃美食', text: '橋村經典蜂蜜香脆炸雞 (Honey Combo) 配爽脆醃蘿蔔', type: 'must_eat' }
        ],
        drivingTip: '外帶回飯店房間配冰涼飲料與無敵海景，極致享受。'
      }
    ]
  },
  {
    dayNumber: 7,
    date: '11/01',
    dayOfWeek: '日',
    fullDateStr: '2026.11.01 (週日)',
    title: '倫敦貝果名店 · 思連伊仙境與青橘涼麵',
    area: '東北海岸 · 舊左 · 朝天 · 濟州市區',
    summary: '早起 Catchtable 抽號碼牌朝聖倫敦貝果博物館！逛文青選物店 Object，漫步仙氣迷濛的思連伊高聳紅岳杉林步道，午後大啖酸甜青橘蕎麥涼麵與市區七星路大採購。',
    hotelTonight: {
      name: '濟州島惠斯勒飯店 Hotel Whistlelark Jeju',
      koreanName: '호텔 휘슬락 제주 (連住第 2 晚)',
      area: '濟州市塔洞海邊',
      address: '제주 제주시 서부두2길 26',
      naverMapUrl: 'https://naver.me/IGJyTQ0O'
    },
    items: [
      {
        id: 'd7-1',
        time: '08:00 - 08:45',
        title: '出發 → 東北海岸',
        koreanName: '동북해안 드라이브 출발',
        category: 'transport',
        about: '建議 8 點出門，避開熱門貝果排隊車潮。',
        note: '記得先上 catchtable 抽號碼牌',
        checked: false,
        highlights: [
          { label: '重要預約', text: '早上 09:00 開放 Catchtable 線上/現場抽號碼牌，務必提早關注', type: 'reservation' }
        ],
        drivingTip: '週日早晨東北海岸車潮漸增，早出發早停妥車輛。'
      },
      {
        id: 'd7-2',
        time: '08:45 - 10:30',
        title: '倫敦貝果博物館 濟州店',
        koreanName: '런던 베이글 뮤지엄 제주점',
        category: 'food',
        about: '超人氣英倫復古風貝果名店，先抽號碼牌並享用豐富早午餐。',
        naverMapUrl: 'https://naver.me/Gy3nEhZX',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=London+Bagel+Museum+Jeju',
        note: '倫敦貝果免費停車場：https://naver.me/Gy3nEhZX',
        checked: false,
        highlights: [
          { label: '必吃美食', text: '招牌蔥乳酪貝果 (Spring Onion Pretzel Bagel)', type: 'must_eat' },
          { label: '必吃美食', text: '磚塊起司蜂蜜貝果 (Brick Lane)、濃郁松露蘑菇濃湯', type: 'must_eat' },
          { label: '停車資訊', text: '對面設有專屬免費停車場（過馬路請走斑馬線）', type: 'guide_tip' }
        ],
        drivingTip: '臨海英倫復古莊園，地下一樓面海座位區視野開闊絕美。'
      },
      {
        id: 'd7-3',
        time: '10:30 - 11:15',
        title: 'Object 文創店',
        koreanName: '오브젝트 제주점 & 선글라스개 전문점',
        category: 'shopping',
        about: '就在貝果店旁，順路採買質感滿分的韓國文青設計選物。隔壁也有線條小狗專賣店。',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Object+Jeju',
        note: '韓國最著名的文創雜貨品牌 Object 濟州獨立分店，隔壁還有超紅線條小狗 (Maltese)！',
        checked: false,
        highlights: [
          { label: '必買伴手禮', text: '韓國原創設計師文具、線條小狗玩偶鑰匙圈、療癒織品', type: 'must_buy' }
        ],
        drivingTip: '步行自貝果店 1 分鐘即可抵達，無需移車。'
      },
      {
        id: 'd7-4',
        time: '11:50 - 13:00',
        title: '思連伊森林步道',
        koreanName: '사려니숲길 (붉은오름 입구)',
        category: 'nature',
        about: '導航至「紅岳入口(붉은오름)」，漫步在仙氣繚繞的高聳杉木林中。',
        naverMapUrl: 'https://naver.me/53lKPuY7',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Saryeoni+Forest+Path+Red+Oreum',
        note: '切記務必導航至「紅岳入口 (붉은오름)」，此處木棧道平坦無階梯且杉樹最為密集。',
        checked: false,
        highlights: [
          { label: '重要秘笈', text: '導航千萬別選錯入口！唯一推薦「紅岳入口(붉은오름)」最好走最仙', type: 'guide_tip' },
          { label: '自然療癒', text: '高聳挺拔的日本柳杉林，空氣中瀰漫濃烈芬多精清香', type: 'guide_tip' }
        ],
        drivingTip: '路旁有劃設停車格，紅岳入口旁即是步道起點，極為便利。'
      },
      {
        id: 'd7-5',
        time: '13:45 - 14:45',
        title: '午餐：Dotoree Kitchen',
        koreanName: '도토리키친 (청귤소바)',
        category: 'food',
        about: '青橘蕎麥涼麵，鋪滿青橘切片酸甜開胃，爽口解膩完全不辣。',
        naverMapUrl: 'https://naver.me/GgWkousC',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Dotoree+Kitchen+Jeju',
        note: '以濟州青橘入菜的日韓融合和風食堂，擺盤清爽吸睛。',
        checked: false,
        highlights: [
          { label: '必吃美食', text: '滿滿薄切青橘蕎麥冷麵 (청귤소바)，微酸回甘冰涼沁心', type: 'must_eat' },
          { label: '必點菜單', text: '自製手作黑豬肉核桃炸肉餅、豆皮壽司套餐', type: 'must_eat' }
        ],
        drivingTip: '店周圍有專用車位，店內日系木質裝潢溫馨宜人。'
      },
      {
        id: 'd7-6',
        time: '15:00 - 18:00',
        title: '七星路商圈 & 東門市場',
        koreanName: '칠성로 쇼핑거리 & 동문시장',
        category: 'shopping',
        about: '從飯店步行逛街，把前一天沒補齊的伴手禮與美妝服飾一次掃齊。',
        naverMapUrl: 'https://naver.me/GNW6TbAd',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Chilseong-ro+Shopping+Street+Jeju',
        note: '七星路步行街有 Olive Young 旗艦店、各國潮流運動品牌與濟州土產街。',
        checked: false,
        highlights: [
          { label: '必買伴手禮', text: 'Olive Young 補貨韓國熱門面膜、Torriden玻尿酸、棉片', type: 'must_buy' },
          { label: '東門掃貨', text: '濟州漢拏山蜂蜜、柑橘酒、黑豬肉肉乾、刺繡吊飾', type: 'must_buy' }
        ],
        drivingTip: '由飯店步行直達，隨買隨送回房間放下，徒步逛街最無壓力。'
      },
      {
        id: 'd7-7',
        time: '18:30 - 19:30',
        title: '晚餐：市區排骨湯 / 炸醬麵',
        koreanName: '제주시내 갈비탕 or 중화요리 자장면',
        category: 'food',
        about: '享用熱騰騰的韓式牛肉排骨湯 (갈비탕) 或甜鹹適口的炸醬麵。',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Jeju+City+Galbitang',
        note: '熱呼呼的牛大骨燉湯，湯頭清甜入味，牛肉燉至骨肉分離。',
        checked: false,
        highlights: [
          { label: '必吃美食', text: '大王牛排骨湯 (왕갈비탕)，附贈冬粉與白飯，暖胃去寒', type: 'must_eat' },
          { label: '必吃美食', text: '老字號韓式炸醬麵配香酥糖醋肉 (탕수육)', type: 'must_eat' }
        ],
        drivingTip: '於七星路或塔洞商圈內步行品嚐，放鬆享受濟州倒數第二晚。'
      }
    ]
  },
  {
    dayNumber: 8,
    date: '11/02',
    dayOfWeek: '一',
    fullDateStr: '2026.11.02 (週一)',
    title: '彩虹海岸 · 頂級烤肉與歸賦',
    area: '濟州市區 · 道頭洞 · 龍潭 · 機場',
    summary: '最後一天悠閒漫遊！打卡道頭洞七彩防波塊，品嚐濟州第一烤肉「豚似豚」香脆厚黑豬，大型超市最後掃貨，滿油順暢還車，搭機滿載返台！',
    hotelTonight: {
      name: '搭機返台 (IT671 22:00 抵達高雄)',
      koreanName: '오늘 귀국 (숙박 없음)',
      area: '濟州國際機場 → 高雄小港 (22:00 抵達)',
      naverMapUrl: 'https://naver.me/52TM1l2n'
    },
    items: [
      {
        id: 'd8-1',
        time: '09:30 - 10:00',
        title: '濟州島惠斯勒飯店退房，行李上車',
        koreanName: '호텔 휘슬락 체크아웃 & 짐 적재',
        category: 'transport',
        about: '辦理濟州島惠斯勒飯店退房手續，開啟最後一天的市區漫遊。',
        note: '收拾完所有行李並清點護照、國際駕照與隨身重要物品。',
        checked: false,
        highlights: [
          { label: '檢查清單', text: '護照正本、國際駕照、退稅單據、行動電源勿放托運', type: 'guide_tip' }
        ],
        drivingTip: '將大件行李全數穩固置放於 KONA 後車廂。'
      },
      {
        id: 'd8-2',
        time: '10:15 - 11:30',
        title: '道頭洞彩虹海岸公路',
        koreanName: '도두동 무지개 해안도로',
        category: 'spot',
        about: '沿著海岸彩色防護石塊散步、拍照吹海風，感受悠閒氛圍。',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Dodu-dong+Rainbow+Coastal+Road+Jeju',
        note: '彩色方塊石墩綿延海邊，一旁是蔚藍大海，是告別濟州的標誌性打卡地。',
        checked: false,
        highlights: [
          { label: '必拍絕景', text: '坐在紅橙黃綠藍靛紫七彩石墩上，背後是大海與飛機降落', type: 'guide_tip' }
        ],
        drivingTip: '海岸公路設有多處專屬避車灣與路邊停車格。'
      },
      {
        id: 'd8-3',
        time: '11:45 - 13:00',
        title: '市區海景咖啡廳',
        koreanName: '용담 해안도로 오션뷰 카페',
        category: 'cafe',
        about: '找間喜愛的臨海咖啡館坐坐，享受旅途最後的放空時光。',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Yongdam+Coastal+Road+Cafe+Jeju',
        note: '龍潭海岸道路臨海咖啡館林立，邊喝咖啡邊近距離看客機起降。',
        checked: false,
        highlights: [
          { label: '必點菜單', text: '冰美式、濟州胡蘿蔔蛋糕、艾草奶油磅蛋糕', type: 'must_eat' }
        ],
        drivingTip: '咖啡廳多附設免費停車場，愜意欣賞濟州最後的蔚藍海景。'
      },
      {
        id: 'd8-4',
        time: '13:30 - 15:00',
        title: '午餐：豚似豚 (돈사돈) 本店',
        koreanName: '돈사돈 본점 (흑돼지 근고기)',
        category: 'food',
        about: '頂級濟州黑豬肉烤肉！店員代烤至全熟酥脆多汁，完美收尾。',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Donsadon+Main+Jeju',
        note: '全濟州乃至全韓國最具盛名的黑豬肉殿堂，GD 等眾多頂級藝人常客！',
        checked: false,
        highlights: [
          { label: '殿堂級美食', text: '厚切近肉 (근고기)，外表焦香酥脆、咬下肉汁瞬間噴發', type: 'must_eat' },
          { label: '職人代烤', text: '由專屬店員熟練以炭火桌邊現烤，掌握最完美的熟度', type: 'guide_tip' },
          { label: '必吃菜單', text: '沾滾燙辣味鯷魚醬、必點濃郁黑豬肉泡菜湯 (김치찌개)', type: 'must_eat' }
        ],
        drivingTip: '本店設有大型專用停車場，下午時段人潮較少，用餐節奏極佳。'
      },
      {
        id: 'd8-5',
        time: '15:15 - 16:15',
        title: 'E-mart / Lotte Mart 超市',
        koreanName: '이마트 제주점 or 롯데마트 제주점',
        category: 'shopping',
        about: '把握起飛前最後一刻前往大型超市採買零食伴手禮，直接放進行李箱。',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=E-mart+Jeju',
        note: '距離機場與租車站僅 10 分鐘車程，採買完畢在後車廂直接開箱打包。',
        checked: false,
        highlights: [
          { label: '必買伴手禮', text: 'Market O 濟州抹茶布朗尼、黑豬肉風味泡麵、生柑橘果汁', type: 'must_buy' },
          { label: '打包訣竅', text: '買完後在超市推車旁直接把零食裝入大行李箱，免得機場手忙腳亂', type: 'guide_tip' }
        ],
        drivingTip: '超市備有大型室內停車場，購物滿額折抵停車費。'
      },
      {
        id: 'd8-6',
        time: '16:20 - 16:50',
        title: '樂天租車 (還車)',
        koreanName: '롯데렌터카 제주오토하우스 반납',
        category: 'transport',
        about: '加滿油後歸還車輛，搭乘租車處免費接駁車前往機場。',
        naverMapUrl: 'https://naver.me/5oE5y0S5',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Lotte+Rent-a-Car+Jeju+Auto+House',
        note: '還車前請至租車站附近的 GS Caltex 或 SK 加油站將油箱加滿（汽油 휘발유）。',
        checked: false,
        highlights: [
          { label: '重要加油', text: 'KONA 請加黃色油槍「汽油 (휘발유 / Gasoline)」，保留收據', type: 'guide_tip' },
          { label: '免費接駁', text: '驗車約 5-10 分鐘，隨後搭乘樂天專用粉紅大巴直接送抵機場出發層', type: 'guide_tip' }
        ],
        drivingTip: '取下所有車內個人物品、行車記錄器卡片，清空置物箱與後車廂。'
      },
      {
        id: 'd8-7',
        time: '17:00 - 20:20',
        title: '濟州國際機場 (報到退稅，20:20 起飛返台)',
        koreanName: '제주국제공항 국제선 (IT671 귀국)',
        category: 'flight',
        about: '提前約 3.3 小時抵達辦理報到手續與退稅，搭乘 20:20 IT671 返程（預計 22:00 抵達高雄小港機場）。',
        googleMapUrl: 'https://www.google.com/maps/search/?api=1&query=Jeju+International+Airport',
        note: '航班 IT671 於 20:20 起飛返台，預計 22:00 抵達高雄，圓滿結束 8 天 7 夜精彩濟州自駕遊！',
        checked: false,
        highlights: [
          { label: '航班資訊', text: '搭乘 IT671 班機，20:20 起飛 → 22:00 抵達高雄', type: 'reservation' },
          { label: '退稅流程', text: '至 3F 出發大廳退稅機台掃描護照與退稅條碼，安檢後領取退稅現金', type: 'guide_tip' }
        ],
        drivingTip: '車輛已順利歸還，一身輕鬆通關登機，帶著滿滿戰利品與美好回憶回家！'
      }
    ]
  }
];

export const INITIAL_EXPENSES = [
  {
    id: 'exp-1',
    title: '樂天租車全險費用 (KONA 4WD)',
    amountKrw: 320000,
    category: 'transport' as const,
    dayNumber: 2,
    createdAt: '2026-10-27 09:30',
    paidBy: '公費',
    note: '已含 CDW 完全免責全險'
  },
  {
    id: 'exp-2',
    title: '川鰻魚炭烤午餐',
    amountKrw: 86000,
    category: 'food' as const,
    dayNumber: 2,
    createdAt: '2026-10-27 13:00',
    paidBy: '公費',
    note: '雙人份烤白鰻'
  },
  {
    id: 'exp-3',
    title: 'UMU 石花菜布丁與肥皂',
    amountKrw: 38000,
    category: 'shopping' as const,
    dayNumber: 2,
    createdAt: '2026-10-27 15:30',
    paidBy: '蔡小豬',
    note: '布丁3個+布丁肥皂1入'
  },
  {
    id: 'exp-4',
    title: '春心之家 烤無骨白帶魚',
    amountKrw: 92000,
    category: 'food' as const,
    dayNumber: 3,
    createdAt: '2026-10-28 12:30',
    paidBy: '公費',
    note: '特大烤無骨白帶魚套餐'
  },
  {
    id: 'exp-5',
    title: '山茶花之丘雙人門票',
    amountKrw: 24000,
    category: 'tickets' as const,
    dayNumber: 3,
    createdAt: '2026-10-28 16:15',
    paidBy: '兔子凌',
    note: '12,000 韓元 x 2 人'
  }
];
