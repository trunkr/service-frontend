import Text from '@public/assets/text/Text';
import * as styles from './MyLearning.style';
import { COLORS } from '@public/assets/colors/color';
import Link from 'next/link';
import { MembersStatsProps } from '../../LoginUserHome';
const MyLearning = ({
  solvedQuizCount,
  incorrectQuizCount,
  recommendedAnswerCount,
  writtenAlgorithmNoteCount,
  frequentlyQuizCategoryIds,
}: MembersStatsProps) => {
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
                {solvedQuizCount == 0 ? (
                  <Text color={COLORS.gray.gray250} textStyleName="Number2" fontFamily="Poppins">
                    {solvedQuizCount}
                  </Text>
                ) : (
                  <Text color={COLORS.gray.black} textStyleName="Number2" fontFamily="Poppins">
                    {solvedQuizCount}
                  </Text>
                )}
              </styles.TitleContainer>
              <styles.BodyContainer>
                {solvedQuizCount == 0 ? (
                  <div>
                    <Link href="/">
                      <Text color={COLORS.gray.black} textStyleName="Label2B" fontFamily="Poppins">
                        문제 풀기
                      </Text>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Text color={COLORS.sub.purple750} textStyleName="Label2SB" fontFamily="Pretendard">
                      자료구조,자바
                    </Text>
                    <Text color={COLORS.gray.black} textStyleName="Label2SB" fontFamily="Pretendard">
                      를 가장 많이 풀었어요
                    </Text>
                  </div>
                )}
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
                {incorrectQuizCount == 0 ? (
                  <Text color={COLORS.gray.gray250} textStyleName="Number2" fontFamily="Poppins">
                    {incorrectQuizCount}
                  </Text>
                ) : (
                  <Text color={COLORS.gray.black} textStyleName="Number2" fontFamily="Poppins">
                    {incorrectQuizCount}
                  </Text>
                )}
              </styles.TitleContainer>
              <styles.BodyContainer>
                {incorrectQuizCount == 0 ? (
                  <Text color={COLORS.gray.gray750} textStyleName="Label2SB" fontFamily="Pretendard">
                    아직 없어요
                  </Text>
                ) : (
                  <Link href="/">
                    <Text color={COLORS.gray.black} textStyleName="Label2SB" fontFamily="Pretendard">
                      CS 문제 풀이 분석 보기
                    </Text>
                  </Link>
                )}
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
                {recommendedAnswerCount == 0 ? (
                  <Text color={COLORS.gray.gray250} textStyleName="Number2" fontFamily="Poppins">
                    {recommendedAnswerCount}
                  </Text>
                ) : (
                  <Text color={COLORS.gray.black} textStyleName="Number2" fontFamily="Poppins">
                    {recommendedAnswerCount}
                  </Text>
                )}
              </styles.TitleContainer>
              <styles.BodyContainer>
                {recommendedAnswerCount == 0 && (
                  <Text color={COLORS.gray.gray750} textStyleName="Label2SB" fontFamily="Pretendard">
                    아직 없어요 🥲
                  </Text>
                )}
                {recommendedAnswerCount >= 1 && recommendedAnswerCount <= 99 && (
                  <div>
                    <Text color={COLORS.sub.purple750} textStyleName="Label2SB" fontFamily="Pretendard">
                      {recommendedAnswerCount}
                    </Text>
                    <Text color={COLORS.gray.gray750} textStyleName="Label2SB" fontFamily="Pretendard">
                      명이 추천했어요!
                    </Text>
                  </div>
                )}
                {recommendedAnswerCount >= 100 && (
                  <div>
                    <Text color={COLORS.sub.purple750} textStyleName="Label2SB" fontFamily="Pretendard">
                      {recommendedAnswerCount}
                    </Text>
                    <Text color={COLORS.gray.gray750} textStyleName="Label2SB" fontFamily="Pretendard">
                      추천했어요! 🎉
                    </Text>
                  </div>
                )}
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
                {writtenAlgorithmNoteCount == 0 ? (
                  <Text color={COLORS.gray.gray250} textStyleName="Number2" fontFamily="Poppins">
                    {writtenAlgorithmNoteCount}
                  </Text>
                ) : (
                  <Text color={COLORS.gray.black} textStyleName="Number2" fontFamily="Poppins">
                    {writtenAlgorithmNoteCount}
                  </Text>
                )}
              </styles.TitleContainer>
              <styles.BodyContainer>
                {writtenAlgorithmNoteCount == 0 && (
                  <Link href="/">
                    <Text color={COLORS.gray.black} textStyleName="Label2SB" fontFamily="Pretendard">
                      시작하기
                    </Text>
                  </Link>
                )}
                {writtenAlgorithmNoteCount >= 1 && writtenAlgorithmNoteCount <= 99 && (
                  <Link href="/">
                    <Text color={COLORS.gray.black} textStyleName="Label2SB" fontFamily="Pretendard">
                      열심이시네요 👏
                    </Text>
                  </Link>
                )}
                {writtenAlgorithmNoteCount >= 100 && (
                  <Link href="/">
                    <Text color={COLORS.gray.black} textStyleName="Label2SB" fontFamily="Pretendard">
                      대단해요 👍
                    </Text>
                  </Link>
                )}
              </styles.BodyContainer>
            </styles.TextContainer>
          </styles.LearningItemContainer>
        </styles.LearningBox>
      </styles.LearningContainer>
    </styles.Container>
  );
};
export default MyLearning;
