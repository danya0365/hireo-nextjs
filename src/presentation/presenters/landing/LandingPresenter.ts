import type { Metadata } from "next";

import {
  type LandingHeroStats,
  type LandingMasterData
} from "@/src/domain/constants/landing";
import { landingHeroStats, landingMasterData } from "@/src/infrastructure/mocks/landingData";

export interface LandingViewModel {
  heroStats: LandingHeroStats[];
  categories: LandingMasterData["categories"];
  featuredCategories: LandingMasterData["categories"];
  freelancers: LandingMasterData["freelancers"];
  featuredFreelancers: LandingMasterData["freelancers"];
  testimonials: LandingMasterData["testimonials"];
  metrics: LandingMasterData["metrics"];
  packages: LandingMasterData["packages"];
  blogPosts: LandingMasterData["blogPosts"];
  faqs: LandingMasterData["faqs"];
  lastUpdated: string;
}

export class LandingPresenter {
  constructor(
    private readonly masterData: LandingMasterData,
    private readonly heroData: LandingHeroStats[]
  ) {}

  async getViewModel(): Promise<LandingViewModel> {
    const featuredCategories = this.masterData.categories.filter((category) => category.featured);
    const featuredFreelancers = this.masterData.freelancers.slice(0, 3);

    return {
      heroStats: this.heroData,
      categories: this.masterData.categories,
      featuredCategories,
      freelancers: this.masterData.freelancers,
      featuredFreelancers,
      testimonials: this.masterData.testimonials,
      metrics: this.masterData.metrics,
      packages: this.masterData.packages,
      blogPosts: this.masterData.blogPosts,
      faqs: this.masterData.faqs,
      lastUpdated: new Date().toISOString()
    };
  }

  async generateMetadata(): Promise<Metadata> {
    return {
      title: "Hireo | เชื่อมต่อธุรกิจกับฟรีแลนซ์ระดับโลก",
      description:
        "ยกระดับการหาทีมงานด้วยฟรีแลนซ์มืออาชีพกว่า 12,000 คน พร้อมระบบบริหารโปรเจกต์ที่ปลอดภัยและยืดหยุ่น",
      openGraph: {
        title: "Hireo | เชื่อมต่อธุรกิจกับฟรีแลนซ์ระดับโลก",
        description:
          "ค้นหา จ้างงาน และร่วมงานกับฟรีแลนซ์ที่คัดสรรมาแล้ว พร้อมปิดโปรเจกต์ได้เร็วกว่าเดิม",
        url: "https://hireo.app",
        type: "website",
        siteName: "Hireo",
        locale: "th_TH"
      },
      twitter: {
        card: "summary_large_image",
        title: "Hireo | เชื่อมต่อธุรกิจกับฟรีแลนซ์ระดับโลก",
        description:
          "ค้นหา จ้างงาน และร่วมงานกับฟรีแลนซ์ที่คัดสรรมาแล้ว พร้อมปิดโปรเจกต์ได้เร็วกว่าเดิม"
      }
    };
  }
}

export class LandingPresenterFactory {
  static async createServer(): Promise<LandingPresenter> {
    return new LandingPresenter(landingMasterData, landingHeroStats);
  }

  static createClient(): LandingPresenter {
    return new LandingPresenter(landingMasterData, landingHeroStats);
  }
}
