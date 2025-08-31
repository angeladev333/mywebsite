import HeroPage from '@/molecules/Hero';
import EducationSection from '@/molecules/EducationSection';
import ExperienceSection from '@/molecules/ExperienceSection';

export default function Home() {
  return (
    <div className="flex flex-col h-screen mt-8 px-24 gap-52 pb-52">
      <HeroPage />
      <div className="flex flex-col gap-6 pb-52">
        <EducationSection />
        <ExperienceSection />
      </div>
    </div>
  );
}
