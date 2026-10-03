// MUM ORGANIC - Multi-Language & Dark/Light Mode E-Commerce Engine
// Brand: MUM ORGANIC | WhatsApp: +92 339 5691212

// Current Language & Theme State
let currentLang = localStorage.getItem('mum_lang') || 'en';
let currentTheme = localStorage.getItem('mum_theme') || 'light';

const PRODUCTS_DATA = {
  en: [
    {
      id: 'mum-500g',
      name: 'Starter Tasting Pack (500g)',
      shortName: '500g Glass Jar',
      weight: '500g',
      weightKg: 0.5,
      price: 2250,
      originalPrice: 2500,
      image: 'assets/hero_jar_500g.jpg',
      badge: 'Official Sticker Pack',
      badgeType: 'secondary',
      servings: '~35-40 Servings',
      shelfLife: '12 Months',
      packaging: 'Airtight Heritage Glass Jar',
      description: 'Freshly churned traditional Bilona ghee with official arched MUM ORGANIC seal. 100% pure golden danedar texture from grass-fed milk.',
      highlights: ['Traditional Bilona Churned', 'Grass-Fed Cow Milk', 'Packaged in Taxila, Punjab', '100% Pure Wax Seal'],
      addToCartText: 'Add to Cart',
      whatsAppOrderText: '1-Click WhatsApp Order'
    },
    {
      id: 'mum-1kg',
      name: 'Heritage Family Pack (1kg)',
      shortName: '1kg Heritage Jar',
      weight: '1kg',
      weightKg: 1.0,
      price: 4250,
      originalPrice: 4800,
      image: 'assets/jar_1kg.jpg',
      badge: '⭐ Best Seller / Free Delivery Included',
      badgeType: 'primary',
      servings: '~75-80 Servings',
      shelfLife: '12 Months',
      packaging: 'Gold-Embossed Glass Jar',
      description: 'Our signature 1kg family pack (PKR 4,000 + PKR 250 courier included for 100% Free Nationwide Delivery). Slow fire handi clarified for royal nutty aroma.',
      highlights: ['FREE Nationwide Delivery Included', 'Traditional Bilona Ghee', 'Rich in Vitamins A, D, E, K', 'Packaged in Taxila, Punjab'],
      addToCartText: 'Add to Cart',
      whatsAppOrderText: '1-Click WhatsApp Order'
    },
    {
      id: 'mum-2kg',
      name: "Grandma's Kitchen Bulk Tub (2kg)",
      shortName: '2kg Grandma Tub',
      weight: '2kg',
      weightKg: 2.0,
      price: 8000,
      originalPrice: 9400,
      image: 'assets/tub_2kg.jpg',
      badge: '🔥 Maximum Savings (Save PKR 1,400)',
      badgeType: 'special',
      servings: '~160 Servings',
      shelfLife: '12 Months',
      packaging: 'Heavy Glass Family Jar',
      description: 'For traditional homes that cook, fry, and make parathas in genuine desi ghee daily. Free delivery included + Free handcrafted Sheesham wooden spoon.',
      highlights: ['FREE Handmade Wooden Spoon', 'FREE Express Delivery Included', 'Maximum Cost-per-Gram Savings', '100% Pure Bilona Recipe'],
      addToCartText: 'Add to Cart',
      whatsAppOrderText: '1-Click WhatsApp Order'
    }
  ],
  ur: [
    {
      id: 'mum-500g',
      name: 'اسٹارٹر ٹیسٹنگ جار (500 گرام)',
      shortName: '500 گرام شیشے کا جار',
      weight: '500 گرام',
      weightKg: 0.5,
      price: 2250,
      originalPrice: 2500,
      image: 'assets/hero_jar_500g.jpg',
      badge: 'آفیشل اسٹیکر پیک',
      badgeType: 'secondary',
      servings: '~35-40 سرونگز',
      shelfLife: '12 ماہ',
      packaging: 'ایئر ٹائٹ ہیریٹیج شیشے کا جار',
      description: 'تازہ مکھن سے بلونا طریقہ پر تیار کردہ دیسی گھی۔ سنہری دانے دار ساخت اور قدرتی خوشبو سے بھرپور۔ خالص روایتی ذائقہ آزمانے کے لیے بہترین۔',
      highlights: ['روایتی بلونا طریقہ سے تیار', 'گھاس چرنے والی گائے کا خالص دودھ', 'ٹیکسلا پنجاب میں تیار و پیکنگ', '100٪ خالص گولڈ سیل'],
      addToCartText: 'کارٹ میں شامل کریں',
      whatsAppOrderText: 'واٹس ایپ پر 1-کلک آرڈر'
    },
    {
      id: 'mum-1kg',
      name: 'ہیریٹیج فیملی پیک (1 کلوگرام)',
      shortName: '1 کلو گرام ہیریٹیج جار',
      weight: '1 کلوگرام',
      weightKg: 1.0,
      price: 4250,
      originalPrice: 4800,
      image: 'assets/jar_1kg.jpg',
      badge: '⭐ سب سے مقبول / مفت ڈلیوری شامل',
      badgeType: 'primary',
      servings: '~75-80 سرونگز',
      shelfLife: '12 ماہ',
      packaging: 'گولڈ ایمباسڈ شیشے کا جار',
      description: 'پاکستانی گھرانوں کا سب سے پسندیدہ 1 کلو پیک (4000 روپے گھی + 250 روپے ڈلیوری شامل تاکہ پورے پاکستان میں مفت ڈلیوری حاصل ہو)۔ مٹی کی ہانڈی میں تیار۔',
      highlights: ['ملک بھر میں مفت ایکسپریس ڈلیوری شامل', 'روایتی بلونا دیسی گھی', 'وٹامنز A, D, E, K سے بھرپور', 'ٹیکسلا پنجاب کا خالص نذرانہ'],
      addToCartText: 'کارٹ میں شامل کریں',
      whatsAppOrderText: 'واٹس ایپ پر 1-کلک آرڈر'
    },
    {
      id: 'mum-2kg',
      name: 'دادی جان کچن بلک پیک (2 کلوگرام)',
      shortName: '2 کلو گرام فیملی پیک',
      weight: '2 کلوگرام',
      weightKg: 2.0,
      price: 8000,
      originalPrice: 9400,
      image: 'assets/tub_2kg.jpg',
      badge: '🔥 سب سے بڑی بچت (بچائیں PKR 1,400)',
      badgeType: 'special',
      servings: '~160 سرونگز',
      shelfLife: '12 ماہ',
      packaging: 'مضبوط فیملی گلاس جار',
      description: 'ان روایتی گھروں کے لیے جہاں روزانہ پراٹھے اور سالن خالص دیسی گھی میں بنتے ہیں۔ مفت ڈلیوری + ساتھ میں شیشم کا لکڑی کا چمچ بالکل مفت۔',
      highlights: ['شیشم کا روایتی چمچ مفت', 'مفت ایکسپریس ڈلیوری شامل', 'فی گرام سب سے زیادہ بچت', '100٪ خالص بلونا دیسی گھی'],
      addToCartText: 'کارٹ میں شامل کریں',
      whatsAppOrderText: 'واٹس ایپ پر 1-کلک آرڈر'
    }
  ]
};

