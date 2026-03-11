import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: 'Tam.Renders | Artistic Interior Design Studio',
  description: 'Where imagination meets precision. Award-winning interior design studio crafting residential, commercial, and mixed-use spaces since 2018.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-cream">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
