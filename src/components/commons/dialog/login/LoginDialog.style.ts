import styled from '@emotion/styled';
import { COLORS } from '@public/assets/colors/color';

export const DialogBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: aliceblue;
  background-color: rgba(25, 25, 27, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
`;

export const DialogContainer = styled.div`
  position: absolute;
  width: 600px;
  height: fit-content;
  display: flex;
  background-color: ${COLORS.gray.white};
  flex-direction: column;
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 60px;
  align-items: center;
  border-radius: 20px;
  padding-right: 30px;
  padding-right: 30px;
  box-shadow: 0px 3px 16px 0px #00000033;
  z-index: 300;
`;

export const RowContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const ColContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const LoginBtnContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 20px;
`;

export const CloseBtnContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: baseline;
`;
