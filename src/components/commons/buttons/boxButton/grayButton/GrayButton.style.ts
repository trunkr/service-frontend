import styled from '@emotion/styled';
import { SizeProps } from './GrayButton';
import { COLORS } from '@public/assets/colors/color';

export const Button = styled.div<SizeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.state == 'DISABLED' ? COLORS.gray.gray350 : COLORS.gray.black)};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  border-radius: 10px;
  background-color: ${COLORS.gray.gray150};
  filter: ${(props) => (props.state == 'PRESSED' ? 'brightness(0.95)' : 'brightness(100%)')};
`;
