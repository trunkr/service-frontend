import styled from '@emotion/styled';
import { COLORS } from '@public/assets/colors/color';

export const SelectedBubbleTab = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 50px;
  background-color: ${COLORS.gray.gray900};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InActiveBubbleTab = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 50px;
  border: 2px solid ${COLORS.gray.gray300};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PressedBubbleTab = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 50px;
  border: 2px solid ${COLORS.gray.gray300};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0000000d;
`;
