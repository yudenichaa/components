import { forwardRef } from 'react';
import styles from './input.module.scss';
import classnames from 'classnames/bind';

const cn = classnames.bind(styles);

type InputVariant = 'primary' | 'filled';

export interface IInputProps extends React.ComponentPropsWithoutRef<'input'> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  label?: string;
  variant?: InputVariant;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    { label, placeholder, leftIcon, rightIcon, variant = 'primary', ...props },
    ref
  ) => {
    return (
      <div className={cn('input', `input_variant_${variant}`)}>
        {leftIcon && <div className={cn('input__left-icon')}>{leftIcon}</div>}
        {label ? (
          <label className={cn('input__label')}>
            <input
              {...props}
              className={cn('input__field', {
                'input__field_without-placeholder': !placeholder,
                'input__field_with-left-icon': leftIcon,
              })}
              ref={ref}
              placeholder={placeholder || label}
            />
            <span
              className={cn('input__label-text', {
                'input__label-text_with-placeholder': placeholder,
                'input__label_with-left-icon': leftIcon,
              })}
            >
              {label}
            </span>
            <span
              className={cn('input__label-background', {
                'input__label-background_with-placeholder': placeholder,
                'input__label-background_with-left-icon': leftIcon,
              })}
              area-hidden="true"
            >
              {label}
            </span>
          </label>
        ) : (
          <input
            {...props}
            placeholder={placeholder}
            className={cn('input__field')}
            ref={ref}
          />
        )}
      </div>
    );
  }
);
