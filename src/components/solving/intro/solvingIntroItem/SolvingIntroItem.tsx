import * as styles from './SolvingIntroItem.style';

import OSCategory from '@public/icons/Category/OS.svg';
import DataStructureCategory from '@public/icons/Category/DataStructure.svg';
import DataBaseCategory from '@public/icons/Category/DataBase.svg';
import ComputerArchitectureCategory from '@public/icons/Category/ComputerStructure.svg';
import NetworkCategory from '@public/icons/Category/Network.svg';
import SpringCategory from '@public/icons/Category/Spring.svg';
import ReactCategory from '@public/icons/Category/React.svg';
import JavaCategory from '@public/icons/Category/Java.svg';
import JavaScriptCategory from '@public/icons/Category/JavaScript.svg';
import GoCategory from '@public/icons/Category/Go.svg';
import KotlinCategory from '@public/icons/Category/Kotlin.svg';

import NON_CHECK from '@public/icons/System/check.svg';
import CHECK from '@public/icons/System/check_mint.svg';
import Text from '@public/assets/text/Text';
import { COLORS } from '@public/assets/colors/color';

export interface SolvingIntroStyleProps {
  isClick: boolean;
}
export interface SolvingIntroProps {
  isClick: boolean;
  name: string;
  quizTotal: number;
  solvableQuizCnt: number;
}

const SolvingIntroItem = ({ isClick, name, quizTotal, solvableQuizCnt }: SolvingIntroProps) => {
  return (
    <styles.ItemContainer isClick={isClick}>
      <styles.IconContainer>
        <div>
          {name == '운영체제' ? <OSCategory /> : null}
          {name == '자료구조' ? <DataStructureCategory /> : null}
          {name == '데이터베이스' ? <DataBaseCategory /> : null}
          {name == '컴퓨터구조' ? <ComputerArchitectureCategory /> : null}
          {name == '네트워크' ? <NetworkCategory /> : null}
          {name == 'Spring' ? <SpringCategory /> : null}
          {name == 'React' ? <ReactCategory /> : null}
          {name == 'Java' ? <JavaCategory /> : null}
          {name == 'JavaScript' ? <JavaScriptCategory /> : null}
          {name == 'GO' ? <GoCategory /> : null}
          {name == 'Kotlin' ? <KotlinCategory /> : null}
        </div>
        <div>{isClick ? <CHECK /> : <NON_CHECK />}</div>
      </styles.IconContainer>
      <styles.TextContainer>
        <Text color={COLORS.gray.black} fontFamily="Pretendard" textStyleName="Label1B">
          {name}
        </Text>
        <styles.QuizCountContainer>
          <Text color={COLORS.gray.black} fontFamily="Pretendard" textStyleName="Label7B">
            풀 수 있는 문제 {solvableQuizCnt}
          </Text>
          <Text color={COLORS.gray.gray700} fontFamily="Pretendard" textStyleName="Label7B">
            /
          </Text>
          <Text color={COLORS.gray.gray700} fontFamily="Pretendard" textStyleName="Label7B">
            총 {quizTotal}
          </Text>
        </styles.QuizCountContainer>
      </styles.TextContainer>
    </styles.ItemContainer>
  );
};
export default SolvingIntroItem;
