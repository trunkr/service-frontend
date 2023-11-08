import styled from '@emotion/styled';
import { COLORS } from '@public/assets/colors/color';

export const Container = styled.div`
  display: flex;
  padding-top: 100px;
  gap: 80px;
  flex-direction: column;
`;

export const Signup2Container = styled.div`
  display: flex;
  padding-top: 100px;
  gap: 80px;
  flex-direction: column;
  align-items: center;
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

export const ProfileImgContainer = styled.div`
  display: flex;
  gap: 60px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProfileImgItemContainer = styled.div`
  width: 25%;
`;

export const CheckboxContainer = styled.div`
  position: relative;
`;
export const ProfileImg = styled.div`
  //position: absolute;
`;
export const Checkbox = styled.div`
  left: 120px;
  top: 10px;
  position: absolute;
`;
