import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'GAUTAMORA PRIVATE LIMITED | Apparel Manufacturing',
  description: 'Quality apparel manufacturing, wholesale supply and distribution network.',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
