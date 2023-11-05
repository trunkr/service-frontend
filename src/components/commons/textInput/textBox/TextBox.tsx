type TextFocus = 'NON_FOCUS' | 'FOCUS';

import * as styles from './TextBox.style';

export interface TextBoxProps {
  txt?: string;
  focus: TextFocus;
}

export const TextBox = ({ txt, focus }: TextBoxProps) => {
  return <styles.TextBox focus={focus}>{txt}</styles.TextBox>;
};

export default TextBox;
