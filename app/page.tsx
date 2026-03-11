import HeroSection from '@/components/HeroSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import StudioStory from '@/components/StudioStory';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import Testimonial from '@/components/Testimonial';
import ReadSection from '@/components/ReadSection';
import { getFeaturedProjects } from '@/data/projects';

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <HeroSection />
      <FeaturedProjects projects={featuredProjects} />
      <StudioStory />
      <BeforeAfterSlider
        beforeImage="/AT HOUSE/2.jfif"
        afterImage="/AT HOUSE/3.jfif"
        title="Design Transformation"
        description="Witness how thoughtful design reimagines a space from concept to completion"
      />
      <ReadSection />
      <Testimonial />
    </>
  );
}
