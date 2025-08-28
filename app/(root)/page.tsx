'use client';
import Lenis from 'lenis';
import { useEffect } from 'react';
import LogoCloud from '@/components/logo-cloud';
import AboutHome from '@/features/home/about';
import CardsHome from '@/features/home/cards';
import FaqsHome from '@/features/home/faqs';
import HeroHome from '@/features/home/hero';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <HeroHome />
      <LogoCloud />
      <AboutHome />
      <CardsHome />
      <FaqsHome />
    </>
  );
}
