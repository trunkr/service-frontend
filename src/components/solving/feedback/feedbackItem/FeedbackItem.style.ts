import styled from '@emotion/styled';
import { COLORS } from '@public/assets/colors/color';

interface CorrectLabelProps {
  isCorrect: boolean;
}

export const Container = styled.div`
  display: inline-flex;
  padding: 27px 0 27px 30px;
  align-items: center;
  border-radius: 10px;
  border: 2px solid ${COLORS.gray.gray250};
`;
export const CorrectLabelWrapper = styled.div<CorrectLabelProps>`
  display: flex;
  padding: 6px 10px;
  align-items: center;
  gap: 4px;
  background-color: ${(props) => (props.isCorrect ? COLORS.primary.mint200 : COLORS.error.red200)};
`;
export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
