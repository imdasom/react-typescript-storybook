import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Button from './Button';
import { FiDownload } from 'react-icons/fi';

export default {
  title: 'Component',
  component: Button,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    block: {
      control: 'boolean',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonTemplate = Template.bind({});
ButtonTemplate.args = {
  designType: 'primary',
  text: 'Button',
  block: true,
  disabled: false,
  size: 'default',
  icon: <FiDownload />,
  loading: true,
};
