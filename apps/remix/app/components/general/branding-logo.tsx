import type { ImgHTMLAttributes } from 'react';

import { BRAND_LOGO } from '@documenso/lib/constants/branding';
import { cn } from '@documenso/ui/lib/utils';

export type BrandingLogoProps = ImgHTMLAttributes<HTMLImageElement> & {
  variant?: 'color' | 'mono';
  tone?: 'light' | 'dark';
  themeAware?: boolean;
};

const resolveLogoSrc = (variant: 'color' | 'mono', tone: 'light' | 'dark') => {
  if (variant === 'mono') {
    return tone === 'dark' ? BRAND_LOGO.monoDark : BRAND_LOGO.monoLight;
  }
  return BRAND_LOGO.color;
};

export const BrandingLogo = ({
  variant = 'color',
  tone = 'light',
  themeAware = false,
  alt,
  className,
  ...props
}: BrandingLogoProps) => {
  if (themeAware) {
    return (
      <>
        {/* Light theme: show color logo */}
        <img
          src={BRAND_LOGO.color}
          alt={alt ?? 'IDATEN Sign Logo'}
          className={cn('dark:hidden', className)}
          {...props}
        />
        {/* Dark theme: show white mono logo */}
        <img
          src={BRAND_LOGO.monoDark}
          alt={alt ?? 'IDATEN Sign Logo'}
          className={cn('hidden dark:inline', className)}
          {...props}
        />
      </>
    );
  }

  const src = resolveLogoSrc(variant, tone);
  return <img src={src} alt={alt ?? 'IDATEN Sign Logo'} className={className} {...props} />;
};
