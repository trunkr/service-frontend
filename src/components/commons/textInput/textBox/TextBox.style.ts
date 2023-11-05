import styled from '@emotion/styled';
import { TextBoxProps } from './TextBox';

export const TextBox = styled.div<TextBoxProps>`
  padding: 30px;
  width: 1000px;
  height: auto;
  border: ${(props) => (props.focus == 'FOCUS' ? '2px #1F1F1E ' : '2px #E8E8E8')};
  border-radius: 2px;
`;
