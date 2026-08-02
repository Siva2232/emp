import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import ContactToggle from "../ui/ContactToggle";
import PageLoader from "../ui/PageLoader";
import ScrollProgress from "../ui/ScrollProgress";

function RouteFallback() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-ink/10 border-t-accent" />
    </div>
  );
}

export default function RootLayout() {
  return (
    <div className="relative flex min-h-screen w-full max-w-full flex-col overflow-x-clip bg-void">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-full focus:bg-chalk focus:px-5 focus:py-2.5 focus:text-[13px] focus:font-semibold focus:text-void"
      >
        Skip to content
      </a>
      <PageLoader />
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main id="main" className="w-full max-w-full flex-1 overflow-x-clip">
        <Suspense fallback={<RouteFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ContactToggle />
    </div>
  );
}
