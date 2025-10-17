"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, Check, Code, Megaphone, Pen, Search, Sparkles, Star, Video, Zap } from "lucide-react";

import { MainLayout } from "@/src/presentation/components/layouts/MainLayout";
import { ThemeToggle } from "@/src/presentation/components/atoms/theme/ThemeToggle";
import type { LandingViewModel } from "@/src/presentation/presenters/landing/LandingPresenter";
import { useLandingPresenter } from "@/src/presentation/presenters/landing/useLandingPresenter";
import { cn } from "@/src/utils/cn";

const iconMap = {
  Sparkles,
  Megaphone,
  Code,
  Pen,
  Video,
  Briefcase
} as const;

const howItWorks = [
  {
    id: "discover",
    title: "ค้นหาและคัดเลือก",
    description: "ใช้ฟิลเตอร์ขั้นสูงค้นหาฟรีแลนซ์ที่ตรงความต้องการ พร้อมข้อมูลโปรไฟล์ครบถ้วน"
  },
  {
    id: "collaborate",
    title: "วางแผนร่วมกัน",
    description: "ตั้งค่าขอบเขตงาน กำหนดไทม์ไลน์ และเปิด milestone ด้วยระบบความปลอดภัย Escrow"
  },
  {
    id: "deliver",
    title: "ส่งมอบและเติบโต",
    description: "ติดตามความคืบหน้าแบบเรียลไทม์ พร้อมรีวิวผลงานและต่อยอดโปรเจกต์ได้ทันที"
  }
];

export interface LandingViewProps {
  initialViewModel?: LandingViewModel;
}

