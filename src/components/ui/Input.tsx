import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

import "./Input.scss";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  errorMessage?: string;
  gridArea?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, errorMessage, gridArea, className, type = "text", ...restInputProps } = props;

  const classes = [
    "input",
    errorMessage ? "input--error" : "",
    className || "",
  ].filter(Boolean).join(" ");

  return (
    <div className={`input-wrapper ${className || ""}`} style={{ gridArea }}>
      {label && <label className="input__label">{label}</label>}
      <input
        type={type}
        className={classes}
        ref={ref}
        {...restInputProps}
      />
      {errorMessage && <span className="input__error">{errorMessage}</span>}
    </div>
  );
});

Input.displayName = "Input";