import HeroPage from '@/molecules/Hero';
import EducationSection from '@/molecules/EducationSection';
import ExperienceSection from '@/molecules/ExperienceSection';
import { FunFactsFooter } from '@/components/ui/fun-facts-footer';
import ExpandableFooter from '@/components/ui/footer';

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen mt-8 px-6 gap-24 pb-24 sm:gap-24 lg:px-24 lg:gap-52 lg:pb-52">
        <HeroPage />
        <div className="flex flex-col gap-6 pb-24 lg:pb-52">
          <ExperienceSection />
          {/* <EducationSection /> */}
          <FunFactsFooter />
        </div>
      </div>
      <ExpandableFooter />
    </>
  );
}
