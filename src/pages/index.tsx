import Image from 'next/image';
import { Inter } from 'next/font/google';
import NavigationBar from '@/components/commons/navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <NavigationBar />;
}
