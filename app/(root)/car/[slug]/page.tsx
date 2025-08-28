import { allCars } from 'content-collections';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PageContainer } from '@/components/custom/page-container';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const car = allCars.find((carItem) => carItem.slug === slug);
  return {
    title: car?.title || 'Car',
    description: car?.description || 'Car',
  };
}

export default async function CarPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const car = allCars.find((carItem) => carItem.slug === slug);
  if (!car) {
    return notFound();
  }
  const { title, coverImageWhite, coverImageBlack, otherImages } = car;
  return (
    <PageContainer>
      <div className="grid w-full grid-cols-3 gap-10 py-10">
        <div className="relative col-span-2 aspect-video w-full overflow-hidden rounded-md">
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

        {otherImages && (
          <div className="flex flex-col gap-5">
            {otherImages.map((img, idx) => (
              <AspectRatio className="w-full" key={idx} ratio={16 / 9}>
                <Image
                  alt={`Image ${idx + 1}`}
                  className={cn('aspect-video w-full rounded-md object-cover')}
                  height={500}
                  src={img}
                  width={500}
                />
              </AspectRatio>
            ))}
          </div>
        )}
      </div>
    </PageContainer>
  );
}
