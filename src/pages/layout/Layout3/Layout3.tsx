import NavigationBar from '@/components/commons/navbar/Navbar';
import * as styles from './Layout3.style';
import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '@/components/commons/footer/Footer';

import { NavigationProps } from '@/components/commons/navbar/Navbar';
const Layout3 = ({ children, state }: PropsWithChildren & NavigationProps) => {
  return (
    <styles.LayoutContainer>
      <NavigationBar state={state} />
      {children || <Outlet />}
      <Footer />
    </styles.LayoutContainer>
  );
};
export default Layout3;
