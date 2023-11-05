import NavigationBar from '@/components/commons/navbar/Navbar';
import * as styles from './Layout4.style';
import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '@/components/commons/footer/Footer';
const Layout4 = ({ children }: PropsWithChildren) => {
  return (
    <styles.LayoutContainer>
      <NavigationBar />
      {children || <Outlet />}
      <Footer />
    </styles.LayoutContainer>
  );
};
export default Layout4;
