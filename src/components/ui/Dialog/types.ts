export interface IDialogProps {
  existFooter?: boolean;
  closeTitle?: string;
  confirmtitle?: string;
  handleConfirm?: () => void;
  handleClose: () => void;
}

export interface IAlertProps extends IDialogProps {
  title: string;
  subTitle?: string;
}

export type ConfirmProps = Omit<IAlertProps, 'handleConfirm'> & Pick<IDialogProps, 'handleConfirm'>;
