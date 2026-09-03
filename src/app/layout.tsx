import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/config/site';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: siteConfig.companyName,
    template: `%s — ${siteConfig.companyName}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.seo.siteUrl),
  openGraph: {
    type: 'website',
    locale: siteConfig.seo.locale,
    siteName: siteConfig.companyName,
    title: siteConfig.companyName,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
