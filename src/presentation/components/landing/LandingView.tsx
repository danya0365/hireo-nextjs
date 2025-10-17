"use client";

import {
  ArrowRight,
  Briefcase,
  Check,
  Code,
  Megaphone,
  Pen,
  Search,
  Sparkles,
  Star,
  Video,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ThemeToggle } from "@/src/presentation/components/atoms/theme/ThemeToggle";
import { MainLayout } from "@/src/presentation/components/layouts/MainLayout";
import type { LandingViewModel } from "@/src/presentation/presenters/landing/LandingPresenter";
import { useLandingPresenter } from "@/src/presentation/presenters/landing/useLandingPresenter";
import { cn } from "@/src/utils/cn";

const iconMap = {
  Sparkles,
  Megaphone,
  Code,
  Pen,
  Video,
  Briefcase,
} as const;

const howItWorks = [
  {
    id: "discover",
    title: "ค้นหาและคัดเลือก",
    description:
      "ใช้ฟิลเตอร์ขั้นสูงค้นหาฟรีแลนซ์ที่ตรงความต้องการ พร้อมข้อมูลโปรไฟล์ครบถ้วน",
  },
  {
    id: "collaborate",
    title: "วางแผนร่วมกัน",
    description:
      "ตั้งค่าขอบเขตงาน กำหนดไทม์ไลน์ และเปิด milestone ด้วยระบบความปลอดภัย Escrow",
  },
  {
    id: "deliver",
    title: "ส่งมอบและเติบโต",
    description:
      "ติดตามความคืบหน้าแบบเรียลไทม์ พร้อมรีวิวผลงานและต่อยอดโปรเจกต์ได้ทันที",
  },
] as const;

export interface LandingViewProps {
  initialViewModel?: LandingViewModel;
}

export function LandingView({ initialViewModel }: LandingViewProps) {
  const [state, actions] = useLandingPresenter(initialViewModel ?? undefined);
  const {
    viewModel,
    loading,
    error,
    searchTerm,
    selectedCategoryId,
    featuredOnly,
  } = state;

  if (loading && !viewModel) {
    return (
      <MainLayout className="flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-center text-muted-foreground">
          <div className="size-14 animate-spin rounded-full border-2 border-primary/30 border-t-primary" />
          <p>กำลังเตรียมข้อมูลสำหรับคุณ...</p>
        </div>
      </MainLayout>
    );
  }

  if (error && !viewModel) {
    return (
      <MainLayout className="flex items-center justify-center">
        <div className="max-w-md space-y-4 text-center">
          <h2 className="text-2xl font-semibold text-foreground">
            เกิดข้อผิดพลาด
          </h2>
          <p className="text-muted-foreground">{error}</p>
          <button
            type="button"
            onClick={() => void actions.loadData()}
            className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
          >
            ลองใหม่อีกครั้ง
          </button>
        </div>
      </MainLayout>
    );
  }

  if (!viewModel) {
    return null;
  }

  const handleCategoryToggle = (categoryId: string) => {
    if (selectedCategoryId === categoryId) {
      actions.setSelectedCategoryId(null);
      return;
    }

    actions.setSelectedCategoryId(categoryId);
  };

  return (
    <div className="space-y-20 lg:space-y-28">
      <HeroSection
        stats={viewModel.heroStats}
        categories={viewModel.categories}
        searchTerm={searchTerm}
        selectedCategoryId={selectedCategoryId}
        featuredOnly={featuredOnly}
        onSearchChange={(value) => actions.setSearchTerm(value)}
        onCategoryToggle={handleCategoryToggle}
        onToggleFeatured={() => actions.toggleFeaturedOnly()}
      />

      <TrustedMetricsSection metrics={viewModel.metrics} />

      <CategoryShowcase
        categories={viewModel.featuredCategories}
        selectedCategoryId={selectedCategoryId}
        onCategoryToggle={handleCategoryToggle}
        onResetFilters={() => actions.resetFilters()}
      />

      <FeaturedTalentSection
        freelancers={viewModel.featuredFreelancers}
        categories={viewModel.categories}
        lastUpdated={viewModel.lastUpdated}
      />

      <ProcessSection />

      <PackagesSection packages={viewModel.packages} />

      <TestimonialsSection testimonials={viewModel.testimonials} />

      <InsightsSection posts={viewModel.blogPosts} />

      <HelpCenterSection faqs={viewModel.faqs} />

      <FinalCTASection />
    </div>
  );
}

