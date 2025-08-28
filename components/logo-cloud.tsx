/** biome-ignore-all lint/performance/noImgElement: <explanation> */

import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

export default function LogoCloud() {
  return (
    <section className="overflow-hidden bg-background">
      <div className="group relative m-auto max-w-7xl px-2">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm">Serving the best enterprises</p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider gap={112} speed={40} speedOnHover={20}>
              <div className="flex">
                <img
                  alt="Nvidia Logo"
                  className="mx-auto h-5 w-fit dark:invert"
                  height="20"
                  src="https://html.tailus.io/blocks/customers/nvidia.svg"
                  width="auto"
                />
              </div>

              <div className="flex">
                <img
                  alt="Column Logo"
                  className="mx-auto h-4 w-fit dark:invert"
                  height="16"
                  src="https://html.tailus.io/blocks/customers/column.svg"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  alt="GitHub Logo"
                  className="mx-auto h-4 w-fit dark:invert"
                  height="16"
                  src="https://html.tailus.io/blocks/customers/github.svg"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  alt="Nike Logo"
                  className="mx-auto h-5 w-fit dark:invert"
                  height="20"
                  src="https://html.tailus.io/blocks/customers/nike.svg"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  alt="Lemon Squeezy Logo"
                  className="mx-auto h-5 w-fit dark:invert"
                  height="20"
                  src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  alt="Laravel Logo"
                  className="mx-auto h-4 w-fit dark:invert"
                  height="16"
                  src="https://html.tailus.io/blocks/customers/laravel.svg"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  alt="Lilly Logo"
                  className="mx-auto h-7 w-fit dark:invert"
                  height="28"
                  src="https://html.tailus.io/blocks/customers/lilly.svg"
                  width="auto"
                />
              </div>

              <div className="flex">
                <img
                  alt="OpenAI Logo"
                  className="mx-auto h-6 w-fit dark:invert"
                  height="24"
                  src="https://html.tailus.io/blocks/customers/openai.svg"
                  width="auto"
                />
              </div>
            </InfiniteSlider>

            <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background" />
            <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background" />
            <ProgressiveBlur
              blurIntensity={1}
              className="pointer-events-none absolute top-0 left-0 h-full w-20"
              direction="left"
            />
            <ProgressiveBlur
              blurIntensity={1}
              className="pointer-events-none absolute top-0 right-0 h-full w-20"
              direction="right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
