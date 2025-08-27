import { cn } from '@/lib/utils';

function PageContainer({
  className,
  children,
  ...props
}: React.ComponentProps<'section'>) {
  return (
    <section {...props}>
      <div className="container-wrapper">
        <div className={cn('container', className)}>{children}</div>
      </div>
    </section>
  );
}

function PageContainerHeading({
  className,
  ...props
}: React.ComponentProps<'h1'>) {
  return (
    <h1
      className={cn(
        'max-w-2xl text-balance font-semibold text-4xl text-primary leading-tighter tracking-tight lg:max-w-3xl lg:font-semibold lg:leading-[1.1] xl:text-5xl xl:tracking-tighter',
        className
      )}
      {...props}
    />
  );
}

function PageContainerDescription({
  className,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'max-w-3xl text-balance text-base text-foreground sm:text-lg',
        className
      )}
      {...props}
    />
  );
}

function PageContainerActions({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex w-full items-center justify-center gap-2 pt-2 **:data-[slot=button]:shadow-none',
        className
      )}
      {...props}
    />
  );
}

export {
  PageContainerActions,
  PageContainer,
  PageContainerDescription,
  PageContainerHeading,
};
