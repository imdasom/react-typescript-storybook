import React, { InputHTMLAttributes, ReactElement } from 'react';
import styles from './Input.module.scss';

type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'prefix' | 'suffix'
> & {
  size?: 'small' | 'default' | 'large';
  prefix?: string | ReactElement;
  suffix?: string | ReactElement;
};

const Input: React.FC<InputProps> = ({
  type,
  size = 'default',
  className,
  prefix,
  suffix,
  ...props
}) => {
  const classNames = [styles.inputContainer, styles[size], className].join(' ');
  return (
    <div className={classNames}>
      {prefix}
      <input type={type} className={styles.input} {...props} />
      {suffix}
    </div>
  );
};

export default Input;
