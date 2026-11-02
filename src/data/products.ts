import { Product } from '../types';

// Generated authentic product studio photography
import hydratingLotionImg from '../assets/images/hydrating_body_lotion_1788181912150.jpg';
import vitaminCSerumImg from '../assets/images/vitamin_c_face_serum_1788181927400.jpg';
import dailyCreamImg from '../assets/images/daily_cream_jar_1788181942212.jpg';
import bodyOilImg from '../assets/images/botanical_body_oil_1788181955600.jpg';
import gentleCleanserImg from '../assets/images/gentle_facial_cleanser_1788181990426.jpg';
import sunscreenImg from '../assets/images/mineral_sunscreen_tube_1788182005018.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'hydrating-body-lotion',
    name: 'Hydrating Body Lotion',
    category: 'Body Care',
    secondaryCategory: 'Moisturizers',
    tagline: 'Lightweight everyday moisture for soft, resilient skin',
    description: 'A fast-absorbing, non-greasy daily body lotion enriched with shea butter, plant squalane, and aloe leaf juice.',
    overview: 'Formulated for daily use after showering, our Hydrating Body Lotion locks in essential moisture without feeling heavy or sticky. Ideal for tropical and temperate climates alike, it absorbs within moments and keeps skin smooth throughout the day.',
    price: 7500,
    formattedPrice: '₦7,500',
    size: '300ml',
    image: hydratingLotionImg,
    isFeatured: true,
    ingredients: ['Water (Aqua)', 'Raw Shea Butter', 'Plant Squalane', 'Glycerin', 'Aloe Vera Leaf Juice', 'Cetearyl Alcohol', 'Vitamin E (Tocopherol)'],
    howToUse: 'Smooth generously over slightly damp skin after bathing. Gently massage in upward circular motions until fully absorbed. Use morning and night for best results.',
    skinType: 'Normal to Dry skin',
    keyBenefits: [
      'Locks in hydration without greasy residue',
      'Softens rough elbows, knees, and dry patches',
      'Comfortable lightweight texture for everyday wear',
      'Free from artificial dyes and harsh fragrances'
    ]
  },
  {
    id: 'cocoa-butter-body-cream',
    name: 'Cocoa Butter Body Cream',
    category: 'Body Care',
    secondaryCategory: 'Moisturizers',
    tagline: 'Rich, comforting moisture for very dry skin',
    description: 'A deeply nourishing rich cream made with unrefined cocoa butter, sweet almond oil, and colloidal oat.',
    overview: 'When your skin demands deeper replenishment, our Cocoa Butter Body Cream provides a dense, protective moisture layer that relieves tightness, flakiness, and ashiness. It has a natural subtle cocoa scent from pure raw butter.',
    price: 8500,
    formattedPrice: '₦8,500',
    size: '250g',
    image: dailyCreamImg,
    isFeatured: true,
    ingredients: ['Pure Unrefined Cocoa Butter', 'Sweet Almond Oil', 'Purified Water', 'Colloidal Oat Flour', 'Beeswax', 'Vegetable Glycerin', 'Panthenol (Pro-Vitamin B5)'],
    howToUse: 'Warm a small amount between your palms and massage firmly into clean skin, paying special attention to dry areas like elbows, heels, and legs.',
    skinType: 'Dry to Very Dry skin',
    keyBenefits: [
      'Deep barrier protection against moisture loss',
      'Smooths uneven dry texture and ashiness',
      'Rich buttery formula that melts upon application',
      'Naturally scented with pure cocoa butter'
    ]
  },
  {
    id: 'vitamin-c-face-serum',
    name: 'Vitamin C Face Serum',
    category: 'Oils & Serums',
    secondaryCategory: 'Face Care',
    tagline: 'Brightening antioxidant serum for dull skin',
    description: 'A stabilized 10% Vitamin C serum with ferulic acid and hyaluronic acid to help promote an even, healthy-looking complexion.',
    overview: 'Our gentle Vitamin C Face Serum is formulated with a stable Vitamin C derivative that targets dullness and everyday environmental stressors. Buffered with hyaluronic acid to keep skin plump and calm during use.',
    price: 9500,
    formattedPrice: '₦9,500',
    size: '30ml',
    image: vitaminCSerumImg,
    isFeatured: true,
    ingredients: ['Water (Aqua)', 'Sodium Ascorbyl Phosphate (Vitamin C)', 'Ferulic Acid', 'Hyaluronic Acid (Sodium Hyaluronate)', 'Glycerin', 'Green Tea Extract', 'Phenoxyethanol'],
    howToUse: 'Dispense 3–4 drops onto clean fingertips and press gently onto clean face and neck in the morning. Follow with your regular moisturizer and sunscreen.',
    skinType: 'All skin types',
    keyBenefits: [
      'Helps brighten overall complexion and dullness',
      'Antioxidant defense against daily urban exposure',
      'Lightweight water-gel texture that layers cleanly',
      'Buffered with hyaluronic acid for gentle hydration'
    ]
  },
  {
    id: 'gentle-facial-cleanser',
    name: 'Gentle Facial Cleanser',
    category: 'Cleansers',
    secondaryCategory: 'Face Care',
    tagline: 'Mild foaming wash that cleanses without stripping',
    description: 'A pH-balanced daily facial cleanser with chamomile extract, calendula, and glycerin for fresh, comfortable skin.',
    overview: 'Effective cleansing shouldn’t leave your face feeling tight or dry. This balanced cleanser lathers into a light, soft foam that removes excess oil, light makeup, and daily buildup while maintaining your skin’s natural barrier.',
    price: 6500,
    formattedPrice: '₦6,500',
    size: '200ml',
    image: gentleCleanserImg,
    isFeatured: true,
    ingredients: ['Aqua', 'Cocamidopropyl Betaine', 'Sodium Lauroyl Sarcosinate', 'Chamomile Extract', 'Calendula Officinalis Flower Extract', 'Vegetable Glycerin', 'Citric Acid'],
    howToUse: 'Dampen face with lukewarm water. Pump 1–2 times into hands, massage over face in circular motions for 45 seconds, then rinse thoroughly.',
    skinType: 'All skin types, including sensitive skin',
    keyBenefits: [
      'Thoroughly cleanses without tight or squeaky feeling',
      'Soothes redness with chamomile and calendula',
      'pH-balanced formula (5.5) respects skin barrier',
      'Rinses completely clean without residue'
    ]
  },
  {
    id: 'nourishing-body-oil',
    name: 'Nourishing Body Oil',
    category: 'Oils & Serums',
    secondaryCategory: 'Body Care',
    tagline: 'Silky botanical oil blend for luminous hydration',
    description: 'A lightweight blend of golden jojoba oil, baobab oil, and cold-pressed marula oil for soft skin and a natural glow.',
    overview: 'Formulated with cold-pressed African botanical oils, this multi-purpose body oil seals in moisture right out of the bath. It glides effortlessly over the skin, absorbing quickly to leave a soft, satin finish without an oily residue.',
    price: 8000,
    formattedPrice: '₦8,000',
    size: '150ml',
    image: bodyOilImg,
    isFeatured: true,
    ingredients: ['Golden Jojoba Seed Oil', 'Cold-Pressed Baobab Seed Oil', 'Marula Oil', 'Sunflower Seed Oil', 'Tocopherol (Vitamin E)', 'Rosemary Leaf Extract'],
    howToUse: 'Apply to damp skin immediately after showering to lock in moisture, or add a few drops to your favorite body lotion for an extra boost of richness.',
    skinType: 'Normal to Very Dry skin',
    keyBenefits: [
      'Provides a natural, healthy sheen to the skin',
      'Fast-absorbing dry-oil finish that won’t stain clothes',
      'Formulated with nutrient-rich plant oils',
      'Can be applied to body, cuticles, and dry hair ends'
    ]
  },
  {
    id: 'daily-moisturizing-cream',
    name: 'Daily Moisturizing Cream',
    category: 'Moisturizers',
    secondaryCategory: 'Face Care',
    tagline: 'Balanced barrier cream for soft, supple facial skin',
    description: 'A lightweight facial cream powered by ceramides, niacinamide (3%), and centella asiatica to support the moisture barrier.',
    overview: 'A dependable daily moisturizer crafted to keep facial skin balanced and calm. It provides long-lasting comfort throughout busy days without clogging pores or feeling greasy under sunscreen or makeup.',
    price: 7000,
    formattedPrice: '₦7,000',
    size: '60ml',
    image: dailyCreamImg,
    isFeatured: true,
    ingredients: ['Aqua', 'Caprylic/Capric Triglyceride', 'Niacinamide (Vitamin B3)', 'Ceramide NP', 'Centella Asiatica Extract', 'Glycerin', 'Sodium Hyaluronate'],
    howToUse: 'After cleansing and applying serum, apply a nickel-sized amount evenly over face and neck. Gently tap until absorbed. Use morning and evening.',
    skinType: 'Normal, Combination, and Sensitive skin',
    keyBenefits: [
      'Strengthens and maintains the skin moisture barrier',
      'Calms redness and helps balance oil production',
      'Non-comedogenic and light under sunscreen',
      'Fragrance-free and alcohol-free'
    ]
  },
  {
    id: 'mineral-sunscreen-spf50',
    name: 'Daily Mineral Sunscreen SPF 50',
    category: 'Sun Care',
    secondaryCategory: 'Face Care',
    tagline: 'Broad-spectrum UVA/UVB protection with zero white cast',
    description: 'A gentle, sheer mineral sunscreen formulated with zinc oxide, vitamin E, and green tea for everyday sun safety.',
    overview: 'Engineered specifically to blend clear on melanin-rich and diverse skin tones, this daily sunscreen shields your skin from everyday solar exposure without a chalky residue, greasiness, or heavy feeling.',
    price: 11000,
    formattedPrice: '₦11,000',
    size: '75ml',
    image: sunscreenImg,
    isFeatured: false,
    ingredients: ['Zinc Oxide (Non-nano 18%)', 'Purified Water', 'Aloe Barbadensis Leaf Juice', 'Green Tea Leaf Extract', 'Tocopheryl Acetate', 'Silica', 'Polyhydroxystearic Acid'],
    howToUse: 'Apply generously to face, neck, and ears 15 minutes before sun exposure as the final step in your morning routine. Reapply every two hours during prolonged outdoor exposure.',
    skinType: 'All skin types',
    keyBenefits: [
      'Broad spectrum SPF 50 protection against UVA & UVB',
      'Carefully formulated to blend transparently on diverse skin tones',
      'Non-greasy, matte-satin finish',
      'Gentle mineral formula suitable for sensitive skin'
    ]
  },
  {
    id: 'exfoliating-coffee-scrub',
    name: 'Exfoliating Coffee & Brown Sugar Body Scrub',
    category: 'Body Care',
    secondaryCategory: 'Cleansers',
    tagline: 'Gentle physical polishing scrub for smooth, invigorated skin',
    description: 'Finely ground Arabica coffee grounds and soft brown sugar blended with sweet almond oil and coconut oil.',
    overview: 'Buff away dead skin cells and reveal smoother, refreshed skin. This scrub combines finely milled coffee with nourishing plant oils so your skin is never left feeling raw or dried out after rinsing.',
    price: 6800,
    formattedPrice: '₦6,800',
    size: '250g',
    image: dailyCreamImg,
    isFeatured: false,
    ingredients: ['Arabica Coffee Grounds', 'Organic Brown Sugar', 'Sweet Almond Oil', 'Virgin Coconut Oil', 'Vitamin E Oil', 'Vanilla Bean Extract'],
    howToUse: 'In the shower, apply a handful of scrub onto wet skin. Massage in gentle circular motions, focusing on elbows, knees, and feet. Rinse with warm water.',
    skinType: 'Body skin (not recommended for delicate face area)',
    keyBenefits: [
      'Removes rough dead skin for silky smooth texture',
      'Leaves a comforting botanical oil veil after rinsing',
      'Invigorates dull-looking skin',
      'Natural biodegradable exfoliating particles'
    ]
  },
  {
    id: 'clarifying-tea-tree-cleanser',
    name: 'Clarifying Tea Tree Facial Cleanser',
    category: 'Cleansers',
    secondaryCategory: 'Face Care',
    tagline: 'Purifying gentle foaming gel for blemish-prone skin',
    description: 'A gentle purifying cleanser featuring tea tree leaf water, willow bark extract (natural BHA), and zinc PCA.',
    overview: 'Designed for skin that experiences occasional congestion, excess shine, or breakouts. It purifies pores and removes surface impurities without over-drying or disrupting the skin’s natural lipid balance.',
    price: 7200,
    formattedPrice: '₦7,200',
    size: '150ml',
    image: gentleCleanserImg,
    isFeatured: false,
    ingredients: ['Melaleuca Alternifolia (Tea Tree) Leaf Water', 'Aqua', 'Decyl Glucoside', 'Willow Bark Extract', 'Zinc PCA', 'Glycerin', 'Allantoin'],
    howToUse: 'Lather between damp hands and massage over face for 30–60 seconds, paying attention to T-zone and jawline. Rinse with cool or lukewarm water.',
    skinType: 'Oily, Combination, and Blemish-prone skin',
    keyBenefits: [
      'Helps unclog pores and manage excess surface shine',
      'Zinc PCA balances sebum without peeling skin',
      'Refreshing herbal feel without artificial fragrance',
      'Maintains comfortable skin equilibrium'
    ]
  },
  {
    id: 'shea-butter-gentle-bar-soap',
    name: 'Shea Butter & Oatmeal Gentle Bar Soap',
    category: 'Cleansers',
    secondaryCategory: 'Body Care',
    tagline: 'Traditional cold-process moisturizing cleansing bar',
    description: 'Crafted with 30% unrefined shea butter, olive oil, and finely ground oats for ultra-gentle daily cleansing.',
    overview: 'A classic, comforting soap bar that produces a creamy, non-drying lather. Suitable for both body and hands, it provides gentle cleansing that respects even sensitive skin.',
    price: 3500,
    formattedPrice: '₦3,500',
    size: '130g',
    image: dailyCreamImg,
    isFeatured: false,
    ingredients: ['Saponified Olive Oil', 'Saponified Shea Butter', 'Saponified Coconut Oil', 'Colloidal Oat Flour', 'Water', 'Vegetable Glycerin'],
    howToUse: 'Lather the soap bar between wet hands or on a soft washcloth. Massage over the body and rinse completely. Keep on a draining soap dish between uses.',
    skinType: 'All skin types, excellent for dry or sensitive skin',
    keyBenefits: [
      'Gentle cold-process saponification preserves glycerin',
      'Colloidal oatmeal soothes itchy dry skin',
      'Zero synthetic detergents or harsh sulfates',
      'Long-lasting solid bar format'
    ]
  },
  {
    id: 'soothing-lip-care-balm',
    name: 'Soothing Botanical Lip Balm',
    category: 'Moisturizers',
    secondaryCategory: 'Body Care',
    tagline: 'Long-lasting hydration and barrier repair for chapped lips',
    description: 'A comforting blend of shea butter, beeswax, castor oil, and vitamin E to nourish and protect dry lips.',
    overview: 'Keep dry, peeling lips soft and conditioned in any weather. This balm creates an invisible, long-lasting protective seal that prevents moisture evaporation without feeling sticky.',
    price: 2500,
    formattedPrice: '₦2,500',
    size: '15g',
    image: sunscreenImg,
    isFeatured: false,
    ingredients: ['Beeswax', 'Unrefined Shea Butter', 'Castor Seed Oil', 'Coconut Oil', 'Tocopherol (Vitamin E)', 'Natural Peppermint Oil (<0.2%)'],
    howToUse: 'Apply directly to lips whenever dryness or tightness is felt. Reapply throughout the day and before sleeping for overnight conditioning.',
    skinType: 'All skin types',
    keyBenefits: [
      'Immediately relieves dry, chapped lips',
      'Smooth application without tacky or glossy weight',
      'Pocket-sized everyday essential',
      'Nutrient-dense natural wax and butter base'
    ]
  },
  {
    id: 'rosehip-replenishing-night-oil',
    name: 'Rosehip Replenishing Night Oil',
    category: 'Oils & Serums',
    secondaryCategory: 'Face Care',
    tagline: 'Cold-pressed virgin rosehip seed oil for overnight nourishment',
    description: '100% pure cold-pressed Rosa Canina seed oil rich in provitamin A and essential fatty acids for overnight skin recovery.',
    overview: 'A prized facial oil that works in harmony with your skin’s natural nighttime renewal cycle. It absorbs readily, leaving skin waking up visibly soft, rested, and nourished.',
    price: 8800,
    formattedPrice: '₦8,800',
    size: '30ml',
    image: bodyOilImg,
    isFeatured: false,
    ingredients: ['100% Pure Cold-Pressed Rosa Canina (Rosehip) Seed Oil', 'Tocopherol (Vitamin E 0.5%)'],
    howToUse: 'At night, as the final step in your routine, warm 2–3 drops in your hands and gently press into slightly damp skin on face and neck.',
    skinType: 'Normal, Dry, and Mature skin',
    keyBenefits: [
      'Rich in linoleic and linolenic essential fatty acids',
      'Supports healthy skin barrier resilience overnight',
      'Deeply nourishing without clogging pores',
      'Naturally amber in color from natural carotenoids'
    ]
  }
];

