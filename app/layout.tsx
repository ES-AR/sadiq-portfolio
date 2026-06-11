import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../styles/globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sadiq Ridwan Abubakar | Product & UI/UX Designer',
  description:
    'Creative Product and UI/UX Designer passionate about building modern, user-centered digital experiences for web and mobile applications.',
  keywords: [
    'UI/UX Designer',
    'Product Designer',
    'Web Designer',
    'Frontend Developer',
    'Figma',
    'React',
  ],
  authors: [
    {
      name: 'Sadiq Ridwan Abubakar',
      url: 'https://sadiq-portfolio.vercel.app',
    },
  ],
  creator: 'Sadiq Ridwan Abubakar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sadiq-portfolio.vercel.app',
    title: 'Sadiq Ridwan Abubakar | Product & UI/UX Designer',
    description:
      'Creative Product and UI/UX Designer passionate about building modern, user-centered digital experiences.',
    siteName: 'Sadiq Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sadiq Ridwan Abubakar | Product & UI/UX Designer',
    description:
      'Creative Product and UI/UX Designer passionate about building modern, user-centered digital experiences.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans antialiased">
        <div className="min-h-screen bg-gray-50 text-gray-900">
          {children}
        </div>
      </body>
    </html>
  );
}
