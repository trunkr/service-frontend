import { ResponseDto } from './Common';

export interface GetMemberStatsInterface {
  solvedQuizCount: number;
  incorrectQuizCount: number;
  recommendedAnswerCount: number;
  writtenAlgorithmNoteCount: number;
  frequentlyQuizCategoryIds: number[];
}

export type GetMemberCheckNickname = ResponseDto<boolean>;
export type GetMemberStatsRes = ResponseDto<GetMemberStatsInterface>;
