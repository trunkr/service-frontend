import { isDesktop, isMobile, isTablet } from 'react-device-detect';

export const isMobileDevice = isMobile && !isTablet && !isDesktop;
