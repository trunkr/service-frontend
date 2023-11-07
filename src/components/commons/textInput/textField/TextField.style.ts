import styled from '@emotion/styled';
import { TextInputProps } from './TextField';
import { COLORS } from '@public/assets/colors/color';

export const TextInput = styled.div<TextInputProps>`
  padding: 26px 26px 22px 22px;
  width: ${(props) => (props.textSize == 'SMALL' ? '400px' : '608px')};
  height: ${(props) => (props.textSize == 'SMALL' ? '48px' : '66px')};
  border: ${(props) => (props.focus == 'FOCUS' ? '2px #1F1F1E ' : '2px #E8E8E8')};
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
`;

export const ErrorTextInput = styled.div<TextInputProps>`
  padding: 26px 26px 22px 22px;
  width: ${(props) => (props.textSize == 'SMALL' ? '400px' : '608px')};
  height: ${(props) => (props.textSize == 'SMALL' ? '48px' : '66px')};
  border: 2px ${COLORS.error.red600};
  border-radius: 10px;
`;
