import MyLearning from './Login/MyLearning/MyLearning';
import Recommendation from './Login/Recommendation/Recommendation';
import * as styles from './Home.style';
import ThinDivider from '../commons/divider/thin/ThinDivider';

const LoginUserHome = () => {
  return (
    <styles.Container>
      <MyLearning />
      <ThinDivider />
      <Recommendation />
    </styles.Container>
  );
};
export default LoginUserHome;
