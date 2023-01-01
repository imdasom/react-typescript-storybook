import { useState } from 'react';

export interface UseModalType {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

/**
 * 훅은 클로져와 매우 깊은 관계가 있습니다
 * 커스텀 훅도 마찬가지로 클로져 매커니즘을 활용한 방식이에요
 */
const useModal = (): UseModalType => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    handleOpen,
    handleClose,
  };
};

export default useModal;
