import { forwardRef } from 'react';
import styles from './button.module.scss';
import classnames from 'classnames/bind';

const cn = classnames.bind(styles);

type ButtonVariant =
  | 'primary'
  | 'primary-outlined'
  | 'danger'
  | 'danger-outlined';

type ButtonSize = 'small' | 'normal' | 'large';

type ButtonTextAlign = 'start' | 'center' | 'end';

export interface IButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  size?: ButtonSize;
  textAlign?: ButtonTextAlign;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      variant = 'primary',
      size = 'normal',
      textAlign = 'center',
      icon,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(
          'button',
          `button_variant_${variant}`,
          `button_size_${size}`,
          `button_text-align_${textAlign}`
        )}
        ref={ref}
        {...props}
      >
        {icon && <span className={cn('button__icon')}>{icon}</span>}
        <span>{children}</span>
      </button>
    );
  }
);
