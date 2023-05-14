import './globals.css';
import { Inter } from 'next/font/google';
import favicon from './favicon.ico';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'VISA SPONSORS',
  description:
    'Updated list of all companies around the world that offer visa sponsorship perks. Collection of a huge portion of companies that offer VISA sponsorship globally.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        href={favicon.src}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={favicon.src}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={favicon.src}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={favicon.src}
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
