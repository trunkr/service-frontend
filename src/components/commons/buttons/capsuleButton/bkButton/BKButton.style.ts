import styled from '@emotion/styled';
import { SizeProps } from './BKButton';
import { COLORS } from '@public/assets/colors/color';

export const Button = styled.div<SizeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.gray.white};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  border-radius: 50px;
  background-color: ${(props) => (props.state == 'DISABLED' ? COLORS.gray.gray300 : COLORS.gray.black)};
`;
