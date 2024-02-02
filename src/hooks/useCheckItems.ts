import { useCallback, useMemo, useState } from 'react';

interface Props<T> {
  items: T[];
  uniqueKey: keyof T;
}

function useCheckItems<T extends object>({ items, uniqueKey }: Props<T>) {
  const [checkedKeys, setCheckedKeys] = useState<T[keyof T][]>([]);

  const isChecked = useCallback(
    (data: T) => {
      return checkedKeys.includes(data[uniqueKey]);
    },
    [checkedKeys],
  );

  const handleCheck = useCallback(
    (checked: boolean, data: T) =>
      setCheckedKeys((prev) => {
        if (checked) {
          return Array.from(new Set([...prev, data[uniqueKey]]));
        }

        return prev.filter((n) => n !== data[uniqueKey]);
      }),
    [],
  );

  const isAllChecked = useMemo(() => {
    return items.length > 0 && items.every((o) => checkedKeys.includes(o[uniqueKey]));
  }, [checkedKeys, items]);

  const handleCheckAll = useCallback(
    (checked: boolean) => {
      if (checked) {
        setCheckedKeys(items.map((o) => o[uniqueKey]));
        return;
      }

      setCheckedKeys([]);
    },
    [items],
  );

  const checkedItems = useMemo(() => {
    return items.filter((o) => checkedKeys.includes(o[uniqueKey]));
  }, [items, checkedKeys]);

  const clear = useCallback(() => {
    setCheckedKeys([]);
  }, []);

  return {
    isChecked,
    handleCheck,
    isAllChecked,
    handleCheckAll,
    checkedItems,
    clear,
  };
}

export default useCheckItems;
