import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PageContainer } from '@/components/custom/page-container';
import { Button } from '@/components/ui/button';
import carWhite from '@/public/a.png';
import carBlack from '@/public/car-black.jpg';

export default function HeroHome() {
  return (
    <PageContainer>
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-2">
        <div className="w-full lg:flex lg:items-center lg:gap-12">
          <div className="relative z-10 mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
            <Link
              className="mx-auto flex w-fit items-center gap-2 rounded-(--radius) border p-1 pr-3 lg:ml-0"
              href="/"
            >
              <span className="rounded-[calc(var(--radius)-0.25rem)] bg-muted px-2 py-1 text-xs">
                New
              </span>
              <span className="text-sm">Introduction Tailark Html</span>
              <span className="block h-4 w-px bg-(--color-border)" />

              <ArrowRight className="size-4" />
            </Link>

            <h1 className="mt-10 text-balance font-bold text-4xl md:text-5xl xl:text-5xl">
              Production Ready Digital Marketing blocks
            </h1>
            <p className="mt-8">
              Error totam sit illum. Voluptas doloribus asperiores quaerat
              aperiam. Quidem harum omnis beatae ipsum soluta!
            </p>

            <div className="mt-10 flex flex-col gap-4 lg:flex-row">
              <Button size={'lg'}>Book now</Button>
              <Button size="lg" variant={'secondary'}>
                See more
              </Button>
            </div>
          </div>
        </div>
        <div className="-mx-4 absolute inset-0 mt-8 rounded-3xl px-3 lg:col-span-3">
          <div className="relative">
            <div className="-inset-17 absolute z-1 bg-radial-[at_65%_25%] from-transparent to-40% to-background" />
            <Image
              alt="app illustration"
              className="hidden dark:block"
              height={2008}
              src={carBlack}
              width={2796}
            />
            <Image
              alt="app illustration"
              className="dark:hidden"
              height={2008}
              src={carWhite}
              width={2796}
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
