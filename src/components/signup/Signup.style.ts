import styled from '@emotion/styled';
import { COLORS } from '@public/assets/colors/color';

export const Container = styled.div`
  display: flex;
  padding-top: 100px;
  gap: 80px;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
`;
export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const NameInput = styled.input`
  display: flex;
  width: 165px;
  height: 22px;
  padding: 22px 417px 22px 26px;
  align-items: center;
  border-radius: 10px;
  border: 2px solid ${COLORS.gray.gray250};
`;

export const BoxContainer = styled.div`
  display: flex;
`;

export const AgreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const AgreeCheckbox = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
