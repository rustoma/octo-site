import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode | ReactNode[];
}

const Portal = ({ children }: PortalProps) => {
  const [portalEl, setPortalEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.createElement("div");
    document.body.appendChild(el);

    setPortalEl(el);

    return () => {
      document.body.removeChild(el);
    };
  }, []);

  return portalEl ? createPortal(children, portalEl) : null;
};

export default Portal;
