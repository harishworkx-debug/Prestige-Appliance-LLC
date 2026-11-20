export interface LandingService {
  id: string;
  title: string;
  shortDesc: string;
  commonIssues: string[];
  benefits: string[];
  badge: string;
}

export interface NearbyArea {
  name: string;
  zip: string;
  county: string;
  distance: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const LANDING_DATA = {
  niche: 'Appliance Repair',
  location: 'Deerfield Beach',
  state: 'FL',
  fullLocation: 'Deerfield Beach, FL',
  county: 'Broward County',
  zip: '33441',
  phone: '(954) 234-9371',
  phoneRaw: '+19542349371',
  phoneTel: 'tel:+19542349371',
  address: '534 NW 3rd Terrace, Deerfield Beach, FL 33441',
  hours: 'Mon – Fri: 8:00 AM – 6:00 PM | Sat: 9:00 AM – 4:00 PM | Sun: Closed (Emergency Diagnostics Available)',
  identityTitle: 'Appliance Repair in Deerfield Beach',
  metaTitle: 'Appliance Repair in Deerfield Beach, FL | Expert Local Diagnostics & Service',
  metaDescription: 'Trusted residential appliance repair in Deerfield Beach, FL. Fast diagnostics and repairs for refrigerators, washers, dryers, dishwashers & ovens. Call (954) 234-9371.',
  
  trustBadges: [
    { label: 'Licensed & Insured', desc: 'Compliant with Florida DBPR standards' },
    { label: 'Prompt Response', desc: 'Same-day & next-day diagnostic slots' },
    { label: 'Upfront Quotes', desc: 'Transparent pricing with zero hidden fees' },
    { label: '90-Day Guarantee', desc: 'On all installed OEM parts & labor' },
  ],

  services: [
    {
      id: 'refrigerator-repair',
      title: 'Refrigerator & Freezer Repair',
      shortDesc: 'Precision troubleshooting for domestic refrigerators, freezers, and sealed refrigeration loops.',
      commonIssues: [
        'Not cooling or uneven temperature zones',
        'Excessive frost or ice buildup in freezer',
        'Clicking compressor or failing evaporator fan',
        'Water leaking onto kitchen floor',
      ],
      benefits: [
        'Evaporator coil and defrost system testing',
        'Digital thermostat & thermistor calibration',
        'Compressor start relay diagnosis',
        'Door gasket air-seal inspection',
      ],
      badge: 'High Priority',
    },
    {
      id: 'washer-repair',
      title: 'Washing Machine Repair',
      shortDesc: 'Comprehensive mechanical and electronic service for top-load and front-load washing machines.',
      commonIssues: [
        'Will not drain water or finish spin cycle',
        'Violent shaking, banging, or off-balance error',
        'Fails to fill or water valve overflowing',
        'Door boot gasket leaking or locked shut',
      ],
      benefits: [
        'Drain pump clearing and impeller replacement',
        'Suspension rod and shock absorber renewal',
        'Direct drive coupling & belt service',
        'Electronic control board diagnostics',
      ],
      badge: 'Fast Dispatch',
    },
    {
      id: 'dryer-repair',
      title: 'Clothes Dryer Repair',
      shortDesc: 'Safe, certified electric and gas dryer maintenance, heat restoration, and thermal lint safety audits.',
      commonIssues: [
        'Drum spins freely but blows cold air',
        'Takes multiple cycles to dry single load',
        'Burning odor or overheating cabinet',
        'Squealing drum rollers or broken drive belt',
      ],
      benefits: [
        'Heavy-duty heating element replacement',
        'Thermal cut-off fuse and hi-limit safety test',
        'Internal cabinet lint buildup clearance',
        'Drum roller, idler pulley & belt overhaul',
      ],
      badge: 'Safety Certified',
    },
    {
      id: 'dishwasher-repair',
      title: 'Dishwasher Repair',
      shortDesc: 'Restoring sanitary wash cycles, high-pressure spray circulation, and leak-free kitchen operation.',
      commonIssues: [
        'Standing dirty water pooling in base',
        'White film or gritty food residue on glassware',
        'Water leaking from front door or float switch',
        'Control panel unresponsive or flashing error code',
      ],
      benefits: [
        'Macerator blade & drain check valve renewal',
        'Circulation wash pump motor testing',
        'Perimeter door gasket replacement',
        'Water inlet solenoid valve calibration',
      ],
      badge: 'Sanitary Care',
    },
    {
      id: 'oven-stove-repair',
      title: 'Oven, Range & Stove Repair',
      shortDesc: 'Accurate thermal calibration and safety servicing for domestic ovens, cooktops, and ranges.',
      commonIssues: [
        'Oven element fails to glow or heat up',
        'Gas surface burners clicking continuously',
        'Bake temperature deviates by 50°F or more',
        'Digital display throwing error codes (F-codes)',
      ],
      benefits: [
        'Silicon carbide hot-surface igniter swaps',
        'Bake & broil element resistance testing',
        'Dual-fuel valve and spark module checks',
        'Temperature probe RTD sensor calibration',
      ],
      badge: 'Precision Heat',
    },
    {
      id: 'ice-maker-repair',
      title: 'Ice Maker Repair & Service',
      shortDesc: 'Restoring crisp, hygienic ice production and clearing stubborn freeze-up obstructions.',
      commonIssues: [
        'Ice maker completely stopped cycling',
        'Hollow, undersized, or foul-tasting cubes',
        'Water overflow freezing into solid sheet',
        'Dispenser flap jammed or solenoid buzzing',
      ],
      benefits: [
        'Dual water inlet valve pressure testing',
        'Ice mold thermostat and ejector arm renewal',
        'Water supply line freeze-clearing',
        'Filtration and mineral descaling service',
      ],
      badge: 'Clean Water',
    },
  ] as LandingService[],

  whyChooseUs: [
    {
      title: 'State Code & DBPR Compliance',
      desc: 'All technicians adhere strictly to Florida state electrical and appliance safety standards, ensuring every repair is built to last.',
    },
    {
      title: 'South Florida Coastal Expertise',
      desc: 'We understand how coastal humidity, salt-laden ocean air, and grid power surges accelerate wear on coastal Florida appliances.',
    },
    {
      title: 'Transparent Diagnostic Pricing',
      desc: 'No vague estimates or surprise markups. You receive an upfront written diagnostic estimate before any wrench turns.',
    },
    {
      title: 'Root-Cause Diagnostics',
      desc: 'We do not swap parts blindly. Our certified technicians test circuits, measure voltage, and fix the actual root defect.',
    },
  ],

  serviceAreas: [
    { name: 'Deerfield Beach', zip: '33441', county: 'Broward County', distance: 'Primary City Base' },
    { name: 'Boca Raton', zip: '33431, 33432', county: 'Palm Beach County', distance: 'Adjacent North' },
    { name: 'Pompano Beach', zip: '33060, 33062', county: 'Broward County', distance: 'Adjacent South' },
    { name: 'Coconut Creek', zip: '33066, 33073', county: 'Broward County', distance: '6 Miles West' },
    { name: 'Coral Springs', zip: '33065, 33071', county: 'Broward County', distance: '10 Miles West' },
    { name: 'Margate', zip: '33063', county: 'Broward County', distance: '9 Miles Southwest' },
    { name: 'Parkland', zip: '33067, 33076', county: 'Broward County', distance: '8 Miles Northwest' },
    { name: 'Lighthouse Point', zip: '33064', county: 'Broward County', distance: '3 Miles East' },
    { name: 'Delray Beach', zip: '33444, 33483', county: 'Palm Beach County', distance: '9 Miles North' },
    { name: 'Fort Lauderdale', zip: '33301, 33308', county: 'Broward County', distance: '15 Miles South' },
  ] as NearbyArea[],

  faqs: [
    {
      question: 'How quickly can a technician inspect my appliance in Deerfield Beach?',
      answer: 'We provide prompt service throughout Deerfield Beach and neighboring Broward and Palm Beach coastal areas. Same-day or next-day diagnostic appointments are frequently available for high-priority issues like non-cooling refrigerators and leaking washers.',
    },
    {
      question: 'What is included in the initial appliance diagnostic visit?',
      answer: 'A qualified technician conducts a physical, mechanical, and electrical component test using calibrated diagnostic equipment. We trace the exact failure point, provide you with an upfront written repair quote, and explain your best options clearly.',
    },
    {
      question: 'How does South Florida coastal weather impact household appliances?',
      answer: 'High relative humidity, airborne salt particles, and frequent summer lightning surges cause accelerated oxidation on condenser coils, corrosion on wire harness connectors, and micro-controller board failures. Our repairs include preventative cleaning and moisture protection.',
    },
    {
      question: 'Is it better to repair my appliance or buy a new replacement?',
      answer: 'If the repair cost is under 50% of the replacement value and the appliance has not reached the end of its useful design lifespan (typically 10–13 years), repairing with OEM parts is almost always the most economical and sustainable choice.',
    },
    {
      question: 'What warranty is provided on replacement parts and labor?',
      answer: 'All major repairs using original equipment manufacturer (OEM) replacement components are backed by a standard 90-day parts and labor warranty, giving you peace of mind that the job was completed correctly.',
    },
  ] as FaqItem[],
};
