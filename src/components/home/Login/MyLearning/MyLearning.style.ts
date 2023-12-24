import styled from '@emotion/styled';
import { COLORS } from '@public/assets/colors/color';

export const Container = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const LearningContainer = styled.div`
  gap: 28px;
  display: flex;
  flex-direction: column;
`;

export const LearningBox = styled.div`
  width: 77.5rem;
  border-radius: 10px;
  border: 1px solid ${COLORS.gray.gray200};
  display: flex;
  flex-direction: row;
`;

export const LearningItemContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: row;
  flex-direction: row;
  align-items: center;
  padding-left: 30px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 43px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BorderLine = styled.div`
  width: 1px;
  height: 209px;
  background-color: ${COLORS.gray.gray200};
`;
