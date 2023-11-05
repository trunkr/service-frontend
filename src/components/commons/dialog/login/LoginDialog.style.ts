import styled from '@emotion/styled';

export const DialogContainer = styled.div`
  width: 600px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 60px;
  align-items: center;
  border-radius: 20px;
  padding-right: 30px;
  padding-right: 30px;
  box-shadow: 0px 3px 16px 0px #00000033;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 20px;
`;

export const CloseBtnContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: baseline;
`;
