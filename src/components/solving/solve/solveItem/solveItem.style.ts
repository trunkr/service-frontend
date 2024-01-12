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
export const AnswerField = styled.input`
  width: 1030px;
  padding: 30px;
  border-radius: 10px;
  margin-top: 60px;
  border: 2px solid ${COLORS.gray.gray250};
  outline: none;
  &:active {
    border-color: ${COLORS.gray.black};
  }
  &:focus {
    border-color: ${COLORS.gray.black};
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
