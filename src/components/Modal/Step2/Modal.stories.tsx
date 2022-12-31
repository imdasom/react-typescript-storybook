import React, { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal from './Modal';
import Button from '../../Button/Button';

export default {
  title: 'Component/Modal',
  component: Modal,
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <div>
      <Button text={'모달 Step2'} onClick={handleOpen} />
      {isOpen && <Modal onClose={handleClose}>Modal Content</Modal>}
    </div>
  );
};

export const ModalStep2 = Template.bind({});
ModalStep2.args = {};
