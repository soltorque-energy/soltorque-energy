export type SeoProductPage = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  keyword: string;
  intro: string;
  applications: string[];
  specifications: string[];
  materials: string[];
  quoteInfo: string[];
  customerTypes: string[];
  image: string;
  alt: string;
  recommendedProducts?: string[];
  commonProducts?: string[];
  relatedSlugs?: string[];
  faqs?: FaqItem[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const defaultFaqs: FaqItem[] = [
  {
    question: "What information is needed before quotation?",
    answer:
      "Please send product photo, specification, quantity and application scenario so suitable options can be checked."
  },
  {
    question: "Can you check products by photo or specification?",
    answer:
      "Yes. Clear photos, drawings or size references help confirm the matching product type before quotation."
  },
  {
    question: "Do you supply rails, clamps, bolts and MC4 connectors?",
    answer:
      "SolTorque Energy Co., Ltd. supports project-use solar mounting hardware and related PV accessories including rails, clamps, brackets, bolts, MC4 connectors, cable clips and grounding parts."
  },
  {
    question: "Can you support solar installers and EPC contractors?",
    answer:
      "Yes. Product matching can be checked for solar installers, EPC contractors, suppliers and distributors according to project needs."
  },
  {
    question: "Is freight included in the product price?",
    answer:
      "Freight is usually checked separately according to quantity, packing details and destination."
  },
  {
    question: "How long is the preparation time for standard items?",
    answer:
      "Preparation time depends on item type, quantity and current availability. Standard items can be checked after the inquiry details are received."
  }
];

const commonSolarProducts = [
  "Solar mounting rails",
  "Mid clamps",
  "End clamps",
  "Roof clamps / brackets",
  "T bolts / nuts / fasteners",
  "MC4 connectors",
  "Cable clips / cable management parts",
  "Grounding / earthing accessories",
  "GI slotted channel / strut channel"
];

export const seoProductPages: SeoProductPage[] = [
  {
    slug: "solar-mid-clamp-supplier",
    title: "Solar Mid Clamp Supplier",
    seoTitle: "Solar Mid Clamp Supplier | SolTorque Energy",
    metaDescription:
      "Solar mid clamp supplier for PV module mounting projects. Check aluminum mid clamps by panel thickness, rail type, quantity and application scenario.",
    h1: "Solar Mid Clamp Supplier",
    keyword: "solar mid clamp supplier",
    intro:
      "SolTorque Energy Co., Ltd. supports overseas customers with project-use solar mid clamps for common PV module mounting systems. Suitable options can be checked according to panel frame thickness, rail profile, clamp length and project quantity.",
    applications: [
      "Framed PV module fixing on rooftop mounting rails",
      "Commercial metal roof solar mounting systems",
      "Residential roof solar mounting systems",
      "Replacement or project matching for existing rail systems"
    ],
    specifications: [
      "Common panel thickness references such as 30 mm, 35 mm and 40 mm",
      "Clamp length and height matched to the rail and module frame",
      "Compatible bolts, nuts and grounding washer options can be checked",
      "Custom matching can be checked from product photo or drawing"
    ],
    materials: [
      "Aluminum alloy references such as AL6005-T5",
      "Anodized surface treatment for aluminum clamp parts when required",
      "Stainless steel fasteners such as SUS304 or SUS316 according to project needs"
    ],
    quoteInfo: [
      "PV module frame thickness",
      "Rail profile or existing clamp photo",
      "Required clamp length and color if specified",
      "Quantity and destination market",
      "Application scenario such as roof type or project replacement"
    ],
    customerTypes: ["solar installer", "EPC", "supplier", "distributor"],
    image: "/images/products/module-clamps.jpg",
    alt: "Solar mid clamps for PV module mounting rails"
  },
  {
    slug: "solar-end-clamp-supplier",
    title: "Solar End Clamp Supplier",
    seoTitle: "Solar End Clamp Supplier | SolTorque Energy",
    metaDescription:
      "Solar end clamp supplier for PV panel mounting. Check end clamps by module thickness, rail profile, fastener type and project quantity.",
    h1: "Solar End Clamp Supplier",
    keyword: "solar end clamp supplier",
    intro:
      "Solar end clamps are used at the edge of PV module rows to secure framed panels to mounting rails. SolTorque Energy Co., Ltd. helps overseas customers check suitable end clamp options by photo, specification and quantity.",
    applications: [
      "PV module edge fixing on rooftop mounting rails",
      "Residential and commercial solar mounting projects",
      "Module row end fixing for aluminum rail systems",
      "Maintenance or replacement matching for existing installations"
    ],
    specifications: [
      "Common module thickness references such as 30 mm, 35 mm and 40 mm",
      "End clamp length, height and rail connection details",
      "Black or natural anodized references can be checked when needed",
      "Matched bolts, nuts and washers according to rail slot"
    ],
    materials: [
      "Aluminum alloy clamp body",
      "Anodized aluminum surface treatment according to project requirement",
      "Stainless steel fastener options for outdoor PV installation"
    ],
    quoteInfo: [
      "Panel thickness and frame type",
      "Rail drawing, rail slot size or product photo",
      "Clamp color and size reference",
      "Quantity and packaging preference if any",
      "Project application scenario"
    ],
    customerTypes: ["solar installer", "EPC", "supplier", "distributor"],
    image: "/images/products/module-clamps.jpg",
    alt: "Solar end clamps and mid clamps for framed PV modules"
  },
  {
    slug: "solar-mounting-rail-supplier",
    title: "Solar Mounting Rail Supplier",
    seoTitle: "Solar Mounting Rail Supplier | SolTorque Energy",
    metaDescription:
      "Solar mounting rail supplier for rooftop PV projects. Check rail profiles, lengths, splice kits, clamps and fasteners by project needs.",
    h1: "Solar Mounting Rail Supplier",
    keyword: "solar mounting rail supplier",
    intro:
      "Solar mounting rails are the main structural support for many rooftop PV mounting systems. SolTorque Energy Co., Ltd. supports rail matching together with clamps, splice kits, fasteners and related mounting accessories.",
    applications: [
      "Residential pitched roof PV mounting",
      "Commercial metal roof PV mounting",
      "Rail-based framed module installation",
      "Project matching for rails, clamps and splice kits"
    ],
    specifications: [
      "Rail profile, height, width and slot size according to drawing or photo",
      "Standard or project-specific rail lengths can be checked",
      "Rail splice, end cap and clamp compatibility should be confirmed",
      "Fastener matching by roof bracket or roof clamp type"
    ],
    materials: [
      "Aluminum alloy rail references such as AL6005-T5",
      "Anodized aluminum surface treatment for outdoor use when required",
      "Compatible stainless steel fasteners and EPDM rubber parts where applicable"
    ],
    quoteInfo: [
      "Rail profile drawing or clear cross-section photo",
      "Required rail length and total quantity",
      "Module layout or project roof type",
      "Matched clamps, splice kits and fasteners needed",
      "Destination and packing requirement if available"
    ],
    customerTypes: ["solar installer", "EPC", "supplier", "distributor"],
    image: "/images/products/metal-roof-mounting-system.jpg",
    alt: "Solar mounting rail system for metal roof PV project"
  },
  {
    slug: "solar-roof-clamp-supplier",
    title: "Solar Roof Clamp Supplier",
    seoTitle: "Solar Roof Clamp Supplier | SolTorque Energy",
    metaDescription:
      "Solar roof clamp supplier for metal roof and rooftop PV mounting projects. Check roof clamps and brackets by roof profile and project needs.",
    h1: "Solar Roof Clamp Supplier",
    keyword: "solar roof clamp supplier",
    intro:
      "Solar roof clamps and brackets connect PV mounting rails or module brackets to roof structures. SolTorque Energy Co., Ltd. supports product matching by roof profile photo, bracket specification and project quantity.",
    applications: [
      "Standing seam metal roof PV mounting",
      "Trapezoidal and corrugated metal roof projects",
      "Residential roof hook and bracket matching",
      "Rail fixing and bracket replacement for rooftop installations"
    ],
    specifications: [
      "Roof clamp shape matched to roof sheet profile",
      "Bracket height, hole position and rail connection details",
      "EPDM rubber pad or waterproof part matching where required",
      "Fastener size and stainless steel grade according to project environment"
    ],
    materials: [
      "Aluminum alloy or stainless steel clamp options according to product type",
      "EPDM rubber parts for waterproof contact areas where applicable",
      "SUS304 or SUS316 stainless steel fasteners according to project needs"
    ],
    quoteInfo: [
      "Roof sheet profile photo or drawing",
      "Existing roof clamp or bracket photo if replacing",
      "Required rail connection method",
      "Quantity and roof application scenario",
      "Any waterproof rubber or fastener requirement"
    ],
    customerTypes: ["solar installer", "EPC", "supplier", "distributor"],
    image: "/images/products/metal-roof-clamps.jpg",
    alt: "Solar roof clamps and brackets for metal roof mounting"
  },
  {
    slug: "solar-t-bolt-supplier",
    title: "Solar T Bolt Supplier",
    seoTitle: "Solar T Bolt Supplier | SolTorque Energy",
    metaDescription:
      "Solar T bolt supplier for PV mounting rails, clamps and brackets. Check T bolts, nuts and fasteners by rail slot, size and quantity.",
    h1: "Solar T Bolt Supplier",
    keyword: "solar T bolt supplier",
    intro:
      "Solar T bolts, nuts and related fasteners are small but important parts for rail-based PV mounting systems. SolTorque Energy Co., Ltd. helps overseas customers match fasteners by rail slot size, clamp type and quantity.",
    applications: [
      "Mid clamp and end clamp fixing on aluminum rails",
      "Roof bracket and rail connection",
      "PV mounting hardware replacement and spare parts supply",
      "Matched fastener sets for project-use mounting kits"
    ],
    specifications: [
      "Thread size such as M8 or project-specific references",
      "T head size matched to rail slot",
      "Nut, washer and spring washer combination according to assembly",
      "Length and thread detail checked from drawing or sample photo"
    ],
    materials: [
      "Stainless steel references such as SUS304 or SUS316",
      "Zinc plated or hot-dip galvanized references can be checked for steel parts",
      "Surface and material choice should follow the project environment"
    ],
    quoteInfo: [
      "Rail slot size or rail profile drawing",
      "Bolt thread size and length",
      "Required nut and washer combination",
      "Quantity and whether packed as sets",
      "Application part such as clamp, bracket or rail connector"
    ],
    customerTypes: ["solar installer", "EPC", "supplier", "distributor"],
    image: "/images/products/module-clamps.jpg",
    alt: "Solar T bolts nuts and fasteners used with PV clamps"
  },
  {
    slug: "mc4-connector-supplier",
    title: "MC4 Connector Supplier",
    seoTitle: "MC4 Connector Supplier | SolTorque Energy",
    metaDescription:
      "MC4 connector supplier for PV electrical accessories. Check connector type, cable size, electrical specification reference and project quantity.",
    h1: "MC4 Connector Supplier",
    keyword: "MC4 connector supplier",
    intro:
      "MC4 connectors and related PV electrical accessories are used for solar cable connection in PV systems. SolTorque Energy Co., Ltd. supports overseas customers with product matching by connector photo, cable size and project quantity.",
    applications: [
      "Solar cable connection in PV system installation",
      "PV module string connection and maintenance replacement",
      "Accessory sourcing together with connector spanners and tools",
      "Project-use PV electrical accessory matching"
    ],
    specifications: [
      "Connector pair type and cable size reference",
      "Male and female connector combination",
      "Compatible connector tool or spanner if needed",
      "Packaging and quantity can be checked according to project needs"
    ],
    materials: [
      "Connector shell and contact material according to selected product specification",
      "Weather-resistant PV accessory options can be checked by project need",
      "Related connector tools and spanners can be matched together"
    ],
    quoteInfo: [
      "Connector photo or model reference",
      "Cable size and application scenario",
      "Required pair quantity",
      "Need for connector spanner or related tool",
      "Destination market and packaging preference"
    ],
    customerTypes: ["solar installer", "EPC", "supplier", "distributor"],
    image: "/images/products/mc4-connector-spanner.jpg",
    alt: "MC4 connector spanner and PV electrical accessories"
  },
  {
    slug: "solar-cable-clip-supplier",
    title: "Solar Cable Clip Supplier",
    seoTitle: "Solar Cable Clip Supplier | SolTorque Energy",
    metaDescription:
      "Solar cable clip supplier for PV cable management. Check cable clips, frame clips and stainless steel cable ties by cable quantity and module frame.",
    h1: "Solar Cable Clip Supplier",
    keyword: "solar cable clip supplier",
    intro:
      "Solar cable clips help route and hold PV cables neatly under or around solar modules. SolTorque Energy Co., Ltd. supports cable management product matching by clip photo, cable quantity, frame thickness and application scenario.",
    applications: [
      "PV cable routing under framed solar modules",
      "Cable management for rooftop and ground PV projects",
      "Special frame cable clip matching",
      "Stainless steel cable tie and clip accessory supply"
    ],
    specifications: [
      "Single, double or multiple cable clip options can be checked",
      "Cable diameter and number of cables should be confirmed",
      "Module frame thickness or installation edge size is important",
      "90-degree cable clip and special frame clip options can be checked"
    ],
    materials: [
      "Stainless steel cable clip references such as SUS304",
      "Plastic or mixed accessory options can be checked by product photo",
      "Stainless steel cable ties are available as related cable management parts"
    ],
    quoteInfo: [
      "Cable diameter and number of cables per clip",
      "Module frame thickness or mounting position photo",
      "Clip style photo or drawing",
      "Quantity and packaging requirement",
      "Rooftop, ground or maintenance application scenario"
    ],
    customerTypes: ["solar installer", "EPC", "supplier", "distributor"],
    image: "/images/products/pv-cable-clips.jpg",
    alt: "Solar cable clips for PV cable management"
  },
  {
    slug: "solar-grounding-clip-supplier",
    title: "Solar Grounding Clip Supplier",
    seoTitle: "Solar Grounding Clip Supplier | SolTorque Energy",
    metaDescription:
      "Solar grounding clip supplier for PV earthing accessories. Check grounding clips, grounding washers, lugs and copper braid by project needs.",
    h1: "Solar Grounding Clip Supplier",
    keyword: "solar grounding clip supplier",
    intro:
      "Solar grounding clips and related earthing accessories support electrical bonding in PV mounting systems. SolTorque Energy Co., Ltd. helps customers check suitable grounding washers, lugs, clips and copper braid according to project needs.",
    applications: [
      "PV module and rail grounding connection",
      "Earthing accessory matching for rooftop PV systems",
      "Grounding lug and copper braid connection points",
      "Project replacement and accessory sourcing"
    ],
    specifications: [
      "Grounding clip or washer shape matched to clamp and rail system",
      "Grounding lug hole size and cable size should be confirmed",
      "Copper braid length and terminal size can be checked",
      "Assembly location and contact surface are important for matching"
    ],
    materials: [
      "Stainless steel grounding clip or washer options",
      "Copper grounding braid and related terminal references",
      "Grounding lugs according to cable and mounting position needs"
    ],
    quoteInfo: [
      "Grounding part photo or drawing",
      "Rail, clamp or module connection position",
      "Cable size, hole size or braid length if applicable",
      "Quantity and project scenario",
      "Related parts needed together such as lug, washer or copper braid"
    ],
    customerTypes: ["solar installer", "EPC", "supplier", "distributor"],
    image: "/images/products/grounding-clip-washer.jpg",
    alt: "Solar grounding clip washer for PV earthing accessories"
  },
  {
    slug: "gi-slotted-channel-supplier",
    title: "GI Slotted Channel Supplier",
    seoTitle: "GI Slotted Channel Supplier | SolTorque Energy",
    metaDescription:
      "GI slotted channel supplier for PV mounting support and strut channel applications. Check channel size, thickness, length and surface treatment.",
    h1: "GI Slotted Channel Supplier",
    keyword: "GI slotted channel supplier",
    intro:
      "GI slotted channel and strut channel can be used as support hardware in selected PV mounting and utility installation scenarios. SolTorque Energy Co., Ltd. supports matching by channel size, thickness, hole pattern, length and quantity.",
    applications: [
      "PV mounting support and auxiliary structure matching",
      "Strut channel use for project hardware installation",
      "Cable route or bracket support scenarios",
      "Distributor and supplier stock range development"
    ],
    specifications: [
      "Channel width, height and thickness should be confirmed",
      "Slot or hole pattern according to drawing or sample photo",
      "Standard length and cut length requirements can be checked",
      "Matched spring nuts, bolts and brackets may be requested together"
    ],
    materials: [
      "Galvanized iron or galvanized steel channel references",
      "Pre-galvanized or hot-dip galvanized surface references can be checked",
      "Material thickness and coating requirement should follow the project use"
    ],
    quoteInfo: [
      "Channel section size and thickness",
      "Hole pattern drawing or clear product photo",
      "Required length and quantity",
      "Surface treatment requirement",
      "Matched nuts, bolts or brackets needed together"
    ],
    customerTypes: ["solar installer", "EPC", "supplier", "distributor"],
    image: "/images/products/metal-roof-mounting-system.jpg",
    alt: "GI slotted channel and strut channel used with PV mounting hardware"
  },
  {
    slug: "pv-mounting-accessories-supplier",
    title: "PV Mounting Accessories Supplier",
    seoTitle: "PV Mounting Accessories Supplier | SolTorque Energy",
    metaDescription:
      "PV mounting accessories supplier for rails, clamps, brackets, fasteners, cable clips, grounding parts and related solar hardware.",
    h1: "PV Mounting Accessories Supplier",
    keyword: "PV mounting accessories supplier",
    intro:
      "PV mounting accessories cover the smaller hardware and related parts needed around solar mounting systems. SolTorque Energy Co., Ltd. supports overseas customers with project-use solar mounting hardware and related PV accessories from China-side supply resources.",
    applications: [
      "Solar mounting rail, clamp and bracket accessory matching",
      "PV cable management and grounding accessory sourcing",
      "Project-use hardware supply for installers and EPC teams",
      "Distributor product range extension for PV accessories"
    ],
    specifications: [
      "Accessory type confirmed by product photo, drawing or sample",
      "Material, size, hole position and assembly method should be checked",
      "Quantity and packaging can be checked according to project needs",
      "Related parts can be matched together for easier inquiry handling"
    ],
    materials: [
      "Aluminum alloy references for rail and clamp accessories",
      "SUS304 / SUS316 stainless steel references for fasteners and clips",
      "EPDM rubber parts, copper braid and galvanized steel options according to product type"
    ],
    quoteInfo: [
      "Clear product photo or drawing",
      "Specification, material and surface treatment requirement",
      "Quantity and target application",
      "Need for related matched parts",
      "Destination market and preferred packaging"
    ],
    customerTypes: ["solar installer", "EPC", "supplier", "distributor"],
    image: "/images/products/roof-mounting-scene.jpg",
    alt: "PV mounting accessories for solar rooftop project use"
  },
  {
    slug: "solar-mounting-accessories-uae-projects",
    title: "Solar Mounting Accessories for UAE Projects",
    seoTitle: "Solar Mounting Accessories for UAE Projects | SolTorque Energy",
    metaDescription:
      "Solar mounting accessories for UAE projects. Check rails, clamps, brackets, bolts, cable clips and grounding parts by photo, specification and quantity.",
    h1: "Solar Mounting Accessories for UAE Projects",
    keyword: "solar mounting accessories for UAE projects",
    intro:
      "This page is prepared for buyers checking solar mounting accessories for UAE project inquiries. SolTorque Energy Co., Ltd. supports overseas customers with project-use solar mounting hardware and related PV accessories from China-side supply resources.",
    applications: [
      "Rooftop solar projects requiring rails, clamps and roof brackets",
      "PV accessory matching for commercial and residential installation needs",
      "Cable routing and grounding accessory checks for project packages",
      "Replacement or additional hardware checks by product photo"
    ],
    specifications: [
      "Rail profile, clamp size, bracket type and fastener details should be confirmed",
      "Cable clip type, grounding accessory type and MC4 connector needs can be checked",
      "Quantity and packing can be checked according to project use",
      "Suitable options can be checked from photos, drawings or specification sheets"
    ],
    materials: [
      "Aluminum alloy references for rails and clamps",
      "SUS304 / SUS316 stainless steel references for fasteners and clips",
      "EPDM rubber, copper braid and galvanized channel options according to product type"
    ],
    quoteInfo: [
      "Product photo or drawing",
      "Specification and material requirement",
      "Quantity for each item",
      "Application scenario and roof or structure type",
      "Required product list if several accessories are needed together"
    ],
    customerTypes: ["solar installer", "EPC", "supplier", "distributor"],
    recommendedProducts: commonSolarProducts,
    commonProducts: commonSolarProducts,
    relatedSlugs: [
      "solar-roof-clamp-supplier",
      "solar-mounting-rail-supplier",
      "solar-cable-clip-supplier",
      "solar-grounding-clip-supplier"
    ],
    image: "/images/products/metal-roof-mounting-system.jpg",
    alt: "Solar mounting accessories for UAE rooftop PV project inquiries"
  },
  {
    slug: "solar-mounting-hardware-supplier-oman",
    title: "Solar Mounting Hardware Supplier for Oman",
    seoTitle: "Solar Mounting Hardware Supplier for Oman | SolTorque Energy",
    metaDescription:
      "Solar mounting hardware supplier for Oman inquiries. Check rails, clamps, roof brackets, bolts, grounding parts and PV accessories by project needs.",
    h1: "Solar Mounting Hardware Supplier for Oman",
    keyword: "solar mounting hardware supplier for Oman",
    intro:
      "SolTorque Energy Co., Ltd. supports Oman-related inquiries for project-use solar mounting hardware and related PV accessories. Buyers can send product photos, specifications and quantity for checking.",
    applications: [
      "Rooftop solar mounting hardware matching",
      "Rail-based PV module fixing with mid clamps and end clamps",
      "Roof clamp, bracket and fastener checks",
      "Cable management and grounding accessory matching"
    ],
    specifications: [
      "Rail, clamp and bracket dimensions checked by drawing or sample photo",
      "T bolts, nuts and washers matched to rail slot and clamp type",
      "MC4 connectors and cable clips can be checked as related accessories",
      "GI slotted channel size and thickness can be checked when required"
    ],
    materials: [
      "Aluminum alloy mounting parts according to selected product type",
      "Stainless steel fasteners and cable clips according to project needs",
      "Galvanized channel, EPDM parts and grounding copper braid when applicable"
    ],
    quoteInfo: [
      "Photo or drawing of required mounting hardware",
      "Specification, size or existing sample reference",
      "Quantity and product list",
      "Application scenario such as roof type or PV structure",
      "Destination and packing preference if available"
    ],
    customerTypes: ["solar installer", "EPC", "supplier", "distributor"],
    recommendedProducts: commonSolarProducts,
    commonProducts: commonSolarProducts,
    relatedSlugs: [
      "solar-mid-clamp-supplier",
      "solar-end-clamp-supplier",
      "solar-t-bolt-supplier",
      "gi-slotted-channel-supplier"
    ],
    image: "/images/products/roof-mounting-scene.jpg",
    alt: "Solar mounting hardware supplier for Oman rooftop PV projects"
  },
  {
    slug: "pv-accessories-supplier-qatar",
    title: "PV Accessories Supplier for Qatar",
    seoTitle: "PV Accessories Supplier for Qatar | SolTorque Energy",
    metaDescription:
      "PV accessories supplier for Qatar inquiries. Check MC4 connectors, cable clips, grounding parts, rails, clamps and mounting hardware by project needs.",
    h1: "PV Accessories Supplier for Qatar",
    keyword: "PV accessories supplier for Qatar",
    intro:
      "This page supports Qatar-related inquiries for PV accessories and solar mounting hardware. SolTorque Energy Co., Ltd. helps overseas customers check suitable options by product photo, specification and quantity.",
    applications: [
      "PV electrical accessory checks for solar installation needs",
      "Cable management and grounding accessories for rooftop PV projects",
      "Mounting rail, clamp and bracket accessory matching",
      "Supplier or distributor product range development"
    ],
    specifications: [
      "Connector type, cable size and accessory model references should be confirmed",
      "Cable clip type and cable quantity per clip should be checked",
      "Grounding lug, washer or copper braid details should be provided",
      "Mounting hardware dimensions can be checked from photos or drawings"
    ],
    materials: [
      "PV connector and tool options according to selected specification",
      "Stainless steel clips, fasteners and grounding accessories",
      "Aluminum alloy rails and clamps when mounting hardware is requested"
    ],
    quoteInfo: [
      "Product photo or model reference",
      "Specification, cable size or mounting size",
      "Quantity for each accessory",
      "Application scenario and project use",
      "Whether related mounting hardware should be checked together"
    ],
    customerTypes: ["solar installer", "EPC", "supplier", "distributor"],
    recommendedProducts: [
      "MC4 connectors",
      "Cable clips / cable management parts",
      "Grounding / earthing accessories",
      "Solar mounting rails",
      "Mid clamps",
      "End clamps",
      "T bolts / nuts / fasteners"
    ],
    commonProducts: commonSolarProducts,
    relatedSlugs: [
      "mc4-connector-supplier",
      "solar-cable-clip-supplier",
      "solar-grounding-clip-supplier",
      "pv-mounting-accessories-supplier"
    ],
    image: "/images/products/mc4-connector-spanner.jpg",
    alt: "PV accessories supplier for Qatar solar project inquiries"
  },
  {
    slug: "solar-mounting-hardware-supplier-south-africa",
    title: "Solar Mounting Hardware Supplier for South Africa",
    seoTitle: "Solar Mounting Hardware Supplier for South Africa | SolTorque Energy",
    metaDescription:
      "Solar mounting hardware supplier for South Africa inquiries. Check rails, clamps, roof hooks, brackets, bolts, cable clips and grounding accessories.",
    h1: "Solar Mounting Hardware Supplier for South Africa",
    keyword: "solar mounting hardware supplier for South Africa",
    intro:
      "SolTorque Energy Co., Ltd. supports South Africa-related inquiries for solar mounting hardware and related PV accessories. Product matching can be checked according to project photo, specification, quantity and application scenario.",
    applications: [
      "Residential rooftop solar mounting hardware matching",
      "Commercial metal roof PV mounting accessories",
      "Roof hook, clamp and bracket checks",
      "Cable management and grounding part sourcing"
    ],
    specifications: [
      "Roof type, rail profile and clamp dimensions should be checked",
      "Module frame thickness and rail slot size affect clamp and bolt matching",
      "Cable clip and grounding accessory details can be checked by photo",
      "Product lists can include rails, clamps, brackets, bolts and PV accessories"
    ],
    materials: [
      "Aluminum alloy rails and clamps",
      "Stainless steel roof hooks, fasteners and cable clips",
      "EPDM rubber parts and grounding copper braid where applicable"
    ],
    quoteInfo: [
      "Roof type or application photo",
      "Product specification or existing hardware photo",
      "Quantity for each item",
      "Module frame thickness and rail details if available",
      "Whether products are for installation, resale or replacement"
    ],
    customerTypes: ["solar installer", "EPC", "supplier", "distributor"],
    recommendedProducts: commonSolarProducts,
    commonProducts: commonSolarProducts,
    relatedSlugs: [
      "solar-roof-clamp-supplier",
      "solar-mounting-rail-supplier",
      "solar-cable-clip-supplier",
      "solar-mounting-accessories-for-solar-installers"
    ],
    image: "/images/products/residential-roof-hooks.jpg",
    alt: "Solar mounting hardware supplier for South Africa rooftop projects"
  },
  {
    slug: "solar-mounting-accessories-for-solar-installers",
    title: "Solar Mounting Accessories for Solar Installers",
    seoTitle: "Solar Mounting Accessories for Solar Installers | SolTorque Energy",
    metaDescription:
      "Solar mounting accessories for solar installers. Check rails, clamps, roof brackets, bolts, cable clips, grounding parts and PV accessories.",
    h1: "Solar Mounting Accessories for Solar Installers",
    keyword: "solar mounting accessories for solar installers",
    intro:
      "This page is prepared for solar installers who need practical mounting accessories for project checks, replacement work or regular installation needs. SolTorque Energy Co., Ltd. supports product matching by photo, specification and quantity.",
    applications: [
      "Installer project preparation for rooftop solar mounting",
      "Replacement matching for rails, clamps, brackets and bolts",
      "Cable routing and grounding accessory checks",
      "Small product lists for recurring installation needs"
    ],
    specifications: [
      "Module frame thickness, rail profile and roof type should be confirmed",
      "Fasteners and washers should match the rail slot and bracket type",
      "Cable clip type should match cable quantity and module frame",
      "Grounding accessories should match the rail, clamp or cable connection point"
    ],
    materials: [
      "Aluminum alloy mounting accessories",
      "Stainless steel fasteners, hooks, clips and grounding parts",
      "EPDM rubber, copper braid and galvanized channel depending on product type"
    ],
    quoteInfo: [
      "Clear product photo or current installation photo",
      "Specification or required size",
      "Quantity by item",
      "Application scenario and roof type",
      "Whether matched accessories are needed together"
    ],
    customerTypes: ["solar installer"],
    recommendedProducts: commonSolarProducts,
    commonProducts: commonSolarProducts,
    relatedSlugs: [
      "solar-mid-clamp-supplier",
      "solar-end-clamp-supplier",
      "solar-roof-clamp-supplier",
      "solar-cable-clip-supplier"
    ],
    image: "/images/products/module-clamps.jpg",
    alt: "Solar mounting accessories for solar installers"
  },
  {
    slug: "solar-mounting-hardware-for-epc-contractors",
    title: "Solar Mounting Hardware for EPC Contractors",
    seoTitle: "Solar Mounting Hardware for EPC Contractors | SolTorque Energy",
    metaDescription:
      "Solar mounting hardware for EPC contractors. Check project-use rails, clamps, brackets, fasteners, cable clips and grounding accessories.",
    h1: "Solar Mounting Hardware for EPC Contractors",
    keyword: "solar mounting hardware for EPC contractors",
    intro:
      "EPC contractors often need product matching across several solar mounting hardware categories. SolTorque Energy Co., Ltd. supports project-use hardware and related PV accessories from China-side supply resources.",
    applications: [
      "Project bill-of-material checks for PV mounting accessories",
      "Rail, clamp, roof bracket and fastener matching",
      "Cable management and grounding accessory coordination",
      "Product comparison by photo, drawing or specification sheet"
    ],
    specifications: [
      "Project product list can include rails, clamps, brackets, bolts and accessories",
      "Rail profiles, clamp dimensions and fastener sets should be confirmed",
      "Cable management and grounding product details should be checked by application",
      "Quantities should be separated by product type for faster checking"
    ],
    materials: [
      "Aluminum alloy rails and clamps",
      "Stainless steel fasteners, clips, hooks and grounding parts",
      "GI slotted channel, EPDM rubber and copper braid where required"
    ],
    quoteInfo: [
      "Product list or BOM",
      "Photos, drawings or specification sheets",
      "Quantity by item",
      "Project application scenario",
      "Packing and delivery requirement if already known"
    ],
    customerTypes: ["EPC"],
    recommendedProducts: commonSolarProducts,
    commonProducts: commonSolarProducts,
    relatedSlugs: [
      "solar-mounting-rail-supplier",
      "solar-t-bolt-supplier",
      "gi-slotted-channel-supplier",
      "grounding-and-earthing-accessories-for-solar-projects"
    ],
    image: "/images/products/metal-roof-mounting-system.jpg",
    alt: "Solar mounting hardware for EPC contractor project checks"
  },
  {
    slug: "solar-mounting-hardware-for-rooftop-solar-projects",
    title: "Solar Mounting Hardware for Rooftop Solar Projects",
    seoTitle: "Solar Mounting Hardware for Rooftop Solar Projects | SolTorque Energy",
    metaDescription:
      "Solar mounting hardware for rooftop solar projects. Check rails, mid clamps, end clamps, roof clamps, hooks, bolts and cable management parts.",
    h1: "Solar Mounting Hardware for Rooftop Solar Projects",
    keyword: "solar mounting hardware for rooftop solar projects",
    intro:
      "Rooftop solar projects often require rails, clamps, brackets, hooks, fasteners and related PV accessories to be checked together. SolTorque Energy Co., Ltd. supports overseas customers with project-use product matching.",
    applications: [
      "Residential pitched roof PV mounting",
      "Commercial metal roof PV mounting",
      "Rail-based rooftop module installation",
      "Cable routing and grounding accessory checks for rooftop systems"
    ],
    specifications: [
      "Roof type and roof profile should be confirmed first",
      "Rail profile, clamp size and module frame thickness should match",
      "Roof bracket, hook or clamp selection depends on installation surface",
      "Cable clips and grounding parts can be checked as related accessories"
    ],
    materials: [
      "Aluminum alloy rails and clamps",
      "Stainless steel hooks, brackets, fasteners and cable clips",
      "EPDM rubber parts and grounding accessories according to product type"
    ],
    quoteInfo: [
      "Roof type and product photos",
      "Module frame thickness and rail profile if available",
      "Specification and quantity by item",
      "Application scenario and project size reference",
      "Related accessories required together"
    ],
    customerTypes: ["solar installer", "EPC", "supplier"],
    recommendedProducts: [
      "Solar mounting rails",
      "Mid clamps",
      "End clamps",
      "Roof clamps / brackets",
      "T bolts / nuts / fasteners",
      "Cable clips",
      "Grounding / earthing accessories"
    ],
    commonProducts: commonSolarProducts,
    relatedSlugs: [
      "solar-roof-clamp-supplier",
      "solar-mounting-rail-supplier",
      "solar-mid-clamp-supplier",
      "solar-end-clamp-supplier"
    ],
    image: "/images/products/roof-mounting-scene.jpg",
    alt: "Solar mounting hardware for rooftop solar projects"
  },
  {
    slug: "solar-mounting-hardware-for-solar-carport-projects",
    title: "Solar Mounting Hardware for Solar Carport Projects",
    seoTitle: "Solar Mounting Hardware for Solar Carport Projects | SolTorque Energy",
    metaDescription:
      "Solar mounting hardware for solar carport projects. Check clamps, rails, bolts, grounding parts, cable management accessories and GI slotted channel.",
    h1: "Solar Mounting Hardware for Solar Carport Projects",
    keyword: "solar mounting hardware for solar carport projects",
    intro:
      "Solar carport project inquiries may require mounting accessories, fasteners, grounding parts and cable management items to be matched with the project structure. SolTorque Energy Co., Ltd. can check suitable options according to project needs.",
    applications: [
      "PV module fixing on carport support structures",
      "Clamp, rail and fastener accessory checks",
      "Cable routing and grounding accessory matching",
      "Auxiliary support hardware such as GI slotted channel where required"
    ],
    specifications: [
      "Module fixing method and rail or support profile should be confirmed",
      "Fastener size and bracket connection details should be checked",
      "Grounding points and cable routing method affect accessory selection",
      "GI slotted channel size and thickness can be checked when needed"
    ],
    materials: [
      "Aluminum alloy clamps and rails according to system design",
      "Stainless steel fasteners, cable clips and grounding parts",
      "Galvanized channel and copper braid options depending on product type"
    ],
    quoteInfo: [
      "Project structure or mounting position photo",
      "Product drawing or specification reference",
      "Quantity and module layout reference",
      "Application scenario and required accessory list",
      "Material or surface treatment requirement if specified"
    ],
    customerTypes: ["EPC", "solar installer", "supplier"],
    recommendedProducts: [
      "Solar mounting rails",
      "Mid clamps",
      "End clamps",
      "T bolts / nuts / fasteners",
      "Grounding / earthing accessories",
      "Cable clips",
      "GI slotted channel / strut channel"
    ],
    commonProducts: commonSolarProducts,
    relatedSlugs: [
      "solar-mounting-rail-supplier",
      "solar-t-bolt-supplier",
      "gi-slotted-channel-supplier",
      "solar-grounding-clip-supplier"
    ],
    image: "/images/products/portable-triangle-bracket.jpg",
    alt: "Solar mounting hardware for solar carport project accessory checks"
  },
  {
    slug: "pv-accessories-for-solar-equipment-suppliers",
    title: "PV Accessories for Solar Equipment Suppliers",
    seoTitle: "PV Accessories for Solar Equipment Suppliers | SolTorque Energy",
    metaDescription:
      "PV accessories for solar equipment suppliers. Check MC4 connectors, cable clips, grounding parts, rails, clamps, brackets and related hardware.",
    h1: "PV Accessories for Solar Equipment Suppliers",
    keyword: "PV accessories for solar equipment suppliers",
    intro:
      "Solar equipment suppliers may need a practical range of PV accessories to support customer inquiries and project matching. SolTorque Energy Co., Ltd. supports product checks for mounting hardware and related PV accessories.",
    applications: [
      "Supplier product range extension for PV accessories",
      "Common accessory checks for customer inquiries",
      "PV electrical, cable management and grounding accessory sourcing",
      "Mounting hardware matching for rails, clamps and brackets"
    ],
    specifications: [
      "Product models, sizes and material references should be confirmed",
      "Accessory category and quantity should be separated clearly",
      "Photos or drawings help check replacement or similar items",
      "Packaging requirements can be checked according to product type"
    ],
    materials: [
      "Aluminum alloy mounting hardware",
      "Stainless steel clips, fasteners and grounding accessories",
      "Connector, copper braid, EPDM and galvanized channel options by product type"
    ],
    quoteInfo: [
      "Product list and photos",
      "Specification or size reference for each item",
      "Quantity by SKU or product type",
      "Target customer or application scenario",
      "Packaging preference if available"
    ],
    customerTypes: ["supplier", "distributor"],
    recommendedProducts: commonSolarProducts,
    commonProducts: commonSolarProducts,
    relatedSlugs: [
      "mc4-connector-supplier",
      "solar-cable-clip-supplier",
      "pv-mounting-accessories-supplier",
      "solar-mounting-accessories-for-distributors"
    ],
    image: "/images/products/pv-cable-clips.jpg",
    alt: "PV accessories for solar equipment suppliers"
  },
  {
    slug: "solar-mounting-accessories-for-distributors",
    title: "Solar Mounting Accessories for Distributors",
    seoTitle: "Solar Mounting Accessories for Distributors | SolTorque Energy",
    metaDescription:
      "Solar mounting accessories for distributors. Check rails, clamps, brackets, bolts, MC4 connectors, cable clips, grounding parts and GI channel.",
    h1: "Solar Mounting Accessories for Distributors",
    keyword: "solar mounting accessories for distributors",
    intro:
      "This page is for distributors checking solar mounting accessories and related PV parts for regular inquiry handling or product range planning. SolTorque Energy Co., Ltd. can check suitable options by photo, specification and quantity.",
    applications: [
      "Distributor product range planning for PV accessories",
      "Stock item checks for rails, clamps, brackets and bolts",
      "Cable clip, grounding part and MC4 connector inquiries",
      "Customer inquiry matching by photo or specification"
    ],
    specifications: [
      "Item size, material and surface treatment should be clear",
      "Rail, clamp and bracket compatibility should be confirmed",
      "Accessory quantity and packaging can be checked by item",
      "Product photos help compare similar items before quotation"
    ],
    materials: [
      "Aluminum alloy rails and clamps",
      "Stainless steel fasteners, clips and grounding accessories",
      "EPDM rubber, copper braid and galvanized channel options by category"
    ],
    quoteInfo: [
      "Product list and target categories",
      "Specification or current sample photo",
      "Quantity and packaging preference",
      "Application scenario or target buyer type",
      "Any matched accessory requirements"
    ],
    customerTypes: ["distributor", "supplier"],
    recommendedProducts: commonSolarProducts,
    commonProducts: commonSolarProducts,
    relatedSlugs: [
      "pv-mounting-accessories-supplier",
      "solar-mounting-rail-supplier",
      "solar-t-bolt-supplier",
      "pv-accessories-for-solar-equipment-suppliers"
    ],
    image: "/images/products/module-clamps.jpg",
    alt: "Solar mounting accessories for distributors and suppliers"
  },
  {
    slug: "solar-cable-management-accessories-supplier",
    title: "Solar Cable Management Accessories Supplier",
    seoTitle: "Solar Cable Management Accessories Supplier | SolTorque Energy",
    metaDescription:
      "Solar cable management accessories supplier for PV projects. Check cable clips, stainless steel cable ties, frame clips and related parts.",
    h1: "Solar Cable Management Accessories Supplier",
    keyword: "solar cable management accessories supplier",
    intro:
      "Solar cable management accessories help organize PV cables in rooftop and structural solar projects. SolTorque Energy Co., Ltd. supports checks for cable clips, stainless steel cable ties and related PV cable routing parts.",
    applications: [
      "Cable routing under PV module frames",
      "Cable fixing on rooftop solar projects",
      "Stainless steel cable tie and clip matching",
      "Replacement or accessory range checks for suppliers"
    ],
    specifications: [
      "Cable diameter and number of cables per clip should be confirmed",
      "Module frame thickness or fixing edge size should be provided",
      "Clip style, direction and material can be checked by photo",
      "Cable tie width, length and material requirement can be checked"
    ],
    materials: [
      "Stainless steel cable clip references",
      "Stainless steel cable tie references",
      "Other cable management materials can be checked by product photo"
    ],
    quoteInfo: [
      "Cable diameter and number of cables",
      "Clip photo, drawing or existing sample reference",
      "Frame thickness or mounting position photo",
      "Quantity by clip type",
      "Application scenario such as rooftop or ground PV"
    ],
    customerTypes: ["solar installer", "EPC", "supplier", "distributor"],
    recommendedProducts: [
      "Solar cable clips",
      "Special frame cable clips",
      "90-degree PV cable clips",
      "Stainless steel cable ties",
      "Cable management parts"
    ],
    commonProducts: [
      "Cable clips / cable management parts",
      "Stainless steel cable ties",
      "Grounding / earthing accessories",
      "MC4 connectors",
      "Solar mounting rails",
      "Mid clamps",
      "End clamps"
    ],
    relatedSlugs: [
      "solar-cable-clip-supplier",
      "pv-accessories-supplier-qatar",
      "pv-accessories-for-solar-equipment-suppliers",
      "grounding-and-earthing-accessories-for-solar-projects"
    ],
    image: "/images/products/stainless-steel-cable-ties.jpg",
    alt: "Solar cable management accessories and stainless steel cable ties"
  },
  {
    slug: "grounding-and-earthing-accessories-for-solar-projects",
    title: "Grounding and Earthing Accessories for Solar Projects",
    seoTitle: "Grounding and Earthing Accessories for Solar Projects | SolTorque Energy",
    metaDescription:
      "Grounding and earthing accessories for solar projects. Check grounding clips, washers, lugs, copper braid and related PV hardware.",
    h1: "Grounding and Earthing Accessories for Solar Projects",
    keyword: "grounding and earthing accessories for solar projects",
    intro:
      "Grounding and earthing accessories are used around PV module, rail and cable connection points. SolTorque Energy Co., Ltd. helps overseas customers check grounding clips, grounding washers, lugs, copper braid and related parts.",
    applications: [
      "PV module and rail bonding accessory checks",
      "Grounding lug and copper braid connection points",
      "Rooftop solar grounding accessory matching",
      "Project accessory lists for installers and EPC contractors"
    ],
    specifications: [
      "Grounding clip or washer shape should match the rail and clamp system",
      "Grounding lug hole size and cable size should be provided",
      "Copper braid length and terminal details can be checked",
      "Related fasteners and washers should be confirmed together"
    ],
    materials: [
      "Stainless steel grounding clips and washers",
      "Copper braid and terminal references",
      "Grounding lugs and related fasteners according to project needs"
    ],
    quoteInfo: [
      "Grounding product photo or drawing",
      "Rail, clamp or connection position",
      "Cable size, hole size or braid length",
      "Quantity by product type",
      "Application scenario and related parts needed"
    ],
    customerTypes: ["solar installer", "EPC", "supplier", "distributor"],
    recommendedProducts: [
      "Grounding clip washers",
      "Grounding lugs",
      "PV grounding copper braid",
      "Grounding wire clips",
      "T bolts / nuts / fasteners",
      "Solar cable clips"
    ],
    commonProducts: [
      "Grounding / earthing accessories",
      "Cable clips / cable management parts",
      "T bolts / nuts / fasteners",
      "Solar mounting rails",
      "Mid clamps",
      "End clamps"
    ],
    relatedSlugs: [
      "solar-grounding-clip-supplier",
      "solar-cable-management-accessories-supplier",
      "solar-mounting-hardware-for-epc-contractors",
      "pv-mounting-accessories-supplier"
    ],
    image: "/images/products/grounding-copper-braid.jpg",
    alt: "Grounding and earthing accessories for solar projects"
  }
];

export function getSeoProductPage(slug: string) {
  return seoProductPages.find((page) => page.slug === slug);
}

export function getRelatedSeoPages(page: SeoProductPage) {
  const relatedSlugs =
    page.relatedSlugs ??
    seoProductPages
      .filter((item) => item.slug !== page.slug)
      .slice(0, 4)
      .map((item) => item.slug);

  return relatedSlugs
    .map((slug) => seoProductPages.find((item) => item.slug === slug))
    .filter((item): item is SeoProductPage => Boolean(item));
}
