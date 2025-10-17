export interface NavigationItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export const primaryNavigation: NavigationItem[] = [
  { label: "ค้นหาฟรีแลนซ์", href: "/freelancers", description: "สำรวจผู้เชี่ยวชาญหลากหลายสาขา" },
  { label: "โพสต์งาน", href: "/hire", description: "เริ่มโปรเจกต์ใหม่ได้ในไม่กี่นาที" },
  { label: "สำรวจบริการ", href: "/services", description: "แพ็กเกจยอดนิยมพร้อมเริ่มงานทันที" },
  { label: "ความสำเร็จ", href: "/success-stories", description: "ดูผลงานและเรื่องราวจากลูกค้าจริง" },
  { label: "รีซอร์ส", href: "/resources", description: "บทความ ความรู้ และกิจกรรมจาก Hireo" }
];

export const secondaryNavigation: NavigationItem[] = [
  { label: "เกี่ยวกับเรา", href: "/about" },
  { label: "ช่วยเหลือ", href: "/support" },
  { label: "บล็อก", href: "/blog" },
  { label: "ร่วมงานกับเรา", href: "/careers" }
];
