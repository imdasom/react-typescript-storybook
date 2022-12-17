import React from 'react';
import Button from './Button';
import { FiDownload } from 'react-icons/fi';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

export const ButtonTemplate = Template.bind({});
ButtonTemplate.args = {
  designType: 'primary',
  text: 'Button',
  block: false,
  disabled: false,
  size: 'medium',
  icon: <FiDownload />,
  loading: true,
};
