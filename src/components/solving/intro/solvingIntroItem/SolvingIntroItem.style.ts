import styled from '@emotion/styled';
import { COLORS } from '@public/assets/colors/color';
import { SolvingIntroStyleProps } from './SolvingIntroItem';

export const ItemContainer = styled.div<SolvingIntroStyleProps>`
  width: 292px;
  border-radius: 6px;
  border: 2px solid ${(props) => (props.isClick ? COLORS.primary.mint600 : COLORS.gray.gray250)};
  display: flex;
  flex-direction: column;
  padding: 24px 24px 24px;

  gap: 16px;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const QuizCountContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 4px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
