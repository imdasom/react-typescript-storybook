import React, { PropsWithChildren, ReactElement } from 'react';
import styles from './Tooltip.module.scss';

type TooltipProps = PropsWithChildren<{ tooltip: ReactElement }>;

const Tooltip: React.FC<TooltipProps> = ({ children, tooltip }) => {
  return (
    <div className={styles.container}>
      <div className={styles.targetContainer}>{children}</div>

      <div className={styles.tooltipContainer}>
        <div className={styles.tooltipTail}></div>
        {tooltip}
      </div>
    </div>
  );
};

export default Tooltip;
