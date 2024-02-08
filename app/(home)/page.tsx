import { CategorySection } from "./_components/category-section";
import { HeroSection } from "./_components/hero-section";
import { ShowcaseSection } from "./_components/showcase-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="space-y-10 px-4 pb-10 pt-10">
        <CategorySection />
        <ShowcaseSection />
      </div>
    </div>
  );
}
