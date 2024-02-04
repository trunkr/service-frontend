import { createContext } from 'react';
import { ToastContextType } from './types';

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export default ToastContext;
