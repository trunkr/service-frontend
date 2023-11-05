import * as styles from './Toast.style';
import CloseButton from '@public/icons/System/ic_close.svg';

export interface ToastProps {
  label: string;
}

export const Toast = ({ label }: ToastProps) => {
  return (
    <styles.Toast>
      <styles.ToastText>{label}</styles.ToastText>
      <CloseButton />
    </styles.Toast>
  );
};

export default Toast;
