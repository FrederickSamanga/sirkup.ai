import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'SirkupAI - Democratising AI for Sustainable Development',
  description: 'Digital Innovation Studio specializing in AI-powered solutions across enterprise SaaS development, educational technology, and social impact initiatives.',
  keywords: 'AI, Artificial Intelligence, Education, Enterprise Solutions, Social Impact, SaaS, Digital Innovation',
  authors: [{ name: 'SirkupAI' }],
  creator: 'SirkupAI',
  publisher: 'SirkupAI',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sirkupai.com',
    title: 'SirkupAI - Democratising AI for Sustainable Development',
    description: 'Digital Innovation Studio specializing in AI-powered solutions across enterprise SaaS development, educational technology, and social impact initiatives.',
    siteName: 'SirkupAI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SirkupAI - Democratising AI for Sustainable Development',
    description: 'Digital Innovation Studio specializing in AI-powered solutions across enterprise SaaS development, educational technology, and social impact initiatives.',
    creator: '@sirkupai',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}