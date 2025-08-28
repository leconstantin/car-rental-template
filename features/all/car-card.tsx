import type { Car } from 'content-collections';
import { BoxesIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { GlowingEffect } from '@/components/ui/glowing-effect';

export default function CarCard({ car }: { car: Car }) {
  const { title, slug, coverImageWhite, coverImageBlack, price, category } =
    car;
  return (
    <Link
      className="relative flex h-full cursor-pointer flex-col gap-4 rounded-sm bg-background md:p-2"
      href={`/car/${slug}`}
    >
      <GlowingEffect
        className="hidden md:block"
        disabled={false}
        glow={true}
        inactiveZone={0.01}
        proximity={64}
        spread={40}
      />

      <div className="relative w-full overflow-hidden rounded-md ring ring-ring/25">
        <AspectRatio className="w-full" ratio={16 / 9}>
          <Image
            alt={`Featured image for article: ${title}`}
            className="rounded-sm object-cover transition-transform duration-300 hover:scale-105 dark:hidden"
            fill
            priority
            src={coverImageWhite || ''}
          />
          <Image
            alt={`Featured image for article: ${title}`}
            className="hidden rounded-sm object-cover transition-transform duration-300 hover:scale-105 dark:block"
            fill
            priority
            src={coverImageBlack || ''}
          />
        </AspectRatio>
      </div>

      <h2 className="text-pretty pr-5 font-medium text-lg leading-6 tracking-tight">
        {title}
      </h2>
      <div className="mt-auto">
        <div className="mt-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-2 font-medium text-sm">
          <div className="flex items-center gap-1">
            <BoxesIcon className="size-4 text-muted-foreground" />
            <p className="text-wrap">{category}</p>
          </div>
          <p className="text-muted-foreground text-sm">
            {price.inRwf} {price.inRwf && 'RWF'}
          </p>
        </div>
      </div>
    </Link>
  );
}
