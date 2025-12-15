import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Global Eduvate (TGE) - Your Gateway to International Education',
  description: 'Discover top universities, courses, and study abroad opportunities with The Global Eduvate. Trusted by international students worldwide.',
  openGraph: {
    title: 'The Global Eduvate (TGE)',
    description: 'Your gateway to international education.',
    url: 'https://theglobaleduvate.com',
    siteName: 'The Global Eduvate',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Global Eduvate (TGE)',
    description: 'Your gateway to international education.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "The Global Eduvate",
              "url": "https://theglobaleduvate.com",
              "logo": "https://theglobaleduvate.com/logo.png",
              "description": "Leading platform for international education and study abroad.",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
