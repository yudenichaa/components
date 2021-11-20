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
  children: 'Button text',
};

export const PrimaryOutlined = Template.bind({});
PrimaryOutlined.args = {
  children: 'Primary outlined',
  variant: 'primary-outlined',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Button text',
  variant: 'danger',
};

export const DangerOutlined = Template.bind({});
DangerOutlined.args = {
  children: 'Button text',
  variant: 'danger-outlined',
};

export const Multiline = Template.bind({});
Multiline.args = {
  children: 'First line\nSecond line',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  disabled: true,
};
