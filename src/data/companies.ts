export type CompanyStatus =
  | "CORE"
  | "WATCH"
  | "RESEARCH"
  | "ECOSYSTEM";

export type Company = {
  slug: string;
  name: string;
  ticker?: string;
  category: string;
  status: CompanyStatus;
  role: string;
  technology: string[];
  researchRefs: string[];
  mapRefs: string[];
  evidence: string;
  description: string;
};

export const companies: Company[] = [
  {
    slug: "tsmc",
    name: "台積電",
    ticker: "2330",
    category: "Foundry / Advanced Packaging",
    status: "CORE",
    role: "AI 半導體製造與先進封裝平台",
    technology: [
      "先進製程",
      "CoWoS",
      "SoIC",
      "先進封裝",
      "3D IC"
    ],
    researchRefs: [
      "/research/p1",
      "/research/p2",
      "/research/p3",
      "/research/p4",
      "/research/p5",
      "/research/p6",
      "/research/p7",
      "/research/p8"
    ],
    mapRefs: [
      "/maps/ai-ecosystem",
      "/maps/glass-core",
      "/maps/cpo"
    ],
    evidence: "PUBLIC",
    description:
      "台灣先進半導體製造與先進封裝核心企業，也是本研究 AI Platform Evolution 架構的重要觀察節點。"
  },

  {
    slug: "nvidia",
    name: "NVIDIA",
    ticker: "NVDA",
    category: "AI Compute",
    status: "CORE",
    role: "AI 加速運算與平台架構",
    technology: [
      "GPU",
      "AI Accelerator",
      "Networking",
      "Advanced Packaging",
      "AI Platform"
    ],
    researchRefs: [
      "/research/p1",
      "/research/p3",
      "/research/p4",
      "/research/p6",
      "/research/p7"
    ],
    mapRefs: [
      "/maps/ai-ecosystem",
      "/maps/cpo"
    ],
    evidence: "PUBLIC",
    description:
      "AI 運算平台的重要核心企業。本研究將其視為 AI Compute 與平台演進的主要觀察對象。"
  },

  {
    slug: "broadcom",
    name: "Broadcom",
    ticker: "AVGO",
    category: "Networking / Custom Silicon",
    status: "CORE",
    role: "AI Networking 與客製化運算晶片",
    technology: [
      "Switch ASIC",
      "Networking",
      "Custom Silicon",
      "Optical Connectivity",
      "AI Infrastructure"
    ],
    researchRefs: [
      "/research/p3",
      "/research/p4",
      "/research/p6",
      "/research/p7"
    ],
    mapRefs: [
      "/maps/ai-ecosystem",
      "/maps/cpo"
    ],
    evidence: "PUBLIC",
    description:
      "AI 資料中心高速互連與網路基礎建設的重要觀察企業。"
  },

  {
    slug: "corning",
    name: "Corning",
    category: "Glass / Optical",
    status: "WATCH",
    role: "高階玻璃與光纖技術",
    technology: [
      "Optical Fiber",
      "Glass Technology",
      "High-Speed Connectivity",
      "Specialty Glass"
    ],
    researchRefs: [
      "/research/p5",
      "/research/p7",
      "/research/p8"
    ],
    mapRefs: [
      "/maps/glass-core",
      "/maps/cpo"
    ],
    evidence: "PUBLIC",
    description:
      "玻璃材料與光纖技術的重要全球企業，本研究將其列入 Glass Core 與高速光互連觀察範圍。"
  },

  {
    slug: "intel",
    name: "Intel",
    category: "Advanced Packaging / Glass Substrate",
    status: "WATCH",
    role: "先進封裝與玻璃基板技術觀察",
    technology: [
      "Advanced Packaging",
      "Glass Substrate",
      "2.5D / 3D Packaging",
      "Chiplet"
    ],
    researchRefs: [
      "/research/p4",
      "/research/p5",
      "/research/p7",
      "/research/p8"
    ],
    mapRefs: [
      "/maps/glass-core",
      "/maps/ai-ecosystem"
    ],
    evidence: "PUBLIC",
    description:
      "先進封裝與玻璃基板技術的重要觀察對象，適合放入 Glass Core Technology Watch。"
  },

  {
    slug: "marvell",
    name: "Marvell Technology",
    ticker: "MRVL",
    category: "Networking / Optical",
    status: "WATCH",
    role: "資料中心互連與客製化晶片",
    technology: [
      "Custom ASIC",
      "Networking",
      "Optical DSP",
      "Data Center Connectivity"
    ],
    researchRefs: [
      "/research/p3",
      "/research/p4",
      "/research/p7"
    ],
    mapRefs: [
      "/maps/ai-ecosystem",
      "/maps/cpo"
    ],
    evidence: "PUBLIC",
    description:
      "資料中心網路、客製化晶片與高速互連領域的重要觀察企業。"
  },

  {
    slug: "ase",
    name: "日月光投控",
    ticker: "3711",
    category: "OSAT / Advanced Packaging",
    status: "CORE",
    role: "半導體封裝與測試",
    technology: [
      "OSAT",
      "Advanced Packaging",
      "Chiplet",
      "System-in-Package",
      "Testing"
    ],
    researchRefs: [
      "/research/p4",
      "/research/p5",
      "/research/p6",
      "/research/p7"
    ],
    mapRefs: [
      "/maps/ai-ecosystem",
      "/maps/glass-core"
    ],
    evidence: "PUBLIC",
    description:
      "全球半導體封裝測試產業的重要企業，也是 AI 封裝供應鏈的重要觀察節點。"
  },

  {
    slug: "innolux",
    name: "群創",
    ticker: "3481",
    category: "Glass / Display / Advanced Materials",
    status: "RESEARCH",
    role: "玻璃與面板製造能力延伸觀察",
    technology: [
      "Glass Processing",
      "Display",
      "Advanced Materials",
      "Large-Area Glass"
    ],
    researchRefs: [
      "/research/p5",
      "/research/p7"
    ],
    mapRefs: [
      "/maps/glass-core"
    ],
    evidence: "PUBLIC",
    description:
      "具備大型玻璃基板與面板製造能力，本研究將其列入玻璃材料與製程能力延伸觀察名單。"
  }
];

export function getCompany(slug: string): Company | undefined {
  return companies.find((company) => company.slug === slug);
}
