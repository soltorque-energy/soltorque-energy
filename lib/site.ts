export const site = {
  name: "SolTorque Energy Co., Ltd.",
  shortName: "SolTorque Energy",
  url: "https://soltorque-energy.netlify.app",
  description:
    "SolTorque Energy Co., Ltd. supplies project-use solar mounting hardware and related PV accessories from China-side supply resources.",
  email: "yankangniu@gmail.com",
  whatsappNumber: "8618862621563",
  whatsappUrl:
    "https://wa.me/8618862621563?text=Hello%20SolTorque%20Energy%2C%20I%20would%20like%20to%20check%20solar%20mounting%20hardware%20or%20PV%20accessories.%20I%20will%20send%20product%20photo%2C%20specification%20and%20quantity.",
  inquiryNote:
    "Please send product photo, specification, quantity and application scenario."
};

export function createWhatsAppUrl(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/product-range", label: "Product Range" },
  { href: "/solar-mounting-hardware", label: "Solar Mounting Hardware" },
  { href: "/pv-electrical-accessories", label: "PV Electrical Accessories" },
  { href: "/cable-management-grounding", label: "Cable Management & Grounding" },
  { href: "/about", label: "About / Capability" },
  { href: "/downloads", label: "Downloads" },
  { href: "/contact", label: "Contact" }
];

export const seoKeywords = [
  "solar mounting hardware supplier",
  "PV accessories supplier",
  "solar mid clamp supplier",
  "solar end clamp supplier",
  "solar mounting rail supplier",
  "MC4 connector supplier",
  "solar cable clip supplier",
  "grounding accessories supplier",
  "GI slotted channel supplier"
];
