export interface IMember {
  /** 닉네임 */
  nickname: string;
  /** 이메일 */
  email: string;
  /** 프로필 식별 값 */
  profileImageUrl: string;
  quizCount: number;
  /** 나의 문제 공개 여부 */
  isQuizOpen: true;
  tier: string;
  type: string;
}

export type MemberUpdateType = Pick<IMember, 'nickname' | 'profileImageUrl' | 'quizCount' | 'isQuizOpen'>;

export interface IMyStats {
  /** 푼 퀴즈 개수 */
  solvedQuizCount: number;
  /** 틀린 퀴즈 개수 */
  incorrectQuizCount: number;
  /** 추천 받은 답변 개수 */
  recommendedAnswerCount: number;
  /** 작성한 알고리즘 노트 개수 */
  writtenAlgorithmNoteCount: number;
  /** 자주 푼 퀴즈 카테고리 ID 목록 */
  frequentlyQuizCategoryIds: number[];
}