// UI Translations Dictionary
const TRANSLATIONS = {
  en: {
    // Nav & Top Bar
    announcement: '🚚 FREE Nationwide Delivery on Orders of 1kg & Above | 100% Money-Back Purity Guarantee',
    tagline_urdu: '"ماں جیسا خالص، ماں جیسا پیار"',
    nav_home: 'Home',
    nav_story: 'Our Story',
    nav_why_us: 'Why Us',
    nav_products: 'Products',
    nav_process: 'Bilona Process',
    nav_comparison: 'Comparison',
    nav_reviews: 'Reviews',
    nav_faqs: 'FAQs',
    nav_checkout: 'Direct Order',
    nav_whatsapp_btn: 'Order via WhatsApp',
    
    // Hero Section
    hero_top_badge: 'Handcrafted in Taxila, Punjab | 100% Traditional Bilona Method',
    hero_headline_1: 'Maa Jaisa Khalis,',
    hero_headline_2: 'Maa Jaisa Pyaar',
    hero_headline_3: '— 100% Pure Danedar Desi Ghee',
    hero_urdu_line: 'خالص مکھن سے تیار کردہ، روایتی خوشبو اور دانے دار مٹھاس سے بھرپور',
    hero_desc: 'Reclaim the golden health of your ancestral kitchen. Cultured from pasture-grazing grass-fed milk, churned with wooden bilona, and slow-simmered in clay handis. Zero adulteration, zero palm oil, 100% lab certified.',
    hero_cta_order: 'Order Desi Ghee (COD Available)',
    hero_cta_wa: 'Order via WhatsApp',
    hero_badge_grassfed: 'Grass-Fed',
    hero_badge_grassfed_sub: 'Pure Raw Milk',
    hero_badge_chemicals: '0% Chemicals',
    hero_badge_chemicals_sub: 'No Bleach / Oil',
    hero_badge_handi: 'Slow Handi',
    hero_badge_handi_sub: 'Danedar Texture',
    hero_badge_lab: 'Lab Tested',
    hero_badge_lab_sub: 'Purity Guarantee',
    hero_rating_text: '1,450+ Verified Pakistani Mothers',
    hero_guarantee_title: 'Taxila Dairy Farm',
    hero_guarantee_sub: '100% Money-Back Guarantee',
    hero_img_badge: 'Signature Danedar Granules',

    // Label Anatomy Strip
    label_strip_title: 'Official MUM ORGANIC Authenticity Markings',
    label_strip_sub: 'Every authentic jar carries our signature arched seal & village origin guarantee',
    label_strip_tag1: '100% Pure Wax Seal',
    label_strip_tag2: 'Maa Ka Pyaar & Handi',
    label_strip_tag3: 'Grass-Fed Cow Milk',
    label_strip_tag4: 'Packaged in Taxila, Punjab',

    // Products Section
    products_badge: 'Fresh Village Batch Churned Yesterday — Only Limited Jars Available',
    products_title: 'Select Your Fresh Ghee Tier',
    products_sub: 'Handcrafted in airtight glass jars. Cash on Delivery nationwide.',
    deal_ends_in: 'Special Offer Ends In:',
    free_shipping_banner_title: 'Safe, Breakage-Proof Nationwide Packaging',
    free_shipping_banner_desc: 'Every glass jar is protected with triple-cushion bubble wrap. 100% free instant replacement if damaged during courier transit.',
    view_cart_btn: 'View My Cart',

    // Checkout Section
    checkout_badge: '⚡ Quick & Safe Ordering',
    checkout_title: 'Direct Cash on Delivery Checkout',
    checkout_sub: 'No credit card needed. Pay cash when the parcel arrives at your doorstep anywhere in Pakistan.',
    checkout_shipping_details: 'Shipping Details',
    checkout_all_fields_req: '* All fields required',
    checkout_name_label: 'Full Name *',
    checkout_name_placeholder: 'e.g. Fatima Ali / Muhammad Tariq',
    checkout_phone_label: 'Phone / WhatsApp Number *',
    checkout_phone_placeholder: '0339-5691212',
    checkout_phone_hint: 'Rider will call before delivery',
    checkout_city_label: 'City / District *',
    checkout_address_label: 'Complete Delivery Address & Nearest Landmark *',
    checkout_address_placeholder: 'House #, Street #, Sector / Colony, Landmark',
    checkout_notes_label: 'Delivery Instructions (Optional)',
    checkout_notes_placeholder: 'e.g. Please deliver after 3 PM or call on WhatsApp',
    checkout_payment_title: 'Cash on Delivery (COD)',
    checkout_payment_desc: 'Pay in cash to courier rider upon inspection of parcel.',
    checkout_btn_cod: 'Confirm Cash on Delivery Order',
    checkout_btn_wa: 'Or Complete Order Instantly on WhatsApp (+92 339 5691212)',
    checkout_summary_title: 'Order Summary',
    checkout_edit_cart: 'Edit Cart',
    checkout_coupon_placeholder: 'Coupon (e.g. KHALIS10)',
    checkout_coupon_apply: 'Apply',
    checkout_subtotal: 'Subtotal',
    checkout_discount: 'Mother’s Promo Discount',
    checkout_shipping: 'Nationwide Shipping',
    checkout_total: 'Total Amount (COD)',

    // Cart Drawer
    cart_title: 'Your Fresh Ghee Cart',
    cart_empty_title: 'Your Cart is Empty',
    cart_empty_desc: 'Select our pure Danedar Desi Ghee starter jar or family value pack to continue.',
    cart_shop_btn: 'Shop Pure Ghee',
    cart_checkout_btn: 'Proceed to COD Checkout',
    cart_wa_btn: 'Order via WhatsApp',

    // Reviews & FAQs
    reviews_badge: 'Real Stories & Aromas',
    reviews_title: 'Loved by Over 1,450+ Pakistani Mothers & Chefs',
    faqs_badge: 'Got Questions?',
    faqs_title: 'Frequently Asked Questions'
  },
  ur: {
    // Nav & Top Bar
    announcement: '🚚 1 کلو یا اس سے زیادہ پر ملک بھر میں مفت ڈلیوری | 100٪ خالص پن کی گارنٹی',
    tagline_urdu: '"ماں جیسا خالص، ماں جیسا پیار"',
    nav_home: 'ہوم',
    nav_story: 'ہماری کہانی',
    nav_why_us: 'کیوں منتخب کریں',
    nav_products: 'پراڈکٹس اور قیمتیں',
    nav_process: 'بلونا طریقہ کار',
    nav_comparison: 'مارکیٹ موازنہ',
    nav_reviews: 'گاہکوں کی رائے',
    nav_faqs: 'عام سوالات',
    nav_checkout: 'براہ راست آرڈر',
    nav_whatsapp_btn: 'واٹس ایپ پر آرڈر کریں',

    // Hero Section
    hero_top_badge: 'ٹیکسلا پنجاب میں روایتی بلونا طریقہ پر تیار کردہ | 100٪ خالص',
    hero_headline_1: 'ماں جیسا خالص،',
    hero_headline_2: 'ماں جیسا پیار',
    hero_headline_3: '— 100٪ اصلی دانے دار دیسی گھی',
    hero_urdu_line: 'خالص مکھن سے تیار کردہ، روایتی خوشبو اور دانے دار مٹھاس سے بھرپور',
    hero_desc: 'اپنے بزرگوں کے زمانے کی سنہری صحت دوبارہ حاصل کریں۔ قدرتی چارہ چرنے والی گائے و بھینس کے دودھ سے دہی جما کر لکڑی کی مدھانی سے مکھن نکال کر دھیمی آنچ پر تیار کردہ دیسی گھی۔ صفر کیمیکل، صفر پام آئل۔',
    hero_cta_order: 'دیسی گھی کا آرڈر دیں (کیش آن ڈلیوری)',
    hero_cta_wa: 'واٹس ایپ پر فوری آرڈر کریں',
    hero_badge_grassfed: 'گھاس چرنے والے مویشی',
    hero_badge_grassfed_sub: 'خالص قدرتی دودھ',
    hero_badge_chemicals: '0٪ کیمیکلز',
    hero_badge_chemicals_sub: 'بغیر ملاوٹ و پام آئل',
    hero_badge_handi: 'دھیمی ہانڈی',
    hero_badge_handi_sub: 'اصلی دانے دار ساخت',
    hero_badge_lab: 'لیب ٹیسٹ شدہ',
    hero_badge_lab_sub: '100٪ خالص پن گارنٹی',
    hero_rating_text: '1,450+ مطمئن مائیں اور گھریلو شیفس',
    hero_guarantee_title: 'ٹیکسلا ڈیری فارم',
    hero_guarantee_sub: '100٪ رقم واپسی کی ضمانت',
    hero_img_badge: 'اصلی دانے دار سنہری دیسی گھی',

    // Label Anatomy Strip
    label_strip_title: 'مم آرگینک کا آفیشل مہر اور لیبل ڈیزائن',
    label_strip_sub: 'ہر اصلی جار پر ہماری روایتی مہر اور ٹیکسلا کے خالص پن کا ثبوت موجود ہوتا ہے',
    label_strip_tag1: '100٪ خالص گولڈ ویکس سیل',
    label_strip_tag2: 'ماں کے ہاتھوں کا پیار و ہانڈی',
    label_strip_tag3: 'قدرتی چارے والی گائے کا دودھ',
    label_strip_tag4: 'پیکنگ: ٹیکسلا، پنجاب',

    // Products Section
    products_badge: 'تازہ گاؤں کا بلونا بیچ کل ہی تیار ہوا — صرف محدود جارز دستیاب ہیں',
    products_title: 'اپنا پسندیدہ دیسی گھی پیک منتخب کریں',
    products_sub: 'شیشے کے ایئر ٹائٹ محفوظ جارز میں پیک۔ پورے پاکستان میں کیش آن ڈلیوری۔',
    deal_ends_in: 'خصوصی آفر ختم ہونے میں وقت باقی:',
    free_shipping_banner_title: 'شیشے کے ٹوٹنے سے محفوظ پریمیم پیکنگ',
    free_shipping_banner_desc: 'ہر جار کو 3 تہوں والی ببل کوشننگ میں محفوظ کیا جاتا ہے۔ ترسیل کے دوران نقصان کی صورت میں فوری نیا جار بالکل مفت۔',
    view_cart_btn: 'میری کارٹ دیکھیں',

    // Checkout Section
    checkout_badge: '⚡ آسان اور محفوظ خریداری',
    checkout_title: 'براہِ راست کیش آن ڈلیوری آرڈر فارم',
    checkout_sub: 'کسی کارڈ کی ضرورت نہیں۔ پارسل اپنے گھر وصول کرتے وقت رقم ادا کریں۔',
    checkout_shipping_details: 'ڈلیوری کی تفصیلات',
    checkout_all_fields_req: '* تمام معلومات درج کرنا لازمی ہیں',
    checkout_name_label: 'آپ کا مکمل نام *',
    checkout_name_placeholder: 'مثال: فاطمہ علی / محمد طارق',
    checkout_phone_label: 'فون / واٹس ایپ نمبر *',
    checkout_phone_placeholder: '0339-5691212',
    checkout_phone_hint: 'ڈلیوری سے قبل رائیڈر آپ کو کال کرے گا',
    checkout_city_label: 'شہر / ضلع منتخب کریں *',
    checkout_address_label: 'مکمل پتہ اور قریبی مشہور جگہ (Landmark) *',
    checkout_address_placeholder: 'مکان نمبر، گلی نمبر، محلہ / سیکٹر، مشہور لینڈ مارک',
    checkout_notes_label: 'ڈلیوری کی خصوصی ہدایات (اختیاری)',
    checkout_notes_placeholder: 'مثال: دوپہر 3 بجے کے بعد لائیں یا واٹس ایپ پر رابطہ کریں',
    checkout_payment_title: 'کیش آن ڈلیوری (COD)',
    checkout_payment_desc: 'پارسل موصول ہونے کے بعد رائیڈر کو نقد ادائیگی کریں۔',
    checkout_btn_cod: 'کیش آن ڈلیوری آرڈر کنفرم کریں',
    checkout_btn_wa: 'یا واٹس ایپ پر فوری آرڈر مکمل کریں (+92 339 5691212)',
    checkout_summary_title: 'آرڈر کا خلاصہ',
    checkout_edit_cart: 'کارٹ تبدیل کریں',
    checkout_coupon_placeholder: 'کوپن کوڈ (مثال: KHALIS10)',
    checkout_coupon_apply: 'لاگو کریں',
    checkout_subtotal: 'سب ٹوٹل',
    checkout_discount: 'ماں کا پیار پروموشنل ڈسکاؤنٹ',
    checkout_shipping: 'ڈلیوری چارجز',
    checkout_total: 'کل واجب الادا رقم (COD)',

    // Cart Drawer
    cart_title: 'آپ کا دیسی گھی کارٹ',
    cart_empty_title: 'آپ کا کارٹ ابھی خالی ہے',
    cart_empty_desc: 'خالص دانے دار دیسی گھی حاصل کرنے کے لیے اوپر دیے گئے سائزز میں سے انتخاب کریں۔',
    cart_shop_btn: 'دیسی گھی منتخب کریں',
    cart_checkout_btn: 'کیش آن ڈلیوری چیک آؤٹ',
    cart_wa_btn: 'واٹس ایپ کے ذریعے آرڈر کریں',

    // Reviews & FAQs
    reviews_badge: 'حقیقی کہانیاں اور یادیں',
    reviews_title: '1,450+ سے زیادہ ماؤں اور گھریلو خواتین کا اعتماد',
    faqs_badge: 'آپ کے سوالات',
    faqs_title: 'اکثر پوچھے جانے والے سوالات'
  }
};

