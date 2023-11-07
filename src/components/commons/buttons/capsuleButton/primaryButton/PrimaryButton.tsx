import * as styles from './PrimaryButton.style';

interface PrimaryButtonProps {
  size: 'SMALL' | 'MEDIUM' | 'LARGE';
  state: 'DEFAULT' | 'PRESSED' | 'DISABLED';
  msg: string;
}

export interface SizeProps {
  width: string;
  height: string;
  padding: string;
  state: 'DEFAULT' | 'PRESSED' | 'DISABLED';
}

export interface SmallSize extends SizeProps {
  width: '92px';
  height: '41px';
  padding: '12px, 22px, 12px, 22px';
}

export interface MediumSize extends SizeProps {
  width: '155px';
  height: '55px';
  padding: '18px, 50px, 18px, 50px';
}

export interface LargeSize extends SizeProps {
  width: '608px';

  height: '66px';
}

export const PrimaryButton = ({ size, msg, state }: PrimaryButtonProps) => {
  if (size == 'SMALL') {
    return (
      <styles.Button width="92px" height="41px" padding="12px, 22px, 12px, 22px" state={state}>
        {msg}
      </styles.Button>
    );
  } else if (size == 'MEDIUM') {
    return (
      <styles.Button width="155px" height="55px" padding="18px, 50px, 18px, 50px" state={state}>
        {msg}
      </styles.Button>
    );
  } else {
    return (
      <styles.Button width="608px" height="66px" padding="12px, 22px, 12px, 22px" state={state}>
        {msg}
      </styles.Button>
    );
  }
};

export default PrimaryButton;
