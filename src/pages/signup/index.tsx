import Signup from '@/components/signup';
import Layout4 from '../layout/Layout4/Layout4';
import Signup2 from '@/components/signup/Signup2';

const SignupPage = () => {
  return (
    <Layout4 state="REGISTER">
      <Signup2 />
    </Layout4>
  );
};
export default SignupPage;
