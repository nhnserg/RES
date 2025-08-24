import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingButtons } from '@/components/ui/FloatingButtons';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://remorquage-marseille.fr'),
  title: {
    default: 'Remorquage Voiture Marseille 24/7 | Dépannage Auto Urgent',
    template: '%s | Remorquage Marseille 24/7'
  },
  description: 'Service de remorquage voiture à Marseille 24h/24 et 7j/7. Dépannage auto urgent, remorquage longue distance. Intervention rapide dans toute la région marseillaise.',
  keywords: [
    'remorquage Marseille',
    'dépannage auto Marseille', 
    'remorquage voiture 24h',
    'assistance routière Marseille',
    'remorquage urgent',
    'dépanneur Marseille'
  ],
  authors: [{ name: 'Remorquage Marseille 24/7' }],
  creator: 'Remorquage Marseille',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://remorquage-marseille.fr',
    siteName: 'Remorquage Marseille 24/7',
    title: 'Remorquage Voiture Marseille 24/7 | Dépannage Auto Urgent',
    description: 'Service de remorquage voiture à Marseille 24h/24. Intervention rapide, tarifs transparents. Appelez maintenant !',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Remorquage Voiture Marseille 24/7',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remorquage Voiture Marseille 24/7',
    description: 'Service de remorquage à Marseille 24h/24. Intervention rapide partout à Marseille.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}