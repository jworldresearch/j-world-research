export interface Company {
  slug: string;
  name: string;
  ticker?: string;
  status: "CORE" | "WATCH" | "RESEARCH";
  category: string;
  title: string;
  description: string;
  technologies: string[];
  research: string[];
  maps: string[];
  evidence: string;
  role: string;
}

export const companies: Company[] = [
  {
    slug: "tsmc",
    name: "台積電",
    ticker: "2330",
    status: "CORE",
    category: "Foundry / Advanced Packaging",
    title: "先進製程與先進封裝平台",
    description:
      "全球晶圓代工與先進製程的重要平台企業，也是 AI 半導體供應鏈研究的核心觀察對象。",
    technologies: [
      "Advanced Process",
      "2nm",
      "CoWoS",
      "SoIC",
      "Advanced Packaging"
    ],
    research: [
      "P1",
      "P2",
      "P3",
      "P4",
      "P6",
      "P7"
    ],
    maps: [
      "AI Ecosystem",
      "CPO Ecosystem"
    ],
    evidence:
      "公開公司資訊、技術論壇資料與產業公開資料",
    role:
      "AI Compute → Advanced Process → Advanced Packaging"
  },

  {
    slug: "nvidia",
    name: "NVIDIA",
    ticker: "NVDA",
    status: "CORE",
    category: "AI Computing",
    title: "AI 加速運算平台",
    description:
      "AI 加速運算與資料中心平台的重要企業，是 AI Platform Evolution 的核心觀察對象。",
    technologies: [
      "GPU",
      "AI Accelerator",
      "Networking",
      "Advanced Packaging"
    ],
    research: [
      "P1",
      "P2",
      "P3",
      "P4",
      "P6",
      "P7"
    ],
    maps: [
      "AI Ecosystem",
      "CPO Ecosystem"
    ],
    evidence:
      "公開產品資訊、公司資料與產業公開資訊",
    role:
      "AI Compute → Networking → Advanced Packaging"
  },

  {
    slug: "broadcom",
    name: "Broadcom",
    ticker: "AVGO",
    status: "CORE",
    category: "Networking / Custom Silicon",
    title: "AI Networking 與客製化運算晶片",
    description:
      "資料中心網路、交換器與客製化 ASIC 生態系的重要企業。",
    technologies: [
      "Switch ASIC",
      "Networking",
      "Custom Silicon",
      "Optical Connectivity"
    ],
    research: [
      "P3",
      "P4",
      "P6",
      "P7"
    ],
    maps: [
      "AI Ecosystem",
      "CPO Ecosystem"
    ],
    evidence:
      "公開產品資料與產業公開資訊",
    role:
      "AI Networking → Switch ASIC → Optical Connectivity"
  },

  {
    slug: "corning",
    name: "Corning",
    status: "WATCH",
    category: "Glass / Optical",
    title: "高階玻璃與光纖技術",
    description:
      "玻璃材料、光纖與高速光通訊相關技術的重要觀察企業。",
    technologies: [
      "Optical Fiber",
      "Glass Technology",
      "High-Speed Connectivity",
      "Specialty Glass"
    ],
    research: [
      "P4",
      "P5",
      "P7"
    ],
    maps: [
      "Glass Core Ecosystem",
      "CPO Ecosystem"
    ],
    evidence:
      "公開產品資訊與公司公開資料",
    role:
      "Glass → Optical Fiber → High-Speed Connectivity"
  },

  {
    slug: "intel",
    name: "Intel",
    status: "WATCH",
    category: "Advanced Packaging / Glass Substrate",
    title: "先進封裝與玻璃基板技術觀察",
    description:
      "先進封裝與玻璃基板技術發展的重要觀察企業。",
    technologies: [
      "Advanced Packaging",
      "Glass Substrate",
      "2.5D / 3D Packaging",
      "Chiplet"
    ],
    research: [
      "P4",
      "P5",
      "P7"
    ],
    maps: [
      "Glass Core Ecosystem",
      "AI Ecosystem"
    ],
    evidence:
      "公開技術資料與公司公開資訊",
    role:
      "Advanced Packaging → Glass Substrate → Chiplet"
  },

  {
    slug: "marvell",
    name: "Marvell Technology",
    ticker: "MRVL",
    status: "WATCH",
    category: "Networking / Optical",
    title: "資料中心互連與客製化運算晶片",
    description:
      "資料中心互連、網路與客製化運算晶片相關技術的重要觀察企業。",
    technologies: [
      "Custom ASIC",
      "Networking",
      "Optical DSP",
      "Data Center Connectivity"
    ],
    research: [
      "P3",
      "P4",
      "P6",
      "P7"
    ],
    maps: [
      "AI Ecosystem",
      "CPO Ecosystem"
    ],
    evidence:
      "公開產品資料與公司公開資訊",
    role:
      "Custom Silicon → Networking → Optical Connectivity"
  },

  {
    slug: "ase",
    name: "日月光投控",
    ticker: "3711",
    status: "CORE",
    category: "OSAT / Advanced Packaging",
    title: "半導體封裝與測試",
    description:
      "全球重要半導體封裝與測試服務企業，也是先進封裝供應鏈的重要觀察對象。",
    technologies: [
      "OSAT",
      "Advanced Packaging",
      "Chiplet",
      "System-in-Package"
    ],
    research: [
      "P4",
      "P6",
      "P7"
    ],
    maps: [
      "AI Ecosystem"
    ],
    evidence:
      "公開公司資料與產業公開資訊",
    role:
      "Advanced Packaging → OSAT → System Integration"
  },

  {
    slug: "innolux",
    name: "群創",
    ticker: "3481",
    status: "RESEARCH",
    category: "Glass / Display / Advanced Materials",
    title: "玻璃與面板製造能力延伸觀察",
    description:
      "大型玻璃基板處理與顯示製造能力的台灣企業，作為 Glass Ecosystem 延伸研究對象。",
    technologies: [
      "Glass Processing",
      "Display",
      "Advanced Materials",
      "Large-Area Glass"
    ],
    research: [
      "P5",
      "P7"
    ],
    maps: [
      "Glass Core Ecosystem"
    ],
    evidence:
      "公司公開資料與產業公開資訊",
    role:
      "Large-Area Glass → Processing → Advanced Materials"
  }
];

export function getCompany(slug: string) {
  return companies.find((company) => company.slug === slug);
}

export function getCompaniesByStatus(
  status: Company["status"]
) {
  return companies.filter(
    (company) => company.status === status
  );
}
