"use client";

import Link from "next/link";

const companyLinks = [
  { label: "เกี่ยวกับเรา", href: "/about" },
  { label: "ร่วมงานกับเรา", href: "/careers" },
  { label: "ข่าวสาร", href: "/press" }
];

const resourceLinks = [
  { label: "ศูนย์ช่วยเหลือ", href: "/support" },
  { label: "คู่มือการใช้งาน", href: "/resources/guides" },
  { label: "นโยบายความเป็นส่วนตัว", href: "/legal/privacy" },
  { label: "ข้อกำหนดการใช้บริการ", href: "/legal/terms" }
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com/hireo" },
  { label: "LinkedIn", href: "https://linkedin.com/company/hireo" },
  { label: "YouTube", href: "https://youtube.com/@hireo" }
];

export function MainFooter() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <div>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
              Hireo
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            แพลตฟอร์มรวมฟรีแลนซ์ระดับมืออาชีพ สร้างความสำเร็จให้ธุรกิจทุกขนาดด้วยทีมผู้เชี่ยวชาญที่ผ่านการคัดเลือก
          </p>
          <p className="text-xs text-muted-foreground/80">© {new Date().getFullYear()} Hireo. สงวนสิทธิ์ทุกประการ</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">บริษัท</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">รีซอร์ส</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {resourceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">สังคมออนไลน์</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-foreground" target="_blank" rel="noreferrer">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <form className="space-y-2">
            <label htmlFor="newsletter" className="text-sm font-medium text-foreground">
              สมัครรับข่าวสาร
            </label>
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                id="newsletter"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-border/60 bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
              >
                สมัครรับข่าวสาร
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}
