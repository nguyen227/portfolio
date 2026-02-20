import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nguyen Vu | Senior Software Engineer',
  description:
    'Senior Software Engineer specializing in backend architecture, high-performance systems, and modern web technologies. Based in Hanoi, Vietnam.',
  keywords: [
    'Software Engineer',
    'Backend Developer',
    'NodeJS',
    'NestJS',
    'Next.js',
    'Portfolio',
    'Technical Leader',
  ],
  authors: [{ name: 'Nguyen Vu' }],
  openGraph: {
    title: 'Nguyen Vu | Senior Software Engineer',
    description:
      'Senior Software Engineer specializing in backend architecture and high-performance systems.',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: '/images/avatar.jpg',
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
    <html lang="en" suppressHydrationWarning>
      <head>{/* We use custom SVGs for icons now */}</head>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
