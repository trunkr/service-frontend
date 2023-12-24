import Text from '@public/assets/text/Text';
import * as styles from './MyLearning.style';
import { COLORS } from '@public/assets/colors/color';
import Link from 'next/link';
const MyLearning = () => {
  return (
    <styles.Container>
      <styles.LearningContainer>
        <Text color={COLORS.gray.black} textStyleName="Title5" fontFamily="Pretendard">
          내 학습
        </Text>
        <styles.LearningBox>
          <styles.LearningItemContainer>
            <styles.TextContainer>
              <styles.TitleContainer>
                <Text color={COLORS.gray.gray600} textStyleName="Label2B" fontFamily="Pretendard">
                  지금까지 푼 CS 문제 수
                </Text>
                <Text color={COLORS.gray.black} textStyleName="Number2" fontFamily="Poppins">
                  22
                </Text>
              </styles.TitleContainer>
              <styles.BodyContainer>
                <Text color={COLORS.sub.purple750} textStyleName="Label2SB" fontFamily="Pretendard">
                  자료구조,자바
                </Text>
                <Text color={COLORS.gray.black} textStyleName="Label2SB" fontFamily="Pretendard">
                  를 가장 많이 풀었어요
                </Text>
              </styles.BodyContainer>
            </styles.TextContainer>
          </styles.LearningItemContainer>
          <styles.BorderLine />
          <styles.LearningItemContainer>
            <styles.TextContainer>
              <styles.TitleContainer>
                <Text color={COLORS.gray.gray600} textStyleName="Label2B" fontFamily="Pretendard">
                  틀린 CS 문제 수
                </Text>
                <Text color={COLORS.gray.black} textStyleName="Number2" fontFamily="Poppins">
                  33
                </Text>
              </styles.TitleContainer>
              <styles.BodyContainer>
                <Link href="/">
                  <Text color={COLORS.gray.black} textStyleName="Label2SB" fontFamily="Pretendard">
                    CS 문제 풀이 분석 보기
                  </Text>
                </Link>
              </styles.BodyContainer>
            </styles.TextContainer>
          </styles.LearningItemContainer>
          <styles.BorderLine />
          <styles.LearningItemContainer>
            <styles.TextContainer>
              <styles.TitleContainer>
                <Text color={COLORS.gray.gray600} textStyleName="Label2B" fontFamily="Pretendard">
                  추천 받은 답변 수
                </Text>
                <Text color={COLORS.gray.black} textStyleName="Number2" fontFamily="Poppins">
                  1
                </Text>
              </styles.TitleContainer>
              <styles.BodyContainer>
                <Text color={COLORS.gray.black} textStyleName="Label2SB" fontFamily="Pretendard">
                  1명이 추천했어요!
                </Text>
              </styles.BodyContainer>
            </styles.TextContainer>
          </styles.LearningItemContainer>
          <styles.BorderLine />
          <styles.LearningItemContainer>
            <styles.TextContainer>
              <styles.TitleContainer>
                <Text color={COLORS.gray.gray600} textStyleName="Label2B" fontFamily="Pretendard">
                  알고리즘 오답노트 수
                </Text>
                <Text color={COLORS.gray.black} textStyleName="Number2" fontFamily="Poppins">
                  22
                </Text>
              </styles.TitleContainer>
              <styles.BodyContainer>
                <Text color={COLORS.gray.black} textStyleName="Label2SB" fontFamily="Pretendard">
                  열심이시네요👏
                </Text>
              </styles.BodyContainer>
            </styles.TextContainer>
          </styles.LearningItemContainer>
        </styles.LearningBox>
      </styles.LearningContainer>
    </styles.Container>
  );
};
export default MyLearning;