export const CATEGORIES_LIST = [
  {
    id: 'Body Care',
    name: 'Body Care',
    description: 'Everyday lotions, rich creams, and exfoliating scrubs formulated for smooth, supple body skin.',
    itemCount: 4
  },
  {
    id: 'Face Care',
    name: 'Face Care',
    description: 'Gentle facial cleansers, daily moisturizers, and balanced treatments for healthy facial skin.',
    itemCount: 6
  },
  {
    id: 'Moisturizers',
    name: 'Moisturizers',
    description: 'Daily barrier creams, replenishing body lotions, and targeted balms to lock in hydration.',
    itemCount: 4
  },
  {
    id: 'Cleansers',
    name: 'Cleansers',
    description: 'Mild cleansers and traditional artisan soaps that cleanse without stripping natural moisture.',
    itemCount: 4
  },
  {
    id: 'Oils & Serums',
    name: 'Oils & Serums',
    description: 'Concentrated antioxidant serums and nutrient-dense botanical oils for targeted care.',
    itemCount: 4
  },
  {
    id: 'Sun Care',
    name: 'Sun Care',
    description: 'Everyday broad-spectrum sun protection formulated to wear comfortably on diverse skin tones.',
    itemCount: 1
  }
] as const;

export const COMPANY_DETAILS = {
  name: 'Liora Skincare',
  tagline: 'Simple Care for Healthy-Looking Skin',
  address: '14 Commercial Avenue, Sabo, Yaba, Lagos, Nigeria',
  phone: '+234 801 234 5678',
  phoneDisplay: '+234 801 234 5678',
  whatsapp: '+234 809 876 5432',
  whatsappNumber: '2348098765432',
  email: 'hello@lioraskincare.ng',
  hours: {
    weekdays: 'Monday – Friday: 9:00 AM – 6:00 PM',
    saturday: 'Saturday: 10:00 AM – 4:00 PM',
    sunday: 'Sunday: Closed'
  },
  socials: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    whatsapp: 'https://wa.me/2348098765432'
  }
};
