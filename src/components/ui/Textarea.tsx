import { forwardRef } from 'react';
import type { TextareaHTMLAttributes } from 'react';

import './Textarea.scss';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  gridArea?: string;
  errorMessage?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, gridArea, errorMessage, ...props }, ref) => {
    return (
      <div className={`textarea-wrapper ${className || ''}`} style={{ gridArea }}>
        <textarea
          ref={ref}
          className={`textarea ${errorMessage ? 'textarea--error' : ''}`}
          {...props}
        />
        {errorMessage && <span className="textarea__error">{errorMessage}</span>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';