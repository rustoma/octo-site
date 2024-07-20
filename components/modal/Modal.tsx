import React, { ReactNode } from "react";

import Backdrop from "@/components/backdrop/Backdrop";
import Portal from "@/components/portal/Portal";
import useBodyScrollLock from "@/hooks/useBodyScrollLock";
import useClickOutside from "@/hooks/useClickOutside";
import useKeyPress from "@/hooks/useKeyPress";

import "./modal.style.scss";

export interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  disableClickOutside?: boolean;
  disableBodyScroll?: boolean;
  includeBackdrop?: boolean;
}

const Modal = ({
  children,
  isOpen,
  onClose,
  disableClickOutside = false,
  disableBodyScroll = false,
  includeBackdrop = true,
}: ModalProps) => {
  const ref = useClickOutside({
    callback: () => {
      if (!disableClickOutside) onClose();
    },
  });

  useBodyScrollLock(isOpen && disableBodyScroll);

  useKeyPress({
    targetKey: "Escape",
    onKeyDown: () => {
      if (!disableClickOutside) onClose();
    },
  });

  if (!isOpen) return <></>;

  return (
    <Portal>
      <div ref={ref}>
        <div className="modal-root">{children}</div>)
      </div>

      {includeBackdrop && <Backdrop />}
    </Portal>
  );
};

export default Modal;
