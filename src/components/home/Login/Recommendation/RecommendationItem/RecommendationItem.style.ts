import styled from '@emotion/styled';
import { COLORS } from '@public/assets/colors/color';

export const RecommendationItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid ${COLORS.gray.gray200};
  width: 397px;
  gap: 26px;
  padding-bottom: 40px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 26px;
  padding-left: 26px;
`;

export const TextField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ArrowButtonContainer = styled.div`
  z-index: 10;
  cursor: pointer;
  position: absolute;
  bottom: -20px;
  padding-left: 300px;
`;
