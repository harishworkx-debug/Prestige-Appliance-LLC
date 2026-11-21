export interface ServiceInfo {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  alt: string;
  icon: string;
  tagline: string;
  intro: string;
  commonProblems: { problem: string; cause: string }[];
  symptoms: string[];
  repairProcess: string[];
  faqs: { q: string; a: string }[];
}

export const services: ServiceInfo[] = [
  {
    slug: "refrigerator-repair",
    name: "Refrigerator Repair",
    shortName: "Refrigerator Repair",
    description:
      "Fast, reliable refrigerator repair for all major brands — cooling failures, leaks, ice maker issues, and more.",
    image:
      "https://images.pexels.com/photos/4221389/pexels-photo-4221389.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Stainless steel refrigerator in a modern South Florida kitchen",
    icon: "Refrigerator",
    tagline: "Keep your food fresh with prompt refrigerator repair service.",
    intro:
      "A malfunctioning refrigerator can lead to spoiled food and costly waste. Prestige Appliance LLC provides refrigerator repair service throughout Deerfield Beach and surrounding South Florida communities. Whether your fridge has stopped cooling, is leaking water, or the ice maker has stopped working, our technicians diagnose the problem and get your refrigerator running again.",
    commonProblems: [
      { problem: "Refrigerator not cooling", cause: "Faulty compressor, dirty condenser coils, or a failed evaporator fan motor." },
      { problem: "Water leaking on the floor", cause: "Clogged or frozen defrost drain, or a cracked water supply line." },
      { problem: "Ice maker not producing ice", cause: "Frozen water line, defective water inlet valve, or a broken ice maker assembly." },
      { problem: "Frost buildup in freezer", cause: "Damaged door gasket, failed defrost thermostat, or a malfunctioning defrost timer." },
      { problem: "Loud or unusual noises", cause: "Worn evaporator fan motor, defective condenser fan, or a failing compressor." },
      { problem: "Refrigerator running constantly", cause: "Dirty condenser coils, bad door seal, or a faulty temperature thermostat." },
    ],
    symptoms: [
      "Food is spoiling before the expiration date",
      "The freezer is thawing or frosting over",
      "You hear buzzing, clicking, or humming sounds",
      "Water pools underneath the refrigerator",
      "The interior light is on but the unit is not cooling",
    ],
    repairProcess: [
      "Call Prestige Appliance LLC at (754) 318-0468 to describe the symptoms.",
      "Our technician arrives and inspects the refrigerator, freezer, and ice maker.",
      "We identify the faulty component and explain the repair in plain language.",
      "Once approved, we perform the repair using quality replacement parts.",
      "We test the refrigerator to confirm proper cooling and operation.",
    ],
    faqs: [
      {
        q: "Do you repair French door, side-by-side, and top-freezer refrigerators?",
        a: "Yes. Prestige Appliance LLC services the major refrigerator configurations found in South Florida homes, including French door, side-by-side, bottom-freezer, and top-freezer models. Call us to describe your refrigerator and the issue you are experiencing.",
      },
      {
        q: "Should I repair or replace my refrigerator?",
        a: "That depends on the age of the unit, the cost of the repair, and the specific failure. Our technician will diagnose the problem and give you an honest assessment so you can make an informed decision. Call (754) 318-0468 to discuss your situation.",
      },
      {
        q: "How quickly can you come out for a refrigerator repair?",
        a: "Refrigerator problems are urgent. Call us at (754) 318-0468 and we will discuss the earliest available appointment for your Deerfield Beach or South Florida area home.",
      },
    ],
  },
  {
    slug: "freezer-repair",
    name: "Freezer Repair",
    shortName: "Freezer Repair",
    description:
      "Chest freezer, upright freezer, and built-in freezer repair to protect your frozen food investment.",
    image:
      "https://images.pexels.com/photos/21071800/pexels-photo-21071800.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Frozen items inside a freezer compartment",
    icon: "Snowflake",
    tagline: "Protect your frozen food with dependable freezer repair.",
    intro:
      "When a freezer stops working, every hour counts. Prestige Appliance LLC offers freezer repair for upright, chest, and built-in freezers in Deerfield Beach and nearby South Florida communities. Our technicians identify the cause of the failure — whether it is a defrost issue, a sealed-system problem, or a faulty thermostat — and work to restore proper freezing temperature.",
    commonProblems: [
      { problem: "Freezer not freezing", cause: "Failed compressor, low refrigerant, or a defective temperature control thermostat." },
      { problem: "Excessive frost buildup", cause: "Damaged door gasket, clogged defrost drain, or a failed defrost heater." },
      { problem: "Freezer running but not cold enough", cause: "Dirty condenser coils, evaporator fan failure, or a frosted evaporator coil." },
      { problem: "Freezer door won't seal", cause: "Worn or torn door gasket, or a sagging door hinge." },
      { problem: "Ice on the freezer floor", cause: "Clogged defrost drain allowing water to pool and freeze." },
    ],
    symptoms: [
      "Ice cream is soft or melting",
      "Frost is forming on the freezer walls or shelves",
      "The freezer motor runs non-stop",
      "You notice a burning or unusual smell near the freezer",
      "Food packages are covered in frost or ice crystals",
    ],
    repairProcess: [
      "Call (754) 318-0468 and describe what your freezer is doing.",
      "Our technician inspects the freezer, checks temperatures, and tests components.",
      "We explain the diagnosis and the repair needed.",
      "With your approval, we complete the repair and verify the freezer reaches proper temperature.",
    ],
    faqs: [
      {
        q: "Can you repair standalone chest and upright freezers?",
        a: "Yes. Prestige Appliance LLC services both standalone freezers and the freezer compartment of combined refrigerator-freezer units. Call us at (754) 318-0468 to describe your freezer and the problem.",
      },
      {
        q: "How long can food stay frozen during a repair?",
        a: "A full freezer typically holds its temperature for up to 48 hours if the door stays closed. We recommend keeping the door shut as much as possible until the repair is complete.",
      },
      {
        q: "My freezer is frosting over. Is that worth repairing?",
        a: "Frost buildup is often caused by a failed defrost component or a worn door gasket — both are typically repairable. Our technician can diagnose the cause and let you know whether a repair makes sense.",
      },
    ],
  },
  {
    slug: "washer-repair",
    name: "Washing Machine Repair",
    shortName: "Washer Repair",
    description:
      "Top-load and front-load washing machine repair for leaks, draining problems, spin cycle issues, and more.",
    image:
      "https://images.pexels.com/photos/4700400/pexels-photo-4700400.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Modern washing machines in a clean laundry area",
    icon: "WashingMachine",
    tagline: "Get your laundry routine back on track with washer repair.",
    intro:
      "A broken washing machine disrupts the entire household. Prestige Appliance LLC repairs top-load and front-load washing machines throughout Deerfield Beach and nearby South Florida communities. Whether your washer will not drain, will not spin, is leaking water, or has stopped starting entirely, our technicians will diagnose the problem and get your laundry moving again.",
    commonProblems: [
      { problem: "Washer won't drain", cause: "Clogged drain pump, kinked drain hose, or a failed water pump." },
      { problem: "Washer won't spin", cause: "Worn drive belt, faulty lid switch, or a defective motor coupling." },
      { problem: "Water leaking from the washer", cause: "Damaged water inlet valve, torn door boot seal, or a loose hose connection." },
      { problem: "Washer won't start", cause: "Failed door lock, blown control board, or a tripped outlet." },
      { problem: "Washer shaking violently", cause: "Worn shock absorbers, unbalanced load, or a broken suspension rod." },
      { problem: "Washer not filling with water", cause: "Clogged inlet screen, faulty water inlet valve, or low household water pressure." },
    ],
    symptoms: [
      "Clothes are coming out soaking wet",
      "Water is pooling under or around the washer",
      "The wash cycle stops partway through",
      "The drum will not turn or agitate",
      "You hear grinding, rattling, or loud banging during the spin cycle",
    ],
    repairProcess: [
      "Call (754) 318-0468 and describe the washer problem.",
      "Our technician inspects the washer, checks the fill, drain, and spin functions, and tests key components.",
      "We explain what is wrong and what the repair involves.",
      "With your approval, we complete the repair and run a test cycle to confirm everything works.",
    ],
    faqs: [
      {
        q: "Do you repair both top-load and front-load washers?",
        a: "Yes. Prestige Appliance LLC services both top-load and front-load washing machines. Call us at (754) 318-0468 to describe your washer and the issue.",
      },
      {
        q: "My washer is leaking. Should I stop using it?",
        a: "If your washer is leaking, it is best to stop using it to prevent water damage to your floors. Call us right away at (754) 318-0468 so we can diagnose the source of the leak.",
      },
      {
        q: "Why is my front-load washer shaking so much during the spin cycle?",
        a: "Violent shaking is often caused by worn shock absorbers, an unbalanced load, or a failed suspension component. Our technician can inspect the washer and identify the cause.",
      },
    ],
  },
  {
    slug: "dryer-repair",
    name: "Dryer Repair",
    shortName: "Dryer Repair",
    description:
      "Gas and electric dryer repair for no-heat problems, long drying times, tumbling issues, and noise.",
    image:
      "https://images.pexels.com/photos/8774376/pexels-photo-8774376.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Laundry dryer machines in a clean facility",
    icon: "Wind",
    tagline: "No heat, long dry times, or strange noises — we fix dryers fast.",
    intro:
      "A dryer that will not heat or will not tumble brings laundry to a halt. Prestige Appliance LLC provides gas and electric dryer repair throughout Deerfield Beach and surrounding South Florida communities. Our technicians diagnose heating failures, airflow problems, and mechanical issues to get your dryer working safely and efficiently again.",
    commonProblems: [
      { problem: "Dryer not heating", cause: "Failed heating element (electric) or faulty gas valve coil (gas), or a blown thermal fuse." },
      { problem: "Dryer taking too long to dry", cause: "Clogged vent or lint screen, restricted airflow, or a failing blower wheel." },
      { problem: "Drum not turning", cause: "Broken drive belt, worn drum rollers, or a faulty idler pulley." },
      { problem: "Dryer won't start", cause: "Defective door switch, blown thermal fuse, or a faulty start switch." },
      { problem: "Dryer making squealing or thumping noises", cause: "Worn drum rollers, a failing idler pulley, or a worn drum bearing." },
    ],
    symptoms: [
      "Clothes are still damp after a full cycle",
      "The dryer feels cool inside even when set to high heat",
      "You hear squeaking, squealing, or thumping noises",
      "The dryer drum is not spinning",
      "The dryer shuts off before the cycle finishes",
    ],
    repairProcess: [
      "Call (754) 318-0468 and tell us what your dryer is doing.",
      "Our technician checks the heat source, airflow, drum rotation, and safety components.",
      "We explain the diagnosis and the recommended repair.",
      "With your approval, we complete the repair and test the dryer to confirm proper heating and tumbling.",
    ],
    faqs: [
      {
        q: "Do you repair both gas and electric dryers?",
        a: "Yes. Prestige Appliance LLC services both gas and electric dryers. Because gas dryers involve a gas connection, safety is a priority — call us at (754) 318-0468 to describe the issue.",
      },
      {
        q: "Why is my dryer running but not getting hot?",
        a: "A no-heat condition is commonly caused by a failed heating element, a blown thermal fuse, or a faulty gas valve coil. Our technician can pinpoint the cause and perform the repair.",
      },
      {
        q: "Could a clogged vent be causing my dryer to take so long?",
        a: "Yes. Restricted airflow is one of the most common causes of long drying times. We can check the dryer and advise whether the vent needs attention. A clogged vent is also a fire safety concern.",
      },
    ],
  },
  {
    slug: "dishwasher-repair",
    name: "Dishwasher Repair",
    shortName: "Dishwasher Repair",
    description:
      "Dishwasher repair for cleaning problems, draining issues, leaks, and dishwasher door failures.",
    image:
      "https://images.pexels.com/photos/3829549/pexels-photo-3829549.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Open stainless steel dishwasher in a modern kitchen",
    icon: "Droplets",
    tagline: "Dishes not getting clean? We diagnose and repair dishwashers.",
    intro:
      "A dishwasher that leaves dishes dirty or will not drain wastes time and water. Prestige Appliance LLC provides dishwasher repair service throughout Deerfield Beach and nearby South Florida communities. Whether your dishwasher is leaking, not cleaning properly, or will not start at all, our technicians will identify the problem and restore reliable performance.",
    commonProblems: [
      { problem: "Dishwasher not cleaning dishes", cause: "Clogged spray arms, a worn wash pump, or a failed detergent dispenser." },
      { problem: "Dishwasher won't drain", cause: "Clogged drain hose, blocked filter, or a failed drain pump." },
      { problem: "Water leaking from the dishwasher", cause: "Worn door gasket, loose water inlet valve, or a cracked pump housing." },
      { problem: "Dishwasher won't start", cause: "Faulty door latch switch, blown fuse, or a defective control board." },
      { problem: "Dishes coming out cloudy or with residue", cause: "Hard water buildup, a failed rinse aid dispenser, or a worn wash arm." },
    ],
    symptoms: [
      "Water is pooling at the bottom of the dishwasher after a cycle",
      "The dishwasher makes a loud grinding or humming noise",
      "The door will not latch securely",
      "Dishes, glasses, or silverware are still dirty after a full wash",
      "The dishwasher fills with water but does not run the wash cycle",
    ],
    repairProcess: [
      "Call (754) 318-0468 and describe what your dishwasher is doing.",
      "Our technician inspects the spray arms, pump, drain, door, and water inlet.",
      "We explain the cause of the problem and the recommended repair.",
      "With your approval, we complete the repair and run a test wash to confirm proper cleaning and draining.",
    ],
    faqs: [
      {
        q: "My dishwasher smells bad. Can you help with that?",
        a: "Persistent odors are often caused by food debris trapped in the filter, spray arms, or drain. Our technician can clean and inspect these areas and check for any mechanical issues causing the smell.",
      },
      {
        q: "Why is my dishwasher not draining?",
        a: "A dishwasher that will not drain often has a clogged filter, a blocked drain hose, or a failed drain pump. Our technician can identify the cause and clear the blockage or replace the faulty part.",
      },
      {
        q: "Should I repair my dishwasher or buy a new one?",
        a: "It depends on the age and condition of the unit and the cost of the repair. Our technician will give you an honest diagnosis so you can decide with confidence. Call (754) 318-0468 to discuss.",
      },
    ],
  },
  {
    slug: "oven-repair",
    name: "Oven Repair",
    shortName: "Oven Repair",
    description:
      "Gas and electric oven repair for uneven baking, temperature issues, and ovens that won't heat.",
    image:
      "https://images.pexels.com/photos/8721219/pexels-photo-8721219.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Oven in a cozy rustic kitchen",
    icon: "Flame",
    tagline: "Uneven baking or no heat at all? We repair ovens and ranges.",
    intro:
      "An oven that will not hold temperature can ruin every meal. Prestige Appliance LLC provides oven repair service throughout Deerfield Beach and surrounding South Florida communities. We service gas and electric ovens, wall ovens, and ranges — diagnosing heating failures, temperature problems, and control issues so you can get back to cooking.",
    commonProblems: [
      { problem: "Oven not heating", cause: "Burned-out bake element (electric), faulty igniter (gas), or a defective temperature sensor." },
      { problem: "Uneven baking or hot spots", cause: "A failing bake or broil element, a faulty convection fan, or a miscalibrated temperature sensor." },
      { problem: "Oven temperature is inaccurate", cause: "A worn temperature sensor or a failing oven control board." },
      { problem: "Oven won't turn on", cause: "Blown thermal fuse, defective control board, or a broken bake element." },
      { problem: "Gas oven smell of gas", cause: "A weak igniter causing delayed ignition or a faulty gas safety valve — call for service immediately." },
    ],
    symptoms: [
      "Food is undercooked or burned even at the correct setting",
      "The oven takes much longer than usual to preheat",
      "You smell gas when the oven is on",
      "The oven display or control panel is unresponsive",
      "The bake element has visible blisters or burn marks",
    ],
    repairProcess: [
      "Call (754) 318-0468 and describe the oven problem.",
      "Our technician inspects the heating element, igniter, sensor, and controls.",
      "We explain the diagnosis and the repair needed.",
      "With your approval, we complete the repair and test the oven to confirm it heats evenly and accurately.",
    ],
    faqs: [
      {
        q: "Do you repair both gas and electric ovens?",
        a: "Yes. Prestige Appliance LLC services gas and electric ovens, wall ovens, and freestanding ranges. If you smell gas, call us right away at (754) 318-0468.",
      },
      {
        q: "Why is my electric oven not heating but the stove top works?",
        a: "The oven and cooktop use separate components. A no-heat oven is often caused by a burned-out bake element or a faulty temperature sensor. Our technician can diagnose and repair the issue.",
      },
      {
        q: "My oven temperature is off. Can that be fixed?",
        a: "Yes. Inaccurate oven temperature is commonly caused by a worn temperature sensor or a control board issue. Our technician can test the sensor and calibrate or replace it as needed.",
      },
    ],
  },
  {
    slug: "stove-repair",
    name: "Stove Repair",
    shortName: "Stove Repair",
    description:
      "Gas, electric, and induction stove repair for burners that won't light, spark, or heat.",
    image:
      "https://images.pexels.com/photos/33904619/pexels-photo-33904619.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Close-up of a modern stainless steel gas stove top",
    icon: "Flame",
    tagline: "Burners won't light or heat? We repair gas and electric stoves.",
    intro:
      "A stove with burners that will not light or heat makes cooking a struggle. Prestige Appliance LLC provides stove repair service throughout Deerfield Beach and nearby South Florida communities. We service gas, electric coil, and smooth-top glass stoves, diagnosing ignition failures, heating element problems, and control issues.",
    commonProblems: [
      { problem: "Gas burner won't light", cause: "Clogged burner port, faulty spark igniter, or a worn igniter switch." },
      { problem: "Electric burner won't heat", cause: "Burned-out surface element, a failed infinite switch, or a broken element receptacle." },
      { problem: "Glass cooktop cracked", cause: "Impact damage or a dropped item — the glass top typically needs replacement." },
      { problem: "Induction burner not detecting pans", cause: "Incompatible cookware, a failed induction coil, or a faulty control board." },
      { problem: "Clicking sound won't stop", cause: "A wet or dirty igniter, or a stuck igniter switch." },
    ],
    symptoms: [
      "One or more burners will not heat or ignite",
      "You hear continuous clicking after the burner lights",
      "The burner flame is uneven or low",
      "The glass surface is cracked or discolored",
      "The burner heats only on the high setting",
    ],
    repairProcess: [
      "Call (754) 318-0468 and describe which burner is causing trouble.",
      "Our technician inspects the igniters, elements, switches, and control knobs.",
      "We explain what is wrong and the recommended repair.",
      "With your approval, we complete the repair and test each burner to confirm proper operation.",
    ],
    faqs: [
      {
        q: "My gas stove keeps clicking. Is that dangerous?",
        a: "Continuous clicking usually means the igniter is wet or dirty, or a switch is stuck. It is best to turn off the burner and call for service. Call us at (754) 318-0468.",
      },
      {
        q: "Can a cracked glass cooktop be repaired?",
        a: "A cracked glass cooktop typically needs to be replaced rather than repaired. Our technician can confirm the correct replacement part for your model.",
      },
      {
        q: "Do you repair induction cooktops?",
        a: "Yes. Prestige Appliance LLC services induction cooktops. If your induction burner is not detecting pans, our technician can check the coil, control board, and cookware compatibility.",
      },
    ],
  },
  {
    slug: "range-repair",
    name: "Range Repair",
    shortName: "Range Repair",
    description:
      "Freestanding gas and electric range repair combining oven and cooktop diagnostics.",
    image:
      "https://images.pexels.com/photos/3773569/pexels-photo-3773569.png?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Elegant kitchen with a stainless steel range and granite countertops",
    icon: "Flame",
    tagline: "Range not baking or cooking right? We service the whole unit.",
    intro:
      "A freestanding range combines an oven and a cooktop in one appliance — and a problem in either can stop you from cooking. Prestige Appliance LLC provides range repair throughout Deerfield Beach and surrounding South Florida communities. Our technicians diagnose both the oven and the cooktop, so a single service call can address the full range.",
    commonProblems: [
      { problem: "Oven heats but cooktop burners don't", cause: "Failed surface elements or infinite switches, separate from the oven circuit." },
      { problem: "Cooktop works but oven won't heat", cause: "Burned-out bake element, faulty igniter, or a defective oven control." },
      { problem: "Range display or clock not working", cause: "Failed electronic control board or a blown thermal fuse." },
      { problem: "Self-cleaning cycle won't run", cause: "A door lock failure or a malfunctioning control board." },
      { problem: "Gas range smells of gas", cause: "A weak igniter, a faulty gas safety valve, or a loose gas connection — call for service." },
    ],
    symptoms: [
      "Only the top or only the oven is working, not both",
      "The range display, clock, or touchpad is unresponsive",
      "The oven will not reach the set temperature",
      "One or more cooktop burners will not ignite or heat",
      "You smell gas near the range",
    ],
    repairProcess: [
      "Call (754) 318-0468 and describe what the range is and is not doing.",
      "Our technician inspects both the oven and cooktop components.",
      "We explain the diagnosis for each problem area.",
      "With your approval, we complete the repair and test the full range — oven and cooktop.",
    ],
    faqs: [
      {
        q: "Can you fix both the oven and the cooktop in one visit?",
        a: "In most cases, yes. Because a range is a single appliance, our technician can diagnose both the oven and cooktop during the same service call. Call (754) 318-0468 to describe both issues.",
      },
      {
        q: "My range display went blank. What could be wrong?",
        a: "A blank display is often caused by a blown thermal fuse or a failed electronic control board. Our technician can test the power supply and control components to find the cause.",
      },
      {
        q: "Is it safe to keep using my gas range if I smell gas?",
        a: "If you smell gas, turn off the range and do not use it until it has been inspected. Call us at (754) 318-0468 to schedule a diagnosis.",
      },
    ],
  },
  {
    slug: "cooktop-repair",
    name: "Cooktop Repair",
    shortName: "Cooktop Repair",
    description:
      "Built-in gas, electric, and induction cooktop repair for burners that won't heat or ignite.",
    image:
      "https://images.pexels.com/photos/6636288/pexels-photo-6636288.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Modern kitchen with built-in cooktop and appliances",
    icon: "Flame",
    tagline: "Built-in cooktop not working? We repair gas and induction tops.",
    intro:
      "A built-in cooktop that will not heat or ignite can bring your kitchen to a stop. Prestige Appliance LLC provides cooktop repair service throughout Deerfield Beach and nearby South Florida communities. We service gas, electric coil, glass smooth-top, and induction cooktops, diagnosing burner failures, ignition problems, and control issues.",
    commonProblems: [
      { problem: "Gas cooktop burner won't light", cause: "Clogged burner, faulty spark module, or a worn igniter switch." },
      { problem: "Electric smooth-top burner won't heat", cause: "Failed radiant element, a cracked glass surface, or a faulty infinite switch." },
      { problem: "Induction cooktop not heating", cause: "Incompatible cookware, a failed induction coil, or a faulty control board." },
      { problem: "Cooktop knob is loose or broken", cause: "A cracked knob or a stripped valve stem." },
      { problem: "Burner heats only on high", cause: "A failed infinite switch that no longer regulates lower heat levels." },
    ],
    symptoms: [
      "One or more burners will not heat or ignite",
      "The glass surface has a crack or a burn mark",
      "The cooktop clicks repeatedly after lighting",
      "A burner only works on the highest setting",
      "The induction cooktop flashes an error code",
    ],
    repairProcess: [
      "Call (754) 318-0468 and describe the cooktop and the burner that is causing trouble.",
      "Our technician inspects the igniters, elements, switches, and glass surface.",
      "We explain the diagnosis and the recommended repair.",
      "With your approval, we complete the repair and test every burner.",
    ],
    faqs: [
      {
        q: "Can a cracked glass cooktop be repaired, or does it need replacing?",
        a: "A cracked glass cooktop generally needs to be replaced. Our technician can confirm the correct replacement part for your cooktop model.",
      },
      {
        q: "Why does my induction cooktop only work with certain pans?",
        a: "Induction cooktops require magnetic cookware. If your pans work on other induction burners but not on one zone, the coil or control board for that zone may need service.",
      },
      {
        q: "My gas cooktop keeps clicking. What should I do?",
        a: "Turn off the affected burner. Continuous clicking is often caused by a wet or dirty igniter or a stuck switch. Call us at (754) 318-0468 to schedule a repair.",
      },
    ],
  },
  {
    slug: "ice-maker-repair",
    name: "Ice Maker Repair",
    shortName: "Ice Maker Repair",
    description:
      "Refrigerator ice maker and standalone ice machine repair for low ice production and leaks.",
    image:
      "https://images.pexels.com/photos/38895670/pexels-photo-38895670.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Ice cubes being poured into a glass",
    icon: "Snowflake",
    tagline: "No ice or slow production? We repair ice makers and ice machines.",
    intro:
      "An ice maker that has stopped producing ice is a daily inconvenience. Prestige Appliance LLC provides ice maker repair throughout Deerfield Beach and surrounding South Florida communities. We service both built-in refrigerator ice makers and standalone ice machines, diagnosing water supply issues, frozen lines, and mechanical failures.",
    commonProblems: [
      { problem: "Ice maker not making ice", cause: "Frozen water line, a defective water inlet valve, or a broken ice maker assembly." },
      { problem: "Ice cubes are small or hollow", cause: "Low water pressure, a partially clogged water filter, or a weak water inlet valve." },
      { problem: "Ice maker leaking water", cause: "A cracked fill cup, a loose water line connection, or an overflowing ice tray." },
      { problem: "Ice tastes or smells bad", cause: "An old water filter, ice absorption of food odors, or a contaminated ice bin." },
      { problem: "Ice maker won't stop making ice", cause: "A failed shutoff arm or a defective ice level sensor, causing overflow." },
    ],
    symptoms: [
      "No ice has been produced for over 24 hours",
      "The ice maker is making a clicking or buzzing sound but no ice",
      "Ice cubes are smaller than usual or hollow",
      "Water is pooling in or under the ice bin",
      "Ice has an unusual taste or odor",
    ],
    repairProcess: [
      "Call (754) 318-0468 and describe what your ice maker is doing.",
      "Our technician checks the water supply, the inlet valve, the ice maker assembly, and the ice bin.",
      "We explain the diagnosis and the recommended repair.",
      "With your approval, we complete the repair and confirm the ice maker is producing ice properly.",
    ],
    faqs: [
      {
        q: "Can you repair the ice maker inside my refrigerator?",
        a: "Yes. Prestige Appliance LLC services built-in refrigerator ice makers as well as standalone ice machines. Call us at (754) 318-0468 to describe the issue.",
      },
      {
        q: "Why is my ice maker making hollow or small cubes?",
        a: "Hollow or small ice cubes are usually caused by low water pressure, a clogged filter, or a weak water inlet valve. Our technician can test the water supply and valve to find the cause.",
      },
      {
        q: "How do I know if the problem is the ice maker or the water line?",
        a: "Our technician will check both the water supply to the refrigerator and the ice maker assembly itself. Call (754) 318-0468 and we will diagnose the full ice-making system.",
      },
    ],
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getService(slug: string): ServiceInfo | undefined {
  return services.find((s) => s.slug === slug);
}
