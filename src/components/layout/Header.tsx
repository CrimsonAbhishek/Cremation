'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { Container } from './Container';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { formatPhoneLink } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/technology', label: 'Our Approach' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobile = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);



  // Close on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50 md:static">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl font-semibold text-primary-900 hover:text-primary-700 transition-colors focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2"
            aria-label={`${siteConfig.companyName} — Home`}
          >
            {siteConfig.companyName}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-base font-medium font-body transition-colors hover:text-primary-500',
                  'focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2',
                  pathname === link.href
                    ? 'text-primary-500 font-semibold'
                    : 'text-neutral-900',
                )}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {siteConfig.contact.phone && (
              <a
                href={formatPhoneLink(siteConfig.contact.phone)}
                className="flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-primary-500 transition-colors"
                aria-label={`Call ${siteConfig.contact.phoneDisplay}`}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span className="hidden xl:inline">{siteConfig.contact.phoneDisplay}</span>
              </a>
            )}
            <Link href="/booking">
              <Button size="md">Get assistance</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 -mr-2 text-neutral-700 hover:text-primary-500 transition-colors focus-visible:outline-2 focus-visible:outline-primary-500"
            onClick={toggleMobile}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-16 z-40 bg-white lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <nav className="flex flex-col p-6 gap-2" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'block py-3 px-4 text-lg font-medium font-body rounded-md transition-colors min-h-[48px] flex items-center',
                  'focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2',
                  pathname === link.href
                    ? 'text-primary-500 bg-primary-100 font-semibold'
                    : 'text-neutral-900 hover:bg-neutral-50',
                )}
                onClick={() => setMobileOpen(false)}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}

            <hr className="my-4 border-neutral-200" />

            <Link href="/booking" onClick={() => setMobileOpen(false)}>
              <Button size="lg" fullWidth>
                Get assistance
              </Button>
            </Link>

            {siteConfig.contact.phone && (
              <a
                href={formatPhoneLink(siteConfig.contact.phone)}
                className="flex items-center justify-center gap-2 py-3 text-base font-medium text-primary-500 hover:text-primary-700 min-h-[48px]"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {siteConfig.contact.phoneDisplay}
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
