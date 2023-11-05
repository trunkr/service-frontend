import styled from '@emotion/styled';
import { SizeProps } from './LineButton';
import { COLORS } from '@public/assets/colors/color';

export const Button = styled.div<SizeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => (props.state == 'DISABLED' ? '2px solid #B7B7B7' : '2px solid #000000')};
  color: ${(props) => (props.state == 'DISABLED' ? COLORS.gray.gray400 : COLORS.gray.black)};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  border-radius: 60px;
  background-color: ${(props) => (props.state == 'PRESSED' ? COLORS.gray.gray250 : COLORS.gray.white)};
`;
