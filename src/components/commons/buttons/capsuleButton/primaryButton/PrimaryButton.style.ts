import styled from '@emotion/styled';
import { SizeProps } from './PrimaryButton';
import { COLORS } from '@public/assets/colors/color';

export const Button = styled.div<SizeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.gray.white};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  border-radius: 60px;
  background-color: ${(props) => (props.state == 'DISABLED' ? COLORS.primary.mint300 : COLORS.primary.mint600)};
  filter: ${(props) => (props.state == 'PRESSED' ? 'brightness(0.95)' : 'brightness(100%)')};
`;
