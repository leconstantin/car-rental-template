import { Cpu, Zap } from 'lucide-react';
import Image from 'next/image';
import { PageContainer } from '@/components/custom/page-container';
import imgDark from '@/public/car-black.jpg';
import imgWhite from '@/public/d.jpg';

export default function AboutHome() {
  return (
    <PageContainer>
      <section className="px-2 py-16 md:py-32">
        <div className="space-y-8 overflow-hidden md:space-y-16">
          <h2 className="relative z-10 max-w-xl font-medium text-4xl lg:text-5xl">
            The Lyra ecosystem brings together our models.
          </h2>
          <div className="relative">
            <div className="relative z-10 space-y-4 md:w-1/2">
              <p>
                Lyra is evolving to be more than just the models.{' '}
                <span className="font-medium">
                  It supports an entire ecosystem
                </span>{' '}
                — from products innovate.
              </p>
              <p>
                It supports an entire ecosystem — from products to the APIs and
                platforms helping developers and businesses innovate
              </p>

              <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Zap className="size-4" />
                    <h3 className="font-medium text-sm">Faaast</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    It supports an entire helping developers and innovate.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Cpu className="size-4" />
                    <h3 className="font-medium text-sm">Powerful</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    It supports an entire helping developers and businesses.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:-inset-y-12 mt-12 h-fit md:absolute md:inset-x-0 md:mt-0">
              <div
                aria-hidden
                className="absolute inset-0 z-1 hidden bg-linear-to-l from-transparent to-55% to-background md:block"
              />
              <div className="relative rounded-2xl border border-border/50 border-dotted p-2">
                <Image
                  alt="payments illustration dark"
                  className="hidden rounded-[12px] dark:block"
                  height={929}
                  src={imgDark}
                  width={1207}
                />
                <Image
                  alt="payments illustration light"
                  className="rounded-[12px] shadow dark:hidden"
                  height={929}
                  src={imgWhite}
                  width={1207}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
