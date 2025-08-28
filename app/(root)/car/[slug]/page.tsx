import type { Metadata } from 'next';
import { carsList } from '@/config/app';
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const car = carsList.find((carItem) => carItem.slug === slug);
  return {
    title: car?.title || 'Car',
  };
}

export default async function CarPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const car = carsList.find((carItem) => carItem.slug === slug);
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-pretty font-bold text-3xl">{car?.title}</h1>
    </div>
  );
}
