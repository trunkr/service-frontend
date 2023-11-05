import NavigationBar from '@/components/commons/navbar/Navbar';
import * as styles from './Layout1.style';
import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '@/components/commons/footer/Footer';
const Layout1 = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <NavigationBar />
      <styles.LayoutContainer>
        {children || <Outlet />}
        <Footer />
      </styles.LayoutContainer>
    </div>
  );
};
export default Layout1;
