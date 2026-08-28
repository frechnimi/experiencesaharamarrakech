/**
 * Morocco Tours, Excursions & Transfers Data Store
 * Expérience Sahara Marrakech - Official Catalog
 * Contact: Ayman (+212 649 252 133)
 */

const STORAGE_KEYS = {
  SERVICES: "exp_sahara_services_catalog_v3",
  RESERVATIONS: "exp_sahara_reservations_data_v3"
};

const INITIAL_SERVICES_DATA = [
  /* ==========================================================================
     1. EXCURSIONS PRIVÉES (DÉPART MARRAKECH) - Véhicule privé jusqu'à 7 personnes
     ========================================================================== */
  {
    id: "excursion-marrakech-ouarzazate",
    section: "excursions",
    title: {
      fr: "Marrakech → Ouarzazate & Kasbah Aït Ben Haddou",
      en: "Marrakech → Ouarzazate & Kasbah Ait Ben Haddou",
      es: "Marrakech → Ouarzazate y Kasbah Ait Ben Haddou",
      ar: "مراكش ← ورزازات وقصبة آيت بن حدو التاريخية"
    },
    category: "excursions",
    departure: "marrakech",
    destination: "ouarzazate",
    durationText: {
      fr: "1 Journée (07h30 – 19h00)",
      en: "Full Day (07:30 – 19:00)",
      es: "Día Completo (07:30 – 19:00)",
      ar: "يوم كامل (07:30 – 19:00)"
    },
    capacity: "Véhicule privé (1 à 7 pers.)",
    priceEUR: 120, // Tarif global par véhicule
    priceMAD: 1300,
    rating: 5.0,
    reviewsCount: 142,
    status: "active",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
    badge: {
      fr: "Incontournable",
      en: "Must-See",
      es: "Imprescindible",
      ar: "الأكثر طلباً"
    },
    overview: {
      fr: "Traversez le spectaculaire col du Tizi n'Tichka (2 260 m) à travers les montagnes du Haut Atlas. Découvrez la célèbre Kasbah d'Aït Ben Haddou, classée au patrimoine mondial de l'UNESCO et décor de films mythiques (Gladiator, Game of Thrones), puis visitez la ville de Ouarzazate, la Kasbah de Taourirt et les studios de cinéma.",
      en: "Cross the breathtaking Tizi n'Tichka pass (2,260m) through the High Atlas Mountains. Explore the UNESCO World Heritage Kasbah Ait Ben Haddou, famous for Hollywood movies (Gladiator, Game of Thrones), and visit Ouarzazate, Taourirt Kasbah, and the film studios.",
      es: "Cruza el espectacular paso Tizi n'Tichka (2.260 m) por el Alto Atlas. Visita la famosa Kasbah de Ait Ben Haddou (Patrimonio UNESCO) y Ouarzazate con sus estudios de cine.",
      ar: "عبور ممر تيزي نتيشكا الشاهق (2260م) بجبال الأطلس الكبير. زيارة قصبة آيت بن حدو العالمية وقصبة تاوريرت واستوديوهات السينما بمدينة ورزازات."
    },
    included: [
      { fr: "Véhicule privé moderne et climatisé (jusqu'à 7 places)", en: "Modern air-conditioned private vehicle (up to 7 seats)", ar: "سيارة خاصة حديثة ومكيفة (حتى 7 مقاعد)" },
      { fr: "Chauffeur professionnel dédié et expérimenté", en: "Dedicated professional experienced driver", ar: "سائق محترف ومخصص طوال اليوم" },
      { fr: "Carburant, péages et frais de parking inclus", en: "Fuel, road tolls, and parking included", ar: "المحروقات ومصاريف الطريق ومواقف السيارات" },
      { fr: "Prise en charge et retour à votre Riad / Hôtel", en: "Hotel / Riad roundtrip pickup and drop-off", ar: "التوصيل ذهاباً وإياباً من وإلى مقر إقامتكم" }
    ],
    excluded: [
      { fr: "Déjeuner et boissons personnelles", en: "Lunch and personal drinks", ar: "وجبة الغداء والمشروبات الشخصية" },
      { fr: "Entrées aux monuments et pourboires", en: "Monuments entrance fees and tips", ar: "رسوم المتاحف والإكراميات" }
    ]
  },
  {
    id: "excursion-marrakech-agafay",
    section: "excursions",
    title: {
      fr: "Marrakech → Désert d'Agafay (Sunset, Dîner & Show de Feu)",
      en: "Marrakech → Agafay Desert (Sunset, Dinner & Fire Show)",
      es: "Marrakech → Desierto de Agafay (Atardecer, Cena y Show de Fuego)",
      ar: "مراكش ← صحراء أكافاي (غروب الشمس، عشاء وعرض النار)"
    },
    category: "excursions",
    departure: "marrakech",
    destination: "agafay",
    durationText: {
      fr: "Demi-Journée / Soirée (16h30 – 22h30)",
      en: "Evening (16:30 – 22:30)",
      es: "Tarde/Noche (16:30 – 22:30)",
      ar: "أمسية (16:30 – 22:30)"
    },
    capacity: "Véhicule privé (1 à 7 pers.)",
    priceEUR: 50,
    priceMAD: 550,
    rating: 5.0,
    reviewsCount: 198,
    status: "active",
    image: "assets/fire_show.jpg",
    badge: {
      fr: "Coup de Cœur",
      en: "Best-Seller",
      es: "Favorito",
      ar: "سهرة مميزة"
    },
    overview: {
      fr: "Échappez à l'effervescence de la ville pour le désert de pierres d'Agafay à 40 min de Marrakech. Admirez un coucher de soleil magique sur les collines arides, profitez d'une balade à dromadaire, savourez un dîner gastronomique marocain sous les étoiles et assistez à un spectaculaire show de feu et musique live.",
      en: "Escape to the rocky Agafay Desert just 40 minutes from Marrakech. Experience a sunset camel ride, candlelit Moroccan dinner under the stars, live Gnawa music, and a fire juggling show.",
      es: "Escapada al desierto de Agafay al atardecer: paseo en dromedario, cena tradicional bajo las estrellas, música en vivo y espectáculo de fuego.",
      ar: "رحلة ساحرة إلى صحراء أكافاي القريبة من مراكش: ركوب الجمال عند الغروب، عشاء مغربي فاخر تحت أضواء النجوم مع فرقة موسيقية وعرض النار المبهر."
    },
    included: [
      { fr: "Transport privé A/R en véhicule tout confort", en: "Roundtrip private transport in comfortable vehicle", ar: "نقل خاص ذهاباً وإياباً في سيارة مريحة" },
      { fr: "Chauffeur privé à disposition jusqu'à la fin de la soirée", en: "Private driver waiting until the end of dinner", ar: "سائق مخصص في انتظاركم حتى نهاية السهرة" }
    ],
    excluded: [
      { fr: "Dîner et activités optionnelles sur place", en: "Dinner and optional activities on-site", ar: "العشاء والأنشطة الإضافية حسب الرغبة" }
    ]
  },
  {
    id: "excursion-marrakech-ourika",
    section: "excursions",
    title: {
      fr: "Marrakech → Vallée de l'Ourika & Cascades de Setti Fatma",
      en: "Marrakech → Ourika Valley & Setti Fatma Waterfalls",
      es: "Marrakech → Valle de Ourika y Cascadas de Setti Fatma",
      ar: "مراكش ← وادي أوريكا وشلالات ستي فاطمة"
    },
    category: "excursions",
    departure: "marrakech",
    destination: "ourika",
    durationText: {
      fr: "1 Journée (09h00 – 17h00)",
      en: "Full Day (09:00 – 17:00)",
      es: "Día Completo (09:00 – 17:00)",
      ar: "يوم كامل (09:00 – 17:00)"
    },
    capacity: "Véhicule privé (1 à 7 pers.)",
    priceEUR: 60,
    priceMAD: 650,
    rating: 4.9,
    reviewsCount: 160,
    status: "active",
    image: "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?auto=format&fit=crop&w=800&q=80",
    badge: {
      fr: "Nature & Fraîcheur",
      en: "Nature & Mountains",
      es: "Naturaleza",
      ar: "طبيعة وشلالات"
    },
    overview: {
      fr: "Explorez la luxuriante Vallée de l'Ourika au pied des sommets de l'Atlas. Visitez une coopérative féminine d'huile d'argan, grimpez jusqu'aux célèbres 7 cascades de Setti Fatma et dégustez un savoureux tajine les pieds dans l'eau fraîche de la rivière.",
      en: "Explore the lush Ourika Valley nestled at the foot of the Atlas Mountains. Visit traditional Berber homes and argan cooperatives, hike to the 7 Setti Fatma waterfalls, and dine alongside the river.",
      es: "Descubre el frondoso Valle de Ourika, visita pueblos bereberes, camina hasta las cascadas de Setti Fatma y almuerza junto al río.",
      ar: "اكتشاف وادي أوريكا الخلاب بجبال الأطلس الكبير، وزيارة شلالات ستي فاطمة وتناول طاجين مغربي لذيذ بجانب مجرى النهر المنعش."
    },
    included: [
      { fr: "Véhicule privé climatisé avec chauffeur dédié", en: "Private air-conditioned vehicle with dedicated driver", ar: "سيارة خاصة مكيفة مع سائق خاص" },
      { fr: "Arrêts panoramiques et visites de villages berbères", en: "Panoramic photo stops and Berber village visits", ar: "توقفات تصويرية وزيارات القرى والتعاونيات" }
    ],
    excluded: [
      { fr: "Déjeuner au restaurant et guide local de montagne", en: "Lunch and mountain local guide", ar: "وجبة الغداء والمرشد المحلي بالجبل" }
    ]
  },
  {
    id: "excursion-marrakech-3-vallees",
    section: "excursions",
    title: {
      fr: "Circuit des 3 Vallées (Ourika, Asni & Plateau du Kik)",
      en: "The 3 Valleys Circuit (Ourika, Asni & Kik Plateau)",
      es: "Circuito de los 3 Valles (Ourika, Asni y Plateau del Kik)",
      ar: "جولة الوديان الثلاثة (أوريكا، أسني وهضبة الكيك)"
    },
    category: "excursions",
    departure: "marrakech",
    destination: "atlas-valleys",
    durationText: {
      fr: "1 Journée (08h30 – 17h30)",
      en: "Full Day (08:30 – 17:30)",
      es: "Día Completo (08:30 – 17:30)",
      ar: "يوم كامل (08:30 – 17:30)"
    },
    capacity: "Véhicule privé (1 à 7 pers.)",
    priceEUR: 80,
    priceMAD: 900,
    rating: 4.9,
    reviewsCount: 110,
    status: "active",
    image: "assets/luxury_riad.jpg",
    badge: {
      fr: "Panoramique",
      en: "Scenic Views",
      es: "Panorámica",
      ar: "مناظر بانورامية"
    },
    overview: {
      fr: "Une boucle panoramique d'exception combinant les gorges de Moulay Brahim, la vallée verdoyante d'Ourika, la vallée fruitière d'Asni, le lac artificiel de Lalla Takerkoust et la traversée du majestueux plateau calcaire du Kik face aux neiges du mont Toubkal.",
      en: "A stunning scenic loop through Moulay Brahim gorges, Ourika valley, Asni valley, Lalla Takerkoust lake, and the dramatic Kik limestone plateau facing Mount Toubkal.",
      es: "Impresionante circuito circular por las gargantas de Moulay Brahim, valle de Ourika, Asni, lago Lalla Takerkoust y la meseta del Kik.",
      ar: "جولة دائرية ساحرة تشمل مضايق مولاي براهيم، وادي أوريكا، وادي أسني، بحيرة لالة تاكركوست وهضبة الكيك بإطلالة مباشرة على جبل توبقال."
    },
    included: [
      { fr: "Véhicule privé tout confort avec chauffeur", en: "Comfortable private vehicle with driver", ar: "سيارة خاصة مريحة مع سائق" },
      { fr: "Carburant et itinéraire complet des 3 vallées", en: "Fuel and full 3 valleys scenic route", ar: "المحروقات والمسار السياحي للوديان الثلاثة" }
    ],
    excluded: [
      { fr: "Déjeuner et dépenses personnelles", en: "Lunch and personal expenses", ar: "وجبة الغداء والمصاريف الشخصية" }
    ]
  },
  {
    id: "excursion-marrakech-essaouira",
    section: "excursions",
    title: {
      fr: "Marrakech → Essaouira Mogador (Côte Atlantique)",
      en: "Marrakech → Essaouira Mogador (Atlantic Coast)",
      es: "Marrakech → Essaouira Mogador (Costa Atlántica)",
      ar: "مراكش ← مدينة الصويرة موكادور (ساحل الأطلسي)"
    },
    category: "excursions",
    departure: "marrakech",
    destination: "essaouira",
    durationText: {
      fr: "1 Journée (08h00 – 19h00)",
      en: "Full Day (08:00 – 19:00)",
      es: "Día Completo (08:00 – 19:00)",
      ar: "يوم كامل (08:00 – 19:00)"
    },
    capacity: "Véhicule privé (1 à 7 pers.)",
    priceEUR: 100,
    priceMAD: 1100,
    rating: 5.0,
    reviewsCount: 215,
    status: "active",
    image: "assets/essaouira_boats.jpg",
    badge: {
      fr: "Bord de Mer",
      en: "Coastal Jewel",
      es: "Costa Azul",
      ar: "مدينة الرياح"
    },
    overview: {
      fr: "Partez à la découverte d'Essaouira, l'ancienne Mogador fortifiée par les Portugais. Flânez dans ses ruelles blanches et bleues, admirez les barques de pêche traditionnelles, visitez les remparts de la Sqala face à l'océan, et dégustez du poisson grillé tout frais sur le port.",
      en: "Discover Essaouira, the historic fortified coastal town. Stroll along charming blue and white alleys, see iconic blue fishing boats, visit the ramparts, and enjoy fresh ocean seafood.",
      es: "Pasa el día en Essaouira Mogador: murallas frente al Atlántico, puerto pesquero de barcas azules, medina histórica y marisco fresco.",
      ar: "اكتشف سحر مدينة الصويرة التاريخية وأسوار موكادور البرتغالية، قوارب الصيد الزرقاء الشهيرة، أسواق الحرفيين والشواطئ الأطلسية الساحرة."
    },
    included: [
      { fr: "Transport privé A/R climatisé avec chauffeur", en: "Roundtrip private A/C transport with driver", ar: "نقل خاص ذهاباً وإياباً مع سائق محترف" },
      { fr: "Arrêt sur la route des arganiers et chèvres dans les arbres", en: "Photo stop at argan trees and cooperatives", ar: "توقف عند شجر الأركان والتعاونيات التقليدية" }
    ],
    excluded: [
      { fr: "Déjeuner poisson et visites payantes", en: "Seafood lunch and paid monument entries", ar: "وجبة الغداء وزيارة المتاحف" }
    ]
  },
  {
    id: "excursion-marrakech-ouzoud",
    section: "excursions",
    title: {
      fr: "Marrakech → Cascades d'Ouzoud (Moyen Atlas)",
      en: "Marrakech → Ouzoud Waterfalls (Middle Atlas)",
      es: "Marrakech → Cascadas de Ouzoud (Medio Atlas)",
      ar: "مراكش ← شلالات أوزود الساحرة (الأطلس المتوسط)"
    },
    category: "excursions",
    departure: "marrakech",
    destination: "ouzoud",
    durationText: {
      fr: "1 Journée (08h00 – 18h30)",
      en: "Full Day (08:00 – 18:30)",
      es: "Día Completo (08:00 – 18:30)",
      ar: "يوم كامل (08:00 – 18:30)"
    },
    capacity: "Véhicule privé (1 à 7 pers.)",
    priceEUR: 110,
    priceMAD: 1200,
    rating: 4.9,
    reviewsCount: 178,
    status: "active",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
    badge: {
      fr: "Grandes Cascades",
      en: "110m Falls",
      es: "Cascadas 110m",
      ar: "أعلى شلالات"
    },
    overview: {
      fr: "Découvrez les plus hautes chutes d'eau du Maroc et d'Afrique du Nord (110 mètres de haut). Profitez d'une promenade sous les oliveraies, approchez les cascades en petite barque traditionnelle et observez les singes magots sauvages en liberté.",
      en: "Marvel at North Africa's highest cascades (110m). Hike down through century-old olive groves, ride a boat close to the roaring falls, and encounter wild Barbary macaque monkeys.",
      es: "Visita las cascadas más altas del norte de África (110m). Pasea entre olivares, navega en barca al pie de las cataratas y ve monos en libertad.",
      ar: "استمتع بمشاهدة أعلى شلالات في المغرب بارتفاع 110 أمتار، مع جولة بالقارب تحت الشلال ورؤية قردة المكاك البرية والمناظر الطبيعية الرائعة."
    },
    included: [
      { fr: "Véhicule privé et chauffeur dédié aller-retour", en: "Private vehicle and dedicated driver roundtrip", ar: "سيارة خاصة وسائق مخصص ذهاباً وإياباً" },
      { fr: "Prise en charge à votre Riad ou Hôtel", en: "Hotel or Riad door-to-door pickup", ar: "التوصيل من وإلى الفندق أو الرياض" }
    ],
    excluded: [
      { fr: "Déjeuner et promenade en barque (optionnelle)", en: "Lunch and boat ride (optional)", ar: "وجبة الغداء وجولة القارب (اختيارية)" }
    ]
  },
  {
    id: "excursion-marrakech-imilchil",
    section: "excursions",
    title: {
      fr: "Marrakech → Imilchil & Lacs du Haut Atlas",
      en: "Marrakech → Imilchil & High Atlas Lakes",
      es: "Marrakech → Imilchil y Lagos del Alto Atlas",
      ar: "مراكش ← إملشيل وبحيرات الأطلس الكبير (تيسليت وإسلي)"
    },
    category: "excursions",
    departure: "marrakech",
    destination: "imilchil",
    durationText: {
      fr: "Journée Prolongée (06h30 – 21h00)",
      en: "Full Day Expedition (06:30 – 21:00)",
      es: "Jornada Completa (06:30 – 21:00)",
      ar: "رحلة يوم كامل (06:30 – 21:00)"
    },
    capacity: "Véhicule privé (1 à 7 pers.)",
    priceEUR: 160,
    priceMAD: 1750,
    rating: 5.0,
    reviewsCount: 64,
    status: "active",
    image: "assets/coastal_tower.jpg",
    badge: {
      fr: "Authentique & Sauvage",
      en: "Wild Mountain Adventure",
      es: "Aventura Auténtica",
      ar: "طبيعة عذراء"
    },
    overview: {
      fr: "Une expédition montagnarde exclusive au cœur du Haut Atlas oriental vers le célèbre village d'Imilchil (connu pour son festival des fiançailles). Découvrez les splendides lacs d'altitude Isli et Tislit aux eaux turquoise et la culture berbère authentique des tribus Aït Hadiddou.",
      en: "An exclusive high-altitude expedition to Imilchil in the Eastern High Atlas. Discover the legendary turquoise lakes Tislit and Isli and experience raw, untouched Berber mountain hospitality.",
      es: "Expedición a Imilchil y a los legendarios lagos gemelos Isli y Tislit en el corazón del Alto Atlas oriental.",
      ar: "رحلة جبلية استثنائية إلى قرية إملشيل وبحيرتي تيسليت وإسلي الأسطوريتين في قلب الأطلس الكبير واكتشاف عادات قبائل آيت حديدو الأصيلة."
    },
    included: [
      { fr: "Véhicule 4x4 / Minivan privé robuste avec chauffeur expert", en: "Sturdy private 4x4 / Minivan with expert mountain driver", ar: "سيارة دفع رباعي أو ميني فان مع سائق خبير بالمسالك الجبلية" },
      { fr: "Carburant complet et pauses photos panoramiques", en: "Full fuel and scenic photo stops", ar: "المحروقات والتوقفات البانورامية" }
    ],
    excluded: [
      { fr: "Déjeuner et boissons", en: "Lunch and drinks", ar: "وجبة الغداء والمشروبات" }
    ]
  },

  /* ==========================================================================
     2. CIRCUITS PRIVÉS DÉSERT (Hébergement non inclus / Véhicule + Chauffeur)
     ========================================================================== */
  {
    id: "circuit-2-jours-zagora",
    section: "circuits",
    title: {
      fr: "Circuit Privé 2 Jours / 1 Nuit (Zagora & Vallée du Draa)",
      en: "2-Day / 1-Night Private Desert Tour (Zagora & Draa Valley)",
      es: "Circuito Privado 2 Días / 1 Noche (Zagora y Valle del Draa)",
      ar: "جولة صحراوية خاصة يومان / ليلة واحدة (زاكورة ووادي درعة)"
    },
    category: "circuits",
    departure: "marrakech",
    destination: "zagora",
    durationText: {
      fr: "2 Jours / 1 Nuit",
      en: "2 Days / 1 Night",
      es: "2 Días / 1 Noche",
      ar: "يومان / ليلة واحدة"
    },
    capacity: "Véhicule privé (1 à 7 pers.) + Chauffeur Dédié",
    priceEUR: 220, // Tarif global véhicule + chauffeur
    priceMAD: 2400,
    rating: 4.9,
    reviewsCount: 154,
    status: "active",
    badge: {
      fr: "Formule Chauffeur",
      en: "Driver Package",
      es: "Pack Chófer",
      ar: "سيارة وسائق"
    },
    image: "assets/fire_show.jpg",
    overview: {
      fr: "Formule globale Véhicule Privé + Chauffeur professionnel dédié (hébergement libre ou selon vos souhaits).\n\n• Jour 1 : Marrakech – Col Tizi n'Tichka – Kasbah Aït Ben Haddou – Ouarzazate – Vallée du Draa – Arrivée à Zagora, balade à dos de dromadaire pour le coucher de soleil et nuitée dans le désert de Zagora.\n• Jour 2 : Lever de soleil sur les dunes de Zagora – Agdz – Ouarzazate – Traversée du Haut Atlas – Retour à Marrakech en soirée.",
      en: "Private Vehicle + Dedicated Professional Driver package (accommodation not included / flexible).\n\n• Day 1: Marrakech – Tizi n'Tichka – Ait Ben Haddou – Ouarzazate – Draa Valley – Zagora sunset camel trek and desert night.\n• Day 2: Zagora sunrise – Agdz – Ouarzazate – High Atlas – Return to Marrakech.",
      es: "Paquete Vehículo Privado + Chófer Profesional dedicado (alojamiento no incluido / a tu elección).\n\n• Día 1: Marrakech – Tizi n'Tichka – Ait Ben Haddou – Ouarzazate – Valle del Draa – Zagora y paseo en camello.\n• Día 2: Amanecer en Zagora – Agdz – Ouarzazate – Regreso a Marrakech.",
      ar: "عرض شامل: سيارة خاصة + سائق محترف مخصص طوال اليومين (المبيت اختياري حسب رغبتكم).\n\n• اليوم 1: مراكش – تيزي نتيشكا – آيت بن حدو – وارزازات – وادي درعة – زاكورة وركوب الجمال والمبيت بالصحراء.\n• اليوم 2: شروق الشمس بزاكورة – أكدز – وارزازات – العودة إلى مراكش مساءً."
    },
    included: [
      { fr: "Véhicule privé climatisé à votre disposition exclusive pendant 2 jours", en: "Private air-conditioned vehicle for 2 full days", ar: "سيارة خاصة مكيفة تحت تصرفكم طوال اليومين" },
      { fr: "Chauffeur professionnel dédié, carburant et péages inclus", en: "Dedicated professional driver, fuel, and tolls included", ar: "سائق محترف خاص، المحروقات ومصاريف الطريق" },
      { fr: "Prise en charge et retour à votre adresse à Marrakech", en: "Door-to-door Marrakech pickup and return", ar: "التوصيل من وإلى مقر إقامتكم بمراكش" }
    ],
    excluded: [
      { fr: "Hébergement / Bivouac (réservable séparément ou sur place)", en: "Accommodation / Desert camp (booked separately or directly)", ar: "المبيت / المخيم (يمكن حجزه بشكل مستقل)" },
      { fr: "Repas, déjeuners et boissons", en: "Meals, lunches and drinks", ar: "الوجبات والمشروبات" }
    ]
  },
  {
    id: "circuit-3-jours-merzouga",
    section: "circuits",
    title: {
      fr: "Circuit Privé 3 Jours / 2 Nuits (Merzouga Erg Chebbi)",
      en: "3-Day / 2-Night Private Desert Tour (Merzouga Erg Chebbi)",
      es: "Circuito Privado 3 Días / 2 Noches (Merzouga Erg Chebbi)",
      ar: "جولة صحراوية خاصة 3 أيام / ليلتان (صحراء مرزوكة عرق الشبي)"
    },
    category: "circuits",
    departure: "marrakech",
    destination: "merzouga",
    durationText: {
      fr: "3 Jours / 2 Nuits",
      en: "3 Days / 2 Nights",
      es: "3 Días / 2 Noches",
      ar: "3 أيام / ليلتان"
    },
    capacity: "Véhicule privé (1 à 7 pers.) + Chauffeur Dédié",
    priceEUR: 320, // Tarif global véhicule + chauffeur
    priceMAD: 3500,
    rating: 5.0,
    reviewsCount: 230,
    status: "active",
    badge: {
      fr: "Grand Sahara",
      en: "Great Sahara",
      es: "Gran Sahara",
      ar: "الصحراء الكبرى"
    },
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    overview: {
      fr: "Formule globale Véhicule Privé + Chauffeur professionnel dédié pour explorer les dunes géantes de Merzouga.\n\n• Jour 1 : Marrakech – Tizi n'Tichka – Kasbah Aït Ben Haddou – Ouarzazate – Vallée des Roses – Nuitée dans les Gorges du Dadès.\n• Jour 2 : Gorges du Dadès – Gorges du Todra – Erfoud – Rissani – Dunes de Merzouga Erg Chebbi (Coucher de soleil à dos de dromadaire et nuitée au Bivouac sous les étoiles).\n• Jour 3 : Lever de soleil sur les dunes de l'Erg Chebbi – Rissani – Vallée du Draa – Ouarzazate – Retour à Marrakech en soirée.",
      en: "Private Vehicle + Dedicated Professional Driver package to experience the giant dunes of Merzouga.\n\n• Day 1: Marrakech – Tizi n'Tichka – Ait Ben Haddou – Ouarzazate – Dades Gorges.\n• Day 2: Dades Gorges – Todra Gorges – Erfoud – Merzouga Erg Chebbi sunset camel ride and desert camp.\n• Day 3: Erg Chebbi sunrise – Draa Valley – Ouarzazate – Return to Marrakech.",
      es: "Paquete Vehículo Privado + Chófer Profesional dedicado para explorar las dunas de Merzouga.\n\n• Día 1: Marrakech – Ait Ben Haddou – Ouarzazate – Gargantas del Dades.\n• Día 2: Gargantas del Todra – Erfoud – Dunas de Merzouga y noche en el desierto.\n• Día 3: Amanecer en Merzouga – Valle del Draa – Regreso a Marrakech.",
      ar: "عرض شامل: سيارة خاصة + سائق محترف مخصص لمدة 3 أيام لاستكشاف كثبان مرزوكة الذهبية.\n\n• اليوم 1: مراكش – تيزي نتيشكا – آيت بن حدو – وارزازات – مضايق دادس.\n• اليوم 2: مضايق تودغى – أرفود – ريساني – كثبان مرزوكة عرق الشبي وركوب الجمال والمبيت بالمخيم.\n• اليوم 3: شروق الشمس بمرزوكة – وادي درعة – وارزازات – العودة إلى مراكش مساءً."
    },
    included: [
      { fr: "Véhicule privé moderne et climatisé à disposition exclusive pendant 3 jours", en: "Private air-conditioned vehicle exclusively for 3 full days", ar: "سيارة خاصة مكيفة تحت تصرفكم طوال الـ 3 أيام" },
      { fr: "Chauffeur professionnel dédié, carburant complet et péages", en: "Dedicated professional driver, fuel, and road tolls", ar: "سائق محترف مخصص والمحروقات ومصاريف الطريق" },
      { fr: "Prise en charge et assistance complète tout au long du trajet", en: "Full trip assistance and door-to-door pickup in Marrakech", ar: "المرافقة والتوصيل ذهاباً وإياباً من مراكش" }
    ],
    excluded: [
      { fr: "Hébergements (hôtels et bivouac à Merzouga)", en: "Accommodations (hotels and desert camp in Merzouga)", ar: "المبيت (الفنادق والمخيم بمرزوكة)" },
      { fr: "Repas, déjeuners et dépenses personnelles", en: "Meals, lunches and personal expenses", ar: "الوجبات والمصاريف الشخصية" }
    ]
  },

  /* ==========================================================================
     3. TRANSFERTS INTER-VILLES (ALLER SIMPLE) - Véhicule privé jusqu'à 7 personnes
     ========================================================================== */
  {
    id: "transfert-marrakech-agadir",
    section: "intercity",
    title: {
      fr: "Transfert Privé Marrakech → Agadir (ou Taghazout)",
      en: "Private Transfer Marrakech → Agadir (or Taghazout)",
      es: "Traslado Privado Marrakech → Agadir (o Taghazout)",
      ar: "توصيل خاص مراكش ← أكادير (أو تغازوت)"
    },
    category: "intercity",
    departure: "marrakech",
    destination: "agadir",
    durationText: {
      fr: "Aller Simple (~2h45 / 230 km)",
      en: "One Way (~2h45 / 230 km)",
      es: "Sólo Ida (~2h45 / 230 km)",
      ar: "ذهاب مباشر (~2h45 / 230 كم)"
    },
    capacity: "Véhicule privé (1 à 7 pers.)",
    priceEUR: 100,
    priceMAD: 1100,
    rating: 5.0,
    reviewsCount: 95,
    status: "active",
    badge: {
      fr: "Autoroute Directe",
      en: "Direct Highway",
      es: "Autovía Directa",
      ar: "طريق سيار مباشر"
    },
    image: "assets/beach_horse_camel.jpg",
    overview: {
      fr: "Liaison directe et confortable en véhicule privé et climatisé de Marrakech vers Agadir ou Taghazout Bay. Prise en charge à l'adresse de votre choix et dépose exacte à votre hôtel, riad ou aéroport d'Agadir Al Massira.",
      en: "Direct, comfortable, and air-conditioned private transfer from Marrakech to Agadir or Taghazout. Door-to-door service with luggage assistance.",
      es: "Traslado privado directo y cómodo desde Marrakech hasta Agadir o Taghazout. Servicio puerta a puerta.",
      ar: "توصيل خاص ومريح عبر الطريق السيار من مراكش إلى أكادير أو تغازوت مع التوصيل إلى باب الفندق أو المطار."
    },
    included: [
      { fr: "Véhicule privé climatisé et spacieux (jusqu'à 7 places)", en: "Spacious private air-conditioned vehicle (up to 7 seats)", ar: "سيارة خاصة مكيفة ومريحة (حتى 7 مقاعد)" },
      { fr: "Chauffeur professionnel, péages d'autoroute et carburant", en: "Professional driver, highway tolls, and fuel", ar: "سائق محترف، رسوم الطريق السيار والمحروقات" },
      { fr: "Aide aux bagages et pauses rafraîchissement au choix", en: "Luggage assistance and flexible rest stops", ar: "المساعدة في حمل الأمتعة والتوقفات حسب رغبتكم" }
    ],
    excluded: [
      { fr: "Dépenses personnelles", en: "Personal expenses", ar: "المصاريف الشخصية" }
    ]
  },
  {
    id: "transfert-marrakech-casablanca",
    section: "intercity",
    title: {
      fr: "Transfert Privé Marrakech → Casablanca (Ville ou Aéroport CMN)",
      en: "Private Transfer Marrakech → Casablanca (City or CMN Airport)",
      es: "Traslado Privado Marrakech → Casablanca (Ciudad o Aeropuerto)",
      ar: "توصيل خاص مراكش ← الدار البيضاء (المدينة أو مطار محمد الخامس)"
    },
    category: "intercity",
    departure: "marrakech",
    destination: "casablanca",
    durationText: {
      fr: "Aller Simple (~2h45 / 240 km)",
      en: "One Way (~2h45 / 240 km)",
      es: "Sólo Ida (~2h45 / 240 km)",
      ar: "ذهاب مباشر (~2h45 / 240 كم)"
    },
    capacity: "Véhicule privé (1 à 7 pers.)",
    priceEUR: 110,
    priceMAD: 1200,
    rating: 4.9,
    reviewsCount: 130,
    status: "active",
    badge: {
      fr: "Direct Ville / Aéroport",
      en: "City / Airport Direct",
      es: "Ciudad / Aeropuerto",
      ar: "توصيل مباشر"
    },
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    overview: {
      fr: "Trajet direct par autoroute entre Marrakech et Casablanca (centre-ville, Mosquée Hassan II ou Aéroport International Mohammed V). Voyagez en toute sérénité sans le stress des transports publics.",
      en: "Direct highway private transfer between Marrakech and Casablanca city center or Mohammed V International Airport (CMN).",
      es: "Traslado privado directo por autopista entre Marrakech y Casablanca o el Aeropuerto Internacional Mohammed V.",
      ar: "تنقل مريح وسريع عبر الطريق السيار بين مراكش والدار البيضاء (وسط المدينة أو مطار محمد الخامس الدولي)."
    },
    included: [
      { fr: "Véhicule privé récent avec climatisation et grand coffre", en: "Recent private vehicle with AC and large luggage capacity", ar: "سيارة حديثة ومكيفة مع صندوق أمتعة واسع" },
      { fr: "Péages autoroutiers et carburant inclus", en: "Highway tolls and fuel included", ar: "رسوم الطريق السيار والمحروقات مشمولة" }
    ],
    excluded: [
      { fr: "Dépenses personnelles", en: "Personal expenses", ar: "المصاريف الشخصية" }
    ]
  },
  {
    id: "transfert-marrakech-zagora",
    section: "intercity",
    title: {
      fr: "Transfert Privé Marrakech → Zagora (Porte du Désert)",
      en: "Private Transfer Marrakech → Zagora (Desert Gateway)",
      es: "Traslado Privado Marrakech → Zagora (Puerta del Desierto)",
      ar: "توصيل خاص مراكش ← زاكورة (بوابة الصحراء)"
    },
    category: "intercity",
    departure: "marrakech",
    destination: "zagora",
    durationText: {
      fr: "Aller Simple (~6h / 360 km)",
      en: "One Way (~6h / 360 km)",
      es: "Sólo Ida (~6h / 360 km)",
      ar: "ذهاب مباشر (~6 ساعات / 360 كم)"
    },
    capacity: "Véhicule privé (1 à 7 pers.)",
    priceEUR: 160,
    priceMAD: 1750,
    rating: 5.0,
    reviewsCount: 72,
    status: "active",
    badge: {
      fr: "Route du Sud",
      en: "Southern Route",
      es: "Ruta del Sur",
      ar: "طريق الجنوب"
    },
    image: "assets/fire_show.jpg",
    overview: {
      fr: "Transfert longue distance à travers le col du Tizi n'Tichka, Ouarzazate, Agdz et les palmeraies infinies de la Vallée du Draa jusqu'à Zagora.",
      en: "Long distance scenic transfer across the Tizi n'Tichka pass, Ouarzazate, Agdz, and the Draa Valley to Zagora.",
      es: "Traslado privado cruzando el Tizi n'Tichka, Ouarzazate y el palmeral del Valle del Draa hasta Zagora.",
      ar: "توصيل خاص عبر طريق الأطلس الكبير ووارزازات ووادي درعة وصولاً إلى زاكورة."
    },
    included: [
      { fr: "Véhicule tout confort et chauffeur expérimenté", en: "Comfortable vehicle with experienced long-distance driver", ar: "سيارة مريحة وسائق ذو خبرة بالمسافات الطويلة" },
      { fr: "Pauses café et photos panoramiques à volonté", en: "Rest stops and panoramic photo breaks", ar: "استراحات القهوة والتصوير حسب الرغبة" }
    ],
    excluded: [
      { fr: "Repas", en: "Meals", ar: "الوجبات" }
    ]
  },
  {
    id: "transfert-marrakech-merzouga",
    section: "intercity",
    title: {
      fr: "Transfert Privé Marrakech → Merzouga (Erg Chebbi)",
      en: "Private Transfer Marrakech → Merzouga (Erg Chebbi Dunes)",
      es: "Traslado Privado Marrakech → Merzouga (Dunas de Erg Chebbi)",
      ar: "توصيل خاص مراكش ← مرزوكة (كثبان عرق الشبي)"
    },
    category: "intercity",
    departure: "marrakech",
    destination: "merzouga",
    durationText: {
      fr: "Aller Simple (~8h30 / 560 km)",
      en: "One Way (~8h30 / 560 km)",
      es: "Sólo Ida (~8h30 / 560 km)",
      ar: "ذهاب مباشر (~8h30 / 560 كم)"
    },
    capacity: "Véhicule privé (1 à 7 pers.)",
    priceEUR: 240,
    priceMAD: 2600,
    rating: 5.0,
    reviewsCount: 88,
    status: "active",
    badge: {
      fr: "Grand Désert",
      en: "Sahara Highway",
      es: "Gran Desierto",
      ar: "الصحراء الكبرى"
    },
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    overview: {
      fr: "Transfert privé direct reliant Marrakech au cœur du Sahara à Merzouga (Erg Chebbi). Idéal pour rejoindre votre bivouac ou hôtel dans le désert en toute autonomie et confort.",
      en: "Direct private long-distance transfer from Marrakech to Merzouga (Erg Chebbi desert dunes) with door-to-camp drop-off.",
      es: "Traslado privado directo desde Marrakech hasta las dunas de Merzouga con entrega en tu campamento u hotel.",
      ar: "توصيل خاص مباشر يربط بين مراكش وصحراء مرزوكة مع التوصيل مباشرة إلى باب المخيم أو الفندق."
    },
    included: [
      { fr: "Véhicule privé climatisé haut de gamme et chauffeur professionnel", en: "Premium air-conditioned private vehicle and professional driver", ar: "سيارة فاخرة ومكيفة مع سائق محترف" },
      { fr: "Carburant complet et pauses de voyage", en: "Full fuel and travel stops", ar: "المحروقات والاستراحات خلال الطريق" }
    ],
    excluded: [
      { fr: "Repas et hébergement", en: "Meals and accommodation", ar: "الوجبات والمبيت" }
    ]
  },
  {
    id: "transfert-marrakech-autres",
    section: "intercity",
    title: {
      fr: "Autres Destinations Inter-Villes Sur-Mesure (Fès, Rabat, Tanger...)",
      en: "Custom Intercity Transfers (Fes, Rabat, Tangier, Essaouira...)",
      es: "Otros Traslados a Medida (Fez, Rabat, Tánger, Essaouira...)",
      ar: "توصيل خاص حسب الطلب إلى مدن أخرى (فاس، الرباط، طنجة...)"
    },
    category: "intercity",
    departure: "marrakech",
    destination: "custom",
    durationText: {
      fr: "Sur Demande",
      en: "On Demand",
      es: "Bajo Demanda",
      ar: "حسب الطلب"
    },
    capacity: "Véhicule privé (1 à 7 pers.)",
    priceEUR: 80,
    priceMAD: 900,
    rating: 5.0,
    reviewsCount: 92,
    status: "active",
    badge: {
      fr: "Sur-Mesure",
      en: "Tailor-Made",
      es: "A Medida",
      ar: "حسب طلبك"
    },
    image: "assets/coastal_tower.jpg",
    overview: {
      fr: "Besoin d'un transfert vers Essaouira, Taroudant, Ouarzazate, Rabat, Fès ou Chefchaouen ? Contactez Ayman sur WhatsApp pour obtenir immédiatement votre tarif sur-mesure au meilleur prix.",
      en: "Need a transfer to Essaouira, Taroudant, Rabat, Fes, or Tangier? Contact Ayman on WhatsApp for an immediate customized quote.",
      es: "¿Necesitas traslado a otra ciudad de Marruecos? Escríbenos por WhatsApp para presupuesto inmediato.",
      ar: "هل تحتاج توصيل إلى أي مدينة مغربية أخرى؟ راسلنا عبر الواتساب لتحديد السعر والمسار مباشرة."
    },
    included: [
      { fr: "Service porte-à-porte 100% privé", en: "100% private door-to-door service", ar: "خدمة خاصة من الباب إلى الباب" }
    ],
    excluded: [
      { fr: "Dépenses personnelles", en: "Personal expenses", ar: "المصاريف الشخصية" }
    ]
  },

  /* ==========================================================================
     4. TRANSFERTS AÉROPORT MARRAKECH-MÉNARA (Navette VIP privée)
     ========================================================================== */
  {
    id: "transfert-aeroport-centre",
    section: "airport",
    title: {
      fr: "Aéroport Marrakech-Ménara ↔ Riad / Hôtel (Zone Centre)",
      en: "Marrakech-Menara Airport ↔ Riad / Hotel (Center Zone)",
      es: "Aeropuerto Marrakech-Ménara ↔ Riad / Hotel (Zona Centro)",
      ar: "مطار مراكش المنارة ↔ الرياض / الفندق (وسط المدينة)"
    },
    category: "airport",
    departure: "aeroport-marrakech",
    destination: "centre-marrakech",
    durationText: {
      fr: "Aller Simple (~20 min)",
      en: "One Way (~20 min)",
      es: "Sólo Ida (~20 min)",
      ar: "ذهاب مباشر (~20 دقيقة)"
    },
    capacity: "Véhicule privé (1 à 7 pers.)",
    priceEUR: 15,
    priceMAD: 150,
    rating: 5.0,
    reviewsCount: 320,
    status: "active",
    badge: {
      fr: "Zone Centre / Médina",
      en: "Center / Medina Zone",
      es: "Centro / Medina",
      ar: "وسط المدينة"
    },
    image: "assets/luxury_riad.jpg",
    overview: {
      fr: "Transfert VIP privé entre l'Aéroport Marrakech-Ménara et la zone Centre (Médina, Guéliz, Hivernage, Agdal). Votre chauffeur vous attend avec un panneau à votre nom à la sortie du terminal, vous aide avec vos bagages et vous conduit directement à votre hébergement.",
      en: "Private VIP airport shuttle between Marrakech-Menara Airport and the city center (Medina, Gueliz, Hivernage, Agdal). Meet & greet with name board and luggage assistance.",
      es: "Traslado privado VIP entre el Aeropuerto y la zona centro (Medina, Guéliz, Hivernage). Recogida con cartel y sin esperas.",
      ar: "توصيل خاص VIP بين مطار مراكش المنارة ووسط المدينة (المدينة العتيقة، كليز، الشتوي، أكدال) مع استقبال بالاسم في المطار والمساعدة في الأمتعة."
    },
    included: [
      { fr: "Accueil personnalisé à l'aéroport avec pancarte à votre nom", en: "Personalized meet & greet with your name board", ar: "استقبال بالاسم في صالة الوصول بالمطار" },
      { fr: "Suivi en temps réel de votre vol en cas de retard", en: "Real-time flight tracking in case of delays", ar: "متابعة توقيت الرحلة الجوية في حال أي تأخير" },
      { fr: "Véhicule privé climatisé et aide aux bagages", en: "Private air-conditioned vehicle and luggage assistance", ar: "سيارة خاصة مكيفة ومساعدة في حمل الأمتعة" }
    ],
    excluded: [
      { fr: "Pourboires optionnels", en: "Optional tips", ar: "الإكراميات الاختيارية" }
    ]
  },
  {
    id: "transfert-aeroport-palmeraie",
    section: "airport",
    title: {
      fr: "Aéroport Marrakech-Ménara ↔ Palmeraie / Zone Périphérique",
      en: "Marrakech-Menara Airport ↔ Palmeraie / Outer Zone",
      es: "Aeropuerto Marrakech-Ménara ↔ Palmeraie / Zona Periférica",
      ar: "مطار مراكش المنارة ↔ النخيل (Palmeraie) والمناطق الخارجية"
    },
    category: "airport",
    departure: "aeroport-marrakech",
    destination: "palmeraie-marrakech",
    durationText: {
      fr: "Aller Simple (~35 min)",
      en: "One Way (~35 min)",
      es: "Sólo Ida (~35 min)",
      ar: "ذهاب مباشر (~35 دقيقة)"
    },
    capacity: "Véhicule privé (1 à 7 pers.)",
    priceEUR: 20,
    priceMAD: 200,
    rating: 5.0,
    reviewsCount: 185,
    status: "active",
    badge: {
      fr: "Palmeraie / Extérieur",
      en: "Palmeraie & Resorts",
      es: "Palmeraie y Resorts",
      ar: "النخيل والمنتجعات"
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
    overview: {
      fr: "Transfert VIP direct vers la Palmeraie, la Route de Fès, la Route de l'Ourika, la Route d'Amizmiz ou les resorts et villas situés en périphérie de Marrakech.",
      en: "Private airport transfer to Palmeraie, Route de Fes, Route de l'Ourika, Route d'Amizmiz, and surrounding luxury resorts.",
      es: "Traslado VIP a la Palmeraie y hoteles o villas situados en la periferia de Marrakech.",
      ar: "توصيل VIP مباشر إلى منتجعات وفيلات النخيل (Palmeraie) وطريق فاس وطريق أوريكا والمناطق المحيطة بمراكش."
    },
    included: [
      { fr: "Accueil VIP personnalisé à l'aéroport avec panneau à votre nom", en: "VIP personalized meet & greet with your name board", ar: "استقبال VIP بالاسم في المطار" },
      { fr: "Trajet direct sans attente jusqu'à votre villa ou hôtel", en: "Direct ride without waiting to your villa or resort", ar: "توصيل مباشر دون انتظار إلى باب الفيلا أو الفندق" }
    ],
    excluded: [
      { fr: "Pourboires", en: "Tips", ar: "الإكراميات" }
    ]
  }
];

const INITIAL_RESERVATIONS_DATA = [
  {
    id: "RES-2026-101",
    clientName: "David & Emma Watson",
    email: "david.w@gmail.com",
    phone: "+44 7911 123456",
    tourId: "excursion-marrakech-ouarzazate",
    tourName: "Marrakech → Ouarzazate & Aït Ben Haddou",
    travelDate: "2026-09-12",
    travelers: 4,
    hotelStyle: "Véhicule Privé 7 Places",
    totalPriceEUR: 120,
    status: "confirmed",
    createdAt: "2026-08-25",
    notes: "Prise en charge au Riad Kniza à 07h30."
  },
  {
    id: "RES-2026-102",
    clientName: "Marc Fontaine",
    email: "m.fontaine@free.fr",
    phone: "+33 6 12 34 56 78",
    tourId: "transfert-aeroport-centre",
    tourName: "Aéroport Marrakech → Riad Médina",
    travelDate: "2026-09-05",
    travelers: 2,
    hotelStyle: "Navette VIP",
    totalPriceEUR: 15,
    status: "confirmed",
    createdAt: "2026-08-25",
    notes: "Vol AF1244 arrivée prévue à 14h20. Panneau au nom de M. Fontaine."
  },
  {
    id: "RES-2026-103",
    clientName: "Laura Benitez",
    email: "laura.b@yahoo.es",
    phone: "+34 654 987 321",
    tourId: "circuit-3-jours-merzouga",
    tourName: "Circuit Privé 3 Jours (Merzouga)",
    travelDate: "2026-09-18",
    travelers: 3,
    hotelStyle: "Formule Véhicule + Chauffeur",
    totalPriceEUR: 320,
    status: "pending",
    createdAt: "2026-08-26",
    notes: "Demande reçue via WhatsApp."
  }
];

function getStoredServices() {
  const data = localStorage.getItem(STORAGE_KEYS.SERVICES);
  if (data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error("Failed to parse stored services", e);
    }
  }
  localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(INITIAL_SERVICES_DATA));
  return INITIAL_SERVICES_DATA;
}

function saveStoredServices(services) {
  localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(services));
}

function getStoredReservations() {
  const data = localStorage.getItem(STORAGE_KEYS.RESERVATIONS);
  if (data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error("Failed to parse stored reservations", e);
    }
  }
  localStorage.setItem(STORAGE_KEYS.RESERVATIONS, JSON.stringify(INITIAL_RESERVATIONS_DATA));
  return INITIAL_RESERVATIONS_DATA;
}

function saveStoredReservations(reservations) {
  localStorage.setItem(STORAGE_KEYS.RESERVATIONS, JSON.stringify(reservations));
}

let SERVICES_DATA = getStoredServices();
let RESERVATIONS_DATA = getStoredReservations();

const CURRENCY_RATES = {
  EUR: { symbol: "€", rate: 1.0, position: "after" },
  MAD: { symbol: "DH", rate: 10.8, position: "after" },
  USD: { symbol: "$", rate: 1.08, position: "before" },
  GBP: { symbol: "£", rate: 0.85, position: "before" }
};
