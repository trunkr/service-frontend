import NavigationBar from '@/components/commons/navbar/Navbar';
import { Footer } from '@/components/commons/footer/Footer';

export default function Home() {
  return (
    <div>
      <NavigationBar state="LOGIN" />
      <Footer />
    </div>
  );
}
