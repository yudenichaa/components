import { Meta, Story } from '@storybook/react';
import { Input, IInputProps } from './Input';

export default {
  component: Input,
  title: 'Lego/Atoms/Input',
} as Meta;

const Template: Story<IInputProps> = ({ children, ...args }) => (
  <Input {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const PrimaryWithPlaceholder = Template.bind({});
PrimaryWithPlaceholder.args = {
  placeholder: 'Hello world',
};

export const PrimaryWithLabel = Template.bind({});
PrimaryWithLabel.args = {
  label: 'Hello world',
};
