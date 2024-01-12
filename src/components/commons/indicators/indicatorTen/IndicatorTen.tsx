import Text from '@public/assets/text/Text';
import * as styles from './IndicatorTen.style';
import { COLORS } from '@public/assets/colors/color';
import IndicatorOn from '@public/icons/System/IndicatorTenOn.svg';
import IndicatorOff from '@public/icons/System/IndicatorTenOff.svg';
interface IndicatorTenProps {
  step: number;
}
const IndicatorTen = ({ step }: IndicatorTenProps) => {
  const indicatorArr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <styles.Container>
      <styles.TextWrapper>
        <Text fontFamily="Pretendard" textStyleName="Label4B" color={COLORS.primary.mint600}>
          10문제 중
        </Text>

        <Text fontFamily="Pretendard" textStyleName="Label4B" color={COLORS.primary.mint600}>
          {step + 1}
        </Text>
        <Text fontFamily="Pretendard" textStyleName="Label4B" color={COLORS.primary.mint600}>
          문제
        </Text>
      </styles.TextWrapper>
      <styles.IndicatorWrapper>
        {indicatorArr.map((item) => {
          if (item == step) {
            return (
              <div key={item}>
                <IndicatorOn />
              </div>
            );
          } else {
            return (
              <div key={item}>
                <IndicatorOff />
              </div>
            );
          }
        })}
      </styles.IndicatorWrapper>
    </styles.Container>
  );
};
export default IndicatorTen;
