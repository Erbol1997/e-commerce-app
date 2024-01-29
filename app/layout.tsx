import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import { Footer, Header } from '@/components';
import StoreProvider from './StoreProvider';

const rubik = Rubik({ subsets: ['cyrillic', 'latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Онлайн магазин компьтерной техники',
  description: 'Самые мощные, быстрые, красивые, техники из мира электроники только у нас!!!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={rubik.className}>
        <StoreProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
