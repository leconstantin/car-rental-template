'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { navItems, newsCategories, newsLinks } from '@/config/app';
import { cn } from '@/lib/utils';
import type { TNewsCategory, TNewsLink } from '@/types';

export function MainNav({
  className,
  isBlog = false,
  ...props
}: React.ComponentProps<'nav'> & {
  isBlog?: boolean;
}) {
  const pathname = usePathname();

  return (
    <nav className={cn('items-center gap-0.5', className)} {...props}>
      {navItems.map((item) => (
        <Button
          asChild
          className="rounded-full"
          key={item.href}
          size="sm"
          variant="ghost"
        >
          <Link
            className={cn(pathname === item.href && 'text-primary')}
            href={item.href}
          >
            {item.label}
          </Link>
        </Button>
      ))}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              aria-label="Open blog links"
              className="flex h-7 cursor-pointer items-center rounded-full bg-transparent px-3 py-4 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50"
            >
              <Link href="/all">All models</Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-background">
              <ul className="grid w-[500px] grid-cols-2 gap-6 p-4 lg:w-[600px]">
                {newsLinks.map((link: TNewsLink) => (
                  <li className="flex flex-col gap-5" key={link.title}>
                    <p className="font-medium tracking-tighter">{link.title}</p>
                    <div className="flex flex-col gap-6">
                      {link.links.map((li) => (
                        <NavigationMenuLink
                          asChild
                          className="group p-0 hover:bg-transparent"
                          key={li.title}
                        >
                          <Link href={li.href}>
                            <div className="flex items-center gap-3">
                              <div className="rounded-sm border border-border p-2 transition-all duration-300 group-hover:bg-black dark:group-hover:bg-white">
                                <li.icon className="block size-4 transition-all duration-300 group-hover:text-white dark:group-hover:text-black" />
                              </div>

                              <div className="flex flex-col gap-1">
                                <div className="font-medium text-sm leading-none">
                                  {li.title}
                                </div>
                                <p className="text-muted-foreground text-xs">
                                  View recent articles
                                </p>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {isBlog && (
            <NavigationMenuItem>
              <NavigationMenuTrigger
                aria-label="Open news categories"
                className="flex h-7 items-center rounded-full bg-transparent px-3 py-4 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50"
              >
                Categories
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-background">
                <ul className="grid w-[500px] grid-cols-2 gap-4 p-4 lg:w-[600px] lg:grid-cols-3">
                  {newsCategories.map((link: TNewsCategory) => (
                    <li key={link.name}>
                      <NavigationMenuLink
                        asChild
                        className="group p-0 hover:bg-transparent"
                      >
                        <Link href={link.link}>
                          <div className="flex items-center gap-3">
                            <div className="rounded-sm border border-border p-2 transition-all duration-300 group-hover:bg-black dark:group-hover:bg-white">
                              <link.icon className="block size-4 transition-all duration-300 group-hover:text-white dark:group-hover:text-black" />
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="font-medium text-sm leading-none">
                                {link.name}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
