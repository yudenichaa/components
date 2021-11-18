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
  children: 'Hello world',
};
