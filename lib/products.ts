export type ProductCategory = {
  title: string;
  slug: string;
  summary: string;
  image: string;
  alt: string;
  keywords: string[];
  products: string[];
};

export const productCategories: ProductCategory[] = [
  {
    title: "Solar Mounting Hardware",
    slug: "/solar-mounting-hardware",
    summary:
      "Project-use mounting rails, clamps, roof brackets, fasteners and GI slotted channel options for rooftop and structural PV installation needs.",
    image: "/images/products/metal-roof-mounting-system.jpg",
    alt: "Commercial metal roof PV mounting hardware",
    keywords: [
      "solar mounting hardware supplier",
      "solar mounting rail supplier",
      "solar mid clamp supplier",
      "solar end clamp supplier",
      "GI slotted channel supplier"
    ],
    products: [
      "Solar mounting rails",
      "Mid clamps",
      "End clamps",
      "Roof clamps / brackets",
      "T bolts / nuts / fasteners",
      "GI slotted channel / strut channel",
      "Residential roof stainless steel hooks",
      "Metal roof brackets and clamps"
    ]
  },
  {
    title: "PV Electrical Accessories",
    slug: "/pv-electrical-accessories",
    summary:
      "MC4 connectors, connector tools and related PV electrical accessories can be checked according to product photo, specification and project use.",
    image: "/images/products/mc4-connector-spanner.jpg",
    alt: "MC4 PV connector spanner and related PV electrical accessories",
    keywords: ["PV accessories supplier", "MC4 connector supplier"],
    products: [
      "MC4 connectors",
      "MC4 PV connector spanner",
      "DC isolator bracket",
      "Related PV accessories",
      "Product matching by photo and specification"
    ]
  },
  {
    title: "Cable Management & Grounding",
    slug: "/cable-management-grounding",
    summary:
      "Cable clips, stainless steel cable ties, grounding lugs, grounding clip washers and copper braid for organized PV cable routing and electrical bonding.",
    image: "/images/products/pv-cable-clips.jpg",
    alt: "PV cable clips and cable management parts",
    keywords: ["solar cable clip supplier", "grounding accessories supplier"],
    products: [
      "Cable clips / cable management parts",
      "Special frame cable clips",
      "90-degree PV cable clips",
      "Stainless steel cable ties for PV",
      "Grounding / earthing accessories",
      "Grounding clip washers",
      "Grounding lugs",
      "PV grounding copper braid"
    ]
  }
];

export const productRange = [
  {
    group: "Roof & Structural Mounting",
    text: "Solar mounting rails, mid clamps, end clamps, roof clamps / brackets, hanger bolts, L feet, GI slotted channel / strut channel and related fasteners.",
    image: "/images/products/module-clamps.jpg",
    alt: "Solar mid clamps end clamps and rail hardware"
  },
  {
    group: "PV Electrical Accessories",
    text: "MC4 connectors, connector tools, DC isolator brackets and related PV accessories for project-use matching.",
    image: "/images/products/mc4-connector-spanner.jpg",
    alt: "MC4 connector spanner for PV electrical accessories"
  },
  {
    group: "Cable Management",
    text: "PV cable clips, special frame cable clips, 90-degree clips, multiple-cable tie clips and stainless steel cable ties.",
    image: "/images/products/pv-cable-clips.jpg",
    alt: "Solar cable clips for PV cable management"
  },
  {
    group: "Grounding & Earthing",
    text: "Grounding clip washers, grounding lugs, grounding wire clips, grounding copper braid and related bonding accessories.",
    image: "/images/products/grounding-clip-washer.jpg",
    alt: "Grounding clip washer and earthing accessories"
  },
  {
    group: "Off-Grid, RV & Marine",
    text: "Portable foldable triangle brackets, ABS solar panel mounting brackets and Solar RV & Marine Z bracket options.",
    image: "/images/products/rv-marine-z-bracket.jpg",
    alt: "Solar RV and marine Z bracket application"
  }
];

export const capabilityPoints = [
  "China-side supply resources for project-use solar mounting hardware and PV accessories.",
  "Product matching by photo, specification, quantity and application scenario.",
  "Suitable options can be checked according to project needs.",
  "Main materials include AL6005-T5 aluminum alloy, SUS304 / SUS316 stainless steel and EPDM rubber parts.",
  "Support for related surface treatment references such as anodized aluminum parts when required by the project."
];

export const downloads = [
  {
    title: "Short Product Range",
    description:
      "A quick PDF for understanding the main SolTorque product range before sharing photos, specifications and quantity.",
    href: "/downloads/soltorque-short-product-range.pdf",
    fileLabel: "soltorque-short-product-range.pdf"
  },
  {
    title: "Full Catalog",
    description:
      "A full PDF catalog for checking detailed product pictures and specification references.",
    href: "/downloads/soltorque-full-catalog.pdf",
    fileLabel: "soltorque-full-catalog.pdf"
  }
];
