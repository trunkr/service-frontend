import * as styles from './LineButton.style';

interface LineButtonProps {
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
  width: '600px';
  height: '66px';
}

export const LineButton = ({ size, msg, state }: LineButtonProps) => {
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
      <styles.Button width="600px" height="66px" padding="12px, 22px, 12px, 22px" state={state}>
        {msg}
      </styles.Button>
    );
  }
};

export default LineButton;
