import Image from 'next/image';
import { Inter } from 'next/font/google';
import NavigationBar from '@/components/commons/navbar/Navbar';
import { Footer } from '@/components/commons/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <Footer />
    </div>
  );
}
