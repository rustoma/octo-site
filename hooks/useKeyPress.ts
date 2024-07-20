import { useEffect } from "react";

interface useKeyPressProps {
  targetKey: string;
  onKeyDown: () => void;
  disabled?: boolean;
}

const useKeyPress = ({ targetKey, onKeyDown, disabled = false }: useKeyPressProps) => {
  useEffect(() => {
    const downHandler = ({ key }: KeyboardEvent) => {
      if (key === targetKey) onKeyDown();
    };

    if (!disabled) {
      window.addEventListener("keydown", downHandler);
    } else {
      window.removeEventListener("keydown", downHandler);
    }

    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, [targetKey, onKeyDown, disabled]);

  return {};
};

export default useKeyPress;