type HeroSectionProps = {
  stats: LandingViewModel["heroStats"];
  categories: LandingViewModel["categories"];
  searchTerm: string;
  selectedCategoryId: string | null;
  featuredOnly: boolean;
  onSearchChange: (value: string) => void;
  onCategoryToggle: (categoryId: string) => void;
  onToggleFeatured: () => void;
};

function HeroSection({
  stats,
  categories,
  searchTerm,
  selectedCategoryId,
  featuredOnly,
  onSearchChange,
  onCategoryToggle,
  onToggleFeatured,
}: HeroSectionProps) {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute -left-20 top-16 hidden h-[520px] w-[520px] -translate-y-1/3 rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.25),_transparent_70%)] blur-3xl lg:block"
        aria-hidden
      />
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="relative space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            <Sparkles className="h-4 w-4" />
            Hireo Talent Fabric
          </div>
          <div className="space-y-5">
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              สร้างทีมฟรีแลนซ์ระดับโลกที่พร้อมส่งมอบผลลัพธ์ตั้งแต่วันแรก
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              เครือข่ายผู้เชี่ยวชาญกว่า 12,000 คนที่ผ่านการคัดกรอง
              พร้อมระบบบริหารโปรเจกต์ครบวงจร ตั้งแต่การค้นหา สื่อสาร
              ไปจนถึงการวัดผลที่โปร่งใส
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/hire"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-sky-500 px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[0_25px_60px_-25px_rgba(14,165,233,0.55)] transition hover:shadow-[0_30px_70px_-25px_rgba(14,165,233,0.65)]"
            >
              เริ่มโพสต์งานทันที
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/freelancers"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
            >
              สำรวจฟรีแลนซ์ที่ผ่านการคัดเลือก
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="relative overflow-hidden rounded-3xl border border-border/50 bg-background/80 p-5 shadow-[0_25px_55px_-35px_rgba(59,130,246,0.45)] backdrop-blur"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                <p className="text-3xl font-semibold text-foreground">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-6 rounded-[2.75rem] bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.35),_transparent_70%)] blur-3xl"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-950/70 via-slate-900/70 to-slate-950/30 p-7 shadow-[0_25px_70px_-25px_rgba(14,165,233,0.45)]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-slate-100">
                  ตั้งค่าโครงการของคุณ
                </p>
                <p className="text-xs text-slate-400">
                  กำหนดขอบเขตงานและเกณฑ์คัดเลือกให้เหมาะกับแบรนด์
                </p>
              </div>
              <ThemeToggle />
            </div>
            <div className="mt-7 space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
                  สิ่งที่คุณกำลังมองหา
                </label>
                <div className="group flex items-center gap-3 rounded-2xl border border-slate-700/80 bg-slate-900/70 px-4 py-2.5 ring-1 ring-transparent transition focus-within:border-primary/70 focus-within:ring-primary/40">
                  <Search className="h-4 w-4 text-slate-500 transition group-focus-within:text-primary" />
                  <input
                    value={searchTerm}
                    onChange={(event) => onSearchChange(event.target.value)}
                    placeholder="UI Designer, Growth Marketer, Motion Graphic"
                    className="flex-1 bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
                    สาขาหลัก
                  </span>
                  <span className="text-xs text-slate-500">
                    เลือกได้หลายหมวดหมู่
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => {
                    const Icon =
                      iconMap[category.icon as keyof typeof iconMap] ??
                      Sparkles;
                    const isActive = selectedCategoryId === category.id;

                    return (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => onCategoryToggle(category.id)}
                        className={cn(
                          "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition",
                          isActive
                            ? "border-primary/70 bg-primary/20 text-primary-100 shadow-[0_10px_30px_-12px_rgba(59,130,246,0.7)]"
                            : "border-slate-700/80 bg-slate-900/70 text-slate-400 hover:border-primary/60 hover:text-primary"
                        )}
                      >
                        <Icon className="h-4 w-4" />
                        {category.name}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-sky-500/40 bg-sky-500/10 px-4 py-2.5 text-xs font-medium text-sky-200">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  <span>แสดงเฉพาะฟรีแลนซ์ระดับ Elite</span>
                </div>
                <label className="inline-flex items-center gap-2 text-slate-300">
                  <span>{featuredOnly ? "เปิด" : "ปิด"}</span>
                  <input
                    type="checkbox"
                    checked={featuredOnly}
                    onChange={onToggleFeatured}
                    className="size-4 rounded border border-slate-600 bg-slate-900 accent-primary"
                  />
                </label>
              </div>
              <button
                type="button"
                className="w-full rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-[0_20px_45px_-25px_rgba(59,130,246,0.75)] transition hover:bg-primary/90"
              >
                ดูฟรีแลนซ์ที่ตรงกับคุณทันที
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type TrustedMetricsSectionProps = {
  metrics: LandingViewModel["metrics"];
};

function TrustedMetricsSection({ metrics }: TrustedMetricsSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-[2.75rem] border border-primary/20 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/40 p-8 shadow-[0_40px_120px_-60px_rgba(59,130,246,0.6)]">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_65%)]"
        aria-hidden
      />
      <div className="relative grid gap-5 md:grid-cols-3">
        {metrics.map((metric) => (
          <div
            key={metric.id}
            className="space-y-1 rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-100 backdrop-blur"
          >
            <p className="text-3xl font-semibold text-white">{metric.value}</p>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">
              {metric.label}
            </p>
            <p className="text-xs text-slate-400">{metric.subLabel}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

type CategoryShowcaseProps = {
  categories: LandingViewModel["featuredCategories"];
  selectedCategoryId: string | null;
  onCategoryToggle: (categoryId: string) => void;
  onResetFilters: () => void;
};

function CategoryShowcase({
  categories,
  selectedCategoryId,
  onCategoryToggle,
  onResetFilters,
}: CategoryShowcaseProps) {
  return (
    <section className="space-y-8">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold text-foreground">
            หมวดหมู่ยอดนิยม
          </h2>
          <p className="text-sm text-muted-foreground">
            สำรวจเครือข่ายผู้เชี่ยวชาญที่ผ่านการทดสอบและรีวิวจริงจากลูกค้า
          </p>
        </div>
        <button
          type="button"
          onClick={onResetFilters}
          className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-xs font-semibold text-muted-foreground transition hover:border-primary hover:text-primary"
        >
          รีเซ็ตตัวกรองทั้งหมด
        </button>
      </header>
      <div className="grid gap-5 md:grid-cols-3">
        {categories.map((category) => {
          const Icon =
            iconMap[category.icon as keyof typeof iconMap] ?? Sparkles;
          const isActive = selectedCategoryId === category.id;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onCategoryToggle(category.id)}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-border/60 bg-card p-7 text-left transition duration-300",
                "hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_25px_65px_-40px_rgba(59,130,246,0.7)]",
                isActive &&
                  "border-primary/80 shadow-[0_25px_55px_-35px_rgba(59,130,246,0.8)]"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="relative flex items-center justify-between">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:text-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">
                {category.name}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                {category.description}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}

type FeaturedTalentSectionProps = {
  freelancers: LandingViewModel["featuredFreelancers"];
  categories: LandingViewModel["categories"];
  lastUpdated: LandingViewModel["lastUpdated"];
};

function FeaturedTalentSection({
  freelancers,
  categories,
  lastUpdated,
}: FeaturedTalentSectionProps) {
  return (
    <section className="space-y-8">
      <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-foreground">
            ฟรีแลนซ์ที่แนะนำให้คุณ
          </h2>
          <p className="text-sm text-muted-foreground">
            อัปเดตเมื่อ{" "}
            {new Date(lastUpdated).toLocaleDateString("th-TH", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
        <Link
          href="/freelancers"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
        >
          ดูรายชื่อทั้งหมด
          <ArrowRight className="h-4 w-4" />
        </Link>
      </header>
      <div className="grid gap-5 lg:grid-cols-3">
        {freelancers.map((freelancer) => (
          <div
            key={freelancer.id}
            className="relative flex h-full flex-col rounded-3xl border border-border/60 bg-card p-6 shadow-[0_25px_60px_-40px_rgba(15,23,42,0.5)]"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <Image
                  src={`${freelancer.avatar}?auto=format&fit=facearea&w=160&h=160&q=80`}
                  alt={freelancer.name}
                  width={72}
                  height={72}
                  className="size-18 rounded-2xl object-cover"
                />
                <div className="absolute -bottom-2 -right-2 flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  <Star className="h-3 w-3" />
                  {freelancer.rating}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {freelancer.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {freelancer.role}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  สำเร็จ {freelancer.completedProjects} โปรเจกต์ • รีวิว{" "}
                  {freelancer.reviewCount} ครั้ง
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {freelancer.categories.map((categoryId) => {
                const category = categories.find(
                  (item) => item.id === categoryId
                );
                if (!category) return null;

                return (
                  <span
                    key={categoryId}
                    className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {category.name}
                  </span>
                );
              })}
            </div>
            <div className="mt-auto pt-6">
              <button className="w-full rounded-full border border-border/70 px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary">
                ดูโปรไฟล์เต็ม
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="rounded-[2.75rem] border border-border/50 bg-muted/30 p-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold text-foreground">
            ทำงานร่วมกันได้อย่างไร
          </h2>
          <p className="text-sm text-muted-foreground">
            เดินตามเส้นทางที่ออกแบบมาเพื่อความไว้วางใจของทั้งสองฝ่าย
          </p>
        </div>
        <Link
          href="/process"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
        >
          ดูขั้นตอนทั้งหมด
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {howItWorks.map((item, index) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-7"
          >
            <div className="absolute -left-6 top-8 text-7xl font-black text-primary/10">
              {(index + 1).toString().padStart(2, "0")}
            </div>
            <div className="relative space-y-3">
              <h3 className="text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

type PackagesSectionProps = {
  packages: LandingViewModel["packages"];
};

function PackagesSection({ packages }: PackagesSectionProps) {
  return (
    <section className="space-y-8">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-foreground">
            แพ็กเกจยอดนิยม
          </h2>
          <p className="text-sm text-muted-foreground">
            เลือกชุดบริการที่ออกแบบมาเพื่อทุกเป้าหมายการเติบโต
          </p>
        </div>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
        >
          ดูบริการทั้งหมด
          <ArrowRight className="h-4 w-4" />
        </Link>
      </header>
      <div className="grid gap-5 lg:grid-cols-3">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={cn(
              "relative flex h-full flex-col rounded-3xl border border-border/60 bg-card p-6 shadow-[0_35px_85px_-45px_rgba(15,23,42,0.45)]",
              pkg.highlighted &&
                "border-primary/70 bg-primary/5 shadow-[0_35px_95px_-45px_rgba(59,130,246,0.65)]"
            )}
          >
            {pkg.highlighted ? (
              <span className="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                แนะนำ
              </span>
            ) : null}
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                {pkg.target}
              </p>
              <h3 className="text-2xl font-semibold text-foreground">
                {pkg.name}
              </h3>
              <p className="text-lg font-bold text-primary">{pkg.price}</p>
              <p className="text-sm text-muted-foreground">{pkg.description}</p>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <button className="w-full rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90">
                พูดคุยกับผู้เชี่ยวชาญ
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

type TestimonialsSectionProps = {
  testimonials: LandingViewModel["testimonials"];
};

function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h2 className="text-3xl font-semibold text-foreground">
          เสียงจากลูกค้าตัวจริง
        </h2>
        <p className="text-sm text-muted-foreground">
          ประสบการณ์การทำงานร่วมกับ Hireo ในทุกอุตสาหกรรม
        </p>
      </header>
      <div className="grid gap-5 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <blockquote
            key={testimonial.id}
            className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-6 shadow-[0_25px_55px_-35px_rgba(15,23,42,0.55)]"
          >
            <div
              className="absolute -top-10 right-6 text-8xl font-black text-primary/10"
              aria-hidden
            >
              “
            </div>
            <p className="text-lg font-medium text-foreground">
              “{testimonial.quote}”
            </p>
            <footer className="mt-6 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                {testimonial.person}
              </span>{" "}
              • {testimonial.role} @ {testimonial.company}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

type InsightsSectionProps = {
  posts: LandingViewModel["blogPosts"];
};

function InsightsSection({ posts }: InsightsSectionProps) {
  return (
    <section className="space-y-8">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-foreground">
            บทความและอินไซต์ล่าสุด
          </h2>
          <p className="text-sm text-muted-foreground">
            อัปเดตเทรนด์การทำงานกับทีมรีโมตและฟรีแลนซ์ระดับโลก
          </p>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
        >
          อ่านเพิ่มเติม
          <ArrowRight className="h-4 w-4" />
        </Link>
      </header>
      <div className="grid gap-5 md:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="flex h-full flex-col rounded-3xl border border-border/60 bg-card p-6 shadow-[0_30px_70px_-50px_rgba(15,23,42,0.6)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              {post.category}
            </p>
            <h3 className="mt-4 text-lg font-semibold text-foreground">
              {post.title}
            </h3>
            <p className="mt-3 flex-1 text-sm text-muted-foreground">
              {post.excerpt}
            </p>
            <div className="mt-4 text-xs text-muted-foreground">
              {new Date(post.publishedAt).toLocaleDateString("th-TH", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
              {" • "}
              {post.readTime}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

type HelpCenterSectionProps = {
  faqs: LandingViewModel["faqs"];
};

function HelpCenterSection({ faqs }: HelpCenterSectionProps) {
  return (
    <section className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
      <div className="rounded-3xl border border-primary/40 bg-primary/10 p-7 text-primary">
        <h2 className="text-3xl font-semibold">
          พร้อมเริ่มโปรเจกต์ถัดไปหรือยัง?
        </h2>
        <p className="mt-3 text-sm text-primary/80">
          ทีม Customer Success จะดูแลคุณตั้งแต่ brief แรกจนปิดโปรเจกต์
          พร้อมช่วยสร้างทีมประจำระยะยาว
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
        >
          นัดหมายที่ปรึกษา
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="rounded-3xl border border-border/60 bg-card p-7 shadow-[0_30px_90px_-55px_rgba(15,23,42,0.55)]">
        <h3 className="text-2xl font-semibold text-foreground">
          คำถามที่พบบ่อย
        </h3>
        <div className="mt-6 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.id}
              className="group rounded-2xl border border-border/60 bg-background/80 p-4 transition hover:border-primary/50"
            >
              <summary className="cursor-pointer text-sm font-semibold text-foreground">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm text-muted-foreground group-open:animate-fade-in">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="relative overflow-hidden rounded-[2.75rem] border border-border/50 bg-muted/20 p-10 text-center">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle,_rgba(14,165,233,0.35),_transparent_65%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl space-y-5">
        <h2 className="text-3xl font-semibold text-foreground">
          ปลดล็อกศักยภาพใหม่ของธุรกิจวันนี้
        </h2>
        <p className="text-muted-foreground">
          ทีมผู้เชี่ยวชาญของเราพร้อมช่วยคุณออกแบบ โมเดล และลงมือทำภายในไม่กี่วัน
          พร้อม roadmap การเติบโตระยะยาว
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/hire"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow_sm transition hover:bg-primary/90"
          >
            โพสต์งานฟรี
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/freelancers"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
          >
            ค้นหาฟรีแลนซ์
          </Link>
        </div>
      </div>
    </section>
  );
}
