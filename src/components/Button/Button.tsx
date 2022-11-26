import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

type ButtonProps = {
  designType?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  text: string;
  block?: boolean;
  size?: 'large' | 'default' | 'small';
  icon?: JSX.Element;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const cx = classNames.bind(styles);

const Button = ({
  designType = 'default',
  text,
  block = false,
  size = 'default',
  icon,
  loading = false,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cx('button', { block, loading }, size, designType, className)}
      {...props}
    >
      {loading && <AiOutlineLoading3Quarters />}
      {icon != null && loading ? null : icon}
      {text}
    </button>
  );
};

export default Button;
