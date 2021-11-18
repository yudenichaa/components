import { forwardRef } from 'react';
import styles from './button.module.scss';
import classnames from 'classnames';

const cn = classnames.bind(styles);

export interface IButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button className={cn('button')} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);
