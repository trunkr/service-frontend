type TextFocus = 'NON_FOCUS' | 'FOCUS';

type TextError = 'NON_ERROR' | 'ERROR';

type TextSize = 'SMALL' | 'MEDIUM';

import * as styles from './TextField.style';

export interface TextInputProps {
  txt?: string;
  focus: TextFocus;
  backgroundColor: string;
  error?: TextError;
  textSize: TextSize;
}

export const TextField = ({ txt, focus, backgroundColor, error, textSize }: TextInputProps) => {
  if (error == 'ERROR') {
    return (
      <styles.ErrorTextInput focus={focus} backgroundColor={backgroundColor} textSize={textSize}>
        {txt}
      </styles.ErrorTextInput>
    );
  } else {
    return (
      <styles.TextInput focus={focus} backgroundColor={backgroundColor} textSize={textSize}>
        {txt}
      </styles.TextInput>
    );
  }
};

export default TextField;
