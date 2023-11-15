import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';

const KakaoLoginRedirect = () => {
  const router = useRouter();
  const params = useSearchParams();
  const codeParam: string = params.get('code') as string;
  return <></>;
};
export default KakaoLoginRedirect;
