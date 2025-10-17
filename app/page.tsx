import { LandingView } from "@/src/presentation/components/landing/LandingView";
import { LandingPresenterFactory } from "@/src/presentation/presenters/landing/LandingPresenter";
import type { Metadata } from "next";
import Link from "next/link";

// Tell Next.js this is a dynamic page
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

interface LandingPageProps {
  params: Promise<Record<string, never>>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

/**
 * Generate metadata for the page
 */
export async function generateMetadata(): Promise<Metadata> {
  const presenter = await LandingPresenterFactory.createServer();

  try {
    return presenter.generateMetadata();
  } catch (error) {
    console.error("Error generating landing metadata:", error);

    // Fallback metadata
    return {
      title: "Hireo | แพลตฟอร์มรวมฟรีแลนซ์และจ้างงานออนไลน์",
      description: "ค้นหาฟรีแลนซ์มืออาชีพและเริ่มโปรเจกต์ใหม่ในไม่กี่คลิก"
    };
  }
}

/**
 * Landing page - Server Component for SEO optimization
 * Uses presenter pattern following Clean Architecture
 */
export default async function LandingPage({ params }: LandingPageProps) {
  await params;
  const presenter = await LandingPresenterFactory.createServer();

  try {
    const viewModel = await presenter.getViewModel();

    return <LandingView initialViewModel={viewModel} />;
  } catch (error) {
    console.error("Error fetching landing data:", error);

    // Fallback UI
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-foreground">เกิดข้อผิดพลาด</h1>
          <p className="text-muted-foreground">ไม่สามารถโหลดข้อมูลหน้าแลนดิ้งได้ในขณะนี้</p>
          <Link
            href="/"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            ลองใหม่อีกครั้ง
          </Link>
        </div>
      </div>
    );
  }
}
