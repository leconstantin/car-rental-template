'use client';

import { motion, useInView, useScroll } from 'motion/react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const Card = ({ imgUrl }: { imgUrl: string }) => {
  // Definition for sticky position of the card
  const vertMargin = 10;

  // Ref for container
  const container = useRef(null);

  // State vars
  const [maxScrollY, setMaxScrollY] = useState(Number.POSITIVE_INFINITY);
  const [dynamicStyles, setDynamicStyles] = useState({
    scale: 1,
    filter: 0,
  });

  // Framer Motion helpers
  const { scrollY } = useScroll({
    target: container,
  });
  const isInView = useInView(container, {
    margin: `0px 0px -${100 - vertMargin}% 0px`,
    once: true,
  });

  // Scroll tracking
  scrollY.on('change', (currentScrollY) => {
    // animationValue indicates progress after container hits sticky point, going from 1 to 0
    let animationValue = 1;
    if (currentScrollY > maxScrollY) {
      animationValue = Math.max(0, 1 - (currentScrollY - maxScrollY) / 10_000);
    }

    setDynamicStyles({
      scale: animationValue,
      filter: (1 - animationValue) * 100,
    });
  });

  useEffect(() => {
    if (isInView) {
      setMaxScrollY(scrollY.get());
    }
  }, [isInView, scrollY]);

  return (
    <motion.div
      className="sticky w-[90vw] overflow-hidden rounded-xl bg-neutral-200"
      ref={container}
      style={{
        scale: dynamicStyles.scale,
        filter: `blur(${dynamicStyles.filter}px)`,
        height: `${100 - 2 * vertMargin}vh`,
        top: `${vertMargin}vh`,
      }}
    >
      <Image
        alt={imgUrl}
        className="object-cover"
        fill
        sizes="90vw"
        src={imgUrl}
      />
    </motion.div>
  );
};

export default Card;
