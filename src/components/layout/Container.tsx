import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main';
  id?: string;
}

export function Container({
  children,
  className,
  as: Tag = 'div',
  id,
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={cn('mx-auto w-full max-w-[1200px] px-4 md:px-8 lg:px-10', className)}
    >
      {children}
    </Tag>
  );
}
