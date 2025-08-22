import HeroPage from '@/molecules/Hero';
import EducationSection from '@/molecules/EducationSection';

export default function Home() {
  return (
    <div className="flex flex-col h-screen mt-8 px-24 gap-52 pb-24">
      <HeroPage />
      <EducationSection />
    </div>
  );
}
