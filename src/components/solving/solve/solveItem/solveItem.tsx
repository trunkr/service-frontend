import Text from '@public/assets/text/Text';
import * as styles from './solveItem.style';
import { COLORS } from '@public/assets/colors/color';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';
import PrimaryBoxButton from '@/components/commons/buttons/boxButton/primaryButton/PrimaryBoxButton';
import SwitchOn from '@public/icons/System/SwitchMediumON.svg';
import SwitchOff from '@public/icons/System/SwitchMediumOff.svg';
import postQuizAnswer from '@/apis/quiz/postQuizAnswer';
import api from '@/service/TokenService';

interface SolveItemProps {
  quizId: number;
  quizGroupId: string;
  question: string;
  setIndicatorStep: React.Dispatch<React.SetStateAction<number>>;
  indicatorStep: number;
}
const SolveItem = ({ quizId, quizGroupId, question, setIndicatorStep }: SolveItemProps) => {
  const token = api.getAccessToken();
  const [answer, setAnswer] = useState<string>();
  const [switchClick, setSwtichClick] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const [activeState, setActiveState] = useState(false);

  useLayoutEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (answer) {
      if (answer.length >= 1) {
        setActiveState(true);
      } else {
        setActiveState(false);
      }
    } else {
      setActiveState(false);
    }
  }, [answer]);
  const onChangeAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.currentTarget.value);
  };
  const onSwitchClick = () => {
    setSwtichClick(!switchClick);
  };
  const onSubmitClick = async () => {
    const data = await postQuizAnswer(
      {
        quizGroupId: quizGroupId,
        quizId: quizId,
        answer: answer as string,
      },
      token,
    );
    if (data.code == 100) {
      setIndicatorStep((prev) => prev + 1);
      setAnswer('');
    }
  };
  return (
    <styles.Container>
      <styles.AnswerWrapper>
        <styles.TitleWrapper>
          <Text color={COLORS.gray.black} textStyleName="Title1" fontFamily="Pretendard">
            {question}
          </Text>
        </styles.TitleWrapper>
        <styles.AnswerField
          type="text"
          placeholder="답변을 입력헤주세요"
          value={answer}
          onChange={onChangeAnswer}
          ref={inputRef}
        />

        {switchClick ? (
          <div onClick={onSwitchClick}>
            <styles.VisibleButtonContainer>
              <styles.VisibleButtonWrapper>
                <Text color={COLORS.gray.black} textStyleName="Label4M" fontFamily="Pretendard">
                  문제 답변 모두에게 공개
                </Text>
                <SwitchOn />
              </styles.VisibleButtonWrapper>
              <styles.TextCountWrapper>
                <Text color={COLORS.gray.gray600} textStyleName="Label4M" fontFamily="Pretendard">
                  {answer?.length}
                </Text>
                <Text color={COLORS.gray.gray600} textStyleName="Label4M" fontFamily="Pretendard">
                  /
                </Text>
                <Text color={COLORS.gray.gray600} textStyleName="Label4M" fontFamily="Pretendard">
                  2000
                </Text>
              </styles.TextCountWrapper>
            </styles.VisibleButtonContainer>
          </div>
        ) : (
          <div onClick={onSwitchClick}>
            <styles.VisibleButtonContainer>
              <styles.VisibleButtonWrapper>
                <Text color={COLORS.gray.black} textStyleName="Label4M" fontFamily="Pretendard">
                  문제 답변 모두에게 공개
                </Text>
                <SwitchOff />
              </styles.VisibleButtonWrapper>
            </styles.VisibleButtonContainer>
          </div>
        )}
      </styles.AnswerWrapper>
      <styles.ButtonWrapper>
        {activeState ? (
          <div onClick={onSubmitClick}>
            <PrimaryBoxButton size="LARGE" msg="다음" state="DEFAULT" />
          </div>
        ) : (
          <PrimaryBoxButton size="LARGE" msg="다음" state="DISABLED" />
        )}
      </styles.ButtonWrapper>
    </styles.Container>
  );
};
export default SolveItem;
