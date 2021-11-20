import { forwardRef } from 'react';
import styles from './button.module.scss';
import classnames from 'classnames/bind';

const cn = classnames.bind(styles);

type ButtonVariant =
  | 'primary'
  | 'primary-outlined'
  | 'danger'
  | 'danger-outlined';

export interface IButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ variant = 'primary', children, ...props }, ref) => {
    return (
      <button
        className={cn('button', `button_${variant}`)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
