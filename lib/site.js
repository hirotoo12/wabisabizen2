// =============================================================
//  侘び寂び禅 / Wabi Sabi Zen  サイト設定ファイル
//  ★ ここだけ書き換えれば、サイト全体（日本語＋英語）に反映されます ★
// =============================================================

export const site = {
  // ---- 基本情報 --------------------------------------------------
  name: "侘び寂び禅",
  nameEn: "Wabi Sabi Zen",
  nameRomaji: "WABI・SABI・ZEN",
  concept: "1970s Japan × Timeless Beauty",
  tagline: "懐かしいのに、新しい。",
  taglineEn: "Nostalgic, yet new.",
  subTagline: "昼は古民家カフェ、夜は昭和レトロミュージックシーシャバー。",
  subTaglineEn:
    "A traditional machiya café by day, a 1970s retro-music shisha bar by night.",
  heroEn:
    "Stillness, light, aroma, and space — a place in Kanazawa to immerse yourself in a truly Japanese atmosphere.",

  // Google検索に出る説明文（約120字）
  description:
    "金沢・築80年の町家（Machiya）を活かした古民家カフェ＆シーシャバー「侘び寂び禅」。昼は宇治抹茶や金沢金箔スイーツを楽しむ和カフェ、夜は昭和レトロミュージックとシーシャのバーへ。1970s Japan × Timeless Beauty。Wi-Fi完備。",

  // 「5月OPEN予定」などの告知バッジ。表示したくなければ "" のまま
  openBadge: "",

  // 公開後のURL（Vercelで決まったドメインに書き換え）
  url: "https://wabisabizen.vercel.app",

  // ---- 連絡先・所在地 -------------------------------------------
  address: {
    postalCode: "920-0996",
    region: "石川県",
    city: "金沢市",
    street: "油車49",
    full: "石川県金沢市油車49",
    en: "49 Aburaguruma, Kanazawa, Ishikawa 920-0996, Japan",
  },
  tel: "076-216-5056",
  telIntl: "+81 76-216-5056",
  email: "wabisabizen18@gmail.com",

  // Googleマップ埋め込み（住所から自動生成・そのまま使えます）
  mapEmbedSrc:
    "https://www.google.com/maps?q=49+Aburaguruma,+Kanazawa,+Ishikawa+920-0996,+Japan&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=49+Aburaguruma,+Kanazawa,+Ishikawa+920-0996,+Japan",
  // 緯度・経度（★概算です。Googleマップでピンを右クリック→正確な数値に）
  geo: { lat: 36.5583, lng: 136.6516 },

  // ---- 営業時間 --------------------------------------------------
  hours: [
    { label: "カフェ", labelEn: "Café", time: "10:00 – 18:00" },
    { label: "シーシャバー", labelEn: "Shisha Bar", time: "18:00 – 25:00" },
    { label: "定休日", labelEn: "Open", time: "毎日営業", timeEn: "Open daily" },
  ],
  // 構造化データ用（SEO）。25:00は翌1:00として closes:"01:00"
  openingHoursSpec: [
    { days: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"], opens: "10:00", closes: "18:00" },
    { days: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"], opens: "18:00", closes: "01:00" },
  ],
  priceRange: "¥¥",

  // ---- ご利用案内（案内セクションに表示） -----------------------
  info: [
    { k: "お支払い", kEn: "Payment", v: "現金 / クレジット / IC / QR", vEn: "Cash / Credit / IC / QR" },
    { k: "Wi-Fi", kEn: "Wi-Fi", v: "あり", vEn: "Available" },
    { k: "対応言語", kEn: "Languages", v: "日本語 / 英語", vEn: "Japanese / English" },
    { k: "ご予約", kEn: "Reservation", v: "予約なしOK（週末は事前連絡推奨）", vEn: "Walk-ins welcome" },
    { k: "駐車場", kEn: "Parking", v: "なし（近くにコインP多数）", vEn: "None (paid parking nearby)" },
    { k: "お子さま", kEn: "Children", v: "昼は可 / 夜はNG", vEn: "Daytime OK / Night NG" },
    { k: "喫煙", kEn: "Smoking", v: "昼は完全禁煙 / 夜は電子タバコのみ", vEn: "Non-smoking day / e-cig only at night" },
    { k: "年齢制限", kEn: "Age", v: "18:00以降は20歳以上", vEn: "Ages 20+ after 18:00" },
  ],

  // ---- SNS -------------------------------------------------------
  sns: {
    instagram: "https://www.instagram.com/wabi.sabizen",
    line: "",
    hotpepper: "",
    tabelog: "",
  },

  // ---- About（コンセプト文） ------------------------------------
  about: [
    "侘び寂び禅は、昭和1970年代の空気と、日本の美意識を大切にした空間です。",
    "昼は、やわらかな光と静けさのなかで抹茶や和菓子を楽しむ古民家カフェ。",
    "夜は、昭和歌謡とアナログレコードが流れるレトロミュージックシーシャバー。",
    "ただ飲食をするだけでなく、時間そのものを味わう場所へ。",
  ],
  aboutEn:
    "Wabi Sabi Zen is a space inspired by 1970s Japan and the beauty of Japanese aesthetics. A quiet machiya café by day, a retro-music shisha bar by night — a place to experience not just food and drink, but time itself.",

  // 選ばれる理由（4点）
  why: [
    { ja: "古民家ならではの静けさを感じられる", en: "Feel the stillness of a traditional Japanese house" },
    { ja: "昼と夜で、まったく違う表情を楽しめる", en: "Two completely different moods, day and night" },
    { ja: "抹茶・和菓子・昭和音楽・シーシャという珍しい組み合わせ", en: "A rare mix of matcha, wagashi, retro music and shisha" },
    { ja: "観光の喧騒から離れ、記憶に残る時間を過ごせる", en: "A memorable moment away from the crowds" },
  ],

  // ---- ローカルストーリー（建物の歴史・名物） -----------------
  story: {
    building: [
      "この建物は、築80年以上の町家（Machiya）。",
      "もとは町の子どもたちが通った駄菓子屋でした。",
      "受け継いだ柱・土壁・格子戸をそのままに、和モダンの空間へ生まれ変わらせました。",
    ],
    buildingEn:
      "Once a neighborhood candy shop, this Kanazawa machiya of over 80 years keeps its original beams, earthen walls and lattice doors.",
    signatures: [
      { k: "宇治抹茶", title: "宇治抹茶ドリンク", body: "本場・宇治の抹茶を使った、香り高い抹茶ソーダやラテ。" },
      { k: "金沢金箔", title: "金沢金箔スイーツ", body: "金沢名物の金箔をあしらった、写真映えする華やかな一杯。" },
      { k: "昭和レトロ", title: "昭和レトロシーシャ", body: "アナログレコードと昭和歌謡が流れる、夜だけの空気。" },
    ],
  },

  // ---- 昼カフェ --------------------------------------------------
  day: {
    lead: "禅と抹茶の香り、やわらかな光、余白のある空間。昼は完全禁煙。金沢観光の合間に、気持ちを整える時間を。",
    leadEn: "Matcha aroma, soft light and open space. Non-smoking. A calm break during your time in Kanazawa.",
    recommend: "ひとり旅 / カップル / カフェ巡り / 静かな場所が好きな方",
    recommendEn: "Solo travelers / Couples / Café lovers / Quiet seekers",
    features: [
      { k: "抹茶", title: "宇治抹茶の和カフェ", body: "宇治抹茶ドリンクや金箔スイーツ。金沢の抹茶カフェとして、写真映えする一杯を。" },
      { k: "町家", title: "築80年の古民家空間", body: "町家（Machiya）の柱や土壁に包まれる、金沢の古民家カフェ。" },
      { k: "ノマド", title: "Wi-Fiで作業も", body: "Wi-Fi完備。金沢でノマドワークや一人時間を過ごせるカフェです。" },
    ],
  },

  // ---- 夜バー ----------------------------------------------------
  night: {
    lead: "昭和歌謡とアナログレコード、薄暗い灯り、ゆっくり流れる夜。音楽・香り・会話・余韻に、深く浸る時間を。",
    leadEn: "Japanese retro songs on vinyl, warm low lighting, a slow night. Sink into music, aroma and conversation.",
    recommend: "大人の旅行者 / 音楽好き / レトロ好き / 金沢の夜を楽しみたい方",
    recommendEn: "Adult travelers / Music & retro lovers / A special night in Kanazawa",
    features: [
      { k: "昭和レトロ", title: "レトロミュージック", body: "昭和歌謡とアナログレコードが流れる、金沢の夜カフェ／バー。" },
      { k: "シーシャ", title: "シーシャバー", body: "70種以上のフレーバー。ニコチンフリーも。金沢のシーシャ・シーシャバー。" },
      { k: "町家バー", title: "古民家バーの静けさ", body: "町家ならではの落ち着き。金沢の古民家バーで大人の時間を。" },
    ],
  },

  // ---- メニュー --------------------------------------------------
  menu: {
    day: {
      heading: "昼 / Day Café",
      note: "10:00 – 18:00　完全禁煙",
      groups: [
        {
          items: [
            { name: "抹茶ソーダセット", nameEn: "Matcha Soda Set", price: "¥1,650", desc: "本日の甘菓子付き" },
            { name: "金箔抹茶ソーダ", nameEn: "Gold Leaf Matcha Soda", price: "¥880", desc: "金箔なしも可" },
            { name: "金箔抹茶クリームソーダ", nameEn: "Gold Leaf Matcha Cream Soda", price: "¥1,100", desc: "" },
            { name: "金箔ほうじ茶クリームソーダ", nameEn: "Gold Leaf Hojicha Cream Soda", price: "¥1,100", desc: "" },
            { name: "抹茶ラテ / ほうじ茶ラテ", nameEn: "Matcha / Hojicha Latte", price: "¥880", desc: "" },
            { name: "コーラ / ジンジャーエール / ピーチ", nameEn: "Coke / Ginger Ale / Peach", price: "¥680", desc: "" },
            { name: "コーラ / ソーダフロート", nameEn: "Coke / Soda Float", price: "¥980", desc: "" },
            { name: "アメリカーノ（HOT/ICE）", nameEn: "Americano", price: "¥780", desc: "" },
            { name: "アイスコーヒー", nameEn: "Iced Coffee", price: "¥600", desc: "" },
            { name: "ノンアルコールカクテル", nameEn: "Non-Alcoholic Cocktails", price: "¥660〜", desc: "" },
          ],
        },
      ],
    },
    night: {
      heading: "夜 / Night Bar",
      note: "18:00 – 25:00　20歳以上",
      groups: [
        {
          title: "シーシャ",
          titleEn: "Shisha",
          items: [
            { name: "シーシャ", nameEn: "Shisha", price: "¥2,750", desc: "" },
            { name: "プレミアムシーシャ", nameEn: "Premium", price: "+¥1,100", desc: "" },
            { name: "アイスホース", nameEn: "Ice Hose", price: "+¥550", desc: "" },
          ],
        },
        {
          title: "ドリンク",
          titleEn: "Drink",
          items: [
            { name: "ハイボール", nameEn: "Highball", price: "¥700〜", desc: "響・山崎・白州 等の和ウイスキー" },
            { name: "各種カクテル", nameEn: "Cocktails", price: "¥700〜", desc: "" },
            { name: "日本酒", nameEn: "Sake", price: "¥1,300〜", desc: "" },
          ],
        },
      ],
      // シーシャのフレーバー
      flavorsLabel: "フレーバー（70種以上・ニコチンフリーあり）",
      flavors: ["抹茶", "柚子", "ほうじ茶", "檜と禅", "ほか多数"],
    },
  },

  // ---- よくある質問（FAQ・SEOにも有効） -------------------------
  faq: [
    {
      q: "予約は必要ですか？",
      qEn: "Do I need a reservation?",
      a: "ご予約なしでもご来店いただけます。週末や混雑時は事前のご連絡をおすすめします。",
      aEn: "Walk-ins are welcome. We recommend contacting us in advance on weekends and busy times.",
    },
    {
      q: "昼カフェだけの利用はできますか？",
      qEn: "Can I visit only for the daytime café?",
      a: "はい。10:00〜18:00はカフェとしてご利用いただけます。",
      aEn: "Yes, you can visit as a café from 10:00 to 18:00.",
    },
    {
      q: "夜、シーシャを吸わなくても入れますか？",
      qEn: "Can I enter the night bar without shisha?",
      a: "1ドリンク制＋チャージ550円でご利用いただけます。",
      aEn: "Yes, with a one-drink minimum and a ¥550 cover charge.",
    },
    {
      q: "夜は年齢制限がありますか？",
      qEn: "Is there an age restriction at night?",
      a: "18:00以降は20歳以上のご利用となります。",
      aEn: "After 18:00, guests must be 20 or older.",
    },
    {
      q: "昼は喫煙できますか？",
      qEn: "Is smoking allowed during the day?",
      a: "昼は完全禁煙です。18:00以降も店内は電子タバコのみとさせていただいております。",
      aEn: "Non-smoking during the day. After 18:00, only e-cigarettes are allowed inside.",
    },
    {
      q: "英語で対応できますか？",
      qEn: "Do you have English support?",
      a: "簡単な英語でご案内できます。",
      aEn: "Basic English support is available.",
    },
  ],
};
