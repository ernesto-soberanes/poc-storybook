import React from 'react';

import './input.css';

export interface InputProps {
  /** Input type */
  type?: 'text' | 'password' | 'email' | 'number' | 'search';
  /** How large should the input be? */
  size?: 'small' | 'medium' | 'large';
  /** Placeholder text */
  placeholder?: string;
  /** Current value */
  value?: string;
  /** Disables the input */
  disabled?: boolean;
  /** Marks the input as invalid */
  invalid?: boolean;
  /** Change handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/** Primary UI component for text entry */
export const Input = ({
  type = 'text',
  size = 'medium',
  disabled = false,
  invalid = false,
  ...props
}: InputProps) => {
  const invalidClass = invalid ? 'storybook-input--invalid' : '';
  return (
    <input
      type={type}
      disabled={disabled}
      className={['storybook-input', `storybook-input--${size}`, invalidClass].join(' ').trim()}
      {...props}
    />
  );
};
