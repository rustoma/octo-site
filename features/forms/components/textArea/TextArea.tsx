import React, { ChangeEvent, ChangeEventHandler, isValidElement, ReactElement, useEffect, useId, useRef } from "react";
import clsx from "clsx";

import { useForwardRef } from "@/hooks/useForwardRef";

import "../input/input.style.scss";
import "./textArea.style.scss";

interface TextAreaProps extends Omit<React.ComponentPropsWithoutRef<"textarea">, "className"> {
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  value: string;
  label?: string;
  hint?: ReactElement | string | false;
  error?: boolean;
  resize?: boolean;
  autoSize?: boolean;
  maxHeight?: number;
  fit?: boolean;
}

interface UseTextAreaArgs {
  textAreaRef: React.MutableRefObject<HTMLTextAreaElement>;
  autoSize?: boolean;
  maxHeight?: number;
}

export const useTextArea = ({ textAreaRef, autoSize = false, maxHeight }: UseTextAreaArgs) => {
  useEffect(() => {
    if (autoSize) {
      setTextAreaHeight(textAreaRef, maxHeight);
    }
  }, [autoSize, maxHeight, textAreaRef]);

  const setTextAreaHeight = (textAreaRef: React.MutableRefObject<HTMLTextAreaElement>, maxHeight?: number) => {
    const textArea = textAreaRef.current;
    if (!textArea) return;

    setTimeout(() => {
      textArea.style.cssText = `height: auto;`;
      textArea.style.cssText = `height: ${
        maxHeight && maxHeight < textArea.scrollHeight ? maxHeight : textArea.scrollHeight
      }px;
      overflow-y: ${maxHeight && maxHeight < textArea.scrollHeight && "auto;"}
      `;
    }, 50);
  };

  const handleAutoSizeTextAreaChange = (
    event: ChangeEvent<HTMLTextAreaElement>,
    onChange: ChangeEventHandler<HTMLTextAreaElement>,
    textAreaRef: React.MutableRefObject<HTMLTextAreaElement>
  ) => {
    setTextAreaHeight(textAreaRef, maxHeight);
    onChange(event);
  };

  return {
    handleAutoSizeTextAreaChange,
  };
};

export const TextArea = React.forwardRef(
  (
    {
      label,
      hint,
      error = false,
      disabled,
      required,
      resize = false,
      onChange,
      autoSize = false,
      maxHeight,
      rows = 5,
      fit,
      ...rest
    }: TextAreaProps,
    forwardedRef: React.ForwardedRef<HTMLTextAreaElement>
  ) => {
    const inputId = useId();
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
    const combinedRef = useForwardRef(forwardedRef, textAreaRef);

    const { handleAutoSizeTextAreaChange } = useTextArea({
      textAreaRef: combinedRef,
      autoSize,
      maxHeight,
    });

    return (
      <div className={clsx(fit && "input--fit")}>
        {(label || required) && (
          <div className="input__label-wrapper">
            {label && (
              <label className={clsx("input__label", error && "input__label--error")} htmlFor={rest.id || inputId}>
                {label}
              </label>
            )}
            {required && <span className="input__label-required">Required</span>}
          </div>
        )}
        <div className="relative">
          <textarea
            ref={combinedRef}
            id={rest.id || inputId}
            required={required}
            disabled={disabled}
            className={clsx(
              "input text-area",
              !resize && "text-area--resize-disabled",
              autoSize && "text-area--autosize",
              error && "input--error",
              fit && "input--fit"
            )}
            style={{ maxHeight: `${maxHeight}px` }}
            onChange={(event) =>
              autoSize ? handleAutoSizeTextAreaChange(event, onChange, combinedRef) : onChange(event)
            }
            rows={rows}
            {...rest}
          />
        </div>
        {hint && isValidElement(hint) && (
          <div className={clsx("input__hint", error && "input__hint--error")}>{hint}</div>
        )}
        {hint && !isValidElement(hint) && <p className={clsx("input__hint", error && "input__hint--error")}>{hint}</p>}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
