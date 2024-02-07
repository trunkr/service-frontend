import { ReactNode } from 'react';

export interface IDialogProps {
  existFooter?: boolean;
  closeTitle?: string;
  confirmtitle?: string;
  handleConfirm?: () => void;
  opacity?: number;
  handleClose: () => void;
}

export interface IAlertProps extends IDialogProps {
  title: string;
  subTitle?: string | ReactNode;
}

export type ConfirmProps = Omit<IAlertProps, 'handleConfirm'> & Pick<IDialogProps, 'handleConfirm'>;
