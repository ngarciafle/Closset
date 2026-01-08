import "@/app/globals.css";
import { Header } from "@/app/ui/header";
import { SideNav } from "@/app/ui/side-nav";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        <Header/>
        <div className="flex-1 flex overflow-hidden">
          <SideNav/>
          <main className="flex-1 overflow-y-auto dark:scrollbar dark:scrollbar-track-background dark:scrollbar-thumb-neutral-400 dark:scrollbar-hover:scrollbar-thumb-white/80">
            {children}
          </main>
        </div>
      </>
  );
}
