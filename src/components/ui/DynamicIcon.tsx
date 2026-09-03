import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

interface DynamicIconProps extends LucideProps {
  name: string;
  fallback?: keyof typeof LucideIcons;
}

export function DynamicIcon({ name, fallback = 'Circle', ...props }: DynamicIconProps) {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>)[name] || LucideIcons[fallback];
  return <IconComponent {...props} />;
}
