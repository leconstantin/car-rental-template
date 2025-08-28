import LogoCloud from '@/components/logo-cloud';
import AboutHome from '@/features/home/about';
import FaqsHome from '@/features/home/faqs';
import HeroHome from '@/features/home/hero';

export default function Home() {
  return (
    <>
      <HeroHome />
      <LogoCloud />
      <AboutHome />
      <FaqsHome />
    </>
  );
}
