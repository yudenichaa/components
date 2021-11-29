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
  ({ label, leftIcon, rightIcon, variant = 'primary', ...props }, ref) => {
    return (
      <div className={cn('input', `input_variant_${variant}`)}>
        {label ? (
          <>
            <label className={cn('input__label')}>
              <input
                {...props}
                className={cn('input__field')}
                ref={ref}
                placeholder={label}
              />
              <span className={cn('input__label-text')}>{label}</span>
              <span
                className={cn('input__label-background')}
                area-hidden="true"
              >
                {label}
              </span>
            </label>
          </>
        ) : (
          <input {...props} className={cn('input__field')} ref={ref} />
        )}
      </div>
    );
  }
);
