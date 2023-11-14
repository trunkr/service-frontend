import { FunnelContetProvider } from './FunnelContentProvider';
import { FunnelContextSetter } from './FunnelContextSetter';
import { FunnelRenderer } from './FunnelRenderer';

const Funnel = ({ children }: { children: React.ReactNode[] }) => {
  return (
    <FunnelContetProvider>
      <FunnelContextSetter>{children}</FunnelContextSetter>
      <FunnelRenderer />
    </FunnelContetProvider>
  );
};
export default Funnel;
