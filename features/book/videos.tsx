'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import Section from './section';

export default function HomeBook() {
  const [video, setVideo] = useState('/vid/section1.mp4');
  const [bgOpacity, setBgOpacity] = useState(0.7);
  return (
    <main className="min-h-screen">
      <section className="flex min-h-screen items-center justify-center bg-neutral-50">
        <h1 className="font-bold text-5xl text-neutral-900">Hero section</h1>
      </section>
      <section className="bg-black/70">
        <div className="sticky inset-0 h-screen">
          <AnimatePresence mode="popLayout">
            <motion.video
              animate={{ opacity: 1 }}
              autoPlay
              className="h-full w-full object-cover"
              exit={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              key={video}
              loop
              muted
              playsInline
              src={video}
            />
          </AnimatePresence>
          <motion.div
            className="absolute inset-0 bg-black"
            style={{ opacity: bgOpacity }}
          />
        </div>
        <Section
          setBgOpacity={setBgOpacity}
          setVideo={setVideo}
          video="/vid/section1.mp4"
        >
          Welcome to the era of scroll animations.
        </Section>
        <Section
          setBgOpacity={setBgOpacity}
          setVideo={setVideo}
          video="/vid/section2.mp4"
        >
          This demo seamlessly blends video content with aesthetic interactions.
        </Section>
        <Section
          setBgOpacity={setBgOpacity}
          setVideo={setVideo}
          video="/vid/section3.mp4"
        >
          You navigate simply by scrolling.
        </Section>
        <Section
          setBgOpacity={setBgOpacity}
          setVideo={setVideo}
          video="/vid/section4.mp4"
        >
          You've never seen everything like this before.
        </Section>
      </section>
      <section className="flex min-h-screen items-center justify-center bg-neutral-50">
        <h1 className="font-bold text-5xl text-neutral-900">Another section</h1>
      </section>
    </main>
  );
}
