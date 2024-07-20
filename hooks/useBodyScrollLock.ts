import { useEffect } from "react";

const useBodyScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isLocked);
  }, [isLocked]);
};

export default useBodyScrollLock;
