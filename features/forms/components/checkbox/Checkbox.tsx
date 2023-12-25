import React, { ChangeEventHandler, isValidElement, ReactElement } from "react";
import clsx from "clsx";

import { Checkmark } from "@/components/icons/Checkmark";

import "../input/input.style.scss";
import "./checkbox.style.scss";
interface CheckboxProps
  extends Omit<React.ComponentPropsWithoutRef<"input">, "className" | "size" | "pattern" | "type"> {
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label?: ReactElement | string;
  fit?: boolean;
  error?: boolean;
  hint?: ReactElement | string | false;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, label, name, disabled, onChange, fit, error, hint, ...rest }, ref) => {
    return (
      <div className={clsx("checkbox", fit && "input--fit")}>
        <label className={clsx("checkbox__label-root", disabled && "checkbox--disabled")}>
          <input
            ref={ref}
            className="checkbox--hidden"
            name={name}
            type="checkbox"
            checked={checked}
            onChange={disabled ? () => undefined : onChange}
            {...rest}
          />

          <span className={clsx("checkbox__root", checked && "checkbox--checked", error && "checkbox--error")}>
            <Checkmark className={clsx("checkbox__icon", checked && "checkbox__icon--checked")} />
          </span>

          {label && isValidElement(label) && <div className="input__hint checkbox__label">{label}</div>}
          {label && !isValidElement(label) && <p className="input__hint checkbox__label">{label}</p>}
        </label>

        {hint && isValidElement(hint) && (
          <div className={clsx("input__hint", error && "input__hint--error")}>{hint}</div>
        )}
        {hint && !isValidElement(hint) && <p className={clsx("input__hint", error && "input__hint--error")}>{hint}</p>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
