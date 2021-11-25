import { forwardRef } from 'react';
import styles from './input.module.scss';
import classnames from 'classnames/bind';

const cn = classnames.bind(styles);

export interface IInputProps extends React.ComponentPropsWithoutRef<'input'> {
  leftIcon: React.ReactNode;
  rightIcon: React.ReactNode;
  label: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, ...props }, ref) => {
    return (
      <div className={cn('input')}>
        {label ? (
          <label className={cn('input__label')}>
            <input
              {...props}
              className={cn('input__field')}
              ref={ref}
              placeholder={label}
            />
            <span className={cn('input__label-text')}>{label}</span>
          </label>
        ) : (
          <input {...props} className={cn('input__field')} ref={ref} />
        )}
      </div>
    );
  }
);
