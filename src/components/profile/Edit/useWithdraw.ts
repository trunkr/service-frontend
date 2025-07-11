import { AuthQuery } from 'queries';
import { useCallback, useState } from 'react';

function useWithdraw() {
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);

  const handleCloseWithdrawConfirm = useCallback(() => setIsOpenConfirm(false), []);
  const handleOpenWithdrawConfirm = useCallback(() => setIsOpenConfirm(true), []);
  const { mutate: withdraw } = AuthQuery.useWithdraw();

  return { isOpenConfirm, handleCloseWithdrawConfirm, handleOpenWithdrawConfirm, withdraw };
}

export default useWithdraw;