// Active Promo Codes
const PROMO_CODES = {
  'KHALIS10': { type: 'percent', value: 10, label: '10% Mother’s Love Discount' },
  'MAAPYAR': { type: 'fixed', value: 300, label: 'PKR 300 Family Discount' },
  'TAXILAFRESH': { type: 'percent', value: 5, label: '5% Taxila Heritage Discount' }
};

// Global Cart State
let cart = JSON.parse(localStorage.getItem('mum_organic_cart')) || [
  {
    id: 'mum-1kg',
    name: 'Heritage Family Pack (1kg)',
    nameUr: 'ہیریٹیج فیملی پیک (1 کلوگرام)',
    price: 4250,
    originalPrice: 4800,
    weight: '1kg',
    weightKg: 1.0,
    image: 'assets/jar_1kg.jpg',
    quantity: 1
  }
];

let appliedPromo = JSON.parse(localStorage.getItem('mum_organic_promo')) || null;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  setLanguage(currentLang);
  setupEventListeners();
  setupFAQAccordion();
  initCountdownTimer();
  populateCheckoutCityDropdown();
  updateCheckoutSummary();
});

// ==========================================
// THEME SWITCHER (Light / Dark Mode)
// ==========================================
function toggleTheme() {
  currentTheme = (currentTheme === 'light') ? 'dark' : 'light';
  applyTheme(currentTheme);
  localStorage.setItem('mum_theme', currentTheme);
}

function applyTheme(theme) {
  const html = document.documentElement;
  const themeIcons = document.querySelectorAll('.theme-toggle-icon');
  const themeTexts = document.querySelectorAll('.theme-toggle-text');

  if (theme === 'dark') {
    html.classList.add('dark');
    themeIcons.forEach(icon => {
      icon.className = 'theme-toggle-icon fa-solid fa-sun text-amber-400';
    });
    themeTexts.forEach(text => {
      text.textContent = (currentLang === 'ur') ? 'لائٹ موڈ' : 'Light Mode';
    });
  } else {
    html.classList.remove('dark');
    themeIcons.forEach(icon => {
      icon.className = 'theme-toggle-icon fa-solid fa-moon text-stone-700';
    });
    themeTexts.forEach(text => {
      text.textContent = (currentLang === 'ur') ? 'ڈارک موڈ' : 'Dark Mode';
    });
  }
}