export function LandingView({ initialViewModel }: LandingViewProps) {
  const [state, actions] = useLandingPresenter(initialViewModel ?? undefined);
  const { viewModel, loading, error, searchTerm, selectedCategoryId, featuredOnly } = state;

  if (loading && !viewModel) {
    return (
      <MainLayout className="flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-center text-muted-foreground">
          <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-primary" />
          <p>กำลังเตรียมข้อมูลสำหรับคุณ...</p>
        </div>
      </MainLayout>
    );
  }

  if (error && !viewModel) {
    return (
      <MainLayout className="flex items-center justify-center">
        <div className="max-w-md space-y-4 text-center">
          <h2 className="text-2xl font-semibold text-foreground">เกิดข้อผิดพลาด</h2>
          <p className="text-muted-foreground">{error}</p>
          <button
            type="button"
            onClick={() => void actions.loadData()}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
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

  return (
    <MainLayout className="space-y-24">
      <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Sparkles className="h-4 w-4" />
            Hireo Platform
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            รวมฟรีแลนซ์ระดับโลกไว้ในที่เดียว พร้อมทีมซัพพอร์ตตลอดโปรเจกต์
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            เชื่อมต่อธุรกิจของคุณกับผู้เชี่ยวชาญที่ผ่านการคัดกรองกว่า 12,000 คน ใช้งานง่าย ปลอดภัย และวัดผลได้จริง
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/hire"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:bg-primary/90"
            >
              เริ่มโพสต์งานฟรี
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/freelancers"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:border-primary hover:text-primary"
            >
              สำรวจฟรีแลนซ์
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {viewModel.heroStats.map((stat) => (
              <div
                key={stat.id}
                className="rounded-2xl border border-border/60 bg-background/60 p-5 shadow-sm backdrop-blur"
              >
                <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-primary/20 blur-3xl" aria-hidden />
          <div className="relative rounded-3xl border border-border/60 bg-card p-6 shadow-2xl">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-base font-medium text-foreground">ตั้งค่าโครงการของคุณ</p>
                <p className="text-sm text-muted-foreground">เลือกสาขาและงบประมาณที่ต้องการได้ภายในไม่กี่คลิก</p>
              </div>
              <ThemeToggle />
            </div>
            <div className="mt-6 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">ค้นหาทักษะหรือบทบาท</label>
                <div className="flex items-center gap-3 rounded-2xl border border-border/80 bg-background px-4 py-3">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <input
                    value={searchTerm}
                    onChange={(event) => actions.setSearchTerm(event.target.value)}
                    placeholder="UI Designer, Motion Graphic, Performance Marketing"
                    className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">สาขาหลัก</label>
                <div className="flex flex-wrap gap-2">
                  {viewModel.categories.map((category) => {
                    const Icon = iconMap[category.icon as keyof typeof iconMap] ?? Sparkles;
                    const isActive = selectedCategoryId === category.id;

                    return (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() =>
                          actions.setSelectedCategoryId(isActive ? null : category.id)
                        }
                        className={cn(
                          "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition",
                          isActive
                            ? "border-primary bg-primary text-primary-foreground shadow-sm"
                            : "border-border/70 bg-background text-muted-foreground hover:border-primary hover:text-primary"
                        )}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {category.name}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-primary/30 bg-primary/5 px-4 py-3 text-xs font-medium text-primary">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  <span>แสดงเฉพาะฟรีแลนซ์ระดับ Elite</span>
                </div>
                <label className="inline-flex cursor-pointer items-center gap-2">
                  <span className="text-muted-foreground">ปิด</span>
                  <input
                    type="checkbox"
                    checked={featuredOnly}
                    onChange={() => actions.toggleFeaturedOnly()}
                    className="size-4 rounded border border-border accent-primary"
                  />
                </label>
              </div>
              <button
                type="button"
                className="w-full rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:bg-primary/90"
              >
                ดูฟรีแลนซ์ที่ตรงกับคุณทันที
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-foreground">หมวดหมู่ยอดนิยม</h2>
            <p className="text-muted-foreground">สำรวจทีมผู้เชี่ยวชาญที่ผ่านการสอบและรีวิวจากลูกค้าจริง</p>
          </div>
          <button
            type="button"
            onClick={() => actions.resetFilters()}
            className="w-fit rounded-full border border-border/60 px-4 py-2 text-sm font-medium text-muted-foreground transition hover:border-primary hover:text-primary"
          >
            รีเซ็ตตัวกรอง
          </button>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {viewModel.featuredCategories.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap] ?? Sparkles;
            const isActive = selectedCategoryId === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => actions.setSelectedCategoryId(isActive ? null : category.id)}
                className={cn(
                  "group rounded-3xl border border-border/60 bg-card p-6 text-left transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl",
                  isActive ? "border-primary/60 shadow-lg" : undefined
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{category.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
              </button>
            );
          })}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-foreground">ฟรีแลนซ์ที่แนะนำให้คุณ</h2>
            <p className="text-muted-foreground">อัปเดตเมื่อ {new Date(viewModel.lastUpdated).toLocaleDateString("th-TH")}</p>
          </div>
          <Link
            href="/freelancers"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            ดูทั้งหมด
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {viewModel.featuredFreelancers.map((freelancer) => (
            <div key={freelancer.id} className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
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
                  <h3 className="text-lg font-semibold text-foreground">{freelancer.name}</h3>
                  <p className="text-sm text-muted-foreground">{freelancer.role}</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    สำเร็จ {freelancer.completedProjects} โปรเจกต์ • รีวิว {freelancer.reviewCount} ครั้ง
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {freelancer.categories.map((categoryId) => {
                  const category = viewModel.categories.find((cat) => cat.id === categoryId);
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
              <button className="mt-6 w-full rounded-full border border-border/70 px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary">
                ดูโปรไฟล์เต็ม
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-border/60 bg-muted/40 p-10">
        <div className="grid gap-8 md:grid-cols-3">
          {howItWorks.map((item, index) => (
            <div key={item.id} className="relative">
              <div className="absolute -left-8 top-0 hidden text-5xl font-black text-primary/20 md:block">
                {(index + 1).toString().padStart(2, "0")}
              </div>
              <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {viewModel.metrics.map((metric) => (
          <div
            key={metric.id}
            className="rounded-3xl border border-primary/40 bg-primary/10 p-6 text-primary shadow-sm"
          >
            <p className="text-4xl font-bold">{metric.value}</p>
            <p className="mt-2 text-sm font-medium text-primary/90">{metric.label}</p>
            <p className="mt-1 text-xs text-primary/70">{metric.subLabel}</p>
          </div>
        ))}
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-foreground">แพ็กเกจยอดนิยม</h2>
            <p className="text-muted-foreground">เลือกชุดบริการที่ออกแบบมาเพื่อทุกเป้าหมายการเติบโต</p>
          </div>
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            ดูบริการทั้งหมด
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {viewModel.packages.map((pkg) => (
            <div
              key={pkg.id}
              className={cn(
                "relative rounded-3xl border border-border/60 bg-card p-6 shadow-sm",
                pkg.highlighted && "border-primary bg-primary/5 shadow-lg"
              )}
            >
              {pkg.highlighted ? (
                <span className="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  แนะนำ
                </span>
              ) : null}
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  {pkg.target}
                </p>
                <h3 className="text-2xl font-semibold text-foreground">{pkg.name}</h3>
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
              <button className="mt-6 w-full rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90">
                พูดคุยกับผู้เชี่ยวชาญ
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        {viewModel.testimonials.map((testimonial) => (
          <blockquote
            key={testimonial.id}
            className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm"
          >
            <p className="text-lg font-medium text-foreground">“{testimonial.quote}”</p>
            <footer className="mt-6 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{testimonial.person}</span> • {testimonial.role} @
              {testimonial.company}
            </footer>
          </blockquote>
        ))}
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-foreground">บทความและอินไซต์ล่าสุด</h2>
            <p className="text-muted-foreground">อัปเดตแนวโน้มและเคล็ดลับการทำงานกับทีมรีโมต</p>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            อ่านเพิ่มเติม
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {viewModel.blogPosts.map((post) => (
            <article key={post.id} className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">{post.category}</p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{post.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
              <div className="mt-4 text-xs text-muted-foreground">
                {new Date(post.publishedAt).toLocaleDateString("th-TH", {
                  year: "numeric",
                  month: "short",
                  day: "numeric"
                })}
                {" • "}
                {post.readTime}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
        <div className="rounded-3xl border border-primary/40 bg-primary/10 p-8 text-primary">
          <h2 className="text-3xl font-semibold">พร้อมเริ่มโปรเจกต์ถัดไปหรือยัง?</h2>
          <p className="mt-3 text-sm text-primary/80">
            เรามีทีม Customer Success ที่ดูแลคุณตั้งแต่ brief แรกจนส่งมอบงาน พร้อมช่วยสร้างทีมระยะยาว
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
          >
            นัดหมายที่ปรึกษา
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-foreground">คำถามที่พบบ่อย</h3>
          <div className="mt-6 space-y-4">
            {viewModel.faqs.map((faq) => (
              <details key={faq.id} className="group rounded-2xl border border-border/60 bg-background/80 p-4">
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

      <section className="rounded-3xl border border-border/60 bg-muted/30 p-10 text-center">
        <h2 className="text-3xl font-semibold text-foreground">ปลดล็อกศักยภาพใหม่ของธุรกิจวันนี้</h2>
        <p className="mt-3 text-muted-foreground">
          ทีมผู้เชี่ยวชาญของเราพร้อมช่วยคุณออกแบบ โมเดล และลงมือทำภายในไม่กี่วัน
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/hire"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
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
      </section>
    </MainLayout>
  );
}
