import NavigationBar from '@/components/commons/navbar/Navbar';
import * as styles from './Layout1.style';
// import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '@/components/commons/footer/Footer';
import { NavigationProps } from '@/components/commons/navbar/Navbar';
import { PropsWithChildren } from 'react';

const Layout1 = ({ children, state }: PropsWithChildren & NavigationProps) => {
  console.log(state);
  return (
    <div>
      <NavigationBar state={state} />
      <styles.LayoutContainer>
        {children || <Outlet />}
        <Footer />
      </styles.LayoutContainer>
    </div>
  );
};
export default Layout1;