// ==========================================
// LANGUAGE SWITCHER (Urdu / English)
// ==========================================
function toggleLanguage() {
  const newLang = (currentLang === 'en') ? 'ur' : 'en';
  setLanguage(newLang);
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('mum_lang', lang);

  const html = document.documentElement;
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  // Set direction and lang attributes
  if (lang === 'ur') {
    html.setAttribute('dir', 'rtl');
    html.setAttribute('lang', 'ur');
    html.classList.add('lang-urdu');
  } else {
    html.setAttribute('dir', 'ltr');
    html.setAttribute('lang', 'en');
    html.classList.remove('lang-urdu');
  }

  // Update language toggle button text
  const langToggleButtons = document.querySelectorAll('.lang-toggle-btn');
  langToggleButtons.forEach(btn => {
    btn.innerHTML = (lang === 'ur') ? 
      '<span class="flex items-center gap-1.5"><span class="text-sm">🇬🇧</span> <span class="font-sans font-bold text-xs">English</span></span>' :
      '<span class="flex items-center gap-1.5"><span class="text-sm">🇵🇰</span> <span class="font-urdu font-bold text-xs">اردو</span></span>';
  });

  // Apply translations to all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  // Apply placeholder translations
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      el.setAttribute('placeholder', t[key]);
    }
  });

  // Re-render Dynamic Catalog & Cart with selected language
  renderProducts();
  renderCart();
  updateCheckoutSummary();
  applyTheme(currentTheme);
}

// ==========================================
// PRODUCT CATALOG RENDERING
// ==========================================
function renderProducts() {
  const container = document.getElementById('products-grid');
  if (!container) return;

  const productsList = PRODUCTS_DATA[currentLang] || PRODUCTS_DATA.en;

  container.innerHTML = productsList.map(prod => {
    const discount = Math.round(((prod.originalPrice - prod.price) / prod.originalPrice) * 100);
    const isPopular = prod.id === 'mum-1kg';
    const isRtl = currentLang === 'ur';
    
    return `
      <div class="product-card group relative bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-7 transition-all duration-300 border ${isPopular ? 'border-amber-500 shadow-xl ring-2 ring-amber-500/20' : 'border-amber-900/10 dark:border-amber-500/20 shadow-md hover:shadow-xl'} flex flex-col justify-between" data-id="${prod.id}">
        ${isPopular ? `
          <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md flex items-center gap-1.5 z-10 whitespace-nowrap">
            <i class="fa-solid fa-crown text-yellow-200"></i> ${isRtl ? 'سب سے زیادہ مقبول انتخاب' : 'Most Popular Choice'}
          </div>
        ` : ''}

        <div>
          <!-- Product Badge & Discount -->
          <div class="flex items-center justify-between gap-2 mb-4">
            <span class="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${
              prod.badgeType === 'primary' ? 'bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-950/60 dark:text-amber-300' :
              prod.badgeType === 'special' ? 'bg-emerald-100 text-emerald-900 border border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300' :
              'bg-stone-100 text-stone-800 border border-stone-200 dark:bg-stone-800 dark:text-stone-300'
            }">
              <i class="fa-solid fa-sparkles text-amber-600 text-[10px]"></i> ${prod.badge}
            </span>
            <span class="text-xs font-bold text-red-600 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 px-2.5 py-0.5 rounded-full">
              -${discount}% OFF
            </span>
          </div>

          <!-- Product Image Container -->
          <div class="relative overflow-hidden rounded-2xl bg-amber-50/50 dark:bg-stone-800/50 mb-5 aspect-square flex items-center justify-center p-3 border border-amber-100/60 dark:border-stone-700">
            <img src="${prod.image}" alt="${prod.name}" class="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            
            <div class="absolute bottom-3 ${isRtl ? 'right-3' : 'left-3'} bg-white/95 dark:bg-stone-900/95 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[11px] font-medium text-stone-700 dark:text-stone-300 shadow-sm border border-amber-200/60 dark:border-amber-500/30 flex items-center gap-1">
              <i class="fa-solid fa-scale-balanced text-amber-600"></i> ${prod.weight}
            </div>
            
            <div class="absolute top-3 ${isRtl ? 'left-3' : 'right-3'} bg-emerald-700/95 backdrop-blur-sm px-2.5 py-0.5 rounded-md text-[10px] font-semibold text-white tracking-wide flex items-center gap-1 shadow-sm">
              <i class="fa-solid fa-circle-check text-emerald-300"></i> ${isRtl ? '100٪ دانے دار' : '100% Danedar'}
            </div>
          </div>

          <!-- Title & Specs -->
          <h3 class="font-serif-luxury text-xl sm:text-2xl font-bold text-stone-900 dark:text-white mb-2">${prod.name}</h3>
          <p class="text-sm text-stone-600 dark:text-stone-400 mb-4 leading-relaxed">${prod.description}</p>

          <!-- Feature Bullets -->
          <ul class="space-y-2 mb-6 text-xs text-stone-700 dark:text-stone-300">
            ${prod.highlights.map(h => `
              <li class="flex items-center gap-2">
                <i class="fa-solid fa-check text-emerald-600 font-bold"></i>
                <span>${h}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div>
          <!-- Price Box -->
          <div class="bg-amber-50/70 dark:bg-stone-800/80 rounded-2xl p-3.5 mb-5 border border-amber-200/60 dark:border-amber-500/30 flex items-baseline justify-between">
            <div>
              <span class="text-xs text-stone-500 dark:text-stone-400 font-medium block">${isRtl ? 'رعایتی قیمت' : 'Special Price'}</span>
              <div class="flex items-baseline gap-2">
                <span class="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-amber-400 font-heading-cinzel">PKR ${prod.price.toLocaleString()}</span>
                <span class="text-sm text-stone-400 line-through">PKR ${prod.originalPrice.toLocaleString()}</span>
              </div>
            </div>
            <div class="${isRtl ? 'text-left' : 'text-right'}">
              <span class="text-[11px] font-medium text-emerald-700 dark:text-emerald-400 block">${prod.weightKg >= 1 ? (isRtl ? '🚚 مفت ڈلیوری' : '🚚 Free Shipping') : (isRtl ? '⚡ 24 گھنٹے ڈسپیچ' : '⚡ 24h Dispatch')}</span>
              <span class="text-[11px] text-stone-500 dark:text-stone-400">${prod.servings}</span>
            </div>
          </div>

          <!-- Quantity Selector & Add to Cart -->
          <div class="flex items-center gap-2 mb-2.5">
            <div class="flex items-center border border-amber-300 dark:border-stone-600 rounded-xl bg-white dark:bg-stone-800 overflow-hidden shadow-sm h-11">
              <button onclick="adjustProductCardQty('${prod.id}', -1)" class="px-3 py-2 text-stone-600 dark:text-stone-300 hover:text-amber-700 hover:bg-amber-50 dark:hover:bg-stone-700 active:scale-95 transition" title="Decrease">
                <i class="fa-solid fa-minus text-xs"></i>
              </button>
              <input type="text" id="qty-input-${prod.id}" value="1" readonly class="w-9 text-center font-bold text-stone-900 dark:text-white bg-transparent text-sm" />
              <button onclick="adjustProductCardQty('${prod.id}', 1)" class="px-3 py-2 text-stone-600 dark:text-stone-300 hover:text-amber-700 hover:bg-amber-50 dark:hover:bg-stone-700 active:scale-95 transition" title="Increase">
                <i class="fa-solid fa-plus text-xs"></i>
              </button>
            </div>

            <button onclick="handleAddToCartFromCard('${prod.id}')" class="flex-1 h-11 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-stone-950 font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-98 transition">
              <i class="fa-solid fa-cart-plus"></i> <span>${prod.addToCartText}</span>
            </button>
          </div>

          <!-- Direct 1-Click WhatsApp Purchase -->
          <button onclick="quickWhatsAppOrder('${prod.id}')" class="w-full h-10 border border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100/80 dark:hover:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition">
            <i class="fa-brands fa-whatsapp text-emerald-600 dark:text-emerald-400 text-base"></i> <span>${prod.whatsAppOrderText}</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Quantity Adjuster on Product Card
function adjustProductCardQty(productId, delta) {
  const input = document.getElementById(`qty-input-${productId}`);
  if (!input) return;
  let current = parseInt(input.value) || 1;
  current = Math.max(1, Math.min(20, current + delta));
  input.value = current;
}

function handleAddToCartFromCard(productId) {
  const input = document.getElementById(`qty-input-${productId}`);
  const qty = input ? (parseInt(input.value) || 1) : 1;
  addToCart(productId, qty);
  if (input) input.value = 1;
}

// Add Item to Cart
function addToCart(productId, quantity = 1) {
  const productsEn = PRODUCTS_DATA.en;
  const productsUr = PRODUCTS_DATA.ur;
  const prodEn = productsEn.find(p => p.id === productId);
  const prodUr = productsUr.find(p => p.id === productId);

  if (!prodEn) return;

  const existingIndex = cart.findIndex(item => item.id === productId);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: prodEn.id,
      name: prodEn.name,
      nameUr: prodUr ? prodUr.name : prodEn.name,
      price: prodEn.price,
      originalPrice: prodEn.originalPrice,
      weight: prodEn.weight,
      weightKg: prodEn.weightKg,
      image: prodEn.image,
      quantity: quantity
    });
  }

  saveCart();
  const itemName = (currentLang === 'ur' && prodUr) ? prodUr.shortName : prodEn.shortName;
  const msg = (currentLang === 'ur') ? 
    `آپ کے کارٹ میں ${quantity}x ${itemName} شامل کر دیا گیا ہے!` : 
    `Added ${quantity}x ${itemName} to your cart!`;
  
  showToast(msg, 'success');
  openCartDrawer();
}

