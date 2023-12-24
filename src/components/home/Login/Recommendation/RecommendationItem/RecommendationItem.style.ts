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
  height: 160px;
  position: relative;
`;

export const ArrowButtonContainer = styled.div`
  position: absolute;
  bottom: -220px;
  z-index: 10;
  padding-left: 300px;
  cursor: pointer;
`;
