import { useState, useEffect } from 'react';
import * as styles from './Main1.style';
import Text from '@public/assets/text/Text';
import { COLORS } from '@public/assets/colors/color';

const Main1 = () => {
  const [hasWindow, setHasWindow] = useState(false);
  console.log(hasWindow);
  useEffect(() => {
    if (typeof window !== 'undefined' && !hasWindow) {
      setHasWindow(true);
    }
  }, []);

  return (
    <styles.container>
      <styles.textContainer>
        <Text color={COLORS.gray.black} textStyleName="Main" fontFamily="Pretendard">
          내 안의 모든 개발의 가능성.
        </Text>
        <Text color={COLORS.gray.black} textStyleName="Main" fontFamily="Pretendard">
          Trunkr와 함께 성장해보세요.
        </Text>
      </styles.textContainer>
      <styles.videoContainer>
        <video autoPlay loop muted style={{ width: '907px', height: '750px' }}>
          <source src="https://trunkr-bucket.s3.ap-northeast-2.amazonaws.com/53fa683a-a878-4517-b943-de849cc4d683.mp4" />
        </video>
      </styles.videoContainer>
    </styles.container>
  );
};
export default Main1;
