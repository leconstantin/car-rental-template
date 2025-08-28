'use client';

import { usePathname } from 'next/navigation';
import { PageContainer } from '@/components/custom/page-container';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { services } from '@/config/app';
import { cn } from '@/lib/utils';
import ControlsCategories from './controls';
import NavItem from './nav-item';

export default function CategoriesSection() {
  const pathname = usePathname();

  return (
    <PageContainer>
      <nav
        className={cn('sticky top-0 z-50 w-full gap-4 bg-transparent py-10')}
      >
        <div className="flex items-center gap-2 transition-all duration-1000 ease-in">
          <ScrollArea className="w-[100vw] overflow-hidden lg:w-full">
            <div className="mx-auto flex w-full items-center gap-1 md:gap-2">
              {services.map((item) => (
                <NavItem
                  active={pathname === item.link}
                  item={item}
                  key={item.label}
                />
              ))}
            </div>
            <ScrollBar className="h-0 w-0" orientation="horizontal" />
          </ScrollArea>
          <ControlsCategories />
        </div>
      </nav>
    </PageContainer>
  );
}
