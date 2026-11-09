export interface LocationInfo {
  slug: string;
  name: string;
  shortName: string;
  county: string;
  description: string;
  context: string;
  faqs: { q: string; a: string }[];
}

export const locations: LocationInfo[] = [
  {
    slug: "deerfield-beach-fl",
    name: "Deerfield Beach",
    shortName: "Deerfield Beach",
    county: "Broward County",
    description:
      "Deerfield Beach is the home base of Prestige Appliance LLC. We provide appliance repair service to homes throughout Deerfield Beach, FL — from the coastal neighborhoods near the pier to the residential communities west of Federal Highway.",
    context:
      "Deerfield Beach is a coastal city in northern Broward County, known for its award-winning Blue Wave beach, the International Fishing Pier, and quiet residential neighborhoods. Prestige Appliance LLC is based right here in Deerfield Beach, so when your refrigerator stops cooling or your washer won't drain, you're calling a local company that knows the area and can respond quickly.",
    faqs: [
      {
        q: "Is Prestige Appliance LLC actually located in Deerfield Beach?",
        a: "Yes. Prestige Appliance LLC is based in Deerfield Beach, FL. We are a local appliance repair company serving Deerfield Beach and nearby South Florida communities. Call (954) 234-9371 to schedule service.",
      },
      {
        q: "How quickly can you come to my Deerfield Beach home?",
        a: "Because we are based in Deerfield Beach, we can often respond quickly to service calls in the area. Call us at (954) 234-9371 and we will discuss the earliest available appointment.",
      },
      {
        q: "Do you serve the neighborhoods near the Deerfield Beach pier?",
        a: "Yes. We serve Deerfield Beach neighborhoods from the coastal area near the pier to the residential communities further west. Call (954) 234-9371 to confirm service for your address.",
      },
    ],
  },
  {
    slug: "boca-raton-fl",
    name: "Boca Raton",
    shortName: "Boca Raton",
    county: "Palm Beach County",
    description:
      "Prestige Appliance LLC provides appliance repair service to homes in Boca Raton, FL — just north of our Deerfield Beach base. From downtown Boca to the residential communities west of I-95, we service refrigerators, washers, dryers, dishwashers, ovens, and more.",
    context:
      "Boca Raton is a city in southern Palm Beach County, immediately north of Deerfield Beach. Known for its upscale communities, Mizner Park, and Florida Atlantic University, Boca Raton has a wide range of homes — from waterfront condos to single-family residences. Because we are based in neighboring Deerfield Beach, Prestige Appliance LLC is just a short drive away for Boca Raton appliance repair.",
    faqs: [
      {
        q: "Do you serve Boca Raton for appliance repair?",
        a: "Yes. Prestige Appliance LLC serves Boca Raton, FL from our base in neighboring Deerfield Beach. Call (954) 234-9371 to schedule a service visit to your Boca Raton home.",
      },
      {
        q: "Can you repair appliances in Boca Raton condos and apartments?",
        a: "Yes. We service appliances in Boca Raton condos, apartments, and single-family homes. Call us at (954) 234-9371 to describe your appliance and the issue.",
      },
      {
        q: "How far is Boca Raton from your location?",
        a: "Boca Raton is immediately north of our Deerfield Beach base, so we can typically reach Boca Raton homes quickly. Call (954) 234-9371 to discuss availability.",
      },
    ],
  },
  {
    slug: "pompano-beach-fl",
    name: "Pompano Beach",
    shortName: "Pompano Beach",
    county: "Broward County",
    description:
      "Prestige Appliance LLC provides appliance repair to homes in Pompano Beach, FL — just south of our Deerfield Beach base. We service refrigerators, washers, dryers, dishwashers, ovens, stoves, and more throughout Pompano Beach.",
    context:
      "Pompano Beach is a coastal city in Broward County, immediately south of Deerfield Beach. Known for its beach, the Hillsboro Lighthouse, and the Pompano Beach Pier, the city includes a mix of waterfront homes, condos, and residential neighborhoods. Prestige Appliance LLC is based right next door in Deerfield Beach, making Pompano Beach a short drive for our technicians.",
    faqs: [
      {
        q: "Do you serve Pompano Beach for appliance repair?",
        a: "Yes. Prestige Appliance LLC serves Pompano Beach, FL from our base in neighboring Deerfield Beach. Call (954) 234-9371 to schedule a service visit.",
      },
      {
        q: "Can you repair both kitchen and laundry appliances in Pompano Beach?",
        a: "Yes. We service refrigerators, freezers, washers, dryers, dishwashers, ovens, stoves, ranges, cooktops, and ice makers in Pompano Beach homes. Call (954) 234-9371 to describe your appliance issue.",
      },
      {
        q: "How quickly can you reach Pompano Beach?",
        a: "Pompano Beach is immediately south of our Deerfield Beach base, so we can often reach Pompano Beach homes quickly. Call (954) 234-9371 to discuss the earliest available appointment.",
      },
    ],
  },
  {
    slug: "coconut-creek-fl",
    name: "Coconut Creek",
    shortName: "Coconut Creek",
    county: "Broward County",
    description:
      "Prestige Appliance LLC provides appliance repair to homes in Coconut Creek, FL — a residential community just west of our Deerfield Beach base. We service all major household appliances for Coconut Creek residents.",
    context:
      "Coconut Creek is a city in Broward County, just west of Deerfield Beach. Known for its residential communities, parks, and the Seminole Casino Coconut Creek, the city is home to many single-family homes and condos. Because we are based in neighboring Deerfield Beach, Prestige Appliance LLC can reach Coconut Creek homes quickly for appliance repair.",
    faqs: [
      {
        q: "Do you serve Coconut Creek for appliance repair?",
        a: "Yes. Prestige Appliance LLC serves Coconut Creek, FL from our base in neighboring Deerfield Beach. Call (954) 234-9371 to schedule a service visit.",
      },
      {
        q: "Can you repair appliances in Coconut Creek condos and homes?",
        a: "Yes. We service appliances in both Coconut Creek condos and single-family homes. Call us at (954) 234-9371 to describe your appliance and the problem.",
      },
      {
        q: "How far is Coconut Creek from your location?",
        a: "Coconut Creek is just west of our Deerfield Beach base, so we can typically reach Coconut Creek homes quickly. Call (954) 234-9371 to discuss availability.",
      },
    ],
  },
  {
    slug: "coral-springs-fl",
    name: "Coral Springs",
    shortName: "Coral Springs",
    county: "Broward County",
    description:
      "Prestige Appliance LLC provides appliance repair to homes in Coral Springs, FL. From refrigerators that won't cool to dryers that won't heat, our technicians service all major household appliances for Coral Springs residents.",
    context:
      "Coral Springs is a city in Broward County, northwest of Deerfield Beach. Known for its family-friendly neighborhoods, parks, and top-rated schools, Coral Springs is one of the larger residential communities in northern Broward County. Prestige Appliance LLC serves Coral Springs from our nearby Deerfield Beach base.",
    faqs: [
      {
        q: "Do you serve Coral Springs for appliance repair?",
        a: "Yes. Prestige Appliance LLC serves Coral Springs, FL. Call (954) 234-9371 to schedule a service visit to your Coral Springs home.",
      },
      {
        q: "What appliances do you repair in Coral Springs?",
        a: "We service refrigerators, freezers, washers, dryers, dishwashers, ovens, stoves, ranges, cooktops, and ice makers in Coral Springs homes. Call (954) 234-9371 to describe your appliance issue.",
      },
      {
        q: "Can you come out the same day in Coral Springs?",
        a: "Same-day availability depends on our current schedule. Call us at (954) 234-9371 and we will discuss the earliest available appointment for your Coral Springs home.",
      },
    ],
  },
  {
    slug: "margate-fl",
    name: "Margate",
    shortName: "Margate",
    county: "Broward County",
    description:
      "Prestige Appliance LLC provides appliance repair to homes in Margate, FL. Whether your refrigerator has stopped cooling or your washer won't drain, our technicians service all major household appliances for Margate residents.",
    context:
      "Margate is a city in Broward County, just west of Pompano Beach and near Deerfield Beach. A primarily residential community with parks and neighborhoods, Margate is a short drive from our Deerfield Beach base, allowing Prestige Appliance LLC to respond quickly to appliance repair calls.",
    faqs: [
      {
        q: "Do you serve Margate for appliance repair?",
        a: "Yes. Prestige Appliance LLC serves Margate, FL. Call (954) 234-9371 to schedule a service visit to your Margate home.",
      },
      {
        q: "What appliances do you repair in Margate?",
        a: "We service refrigerators, freezers, washers, dryers, dishwashers, ovens, stoves, ranges, cooktops, and ice makers in Margate homes. Call (954) 234-9371 to describe your issue.",
      },
      {
        q: "How quickly can you reach Margate?",
        a: "Margate is near our Deerfield Beach base, so we can often reach Margate homes quickly. Call (954) 234-9371 to discuss the earliest available appointment.",
      },
    ],
  },
  {
    slug: "parkland-fl",
    name: "Parkland",
    shortName: "Parkland",
    county: "Broward County",
    description:
      "Prestige Appliance LLC provides premium appliance repair throughout Parkland, FL. From upscale kitchens in Heron Bay and Parkland Golf & Country Club to estates near Pine Trails Park, we repair refrigerators, washers, dryers, ovens, dishwashers, and more.",
    context:
      "Parkland is an upscale suburban community located in northwestern Broward County, celebrated for its equestrian heritage, gated communities, and park-like tranquility. Homes in Parkland feature high-end kitchens and heavy-duty laundry suites that require experienced diagnostic attention. Based just east in Deerfield Beach, Prestige Appliance LLC delivers prompt, courteous appliance repair to Parkland residents.",
    faqs: [
      {
        q: "Do you service homes in Parkland gated communities?",
        a: "Yes. Prestige Appliance LLC regularly services single-family residences, gated neighborhoods, and estates throughout Parkland, FL. Call (954) 234-9371 to schedule a visit.",
      },
      {
        q: "What appliance problems do you handle in Parkland?",
        a: "We repair cooling failures in refrigerators and freezers, washer spin and drainage issues, dryer heating problems, oven temperature inaccuracies, cooktop ignition faults, and dishwasher leaks. Call (954) 234-9371.",
      },
      {
        q: "How quickly can a technician reach my Parkland home?",
        a: "Because Parkland borders our neighboring service territory, our technicians can reach Parkland residences quickly. Call (954) 234-9371 to discuss the earliest available appointment.",
      },
    ],
  },
  {
    slug: "lighthouse-point-fl",
    name: "Lighthouse Point",
    shortName: "Lighthouse Point",
    county: "Broward County",
    description:
      "Prestige Appliance LLC provides dependable appliance repair for waterfront and coastal homes in Lighthouse Point, FL. We diagnose and repair luxury refrigerators, washers, dryers, dishwashers, ovens, and ice makers.",
    context:
      "Lighthouse Point is a premier coastal enclave in northern Broward County, named for the nearby Hillsboro Inlet Light. Known for its extensive canal system, yachts, and waterfront residences, Lighthouse Point homes face South Florida's coastal humidity and unique appliance challenges. Located right next door in Deerfield Beach, Prestige Appliance LLC provides prompt, neighborly appliance repair to Lighthouse Point homeowners.",
    faqs: [
      {
        q: "Do you provide appliance repair in Lighthouse Point, FL?",
        a: "Yes. Prestige Appliance LLC serves Lighthouse Point directly from our base in neighboring Deerfield Beach. Call (954) 234-9371 to schedule service for your home.",
      },
      {
        q: "Can you fix marine or outdoor kitchen appliances in Lighthouse Point?",
        a: "We service residential household appliances including indoor and covered patio refrigerators, freezers, ice makers, wine coolers, ovens, and ranges. Call us at (954) 234-9371 to discuss your specific unit.",
      },
      {
        q: "How soon can a technician arrive in Lighthouse Point?",
        a: "Lighthouse Point is immediately adjacent to Deerfield Beach, meaning our technician is only minutes away. Call (954) 234-9371 to book the earliest window.",
      },
    ],
  },
  {
    slug: "delray-beach-fl",
    name: "Delray Beach",
    shortName: "Delray Beach",
    county: "Palm Beach County",
    description:
      "Prestige Appliance LLC delivers professional appliance repair to homes across Delray Beach, FL. We service refrigerators, dishwashers, washing machines, dryers, stoves, and ovens throughout the vibrant Delray Beach community.",
    context:
      "Delray Beach is a coastal city in southern Palm Beach County, just north of Boca Raton and Deerfield Beach. Known for vibrant Atlantic Avenue, historic neighborhoods, and beautiful beachside living, Delray Beach has a diverse range of homes — from historic bungalows to modern condos and single-family suburban developments. Prestige Appliance LLC provides convenient, trustworthy service calls for Delray Beach families.",
    faqs: [
      {
        q: "Does Prestige Appliance LLC service Delray Beach?",
        a: "Yes. We serve Delray Beach, FL from our Deerfield Beach location just south along Federal Highway and I-95. Call (954) 234-9371 to schedule a repair.",
      },
      {
        q: "Do you repair both gas and electric appliances in Delray Beach?",
        a: "Yes. Our technicians service both gas and electric cooking appliances, dryers, water inlet systems, and cooling units in Delray Beach homes. Call (954) 234-9371.",
      },
      {
        q: "How do I book an appliance repair visit in Delray Beach?",
        a: "Simply call us at (954) 234-9371. We discuss your appliance symptoms, check scheduling availability, and arrange your appointment directly over the phone.",
      },
    ],
  },
  {
    slug: "fort-lauderdale-fl",
    name: "Fort Lauderdale",
    shortName: "Fort Lauderdale",
    county: "Broward County",
    description:
      "Prestige Appliance LLC provides expert major appliance repair for homes, townhomes, and residences in Fort Lauderdale, FL. Call our team to diagnose and repair your refrigerator, washer, dryer, oven, stove, or dishwasher.",
    context:
      "Fort Lauderdale is the county seat and central metropolitan hub of Broward County, famous for its canals, Las Olas Boulevard, and diverse residential districts. Whether you reside in Victoria Park, Coral Ridge, or the suburban neighborhoods west of the Intracoastal, Prestige Appliance LLC delivers straightforward, honest appliance repair without middleman dispatchers or call center delays.",
    faqs: [
      {
        q: "Do you serve Fort Lauderdale for appliance repair?",
        a: "Yes. Prestige Appliance LLC services residences throughout Fort Lauderdale and northern Broward County. Call (954) 234-9371 to schedule an appointment.",
      },
      {
        q: "What appliance brands and types do you service in Fort Lauderdale?",
        a: "We diagnose and repair all major residential brands and models of refrigerators, freezers, washing machines, dryers, dishwashers, ovens, and cooktops. Call (954) 234-9371 to describe your unit.",
      },
      {
        q: "Is there an online booking form for Fort Lauderdale?",
        a: "No. We prioritize direct customer care and call-only scheduling. When you call (954) 234-9371, you speak with our local team immediately to coordinate your service visit.",
      },
    ],
  },
];

export const locationSlugs = locations.map((l) => l.slug);

export function getLocation(slug: string): LocationInfo | undefined {
  return locations.find((l) => l.slug === slug);
}
