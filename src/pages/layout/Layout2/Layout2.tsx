import NavigationBar from '@/components/commons/navbar/Navbar';
import * as styles from './Layout2.style';
import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '@/components/commons/footer/Footer';
const Layout2 = ({ children }: PropsWithChildren) => {
  return (
    <styles.LayoutContainer>
      <NavigationBar />
      {children || <Outlet />}
      <Footer />
    </styles.LayoutContainer>
  );
};
export default Layout2;
