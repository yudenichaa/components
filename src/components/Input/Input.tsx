import { forwardRef } from 'react';
import styles from './input.module.scss';
import classnames from 'classnames/bind';

const cn = classnames.bind(styles);

type InputVariant = 'primary' | 'filled';

export interface IInputProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> {
  label?: string;
  variant?: InputVariant;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, placeholder, variant = 'primary', ...props }, ref) => {
    return (
      <div className={cn('input', `input_variant_${variant}`)}>
        {label ? (
          <label className={cn('input__label')}>
            <input
              {...props}
              className={cn('input__field', {
                'input__field_without-placeholder': !placeholder,
              })}
              ref={ref}
              placeholder={placeholder || label}
            />
            <span
              className={cn('input__label-text', {
                'input__label-text_with-placeholder': placeholder,
              })}
            >
              {label}
            </span>
            <span
              className={cn('input__label-background', {
                'input__label-background_with-placeholder': placeholder,
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
