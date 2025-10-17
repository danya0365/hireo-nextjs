import type { LandingHeroStats, LandingMasterData } from "@/src/domain/constants/landing";

export const landingHeroStats: LandingHeroStats[] = [
  { id: "hero_stat_projects", label: "โปรเจกต์สำเร็จ", value: "18K+" },
  { id: "hero_stat_clients", label: "ลูกค้าธุรกิจ", value: "9.4K" },
  { id: "hero_stat_satisfaction", label: "ความพึงพอใจ", value: "98%" }
];

export const landingMasterData: LandingMasterData = {
  categories: [
    {
      id: "design",
      name: "ออกแบบและสร้างแบรนด์",
      description: "UI/UX, โลโก้, สื่อประชาสัมพันธ์",
      icon: "Sparkles",
      featured: true
    },
    {
      id: "marketing",
      name: "การตลาดดิจิทัล",
      description: "โฆษณา, SEO, คอนเทนต์",
      icon: "Megaphone",
      featured: true
    },
    {
      id: "development",
      name: "พัฒนาเว็บไซต์/แอป",
      description: "Frontend, Backend, Mobile",
      icon: "Code",
      featured: true
    },
    {
      id: "writing",
      name: "คอนเทนต์และแปลภาษา",
      description: "บทความ, คำบรรยาย, แปล",
      icon: "Pen",
      featured: false
    },
    {
      id: "video",
      name: "วิดีโอและอนิเมชัน",
      description: "ตัดต่อ, Motion, Live",
      icon: "Video",
      featured: false
    },
    {
      id: "business",
      name: "ที่ปรึกษาธุรกิจ",
      description: "กลยุทธ์, การเงิน, HR",
      icon: "Briefcase",
      featured: false
    }
  ],
  freelancers: [
    {
      id: "freelancer_01",
      name: "ณัฐกิตติ์ วงศ์วัฒน์",
      role: "Lead UI/UX Designer",
      rating: 4.9,
      reviewCount: 215,
      completedProjects: 320,
      avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
      categories: ["design", "development"]
    },
    {
      id: "freelancer_02",
      name: "ศศิธร ตั้งกิจไพศาล",
      role: "Performance Marketing Specialist",
      rating: 4.95,
      reviewCount: 189,
      completedProjects: 280,
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
      categories: ["marketing"]
    },
    {
      id: "freelancer_03",
      name: "อาทิตย์ เจริญสุข",
      role: "Full Stack Engineer",
      rating: 4.87,
      reviewCount: 164,
      completedProjects: 240,
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
      categories: ["development"]
    },
    {
      id: "freelancer_04",
      name: "วัลย์ชนก พิมพ์สวัสดิ์",
      role: "Content Strategist & Storyteller",
      rating: 4.92,
      reviewCount: 132,
      completedProjects: 210,
      avatar: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6",
      categories: ["writing", "marketing"]
    }
  ],
  testimonials: [
    {
      id: "testimonial_01",
      quote:
        "หลังจากย้ายทีมคอนเทนต์มาที่ Hireo เราเห็น Engagement เพิ่มขึ้น 3 เท่าใน 60 วัน",
      company: "GlowMart",
      person: "ศุภกานต์ พรหมสุทธิ์",
      role: "Head of Marketing"
    },
    {
      id: "testimonial_02",
      quote:
        "ฟรีแลนซ์ของ Hireo เข้าใจธุรกิจ SaaS อย่างลึกซึ้ง ทำให้การพัฒนาโปรดักต์เร็วขึ้นอย่างเห็นได้ชัด",
      company: "NovaStack",
      person: "ปวริศา ปรีชากุล",
      role: "COO"
    }
  ],
  metrics: [
    {
      id: "metric_success",
      label: "อัตราความสำเร็จ",
      value: "97%",
      subLabel: "โปรเจกต์ที่จบตรงเวลา"
    },
    {
      id: "metric_response",
      label: "ตอบกลับเฉลี่ย",
      value: "2 ชม.",
      subLabel: "ระหว่างคลientsและฟรีแลนซ์"
    },
    {
      id: "metric_expert",
      label: "ฟรีแลนซ์ผ่านการคัดกรอง",
      value: "12K+",
      subLabel: "ทีมผู้เชี่ยวชาญทั่วโลก"
    }
  ],
  packages: [
    {
      id: "package_startup",
      name: "Startup Launch",
      target: "ธุรกิจเริ่มต้น",
      price: "฿12,900",
      description: "ออกแบบแบรนด์และเว็บไซต์ Landing ครบวงจร",
      features: [
        "เวิร์กช็อปวิเคราะห์แบรนด์ 1 ครั้ง",
        "ดีไซน์โลโก้ + guideline",
        "Landing Page พร้อมคอนเทนต์",
        "เตรียม social kit เปิดตัว"
      ]
    },
    {
      id: "package_scale",
      name: "Growth Accelerator",
      target: "ธุรกิจที่กำลังขยาย",
      price: "฿29,900",
      description: "กลยุทธ์ Performance Marketing แบบครบชุด",
      features: [
        "กลยุทธ์โฆษณา 3 แพลตฟอร์ม",
        "ระบบวัดผล conversion",
        "สร้างคอนเทนต์โฆษณา 10 ชิ้น",
        "ที่ปรึกษารายสัปดาห์",
        "A/B Testing ต่อเนื่อง"
      ],
      highlighted: true
    },
    {
      id: "package_enterprise",
      name: "Enterprise Elite",
      target: "องค์กรขนาดใหญ่",
      price: "Custom",
      description: "ทีมเฉพาะกิจสำหรับโปรเจกต์ระดับองค์กร",
      features: [
        "ฟรีแลนซ์ผู้เชี่ยวชาญเฉพาะด้าน",
        "ผสานงานร่วมกับทีม in-house",
        "PM ส่วนตัวและ SLA",
        "โครงสร้างรายงานตาม KPI",
        "รองรับภาษีและเอกสารสัญญา"
      ]
    }
  ],
  blogPosts: [
    {
      id: "blog_01",
      title: "คู่มือสร้างทีมฟรีแลนซ์ให้ธุรกิจโต 10x",
      excerpt: "เรียนรู้โมเดลการจัดการฟรีแลนซ์แบบ Agile และการวัดผลที่สำคัญ",
      category: "Insider Guide",
      publishedAt: "2025-09-22",
      readTime: "8 นาที"
    },
    {
      id: "blog_02",
      title: "5 กลยุทธ์ Performance Marketing ที่แบรนด์ไทยใช้แล้วได้ผล",
      excerpt: "เคสศึกษาจากอุตสาหกรรมค้าปลีก การศึกษา และเทคโนโลยี",
      category: "Growth",
      publishedAt: "2025-08-30",
      readTime: "6 นาที"
    },
    {
      id: "blog_03",
      title: "ออกแบบประสบการณ์ลูกค้ายุค AI ด้วยทีม UX ที่ยืดหยุ่น",
      excerpt: "ผสานงานระหว่างทีม UX ระยะไกลกับนักพัฒนาภายในองค์กร",
      category: "Product",
      publishedAt: "2025-07-18",
      readTime: "9 นาที"
    }
  ],
  faqs: [
    {
      id: "faq_how_it_works",
      question: "Hireo คัดเลือกฟรีแลนซ์อย่างไร?",
      answer:
        "เรามีขั้นตอนคัดกรอง 3 ชั้น ทั้งการสัมภาษณ์ การทดสอบทักษะ และรีวิวจากลูกค้าจริง เพื่อให้มั่นใจในคุณภาพ"
    },
    {
      id: "faq_payment",
      question: "การชำระเงินปลอดภัยแค่ไหน?",
      answer:
        "Hireo ใช้ระบบ Escrow ช่วยถือเงินจนกว่างานจะเสร็จ พร้อมระบบใบกำกับภาษีและเอกสารสัญญา"
    },
    {
      id: "faq_support",
      question: "หากเกิดปัญหาระหว่างโปรเจกต์ทำอย่างไร?",
      answer:
        "ทีม Customer Success ของเราพร้อมช่วยเหลือ 24/7 พร้อมขั้นตอนแก้ไขข้อขัดแย้งที่ชัดเจน"
    }
  ]
};
