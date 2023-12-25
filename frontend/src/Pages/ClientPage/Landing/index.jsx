import { useEffect } from "react";
import CategoriesSection from "./CategoriesSection";
import ProductsSection from "./ProductsSection";
import ServiceSection from "./ServiceSection";
import StartSection from "./StartSection";

function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="px-[120px] flex flex-col gap-[90px] pb-[120px]">
      <StartSection />
      <ServiceSection />
      <CategoriesSection />
      <ProductsSection />
    </main>
  );
}

export default LandingPage;