function saveCart() {
  localStorage.setItem('mum_organic_cart', JSON.stringify(cart));
  localStorage.setItem('mum_organic_promo', JSON.stringify(appliedPromo));
  renderCart();
  updateCartBadges();
  updateCheckoutSummary();
}

function updateQuantity(productId, delta) {
  const itemIndex = cart.findIndex(item => item.id === productId);
  if (itemIndex === -1) return;

  cart[itemIndex].quantity += delta;
  if (cart[itemIndex].quantity <= 0) {
    cart.splice(itemIndex, 1);
    showToast(currentLang === 'ur' ? 'آئٹم کارٹ سے ہٹا دیا گیا' : 'Item removed from cart', 'info');
  }
  saveCart();
}

function removeFromCart(productId) {
  const itemIndex = cart.findIndex(item => item.id === productId);
  if (itemIndex > -1) {
    cart.splice(itemIndex, 1);
    saveCart();
    showToast(currentLang === 'ur' ? 'آئٹم کارٹ سے ہٹا دیا گیا' : 'Item removed from cart', 'info');
  }
}

// Calculate Cart Totals
function calculateCartTotals() {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalWeightKg = cart.reduce((sum, item) => sum + (item.weightKg * item.quantity), 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  let discountAmount = 0;
  if (appliedPromo && PROMO_CODES[appliedPromo.code]) {
    const promo = PROMO_CODES[appliedPromo.code];
    if (promo.type === 'percent') {
      discountAmount = Math.round((subtotal * promo.value) / 100);
    } else if (promo.type === 'fixed') {
      discountAmount = Math.min(subtotal, promo.value);
    }
  }

  const isFreeShipping = totalWeightKg >= 1.0 || subtotal >= 4000 || totalItems === 0;
  const shippingFee = (totalItems === 0 || isFreeShipping) ? 0 : 250;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  return { subtotal, totalWeightKg, totalItems, discountAmount, shippingFee, isFreeShipping, grandTotal };
}

// Render Cart Drawer
function renderCart() {
  const container = document.getElementById('cart-items-container');
  const emptyState = document.getElementById('cart-empty-state');
  const filledState = document.getElementById('cart-filled-state');
  const totals = calculateCartTotals();
  const isRtl = currentLang === 'ur';

  if (!container) return;

  if (cart.length === 0) {
    if (emptyState) emptyState.classList.remove('hidden');
    if (filledState) filledState.classList.add('hidden');
    container.innerHTML = '';
    updateCartBadges();
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  if (filledState) filledState.classList.remove('hidden');

  container.innerHTML = cart.map(item => {
    const title = (isRtl && item.nameUr) ? item.nameUr : item.name;
    return `
      <div class="flex items-center gap-3.5 p-3 rounded-2xl bg-amber-50/40 dark:bg-stone-800/80 border border-amber-200/50 dark:border-stone-700 hover:bg-amber-50/80 transition">
        <img src="${item.image}" alt="${title}" class="w-16 h-16 rounded-xl object-cover border border-amber-200 dark:border-stone-700 shrink-0" />
        <div class="flex-1 min-w-0">
          <h4 class="font-semibold text-stone-900 dark:text-white text-sm truncate">${title}</h4>
          <div class="flex items-baseline gap-2 mt-0.5 mb-2">
            <span class="text-amber-800 dark:text-amber-400 font-bold text-sm">PKR ${item.price.toLocaleString()}</span>
            <span class="text-xs text-stone-400 line-through">PKR ${item.originalPrice.toLocaleString()}</span>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center border border-amber-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-900 overflow-hidden shadow-xs">
              <button onclick="updateQuantity('${item.id}', -1)" class="w-6 h-6 flex items-center justify-center text-stone-600 dark:text-stone-300 hover:text-amber-700 hover:bg-amber-50 text-xs">
                <i class="fa-solid fa-minus"></i>
              </button>
              <span class="w-7 text-center font-bold text-xs text-stone-800 dark:text-stone-200">${item.quantity}</span>
              <button onclick="updateQuantity('${item.id}', 1)" class="w-6 h-6 flex items-center justify-center text-stone-600 dark:text-stone-300 hover:text-amber-700 hover:bg-amber-50 text-xs">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <button onclick="removeFromCart('${item.id}')" class="text-stone-400 hover:text-red-600 text-xs p-1 transition" title="Remove">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Shipping Progress Bar
  const shippingProgress = document.getElementById('shipping-progress-bar');
  const shippingText = document.getElementById('shipping-progress-text');
  if (shippingProgress && shippingText) {
    if (totals.isFreeShipping) {
      shippingProgress.style.width = '100%';
      shippingProgress.className = 'h-2 rounded-full bg-emerald-500 transition-all duration-500';
      shippingText.innerHTML = isRtl ? 
        '<span class="text-emerald-700 dark:text-emerald-400 font-bold"><i class="fa-solid fa-check-circle"></i> مبارک ہو! آپ نے مفت ڈلیوری حاصل کر لی ہے!</span>' :
        '<span class="text-emerald-700 dark:text-emerald-400 font-bold"><i class="fa-solid fa-check-circle"></i> Congratulations! You unlocked FREE Delivery!</span>';
    } else {
      const neededWeight = 1.0 - totals.totalWeightKg;
      const progressPercent = Math.min(100, Math.round((totals.totalWeightKg / 1.0) * 100));
      shippingProgress.style.width = `${progressPercent}%`;
      shippingProgress.className = 'h-2 rounded-full bg-amber-500 transition-all duration-500';
      shippingText.innerHTML = isRtl ?
        `مفت ڈلیوری کے لیے مزید <span class="font-bold text-amber-800 dark:text-amber-400">${neededWeight.toFixed(1)} کلو</span> شامل کریں!` :
        `Add <span class="font-bold text-amber-800 dark:text-amber-400">${neededWeight.toFixed(1)}kg</span> more for <span class="font-bold text-emerald-700 dark:text-emerald-400">FREE Delivery</span>!`;
    }
  }

  // Numerical Totals
  const subtotalEl = document.getElementById('cart-subtotal-val');
  const discountRow = document.getElementById('cart-discount-row');
  const discountEl = document.getElementById('cart-discount-val');
  const shippingEl = document.getElementById('cart-shipping-val');
  const totalEl = document.getElementById('cart-grand-total-val');

  if (subtotalEl) subtotalEl.textContent = `PKR ${totals.subtotal.toLocaleString()}`;
  if (shippingEl) {
    shippingEl.innerHTML = totals.isFreeShipping ? 
      `<span class="text-emerald-600 font-bold uppercase tracking-wider text-xs">${isRtl ? 'مفت' : 'FREE'}</span>` : 
      `PKR ${totals.shippingFee.toLocaleString()}`;
  }

  if (discountRow && discountEl) {
    if (totals.discountAmount > 0) {
      discountRow.classList.remove('hidden');
      discountEl.textContent = `- PKR ${totals.discountAmount.toLocaleString()}`;
    } else {
      discountRow.classList.add('hidden');
    }
  }

  if (totalEl) totalEl.textContent = `PKR ${totals.grandTotal.toLocaleString()}`;

  renderPromoCodeState();
  updateCartBadges();
}

function renderPromoCodeState() {
  const promoTag = document.getElementById('cart-applied-promo-tag');
  const promoInput = document.getElementById('cart-promo-input');
  if (!promoTag) return;

  if (appliedPromo) {
    promoTag.classList.remove('hidden');
    promoTag.innerHTML = `
      <div class="flex items-center justify-between text-xs bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-300 px-3 py-1.5 rounded-lg">
        <span class="flex items-center gap-1.5"><i class="fa-solid fa-tag text-emerald-600"></i> <strong>${appliedPromo.code}</strong> applied (${appliedPromo.label})</span>
        <button onclick="removePromoCode()" class="text-emerald-700 dark:text-emerald-400 hover:text-red-600 font-bold ml-2">✕</button>
      </div>
    `;
    if (promoInput) promoInput.value = '';
  } else {
    promoTag.classList.add('hidden');
  }
}

function applyPromoCode(code) {
  const cleanCode = (code || '').trim().toUpperCase();
  if (!cleanCode) {
    showToast(currentLang === 'ur' ? 'براہ کرم کوپن کوڈ درج کریں' : 'Please enter a coupon code', 'info');
    return;
  }

  if (PROMO_CODES[cleanCode]) {
    appliedPromo = { code: cleanCode, ...PROMO_CODES[cleanCode] };
    saveCart();
    showToast(currentLang === 'ur' ? `کوپن "${cleanCode}" کامیابی سے لاگو ہو گیا!` : `Coupon "${cleanCode}" applied!`, 'success');
  } else {
    showToast(currentLang === 'ur' ? 'غلط یا ایکسپائرڈ کوڈ۔ کوڈ "KHALIS10" آزمائیں' : 'Invalid code. Try "KHALIS10"', 'error');
  }
}

function removePromoCode() {
  appliedPromo = null;
  saveCart();
  showToast(currentLang === 'ur' ? 'کوپن کوڈ ختم کر دیا گیا' : 'Coupon removed', 'info');
}

function updateCartBadges() {
  const totals = calculateCartTotals();
  const badges = document.querySelectorAll('.cart-count-badge');
  badges.forEach(b => {
    b.textContent = totals.totalItems;
    if (totals.totalItems > 0) {
      b.classList.remove('hidden');
    } else {
      b.classList.add('hidden');
    }
  });

  const cartHeaderTotal = document.getElementById('navbar-cart-total');
  if (cartHeaderTotal) {
    cartHeaderTotal.textContent = `PKR ${totals.grandTotal.toLocaleString()}`;
  }
}

// Cart Drawer Open / Close
function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-drawer-overlay');
  if (drawer && overlay) {
    overlay.classList.remove('hidden');
    setTimeout(() => {
      overlay.classList.remove('opacity-0');
      overlay.classList.add('opacity-100');
      drawer.classList.remove('translate-x-full');
      drawer.classList.remove('-translate-x-full');
    }, 10);
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-drawer-overlay');
  if (drawer && overlay) {
    drawer.classList.add(currentLang === 'ur' ? '-translate-x-full' : 'translate-x-full');
    overlay.classList.remove('opacity-100');
    overlay.classList.add('opacity-0');
    setTimeout(() => {
      overlay.classList.add('hidden');
    }, 300);
    document.body.style.overflow = '';
  }
}

// 1-Click WhatsApp Quick Purchase
function quickWhatsAppOrder(productId) {
  const products = PRODUCTS_DATA[currentLang] || PRODUCTS_DATA.en;
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  let text = '';
  if (currentLang === 'ur') {
    text = `السلام علیکم MUM ORGANIC! 🌿\n\nمیں آرڈر دینا چاہتا/چاہتی ہوں:\n📦 آئٹم: *${prod.name}*\n⚖️ وزن: *${prod.weight}*\n💰 قیمت: *PKR ${prod.price.toLocaleString()}*\n🚚 ڈلیوری: *${prod.weightKg >= 1 ? 'مفت ڈلیوری' : 'PKR 250'}*\n\nبراہ کرم ڈلیوری ٹائم کنفرم کریں۔ جزاک اللہ!`;
  } else {
    text = `Assalam-o-Alaikum MUM ORGANIC! 🌿\n\nI want to order:\n📦 Item: *${prod.name}*\n⚖️ Weight: *${prod.weight}*\n💰 Price: *PKR ${prod.price.toLocaleString()}*\n🚚 Shipping: *${prod.weightKg >= 1 ? 'FREE Delivery' : 'PKR 250'}*\n\nPlease confirm delivery time to my city. JazakAllah!`;
  }
  
  const waUrl = `https://wa.me/923395691212?text=${encodeURIComponent(text)}`;
  window.open(waUrl, '_blank');
}

// WhatsApp Full Cart Checkout
function checkoutViaWhatsApp() {
  if (cart.length === 0) {
    showToast(currentLang === 'ur' ? 'آپ کا کارٹ خالی ہے!' : 'Your cart is empty!', 'info');
    return;
  }

  const totals = calculateCartTotals();
  const customerName = document.getElementById('checkout-name')?.value || '';
  const customerPhone = document.getElementById('checkout-phone')?.value || '';
  const customerCity = document.getElementById('checkout-city')?.value || '';
  const customerAddress = document.getElementById('checkout-address')?.value || '';
  const customerNotes = document.getElementById('checkout-notes')?.value || '';

  let message = '';
  if (currentLang === 'ur') {
    message = `السلام علیکم MUM ORGANIC! 🌿\nمیں خالص دانے دار دیسی گھی کا آرڈر دینا چاہتا/چاہتی ہوں:\n\n🛒 *آرڈر کی تفصیلات:*\n`;
    cart.forEach((item, idx) => {
      const title = item.nameUr || item.name;
      message += `${idx + 1}. ${title} (${item.weight}) x ${item.quantity} = PKR ${(item.price * item.quantity).toLocaleString()}\n`;
    });
    message += `\n💵 *سب ٹوٹل:* PKR ${totals.subtotal.toLocaleString()}`;
    if (totals.discountAmount > 0) {
      message += `\n🎁 *پرومو ڈسکاؤنٹ (${appliedPromo.code}):* -PKR ${totals.discountAmount.toLocaleString()}`;
    }
    message += `\n🚚 *ڈلیوری:* ${totals.isFreeShipping ? 'مفت ملک گیر ڈلیوری' : `PKR ${totals.shippingFee.toLocaleString()}`}`;
    message += `\n💰 *کل واجب الادا رقم (COD):* *PKR ${totals.grandTotal.toLocaleString()}*\n`;

    if (customerName || customerPhone || customerAddress) {
      message += `\n👤 *گاہک کی معلومات:*\n`;
      if (customerName) message += `• نام: ${customerName}\n`;
      if (customerPhone) message += `• فون نمبر: ${customerPhone}\n`;
      if (customerCity) message += `• شہر: ${customerCity}\n`;
      if (customerAddress) message += `• پتہ: ${customerAddress}\n`;
      if (customerNotes) message += `• نوٹ: ${customerNotes}\n`;
    }
    message += `\n📍 ڈسپیچ: ٹیکسلا ڈیری فارم، پنجاب\n✅ 100٪ خالص بلونا دیسی گھی\n\nبراہ کرم میرا آرڈر کنفرم کریں۔ جزاک اللہ!`;
  } else {
    message = `Assalam-o-Alaikum MUM ORGANIC! 🌿\nI would like to place an order for Pure Danedar Desi Ghee:\n\n🛒 *ORDER DETAILS:*\n`;
    cart.forEach((item, idx) => {
      message += `${idx + 1}. ${item.name} (${item.weight}) x ${item.quantity} = PKR ${(item.price * item.quantity).toLocaleString()}\n`;
    });
    message += `\n💵 *Subtotal:* PKR ${totals.subtotal.toLocaleString()}`;
    if (totals.discountAmount > 0) {
      message += `\n🎁 *Promo Discount (${appliedPromo.code}):* -PKR ${totals.discountAmount.toLocaleString()}`;
    }
    message += `\n🚚 *Shipping:* ${totals.isFreeShipping ? 'FREE Nationwide Delivery' : `PKR ${totals.shippingFee.toLocaleString()}`}`;
    message += `\n💰 *Total Payable (COD):* *PKR ${totals.grandTotal.toLocaleString()}*\n`;

    if (customerName || customerPhone || customerAddress) {
      message += `\n👤 *CUSTOMER DETAILS:*\n`;
      if (customerName) message += `• Name: ${customerName}\n`;
      if (customerPhone) message += `• Phone: ${customerPhone}\n`;
      if (customerCity) message += `• City: ${customerCity}\n`;
      if (customerAddress) message += `• Address: ${customerAddress}\n`;
      if (customerNotes) message += `• Special Note: ${customerNotes}\n`;
    }
    message += `\n📍 Origin: Dispatched from Taxila Dairy Farm\n✅ Purity Guaranteed (Lab Tested 100% Bilona)\n\nPlease confirm my order. JazakAllah!`;
  }

  const waUrl = `https://wa.me/923395691212?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
  closeCartDrawer();
}

// Populate Cities Dropdown
function populateCheckoutCityDropdown() {
  const citiesEn = [
    'Islamabad', 'Rawalpindi', 'Taxila', 'Wah Cantt', 'Lahore', 'Karachi',
    'Peshawar', 'Faisalabad', 'Multan', 'Gujranwala', 'Sialkot', 'Abbottabad',
    'Gujrat', 'Sargodha', 'Quetta', 'Bahawalpur', 'Mardan', 'Hyderabad',
    'Rahim Yar Khan', 'Sahiwal', 'Attock', 'Chakwal', 'Jehlum', 'Other City in Pakistan'
  ];

  const citiesUr = [
    'اسلام آباد', 'راولپنڈی', 'ٹیکسلا', 'واہ کینٹ', 'لاہور', 'کراچی',
    'پشاور', 'فیصل آباد', 'ملتان', 'گوجرانوالہ', 'سیالکوٹ', 'ایبٹ آباد',
    'گجرات', 'سرگودھا', 'کوئٹہ', 'بہاولپور', 'مردان', 'حیدرآباد',
    'رحیم یار خان', 'ساہیوال', 'اٹک', 'چکوال', 'جہلم', 'پاکستان کا دیگر شہر'
  ];

  const select = document.getElementById('checkout-city');
  if (!select) return;

  const list = (currentLang === 'ur') ? citiesUr : citiesEn;
  const placeholder = (currentLang === 'ur') ? 'شہر / ضلع منتخب کریں' : 'Select Delivery City / District';

  select.innerHTML = `<option value="">${placeholder}</option>` + 
    list.map(c => `<option value="${c}">${c}</option>`).join('');
}

// Sync Checkout Summary Box with Cart
function updateCheckoutSummary() {
  const container = document.getElementById('checkout-summary-items');
  const subtotalEl = document.getElementById('checkout-subtotal');
  const discountRow = document.getElementById('checkout-discount-row');
  const discountEl = document.getElementById('checkout-discount');
  const shippingEl = document.getElementById('checkout-shipping');
  const totalEl = document.getElementById('checkout-total');
  const isRtl = currentLang === 'ur';

  if (!container) return;

  const totals = calculateCartTotals();

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-6 text-stone-500 text-sm">
        <i class="fa-solid fa-cart-shopping text-3xl text-amber-300 mb-2 block"></i>
        ${isRtl ? 'آپ کا آرڈر خالی ہے۔ اوپر دی گئی لسٹ سے دیسی گھی منتخب کریں۔' : 'Your order is empty. Please select a jar from products above.'}
        <a href="#products" class="text-amber-700 dark:text-amber-400 font-bold underline block mt-2">${isRtl ? 'پراڈکٹس دیکھیں' : 'View Ghee Sizes'}</a>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = 'PKR 0';
    if (shippingEl) shippingEl.textContent = 'PKR 0';
    if (totalEl) totalEl.textContent = 'PKR 0';
    return;
  }

  container.innerHTML = cart.map(item => {
    const title = (isRtl && item.nameUr) ? item.nameUr : item.name;
    return `
      <div class="flex items-center justify-between text-xs py-2 border-b border-amber-100/80 dark:border-stone-700">
        <div class="flex items-center gap-2">
          <img src="${item.image}" alt="${title}" class="w-8 h-8 rounded-lg object-cover border border-amber-200 dark:border-stone-700" />
          <div>
            <span class="font-semibold text-stone-900 dark:text-white block">${title}</span>
            <span class="text-stone-500 dark:text-stone-400">${isRtl ? 'تعداد:' : 'Qty:'} ${item.quantity}</span>
          </div>
        </div>
        <span class="font-bold text-stone-900 dark:text-amber-400">PKR ${(item.price * item.quantity).toLocaleString()}</span>
      </div>
    `;
  }).join('');

  if (subtotalEl) subtotalEl.textContent = `PKR ${totals.subtotal.toLocaleString()}`;
  if (shippingEl) {
    shippingEl.innerHTML = totals.isFreeShipping ? 
      `<span class="text-emerald-700 dark:text-emerald-400 font-bold uppercase">${isRtl ? 'مفت' : 'FREE'}</span>` : 
      `PKR ${totals.shippingFee.toLocaleString()}`;
  }

  if (discountRow && discountEl) {
    if (totals.discountAmount > 0) {
      discountRow.classList.remove('hidden');
      discountEl.textContent = `- PKR ${totals.discountAmount.toLocaleString()}`;
    } else {
      discountRow.classList.add('hidden');
    }
  }

  if (totalEl) totalEl.textContent = `PKR ${totals.grandTotal.toLocaleString()}`;
}

// COD Form Submit
function handleCODFormSubmit(e) {
  e.preventDefault();

  if (cart.length === 0) {
    showToast(currentLang === 'ur' ? 'آپ کا کارٹ خالی ہے! پہلے دیسی گھی منتخب کریں۔' : 'Your cart is empty! Please choose a ghee pack first.', 'error');
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  const name = document.getElementById('checkout-name').value.trim();
  const phone = document.getElementById('checkout-phone').value.trim();
  const city = document.getElementById('checkout-city').value;
  const address = document.getElementById('checkout-address').value.trim();
  const notes = document.getElementById('checkout-notes').value.trim();

  if (!name || !phone || !city || !address) {
    showToast(currentLang === 'ur' ? 'براہ کرم تمام ضروری خانے (*) پر کریں' : 'Please fill all required fields (*)', 'error');
    return;
  }

  const orderId = 'MUM-' + Math.floor(100000 + Math.random() * 900000);
  const totals = calculateCartTotals();

  const orderData = {
    orderId,
    customer: { name, phone, city, address, notes },
    items: [...cart],
    totals,
    date: new Date().toLocaleDateString('en-PK', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  };

  showOrderSuccessModal(orderData);

  cart = [];
  appliedPromo = null;
  saveCart();

  e.target.reset();
}

function showOrderSuccessModal(order) {
  const modal = document.getElementById('order-success-modal');
  const modalContent = document.getElementById('order-modal-details');
  if (!modal || !modalContent) return;

  const isRtl = currentLang === 'ur';

  modalContent.innerHTML = `
    <div class="bg-amber-50/70 dark:bg-stone-800/90 p-4 rounded-2xl border border-amber-200/80 dark:border-amber-500/30 mb-4 ${isRtl ? 'text-right' : 'text-left'} text-xs space-y-2">
      <div class="flex justify-between border-b border-amber-200/60 dark:border-stone-700 pb-2">
        <span class="text-stone-500 dark:text-stone-400">${isRtl ? 'آرڈر ریفرنس:' : 'Order Reference:'}</span>
        <span class="font-extrabold text-amber-900 dark:text-amber-400 font-heading-cinzel text-sm">#${order.orderId}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-stone-500 dark:text-stone-400">${isRtl ? 'گاہک کا نام:' : 'Customer Name:'}</span>
        <span class="font-semibold text-stone-900 dark:text-white">${order.customer.name}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-stone-500 dark:text-stone-400">${isRtl ? 'فون نمبر:' : 'Contact Number:'}</span>
        <span class="font-semibold text-stone-900 dark:text-white">${order.customer.phone}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-stone-500 dark:text-stone-400">${isRtl ? 'پتہ:' : 'Delivery Address:'}</span>
        <span class="font-semibold text-stone-900 dark:text-white">${order.customer.address}, ${order.customer.city}</span>
      </div>
      <div class="flex justify-between border-t border-amber-200/60 dark:border-stone-700 pt-2">
        <span class="text-stone-500 dark:text-stone-400">${isRtl ? 'ادائیگی کا طریقہ:' : 'Payment Mode:'}</span>
        <span class="font-bold text-emerald-800 dark:text-emerald-400">${isRtl ? 'کیش آن ڈلیوری (COD)' : 'Cash on Delivery (COD)'}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-stone-500 dark:text-stone-400">${isRtl ? 'کل واجب الادا:' : 'Total Payable:'}</span>
        <span class="font-extrabold text-stone-900 dark:text-amber-400 text-sm">PKR ${order.totals.grandTotal.toLocaleString()}</span>
      </div>
    </div>

    <div class="bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 p-3 rounded-xl text-xs border border-emerald-200 dark:border-emerald-800 ${isRtl ? 'text-right' : 'text-left'} mb-4 flex items-start gap-2">
      <i class="fa-solid fa-truck-fast text-emerald-600 mt-0.5"></i>
      <div>
        <strong>${isRtl ? 'ٹیکسلا ڈیری فارم سے روانگی:' : 'Dispatched from Taxila Dairy Farm:'}</strong> 
        ${isRtl ? 'آپ کا پارسل ببل ریپنگ میں محفوظ کر کے اگلے 24 گھنٹوں میں روانہ کر دیا جائے گا۔' : 'Your package will be carefully packed in bubble wrapping and dispatched within 24 hours.'}
      </div>
    </div>
  `;

  const waBtn = document.getElementById('modal-wa-confirm-btn');
  if (waBtn) {
    waBtn.onclick = () => {
      let msg = '';
      if (isRtl) {
        msg = `السلام علیکم MUM ORGANIC! 🌿\nمیں نے ویب سائٹ پر آرڈر درج کر دیا ہے:\n\n📋 آرڈر ID: #${order.orderId}\n👤 نام: ${order.customer.name}\n📞 فون: ${order.customer.phone}\n📍 شہر: ${order.customer.city}\n🏠 پتہ: ${order.customer.address}\n💰 کل رقم: PKR ${order.totals.grandTotal.toLocaleString()} (COD)\n\nبراہ کرم ٹریکنگ شیئر کریں۔ شکریہ!`;
      } else {
        msg = `Assalam-o-Alaikum MUM ORGANIC! 🌿\nI placed an order on your website:\n\n📋 Order ID: #${order.orderId}\n👤 Name: ${order.customer.name}\n📞 Phone: ${order.customer.phone}\n📍 City: ${order.customer.city}\n🏠 Address: ${order.customer.address}\n💰 Total Amount: PKR ${order.totals.grandTotal.toLocaleString()} (COD)\n\nPlease share tracking details when dispatched. Thank you!`;
      }
      window.open(`https://wa.me/923395691212?text=${encodeURIComponent(msg)}`, '_blank');
    };
  }

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeOrderSuccessModal() {
  const modal = document.getElementById('order-success-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// Setup Event Listeners
function setupEventListeners() {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  const promoBtn = document.getElementById('cart-promo-apply-btn');
  const promoInput = document.getElementById('cart-promo-input');
  if (promoBtn && promoInput) {
    promoBtn.addEventListener('click', () => applyPromoCode(promoInput.value));
    promoInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        applyPromoCode(promoInput.value);
      }
    });
  }

  const codForm = document.getElementById('cod-checkout-form');
  if (codForm) {
    codForm.addEventListener('submit', handleCODFormSubmit);
  }

  const purityModalOpeners = document.querySelectorAll('.open-purity-modal');
  const purityModal = document.getElementById('purity-test-modal');
  purityModalOpeners.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (purityModal) {
        purityModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const purityModalCloser = document.getElementById('close-purity-modal');
  if (purityModalCloser && purityModal) {
    purityModalCloser.addEventListener('click', () => {
      purityModal.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }
}

function setupFAQAccordion() {
  const accordionHeaders = document.querySelectorAll('.faq-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector('.faq-icon');
      const isOpen = content.classList.contains('active');

      document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('active'));
      document.querySelectorAll('.faq-icon').forEach(i => i.style.transform = 'rotate(0deg)');

      if (!isOpen) {
        content.classList.add('active');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

function initCountdownTimer() {
  const timerEls = document.querySelectorAll('.deal-countdown');
  if (timerEls.length === 0) return;

  let expiry = localStorage.getItem('mum_organic_deal_expiry');
  if (!expiry || parseInt(expiry) < Date.now()) {
    expiry = Date.now() + (14 * 60 * 60 * 1000) + (32 * 60 * 1000);
    localStorage.setItem('mum_organic_deal_expiry', expiry);
  }

  function update() {
    const now = Date.now();
    const diff = Math.max(0, parseInt(expiry) - now);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const formatted = `${String(hours).padStart(2, '0')}h : ${String(minutes).padStart(2, '0')}m : ${String(seconds).padStart(2, '0')}s`;
    timerEls.forEach(el => el.textContent = formatted);
  }

  update();
  setInterval(update, 1000);
}

function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  const icon = type === 'success' ? 'fa-circle-check text-emerald-500' :
               type === 'error' ? 'fa-circle-exclamation text-red-500' :
               'fa-circle-info text-amber-500';

  const bgColor = type === 'success' ? 'border-emerald-500 bg-stone-900 text-white' :
                  type === 'error' ? 'border-red-500 bg-stone-900 text-white' :
                  'border-amber-500 bg-stone-900 text-white';

  toast.className = `toast flex items-center gap-3 px-4 py-3 rounded-xl border-l-4 ${bgColor} shadow-2xl text-xs sm:text-sm font-medium transition-all max-w-sm`;
  toast.innerHTML = `
    <i class="fa-solid ${icon} text-base shrink-0"></i>
    <span class="flex-1">${message}</span>
    <button onclick="this.parentElement.remove()" class="text-stone-400 hover:text-white ml-2 text-xs">✕</button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
