import styled from '@emotion/styled';
import { COLORS } from '@public/assets/colors/color';

export const Container = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AnswerField = styled.textarea`
  width: 1030px;
  min-height: 308px;
  padding: 30px;
  border-radius: 10px;
  margin-top: 60px;
  border: 2px solid ${COLORS.gray.gray250};
  outline: none;
  font-size: 18px;
  resize: none; /* textarea 크기 조절 비활성화 */
  overflow-y: hidden; /* 스크롤바 비활성화 */
  box-sizing: border-box; /* padding, border를 요소 크기에 포함 */

  &:active {
    border-color: ${COLORS.gray.black};
  }

  &:focus {
    border-color: ${COLORS.gray.black};
    height: auto;
  }

  &::placeholder {
    position: absolute;
    top: 30px;
  }
`;
export const VisibleButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const VisibleButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
`;
export const TextCountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
`;
export const ButtonWrapper = styled.div`
  padding-top: 100px;
`;
