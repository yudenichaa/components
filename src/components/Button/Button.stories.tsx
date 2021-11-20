import { Meta, Story } from '@storybook/react';
import { Button, IButtonProps } from './Button';

export default {
  component: Button,
  title: 'Lego/Atoms/Button',
} as Meta;

const Template: Story<IButtonProps> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
};

export const WithNewLine = Template.bind({});
WithNewLine.args = {
  children: 'Line 1\nLine 2',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  disabled: true,
};
