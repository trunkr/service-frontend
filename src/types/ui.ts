import { ReactNode } from 'react';

export interface INavLinkData {
  title: string;
  to: string;
}

export type SizeType = 'small' | 'medium' | 'large';

export type ButtonColoryType = 'primary' | 'line' | 'bk';

export type CheckItemKeyType = 'id' | 'no' | 'name';

export type CheckItemType = { [uniqueKey in CheckItemKeyType]?: number | string };

export type CheckItemDataType<T> = T & {
  checked: boolean;
};

export interface IUiStore {
  loading: boolean;
  isOpenAlert: boolean;
  alertTitle: string;
  alertContent: ReactNode;
  toasts: {
    list: IToastPayload[];
    posBottom: ToastBottomPositionType;
  };
}

export interface IPagination {
  currentPage: number;
  nextPage: number;
  prevPage: number;
  totalPage: number;
  totalSize: number;
}

export type ToastBottomPositionType = 60 | 120;

export interface IToastPayload {
  id: string;
  message: string;
  posBottom?: ToastBottomPositionType;
}

export type DividerOrientationType = 'horizontal' | 'vertical';

export type DividerThicknessType = 'thin' | 'bold';

export type SizeWithPxType = `${number}px`;

export type SizeWithPercentType = `${number}%`;

export type IconType = React.FC<{
  onClick?: VoidFunction | undefined;
  className?: string | undefined;
}>;
