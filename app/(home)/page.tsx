import { CategorySection } from "./_components/category-section";
import { HeroSection } from "./_components/hero-section";
import { ShowcaseSection } from "./_components/showcase-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="container space-y-10 pb-10 pt-10">
        <CategorySection />
        <ShowcaseSection />
      </div>
    </div>
  );
}
