import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal from './Modal';
import Button from '../../Button/Button';
import useModal from './hooks/useModal';

export default {
  title: 'Component/Modal',
  component: Modal,
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const { isOpen, handleOpen, handleClose } = useModal();
  return (
    <div>
      <Button text={'모달 Step3'} onClick={handleOpen} />
      {isOpen && <Modal onClose={handleClose}>Modal Content</Modal>}
    </div>
  );
};

export const ModalStep3 = Template.bind({});
ModalStep3.args = {};
