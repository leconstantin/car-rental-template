import { Armchair } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { ModeSwitcher } from '../custom/mode-switcher';
import { Button } from '../ui/button';
import { CommandMenu } from './command-menu';
import HeaderContactForm from './header-contact-form';
import { MainNav } from './main-nav';
import { MobileNav } from './mobile-nav';

type SiteHeaderProps = {
  isBlog?: boolean;
};
export function SiteHeader({ isBlog = false }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/40 backdrop-blur-lg supports-backdrop-blur:bg-background/90 dark:bg-black">
      <div className="container-wrapper sm:px-6 lg:px-0">
        <div className="container flex h-14 items-center gap-2 md:gap-4">
          <MobileNav isBlog={isBlog} />
          <Button
            asChild
            className="hidden size-8 lg:flex"
            size="icon"
            variant="ghost"
          >
            <Link href="/">
              <Armchair className="size-7 font-bold" />
              <span className="sr-only">{siteConfig.name}</span>
            </Link>
          </Button>
          <MainNav className="hidden lg:flex" isBlog={isBlog} />
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
              <CommandMenu />
            </div>
            <nav className="flex items-center gap-4">
              <HeaderContactForm />
              <ModeSwitcher />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
