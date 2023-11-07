import NavigationBar from '@/components/commons/navbar/Navbar';
import * as styles from './Layout4.style';
import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '@/components/commons/footer/Footer';
import { NavigationProps } from '@/components/commons/navbar/Navbar';

const Layout4 = ({ children, state }: PropsWithChildren & NavigationProps) => {
  return (
    <div>
      <NavigationBar state={state} />
      <styles.LayoutContainer>{children || <Outlet />}</styles.LayoutContainer>
      <Footer />
    </div>
  );
};
export default Layout4;
